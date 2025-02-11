document.addEventListener('DOMContentLoaded', function () {
    const nameElement = document.querySelector('#name');
    const usernameElement = document.querySelector('#username');
    const avatarElement = document.querySelector('#avatar');
    const reposElement = document.querySelector('#repos');
    const followersElement = document.querySelector('#followers');
    const followingElement = document.querySelector('#following');
    const linkElement = document.querySelector('#link');

    fetch('https://api.github.com/users/edield7')
        .then(function (res) {
            if (!res.ok) {
                throw new Error(`Erro na requisição: ${res.status}`);
            }
            return res.json();
        })
        .then(function (json) {
            try {
                if (!json) throw new Error("Resposta vazia da API");

                nameElement.innerText = json.name || "Nome não disponível";
                usernameElement.innerText = json.login || "Usuário não encontrado";
                avatarElement.src = json.avatar_url || "";
                followingElement.innerText = json.following ?? "0";
                followersElement.innerText = json.followers ?? "0";
                reposElement.innerText = json.public_repos ?? "0";
                linkElement.href = json.html_url || "#";
            } catch (error) {
                alert("Erro ao atualizar os elementos do DOM:", error);
            }
        })
        .catch(function (error) {
            alert("Erro ao buscar dados do GitHub:", error);
        });
});
