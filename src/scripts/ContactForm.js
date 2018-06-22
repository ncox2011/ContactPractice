//A ContactForm component that, when filled out and a submit button is pressed, adds a new contact to storage. It should import the ContactCollection component
//build form
//handle submit
//add to storage to local storage
//import contactcollection and export build form
const contactcollection = require("./Contactcollection");
let Contact = require("./Contact")
let ContactList = require("./ContactList")

const ContactForm = (e) => {
    console.log(e)
    e.preventDefault()


const contName = document.getElementById("contName").value
const contPhone = document.getElementById("contPhone").value
const contAddress = document.getElementById("contAddress").value

let newContact = Contact(contName, contPhone, contAddress)

ContactList.ContactList.push(newContact)
    let stuffToSave = ContactList.ContactList
    contactcollection.writeToLocalStorage(stuffToSave, "ContactList")
    ContactList.addToContact()
}

// contactcollection.writeToLocalStorage(ContactList.addToContact)
module.exports = ContactForm;