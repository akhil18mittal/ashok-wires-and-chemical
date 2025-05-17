#!/bin/bash
set -e

echo "Updating Ruby system..."
gem update --system

echo "Installing bundler..."
gem install bundler

echo "Installing dependencies..."
bundle install

echo "Building Jekyll site..."
JEKYLL_ENV=production bundle exec jekyll build 