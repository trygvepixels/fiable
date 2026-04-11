/**
 * Content Sanitization Utility
 * Cleans up external CMS content by removing citations, garbled text, and applying Tailwind styling
 */

const KEYWORD_LINK_MAP = [
  { keywords: ["waterproofing in lucknow", "best waterproofing company", "waterproofing contractors"], link: "/services" },
  { keywords: ["structural rehabilitation", "retrofitting services", "building strengthening"], link: "/services" },
  { keywords: ["lda approval", "lda sanction", "building bylaws lucknow"], link: "/blogs/lucknow-real-estate-2026-why-lda-approval-costs-are-changing-and-how-to-prepare" },
  { keywords: ["industrial flooring", "epoxy flooring", "pu flooring"], link: "/services" },
  { keywords: ["project gallery", "our projects", "fiable projects"], link: "/projects" },
  { keywords: ["price calculator", "estimate cost", "construction cost"], link: "/price-calculator" }
];

/**
 * Inject internal links for specific keywords
 */
export function injectInternalLinks(content) {
  if (!content) return "";
  
  let linkedContent = content;
  
  // Sort keywords by length descending to prevent partial matches (e.g. "architect" vs "architects in lucknow")
  const allKeywords = KEYWORD_LINK_MAP.flatMap(item => 
    item.keywords.map(kw => ({ kw, link: item.link }))
  ).sort((a, b) => b.kw.length - a.kw.length);

  allKeywords.forEach(({ kw, link }) => {
    // Only link if not already inside an <a> tag
    // This regex is a simple heuristic: match keyword if not preceded by <a or followed by </a>
    // For more robustness with HTML, a DOM parser would be better, but this works for most blog structures
    const regex = new RegExp(`(?<!<a[^>]*>)\\b(${kw})\\b(?!<\\/a>)`, "gi");
    
    // We only link the first occurrence to avoid over-optimization/spamminess
    let count = 0;
    linkedContent = linkedContent.replace(regex, (match) => {
      if (count === 0) {
        count++;
        return `<a href="${link}" class="text-blue-600 hover:text-blue-800 underline transition-colors font-medium">${match}</a>`;
      }
      return match;
    });
  });

  return linkedContent;
}

/**
 * Remove citation references like [2], [5], [2][5], etc.
 */
export function removeCitations(content) {
  if (!content) return "";

  // Remove all citation patterns like [1], [2][5], [123], etc.
  return content.replace(/\[\d+\](\[\d+\])*/g, "");
}

/**
 * Remove garbled text patterns
 */
export function removeGarbledText(content) {
  if (!content) return "";

  let cleaned = content;

  // Remove patterns like "--- or -- or ------ n time"
  cleaned = cleaned.replace(/[-–—]{2,}(\s*(or|n)\s*[-–—]{2,})*/g, "");

  // Remove excessive whitespace
  cleaned = cleaned.replace(/\s{3,}/g, " ");

  // Remove standalone orphaned words that look garbled
  cleaned = cleaned.replace(/\s+n\s+time\s*/gi, " ");

  return cleaned.trim();
}

/**
 * Add Tailwind CSS classes to HTML elements
 */
