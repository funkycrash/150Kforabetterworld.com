#!/bin/sh

echo '### Fetching content ###'
bundle exec jekyll contentful --rebuild
echo '### Building site ###'
echo '### DONE ###'
