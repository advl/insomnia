/* @fwrlines/generator-react-component 2.5.2 */
import * as React from 'react'
//import {} from 'react'
import PropTypes from 'prop-types'
import { MagazineArticleCard } from '@fwrlines/ds'

import { url } from './index'
//Intl

//import { FormattedMessage} from "react-intl";
//import messages from "./messages";
// <FormattedMessage {...messages.title} />

//Config

//import C from 'ui/cssClasses'

//Relative imports
//import styles from './card.scss'
import { isBackend } from 'utils/isBackend'

if (!isBackend) {
  import('./main.scss')
}

const baseClassName = 'card'


/**
 * Use `Card` to
 * Has color `x`
 */
const Card = ({
  id,
  className,
  style,
  ...props
}) =>
  //
  (
    <MagazineArticleCard
      className={
        [
        //styles[baseClassName],
          baseClassName,
          className
        ].filter(e => e).join(' ')
      }
      id={id}
      style={style}
      href={url}
      {...props}
    >
      <h2>Welcome to the Card component</h2>
    </MagazineArticleCard>
  )


Card.propTypes = {

  /**
   * Provide an HTML id to this element
   */
  id:PropTypes.string,

  /**
   * The html class names to be provided to this element
   */
  className:PropTypes.string,

  /**
   * The JSX-Written, css styles to apply to the element.
   */
  style:PropTypes.object,

  /**
   *  The children JSX
   */
  children:PropTypes.node,

  /**
   * Which html tag to use
   */
  as:PropTypes.oneOfType([
    PropTypes.string,
    PropTypes.object
  ])
  //as: PropTypes.string,

  /*
  : PropTypes.shape({
    id: PropTypes.string.isRequired,
    title: PropTypes.string.isRequired,
    state: PropTypes.string.isRequired,
  }),
  : PropTypes.func,
  : PropTypes.func,
  : PropTypes.oneOf(['', ''])
  */
}

/*
Card.defaultProps = {
  status: 'neutral',
  //height:'2.2em',
  //as:'p',
}
*/
export default Card
