import React from 'react';
import bg from '../img/background.jpg';
const Home = () => {
  return (
    <main>
      <img src={bg} alt='background' className='absolute object-cover w-full h-full' />
      <section className='relative flex justify-center min-h-screen pt-12 lg:pt-64 px-8'>
        <h1 className='simple text-6xl text-black font-bold cursive leading-none lg:leading-snug home-name'>
          Bienvenido a mi Blog
        </h1>
      </section>
    </main>
  );
};

export default Home;
