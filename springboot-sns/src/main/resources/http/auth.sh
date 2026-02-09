#!/bin/bash

BASE_URL="http://localhost:8080"
COOKIE_FILE="cookies.txt"

echo "Logging in (Form Login)..."
curl -v -c $COOKIE_FILE -X POST "$BASE_URL/api/v1/login" \
     -H "Content-Type: application/x-www-form-urlencoded" \
     -d "username=testuser&password=password123"
echo ""
echo "Session cookie saved to $COOKIE_FILE"

