# README
# Ruby version
ruby-3.1.2

# System dependencies
1. Database 
PostgreSQL for Active Record using the pg gem
2. Web Server
Puma: 'puma' gem
3. Asset Compilation
4. Development and Test Tools 
Debugging: 'byebug' gem
Console: 'web-console' gem
Conde linting: 'rubocop' gem
5. Job Processing
background job processing and scheduling: 'daemons', 'delayed_job', and 'whenever'
6. Security tools
'brakeman', 'bundler-audit', and 'bcrypt_pbkdf' gems
7. Deployment
'capistrano' gem
8. Testing tools
'rspec-rails', 'capybara', and 'simplecov'
9. Utility and Middleware
Reducing boot times : 'bootsnap'
Asset packing : 'shakapacker'
Email sanitization: 'sanitize_email'
Error tracking : 'sentry-rails'
11. Authentification Authorization 
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

```
cd project/frontend 

yarn install
```

5. In terminal One

```
rails db:create

rails db:migrate

rails db:seed

rails s
```

4. In terminal Two

```
yarn dev
```

The app will now be running on localhost:5173

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

Commands to run frontend test suite:
```
cd frontend
yarn test
```

* Services (job queues, cache servers, search engines, etc.)

* Deployment instructions
