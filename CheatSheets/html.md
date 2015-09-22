## The Structure:
HTML is made up of `tags`.  `Tags` are keywords surrounded by angle brackets `<>` and they come in pairs.  The opening `tag` looks like this `<keyword>` and the closing tag looks like this `</keyword>`.  Note the slash before the keyword in the closing tag.  If you are inspecting an HTML document and do not see a closing `tag` the you have stumbled across a `tag` that doesn't require it.

## `<html>`

the main enchilada, the whole `document`, that which wraps all the others... except for [`<!DOCTYPE>`](#doctype), for some reason.  This tag also tells the broswer that this is an `HTML` document.

* _parents_: none, it's the top
* _content_: _only_ [`<head>`](#head) and [`<body>`](#body)
* _display_: `block`, maybe? I mean, I can see it... RESEARCH!

### `<!DOCTYPE>`:
The `<!DOCTYPE>` declaration tells the browser how to display the web page.  It has 2 requirements which are type and version.  In my limited experience it doesn't usually have the version specified.

### Comments:
It is important with any language that you write code or in this case markup with that you leave detailed comments describing what you did for others.  In `HTML` this is accomplished with the following syntax `<!-- to start and the following to end -->`.  Why oh why does each language use different syntax for commenting?  This is something I have yet to learn but it is important to utilize the above format when in `HTML`.

### `<head>`:
The `<head>` element provides general information (metadata) about the document, including its title and links to or definitions of scripts and style sheets.  It's only parent element is the afore mentioned `<html>` element.  The elements that can be used inside of the `<head>` element are `<title>` (which is required), `<base>`, `<link>`, `<style>`, `<meta>`, `<script>`, `<noscript>` and the `<command>` elements.

### `<body>`:
The `<body>` element represents the content of an `HTML` document.  There can only be **one** `<body>` element in a document.  It's only permitted parent element is the `<html>` element.

#### `<header>`:
The `<header>` element represents a group of introductory or navigational aids.  It may contain some heading elements (i.e. `<h1>, <h2>, ... <h6>`) but also other elements like a logo, wrapped sections's header, a search form, and so on.  This cannot be a child/decendant element of `<address>, <footer> or another <header>`.

#### `<nav>`:
The `<nav>` element represents a section of a page that links to other pages or to parts within the same page.  It is essentially a section with navigation links.  It has no document placement requirements.

#### `<section>`:
The `<section>` element represents a generic section of a document (i.e. a thematic grouping of content) typically with a heading.  Each `<section>` should be identified, typically by including a heading element (`<h1>...<h6>`) as a child of the `<section>` element.  It cannot be a decendent of an `<address>` element.

#### `<article>`:
The `<article>` represents a self-contained composition in a document, page, application, or site, which is intended to be independently distributable or reusable.  This could be a forum post, a magazine or newspaper article, a blog entry, an object, or any other independent item of content.  Just like the `<section>` element it should be identified with a header element.  It cannot be a decendent of an `<address>` element.

#### `<footer>`:
The `<footer>` element represents a footer for its nearest sectioning content or sectioning root element.  A footer typically contains information about the auther of the section, copyright data or links to related documents.  It cannot be a child/decendant of `<address>, <header> or another <footer>` element.

### Attributes

* `class` -- a space-separated list of category names
* . . .

. . .

## `<div>`

A generic page division that should only be used if no other, more semantic choice is appropriate... and because @al-the-x might kill me if I do when I could use [`<section>`](#section) instead.

* _parents_: anything that accepts [Flow Content][1], which is apparently a lot of things.
* _content_: any [Flow Contant][1], palpable content (WTF?)
* _display_: `block`

. . .

###### Footnotes

[1](https://developer.mozilla.org/en-US/docs/Web/Guide/HTML/Content_categories#Flow_content)