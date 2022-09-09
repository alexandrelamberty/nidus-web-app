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

This application rely on the [Nidus API](https://github.com/alexandrelamberty/nidus-api).

- Docker, see the [Nidus](https://github.com/alexandrelamberty/nidus) project.

- NPM, you will need to create an .env file with the following content, according to url choose for the API. 

```bash
REACT_APP_ENV=dev
REACT_APP_API_URL=http://localhost:8080
```

then start the application 

```bash
npm run start
```

## Building

```bash
docker build -t alexandrelamberty/nidus-web:latest
```

## Publishing

```bash

```