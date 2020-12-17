package numbers

import (
	"testing"
)

func TestHighestPrimeNumber(t *testing.T) {
	input := 10
	want := 7
	result, err := FindHighestPrime(input)
	if want != result || err != nil {
		t.Fatalf("Test fail")
	}
}

func TestNumberNegative(t *testing.T) {
	input := -1
	result, err := FindHighestPrime(input)
	if result != input || err == nil {
		t.Fatalf("Test fail")
	}
}
