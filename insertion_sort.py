arr = [8, 5, 3, 2, 0, 1]

def insertion_sort(arr):
    for x in range(len(arr)-1):
        for i in range(x+1, -1, -1):
            if i == x:
                continue
            if x < 0:
                continue
            elif i > x and arr[x] > arr[i]:
                arr[x], arr[i] = arr[i], arr[x]
                x -= 1
            elif x > i and arr[x] < arr[i]:
                arr[x], arr[i] = arr[i], arr[x]
                x -= 1
    return arr

print1 = insertion_sort(arr)
print(print1)