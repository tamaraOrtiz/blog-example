# blog-example

This is a sample blog using Rails, React and NewsAPI. This application is deployed to https://blog-challenge-to.herokuapp.com/

## Deploy
This project uses Heroku to deploy.

For Ruby:

1. Postgres installation
2. Ruby and rails installation
3. [rails_best_practices] (https://github.com/flyerhzm/rails_best_practices) - code metric tool to check the quality of Rails code.
4. [bullet] (https://github.com/flyerhzm/bullet) - increase rails application's performance by reducing the number of queries it makes
5. [rubocop] (https://github.com/rubocop-hq/rubocop) - Ruby static code analyzer and code formatter
6. [Rspec] (https://github.com/rspec/rspec) - behavior driven development for ruby

For React:

1. ESLint check - javascript code linter
2. Prettier check

## Setup:
This project uses the gem dotenv (https://github.com/bkeepers/dotenv) to configure the enviroment variables. Here you can see an example of the variables that you need: https://github.com/tamaraOrtiz/blog-example/blob/main/.env.example

Copy `.env.example` to `.env` and replace the values

run:
1. `bundle install`
2. `yarn install`
3. `rails db:create`
4. `rails db:migrate`

### Running
Run `rails s` to see the application running at https://localhost:3000.

### Guard
1. `rails_best_practices` to lint rails code
2. `rubocop` to lint ruby code
3. `bundle exec rspec` to run tests

### Populating database.
We are using seed_migration gem.

`rails seed:migrate`

## Test enviroment
Sign in with `test@email.com` / `Test122`
