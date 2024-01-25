/*
Tasks are written in the comments below.
 */
//??
let log = console.log;//??
const books = [{
        title: '1984',
        author: 'George Orwell',
        published: 1949
    },{
        title: 'Brave New World',
        author: 'Aldous Huxley',
        published: 1932
    },{
        title: 'Harry Potter and the Philosopher\'s Stone',
        author: 'J.K. Rowling',
        published: 1997
    },{
        title: 'Harry Potter and the Chamber of Secrets',
        author: 'J.K. Rowling',
        published: 1998
    },{
        title: 'Harry Potter and the Prisoner of Azkaban',
        author: 'J.K. Rowling',
        published: 1999
    }];


//Task: search all books from author Rowling
let criteria="J.K. Rowling";//??
log(`\nSearch all books from author ${criteria}: `);//??
let filter1 = books.filter((book) => book.author === criteria);//??
log(filter1);

//Task: search all books published before 1960
criteria=1960;//??
log(`\nSearch all books published before ${criteria}: `);//??
filter1 = books.filter((book) => book.published < 1960);//??
log(filter1);
//??
//??

//Task: search the first book with title "Brave New World"
criteria="Brave New World";//??
log(`\nSearch the first book with title ${criteria}: `);//??
filter1 = books.find((book) => book.title === 'Brave New World');//??
log(filter1);
//??
//??
//??
