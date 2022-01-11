#WRONG BECAUSE NOT UPDATING INDEX
# def selection_sort(arr):
#     for x in range(len(arr)):
#         print(f"x: {x}")
#         smallest_number = arr[x]
#         index = x
#         for i in range(x+1, len(arr)):
#             print(i)
#             if arr[x] > arr[i]:
#                 smallest_number = arr[i]
#                 index = i
#         arr[x], arr[index] = arr[index], arr[x]
#         print(f'arr: {arr} smallest: {smallest_number} index: {index}')
#     return arr
# print1 = selection_sort(arr)
# print(print1)

arr = [5, 8, 3, 2, 0, 1]
def selection_sort(arr):
    for x in range(len(arr)):
        print(f"x: {x}")
        index = x
        for i in range(x+1, len(arr)):
            print(i)
            if arr[index] > arr[i]:
                index = i
        arr[x], arr[index] = arr[index], arr[x]
        print(f'arr: {arr} index: {index}')
    return arr
print1 = selection_sort(arr)
print(print1)