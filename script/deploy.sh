#!/bin/bash
set -e

# Dry run

## Clean up for release
git checkout gh-pages

## Buid project
mv dist/*.js .
mv dist/*.css .
mv dist/*.html .
git add *.js *.css *.html
git commit

echo 'ready to be pushed / published!'
