# devStyles Colors

Play with **{devStyles}**, preview the ColorThemes.

https://devstyles.netlify.app

## Setup from JS

```
// Install devStyles
const style = theme => {
  let link = document.createElement("link");
  link.href = `https://devstyles.netlify.app/css/${theme}.css`;
  link.rel = "stylesheet";
  document.head.append(link);
};

// onedark, dracula, monokai, sublime, nightowl, onelight
style("nightowl");
```

## Setup from HTML

```
// Inside HEAD, and replace 'theme' by the prefered one
  <link href ="https://devstyles.netlify.app/css/theme.css" rel="stylesheet">
```
