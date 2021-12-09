const fs = require('fs/promises')
const path = require('path')
const crypto = require('crypto')

const readContent = async () => {
  const content = await fs.readFile(
    path.join(__dirname, 'db', 'contacts.json'),
    'utf8',
  )
  const result = JSON.parse(content)
  return result
}

const listContacts = async () => {
  return await readContent()
}

const getContactById = async (contactId) => {
  const contacts = await readContent()
  const [contact] = contacts.filter((contact) => contact.id === contactId)
  return contact
}

function removeContact(contactId) {
  // ...твой код
}

const addContact = async (name, email, phone) => {
  const contacts = await readContent()
  const newContact = { name, email, phone, id: crypto.randomUUID() }
  contacts.push(newContact)
  await fs.writeFile(
    path.join(__dirname, 'db', 'contacts.json'),
    JSON.stringify(contacts, null, 2),
  )
  return newContact
}

module.exports = { listContacts, getContactById, removeContact, addContact }
