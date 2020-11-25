## Before you start
in order to run this project, make sure you have docker and then global Angular CLI installed on your machine

Docker: 
https://docs.docker.com/compose/install/

Angular CLI: 
https://cli.angular.io/

## Client
```bash
yarn
ng serve --open
```
Runs on localhost on port 4200

## Server
```bash
docker-compose up -d
```
or if you want to tail logs:
```bash
docker-compose up
```
If you ran in detached mode
```bash
docker-compose down --volumes
```
Runs on localhost on port 8000

# Wordpress Setup
- [Initial Setup](#InitialSetup)
- [Global Configuration Page](#GlobalConfigurationPage)

## Initial Setup
### Choose Theme
Appearance > Themes > Choose “Headless” > Activate

### Create page App page
Add new page named "App Page"
Go to code editor: Three dot menu > Editor > Code editor

Add this line of code to page
```bash
<app-root></app-root>
```
Publish

### Set App Page as homepage 

Wordpress Dashboard > Settings > Reading > Your homepage displays > Choose "A static page" > Homepage > Choose "App Page”> Save Changes

### To access the /wp-json/ endpoint due to the settings of wordpress 
Wordpress Dashboard > Settings > Permalinks > Common Settings > Choose "Post name" > Save Changes. Then you will be able to access the /wp-json/ endpoint for the exposed Wordpress API.

## Global Configuration Page
Once initial wordpress setup is working to your liking, you'll need a _Global Configurations_ page to get things like the global top nav bar working.

1. From the Wordpress dashboard, go to **Pages** --> **Add New**
2. Create a new page called "Global Configurations" (or whatever you like, really)
3. In the edit screen, go to the side panel on the right and look for the **Permalink** option (under **Document**)
4. Set the URL Slug to `global-configurations`. This is the slug Angular will use to pull the appropriate data.
5. Hit the **+** button to add a new block, then add Top Nav.
6. Add some links! `Display Name` is what gets displayed on the nav bar. `URL or slug` is explained in the block UI.
7. Publish the page
