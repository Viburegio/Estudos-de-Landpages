const CONFIG = {
    valentineName: "Ariane",

    pageTitle: "Quer Ser Minha Namorada? 💝",

    floatingEmojis: {
        hearts: ['❤️', '💖', '🦟', '💗', '💓'],
        bears: ['🦟', '🦟']                       
    },

    // Perguntas e respostas
    questions: {
        first: {
            text: "Você gosta de mim?",                                    // Primeira interação
            yesBtn: "Sim",                                             // Texto para o botão "Sim"
            noBtn: "Não",                                               // Texto para o botão "Não"
            secretAnswer: "Eu não gosto de você, eu te amo! ❤️"           // Mensagem secreta ao passar o mouse
        },
        second: {
            text: "Quanto você me ama?",                          // Para o medidor de amor
            startText: "Pense bem!",                                   // Texto antes da porcentagem
            nextBtn: "Próximo ❤️"                                         // Texto para o botão próximo
        },
        third: {
            text: "Você quer ser minha namorada?", // A grande pergunta!
            yesBtn: "Sim!",                                             // Texto para o botão "Sim"
            noBtn: "Não"                                                 // Texto para o botão "Não"
        }
    },

    // Mensagens do medidor de amor
    // Elas aparecem dependendo de quanto deslizam o medidor
    loveMessages: {
        extreme: "Agora sim 🥰❤️",  // Aparece quando passam de 5000%
        high: "Ta melhorando! ❤️",              // Aparece quando passam de 1000%
        normal: "Só isso?"                           // Aparece quando passam de 100%
    },

    // Mensagens que aparecem depois que dizem "Sim!"
    celebration: {
        title: "Eba! Eu sou a pessoa mais sortuda do mundo! 🎉💝💖💝💓",
        message: "Agora venha buscar seu presente, um grande abraço quente e um enorme beijo!"
        // Nota: Removemos os emojis de celebração pois agora temos uma imagem
    },

    // Esquema de cores para o site
    colors: {
        backgroundStart: "#ffafbd",      // Início do gradiente (tente cores pastéis para um visual suave)
        backgroundEnd: "#ffc3a0",        // Fim do gradiente (deve complementar backgroundStart)
        buttonBackground: "#ff6b6b",     // Cor do botão (deve se destacar contra o fundo)
        buttonHover: "#ff8787",          // Cor do botão ao passar o mouse (ligeiramente mais clara que buttonBackground)
        textColor: "#ff4757"             // Cor do texto (certifique-se de que seja legível!)
    },

    // Configurações de animação
    // Ajuste estes se quiser animações mais rápidas/mais lentas
    animations: {
        floatDuration: "15s",           // Quanto tempo leva para os corações flutuarem (10-20s recomendado)
        floatDistance: "50px",          // Quão longe os corações se movem lateralmente (30-70px recomendado)
        bounceSpeed: "0.5s",            // Velocidade das animações de quique (0.3-0.7s recomendado)
        heartExplosionSize: 1.5         // Tamanho do efeito de explosão de coração (1.2-2.0 recomendado)
    },

    // Música de Fundo (Opcional)
    // Adicione seu próprio URL de música após obter as licenças adequadas
    music: {
        enabled: true,                     // Recurso de música habilitado
        autoplay: true,                    // Tenta reproduzir automaticamente (nota: alguns navegadores podem bloquear isso)
        musicUrl: "https://res.cloudinary.com/dncywqfpb/video/upload/v1738399057/music_qrhjvy.mp3", // URL de streaming de música
        startText: "🎵 Tocar Música",        // Texto do botão para iniciar a música
        stopText: "🔇 Parar Música",         // Texto do botão para parar a música
        volume: 0.5                        // Nível de volume (0.0 a 1.0)
    }
};

// Não modifique nada abaixo desta linha a menos que saiba o que está fazendo
window.VALENTINE_CONFIG = CONFIG;