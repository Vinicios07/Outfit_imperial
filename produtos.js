// LISTA DE PRODUTOS
// Para adicionar um novo, basta copiar um bloco {...} e colar embaixo, mudando os dados.

const produtos = [
    {
        id: "jaqueta-zara", // ID único (não use espaços)
        nome: "Jaqueta Zara - Coleção 2024",
        preco: "R$ 260,00",
        categoria: "roupas", // 'roupas' ou 'sneakers'
        imgCapa: "camisaZara.jpeg",
        imagens: ["camisaZara.jpeg", "camisaZara (2).jpeg", "camisaZara (3).jpeg"],
        descricao: `
            <p><strong>Material Premium:</strong> Confeccionada em tecido tecnológico corta-vento.</p>
            <p>Ideal para dias frios. Modelagem Slim Fit.</p>
            <p>Peça exclusiva com acabamento reforçado.</p>
        `,
        tamanhos: ["P", "M", "G", "GG"],
        esgotados: ["P", "GG"] // Lista dos tamanhos que devem aparecer riscados
    },
    
    {
        id: "nike-dunk",
        nome: "Nike Dunk Low Retro",
        preco: "R$ 250,90",
        categoria: "sneakers",
        imgCapa: "camisaZara.jpeg", // Troque pela foto do tenis
        imagens: ["camisaZara.jpeg"], // Adicione mais fotos se tiver
        descricao: `
            <p><strong>Ícone do Basquete:</strong> Criado para as quadras, mas levado para as ruas.</p>
            <p>O ícone do basquete dos anos 80 retorna com detalhes clássicos.</p>
        `,
        tamanhos: ["39", "40", "41", "42"],
        esgotados: ["41"]
    }
];
