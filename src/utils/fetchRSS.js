const RSS_URL = `https://home.cern/api/news/news/feed.rss`;


export const fetchRSSFeed = () => {
    return fetch(RSS_URL)
        .then(response => response.text())
        .then(str => new window.DOMParser().parseFromString(str, "text/xml"))
        .then((data) => {
            return data
        })
}
