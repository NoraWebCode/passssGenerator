const lowercase = 'abcdefghijklmnopqrstuvwxyz';
const uppercase = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ'; 
const symbols = '?@$%#^&*()_-=+~';
const numbers = '1234567890';

let passLength = prompt("Введите длину вашего пароля");
passLength = parseInt(passLength);
if (isNaN(passLength) || passLength < 4 || passLength > 30) {
    alert("Ошибка, введите число от 4 до 30");
} else {
    console.log("Длина пароля:", passLength);

    let addNumbers = prompt("Включать цифры? (да/нет)");
    let addUppercase = prompt("Включать заглавные буквы? (да/нет)");
    let addLowercase = prompt("Включать строчные буквы? (да/нет)");
    let addSymbols = prompt("Включать символы? (да/нет)");
    let allCharacters = '';

    if (addLowercase === 'да' || addLowercase === "Да") {
        allCharacters += lowercase;
    }

    if (addUppercase === 'да' || addUppercase === "Да") {
        allCharacters += uppercase;
    }

    if (addNumbers === 'да' || addNumbers === "Да") {
        allCharacters += numbers;
    }

    if (addSymbols === 'да' || addSymbols === "Да") {
        allCharacters += symbols;
    }

    if (allCharacters === '') {
        alert("ОШИБКА! Вы не выбрали ни одного типа символов!");
    } else {
        let password = '';
        for (let i = 0; i < passLength; i++) {
            let randomIndex = Math.floor(Math.random() * allCharacters.length);
            let randomChar = allCharacters[randomIndex];
            password += randomChar;
        }
        alert("Ваш пароль: " + password);
        console.log("Сгенерированный пароль:", password);
    }

}
