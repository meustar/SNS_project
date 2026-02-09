#!/bin/bash

BASE_URL="http://localhost:8080"
COOKIE_FILE="cookies.txt"

echo "Logging out..."
curl -v -b $COOKIE_FILE -X POST "$BASE_URL/api/v1/users/logout"
echo ""
echo "Logout request sent."
