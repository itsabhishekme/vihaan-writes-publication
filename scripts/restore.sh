#!/bin/bash

set -e

if [ $# -eq 0 ]; then
    echo "Usage:"
    echo "./restore.sh backup-file.tar.gz"
    exit 1
fi

BACKUP="$1"

echo "Stopping application..."

docker compose down

echo "Extracting backup..."

tar -xzf "$BACKUP" -C "$HOME"

echo "Starting application..."

cd "$HOME/vihaan-writes-publication"

docker compose up -d

echo "Restore completed."