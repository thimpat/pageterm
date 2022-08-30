/**
 * DO NOT EDIT THIS FILE DIRECTLY.
 * This file is generated following the conversion of 
 * @see [./demo/demo.cjs]{@link ./demo/demo.cjs}
 * 
 **/
import fs  from "fs";
import {showHelp}  from "../esm/index.mjs";


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