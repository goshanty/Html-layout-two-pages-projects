builder github.com/tars

### Docker
FROM node:carbon ~ size 1GB+ <br/>
`docker build -t project-tars-cli .` <br/>
`docker run -itp 3004:3004 -v /absolute_page_project:/project project-tars-cli sh -c "cd /project && npm i && tars dev"`
