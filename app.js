window.onload = ()=>{
    const addBooksDiv = document.querySelector('.addBooks');
    const viewBooksDiv = document.querySelector('.viewBooks');
    const matIcons = document.querySelector('.material-icons');
    const bookForm = document.querySelector('.bookForm');
    const formBks = document.querySelector('.booksToAdd');
    const addBookButton = document.querySelector('.addBookButton');
    const viewBook = document.querySelector('.openLibrary');
    const bookCards = document.querySelector('.bookCards');
    const cardCont = document.querySelector('.cardContainer');
    const title1 = document.querySelector('.title1');
    const auth = document.querySelector('.auth')
    const pags = document.querySelector('.pags');
    const readIt = document.querySelector('.readIt');
    const deleteBook = document.querySelector('.deleteBook');
    
    // array to hold books 
    const books = [];

    //open form to add books//

    const bookFormShow = ()=>{
        addBooksDiv.style.display = 'none';
        viewBooksDiv.style.display = 'none';
        bookForm.style.display = 'block';
        closeForm();
        stopFormsDefault();
    }

    const closeForm = ()=>{
        matIcons.addEventListener('click', ()=>{
            console.log('clicked')
            bookForm.style.display = 'none';
            bookCards.style.display = 'none';
            addBooksDiv.style.display = 'block';
            viewBooksDiv.style.display = 'block';
        })
    }

    const stopFormsDefault = ()=>{
        bookForm.addEventListener('submit', (e)=>{
            e.preventDefault();
            formData();
            formBks.reset();
        })
    }

    const formData = ()=>{
        const title = document.getElementById('title').value;
        const auth = document.getElementById('author').value;
        const pag = document.getElementById('pages').value;
        
        let radValue = getRadioButtonChecked();

        console.log(title, auth, pag, radValue);

        return passFormdataToClassBook({title, auth, pag, radValue});
    }

    const getRadioButtonChecked = ()=>{
        const radButs = document.querySelectorAll('input[type=radio]');
        let read_notRead;
        for(let i=0; i<radButs.length; i++){
            if(radButs[i].checked){
                read_notRead = radButs[i].value;
            }
        }
        return read_notRead;
    }

    const passFormdataToClassBook = (obj)=>{
        console.log(obj)
        const passed = new Book(obj.title, obj.auth, obj.pag, obj.radValue);
        console.log(passed)
        if(passed.title && passed.author !== ''){
            passed.addBookToLibrary();
        }else{
            return;
        }
        
    }

    // saved cards//
    const passBooksToCardClass = ()=>{
        console.log('hello world')
        closeForm();
    }


    const showBookCards = ()=>{
        addBooksDiv.style.display = 'none';
        viewBooksDiv.style.display = 'none';
        if(books.length === 0){
            alert('You do not have any books stored in your library. Please add books');
            addBooksDiv.style.display = 'block';
            viewBooksDiv.style.display = 'block';
        }else {
            bookCards.style.display = 'grid';
            bookCards.style.gridTemplateColumns = `repeat(3, 1fr)`;
            bookCards.style.gridTemplateRows = `1fr`;// this all works but i need to sort the background out and border
            passBooksToCardClass();
        }
    }

    const bookSlideShow = (arr)=>{

    }

    const removeBook = ()=>{
        deleteBook.addEventListener('click', ()=>{
            //code here to remove book fromk books array
            console.log('book delete here')
        })
    }

    // classes //
    class Book {
        constructor(title, author, pages, read){
            this.title = title;
            this.author = author;
            this.pages = pages;
            this.read = read;
        }
    
        addBookToLibrary(){
            return books.push(this);
        }
    }

    class Card {
        constructor(title, author, pages){
            this.title = title;
            this.author = author;
            this.pages = pages;
        }
    }

    // events to fire functions
    addBookButton.addEventListener('click', bookFormShow);
    viewBook.addEventListener('click', showBookCards);

   
    console.log()
    console.log(books)
}

