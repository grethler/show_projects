# What is it?
This javascript allows one to display ones github projects on ones website. \
The first repositories are listed by the number of stars. \
If there aren't anymore repos with starts, the most recently updates repositories are shown.


# How to use
Change the following lines in the code to your github username, aswell as repositories that shouldn't be displayed. \
You also need the class name of html element that will be containing the created elements.

```js
const USERNAME = "USERNAME";
const IGNOREDREPOS = ["REPO1", "REPO2"]; 
const HTML_ELEMENT = "git_projects" // change for custom class name
```
