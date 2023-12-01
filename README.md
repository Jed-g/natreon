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
gem install bundler -v 2.4.19 
gem install rails -v 7.0.8

sudo sh -c 'echo "deb https://apt.postgresql.org/pub/repos/apt $(lsb_release -cs)-pgdg main" > /etc/apt/sources.list.d/pgdg.list'
wget --quiet -O - https://www.postgresql.org/media/keys/ACCC4CF8.asc | sudo tee/etc/apt/trusted.gpg.d/postgresql.asc
sudo apt update
sudo apt install postgresql-14 postgresql-client-14 libpq-dev
sudo service postgresql start

sudo apt update
sudo apt install nodejs

curl -sS https://dl.yarnpkg.com/debian/pubkey.gpg | sudo gpg --dearmor -o/etc/apt/trusted.gpg.d/yarn.gpg
echo "deb https://dl.yarnpkg.com/debian/ stable main" | sudo tee/etc/apt/sources.list.d/yarn.list
sudo apt update
sudo apt install yarn
# Database creation 
rails db:create

# Database initialization
*cp config/database-sample.yml config/database.yml
rails db:migrate
rails db:seed
rails console
Make sure postgresql is installed and started

# Run the test files
bundle exec rspec spec/models/file_name.rb


* How to run the test suite

* Services (job queues, cache servers, search engines, etc.)

* Deployment instructions
