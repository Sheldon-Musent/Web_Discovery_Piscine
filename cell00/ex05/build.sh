#!/usr/bin/env bash

if [ $# -lt 1 ]; then
  echo "No arguments supplied"
else
  for arg in "$@"
  do 
    mkdir "ex$arg"
  done
fi