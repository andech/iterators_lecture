// Task 4
// RU: Написать итерируемый итератор, который возвращает числа Фибоначи
//     Реализовать метод return для остановки итератора с помощью for-of + break
// EN: Create iterable iterator, which produces Fibonacci numbers
//     Implement method return, which allows you to stop iterator using for-of + break

const Fib = {
    [Symbol.iterator]() {
        let first = 0;
        let second = 1;
        let value;
        return {
            next() {
                [value, first, second] = [first, second, first + second];
                return {
                    value,
                    done: false
                }
            },
            return() {
                return {
                    value,
                    done: true
                }
            }
        }
    }
};

for (let v of Fib) {
    console.log(v);
    if (v > 50) break;
}
