arr = [4, 8, 5, 7, 1, 6, 10, 2, 3, 9];


def bubble_sort(arr):
    for x in range(0, len(arr)):
        if x == 0:
            continue
        if arr[x-1] > arr[x]:
            arr[x-1], arr[x] = arr[x], arr[x-1]
    for x in range(0, len(arr)):
        if x == 0:
            continue
        if arr[x-1] > arr[x]:
            bubble_sort(arr)
    return arr

print(bubble_sort(arr))