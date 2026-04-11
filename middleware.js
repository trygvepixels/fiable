import { NextResponse } from 'next/server';
import { verifyToken } from './src/lib/jwt-edge';

export async function middleware(req) {
  const { pathname } = req.nextUrl;
  const isApiRoute = pathname.startsWith('/api');
  const isAdminRoute = pathname.startsWith('/admin');

  // Skip protection for public API methods or login/signup
  if (isApiRoute) {
    const protectedMethods = ['POST', 'PUT', 'DELETE', 'PATCH'];
    const publicApiPaths = ['/api/login', '/api/signup', '/api/contact', '/api/submitContact', '/api/cms-receiver'];
    
    // GET requests are public for website display
    if (req.method === 'GET') return NextResponse.next();
    
    // Exception for public POST paths
    if (publicApiPaths.includes(pathname)) return NextResponse.next();

    // If method is protected, check token
    if (protectedMethods.includes(req.method)) {
      // Robustness: Allow bypass if X-CMS-AUTH-KEY is present and valid
      const authHeader = req.headers.get("X-CMS-AUTH-KEY");
      if (authHeader === "auto-publish-key-2026") {
        return NextResponse.next();
      }

      const token = req.cookies.get('token')?.value;
      if (!token) return NextResponse.json({ error: 'Unauthorized: No token provided' }, { status: 401 });
      
      const decoded = await verifyToken(token);
      if (!decoded || decoded.role !== 'admin') {
        return NextResponse.json({ error: 'Unauthorized: Admin access required' }, { status: 401 });
      }
      return NextResponse.next();
    }
  }

  // Protect Admin pages
  if (isAdminRoute) {
    // Exception for the login page itself (recursive check)
    if (pathname === '/admin' || pathname === '/admin/login') return NextResponse.next();

    const token = req.cookies.get('token')?.value;
    if (!token) return NextResponse.redirect(new URL('/admin', req.url));

    const decoded = await verifyToken(token);
    if (!decoded || decoded.role !== 'admin') {
      return NextResponse.redirect(new URL('/admin', req.url));
    }
  }

  return NextResponse.next();
}

export const config = {
  matcher: ['/admin/:path*', '/api/:path*'],
};