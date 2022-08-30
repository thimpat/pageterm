const fs = require("fs");
const {showHelp} = require("../cjs/index.cjs");

(async function ()
{
    let content = fs.readFileSync("./demo/random-text.md", {encoding: "utf-8"})
    await showHelp(content, {
        windowTitle: "❔" + " Help ",
        topText: "Press CTRL + C or Q to Quit | Page Down to scroll down | Any key to next line",
        topTextBg: "",
        topTextReversed: true,
        colorify: true,
        markdown: true
    });
}())