// Install devStyles
const style = theme => {
  let link = document.createElement("link");
  link.href = `https://devstyles.netlify.app/css/${theme}.css`;
  link.rel = "stylesheet";
  document.head.append(link);
};

// onedark, dracula, monokai, sublime, nightowl, onelight
style("sublime");

// Head to index.html to change the markup ;)
