import { http, HttpResponse } from 'msw';

const participants = [
    {
        firstName: "Valentina",
        lastName: "Herrera",
        cells: ["YYY", "XXX" ]
    },
    {
        firstName: "Santiago",
        lastName: "Lopez",
        cells: ["YYY", "XXX" ]
    },
    {
        firstName: "Isabela",
        lastName: "Chavez",
        cells: ["YYY", "XXX" ]
    },
    {
        firstName: "Mateo",
        lastName: "Rodriguez",
        cells: ["YYY", "XXX" ]
    },
    {
        firstName: "Sofia",
        lastName: "Ramirez",
        cells: ["YYY", "XXX" ]
    },
    {
        firstName: "Juan",
        lastName: "Perez",
        cells: ["ASD", "ZXC" ]
    },
    {
        firstName: "Diego",
        lastName: "Armando",
        cells: ["QWE", "ASD" ]
    },
]

export const handlers = [
    http.get('https://api.example.com/user', () => {
        console.log('potato');
        return HttpResponse.json({
            firstName: 'John',
            lastName: 'Maverick',
        });
    }),
    http.get('https://api.example.com/participantes', () => {
        return HttpResponse.json(Array.from(participants.values()));
    }),
];
