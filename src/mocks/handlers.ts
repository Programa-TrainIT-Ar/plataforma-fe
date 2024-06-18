import { http, HttpResponse } from 'msw';

const participants = [
    {
        firstName: "Valentina",
        lastName: "Herrera",
        email: "valentinaherrera@gmail.com",
        cells: ["IT"]
    },
    {
        firstName: "Santiago",
        lastName: "Lopez",
        email: "santiagolopez@gmail.com",
        cells: ["IT"]
    },
    {
        firstName: "Isabela",
        lastName: "Chavez",
        email: "isabelac@gmail.com",
        cells: ["Marketing", "RRHH", "ZZZ"]
    },
    {
        firstName: "Mateo",
        lastName: "Rodriguez",
        email: "mateorodriguez@gmail.com",
        cells: ["IT", "RRHH" ]
    },
    {
        firstName: "Sofia",
        lastName: "Ramirez",
        email: "sofiaramirez@gmail.com",
        cells: ["IT", "Marketing" ]
    },
    {
        firstName: "Juan",
        lastName: "Perez",
        email: "jp@gmail.com",
        cells: ["Marketing", "IT" ]
    },
    {
        firstName: "Diego",
        lastName: "Armando",
        email: "eldiego@gmail.com",
        cells: ["RRHH", "IT", "Marketing" ]
    },
]

const cells = [
    {
        name: "IT",
        description: "celula de sistemas",
        module: "frontend",
        edition: "2024"
    },
    {
        name: "IT",
        description: "celula de sistemas",
        module: "backend",
        edition: "2024"
    },    {
        name: "Marketing",
        description: "celula de Marketing",
        module: "ux/ui",
        edition: "2024"
    },    {
        name: "RRHH",
        description: "celula de Recursos Humanos",
        module: "recruiting",
        edition: "2024"
    }
]

export const handlers = [
    http.get('https://api.example.com/user', () => {
        console.log('potato');
        return HttpResponse.json({
            firstName: 'John',
            lastName: 'Maverick',
        });
    }),
    http.get('https://api.example.com/participants', () => {
        return HttpResponse.json(Array.from(participants.values()));
    }),
    http.get('https://api.example.com/cells', () => {
        return HttpResponse.json(Array.from(cells.values()));
    }),
];
