

class Beer {
    static verse(beerNum) {
        let result = "";
        let bottle = "bottles";
        if (beerNum === 1) bottle = "bottle";
        if (beerNum === 0) {
            result += `No more bottles of beer on the wall, no more bottles of beer.`
        } else {
            result += `${beerNum} ${bottle} of beer on the wall, ${beerNum} ${bottle} of beer.`
        }
        beerNum -= 1; 
        if (beerNum === 1) bottle = "bottle";
        if (beerNum === 0) {
            result += `\nTake it down and pass it around, no more bottles of beer on the wall.\n`
        } else if (beerNum === -1) {
            result += `\nGo to the store and buy some more, 99 bottles of beer on the wall.\n`;
        } else {
            result += `\nTake one down and pass it around, ${beerNum} ${bottle} of beer on the wall.\n`;
        }
        return result;
    }

    static verses(start, end) {
        let result = "";
        for (let num = start; num >= end; num -= 1) {
            result += Beer.verse(num) + "\n";
        }
        return result;
    }
}

module.exports = Beer;

let expected = "99 bottles of beer on the wall, 99 bottles of beer.\n" +
"Take one down and pass it around, 98 bottles of beer " +
"on the wall.\n\n98 bottles of beer on the wall, " +
"98 bottles of beer.\nTake one down and pass it " +
"around, 97 bottles of beer on the wall.\n";

console.log(expected);
console.log("////////////////here///////////////");
console.log(Beer.verses(99, 98));
console.log( Beer.verses(99, 98) === expected);
console.log("///////////end//////////")