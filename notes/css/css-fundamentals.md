# CSS Fundamentals

## Basics
- Basic formula: selector { property name : value }
- Three places to write css: Inline, internal & external css
- Inline: style property
- Internal: style tag
- External: link tag, href & rel attributes

## Text
- font-size
- font-family
- text-transform
- font-style
- line-height
- text-align

## Combination selectors
- Comma separated list of elements
- Descendent selector (SPACE): selects all children and grand children

## Class and ID selectors
- ID (#): only one per page
- class (.): many on one or other page

## Colors
- RGB: rgb(red, green, blue)/rgba(red, green, blue, alpha)
- Hexadecimal: #red green blue
- color property
- background-color

## Pseudo-classes
- syntax: element:seudo-name
- example: li:first-child, li:last-child, li:nth-child(2)
- hyperlink pseudo classes: a:link, a:visited, a:hover, a:active

## Conflicting CSS
- css conflicts can happen happen when multiple css rules are assigned to the same element
- all props and rules get applied except the conflicted one
- priority highest to lowest: !important, inline styles, ID, class or psuedo class, element, universal

## Inheritance
- child elements inherits the styles of the parent elements
- not all of the props get inherited, mostly the text ones
- you can use universal selector (*) to apply styles to all elements

## CSS Box Model
- box model consists of: content, padding, border, margin
- padding is space inside the border
- margin is space outside the border
- element width consists of: left border, left padding, content width, right padding, right border
