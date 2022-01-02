# Docker DevOps

## Containerization

Project source code -> Docker image -> Docker repository

## Docker installation

https://docs.docker.com/desktop/mac/install/

```
docker --version
```

## First use case

```
docker run -p 5000:5000 <docker_img_path>
```

> Image is static, when its running we call it container

## Launch the container in detached mode

```
docker run -d -p 5000:5000 <docker_img_path>
```

## Check the conainer logs

```
docker logs <process_id>
docker logs -f <process_id> (follow the logs)
```

## Check images

```
docker images
```

## Remove image

```
docker image rm <id>
```

## Check running containers

```
docker container ls
docker container ls -a (all historical conatiners)
```

## Container stop (shutdown gracefully)

```
docker container stop <pid>
```

## Container kill (shutdown immediately)

```
docker container kill <pid>
```

## Container remove

```
docker container rm <pid>
```

## Container remove all

```
docker container prune
```

## Container pause/unpause

```
docker container pause/unpause <pid>
```

## Container stats

```
docker conatiner stats
```

## System

```
docker system
```
