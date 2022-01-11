class Node {
    /**
     * Constructs a new Node instance. Executed when the 'new' keyword is used.
     * @param {any} data The data to be added into this new instance of a Node.
     *    The data can be anything, just like an array can contain strings,
     *    numbers, objects, etc.
     * @returns {Node} This new Node instance is returned automatically without
     *    having to be explicitly written (implicit return).
     */
    constructor(data) {
        this.data = data;
        /**
         * This property is used to link this node to whichever node is next
         * in the list. By default, this new node is not linked to any other
         * nodes, so the setting / updating of this property will happen sometime
         * after this node is created.
         */
        this.next = null;
    }
}

/**
 * Class to represent a list of linked nodes. Nodes CAN be linked together
 * without this class to form a linked list, but this class helps by providing
 * a place to keep track of the start node (head) of the list at all times and
 * as a place to add methods (functions inside an object) so that every new
 * linked list that is instantiated will inherit helpful the same helpful
 * methods, just like every array you create inherits helpful methods.
 */
class SinglyLinkedList {
    /**
     * Constructs a new instance of an empty linked list that inherits all the
     * methods.
     * @returns {SinglyLinkedList} The new list that is instantiated is implicitly
     *    returned without having to explicitly write "return".
     */
    constructor() {
        this.head = null;
    }

    /**
     * Calls insertAtBack on each item of the given array.
     * - Time: O(n * m) n = list length, m = arr.length.
     * - Space: O(1) constant.
     * @param {Array<any>} vals The data for each new node.
     * @returns {SinglyLinkedList} This list.
     */
    seedFromArr(vals) {
        for (const item of vals) {
            this.insertAtBack(item);
        }
        return this;
    }

    /**
     * Converts this list into an array containing the data of each node.
     * - Time: O(n) linear.
     * - Space: O(n).
     * @returns {Array<any>} An array of each node's data.
     */
    toArr() {
        const arr = [];
        let runner = this.head;

        while (runner) {
            arr.push(runner.data);
            runner = runner.next;
        }
        return arr;
    }

    /**
     * Determines if this list is empty.
     * - Time: O(?).
     * - Space: O(?).
     * @returns {boolean}
     */
    isEmpty() {
        return this.head === null;
    }

    /**
     * Creates a new node with the given data and inserts it at the back of
     * this list.
     * - Time: O(?).
     * - Space: O(?).
     * @param {any} data The data to be added to the new node.
     * @returns {SinglyLinkedList} This list.
     */
    insertAtBack(data) {
        let newNode = new Node(data);

        if (this.isEmpty()) {
            this.head = newNode;
        } else {
            let runner = this.head;

            while (runner.next != null) {
                runner = runner.next;
            }
            runner.next = newNode;
        }

        return this;
    }

    // ========================== DAY 2 START ====================================
    /**
     * Creates a new node with the given data and inserts that node at the front
     * of this list.
     * - Time: (?).
     * - Space: (?).
     * @param {any} data The data for the new node.
     * @returns {SinglyLinkedList} This list.
     */
    insertAtFront(data) {
        let newNode = new Node(data);
        if (this.isEmpty()) {
            this.head = newNode;
        } else {
            newNode.next = this.head;
            this.head = newNode;
        }
        return this;
    }

    print() {
        let runner = this.head;
        console.log(this.head);
        if (this.isEmpty()) {
            console.log("isEmpty");
        } else {
            while (runner.next != null) {
                runner = runner.next;
                console.log(runner);
            }
        }
    }

    /**
     * Removes the first node of this list.
     * - Time: (?).
     * - Space: (?).
     * @returns {any} The data from the removed node.
     */
    removeHead() {
        if (this.isEmpty()) {
            return this;
        } else if (this.head.next == null) {
            // If there is only one node in this list
            this.head = null;
        } else {
            // if there is more than one
            let head1 = this.head
            this.head = this.head.next
            head1 = null
            return head1.data;
        }
    }

    // EXTRA
    /**
     * Calculates the average of this list.
     * - Time: (?).
     * - Space: (?).
     * @returns {number|NaN} The average of the node's data.
     */
    average() {
        if (this.isEmpty()) {
            console.log(0);
            return this
        } else if (this.head.next == null) {
            console.log(this.head.data);
            return this
        } else {
            let sum = this.head.data;
            let count = 1;
            let runner = this.head;
            while (runner.next != null) {
                runner = runner.next;
                sum += runner.data;
                count++
            }
            console.log(sum / count);
        }
    }
    // ========================== DAY 3 START ====================================

    /**
     * Removes the last node of this list.
     * - Time: O(?).
     * - Space: O(?).
     * @returns {any} The data from the node that was removed.
     */
    removeBack() {
        let runner = this.head;
        if (this.isEmpty() || this.head.next == null) {
            return this.removeHead();
        } else {
            while (runner.next != null) {
                var runner1 = runner
                runner = runner.next;
            }
            runner1.next = null;
            return runner1.data;
        }
    }

    //   Tristans Answer
    //   removeBack() {
    //     let removedData;
    //     if (this.isEmpty() || this.head.next == null) {
    //         return this.removeHead();
    //     } else {
    //         let walker = this.head;
    //         let runner = walker.next;
    //         while (runner.next != null) {
    //             walker = runner;
    //             runner = runner.next;
    //         }
    //         removedData = runner;
    //         walker.next = null;
    //         return removedData.data
    //     }
    // }

    /**
     * Determines whether or not the given search value exists in this list.
     * - Time: O(?).
     * - Space: O(?).
     * @param {any} val The data to search for in the nodes of this list.
     * @returns {boolean}
     */
    contains(val) {
        if (this.isEmpty()) {
            return false;
        } else {
            let runner = this.head;
            while (runner.next != null) {
                if (runner.data == val) {
                    return true;
                }
            } return false;
        }
    }

    // Spencer Answer
    // contains(val) {
    //   if (this.isEmpty()){
    //     return false;
    //   }
    //   let runner = this.head;
    //   while (runner.next != null){
    //     if (runner.data == val){
    //       return true;
    //     }
    //     runner = runner.next;
    //   }
    //   return false;
    // }

    /**
     * Determines whether or not the given search value exists in this list.
     * - Time: O(?).
     * - Space: O(?).
     * @param {any} val The data to search for in the nodes of this list.
     * @param {?node} current The current node during the traversal of this list
     *    or null when the end of the list has been reached.
     * @returns {boolean}
     */
    containsRecursive(val, current = this.head) {
        if (current.data == val) {
            return true;
        } else if (current.next == null) {
            return false;
        }
        return this.containsRecursive(val, current.next)
    }

    // EXTRA
    /**
     * Recursively finds the maximum integer data of the nodes in this list.
     * - Time: O(?).
     * - Space: O(?).
     * @param {Node} runner The start or current node during traversal, or null
     *    when the end of the list is reached.
     * @param {Node} maxNode Keeps track of the node that contains the current
     *    max integer as it's data.
     * @returns {?number} The max int or null if none.
     */
    recursiveMax(runner = this.head, maxNode = this.head) {
        if (this.head === null) return null;

        if (runner === null) return maxNode.data;

        if (runner.data > maxNode.data) maxNode = runner;

        return this.recursiveMax(runner.next, maxNode);
    }
}

const emptyList = new SinglyLinkedList();
const singleNodeList = new SinglyLinkedList().seedFromArr([1]);
const unorderedList = new SinglyLinkedList().seedFromArr([-5, -10, 4, -3, 6, 1, -7, 2]);
// console.log(unorderedList);
// singleNodeList.insertAtFront(5)
unorderedList.average()
// console.log(unorderedList.print());