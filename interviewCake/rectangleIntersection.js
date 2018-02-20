/*
 * input: two rectangles
 * output: rectangle of intersection
 * constraints:
 * edge cases: no intersection
 */
class Rect {
    constructor(leftX, bottomY, width, height) {
        this.data = {};
        this.data.leftX = leftX;
        this.data.bottomY = bottomY;
        this.data.width = width;
        this.data.height = height;
    }

    print() {
        console.log(JSON.stringify(this.data, null, 2));
    }
}

const getIntersection = (rect1, rect2) => {
    // get furthestMostLeft rect
    let leftRect;
    let rightRect;
    let bottomRect;
    let topRect;
    if (rect1.data.leftX <= rect2.data.leftX) {
        leftRect = rect1;
        rightRect = rect2;
    } else {
        leftRect = rect2;
        rightRect = rect1;
    }
    // get furthestMostBottom rect
    if (rect1.data.bottomY <= rect2.data.bottomY) {
        bottomRect = rect1;
        topRect = rect2;
    } else {
        bottomRect = rect2;
        topRect = rect1;
    }

    // check for X-axis overlap between rects
    let xOverlap = false;
    let leftX;
    let width;
    if (rightRect.data.leftX < (leftRect.data.leftX + leftRect.data.width)) {
        xOverlap = true;
        leftX = rightRect.data.leftX;
        width = Math.min(leftRect.data.leftX + leftRect.data.width, rightRect.data.leftX + rightRect.data.width) - leftX;
    }
    // check for Y-axis overlap between rects
    let yOverlap = false;
    let bottomY;
    let height;
    if (topRect.data.bottomY < (bottomRect.data.bottomY + bottomRect.data.height)) {
        yOverlap = true;
        bottomY = topRect.data.bottomY;
        height = Math.min(bottomRect.data.bottomY + bottomRect.data.height, topRect.data.bottomY + topRect.data.height) - bottomY;
    }
    // if both, there is an intersection
    if (xOverlap && yOverlap) {
        const overlapRect = new Rect(leftX, bottomY, width, height);
        return overlapRect;
    } else {
        return false;
    }
};

// Test Cases
let rect1;
let rect2;
let outcome;
let expected;

// test case 1
rect1 = new Rect(1, 1, 6, 3);
rect2 = new Rect(5, 2, 3, 6);
expected = new Rect(5, 2, 2, 2);
outcome = getIntersection(rect1, rect2);
if (outcome) { outcome.print(); } else { console.log(outcome); }
console.log('...should be...');
expected.print();

