#include <iostream>
#include <string>
#include <vector>
#include <map>

using namespace std;

class Solution
{
public:
    vector<int> most_frequent(vector<int> nums, int k)
    {
        vector<int> answer;
        int big1 = 0;
        int big2 = 0;
        map<int, int> freq = {};
        for (int num : nums)
        {
            freq[num] ? freq[num] += 1 : freq[num] = 1;
        }

    for (int i = 0; i < k; i++)
    {
        int max = 0;
        int num;
        for (auto it = freq.begin(); it != freq.end(); it++)
        {
            int key = it->first;
            int value = it->second;
            if (value > max)
            {
                max = value;
                num = key;
            }
        }
        freq.erase(num);
        answer.push_back(num);
    }

        return answer;
    };
};

int main(int argc, char const *argv[])
{
    Solution solution;
    solution.most_frequent({1, 1, 1, 2, 2, 3}, 2);
    return 0;
}