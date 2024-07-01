const path = require("path");
const readline = require("readline-sync");

const name = readline.question("Digite seu nome: ");
console.log(`Seu nome é ${name}`);

console.log("path dirname :", path.dirname("/utils/empty"));
console.log("path resolve :", path.resolve("utils", "empty"));
console.log(
  "path resolve a partir da raiz :",
  path.resolve("/", "utils", "empty"),
);
