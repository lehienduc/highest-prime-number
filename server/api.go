package main

import (
	"encoding/json"
	"fmt"
	"io"
	"net/http"
	"strconv"

	"stably.io/numbers"
)

// NumberInput input value from user
type NumberInput struct {
	Number int
}

// setupResponse fix preflight issue of javascript. Ref: https://flaviocopes.com/golang-enable-cors/
func setupResponse(w *http.ResponseWriter, req *http.Request) {
	(*w).Header().Set("Access-Control-Allow-Origin", "*")
    (*w).Header().Set("Access-Control-Allow-Methods", "POST, GET, OPTIONS, PUT, DELETE")
    (*w).Header().Set("Access-Control-Allow-Headers", "Access-Control-Allow-Headers, Access-Control-Allow-Origin, Accept, Content-Type, Content-Length, Accept-Encoding, X-CSRF-Token, Authorization")
}

func handleRequests(w http.ResponseWriter, r *http.Request) {
	setupResponse(&w, r)

	if (*r).Method == "OPTIONS" {
		return
	}
	var input NumberInput
	err := json.NewDecoder(r.Body).Decode(&input)
	if err != nil {
		http.Error(w, err.Error(), http.StatusBadRequest)
		return
	}

	result, error := numbers.FindHighestPrime(input.Number)
	if error != nil {
		http.Error(w, error.Error(), http.StatusBadRequest)
	} else {
		io.WriteString(w, strconv.Itoa(result))
	}
}

func main() {
	portNumber := "9000"
	http.HandleFunc("/", handleRequests)
	fmt.Println("Server listening on port ", portNumber)
	http.ListenAndServe(":"+portNumber, nil)
}
