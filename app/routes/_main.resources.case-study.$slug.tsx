import { Await, MetaFunction, useLoaderData } from '@remix-run/react'
import Section2 from '~/components/Resources/case-study/slug/Section2'
import Section3 from '~/components/Resources/case-study/slug/Section3'
import Hero from '~/components/Resources/case-study/slug/hero'
import { case_study_query } from '~/graphql/queries'
import { fetchGraphQL } from '~/graphql/fetchGraphQl'
import Section4 from '~/components/Resources/case-study/slug/Section4'
import { LinksFunction, LoaderFunctionArgs, defer } from '@remix-run/node'
import Section5 from '~/components/Resources/case-study/slug/section5'
import Section6 from '~/components/Resources/case-study/slug/Section6'
import { generateDynamicQuery } from '~/utils/parameterized-gql'
import { Features } from '~/components/Resources/case-study/slug/key-features'
import CaseStyle from '~/styles/CaseStudySlug.css'
import Consultation from '~/components/Homepage/consultation'
import { Popup } from '~/common-components/social-media-popup'
import { Suspense } from 'react'
import LoadingTest from '~/common-components/loading-test'
export const links: LinksFunction = () => [{ rel: 'stylesheet', href: CaseStyle }]
export async function loader({ params }: LoaderFunctionArgs) {
  const dynamicQuery = generateDynamicQuery(case_study_query, ['id'])
  const interpolatedQuery = dynamicQuery(params.slug)
  const [data] = await Promise.all([await fetchGraphQL(interpolatedQuery)])
  return defer({
    data,
  })
}
export const meta: MetaFunction<typeof loader> = ({ data }: { data: any }) => {
  const attributes = data?.data.data?.caseStudies?.data[0].attributes
  return [
    { title: ('Ivoyant | ' + attributes?.heroTitle) as string },
    {
      name: 'description',
      content: data?.heroDescription as string,
    },
  ]
}
const sample = () => {
  const data = useLoaderData() as any
  const attributes = data?.data.data?.caseStudies?.data[0].attributes
  return (
    <>
      <Suspense fallback={<LoadingTest />}>
        <Await resolve={data}>
          <Hero data={attributes} />
          <Section2 data={attributes} />
          <Section3 data={attributes} />
          <Section4 data={attributes} />
          <Features data={attributes} />
          <Section5 data={attributes} />
          <Section6 data={attributes} />
          <Consultation />
          <Popup />
        </Await>
      </Suspense>
    </>
  )
}
export default sample
