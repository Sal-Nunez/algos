#include <iostream>
#include <string>
#include <vector>
#include <stack>

using namespace std;

class Solution
{
public:
    bool isValid(string s)
    {
        stack<char> brackets;
        for (char str : s)
        {
            if (str == '(' || str == '{' || str == '[')
            {
                brackets.push(str);
            }
            else
            {
            cout << str << "----" << s << "----" << brackets.top() << brackets.size() << endl;
                if (brackets.size() == 0)
                    cout << "WHY" << endl;
                    return false;
                char c = brackets.top();
                brackets.pop();
                if (
                    str == '}' && c == '{' ||
                    str == ')' && c == '(' ||
                    str == ']' && c == '[')
                    continue;
                else
                    return false;
            }
        }
        return brackets.empty();
    }
};


int main() {
Solution solution;
cout << solution.isValid("()[]{}") << endl;
return 0;
}