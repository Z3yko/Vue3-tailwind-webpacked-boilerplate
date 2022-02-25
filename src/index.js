globalThis.__VUE_OPTIONS_API__ = true;
globalThis.__VUE_PROD_DEVTOOLS__ = false;

window.axios = require('axios');
window.axios.defaults.headers.common['X-Requested-With'] = 'XMLHttpRequest';

import { createApp } from 'vue'
import { createStore } from 'vuex'

require('./css/app.css')

// require('bulma'); 
// require('../css/sass/bulma.scss'); 
 


 const store = createStore({ 
    state: {
 
    },
    mutations: {

    },
    getters:{

    }
  })

import App from './components/App.vue' 
window.app = createApp(App).mount('#app')
app.use = store


// const files = require.context('./components/', true, /\.vue$/i)
// files.keys().map(key => window.app.component(key.split('/').pop().split('.')[0], files(key).default));
