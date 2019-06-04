#!/bin/sh

DEVDIR="web/app/uploads/"
DEVELOP="http://stats.test"

PRODDIR="web@nbastats.com:/srv/www/nbastats.com/shared/uploads/"
PRODSITE="http://www.nbastats.com"

STAGDIR="web@stats.yannisspyrou.co.uk:/srv/www/nbastats.com/shared/uploads/"
STAGSITE="http://stats.yannisspyrou.co.uk"

TO=$1
FROM=$2

case "$1-$2" in
  develop-current) DIR="down";  FROMSITE=$DEVELOP;  FROMDIR=$DEVDIR;  TOSITE=$PRODSITE; TODIR=$PRODDIR; ;;
  master-current)    DIR="down"   FROMSITE=$DEVELOP;  FROMDIR=$DEVDIR;  TOSITE=$STAGSITE; TODIR=$STAGDIR; ;;
  current-develop) DIR="up" FROMSITE=$PRODSITE; FROMDIR=$PRODDIR; TOSITE=$DEVELOP;  TODIR=$DEVDIR; ;;
  current-master)    DIR="up" FROMSITE=$STAGSITE; FROMDIR=$STAGDIR; TOSITE=$DEVELOP;  TODIR=$DEVDIR; ;;
  *) echo "usage: $0 develop current | master current | current develop | current master" && exit 1 ;;
esac

read -r -p "Would you really like to merge the $TO branch $DIR to the $FROM branch? [y/N] " response

if [[ "$response" =~ ^([yY][eE][sS]|[yY])$ ]]; then

 branch=$(git symbolic-ref HEAD | sed -e 's,.*/\(.*\),\1,')
 git add .
 git commit -m 'Add uncommited changes before sync'
 git push
 git checkout "$TO" || exit 1;
 git pull origin "$TO" || exit 1;
 git checkout "${branch}"
 git merge "$TO"
 git push
fi