#include <iostream>
#include <string>

using namespace std;

class Solution {
public:
    int isPalindrome(string S) {
        int n = S.size();

        for (int i = 0; i < n / 2; i++)
            if (S[i] != S[n - i - 1])
                return 0;
        return 1;
    }
};

int main() {
    Solution solution;
    string input;

    cout << "Enter a string: ";
    cin >> input;

    if (solution.isPalindrome(input)) {
        cout << "The string is a palindrome." << endl;
    } else {
        cout << "The string is not a palindrome." << endl;
    }

    return 0;
}
