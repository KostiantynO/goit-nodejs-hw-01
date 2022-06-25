### Шаг 1

- [x] Инициализируй npm в проекте
- [x] В корне проекта создай файл index.js
- [x] Поставь пакет nodemon как зависимость разработки (devDependencies)
- [x] В файле package.json добавь "скрипты" для запуска index.js
- [x] Скрипт start который запускает index.js с помощью node
- [x] Скрипт start:dev который запускает index.js с помощью nodemon

```shell
npm init -y
code index.js
code .gitignore

yarn add -D nodemon prettier eslint
yarn add -D typescript @types/node rimraf
yarn create @eslint/config
npx mrm@2 lint-staged # and remove package.lock
yarn add -D eslint-config-prettier eslint-plugin-prettier
```

### Шаг 2

- [x] В корне проекта создай папку db. Для хранения контактов скачай и используй
      файл contacts.json, положив его в папку db.

- [x] В корне проекта создай файл contacts.js:
  - [x] Сделай импорт модулей fs и path для работы с файловой системой
  - [x] Создай переменную contactsPath и запиши в нее путь к файлу
        contacts.json. Для составления пути используй методы модуля path.
  - [x] Добавь функции для работы с коллекцией контактов. В функциях используй
        модуль fs и его методы readFile() и writeFile()
  - [x] Сделай экспорт созданных функций через module.exports

### Шаг 3

- [x] Сделай импорт модуля contacts.js в файле index.js
- [x] и проверь работоспособность функций для работы с контактами.

### Шаг 4

- [ ] В файле index.js импортируется пакет yargs для удобного парса аргументов
      командной строки. Используй готовую функцию invokeAction() которая
      получает тип выполняемого действия и необходимые аргументы. Функция
      вызывает соответствующий метод из файла contacts.js передавая ему
      необходимые аргументы.

```json
{
  "build": "rimraf ./dist && tsc",
  "start": "npm run build && node dist/app.js"
}
```

### Шаг 5

Запусти команды в терминале и сделай отдельный скриншот результата выполнения
каждой команды.

```shell
# Получаем и выводим весь список контактов в виде таблицы (console.table)
node index.js --action list

# Получаем контакт по id
node index.js --action get --id 5

# Добавялем контакт
node index.js --action add --name Mango --email mango@gmail.com --phone 322-22-22

# Удаляем контакт
node index.js --action remove --id=3
```
