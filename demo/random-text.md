<br/>**Usage:**<br/>


```shell
genserve [command] [target] [--port number] [--dir path] [--silent] [--timeout number] [--remoteapi]
```

_**GenServe is a non-blocking server generator and manager.**_
---

<br/>**Commands:**<br/>
Basic Commands

```markdown
    -h, --help                                             Display this help
    -v, --version                                          Display the currently running version
```

<br/>

**Commands targeting servers** _(1)_:
```markdown
    start         <servername>                             Start a server
    restart       <servername>                             Restart a server
    stop          <servername>                             Stop a server
    status        <servername>                             Display a server status
    set           <servername> --<option> [optionvalue]    Update a server property 
    remove        <servername>                             Remove a server from the database

    path settings                                          Display path to global settings
    path settings <servername>                             Display path to server settings
    edit settings                                          Open global settings in default editor
    edit server   <servername>                             Open server settings in default editor
    log           <servername>                             Display path to server logs

    enable        <servername> {cors|ssl}                  Enable a property on a server
    info          <servername>                             Display information about a server
    description   <servername>                             Show server description (use 'set' to add a description)
```

<br/>

**Commands targeting namespace(s)** _(2)_:
```markdown
    list           <namespace>                             Display all registered servers in the active namespace
    scan           <namespace>                             Display all registered servers with their current statuses
    report                                                 Display information about namespaces
    erase          <namespace>                             Delete all servers from a namespace
    shutdown       [all]                                   Stop all non-locked servers from all namespaces 
```
<br/>

**Special Commands**:
```markdown
    path    {servers|settings|logs} [<servername>]         Show paths to a server settings. If the servername is 
                                                           omitted, show global settings logs    

    edit    {servers|settings|logs}                        Same as above, but open target in the default system editor

    all                                                    Apply the active command to all servers (1) or all
                                                           namespaces (2)
```

<br/>**Options:**<br/>

```markdown
    --port                                                 Define the port to use with the server
    --force                                                Force a command execution (Overrides --lock, --protect, etc.)
    --dir                                                  Set the static directory to use (Can be more than one)
    --dyndir                                               Set the directory to contain server-side .js scripts 
    --namespace <name>                                     Define namespace to use
    --ssl                                                  Enable SSL
    --openPage <path>                                      Open a browser after a server has started against the 
                                                           given value
    --defaultPath <page>                                   Page to display by default
    --cert <path>                                          SSL Certificate path           
    --key <path>                                           SSL Key path       
    --unprocessed <path>                                   URL to errors page (Can be a static or a dynamic page)
    --open                                                 Combine with the log command, will open the targeted file 
                                                           in the default editor
    --columns                                              Combine with the scan command. Only show selected columns.   
```

<br/>

**Examples:**

---

- **Serve ./www directory on port 3030**

```shell
$> genserve start mysite --dir ./www --port 3030
```

---

- **Find registered servers and only show their active and serverUrl columns (serverName is always displayed)**

```shell
$> genserve scan --columns "active,serverUrl"
```

---


✔ Far far away, behind the word mountains, far from the countries Vokalia and Consonantia, there live the blind 
texts. Separated they live in Bookmarksgrove right at the coast of the Semantics, a large language ocean.


♦ **A small river named Duden flows** by their place and supplies it with the necessary regelialia. It is a 
paradisematic country, in which roasted parts of sentences fly into your mouth.


♀ Even the all-powerful Pointing has no control about the blind texts it is an almost unorthographic life One day 
however a small line of blind text by the name of Lorem Ipsum decided to leave for the far World of Grammar.


The Big Oxmox advised her not to do so, because there were thousands of bad Commas, wild Question Marks and devious Semikoli, but the Little Blind Text didn’t listen.


She packed her seven versalia, put her initial into the belt and made herself on the way.


When she reached the first hills of the Italic Mountains, she had a last view back on the skyline of her hometown Bookmarksgrove, the headline of Alphabet Village and the subline of her own road, the Line Lane.


Pityful a rethoric question ran over her cheek, then she continued her way. On her way she met a copy.


The copy warned the Little Blind Text, that where it came from it would have been rewritten a thousand times and everything that was left from its origin would be the word "and" and the Little Blind Text should turn around and return to its own, safe country.


