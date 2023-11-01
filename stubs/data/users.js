const {faker} = require('@faker-js/faker');

function createRandomUser() {
    return {
        id: faker.string.uuid(),
        username: faker.internet.userName(),
        firstname: faker.person.firstName(),
        lastname: faker.person.lastName(),
        email: faker.internet.email(),
        avatar: faker.image.avatar(),
        password: faker.internet.password(),
        birthdate: faker.date.birthdate({ min: 18, max: 65, mode: 'age' })
    };
}

module.exports = faker.helpers.multiple(createRandomUser, {
    count: 1,
})