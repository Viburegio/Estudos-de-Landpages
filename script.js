// Inicializar configuração
const config = window.VALENTINE_CONFIG;

// Validar configuração
function validateConfig() {
    const warnings = [];

    // Verificar campos obrigatórios
    if (!config.valentineName) {
        warnings.push("O nome do(a) namorado(a) não está definido! Usando padrão.");
        config.valentineName = "Meu Dengo";
    }

    // Validar cores
    const isValidHex = (hex) => /^#([A-Fa-f0-9]{6}|[A-Fa-f0-9]{3})$/.test(hex);
    Object.entries(config.colors).forEach(([key, value]) => {
        if (!isValidHex(value)) {
            warnings.push(`Cor inválida para ${key}! Usando padrão.`);
            config.colors[key] = getDefaultColor(key);
        }
    });

    // Validar valores de animação
    if (parseFloat(config.animations.floatDuration) < 5) {
        warnings.push("Duração de flutuação muito curta! Definindo para mínimo de 5s.");
        config.animations.floatDuration = "5s";
    }

    if (config.animations.heartExplosionSize < 1 || config.animations.heartExplosionSize > 3) {
        warnings.push("O tamanho da explosão de coração deve estar entre 1 e 3! Usando padrão.");
        config.animations.heartExplosionSize = 1.5;
    }

    // Registrar avisos se houver
    if (warnings.length > 0) {
        console.warn("⚠️ Avisos de Configuração:");
        warnings.forEach(warning => console.warn("- " + warning));
    }
}

// Valores de cor padrão
function getDefaultColor(key) {
    const defaults = {
        backgroundStart: "#ffafbd",
        backgroundEnd: "#ffc3a0",
        buttonBackground: "#ff6b6b",
        buttonHover: "#ff8787",
        textColor: "#ff4757"
    };
    return defaults[key];
}

// Definir título da página
document.title = config.pageTitle;

// Inicializar o conteúdo da página quando o DOM estiver carregado
window.addEventListener('DOMContentLoaded', () => {
    // Validar configuração primeiro
    validateConfig();

    // Definir textos a partir da configuração
    document.getElementById('valentineTitle').textContent = `${config.valentineName}, meu dengo...`;
    
    // Definir textos da primeira pergunta
    document.getElementById('question1Text').textContent = config.questions.first.text;
    document.getElementById('yesBtn1').textContent = config.questions.first.yesBtn;
    document.getElementById('noBtn1').textContent = config.questions.first.noBtn;
    document.getElementById('secretAnswerBtn').textContent = config.questions.first.secretAnswer;
    
    // Definir textos da segunda pergunta
    document.getElementById('question2Text').textContent = config.questions.second.text;
    document.getElementById('startText').textContent = config.questions.second.startText;
    document.getElementById('nextBtn').textContent = config.questions.second.nextBtn;
    
    // Definir textos da terceira pergunta
    document.getElementById('question3Text').textContent = config.questions.third.text;
    document.getElementById('yesBtn3').textContent = config.questions.third.yesBtn;
    document.getElementById('noBtn3').textContent = config.questions.third.noBtn;

    // Criar elementos flutuantes iniciais
    createFloatingElements();

    // Configurar player de música
    setupMusicPlayer();
});

// Criar corações e ursos flutuantes
function createFloatingElements() {
    const container = document.querySelector('.floating-elements');
    
    // Criar corações
    config.floatingEmojis.hearts.forEach(heart => {
        const div = document.createElement('div');
        div.className = 'heart';
        div.innerHTML = heart;
        setRandomPosition(div);
        container.appendChild(div);
    });

    // Criar ursos
    config.floatingEmojis.bears.forEach(bear => {
        const div = document.createElement('div');
        div.className = 'bear';
        div.innerHTML = bear;
        setRandomPosition(div);
        container.appendChild(div);
    });
}

// Definir posição aleatória para elementos flutuantes
function setRandomPosition(element) {
    element.style.left = Math.random() * 100 + 'vw';
    element.style.animationDelay = Math.random() * 5 + 's';
    element.style.animationDuration = 10 + Math.random() * 20 + 's';
}

