function encodeAndDecodeMessages() {
   
    let encodeText = document.getElementsByTagName('textarea')[0];
    let decodeText = document.getElementsByTagName('textarea')[1];


    let encodeButton = document.getElementsByTagName('button')[0].addEventListener('click',encode);
    let decodeButton = document.getElementsByTagName('button')[1].addEventListener('click',decode);

    function encode(){
            let array = encodeText.value;
            let decodeResult = ''

          for (let i = 0; i < array.length; i++) {

            decodeResult += String.fromCharCode(array[i].charCodeAt(0) + 1);

          }

          decodeText.value = decodeResult;

          encodeText.value = '';
    };


    function decode(){

        let array = decodeText.value;
        let encodeResult = '';

        for (let i = 0; i < array.length; i++) {

            encodeResult += String.fromCharCode(array[i].charCodeAt() - 1);
        }


        decodeText.value = encodeResult;

    };
   
}