# CSS Layouts

## Intro

- Page layout
- Component layout
- Three ways - Floats (Old), Flexbox (New), CSS Grids (New)

## Floats

- float: left | right
- clear: left | right | both
- clearfix::after hack

```
.clearfix::after {
  clear: both;
  content: '';
  display: block;
}
```

> Use box sizing of content-box instead of border-box
