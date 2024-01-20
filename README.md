[![Node](https://github.com/alexandrelamberty/nidus-web-app/actions/workflows/node.yaml/badge.svg)](https://github.com/alexandrelamberty/nidus-web-app/actions/workflows/node.yaml)
[![Docker](https://github.com/alexandrelamberty/nidus-web-app/actions/workflows/docker.yaml/badge.svg)](https://github.com/alexandrelamberty/nidus-web-app/actions/workflows/docker.yaml)

# Nidus Web Application

Home monitoring web application part of the
[Nidus](https://github.com/alexandrelamberty/nidus) project.

This application use the [Nidus API](https://github.com/alexandrelamberty/nidus-api)

## Features

- [ ] Dashboard
  - [ ] Widgets
    - [ ] Sensors
      - [ ] Humidity
      - [ ] Temperature
      - [ ] Pressure
      - [ ] Motion
    - [ ] Devices
    - [ ] Weather
- [ ] Manage your devices
- [ ] View statistics

## Technologies and frameworks

- [React](https://reactjs.org/)
- [Redux](https://redux-toolkit.js.org/)
- [TailwindCSS](https://tailwindcss.com/)
- [Docker](https://www.docker.com/)

## Usage

This application is part of a Docker stack and rely on a Go API service. see:
[Nidus](https://github.com/alexandrelamberty/nidus) project.

## Run with NPM

If the API service is up and running, create an .env. file and fill it
accordingly with the service configuration.

```properties
REACT_APP_API_URL=http://localhost:3333
```

Run the application

```bash
npm run start
```

Go to [http://localhost:3000]

## Test with NPM

At the moment only some tests for the routes and components are available!

```bash
npm run test
```

## Build and run with Docker

Build the image, see: [Dockerfile](./Dockerfile).

```bash
docker build . -t alexandrelamberty/nidus-web:latest
```

Run the image, specify the ports mapping and network to join.

```bash
docker run -p 3000:3000 --network=nidus_default --name nidus-web -d alexandrelamberty/nidus-web:latest
```
