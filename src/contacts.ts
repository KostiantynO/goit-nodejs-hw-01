import fs from 'fs/promises';
import { join } from 'path';
import { v4 } from 'uuid';
import './db/contacts.json';

const contactsPath = join(__dirname, './db/contacts.json');

export type NewContact = {
  name: string | undefined;
  email: string | undefined;
  phone: string | undefined;
};

export type Contact = {
  id: string | undefined;
} & NewContact;

export type Contacts = Contact[];

/**
 * Replaces content in 'contacts' file with the new stringified array
 */
const updateContacts = async (newContacts: Contacts) => {
  await fs.writeFile(contactsPath, JSON.stringify(newContacts));
};

const listContacts = async () => {
  const contactsBuffer = await fs.readFile(contactsPath);
  const contacts: Contacts | undefined = await JSON.parse(
    contactsBuffer.toString()
  );
  return !contacts ? [] : contacts;
};

const addContact = async ({ name, email, phone }: NewContact) => {
  if (!name || !email || !phone) {
    throw new Error('addContact expects name, email and phone');
  }

  const contacts = await listContacts();

  const newContact = { id: v4(), name, email, phone };
  contacts.push(newContact);

  await updateContacts(contacts);
  return newContact;
};

const getContactById = async (contactId?: string | number | undefined) => {
  if (!contactId) {
    throw new Error('contactId is required for getContactById!');
  }

  const contacts = await listContacts();

  const stringId = contactId + '';
  const contact = contacts.find(item => item.id === stringId);

  if (!contact) {
    throw new Error(`There is no contact with id=${contactId}`);
  }

  return contact;
};

const editContact = async ({ id, name, email, phone }: Contact) => {
  if (!id) {
    throw new Error('editContact expects contactId');
  }

  const contacts = await listContacts();
  const stringId = id + '';
  const idx = contacts.findIndex(contact => contact.id === stringId);
  if (idx === -1) {
    throw new Error(`There is no contact with id=${id}`);
  }

  const prevContact = contacts[idx];
  const updatedContact = { ...prevContact, ...{ name, email, phone } };

  contacts[idx] = updatedContact;
  await updateContacts(contacts);

  return updatedContact;
};

const removeContact = async (id: string | undefined) => {
  if (!id) {
    throw new Error('removeContact expects contactId');
  }

  const contacts = await listContacts();
  const removedContact = contacts.find(contact => contact.id === id);

  if (!removedContact) {
    throw new Error(`There is no contact with id=${id}`);
  }

  const newContacts = contacts.filter(contact => contact.id !== id);
  await updateContacts(newContacts);

  return removedContact;
};

export const contactsOperations = {
  listContacts,
  addContact,
  getContactById,
  editContact,
  removeContact,
};
