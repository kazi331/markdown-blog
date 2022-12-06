import path from 'path'
import {sync} from 'glob'

const POSTS_PATH = path.join(process.cwd(), 'posts');
console.log({POSTS_PATH})

const getSlugs = () => {
  const paths = sync(`${POSTS_PATH}/*.mdx`);
  console.log({paths})
}

export const getAllPosts = () => {
  getSlugs();
  return 'posts'
}