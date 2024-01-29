
import { Link, useLoaderData } from "@remix-run/react";

import WhitePaperCard from "./whitepaper";
import IWhitePaper from "~/interfaces/IWhitePaper";
import { useState } from "react";
import { fetchGraphQL } from "~/graphql/fetchGraphQl";
import { getWhitepaperBasedonLimit } from "~/graphql/queries";
const WhitePaperCardContainer = () => {
  const loaderData = useLoaderData() as any;
  const [whitePaperData, setWhitePaperData] = useState(loaderData.whitePaperData || []);
  const [limit, setLimit] = useState(6); // Initial limit

  const fetchMoreData = async () => {
    const updatedQuery = getWhitepaperBasedonLimit(limit + 3);
    const newWhitepaperData = await fetchGraphQL(updatedQuery);

    // Map and update the state with the new data
    setWhitePaperData(() => [
      ...newWhitepaperData.data.whitePapers.data.map((item: any) => ({
        id: item.id,
        title: item.attributes.title,
        description1: item.attributes.description1,
        date: item.attributes.date,
        maxReadTime: item.attributes.maxReadTime,
        bannerImage: {
          name: item.attributes.bannerImage.data?.attributes.name ?? "",
          url: item.attributes.bannerImage.data?.attributes.url ?? "",
        },
        author: {
          name: item.attributes.author.data?.attributes.name,
          avatar: item.attributes.author.data?.attributes.avatar.data?.attributes?.url,
        },
      }))
    ]);

    // Increment the limit for the next fetch
    setLimit(limit + 3);
  };


  return (
    <div className="w-full bg-white pb-8 h-fit">
      <div className="text-head-grape text-4xl  w-full justify-center flex py-8 h-fit gradient-bottom">
        <span className="section-title">
        {loaderData.s2_title}
        </span>
      </div>
      
      <div className="w-full h-fit p-2  flex flex-row justify-around">
        <img src="../assets/Ornament.png" className="absolute top-4 left-4 -z-20" alt="ornament" />
  <div className="blog-container-property" >
  
  {whitePaperData.map((paper: IWhitePaper) => (
        <Link to={`../resources/whitepaper/${paper.id}`} key={paper.id} state={{ whitePaperData: whitePaperData }}>
            <div className="custom-service-grid ">
            <WhitePaperCard key={paper.id} paper={paper} />
             </div>
           
            </Link>
        ))}

        </div>
      </div>
      <div className="mx-auto w-full flex justify-center items-center" onClick={fetchMoreData}>
    <button className="button-test font-montserrat font-thin"> <span className="font-thin">Explore Now</span></button>
      </div>
      
    </div>
  );
};

export default WhitePaperCardContainer;




 

