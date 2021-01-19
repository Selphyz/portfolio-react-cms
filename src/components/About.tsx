import React, { useState, useEffect } from 'react';
import sanityClient from '../client';
import imageUrlBuilder from '@sanity/image-url';
import { SanityImageSource } from '@sanity/image-url/lib/types/types';
import '../style/About.scss';

interface IAuthor {
  name: string;
  bio: string;
  authorImage: any;
}
const builder = imageUrlBuilder(sanityClient);
function urlFor(source: SanityImageSource) {
  return builder.image(source);
}
const About = () => {
  const [author, setAuthor] = useState<IAuthor | undefined>(undefined);
  useEffect(() => {
    sanityClient
      .fetch(
        `*[_type == "author"]{
          name,
          "bio": bio[0].children[0].text,
          "authorImage": image.asset->url
      }`,
      )
      .then((data) => setAuthor(data[0]))
      .catch(console.error);
  }, []);
  if (!author) {
    return <div>Loading...</div>;
  }
  return (
    <main className='relative'>
      <div className='p-10 lg:pt-48 container mx-auto relative'>
        {
          <section className='bg-blue-400 rounded-lg shadow-2xl lg:flex p-20'>
            <img
              src={urlFor(author.authorImage).url() ? urlFor(author.authorImage).url() : author.authorImage}
              alt={author.name}
              className='rounded w-32 h-32 lg:w-64 lg:h-64 mr-8'
            />
            <div className='text-lg flex flex-col justify-center'>
              <h1 className='cursive text-6xl text-white mb-4 simple titulo'>
                Hola, me llamo <span className='text-green-100 simple titulo'>{author.name}</span>
              </h1>
              <p className='text-white text-2xl simple roboto'>{author.bio}</p>
            </div>
          </section>
        }
      </div>
    </main>
  );
};

export default About;
