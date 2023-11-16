const users = require("./data/users")
const modules = require("./modules.json")

module.exports = () => {
    const data = { users: [], modules: []  }

    return {
        users,
        modules
    }
}