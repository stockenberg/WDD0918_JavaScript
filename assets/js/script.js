
let joke = document.getElementById('joke');

document.getElementById('shuffle').onclick = function () {
    axios.get("https://api.chucknorris.io/jokes/random")
        .then(function (res) {
            console.log(res);
            console.log(res.data.value)
            joke.innerHTML = res.data.value;
        })
        .catch(function (err) {
            console.log(err);
        })


}


// https://www.reddit.com/r/webdev/comments/3wrswc/what_are_some_fun_apis_to_play_with/