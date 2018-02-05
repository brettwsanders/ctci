/*
 * Towers of Hanoi: In the classic problem of the Towers of Hanoi, you have 3 towers and N disks of
 * different sizes which can slide onto any tower. The puzzle starts with disks sorted in ascending order
 * of size from top to bottom (i.e. each disk sits on top of an even larger one). You have the following
 * constraints:
 * 1. Only one disk can be moved at a time
 * 2. A disk is slid off the top of one tower onto another tower.
 * 3. A disk cannot be placed on top of a smaller disk.
 *
 * Write a program to move the disks from the first tower to the last using stacks.
 */

const moveDisks = (start, mid, end) => {
    // add check to ensure all towers are sorted appropriately (validate input)

    // base case
    if (start.length == 0 && mid.length === 0) return end; // completed!

    // get tower with the smallest tip

    // start with assumption that start tower has odd length
    let target = end;
    let store = mid;
    if (start.length % 2 === 0) { // switch if start tower has even length
        target = mid;
        store = end;
    }
    // move over disks in group of 3
    target.push(start.pop());   // move small from start to target
    store.push(start.pop()); // move medium from start to store
    store.push(target.pop());   // move small from target to store
    target.push(start.pop());   // move large from start to target
    start.push(store.pop()); // move small from store to start
    target.push(store.pop());   // move medium from store to target
    target.push(start.pop());   // move small from start to target

    // if start or mid is not empty, pop one and move to open spot
    let disk;
    if (start.length > 0) {
        disk = start.pop();
    } else if (mid.length > 0) {
        disk = mid.pop();
    }
    if (disk) store.push(disk);
};

