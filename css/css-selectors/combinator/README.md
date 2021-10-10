# Combinator Selectors

## Descendent Selector (SPACE)

Selects all children and grand-children.

```
<section class="post">
    <h2>Descendent Selectors</h2>
    <p>I am a child</p>
    <p>Lorem, ipsum dolor.</p>
    <article>
        <p>I am a grand child</p>
    </article>
</section>
```

```
.post p {
    color: red;
}
```

## Child Selector (>)

Selects all direct children.

```
<section class="post">
    <h2>Descendent Selectors</h2>
    <p>I am a child</p>
    <p>Lorem, ipsum dolor.</p>
    <article>
        <p>I am a grand child</p>
    </article>
</section>
```

```
.post > p {
    color: red;
}
```

## Sibling Selector (+)

Selects adjacent sibling after the element.

```
<h1>Article One</h1>
<article>
    <h2>HTML basics</h2>
    <p>Lorem ipsum dolor sit amet.</p>
</article>
<article>
    <h2>CSS Basics</h2>
    <p>Lorem ipsum dolor sit.</p>
</article>
<p>
    Lorem ipsum dolor sit amet consectetur 
    adipisicing elit. Dicta, fuga!
</p>
```

```
h1 + article {
    background-color: paleturquoise;
}
```

## General Selector (~)

Selects all adjacent siblings after the element.

```
<h1>Article One</h1>
<article>
    <h2>HTML basics</h2>
    <p>Lorem ipsum dolor sit amet.</p>
</article>
<article>
    <h2>CSS Basics</h2>
    <p>Lorem ipsum dolor sit.</p>
</article>
<p>
    Lorem ipsum dolor sit amet consectetur 
    adipisicing elit. Dicta, fuga!
</p>
```

```
h1 ~ article {
    background-color: paleturquoise;
}
```