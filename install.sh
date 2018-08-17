#!/bin/bash

# default base_href = www.keck.hawaii.edu path
base_href = ${1:-"/inst/PILogin/ObservingTools/ConfigManager/"}

DIR="$(ls -1)"
echo "${OUTPUT}"

echo "Installing Telescope Config Manager"
echo `cd AngularConfManager/frontend/AngularConfManager/ && npm install && npm install -g @angular/cli`
echo `ng build --prod --base-href=$base_href`
echo `cd $DIR`

echo "Installing python dependencies"
for dependency in "pymongo" "bson" "flask" "flask_cors"
do
   echo `pip3 install $dependency`
done


echo "Install finished"
