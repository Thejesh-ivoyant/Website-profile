import { useLoaderData } from '@remix-run/react'
import { Image } from '@unpic/react'
const PTCHero = () => {
  const loaderData = useLoaderData() as any
  const gradientStyle = {
    zIndex: -1,
    background: `linear-gradient(100deg, white 55%, transparent 50%), url(${loaderData?.heroImage})`,
    backgroundSize: 'cover',
    backgroundPosition: 'center',
  }
  return (
    <>
      <div
        role="banner"
        className="relative md:flex hidden screen-height mt-20 flex-row min-h-fit"
        style={gradientStyle}
      >
        <div className="w-1/2 grid place-items-center px-6">
          <div className=" flex flex-col my-auto max-w-lg">
            <h1 className="ptc-hero-title">
              {loaderData?.heroTitle}
            </h1>
            <p className="font-poppins text-base lg:text-lg font-normal lg:leading-8 leading-6 text-justify mt-5">
              {loaderData?.heroDescription}
            </p>
          </div>
        </div>
      </div>
      <section className=" md:hidden flex py-12 px-10 mt-16 flex-row ">
        <div className=" flex flex-col my-auto max-w-lg">
          <h1 className="font-montserrat text-4xl font-bold text-haiti italic leading-10">
            {loaderData?.heroTitle}
          </h1>
          <p className="font-poppins text-sm font-normal leading-6 text-justify mt-5">
            {loaderData?.heroDescription}
          </p>
        </div>
      </section>
      <Image
        role="presentation"
        aria-hidden="true"
        src={loaderData?.heroImage}
        width={768}
        height={500}
        className="h-72 w-full object-cover object-right md:hidden block"
      />
      
    </>
  )
}

export default PTCHero
