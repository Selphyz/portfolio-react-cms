import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import imageUrlBuilder from '@sanity/image-url';
import { SanityImageSource } from '@sanity/image-url/lib/types/types';
import BlockContent from '@sanity/block-content-to-react';
import sanityClient from '../client';
import '../style/SinglePost.scss';
interface ISinglePost {
  title: string;
  _id: string;
  slug: any;
  mainImage: {
    asset: {
      _id: string;
      url: string;
    };
  };
  body: string;
  name: string;
  authorImage: any;
}
interface ISlug {
  slug: string;
}
const builder = imageUrlBuilder(sanityClient);
function urlFor(source: SanityImageSource) {
  return builder.image(source);
}
const SinglePost = () => {
  const [singlePost, setSinglePost] = useState<ISinglePost | undefined>(undefined);
  const { slug } = useParams<ISlug>();
  useEffect(() => {
    sanityClient
      .fetch(
        `*[slug.current == "${slug}"]{
          title,
          _id,
          slug,
          mainImage{
            asset->{
              _id,
              url
            }
          },
          body,
          "name": author->name,
          "authorImage": author->image
        }`,
      )
      .then((data) => setSinglePost(data[0]))
      .catch(console.error);
  }, [slug]);
  if (!singlePost) {
    return <div>Loading...</div>;
  }

  return (
    <main className='bg-gray-200 min-h-screen p-12'>
      <article className='container shadow-lg mx-auto bg-green-100 rounded-lg'>
        <header className='relative'>
          <div className='absolute h-full w-full flex item-center justify-center p-8'>
            <div className='bg-white bg-opacity-75 rounded p-12'>
              <h1 className='cursive text-3xl lg:text-6xl mb-4'>{singlePost.title}</h1>
              <div className='flex justify-center text-gray-800'>
                <img
                  src={
                    urlFor(singlePost.authorImage).url()
                      ? urlFor(singlePost.authorImage).url()
                      : singlePost.authorImage
                  }
                  alt={singlePost.name}
                  className='w-10 h-10 rounded-full'
                />
              </div>
              {/* <p className='cursive flex items-center pl-2 text-2xl'>{singlePost.name}</p> */}
            </div>
          </div>
          <img
            src={singlePost.mainImage.asset.url}
            alt={singlePost.title}
            className='w-full object-cover rounded-t'
            style={{ height: '400px' }}
          />
        </header>
        <div className='post px-16 lg:px-48 py-12 lg:py-20 prose lg:prose-xl max-w-full'>
          <BlockContent blocks={singlePost.body} projectId='r99w5jgb' dataset='production' />
        </div>
      </article>
    </main>
  );
};

export default SinglePost;
