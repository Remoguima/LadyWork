const subjects = [
    "Ar Condicionado",
    "Azulejista",
    "Caça Vazamento",
    "Desentupimento",
    "Eletricista",
    "Encanadora",
    "Gesseira",
    "Instalação de TV",
    "Instalação de Ventilador",
    "Jardinagem",
    "Limpeza de Caixa d'água",
    "Limpeza de Piscina",
    "Montagem de móveis",
    "Pedreira",
    "Pequenos Reparos",
    "Pintora",
    "Sistema de Segurança",  
]

const weekdays = [
    "Domingo",
    "Segunda-feira",
    "Terça-feira",
    "Quarta-feira",
    "Quinta-feira",
    "Sexta-feira",
    "Sábado",
]

const fasdfsdafasdfsd = [
    "Arujá",
    "Barueri",
    "Biritiba Mirim",
    "Caieiras",
    "Cajamar",
    "Carapicuíba",
    "Cotia",
    "Diadema",
    "Embu",
    "Embu-Guaçu",
    "Ferraz de Vasconcelos",
    "Francisco Morato",
    "Franco da Rocha",
    "Guararema",
    "Guarulhos",
    "Itapecerica da Serra",
    "Itapevi",
    "Itaquaquecetuba",
    "Jandira",
    "Juquitiba",
    "Mairiporã",
    "Mauá",
    "Mogi das Cruzes",
    "Osasco",
    "Pirapora do Bom Jesus",
    "Poá",
    "Ribeirão Pires",
    "Rio Grande da Serra",
    "Salesópolis",
    "Santa Isabel",
    "Santana do Parnaíba",
    "Santo André",
    "São Bernardo do Campo",
    "São Caetano do Sul",
    "São Lourenço da Serra Suzano",
    "São Paulo",
    "Suzano",
    "Taboão da Serra",
    "Vargem Grande Paulista",
]

//funções
function getSubject(subjectNumber) { //func que substitui o numero da matéria por texto
    const position = +subjectNumber -1
    return subjects[position] //+ para retornar um inteiro; -1 pois o array começa em 0
}


module.exports = {
    subjects,
    weekdays,
    fasdfsdafasdfsd,
    getSubject
}