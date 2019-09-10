#!/bin/bash

echo "prepare local publish"
npm run pre-pub
echo "local publish start"
npm publish --registry http://0.0.0.0:4873
echo "local publish success"
