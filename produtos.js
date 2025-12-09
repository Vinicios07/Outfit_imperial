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

    // --- DRY FIT (NOVO) ---
    {
        id: "nike-dryfit-azul",
        nome: "Camiseta Nike Dry Fit Performance - Azul Marinho",
        preco: "R$ 89,90", // Coloquei um preço base, pode ajustar
        categoria: "dryfit", // ATENÇÃO: Categoria nova
        imgCapa: "nike-dryfit-azul.jpeg",
        imagens: ["nike-dryfit-azul.jpeg"], 
        descricao: `
            <p><strong>Alta Performance:</strong> Tecido tecnológico que afasta o suor da pele.</p>
            <p>Ideal para treinos, academia e prática de esportes.</p>
            <p>Leveza e liberdade de movimento.</p>
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
