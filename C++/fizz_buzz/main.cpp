#include <iostream>
#include <string>

using namespace std;

int main(int argc, char const *argv[])
{
    const char nums[15] = {1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15};

    for (int num : nums)
    {
        if (num % 3 == 0 && num % 5 == 0)
        {
            cout << "FizzBuzz" << endl;
        }
        else if (num % 3 == 0)
        {
            cout << "Buzz" << endl;
        }
        else if (num % 5 == 0)
        {
            cout << "Fizz" << endl;
        }
        else
        {
            cout << num << endl;
        }
    }

    return 0;
}
