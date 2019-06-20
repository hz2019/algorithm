/*
如果是根目录  循环递归 在左右分支中 求出最大值 最后加一
* */

var maxDepth = function(root) {
    if (root === null) {
        return 0;
    }

    return Math.max(maxDepth(root.left), maxDepth(root.right)) + 1;
};

