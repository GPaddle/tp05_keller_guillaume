#!/bin/bash

dirName="tp05"
repoName="$dirName-keller-guillaume"

ng build
cd dist/$dirName* || exit 

heroku login
heroku create $repoName

git init

echo "{}" > composer.json
git add .
git commit -m "first commit"

heroku git:remote -a $repoName

git push heroku master -f