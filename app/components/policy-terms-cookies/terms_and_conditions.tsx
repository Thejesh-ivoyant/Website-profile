import { useEffect, useState } from 'react'
import Bulletimg from '../../../public/assets/BulletPoint.svg'
import { useLoaderData, useLocation } from '@remix-run/react'
const Terms = () => {
  const loaderData = useLoaderData() as any
  const location = useLocation()
  const [activeTile, setActiveTile] = useState(0)
  useEffect(()=>{
    setActiveTile(0)
  },[location])
  function scrollToSection(section: string, tileId:number = 0) {
    setActiveTile(tileId)
  const targetElement = document.getElementById(section)
  if (targetElement) {
    const scrollableParent = targetElement.closest('scrollable-element')
    if (scrollableParent) {
      // Declare scrollPosition here, within the if block
      const scrollPosition = targetElement.offsetTop - 94
      scrollableParent.scrollTo({
        top: scrollPosition,
        behavior: 'smooth',
      })
    } else {
      // Declare scrollPosition here, within the else block
      const scrollPosition = targetElement.offsetTop - 94
      window.scrollTo({
        top: scrollPosition,
        behavior: 'smooth',
      })
    }
  } else {
    console.error(`Element with ID '${section}' not found.`)
  }
}
  useEffect(() => {
    const handleScroll = () => {
      let sidebar = document.getElementById('contact-sidebar')
      let sidebarContent = document.getElementsByClassName(
        'contact-content-wrapper'
      )[0] as HTMLElement
      if (!sidebar || !sidebarContent) return
      let scrollTop = window.scrollY
      let viewportHeight = window.innerHeight
      let contentHeight = sidebarContent.getBoundingClientRect().height
      let sidebarTop = sidebar.getBoundingClientRect().top + window.pageYOffset
      let contactMain = document.getElementById('contact-main')
      let contactMainheight = contactMain?.getBoundingClientRect().height ?? 0
      if (
        scrollTop >= contentHeight - viewportHeight + sidebarTop &&
        scrollTop <= contactMainheight
      ) {
        sidebarContent.style.transform = `translateY(-${
          contentHeight - viewportHeight + sidebarTop + 120
        }px)`
        sidebarContent.style.position = 'fixed'
        sidebarContent.style.width = '30%'
      } else {
        sidebarContent.style.transform = ''
        sidebarContent.style.position = ''
        sidebarContent.style.width = ''
      }
    }
    window.addEventListener('scroll', handleScroll)
    return () => {
      window.removeEventListener('scroll', handleScroll)
    }
  }, [])
  return (
    <>
      <div className="gap-5 px-5 mt-10 w-full flex flex-row justify-center">
        <aside className="aside">
          <div className="contact-content-wrapper">
            <div
            role="button" aria-label="Overview"
              onClick={() => scrollToSection('Overview',1)}
              className={`cursor-pointer items-stretch shadow bg-white flex flex-col justify-center  max-md:max-w-full relative highlight  ${(activeTile ===1 )? "active": ""}`}
            >
              <div className="flex justify-between gap-4 p-4 items-start max-md:max-w-full max-md:flex-wrap max-md:pr-5 ">
                <img
                  role="presentation"
                  aria-hidden="true"
                  loading="lazy"
                  src={Bulletimg}
                  alt="bulleticon"
                  className="aspect-square object-contain object-center w-7 overflow-hidden shrink-0 max-w-full"
                />{' '}
                <div className="text-slate-950 text-xl font-semibold tracking-wide self-stretch grow ">
                  Overview
                </div>
              </div>
            </div>
            <div
            role="button" aria-label='Generic Terms of Use'
              onClick={() => scrollToSection('Generic-Terms-of-Use',2)}
              className={`cursor-pointer items-stretch shadow bg-white flex flex-col justify-center mt-4 max-md:max-w-full relative highlight  ${(activeTile ===2)? "active": ""}`}
            >
              <div className="flex justify-between gap-4 p-4 items-start max-md:max-w-full max-md:flex-wrap max-md:pr-5 ">
                <img
                  role="presentation"
                  aria-hidden="true"
                  loading="lazy"
                  src={Bulletimg}
                  alt="bulleticon"
                  className="aspect-square object-contain object-center w-7 overflow-hidden shrink-0 max-w-full"
                />{' '}
                <div className="text-slate-950 text-xl font-semibold tracking-wide self-stretch grow ">
                  Generic Terms of Use {' '}
                </div>
              </div>
            </div>{' '}
            <div
            role="button" aria-label='Disclaimer'
              onClick={() => scrollToSection('Disclaimer',3)}
              className={`cursor-pointer items-stretch shadow bg-white flex flex-col justify-center mt-4 max-md:max-w-full relative highlight  ${(activeTile ===3)? "active": ""}`}
            >
              <div className="flex justify-between gap-4 p-4 items-start max-md:max-w-full max-md:flex-wrap max-md:pr-5 ">
                <img
                  role="presentation"
                  aria-hidden="true"
                  loading="lazy"
                  src={Bulletimg}
                  alt="bulleticon"
                  className="aspect-square object-contain object-center w-7 overflow-hidden shrink-0 max-w-full"
                />{' '}
                <div className="text-slate-950 text-xl font-semibold tracking-wide self-stretch grow ">
                  Disclaimer{' '}
                </div>
              </div>
            </div>{' '}
            <div
            role="button" aria-label='Client and Partner Confidentiality'
              onClick={() => scrollToSection('Client-and-Partner-Confidentiality',4)}
              className={`cursor-pointer items-stretch shadow bg-white flex flex-col justify-center mt-4 max-md:max-w-full relative highlight  ${(activeTile ===4)? "active": ""}`}
            >
              <div className="flex justify-between gap-4 p-4 items-start max-md:max-w-full max-md:flex-wrap max-md:pr-5 ">
                <img
                  role="presentation"
                  aria-hidden="true"
                  loading="lazy"
                  src={Bulletimg}
                  alt="bulleticon"
                  className="aspect-square object-contain object-center w-7 overflow-hidden shrink-0 max-w-full my-auto"
                />{' '}
                <div className="text-slate-950 text-xl font-semibold tracking-wide self-stretch grow ">
                  Client and Partner Confidentiality{' '}
                </div>
              </div>
            </div>{' '}
            <div
            role="button" aria-label='Business Relationships'
              onClick={() => scrollToSection('Business-Relationships',5)}
              className={`cursor-pointer items-stretch shadow bg-white flex flex-col justify-center mt-4 max-md:max-w-full relative highlight  ${(activeTile ===5)? "active": ""}`}
            >
              <div className="flex justify-between gap-4 p-4 items-start max-md:max-w-full max-md:flex-wrap max-md:pr-5 ">
                <img
                  role="presentation"
                  aria-hidden="true"
                  loading="lazy"
                  src={Bulletimg}
                  alt="bulleticon"
                  className="aspect-square object-contain object-center w-7 overflow-hidden shrink-0 max-w-full"
                />{' '}
                <div className="text-slate-950 text-xl font-semibold tracking-wide self-stretch grow ">
                  Business Relationships{' '}
                </div>
              </div>
            </div>{' '}
            <div
            role="button" aria-label='Disclaimer of Warranty'
              onClick={() => scrollToSection('Disclaimer-of-Warranty',6)}
              className={`cursor-pointer items-stretch shadow bg-white flex flex-col justify-center mt-4 max-md:max-w-full relative highlight  ${(activeTile ===6)? "active": ""}`}
            >
              <div className="flex justify-between gap-4 p-4 items-start max-md:max-w-full max-md:flex-wrap max-md:pr-5 ">
                <img
                  role="presentation"
                  aria-hidden="true"
                  loading="lazy"
                  src={Bulletimg}
                  alt="bulleticon"
                  className="aspect-square object-contain object-center w-7 overflow-hidden shrink-0 max-w-full"
                />{' '}
                <div className="text-slate-950 text-xl font-semibold tracking-wide self-stretch grow ">
                  Disclaimer of Warranty{' '}
                </div>
              </div>
            </div>{' '}
            <div
            role="button" aria-label='Limitation of Liability'
              onClick={() => scrollToSection('Limitation-of-Liability',7)}
              className={`cursor-pointer items-stretch shadow bg-white flex flex-col justify-center mt-4 max-md:max-w-full relative highlight  ${(activeTile ===7)? "active": ""}`}
            >
              <div className="flex justify-between gap-4 p-4 items-start max-md:max-w-full max-md:flex-wrap max-md:pr-5 ">
                <img
                  role="presentation"
                  aria-hidden="true"
                  loading="lazy"
                  src={Bulletimg}
                  alt="bulleticon"
                  className="aspect-square object-contain object-center w-7 overflow-hidden shrink-0 max-w-full"
                />{' '}
                <div className="text-slate-950 text-xl font-semibold tracking-wide self-stretch grow ">
                  Limitation of Liability{' '}
                </div>
              </div>
            </div>{' '}
          </div>
        </aside>
        <div
          id="contact-main"
          className="pb-16  w-1/2 flex flex-col items-stretch  ml-5 max-md:w-full max-md:ml-0"
        >
          {/* main content goes here */}
          <div className="items-stretch flex grow flex-col max-md:max-w-full max-md:mt-10">
            <div
              id="Overview"
              aria-label="Overview"
              className="text-violet-950 text-3xl font-semibold leading-10 tracking-wider mt-8 max-md:max-w-full"
            >
              Overview
            </div>
            <div
              aria-label="Overview description"
              className="text-neutral-800 text-base leading-7 mt-4 max-md:max-w-full"
            >
              {loaderData.overview}
            </div>
            <div
              id="Generic-Terms-of-Use"
              aria-label="Generic Terms of Use"
              className="text-violet-950 text-3xl font-semibold leading-10 tracking-wider mt-8 max-md:max-w-full"
            >
              Generic Terms of Use
            </div>
            <div
              className="text-neutral-800 text-base leading-7 mt-4 max-md:max-w-full"
              aria-label="Description for Generic Terms of Use"
            >
              {loaderData.generic}
            </div>
            <div
              id="Disclaimer"
              aria-label="Disclaimer"
              className="text-violet-950 text-3xl font-semibold leading-10 tracking-wider mt-8 max-md:max-w-full"
            >
              Disclaimer
            </div>
            <div
              className="text-neutral-800 text-base leading-7 mt-4 max-md:max-w-full"
              aria-label="Disclaimer"
            >
              {loaderData.disclaimer}
            </div>
            <div
              aria-label="Confidential Information from Clients and Partners"
              id="Client-and-Partner-Confidentiality"
              className="text-violet-950 text-3xl font-semibold leading-10 tracking-wider  mt-8 max-md:max-w-full"
            >
              Confidential Information from Clients and Partners 
            </div>
            <div
              aria-label="Description for Confidential Information from Clients and Partners "
              className="text-neutral-800 text-base leading-7 mt-4 max-md:max-w-full"
            >
              {loaderData.confidentialityParagraph1}
            </div>
            <div
              aria-label="Business Relationships"
              id="Business-Relationships"
              className="text-violet-950 text-3xl font-semibold leading-10 tracking-wider  mt-8 max-md:max-w-full"
            >
              Business Relationships 
            </div>
            <div
              aria-label="Description for Business Relationships"
              className="text-neutral-800 text-base leading-7 mt-4 max-md:max-w-full"
            >
              {loaderData.relationships}
            </div>
            <div
              aria-label="Disclaimer of warranty"
              id="Disclaimer-of-Warranty"
              className="text-violet-950 text-3xl font-semibold leading-10 tracking-wider mt-8 max-md:max-w-full"
            >
              Disclaimer of Warranty
            </div>
            <div
              aria-label="Description for Disclaimer of warranty"
              className="text-neutral-800 text-base leading-7 mt-4 max-md:max-w-full"
            >
              {loaderData.warranty}
            </div>
            <div
              aria-label="Limitation of Liability"
              id="Limitation-of-Liability"
              className="text-violet-950 text-3xl font-semibold leading-10 tracking-wider mt-8 max-md:max-w-full"
            >
              Limitation of Liability
            </div>
            <div
              aria-label="Discription for Limitation of Liability"
              className="text-neutral-800 text-base leading-7 mt-4 max-md:max-w-full"
            >
              {loaderData.limitation}
            </div>
          </div>
        </div>
      </div>
    </>
  )
}
export default Terms
