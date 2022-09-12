const client = new TwitterApi('1398713514059915266-xJ9UZf5VOkAq5W6BD7XhUEzeW5c68r');

const roClient = client.readOnly;

const homeTimeline = client.v1.homeTimeline();

console.log(homeTimeline.tweets.length, 'fetched.');

const nextHomePage = homeTimeline.next();
console.log('Fetched tweet IDs in next page:', nextHomePage.tweets.map(tweet => tweet.id_str));