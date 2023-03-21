#!/usr/bin/env bash

rm -rf node_modules .angular package-lock.json

npm install
npm run build

ng serve --host=0.0.0.0 --port=4200