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
    if(key.value == "") {
    alert("You have't entered a key");
    } else {
        let encryptField_sub = encryptField.value.split("", encryptField.value.length);
        let key_sub = key.value.split("", key.value.length);
        let keyPosition = [];
            for(let j = 0; j < en_alphabet.length; j++) {
                if(key_sub[j] == en_alphabet[j]) {
                    keyPosition.push(j);
                }
        }
        // for(let i = 0; i < encryptField_sub.length; i++) {
            
        // }
        console.log(keyPosition);
        console.log(encryptField_sub);
        console.log(key.value.length);
    }
}

encrypt.addEventListener("click", () => {
    encryptOperation();
})
