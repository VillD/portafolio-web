import { createApp } from 'vue'
import { createPinia } from 'pinia'

import App from './App.vue'
import router from './router'

import './assets/main.css'

import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'
import { library } from '@fortawesome/fontawesome-svg-core'
import { faGithub } from '@fortawesome/free-brands-svg-icons'
import { faInstagram} from '@fortawesome/free-brands-svg-icons'
import { faLinkedin} from '@fortawesome/free-brands-svg-icons'
import { faCode} from '@fortawesome/free-solid-svg-icons'
import { faMobileScreenButton} from '@fortawesome/free-solid-svg-icons'
import { faPenNib } from '@fortawesome/free-solid-svg-icons'

library.add(faGithub, faInstagram, faLinkedin, 
    faCode, faMobileScreenButton, faPenNib)

const app = createApp(App)
app.use(createPinia())
app.use(router)
.component('fa', FontAwesomeIcon)
app.mount('#app')

