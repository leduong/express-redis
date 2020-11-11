# Uiza shortlink #

## Requirement 

+ Nodejs 12+
+ Redis
+ MongoDB


## Setup Environment

```
export HOTLINKING_API=https://uiza.herokuapp.com/cors/blacklist
export REDIS_URI=redis://localhost
export MONGO_URI=mongodb://localhost:27017/shortcode
export PORT=3000
```

## Install package npm and build

```bash
npm install
npm run build:dev
or
npm run build:prod
```

### For development

```npm run dev```


## Start

```npm start```