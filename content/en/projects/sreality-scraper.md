---
title: Sreality.cz listings scraper
project_tags: Vue.js|MongoDB|Node.js|Express|Scrapy|Python|browser extensions|Node.js
summary: |
 A web application for scraping real estate listings from sreality.cz and displaying them in a user-friendly way. Allows for complex filtering and queries.
github: https://github.com/search?q=zdenecek%2Fsrm&type=repositories
image: projects/sreality-scraper.png
priority: 11
---

## SRM - Sreality Manager 
A web application for scraping real estate listings from sreality.cz and displaying them in a user-friendly way. Allows for complex filtering and queries.

The application consists of four parts:

- **Scrapy spiders** - spiders for scraping listings from sreality.cz. The spiders are run periodically on a server and the results are stored in a MongoDB database.
- **Node.js API** - an API for accessing the database. The API is used by the web application and the browser extension. 
- **Vue.js web application** - a web application for displaying the listings. The application allows for complex filtering and queries.
- **Browser extension** - a browser extension for seamless navigation from the sreality.cz website. Extension is available for Chrome in Chrome Store and Firefox.

### Screenshots

![Screenshot 1](/images/projects/sreality-manager-1.png)

![Screenshot 2](/images/projects/sreality-manager-2.png)
 
![Screenshot 3](/images/projects/sreality-manager-3.png)
