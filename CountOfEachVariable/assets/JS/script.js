function count_of_letters(word) {
    for (let i = 0; i < word.length; i++) {
        let count = 0;
        for (let j = 0; j < word.length; j++) {
            if (word[i]==word[j] && i>j) {
                break;
            }
            if (word[i] == word[j]) {
                count++;
            }
        }
        if (count>0) {
            console.log(`${word[i]} ---> ${count}`);    
        }

    }
}

count_of_letters("Kamran")



