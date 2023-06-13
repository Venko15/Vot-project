# Vot_project

# Project Docker/Kubernetes diagram

![image](https://github.com/Venko15/Vot-project/assets/61556713/a3a95185-865a-4e6b-abf1-8342bf86f740)

# Setup Guide
Go to settings in Docker Desktop
![image](https://github.com/Venko15/Vot-project/assets/61556713/7e2d54fb-aefd-40ac-b309-f3f753421085)
<br>then go to kubernetes and enable it
![image](https://github.com/Venko15/Vot-project/assets/61556713/62282e35-b1a0-4256-96de-3abe24294b27)
# Installation
```
git clone https://github.com/Venko15/Vot-project.git
```
# Run guide
```
cd multi-webapp && chmod +x run.sh && ./run.sh
```
if there are problems with the hpa, run the following script
```
kubectl apply -f metr.yaml
```
And after everything you should be able to access it at **localhost:80**
