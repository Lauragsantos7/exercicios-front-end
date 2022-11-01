import validator from '/validator';

const text = document.querySelector('#value');
const answer = document.querySelector('#answer');
const button = document.querySelector('#button');
const select = document.querySelector('#option');


button.addEventListener('click', (event) => {
    event.preventDefault //para não enviar os dados 
});

const fields = {
cpf: validator.isTaxId(text.value, 'pt-Br'),
hexColor: validator.isHexColor(text.value),
email: validator.isEmail(text.value),
uuid: validator.isUUID(text.value),
url: valdiaotr.isUrl(text.value),
};

answer.innerHTML = `A validação retornou ${fields[select.value]}`
console.log(select)