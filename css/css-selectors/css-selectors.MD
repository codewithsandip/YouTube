# CSS Selectors

## Name Selectors

Selecting elements by there tag/element names
e.g. headings, tables, para, lists, images etc.

```
<article>
    <h2>Master CSS Selectors</h2>
    <p>Lorem ipsum dolor sit amet.</p>  
</article>
```

```
article {
    background-color: bisque;
}

h1 {
    color:black;
}

p {
    color:cadetblue;
}
```

## ID Selector

Selecting elements by assigning them a unique Id.

```
<article id="article-one">
    <h2 id="heading-one">Master CSS Selectors</h2>
    <p id="text-one">Lorem ipsum dolor sit amet.</p>  
</article>
```

```
#article-one {
    background-color: cadetblue;
}

#heading-one {
    color:darkmagenta;
}

#text-one {
    color:crimson;
}
```

## Class Selector

Selecting elements by assigning them a class names. A same class name can be assigned to multiple elements.

```
<p class="success">Lorem, ipsum dolor.</p>
<p class="error">Lorem ipsum dolor sit amet.</p>
<p class="warn">Lorem ipsum dolor sit amet consectetur adipisicing.</p>
<p class="success">Lorem, ipsum.</p>
```

```
.success {
    color: green;
}

.error {
    color: red;
}

.warn {
    color: orange;
}
```

## Group Selector

Group name, id and class selectors for same styling attributes.

```
<article>
    <h2>Master CSS Selectors</h2>
    <p>Lorem ipsum dolor sit amet.</p>  
</article>
<article id="article-one">
    <h2 id="heading-one">Master CSS Selectors</h2>
    <p id="text-one">Lorem ipsum dolor sit amet.</p>  
</article>
<p class="success">Lorem, ipsum dolor.</p>
<p class="error">Lorem ipsum dolor sit amet.</p>
<p class="warn">Lorem ipsum dolor sit amet consectetur adipisicing.</p>
<p class="success">Lorem, ipsum.</p>
```

```
article, .article-one, .success {
    background-color: palegreen;
}
```

## Universal Selector

Selects all html elements.

```
<h1>CSS Selectios</h1>
<h2>Name Selectors</h2>
<p>Selecting elements by there tag/element names</p>
<h2>ID Selectors</h2>
<p>Selecting elements by assigning them a unique Id.</p>
```

```
* {
    padding: 0;
    margin: 0;
}
```

