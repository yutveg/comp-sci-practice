// given a binary tree and a target sum

// find all root-leaf paths that add up to the sum

// return them in an array

// set up a stack of some sort

// track three values- current node, current path, and sum

// initialize stack with starting values
class TreeNode {
    value: number
    left: TreeNode | null
    right: TreeNode | null

    constructor(value) {
        this.value = value
        this.left = null
        this.right = null
    }
}

class Solution {
    pathSum(root: TreeNode, sum: number) {
        let stack = []
        let answers = []

        stack.push([root, [], root.value])

        while (stack.length > 0) {
            let { currentNode, currentPath, currentValue } = stack.pop()
        }
    }
}
