import { MetaFunction, useRouteLoaderData } from '@remix-run/react'
import Consultation from '~/components/Homepage/consultation'
import { Popup } from '~/common-components/social-media-popup'
import styles from '~/styles/Sitemap.css'
import Sitemaps from '~/common-components/Sitemap'
export const links: LinksFunction = () => [{ rel: 'stylesheet', href: styles }]

export const meta: MetaFunction<any> = ({ data }) => {
  return [
    { title: 'Ivoyant | Sitemap' as string },
    {
      name: 'description',
      content: "Sitemap for the Ivoyant's website",
    },
  ]
}
const sample = () => {
  const data = useRouteLoaderData('root') as any
  const attributes = data.navGraphql?.data?.navbar?.data?.attributes as Attributes

  return (
    <>
      <Sitemaps attributes={attributes} />
      <Consultation />
      <Popup />
    </>
  )
}
export default sample
