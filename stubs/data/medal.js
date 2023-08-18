const { listenerCount } = require("process");

const {faker} = require("@faker-js/faker");

function createRandomMedal() {
    return {
        id: faker.string.uuid(),
        name: faker.lorem.lines(1)
        
};
}
module.exports = faker.helpers.multiple(createRandomMedal, { 
    count: 5,
})

