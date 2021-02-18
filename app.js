window.onload = ()=>{
    const addBooksDiv = document.querySelector('.addBooks');
    const viewBooksDiv = document.querySelector('.viewBooks');
    const matIcons = document.querySelector('.material-icons');
    const bookForm = document.querySelector('.bookForm');
    const addBookButton = document.querySelector('.addBookButton');
    const viewBook = document.querySelector('.openLibrary');
    const bookCards = document.querySelector('.bookCards');
    const deleteBook = document.querySelector('.deleteBook');
    
    const books = ['test', 'test1', 'test2', 'test3'];

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
            bookForm.style.display = 'none';
            addBooksDiv.style.display = 'block';
            viewBooksDiv.style.display = 'block';
        })
    }

    const stopFormsDefault = ()=>{
        bookForm.addEventListener('submit', (e)=>{
            e.preventDefault();
            formData()
        })
    }

    const formData = ()=>{
        const title = document.getElementById('title').value;
        const auth = document.getElementById('author').value;
        const pag = document.getElementById('pages').value;
        const read = document.getElementById('read').value;
        const notRead = document.getElementById('notRead').value;

        console.log(title, auth, pag, read, notRead);
    }

    // show saved books as cards//

    const showBookCards = ()=>{
        addBooksDiv.style.display = 'none';
        viewBooksDiv.style.display = 'none';
        bookCards.style.display = 'block';
        removeBook();
    }

    const removeBook = ()=>{
        deleteBook.addEventListener('click', ()=>{
            //code here to remove book fromk books array
            console.log('book delete here')
        })
    }

    class Book {
        constructor(title, author, pages, read){
            this.title = title;
            this.author = author;
            this.pages = pages;
            this.read = read;
        }
    
        addBookToLibrary(){

        //    return {title, author, pages, read}
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

    let testBook = new Book('a', 'b', 'c', 'd');
    let tes2 = new Book('g', 'h', 'i', 'j')
    tes2.addBookToLibrary()
    console.log(testBook.addBookToLibrary())
    console.log(books)
}

