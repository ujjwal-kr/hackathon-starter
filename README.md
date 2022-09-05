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

## Requirements
 - docker
 - docker-compose
 - node v16.4+
 - make [for windows users [cygwin terminal](https://www.cygwin.com/) is recommended]    
    
## Quickstart

- You can use this template by pressing the "Use this template" button left to the About section of the repo.
- You can name the project whatever you want and then clone it in your local machine.

If you dont want to do the above, you can follow the rest of the steps:

- clone the repo using `git clone https://github.com/ujjwal-kr/hackathon-starter`.
- delete the `.git` folder using `rm -rf .git` to remove my commits.
- run `git init` to initialise your own repo.
- run `git add . && git commit -m "initial commit"` to make your own initial commit.
- run `git remote add origin <your-repo-url>`.
- run `git push -u origin main` to push the code as main branch.
- you can change the container names in the docker compose files if you want to. 

## How to Build
 - For dev mode, run `make` and `make dev` to launch all the containers in watch mode.
 - You can see the logs for a selected the container using `make logs c="<hackathon-frontend> <hackathon-backend>"`, For all logs, use `make logs`.
 - You can stop them using `make down` and clean them using `make down_clean`.
 - To start in production mode, use `make prod`.
 
## Developers
 - [@ujjwal-kr](https://github.com/ujjwal-kr)
