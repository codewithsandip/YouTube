# Pseudo Class Selectors

## State Selectors

Selecting elements by state.

```
<a href="#">Click Me!</a>
```

```
a:link {
    color: brown;
}

a:hover {
    color:burlywood;
}

a:active {
    color:chartreuse;
}

a:visited {
    color:darkgray;
}
```

## Child Selector

Selecting elements by child number.

```
<article>
    <h1>Article One</h1>
    <p>Lorem ipsum dolor sit amet.</p>
</article>
<article>
    <p>I am the only child.</p>
</article>
<ul>
    <li>Item 1</li>
    <li>Item 2</li>
    <li>Item 3</li>
    <li>Item 4</li>
    <li>Item 5</li>
</ul>
<p>Lorem, ipsum dolor.</p>
<p>Lorem ipsum dolor sit.</p>
```

```
ul li:first-child {
    background-color: darkorange;
}

ul li:last-child {
    background-color:deeppink;
}

p:only-child {
    background-color: deepskyblue;
}

ul li:nth-child(2) {
    background-color: forestgreen;
}

ul li:nth-last-child(3) {
    background-color:indigo;
}
```

## Type Selector

Selecting elements by its type.

```
<section>
    <h1>Main heading</h1>
    <h2>Sub heading one</h2>
    <h2>Sub heading two</h2>
    <p>Lorem, ipsum.</p>
    <p>Lorem, ipsum dolor.</p>
    <h2>Sub heading three</h2>
    <h3>More heading</h3>
</section>
<article>
    <h1>One</h1>
    <p>Lorem ipsum dolor sit amet.</p>
    <p>Lorem, ipsum dolor.</p>
</article>
<article>
    <h1>Two</h1>
    <p>Lorem ipsum dolor sit amet.</p>
    <p>Lorem, ipsum dolor.</p>
</article>
```

```
section h2:first-of-type {
    background-color: indigo;
}

section p:last-of-type {
    background-color: khaki;
}

section h3:only-of-type {
    background-color: lawngreen;
}

section h2:nth-of-type(2) {
    background-color: lightseagreen;
}

section h2:nth-last-of-type(1) {
    background-color: magenta;
}

article :not(p) {
    background-color: moccasin;
}
```

## Form State Selector

Select elements by there form state.

```
<form action="#">
    <label for="">First Name:</label>
    <input type="text"> <br /><br />
    <label for="">Last Name:</label>
    <input type="text"><br /><br />
    <label for="">Username<sup>*</sup>:</label>
    <input type="email" required><br /><br />
    <label for="">Password:</label>
    <input type="text"><br /><br />
    <label for="">Read Me:</label>
    <textarea readonly>This is read only text</textarea><br /><br />
    <input type="checkbox"> <label for="">I agree</label> <br /><br />
    <button disabled>Submit</button>
    <button>Clear</button>
</form>
```

```
button:enabled {
    background-color: navajowhite;
}

button:disabled {
    background-color: olive;
}

input:checked + label {
    background-color: orange;
}

input:invalid {
    background-color: orangered;
}

textarea:read-only {
    background-color: silver;
}

input:required {
    background-color: tan;
}
```

