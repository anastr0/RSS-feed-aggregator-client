# RSS-feed-aggregator-client
Vuejs application that parses RSS feeds and shows aggregated daily news feed. [Try now](https://anaswaratrajan.github.io/RSS-feed-aggregator-client/)!


Check out [server](https://github.com/anaswaratrajan/RSS-feed-aggregator-server) repository.

## Table of contents

- [Prerequisites](#prerequisites)
- [Setup](#Setup)
- [Usage](#Usage)
- [Features](#Features)
- [Repository-Structure](#Repository-Structure )

# Prerequisites

* node 14.7+

# Setup

```
npm i

npm run serve
```

> http://localhost:8080/RSS-feed-aggregator-client/

# Usage 

* Enter any RSS feed link and click `get feed`  button, gives back sortable list of RSS feed from the given link.

* Click `+ daily feed` and the feed link in input field will be added to the list of feedURLs to fetch into `daily news feed` section on each page reload

# Features

* Give RSS feed for a given feed URL
* Give aggregated RSS feed of feedURLs saved by user so far. 
> Note: Stored state will be lost on deleting browser data since feedURLs are stored in localstorage
* Both sections have feed list sortable by published date
* Burger icon expands each headline to render the content ( Also renders html content )

# Repository-Structure 

```
.
├── App.vue
├── assets
│   └── logo.png
├── components
│   ├── Layout
│   │   ├── Footer.vue
│   │   └── Header.vue
│   ├── RSSComponents
│   │   ├── DailyFeedTable.vue
│   │   ├── RSSFeedTable.vue
│   │   └── SearchBar.vue
│   └── RSSParentComponent.vue
├── main.js
└── utils
    └── fetchers.js
```
