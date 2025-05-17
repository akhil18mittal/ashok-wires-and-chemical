#!/bin/bash
set -e

echo "Installing bundler..."
gem install bundler

echo "Installing dependencies..."
bundle install

echo "Building site..."
JEKYLL_ENV=production bundle exec jekyll build

echo "Build completed successfully!" 