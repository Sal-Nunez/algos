def function_name(list, function):
    for x in range(len(list)):
        list[x] = function(list[x])
    return list

print(function_name([1, 2, 3, 4], (lambda num: num*num)))
print(function_name([1, 2, 3, 4], (lambda num: num*3)))
print(function_name([1, 2, 3, 4], (lambda num: num*2)))