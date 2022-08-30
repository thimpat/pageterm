const {sleep} = require("@thimpat/libutils");
const toAnsi = require("to-ansi");

/** to-esm-all: remove **/
let terminalSize = require("window-size");
const getTerminalHeight = () =>
{
    return terminalSize.get().height;
};
/** to-esm-all: end-remove **/


let helpLines = [];

// FIXME: Fix bug in to-esm
// to-esm-add not working
// import terminalSize from 'term-size';

let indexLine = 0;
let maxLines = 0;
let consoleTitle;

let viewPort = {
    start: 0,
    end: 0
};


const closeHelp = () =>
{
    process.stdout.write("\n\n");
    process.exit();
};

function setTerminalTitle(title)
{
    process.stdout.write(
        String.fromCharCode(27) + "]0;" + title + String.fromCharCode(7)
    );
}

const displayPercentage = (percent) =>
{
    const nb = Math.floor(percent / 10);
    const bar = Array.from(Array(nb).fill("◼")).join("");
    const box = "     [" + bar.padEnd(11, "◾") + "]";
    setTerminalTitle(consoleTitle + " " + box + percent.toString().padStart(3, " ") + "%");
};

const setIndexLine = (index) =>
{
    const terminalHeight = getTerminalHeight();

    if (index < 0)
    {
        return;
    }

    if (index < viewPort.start - 1)
    {
        viewPort.start = index;
        viewPort.end = viewPort.start + terminalHeight;
    }
    else if (index > viewPort.end)
    {
        viewPort.end = index;
        viewPort.start = viewPort.end - terminalHeight;
    }

    indexLine = index + 1;
};

const displayLineIndex = (index = indexLine, {lineNumber = false, update = true} = {}) =>
{
    if (index < 0)
    {
        return;
    }
    const text = helpLines[index];

    const nLine = lineNumber ? index + ": " : "";
    // process.stdout.write(nLine + text + toAnsi.RESET);
    // process.stdout.write(toAnsi.RESET + nLine + text);
    process.stdout.write(nLine + text);
    // process.stdout.write(index + ": " + text);

    update && setIndexLine(index);
    return index;
};

const displayTextRangeSmooth = async (start, end, {smooth = true, lineNumber = false} = {}) =>
{
    let isEnd = false;
    let limit = indexLine + end;
    if (limit >= maxLines)
    {
        limit = maxLines;
        isEnd = true;
    }

    for (let i = start; i < limit; ++i)
    {
        smooth && await sleep(10);
        process.stdout.write("\n");

        displayLineIndex(i, {lineNumber});

        const percent = Math.ceil(i / maxLines * 100);
        displayPercentage(percent);
    }

    if (isEnd)
    {
        closeHelp();
    }

    return limit - 1;
};

/**
 * @see https://stackoverflow.com/questions/5006821/nodejs-how-to-read-keystrokes-from-stdin
 * @returns {boolean}
 */
const grabKey = () =>
{
    try
    {
        const stdin = process.stdin;

        stdin.setRawMode(true);
        stdin.resume();
        stdin.setEncoding("utf8");

        stdin.on("data", async function (key)
        {
            const keyname = "" + key;

            // CTRL-C
            if (keyname === "\u0003")
            {
                closeHelp();
            }
            // Q
            else if (keyname.toLowerCase() === "q")
            {
                closeHelp();
            }
            // PAGE DOWN
            else if (keyname === "\u001B\u005B\u0036\u007E")
            {
                await displayTextRangeSmooth(indexLine + 1, _terminalSize.height);
                return;
            }

            if (indexLine <= 0)
            {
                return;
            }

            process.stdout.write("\n");
            displayLineIndex();

        });

        return true;
    }
    catch (e)
    {
        console.error({lid: 4321}, e.message);
    }

    return false;
};

/**
 *
 * @returns {Promise<void>}
 *
 * @example
 * $> genserve help
 * $> genserve -h
 * $> genserve --help
 */
const showHelp = async (content, {
    windowTitle = "❔" + " Help ",
    topText = "",
    topTextBg = "#00FF00",
    topTextFg = "#006655",
    topTextBold = true,
    topTextUnderline = false,
    topTextReversed = false

} = {}) =>
{
    consoleTitle = windowTitle;
    setTerminalTitle(consoleTitle);

    if (topText)
    {
        topText = toAnsi.getTextFromHex(topText, {
            bg         : topTextBg,
            fg         : topTextFg,
            isBold     : topTextBold,
            isUnderline: topTextUnderline,
            isReversed : topTextReversed
        });

        content = topText + content;
    }

    helpLines = content.split("\n");
    maxLines = helpLines.length;

    const terminalHeight = getTerminalHeight();
    process.stdout.write(toAnsi.RESET);
    await displayTextRangeSmooth(0, terminalHeight, {smooth: false});

    grabKey();
};


// -------------------------------------------
//
// -------------------------------------------
// const toUnicode = function (str)
// {
//     let unicodeString = "";
//     for (let i = 0; i < str.length; i++)
//     {
//         let theUnicode = str.charCodeAt(i).toString(16).toUpperCase();
//         while (theUnicode.length < 4)
//         {
//             theUnicode = "0" + theUnicode;
//         }
//         theUnicode = "\\u" + theUnicode;
//         unicodeString += theUnicode;
//     }
//     return unicodeString;
// };
//
// function moveUp(nb = 1)
// {
//     for (let i = 0; i < nb; ++i)
//     {
//         process.stdout.write("\033[<1>A");
//     }
// }
//
// function moveDown(nb = 1)
// {
//     for (let i = 0; i < nb; ++i)
//     {
//         process.stdout.write("\033[<1>B");
//     }
// }


module.exports.showHelp = showHelp;
