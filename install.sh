#!/bin/bash

DIR="$(ls -1)"
echo "${OUTPUT}"

echo "Installing Telescope Config Manager"
echo `cd AngularConfManager/frontend/AngularConfManager/ && npm install && ng build`
echo `cd $DIR`

echo "Installing python dependencies"
for dependency in "pymongo" "bson" "flask" "flask_cors"
do
   echo `pip3 install $dependency`
done


echo "Install finished"
