import fs from 'fs/promises';
import { join } from 'path';
import { v4 } from 'uuid';
import './db/contacts.json';

const contactsPath = join(__dirname, './db/contacts.json');

type NewContact = {
  name: string;
  email: string;
  phone: string;
};

type Contact = {
  id: string;
} & NewContact;

type Contacts = Contact[];

/**
 * Replaces content in 'contacts' file with the new stringified array
 */
const updateContacts = async (newContacts: Contacts) => {
  await fs.writeFile(contactsPath, JSON.stringify(newContacts));
};

export const listContacts = async () => {
  const contactsBuffer = await fs.readFile(contactsPath);
  const contacts: Contacts | undefined = await JSON.parse(
    contactsBuffer.toString()
  );
  return !contacts ? [] : contacts;
};

export const addContact = async ({ name, email, phone }: NewContact) => {
  const contacts = await listContacts();

  const newContact = { id: v4(), name, email, phone };
  contacts.push(newContact);

  await updateContacts(contacts);
  return newContact;
};

export const getContactById = async (contactId: string) => {
  const contacts = await listContacts();

  const stringId = contactId + '';
  const contact = contacts.find(item => item.id === stringId);

  if (!contact) {
    throw new Error(`There is no contact with id=${contactId}`);
  }

  return contact;
};

export const editContact = async ({ id, name, email, phone }: Contact) => {
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

export const removeContact = async (id: string) => {
  const contacts = await listContacts();
  const removedContact = contacts.find(contact => contact.id === id);

  if (!removedContact) {
    throw new Error(`There is no contact with id=${id}`);
  }

  const newContacts = contacts.filter(contact => contact.id !== id);
  await updateContacts(newContacts);

  return removedContact;
};
