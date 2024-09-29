# dcrichards.com

My personal homepage on the world wide web. Brought to you by pure HTML, CSS and GitHub Pages.

## Setup

Open with your favourite file server or use the supplied files.

### Docker Compose

Serves on [localhost:9091](http://localhost:9091/)

```sh
docker-compose build
docker-compose up
```

### Kubernetes

Creates a single replica Kubernetes deployment. Serves on [localhost:9091](http://localhost:9091/)

```
docker build -t dcrichards.github.io:latest .
kubectl apply -f deployment.yml
kubectl port-forward <pod name> 9091:80
```
