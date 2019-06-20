# Definition for a binary tree node.
# class TreeNode(object):
#     def __init__(self, x):
#         self.val = x
#         self.left = None
#         self.right = None
#  先大小排序数组 假设一个最小值，循环比较修改这值   最终结果是最小值

class Solution(object):
    def minDiffInBST(self, root):
        """
        :type root: TreeNode
        :rtype: int
        """

        def inorder(node):
            if not node:
                return

            inorder(node.left)
            self.res = min(self.res, node.val - self.pre)
            self.pre = node.val
            inorder(node.right)

        self.pre = -99999
        self.res = 99999
        inorder(root)
        return self.res