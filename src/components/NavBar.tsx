import React from 'react';
import { NavLink } from 'react-router-dom';
import { AiFillLinkedin, AiOutlineBook, AiOutlineGithub } from 'react-icons/ai';
import '../style/NavBar.scss';

const NavBar = () => {
  return (
    <header className='bg-gradient-to-t from-blue-100 to-blue-600'>
      <div className='container mx-auto flex justify-between'>
        <nav className='flex'>
          <NavLink
            to='/'
            exact
            activeClassName='bg-blue-500'
            className='nav transform transition motion-reduce:transform-none hover:scale-110 duration-500 hover:bg-blue-400 
            inflex-flex items-center py-6 px-3 my-3 text-black cursive tracking-widest rounded font'>
            Carlos
          </NavLink>
          <NavLink
            to='/post'
            activeClassName='bg-blue-500'
            className='nav transform transition motion-reduce:transform-none hover:scale-110 duration-500 hover:bg-blue-400 
            inflex-flex items-center py-6 px-3 my-3 text-black cursive tracking-widest rounded font'>
            Mis posts
          </NavLink>
          <NavLink
            to='/project'
            activeClassName='bg-blue-500'
            className='nav transform transition motion-reduce:transform-none hover:scale-110 duration-500 hover:bg-blue-400 
            inflex-flex items-center py-6 px-3 my-3 text-black cursive tracking-widest rounded font'>
            Mis Projectos
          </NavLink>
          <NavLink
            to='/about'
            activeClassName='bg-blue-500'
            className='nav transform transition motion-reduce:transform-none hover:scale-110 duration-500 hover:bg-blue-400 
            inflex-flex items-center py-6 px-3 my-3 text-black cursive tracking-widest rounded font'>
            Sobre Mi
          </NavLink>
        </nav>
        <div className='icons my-6 flex'>
          <a
            className='transform hover:scale-110 text-green-600 px-1 hover:shadow'
            href='https://portfolio-react-carlos.netlify.app/'
            target='_blank'
            rel='noreferrer'>
            <AiOutlineBook size='40' title='Curriculum Web' />
          </a>
          <a
            className='transform hover:scale-110 px-1 text-blue-700 hover:shadow'
            href='https://www.linkedin.com/in/carlos-dominguez-puig/'
            target='_blank'
            rel='noreferrer'>
            <AiFillLinkedin size='40' title='Perfil de Linkedin' />
          </a>
          <a
            className='transform hover:scale-110 px-1 hover:shadow'
            href='https://github.com/Selphyz'
            target='_blank'
            rel='noreferrer'>
            <AiOutlineGithub size='40' title='Perfil de Github' />
          </a>
        </div>
      </div>
    </header>
  );
};

export default NavBar;
