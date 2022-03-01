function stopWatch() {
    let startTime = Date.now();
    return () => Date.now() - startTime;
}

const timer = stopWatch();

console.log(timer());
