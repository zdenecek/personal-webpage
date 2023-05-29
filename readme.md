
# My personal website

This is code for my personal webpage. It is a static site generated with [Hugo](https://gohugo.io/) using the [Devise](https://themes.gohugo.io/themes/devise/) theme.

You can view the site at [https://zdenektomis.eu](https://zdenektomis.eu).

Automated deployment is handled by a GitHub Action.

## Development

To run the site locally, you need to have [Hugo](https://gohugo.io/) installed. Then run:

```bash
hugo server --watch  --disableFastRender
```

## Build

To build the site, run:

```bash
hugo
```