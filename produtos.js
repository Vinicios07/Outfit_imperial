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

    // --- BERMUDAS DRY FIT (NOVA SEÇÃO) ---
    {
        id: "bermuda-nike-azul",
        nome: "Bermuda Nike Dry Fit - Azul Marinho",
        preco: "R$ 79,90", // Preço sugerido
        categoria: "bermudas", // Categoria nova
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
