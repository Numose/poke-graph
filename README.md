# Poke Graph

![Type Chart](assets/type-chart.bmp Type Chart)

Credit [https://rankedboost.com/pokemon-sun-moon/type-chart/](https://rankedboost.com/pokemon-sun-moon/type-chart/)

## Setup

- Install NodeJS 12+ with NPM
- Install Docker and Docker Compose
- Create the .env file in the project's root directory and copy and paste the content of the `.env.example` file into it
- Run the Neo4j container from your terminal with `docker-compose up -d` from the project's root directory; you can check that it's running with `docker container ls`, the container will be called `poke-graph_neo4j`
- Seed Neo4j with data by running `npm run load`
- Connect to the Neo4j graph explorer:
  - Navigate your browser to [http://localhost:7474](http://localhost:7474)
  - Log in:
    - Connect URL: **`bolt://localhost:7687`**
    - Authentication type: `Username / Password`
    - Username: `neo4j`
    - Password: `pokemon`

## Teardown

- Stop the containers with `docker-compose down --remove-orphans` WARNING: The stopping the containers or otherwise exiting Docker will kill any data you have stored in it. This is great for experimenting as it's easy to flush data and start fresh with the loaders but bad if you've entered a bunch of information into your local volume that you want to keep.
