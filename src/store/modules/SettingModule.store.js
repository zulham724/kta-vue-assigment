/* Module1.store.js */
import axios from 'axios'
const fs = require('fs')

// State object
const state = {
    url: 'http://localhost:8000',
    storageUrl: 'http://localhost/8000/storage',
    settings: [],
    assets: {
        bgDashboard: 'https://images.unsplash.com/photo-1551095581-bb9e2670f5a2?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1189&q=80',
        bgLogin: 'https://images.unsplash.com/photo-1581774103336-6190a8368cee?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=634&q=80',
        avatar: `https://scontent-sin6-2.cdninstagram.com/v/t51.2885-19/s320x320/16585277_197162840765257_3394749593936723968_a.jpg?_nc_ht=scontent-sin6-2.cdninstagram.com&_nc_cat=101&_nc_ohc=CEfbTerp0WsAX-leNVc&oh=6bf8b7e7398cd4f70ffe239114ce828f&oe=5E931E23`
    }
}

// Mutations
const mutations = {

}

// Actions
const actions = {

}

// Getter functions
const getters = {

}

export default {
    namespaced: true,
    state,
    getters,
    actions,
    mutations
}