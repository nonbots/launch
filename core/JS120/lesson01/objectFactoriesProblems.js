function createBook(title, author, read = false) {
    return {
        title: title,
        author: author,
        read: read, 
        
        getDescription() {
            let bookDescription = `${this.title} was written by ${this.author}.`
            return this.read ? `${bookDescription} I have read it.` : `${bookDescription} I haven't read it.`;
        },
        
        readBook(){
            this.read = true;
        },
        
    };
}


const book1 = createBook("Mythos", "Stephen Fry");
const book2 = createBook("Me Talk Pretty One Day", "David Sedaris");
const book3 = createBook("Aunts aren't Gentlemen", "PG WodeHouse");
console.log(book1);
console.log(book2);
console.log(book3);
book1.readBook();
console.log(book1.read);
console.log(book1.getDescription());
console.log(book2.getDescription());
console.log(book3.getDescription());

