var isValid = function (s) {
    var parentheses = {
        "}": "{",
        "]": "[",
        ")": "("
    };
    var stack = [];
    for (var i = 0; i < s.length; i++) {
        if (s[i] in parentheses) {
            if (stack[stack.length - 1] === parentheses[s[i]])
                stack.pop();
            else
                return false;
        }
        else
            stack.push(s[i]);
    }
    return stack.length === 0;
};
