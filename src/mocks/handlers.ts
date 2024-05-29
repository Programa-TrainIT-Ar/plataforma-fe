import { http, HttpResponse } from 'msw';

export const handlers = [
    http.get('https://api.example.com/user', () => {
        console.log('potato');
        return HttpResponse.json({
            firstName: 'John',
            lastName: 'Maverick',
        });
    }),
];
