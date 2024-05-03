import { Form, Link } from '@remix-run/react'
import { Attributes } from '~/interfaces/NavType'
import LineSitemap from '~/components/icons/line-sitemap'
import { useState } from 'react'
import { success, errorMessage } from '~/utils/notifications'
import { emailPattern } from '~/DTO/form-schemas/patterns'
import { Modal } from 'antd'
const Sitemaps = ({ attributes }: { attributes: Attributes }) => {
const [phoneNumber, setPhoneNumber] = useState('')
  const [phoneerror, setPhoneError] = useState('')
  const [personname, setPersonName] = useState('')
  const [nameerror, setNameError] = useState('')
  const [email, setEmail] = useState('')
  const [emailerror, setEmailError] = useState('')
 const [open, setOpen] = useState(false)
 
  const [btnLoading, setBtnLoading] = useState<boolean>(false)
  const [download, setDownload] = useState<string>('')
  const handlePhoneNumberChange = (e: any) => {
    const phone = e.target.value
    setPhoneNumber(phone)
    setPhoneError('')
    const phoneRegex = /^(?:[0-9]{3})[-. ]*(?:[0-9]{3})[-. ]*(?:[0-9]{4})(?: *[x/#]{1}[0-9]+)?$/
    if (!phone) {
      setPhoneError('Phone number is required')
    } else if (!phoneRegex.test(phone)) {
      setPhoneError('Invalid phone number format')
    }
  }
  const handleEmailChange = (e: any) => {
    const emailValue = e.target.value.toLowerCase()
    setEmail(emailValue)
    // Reset email error
    setEmailError('')
    // Validate email
    if (!emailValue.trim()) {
      setEmailError('Email is required')
    } else if (!emailPattern.test(emailValue)) {
      setEmailError('Invalid email address')
    }
  }
   const showModal = (url: any) => {
    setDownload(url)
    setOpen(true)
  }
  const handleNameChange = (e: any) => {
    const personName = e.target.value
    setPersonName(personName)
    setNameError('')
    const noNumbersPattern = /\d/
    const noSpecialCharsPattern = /[^\w\s]/
    const noConsecutiveCharsPattern = /(\w)\1{3}/

    if (!personName) {
      setNameError('Full name is required')
    } else if (personName.length < 3) {
      setNameError('Name must be at least 3 characters long')
    } else if (personName.length > 35) {
      setNameError('Name must be less than 36 characters')
    } else if (noNumbersPattern.test(personName)) {
      setNameError('Name cannot contain numbers')
    } else if (noSpecialCharsPattern.test(personName)) {
      setNameError('Name cannot contain special characters')
    } else if (noConsecutiveCharsPattern.test(personName)) {
      setNameError('Name cannot contain repeating consecutive characters four times')
    }
  }
  const handleDownload = () => {
    const PitchDeskUrl = download
    setOpen(false)
    //success mesage here
    window.open(PitchDeskUrl, '_blank')
  }
const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    try {
      setBtnLoading(true)
      event.preventDefault()
      const formData = new FormData(event.currentTarget)
      formData.append('action', 'pitchdeck')
      formData.forEach((value, key) => {})
      const response = await fetch(
        'https://forms.hubspot.com/uploads/form/v2/39872873/c4e42171-a7d2-4ce1-b0dc-c7adeba7c46d',
        {
          method: 'POST',
          body: formData,
        }
      )
      if (response.ok) {
        success('Thank you for showing interest in us!', 2)
        setPersonName('')
        setEmail('')
        setPhoneNumber('')
        handleDownload()
      } else {
        errorMessage('Form submission failed', 3)
      }
    } catch (error) {
      errorMessage('Error occured, please retry', 3)
    }
    setBtnLoading(false)
  }
  const handleCancel = () => {
    setOpen(false)
  }
  return (
    <>
    <Modal open={open} title="Download PitchDeck" onCancel={handleCancel}>
        <Form className="form" onSubmit={handleSubmit}>
          <div className="items-stretch bg-white flex  flex-col py-2">
            <div className="text-black  text-sm font-semibold  max-md:max-w-full max-md:mt-10">
              Please provide required information to view the Pitch deck
            </div>
            <div className="text-box-form-label mt-4 max-md:max-w-full">Full Name*</div>
            <div className="relative w-full flex flex-col">
              <input
                type="text"
                className=" flex shrink-0 h-[29px] flex-col mt-1 text-box-form  max-md:max-w-full"
                name="firstName"
                value={personname}
                onChange={handleNameChange}
                required
                aria-required ="true"
                aria-label='Person Name'
              />
              {nameerror && (
                <span className="absolute mb-[-1rem] text-red-500 text-[0.6rem] error-msg bottom-0 left-0">
                  {nameerror}
                </span>
              )}
            </div>
            <div className="text-box-form-label mt-4 max-md:max-w-full">Email*</div>
            <div className="relative w-full flex flex-col">
              <input
                type="email"
                value={email}
                style={{ textTransform: 'none' }}
                onChange={handleEmailChange}
                className=" flex shrink-0 h-[29px] flex-col mt-1 text-box-form max-md:max-w-full"
                name="email"
                required
                aria-required ="true"
                aria-label='Personal email'
              />
              {emailerror && (
                <span className="mb-[-1rem] absolute text-red-500 text-[0.6rem] error-msg bottom-0 left-0">
                  {emailerror}
                </span>
              )}
            </div>
            <div className="text-box-form-label mt-4 max-md:max-w-full">Phone Number*</div>
            <div className="relative w-full flex flex-col">
              <input
                type="tel"
                className="flex shrink-0 h-[29px] flex-col mt-1 text-box-form max-md:max-w-full"
                name="phoneNumber"
                value={phoneNumber}
                onChange={handlePhoneNumberChange}
                required
                aria-required ="true"
                aria-label='Personal phone number'
              />

              {phoneerror && (
                <span className="absolute mb-[-1.15rem] text-red-500 text-[0.6rem] error-msg bottom-0 left-0">
                  {phoneerror}
                </span>
              )}
            </div>
            <button
            aria-label='submit button'
              type="submit"
              className=" hue-btn-primary mt-6 btn w-full"
              disabled={
                btnLoading ||
                personname === '' ||
                email === '' ||
                phoneNumber === '' ||
                !!phoneerror ||
                !!emailerror ||
                !!nameerror
              }
            >
              Get the Copy
            </button>
          </div>
        </Form>
      </Modal>
    <div className='layout_sitemap'>
        <h1>Sitemap</h1>
        <ul role="navigation">
            <li>Home
                <LineSitemap/>
                <ul className='list_container'>
                    <li className='item'>
                        <Link to={'/'} aria-label="Home" > Home </Link>
                    </li>
                </ul>
            </li>
            <li>Products
                <LineSitemap/>
                
                <ul className='list_container'>
                    {attributes.products?.map((item: any) =>
                        item.__typename !== 'ComponentCardCard' && (
                        <li className="item" key={item.id}>
                            {item.attachment?.data?.attributes?.url ? (
                            <button role='button' aria-label={item?.name}>
                                {item?.name}
                            </button>
                            ) : (
                            <Link
                                to={item?.link}
                                prefetch="intent"
                                aria-label={item?.name}
                            >
                                {item?.name}
                            </Link>
                            )}
                        </li>
                        )
                    )}
                </ul>
            </li>
            <li>Services
                <LineSitemap/>
                
                <ul className='list_container'>
                    {attributes.services?.map((item: any) =>
                        item.__typename !== 'ComponentCardCard' && (
                        <li className="item" key={item.id}>
                            {item.attachment?.data?.attributes?.url ? (
                            <button role="button" aria-label={item?.name}>
                                {item.name}
                            </button>
                            ) : (
                            <Link
                            aria-label={item?.name}
                                to={item.link}
                                prefetch="intent"
                            >
                                {item.name}
                            </Link>
                            )}
                        </li>
                        )
                    )}
                </ul>
            </li>
            <li>Industries
                <LineSitemap/>
                
                <ul className='list_container'>
                    {attributes.industries?.map((item: any) =>
                        item.__typename !== 'ComponentCardCard' && (
                        <li className="item" key={item.id}>
                            {item.attachment?.data?.attributes?.url ? (
                            <button role="button" aria-label={item?.name}>
                                {item.name}
                            </button>
                            ) : (
                            <Link aria-label={item?.name}
                                to={item.link}
                                prefetch="intent"
                            >
                                {item.name}
                            </Link>
                            )}
                        </li>
                        )
                    )}
                </ul>
            </li>
            <li>Resources
                <LineSitemap/>
                
                <ul className='list_container'>
                    {attributes.resources?.map((item: any) =>
                        item.__typename !== 'ComponentCardCard' && (
                        <li className="item" key={item.id}>
                            {item.attachment?.data?.attributes?.url ? (
                            <button role="button" aria-label={item?.name} onClick={() =>
                                        showModal(item.attachment?.data?.attributes?.url)
                                      }>
                                {item.name}
                            </button>
                            ) : (
                            <Link
                            aria-label={item?.name}
                                to={item.link}
                                prefetch="intent"
                            >
                                {item.name}
                            </Link>
                            )}
                        </li>
                        )
                    )}
                </ul>
            </li>
            <li>Company
                <LineSitemap/>
                
                <ul className='list_container'>
                    {attributes.company?.map((item: any) =>
                        item.__typename !== 'ComponentCardCard' && (
                        <li className="item" key={item.id}>
                            {item.attachment?.data?.attributes?.url ? (
                            <button role="button" aria-label={item?.name}>
                                {item.name}
                            </button>
                            ) : (
                            <Link aria-label={item?.name}
                                to={item.link}
                                prefetch="intent"
                            >
                                {item.name}
                            </Link>
                            )}
                        </li>
                        )
                    )}
                </ul>
            </li>
            <li>Support
                <LineSitemap/>
                <ul className='list_container'>
                    <li className='item'>
                        <Link to={'/privacy-policy'} aria-label="Privacy policy" > Privacy policy </Link>
                    </li>
                    <li className='item'>
                        <Link to={'/cookies'} aria-label="Cookie policy" > Cookie policy </Link>
                    </li>
                    <li className='item'>
                        <Link to={'/terms-and-conditions'} aria-label="T & C" > Terms & Conditions </Link>
                    </li>
                </ul>
            </li>
            <li>Contact Us
                <LineSitemap/>
                <ul className='list_container'>
                    <li className='item'>
                        <Link to={'/contact-us'} aria-label="Contact us page" > Contact Us </Link>
                    </li>
                </ul>
            </li>
        </ul>
    </div>
    </>

  )
}
export default Sitemaps
