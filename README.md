# Bradley Kenyon

Source code for personal portfolio site: bradleykenyon.com

## Requirements
Ruby, [Middleman](https://middlemanapp.com/)

## Project Setup

```bash
bundle install
```

## Development

To start the development environment provided by Middleman, run:

```bash
middleman
```

This will start the Middleman server on its default port 4567 with Live Reload enabled.


## Building

To build a static version of the site, run:

```bash
middleman build
# or
rake build
```

## Deploying

The site is hosted with Github Pages. By using the [middleman-gh-pages](https://github.com/edgecase/middleman-gh-pages) gem, deploying is as simple as running:

```bash
rake publish
```
