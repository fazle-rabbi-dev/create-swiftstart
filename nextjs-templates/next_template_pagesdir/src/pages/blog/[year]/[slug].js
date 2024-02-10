import React from 'react'

function BlogDetails() {
  return (
    <div>BlogDetails</div>
  )
}

export default BlogDetails


/**
 * Static Site Generation
 * using: getStaticPaths() & getStaticProps()
 * both method requires for dynamic page (SSG)
*/

export async function getStaticPaths() {
  const response = await fetch('https://jsonplaceholder.typicode.com/posts');
  let blogsData = await response.json();
  const paths = blogsData.map(blog => {
    return {
      params: {
        // Should pass slug not id
        slug: blog.title
      }
    }
  })
  
  return {
    paths,
    fallback: true
    // fallback: false // This means that for paths not returned by getStaticPaths, a 404 page will be shown.
  };
}

export async function getStaticProps({params}) {
  console.log(params.slug)
  /* Use Slug To Find Specific Blog */
  // const response = await fetch(`https://jsonplaceholder.typicode.com/posts/2`);
  // let blog = await response.json();
  
  console.log(blog)

  return {
    props: {
      blogsData: null
    },
  };
}

/* SSR */
export async function getServerSideProps({params}) {
  console.log(params.slug)
  /* Use Slug To Find Specific Blog */
  // const response = await fetch(`https://jsonplaceholder.typicode.com/posts/2`);
  // let blog = await response.json();
  
  console.log(blog)

  return {
    props: {
      blogsData: null
    },
  };
}
