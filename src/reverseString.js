export function reverseString(word){
    if (word.length == 0 || word == null){
        return null;
    }
    else {
        return word.split('').reverse().join('');
    }
}