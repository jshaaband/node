docker build -t didinkaj/multi-client:latest -t didinkaj/multi-client:$SHA -f ./client/Dockerfile ./client
docker build -t didinkaj/multi-server:latest -t didinkaj/multi-server:$SHA -f ./server/Dockerfile ./server
docker build -t didinkaj/multi-worker:latest -t didinkaj/multi-worker:$SHA -f ./worker/Dockerfile ./worker


docker push didinkaj/multi-client:latest
docker push didinkaj/multi-server:latest
docker push didinkaj/multi-worker:latest

docker push didinkaj/multi-client:$SHA
docker push didinkaj/multi-server:$SHA
docker push didinkaj/multi-worker:$SHA

kubectl apply -f k8s
kubectl set image deployments/server-deployment server=didinkaj/multi-server:$SHA
kubectl set image deployments/client-deployment client=didinkaj/multi-client:$SHA
kubectl set image deployments/worker-deployment worker=didinkaj/multi-worker:$SHA