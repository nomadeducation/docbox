#!/usr/bin/env bash
set -e

SHA=$(git rev-parse --verify HEAD)

rm -rf .git
git init
git remote add upstream git@github.com:nomadeducation/gh-kane-docs-website.git

git config user.name "Travis CI"
git config user.email "developer+travis@nomadeducation.fr"

git add --force CNAME index.html bundle.js css/ images/
git commit -m "Deploy to GitHub Pages: ${SHA}"

chmod 600 deploy_key
eval $(ssh-agent -s)
ssh-add deploy_key

git push --force upstream master
