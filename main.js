window.addEventListener('scroll', onScroll)

onScroll()
function onScroll() {
    showNavOnScroll()
    showBackToTopButtonOnScroll()
    ativarMenuNaSecaoMomento(home)
    ativarMenuNaSecaoMomento(services)
    ativarMenuNaSecaoMomento(about)
    ativarMenuNaSecaoMomento(contact)
}

function ativarMenuNaSecaoMomento(section) {
    const TargetLine = scrollY + innerHeight /2

    const secaoTop = section.offsetTop
    const secaoAltura = section.offsetHeight
    const chegouOuPassouNaLinha = TargetLine >= secaoTop

    const ondeTermina = secaoTop + secaoAltura
    const finalSecaoPassouNaLinha = ondeTermina <= TargetLine

    const limiteSecao = chegouOuPassouNaLinha && !finalSecaoPassouNaLinha

    const sectionId = section.getAttribute('id')
    const menuElemento = document.querySelector(`.menu 
    a[href*=${sectionId}]`)
    
    menuElemento.classList.remove('active')
    if (limiteSecao) {
        menuElemento.classList.add('active')
    }
}


function showNavOnScroll() {
    if(scrollY > 0) {
        navigation.classList.add('scroll')
    }else{
        navigation.classList.remove("scroll")
    }
}

function showBackToTopButtonOnScroll(){
    if(scrollY > 550) {
        backToTopButton.classList.add('show')
    }else{
        backToTopButton.classList.remove('show')
    }
}

function openMenu() {
    document.body.classList.add('menu-expanded')
}

function closeMenu() {
    document.body.classList.remove('menu-expanded')
}

ScrollReveal({
    origin: 'top',
    distance: '30px',
    duration: 700,
}).reveal(`#home, 
#home img, 
#home .stats, 
#services,
#services header,
#services .card,
#about,
#about header,
#about .content `);

