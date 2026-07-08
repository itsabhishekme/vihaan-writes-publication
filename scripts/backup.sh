#!/bin/bash

set -e

PROJECT_DIR="$HOME/vihaan-writes-publication"

BACKUP_DIR="$HOME/backups"

DATE=$(date +"%Y-%m-%d_%H-%M-%S")

mkdir -p "$BACKUP_DIR"

echo "Creating backup..."

tar -czf "$BACKUP_DIR/vihaan-$DATE.tar.gz" \
    "$PROJECT_DIR"

echo "Backup created."

ls -lh "$BACKUP_DIR"