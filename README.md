builder github.com/tars

### Docker
`docker build -t deluxe-tars-cli .` <br/>
`docker run -itp 3004:3004 -v /absolute_page_project:/project deluxe-tars-cli sh -c "cd /project && npm i && tars dev"`
