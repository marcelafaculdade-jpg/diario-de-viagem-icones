document.addEventListener('DOMContentLoaded', () => {
    
    //Variáveis
    const botaoTema = document.getElementById('toggle-theme');
    const caixaProxima = document.querySelector('.proxima');
    const todasImagens = document.querySelectorAll('.grid img');
    const itensDicas = document.querySelectorAll('#dicas ul li');

    // Deixar como Instagram 
    todasImagens.forEach(img => {
        img.addEventListener('click', function() {
            const modal = document.createElement('div');
            modal.className = 'img-focada'; 
            const imgExpandida = document.createElement('img');
            imgExpandida.src = this.src;
            modal.appendChild(imgExpandida);
            document.body.appendChild(modal);
            modal.onclick = () => modal.remove();
        });
    });

    // Mudar cor ao clicar no póroxima parada será Caxias Do Sul.
    if (caixaProxima) {
        caixaProxima.addEventListener('click', function() {
            const cores = ['#3f51b5', '#28a745', '#e91e63', '#ff9800', '#673ab7', '#00bcd4'];
            const corAleatoria = cores[Math.floor(Math.random() * cores.length)];
            this.style.backgroundColor = corAleatoria;
        });
    }

    //Modo Noturno
    if (botaoTema) {
        botaoTema.addEventListener('click', () => {
            document.body.classList.toggle('dark-mode-active');
            botaoTema.textContent = document.body.classList.contains('dark-mode-active') ? '☀️' : '🌙';
        });
    }

    //Interação nas Dicas, como se fosse uma lista de check para coisas para fazer.
    itensDicas.forEach(item => {
        item.addEventListener('click', function() {
            this.classList.toggle('dica-check');
        });
    });
});