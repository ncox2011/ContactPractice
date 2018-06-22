//A ContactCollection component that loads existing contacts from storage, and saves new ones. Each new contact should have an auto-generated identifier.
const ContactCollection = {
    readFromLocalStorage: (localStorageKey) => {
    let databaseString = localStorage.getItem(localStorageKey)
    if (databaseString) {
        return JSON.parse(databaseString);
} else {
    return []
}
},
 writeToLocalStorage: (contactObj, localStorageKey) => {
    const stringifiedDatabase = JSON.stringify(contactObj)
    localStorage.setItem(localStorageKey, stringifiedDatabase)
 }
}
module.exports = ContactCollection;



