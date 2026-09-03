# iOS Portfolio

A small Node/Express site presenting two iOS apps (Parking Share, Dog Schedule) as portfolio
case studies — overview, user flow diagrams, feature breakdowns, and a few engineering notes
for each. Standalone project, not part of either app's repo.

## Run locally

```bash
npm install
npm start
```

Serves at `http://localhost:3000`.

## Structure

```
server.js            Express static server
public/
  index.html          Landing page — intro + links to both case studies
  apps/
    parking-share.html
    dog-schedule.html
  css/style.css        Shared design system for the site itself
  assets/               Images pulled from the Dog Schedule app's design assets
```
