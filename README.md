# Vue SSR boilerplate
* Docker
* Webpack
* VueJS
* Vuex
* Vue-router
* Express
* scss/sass
* pug
* dev-server

VueJS template based on official documentation of Vue SSR.

## Usage
**npm run serve** - starts a dev-server

**npm run build** - builds server bundle and client manifest

**npm run start** - starts a server

## Env Vars
You can predefine your env vars in the .env file as well as in the docker-compose.yaml if you are planning to use docker.

### Reserved Vars
**IS_CLIENT_BUILD** - used to tell universal modules which realization of api to use.