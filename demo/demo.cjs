const {showHelp} = require("../cjs/index.cjs");

(async function ()
{
    await showHelp("", {
        windowTitle: "❔" + " Help ",
        topText: "Press CTRL + C or Q to Quit | Page Down to scroll down | Any key to next line",
        topTextBg: "",
        topTextReversed: true,
        colorify: true,
        markdown: true,
        filepath: "./demo/random-text.md"
    });
}())