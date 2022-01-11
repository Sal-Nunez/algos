def gen_anagrams(str):
    if len(str) == 1:
        return [str]
    output = []
    for char in str:
        perms = gen_anagrams(''.join(x for x in str if x != char))
        for perm in perms:
            output.append(char+perm)
    return output


print(gen_anagrams('lim'))


def gen_anagrams2(str, output=[], partial=""):
    if not str:
        output.append(partial)
    for i, char in enumerate(str):
        gen_anagrams2(str[:i]+str[i+1:], output, partial+char)
    return output


print(gen_anagrams2('lim'))


def sum_to_digit(num):
    if num < 10:
        return num
    sum = 0
    while num > 0:
        sum += num % 10
        num = num // 10
    return sum_to_digit(sum)


print(sum_to_digit(55))
