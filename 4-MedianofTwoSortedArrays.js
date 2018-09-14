/* ================================================================================
There are two sorted arrays nums1 and nums2 of size m and n respectively.

Find the median of the two sorted arrays. The overall run time complexity should be O(log (m+n)).

You may assume nums1 and nums2 cannot be both empty.

Example 1:

nums1 = [1, 3]
nums2 = [2]

The median is 2.0
Example 2:

nums1 = [1, 2]
nums2 = [3, 4]

The median is (2 + 3)/2 = 2.5
================================================================================== */

/**
 * @param {number[]} nums1
 * @param {number[]} nums2
 * @return {number}
 */
var findMedianSortedArrays = function(nums1, nums2) {
    var nums3 = nums1.concat(nums2);
    var nums4 = nums3.sort(function(x, y) {
        if (x < y) {
            return -1;
        }
        if (x > y) {
            return 1;
        }
        if (x === y) {
            return 0;
        }
    });
    var len = nums4.length;
    var a = parseInt(len / 2);
    if (len % 2 !== 0) {
        return nums4[a];
    }
    else {
        return (nums4[a - 1] + nums4[a]) / 2;   
    }
};

console.log(findMedianSortedArrays([1,2],[3,4]));

