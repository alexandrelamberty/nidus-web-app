[![Docker](https://github.com/alexandrelamberty/nidus-web-app/actions/workflows/docker.yaml/badge.svg)](https://github.com/alexandrelamberty/nidus-web-app/actions/workflows/docker.yaml)

[![React](https://github.com/alexandrelamberty/nidus-web-app/actions/workflows/node.yaml/badge.svg)](https://github.com/alexandrelamberty/nidus-web-app/actions/workflows/node.yaml)

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

## Technolgies and frameworks

- [React](https://reactjs.org/)
- [Redux](https://redux-toolkit.js.org/)
- [TaildindCSS](https://tailwindcss.com/)

## Usage

This application is part of a Docker stack and rely on a Go api service. see:
[Nidus](https://github.com/alexandrelamberty/nidus) project to launch the
complete stack or only specific services.

## Run with NPM

If the api service is up and running, create an .env file and fill it
accordingly with the service configuration.

```properties
REACT_APP_ENV=dev
REACT_APP_API_URL=http://localhost:3333
```

Run the application

```bash
npm run start
```

Go to [http://localhost:3000]

## Test with NPM

At the moment only some tests for the routes and components are avalable!

```bash
npm run test
```

## Build and run with Docker

As we use Nginx to serve our application, we don't have access to the Node
environment variables.
> Environment variables injection for React, see: [environment.sh](environment.sh) \
> FIXME: The image build need a .env file to provide variables to be read and updated
  Switch to key/value env variable!

Build the image, see: [Dockerfile](./Dockerfile).

```bash
docker build . -t alexandrelamberty/nidus-web:latest
```

Run the image, we specify the ports mapping, environment variables file and
network to join.

```bash
docker run -p 3000:3000 --network=nidus_default --env-file .env --name nidus-web -d alexandrelamberty/nidus-web:latest
```
