
const directiveContent = `
import terminalSize from 'term-size';
const getTerminalHeight = () =>
{
    return terminalSize().rows
};
`

module.exports = {
    replaceEnd: [
        {
            search : "// import terminalSize from 'term-size';",
            replace: directiveContent
        }],
}