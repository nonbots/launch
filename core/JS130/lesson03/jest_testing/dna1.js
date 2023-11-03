// calculates distane between two DNA
// returns a number value 

// constructor takes in strand 1 
// hammingDistance takes in strand 2 

// get the shorter length
// if strand1 is greater than stand2
    // assign longer to strand1 
    // assign short to strand2 
// else 
    // assign longer to strand 2
    // assign short to strand1 

// init count
// iterate through the stronger length 
    // if the current chars are not the same 
        // increment count
// return count
class DNA {
    constructor(strand1) {
        this.strand1 = strand1;
        this.longer; 
        this.shorter;
    }

    hammingDistance(strand2) {
        this.setStrands(strand2);
        let count = 0;
        for(let i = 0; i < this.shorter.length; i += 1) {
            let shortChar = this.shorter[i];
            let longChar = this.longer[i];
            if(shortChar != longChar) count += 1;
        }
        return count;   
    }

    setStrands(strand2) {
        if (this.strand1.length > strand2.length) {
            this.longer = this.strand1;
            this.shorter = strand2;
        } else  {
            this.longer = strand2;
            this.shorter = this.strand1;
        }
    }
}


// let dna = new DNA('AAACTAGGGG');
// console.log(dna.hammingDistance('AGGCTAGCGGTAGGAC'));

module.exports = DNA;