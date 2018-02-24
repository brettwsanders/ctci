- Forgetting to access the value property on an object when comparing nodes
    example: btn.left >= btn.value should be btn.left.value >= btn.value

- Mixing up && and ||
    example: common ancestor problem, loop executed while both nodes were defined, instead of either one

- When using a getter, calling it like a function
    example: node.left() instead of node.left

- Using const instead of let
- When dividing always think about problems diving by 0
- Common edge cases: zeros, array length too short, negative numbers
- Setting display: absolute, instead of position: absolute

UI
- better understanding of JS DOM selectors
- CSS animations
- forms

Approach:
- define the problem
- build out simple test cases quickly
- think of a data structure that could fit the problem
- brute force solution first, think about fast implementation
- get pseudocode quickly
- ensure on same page w/other person
- start implementing quickly
- test frequently
- use good variable names, and constants


Patterns:
- start with a brute force solution, look for repeat work in that solution, and modify it to only do that work once.
