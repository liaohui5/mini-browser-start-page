#!/usr/bin/env bash

# delete build cache
rm -rf ./build

# vite build
npm run build

mkdir build

cp ./Dockerfile ./docker-compose.yaml ./README.md ./build/
mv ./dist ./build/
