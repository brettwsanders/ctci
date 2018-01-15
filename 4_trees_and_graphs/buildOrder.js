/*
 * Build Order: You are given a list of projects and a list of dependencies (which is a list of pairs of
 * projects, where the first project is dependent on the second project). All of a project's dependencies
 * must be built before the project is. Find a build order that will allow the projects to be build. If there
 * is no valid build order, return an error.
 */

// Notes
// if every project is dependent on another project, no build order
const buildOrder = (projects, dependencies) => {
    let built = {};
    let order = [];
    let currSet = [];

    // convert dependencies to hash for quick lookup
    let deps = dependencies.reduce((acc, dep) => {
        const key = dep[0];
        const value = dep[1];
        acc[key] = value
        return acc;
    }, {});
    //console.log('deps are', deps);

    // convert dependencies to hash for quick lookup
    let depsReversed = dependencies.reduce((acc, dep) => {
        const key = dep[1];
        const value = dep[0];
        if (acc[key]) {
            acc[key].push(value);
        } else {
            acc[key] = [value];
        }
        return acc;
    }, {});
    //console.log('depsReversed are', depsReversed);

    // find projects with no dependencies and add to currSet and built
    projects.forEach(project => {
        if (deps[project] === undefined) {
            built[project] = true;
            currSet.push(project);
        }
    });
    
    if (currSet.length === 0) return false; // all projects have dependencies so no build order

    // find projects whose dependency has been built and add to nextSet

    let nextSet;
    while (currSet.length) {
        nextSet = [];
        currSet.forEach(project => {
            if (depsReversed[project] !== undefined) {
                nextSet = nextSet.concat(depsReversed[project]);
            }
        })
        order = order.concat(currSet);
        currSet = nextSet;
    }

    return order;
};

// Test Cases
let projects = ['yellow', 'theta', 'pink', 'alpha', 'green'];
let dependencies = [
    ['yellow', 'theta'],
    ['pink', 'yellow'], 
    ['theta', 'alpha'], 
    ['green', 'yellow']
];

let result = ['alpha', 'theta', 'yellow', 'pink', 'green'];
console.log(buildOrder(projects, dependencies), 'should be', result)
