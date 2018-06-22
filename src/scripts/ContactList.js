//A ContactList component that displays all contacts. It should import the Contact component and the ContactCollection component.
const Contact = require("./Contact")
const ContactCollection = require("./ContactCollection")

let ContactList = ContactCollection.readFromLocalStorage("ContactList")
console.log(ContactList)
// let currentLocalStorage = ContactCollection.readFromLocalStorage
// for (var key in currentLocalStorage) {
//     let c = Contact(currentLocalStorage[key].name, currentLocalStorage[key].phoneNum, currentLocalStorage[key].address);
//     ContactList.push(c)
// }

const mainArticle = document.getElementById("article");
const contactFragment = document.createDocumentFragment()

let addToContact = () => {
ContactList.forEach(item => {
const newDiv = document.createElement("div");
for (i in item) {
    let para = document.createElement("p")
    para.textContent = item[i]
    contactFragment.appendChild(para)
}
mainArticle.appendChild(contactFragment)
})
}




module.exports = {ContactList, addToContact}
