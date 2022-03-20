//                  Control elements

//                  Encryption

const encryptField = document.getElementById("encrypt_field");
const encrypt = document.getElementById("encrypt");
const key = document.getElementById("key");

//                  Reverse
const reverseButton = document.getElementById("reverse_button");
const encryptContText = document.getElementById("encrypt_cont_text");
const decryptContText = document.getElementById("decrypt_cont_text");

//                  Decryption
const decryptedField = document.getElementById("decrypted_field");
const decrypt = document.getElementById("decrypt");
const openFile = document.getElementById("openFile");

//                  Support Arrays

const en_alphabet = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z'];
const ro_alphabet = ['a', 'â', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'î', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 'ș', 't', 'ț', 'u', 'v', 'w', 'x', 'y', 'z'];
const ru_alphabet = ['а', 'б', 'в', 'г', 'д', 'е', 'ё', 'ж', 'з', 'и', 'й', 'к', 'л', 'м', 'н', 'о', 'п', 'р', 'с', 'т', 'у', 'ф', 'х', 'ц', 'ч', 'ш', 'щ', 'ъ', 'ы', 'ь', 'э', 'ю', 'я'];


//                  Functions

//                  File reader
openFile.onchange = () => {
    let fr = new FileReader();
    let file = event.target.files[0];
    fr.onload = () => {
        encryptField.value = fr.result;
        // alert(fr.result);
    }
    fr.readAsText(file);
}


//                  Encrypt function
const encryptOperation = () => {
    if (key.value == "") {
        alert("You have not entered a key");
    } else {
        let encryptField_sub = encryptField.value.split("", encryptField.value.length);
        let key_sub = key.value.split("", key.value.length);
        let keyPosition = [];
        //              Key position

        //              GOD MERCIFULL PLEASE FORGIVE ME

        for (let j = 0; j < en_alphabet.length; j++) {
            for (let k = 0; k < key_sub.length; k++) {
                if (key_sub[k] == en_alphabet[j]) {
                    keyPosition.push(en_alphabet[j]);
                }
            }
        }
        keyPosFinal = [];
        for (let i = 0; i < key_sub.length; i++) {
            for (let j = 0; j < key_sub.length; j++) {
                if (key_sub[i] == keyPosition[j]) {
                    keyPosFinal.push(j);
                }
            }
        }
        console.log(keyPosition);
        console.log(keyPosFinal);
        // for (let j = 0; j < en_alphabet.length; j++) {
        //     for (let k = 0; k < key_sub.length; k++) {
        //         if (key_sub[k] == en_alphabet[j]) {
        //             keyPosition.push(k);
        //         }
        //     }
        // }

        // console.log(key_sub);
        // console.log(keyPosition);




        //              Encryption prepare

        encryptField_sub = encryptField_sub.map(space => space == " " ? space = "*" : space);
        let encryptFieldArray = [];
        while (encryptField_sub.length % key_sub.length != 0) {
            encryptField_sub.push("*")
        };
        // encryptFieldArray.push(0);
        for (let i = 0; i < encryptField_sub.length; i += key_sub.length) {
            encryptFieldArray.push(encryptField_sub.slice(i, i + key_sub.length));
        }
        console.log(encryptFieldArray);



        //              Encryption process
        var finalEncryptedArray = "";
        let counterChecker = 0;
        for (let k in keyPosFinal) {
            for (let i in encryptFieldArray) {
                finalEncryptedArray += encryptFieldArray[i][keyPosFinal[k]];
            }
            finalEncryptedArray += "_";
        }


        // for (var keyIdAccess = 0; keyIdAccess < keyPosFinal.length; keyIdAccess++) {
        //     for (let i = 0; i < encryptFieldArray.length; i++) {
        //         finalEncryptedArray += encryptFieldArray[i][keyPosFinal[keyIdAccess]];
        //     }
        //     finalEncryptedArray += "_";
        // }
        //keyIdAccess++;
        console.log(finalEncryptedArray);
        decryptedField.value = finalEncryptedArray;
    }
}

encrypt.addEventListener("click", () => {
    encryptOperation();
})











const reverseOperation = () => {
    let temp = encryptContText.innerText;
    encryptContText.innerHTML = decryptContText.innerHTML;
    decryptContText.innerHTML = temp;
}

reverseButton.addEventListener("click", () => {
    reverseOperation();
})















//                     Decrypt function
const decryptOperation = () => {
    let backToReality = [];

    if (key.value == "") {
        alert("You have not entered a key");
    } else {
        let encryptField_sub = encryptField.value.split("", encryptField.value.length);
        let key_sub = key.value.split("", key.value.length);
        let keyPosition = [];
        //              Key position

        //              GOD MERCIFULL PLEASE FORGIVE ME

        for (let j = 0; j < en_alphabet.length; j++) {
            for (let k = key_sub.length - 1; k >= 0; k--) {
                if (key_sub[k] == en_alphabet[j]) {
                    keyPosition.push(en_alphabet[j]);
                }
            }
        }
        keyPosFinal = [];
        for (let i = 0; i < key_sub.length; i++) {
            for (let j = 0; j < key_sub.length; j++) {
                if (key_sub[i] == keyPosition[j]) {
                    keyPosFinal.push(j);
                }
            }
        }
        console.log(keyPosFinal);
        // for (let j = 0; j < en_alphabet.length; j++) {
        //     for (let k = 0; k < key_sub.length; k++) {
        //         if (key_sub[k] == en_alphabet[j]) {
        //             keyPosition.push(k);
        //         }
        //     }
        // }

        console.log(key_sub);
        console.log(keyPosition);

        //                  Check word length
        let decryptionArraySupplement = decryptedField.value.split("", decryptedField.value.length);
        let i = 0;
        while (decryptionArraySupplement[i] != "_") {
            i++
        }

        let decryptionArrayFinal = [];
        decryptionArraySupplement = decryptionArraySupplement.filter(item => item != "_");

        for (let i = 0; i < decryptionArraySupplement.length; i += key_sub.length) {
            decryptionArrayFinal.push(decryptionArraySupplement.slice(i, i + key_sub.length));
        }
        console.log(decryptionArrayFinal);
        //console.log(checkWordLength);
        console.log(i);
        var finalDecryptedArray = "";
        for (let i = 0; i < decryptionArrayFinal.length; i++) {
            for (let keyIdAccess = 0; keyIdAccess < key_sub.length; keyIdAccess++) {
                finalDecryptedArray += decryptionArrayFinal[i][keyIdAccess];
                // if (typeof(decryptionArrayFinal[keyPosFinal[keyIdAccess]][i]) == 'undefined') {
                //     i++;
                // } else {
                //     finalDecryptedArray += decryptionArrayFinal[i][keyIdAccess];
                // }
                //keyIdAccess == key_sub.length - 1 ? 0 : finalEncryptedArray += "_";
            }
            finalDecryptedArray += "_";
        }
    }
    console.log(finalDecryptedArray);
    //encryptField.value = finalDecryptedArray;
}

decrypt.addEventListener("click", () => {
    decryptOperation();
})