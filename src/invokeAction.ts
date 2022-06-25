import { contactsOperations } from './contacts';

type Action = { action?: string } & {
  id?: string;
  name?: string;
  email?: string;
  phone?: string;
};

export const actionTypes = {
  list: 'list',
  get: 'get',
  add: 'add',
  edit: 'edit',
  remove: 'remove',
};

const { list, get, add, edit, remove } = actionTypes;

export const invokeAction = async ({
  action,
  id,
  name,
  email,
  phone,
}: Action) => {
  switch (action) {
    case list: {
      const contacts = await contactsOperations.listContacts();
      console.table(contacts);
      return contacts;
    }

    case get: {
      const contact = await contactsOperations.getContactById(id);
      console.log({ contact });
      return contact;
    }

    case add: {
      const newContact = { name, email, phone };
      const addedContact = await contactsOperations.addContact(newContact);
      console.log({ newContact });
      return addedContact;
    }

    case edit: {
      const editContact = { id, name, email, phone };
      const updatedContact = await contactsOperations.editContact(editContact);
      console.log({ updatedContact });
      return updatedContact;
    }

    case remove: {
      const removedContact = await contactsOperations.removeContact(id);
      console.log({ removedContact });
      return removedContact;
    }

    default:
      console.warn('\x1B[31m Unknown action type!');
  }
};
