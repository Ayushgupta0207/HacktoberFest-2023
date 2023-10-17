#include <iostream>

int findSecondLargest(int arr[], int size) {
    if (size < 2) {
        std::cout << "Array should have at least two elements to find the second largest." << std::endl;
        return -1; // Invalid input
    }

    int firstMax = arr[0];
    int secondMax = INT_MIN; // Initialize to the smallest possible integer value

    for (int i = 1; i < size; ++i) {
        if (arr[i] > firstMax) {
            secondMax = firstMax;
            firstMax = arr[i];
        } else if (arr[i] > secondMax && arr[i] != firstMax) {
            secondMax = arr[i];
        }
    }

    if (secondMax == INT_MIN) {
        std::cout << "There is no second largest element in the array." << std::endl;
        return -1;
    }

    return secondMax;
}

int main() {
    int arr[] = {12, 35, 1, 10, 34, 1};
    int size = sizeof(arr) / sizeof(arr[0]);

    int secondLargest = findSecondLargest(arr, size);

    if (secondLargest != -1) {
        std::cout << "The second largest element in the array is: " << secondLargest << std::endl;
    }

    return 0;
}
