/**
 * @param {number[]} nums
 * @param {number} k
 * @return {void} Do not return anything, modify nums in-place instead.

 先截取 把操作的数组个数截取 下来    拼接原数组
 因为数组是一个闭环的容器   只要是单个出栈 入栈  就是一个循环问题。 可以批次处理 看成一体
 */
var rotate = function(nums, k) {
    var len = nums.length;
    for (var i=len-k;i<len;len--) {
        nums.unshift(nums.pop());
    }
    return nums
};