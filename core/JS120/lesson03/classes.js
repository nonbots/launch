/*
What do we mean when we say that classes are first-class values?
1. They can be assigned to a variable
2. They can passed into a function
3. They can be returned from a function
4. They can be used anywhere a value is expected
*/

/*
Consider the following class declaration:
What does the static modifier do? How would we call the method manufacturer?
*/

class Television {
    static manufacturer() {
        // omitted code
    }

    model() {
        // method logic
    }
}

/*
The static modifier stores the method in the class and thus the static method is acessible from the class and thus is called from the class which is Televison.manufacturer()
*/
