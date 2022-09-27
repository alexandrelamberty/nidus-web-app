# Nidus Web Application

Home monitoring web application part of the 
[Nidus](https://github.com/alexandrelamberty/nidus) project.

## Features

- [ ] Dashboard
  - [ ] Widgets
    - [ ] Weather
    - [ ] Devices 
    - [ ] Humidity
    - [ ] Temperature
    - [ ] Pressure
    - [ ] Motion
- [ ] Manage your devices
- [ ] View statistics

## Usage

This application is part of a Docker stack and rely on a Go api service. see:
[Nidus](https://github.com/alexandrelamberty/nidus) project to launch the
complete stack or only specific services.

## Run with NPM

If the api service is up and running, create an .env file and fill it
accordingly with the `database` service configuration.

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

> To implement

## Build and run with Docker

> Environment variables injection for React, see: [environment.sh](environment.sh) \
> The image build need a .env file to provide variables to be read and updated 

Build the image, see: [Dockerfile](./Dockerfile).

```bash
docker build . -t alexandrelamberty/nidus-web:latest
```

Run the image, we specify the ports mapping, environment variables file and
network to join.

```bash
docker run -p 3000:3000 --network=nidus_default --env-file .env --name nidus-web -d alexandrelamberty/nidus-web:latest
```

## Push to Docker Hub

> Automated with GitHub Action, see: [docker.yml](./.github/workflows/docker.yml)

```bash
docker tag alexandrelamberty/nidus-web:latest alexandrelamberty/nidus-web:latest
docker push alexandrelamberty/nidus-web:latest
```