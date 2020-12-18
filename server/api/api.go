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

func handleRequests(w http.ResponseWriter, r *http.Request) {
	var input NumberInput
	err := json.NewDecoder(r.Body).Decode(&input)
	if err != nil {
		http.Error(w, err.Error(), http.StatusBadRequest)
		return
	}

	result, _ := numbers.FindHighestPrime(input.Number)
	io.WriteString(w, strconv.Itoa(result))
}

func main() {
	portNumber := "9000"
	http.HandleFunc("/", handleRequests)
	fmt.Println("Server listening on port ", portNumber)
	http.ListenAndServe(":"+portNumber, nil)
}
