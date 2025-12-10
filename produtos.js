// LISTA DE PRODUTOS
const produtos = [
    // --- COLEÇÃO DE INVERNO (JAQUETAS) ---
    {
        id: "jaqueta-couro-gola",
        nome: "Jaqueta Zara - Gola Alta Premium",
        preco: "R$ 329,90",
        categoria: "corta-vento", 
        imgCapa: "jaqueta-top.jpeg", 
        imagens: ["jaqueta-top.jpeg"], 
        descricao: `
            <p><strong>Design Sofisticado:</strong> Jaqueta de couro sintético com gola alta estruturada.</p>
            <p>Modelagem reta e limpa, perfeita para um visual mais sério e elegante.</p>
        `,
        tamanhos: ["P", "M", "G", "GG"],
        esgotados: [] 
    },
    {
        id: "jaqueta-bomber-couro",
        nome: "Jaqueta Bomber Zara - Efeito Couro",
        preco: "R$ 329,90",
        categoria: "corta-vento", 
        imgCapa: "jaqueta-bomber.jpeg", 
        imagens: ["jaqueta-bomber.jpeg"], 
        descricao: `
            <p><strong>Estilo Urbano:</strong> Modelagem Bomber clássica com punhos elásticos.</p>
            <p>Confeccionada em material sintético com efeito couro de alta qualidade.</p>
        `,
        tamanhos: ["P", "M", "G", "GG"],
        esgotados: [] 
    },

    // --- OVERSIZED ---
    {
        id: "palm-angels-wings",
        nome: "Camiseta Oversized Palm Angels - Wings",
        preco: "R$ 189,90",
        categoria: "oversized",
        imgCapa: "palm-angels-oversized.jpeg",
        imagens: ["palm-angels-oversized.jpeg"], 
        descricao: `
            <p><strong>Streetwear de Luxo:</strong> Camiseta Oversized com a icônica estampa de asas.</p>
            <p>Malha pesada de alta gramatura e caimento perfeito.</p>
        `,
        tamanhos: ["P", "M", "G", "GG"],
        esgotados: [] 
    },

    // --- DRY FIT ---
    {
        id: "nike-dryfit-azul",
        nome: "Camiseta Nike Dry Fit Performance - Azul Marinho",
        preco: "R$ 89,90", 
        categoria: "dryfit",
        imgCapa: "camiseta-nike-dryfit-azul-rei.jpeg",
        imagens: ["camiseta-nike-dryfit-azul-rei.jpeg"], 
        descricao: `
            <p><strong>Alta Performance:</strong> Tecido tecnológico que afasta o suor da pele.</p>
            <p>Ideal para treinos, academia e prática de esportes.</p>
            <p>Leveza e liberdade de movimento.</p>
        `,
        tamanhos: ["P", "M", "G", "GG"],
        esgotados: [] 
    },
    {
        id: "nike-dryfit-outline-preta",
        nome: "Camiseta Nike Dry Fit Outline - Preta",
        preco: "R$ 99,90", 
        categoria: "dryfit",
        imgCapa: "nike-dryfit-preta1.jpeg",
        imagens: ["nike-dryfit-preta1.jpeg", "nike-dryfit-preta2.jpeg", "nike-dryfit-preta3.jpeg"], 
        descricao: `
            <p><strong>Design Exclusivo:</strong> Modelo com costura aparente em branco (Outline) e logo vazado.</p>
            <p>Tecnologia Dry Fit avançada para máximo conforto térmico.</p>
            <p>Ajuste perfeito ao corpo.</p>
        `,
        tamanhos: ["P", "M", "G", "GG"],
        esgotados: [] 
    },
    {
        id: "nike-dryfit-outline-branca",
        nome: "Camiseta Nike Dry Fit Outline - Branca",
        preco: "R$ 99,90", 
        categoria: "dryfit",
        imgCapa: "nike-dryfit-branca1.jpeg",
        imagens: ["nike-dryfit-branca1.jpeg", "nike-dryfit-branca2.jpeg", "nike-dryfit-branca3.jpeg", "nike-dryfit-branca4.jpeg", "nike-dryfit-branca5.jpeg"], 
        descricao: `
            <p><strong>Visual Clean:</strong> Camiseta branca com detalhes de costura preta (Outline).</p>
            <p>Tecnologia de absorção de suor para manter o corpo seco.</p>
            <p>Design moderno que valoriza o shape.</p>
        `,
        tamanhos: ["P", "M", "G", "GG"],
        esgotados: [] 
    },

    // --- BERMUDAS DRY FIT (TACTEL) ---
    {
        id: "bermuda-nike-azul",
        nome: "Bermuda Nike Dry Fit - Azul Marinho",
        preco: "R$ 79,90", 
        categoria: "bermudas", 
        imgCapa: "nike-bermuda-azul1.jpeg",
        imagens: ["nike-bermuda-azul1.jpeg", "nike-bermuda-azul2.jpeg", "nike-bermuda-azul3.jpeg", "nike-bermuda-azul4.jpeg", "nike-bermuda-azul5.jpeg", "nike-bermuda-azul6.jpeg"],
        descricao: `
            <p><strong>Conforto e Mobilidade:</strong> Bermuda em tecido Dry Fit leve e respirável.</p>
            <p>Ideal para treinos intensos, futebol e corrida.</p>
            <p>Cós elástico com cordão para ajuste perfeito.</p>
        `,
        tamanhos: ["P", "M", "G", "GG"],
        esgotados: [] 
    },

    // --- BERMUDAS JOGADOR (JEANS / PREMIUM) ---
    {
        id: "bermuda-jeans-jogador",
        nome: "Bermuda Jeans Jogador - Azul Distressed",
        preco: "R$ 119,90", 
        categoria: "bermudas-jogador",
        imgCapa: "bermuda-jeans-jogador.jpeg",
        imagens: ["bermuda-jeans-jogador.jpeg"], 
        descricao: `
            <p><strong>Estilo Streetwear:</strong> Bermuda jeans com modelagem 'Jogador' (Jorts).</p>
            <p>Acabamento destroyed (rasgado) e barra desfiada.</p>
            <p>Lavagem clássica azul.</p>
        `,
        tamanhos: ["38", "40", "42", "44", "46"],
        esgotados: [] 
    },
    {
        id: "bermuda-jogador-preta",
        nome: "Bermuda Jogador Premium - Preta (Corda Vermelha)",
        preco: "R$ 129,90", 
        categoria: "bermudas-jogador",
        imgCapa: "bermuda-jogador-preta.jpeg",
        imagens: ["bermuda-jogador-preta.jpeg"], 
        descricao: `
            <p><strong>Atitude e Estilo:</strong> Bermuda preta com detalhes destroyed e cordão vermelho de destaque.</p>
            <p>Bolsos com bordado exclusivo 'XO' e costuras reforçadas.</p>
            <p>Modelagem confortável e moderna.</p>
        `,
        tamanhos: ["38", "40", "42", "44", "46"],
        esgotados: [] 
    },
    {
        id: "bermuda-jogador-cinza",
        nome: "Bermuda Jogador Jeans - Lavagem Cinza",
        preco: "R$ 119,90", 
        categoria: "bermudas-jogador",
        imgCapa: "bermuda-jogador-cinza.jpeg",
        imagens: ["bermuda-jogador-cinza.jpeg"], 
        descricao: `
            <p><strong>Visual Grunge:</strong> Bermuda jeans com lavagem cinza estonada (Acid Wash).</p>
            <p>Rasgos estratégicos e modelagem ampla estilo jogador.</p>
            <p>Peça chave para quem curte um visual diferenciado.</p>
        `,
        tamanhos: ["38", "40", "42", "44", "46"],
        esgotados: [] 
    },
    {
        id: "bermuda-jogador-branca",
        nome: "Bermuda Jogador Jeans - Lavagem Branca",
        preco: "R$ 119,90", 
        categoria: "bermudas-jogador",
        imgCapa: "bermuda-jogador-branca.jpeg",
        imagens: ["bermuda-jogador-branca.jpeg"], 
        descricao: `
            <p><strong>Clean e Arrojado:</strong> Bermuda jeans branca com respingos de tinta preta.</p>
            <p>Acabamento da barra desfiado e modelagem confortável.</p>
            <p>Ideal para compor looks leves e estilosos.</p>
        `,
        tamanhos: ["38", "40", "42", "44", "46"],
        esgotados: [] 
    },
    {
        id: "bermuda-jogador-branca-acinzentada",
        nome: "Bermuda Jogador - Branca Acinzentada",
        preco: "R$ 119,90", 
        categoria: "bermudas-jogador",
        imgCapa: "bermuda-jogador-branca-acinzentada.jpeg",
        imagens: ["bermuda-jogador-branca-acinzentada.jpeg"], 
        descricao: `
            <p><strong>Estilo Único:</strong> Bermuda jeans em tom off-white com lavagem acinzentada suave.</p>
            <p>Detalhes destroyed e manchas de tinta sutis.</p>
            <p>A combinação perfeita entre o claro e o urbano.</p>
        `,
        tamanhos: ["38", "40", "42", "44", "46"],
        esgotados: [] 
    },
    {
        id: "bermuda-jogador-degrade-amarelo",
        nome: "Bermuda Jogador - Degradê Cordão Amarelo",
        preco: "R$ 129,90", 
        categoria: "bermudas-jogador",
        imgCapa: "bermuda-jogador-degrade-amarelo.jpeg", 
        imagens: ["bermuda-jogador-degrade-amarelo.jpeg"], 
        descricao: `
            <p><strong>Destaque Neon:</strong> Bermuda com efeito degradê (preto/cinza) e cordão amarelo.</p>
            <p>Botão amarelo personalizado e detalhes destroyed.</p>
            <p>Para quem gosta de um visual marcante.</p>
        `,
        tamanhos: ["38", "40", "42", "44", "46"],
        esgotados: [] 
    },
    {
        id: "bermuda-jogador-botoes-azuis",
        nome: "Bermuda Jogador Jeans - Botões Azuis",
        preco: "R$ 129,90", 
        categoria: "bermudas-jogador",
        imgCapa: "bermuda-jogador-botoes-azuis.jpeg", 
        imagens: ["bermuda-jogador-botoes-azuis.jpeg"], 
        descricao: `
            <p><strong>Detalhes Exclusivos:</strong> Bermuda jeans cinza escura com botões e rebites em azul claro.</p>
            <p>Acabamento destroyed e lavagem estonada.</p>
        `,
        tamanhos: ["38", "40", "42", "44", "46"],
        esgotados: [] 
    },
    {
        id: "bermuda-jogador-corda-azul",
        nome: "Bermuda Jogador Premium - Corda Azul",
        preco: "R$ 129,90", 
        categoria: "bermudas-jogador",
        imgCapa: "bermuda-jogador-corda-azul.jpeg", 
        imagens: ["bermuda-jogador-corda-azul.jpeg"], 
        descricao: `
            <p><strong>Destaque Urbano:</strong> Bermuda escura com cordão azul vibrante.</p>
            <p>Acabamento destroyed e modelagem confortável.</p>
        `,
        tamanhos: ["38", "40", "42", "44", "46"],
        esgotados: [] 
    },
    {
        id: "bermuda-nike-jogador-preta",
        nome: "Bermuda Nike Jogador - Preta",
        preco: "R$ 89,90", 
        categoria: "bermudas-jogador", 
        imgCapa: "bermuda-nike-jogador.jpeg",
        imagens: ["bermuda-nike-jogador.jpeg"], 
        descricao: `
            <p><strong>Leveza e Estilo:</strong> Bermuda preta lisa com logo Nike bordado.</p>
            <p>Tecido tactel/microfibra de secagem rápida.</p>
            <p>Ideal para uso casual, praia ou futebol.</p>
        `,
        tamanhos: ["P", "M", "G", "GG"],
        esgotados: [] 
    }
];
