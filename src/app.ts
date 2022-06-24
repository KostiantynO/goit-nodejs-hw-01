import {
  listContacts,
  // addContact,
  // editContact,
  // getContactById,
  // removeContact,
} from './contacts';

(async () => {
  const contacts = await listContacts();
  console.log({ contacts });

  // const newContact = await addContact({
  //   name: 'Mango',
  //   email: 'mango@mail.com',
  //   phone: '0980700700',
  // });
  // console.log({ newContact });
  const id = 'e686e00f-3a28-41fb-b443-9c2474ab29d6';
  // const contact = await getContactById(id);
  // console.log({ contact });

  // const updatedContact = await editContact({
  //   id,
  //   name: 'Kiwi',
  //   email: 'kiwi@mail.com',
  //   phone: '0980123456',
  // });
  // console.log({ updatedContact });

  // const removedContact = await removeContact(id);
  // console.log({ removedContact });
})();
