var btnNum = document.querySelectorAll('.btn-num')
var op = document.querySelectorAll('.op')
var result = document.querySelector('.result')
var clearAll = document.querySelector('.clear-all')
var removeLast = document.querySelector('.remove-last')
var addDote = document.querySelector('.dote')
var equal = document.querySelector('.equal')
var opp = document.querySelector('.opp')
var opn = document.querySelector('.opn')
var opm = document.querySelector('.opm')
var opd = document.querySelector('.opd')
var opr0 = document.querySelector('.opr')
var operations = document.querySelector('.operations')

btnNum.forEach(num=>{
    num.addEventListener('click',()=>{
            let val = num.id
            result.innerHTML += val
            opr0.style.pointerEvents =  "auto";
            opd.style.pointerEvents =  "auto";
            opm.style.pointerEvents =  "auto";
            opn.style.pointerEvents =  "auto";
            opp.style.pointerEvents =  "auto";
  
    })
})

op.forEach(opr=>{
    opr.addEventListener('click',()=>{
        
        let val = opr.id
        result.innerHTML += val
         opr0.style.pointerEvents =  "none";
         opd.style.pointerEvents =  "none";
         opm.style.pointerEvents =  "none";
         opn.style.pointerEvents =  "none";
         opp.style.pointerEvents =  "none";
         addDote.style.pointerEvents =  "auto";
    })
})

addDote.addEventListener('click', ()=>{
    let val = addDote.id
    result.innerHTML += val
    addDote.style.pointerEvents =  "none";
})

//the resultes
equal.addEventListener('click', ()=>{
    let content = result.innerHTML
    operations.innerHTML = content
    if(content == "") return alert("plz enter the numbers")
    let total = eval(content)
    result.innerHTML = total

})

// basic oparitor
clearAll.addEventListener('click', ()=>{
    clearAll.classList.add('active')
    result.innerHTML = ''
    operations.innerHTML = ''

    setTimeout( ()=>{
        clearAll.classList.remove('active')
    },2000)
})
    
removeLast.addEventListener('click', ()=>{
    let content = result.innerHTML
    result.innerHTML = content.slice(0,-1)
})