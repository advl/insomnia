/* @fwrlines/generator-react-component 2.5.2 */
import * as React from 'react'
//import {} from 'react'
import PropTypes from 'prop-types'

import { Page, Heading } from '@fwrlines/ds'

import { LocalNavBar, LocalFooter } from 'app/common/components'


//Config
//import C from 'ui/cssClasses'

//Intl

//import { FormattedMessage} from "react-intl";
//import messages from "./.messages";

// <FormattedMessage {...messages.title} />

//const baseClassName = 'page_sauce'
const baseId = 'page_sauce'

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

      heading  :'hello',
      //heading         :<FormattedMessage {...messages.title} />,
      //headingClassName:'ts-green',
      headingAs:'h1',
      //headingProps :{}

      label         :'film',
      //label         :<FormattedMessage {...messages.label} />,
      labelClassName:'x-red basic',
      //labelAs:'p',
      //labelProps :{},
      //
      subtitle      :'Stanley Kubrick, 1960'
      //subtitle         :<FormattedMessage {...messages.subtitle} />,
      //subtitleClassName,
      //subtitleProps:{},

    }
  }
}


/**
 * Page `Sauce`
 * Description :
 */
const Sauce = ({
  history,
  location,
  match
}) => (
  <Page
    id={baseId}
    //itemType='https://schema.org/FAQPage'
    className="u1 md-u2"
    HELMET={helmet}
  >
    <LocalNavBar />
    <Page.Section
      {...content.sectionTitle.sectionProps}
    >
    
      <Heading {...content.sectionTitle.headingProps} />
    </Page.Section>
    <Page.Section
      {...content.sectionTitle.sectionProps}
    >
    
      <Heading {...content.sectionTitle.headingProps} />
    </Page.Section>
    <Page.Section
      {...content.sectionTitle.sectionProps}
    >
    
      <Heading {...content.sectionTitle.headingProps} />
    </Page.Section>

  </Page>
)

Sauce.propTypes = {

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
Sauce.defaultProps = {
  status: 'neutral',
}
*/


export default Sauce
