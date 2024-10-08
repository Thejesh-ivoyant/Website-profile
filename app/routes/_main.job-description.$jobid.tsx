import { Await, MetaFunction, Outlet, defer, useLoaderData } from '@remix-run/react'
import JobDescription from '~/components/careers/job-description'
import { LinksFunction, LoaderFunctionArgs } from '@remix-run/node'
import LoadingTest from '~/common-components/loading-test'
import { Suspense } from 'react'
import CompanyStyle from '~/styles/company.css'
import { Popup } from '~/common-components/social-media-popup'
export const links: LinksFunction = () => [{ rel: 'stylesheet', href: CompanyStyle }]
export const meta: MetaFunction = () => {
  return [
    { title: 'Ivoyant | Jobs' },
    {
      property: 'og:title',
      content: 'Jobs Page',
    },
    {
      name: 'description',
      content: 'Ivoyant Jobs section describing all jobs offered',
    },
  ]
}
export async function loader({ params }: LoaderFunctionArgs) {
  // const productsData =  await fetchGraphQLWithParameter(productsQuery,`${params.jobid}`);
  const url = process.env.STRAPI_URL + `/api/job-descriptions/${params.jobid}?populate=%2A`
  try {
    const res = await fetch(url)
    let jsonParsed = await res.json()
    const componentRes = jsonParsed.data?.attributes
    const s1_points = componentRes.s1_points?.map((item: any) => ({
      id: item.id,
      description: item.description,
    }))
    const s2_points = componentRes.s2_points?.map((item: any) => ({
      id: item.id,
      description: item.description,
    }))
    const s3_points = componentRes.s3_points?.map((item: any) => ({
      id: item.id,
      description: item.description,
    }))
    const { Title, location, date, job_id, s1_title, s2_title, s3_title, summary } =
      jsonParsed.data?.attributes
    return defer({
      s1_points: s1_points || '',
      s2_points: s2_points || '',
      s3_points: s3_points || '',
      title: Title || '',
      location: location.data.attributes.location || '',
      date: date || '',
      job_id: job_id || '',
      s1_title: s1_title || '',
      s2_title: s2_title || '',
      s3_title: s3_title || '',
      summary: summary || '',
    })
  } catch (error: any) {
    console.error(`Error fetching data from ${url}: ${error.message}`)
  }
}
const Index = () => {
  const data = useLoaderData<typeof loader>() as any
  return (
    <>
      <Suspense fallback={<LoadingTest />}>
        <Await resolve={data}>
          <JobDescription />
          <Popup />
          <Outlet />
        </Await>
      </Suspense>
    </>
  )
}
export default Index
