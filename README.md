# What is it?
This javascript allows one to display ones github projects on ones website. \
The first repositories are listed by the number of stars. \
If there aren't anymore repos with starts, the most recently updates repositories are shown.


# How to use
Change the following lines in the code to your github username `USERNAME`, aswell as repositories that shouldn't be displayed `IGNOREDREPOS`. \
You also need the class name `HTML_ELEMENT` of html element that will be containing the created elements. \
If you want to limit the number of repositories shown (not all that are public), then set `LIMIT_REPOS` to `true` and set the number of repos `NUM_REPOS`.

```js
const USERNAME = "USERNAME";               // Github username
const IGNOREDREPOS = ["REPO1", "REPO2"];   // Repositories that shouldn't be displayed

const HTML_ELEMENT = "git_projects"        // change for custom class name

const LIMIT_REPOS = false                  // If the number of display repositories should be limited (if true change next line)
const NUM_REPOS = 1                        // Number of repositories to be displayed

```

# Other
This script uses [github-readme-stats](https://github.com/anuraghazra/github-readme-stats) from anuraghazra.
