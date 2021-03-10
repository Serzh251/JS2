const add = (cart, req) => {
    cart.contents.push(req.body);
    // console.log('add')
    return JSON.stringify(cart, null, 4);
};

const update = (cart, req) => {
    const find = cart.contents.find(el => el.id_product === +req.params.id);
    find.quantity += req.body.quantity;
    // console.log('update')
    return JSON.stringify(cart, null, 4);
};

const del = (cart, req) => {
    const find = cart.contents.find(el => el.id_product === +req.params.id);
    find.quantity -= req.body.quantity;
    console.log('del') //почему сюда не проваливается?
    return JSON.stringify(cart, null, 4);
};

module.exports = {
    add,
    update,
    del
};