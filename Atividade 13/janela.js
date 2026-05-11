function funcJanela(){
    const img  = document.getElementById("janela");
    const titulo = document.getElementById("estado");
    
    if(img && titulo){
        
        if(event?.type=="mouseout"){
            // @ts-ignore
            img.src = "./images/janela fechada.PNG";
            titulo.innerText = "janela fechada";
        }
        if(event?.type=="mouseover"){
            // @ts-ignore
            img.src = "./images/janela aberta.PNG";
            titulo.innerText = "janela aberta";
        }
        
        if(event?.type=="click"){
            // @ts-ignore
            img.src = "./images/janela quebrada.PNG";
            titulo.innerText = "janela quebrada";
        }
    }  
}

