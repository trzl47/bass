#!/usr/bin/env bash
docker-compose -f docker-compose-build.yml up --build -d && \
docker system prune --volumes && \
mkdir services/bass-nginx/build && \
cp -r services/react/build/client services/bass-nginx/build && \
docker build -t trzl/portfolio:bass-react.1 -f ./services/bass-nginx/Dockerfile.prod ./services/bass-nginx && \
docker push trzl/portfolio:bass-react.1 && \
docker build -t trzl/portfolio:bass-proxy.1 -f ./services/reverseproxy/Dockerfile ./services/reverseproxy && \
docker push trzl/portfolio:bass-proxy.1 && \
docker-compose down && \
docker system prune --volumes && \
sudo rm -rf services/bass-nginx/build && \
sudo rm -rf services/react/build/client && \
echo "Build complete!"