let books = [];

function addBook(){
    // Data collection
    const bookName = document.getElementById('bookName').value ;
    const authorName = document.getElementById('authorName').value ;
    const bookDescription = document.getElementById('bookDescription').value ;
    const pagesNumber = document.getElementById('pagesNumber').value ;
    // Data validation and Object creation
    if (bookName && authorName && bookDescription && !isNaN(pagesNumber)){
        const book = {
            name: bookName,
            author: authorName,
            description: bookDescription,
            pagesNumber: pagesNumber
        };
        // Display and Clear inputs
        books.push(book);
        showbooks();
        clearInputs();
    }
    else {
        alert("Please fill in all fields correctly");
    }
}

function showbooks() {
    const booksDiv = books.map((book, index) => `<h1>book Number: ${index + 1}</h1>
    <p><strong>Book Name: </strong>${book.name}</p>
    <p><strong>Author Name:</strong> ${book.author} </p>
    <p><strong>Book Description:</strong> ${book.description}</p>
    <p><strong>No. of Pages:</strong> ${book.pagesNumber} mins</p>`);
    document.getElementById('books').innerHTML = booksDiv;}

function clearInputs() {
    document.getElementById('bookName').value = '';
    document.getElementById('authorName').value = '';
    document.getElementById('bookDescription').value = '';
    document.getElementById('pagesNumber').value = '';}