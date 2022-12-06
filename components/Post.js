import Image from 'next/image'
import Link from 'next/link'
import React from 'react'

const Post = ({ post }) => {
  return (<>
    <div className="lg:w-1/3 md:w-1/2 xl:w-1/4 p-4 w-full ">
      <a className="block  h-48 rounded overflow-hidden ">
        {/* <img alt="ecommerce" className="object-cover object-center w-full h-full block" src="https://dummyimage.com/423x263" /> */}
        <Image className='rounded-lg' width="423" height="263" alt={post.frontmatter.title} placeholder="blur" blurDataURL={post.frontmatter.coverImage} src={post.frontmatter.coverImage} />
      </a>
      <div className="mt-2 bg-gray-900 p-2 px-4 rounded-lg">
        <div className="flex justify-between">
          <span className="inline-block py-1 px-2 rounded bg-indigo-500 text-indigo-100 text-xs font-medium tracking-widest">CATEGORY</span>
          <span>{post.frontmatter.date}</span>
        </div>
        <Link href={`/article/${post.slug}`} className="" >
          <h2 className="text-lg title-font font-medium hover:text-indigo-100 text-gray-400 mt-4 mb-4">{post.frontmatter.title}</h2>
        </Link>
        <p className='desc'>{post.frontmatter.description}</p>
        <Link href={`/article/${post.slug}`} className="text-indigo-400 hover:text-indigo-300 flex items-center mb-3">Read More
          <svg className="w-4 h-4 mt-1 ml-2" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2" fill="none" strokeLinecap="round" strokeLinejoin="round">
            <path d="M5 12h14"></path>
            <path d="M12 5l7 7-7 7"></path>
          </svg>
        </Link>
      </div>
    </div>

  </>
  )
}

export default Post