import { delay, http, HttpResponse } from 'msw';


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

const participantes = [{
    firstName: 'Valentina', lastName: 'Herrera', email: 'valentinaherrera@gmail.com', cells: ['IT']
}, {
    firstName: 'Santiago', lastName: 'Lopez', email: 'santiagolopez@gmail.com', cells: ['IT']
}, {
    firstName: 'Isabela', lastName: 'Chavez', email: 'isabelac@gmail.com', cells: ['Marketing', 'RRHH', 'ZZZ']
}, {
    firstName: 'Mateo', lastName: 'Rodriguez', email: 'mateorodriguez@gmail.com', cells: ['IT', 'RRHH']
}, {
    firstName: 'Sofia', lastName: 'Ramirez', email: 'sofiaramirez@gmail.com', cells: ['IT', 'Marketing']
}, {
    firstName: 'Juan', lastName: 'Perez', email: 'jp@gmail.com', cells: ['Marketing', 'IT']
}, {
    firstName: 'Diego', lastName: 'Armando', email: 'eldiego@gmail.com', cells: ['RRHH', 'IT', 'Marketing']
}];

const cells = [{
    name: 'IT', description: 'celula de sistemas', module: 'frontend', project: 'plataforma', edition: '2024'
}, {
    name: 'IT', description: 'celula de sistemas', module: 'backend', project: 'plataforma', edition: '2024'
}, {
    name: 'Marketing', description: 'celula de Marketing', module: 'ux/ui', project: 'challenge', edition: '2024'
}, {
    name: 'RRHH', description: 'celula de Recursos Humanos', module: 'recruiting', project: 'challenge', edition: '2024'
}];

export const handlers = [
    http.get('https://api.example.com/user', () => {
        return HttpResponse.json({
            firstName: 'John',
            lastName: 'Maverick',
        });
    }),
    http.get('https://api.example.com/modules', () => {
        return HttpResponse.json(modulos);
    }),
    http.get('https://api.example.com/modules/:id/projects', () => {
        return HttpResponse.json(proyectos);
    }),
    http.get('https://api.example.com/projects/:id/editions', () => {
        return HttpResponse.json(ediciones);
    }),
    http.get('https://api.example.com/partis', async () => {
        await delay(3000);
        return HttpResponse.json(participantes);
    }),
    http.get('https://api.example.com/cell', () => {
        return HttpResponse.json(cells);
    }),
];
