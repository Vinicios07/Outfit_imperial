// LISTA DE PRODUTOS
const produtos = [
    // --- COLEÇÃO DE INVERNO (JAQUETAS) ---
    {
        id: "jaqueta-zara-tech",
        nome: "Jaqueta Zara - Corta Vento Tech",
        preco: "R$ 122,90",
        categoria: "inverno",
        imgCapa: "camisaZara.jpeg",
        imagens: ["camisaZara.jpeg", "camisaZara (2).jpeg", "camisaZara (3).jpeg"],
        descricao: `
            <p><strong>Material Premium:</strong> Confeccionada em tecido tecnológico corta-vento.</p>
            <p>Ideal para dias frios. Modelagem Slim Fit.</p>
            <p>Acabamento impecável e cor branca versátil.</p>
        `,
        tamanhos: ["P", "M", "G", "GG"],
        esgotados: ["P", "GG"]
    },
    {
        id: "jaqueta-bomber-couro",
        nome: "Jaqueta Bomber Zara - Efeito Couro",
        preco: "R$ 329,90",
        categoria: "inverno", 
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
    {
        id: "oversized-jordan-bege",
        nome: "Camiseta Oversized Jordan - Bege",
        preco: "R$ 139,90", 
        categoria: "oversized",
        imgCapa: "oversized-jordan-bege.jpeg",
        imagens: ["oversized-jordan-bege.jpeg", "oversized-jordan-bege2.jpeg"], 
        descricao: `
            <p><strong>Streetwear Premium:</strong> Camiseta Oversized Jordan na cor bege/areia.</p>
            <p>Logo quadrado centralizado em destaque e etiqueta na gola.</p>
            <p>Malha encorpada de alta qualidade.</p>
        `,
        tamanhos: ["P", "M", "G", "GG"],
        esgotados: [] 
    },
    {
        id: "oversized-jordan-box",
        nome: "Camiseta Jordan - Bege Box Logo",
        preco: "R$ 139,90", 
        categoria: "oversized",
        imgCapa: "jordan-bege-box.jpeg",
        imagens: ["jordan-bege-box.jpeg", "jordan-bege-box2.jpeg"], 
        descricao: `
            <p><strong>Estilo Clássico:</strong> Camiseta em tom bege areia com logo Jordan Box vermelho centralizado.</p>
            <p>Etiqueta interna exclusiva e acabamento de alta qualidade.</p>
            <p>Perfeita para compor um visual streetwear limpo e sofisticado.</p>
        `,
        tamanhos: ["P", "M", "G", "GG"],
        esgotados: [] 
    },
    {
        id: "oversized-nike-preta",
        nome: "Camiseta Oversized Nike - Preta Logo",
        preco: "R$ 139,90", 
        categoria: "oversized",
        imgCapa: "oversized-nike-preta.jpeg",
        imagens: ["oversized-nike-preta.jpeg", "oversized-nike-preta2.jpeg"], 
        descricao: `
            <p><strong>Estilo e Conforto:</strong> Camiseta Oversized preta com logo artístico centralizado.</p>
            <p>Tecido premium de toque macio e caimento amplo.</p>
            <p>Peça chave para um look streetwear moderno.</p>
        `,
        tamanhos: ["P", "M", "G", "GG"],
        esgotados: [] 
    },
    {
        id: "oversized-nike-colorida",
        nome: "Camiseta Oversized Nike - Logo Colorido",
        preco: "R$ 139,90", 
        categoria: "oversized",
        imgCapa: "oversized-nike-colorida.jpeg",
        imagens: ["oversized-nike-colorida.jpeg", "oversized-nike-colorida2.jpeg"], 
        descricao: `
            <p><strong>Detalhe Exclusivo:</strong> Camiseta preta com logo Nike estilizado e colorido no peito.</p>
            <p>Malha macia com caimento oversized perfeito.</p>
            <p>Uma peça diferenciada para destacar seu visual.</p>
        `,
        tamanhos: ["P", "M", "G", "GG"],
        esgotados: [] 
    },
    {
        id: "oversized-adidas-trio",
        nome: "Camiseta Oversized Adidas - Graffiti",
        preco: "R$ 139,90", 
        categoria: "oversized",
        imgCapa: "oversized-adidas-trio.jpeg",
        imagens: ["oversized-adidas-trio.jpeg"], 
        descricao: `
            <p><strong>Arte Urbana:</strong> Estampa exclusiva estilo graffiti nas costas (tênis Adidas).</p>
            <p>Disponível em 3 cores: <strong>Verde Militar, Preto e Marrom Terracota</strong>.</p>
            <p>Modelagem ampla e confortável.</p>
        `,
        tamanhos: ["P", "M", "G", "GG"],
        esgotados: [] 
    },
    {
        id: "oversized-supreme-knitting",
        nome: "Camiseta Oversized Supreme - Knitting",
        preco: "R$ 139,90", 
        categoria: "oversized",
        imgCapa: "oversized-supreme-trio.jpeg",
        imagens: ["oversized-supreme-trio.jpeg"], 
        descricao: `
            <p><strong>Ícone Streetwear:</strong> Estampa clássica da Supreme "Knitting" (tricotando dinheiro).</p>
            <p>Disponível em 4 cores: <strong>Preto, Branco, Cinza e Amarelo</strong>.</p>
            <p>Caimento oversized autêntico e malha de alta qualidade.</p>
        `,
        tamanhos: ["P", "M", "G", "GG"],
        esgotados: [] 
    },
    {
        id: "oversized-ice-blue",
        nome: "Camiseta Oversized - Ice Blue Graphic",
        preco: "R$ 139,90", 
        categoria: "oversized",
        imgCapa: "oversized-ice-blue.jpeg",
        imagens: ["oversized-ice-blue.jpeg"], 
        descricao: `
            <p><strong>Minimalista e Moderna:</strong> Camiseta oversized em tom azul gelo (Ice Blue).</p>
            <p>Estampa minimalista no peito e corte quadrado.</p>
            <p>Malha premium com caimento estruturado.</p>
        `,
        tamanhos: ["P", "M", "G", "GG"],
        esgotados: [] 
    },

    // --- DRY FIT ---
    
    // NOVOS PRODUTOS INDIVIDUAIS
    {
        id: "dryfit-swoosh-vermelha",
        nome: "Camiseta Nike Dry Fit Classic - Vermelha",
        preco: "R$ 89,90", 
        categoria: "dryfit",
        imgCapa: "dryfit-swoosh-vermelha.jpeg",
        imagens: ["dryfit-swoosh-vermelha.jpeg"], 
        descricao: `
            <p><strong>Energia e Performance:</strong> Camiseta vermelha vibrante com o clássico Swoosh da Nike.</p>
            <p>Tecnologia que mantém o corpo seco durante o treino.</p>
            <p>Ajuste confortável para qualquer esporte.</p>
        `,
        tamanhos: ["P", "M", "G", "GG"],
        esgotados: [] 
    },
    {
        id: "dryfit-swoosh-cinza",
        nome: "Camiseta Nike Dry Fit Classic - Cinza",
        preco: "R$ 89,90", 
        categoria: "dryfit",
        imgCapa: "dryfit-swoosh-cinza.jpeg",
        imagens: ["dryfit-swoosh-cinza.jpeg"], 
        descricao: `
            <p><strong>Básico Essencial:</strong> Camiseta cinza chumbo, perfeita para combinar com tudo.</p>
            <p>Tecido leve e respirável de secagem rápida.</p>
            <p>Ideal para academia e corrida.</p>
        `,
        tamanhos: ["P", "M", "G", "GG"],
        esgotados: [] 
    },
    {
        id: "dryfit-swoosh-preta",
        nome: "Camiseta Nike Dry Fit Classic - Preta",
        preco: "R$ 89,90", 
        categoria: "dryfit",
        imgCapa: "dryfit-swoosh-preta.jpeg",
        imagens: ["dryfit-swoosh-preta.jpeg"], 
        descricao: `
            <p><strong>O Clássico:</strong> Camiseta preta com logo branco. A peça que todo homem precisa.</p>
            <p>Tecido Dry Fit original para máximo desempenho.</p>
            <p>Conforto térmico e estilo discreto.</p>
        `,
        tamanhos: ["P", "M", "G", "GG"],
        esgotados: [] 
    },
    {
        id: "dryfit-swoosh-branca",
        nome: "Camiseta Nike Dry Fit Classic - Branca",
        preco: "R$ 89,90", 
        categoria: "dryfit",
        imgCapa: "dryfit-swoosh-branca.jpeg",
        imagens: ["dryfit-swoosh-branca.jpeg"], 
        descricao: `
            <p><strong>Clean e Leve:</strong> Camiseta branca para um visual limpo e fresco.</p>
            <p>Tecido de alta tecnologia que evita o suor.</p>
            <p>Perfeita para dias quentes e treinos intensos.</p>
        `,
        tamanhos: ["P", "M", "G", "GG"],
        esgotados: [] 
    },

    // (OUTROS MODELOS ANTERIORES)
    {
        id: "nike-dryfit-cores-variadas",
        nome: "Camiseta Nike Dry Fit Outline - Cores Variadas",
        preco: "R$ 99,90", 
        categoria: "dryfit",
        imgCapa: "nike-dryfit-cores.jpeg",
        imagens: ["nike-dryfit-cores.jpeg"], 
        descricao: `
            <p><strong>Coleção Completa:</strong> Camisetas Nike Dry Fit com costura Outline.</p>
            <p>Disponível em várias cores: <strong>Azul Marinho, Vermelho, Cinza Chumbo e Preto</strong>.</p>
            <p>Escolha a sua cor favorita ao falar com o vendedor.</p>
        `,
        tamanhos: ["P", "M", "G", "GG"],
        esgotados: [] 
    },
    {
        id: "nike-dryfit-costura-branca",
        nome: "Camiseta Nike Dry Fit - Preta Outline",
        preco: "R$ 99,90", 
        categoria: "dryfit",
        imgCapa: "nike-dryfit-costura-branca.jpeg",
        imagens: ["nike-dryfit-costura-branca.jpeg"], 
        descricao: `
            <p><strong>Visual Esportivo:</strong> Camiseta preta com detalhes de costura exposta em branco (outline).</p>
            <p>Logo Nike centralizado no peito.</p>
        `,
        tamanhos: ["P", "M", "G", "GG"],
        esgotados: [] 
    },
    {
        id: "nike-dryfit-branca-swoosh-outline",
        nome: "Camiseta Nike Dry Fit - Branca Big Swoosh",
        preco: "R$ 99,90", 
        categoria: "dryfit",
        imgCapa: "nike-dryfit-branca-swoosh.jpeg",
        imagens: ["nike-dryfit-branca-swoosh.jpeg"], 
        descricao: `
            <p><strong>Estilo Moderno:</strong> Camiseta branca com costuras pretas aparentes (Outline).</p>
            <p>Destaque para o logo Big Swoosh vazado no peito.</p>
        `,
        tamanhos: ["P", "M", "G", "GG"],
        esgotados: [] 
    },
    {
        id: "kit-nike-dryfit-preto-branco",
        nome: "Kit Nike Dry Fit - Preto e Branco",
        preco: "R$ 119,90", 
        categoria: "dryfit",
        imgCapa: "kit-nike-dryfit-preto-branco.jpeg",
        imagens: ["kit-nike-dryfit-preto-branco.jpeg"], 
        descricao: `
            <p><strong>Conjunto Completo:</strong> Kit de camiseta e bermuda em Dry Fit.</p>
            <p>Design clássico preto com faixas brancas.</p>
        `,
        tamanhos: ["P", "M", "G", "GG"],
        esgotados: [] 
    },
    {
        id: "kit-nike-dryfit-azul",
        nome: "Kit Nike Dry Fit - Azul Marinho",
        preco: "R$ 119,90", 
        categoria: "dryfit",
        imgCapa: "kit-nike-dryfit-azul.jpeg",
        imagens: ["kit-nike-dryfit-azul.jpeg"], 
        descricao: `
            <p><strong>Conjunto Completo:</strong> Kit de camiseta e bermuda na cor Azul Marinho.</p>
            <p>Detalhes em faixa branca lateral.</p>
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
