// Task 5
// RU: Написать итератор для чисел, который позволит получать массивы последовательных целых элементов.
//     Например, [...-3] => [0, -1, -2, -3], [...3] => [0, 1, 2, 3]
// EN: Create iterator for numbers, which allows you to get arrays of sequential integers.
//     Example, [...-3] => [0, -1, -2, -3], [...3] => [0, 1, 2, 3]

Number.prototype[Symbol.iterator] = function() {
    const boundary = this.valueOf();
    let current = 0;
    return {
        next() {
            return boundary < 0
                ?   {
                    done: current < boundary,
                    value: current--
                }
                :   {
                    done: current > boundary,
                    value: current++
                }
        }
    }
};

console.log([...-5]);
console.log([...5]);
