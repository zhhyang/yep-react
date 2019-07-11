#!/bin/bash

echo "prepare publish"
npm run pre-pub
echo "jdnpm publish start"
npm publish --registry http://registry.m.jd.com/
echo "jdnpm publish success"

echo "npm publish start"
npm publish --registry https://registry.npmjs.org/
echo "npm publish success"

echo "deploy:jd"
npm run deploy:jd
