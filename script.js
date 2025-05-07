const myLibrary = [];

function Book(title, author, read) {
    if(!new.target){
        throw Error("You must use the 'new' operator to call the constructor");
    }

this.title = title;
this.author = author;
this.read = read;

this.bookInfo = function(){
   return this.title + ", " + this.author + ", " + this.read;
};
};




function addBookToLibrary(title, author, read) {

let bookObject = new Book(title, author, read);
bookObject.id = self.crypto.randomUUID();
myLibrary.push(bookObject);




function bookDisplay(){
    
  for (i=0; i < myLibrary.length; i++){
     const bookCard = document.createElement("div")
     bookCard.setAttribute('data-book-id', bookObject.id);
     const removeButton = document.createElement("button");
     removeButton.textContent = "Remove";
     
     removeButton.addEventListener("click", function(){
      bookCard.remove();

      console.log(bookObject);
      const index = myLibrary.indexOf(bookObject);
      myLibrary.splice(index, 1);
    
    });
  
     console.log(bookCard.dataset.bookId);
  
  if(myLibrary[i] === myLibrary[myLibrary.length -1]){
   bookCard.textContent = myLibrary[myLibrary.length -1].bookInfo();
   display.appendChild(bookCard);
   bookCard.appendChild(removeButton);
  }
  }
    console.log(myLibrary);
    
    
  };
bookDisplay();
};



 


const display = document.querySelector("#book-display");


const showButton = document.getElementById("show-dialog");
const bookDialog = document.getElementById("book-dialog");
const titleElement = bookDialog.querySelector("#title");
const authorElement = bookDialog.querySelector("#author");
const haveRead = bookDialog.querySelector("#have-read");
const confirmBtn = bookDialog.querySelector("#confirm-btn");


showButton.addEventListener("click", function(){
bookDialog.showModal();
});
bookDialog.addEventListener("close", function(){
  titleElement.value = "";
  authorElement.value = "";
});

confirmBtn.addEventListener("click", function(event){
  
    if (haveRead.checked) {
      readValue = "I've read this book!"
    }
    else{
      readValue = "Haven't read it yet."
    };

if(titleElement.value === "" || authorElement.value === ""){
  alert("please enter a book title and author.")
  event.preventDefault();
}
else{
    addBookToLibrary(titleElement.value, authorElement.value, readValue);
    event.preventDefault();
    bookDialog.close();
    titleElement.value = "";
    authorElement.value = "";}
});





