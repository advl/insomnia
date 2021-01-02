/* @fwrlines/generator-react-component 2.5.2 */
import * as React from 'react'
//import {} from 'react'
import PropTypes from 'prop-types'
import { Link } from 'react-router-dom'


//Intl

//import { FormattedMessage} from "react-intl";
//import messages from "./messages";
// <FormattedMessage {...messages.title} />

//Config

//import C from 'ui/cssClasses'

//Relative imports
//import styles from './local_nav_bar.scss'
import { isBackend } from 'utils/isBackend'

if (!isBackend) {
  import('./local_nav_bar.scss')
}

const baseClassName = 'local_nav_bar'


/**
 * Use `LocalNavBar` to
 * Has color `x`
 */
const LocalNavBar = ({
  id,
  className,
  style,
  sticky
}) => (
  <nav
    className={
      [
        baseClassName,
        className
      ].filter(e => e).join(' ')
    }
    id={id}
    style={{
      position:sticky ? 'sticky' : 'fixed'
    }}
  >
    <Link to="/">
      <svg
        id="logo"
        xmlns="http://www.w3.org/2000/svg"
        version="1.1"
        preserveAspectRatio={'xMinYMin meet'}
        width={120}
        //height={512}
        viewBox={'0 0 303 87'}
      >
        <use href="/logo.svg#logo" />
      </svg>
    </Link>
  </nav>
)

LocalNavBar.propTypes = {

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
LocalNavBar.defaultProps = {
  status: 'neutral',
  //height:'2.2em',
  //as:'p',
}
*/
export default LocalNavBar