But nothing the copy said could convince her and so it didn’t take long until a few insidious Copy Writers ambushed her, made her drunk with Longe and Parole and dragged her into their agency, where they abused her for their projects again and again.


And if she hasn’t been rewritten, then they are still using her. Far far away, behind the word mountains, far from the countries Vokalia and Consonantia, there live the blind texts.

Separated they live in Bookmarksgrove right at the coast of the Semantics, a large language ocean. A small river named Duden flows by their place and supplies it with the necessary regelialia.

It is a paradisematic country, in which roasted parts of sentences fly into your mouth.

Even the all-powerful Pointing has no control about the blind texts it is an almost unorthographic life One day however a small line of blind text by the name of Lorem Ipsum decided to leave for the far World of Grammar.

The Big Oxmox advised her not to do so, because there were thousands of bad Commas, wild Question Marks and devious Semikoli, but the Little Blind Text didn’t listen.

She packed her seven versalia, put her initial into the belt and made herself on the way.

When she reached the first hills of the Italic Mountains, she had a last view back on the skyline of her hometown Bookmarksgrove, the headline of Alphabet Village and the subline of her own road, the Line Lane.

Pityful a rethoric question ran over her cheek, then she continued her way. On her way she met a copy.

The copy warned the Little Blind Text, that where it came from it would have been rewritten a thousand times and everything that was left from its origin would be the word "and" and the Little Blind Text should turn around and return to its own, safe country.

But nothing the copy said could convince her and so it didn’t take long until a few insidious Copy Writers ambushed her, made her drunk with Longe and Parole and dragged her into their agency, where they abused her for their projects again and again.

And if she hasn’t been rewritten, then they are still using her. Far far away, behind the word mountains, far from the countries Vokalia and Consonantia, there live the blind texts. Separated they live in Bookmarksgrove right at the coast of the Semantics, a large language ocean.

A small river named Duden flows by their place and supplies it with the necessary regelialia. It is a paradisematic country, in which roasted parts of sentences fly into your mouth.

Even the all-powerful Pointing has no control about the blind texts it is an almost unorthographic life One day however a small line of blind text by the name of Lorem Ipsum decided to leave for the far World of Grammar.

The Big Oxmox advised her not to do so, because there were thousands of bad Commas, wild Question Marks and devious Semikoli, but the Little Blind Text didn’t listen. She packed her seven versalia, put her initial into the belt and made herself on the way.

When she reached the first hills of the Italic Mountains, she had a last view back on the skyline of her hometown Bookmarksgrove, the headline of Alphabet Village and the subline of her own road, the Line Lane. Pityful a rethoric question ran over her cheek, then she continued her way.

On her way she met a copy. The copy warned the Little Blind Text, that where it came from it would have been rewritten a thousand times and everything that was left from its origin would be the word "and" and the Little Blind Text should turn around and return to its own, safe country.

But nothing the copy said could convince her and so it didn’t take long until a few insidious Copy Writers ambushed her, made her drunk with Longe and Parole and dragged her into their agency, where they abused her for their projects again and again. And if she hasn’t been rewritten, then they are still using her.

Far far away, behind the word mountains, far from the countries Vokalia and Consonantia, there live the blind texts. Separated they live in Bookmarksgrove right at the coast of the Semantics, a large language ocean. A small river named Duden flows by their place and supplies it with the necessary regelialia.

It is a paradisematic country, in which roasted parts of sentences fly into your mouth. Even the all-powerful Pointing has no control about the blind texts it is an almost unorthographic life One day however a small line of blind text by the name of Lorem Ipsum decided to leave for the far World of Grammar.

The Big Oxmox advised her not to do so, because there were thousands of bad Commas, wild Question Marks and devious Semikoli, but the Little Blind Text didn’t listen. She packed her seven versalia, put her initial into the belt and made herself on the way.

When she reached the first hills of the Italic Mountains, she had a last view back on the skyline of her hometown Bookmarksgrove, the headline of Alphabet Village and the subline of her own road, the Line Lane. Pityful a rethoric question ran over her cheek, then she continued her way. On her way she met a copy. The copy warned the Little Blind Text, that where it came from it would have been rewritten a thousand times and everything that was left from its origin would be the word "and" and the Little Blind Text should turn around