//Detecta o clique nos botões criados dinamicamente.
        document.addEventListener('click', (e) => {
            if (e.target && e.target.classList.contains('acessarFilme')) {
                const url = e.target.dataset.url;
                window.open(url,'_blank')
            }
            if(e.target && e.target.classList.contains('excluirFilme')){

                const response = confirm('Tem certeza que deseja excluir esse filme?');
                if(response){
                    const id = e.target.dataset.id;
                    document.getElementById(id).remove();
                }
            }
        });

        //Objeto que armazena os dados do filme.
        let dados = {
            titulo: '',
            ano: 0,
            categoria: '',
            link: ''
        };

        // Atualiza os dados conforme o usuário preenche o formulário.
        const atualizarDados = () => {

            dados = {
                titulo: document.getElementById('titulo').value,
                ano: document.getElementById('ano').value,
                categoria: document.getElementById('categoria').value,
                link: document.getElementById('link').value
            };

            // Transforma o objeto em uma string JSON
            document.getElementById('debug').innerHTML =
                JSON.stringify(dados);

        };

        //Monta o HTML de um filme.
        const montaItem = () => {
            const id = new Date().getTime();
            const item = `
                <tr id="${id}">
                    <td>${dados.titulo}</td>
                    <td>${dados.categoria}</td>
                    <td>${dados.ano}</td>
                    <td class="text-right">
                        <button
                            type="button"
                            class="btn btn-info acessarFilme"
                            data-url="${dados.link}"
                        >
                            Acessar
                        </button>
                        <button
                            type="button"
                            class="btn btn-danger excluirFilme"
                            data-id="${id}"
                        >
                            Excluir
                        </button>
                    </td>
                </tr>
            `;
            return item;
        };


        //Cadastra o filme na tabela.
        const cadastrar = () => {

            if(
                dados.titulo == ''
                || dados.ano == 0
                || dados.categoria == ''
                || dados.link == ''
            ){
                alert('Preencha todos os campos!')
            }else {
                document
                .getElementById('lista_filmes')
                .insertAdjacentHTML(
                    'beforeend',
                    montaItem()
                );

            // Limpa os dados depois de cadastrar
            dados = {};
            }
        };