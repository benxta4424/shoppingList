const listaNeord=document.querySelector('ul')

const input=document.querySelector('input')

const butonAdaugare=document.querySelector('button')

butonAdaugare.setAttribute("style",'background-color:black; border:1px solid red; color:white;')

butonAdaugare.addEventListener("click",() =>
{
    const valoareIntrodusa=input.value

    if(valoareIntrodusa!=='')
        {
            const butonStergere=document.createElement('button')
            const introducereInput=document.createElement('span')
            const listaOrdonata=document.createElement('li')

            introducereInput.textContent=valoareIntrodusa
            butonStergere.textContent='Sterge'

            //styling
            butonStergere.setAttribute("style",'background-color:lightBlue; margin:10px; border:1px dotted black;')
            introducereInput.setAttribute("style",'font-size:20px; font-weight:bold;')



            butonStergere.addEventListener("click",()=>
            {
                listaOrdonata.remove()
            })

            listaOrdonata.appendChild(introducereInput)
            listaOrdonata.appendChild(butonStergere)
            listaNeord.appendChild(listaOrdonata)
        }

        input.value=''
} )