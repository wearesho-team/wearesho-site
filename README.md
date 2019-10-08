# Wearesho Studio Website
[![codecov](https://codecov.io/gh/wearesho-team/wearesho-site/branch/master/graph/badge.svg)](https://codecov.io/gh/wearesho-team/wearesho-site)

# Production ![Production Build Status](https://codebuild.eu-central-1.amazonaws.com/badges?uuid=eyJlbmNyeXB0ZWREYXRhIjoibHVpMnpmQ1R1RnBvNmhXM04xRTBDcCtxTS9YaU9NcGdhYmZ2RlR0a3ZKZXIyTjNIQlhzeUNnWkRieGtlSitCQVdmZ21lQnBrUGVoc3pLOEpSQXQxajM4PSIsIml2UGFyYW1ldGVyU3BlYyI6IlJMcjN6dG1TcDdTaVZ2SGQiLCJtYXRlcmlhbFNldFNlcmlhbCI6MX0%3D&branch=master)
[wearesho.com](https://wearesho.com/)

## Stack
### Dev
Webpack, Typescript (+tslint), React (+react-router), Babel
### Test
Mocha, CodeceptJS, Selenium
### Deployment
Docker, Nginx, NodeJS

## Docker
### Building docker container
```bash
docker build -t wearesho/wearesho-site . --rm
```
### Running docker image
After build:
```bash
docker run -p 49161:80 -d wearesho/wearesho-site
```
then front-end will be available at *http://localhost:49110*, you can change port (49161) to any value.
### Running docker compose (with backend)
```bash
docker-compose build
docker-compose up
```
## Running tests
To run all tests just use `npm test`
### E2E Tests ([CodeceptJS](https://codeceptjs.io))
Run Selenium server (requires Java):
```bash
npm run selenium
```
Run tests:
```bash
npm run e2e
```

### Unit Tests (Mocha)
```bash
npm run unit
```

## Deployment
You should serve `web/` directory in your server after building bundle. 
  
- **Nginx**: you may use [config template](./templates/nginx.conf)  
- **Apache2**: for `.htaccess` generation see *Production build* section for details

## Build
### Development server
Will be served at <http://localhost:8089>.

```bash
npm run dev
```
### Development build. 
Just create files in `web/` folder with development settings (without compression and with sourcemaps).
```bash
npm run preview
```
### Production build
Must be run before deployment.
Build all files to `web/` directory.
```bash
npm run build
```
For building with `.htaccess` file:
```bash
APACHE=1 npm run build
```

## Contributors
- [Alexander <Horat1us> Letnikow](https://github.com/horat1us)

## License
[MIT](./LICENSE)
