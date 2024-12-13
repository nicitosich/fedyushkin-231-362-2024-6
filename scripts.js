function pow(x, n) {
    if (n < 1) return "n должно быть натуральным";
    let result = 1;
    for (let i = 0; i < n; i++) {
        result *= x;
    }
    return result;
}

function calculatePow() {
    const x = parseFloat(document.getElementById('pow-base').value);
    const n = parseInt(document.getElementById('pow-exp').value);
    document.getElementById('pow-result').textContent = `Результат: ${pow(x, n)}`;
}

function gcd(a, b) {
    while (b) {
        [a, b] = [b, a % b];
    }
    return a;
}

function calculateGCD() {
    const a = parseInt(document.getElementById('gcd-a').value);
    const b = parseInt(document.getElementById('gcd-b').value);
    document.getElementById('gcd-result').textContent = `НОД: ${gcd(a, b)}`;
}

function minDigit(x) {
    return Math.min(...x.toString().split('').map(Number));
}

function findMinDigit() {
    const x = parseInt(document.getElementById('min-digit').value);
    document.getElementById('min-digit-result').textContent = `Наименьшая цифра: ${minDigit(x)}`;
}

function pluralizeRecords(n) {
    const form = (n % 10 === 1 && n % 100 !== 11) ? 'запись' :
                 (n % 10 >= 2 && n % 10 <= 4 && (n % 100 < 10 || n % 100 >= 20)) ? 'записи' : 'записей';
    return `В результате выполнения запроса было найдено ${n} ${form}`;
}

function calculatePluralization() {
    const n = parseInt(document.getElementById('plural-number').value);
    document.getElementById('pl-result').textContent = pluralizeRecords(n);
}

function fibb(n) {
    if (n <= 1) return n;
    let a = 0, b = 1;
    for (let i = 2; i <= n; i++) {
        [a, b] = [b, a + b];
    }
    return b;
}

function calculateFibonacci() {
    const n = parseInt(document.getElementById('fibb-n').value);
    if (n > 1000) {
        document.getElementById('fibb-result').textContent = "Введите число меньше или равное 1000.";
    } else {
        document.getElementById('fibb-result').textContent = `F(${n}) = ${fibb(n)}`;
    }
}
