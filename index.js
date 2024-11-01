let iniciar = () => {
    fetch('https://api.github.com/users/ermogenes'); // dentro do fetch passa-se o url de algum recurso, e ele irá tentar acessar esse recurso sem recarregar a página
    // tentará fazer esse acesso por trás dos pano
}

document.addEventListener('DOMContentLoaded', iniciar);