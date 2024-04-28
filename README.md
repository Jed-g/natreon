# README
# Ruby version
ruby-3.1.2

# System dependencies
1. Database 
PostgreSQL for Active Record using the pg gem
2. Web Server
Puma: 'puma' gem
3. Asset Compilation
SvelteKit with 'adapter-static', outputs compiled assets & front-end into 'build' directory which is then moved to the rails 'public' directory
4. Development and Test Tools 
Debugging: 'byebug' gem
Console: 'web-console' gem
Code linting: 'rubocop' gem
5. Job Processing
background job processing and scheduling: 'daemons', 'delayed_job', and 'whenever'
6. Security tools
'brakeman', 'bundler-audit', and 'bcrypt_pbkdf' gems
7. Deployment
'capistrano' gem
8. Testing tools
Back-end: 'rspec-rails', 'capybara', and 'simplecov'  
Front-end: 'playwright' and 'vitest'
9. Utility and Middleware
Reducing boot times : 'bootsnap'
Asset packing : 'shakapacker'
Email sanitization: 'sanitize_email'
Error tracking : 'sentry-rails'
10. Authentification Authorization 
'devise', 'cancancan', 'devise-jwt'

# Configuration 

1. Clone the repository

```
git clone https://git.shefcompsci.org.uk/com4525-2023-24/team02/project.git
```

2. Open two terminals

3. In terminal One

```
cd project

bundle install

bin/setup
```
make sure your postgresql service is started eg.
```
sudo service postgresql start
```

4. In terminal Two 
Assuming you are in the root directory of the cloned project

```
cd frontend 

yarn install
```

5. In terminal One

```
rails db:create

rails db:migrate

rails db:seed

rails s
```

The app will now be running on localhost:3000

# Database creation 
```
rails db:create
```

# Database initialization
```
rails db:migrate
rails db:seed
```

# Run the all the back-end RSpec test files
```
bundle exec rspec 
```

# Run the specific test file

```
bundle exec rspec spec/folder/file_name.rb
```

# How to run the frontend test suite
To run front-end feature tests, make sure that you have used the command 'bundle install' in the base directory, and 'yarn install' in the frontend directory.
Also make sure that before you run the 'yarn test' command that your rails server is not running.

NOTE: These tests fail on the pipeline but pass locally. This is probably because the 3d webgl components might be too much for epiGenesys' servers and the view lags out so you can't do some interactions.
Commands to run frontend test suite:
```
cd frontend
yarn test
```
# Deployment instructions
Run the following commands from the root directory of the project
```
cd frontend
yarn deploy
cd ..
bundle exec epi_deploy release -d demo
bundle exec cap demo deploy:seed
```
# Seeded User Details

1st Customer Details
```
username:customer@demo.com
password:password
```
2nd Customer Details
```
username:customer2@demo.com
password:password
```
Admin Details
```
username:admin@demo.com
password:password
```
Reporter Details
```
username:reporter@demo.com
password:password
```

# MacOS fix

There is a known issue on MacOS related to eCharts. This can be fixed by adding the following line to frontend/src/routes/+layout.ts

```
export const ssr = false;
```