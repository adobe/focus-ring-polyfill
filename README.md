![spectrum-logo](https://git.corp.adobe.com/storage/user/655/files/a13fda74-9d4a-11e6-9aec-1b320823594a)
# Focus Ring Polyfill

A polyfill for the `:focus-ring` spec.

## Usage

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

## Learn More
For [general information](https://git.corp.adobe.com/Spectrum/README) about the projects in this org, how to communicate with the development team, where to file issues, or how to contribute, please check out the generic [Spectrum/README](https://git.corp.adobe.com/Spectrum/README) information.
