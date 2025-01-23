#!/usr/bin/env bash

# exit on error
set -o errexit

echo "Building the project..."

pip3 install --upgrade pip

pip3 install -r requirements.txt

echo "Finished building project"