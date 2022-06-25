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
const commander_1 = require("commander");
const invokeAction_1 = require("./invokeAction");
const program = new commander_1.Command();
program
    .option('-a, --action <type>', 'choose action')
    .option('-i, --id <type>', 'user id')
    .option('-n, --name <type>', 'user name')
    .option('-e, --email <type>', 'user email')
    .option('-p, --phone <type>', 'user phone');
program.parse(process.argv);
const argv = program.opts();
console.log({ argv });
(() => __awaiter(void 0, void 0, void 0, function* () { return yield (0, invokeAction_1.invokeAction)(argv); }))();
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYXBwLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiYXBwLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7O0FBQUEseUNBQW9DO0FBQ3BDLGlEQUE4QztBQUM5QyxNQUFNLE9BQU8sR0FBRyxJQUFJLG1CQUFPLEVBQUUsQ0FBQztBQUU5QixPQUFPO0tBQ0osTUFBTSxDQUFDLHFCQUFxQixFQUFFLGVBQWUsQ0FBQztLQUM5QyxNQUFNLENBQUMsaUJBQWlCLEVBQUUsU0FBUyxDQUFDO0tBQ3BDLE1BQU0sQ0FBQyxtQkFBbUIsRUFBRSxXQUFXLENBQUM7S0FDeEMsTUFBTSxDQUFDLG9CQUFvQixFQUFFLFlBQVksQ0FBQztLQUMxQyxNQUFNLENBQUMsb0JBQW9CLEVBQUUsWUFBWSxDQUFDLENBQUM7QUFFOUMsT0FBTyxDQUFDLEtBQUssQ0FBQyxPQUFPLENBQUMsSUFBSSxDQUFDLENBQUM7QUFDNUIsTUFBTSxJQUFJLEdBQUcsT0FBTyxDQUFDLElBQUksRUFBRSxDQUFDO0FBQzVCLE9BQU8sQ0FBQyxHQUFHLENBQUMsRUFBRSxJQUFJLEVBQUUsQ0FBQyxDQUFDO0FBRXRCLENBQUMsR0FBUyxFQUFFLGtEQUFDLE9BQUEsTUFBTSxJQUFBLDJCQUFZLEVBQUMsSUFBSSxDQUFDLENBQUEsR0FBQSxDQUFDLEVBQUUsQ0FBQyJ9