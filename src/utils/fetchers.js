const server_domain = "https://rss-feed-aggregater-server.herokuapp.com";
const version_number = 1

export const validated = (feedURL) => {
  // validate string
  if (feedURL.length>0) {
    return true 
  }
  return false
}

const notifyAdd = (feedURL) => {
  // notify user of adding URL
    alert("Added " + feedURL + " to daily news feed" )
    window.location.reload()
}

export const addURL = (feedURL) => {
  // add URL to localstorage after validation
  if (typeof localStorage.getItem("feedURLs") == "undefined") {
    console.log(feedURL + " set");
    localStorage.setItem("feedURLs", JSON.stringify([feedURL]));
    notifyAdd(feedURL)
  } else {
    var currentURLs = JSON.parse(localStorage.getItem("feedURLs"));
    console.log(currentURLs);
    if (currentURLs == null) {
      localStorage.setItem("feedURLs", JSON.stringify([feedURL]));
      notifyAdd(feedURL)
    } else {
      if (currentURLs.includes(feedURL)) {
        alert("Already added to daily news feed");
      } else {
        currentURLs.push(feedURL);
        localStorage.setItem("feedURLs", JSON.stringify(currentURLs));
        notifyAdd(feedURL)
      }
    }
  }
};

const getFeedURLs = () => {
  // read stringified list of feedURLs from localstorage
  // return JSON for /aggregate req
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
