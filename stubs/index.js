const users = require("./data/users")
const modules = require("./data/modules");
module.exports = () => {
    const data = { users: [], modules: [] }

    return {
        users,
        modules
    }
}