export function capitalize(word){
    if (word.length == 0){
        return null;
    }
    else {
        return word.charAt(0).toUpperCase() + word.slice(1);
    }
}
