import { useLoaderData, useOutletContext } from '@remix-run/react'
import IBlogMedia from '../../../interfaces/IBlogMedia'
import BlogCard from './blogCard'
import { useEffect, useState } from 'react'
import { fetchGraphQLWithURL } from '~/graphql/fetchGraphQl';
import { SearchBlogs } from '~/graphql/queries'
import { List, Select, Skeleton } from 'antd'
import CustomDrawer from '~/utils/customDrawer'
import DropDownIcon from '../case-study/arrow'
import { errorMessage } from '~/utils/notifications';
import { StrapiConfig } from '~/utils/format'
const BlogCardContainer = () => {
  const outletCon: StrapiConfig = useOutletContext()
  const StrapiUrl = outletCon?.STRAPI_URL
  const [selectedCategory, setSelectedCategory] = useState<string | null>(null)
  const [selectedTag, setSelectedTag] = useState<string | null>(null)
  const [state, setState] = useState({ visible: false, placement: 'bottom' })
  const loaderData = useLoaderData() as any
  const [category, setCategory] = useState<string | null>(null)
  const [tag, setTag] = useState<string | null>(null)
  const [searchValue, setSearchValue] = useState('')
  const [blogData, setBlogData] = useState(loaderData.blogData || [])
  const [limit, setLimit] = useState(3) // Initial limit
  const [loading, setLoading] = useState(false)

  useEffect(() => {}, [])

  useEffect(() => {
    handleFilterAndSearchDown()
  }, [category, tag, searchValue])

  const handleApplyFilters = () => {
    setCategory(selectedCategory)
    setTag(selectedTag)
    onClose()
  }

  const handleResetFilters = () => {
    setSelectedCategory(null)
    setSelectedTag(null)
    setCategory(null)
    setTag(null)
  }

  const showDrawer = () => {
    setState((prevState) => ({
      ...prevState,
      visible: true,
    }))
  }

  const onClose = () => {
    setState((prevState) => ({
      ...prevState,
      visible: false,
    }))
  }

  const handleFilterAndSearchDown = async () => {
    setLoading(true)
    const updatedBlogQuery = SearchBlogs(category || '', tag || '', searchValue || '', limit)

    const newBlogData = await fetchGraphQLWithURL(updatedBlogQuery, StrapiUrl)
    setBlogData(() => [
      ...newBlogData.data?.blogs.data?.map((item: any) => ({
        id: item.id,
        title: item.attributes.title,
        description1: item.attributes.description1,
        date: item.attributes.date,
        maxReadTime: item.attributes.maxReadTime,
        bannerImage: {
          name: item.attributes.bannerImage.data?.attributes.name ?? '',
          url: item.attributes.bannerImage.data?.attributes.url ?? '',
        },
        author: {
          name: item.attributes.author.data?.attributes.name,
          avatar: item.attributes.author.data?.attributes.avatar.data?.attributes?.url,
        },
        topic_tags: item.attributes.topic_tags.data?.map((tag: any) => tag.attributes.name) ?? [],
        category: {
          name: item.attributes.category.data?.attributes.name,
        },
      })),
    ])
    setLoading(false)
  }

  const fetchMoreData = async () => {
    setLoading(true)
    const updatedQuery = SearchBlogs(category || '', tag || '', searchValue || '', limit + 3)
    const newBlogData = await fetchGraphQLWithURL(updatedQuery, StrapiUrl)
    setBlogData(() => [
      ...newBlogData.data?.blogs.data?.map((item: any) => ({
        id: item.id,
        title: item.attributes.title,
        description1: item.attributes.description1,
        date: item.attributes.date,
        maxReadTime: item.attributes.maxReadTime,
        bannerImage: {
          name: item.attributes.bannerImage.data?.attributes.name ?? '',
          url: item.attributes.bannerImage.data?.attributes.url ?? '',
        },
        author: {
          name: item.attributes.author.data?.attributes.name,
          avatar: item.attributes.author.data?.attributes.avatar.data?.attributes?.url,
        },
        topic_tags: item.attributes.topic_tags.data?.map((tag: any) => tag.attributes.name) ?? [],
        category: {
          name: item.attributes.category.data?.attributes.name,
        },
      })),
    ])
    setLimit(limit + 3)
    setLoading(false)
    if (blogData.length <= limit) {
      errorMessage('No more Blogs available', 3)
    }
  }

  return (
    <>
      <CustomDrawer
        title="Blos filter"
        placement="bottom"
        closable={false}
        onClose={onClose}
        visible={state.visible}
      >
        <button className="absolute -top-2 left-0 right-0 drawer-close-btn" onClick={onClose}>
          <svg
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M18 6 6 18M6 6l12 12"
              stroke="#3D3D3D"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </svg>
        </button>
        <label className="block text-haiti font-montserrat">Filter by:</label>
        <div className="flex flex-col gap-4">
          <Select
            placeholder="All Categories"
            className="w-full rounded-none"
            suffixIcon={selectedCategory == null ? <DropDownIcon /> : null}
            onChange={(value) => setSelectedCategory(value)}
            allowClear
            value={selectedCategory}
            options={loaderData.categoriesList}
          />
          <Select
            placeholder="All Tags"
            className="w-full rounded-none"
            suffixIcon={selectedTag == null ? <DropDownIcon /> : null}
            onChange={(value) => setSelectedTag(value)}
            allowClear
            value={selectedTag}
            options={loaderData.tags}
          />
          <div className="flex flex-row justify-between gap-4 items-center">
            <button className="hue-btn-primary  hero-btn" onClick={() => handleApplyFilters()}>
              Apply Filters
            </button>
            <button
              className="bg-white px-5 h-full lg:text-xl font-medium font-montserrat"
              onClick={handleResetFilters}
            >
              Reset
            </button>
          </div>
        </div>
      </CustomDrawer>

      <div className="w-full bg-white py-8 blog-card-container  min-h-[90vh]">
        <div className="text-head-grape text-4xl  w-full justify-center flex py-8 h-fit gradient-bottom">
          <span className="section-title section-title-blue">{loaderData.s2_title}</span>
        </div>
        <div className="filter flex w-full font-montserrat justify-center gap-2 mt-2">
          <div className="flex flex-col gap-1">
            <div className="flex">
              <label className="text-haiti font-normal">Filter by:</label>
            </div>
            {/* Category select */}
            <div className="flex flex-row gap-4 top-filters">
              <Select
                placeholder="All Categories"
                className="w-full rounded-none category-dropdown"
                suffixIcon={category == null ? <DropDownIcon /> : null}
                onChange={(value) => setCategory(value)}
                allowClear
                value={category}
                options={loaderData.categoriesList}
                style={{
                  width: '190px',
                  height: '100%',
                }}
              />
              <Select
                placeholder="All Tags"
                className="w-full rounded-none tags-dropdown"
                suffixIcon={tag == null ? <DropDownIcon /> : null}
                onChange={(value) => setTag(value)}
                allowClear
                value={tag}
                options={loaderData.tags}
                style={{
                  width: '190px',
                  height: '100%',
                }}
              />
              {/* Search input */}
              <div className="relative flex items-center">
                <svg
                  className="absolute left-0 top-1/2 transform -translate-y-1/2 ml-2"
                  width="13"
                  height="12"
                  viewBox="0 0 13 12"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M6.25 10.5a4.75 4.75 0 1 0 0-9.5 4.75 4.75 0 0 0 0 9.5Zm5.25.5-1-1"
                    stroke="#1B0740"
                    strokeWidth=".75"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>
                {/* Search input */}
                <input
                  value={searchValue}
                  onChange={(e) => {
                    setSearchValue(e.target.value)
                  }}
                  placeholder="Search"
                  className="h-34 border-haiti w-full border-[1px] border-solid rounded-sm pl-10 py-2 focus:outline-none text-xs"
                />
              </div>
              <button
                onClick={showDrawer}
                className="filter-mobile flex justify-center cursor-pointer items-center px-3 py-2.5 border-solid border-[0.5px] border-indigo-950 max-w-[40px]"
              >
                <img
                  loading="lazy"
                  src="../assets/Filter.svg"
                  className="w-full bg-blend-multiply aspect-square fill-white"
                />
              </button>
            </div>
          </div>
          {/* Tag select */}
        </div>

        <div className="blog-main-box w-full h-fit relative  flex flex-row justify-around">
          {/* Skeleton for loading */}
          {loading && (
            <List
              className="w-full blog-main-card z-10 h-full"
              itemLayout="vertical"
              size="large"
              dataSource={[1, 2, 3]} // Dummy data for skeleton
              renderItem={() => (
                <List.Item>
                  <Skeleton active avatar paragraph={{ rows: 3 }} />
                </List.Item>
              )}
            />
          )}
          {!loading && blogData.length >= 1 && (
            <>
              <img src="../assets/Ornament.png" className="absolute top-4 left-4" alt="ornament" />
              <div className="blog-main-card items-center w-fit z-10 h-full flex flex-col justify-center gap-y-4  overflow-y-scroll mt-8">
                {blogData?.map((blog: IBlogMedia) => (
                  <BlogCard key={blog.id} blog={blog} blogData={blogData} />
                ))}
              </div>
            </>
          )}
          {!loading && blogData.length === 0 && (
            <section className="container-no-content mt-8">
              <img
                loading="lazy"
                src="../assets/no-blog.svg"
                alt=""
                className="centered-image-no-content"
              />
              <p className="title-no-content">No Blog found</p>
              {!tag && !searchValue && !category ? (
                <p className="description-no-content">Currently no blogs found.</p>
              ) : (
                <p className="description-no-content">
                  Currently no blogs found with the selected filters.
                </p>
              )}
            </section>
          )}
        </div>

        {blogData.length > 0 && (
          <div className="mx-auto mt-[2.5rem] w-fit flex justify-center items-center">
            <button
              className="hue-btn-blue btn uppercase font-montserrat"
              onClick={fetchMoreData}
              disabled={loading}
            >
              <span>See More</span>
            </button>
          </div>
        )}

        {blogData.length === 0 && (
          <div className="mx-auto mt-[2.5rem] w-fit flex justify-center items-center">
            {(tag || searchValue || category) && (
              <button
                className="hue-btn-blue btn uppercase font-montserrat"
                onClick={handleResetFilters}
                disabled={loading}
              >
                <span>View All</span>
              </button>
            )}
          </div>
        )}
      </div>
    </>
  )
}
export default BlogCardContainer
