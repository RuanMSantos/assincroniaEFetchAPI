const exibirInfoUsuario = (usuario) => {
    console.log(`O usuario ${usuario.login} possui ${usuario.followers} seguidores`);
}

// primeira forma
/*
let iniciar = () => {
    //const response = fetch('https://api.github.com/users/ermogenes'); // dentro do fetch passa-se o url de algum recurso, e ele irá tentar acessar esse recurso sem recarregar a página
    // tentará fazer esse acesso por trás dos pano
    // variavel geralmente chamada de response = resposta
    // retorna promisse, uma promessa de que ele ia tentar acessar o url e quando a comunicação terminasse
    // ele iria disponibilizar através do response a possibilidade de continuar o processamento
    // a promisse leva um tempo para ocorrer, por isso assincrona

    // os dados não são processados no mesmo momento, isso pode visto em um console.log da variavel
    /*
    console.log('Antes do fetch');
    fetch('https://api.github.com/users/ermogenes') // o comando ocorre de forma assincrona, enquanto o programa continua
        .then((response) => console.log(response)); // then significa então, e ele faz algo após o fetch
    console.log('Depois do fetch');
    
    fetch('https://api.github.com/users/ermogenes')
    .then((response) => response.json()) // transforma o json da api em um obj js
    .then((result) => exibirInfoUsuario(result)) // após isso, exibe o resultado. Geralmente usa-se result
    .then(() => console.log('Depois do fetch')); // para manter a sequencia e garantir que os comandos
    // ocorram em sequencia, é possível passar os comandos no then, o que garante que eles só ocorram depois da consulta
    // também é possivel passar functions mais complexas e vindas de fora, como no exemplo a cima
    // a informação é online, onde você faz uma integração com a aplicação do github, neste caso, através da API
    


};*/

/*
let iniciar = async () => { // o comando async deve ser usado em conjunto com o await, pois com ele
    // o comando diz que a function retorna também uma promisse e não um void, o que é necessário para execução
    const response = await fetch('https://api.github.com/users/ermogenes'); // o comando await espera a execução
    // do comando ocorrer para continuar a function, tornado ela síncrona
    // console.log(response); // agora este comando só ocorrerá após o fetch acima
    const result = response.json();
    exibirInfoUsuario(result); // percebe-se que a forma de escrever é bem parecida com o primeiro exemplo
};*/

// excessão, primeira forma
/*
let iniciar = () => {

    fetch('https://api.github.com/users123/ermogenes')
        .then((response) => {
            if (response.ok){ // caso tenha conseguido pegar os dados
                return response.json();
            } else {
                throw new Error(response.status); // é necessário criar um erro, pois caso ele não consiga
                // conectar, ele não identificará isso como erro e o catch não vai funcionar
                // statusText mostra qual o status, exemplo 404, porém em texto
            }
        })
        .then((result) => exibirInfoUsuario(result))
        .catch((error) => console.log(`Erro encontrado: ${error.message}`)) // o catch serve para dar um tratamento a todos os then
        // que vieram antes de ser chamado, caso algum de erro
        // o parametro error vai receber informações sobre o erro ocorrido, por isso é possível exibir sua mensagem
        .then(() => console.log('Depois do fetch'));
}; */

let iniciar = async () => {
    try {
        const response = await fetch('https://api.github.com/users/ermogenes');
        if (response.ok){
            const result = await response.json();
            exibirInfoUsuario(result);
        } else {
            throw new Error(response.status);
        }
    } catch (error){
        console.log(`Erro encontrado: ${error.message}`);
    }
};

// endereço de api disponível na web se chama end point

document.addEventListener('DOMContentLoaded', iniciar);