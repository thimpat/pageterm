module.exports = {
    replaceEnd  : [
        {
            search : `"../cjs/index.mjs"`,
            replace: `"../esm/index.mjs"`
        }
    ],
    replaceModules: {
        "term-size": {
            cjs: {
                name   : "term-size-cjs",
                version: "@2.2.1"
            },
            esm: {
                version: "@3.0.2"
            }
        },
    }

}