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
const decryptionField = document.getElementById("decrypted_field");
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

        //              GOD MERCIFUL PLEASE FORGIVE ME

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
        keyPosFinal_1 = []
        for (let i = 0; i < keyPosFinal.length; i++) {
            keyPosFinal_1.push(keyPosFinal.indexOf(i));
        }
        console.log(keyPosition);
        console.log(keyPosFinal);
        console.log(keyPosFinal_1);


        //              Encryption prepare

        encryptField_sub = encryptField_sub.map(space => space == " " ? space = "*" : space);
        let encryptFieldArray = [];
        while (encryptField_sub.length % key_sub.length != 0) {
            encryptField_sub.push("*")
        };
        // encryptFieldArray.push(0);
        for (let i = 0; i < encryptField_sub.length; i += key_sub.length) {
            // encryptFieldArray.push(encryptField_sub.slice(i, i + key_sub.length));
            encryptFieldArray.splice(i, 0, encryptField_sub.slice(i, i + key_sub.length));
        }
        console.log(encryptFieldArray);



        //              Encryption process
        var finalEncryptedArray = "";
        for (let k in keyPosFinal) {
            for (let i in encryptFieldArray) {
                finalEncryptedArray += encryptFieldArray[i][keyPosFinal_1[k]];
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
        decryptionField.value = finalEncryptedArray;
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
    if (key.value == "") {
        alert("You have not entered a key");
    } else {
        let decryptionField_sub = decryptionField.value.split("", decryptionField.value.length);
        let key_sub = key.value.split("", key.value.length);
        let keyPosition = [];
        //              Key position

        //              GOD MERCIFUL PLEASE FORGIVE ME

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
        keyPosFinal_1 = []
        for (let i = 0; i < keyPosFinal.length; i++) {
            keyPosFinal_1.push(keyPosFinal.indexOf(i));
        }
        console.log(key_sub);
        console.log(keyPosition);
        console.log(keyPosFinal);
        console.log(keyPosFinal_1);
        // Reverse key attempt

        
        


        const keyReverse = [];

        for (let i = 0; i < keyPosFinal_1.length; i++) {
            keyReverse.push(keyPosFinal_1.indexOf(i));
        }
        console.log("---------------------------------");
        console.log(keyPosFinal);
        console.log(keyPosFinal_1);
        console.log("---------------------------------");
        console.log(keyPosFinal_1);
        console.log(keyReverse);
        console.log("---------------------------------");







            //                  Check word length
            const getWordLength = () => {
                let i = 0;
                while (decryptionField_sub[i] != "_") {
                    i++
                }
                return i;
            }
        let wordLength = getWordLength();
        let decryptionSuppArray = [];
        console.log("111");
        console.log(decryptionField_sub.length);
        decryptionField_sub = decryptionField_sub.filter(item => item != "_");
        let backToReality = [];
        // for(let i = 0; i < (keyPosFinal_1).length; i++) {
        for (let i in keyPosFinal_1) {
            decryptionSuppArray.splice(i, 0, decryptionField_sub.splice(0, wordLength));
        }
        console.log(decryptionSuppArray);
        console.log("Print");
        for (let i = 0; i < keyPosFinal.length; i++) {
            // for (let m = 0; m < keyPosFinal.length; m++) {
            for (let m in keyPosFinal_1) {
                if (keyPosFinal[i] == keyPosFinal_1[m]) {
                    backToReality.splice(i, 0, decryptionSuppArray[m]);
                }
            }
        }
        console.log(backToReality);
        console.log(1);















        // let decryptionArraySupplement = decryptedField.value.split("", decryptedField.value.length);
        // let i = 0;
        // while (decryptionArraySupplement[i] != "_") {
        //     i++
        // }

        // let decryptionArrayFinal = [];
        // decryptionArraySupplement = decryptionArraySupplement.filter(item => item != "_");

        // decryptionArrayFinal.splice(0, 0, (decryptionArraySupplement.slice(0, decryptionArraySupplement.length)));
        // console.log(decryptionArrayFinal);
        // console.log('///');
        // console.log(i);
        // let supp_len = i;
        // console.log('///');
        // var finalDecryptedArray = "";
        // decryptedArrayPreReady = [];
        // for(let i = 0; i < decryptionArrayFinal.length; i+=key_sub) {
        //     decryptedArrayPreReady.splice(i, 0, decryptionArraySupplement.slice(i, i + key_sub.length));
        // }
        // console.log(1);
        // console.log(decryptedArrayPreReady);
        // console.log(1);
    }
    // console.log(finalDecryptedArray);
    //encryptField.value = finalDecryptedArray;
}

decrypt.addEventListener("click", () => {
    decryptOperation();
})