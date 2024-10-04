import { delay, http, HttpResponse } from 'msw';

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

export const handlers = [http.get('https://api.example.com/user', () => {
    return HttpResponse.json({
        firstName: 'John', lastName: 'Maverick'
    });
}), http.get('https://api.example.com/participantes', async () => {
    await delay(5000);
    return HttpResponse.json(Array.from(participantes.values()));
}), http.get('https://api.example.com/celulas', () => {
    return HttpResponse.json(Array.from(cells.values()));
})];
