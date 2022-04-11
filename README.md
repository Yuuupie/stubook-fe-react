Hosted on https://yuuupie.xyz

# Stubook - React Front-end

This is a React-based front-end for the Stubook website (student-book), a simple to-do web application. The aim of this project is to practice and showcase my skills with ReactJs.

## Build

### Local
To run a local build, after adjusting the API_URL to the back-end to be used, run
> npm run start

### Production (docker)
Before running a prod build, ensure that the SSL certificates are configured and exist on the dockerhost at `/etc/letsencrypt`. This can be done via certbot.

Once setup, run:
> docker-compose up --build

## TODO
* Hash passwords
* Enhance styling for mobile screen sizes

