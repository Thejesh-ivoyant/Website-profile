import { Suspense } from 'react'
import Consultation from '~/components/Homepage/consultation'
import { Await, MetaFunction, Outlet, useLoaderData } from '@remix-run/react'
import { LinksFunction, defer } from '@remix-run/node'
import { fetchGraphQL } from '~/graphql/fetchGraphQl'
import { blogQuery, caseQuery, categories, tagsQuery } from '~/graphql/queries'
import BlogCardContainer from '~/components/Resources/blogs/blogCard-container'

import LoadingTest from '~/common-components/loading-test'
import { Daum } from '~/interfaces/CategoriesType'
import ResourcesStyle from '~/styles/resources.css'
import Hero from '~/common-components/Resources-hero'
import Container from '~/components/Resources/case-study/caseStudyContainer'
import { Popup } from '~/common-components/social-media-popup'
export const links: LinksFunction = () => [{ rel: 'stylesheet', href: ResourcesStyle }]
export const meta: MetaFunction = ({ data }: { data: any }) => {
  return [
    { title: `Ivoyant | ${data.heroTitle}` },
    {
      property: 'casestudy:title',
      content: 'case study ',
    },
    {
      name: 'description',
      content: 'Ivoyant case study ',
    },
  ]
}
export async function loader() {
  try {
    const caseGql = await fetchGraphQL(caseQuery)

    const [tagslist, categoryList] = await Promise.all([
      await fetchGraphQL(tagsQuery),
      await fetchGraphQL(categories),
    ])

    const tagsData = tagslist?.data?.topicTags?.data as Daum[]
    const categoryListData = categoryList?.data?.categories.data as Daum[]
    const tags = tagsData.map((daum) => ({
      value: daum.attributes.name,
      label: daum.attributes.name,
    }))
    const categoriesList = categoryListData.map((daum) => ({
      value: daum.attributes.name,
      label: daum.attributes.name,
    }))

    const res = await fetch(process.env.STRAPI_URL + '/api/case-study-home?populate=%2A')

    let jsonParsed = await res.json()
    const { heroTitle, heroDescription, s2_title } = jsonParsed.data?.attributes ?? ''

    const caseData = caseGql.data?.caseStudies.data?.map((item: any) => ({
      id: item.id,
      title: item.attributes.heroTitle,
      description1: item.attributes.heroDescription,
      maxReadTime: item.attributes.maxReadTime,
      bannerImage: {
        name: item.attributes.heroBgImage.data?.attributes.name ?? '',
        url: item.attributes.heroBgImage.data?.attributes.url ?? '',
      },
      author: {
        name: item.attributes.author.data?.attributes.name,
        avatar: item.attributes.author.data?.attributes.avatar.data?.attributes?.url,
      },
      topic_tags: item.attributes.topic_tags.data?.map((tag: any) => tag.attributes.name) ?? [],
      category: {
        name: item.attributes.category.data?.attributes.name,
      },
    }))

    return defer({
      heroBgImageURl: jsonParsed.data?.attributes.heroBgImage.data?.attributes.url,
      heroTitle,
      heroDescription,
      s2_title,
      caseData: caseData,
      tags,
      categoriesList,
    })
  } catch (error) {
    console.error('Error fetching data:', error)
    throw error
  }
}
const Index = () => {
  const data = useLoaderData<typeof loader>() as any

  return (
    <>
      <Suspense fallback={<LoadingTest />}>
        <Await resolve={data.heroBgImageURl}>
          <Hero
            heroBgImageUrl={data?.heroBgImageURl}
            heroTitle={data?.heroTitle}
            heroDescription={data?.heroDescription}
          />

          <Container />
          <Consultation />
          <Popup />
          <Outlet />
        </Await>
      </Suspense>
    </>
  )
}
export default Index
