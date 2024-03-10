function repeat(word) {
    let censored = ''

    for (i=0;i < word.length; i++) {
        censored += '*'
    }

    return censored
}

function solve(sentence, word) {
    let newSentence = sentence.replace(word, repeat(word));
    while (newSentence.includes(word)) {
        newSentence = newSentence.replace(word, repeat(word));
    }

    console.log(newSentence);
}

solve('A small sentence with some words', 'small')