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
Object.defineProperty(exports, "__esModule", { value: true });
exports.invokeAction = exports.actionTypes = void 0;
const contacts_1 = require("./contacts");
exports.actionTypes = {
    list: 'list',
    get: 'get',
    add: 'add',
    edit: 'edit',
    remove: 'remove',
};
const { list, get, add, edit, remove } = exports.actionTypes;
const invokeAction = ({ action, id, name, email, phone, }) => __awaiter(void 0, void 0, void 0, function* () {
    switch (action) {
        case list: {
            const contacts = yield contacts_1.contactsOperations.listContacts();
            console.table(contacts);
            return contacts;
        }
        case get: {
            const contact = yield contacts_1.contactsOperations.getContactById(id);
            console.log({ contact });
            return contact;
        }
        case add: {
            const newContact = { name, email, phone };
            const addedContact = yield contacts_1.contactsOperations.addContact(newContact);
            console.log({ newContact });
            return addedContact;
        }
        case edit: {
            const editContact = { id, name, email, phone };
            const updatedContact = yield contacts_1.contactsOperations.editContact(editContact);
            console.log({ updatedContact });
            return updatedContact;
        }
        case remove: {
            const removedContact = yield contacts_1.contactsOperations.removeContact(id);
            console.log({ removedContact });
            return removedContact;
        }
        default:
            console.warn('\x1B[31m Unknown action type!');
    }
});
exports.invokeAction = invokeAction;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaW52b2tlQWN0aW9uLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiaW52b2tlQWN0aW9uLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7OztBQUFBLHlDQUFnRDtBQVNuQyxRQUFBLFdBQVcsR0FBRztJQUN6QixJQUFJLEVBQUUsTUFBTTtJQUNaLEdBQUcsRUFBRSxLQUFLO0lBQ1YsR0FBRyxFQUFFLEtBQUs7SUFDVixJQUFJLEVBQUUsTUFBTTtJQUNaLE1BQU0sRUFBRSxRQUFRO0NBQ2pCLENBQUM7QUFFRixNQUFNLEVBQUUsSUFBSSxFQUFFLEdBQUcsRUFBRSxHQUFHLEVBQUUsSUFBSSxFQUFFLE1BQU0sRUFBRSxHQUFHLG1CQUFXLENBQUM7QUFFOUMsTUFBTSxZQUFZLEdBQUcsQ0FBTyxFQUNqQyxNQUFNLEVBQ04sRUFBRSxFQUNGLElBQUksRUFDSixLQUFLLEVBQ0wsS0FBSyxHQUNFLEVBQUUsRUFBRTtJQUNYLFFBQVEsTUFBTSxFQUFFO1FBQ2QsS0FBSyxJQUFJLENBQUMsQ0FBQztZQUNULE1BQU0sUUFBUSxHQUFHLE1BQU0sNkJBQWtCLENBQUMsWUFBWSxFQUFFLENBQUM7WUFDekQsT0FBTyxDQUFDLEtBQUssQ0FBQyxRQUFRLENBQUMsQ0FBQztZQUN4QixPQUFPLFFBQVEsQ0FBQztTQUNqQjtRQUVELEtBQUssR0FBRyxDQUFDLENBQUM7WUFDUixNQUFNLE9BQU8sR0FBRyxNQUFNLDZCQUFrQixDQUFDLGNBQWMsQ0FBQyxFQUFFLENBQUMsQ0FBQztZQUM1RCxPQUFPLENBQUMsR0FBRyxDQUFDLEVBQUUsT0FBTyxFQUFFLENBQUMsQ0FBQztZQUN6QixPQUFPLE9BQU8sQ0FBQztTQUNoQjtRQUVELEtBQUssR0FBRyxDQUFDLENBQUM7WUFDUixNQUFNLFVBQVUsR0FBRyxFQUFFLElBQUksRUFBRSxLQUFLLEVBQUUsS0FBSyxFQUFFLENBQUM7WUFDMUMsTUFBTSxZQUFZLEdBQUcsTUFBTSw2QkFBa0IsQ0FBQyxVQUFVLENBQUMsVUFBVSxDQUFDLENBQUM7WUFDckUsT0FBTyxDQUFDLEdBQUcsQ0FBQyxFQUFFLFVBQVUsRUFBRSxDQUFDLENBQUM7WUFDNUIsT0FBTyxZQUFZLENBQUM7U0FDckI7UUFFRCxLQUFLLElBQUksQ0FBQyxDQUFDO1lBQ1QsTUFBTSxXQUFXLEdBQUcsRUFBRSxFQUFFLEVBQUUsSUFBSSxFQUFFLEtBQUssRUFBRSxLQUFLLEVBQUUsQ0FBQztZQUMvQyxNQUFNLGNBQWMsR0FBRyxNQUFNLDZCQUFrQixDQUFDLFdBQVcsQ0FBQyxXQUFXLENBQUMsQ0FBQztZQUN6RSxPQUFPLENBQUMsR0FBRyxDQUFDLEVBQUUsY0FBYyxFQUFFLENBQUMsQ0FBQztZQUNoQyxPQUFPLGNBQWMsQ0FBQztTQUN2QjtRQUVELEtBQUssTUFBTSxDQUFDLENBQUM7WUFDWCxNQUFNLGNBQWMsR0FBRyxNQUFNLDZCQUFrQixDQUFDLGFBQWEsQ0FBQyxFQUFFLENBQUMsQ0FBQztZQUNsRSxPQUFPLENBQUMsR0FBRyxDQUFDLEVBQUUsY0FBYyxFQUFFLENBQUMsQ0FBQztZQUNoQyxPQUFPLGNBQWMsQ0FBQztTQUN2QjtRQUVEO1lBQ0UsT0FBTyxDQUFDLElBQUksQ0FBQywrQkFBK0IsQ0FBQyxDQUFDO0tBQ2pEO0FBQ0gsQ0FBQyxDQUFBLENBQUM7QUEzQ1csUUFBQSxZQUFZLGdCQTJDdkIifQ==