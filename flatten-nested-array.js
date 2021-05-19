/**
 * @sample
 * size: 1e2
 * - push: 1.215ms
 * - concat: 2.897ms
 * - destructuring: 8.654ms
 * 
 * size: 1e3
 * - push: 19.343ms
 * - concat: 2625.636ms
 * - destructuring: 9364.433ms
 * 
 * @conclusion
 * the samples shows that push has a time complexity of O(n),
 * and concat O(n^2), and destructuring O(n^2) with bigger coefficient
 * 
 * @author
 * 雪霁
 */

function push(nested) {
    console.time('push');

    const flattened = nested.reduce((acc, cur) => {
        acc.push(...cur);
        return acc;
    }, []);

    console.timeEnd('push');

    return flattened;
}

function concat(nested) {
    console.time('concat');

    const flattened = nested.reduce((acc, cur) => acc.concat(cur));

    console.timeEnd('concat');

    return flattened;
}

function destructuring(nested) {
    console.time('destructuring');

    const flattened = nested.reduce((acc, cur) => [...acc, ...cur]);

    console.timeEnd('destructuring');

    return flattened;
}

[1e2, 1e3].forEach((size) => {
    const nested = Array(size).fill().map(() => Array(size).fill(0));

    [push, concat, destructuring].forEach((fn) => fn(nested));
});
