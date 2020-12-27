import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import sanityClient from '../client.js';
interface IPost {
  mainImage: {
    asset: {
      _id: string;
      url: string;
    };
  };
  slug: {
    _type: string;
    current: string;
  };
  title: string;
}
const Post = () => {
  const [postData, setPost] = useState<IPost[]>();
  useEffect(() => {
    sanityClient
      .fetch(
        `*[_type == "post"]{
              title,
              slug,
              mainImage{
                  asset->{
                      _id,
                      url
                  },
                  alt
              }
          }`,
      )
      .then((data) => setPost(data))
      .catch(console.error);
  }, []);

  return (
    <main className='bg-green-100 min-h-screen p-12'>
      <section className='container mx-auto'>
        <h1 className='text-4xl flex justify-center cursive'>Página de Blogs</h1>
        <h2 className='text-lg text-gray-600 flex justify-center mb-12'>Estos son mis blogs</h2>
        <div className='grid md:grid-cols-2 lg:grid-cols-3 gap-8'>
          {postData &&
            postData.map((post: IPost, index: number) => (
              <article key={post.slug.current}>
                <Link to={`/post/${post.slug.current}`}>
                  <span className='block h-64 relative rounded shadow leading-snug bg-white border-l-8 border-blue-400'>
                    <img
                      src={post.mainImage.asset.url}
                      alt={post.title}
                      className='w-full h-full rounded-r object-cover absolute'
                    />
                    <span className='block relative h-full flex justify-end items-end pr-4 pb-4'>
                      <h3 className='text-gray-100 text-lg font-blog px-3 py-4 bg-blue-300 rounded'>
                        {post.title}
                      </h3>
                    </span>
                  </span>
                </Link>
              </article>
            ))}
        </div>
      </section>
    </main>
  );
};

export default Post;
