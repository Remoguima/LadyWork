//procurar botão
document.querySelector("#add-time")
.addEventListener("click", cloneField) //chama a func ao clicar


//execução da func
function cloneField() {
   const newFieldContainer =  document.querySelector('.schedule-item').cloneNode(true) //seleciona e clona o objeto

   const fields = newFieldContainer.querySelectorAll('input')
    fields.forEach(function(field) {
        field.value = ""
    })


    document.querySelector('#schedule-items').appendChild(newFieldContainer)

}
