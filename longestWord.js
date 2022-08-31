export default function longestWord(names) {
    let long = names.split(" ");
    let longest = 0;
    let word = "";

    for (let i = 0; i < long.length; i++)
        if (longest <= long[i].length) {
            longest = long[i].length
            word = long[i]
        }
    return word;

}