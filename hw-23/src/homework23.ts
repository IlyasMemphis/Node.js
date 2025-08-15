// ===== Задание 1 =====
function delay(ms: number, value: string): Promise<string> {
    return new Promise(resolve => setTimeout(() => resolve(value), ms));
}

async function runSequential() {
    console.log("Задание 1: Последовательная обработка");
    const res1 = await delay(1000, "Первый промис");
    console.log(res1);

    const res2 = await delay(500, "Второй промис");
    console.log(res2);

    const res3 = await delay(1500, "Третий промис");
    console.log(res3);
}

// ===== Задание 2 =====
async function processStrings(strings: string[]): Promise<string[]> {
    const tasks = strings.map(str =>
        new Promise<string>(resolve =>
            setTimeout(() => resolve(str.toUpperCase()), Math.random() * 1000)
        )
    );
    return Promise.all(tasks);
}

// ===== Задание 3 =====
async function runWithError() {
    const p1 = new Promise<string>(resolve => setTimeout(() => resolve("OK 1"), 500));
    const p2 = new Promise<string>((_, reject) => setTimeout(() => reject("Ошибка в p2"), 700));
    const p3 = new Promise<string>(resolve => setTimeout(() => resolve("OK 3"), 300));

    try {
        const results = await Promise.all([p1, p2, p3]);
        console.log(results);
    } catch (error) {
        console.error("Задание 3: Произошла ошибка:", error);
    }
}

// ===== Задание 4 =====
async function runDynamicDelays(numbers: number[]) {
    const tasks = numbers.map(num =>
        new Promise<string>(resolve =>
            setTimeout(() => resolve(`Готово за ${num} мс`), num)
        )
    );
    const results = await Promise.all(tasks);
    console.log("Задание 4: Результаты промисов:", results);
}

// ===== Запуск всех заданий =====
async function main() {
    await runSequential();

    console.log("Задание 2: Параллельная обработка массива строк");
    const upperResults = await processStrings(["hello", "world", "typescript"]);
    console.log(upperResults);

    await runWithError();

    await runDynamicDelays([300, 1000, 500]);
}

main();
