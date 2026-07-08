#!/bin/bash

URL="http://localhost"

STATUS=$(curl -o /dev/null -s -w "%{http_code}" "$URL")

if [ "$STATUS" -eq 200 ]; then
    echo "Application is healthy."
    exit 0
fi

echo "Application is DOWN."

docker ps

docker compose logs --tail=50

exit 1