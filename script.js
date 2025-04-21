const myLibrary = [];

function Book(title, author, read) {
    if(!new.target){
        throw Error("You must use the 'new' operator to call the constructor");
    }

this.title = title;
this.author = author;
this.read = read;

this.bookInfo = function(){
    return this.title + this.author + this.read;
};
};




function addBookToLibrary() {

   
    const usersNewBook = new Book('Jurassic Park, ', 'Michael Crichton, ', 'have read');
    

    usersNewBook.id = self.crypto.randomUUID();

    myLibrary.push(usersNewBook.bookInfo());
    
    console.log(usersNewBook);
};

addBookToLibrary();

console.log(myLibrary);

