#!/bin/bash

set -e

echo "========================================="
echo "Deploying Vihaan Writes Publication"
echo "========================================="

PROJECT_DIR="$HOME/vihaan-writes-publication"

cd "$PROJECT_DIR"

echo "Pulling latest source..."
git pull origin main

echo "Stopping existing containers..."
docker compose down

echo "Building latest image..."
docker compose build --no-cache

echo "Starting containers..."
docker compose up -d

echo "Removing unused Docker images..."
docker image prune -af

echo "Deployment completed successfully."
docker ps