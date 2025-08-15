export function generateFibonacci(limit: number): number[] {
    const sequence = [0, 1];
    while (true) {
        const next = sequence[sequence.length - 1] + sequence[sequence.length - 2];
        if (next > limit) break;
        sequence.push(next);
    }
    return sequence;
}

export function generatePrimeNumbers(limit: number): number[] {
    const primes: number[] = [];
    for (let num = 2; num <= limit; num++) {
        if (primes.every(p => num % p !== 0)) {
            primes.push(num);
        }
    }
    return primes;
}
