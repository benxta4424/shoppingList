const listaNeord=document.querySelector('ul')

const input=document.querySelector('input')

const butonAdaugare=document.querySelector('button')

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