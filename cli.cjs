#!/usr/bin/env node
let packageJson = require("./package.json");

const {program} = require('commander');
const fs = require("fs");
const {showHelp} = require("./cjs/index.cjs");

program
    .name(packageJson.name)
    .description("Display file content in a terminal")
    .version(packageJson.version, '-v, --version', 'output the current version')
    .argument('<filepath>', "File path to content to show")
    .option('-m, --markdown', "Display file content with partial Markdown support", true)
    .option('--no-markdown', "Disable Markdown support")
    .option('-c, --colorify', "Display file content with colors", false)
    .option('-p, --progress', "Show progress bar", true)
    .option('-p, --no-progress', "Hide progress bar")
    .option('-s, --smooth', "Enable smooth scrolling", true)
    .option('-s, --latencyScroll <number>', "Smooth scrolling latency", 10)
    .option('--no-smooth', "Disable smooth scrolling")
    .option('-t, --windowTitle <text>', "Set text in Terminal title bar")
    .option('--topText <text>', "Change the top menu text")
    .option('--topTextBg <text>', "Change top text color")
    .option('--colors [colors...]', 'Paragraph colors to use for colorizing text')
    .action((filepath, options) =>
    {
        options.colors = options.colors || [
            "#3A01DF",
            "#40FF00",
            "#1a6981",
            "#8d8a43",
        ]
    })
    .showHelpAfterError('(add --help for additional information)')
    // .helpOption(false)
    // .helpOption('-h, --help', 'Display help')
    .showSuggestionAfterError(true);

/**
 *
 * @type {Promise<boolean>}
 */
async function parseArgs()
{
    try
    {
        program.parse();

        const filepath = program.args[0]

        if (!fs.existsSync(filepath))
        {
            console.error(`Could not locate "${filepath}" from "${process.cwd()}"`)
            return false
        }

        if (!fs.lstatSync(filepath).isFile())
        {
            console.error(`The path "${filepath}" is not a file`)
            return false
        }

        const options = program.opts();

        let content = fs.readFileSync(filepath, {encoding: "utf-8"})
        await showHelp(content, {
            windowTitle    : "❔" + " Help ",
            topText        : "Press CTRL + C or Q to Quit | Page Down to scroll down | Any key to next line",
            topTextBg      : "",
            topTextReversed: true,
            filepath,
            ...options
        });

        return true;
    }
    catch (e)
    {
        console.error({lid: 4515}, e.message);
    }

    return false;

}

(async function ()
{
    try
    {
        const helpIndex = process.argv.indexOf("--help") >= 0 || process.argv.indexOf("-h") >= 0
        if (helpIndex)
        {
            const content = program.helpInformation()
            await showHelp(content, {
                windowTitle    : "❔" + " Help ",
                topText        : "Press CTRL + C or Q to Quit | Page Down to scroll down | Any key to next line",
                topTextBg      : "",
                topTextReversed: true,
            });

            return
        }

        await parseArgs()
    }
    catch (e)
    {
        console.error({lid: 5643}, e.message);
        process.exitCode = 17;
    }
}());

