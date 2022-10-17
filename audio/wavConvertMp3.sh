#!/bin/sh

if [ ! -n "$1" ]; then
    echo "Please enter dir!"
    exit 1
fi

for i in "$1"/*.wav
do
    ffmpeg -i "$i" -codec:v copy -codec:a libmp3lame -q:a 0 "${i%.wav}.mp3"
    rm -rf "$i" # Remove original wav file
done
