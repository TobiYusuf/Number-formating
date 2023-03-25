let inputField = document.querySelector('input')

inputField.oninput = function () {
    let num = getNumber(this.value);
    if (num == 0) {
        num = '';
    } else {

        let re = /\b(\d+)(\d{2})\b/;
        let subst = '$1.$2';
        let result = num.toString().replace(re, subst);
        let output = result.replace(/\B(?=(\d{3})+(?!\d))/g, ",")
        this.value = output;
    }
}

function getNumber(_str) {
    var arr = _str.split('');
    var out = new Array();
    for (var cnt = 0; cnt < arr.length; cnt++) {
        if (isNaN(arr[cnt]) == false) {
            out.push(arr[cnt]);
        }
    }
    return Number(out.join(''));
}

        // let inputField = document.querySelector('input')

        // inputField.oninput = function () {

        //     // let removeChar = this.value.replace(/[^0-9\.]/g, '')
        //     // let removerDot = removeChar.replace(/\./g, '')

        //     // this.value = removerDot

        //     // let formattedNumberComma = this.value.replace(/\B(?=(\d{3})+(?!\d))/g, ",")
        //     // this.value = formattedNumberComma
        //     let value = this.value
        //     let parts = value.toString().split(".");;
        //     let num = parts[0].replace(/\B(?=(\d{3})+(?!\d))/g, ",") + (parts[1] ? "." + parts[1] : "");
        //     console.log(num);

        // }





