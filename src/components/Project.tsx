import React, { useEffect, useState } from 'react';
import sanityClient from '../client';
interface IProjectData {
  title: string;
  date: Date;
  place: string;
  description: string;
  projectType: string;
  link: string;
  tags: string;
}
const Project = () => {
  const [projectData, setProyectData] = useState<IProjectData[] | null>(null);
  useEffect(() => {
    sanityClient
      .fetch(
        `*[_type == "project"]{
      title,
      date,
      place,
      description,
      projectType,
      link,
      tags
    }`,
      )
      .then((data) => setProyectData(data))
      .catch(console.error);
  }, []);
  return (
    <main className='bg-green-100 min-h-screen p-12'>
      <section className='container mx-auto'>
        <h1 className='text-5xl flex justify-center cursive'>Mis proyectos</h1>
        <h2 className='text-lg text-gray-600 flex justify-center mb-12'>
          Presentación de proyectos
        </h2>
        <section className='grid grid-cols-2 gap-8'>
          {projectData &&
            projectData.map((project, index) => (
              <article className='relative rounded-lg shadow-xl bg-white p-16' key={index}>
                <h3>
                  <a href={project.link} target='_blank' rel='noopener noreferrer'>
                    {project.title}
                  </a>
                </h3>
                <div className='text-gray-500 text-xs space-x-4'>
                  <span>
                    <strong className='font-bold'>Finalizado</strong>:{' '}
                    {new Date(project.date).toLocaleDateString()}
                  </span>
                  {project.place ? (
                    <span>
                      <strong className='font-bold'>Company</strong>: {project.place}
                    </span>
                  ) : null}
                  <span>
                    <strong className='font-bold'>Tipo</strong>: {project.projectType}
                  </span>
                  <p className='my-6 text-lg text-gray-700 leading-relaxed'>
                    {project.description}
                  </p>
                  <a
                    href={project.link}
                    rel='noopener noreferrer'
                    target='_blank'
                    className='tex-red-500 font-bold hover:underline hover:text-red-400'>
                    Ver el projecto{' '}
                    <span role='img' aria-label='right pointer'>
                      ➡
                    </span>
                  </a>
                </div>
              </article>
            ))}
        </section>
      </section>
    </main>
  );
};

export default Project;
