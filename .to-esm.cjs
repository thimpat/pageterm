const directiveContent = `
import terminalSize from 'term-size';
const getTerminalHeight = () =>
{
    return terminalSize().rows
};

const getTerminalWidth = () =>
{
    return terminalSize().cols
};
`

module.exports = {
    replaceEnd    : [
        {
            search : "// import terminalSize from 'term-size';",
            replace: ""
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