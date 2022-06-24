const {
  listContacts,
  // getContactById,
  // removeContact,
  // addContact,
  // editContact,
} = require('./contacts');

(async () => {
  const contacts = await listContacts();
  console.log({ contacts });

  // const newContact = await addContact('Mango', 'mango@mail.com', '0980700700');
  // console.log({ newContact });

  // const id = '65956464-67d3-4735-b2cd-0d3823dd0961';
  // const contact = await getContactById(id);

  // console.log({ contact });

  // const updateName = 'Kiwi';
  // const updateEmail = 'kiwi@mail.com';
  // const updatePhone = '0980123456';

  // const updatedContact = await editContact(
  //   id,
  //   updateName,
  //   updateEmail,
  //   updatePhone
  // );
  // console.log({ updatedContact });

  // const removedContact = await removeContact(id);
  // console.log({ removedContact });
})();
