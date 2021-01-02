export { default as Card } from './Card'
import { lazy } from 'react'
import { loadable } from 'utils'
import { importMDX } from 'mdx.macro'

export const url = '/another-test'

export const metadata = {
  key     :2,
  title   :'Paiting',
  subtitle:'Entretien avec C.S',
  id      :'issue-2'
}
export const Content = lazy(() => importMDX('./content.mdx'))
