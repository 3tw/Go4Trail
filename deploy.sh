#!/usr/bin/env sh
# run to set permission> chmod 0755 deploy.sh

# abort on errors
set -e

# navigate to gh-pages branch
git checkout gh-pages

# sync with master
git merge master

# add CNAME for custom domain
#echo 'tektrehvrhov.si' > CNAME
#echo '\n **/src/stylesSass/' >> .gitignore

#push to remote origin
git push origin gh-pages

#switch to master
git checkout master


