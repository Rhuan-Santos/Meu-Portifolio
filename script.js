function texto_sobre_mim() {
    document.getElementById("sobremim").innerText =
    "Estudante do 3° ano do Ensino Médio na ETE Porto Digital, de curso tecnico em desenvolvimentos de sistemas. Onde desenvolvi por meio de projetos linguagens de programação como Python, noções básicas de Java e HTML. Além disso, aprimorei habilidades como proatividade, trabalho em equipe e busca por novos conhecimentos."
}

function fecharPopup() {
    document.getElementById("popup").style.display = "none";
}

function toggleDarkMode() {
    document.body.classList.toggle("dark-mode");
}

const container = document.querySelector('.skills-container');

let isDown = false;
let startX;
let scrollLeft;

container.addEventListener('mousedown', (e) => {
    isDown = true;
    startX = e.pageX - container.offsetLeft;
    scrollLeft = container.scrollLeft;
});

container.addEventListener('mouseleave', () => {
    isDown = false;
});

container.addEventListener('mouseup', () => {
    isDown = false;
});

container.addEventListener('mousemove', (e) => {
    if (!isDown) return;
    e.preventDefault();
    const x = e.pageX - container.offsetLeft;
    const walk = (x - startX) * 2;
    container.scrollLeft = scrollLeft - walk;
});