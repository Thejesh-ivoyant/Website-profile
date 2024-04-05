import ContactCard from '~/components/contact-us/contact-card'
import ContactUs from '~/common-components/contactUs'
import { MetaFunction, useLocation } from '@remix-run/react'
import { Popup } from '~/common-components/social-media-popup'
import { useEffect } from 'react'
export const meta: MetaFunction = () => {
  return [
    { title: 'Ivoyant | contact us' },
    {
      property: 'og:title',
      content: 'About Ivoyant',
    },
    {
      name: 'description',
      content: 'Your achievement reflects our performance',
    },
  ]
}
export default function Index() {
  const location = useLocation()
  useEffect(() => {
    window.scrollTo(0, 0)
  }, [location])

  return (
    <>
      <div className="mt-16">
        <ContactUs />
      </div>
      <ContactCard />
      <Popup />
    </>
  )
}
