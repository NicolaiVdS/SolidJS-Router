# Added  stuff

## TailwindCss + DaisyUI

Switched from windicss to [TailwindCss](https://tailwindcss.com/docs/guides/solidjs) + [Daisyui](https://daisyui.com/docs/install/).

## CSS Theme Change

- A tiny JS script to handle CSS themes
- Change CSS theme using `button`, `toggle` or a `<select>`
- It saves chosen theme in browser and uses it again when page reloads

> https://github.com/saadeghi/theme-change

## Netlify Ridirects 
[![Netlify Status](https://api.netlify.com/api/v1/badges/2fa9e990-d735-48ad-9af2-c1c67fca2631/deploy-status)](https://app.netlify.com/sites/serene-gecko-45e2cc/deploys)

base config `public/_redirects` to handle the routes when hosted on Netlify [Demo](https://solidrouter.netlify.nvds.be/).

## Docker file

basic setup for creating a docker image of your app that will run on the NGINX base image. 
> NGINX redirect config included in `nginx.conf` 

---
## Usage

Those templates dependencies are maintained via [pnpm](https://pnpm.io) via `pnpm up -Lri`.

This is the reason you see a `pnpm-lock.yaml`. That being said, any package manager will work. This file can be safely be removed once you clone a template.

```bash
$ npm install # or pnpm install or yarn install
```

## Exploring the template

This template's goal is to showcase the routing features of Solid.
It also showcase how the router and Suspense work together to parallelize data fetching tied to a route via the `.data.ts` pattern.

You can learn more about it on the [`solid-app-router` repository](https://github.com/solidjs/solid-app-router)

### Learn more on the [Solid Website](https://solidjs.com) and come chat with us on our [Discord](https://discord.com/invite/solidjs)

## Available Scripts

In the project directory, you can run:

### `npm dev` or `npm start`

Runs the app in the development mode.<br>
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

The page will reload if you make edits.<br>

### `npm run build`

Builds the app for production to the `dist` folder.<br>
It correctly bundles Solid in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.<br>
Your app is ready to be deployed!

## Deployment

You can deploy the `dist` folder to any static host provider (netlify, surge, now, etc.)
