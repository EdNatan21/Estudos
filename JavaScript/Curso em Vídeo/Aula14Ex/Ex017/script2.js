function tabuada() {
    var tab = document.getElementById('seltab')
    var num1 = document.querySelector('input#num')
   
    var num1 = Number(num1.value)
    var num2 = 0
    var res = 0

    if(num1 == ''){
       alert('Digite um valor válido')
    }else{
        tab.innerHTML = ''
        while (num2 <= 10) {
            let item = document.createElement('option')
            item.text = `${num1} x ${num2} = ${res}`
            item.value = `tab${num2}`
            tab.appendChild(item)
            num2++
            res = num1 * num2
        }
    }
}
