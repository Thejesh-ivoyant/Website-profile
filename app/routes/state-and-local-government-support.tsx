import { Await, MetaFunction, defer, useLoaderData } from '@remix-run/react'
import { fetchGraphQL } from '~/graphql/fetchGraphQl'
import {  govQuery } from '~/graphql/queries'
import ContactUs from '~/common-components/contactUs'
import Hero from '~/components/about-us/Hero'
import { Popup } from '~/common-components/social-media-popup'
import { Suspense } from 'react'
import LoadingTest from '~/common-components/loading-test'
import GovStyle from '~/styles/gov.css'
import GovCardContainer from '~/components/state-and-local-government-support/gov-card-container'
import GovSection2 from '~/components/state-and-local-government-support/section2'
import { LinksFunction } from '@remix-run/node'
import GovSection5 from '~/components/state-and-local-government-support/section5'
import GovSection4 from '~/components/state-and-local-government-support/section4'
import GovSection3 from '~/components/state-and-local-government-support/section3'
export const links: LinksFunction = () => [{ rel: 'stylesheet', href: GovStyle }]

export const meta: MetaFunction = ({ data }: { data: any }) => {
  return [
    { title: `Ivoyant | ${data.govPage?.heroTitle}` },
    {
      property: 'og:title',
      content: 'Government Services',
    },
    {
      name: 'description',
      content: 'Ivoyants Homepage',
    },
  ]
}
export async function loader() {
  try {
    
    return defer({
      govPage: (await fetchGraphQL(govQuery))?.data?.govPage?.data?.attributes,
    })
  } catch (error) {
    console.warn('Error fetching data from contact API:', error)
    return {}
  }
}

const Index = () => {
  const data = useLoaderData<typeof loader>() as any
  return (
    <>
      <Suspense fallback={<LoadingTest />}>
        <Await resolve={data}>
          <Hero />
          <GovCardContainer />
          <GovSection2 />
          <GovSection3 />
          <GovSection4 />
          <GovSection5 />
          <ContactUs />
          <Popup />
        </Await>
      </Suspense>
    </>
  )
}
export default Index
