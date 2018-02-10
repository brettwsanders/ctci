- Forgetting to access the value property on an object when comparing nodes
    example: btn.left >= btn.value should be btn.left.value >= btn.value

- Mixing up && and ||
    example: common ancestor problem, loop executed while both nodes were defined, instead of either one

- When using a getter, calling it like a function
    example: node.left() instead of node.left

- Using const instead of let
