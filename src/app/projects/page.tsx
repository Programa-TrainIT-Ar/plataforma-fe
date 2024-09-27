'use client'

import React from 'react';
import { useUser } from '@auth0/nextjs-auth0/client';
import { redirect } from 'next/navigation';
import ProjectsService from '../../services/ProyectService';

const Projects = () => {
  const { user, error, isLoading } = useUser();

  if (isLoading) return <div>Loading...</div>;
  if (error) return <div>{error.message}</div>;
  if (!user) {redirect('/login')};
  const listProjects = ProjectsService.getProjects
  return (
    <div className="flex flex-column">
      <h3>PROYECTOS</h3>
      <br></br>
      <div>{JSON.stringify(listProjects)}</div>
      <br></br>
    </div>
  );
};

export default Projects;