// Função para mostrar a próxima pergunta
function showNextQuestion(questionNumber) {
    document.querySelectorAll('.question-section').forEach(q => q.classList.add('hidden'));
    document.getElementById(`question${questionNumber}`).classList.remove('hidden');
}

// Função para mover o botão "Não" quando clicado
function moveButton(button) {
    const x = Math.random() * (window.innerWidth - button.offsetWidth);
    const y = Math.random() * (window.innerHeight - button.offsetHeight);
    button.style.position = 'fixed';
    button.style.left = x + 'px';
    button.style.top = y + 'px';
}

// Funcionalidade do medidor de amor
const loveMeter = document.getElementById('loveMeter');
const loveValue = document.getElementById('loveValue');
const extraLove = document.getElementById('extraLove');

function setInitialPosition() {
    loveMeter.value = 100;
    loveValue.textContent = 100;
    loveMeter.style.width = '100%';
}

loveMeter.addEventListener('input', () => {
    const value = parseInt(loveMeter.value);
    loveValue.textContent = value;
    
    if (value > 100) {
        extraLove.classList.remove('hidden');
        const overflowPercentage = (value - 100) / 9900;
        const extraWidth = overflowPercentage * window.innerWidth * 0.8;
        loveMeter.style.width = `calc(100% + ${extraWidth}px)`;
        loveMeter.style.transition = 'width 0.3s';
        
        // Mostrar mensagens diferentes com base no valor
        if (value >= 5000) {
            extraLove.classList.add('super-love');
            extraLove.textContent = config.loveMessages.extreme;
        } else if (value > 1000) {
            extraLove.classList.remove('super-love');
            extraLove.textContent = config.loveMessages.high;
        } else {
            extraLove.classList.remove('super-love');
            extraLove.textContent = config.loveMessages.normal;
        }
    } else {
        extraLove.classList.add('hidden');
        extraLove.classList.remove('super-love');
        loveMeter.style.width = '100%';
    }
});

// Inicializar medidor de amor
window.addEventListener('DOMContentLoaded', setInitialPosition);
window.addEventListener('load', setInitialPosition);

// Função de celebração
function celebrate() {
    document.querySelectorAll('.question-section').forEach(q => q.classList.add('hidden'));
    const celebration = document.getElementById('celebration');
    celebration.classList.remove('hidden');
    
    // Definir mensagens de celebração
    document.getElementById('celebrationTitle').textContent = config.celebration.title;
    document.getElementById('celebrationMessage').textContent = config.celebration.message;
    
    // Criar efeito de explosão de coração
    createHeartExplosion();
}

// Criar animação de explosão
function createHeartExplosion() {
    for (let i = 0; i < 50; i++) {
        const heart = document.createElement('div');
        const randomHeart = config.floatingEmojis.hearts[Math.floor(Math.random() * config.floatingEmojis.hearts.length)];
        heart.innerHTML = randomHeart;
        heart.className = 'heart';
        document.querySelector('.floating-elements').appendChild(heart);
        setRandomPosition(heart);
    }
}

// Configuração do Player de Música
function setupMusicPlayer() {
    const musicControls = document.getElementById('musicControls');
    const musicToggle = document.getElementById('musicToggle');
    const bgMusic = document.getElementById('bgMusic');
    const musicSource = document.getElementById('musicSource');

    // Apenas mostrar controles se a música estiver habilitada na configuração
    if (!config.music.enabled) {
        musicControls.style.display = 'none';
        return;
    }

    // Definir fonte de música e volume
    musicSource.src = config.music.musicUrl;
    bgMusic.volume = config.music.volume || 0.5;
    bgMusic.load();

    // Tentar reprodução automática se habilitada
    if (config.music.autoplay) {
        const playPromise = bgMusic.play();
        if (playPromise !== undefined) {
            playPromise.catch(error => {
                console.log("Reprodução automática impedida pelo navegador");
                musicToggle.textContent = config.music.startText;
            });
        }
    }

    // Alternar música ao clicar no botão
    musicToggle.addEventListener('click', () => {
        if (bgMusic.paused) {
            bgMusic.play();
            musicToggle.textContent = config.music.stopText;
        } else {
            bgMusic.pause();
            musicToggle.textContent = config.music.startText;
        }
    });
}