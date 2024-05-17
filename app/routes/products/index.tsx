import Tabs from '~/components/products/Tabs'
import { Await, defer, useLoaderData } from '@remix-run/react'
import { fetchGraphQL } from '~/graphql/fetchGraphQl'
import { productsQuery } from '~/graphql/queries'
import Hero from '~/components/products/Hero'
import ContactUs from '~/common-components/contactUs'
import { Technologies } from '~/components/products/technologies'
import { Attributes } from '~/interfaces/ProductsPage'
import ProductStyle from '~/styles/Products.css'
import { LinksFunction } from '@remix-run/node'
import Consultation from '~/components/Homepage/consultation'
import WhyChooseUs from '~/components/Homepage/why-choose-us'
import { Popup } from '~/common-components/social-media-popup'
import { Suspense } from 'react'
import LoadingTest from '~/common-components/loading-test'
export const links: LinksFunction = () => [{ rel: 'stylesheet', href: ProductStyle }]
export const meta: MetaFunction<typeof loader> = ({ data }) => {
  return [
    { title: (data?.name as string) || 'Ivoyant | Products' },
    {
      name: 'description',
      content: data?.heroDescription,
    },
  ]
}
export const loader = async ({ request }: LoaderFunctionArgs) => {
  let { searchParams } = new URL(request.url)
  let name = searchParams.get('name')
  const productsData = await fetchGraphQL(productsQuery)
  const attributes = productsData.data?.product?.data?.attributes as Attributes
  const carousel = attributes?.carousel || []
  const tabContents = attributes?.TabContents || []
  const sortedCarousels = [...carousel]
  const sortedTabContents = [...tabContents]
  const index = sortedCarousels?.findIndex(
    (item) => item.name?.toLowerCase().trim() === name?.toLowerCase().trim()
  )
  const tabIndex = sortedTabContents?.findIndex(
    (item) => item.caption?.toLowerCase().trim() === name?.toLowerCase().trim()
  )
  if (name && index !== -1) {
    const matchingItem = sortedCarousels.splice(index, 1)[0]
    sortedCarousels.unshift(matchingItem)
  }
  if (name && tabIndex !== -1) {
    const matchingItem = sortedTabContents.splice(index, 1)[0]
    sortedTabContents.unshift(matchingItem)
  }
  name = name?.replace(/\b\w/g, (c) => c.toUpperCase()) ?? name
  return defer({ productsResponse: productsData, sortedCarousels, sortedTabContents, name })
}
export default function Index() {
  const data = useLoaderData() as any
  const attributes = data?.productsResponse?.data?.product?.data?.attributes as Attributes
  return (
    <>
      <Suspense fallback={<LoadingTest />}>
        <Await resolve={data}>
          <Hero carousel={data?.sortedCarousels} />
          <Consultation />
          <Tabs tabContents={data?.sortedTabContents} />
          <WhyChooseUs
            pairs={attributes?.pairs || []}
            title={attributes?.section_4_title as string}
            description={attributes?.section_4_description as string}
          />
          <Technologies title={attributes?.techTitle} pairs={attributes?.technologies} />
          <ContactUs />
          <Popup />
        </Await>
      </Suspense>
    </>
  )
}
