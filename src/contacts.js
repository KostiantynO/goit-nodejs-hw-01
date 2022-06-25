"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.contactsOperations = void 0;
const promises_1 = __importDefault(require("fs/promises"));
const path_1 = require("path");
const uuid_1 = require("uuid");
require("./db/contacts.json");
const contactsPath = (0, path_1.join)(__dirname, './db/contacts.json');
const updateContacts = (newContacts) => __awaiter(void 0, void 0, void 0, function* () {
    yield promises_1.default.writeFile(contactsPath, JSON.stringify(newContacts));
});
const listContacts = () => __awaiter(void 0, void 0, void 0, function* () {
    const contactsBuffer = yield promises_1.default.readFile(contactsPath);
    const contacts = yield JSON.parse(contactsBuffer.toString());
    return !contacts ? [] : contacts;
});
const addContact = ({ name, email, phone }) => __awaiter(void 0, void 0, void 0, function* () {
    if (!name || !email || !phone) {
        throw new Error('addContact expects name, email and phone');
    }
    const contacts = yield listContacts();
    const newContact = { id: (0, uuid_1.v4)(), name, email, phone };
    contacts.push(newContact);
    yield updateContacts(contacts);
    return newContact;
});
const getContactById = (contactId) => __awaiter(void 0, void 0, void 0, function* () {
    if (!contactId) {
        throw new Error('contactId is required for getContactById!');
    }
    const contacts = yield listContacts();
    const stringId = contactId + '';
    const contact = contacts.find(item => item.id === stringId);
    if (!contact) {
        throw new Error(`There is no contact with id=${contactId}`);
    }
    return contact;
});
const editContact = ({ id, name, email, phone }) => __awaiter(void 0, void 0, void 0, function* () {
    if (!id) {
        throw new Error('editContact expects contactId');
    }
    const contacts = yield listContacts();
    const stringId = id + '';
    const idx = contacts.findIndex(contact => contact.id === stringId);
    if (idx === -1) {
        throw new Error(`There is no contact with id=${id}`);
    }
    const prevContact = contacts[idx];
    const updatedContact = Object.assign(Object.assign({}, prevContact), { name, email, phone });
    contacts[idx] = updatedContact;
    yield updateContacts(contacts);
    return updatedContact;
});
const removeContact = (id) => __awaiter(void 0, void 0, void 0, function* () {
    if (!id) {
        throw new Error('removeContact expects contactId');
    }
    const contacts = yield listContacts();
    const removedContact = contacts.find(contact => contact.id === id);
    if (!removedContact) {
        throw new Error(`There is no contact with id=${id}`);
    }
    const newContacts = contacts.filter(contact => contact.id !== id);
    yield updateContacts(newContacts);
    return removedContact;
});
exports.contactsOperations = {
    listContacts,
    addContact,
    getContactById,
    editContact,
    removeContact,
};
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY29udGFjdHMuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyJjb250YWN0cy50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7QUFBQSwyREFBNkI7QUFDN0IsK0JBQTRCO0FBQzVCLCtCQUEwQjtBQUMxQiw4QkFBNEI7QUFFNUIsTUFBTSxZQUFZLEdBQUcsSUFBQSxXQUFJLEVBQUMsU0FBUyxFQUFFLG9CQUFvQixDQUFDLENBQUM7QUFpQjNELE1BQU0sY0FBYyxHQUFHLENBQU8sV0FBcUIsRUFBRSxFQUFFO0lBQ3JELE1BQU0sa0JBQUUsQ0FBQyxTQUFTLENBQUMsWUFBWSxFQUFFLElBQUksQ0FBQyxTQUFTLENBQUMsV0FBVyxDQUFDLENBQUMsQ0FBQztBQUNoRSxDQUFDLENBQUEsQ0FBQztBQUVGLE1BQU0sWUFBWSxHQUFHLEdBQVMsRUFBRTtJQUM5QixNQUFNLGNBQWMsR0FBRyxNQUFNLGtCQUFFLENBQUMsUUFBUSxDQUFDLFlBQVksQ0FBQyxDQUFDO0lBQ3ZELE1BQU0sUUFBUSxHQUF5QixNQUFNLElBQUksQ0FBQyxLQUFLLENBQ3JELGNBQWMsQ0FBQyxRQUFRLEVBQUUsQ0FDMUIsQ0FBQztJQUNGLE9BQU8sQ0FBQyxRQUFRLENBQUMsQ0FBQyxDQUFDLEVBQUUsQ0FBQyxDQUFDLENBQUMsUUFBUSxDQUFDO0FBQ25DLENBQUMsQ0FBQSxDQUFDO0FBRUYsTUFBTSxVQUFVLEdBQUcsQ0FBTyxFQUFFLElBQUksRUFBRSxLQUFLLEVBQUUsS0FBSyxFQUFjLEVBQUUsRUFBRTtJQUM5RCxJQUFJLENBQUMsSUFBSSxJQUFJLENBQUMsS0FBSyxJQUFJLENBQUMsS0FBSyxFQUFFO1FBQzdCLE1BQU0sSUFBSSxLQUFLLENBQUMsMENBQTBDLENBQUMsQ0FBQztLQUM3RDtJQUVELE1BQU0sUUFBUSxHQUFHLE1BQU0sWUFBWSxFQUFFLENBQUM7SUFFdEMsTUFBTSxVQUFVLEdBQUcsRUFBRSxFQUFFLEVBQUUsSUFBQSxTQUFFLEdBQUUsRUFBRSxJQUFJLEVBQUUsS0FBSyxFQUFFLEtBQUssRUFBRSxDQUFDO0lBQ3BELFFBQVEsQ0FBQyxJQUFJLENBQUMsVUFBVSxDQUFDLENBQUM7SUFFMUIsTUFBTSxjQUFjLENBQUMsUUFBUSxDQUFDLENBQUM7SUFDL0IsT0FBTyxVQUFVLENBQUM7QUFDcEIsQ0FBQyxDQUFBLENBQUM7QUFFRixNQUFNLGNBQWMsR0FBRyxDQUFPLFNBQXVDLEVBQUUsRUFBRTtJQUN2RSxJQUFJLENBQUMsU0FBUyxFQUFFO1FBQ2QsTUFBTSxJQUFJLEtBQUssQ0FBQywyQ0FBMkMsQ0FBQyxDQUFDO0tBQzlEO0lBRUQsTUFBTSxRQUFRLEdBQUcsTUFBTSxZQUFZLEVBQUUsQ0FBQztJQUV0QyxNQUFNLFFBQVEsR0FBRyxTQUFTLEdBQUcsRUFBRSxDQUFDO0lBQ2hDLE1BQU0sT0FBTyxHQUFHLFFBQVEsQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLEVBQUUsQ0FBQyxJQUFJLENBQUMsRUFBRSxLQUFLLFFBQVEsQ0FBQyxDQUFDO0lBRTVELElBQUksQ0FBQyxPQUFPLEVBQUU7UUFDWixNQUFNLElBQUksS0FBSyxDQUFDLCtCQUErQixTQUFTLEVBQUUsQ0FBQyxDQUFDO0tBQzdEO0lBRUQsT0FBTyxPQUFPLENBQUM7QUFDakIsQ0FBQyxDQUFBLENBQUM7QUFFRixNQUFNLFdBQVcsR0FBRyxDQUFPLEVBQUUsRUFBRSxFQUFFLElBQUksRUFBRSxLQUFLLEVBQUUsS0FBSyxFQUFXLEVBQUUsRUFBRTtJQUNoRSxJQUFJLENBQUMsRUFBRSxFQUFFO1FBQ1AsTUFBTSxJQUFJLEtBQUssQ0FBQywrQkFBK0IsQ0FBQyxDQUFDO0tBQ2xEO0lBRUQsTUFBTSxRQUFRLEdBQUcsTUFBTSxZQUFZLEVBQUUsQ0FBQztJQUN0QyxNQUFNLFFBQVEsR0FBRyxFQUFFLEdBQUcsRUFBRSxDQUFDO0lBQ3pCLE1BQU0sR0FBRyxHQUFHLFFBQVEsQ0FBQyxTQUFTLENBQUMsT0FBTyxDQUFDLEVBQUUsQ0FBQyxPQUFPLENBQUMsRUFBRSxLQUFLLFFBQVEsQ0FBQyxDQUFDO0lBQ25FLElBQUksR0FBRyxLQUFLLENBQUMsQ0FBQyxFQUFFO1FBQ2QsTUFBTSxJQUFJLEtBQUssQ0FBQywrQkFBK0IsRUFBRSxFQUFFLENBQUMsQ0FBQztLQUN0RDtJQUVELE1BQU0sV0FBVyxHQUFHLFFBQVEsQ0FBQyxHQUFHLENBQUMsQ0FBQztJQUNsQyxNQUFNLGNBQWMsbUNBQVEsV0FBVyxHQUFLLEVBQUUsSUFBSSxFQUFFLEtBQUssRUFBRSxLQUFLLEVBQUUsQ0FBRSxDQUFDO0lBRXJFLFFBQVEsQ0FBQyxHQUFHLENBQUMsR0FBRyxjQUFjLENBQUM7SUFDL0IsTUFBTSxjQUFjLENBQUMsUUFBUSxDQUFDLENBQUM7SUFFL0IsT0FBTyxjQUFjLENBQUM7QUFDeEIsQ0FBQyxDQUFBLENBQUM7QUFFRixNQUFNLGFBQWEsR0FBRyxDQUFPLEVBQXNCLEVBQUUsRUFBRTtJQUNyRCxJQUFJLENBQUMsRUFBRSxFQUFFO1FBQ1AsTUFBTSxJQUFJLEtBQUssQ0FBQyxpQ0FBaUMsQ0FBQyxDQUFDO0tBQ3BEO0lBRUQsTUFBTSxRQUFRLEdBQUcsTUFBTSxZQUFZLEVBQUUsQ0FBQztJQUN0QyxNQUFNLGNBQWMsR0FBRyxRQUFRLENBQUMsSUFBSSxDQUFDLE9BQU8sQ0FBQyxFQUFFLENBQUMsT0FBTyxDQUFDLEVBQUUsS0FBSyxFQUFFLENBQUMsQ0FBQztJQUVuRSxJQUFJLENBQUMsY0FBYyxFQUFFO1FBQ25CLE1BQU0sSUFBSSxLQUFLLENBQUMsK0JBQStCLEVBQUUsRUFBRSxDQUFDLENBQUM7S0FDdEQ7SUFFRCxNQUFNLFdBQVcsR0FBRyxRQUFRLENBQUMsTUFBTSxDQUFDLE9BQU8sQ0FBQyxFQUFFLENBQUMsT0FBTyxDQUFDLEVBQUUsS0FBSyxFQUFFLENBQUMsQ0FBQztJQUNsRSxNQUFNLGNBQWMsQ0FBQyxXQUFXLENBQUMsQ0FBQztJQUVsQyxPQUFPLGNBQWMsQ0FBQztBQUN4QixDQUFDLENBQUEsQ0FBQztBQUVXLFFBQUEsa0JBQWtCLEdBQUc7SUFDaEMsWUFBWTtJQUNaLFVBQVU7SUFDVixjQUFjO0lBQ2QsV0FBVztJQUNYLGFBQWE7Q0FDZCxDQUFDIn0=