export function addTailwindStyling(html) {
  if (!html) return "";

  let styled = html;

  // Style headings
  styled = styled.replace(
    /<h1([^>]*)>/gi,
    '<h1$1 class="text-4xl font-bold text-gray-900 mt-8 mb-4 special-font">'
  );
  styled = styled.replace(
    /<h2([^>]*)>/gi,
    '<h2$1 class="text-3xl font-semibold text-gray-800 mt-6 mb-3 special-font">'
  );
  styled = styled.replace(
    /<h3([^>]*)>/gi,
    '<h3$1 class="text-2xl font-semibold text-gray-800 mt-5 mb-3">'
  );
  styled = styled.replace(
    /<h4([^>]*)>/gi,
    '<h4$1 class="text-xl font-semibold text-gray-700 mt-4 mb-2">'
  );
  styled = styled.replace(
    /<h5([^>]*)>/gi,
    '<h5$1 class="text-lg font-semibold text-gray-700 mt-3 mb-2">'
  );
  styled = styled.replace(
    /<h6([^>]*)>/gi,
    '<h6$1 class="text-base font-semibold text-gray-700 mt-3 mb-2">'
  );

  // Style paragraphs
  styled = styled.replace(
    /<p([^>]*)>/gi,
    '<p$1 class="text-gray-700 leading-relaxed mb-4 text-[16px]">'
  );

  // Style unordered lists
  styled = styled.replace(
    /<ul([^>]*)>/gi,
    '<ul$1 class="list-disc list-inside space-y-2 mb-4 ml-4 text-gray-700">'
  );

  // Style ordered lists
  styled = styled.replace(
    /<ol([^>]*)>/gi,
    '<ol$1 class="list-decimal list-inside space-y-2 mb-4 ml-4 text-gray-700">'
  );

  // Style list items
  styled = styled.replace(/<li([^>]*)>/gi, '<li$1 class="mb-1 text-gray-700">');

  // Style links
  styled = styled.replace(
    /<a([^>]*)>/gi,
    '<a$1 class="text-blue-600 hover:text-blue-800 underline transition-colors">'
  );

  // Style blockquotes
  styled = styled.replace(
    /<blockquote([^>]*)>/gi,
    '<blockquote$1 class="border-l-4 border-blue-500 pl-4 italic text-gray-600 my-4">'
  );

  // Style code blocks
  styled = styled.replace(
    /<pre([^>]*)>/gi,
    '<pre$1 class="bg-gray-100 rounded-lg p-4 overflow-x-auto mb-4">'
  );
  styled = styled.replace(
    /<code([^>]*)>/gi,
    '<code$1 class="bg-gray-100 text-red-600 px-1 py-0.5 rounded text-sm font-mono">'
  );

  // Style tables
  styled = styled.replace(
    /<table([^>]*)>/gi,
    '<table$1 class="min-w-full divide-y divide-gray-200 mb-4 border border-gray-300">'
  );
  styled = styled.replace(/<thead([^>]*)>/gi, '<thead$1 class="bg-gray-50">');
  styled = styled.replace(
    /<th([^>]*)>/gi,
    '<th$1 class="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">'
  );
  styled = styled.replace(
    /<td([^>]*)>/gi,
    '<td$1 class="px-6 py-4 whitespace-nowrap text-sm text-gray-700">'
  );

  // Style images
  styled = styled.replace(
    /<img([^>]*)>/gi,
    '<img$1 class="rounded-lg my-4 max-w-full h-auto shadow-md">'
  );

  // Style strong/bold
  styled = styled.replace(
    /<strong([^>]*)>/gi,
    '<strong$1 class="font-bold text-gray-900">'
  );
  styled = styled.replace(
    /<b([^>]*)>/gi,
    '<b$1 class="font-bold text-gray-900">'
  );

  // Style emphasis/italic
  styled = styled.replace(
    /<em([^>]*)>/gi,
    '<em$1 class="italic text-gray-700">'
  );
  styled = styled.replace(/<i([^>]*)>/gi, '<i$1 class="italic text-gray-700">');

  return styled;
}

/**
 * Remove dangerous/unwanted HTML elements
 */
export function sanitizeHtml(html) {
  if (!html) return "";

  let safe = html;

  // Remove script tags
  safe = safe.replace(/<script[\s\S]*?<\/script>/gi, "");

  // Remove iframe tags
  safe = safe.replace(/<iframe[\s\S]*?<\/iframe>/gi, "");

  // Remove onclick and other event handlers
  safe = safe.replace(/\s*on\w+\s*=\s*["'][^"']*["']/gi, "");

  // Remove style attributes (we use Tailwind instead)
  safe = safe.replace(/\s*style\s*=\s*["'][^"']*["']/gi, "");

  return safe;
}

/**
 * Convert markdown-style bold (**text**) to HTML if present
 */
export function convertMarkdownBold(content) {
  if (!content) return content;
  return content.replace(/\*\*([^*]+)\*\*/g, "<strong>$1</strong>");
}

/**
 * Main sanitization function - combines all cleaning operations
 */
export function sanitizeBlogContent(content) {
  if (!content) return "";

  let cleaned = content;

  // 1. Remove dangerous HTML
  cleaned = sanitizeHtml(cleaned);

  // 2. Remove citations
  cleaned = removeCitations(cleaned);

  // 3. Remove garbled text
  cleaned = removeGarbledText(cleaned);

  // 4. Convert markdown bold **text** to <strong>text</strong>
  cleaned = convertMarkdownBold(cleaned);

  // 5. Add Tailwind styling
  cleaned = addTailwindStyling(cleaned);

  // 6. Inject Internal Links (Conversion Bridge)
  cleaned = injectInternalLinks(cleaned);

  // 7. Clean up whitespace
  cleaned = cleaned.replace(/\s+/g, " ");
  cleaned = cleaned.replace(/>\s+</g, "><");

  return cleaned.trim();
}
