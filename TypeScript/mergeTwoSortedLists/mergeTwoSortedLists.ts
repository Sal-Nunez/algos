
// Definition for singly-linked list.
class ListNode {
    val: number
    next: ListNode | null
    constructor(val?: number, next?: ListNode | null) {
        this.val = (val===undefined ? 0 : val)
        this.next = (next===undefined ? null : next)
    }
}

    
    
    const mergeTwoLists = (list1: ListNode | null, list2: ListNode | null): ListNode | null => {
        
        let newList: ListNode = new ListNode()
        let current: ListNode = newList

        while(list1 && list2) {
            if (list1.val <= list2.val) {
                current.next = list1
                current = list1
                list1 = list1.next
            } else {
                current.next = list2
                current = list2
                list2 = list2.next
                
            }
        }
        
        newList.next = list1 ? list1 : list2
        
        return newList.next
    };