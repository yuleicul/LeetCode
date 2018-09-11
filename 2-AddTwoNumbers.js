/*
You are given two non-empty linked lists representing two non-negative integers. The digits are stored in reverse order and each of their nodes contain a single digit. Add the two numbers and return it as a linked list.

You may assume the two numbers do not contain any leading zero, except the number 0 itself.

Example:

Input: (2 -> 4 -> 3) + (5 -> 6 -> 4)
Output: 7 -> 0 -> 8
Explanation: 342 + 465 = 807.
*/

/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */
/**
 * @param {ListNode} l1
 * @param {ListNode} l2
 * @return {ListNode}
 */

// 解法3：网友代码
const addTwoNumbersByOthers = (l1, l2) => {
    const temp = [];
    let q1 = l1,
        q2 = l2, 
        extra = 0;

    while (q1 || q2) { // q1和q2都为null时结束循环
        let sum = (q1 ? q1.val: 0) + (q2 ? q2.val : 0) + extra;
        extra = 0;
        if (sum >= 10) {
            extra = 1;
            sum = sum - 10;
        }
        temp.push(sum);
        q1 = q1 && q1.next
        q2 = q2 && q2.next
    }

    if (extra) temp.push(extra);
    
    return temp
};

// 解法2：补齐位数后再一个一个结点相加
// 结果：Accepted
var addTwoNumbers = function(l1, l2) {
    
    // ----------------补齐位数--------------------
    var p1 = l1;
    var p2 = l2;
    while (p1.next !== null && p2.next !== null) {
        p1 = p1.next;
        p2 = p2.next;
    }
    if (p1.next === null && p2.next === null) {
        ;
    }
    else if (p1.next === null) {
        while(p2.next !== null) {
            p1.next = new ListNode(0);
            p1 = p1.next;
            p2 = p2.next;
        }
    }
    else {
        while (p1.next !== null) {
            p2.next = new ListNode(0);
            p2 = p2.next;
            p1 = p1.next;
        }
    }
    
    // ---------------顺位相加---------------------
    var value = l1.val + l2.val;
    var shiwei = 0;
    var gewei = value % 10; // 个位
    if (value >= 10) {
        var shiwei = parseInt(value / 10); // 十位
    }
    var result = new ListNode(gewei);
    var current = result; // 移动的指针
    
    console.log(value);
 
    // 每一个结点的值相加 加入新的结点（考虑进位）
    while (l1.next !== null && l2.next !== null) {
        
        l1 = l1.next;
        l2 = l2.next;
        value = l1.val + l2.val + shiwei;
        console.log(value);
        if (value >= 10) {
            shiwei = parseInt(value / 10); // 十位
            gewei = value % 10; // 个位
        }
        else {
            shiwei = 0;
            gewei = value;   
        }
        current.next = new ListNode(gewei);
        current = current.next;   
        
    }
    // 加法结束可能在最后一个结点有进位
    if (shiwei) {
        current.next = new ListNode(shiwei);
    }
    return result;
}

// 解法1：先合再分
// 结果：超出memory
// 缺点：链表太长合起来超出范围
// var addTwoNumbers = function(l1, l2) {
//     var sum1 = 0;
//     var sum2 = 0;
//     var sum = 0;
//     var result = new ListNode(0);
//     var i = 0, j = 0;
    
//     sum1 += l1.val * Math.pow(10, i);
//     while (l1.next !== null) {
//         i++;
//         l1 = l1.next;
//         sum1 += l1.val * Math.pow(10, i);
//     }
//     console.log(sum1);
    
//     sum2 += l2.val * Math.pow(10, j);
//     while (l2.next !== null) {
//         // console.log(l2.val);
//         j++;
//         l2 = l2.next;
//         sum2 += l2.val * Math.pow(10, j);
//     }
//     console.log(sum2);
//     sum = sum1 + sum2;

//     var temp = sum % 10;
//     sum = parseInt(sum / 10);
//     result.val = temp;
    
//     var point = result;
//     while(sum != 0) {
//         temp = sum % 10;
        
//         point.next = new ListNode(temp);

//         point = point.next;
       
//         sum = parseInt(sum / 10);
//     }
//     console.log(result);
        // return result;
// };

var s1 = new ListNode(1);
s1.next = new ListNode(8);
s1.next.next = new ListNode(9);
var s2 = new ListNode(0);
s2.next = new ListNode(3);
// s2.next.next = new ListNode(4);

console.log(addTwoNumbers(s1, s2));