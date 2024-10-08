import { useCallback, useState } from 'react'
import { Button, DatePicker, DatePickerProps, Drawer, Select, Space } from 'antd'
import { useLoaderData } from '@remix-run/react'
import { Form } from '@remix-run/react'
import { errorMessage, success } from '~/utils/notifications'
import { FileRejection, useDropzone } from 'react-dropzone'
import { DeleteOutlined } from '@ant-design/icons';
import React from 'react'
import dayjs from 'dayjs'
import { emailPattern, namePattern, phonePattern } from '~/DTO/form-schemas/patterns'
import { Accept } from 'react-dropzone'
const JobDescription = () => {
  const [selectedFileName, setSelectedFileName] = React.useState<string | null>(null)
  const [selectedFile, setSelectedFile] = useState<any | null>(null)
  const [personname, setPersonName] = useState('')
  const [nameerror, setNameError] = useState('')

  const [email, setEmail] = useState('')
  const [emailError, setEmailError] = useState('')

  const [phone, setPhone] = useState('')
  const [phoneError, setPhoneError] = useState('')

  const [institute, setInstitute] = useState('')
  const [instituteError, setinstErr] = useState('')

  const [deg, setDeg] = useState('')
  const [degError, setDegError] = useState('')
  const [textAreaValue, setTextAreaValue] = useState('')

  const [fromDate, setFromDate] = useState<string | null>(null)

  const [fileError, setFileError] = useState<null | string>(null)

  const acceptedFileTypes: Accept = {
    'application/msword': ['.doc'],
    'application/vnd.openxmlformats-officedocument.wordprocessingml.document': ['.docx'],
    'application/pdf': ['.pdf'],
  }
  const MAX_FILE_SIZE = 5 * 1024 * 1024
  const onChange: DatePickerProps['onChange'] = (date, dateString) => {
    setToDate(dateString)
  }
  const handleTextAreaChange = (event) => {
    setTextAreaValue(event.target.value)
  }
  const fromDateChange: DatePickerProps['onChange'] = (date, dateString) => {
    if (dateString === '') {
      setFromDate(null)
    } else {
      setFromDate(dateString)
    }
  }
  function clearStateVariables() {
    setPersonName('')
    setNameError('')
    setEmail('')
    setEmailError('')
    setPhone('')
    setPhoneError('')
    setInstitute('')
    setinstErr('')
    setDeg('')
    setDegError('')
    setFromDate(null)
    setToDate(null)
    setSelectedFile(null)
    setSelectedFileName('')
    setFileError('')
    setIsCurrentlyAttend(false)
    setTextAreaValue('')
  }
  const handleNameInput = (e) => {
    const value = e.target.value
    setPersonName(value.replace('  ', ' '))
    if (!namePattern.test(value) || value.length < 3) {
      setNameError('Please enter a valid name with a minimum of 3 characters.')
    } else {
      setNameError('')
    }
  }
  const handleEmailChange = (e) => {
    const value = e.target.value.toLowerCase()
    setEmail(value.replace(' ', ''))
    if (!emailPattern.test(value) || value.length < 3) {
      setEmailError('Please enter a valid email')
    } else {
      setEmailError('')
    }
  }
  const handlePhoneChange = (e) => {
    const value = e.target.value
    setPhone(value.replace('  ', ' '))
    if (!phonePattern.test(value) || value.length < 10) {
      setPhoneError('Please enter a valid Phone number')
    } else {
      setPhoneError('')
    }
  }
  const instituteChange = (e) => {
    const value = e.target.value
    setInstitute(value.replace('  ', ' '))
    if (!namePattern.test(value) || value.length < 3) {
      setinstErr('Please enter a valid Institute name')
    } else {
      setinstErr('')
    }
  }
  const degree = (e) => {
    const value = e.target.value
    setDeg(value.replace('  ', ' '))
    if (!namePattern.test(value) || value.length < 3) {
      setDegError('Please enter a valid Degree')
    } else {
      setDegError('')
    }
  }
  const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    try {
      event.preventDefault()
      const formData = new FormData(event.currentTarget)
      formData.append('action', 'Internship')
      // Remove existing 'todate' entry if it exists
      // Check if the checkbox is checked and update the "To" date in the form data
      if (isCurrentlyAttend) {
        formData.delete('todate')
        const today = new Date()
        const formattedDate = today.toISOString().split('T')[0]
        formData.append('todate', formattedDate)
        formData.append('fromDate', fromDate as string)
      }
      if (selectedFile) {
        formData.append('hire_attachment', selectedFile)
      }

      const response = await fetch(
        'https://forms.hubspot.com/uploads/form/v2/39872873/b3a88f65-2b4f-4515-b186-2191b2c01494',
        {
          method: 'POST',
          body: formData,
        }
      )

      if (response.ok) {
        success('Thank you for showing interest in us!', 2)
        clearStateVariables()
      } else {
        errorMessage('Error occured, please retry', 3)
      }
    } catch (error) {
      errorMessage('Error occured, please retry', 3)
    }
  }
  const onDropRejected = useCallback((rejectedFiles: FileRejection[]) => {
    if (rejectedFiles.length > 0) {
      setSelectedFile(null)
      setSelectedFileName(null)
      setFileError('File type not supported')
    }
  }, [])
  const onDrop = useCallback((acceptedFiles: any) => {
    // Handle the dropped files
    if (acceptedFiles.length > 0) {
      const file = acceptedFiles[0]
      if (file.size <= MAX_FILE_SIZE) {
        setSelectedFile(file)
        setSelectedFileName(file.name)
        setFileError(null)
      } else {
        setSelectedFile(null)
        setSelectedFileName(null)
        setFileError(`File size exceeds ${MAX_FILE_SIZE}MB limit`)
      }
      setSelectedFile(file)
      setSelectedFileName(file.name)
      // Perform actions with the selected file
    }
  }, [])
  const handleClearFile = () => {
    // Clear the selected file and hide the file information
    setSelectedFileName(null)
  }
  const [toDate, setToDate] = useState<string | null>(null)
  const [isCurrentlyAttend, setIsCurrentlyAttend] = useState(false)
  const handleCheckboxChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setIsCurrentlyAttend(event.target.checked)
    setToDate(event.target.checked ? new Date().toISOString().slice(0, 10) : toDate)
  }
  const loaderData = useLoaderData() as any
  const [open, setOpen] = useState(false)
  const { Option } = Select
  const showDrawer = () => {
    setOpen(true)
  }
  const onClose = () => {
    setOpen(false)
    clearStateVariables()
  }
  const { getRootProps, getInputProps } = useDropzone({
    onDrop,
    onDropRejected,
    accept: acceptedFileTypes,
    maxSize: MAX_FILE_SIZE,
  })
  return (
    <>
      <div className=" main-jd-content items-start flex flex-col mt-10 p-20">
        <div className="text-black text-4xl font-semibold self-stretch w-full max-md:max-w-full">
          {loaderData.title}
        </div>
        <div className="text-black text-3xl font-semibold self-stretch w-full mt-6 max-md:max-w-full">
          {loaderData.location}
        </div>
        <div className="text-black text-xl font-medium self-stretch w-full mt-6 max-md:max-w-full">
          {loaderData.date}
        </div>
        <div className="text-black text-base font-medium self-stretch w-full mt-6 max-md:max-w-full">
          {loaderData.job_id}
        </div>
        <div className="text-black font-poppins text-base leading-6 self-stretch w-full mt-6 max-md:max-w-full">
          {loaderData.summary}
        </div>
        <div className="text-black text-lg font-semibold  mt-6 self-start max-md:max-w-full">
          {loaderData.s1_title}
        </div>
        {loaderData.s1_points.map((item: any) => (
          <div className="text-black text-base mt-4 self-start max-md:max-w-full">
            <ul>
              <li>{item.description}</li>
            </ul>
          </div>
        ))}
        <div className="text-black text-lg font-semibold  mt-5 self-start max-md:max-w-full">
          {loaderData.s2_title}
        </div>
        {loaderData.s2_points.map((item: any) => (
          <div className="text-black text-base  mt-4 self-start max-md:max-w-full">
            <ul>
              <li>{item.description}</li>
            </ul>
          </div>
        ))}
        <div className="text-black text-lg font-semibold mt-5 self-start">
          {loaderData.s3_title}
        </div>
        {loaderData.s3_points.map((item: any) => (
          <div className="text-black  text-base mt-4 self-start max-md:max-w-full">
            <ul>
              <li>{item.description}</li>
            </ul>
          </div>
        ))}
        <button className="hue-btn-primary btn mt-16" onClick={showDrawer}>
          Apply Now
        </button>
        <Drawer
          width={720}
          onClose={onClose}
          open={open}
          styles={{
            body: {
              paddingBottom: 80,
            },
          }}
          extra={
            <Space>
              <Button onClick={onClose}>Cancel</Button>
              <Button onClick={onClose} type="primary">
                Submit
              </Button>
            </Space>
          }
        >
          <Form onSubmit={handleSubmit} method="post" encType="multipart/form-data">
            <div className="items-start bg-white flex flex-col py-8 px-2">
              <div className="justify-between self-stretch flex gap-5 items-start max-md:max-w-full max-md:flex-wrap">
                <div className="text-black text-3xl font-semibold grow ">
                  Internship Application Form
                </div>
                <div className="items-center self-stretch flex aspect-square flex-col justify-center">
                  <img
                    alt="close"
                    srcSet="../../assets/closebtn.png"
                    onClick={onClose}
                    className="pointer aspect-square object-contain object-center w-10 overflow-hidden rounded-[50%]"
                  />
                </div>
              </div>
              <div className="text-black text-lg font-semibold self-stretch  mt-11 max-md:max-w-full max-md:mt-10">
                Personal Information
              </div>
              <div className="text-neutral-800 text-xs self-stretch  mt-8 max-md:max-w-full">
                Name *
              </div>
              <div className="relative w-full">
                <input
                  type="text"
                  name="firstname"
                  autoComplete="off"
                  value={personname}
                  onChange={handleNameInput}
                  required
                  maxLength={70}
                  className="intern-input"
                />
                {nameerror && <small className="absolute text-red-500">{nameerror}</small>}
              </div>

              <div className="text-neutral-800 text-xs self-stretch  mt-4 max-md:max-w-full">
                Email *
              </div>
              <div className="relative w-full">
                <input
                  type="email"
                  name="email"
                  autoComplete="off"
                  value={email}
                  maxLength={320}
                  onChange={handleEmailChange}
                  required
                  className="intern-input"
                />
                {emailError && <small className="absolute text-red-500">{emailError}</small>}
              </div>

              <div className="text-neutral-800 text-xs self-stretch whitespace-nowrap mt-4 max-md:max-w-full">
                Phone number *
              </div>
              <div className="relative w-full">
                <input
                  type="tel"
                  value={phone}
                  autoComplete="off"
                  onChange={handlePhoneChange}
                  maxLength={15}
                  name="phone number"
                  className="intern-input"
                />
                {phoneError && <small className="absolute text-red-500">{phoneError}</small>}
              </div>
              <div className="self-stretch bg-zinc-300 flex shrink-0 h-px flex-col mt-9 max-md:max-w-full" />
              <div className="justify-between items-center self-stretch flex w-full gap-5 mt-9 max-md:max-w-full max-md:flex-wrap">
                <div className="text-black text-lg font-semibold grow whitespace-nowrap my-auto">
                  Education
                </div>
              </div>
              <div className="text-neutral-800 text-xs self-stretch whitespace-nowrap mt-6 max-md:max-w-full">
                Institution *
              </div>
              <div className="relative w-full">
                <input
                  type="text"
                  autoComplete="off"
                  name="institution"
                  value={institute}
                  maxLength={100}
                  onChange={instituteChange}
                  className="intern-input"
                />
                {instituteError && (
                  <small className="absolute text-red-500">{instituteError}</small>
                )}
              </div>

              <div className="text-neutral-800 text-xs self-stretch whitespace-nowrap mt-4 max-md:max-w-full">
                Degree *
              </div>
              <div className="relative w-full">
                <input
                  type="text"
                  autoComplete="off"
                  name="degree"
                  value={deg}
                  onChange={degree}
                  className="intern-input"
                />
                {degError && <small className="absolute text-red-500">{degError}</small>}
              </div>

              <div className="items-stretch self-stretch flex justify-between gap-5 mt-4 max-md:max-w-full max-md:flex-wrap">
                <div className="items-stretch flex grow basis-[0%] flex-col">
                  <div className="text-neutral-800 text-xs whitespace-nowrap">From</div>
                  <DatePicker
                    status={fromDate === '' ? 'error' : ''}
                    inputReadOnly
                    value={fromDate ? dayjs(fromDate, 'YYYY-MM-DD') : null}
                    onChange={fromDateChange}
                  />
                </div>
                <div className="items-stretch flex grow basis-[0%] flex-col">
                  <div className="text-neutral-800 text-xs whitespace-nowrap">To</div>
                  <DatePicker
                    status={toDate === '' ? 'error' : ''}
                    inputReadOnly
                    value={toDate ? dayjs(toDate, 'YYYY-MM-DD') : null}
                    disabled={isCurrentlyAttend}
                    onChange={onChange}
                  />
                </div>
              </div>
              <div className="items-center flex gap-3 mt-5 self-start">
                <input
                  type="checkbox"
                  id="currentlyAttendCheckbox"
                  checked={isCurrentlyAttend}
                  onChange={handleCheckboxChange}
                />
                <div className="text-neutral-800 text-center text-xs self-stretch grow capitalize font-montserrat">
                  I Currently Attend
                </div>
              </div>
              <div className="text-black text-lg font-semibold self-stretch whitespace-nowrap mt-8 max-md:max-w-full">
                Resume <sup> *</sup>
              </div>
              <div
                {...getRootProps()}
                className={`flex flex-col gap-1 text-black text-sm text-centery-gray-7 drop-zone self-stretch items-center mt-8 py-8 border-[0.5px] border-dashed max-md:max-w-full max-md:px-5`}
              >
                <label htmlFor="hire_attachment" style={{ cursor: 'pointer', textAlign: 'center' }}>
                  <span className="font-semibold">Upload Resume</span> or just drop it here
                  <br />{' '}
                  <small>
                    Allowed file types include [.doc, .docx and .pdf], Maximum file size 5 Mb.
                  </small>
                </label>
                {fileError && <p className="text-red-500 w-fit mx-auto">{fileError}</p>}
                <input
                  {...getInputProps()}
                  type="file"
                  accept=".doc,.doct,.docx,.pdf"
                  name="hire_attachment"
                  style={{ display: 'none' }}
                />
                {selectedFileName && (
                  <div className="file-info">
                    <span>{`${selectedFileName}`}</span>
                    <button onClick={handleClearFile}>
                      <DeleteOutlined className="text-red-500 ml-2" />
                    </button>
                  </div>
                )}
              </div>
              <div className="text-black text-lg font-semibold mt-8 self-start">
                Message to Hiring Manager
              </div>
              <div className="text-zinc-600 text-sm mt-2 self-start">
                Let the Company know your interest working there
              </div>
              <textarea
                minLength={3}
                maxLength={250}
                name="message"
                className="self-stretch border-[color:var(--gray-gray-7,#8C8C8C)] flex shrink-0 h-[163px] flex-col mt-8 border-[0.5px] border-solid px-4 py-2"
                value={textAreaValue}
                onChange={handleTextAreaChange}
              />
              <button
                type="submit"
                className="hue-btn-primary w-full lg:w-fit lg:ml-auto btn mt-16"
                disabled={
                  !!nameerror ||
                  !!emailError ||
                  !!phoneError ||
                  selectedFileName === null ||
                  personname === '' ||
                  email === '' ||
                  phone === '' ||
                  fromDate === null ||
                  toDate === null ||
                  institute === '' ||
                  deg === ''
                }
              >
                Submit
              </button>
            </div>
          </Form>
        </Drawer>
      </div>
    </>
  )
}
export default JobDescription
