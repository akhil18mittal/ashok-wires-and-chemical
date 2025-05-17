#!/bin/bash
set -e

# Don't update Ruby system - it requires Ruby 3.1+ but Netlify uses 2.7.8
# echo "Updating Ruby system..."
# gem update --system

echo "Installing bundler..."
gem install bundler -v "${BUNDLER_VERSION:-2.3.26}"

echo "Installing dependencies..."
bundle install

echo "Building Jekyll site..."
JEKYLL_ENV=production bundle exec jekyll build 