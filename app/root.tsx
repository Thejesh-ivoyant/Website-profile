import { type LinksFunction } from '@remix-run/node'
import stylesheet from '~/tailwind.css'

import globalstyle from '~/styles/main.css'
import Navstyle from '~/common-components/nav.css'
import Sidebarstyle from '~/common-components/sidebar.css'
import {
  Await,
  Links,
  LiveReload,
  Meta,
  Outlet,
  Scripts,
  ScrollRestoration,
  defer,
  useLoaderData,
} from '@remix-run/react';
import ClarityScript from './clarityScript'
import Nav from './common-components/nav'
import Footer from './common-components/footer'
import { fetchGraphQL } from './graphql/fetchGraphQl'
import { navQuery } from './graphql/queries'
import ScrollToTopIcon from './ScrollToTop'
import LoadingTest from './common-components/loading-test'
import { Suspense } from 'react'
import errorStyles from './styles/error.css'
import { NonFlashOfWrongThemeEls, ThemeProvider, useTheme } from '~/utils/theme-provider';
import clsx from 'clsx';
import { getThemeSession } from './utils/theme.server'

export const links: LinksFunction = () => [
  { rel: 'preconnect', href: 'https://fonts.gstatic.com', crossOrigin: 'anonymous' },
  { rel: 'stylesheet', href: stylesheet },
  { rel: 'stylesheet', href: globalstyle },
  { rel: 'stylesheet', href: Navstyle },
  { rel: 'stylesheet', href: Sidebarstyle },
  { rel: 'stylesheet', href: errorStyles },
]
export function scrollToSection(section: string) {
  const targetElement = document.getElementById(section)
  if (targetElement) {
    const scrollableParent = targetElement.closest('scrollable-element')
    if (scrollableParent) {
      // Declare scrollPosition here, within the if block
      const scrollPosition = targetElement.offsetTop - 94
      scrollableParent.scrollTo({
        top: scrollPosition,
        behavior: 'smooth',
      })
    } else {
      // Declare scrollPosition here, within the else block
      const scrollPosition = targetElement.offsetTop - 94
      window.scrollTo({
        top: scrollPosition,
        behavior: 'smooth',
      })
    }
  } else {
    console.error(`Element with ID '${section}' not found.`)
  }
}

export async function loader({request}) {
  const themeSession = await getThemeSession(request);
  return defer(
    {
      navGraphql: await fetchGraphQL(navQuery),
      ENV: {
        STRAPI_URL: process.env.STRAPI_URL,
      },
      theme: themeSession.getTheme()
    },
    {
      headers: { 'Cache-Control': 'public, s-maxage=300' },
    }
  )
}
export function App() {
  const [theme] = useTheme();
  const config = useLoaderData<typeof loader>()
  return (
    <html lang="en" className={clsx(theme) }>
      <head>
        <ClarityScript />
        <NonFlashOfWrongThemeEls ssrTheme={Boolean(config.theme)} />
        <meta charSet="utf-8" />
        <meta name="viewport" content="width=device-width,initial-scale=1" />
        <meta name="description" content="Crafting Customer-Driven Digital Experiences" />
        <Meta />
        <Links />
      </head>

      <body className="lg:overscroll-y-none overscroll-y-auto">
        <Suspense fallback={<LoadingTest />}>
          <Await resolve={config}>
            {(resolvedValue) => (
              <>
                <a
                  href="/"
                  className="skip-main-cnt"
                  tabIndex={0}
                  aria-label="Navigate to main content"
                  title="Skip to main content"
                >
                  Skip to main content
                </a>
                <Nav />
                <LoadingTest />
                <Outlet context={config.ENV} />
                <ScrollRestoration />
                <Scripts />
                <LiveReload />
                <Footer />
                <ScrollToTopIcon />
              </>
            )}
          </Await>
        </Suspense>
      </body>
    </html>
  )
}
export default function AppWithProviders() {
  const data = useLoaderData<typeof loader>()
  return (
    <ThemeProvider specifiedTheme={data.theme}>
      <App />
    </ThemeProvider>
  );
}