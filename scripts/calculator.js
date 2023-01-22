function calculator(){
    let btnc = document.getElementById('btnc')
    btnc.onclick = ()=>{
        let calcs = document.getElementById('calcs')
        calcs.innerHTML=`
        <div class="btns">
            <button id="btnc1">Multiply</button>
            <button id="btnc2">Share</button>
            <button id="btnc3">Subtration</button>
            <button id="btnc4">Add</button>
        </div>
        <div id='response'>
            
        </div>
        `
        let btnc1 = document.getElementById('btnc1')
        let btnc2 = document.getElementById('btnc2')
        let btnc3 = document.getElementById('btnc3')
        let btnc4 = document.getElementById('btnc4')
        let response = document.getElementById('response')
        let n1 = document.getElementById('n1')
        let n2 = document.getElementById('n2')
        if(btnc1){
            btnc1.onclick = ()=>{
                response.innerHTML=`
                    <div class='calc'>
                        <p>${parseInt(n1.value)*parseInt(n2.value)}</p>
                    </div>
                `
            }
        }
        if(btnc2){
            btnc2.onclick = ()=>{
                response.innerHTML=`
                    <div class='calc'>
                        <p>${parseInt(n1.value)-parseInt(n2.value)}</p>
                    </div>
                `
            }
        }
        
        if(btnc3){
            btnc3.onclick = ()=>{
                response.innerHTML=`
                    <div class='calc'>
                        <p>${parseInt(n1.value)*parseInt(n2.value)}</p>
                    </div>
                `
            }
        }
        if(btnc4){
            btnc4.onclick = ()=>{
                response.innerHTML=`
                    <div class='calc'>
                        <p>${parseInt(n1.value)+parseInt(n2.value)}</p>
                    </div>
                `
            }
        }
    }
}

calculator()