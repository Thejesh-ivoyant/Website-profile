const Section6 = ({ data }: { data: any }) => {
  return (
    <>
      <div className="flex flex-col w-full max-h-fit lg:flex-row CardDark">
        <div className="flex lg:w-1/2 flex-1 bg-white flex-wrap w-full text-black font-medium justify-center items-center p-4">
          <div className="flex flex-col gap-7 w-[34rem]  h-fit">
          <div className="flex bg-black font-montserrat italic px-1 h-fit w-fit text-white md:text-base text-sm">{data?.section6MiniTitle}</div>
          <div className="about-title">
              {data?.section_6_title}
          </div>
            <div
              className="text-md font-poppins font-light lg:leading-[1.75rem] "
              id="about-desc"
            >
              {data?.section_6_description}
            </div>
          </div>
        </div>
        <div className="relative h-full flex items-center  justify-center font-montserrat overflow-hidden opacity-95 my-auto">
          <div className="moving-bg"></div>
          <div className="grid grid-cols-2 aspect-square w-full">
            <div className="aspect-square inline-flex justify-center items-center col-span-1 grape-shadow">
              <div className="flex md:flex-row flex-col w-fit gap-3 p-10">
                <div className="summary-card-txt-clamp font-extrabold md:text-left text-center">
                  20
                </div>
                <div className="text-xl h-12 aspect-[19/8] my-auto leading-none md:text-left text-center">
                  Delighted Clients
                </div>
              </div>
            </div>
            <div className="aspect-square inline-flex justify-center border-container-top items-center col-span-1 grape-shadow">
              <div className="flex md:flex-row flex-col w-fit gap-3 p-10">
                <div className="summary-card-txt-clamp font-extrabold  md:text-left text-center">
                  30+
                </div>
                <div className="summary-card-side-text-clamp h-12 aspect-[19/8] my-auto leading-none md:text-left text-center">
                  Years of Experience
                </div>
              </div>
            </div>
            <div className="aspect-square inline-flex justify-center border-container-left  items-center col-span-1 grape-shadow">
              <div className="flex md:flex-row flex-col w-fit gap-3 p-10">
                <div className="summary-card-txt-clamp font-extrabold  md:text-left text-center">
                  35
                </div>
                <div className="summary-card-side-text-clamp h-12 aspect-[19/8] my-auto leading-none md:text-left text-center">
                  Successful Projects
                </div>
              </div>
            </div>
            <div className="aspect-square inline-flex justify-center border-container-bottom items-center col-span-1 grape-shadow">
              <div className="flex md:flex-row flex-col w-fit gap-3 p-10">
                <div className="summary-card-txt-clamp font-extrabold  md:text-left text-center">
                  120
                </div>
                <div className="summary-card-side-text-clamp h-12 aspect-[19/8] my-auto leading-none md:text-left text-center">
                  In-House Experts
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};
export default Section6;
