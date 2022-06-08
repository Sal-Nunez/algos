// Definition for singly-linked list.
var ListNode = /** @class */ (function () {
    function ListNode(val, next) {
        this.val = (val === undefined ? 0 : val);
        this.next = (next === undefined ? null : next);
    }
    return ListNode;
}());
var mergeTwoLists = function (list1, list2) {
    var newList = new ListNode();
    var current = newList;
    while (list1 && list2) {
        if (list1.val <= list2.val) {
            current.next = list1;
            current = list1;
            list1 = list1.next;
        }
        else {
            current.next = list2;
            current = list2;
            list2 = list2.next;
        }
    }
    newList.next = list1 ? list1 : list2;
    return newList.next;
};
