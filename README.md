# Search BFF Service

## Description

The Search BFF Service exposes endpoints for product search

## Running the Service

To run this service, you must set the following environment variables

| Variable                         | Description                           |
| -------------------------------- |:-------------------------------------:|
| **SEARCH_SERVICE_URL**           | URL to connect to the product service |
| **SEARCH_SERVICE_APIKEY_HEADER** | Product service APIKEY Header Key     |
| **SEARCH_SERVICE_APIKEY_VALUE**  | Product service APIKEY Value          |


After setting the environment variables, use this command for start the service:
```sh
$ npm install
$ npm run start
```

## Check the service status

To check the service status, you can execute a GET request to the health endpoint

    curl -i http://localhost:3000/search-bff/v1/health

If the service is running, then the response should be something like:

    HTTP/1.1 200 OK
    Server: Cowboy
    Connection: keep-alive
    X-Powered-By: Express
    Access-Control-Allow-Origin: *
    Date: Sun, 23 Aug 2020 00:59:26 GMT
    Content-Length: 0
    Via: 1.1 vegur

## Test the service
To run the unit tests, use this command
```sh
$ npm run test:unit
```

To run the integration tests, use this command
```sh
$ npm run test:integration
```

To run the both unit and integration test, use this command
```sh
$ npm run test
```
