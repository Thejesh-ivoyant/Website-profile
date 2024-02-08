// src/components/Card.js
import { useLoaderData } from "@remix-run/react";


const ProjectPortfolio = () => {
  const loaderData = useLoaderData() as any;

  return (
    <>
      <div className="portfolio-container ">
        <div className="portfolio-summary-card">
          <p  className="portfolio-text">
          {loaderData?.s3_countryCount}
          </p>
          <p className="portfolio-titles">
          Country
          </p>
         
        </div>
        <div>
        <svg className="svg-lines" width="2" height="300" viewBox="0 0 2 300" fill="none" xmlns="http://www.w3.org/2000/svg"><path transform="matrix(-1 0 0 1 1.666 0)" fill="url(#a)" d="M0 0h1v150H0z"/><path transform="rotate(-180 1.666 300)" fill="url(#b)" d="M1.666 300h1v150h-1z"/><defs><linearGradient id="a" x1="1.5" y1="148.882" x2="1.5" y2="-2.683" gradientUnits="userSpaceOnUse"><stop stopColor="#CDBCFF"/><stop offset="1" stopColor="#8B2BB8" stopOpacity="0"/></linearGradient><linearGradient id="b" x1="3.166" y1="448.882" x2="3.166" y2="297.317" gradientUnits="userSpaceOnUse"><stop stopColor="#CDBCFF"/><stop offset="1" stopColor="#8B2BB8" stopOpacity="0"/></linearGradient></defs></svg>

        </div>
        
        <div className="portfolio-summary-card">
        <p  className="portfolio-text ">
          {loaderData?.s3_projectDelieverdCount}
          </p>
          <p className="portfolio-titles">

          Projects Delivered
          </p>
       
        </div>
        <div>
        <svg className="svg-lines" width="2" height="300" viewBox="0 0 2 300" fill="none" xmlns="http://www.w3.org/2000/svg"><path transform="matrix(-1 0 0 1 1.666 0)" fill="url(#a)" d="M0 0h1v150H0z"/><path transform="rotate(-180 1.666 300)" fill="url(#b)" d="M1.666 300h1v150h-1z"/><defs><linearGradient id="a" x1="1.5" y1="148.882" x2="1.5" y2="-2.683" gradientUnits="userSpaceOnUse"><stop stopColor="#CDBCFF"/><stop offset="1" stopColor="#8B2BB8" stopOpacity="0"/></linearGradient><linearGradient id="b" x1="3.166" y1="448.882" x2="3.166" y2="297.317" gradientUnits="userSpaceOnUse"><stop stopColor="#CDBCFF"/><stop offset="1" stopColor="#8B2BB8" stopOpacity="0"/></linearGradient></defs></svg>

        </div>
        <div className="portfolio-summary-card">
        <p  className="portfolio-text">
          {loaderData?.s3_TotalProjectCount}
          </p>
          <p className="portfolio-titles">
          Total projects
          </p>
   
        </div>
      </div>
    </>
  );
};

export default ProjectPortfolio;
