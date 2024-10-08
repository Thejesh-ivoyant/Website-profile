import { useLoaderData } from '@remix-run/react'
const Why_Join_Us = () => {
  const loaderData = useLoaderData() as any
  return (
    <section className="relative flex flex-col items-center min-h-fit h-fit w-full bg-haiti text-white px-4 section-p-y gap-3">
      <h1 className="section-heading " style={{ color: 'var(--HeadingGray, #E9E9EC)' }}>
        {loaderData.s2_title}
      </h1>
      <svg
        width="100%"
        height="4"
        viewBox="0 0 1257 25"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <rect
          y="12.248"
          width="0.5"
          height="628.5"
          transform="rotate(-90 0 12.248)"
          fill="url(#paint0_linear_3363_29830)"
        />
        <rect
          x="1257"
          y="11.748"
          width="0.5"
          height="628.5"
          transform="rotate(90 1257 11.748)"
          fill="url(#paint1_linear_3363_29830)"
        />
        <defs>
          <linearGradient
            id="paint0_linear_3363_29830"
            x1="0.75"
            y1="636.065"
            x2="0.749987"
            y2="1.0081"
            gradientUnits="userSpaceOnUse"
          >
            <stop stopColor="#AEBEFF" />
            <stop offset="1" stopColor="#A7B8FE" stopOpacity="0" />
          </linearGradient>
          <linearGradient
            id="paint1_linear_3363_29830"
            x1="1257.75"
            y1="635.565"
            x2="1257.75"
            y2="0.508102"
            gradientUnits="userSpaceOnUse"
          >
            <stop stopColor="#AEBEFF" />
            <stop offset="1" stopColor="#A7B8FE" stopOpacity="0" />
          </linearGradient>
        </defs>
      </svg>
      <p className="md:text-center md:w-3/4  leading-6 lg:text-base text-sm tracking-wider font-poppins">
        {loaderData.s2_description}
      </p>
      <div className="grid w-full join-card-gap xl:grid-cols-3 md:grid-cols-2 justify-items-center gap-4 py-6 xl:px-6 blur-[150%] bg-opacity-[0.16] moving-noise">
        {loaderData.JoinUsCard.map((item: any, index: any) => (
          <div
            key={item.id}
            className="group relative flex flex-col items-center opaque-card aspect-video py-2 w-full max-w-[28.5rem] "
          >
            <img
              src={item.bgImage}
              alt={item.title}
              className="hidden p-2 w-10 h-10 aspect-square absolute top-0 left-0 transition-opacity lg:group-hover:block"
            />
            <img
              src={item.bgImage}
              alt={item.title}
              className="mb-2 p-2 sm:h-16 h-14 aspect-square lg:group-hover:hidden"
            ></img>
            <p className="text-center lg:leading-8 text-[FFFFFFD9] font-poppins w-4/5 lg:group-hover:hidden md:text-base text-sm">
              {item.title}
            </p>
            <p className="relative pt-4 px-4 text-xs leading-5 md:text-base font-light lg:text-base text-left text-[FFFFFFD9] font-poppins  hidden lg:group-hover:block">
              {item.description}
            </p>
          </div>
        ))}
      </div>
    </section>
  )
}
export default Why_Join_Us
