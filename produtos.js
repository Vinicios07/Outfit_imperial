// LISTA DE PRODUTOS
const produtos = [
    // --- NOVO PRODUTO: JAQUETA BOMBER (A destacada) ---
    {
        id: "jaqueta-bomber-couro",
        nome: "Jaqueta Bomber Zara - Efeito Couro",
        preco: "R$ 329,90",
        categoria: "corta-vento", // Isso coloca ela na primeira seção
        imgCapa: "jaqueta-bomber.jpg",
        imagens: ["jaqueta-bomber.jpg"], // Se tiver foto das costas, adicione aqui
        descricao: `
            <p><strong>Estilo Urbano:</strong> Modelagem Bomber clássica com punhos elásticos.</p>
            <p>Confeccionada em material sintético com efeito couro de alta qualidade.</p>
            <p>Fechamento frontal com zíper e acabamento premium.</p>
        `,
        tamanhos: ["P", "M", "G", "GG"],
        esgotados: [] 
    },

    // --- PRODUTOS ANTERIORES ---
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
    {
        id: "nike-dunk",
        nome: "Nike Dunk Low Retro",
        preco: "R$ 599,90",
        categoria: "sneakers",
        imgCapa: "camisaZara.jpeg", // Lembre de trocar pela foto do tênis depois
        imagens: ["camisaZara.jpeg"],
        descricao: `
            <p><strong>Ícone do Basquete:</strong> Criado para as quadras, mas levado para as ruas.</p>
        `,
        tamanhos: ["39", "40", "41", "42"],
        esgotados: ["41"]
    }
];
