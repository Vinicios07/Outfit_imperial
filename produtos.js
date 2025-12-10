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

    // --- DRY FIT (AGORA SÓ TEM AS 4 CERTAS) ---
    {
        id: "nike-dryfit-azul",
        nome: "Camiseta Nike Dry Fit Performance - Azul Marinho",
        preco: "R$ 89,90", 
        categoria: "dryfit",
        imgCapa: "nike-dryfit-azul1.jpeg",
        imagens: ["nike-dryfit-azul1.jpeg", "nike-dryfit-azul2.jpeg", "nike-dryfit-azul3.jpeg", "nike-dryfit-azul4.jpeg", "nike-dryfit-azul5.jpeg"], 
        descricao: `
            <p><strong>Alta Performance:</strong> Tecido tecnológico que afasta o suor da pele.</p>
            <p>Ideal para treinos, academia e prática de esportes.</p>
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
            <p><strong>Design Exclusivo:</strong> Modelo com costura aparente em branco (Outline).</p>
            <p>Tecnologia Dry Fit avançada para máximo conforto térmico.</p>
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
            <p><strong>Visual Clean:</strong> Camiseta branca com detalhes de costura preta.</p>
            <p>Tecnologia de absorção de suor para manter o corpo seco.</p>
        `,
        tamanhos: ["P", "M", "G", "GG"],
        esgotados: [] 
    },
    {
        id: "nike-dryfit-azul-prateado",
        nome: "Camiseta Nike Dry Fit - Azul Prateado",
        preco: "R$ 99,90", 
        categoria: "dryfit",
        imgCapa: "jogador-prateado.jpeg",
        imagens: ["jogador-prateado.jpeg"], 
        descricao: `
            <p><strong>Detalhes Premium:</strong> Camiseta em tom azul com costuras em destaque prateado.</p>
            <p>Logo Nike vazado (Outline) grande no peito.</p>
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
            <p>Lavagem clássica azul com acabamento destroyed.</p>
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
            <p><strong>Atitude:</strong> Bermuda preta com cordão vermelho de destaque.</p>
            <p>Bolsos com bordado exclusivo 'XO'.</p>
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
            <p><strong>Visual Grunge:</strong> Lavagem cinza estonada com rasgos estratégicos.</p>
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
            <p><strong>Clean:</strong> Bermuda jeans branca com respingos de tinta preta.</p>
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
            <p><strong>Estilo Único:</strong> Tom off-white com lavagem acinzentada suave.</p>
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
            <p><strong>Destaque Neon:</strong> Bermuda com efeito degradê e cordão amarelo.</p>
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
            <p><strong>Detalhes Exclusivos:</strong> Botões e rebites em azul claro.</p>
        `,
        tamanhos: ["38", "40", "42", "44", "46"],
        esgotados: [] 
    },
    {
        id: "bermuda-jogador-corda-azul",
        nome: "Bermuda Jogador Premium - Corda Azul",
        preco: "R$ 129,90", 
        categoria: "bermudas-jogador", // AQUI ESTÁ A CORREÇÃO DA CATEGORIA
        imgCapa: "bermuda-jogador-corda-azul.jpeg", 
        imagens: ["bermuda-jogador-corda-azul.jpeg"], 
        descricao: `
            <p><strong>Destaque Urbano:</strong> Bermuda escura com cordão azul vibrante.</p>
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
            <p><strong>Leveza:</strong> Bermuda preta lisa com logo Nike bordado.</p>
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
