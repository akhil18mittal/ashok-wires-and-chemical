#!/bin/bash
set -e

echo "Current Ruby version:"
ruby -v

echo "Current RubyGems version:"
gem -v

echo "Updating RubyGems..."
gem update --system

echo "New RubyGems version:"
gem -v

echo "Installing bundler..."
gem install bundler

echo "Installing dependencies..."
bundle config set --local path vendor/bundle
bundle install

echo "Building site..."
JEKYLL_ENV=production bundle exec jekyll build

echo "Build completed successfully!" 