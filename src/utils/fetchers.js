const server_domain = "https://rss-feed-aggregater-server.herokuapp.com";
const version_number = 1


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
    
    return fetch(`${server_domain}`, {
        method: 'GET',
        mode: 'cors',
        headers: {
          'Content-Type': 'application/json'
        }
    })
    .then((res) => res.json())
    .catch((err) => {
        console.log(err)
    })
}

