#!/usr/bin/env bash
# Usage: bash scripts/build-flutter.sh shop_app shop-app
set -e
APP=$1; NAME=$2
[ -z "$APP" ] || [ -z "$NAME" ] && { echo "Usage: $0 <flutter_apps/folder> <demo-name>"; exit 1; }
cd "flutter_apps/$APP"
flutter build web --release --base-href "/demos/$NAME/"
rm -rf "../../public/demos/$NAME"; mkdir -p ../../public/demos
cp -R build/web "../../public/demos/$NAME"
echo "Done: public/demos/$NAME"
