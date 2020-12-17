package numbers

import "errors"

/*
HighestPrime aa
*/
func FindHighestPrime(number int) (int, error) {
	if number < 0 {
		return number, errors.New("Invalid input")
	}
	result := number
	for i := number; i > 1; i-- {
		if checkPrime(i) {
			result = i
			break
		}
	}
	return result, nil
}

func checkPrime(number int) bool {
	if number == 0 || number == 1 {
		return false
	}

	for i := 2; i <= number/2; i++ {
		if number%i == 0 {
			return false
		}
	}

	return true
}
