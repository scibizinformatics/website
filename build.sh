docker build -t scibizwebsite .
docker run -it -p 8080:8080 --rm --name scibizwebsite_web scibizwebsite
