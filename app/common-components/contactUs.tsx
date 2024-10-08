import { Form, useLocation, useMatch, useOutletContext } from '@remix-run/react'
import line from '~/../public/assets/line.svg'
import ReactFlagsSelect from 'react-flags-select'
import { useEffect, useRef, useState } from 'react'
import React from 'react'
import dayjs, { Dayjs } from 'dayjs'
import customParseFormat from 'dayjs/plugin/customParseFormat'
import { DatePicker, Space } from 'antd';
import { CalendarOutlined, FileAddOutlined, DeleteOutlined } from '@ant-design/icons'
import type { DatePickerProps, RangePickerProps } from 'antd/es/date-picker'
import { errorMessage, success } from '~/utils/notifications'
import { emailPattern } from '~/DTO/form-schemas/patterns'
import { StrapiConfig } from '~/utils/format'
import enquire from '~/../public/assets/enquire.svg'
import phone from '~/../public/assets/phone-outlined.svg'
import info from '~/../public/assets/info.svg'
import skype from '~/../public/assets/skype-outlined.svg'
dayjs.extend(customParseFormat)
const range = (start: number, end: number) => {
  const result = []
  for (let i = start; i < end; i++) {
    result.push(i)
  }
  return result
}
const disabledDate: RangePickerProps['disabledDate'] = (current) => {
  return current && current < dayjs().startOf('day')
}
const disabledDateTime = (selectedDate: dayjs.Dayjs | null) => {
  const today: Dayjs = dayjs().startOf('day')
  const currentHour: number = dayjs().hour()
  const currentMinute: number = dayjs().minute()
  const isToday = selectedDate?.isSame(today, 'day')
  return {
    disabledHours: () => (isToday ? range(0, currentHour) : []),
    disabledMinutes: () =>
      isToday && selectedDate?.hour() == dayjs().hour() ? range(0, currentMinute) : [],
  }
}
const ContactUs = () => {
  const matched = useMatch('/state-and-local-government-support')
  const isRoute = matched !== null
  const outletCon: StrapiConfig = useOutletContext()
  const strapiUrl = outletCon?.STRAPI_URL

  const location = useLocation()
  const [personname, setPersonName] = useState('')
  const [nameerror, setNameError] = useState('')
  const [email, setEmail] = useState('')
  const [emailerror, setEmailError] = useState('')
  const [hirepersonname, sethirePersonName] = useState('')
  const [hirenameerror, sethireNameError] = useState('')
  const [hireemail, sethireEmail] = useState('')
  const [hireemailerror, sethireEmailError] = useState('')
  const [skill, setskills] = useState('')
  const [skillerror, setskillError] = useState('')
  const [AOE, setAOE] = useState('')
  const [AOEerror, setAOEError] = useState('')
  const [Exp, setExp] = useState('')
  const [experror, setexpError] = useState('')
  const [org, setOrg] = useState('')
  const [orgerror, setOrgError] = useState('')
  const [hirephoneNumber, sethirePhoneNumber] = useState('')
  const [hirephoneerror, sethirePhoneError] = useState('')
  const [hiremsg, sethireMsg] = useState('')
  const [hiremsgerror, sethireMsgError] = useState('')
  const [phoneNumber, setPhoneNumber] = useState('')
  const [phoneerror, setPhoneError] = useState('')
  const [fileerror, setFileError] = useState('')
  const [hirefileerror, sethireFileError] = useState('')
  const [msg, setMsg] = useState('')
  const [msgerror, setMsgError] = useState('')
  const [msgcount, setMsgCount] = useState('1000')
  const [hiremsgcount, sethireMsgCount] = useState('1000')
  const [btnLoading, setBtnLoading] = useState<boolean>(false)
  const [selectedCode, setCountryCodeSelected] = useState('US')
  const [selectedDate, setDateSelected] = useState<string | null>(null)
  const [selectedhireDate, sethireDateSelected] = useState<string | null>(null)

  const ContactUsAPIData = `${strapiUrl}/api/contact-uses?populate=%2A`
  const [contactImage, setcontactImage] = useState<string>('')
  const [hireImage, sethireImage] = useState<string>('')


  const resethireFormState = async () => {
    sethirePersonName('')
    sethireEmail('')
    sethirePhoneNumber('')
    sethireMsg('')
    sethireSelectedFileName('')
    setskills('')
    setAOE('')
    setExp('')
    sethireSelectedFileName('')
    sethireDateSelected(null)
  }

  const resetFormState = async () => {
    setPersonName('')
    setEmail('')
    setPhoneNumber('')
    setOrg('')
    setMsg('')
    setSelectedFileName('')
    setDateSelected(null)
  }

  const handleSubmit = async (event: React.FormEvent<HTMLFormElement>, formType: any) => {
    try {
      event.preventDefault()
      setBtnLoading(true)
      if (formType === 'contact') {
        const formData = new FormData(event.currentTarget)
        if (!isRoute) {
          formData.append('action', 'Contact')
        } else {
          formData.append('action', 'Government-services')
        }

        formData.forEach((value, key) => {})
        const response = await fetch(
          'https://forms.hubspot.com/uploads/form/v2/39872873/52d6bea6-d664-4d5c-a3e9-81a21ba79d3b',
          {
            method: 'POST',
            body: formData,
          }
        )
        if (response.ok) {
          await resetFormState()

          success('Thank you for contacting us! We will get back to you soon.', 3)
        } else {
          errorMessage('Error occured while submitting, Please retry', 3)
        }
      } else if (formType === 'hireus') {
        const formData = new FormData(event.currentTarget)
        formData.append('action', 'HireUs')
        formData.forEach((value, key) => {})
        const response = await fetch(
          'https://forms.hubspot.com/uploads/form/v2/39872873/28d8b167-abb4-44db-b4a3-19758d09a360',
          {
            method: 'POST',
            body: formData,
          }
        )

        if (response.ok) {
          await resethireFormState()

          success('Thank you for contacting us! We will get back to you soon.', 3)
        } else {
          errorMessage('Error occured, please retry', 3)
        }
      }
    } catch (error) {
      errorMessage('Error occured, please retry', 3)
    }
    setBtnLoading(false)
  }

  

  const onChange: DatePickerProps['onChange'] = (date, dateString) => {
    setDateSelected(dateString)
  }
  
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

  const hirehandlePhoneNumberChange = (e: any) => {
    const hirephone = e.target.value
    sethirePhoneNumber(hirephone)
    sethirePhoneError('')
    const hirephoneRegex = /^(?:[0-9]{3})[-. ]*(?:[0-9]{3})[-. ]*(?:[0-9]{4})(?: *[x/#]{1}[0-9]+)?$/
    if (!hirephone) {
      sethirePhoneError('Phone number is required')
    } else if (!hirephoneRegex.test(hirephone)) {
      sethirePhoneError('Invalid phone number format')
    }
  }

  const hirehandleNameChange = (e: any) => {
    const hirepersonName = e.target.value
    sethirePersonName(hirepersonName)
    sethireNameError('')

    // Regular expression patterns for validation
    const noNumbersPattern = /\d/
    const noSpecialCharsPattern = /[^\w\s]/
    const noConsecutiveCharsPattern = /(\w)\1{3}/

    if (!hirepersonName) {
      sethireNameError('Full name is required')
    } else if (hirepersonName.length < 3) {
      sethireNameError('Name must be at least 3 characters long')
    } else if (hirepersonName.length > 35) {
      sethireNameError('Name must be less than 36 characters')
    } else if (noNumbersPattern.test(hirepersonName)) {
      sethireNameError('Name cannot contain numbers')
    } else if (noSpecialCharsPattern.test(hirepersonName)) {
      sethireNameError('Name cannot contain special characters')
    } else if (noConsecutiveCharsPattern.test(hirepersonName)) {
      sethireNameError('4 consecutive characters')
    }
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
      setNameError('4 consecutive characters')
    }
  }

  const hirehandleEmailChange = (e: any) => {
    const hireemailValue = e.target.value.toLowerCase()
    sethireEmail(hireemailValue)
    // Reset email error
    sethireEmailError('')
    // Validate email
    if (!hireemailValue.trim()) {
      sethireEmailError('Email is required')
    } else if (!emailPattern.test(hireemailValue)) {
      sethireEmailError('Invalid email address')
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
      emailPattern.test(emailValue)
    } else if (!emailPattern.test(emailValue)) {
      setEmailError('Invalid email address')
    }
  }

  const handleOrgChange = (e: any) => {
    const org = e.target.value // Trim any leading/trailing spaces
    setOrg(e.target.value)
    setOrgError('')
    if (org.length > 35) {
      setOrgError(`Organisation name must be less than 36 characters`)
    }
  }

  const hirehandleMessageChange = (e: any) => {
    const hiremsg = e.target.value
    sethireMsg(e.target.value)
    sethireMsgError('')
    if (hiremsg.length > 1000) {
      sethireMsgError(`Message must be less than 1001 characters`)
    }
    if (hiremsg.length <= 1000) {
      sethireMsgCount((1000 - hiremsg.length).toString())
    }
  }

  const hireexpChange = (e: any) => {
    const exp = e.target.value
    setExp(e.target.value)
    setexpError('')
    if (exp.length > 301) {
      setexpError(`Should be less than 301 characters`)
    }
  }
  const hireAOEChange = (e: any) => {
    const aoe = e.target.value
    setAOE(e.target.value)
    setAOEError('')
    if (aoe.length > 301) {
      setAOEError(`Should be less than 301 characters`)
    }
  }
  const hireSkillChange = (e: any) => {
    const skill = e.target.value
    setskills(e.target.value)
    setskillError('')
    if (skill.length > 301) {
      setskillError(`Should be less than 301 characters`)
    }
  }

  const handleMessageChange = (e: any) => {
    const msg = e.target.value
    setMsg(e.target.value)
    setMsgError('')
    if (msg.length > 1000) {
      setMsgError(`Message must be less than 1001 characters`)
    }

    if (msg.length <= 1000) {
      setMsgCount((1000 - msg.length).toString())
    }
  }

  useEffect(() => {
    fetch(ContactUsAPIData)
      .then((response) => response.json())
      .then((ContactUs_data) => {
        const { contactImage, hireImage } = ContactUs_data.data[0]?.attributes || ''
        setcontactImage(contactImage.data?.attributes?.url)
        sethireImage(hireImage.data?.attributes?.url)
      })
      .catch((error) => {})
  }, [])

  const [toggleState, setToggleState] = useState(1)
  const [selectedFileName, setSelectedFileName] = useState<string | null>(null)
  const [hireselectedFileName, sethireSelectedFileName] = useState<string | null>(null)

  const allowedFormats = [
    '.jpg',
    '.jpeg',
    '.png',
    '.gif',
    '.pdf',
    '.doc',
    '.docx',
    '.txt',
    '.xls',
    '.xlsx',
    '.csv',
    '.ppt',
    '.pptx',
  ]

  const handleFileChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const selectedFile = event.target.files?.[0]

    if (selectedFile) {
      setFileError('')
      if (selectedFile.size > 5 * 1024 * 1024) {
        // 5 MB in bytes
        setFileError('File size exceeds 5MB')
        setSelectedFileName('')
        return
      }
      const fileExtension = selectedFile.name.split('.').pop()?.toLowerCase()
      if (!allowedFormats.includes(`.${fileExtension}`)) {
        setFileError('Invalid file format')
        setSelectedFileName('')
        return
      }
      setSelectedFileName(selectedFile.name)
      setFileError('')
    }
  }

  const handleClearFile = () => {
    setSelectedFileName(null)
    const fileInput = document.getElementById('attachment') as HTMLInputElement
    if (fileInput) {
      fileInput.value = ''
    }
  }
  const handlehireFileChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const selectedFile = event.target.files?.[0]

    if (selectedFile) {
      sethireFileError('')
      if (selectedFile.size > 5 * 1024 * 1024) {
        // 5 MB in bytes
        sethireFileError('File size exceeds 5MB')
        sethireSelectedFileName('')
        return
      }

      // Check file format
      const fileExtension = selectedFile.name.split('.').pop()?.toLowerCase()
      if (!allowedFormats.includes(`.${fileExtension}`)) {
        sethireFileError('Invalid file format')
        sethireSelectedFileName('')
        return
      }

      // If both size and format are valid, update selected file name
      sethireSelectedFileName(selectedFile.name)
      sethireFileError('')
    }
  }

  const handlehireClearFile = () => {
    sethireSelectedFileName(null)
    // Optionally, you can reset the file input value to allow selecting the same file again
    const fileInput = document.getElementById('hire_attachment') as HTMLInputElement
    if (fileInput) {
      fileInput.value = ''
    }
  }
  const toggleTab = (index: number) => {
    setToggleState(index)
  }

  return (
    <>
      <section
        id="contact-us"
        className="w-full h-fit bg-cover bg-center flex md:flex-row flex-col-reverse  contact-container font-montserrat"
      >
        <div className="flex flex-col flex-1 w-full bg-haiti xl:p-10 ">
          <div className="flex flex-col w-fit xl:mx-auto lg:ml-auto xl:pr-0 lg:pr-16 md:pr-10 md:ml-auto md:mx-0 sm:mx-16 mx-10">
            <h1 className="lg:py-4 py-2">
              <span className="flex text-white xl:text-5xl text-3xl font-medium">
                {toggleState === 1 ? 'Contact Us' : 'Join Us'}
              </span>
            </h1>
            <img
              className="flex aspect-square xl:h-[35rem] lg:h-[22rem] md:h-[19rem] justify-self-center mx-auto object-cover"
              src={toggleState === 1 ? contactImage : hireImage}
              alt="contactUs"
            />
          </div>
          <div
            className={
              location.pathname?.endsWith('contact-us') && toggleState === 1 ? 'hidden' : 'mx-auto'
            }
          >
            <div className="grid md:grid-cols-2 grid-cols-1 xl:max-w-xl lg:max-w-sm ml-auto w-fit lg:gap-4 gap-3 lg:p-4 p-3">
              <p
                role="heading"
                className="text-HeaderGray w-full lg:text-2xl text-xl text-center font-semibold font-montserrat sm:col-span-2"
              >
                Connect with us
              </p>
              <img src={line} alt="ornament" className="w-full sm:col-span-2"></img>
              {toggleState === 1 && (
                <div className="col-span-1 text-white items-left w-fit md:mx-0 mx-4">
                  <div className="flex text-iv-purple items-left gap-2">
                    <img
                      className="w-4 h-4 inline"
                      src={enquire}
                      role="presentation"
                      aria-hidden="true"
                      alt="enquire"
                    />
                    <span className="text-[0.7em]">Enquires</span>
                  </div>
                  <a className="text-[0.8em]" href="mailto:sales@ivoyant.com">
                    sales@ivoyant.com
                  </a>
                </div>
              )}

              <div className="col-span-1 text-white items-left md:mx-0 mx-4">
                <div className="flex text-iv-purple items-left gap-2">
                  <img
                    className="w-4 h-4 inline"
                    src={phone}
                    role="presentation"
                    aria-hidden="true"
                    alt="phone"
                  />
                  <span className="text-[0.7em]">Phone</span>
                </div>
                <a className="text-[0.8em]" href="tel:+1 (770) 274 4336">
                  +1 (770) 274 4336
                </a>
                <br />
                {!isRoute && (
                  <a className="text-[0.8em]" href="tel:+919108564829">
                    +91 9108564829
                  </a>
                )}
              </div>
              <div
                className={`col-span-1 text-white items-left md:mx-0 mx-4 ${location.pathname?.endsWith('state-and-local-government-support') ? 'hidden' : ''}`}
              >
                <div className="flex text-iv-purple items-left gap-2">
                  <img
                    className="w-4 h-4 inline"
                    src={info}
                    role="presentation"
                    aria-hidden="true"
                    alt="info"
                  />
                  <span className="text-[0.7em]">Information</span>
                </div>
                <a
                  className="text-[0.8em]"
                  href={`mailto:${toggleState == 1 ? 'info@ivoyant.com' : 'jobs@ivoyant.com'}`}
                >
                  {`${toggleState == 1 ? 'info@ivoyant.com' : 'jobs@ivoyant.com'}`}
                </a>
              </div>
              {toggleState === 1 && (
                <div
                  className={`col-span-1 text-white items-left md:mx-0 mx-4 ${location.pathname?.endsWith('state-and-local-government-support') ? 'hidden' : ''}`}
                >
                  <div className="flex text-iv-purple items-left gap-2">
                    <img
                      role="presentation"
                      aria-hidden="true"
                      className="w-4 h-4 inline"
                      src={skype}
                      alt="skype"
                    />
                    <span className="text-[0.7em]">Connect with us</span>
                  </div>
                  <a className="text-[0.8em]" href="skype:ivoyantsales@outlook.com?chat">
                    ivoyantsales@outlook.com
                  </a>
                </div>
              )}
            </div>
          </div>
        </div>
        <div className="flex flex-1 flex-col bg-white xl:p-10 md:p-0 p-4">
          <div className="flex flex-row xl:gap-x-10 md:gap-x-4 gap-x-3">
            <button role="button" aria-label="Contact us form">
              <span
                className={toggleState === 1 ? 'tab' : 'tab text-gray-600'}
                onClick={() => toggleTab(1)}
              >
                Let's Talk
              </span>
            </button>
            {!isRoute && (
              <button role="button" aria-label="Join us form">
                <span
                  className={toggleState === 2 ? 'tab' : 'tab text-gray-500'}
                  onClick={() => toggleTab(2)}
                >
                  Job Enquiry
                </span>
              </button>
            )}
          </div>
          <div
            className={
              toggleState === 2
                ? 'glider xl:ml-[15rem] lg:ml-[11rem] md:ml-[11.5rem] ml-[5.5rem]'
                : 'glider md:ml-5'
            }
          ></div>
          {toggleState === 1 ? (
            <Form
              role="form"
              onSubmit={(event) => handleSubmit(event, 'contact')}
              method="post"
              encType="multipart/form-data"
              className={
                toggleState === 1
                  ? 'flex flex-col xl:gap-10 md:gap-8 gap-4 active-content xl:p-8 md:px-4 pt-[1.6rem]  sm:pt-[1.8rem] md:pt-[2.06rem] lg:pt-[3.06rem] xl:pt-[3.4rem] pb-2'
                  : 'hidden'
              }
              autoComplete="off"
            >
              <div className="grid grid-cols-2 xl:gap-10 md:gap-6 gap-4">
                <div className="w-full relative group sm:col-span-1 col-span-2">
                  <input
                    type="text"
                    id="name"
                    name="name"
                    placeholder="Full Name*"
                    required
                    aria-label="name"
                    aria-required="true"
                    value={personname}
                    onChange={handleNameChange}
                    className="text-box  w-full xl:h-10 h-8 xl:px-4 px-2 xl:text-sm text-xs peer   outline-none cursor-pointer"
                  ></input>
                  {nameerror && (
                    <span className="absolute mb-[-1rem] text-red-500 text-[0.6rem] error-msg bottom-0 left-0">
                      {nameerror}
                    </span>
                  )}
                </div>

                <div className="w-full relative group sm:col-span-1 col-span-2">
                  <input
                    aria-label="email"
                    aria-required="email"
                    type="text"
                    id="email"
                    name="email"
                    placeholder={!isRoute ? 'Email*' : 'Vendor Email*'}
                    required
                    value={email}
                    style={{ textTransform: 'none' }}
                    onChange={handleEmailChange}
                    className="text-box  w-full xl:h-10 h-8 xl:px-4 px-2 xl:text-sm text-xs peer  outline-none cursor-pointer"
                  ></input>
                  {emailerror && (
                    <span className="mb-[-1rem] absolute text-red-500 text-[0.6rem] error-msg bottom-0 left-0">
                      {emailerror}
                    </span>
                  )}
                </div>
                <div className="relative items-stretch  text-box  self-stretch flex xl:gap-2.5 gap-1  xl:h-10 h-8 xl:pr-4 pr-2 xl:text-sm text-xs py-1 sm:col-span-1 col-span-2">
                  <div className="  items-stretch border-r-[color:var(--Gray-gray-5,#D9D9D9)] flex basis-[0%] flex-col justify-center xl:pr-3 pr-1 border-r border-solid">
                    <div className=" items-stretch flex  gap-1 ">
                      <ReactFlagsSelect
                        aria-label="Select a country for contact us page"
                        selected={selectedCode}
                        onSelect={(code) => setCountryCodeSelected(code)}
                        searchable
                        searchPlaceholder="Search countries"
                        countries={['US', 'IN']}
                      />
                      <input
                        aria-label="Country code"
                        aria-required="true"
                        type="text"
                        placeholder=""
                        value={selectedCode}
                        required
                        className="hidden"
                        name="country_code"
                      />
                    </div>
                  </div>
                  <input
                    aria-label="Phone number"
                    aria-required="true"
                    type="tel"
                    placeholder="Phone Number*"
                    value={phoneNumber}
                    onChange={handlePhoneNumberChange}
                    required
                    style={{ borderBottom: '0rem' }}
                    className="outline-none text-box   cursor-pointer overflow-hidden"
                    name="phonenumber"
                  />
                  {phoneerror && (
                    <span className="absolute mb-[-1.15rem] text-red-500 text-[0.6rem] error-msg bottom-0 left-0">
                      {phoneerror}
                    </span>
                  )}
                </div>
                <div className="w-full relative group sm:col-span-1 col-span-2">
                  <input
                    aria-label="Organization"
                    aria-required="false"
                    type="text"
                    id="organization"
                    name="organisation"
                    value={org}
                    onChange={handleOrgChange}
                    placeholder="Organisation"
                    className="w-full xl:h-10 h-8 xl:px-4 px-2 xl:text-sm text-xs peer text-box  outline-none cursor-pointer"
                  ></input>
                  {orgerror && (
                    <span className="mb-[-1rem] absolute text-red-500 text-[0.6rem] error-msg bottom-0 left-0">
                      {orgerror}
                    </span>
                  )}
                </div>
                <div className="w-full relative grid col-span-2">
                  <label className="py-2 text-xs">Your Message</label>
                  <textarea
                    aria-label="Your message for the Job request"
                    aria-required="false"
                    minLength={3}
                    maxLength={250}
                    id="message"
                    name="message"
                    cols={30}
                    rows={5}
                    value={msg}
                    onChange={handleMessageChange}
                    className="p-4 text-sm peer border-[1px]  text-area outline-none cursor-pointer "
                  ></textarea>
                  {msgerror && (
                    <span className="mb-[-1rem] absolute text-red-500 text-[0.6rem] error-msg bottom-0 left-0">
                      {msgerror}
                    </span>
                  )}
                  {msgcount && (
                    <span className="mb-[-1.2rem] absolute text-gray-500 text-[0.75rem] error-msg bottom-0 right-0">
                      {msgcount}/1000
                    </span>
                  )}
                </div>
              </div>
              <Space direction="horizontal" className="grid-cols-1 flex justify-between">
                <div className="flex">
                  <span className="cursor-pointer">
                    <CalendarOutlined
                      tabIndex={0}
                      className="bg-[#D9C9FB] rounded-full w-7 h-7 p-2 text-black"
                    />
                  </span>
                  <DatePicker
                    inputReadOnly
                    size="large"
                    value={selectedDate ? dayjs(selectedDate) : null}
                    format="YYYY-MM-DD  HH:mm"
                    className="text-xs"
                    disabledDate={disabledDate}
                    disabledTime={(current) => disabledDateTime(current)}
                    placeholder="Schedule a Meet"
                    showTime={{ defaultValue: dayjs('00:00:00', 'HH:mm:ss') }}
                    suffixIcon={null}
                    onChange={onChange}
                  />
                  <input
                    type="text"
                    placeholder=""
                    value={selectedDate ? selectedDate : ''}
                    className="hidden"
                    aria-label="Schedule a date"
                    name="date"
                  />
                </div>
                <div className="flex flex-col gap-1">
                  <div className="flex flex-col text-sm relative">
                    <label
                      htmlFor="attachment"
                      className="font-montserrat whitespace-nowrap"
                      style={{ cursor: 'pointer' }}
                    >
                      <FileAddOutlined
                        tabIndex={0}
                        className="bg-[#D9C9FB] rounded-full p-2 text-[#] mr-2"
                      />
                      Attach File
                    </label>
                    <input
                      style={{ display: 'none' }}
                      type="file"
                      id="attachment"
                      aria-label="attachment"
                      name="attachment"
                      onChange={handleFileChange}
                    />
                    {fileerror && (
                      <span className="absolute mb-[-1rem] text-red-500 text-[0.6rem] error-msg bottom-0 left-0">
                        {fileerror}
                      </span>
                    )}
                  </div>
                  {selectedFileName && (
                    <div className="absolute text-xs text-gray-700 flex items-center max-w-[5rem] translate-y-8">
                      <span
                        title={`${selectedFileName}`}
                        className="text-ellipsis whitespace-nowrap max-w-[4rem] overflow-hidden"
                      >
                        {`${selectedFileName}`}
                      </span>

                      <button
                        role="button"
                        aria-label={`Remove ${selectedFileName}`}
                        title={`Remove ${selectedFileName}`}
                        onClick={handleClearFile}
                        className="ml-2"
                      >
                        <DeleteOutlined className="text-red-500" />
                      </button>
                    </div>
                  )}
                </div>
              </Space>
              <button
                role="button"
                aria-label="submit your request"
                type="submit"
                name="_action"
                value="contact"
                className="hue-btn-primary btn capitalize md:w-fit text-HeaderGray font-normal mt-7"
                disabled={
                  btnLoading ||
                  personname === '' ||
                  email === '' ||
                  phoneNumber === '' ||
                  !!phoneerror ||
                  !!emailerror ||
                  !!nameerror ||
                  !!orgerror ||
                  !!msgerror
                }
              >
                Send my message
              </button>
            </Form>
          ) : (
            <Form
              role="form"
              onSubmit={(event) => handleSubmit(event, 'hireus')}
              method="post"
              encType="multipart/form-data"
              className={
                toggleState === 2
                  ? 'flex flex-col lg:gap-10 gap-6 active-content xl:p-8  sm:p-4 pt-[1.6rem]  sm:pt-[1.8rem] md:pt-[2.06rem] lg:pt-[3.06rem] xl:pt-[3.4rem] pb-2'
                  : 'hidden'
              }
              autoComplete="off"
            >
              <div className="grid grid-cols-2 xl:gap-10 gap-6">
                <div className="w-full relative group sm:col-span-1 col-span-2">
                  <input
                    aria-label="name"
                    aria-required="true"
                    type="text"
                    id="name"
                    name="name"
                    value={hirepersonname}
                    onChange={hirehandleNameChange}
                    placeholder="Full Name*"
                    required
                    className="w-full xl:h-10 h-8 xl:px-4 px-2 xl:text-sm text-xs peer text-box outline-none cursor-pointer"
                  ></input>
                  {hirenameerror && (
                    <span className="absolute mb-[-1rem] text-red-500 text-[0.6rem] error-msg bottom-0 left-0">
                      {hirenameerror}
                    </span>
                  )}
                </div>
                <div className="w-full relative group sm:col-span-1 col-span-2">
                  <input
                    aria-label="email"
                    aria-required="true"
                    type="text"
                    id="email"
                    name="email"
                    style={{ textTransform: 'none' }}
                    value={hireemail}
                    onChange={hirehandleEmailChange}
                    placeholder="Email*"
                    required
                    className="w-full xl:h-10 h-8 xl:px-4 px-2 xl:text-sm text-xs peer text-box outline-none cursor-pointer"
                  ></input>
                  {hireemailerror && (
                    <span className="mb-[-1rem] absolute text-red-500 text-[0.6rem] error-msg bottom-0 left-0">
                      {hireemailerror}
                    </span>
                  )}
                </div>
                <div className="relative items-stretch text-box self-stretch flex xl:gap-2.5 gap-1  xl:h-10 h-8 xl:pr-4 pr-2 xl:text-sm text-xs py-1 sm:col-span-1 col-span-2">
                  <div className="items-stretch border-r-[color:var(--Gray-gray-5,#D9D9D9)] flex basis-[0%] flex-col justify-center xl:pr-3 pr-1 border-r border-solid">
                    <div className="items-stretch flex  gap-1 ">
                      <ReactFlagsSelect
                        aria-label="Select a country for Join us page"
                        selected={selectedCode}
                        onSelect={(code) => setCountryCodeSelected(code)}
                        searchable
                        searchPlaceholder="Search countries"
                        countries={['US', 'IN']}
                      />{' '}
                      <input
                        aria-label="Country code"
                        aria-required="true"
                        type="text"
                        placeholder=""
                        value={selectedCode}
                        required
                        className="hidden"
                        name="country_code"
                      />
                    </div>
                  </div>
                  <input
                    aria-label="Phone number"
                    aria-required="true"
                    type="tel"
                    placeholder="Phone Number*"
                    value={hirephoneNumber}
                    onChange={hirehandlePhoneNumberChange}
                    required
                    style={{ borderBottom: '0rem' }}
                    className="outline-none text-box   cursor-pointer overflow-hidden"
                    name="phone_number"
                  />
                  {hirephoneerror && (
                    <span className="absolute mb-[-1.15rem] text-red-500 text-[0.6rem] error-msg bottom-0 left-0">
                      {hirephoneerror}
                    </span>
                  )}
                </div>
                <div className="w-full relative group sm:col-span-1 col-span-2">
                  <input
                    type="text"
                    aria-required="false"
                    aria-label="Area of Expertise"
                    style={{ textTransform: 'none' }}
                    name="area_of_expertise"
                    placeholder="Area of Expertise"
                    value={AOE}
                    onChange={hireAOEChange}
                    className="w-full xl:h-10 h-8 xl:px-4 px-2 xl:text-sm text-xs peer text-box outline-none cursor-pointer"
                  ></input>
                  {AOEerror && (
                    <span className="mb-[-1rem] absolute text-red-500 text-[0.6rem] error-msg bottom-0 left-0">
                      {AOEerror}
                    </span>
                  )}
                </div>

                <div className="w-full relative group sm:col-span-1 col-span-2">
                  <input
                    type="text"
                    placeholder="Years of Experience"
                    style={{ textTransform: 'none' }}
                    value={Exp}
                    onChange={hireexpChange}
                    name="hiring_duration"
                    aria-label="Hiring duration"
                    className="w-full xl:h-10 h-8 xl:px-4 px-2 xl:text-sm text-xs peer text-box outline-none cursor-pointer"
                  ></input>
                  {experror && (
                    <span className="mb-[-1rem] absolute text-red-500 text-[0.6rem] error-msg bottom-0 left-0">
                      {experror}
                    </span>
                  )}
                </div>

                <div className="w-full relative group sm:col-span-1 col-span-2">
                  <input
                    type="text"
                    aria-label="Your skillsets"
                    placeholder="Your Skillsets"
                    style={{ textTransform: 'none' }}
                    value={skill}
                    onChange={hireSkillChange}
                    name="choose_skill_set"
                    className="w-full xl:h-10 h-8 xl:px-4 px-2 xl:text-sm text-xs peer text-box outline-none cursor-pointer"
                  ></input>
                  {skillerror && (
                    <span className="mb-[-1rem] absolute text-red-500 text-[0.6rem] error-msg bottom-0 left-0">
                      {skillerror}
                    </span>
                  )}
                </div>
                <div className="w-full relative grid col-span-2">
                  <label className="py-2 text-xs">Your Message</label>
                  <textarea
                    aria-label="Your message while contacting us"
                    minLength={3}
                    maxLength={250}
                    id="message"
                    name="message_hire"
                    cols={30}
                    rows={5}
                    value={hiremsg}
                    onChange={hirehandleMessageChange}
                    className="p-4 text-sm peer border-[1px]  outline-none cursor-pointer text-area"
                  ></textarea>
                  {hiremsgerror && (
                    <span className="mb-[-1rem] absolute text-red-500 text-[0.6rem] error-msg bottom-0 left-0">
                      {hiremsgerror}
                    </span>
                  )}
                  {hiremsgcount && (
                    <span className="mb-[-1.2rem] absolute text-gray-500 text-[0.75rem] error-msg bottom-0 right-0">
                      {hiremsgcount}/1000
                    </span>
                  )}
                </div>
              </div>
              <Space direction="horizontal" size={12} className="grid-cols-1 flex justify-between">
                <div className="flex flex-col gap-1 relative">
                  <div className="flex flex-col xl:text-sm text-xs">
                    <label
                      htmlFor="hire_attachment"
                      className="font-montserrat whitespace-nowrap"
                      style={{ cursor: 'pointer' }}
                    >
                      <FileAddOutlined
                        tabIndex={0}
                        className="bg-[#D9C9FB] rounded-full p-2 text-black mr-2"
                      />
                      Attach File
                    </label>
                    <input
                      name="hire_attachment"
                      style={{ display: 'none' }}
                      type="file"
                      id="hire_attachment"
                      onChange={handlehireFileChange}
                    />
                    {hirefileerror && (
                      <span className="absolute mb-[-1rem] text-red-500 text-[0.6rem] error-msg bottom-0 left-0">
                        {hirefileerror}
                      </span>
                    )}
                  </div>
                  {hireselectedFileName && (
                    <div className="absolute text-xs text-gray-700 flex items-center max-w-[5rem] translate-y-8">
                      <span
                        title={`${hireselectedFileName}`}
                        className="text-ellipsis whitespace-nowrap  overflow-hidden"
                      >{`${hireselectedFileName}`}</span>
                      <button
                        title={`Remove ${hireselectedFileName}`}
                        onClick={handlehireClearFile}
                        className="ml-2"
                      >
                        <DeleteOutlined tabIndex={0} className="text-red-500" />
                      </button>
                    </div>
                  )}
                </div>
              </Space>
              <button
                type="submit"
                name="_action"
                value="hireus"
                className="hue-btn-primary btn capitalize md:w-fit text-HeaderGray font-normal mt-7"
                disabled={
                  btnLoading ||
                  hirepersonname === '' ||
                  hireemail === '' ||
                  hirephoneNumber === '' ||
                  !!hirephoneerror ||
                  !!hireemailerror ||
                  !!hirenameerror ||
                  !!hiremsgerror ||
                  !!AOEerror ||
                  !!experror ||
                  !!skillerror
                }
              >
                Send my message
              </button>
            </Form>
          )}
        </div>
      </section>
    </>
  )
}
export default ContactUs
