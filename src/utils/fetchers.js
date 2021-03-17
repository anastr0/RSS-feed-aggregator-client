const server_domain = "https://rss-feed-aggregater-server.herokuapp.com";
const version_number = 1

export const addURL = (feedURL) => {
  if (typeof localStorage.getItem("feedURLs") == "undefined") {
    console.log(feedURL + " set");
    localStorage.setItem("feedURLs", JSON.stringify([feedURL]));
  } else {
    var currentURLs = JSON.parse(localStorage.getItem("feedURLs"));
    console.log(currentURLs);
    if (currentURLs == null) {
      localStorage.setItem("feedURLs", JSON.stringify([feedURL]));
    } else {
      if (currentURLs.includes(feedURL)) {
        alert("Already in localstorage");
      } else {
        currentURLs.push(feedURL);
        localStorage.setItem("feedURLs", JSON.stringify(currentURLs));
      }
    }
  }
};

const getFeedURLs = () => {
  var feedURLs = JSON.parse(localStorage.getItem("feedURLs"))
  return JSON.stringify({feedURLs})
}

export const fetchRSSFeed = (feedURL) => {
  // POST request with feedURL query
  // Server response with RSS feed to given feedURL

  // console.log(JSON.stringify({ feedURL }));
  return fetch(`${server_domain}/v${version_number}/rss-feed/`, {
    method: "POST",
    mode: "cors",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({ feedURL }),
  })
    .then((res) => res.json())
    .catch((err) => {
      console.log(err);
    });
};

export const fetchAggregatedRSSFeed = () => {
  // GET request with stored feedURLs
  // Server response with aggregated RSS feed

  return fetch(`${server_domain}/v${version_number}/aggregate-feed/`, {
    method: "POST",
    mode: "cors",
    headers: {
      "Content-Type": "application/json",
    },
    body: getFeedURLs(),
  })
    .then((res) => res.json())
    .catch((err) => {
      console.log(err);
    });
};
