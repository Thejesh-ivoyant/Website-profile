export const loader = () => {
    const robotText = `User-agent: *
Allow: /products
Allow: /contact-us
Allow: /products?name=data+mapper
Allow: /products?name=orch+engine
Allow: /products?name=change+data+capture
Allow: /products?name=error+nex
Allow: /products?name=fallout+manager
Allow: /company/about-us
Allow: /company/careers
Allow: /industries/healthcare
Allow: /industries/telecommunication
Allow: /industries/aviation
Allow: /industries/fmcg
Allow: /industries/travel-and-transportation
Allow: /industries/fintech
Allow: /services/customapplication
Allow: /services/mobiledev
Allow: /services/ui-ux
Allow: /services/data-integration
Allow: /services/devops
Allow: /services/websitedev
Allow: /services/apiintegration
Allow: /services/cloudmigration
Allow: /services/lowcode-nocode
Allow: /resources/blogs
Allow: /services/case-studies
Allow: /services/whitepapers
Allow: /services/lowcode-nocode`;

    return new Response(robotText, {
        status: 200,
        headers: {
            "Content-Type": "text/plain",
        }
    });
};
