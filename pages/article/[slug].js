import fs from 'fs'
import matter from 'gray-matter'
import Image from 'next/image'
import path from 'path'
import React from 'react'
import { marked } from 'marked'

const PostPage = ({ frontmatter: { title, date, coverImage }, slug, content }) => {

  return (
    <>
      <h2> {title} </h2>
      <Image src={coverImage} width="400" height="200" alt="cover iamge" />
      <p>{date}</p>
      <div dangerouslySetInnerHTML={{ __html: marked(content) }}></div>
    </>

  )
}

export default PostPage

export async function getStaticPaths() {
  // paths structure -  [{params: { slug: 'slug' }}]
  const files = fs.readdirSync(path.join('posts'))
  const paths = files.map(filename => ({
    params: { slug: filename.replace('.md', '') }
  }))
  // console.log(paths)
  return { paths, fallback: false }
}

export async function getStaticProps({ params: { slug } }) {
  const markdownWithMeta = fs.readFileSync(path.join('posts', slug + '.md'), 'utf-8')
  const { data: frontmatter, content } = matter(markdownWithMeta);

  return {
    props: { frontmatter, slug, content }
  }
}