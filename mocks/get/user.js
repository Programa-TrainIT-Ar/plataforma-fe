const {faker} = require("@faker-js/faker");

function createRandomUser() {
    return {
        id: faker.string.uuid(),
        username: faker.internet.userName(),
        email: faker.internet.email(),
        avatar: faker.image.avatar(),
        password: faker.internet.password(),
        birthdate: faker.date.birthdate(),
        registeredAt: faker.date.past(),
    };
}

module.exports = {
    path: '/users',
    method: 'GET',
    template: faker.helpers.multiple(createRandomUser, {
        count: 5,
    })
};