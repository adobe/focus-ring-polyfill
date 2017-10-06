# Focus Ring Polyfill

A polyfill for the `:focus-ring` spec.

It is similar to the WICG polyfill, but adds support for dealing with focus programmatically set after an Arrow key or Esc, which is needed for controls like tab lists or dialogs.

Should be used with the postcss-focus-ring plugin to convert this:

```css
button:focus-ring {
  /* focus-ring only stuff */
}
```

to this:

```css
button.focus-ring {
  /* focus-ring only stuff */
}
```

This polyfill can then add and remove this `.focus-ring` to mimic the `:focus-ring` spec.
