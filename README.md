# Hackathon Starter

A full stack JavaScript template [MERN] with authentication to quickly get started on a hackathon or some equivalent business you are up to.

> **Warning**:
In heavy development, use at your own risk.

## Components

- Client
    - A react app created with Vite
    - emotion and mantine for styles
    - Sign up and login feature built-in
    - axios for requests
- Backend
    - Node and Express app
    - jwt for authorization
    - bcrypt for encrypting passwords
    - morgan for logging
    - prettier for formatting
    - nodemon for dev server
    - .env to manage environment vars
    - helmet for security headers
    - Joi for validation
    
## How to use

- clone the repo using `git clone https://github.com/ujjwal-kr/hackathon-starter`.
- delete the `.git` folder using `rm -rf .git` to remove my commits.
- run `git init` to initialise your own repo.
- run `git add . && git commit -m "initial commit"` to make your own initial commit.
- run `git remote add origin <your-repo-url>`.
- run `git push -u origin main` to push the code as main branch.
- make a .env file in the /server folder and copy the contents of `example.env` file.
- you can change the container names in the docker compose files if you want to. 

### Development Mode
 - cd into the /client and /server folder and run `npm install` in each to install the dependencies.
 - run `docker-compose -f docker-compose.dev.yml build` to build the containers.
 - run `docker-compose -f docker-compose.dev.yml up` to start the containers in watch mode.
 - you can run `docker-compose stop` to stop the containers.

### Production Mode
- run `docker-compose build` to build the containers in production mode. [Run this each time when files are changed].
- run `docker-compose up` to start the containers. See ports in docker-compose.yml file.
 - you can run `docker-compose stop` to stop the containers.
 
## Developers
 - [@ujjwal-kr](https://github.com/ujjwal-kr)
