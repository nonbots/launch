class CustomSet {
    constructor(array = []) {
        this.array = array;
    }
    isEmpty(){
        return this.array.length === 0;
    }
    contains(val) {
        return this.array.some(num => num === val);
    }
    // all nums in this set is in the other set 
    isSubset(anotherSet) {
        // iterate through this set 
            // check if current val in this set is not included in the other set 
                // return false 
        // return true
        for (let i = 0; i < this.array.length; i += 1) {
            if (!(anotherSet.contains(this.array[i]))) return false;
        }
        return true;
    }
    // returns true if this array contains no numbers that in the other set
    isDisjoint(anotherSet) {
        for (let i = 0; i < this.array.length; i += 1) {
            // current val exist in other set 
            if ((anotherSet.contains(this.array[i]))) return false;
        }
        return true;
    }
    isSame(anotherSet) {
        if (this.array.length != anotherSet.array.length) return false;
        for (let i = 0; i < this.array.length; i += 1) {
            if(!(anotherSet.contains(this.array[i]))) return false;
        }
        return true;
    }

    add(val) {
        if(!(this.contains(val))) this.array.push(val);
        return this;
    }
    // returns an object with array refer to vals  that both sets share
    intersection(anotherSet) {
        let set = new CustomSet();
        for(let i = 0; i < this.array.length; i += 1) {

            if (anotherSet.contains(this.array[i])) {
                // console.log("INCLUDED", this.array[i]);
                set.add(this.array[i]);
            }
        }
        // console.log("SET", set);
        return set;
    }
    // returns new object of only nums in this set 
    difference(anotherSet) {
        let set = new CustomSet();
        for(let i = 0; i < this.array.length; i += 1) {

            if (!(anotherSet.contains(this.array[i]))) {
                // console.log("NOTINCLUDED", this.array[i]);
                set.add(this.array[i]);
            }
        }
        // console.log("SET", set);
        return set;
    }
    // returns a new object with elements in either set
    union(anotherSet) {
        let set = new CustomSet();
        for(let i = 0; i < this.array.length; i += 1) {
                set.add(this.array[i]);
        }
        for(let i = 0; i < anotherSet.array.length; i += 1) {
            if (!(set.contains(anotherSet.array[i]))) {
                // console.log("NOTINCLUDED", this.array[i]);
                set.add(anotherSet.array[i]);
            }
        }
        // console.log("SET", set);
        return set;
    }
} 


module.exports = CustomSet;