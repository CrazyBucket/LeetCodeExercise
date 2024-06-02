class ListNode {
  constructor(val) {
    this.val = val;
    this.next = null;
  }
}

/**
 * @param {ListNode[]} lists
 * @return {ListNode}
 */
var mergeKLists = function (lists) {
  if (lists.length === 0) return null;
  var dfs = (left, right) => {
    if (left === right) return lists[left];
    let mid = Math.floor((left + right) / 2);
    let leftList = dfs(left, mid);
    let rightList = dfs(mid + 1, right);
    return mergeTwoLists(leftList, rightList);
  };
  return dfs(0, lists.length - 1);
};
var mergeTwoLists = function (list1, list2) {
  let dummy = new ListNode();
  let cur = dummy;
  while (list1 && list2) {
    if (list1.val <= list2.val) {
      cur.next = list1;
      list1 = list1.next;
    } else {
      cur.next = list2;
      list2 = list2.next;
    }
    cur = cur.next;
  }
  cur.next = list1 ? list1 : list2;
  return dummy.next;
};

const listArray = [];

let list1 = new ListNode(1);
list1.next = new ListNode(4);
list1.next.next = new ListNode(5);
listArray.push(list1);

let list2 = new ListNode(2);
list2.next = new ListNode(3);
list2.next.next = new ListNode(6);
list2.next.next.next = new ListNode(7);
listArray.push(list2);

let list3 = new ListNode(1);
list3.next = new ListNode(2);
list3.next.next = new ListNode(7);
listArray.push(list3);

console.log(mergeKLists(listArray));
