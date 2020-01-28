# font-awesome
Font Awesome 5 Vue component using SVG with JS

### install
use yarn
``` javascript
yarn add
    @fortawesome/fontawesome-svg-core 
    @fortawesome/free-solid-svg-icons 
    @fortawesome/free-regular-svg-icons    
    @fortawesome/free-brands-svg-icons   
    @fortawesome/vue-fontawesome
```

then

```javascript
import { library } from "@fortawesome/fontawesome-svg-core"
import { FontAwesomeIcon } from "@fortawesome/vue-fontawesome"

import {
  faUserSecret,
  faUserCircle,
} from "@fortawesome/free-solid-svg-icons"    // default fas

import {
  faAddressBook
} from "@fortawesome/free-regular-svg-icons"  // far

import {
  faGithub
} from "@fortawesome/free-brands-svg-icons"   // fab


library.add(
  // fas
  faUserSecret,
  faUserCircle,

  // far
  faAddressBook,

  // fab
  faGithub,
)
```
### Using by Vue component
```html
  <font-awesome-icon icon="user-secret" /> <!--default fas -->
  <font-awesome-icon :icon="['fas', 'user-secret']" />
  <font-awesome-icon :icon="['far', 'address-book']" class="address-book" />
  <font-awesome-icon :icon="['fab', 'github']" />
```

### docs
Vue component using  [vue-fontawesome](https://github.com/FortAwesome/vue-fontawesome)

font-awesome Icons en - [fontawesome](https://fontawesome.com/) and zh - [fontawesome](http://fa5.dashgame.com/#/%E5%9B%BE%E6%A0%87)
