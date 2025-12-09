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
    {
        id: "jaqueta-zara-tech",
        nome: "Jaqueta Zara - Corta Vento Tech",
        preco: "R$ 122,90",
        categoria: "corta-vento",
        imgCapa: "camisaZara.jpeg",
        imagens: ["camisaZara.jpeg", "camisaZara (2).jpeg", "camisaZara (3).jpeg"],
        descricao: `
            <p><strong>Material Premium:</strong> Confeccionada em tecido tecnológico corta-vento.</p>
            <p>Ideal para dias frios. Modelagem Slim Fit.</p>
        `,
        tamanhos: ["P", "M", "G", "GG"],
        esgotados: ["P", "GG"]
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
        imgCapa: "nike-dryfit-azul1.jpeg",
        imagens: [
            "nike-dryfit-azul1.jpeg", 
            "nike-dryfit-azul2.jpeg", 
            "nike-dryfit-azul3.jpeg", 
            "nike-dryfit-azul4.jpeg", 
            "nike-dryfit-azul5.jpeg"
        ], 
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
        imagens: [
            "nike-dryfit-branca1.jpeg",
            "nike-dryfit-branca2.jpeg",
            "nike-dryfit-branca3.jpeg",
            "nike-dryfit-branca4.jpeg",
            "nike-dryfit-branca5.jpeg"
        ], 
        descricao: `
            <p><strong>Visual Clean:</strong> Camiseta branca com detalhes de costura preta (Outline).</p>
            <p>Tecnologia de absorção de suor para manter o corpo seco.</p>
            <p>Design moderno que valoriza o shape.</p>
        `,
        tamanhos: ["P", "M", "G", "GG"],
        esgotados: []
    },

    // --- BERMUDAS DRY FIT ---
    {
        id: "bermuda-nike-azul",
        nome: "Bermuda Nike Dry Fit - Azul Marinho",
        preco: "R$ 79,90", 
        categoria: "bermudas", 
        imgCapa: "nike-bermuda-azul1.jpeg",
        imagens: [
            "nike-bermuda-azul1.jpeg",
            "nike-bermuda-azul2.jpeg",
            "nike-bermuda-azul3.jpeg",
            "nike-bermuda-azul4.jpeg",
            "nike-bermuda-azul5.jpeg",
            "nike-bermuda-azul6.jpeg"
        ],
        descricao: `
            <p><strong>Conforto e Mobilidade:</strong> Bermuda em tecido Dry Fit leve e respirável.</p>
            <p>Ideal para treinos intensos, futebol e corrida.</p>
            <p>Cós elástico com cordão para ajuste perfeito.</p>
        `,
        tamanhos: ["P", "M", "G", "GG"],
        esgotados: []
    },

    // --- BERMUDAS JOGADOR ---
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
        nome: "Bermuda Jogador Premium - Preta",
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
    // NOVO PRODUTO: BERMUDA CINZA ESCURA
    {
        id: "bermuda-jogador-cinza-escura",
        nome: "Bermuda Jogador Jeans - Lavagem Cinza Escura",
        preco: "R$ 119,90", 
        categoria: "bermudas-jogador",
        imgCapa: "bermuda-jogador-cinza-escura.jpeg",
        imagens: ["bermuda-jogador-cinza-escura.jpeg"], 
        descricao: `
            <p><strong>Visual Moderno:</strong> Bermuda jeans com lavagem cinza escura estonada.</p>
            <p>Acabamento destroyed com rasgos e barra desfiada.</p>
            <p>Modelagem jogador para um look urbano e despojado.</p>
        `,
        tamanhos: ["38", "40", "42", "44", "46"],
        esgotados: []
    },

    // --- SNEAKERS ---
    {
        id: "nike-dunk",
        nome: "Nike Dunk Low Retro",
        preco: "R$ 599,90",
        categoria: "sneakers",
        imgCapa: "camisaZara.jpeg", 
        imagens: ["camisaZara.jpeg"],
        descricao: `
            <p><strong>Ícone do Basquete:</strong> Criado para as quadras, mas levado para as ruas.</p>
        `,
        tamanhos: ["39", "40", "41", "42"],
        esgotados: ["41"]
    }
];
