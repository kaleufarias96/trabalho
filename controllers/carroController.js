const carros = [
    {modelo: "Corsa", marca: "Chevrolet", ano: 2010, preco: 27800},
    {modelo: "Sandero", marca: "Renault", ano: 2014, preco: 32300},
    {modelo: "Uno Mille", marca: "Fiat", ano: 2017, preco: 29600},
];

export const carroIndex = (req, res) => {
    res.json(carros);
};

// ADD
export const carroStore = (req, res) => {
    // Desestruturação do objeto req.body
    const {modelo, marca, ano, preco} = req.body;

    carros.push({modelo, marca, ano, preco});

    res.json({'msg': 'Ok! Carro inserido com sucesso'});
};

export const carroUpdate = (req, res) => {
    // Desestrutura os parâmetros e pega somente o ID.
    const { id } = req.params;
    const {modelo, marca, ano, preco} = req.body;

    if(id > carros.length) {
        res.json({'msg': 'Erro! Código inválido.'})
        return
    } 

    carros[id-1].modelo = modelo;
    carros[id-1].marca = marca;
    carros[id-1].ano = ano;
    carros[id-1].preco = preco;

    res.json({'msg': 'Ok! Carro atualizado com sucesso'});
};

// DEL
export const carroDelete = (req, res) => {
    // Desestrutura os parâmetros e pega somente o ID.
    const { id } = req.params;

    if (id > carros.length) {
        res.json({'msg': 'Erro! Código inválido.'})
        return
    } 

    carros.splice(id-1, 1);

    res.json({'msg': 'Ok! Carro excluído com sucesso'});
};

export const carroShow = (req, res) => {
    const { id } = req.params;

    if (id > carros.length) {
        res.json({'msg': 'Erro! Código inválido'})
        return;
    }
    res.json(carros[id-1]);

} 

// Criar carroShow 
//irá receber um id como parâmetro, verefique se existe e se existir, retorne esse registro