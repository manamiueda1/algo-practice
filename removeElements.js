// leetcode: https://leetcode.com/problems/remove-linked-list-elements/

var removeElements = function(head, val) {
    let pointer = head

if(!head){
  return null
}
while (pointer && pointer.val === val){
  pointer = pointer.next
}
if (pointer === null){
  return null
}
const newHead = pointer

while (pointer.next !== null) {
  if (pointer.next.val === val){
    pointer.next = pointer.next.next
  } else {
    pointer = pointer.next
  }
}
return newHead
};