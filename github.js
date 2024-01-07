const USERNAME = "USERNAME"; // Github username
const IGNOREDREPOS = ["REPO1", "REPO2"];  // Repositories that shouldn't be displayed

const HTML_ELEMENT = "git_projects" // change for custom class name

const LIMIT_REPOS = false // If the number of display repositories should be limited (if true change next line)
const NUM_REPOS = 1 // Number of repositories to be displayed

// Dont change the following script if you don't know what you are doing 
var url = `https://api.github.com/users/${USERNAME}/repos`;

function fetchRepos() {
    return fetch(url)
        .then(response => response.json())
        .then(data => {
            var repos = {};
            data.forEach(repo => {
                var reponame = repo.name;
                var stars = repo.stargazers_count;
                var date = repo.pushed_at;
                var fork = repo.fork;
                // Ignore forked repositories and special repositories like the custom profile one.
                if (reponame !== USERNAME && !IGNOREDREPOS.includes(reponame) && fork != true) {
                    repos[reponame] = [stars, date];
                }
            });
            console.log(repos)
            return repos;
        });
}

function sort_object(obj) {
    var items = Object.keys(obj).map(function(key) {
      return [key, obj[key]];
    });
    items.sort(function(first, second) {
      if (first[1][0] === 0 && second[1][0] === 0) {
        return second[1][1].localeCompare(first[1][1]);
      } else {
        return second[1][0] - first[1][0];
      }
    });
    var sorted_obj = {};
    items.forEach(function(v) {
      var use_key = v[0];
      var use_value = v[1][0];
      sorted_obj[use_key] = use_value;
    });
    return sorted_obj;
  }

document.addEventListener("DOMContentLoaded", function () {
    var headerElement = document.querySelector(HTML_ELEMENT); // Assuming there's only one element with this class
    fetchRepos()
        .then(repos => {
            var content = "";
            var sortedRepos = sort_object(repos);
            let num = 0;
            for (var reponame in sortedRepos) {
                if (LIMIT_REPOS && num == NUM_REPOS){
                    break;
                }
                content += `<a href="https://github.com/${USERNAME}/${reponame}" target="_blank"><img src="https://github-readme-stats.vercel.app/api/pin/?USERNAME=${USERNAME}&repo=${reponame}&theme=dark"/></a>`;
                num++;
            }
            headerElement.innerHTML = content;
        })
        .catch(error => {
            alert("Error fetching repos:", error);
        });
});
