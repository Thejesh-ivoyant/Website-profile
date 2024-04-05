import { Link } from '@remix-run/react'

const CaseCard = ({ blog, blogData }: { blog: any; blogData: any }) => {
  return (
    <div className="lg:h-96 w-full lg:flex grid gap-4 sm-card-p">
      <img
        src={blog?.bannerImage.url}
        className="flex lg:h-full lg:w-fit w-full h-40 lg:aspect-square object-cover"
      />
      <div className="flex-1 flex flex-col h-full lg:pb-3 lg:px-2 gap-3 2xl:max-w-3xl xl:max-w-2xl lg:max-w-xl sm:max-w-sm max-w-xs sm:w-auto w-64">
        <div className="text-blue-100 lg:text-base sm:text-sm text-xs w-fit italic font-medium justify-center font-montserrat items-stretch bg-gray-900 md:p-1 p-1">
          {blog.category.name}
        </div>
        <div className="line-clamp-3 lg:text-3xl sm:text-2xl text-lg self-stretch text-black  font-montserrat font-semibold whitespace-pre-wrap">
          {blog.title}
        </div>
        <p className="line-clamp-3 font-poppins text-base font-light lg:h-fit h-0">
          {blog.description1}
        </p>
        <Link className="lg:block hidden" to={`../resources/case-study/${blog.id}`} key={blog.id}>
          <button className="hue-btn-blue-light btn btn-small">Read Full Story</button>
        </Link>

        <div className="flex font-montserrat lg:gap-6 gap-2 mt-auto items-center">
          <img
            src={blog.author.avatar}
            className="flex lg:w-12 sm:w-10 w-7 aspect-square rounded-full object-contain bg-gray-600 my-auto"
            alt="author"
          />
          <div className="grid lg:gap-2 gap-1 capitalize lg:text-base text-xs">
            <span className="font-medium">{blog.author.name}</span>
            <span>{blog.maxReadTime} min read</span>
          </div>
          <Link
            className="lg:hidden flex ml-auto"
            to={`../resources/case-study/${blog.id}`}
            key={blog.id}
            state={{ blogData: blogData }}
          >
            <button className="hue-btn-blue-light btn-small">Read More</button>
          </Link>
        </div>
      </div>
    </div>
  )
}
export default CaseCard
