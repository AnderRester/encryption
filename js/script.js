//                  Control elements

//                  Encryption

const encryptField = document.getElementById("encrypt_field");
const encrypt = document.getElementById("encrypt");
const key = document.getElementById("key");

//                  Reverse
const reverseButton = document.getElementById("reverse_button");


//                  Decryption
const decryptedField = document.getElementById("encrypt_field");
const decrypt = document.getElementById("decrypt");
const openFile = document.getElementById("openFile");

//                  Support Arrays

const en_alphabet = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z'];
const ro_alphabet = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z'];
const ru_alphabet = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z'];


//                  Functions
openFile.onchange = () => {
    let fr = new FileReader();
    let file = event.target.files[0];
    fr.onload = () => {
        encryptField.value = fr.result;
        // alert(fr.result);
    }
    fr.readAsText(file);
}

const encryptOperation = () => {
    if (key.value == "") {
        alert("You have not entered a key");
    } else {
        let encryptField_sub = encryptField.value.split("", encryptField.value.length);
        let key_sub = key.value.split("", key.value.length);
        let keyPosition = [];
        //              Key position
        for (let j = 0; j < en_alphabet.length; j++) {
            for (let k = 0; k < key_sub.length; k++) {
                if (key_sub[k] == en_alphabet[j]) {
                    keyPosition.push(j);
                }
            }
        }
        //              Encryption prepare
        
        encryptField_sub = encryptField_sub.map(space => space == " " ? space = "*" : space);
        let encryptFieldArray = [];
        while(encryptField_sub.length%key_sub.length != 0) {
            encryptField_sub.push("*")
        };
        encryptFieldArray.push(0);
        for(let i = 0; i < encryptField_sub.length; i += key_sub.length) {
            encryptFieldArray.push(encryptField_sub.slice(i, i + key_sub.length));
        }
        console.log(encryptFieldArray);
        //              Encryption process
        let finalEncryptedArray = "";
        let keyIdAccess = 0;
        for(let i = 1; i < encryptFieldArray.length; i++) {
            if(i%key_sub.length == 0){
                finalEncryptedArray += "_";
                if(keyIdAccess < key_sub.length){
                    keyIdAccess++;
                }
            } else {
                finalEncryptedArray += encryptFieldArray[i][keyIdAccess];
            }
        }
        console.log(finalEncryptedArray);
        console.log(finalEncryptedArray);
    }
}

encrypt.addEventListener("click", () => {
    encryptOperation();
})
