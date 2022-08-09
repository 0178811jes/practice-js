/*
1.book1-->100page
2.book2-->200page
3.book3-->300page
*/

function paperRequirment(book1Quantity, book2Quantity, book3Quantity) {
    const perbook1Page = 100;
    const perbook2Page = 200;
    const perbook3Page = 300;

    const book1Page = book1Quantity * perbook1Page;
    const book2Page = book2Quantity * perbook2Page;
    const book3Page = book3Quantity * perbook3Page;

    //console.log(book1Quantity, book2Quantity, book3Quantity);

    const totalPage = book1Page + book2Page + book3Page;
    return totalPage;
}
const totalPage = paperRequirment(5, 10, 15);
console.log('total page requared', totalPage);
