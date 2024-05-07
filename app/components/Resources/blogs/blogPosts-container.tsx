import BlogPostCard from './blogPosts'
import { Link, useLoaderData, useMatch } from '@remix-run/react'
import IBlogMedia from '../../../interfaces/IBlogMedia'
import line from '~/../public/assets/pur-line.svg'

const BlogPostsContainer = () => {
  const loaderData = useLoaderData() as any
  const match = useMatch('/resources/whitepaper/:id')
  const isResourcesRoute = match !== null
  return (
    <div
      className="w-full bg-[#F9F8FC] section-p-y flex flex-col gap-5"
      style={{
        backgroundImage: 'url("../assets/Ornament.png"), url("../assets/Ornament.png")',
        backgroundPosition: 'top 40px left 20px, bottom 40px right 20px',
        backgroundRepeat: 'no-repeat',
      }}
    >
      <div className="text-head-grape section-title w-full justify-center flex h-fit">
        {isResourcesRoute ? (
          <p
            aria-level={1}
            role="contentinfo"
            className="xl:text-3xl lg:text-2xl sm:text-xl text-lg"
          >
            What's new in our Whitepapers
          </p>
        ) : (
          <p
            role="contentinfo"
            aria-level={1}
            className="xl:text-3xl lg:text-2xl sm:text-xl text-lg"
          >
            What's new in our Blogs
          </p>
        )}
      </div>
      <img className="mx-auto" alt="ornament" src={line} />
      <div className="relative w-full h-fit px-8 flex flex-row justify-around">
        <div className="container-card">
          {loaderData.blogdata?.map((blog: IBlogMedia) => (
            <Link
              role="link"
              aria-label={`Link to navigate to Ivoyant's blog on the topic of : ${blog?.title}`}
              to={
                isResourcesRoute
                  ? `../resources/whitepaper/${blog.id}`
                  : `../resources/blog/${blog.id}`
              }
              key={blog.id}
            >
              <BlogPostCard key={blog.id} blog={blog} />
            </Link>
          ))}
        </div>
      </div>
      <div className="mx-auto w-full flex justify-center items-center md:mt-10 mt-8">
        <Link
          to={`../resources/blogs`}
          role="link"
          aria-label="Link to our blogs page"
          key="explore"
        >
          {' '}
          <button role="button" className="button-test">
            {' '}
            <span className="uppercase font-montserrat">Explore</span>
          </button>
        </Link>
      </div>
    </div>
  )
}
export default BlogPostsContainer
