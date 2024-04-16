import { Link } from '@remix-run/react'
import { useEffect, useState } from 'react'
import { strapiUrl } from '~/utils/urls'
const API_URL = `${strapiUrl}/api/section7s?populate=%2A`
const Consultation = () => {
  const [tagline, setTagline] = useState('')
  const [bgImageUrl, setImageUrl] = useState('')
  useEffect(() => {
    fetch(API_URL)
      .then((response) => response.json())
      .then(({ data }) => {
        const { ContactUsDescription, section7bg } = data[0].attributes
        setTagline(ContactUsDescription)
        setImageUrl(section7bg.data[0].attributes.url)
      })
      .catch((error) => {
        console.error('Error fetching data from API:', error)
      })
  }, [])
  const gradientStyle = {
    background: `linear-gradient(180deg, rgba(0, 0, 0, 0.60) 0%, rgba(0, 0, 0, 0.60) 66.95%, rgba(0, 0, 0, 0.00) 152.46%), url(${bgImageUrl}) lightgray 50% /cover no-repeat`,
  }
  return (
    <div role="complementary" className="consulation-container" style={gradientStyle}>
      <div className="consulation-tagline">{tagline}</div>
      <div className="flex items-center right-0 ">
        <Link role="link" to="/contact-us" prefetch="intent">
          <button role="button" aria-label="Click on the Button to navigate to Ivoyant's Contact us page" className="btn-white">GRAB A CONSULTATION</button>
        </Link>
      </div>
    </div>
  )
}
export default Consultation
