/* @fwrlines/generator-react-component 2.5.1 */
import * as React from 'react'
import { useEffect, useCallback, useState } from 'react'
import PropTypes from 'prop-types'

import { Page, Heading } from '@fwrlines/ds'

import { LocalNavBar, LocalFooter } from 'app/common/components'

import issues from '../issues'

import { isBackend } from 'utils/isBackend'

import { Link } from 'react-router-dom'


//Config

//import C from 'ui/cssClasses'

//Intl
if (!isBackend) {
  import('./magazine.scss')
}

import { FormattedMessage } from 'react-intl'
//import { FormattedMessage, FormattedHTMLMessage } from "react-intl";
import messages from './Magazine.messages'
// <FormattedMessage {...messages.title} />
// <FormattedHTMLMessage {...messages.title} tagName='p'/>

//const baseClassName = 'page_magazine'
const baseId = 'page_magazine'

const helmet = {
  robots   :'noindex, nofollow',
  title    :'test of the title',
  title_tag:'hello'
  //title_tag          :<FormattedMessage {...messages.title} />,
  /*
  canonical          :'https://home.com/description',
  meta_description   :'This is the meta description. 170 chars.',
  twitter_title      :'For twitter, a title',
  twitter_description:'',
  twitter_image      :'',
  og_title           :'This is the open graph title',
  og_description     :'',
  og_image           :'',
  og_type            :'',
  og_url             :'',
  */
}

const content = {
  sectionTitle:{
    sectionProps:{
      id       :'title',
      head     :true,
      className:''
    },
    headingProps:{
      //id,
      className:'uc',
      //style,
      //children, //appended at bottom

      //heading         :'hello',
      heading  :<FormattedMessage {...messages.title} />,
      //headingClassName:'ts-green',
      headingAs:'h1',
      //headingProps :{}

      label         :'film',
      //label         :<FormattedMessage {...messages.label} />,
      labelClassName:'x-red basic',
      //labelAs:'p',
      //labelProps :{},
      //
      //subtitle        :'Stanley Kubrick, 1960',
      subtitle      :<FormattedMessage {...messages.subtitle} />
      //subtitleClassName,
      //subtitleProps:{},

    }
  }
}

const findIssueFromUrl = (url) => issues.find(issue => issue.url === url)

/**
 * Page `Magazine`
 * Description :
 */
const Magazine = ({
  history,
  location,
  match
}) => {

  const [activeStory, setActiveStory] = useState(findIssueFromUrl(location.pathname))

  const ActiveStoryCard = activeStory?.Card

  useEffect(() => {
    if (location.pathname.length > 1) {
      setActiveStory(
        findIssueFromUrl(location.pathname)
      )
    }
    else {
      setActiveStory(false)
    }
    if (!isBackend) {
      window.scrollTo(0, 0)
    }
  }, [location.pathname])

  return (
    <Page
      id={baseId}
      //itemType='https://schema.org/FAQPage'
      className="u1 md-u2"
      HELMET={helmet}
    >
      <LocalNavBar sticky={!activeStory} />
      {/*}
      <h1>
        { JSON.stringify({
          pathname:location.pathname,
          activeStory
        }, null, 2) }
      </h1>
      */}
      { issues.filter(issue => activeStory ? activeStory.url === issue.url: true).map(({
        Card,
        url,
        metadata
      }) => (
        <>
          <Card
            isClickable={!activeStory}
            isOpenDefault={!activeStory}
          />
        </>
      ))}
      { !activeStory &&
      <footer className="p-u uc">
        <div className="h3"><Link to="/sauce">Secret Sauce</Link></div>
      </footer>}

    </Page>
  )
}

Magazine.propTypes = {

  /**
   *
   */
  someprop:PropTypes.node

  /*
  as: PropTypes.oneOfType([
    PropTypes.string,
    PropTypes.object
  ]),
  : PropTypes.shape({
    id: PropTypes.string.isRequired,
    title: PropTypes.string.isRequired,
    state: PropTypes.string.isRequired,
  }),
  children: PropTypes.node,
  : PropTypes.func,
  styles: PropTypes.object,
  : PropTypes.oneOf(['', ''])
  */
}

/*
Magazine.defaultProps = {
  status: 'neutral',
}
*/


export default Magazine
