import { http, HttpResponse } from 'msw';


const modulos = [
    { id: 'a', name: 'Sistemas',},
    { id: 'b', name: 'Marketing',},
    { id: 'c', name: 'Educación'},
];


const proyectos = [
    {id: "a", name: "Proyecto1"},
    {id: "b", name: "Proyecto2"},
    {id: "c", name: "Proyecto3"},

]

const ediciones = [
    {id: "a", name: "Edicion1"},
    {id: "b", name: "Edicion2"},
    {id: "c", name: "Edicion3"},

]


export const handlers = [
    http.get('https://api.example.com/user', () => {
        console.log('potato');
        return HttpResponse.json({
            firstName: 'John',
            lastName: 'Maverick',
        });
    }),

    http.get('http://localhost:3001/modules', () => {
        return HttpResponse.json(Array.from(modulos.values()));
    }),


    http.get('http://localhost:3001/modules/:id/projects', () => {
        return HttpResponse.json(Array.from(proyectos.values()));
    }),

    
    http.get('http://localhost:3001/projects/:id/editions', () => {
        return HttpResponse.json(Array.from(ediciones.values()));
    }),


];
