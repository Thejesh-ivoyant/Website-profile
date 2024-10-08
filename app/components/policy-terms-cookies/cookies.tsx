import { useEffect, useState } from 'react'
import Bulletimg from '../../../public/assets/BulletPoint.svg'
import { useLoaderData, useLocation } from '@remix-run/react'

const Cookies = () => {
  const [activeTile, setActiveTile] = useState<number>(0)
  const loaderData = useLoaderData() as any
  const location = useLocation()
  useEffect(() => {
    setActiveTile(0)
  }, [location])
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
  function scrollToSection(section: string, tileId: number = 0) {
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
  return (
    <>
      {' '}
      <div className="gap-5 px-5 mt-10 w-full flex flex-row justify-center">
        <aside className="aside">
          {' '}
          {/* side nav content goes here*/}
          <div className="contact-content-wrapper">
            <div
              aria-label="What Are Cookies"
              onClick={() => scrollToSection('what-are-cookies', 1)}
              className={`cursor-pointer items-stretch shadow bg-white flex flex-col justify-center max-md:max-w-full relative mt-4 highlight ${activeTile === 1 ? 'active' : ''}`}
            >
              <div className="flex justify-between    gap-4 p-4 items-start max-md:max-w-full max-md:flex-wrap max-md:pr-5">
                <img
                  role="presentation"
                  aria-hidden="true"
                  loading="lazy"
                  alt="bulleticon"
                  src={Bulletimg}
                  className="aspect-square object-contain object-center w-7 overflow-hidden shrink-0 max-w-full"
                />{' '}
                <div className="text-slate-950 text-xl font-semibold tracking-wide self-stretch grow ">
                  What Are Cookies
                </div>
              </div>
            </div>{' '}
            <div
              aria-label="Description as to how we use cookies"
              onClick={() => scrollToSection('How-We-Use-Cookies', 2)}
              className={`cursor-pointer items-stretch shadow bg-white flex flex-col justify-center max-md:max-w-full relative highlight mt-4 ${activeTile === 2 ? 'active' : ''}`}
            >
              <div className=" flex justify-between gap-4 p-4 items-start max-md:max-w-full max-md:flex-wrap max-md:pr-5 ">
                <img
                  role="presentation"
                  aria-hidden="true"
                  loading="lazy"
                  src={Bulletimg}
                  alt="bulleticon"
                  className="aspect-square object-contain object-center w-7 overflow-hidden shrink-0 max-w-full"
                />{' '}
                <div className="text-slate-950 text-xl font-semibold tracking-wide self-stretch grow ">
                  How We Use Cookies{' '}
                </div>
              </div>
            </div>{' '}
            <div
              onClick={() => scrollToSection('Disabling-Cookies', 3)}
              className={`cursor-pointer items-stretch shadow bg-white flex flex-col justify-center max-md:max-w-full relative highlight mt-4 ${activeTile === 3 ? 'active' : ''}`}
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
                  Disabling Cookies{' '}
                </div>
              </div>
            </div>{' '}
            <div
              aria-label="Forms related cookies"
              onClick={() => scrollToSection('Forms-related-cookies', 4)}
              className={`cursor-pointer items-stretch shadow bg-white flex flex-col justify-center max-md:max-w-full relative highlight mt-4 ${activeTile === 4 ? 'active' : ''}`}
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
                  Forms related cookies{' '}
                </div>
              </div>
            </div>{' '}
            <div
              aria-label="Forms related cookies"
              onClick={() => scrollToSection('Third-Party-Cookies', 5)}
              className={`cursor-pointer items-stretch shadow bg-white flex flex-col justify-center max-md:max-w-full relative highlight mt-4 ${activeTile === 5 ? 'active' : ''}`}
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
                  Third Party Cookies{' '}
                </div>
              </div>
            </div>{' '}
            <div
              onClick={() => scrollToSection('More-Information', 6)}
              className={`cursor-pointer items-stretch shadow bg-white flex flex-col justify-center max-md:max-w-full relative highlight mt-4 ${activeTile === 6 ? 'active' : ''}`}
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
                  More Information {' '}
                </div>
              </div>
            </div>{' '}
          </div>
        </aside>
        <div
          id="contact-main"
          className=" pb-16 w-1/2 flex flex-col items-stretch  ml-5 max-md:w-full max-md:ml-0"
        >
          {/* main content goes here */}
          <div className="items-stretch flex grow flex-col max-md:max-w-full max-md:mt-10">
            <div
              id="what-are-cookies"
              className="text-violet-950 text-3xl font-semibold leading-10 tracking-wider mt-8 max-md:max-w-full"
            >
              What Are Cookies
            </div>
            <div className="text-neutral-800 text-base leading-7 mt-4 max-md:max-w-full">
              {loaderData.cookies}
            </div>
            <div
              id="How-We-Use-Cookies"
              className="text-violet-950 text-3xl font-semibold leading-10 tracking-wider mt-8 max-md:max-w-full"
            >
              How We Use Cookies
            </div>
            <div className="text-neutral-800 text-base leading-7 mt-4 max-md:max-w-full">
              {loaderData.use}
            </div>
            <div
              id="Disabling-Cookies"
              className="text-violet-950 text-3xl font-semibold leading-10 tracking-wider mt-8 max-md:max-w-full"
            >
              Disabling Cookies 
            </div>
            <div className="text-neutral-800 text-base leading-7 mt-4 max-md:max-w-full">
              {loaderData.disabling}
            </div>
            <div
              id="Forms-related-cookies"
              className="text-violet-950 text-3xl font-semibold leading-10 tracking-wider  mt-8 max-md:max-w-full"
            >
              Forms related cookies 
            </div>
            <div className="text-neutral-800 text-base leading-7 mt-4 max-md:max-w-full">
              {loaderData.forms_cookies}
            </div>
            <div
              id="Third-Party-Cookies"
              className="text-violet-950 text-3xl font-semibold leading-10 tracking-wider  mt-8 max-md:max-w-full"
            >
              Third Party Cookies 
            </div>
            <div className="text-neutral-800 text-base leading-7 mt-4 max-md:max-w-full">
              {loaderData.third_party_cookies}
            </div>
            <div
              id="More-Information"
              className="text-violet-950 text-3xl font-semibold leading-10 tracking-wider mt-8 max-md:max-w-full"
            >
              More Information 
            </div>
            <div className="text-neutral-800 text-base leading-7 mt-4 max-md:max-w-full">
              {loaderData.more_info}
            </div>
          </div>
        </div>
      </div>
    </>
  )
}
export default Cookies
