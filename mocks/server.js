var dyson = require('dyson');

dyson.bootstrap({
    configDir: __dirname,
    port: process.env.PORT || 3004,
    quiet: false,
    "proxyDelay": [200, 800]
});