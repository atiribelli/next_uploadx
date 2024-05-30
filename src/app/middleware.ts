import { NextResponse } from 'next/server'
import { match } from '@formatjs/intl-localematcher'
import { NextRequest } from 'next/server'
import Negotiator from 'negotiator'
 
const defaultLocale = 'it'
const locales = ['en', 'it']
 
// Get the preferred locale, similar to the above or using a library
function getLocale(request: NextRequest) {
  const acceptedLanguage = request.headers.get('accept-language') ?? undefined
  let headers = { 'accept-language': acceptedLanguage }
  let languages = new Negotiator({ headers }).languages()
 
  return match(languages, locales, defaultLocale)
}
 
export function middleware(request: NextRequest) {
  const { pathname } = request.nextUrl;
  const currentUser = request.cookies.get('currentUser')?.value;
  console.log(`currentUser: ${currentUser}`);
  if (!currentUser && !pathname.startsWith('/api/auth/signin') && pathname !== '/api/auth/signin') {
    return NextResponse.redirect(new URL('/api/auth/signin', request.nextUrl));
  }

  // Check if there is any supported locale in the pathname
  const pathnameHasLocale = locales.some(
    (locale) => pathname.startsWith(`/${locale}/`) || pathname === `/${locale}`
  )
 
  if (pathnameHasLocale) return
 
  // Redirect if there is no locale
  const locale = getLocale(request);
  request.nextUrl.pathname = `/${locale}${pathname}`;
  // e.g. incoming request is /products
  // The new URL is now /en-US/products
  return NextResponse.redirect(request.nextUrl);
}
 
// See "Matching Paths" below to learn more
export const config = {
    matcher: [
      /*
       * Match all request paths except for the ones starting with:
       * - api (API routes)
       * - _next/static (static files)
       * - _next/image (image optimization files)
       * - favicon.ico (favicon file)
       */
      {
        source: '/((?!api|_next/static|_next/image|favicon.ico).*)',
        missing: [
          { type: 'header', key: 'next-router-prefetch' },
          { type: 'header', key: 'purpose', value: 'prefetch' },
        ],
      },
    ],
}