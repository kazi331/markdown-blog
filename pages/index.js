import fs from 'fs'
import path from 'path'
import matter from 'gray-matter'
import Post from '../components/Post'


export default function Home({ posts }) {
  return (
    <div>
      <h1 className="text-3xl">Articles</h1>

      <section className=" text-gray-300 body-font">
        <div className="container px-5 py-24 mx-auto">
          <div className="flex flex-wrap -m-4">

            {posts.map((post, i) => (
              <Post key={i} post={post} />
            ))}

          </div>
        </div>
      </section>
    </div>
  )
}


export async function getStaticProps() {
  // GET POSTS FROM DIRECTIORY
  const files = fs.readdirSync(path.join('posts'))

  // GET slug and frontmatter
  const posts = files.map(filename => {
    // create slug
    const slug = filename.replace('.md', '');
    console.log(slug)

    /*  const something = path.join('posts', filename);
     console.log(something) */

    // get frontmatter
    const markdownMeta = fs.readFileSync(path.join('posts', filename), 'utf-8')

    const { data: frontmatter } = matter(markdownMeta);
    // console.log(frontmatter)

    return { slug, frontmatter }
  })

  const sortByDate = (a,b) => new Date(a.frontmatter.data) - new Date(b.frontmatter.date)

  return { props: { posts: posts.sort(sortByDate) } }
}

