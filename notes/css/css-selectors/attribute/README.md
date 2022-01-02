# Attribute Selectors

## Name Selectors

Selects elements by attribute name.

```
<h1 title="article one">Article One</h1>
<p>Lorem ipsum dolor sit amet.</p>
<h1 title="article two">Article Two</h1>
<p>Lorem ipsum dolor.</p>
```

```
h1[title] {
    background-color: cadetblue;
}
```

## Value Selectors (=)

Selects elements by attribute name & value equality.

```
<h1 title="article one">Article One</h1>
<p>Lorem ipsum dolor sit amet.</p>
<h1 title="article two">Article Two</h1>
<p>Lorem ipsum dolor.</p>
```

```
h1[title="article two"] {
    background-color: chartreuse;
}
```

## Contains Selectors (~)

Selects elements by attribute name & value if it contains whole word.

```
<h1 title="article one">Article One</h1>
<p>Lorem ipsum dolor sit amet.</p>
<h1 title="article two">Article Two</h1>
<p>Lorem ipsum dolor.</p>
```

```
h1[title~="article"] {
    background-color: coral;
}
```

## Starts with pipe selector (|)

Selects elements by attribute name & value if it starts with and followed by (-).

```
<h1 title="article-one">Article One</h1>
<p>Lorem ipsum dolor sit amet.</p>
<h1 title="article-two">Article Two</h1>
<p>Lorem ipsum dolor.</p>
```

```
h1[title|="article"] {
    background-color: darkgoldenrod;
}
```

## Starts with caret selector (^)

Selects elements by attribute name & value if it starts with value.

```
<h1 title="article-one">Article One</h1>
<p>Lorem ipsum dolor sit amet.</p>
<h1 title="article-two">Article Two</h1>
<p>Lorem ipsum dolor.</p>
<h1 title="art-three">Article Two</h1>
<p>Lorem ipsum dolor efat.</p>
```

```
h1[title^="article"] {
    background-color: darkorange;
}
```

## Ends with selector ($)

Selects elements by attribute name & value if it ends with value.

```
<h1 title="article-one">Article One</h1>
<p>Lorem ipsum dolor sit amet.</p>
<h1 title="article-two">Article Two</h1>
<p>Lorem ipsum dolor.</p>
<h1 title="art-cone">Article Cone</h1>
<p>Lorem ipsum dolor efat.</p>
```

```
h1[title$="one"] {
    background-color: darkseagreen;
}
```

## Contains Selector (*)

Selects elements by attribute name & value if it contains sub-string.

```
<h1 title="article-one">Article One</h1>
<p>Lorem ipsum dolor sit amet.</p>
<h1 title="article-two">Article Two</h1>
<p>Lorem ipsum dolor.</p>
<h1 title="art-cone">Article Cone</h1>
<p>Lorem ipsum dolor efat.</p>
```

```
h1[title*="art"] {
    background-color: deeppink;
}
```

