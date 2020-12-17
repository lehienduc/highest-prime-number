# Introduction

This project use Go language to find the highest prime number from a number user input. The project contains two parts:
- Server: a Go microservice to find the highest prime number 
- reactjs-client: a reactjs web application used to take user input number then send a request to Go service to get the highest prime number

The docker folder contains docker files for deployment.

# Depployment Guide
The project use Docker to automate deployment.
To start the system, go to project folder then run
docker-compose

To add more Go service server, run

To add more reactjs-client server, run

The system will automatically scale.

To access frontend UI, go to browse to localhost:9090

# TODO

Backend, Go service
[] Create REST handler to handle user input, 
[] Validate user input number, return error if the input number is invalid
[] Create a service module to find highest prime number from an input number
[] Write unit test for the service module
[] Improve performance by using Go routine if possible
[] Authentication/Authorization using JWT
[] Create Docker build
[] Scale to multiple nodes

Frontend, Reactjs
[] Create Reactjs form for user to input a number
[] Validate input number, show error if the number is not valid
[] Send REST request to Go service to get highest prime number 
[] Authentication/Authorization using JWT
[] Create Docker build
[] Scale to multiple nodes

# Tools used to develop this project
- Hackintosh, just for fun, it is not related to the project. I have a MBP but working on a Hackintosh is more fun.
- Visual Studio Code
- Golang
- Reactjs, Redux, React Router 
- Bootstrap
- Docker

# References
https://golang.org/doc/effective_go.html
https://tour.golang.org/list
