/*
 * Build Order: You are given a list of projects and a list of dependencies (which is a list of pairs of
 * projects, where the first project is dependent on the second project). All of a project's dependencies
 * must be built before the project is. Find a build order that will allow the projects to be build. If there
 * is no valid build order, return an error.
 */

// Notes
// if every project is dependent on another project, no build order
const buildOrder = (project, dependencies) => {
    let order = [];
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
