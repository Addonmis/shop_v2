import axios from 'axios'

export const state = () => ({
    products: [],
    product: {}
})

export const getters = {
    get_all_products: (state) => state.products,
    get_product: (state) => state.product
}

export const mutations = {
    LOAD_PRODUCTS: (state, products) => state.products.push(products),
    LOAD_PRODUCT_INFO: (state, product) => state.product = product
}

export const actions = {
    load_products({state, commit}){
        if (!state.products.length > 0){
            axios.get('http://localhost:3000/api')
            .then((data) => {
                data.data.items.forEach((item, i, arr) => commit('LOAD_PRODUCTS', item))
            })
        }
    }
}