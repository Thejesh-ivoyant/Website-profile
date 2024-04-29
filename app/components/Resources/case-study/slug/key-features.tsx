export const Features = ({ data }: { data: any }) => {
  return (
    <>
      <div className="grid place-items-center gap-6 xl:mx-12 lg:mx-8 mx-4 p-7 my-6">
        <div className="italic font-montserrat md:mr-0 mr-auto bg-haiti w-fit text-white px-1">
          {data?.section4MiniTitle}
        </div>
        <div className="text-PurpBlue md:text-center  font-montserrat md:text-4xl text-3xl font-semibold">
          {data?.section_4_title}
        </div>
         <svg
                width="100%"
                height="25"
                viewBox="0 0 328 25"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <rect
                  y="12.5"
                  width="1"
                  height="164"
                  transform="rotate(-90 0 12.5)"
                  fill="url(#paint0_linear_13978_146117)"
                />
                <rect
                  x="328"
                  y="11.5"
                  width="1"
                  height="164"
                  transform="rotate(90 328 11.5)"
                  fill="url(#paint1_linear_13978_146117)"
                />
                <defs>
                  <linearGradient
                    id="paint0_linear_13978_146117"
                    x1="1.5"
                    y1="175.278"
                    x2="1.5"
                    y2="9.56706"
                    gradientUnits="userSpaceOnUse"
                  >
                    <stop stop-color="#AEBEFF" />
                    <stop offset="1" stop-color="#A7B8FE" stop-opacity="0" />
                  </linearGradient>
                  <linearGradient
                    id="paint1_linear_13978_146117"
                    x1="329.5"
                    y1="174.278"
                    x2="329.5"
                    y2="8.56706"
                    gradientUnits="userSpaceOnUse"
                  >
                    <stop stop-color="#AEBEFF" />
                    <stop offset="1" stop-color="#A7B8FE" stop-opacity="0" />
                  </linearGradient>
                </defs>
              </svg>
        <p className="text-[#262626] md:text-center md:text-xl text-lg font-normal font-poppins">
          {data?.section_4_description}
        </p>
        <div className="w-full md:grid hidden place-items-center grid-cols-2 gap-6">
          {data?.section_4_cards?.map((item: any) => (
            <div
              key={item?.id}
              className="col-span-1 md:h-full h-fit xl:max-w-[40rem] xl:w-full flex flex-col lg:justify-around items-center p-6 gap-2 feature-card"
            >
              <h3 className="hue-blue-text-gradient text-center text-2xl font-montserrat font-medium">
                {item?.name}
              </h3>
              <svg
                width="100%"
                height="25"
                viewBox="0 0 328 25"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <rect
                  y="12.5"
                  width="1"
                  height="164"
                  transform="rotate(-90 0 12.5)"
                  fill="url(#paint0_linear_13978_146117)"
                />
                <rect
                  x="328"
                  y="11.5"
                  width="1"
                  height="164"
                  transform="rotate(90 328 11.5)"
                  fill="url(#paint1_linear_13978_146117)"
                />
                <defs>
                  <linearGradient
                    id="paint0_linear_13978_146117"
                    x1="1.5"
                    y1="175.278"
                    x2="1.5"
                    y2="9.56706"
                    gradientUnits="userSpaceOnUse"
                  >
                    <stop stop-color="#AEBEFF" />
                    <stop offset="1" stop-color="#A7B8FE" stop-opacity="0" />
                  </linearGradient>
                  <linearGradient
                    id="paint1_linear_13978_146117"
                    x1="329.5"
                    y1="174.278"
                    x2="329.5"
                    y2="8.56706"
                    gradientUnits="userSpaceOnUse"
                  >
                    <stop stop-color="#AEBEFF" />
                    <stop offset="1" stop-color="#A7B8FE" stop-opacity="0" />
                  </linearGradient>
                </defs>
              </svg>
              <p className="font-poppins xl:text-center text-justify text-ellipsis text-base font-normal">
                {item?.description}
              </p>
            </div>
          ))}
        </div>
        <div className="w-full md:hidden flex whitespace-nowrap overflow-x-scroll snap-x  gap-6 py-2">
          {data?.section_4_cards?.map((item: any) => (
            <div key={item?.id} className="mob-feature-card-layout snap-center">
              <h3 className="mob-feature-card-title whitespace-normal">{item?.name}</h3>
               <svg
                width="100%"
                height="25"
                viewBox="0 0 328 25"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <rect
                  y="12.5"
                  width="1"
                  height="164"
                  transform="rotate(-90 0 12.5)"
                  fill="url(#paint0_linear_13978_146117)"
                />
                <rect
                  x="328"
                  y="11.5"
                  width="1"
                  height="164"
                  transform="rotate(90 328 11.5)"
                  fill="url(#paint1_linear_13978_146117)"
                />
                <defs>
                  <linearGradient
                    id="paint0_linear_13978_146117"
                    x1="1.5"
                    y1="175.278"
                    x2="1.5"
                    y2="9.56706"
                    gradientUnits="userSpaceOnUse"
                  >
                    <stop stop-color="#AEBEFF" />
                    <stop offset="1" stop-color="#A7B8FE" stop-opacity="0" />
                  </linearGradient>
                  <linearGradient
                    id="paint1_linear_13978_146117"
                    x1="329.5"
                    y1="174.278"
                    x2="329.5"
                    y2="8.56706"
                    gradientUnits="userSpaceOnUse"
                  >
                    <stop stop-color="#AEBEFF" />
                    <stop offset="1" stop-color="#A7B8FE" stop-opacity="0" />
                  </linearGradient>
                </defs>
              </svg>
              <p className="mob-feature-card-desc text-ellipsis">{item?.description}</p>
            </div>
          ))}
        </div>
      </div>
    </>
  )
}
