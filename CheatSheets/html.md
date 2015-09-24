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

### Lists:
A way of organizing a collection of items.

#### `<ul>`:
The 'unordered list' is used to hold a list of or collection of items whose order don't matter.  The items are typically represented with a preceeding bullet point.  The items in the list are nested within the above `<ul>` tag and are denoted by use of a `<li>` (list item) tag.  Both tags require closing tags.
#### `<ol>`:
The 'ordered list' is used to hold a list of or collection of items whose order matters.  The items are typically represented with a preceeding numeral.  This of course can be changed as need dictates with use of the `css list-style-type` selector.  The items in the list are nested within the above `<ol>` tag and are denoted by use of the `<li>` (list item) tag.  Both tags require closing tags.
#### `<dl>`:
The 'description list' is used to hold a list of terms and definitions and are great for glossary's and metadata information.  In order to clearly state the enclosed list of data you use the `<dt>` (description term) and `<dd>` (description definition) tags nested within the above `<dl>` tag.  Just like the other lists these require closing tags for all elements.


### Forms:
Groups of elements that users can fill out and submit to websites

#### [`<form>`](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/form):
The HTML <form> element represents a document section that contains interactive controls to submit information to a web server.

##### Attributes [global attributes](https://developer.mozilla.org/en-US/docs/Web/HTML/Global_attributes):
* [`<input>`](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/input):
The HTML <input> element is used to create interactive controls for web-based forms in order to accept data from the user. How an <input> works varies considerably depending on the value of its type attribute.
* [`<fieldset>`](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/fieldset):
The HTML <fieldset> element is used to group several controls as well as labels (<label>) within a web form.
* [`<legend>`](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/legend):
The HTML <legend> Element (or HTML Legend Field Element) represents a caption for the content of its parent <fieldset>.
* [`<select>`](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/select):
The HTML select (<select>) element represents a control that presents a menu of options. The options within the menu are represented by <option> elements, which can be grouped by <optgroup> elements. Options can be pre-selected for the user.
* [`<textarea>`](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/textarea):
The HTML <textarea> element represents a multi-line plain-text editing control.
* [`<option>`](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/option):
In a Web form, the HTML <option> element is used to create a control representing an item within a <select>, an <optgroup> or a <datalist> HTML5 element.


###### Footnotes

[1](https://developer.mozilla.org/en-US/docs/Web/Guide/HTML/Content_categories#Flow_content)
