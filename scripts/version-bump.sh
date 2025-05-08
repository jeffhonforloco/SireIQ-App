
#!/bin/bash

# This script bumps the version in package.json
# Usage: ./scripts/version-bump.sh [major|minor|patch]

set -e

TYPE=${1:-patch}

if [[ "$TYPE" != "major" && "$TYPE" != "minor" && "$TYPE" != "patch" ]]; then
    echo "Error: Version type must be one of: major, minor, patch"
    exit 1
fi

# Get current version
CURRENT_VERSION=$(node -p "require('./package.json').version")
echo "Current version: $CURRENT_VERSION"

# Bump version
npm version $TYPE --no-git-tag-version

# Get new version
NEW_VERSION=$(node -p "require('./package.json').version")
echo "New version: $NEW_VERSION"

# Create release branch
git checkout -b release/v$NEW_VERSION

# Commit changes
git add package.json package-lock.json
git commit -m "Bump version to $NEW_VERSION"

echo "Release branch created: release/v$NEW_VERSION"
echo "Now you can push the branch and create a pull request"
