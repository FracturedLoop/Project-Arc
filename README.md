# Project Arc

| TC Build Status  |
| ------------- |
| [![TeamCity Development Build Status](https://teamcity.carsonseese.com/app/rest/builds/buildType(id:ProjectArc_BuildDevelopment)/statusIcon)](https://teamcity.carsonseese.com/viewType.html?buildTypeId=ProjectArc_BuildDevelopment&guest=1)  |

Project Arc is the development version of Team Biohazard 4050's new site. Feel free to create Issues based on the live development version found [here](http://biodev.carsonseese.com) and we will try and resolve them as soon as possible.

## The End Game
![Mockup](./mockup.png)

---

## Development
Set up your workspace first. Check to ensure you have NPM installed (`npm --version`) and when it is, run `npm install` to download and install the development dependencies.

After setting up your workspace, run `npm run dev` to start the development server. It should open up the compiled version of index.html in your browser. Any changes made should result in automatic repacking and refreshing of the page. 

**Take note:** All changes will stay in memory and the webpack dev server will not write any files to the disk.

Webpack exposes the Vue app variable under the `site`  object. For example to change the pageContent app data, we could do:

```
site.app.pageContent = "Goodbye World!";
```

#### Building for Distribution
Running `npm run build` will do all the packaging and minify the HTML, CSS, and JS. The CSS and JS will also be combined. Afterwards, they will be written to the ./dist directory. Imports will automatically be added to the HTML.
