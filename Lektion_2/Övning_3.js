function counter(word, char) {
    let counter = 0;

    for(let i = 0 ; i < word.length ; i++) {
        if(char === word[i]) {
            counter++;
        }
    }

    return counter;
}

console.log(counter("bePPe", "p"));
