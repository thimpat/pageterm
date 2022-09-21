> ###### PageTerm displays file content in a terminal

---

## Installation

```shell
npm install pageterm -g
```

<br/>

---

## Demo

![PageTerm Demo](https://github.com/thimpat/pageterm/blob/main/documentation/images/pageterm-demo.gif)

<br/>

---

## Usage


#### CLI

```shell
$> pageterm [options] <filepath>
```


--
#### Programmatically [CommonJs]



```shell
const {showHelp} = require("pageterm");
```

--
#### Programmatically [ESM]

```shell
import {showHelp} from "pageterm";
```

---

## Examples

```shell
const displayHelpFile = async function ()
{
    const content = fs.readFileSync("./my-help-file", "utf-8");
    await showHelp(content, {
        windowTitle: "My Application Name - Help ❔",
        topText: "Press CTRL + C or Q to Quit | Page Down or Any key to scroll down",
        topTextBg: "",
        topTextReversed: true,
        colorify: true
    });
};

```

**filepath**                      File path to content to show

<br/>

---

## Arguments

```shell
$> pageterm <filepath>
```

**filepath**                      File path to content to show

<br/>

---

## Options:


| Options             | Description                                        | Default |
|---------------------|----------------------------------------------------|---------|
| -v, --version       | output the current version                         |         |
| -m, --markdown      | Display file content with partial Markdown support | true    |
| -c, --colorify      | Display file content with colors                   | false   |
| -c, --colorify      | Display file content with colors                   | false   |
| -p, --progress      | Show progress bar                                  | true    |
| -s, --smooth        | Enable smooth scrolling                            | true    |
| -s, --latencyScroll | Smooth scrolling latency                           | 10      |
| -t, --windowTitle   | Set text in Terminal title bar                     |         |
| --topText           | Change the top menu text                           |         |
| -h, --help          | display help for command                           |         |


<br/>                    

---



## Changelog

*  Don't display top text when the console is big enough

---
