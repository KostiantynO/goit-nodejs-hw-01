const fs = require('fs/promises');
const path = require('path');
const { v4 } = require('uuid');
const contactsPath = path.join(__dirname, './db/contacts.json');

/**
 * Replaces content in 'contacts' file with the new stringified array
 * @param {Array<{id:string, name:string, email:string, phone:string}>} newContacts
 */
const updateContacts = async newContacts => {
  await fs.writeFile(contactsPath, JSON.stringify(newContacts));
};

/**
 * @returns {Array<{id:string, name:string, email:string, phone:string}> | []}
 */
const listContacts = async () => {
  const contactsBuffer = await fs.readFile(contactsPath);
  const contacts = await JSON.parse(contactsBuffer);
  return !contacts ? [] : contacts;
};

/**
 * @param {string} name
 * @param {string} email
 * @param {string} phone
 * @returns {{id:string, name:string, email:string, phone:string} | Error} newContact
 */
const addContact = async (name, email, phone) => {
  const contacts = await listContacts();

  const newContact = { id: v4(), name, email, phone };
  contacts.push(newContact);

  await updateContacts(contacts);

  return newContact;
};

/**
 * @param {string} contactId
 * @returns {{id:string, name:string, email:string, phone:string} | Error} contact
 */
const getContactById = async contactId => {
  const contacts = await listContacts();

  const stringId = contactId + '';
  const contact = contacts.find(item => item.id === stringId);

  if (!contact) {
    throw new Error(`There is no contact with id=${contactId}`);
  }

  return contact;
};

/**
 * @param {string} contactId
 * @param {string} name
 * @param {string} email
 * @param {string} phone
 * @returns {{id:string, name:string, email:string, phone:string} | Error} updatedContact
 */
const editContact = async (contactId, name, email, phone) => {
  const contacts = await listContacts();
  const idx = contacts.findIndex(({ id }) => id === contactId);
  if (idx === -1) {
    throw new Error(`There is no contact with id=${contactId}`);
  }

  const prevContact = contacts[idx];
  const updatedContact = { ...prevContact, ...{ name, email, phone } };

  contacts[idx] = updatedContact;
  await updateContacts(contacts);

  return updatedContact;
};

/**
 *
 * @param {string} contactId
 * @returns {{id:string, name:string, email:string, phone:string} | Error} removedContact
 */
const removeContact = async contactId => {
  const contacts = await listContacts();
  const removedContact = contacts.find(({ id }) => id === contactId);

  if (!removedContact) {
    throw new Error(`There is no contact with id=${contactId}`);
  }

  const newContacts = contacts.filter(({ id }) => id !== contactId);
  await updateContacts(newContacts);

  return removedContact;
};

module.exports = {
  listContacts,
  addContact,
  getContactById,
  editContact,
  removeContact,
};
