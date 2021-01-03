/* @fwrlines/generator-react-component 2.5.1 */
import { urljoin as _u, loadable } from 'utils'

import MODULE_URLS from './urls'

const moduleName = 'app.magazine'

import issues from './issues'

import Magazine from './pages'


export default [
  {
    path:[
      MODULE_URLS.HOME,
      ...issues.map(issue => issue.url)
    ],
    component:Magazine,
    //component:loadable(() => import (/* webpackChunkName: `app.magazine` */ './pages/Magazine.js')),
    exact    :true
  }
]


