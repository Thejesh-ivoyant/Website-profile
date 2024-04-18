
import { Await, MetaFunction, defer, useLoaderData } from '@remix-run/react'
import { fetchGraphQL } from '~/graphql/fetchGraphQl'
import { aboutUsQuery, homeQuery, topBlogQuery } from '~/graphql/queries'
import ContactUs from '~/common-components/contactUs'
import { Attributes } from '~/interfaces/Homepage'
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
    { title: `Ivoyant | ${data.homePage?.homepage?.data?.attributes.heroText}` },
    {
      property: 'og:title',
      content: 'Home Page',
    },
    {
      name: 'description',
      content: 'Ivoyants Homepage',
    },
  ]
}
export async function loader() {
  try {
    const homeGql = await fetchGraphQL(homeQuery)
    const blogGql = await fetchGraphQL(topBlogQuery)
    const blogData = blogGql.data?.blogs.data?.map((item: any) => ({
      id: item.id,
      title: item.attributes.title,
      date: item.attributes.date,
      maxReadTime: item.attributes.maxReadTime,
      bannerImage: {
        name: item.attributes.bannerImage.data?.attributes.name ?? '',
        url: item.attributes.bannerImage.data?.attributes.url ?? '',
      },
      author: {
        name: item.attributes.author.data?.attributes.name,
      },
      topic_tags: item.attributes.topic_tags.data?.map((tag: any) => tag.attributes.name) ?? [],
      category: {
        name: item.attributes.category.data?.attributes.name,
      },
    }))
    return defer({
      aboutUsData: await fetchGraphQL(aboutUsQuery),
      blogData: blogData,
      homePage: homeGql.data,
    })
  } catch (error) {
    console.warn('Error fetching data from contact API:', error)
    return {}
  }
}

const Index = () => {
  const data = useLoaderData<typeof loader>() as any

  const attributes = data?.homePage?.homepage?.data?.attributes as Attributes
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
