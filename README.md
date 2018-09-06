# HostelWorld Clone: TravelInn

> This is the header section of a hostel listing page clone inspired by hostelworld.com.

It contains the hostel name, location, and features of the hostel (free wifi and/or free breakfast). Some dynamic features of the app include the icons for wifi and coffee above the hostel name. When a user hovers over them, a tooltip will reveal what those features are.

A user may also click on the background image to reveal a carousel of the photos for that specific hostel. The icons in the top right corner of the header are dynamic as well.

When you click on the user icon, it shows a modal where a user can input a email/username and password. Clicking on the magnifying glass icon will show a search component where a user can search for hostels in a specific city.

Lastly, when you click on the menu bars icon, a navigation bar will appear from the right side of the screen to navigate you to other parts of the website.

This application was optimized to handle 2,000 RPS at a maximum latency of 90ms with 10,010,000 database records and a 2-server cluster load balanced using nginx. It could be further optimized in the future using Redis caching.

## Related Projects

-   https://github.com/TravelInn/Reviews
-   https://github.com/TravelInn/Booking
-   https://github.com/TravelInn/Overview
-   https://github.com/TravelInn/Proxy-Giulia

## Table of Contents

1.  [Usage](#Usage)
1.  [Requirements](#requirements)
1.  [Development](#development)

## Usage

> Run the following command in your terminal to start webpack:

    "npm run react-dev"

> Run the following command in your terminal to start server:

    "npm start"

> Insert following into your brower to open:

    "http://localhost:3001/"

## Requirements

An `nvmrc` file is included if using [nvm](https://github.com/creationix/nvm).

-   Node 6.13.0
-   etc

## Development

### Installing Dependencies

From within the root directory:

```sh
npm install -g webpack
npm install
npm install nodemon
```
