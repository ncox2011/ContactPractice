//import contactList
//contact form -buildform()
const contactList = require("./ContactList")
const ContactForm = require("./ContactForm")

contactList.addToContact()

document.addEventListener("submit", ContactForm)


