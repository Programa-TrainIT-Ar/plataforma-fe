/* import { NextResponse } from "next/server"

export const GET = async () =>{
    try{
        const url = 'http://localhost:8000/api/proyecto/proyectos/?Authorization=Bearer <access_token>'
        const response = await fetch(url)
        const result = await response.json()
        return NextResponse.json({data: result}, {status:200})

    } catch (error) {
        return NextResponse.json({data: null}, {status:500})
    }
} */
    import Project from '@/types/project';

    const ProjectsService = {
        getProjects: async () => {
            const res = await fetch('http://localhost:8000/api/proyecto/proyectos/?Authorization=Bearer <access_token>');
            if (!res.ok) {
                throw new Error('Failed to fetch data projects');
            }
            const response = await res.json();
            return response as Project[];
        }
    };
    
    export default ProjectsService;