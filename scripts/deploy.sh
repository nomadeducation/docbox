#!/usr/bin/env bash
set -e

if [[ $TRAVIS_BRANCH == "master" ]] ; then
  SSH_REPO="git@github.com:nomadeducation/kane-docs-build.git"
  SHA=`git rev-parse --verify HEAD`
  TARGET_BRANCH="master"

  echo "deploying changes"
  git init

  git config user.name "Travis CI"
  git config user.email "developer+travis@nomadeducation.fr"

  git add index.html bundle.js css/
  git commit -m "Deploy to GitHub Pages: ${SHA}"

  # Get the deploy key by using Travis's stored variables to decrypt deploy_key.enc
  # the following line is the result of running `travis encrypt-file `deploy_key`
  openssl aes-256-cbc -K $encrypted_52dc1a81cfeb_key -iv $encrypted_52dc1a81cfeb_iv -in deploy_key.enc -out deploy_key -d
  chmod 600 deploy_key
  eval `ssh-agent -s`
  ssh-add deploy_key

  git push --force $SSH_REPO $TARGET_BRANCH

else
  echo 'Invalid branch. You can only deploy from master.'
  exit 1
fi