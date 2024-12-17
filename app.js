document.addEventListener('DOMContentLoaded', function () {

    //delete books
   const list = document.querySelector('#book-list ul');
   list.addEventListener('click', function(e){
    if(e.target.className=='delete'){
        let li = e.target.parentElement;
        list.removeChild(li);
    }
   });

   //add books
   const addBooks = document.forms['add-book'];
   addBooks.addEventListener('submit', function(e){
    e.preventDefault();
    var input_val = document.getElementById('addbook').value;

    //create elements
    let li = document.createElement('li');
    let bookName = document.createElement('span');
    let deleteBtn = document.createElement('span');

    //add text content to the elements
    
    if(input_val != ""){
    bookName.textContent = input_val;
    deleteBtn.textContent = 'delete';

    bookName.classList.add('name');
    deleteBtn.classList.add('delete');

    //append elements to DOM
    li.appendChild(bookName);
    li.appendChild(deleteBtn);
    list.appendChild(li);
    }else{
        alert("Plese fill out the form!!")
    }
 
    document.getElementById('addbook').value = "";

   })


   //filter books
   const searchBar = document.forms['search-books'];
   searchBar.addEventListener('keyup', function(e){
    const term = e.target.value.toLowerCase();
    const books = list.getElementsByTagName('li');
    Array.from(books).forEach(function(book){
        const title = book.firstElementChild.textContent;
        if(title.toLowerCase().indexOf(term)!=-1){
            book.style.display = 'flex';
        }else{
            book.style.display = 'none';
        }
    });

   });


});
