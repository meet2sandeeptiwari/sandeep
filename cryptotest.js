const crypto = require("crypto");

console.time("1");
crypto.pbkdf2("a", "b", 100000, 512, "sha512", () => {
    console.timeEnd("1");
});

console.time("2");
crypto.pbkdf2("a", "b", 100000, 512, "sha512", () => {
    console.timeEnd("2");
});

console.time("3");
crypto.pbkdf2("a", "b", 100000, 512, "sha512", () => {
    console.timeEnd("3");
});

console.time("4");
crypto.pbkdf2("a", "b", 100000, 512, "sha512", () => {
    console.timeEnd("4");
});

console.time("5");
crypto.pbkdf2("a", "b", 100000, 512, "sha512", () => {
    console.timeEnd("5");
});