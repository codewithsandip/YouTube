# Pseudo Element Selectors

## Text Parts Selectors

Selects parts of text - letter, line.

```
<h1>Article One</h1>
<p>Lorem ipsum, dolor sit amet
    consectetur adipisicing elit.
    Sint labore, ad, nam a
    nesciunt quam laboriosam quo
    laborum illo dolore, quaerat
    totam alias autem! Minus
    aperiam animi doloribus
    amet nobis!
</p>
```

```
h1::first-letter {
    font-size: 5rem;
}

p {
    width: 20rem;
}

p::first-line {
   background-color: antiquewhite; 
}

::selection {
    background-color: blanchedalmond;
}
```

## Before & After Selector

Selects and inserts content before & after an element.

```
<h1>Article One</h1>
<p>Lorem ipsum dolor sit amet
    consectetur adipisicing
    elit. Porro inventore
    beatae similique dicta
    cupiditate rem autem culpa.
</p>
```

```
p {
    width: 15rem;
}

p::before {
    content: "(";
}

p::after {
    content: ")";
}
```

