let navBar = document.querySelector('#header')

document.addEventListener("scroll", () => {
    let scrollTop = window.scrollY

    if (scrollTop > 0) {
        navBar.classList.add('rolar')
    }
    else { navBar.classList.remove('rolar') }
})


// IMAGEM PRODUTO

window.revelar = ScrollReveal({reset:true})

revelar.reveal('.efeito-imagem-um', {
    duration: 2000,
    distance:'90px',
    delay: 200,
})

revelar.reveal('.efeito-imagem-dois', {
    duration: 2000,
    distance:'100px',
    delay: 300,
})

revelar.reveal('.efeito-imagem-tres', {
    duration: 2000,
    distance:'110px',
    delay: 400,
})

revelar.reveal('.efeito-imagem-quatro', {
    duration: 2000,
    distance:'120px',
    delay: 500,
})

// COMPROMISSO

revelar.reveal('.efeito-compromisso', {
    duration: 2000,
    distance:'90px',
    delay: 500,
    origin: 'left'
})

