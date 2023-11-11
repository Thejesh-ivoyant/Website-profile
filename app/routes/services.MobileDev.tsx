import React, { useEffect, useState, Suspense } from "react";
import IndustryFocus from "~/components/S-MobileAppDev/section-4/industry-focus";
// Create a loading component for suspense fallback
const ProjectPortfolio = React.lazy(() => import("~/components/S-MobileAppDev/section-3/project-portfolio"));
const LoadingComponent = React.lazy(() => import("~/common-components/loading"));
const ServiceCardContainer = React.lazy(() => import("../components/S-MobileAppDev/section-2/service-description-container"));
const Sidebar = React.lazy(() => import("~/common-components/sidebar"));
const Nav = React.lazy(() => import("~/common-components/nav"));
const Section4 = React.lazy(() => import("~/components/Homepage/section-4/clients"));
const Section6 = React.lazy(() => import("~/components/Homepage/section-6/partners"));
const Section5 = React.lazy(() => import("~/components/Homepage/section-5/industry"));
const Services = React.lazy(() => import("~/components/Homepage/section-3/services"));
const Consultation = React.lazy(() => import("~/components/Homepage/section-7/consultation"));
const Technology = React.lazy(() => import("~/components/Homepage/section-8/technology"));
const BlogsContainer = React.lazy(() => import("~/components/Homepage/section-10/blog-container"));
const Testimonials = React.lazy(() => import("~/components/Homepage/section-9/testimonials"));
const ContactUs = React.lazy(() => import("~/components/Homepage/contact-us/contactUs"));
const Why_Choose_Us = React.lazy(() => import("~/components/Homepage/section-11/why-choose-us"));
const Faq = React.lazy(() => import("~/components/Homepage/section-12/faq"));
const Footer = React.lazy(() => import("~/common-components/footer"));
const Hero = React.lazy(() => import("~/components/S-MobileAppDev/section-1/hero"));

const MobDev = () => {
  return (
    <div style={{ padding: "0px", overflowX: "hidden" }}>
      {/* Video Background */}
      <div className="video">
        <Suspense fallback={<LoadingComponent />}>
          <Hero />
        </Suspense>
      </div>
      <Suspense fallback={<LoadingComponent />}>
        <ServiceCardContainer />
        <ProjectPortfolio/>
      
   <IndustryFocus />

        <Section5 />
        <Section6 />
        <Consultation />
        <Technology />
      
        <BlogsContainer />
<LoadingComponent/>
        <Footer />
      </Suspense>
    </div>
  );
};

export default MobDev;
