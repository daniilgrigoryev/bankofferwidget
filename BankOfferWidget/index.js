import Vue from 'vue'
import vueCustomElement from 'vue-custom-element'
import '@ungap/custom-elements'
import vuetify from './plugins/vuetify.js'
import App from './components/App.vue'

Vue.config.productionTip = false
Vue.use(vueCustomElement)

App.vuetify = vuetify

Vue.customElement('v-offer-widget', App, {
  shadow: true,
  beforeCreateVueInstance(root) {
    const rootNode = root.el.getRootNode()
    if (rootNode instanceof ShadowRoot) {
      console.debug('shadowRoot found! Using as root node ')
      root.shadowRoot = rootNode
    } else {
      console.debug('shadowRoot not found! Using document head ')
      root.shadowRoot = document.head
    }
    return root
  },
})
