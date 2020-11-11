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
### Create page App page
Add new page named "App Page"

Click edit mode add this line of code
```bash
<app-root></app-root>
```
### Set App Page as homepage 

Wordpress Dashboard > Settings > Reading > Your homepage displays > Choose "A static page" > Homepage > Choose "App Page"

### To access the /wp-json/ endpoint due to the settings of wordpress 
Wordpress Dashboard > Settings > Permalinks > Common Settings > Choose "Post name" . Then you will be able to access the /wp-json/ endpoint for the exposed Wordpress API.