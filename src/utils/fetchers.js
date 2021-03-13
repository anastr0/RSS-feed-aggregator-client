
const server_domain = "server_domain.com"

export const fetchRSSFeed = (feedURL) => {
    // POST request with feedURL query
    // Server response with RSS feed to given feedURL

    return fetch(`${server_domain}/v1/rss-feed`, {
        method: 'POST',
        mode: 'cors',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formatData(query))
    })
    .then((res) => res.json())
    .catch((err) => {
        console.log(err)
    })
}

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

