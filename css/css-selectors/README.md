# CSS Selectors

There are 5 types of CSS selectors that you need to understand to master targetting html elements.

[1. Simple Selectors](https://github.com/codewithsandip/notes/blob/master/css/css-selectors/simple)

## Name
>article, h1, p etc.

## Id
>#article-one, #blog-post, #panel etc.

## Class
>.success, .error, .warn etc.

## Group
>article, .article-one, .success

## Universal
>* {}

[2. Combinator Selectors](https://github.com/codewithsandip/notes/tree/master/css/css-selectors/combinator)

## Descendent Selector (SPACE)
>.post p {}

## Child Selector (>)
>.post > p {}

## Sibling Selector (+)
>h1 + article {}

## General Selector (+)
>h1 ~ article {}

[3. Pseudo Class Selectors](https://github.com/codewithsandip/notes/tree/master/css/css-selectors/pseudo-class)

## State Selectors
>a:link {}, a:hover {}, a:active {}, a:visited {}

## Child Selector
>ul li:first-child {}, ul li:last-child {}, p:only-child {}, ul li:nth-child(2) {}, ul li:nth-last-child(3) {}

## Type Selector
>section h2:first-of-type {}, section p:last-of-type {}, section h3:only-of-type {}, section h2:nth-of-type(2) {}, section h2:nth-last-of-type(1) {}, article :not(p) {}

## Form State Selector
>button:enabled {}, button:disabled {}, input:checked + label {}, input:invalid {}, textarea:read-only {}, input:required {}

[4. Pseudo Element Selectors](https://github.com/codewithsandip/notes/tree/master/css/css-selectors/pseudo-element)

## Text Parts Selectors
>h1::first-letter {}, p::first-line {}, ::selection {}

## Before & After Selector
>p::before {}, p::after {}

[5. Attribute Selectors](https://github.com/codewithsandip/notes/tree/master/css/css-selectors/attribute)

## Name Selectors
>h1[title] {}

## Value Selectors (=)
>h1[title="article two"] {}

## Contains Selectors (~)
>h1[title~="article"] {}

## Starts with pipe selector (|)
>h1[title|="article"] {}

## Starts with caret selector (^)
>h1[title^="article"] {}

## Ends with selector ($)
>h1[title$="one"] {}

## Contains Selector (*)
>h1[title*="art"] {}