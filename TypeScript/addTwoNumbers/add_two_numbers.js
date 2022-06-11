/**
 * Definition for singly-linked list.
 */
var ListNode = /** @class */ (function () {
    function ListNode(val, next) {
        this.val = (val === undefined ? 0 : val);
        this.next = (next === undefined ? null : next);
    }
    return ListNode;
}());
// const addTwoNumbers = (l1: ListNode | null, l2: ListNode | null): ListNode | null => {
//     let num = 0
//     let trailing: string = ""
//     let runner1: ListNode |null = l1
//     let runner2: ListNode | null = l2
//     while (runner1 !== null && runner2 !== null) {
//         if (runner1 !== null) {
//             num += parseInt(runner1.val + trailing)
//             runner1 = runner1.next
//         }
//         if (runner2 !== null) {
//             num += parseInt(runner2.val + trailing)
//             runner2 = runner2.next
//         }
//         trailing += "0"
//     }
//     let arr = num.toString().split("").reverse()
//     arr.forEach(num => {
//     })
//     return null;
// };
var addTwoNumbers = function (l1, l2) {
    var remainder = 0;
    var answer = new ListNode();
    var runner = answer;
    while (l1 || l2) {
        var num = remainder;
        if (l1) {
            num += l1.val;
            l1 = l1.next;
        }
        if (l2) {
            num += l2.val;
            l2 = l2.next;
        }
        if (num > 9) {
            remainder = parseInt(num.toString().substring(0, 1));
            runner.next = new ListNode(num - 10);
        }
        else {
            remainder = 0;
            runner.next = new ListNode(num);
        }
        runner = runner.next;
    }
    if (remainder) {
        runner.next = new ListNode(remainder);
    }
    return answer.next;
};
