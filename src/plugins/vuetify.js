import Vue from 'vue';
import Vuetify from 'vuetify/lib/framework';
import { library } from '@fortawesome/fontawesome-svg-core'
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'
import { fas } from '@fortawesome/free-solid-svg-icons'
import { faGithub, faLinkedin, faTwitter } from "@fortawesome/free-brands-svg-icons"

Vue.component('font-awesome-icon', FontAwesomeIcon) // Register component globally
library.add(fas, faGithub, faLinkedin, faTwitter) // Include needed icons

Vue.use(Vuetify);

export default new Vuetify({
    icons: {
        iconfont: ['faSvg'],
      },
});
