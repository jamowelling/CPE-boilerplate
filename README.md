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

## Wordpress Setup

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