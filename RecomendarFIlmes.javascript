// Lista de filmes com título e gênero
const filmes = [
    { titulo: "A Origem", genero: "Sci-Fi" },
    { titulo: "O Senhor dos Anéis", genero: "Fantasia" },
    { titulo: "O Poderoso Chefão", genero: "Drama" },
    { titulo: "Toy Story", genero: "Animação" },
    { titulo: "Pulp Fiction", genero: "Ação" },
    { titulo: "Matrix", genero: "Sci-Fi" },
    { titulo: "Harry Potter", genero: "Fantasia" },
    { titulo: "Corra!", genero: "Terror" },
    { titulo: "Divertida Mente", genero: "Animação" }
];

// Função que recomenda filmes com base no gênero
function recomendarFilmes(genero) {
    const recomendacoes = filmes.filter(filme => filme.genero.toLowerCase() === genero.toLowerCase());

    if (recomendacoes.length > 0) {
        console.log(`Filmes recomendados no gênero ${genero}:`);
        recomendacoes.forEach(filme => console.log(`- ${filme.titulo}`));
    } else {
        console.log(`Desculpe, não encontramos filmes no gênero "${genero}".`);
    }
}

// Solicita ao usuário para inserir um gênero e recomenda filmes
const generoDesejado = prompt("Digite o gênero de filme que você deseja (Ex: Sci-Fi, Drama, Ação, etc.):");
recomendarFilmes(generoDesejado);
