import { createApp } from './app'

const { app, store, router } = createApp()

router.onReady(() => {
    if (window.__INITIAL_STATE__) {
        store.replaceState(window.__INITIAL_STATE__);
    }
  
    app.$mount('#app');
})

// этот код активирует HMR и сработает, когда webpack-dev-server будет запущен со свойством hot
if (module.hot) {
    const api = require('vue-hot-reload-api');
    const Vue = require('vue');
  
    api.install(Vue);
  
    if (!api.compatible) {
        throw new Error(
            'vue-hot-reload-api is not compatible with the version of Vue you are using.',
        );
    }
  
    module.hot.accept();
}