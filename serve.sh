#!/bin/bash

# Kill any existing Jekyll processes
pkill -f jekyll

# Run Jekyll without watch mode
bundle exec jekyll serve --no-watch "$@" 