import Alert from './Alert'
import Confirm from './Confirm'
import Toast from './Toast'

import wcThen from './directives/wc-then'
import wcCatch from './directives/wc-catch'
import wcMask from './directives/wc-mask'
import wcPopup from './directives/wc-popup'

import './transition.css'

export default {
  install(Vue) {
    Vue.use(Alert, {});
    Vue.use(Confirm, {});
    Vue.use(Toast, {});

    Vue.directive('wcThen', wcThen);
    Vue.directive('wcCatch', wcCatch);
    Vue.directive('wcMask', wcMask);
    Vue.directive('wcPopup', wcPopup);
  }
}
