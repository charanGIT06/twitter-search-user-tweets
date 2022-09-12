const Twitter = require('twitter');

var client = new Twitter(
    {
        consumer_key: 'a',
        consumer_secret: 'b',
        bearer_token: 'c'
    }
)

let newSearch = function() {
    client.get('statuses/user_timeline', params, function(error, tweets, response) {
        if (!error) {
            // window.alert(tweets[0].text);
            textBox.innerText = tweets[0].text;
        }
    });
}

let textBox = document.getElementById("text");

var params = {
    screen_name: 'mkbhd'
}

// Function to set Username
let setUserName = function() {
    // newSearch();
    alert("hi");
    let name = document.getElementById('search').value;
    textBox.innerText = name;
    params.screen_name = name;
}
