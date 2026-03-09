#!/usr/bin/env bash

# "$@" is a special variable that contains **all** arguments passed to the script. The `for` loop goes through each one and prints it.

# for loop = "repeat something for each item in a list" — it's repetition

if [ $# -lt 1 ]; then
  echo "No arguments supplied"
else
  for arg in "$@"
  do
    echo "$arg"
  done
fi