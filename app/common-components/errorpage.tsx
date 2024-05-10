import { Link } from '@remix-run/react'
const ErrorBoundaryPage = ({ error }: { error: any }) => {
  console.warn("Error Occured ",error?.message);
  return (
    <div className="bg-white flex flex-col">
      <div className="self-center w-[913px] max-w-full mt-10 max-md:mt-10">
        <div className="gap-5 flex max-md:flex-col max-md:items-stretch max-md:gap-0">
          <div className="flex flex-col items-stretch w-[58%] max-md:w-full max-md:ml-0">
            <div className="error-left-container  flex flex-col my-auto px-5 max-md:max-w-full max-md:mt-10">
              <div className="text-zinc-600 text-3xl font-bold leading-10">Oops....</div>
              <div className="text-zinc-600 text-2xl leading-8  mt-3 ">{error?.name} {error?.status} </div>
              <div className=" text-zinc-600 text-base leading-6 tracking-wide  mt-4 max-md:max-w-full">
                {error && error?.message? "Something Went Wrong":""}   {error && error.status === 404
                  ? "This Page doesn't exist or was removed!"
                  : error?.statusText}
              </div>{' '}
              <Link to="/">
                <div className="justify-centeritems-center flex gap-1 mt-1 py-2 self-start">
                  <img
                    loading="lazy"
                    src="../assets/backarrow.svg"
                    alt="error"
                    className="aspect-square object-contain object-center w-5 overflow-hidden shrink-0 max-w-full my-auto"
                  />{' '}
                  <div className="text-blue-600 text-base self-stretch grow whitespace-nowrap">
                    Go back
                  </div>
                </div>
              </Link>
            </div>
          </div>{' '}
          <div className="flex flex-col items-stretch w-[42%] ml-5 max-md:w-full max-md:ml-0">
            <div className="flex-col overflow-hidden relative flex aspect-square justify-center items-stretch max-md:mt-10 ">
              <img
                alt="error"
                loading="lazy"
                src="../assets/error.png"
                className="absolute h-full w-full object-contain object-center inset-0"
              />{' '}
              <div className="relative flex flex-col items-stretch pt-5 pb-12 px-7 max-md:px-5"></div>
            </div>
          </div>
        </div>
      </div>{' '}
      <div className="bg-[#F9F8FC]  flex w-full  ">
        <div className="w-[38.4777%] flex    ">
          <div className='flex flex-col mt-4 pl-[12.63%]'>
            <div className="text-neutral-800 text-base leading-8  whitespace-nowrap">
              Here are some helpful links instead
            </div>{' '}
            <Link to="/contact-us">
              <div className="text-blue-600 text-sm whitespace-nowrap mt-2.5 self-start">Contact us</div>{' '}
            </Link>
            <Link to="/company/sitemap">
              <div className="text-blue-600 text-sm whitespace-nowrap mt-1.5 self-start">Sitemap</div>{' '}
            </Link>
            <Link to="/company/about-us">
              <div className="text-blue-600 text-sm whitespace-nowrap mt-1.5 self-start">About us</div>{' '}
            </Link>
            <Link to="/products">
              <div className="text-blue-600 text-sm whitespace-nowrap mt-1.5 self-start">Products</div>{' '}
            </Link>
            <Link to="/resources/case-studies">
              <div className="text-blue-600 text-sm whitespace-nowrap mt-1.5 self-start">Case Studies</div>
            </Link>
          </div>
        </div>{' '}
        <div className="bg-gray-200  flex w-px shrink-0 h-36 flex-col mt-4" />{' '}
        <div className="flex flex-1 mt-4  ">
          <div className='flex w-[50.5%] items-center justify-end'>
            <div className='flex w-[59.17%] flex-col'>
              <div className="text-neutral-800 text-xl font-semibold leading-7">
                Download our latest Website accessibility Guide
              </div>{' '}
              <div className="text-zinc-600 text-sm leading-6 mt-3">
                We have curated a Web accessibility guide for you, prepared by our Accessibility
                experts.{' '}
              </div>{' '}
              <div className="hue-btn-primary  btn text-white text-sm leading-6 tracking-wide capitalize justify-center ">
                Download Guide
              </div>
            </div>

          </div>
          <div className='flex flex-1 flex-col items-start'>
            <img
              alt="error"
              loading="eager"
              src="../assets/error-mobile.png"
              className="mb-[10px] flex h-[17rem] object-contain object-center w-[326px] overflow-y-scroll self-stretch shrink-0 max-w-full"
            />
          </div>
        </div>{' '}

      </div>{' '}
    </div>
  )
}
export default ErrorBoundaryPage
