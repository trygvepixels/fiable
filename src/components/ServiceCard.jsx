import Link from "next/link";

export default function ServiceCard({ service }) {
  return (
    <article className="overflow-hidden rounded-[22px] bg-white shadow-sm ring-1 ring-zinc-200">
      <div className="aspect-[16/9] w-full overflow-hidden">
        <Link href={`/services/${service.slug}`}>
          <img src={service.image?.src} alt={service.image?.alt || service.title} className="h-full w-full object-cover" />
        </Link>
      </div>
      <div className="p-6">
        <h3 className="text-xl font-semibold tracking-tight">
          <Link href={`/services/${service.slug}`} className="hover:text-[#4376BB]">
            {service.title}
          </Link>
        </h3>
        {service.summary && <p className="mt-1 text-sm text-zinc-600">{service.summary}</p>}
        <ul className="mt-4 space-y-2 text-[15px] text-zinc-800">
          {service.points?.map((p, i) => (
            <li key={i} className="flex items-start gap-2">
              <span className="mt-0.5 inline-block h-5 w-5 rounded-full bg-emerald-100 text-emerald-700 grid place-items-center">✓</span>
              <span className="leading-snug">{p}</span>
            </li>
          ))}
        </ul>
        <Link href={`/services/${service.slug}`} className="mt-4 inline-flex text-sm font-semibold text-[#4376BB] hover:text-[#2c4a7d]">
          View details
        </Link>
      </div>
    </article>
  );
}
