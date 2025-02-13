'use sticpt'

const disciplinas = [
    {name: 'Calças', img: 'icons8-calça-48.png', tag: "Calca", color: '#ffffff'},
    {name: 'Tênis', img: 'icons8-tênis-64.png', tag: "Tenis", color: '#ffffff'},
    {name: 'Camisas', img: 'icons8-camiseta-64.png', tag: "Camisas", color: '#ffffff'},
    {name: 'Bonés', img: 'icons8-boné-64.png', tag: "Bone", color: '#ffffff'}
]
const sizes = ["XS", "S", "M", "L", "XL"]

const produtos = {
    name: "Produtos",
    products: [
        {
            "name": "Calça cargo masculina",
            "description":"Calça estilo cargo para homens",
            "image": "calca-cargo.png",
            "price": 299.99,
            "size": ["M", "L"],
            "color": "636363",
            "tag": "Touca"
        },
        {
            "name": "Tênis Nike Air Max Plus",
            "description":"O Nike Air Max possui um cabedal em tecido respirável com detalhes em couro.",
            "image": "tenis-nike.png",
            "price": 499.90,
            "size": ["S","M"],
            "color": "979797",
            "tag": "Camisa"
        },
        {
            "name": "Camisa Estro 19 Adidas Masculina",
            "description":" Tecido leve e respirável que afasta o calor e suor do corpo",
            "image": "camisa-adidas.png",
            "price": 69.99,
            "size": ["M"],
            "color": "0e5cbf",
            "tag": "Calca"
        },
        {
            "name": "Camiseta Masculina Naruto Shippuden",
            "description":"Camiseta Masculina Naruto Shippuden Camisa Anime",
            "image": "camisa-anime.png",
            "price": 59.99,
            "size": ["XS", "S"],
            "color": "bd3139",
            "tag": "Calca"
        },
        {
            "name": "Boné Fila Aba Curva",
            "description":"Boné Fila Aba Curva Strapback Running - Preto",
            "image": "bone.png",
            "price": 99.99,
            "size": ["M","L","XL"],
            "color": "000000",
            "tag": "Tenis"
        }
    ]
}

function criarSize(tamanhoQueExite, tamanhosQueTem, listaQueVaicolocar) {
    const ul = listaQueVaicolocar

    tamanhoQueExite.forEach(texto => {
        const li = document.createElement("li")
        li.textContent = texto
        if (tamanhosQueTem.includes(texto)) {
            li.style.fontWeight = "bold"
            li.style.color = "black"
        }

        ul.appendChild(li)
    })
}

function criarMenu(disciplina){
    const novoItem = document.createElement('li')
    const novoImagem = document.createElement('img')
    const novoSpan = document.createElement('span')
    const lista = document.getElementById('menu')

    novoImagem.src = `./icon/${disciplina.img}`
    novoSpan.textContent = disciplina.name

    novoItem.appendChild(novoImagem)
    novoItem.appendChild(novoSpan)
    novoItem.style = `--cor-houver: ${disciplina.color}9d;`

    novoItem.addEventListener('click', () => filtrarCards(disciplina.tag))

    lista.appendChild(novoItem)

}
let foiClidao = ""
function filtrarCards(tag) {
    const cards = document.querySelectorAll('.card')

    if(foiClidao == "" || foiClidao != tag){
        cards.forEach(card => {
            const tagCard = card.dataset.tag
    
            if (tagCard === tag) {
                card.style.display = "flex"
            } else {
                card.style.display = "none"
            }
        })
        foiClidao = tag
    }else if(foiClidao == tag){
        cards.forEach(card => {
            card.style.display = "flex"  
        })
        foiClidao = ""
    }
    
}


function criarCards(produto){
    const listaProdutos = document.getElementById('produtos')

    const novoCard = document.createElement('div')
    novoCard.classList.add("card")
    novoCard.dataset.tag = produto.tag

    const conteudoCard = document.createElement('div')
    conteudoCard.classList.add("conteudo")

    const buttonCard = document.createElement('button')

    const h2Card = document.createElement('h2')

    const spanCard = document.createElement('span')

    const imgCard = document.createElement('img')

    const divCard = document.createElement('div')

    const spanDivCard = document.createElement('span')

    const h4DivCard = document.createElement('h4')

    const ulDivCard = document.createElement('ul')
    

    novoCard.appendChild(conteudoCard)
    
    novoCard.appendChild(buttonCard)
    
    conteudoCard.appendChild(h2Card)
    
    conteudoCard.appendChild(spanCard)
    
    conteudoCard.appendChild(imgCard)
    
    conteudoCard.appendChild(divCard)
    
    divCard.appendChild(spanDivCard)
    
    divCard.appendChild(h4DivCard)
    
    divCard.appendChild(ulDivCard)

    criarSize(sizes, produto.size, ulDivCard)


    h2Card.textContent = produto.name
    spanCard.textContent = produto.description
    imgCard.src = `./img/${produto.image}`
    spanDivCard.textContent= `R$: ${produto.price}`
    novoCard.style = `--cor-card: #${produto.color};`
    h4DivCard.textContent = 'Size'
    buttonCard.textContent = 'ADD TO CART'

    listaProdutos.appendChild(novoCard)
}

disciplinas.forEach(criarMenu)
produtos.products.forEach(criarCards)
