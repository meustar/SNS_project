#!/bin/bash

BASE_URL="http://localhost:8080"

echo "Signing up a new user..."
curl -X POST "$BASE_URL/api/v1/users/signup" \
     -H "Content-Type: application/json" \
     -d '{
           "username": "testuser",
           "password": "password123"
         }'
echo ""
