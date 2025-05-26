const myLibrary = [];

function Book(title, author, read) {
    if(!new.target){
        throw Error("You must use the 'new' operator to call the constructor");
    }

this.title = title;
this.author = author;
this.read = read;
};

Book.prototype.bookInfo = function(){
  return this.title + ", " + this.author + ", " + this.read;
};
Book.prototype.bookToggle = function(){
 if(this.read === "Haven't read it yet."){
  return this.read = "I've read this book!"
 }
 if(this.read === "I've read this book!"){
  return this.read = "Haven't read it yet."
 };
}





function addBookToLibrary(title, author, read) {
 let bookObject = new Book(title, author, read);
 bookObject.id = self.crypto.randomUUID();
 myLibrary.push(bookObject);

bookDisplay();
};

function bookDisplay(){
    
  const bookCard = document.createElement("div");
  for (i=0; i < myLibrary.length; i++){
     const bookContent = document.createElement("div")
     bookContent.setAttribute('data-book-id', myLibrary[i].id);

     
     const removeButton = document.createElement("button");
     removeButton.textContent = "Remove";
     removeButton.addEventListener("click", function(){

      bookCard.remove();
      console.log(bookContent.dataset.bookId);
      for(i=0; i < myLibrary.length; i++){
        if(bookContent.dataset.bookId === myLibrary[i].id){
          const index = myLibrary.indexOf(myLibrary[i]);
          myLibrary.splice(index, 1);
        }}
        console.log(myLibrary);

    });

    const readStatus = document.createElement("button");
    readStatus.textContent = "Read status";
    readStatus.addEventListener("click", function(){
      for(i=0; i < myLibrary.length; i++){
        if(bookContent.dataset.bookId === myLibrary[i].id){
          myLibrary[i].bookToggle();
          bookContent.textContent = myLibrary[i].bookInfo();
        }}
      console.log(myLibrary);
    });
  
  
  
  if(myLibrary[i] === myLibrary[myLibrary.length -1]){
   bookContent.textContent = myLibrary[myLibrary.length -1].bookInfo();
   
   display.appendChild(bookCard);
   bookCard.appendChild(bookContent);
   bookCard.appendChild(removeButton);
   bookCard.appendChild(readStatus);
  }
  }
   
    
    
  };

 


const display = document.querySelector("#book-display");

const showButton = document.getElementById("show-dialog");
const bookDialog = document.getElementById("book-dialog");
const titleElement = bookDialog.querySelector("#title");
const authorElement = bookDialog.querySelector("#author");
const haveRead = bookDialog.querySelector("#have-read");
const confirmBtn = bookDialog.querySelector("#confirm-btn");
let readValue = "";

showButton.addEventListener("click", function(){
bookDialog.showModal();
});
bookDialog.addEventListener("close", function(){
  titleElement.value = "";
  authorElement.value = "";
  haveRead.checked = false;
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
    console.log(myLibrary)
}
});





