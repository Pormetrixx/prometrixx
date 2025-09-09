import Vue from 'vue'
import { library } from '@fortawesome/fontawesome-svg-core'
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'

// Import solid icons
import {
  faHome,
  faChartBar,
  faUsers,
  faCog,
  faSignOutAlt,
  faBell,
  faSearch,
  faUser,
  faUserPlus,
  faEnvelope,
  faChartLine,
  faShoppingCart,
  faDollarSign,
  faEye,
  faDownload,
  faEdit,
  faTrash,
  faPlus,
  faBars,
  faTimes,
  faChevronDown,
  faChevronRight,
  faExclamationTriangle
} from '@fortawesome/free-solid-svg-icons'

// Import regular icons
import {
  faUser as farUser,
  faBell as farBell
} from '@fortawesome/free-regular-svg-icons'

// Add icons to library
library.add(
  faHome,
  faChartBar,
  faUsers,
  faCog,
  faSignOutAlt,
  faBell,
  faSearch,
  faUser,
  faUserPlus,
  faEnvelope,
  faChartLine,
  faShoppingCart,
  faDollarSign,
  faEye,
  faDownload,
  faEdit,
  faTrash,
  faPlus,
  faBars,
  faTimes,
  faChevronDown,
  faChevronRight,
  faExclamationTriangle,
  farUser,
  farBell
)

// Register component globally
Vue.component('font-awesome-icon', FontAwesomeIcon)