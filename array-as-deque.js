/**
 * @sample
 * size: 1e4
 * - push: 1.932ms
 * - pop: 0.927ms
 * - unshift: 23.995ms
 * - shift: 2.954ms
 * 
 * size: 1e5
 * - push: 9.239ms
 * - pop: 7.020ms
 * - unshift: 2293.057ms
 * - shift: 757.225ms
 * 
 * @conclusion
 * stack interfaces have O(1) time complexity,
 * while queue interfaces have O(n) time complexity.
 * array serves well as stack, but not as queue.
 * 
 * It is assumed that queue is implemented with array clone,
 * to be confirmed in source code.
 * 
 * @author
 * 雪霁
 */

function tap(methodName, size) {
    console.time(methodName);

    const subject = Array(size).fill(0);

    for (let i = 0; i < size; ++i) {
        subject[methodName](0);
    }

    console.timeEnd(methodName);
}

const methods = ['push', 'pop', 'unshift', 'shift'];

[1e4, 1e5].forEach((size) => {
    methods.forEach((methodName) => tap(methodName, size));
    console.log();
})
