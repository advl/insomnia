/* @fwrlines/generator-react-component 2.5.1 */
import { urljoin as _u } from 'utils'
import issues from './issues'

const basePath = '/'
//const slugUrlParam = ':slug([0-9a-z-]{3,80})'
//const redeemParam = ':slug([0-9a-f]{24})'

const urls = {
  //LOGIN  :'login',
  HOME :basePath,
  SAUCE:'/secret-sauce'
}

issues.forEach((issue, key) => {
  urls[`ISSUE${key + 1}`] = issues[key].url
})

export default urls
