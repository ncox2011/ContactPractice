//A Contact component that displays a person's name, phone number, and address.

const idGenerator = function* (startFrom = 0) {
    let newId = 1
    while (true) {
        yield startFrom + newId
        newId++
    }
}
const uuidMaker = idGenerator()

let createContact = (contName, contPhone, contAddress) => {
    const contact = Object.create({}, {
        id: {
            value: uuidMaker.next().value
        },
        name: {
            value: contName,
            writable: true,
            enumerable: true
        },
        phoneNum: {
            value: contPhone,
            writable: true,
            enumerable: true
        },
        address: {
            value: contAddress,
            writable: true,
            enumerable: true
        }
    })
    return contact
}


module.exports = createContact


console.log("hello")