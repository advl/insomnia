export { default as Card } from './Card'
import { lazy } from 'react'
import { loadable } from 'utils'
//import { importMDX } from 'mdx.macro'

export const url = '/interview-paiting-the-apocalypse'

export const metadata = {
  key     :1,
  title   :'Paiting',
  subtitle:'Entretien avec C.S',
  id      :'issue-1'
}
export const Content = loadable(() => import('./content.mdx'))
