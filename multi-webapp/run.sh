docker build -t webapp
kubectl apply -f ./deployment.yaml
kubectl apply -f ./service.yaml
kubectl apply -f ./hpa.yaml
