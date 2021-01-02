import packageInfo from '../../package.json'
import React, { useState, useContext } from 'react'
//import Prototypes from 'prototypes' //Capitalize, etc
import { Switch, Redirect, Route, Link } from 'react-router-dom'

//import NotFound from './NotFound.js'

//import oAuth2Routes from './oauth2/routes'
//import Clock from 'ui/test/AsyncClock'
//import QueryTester from 'ui/test/QueryTester'
//import { MyProfile } from 'ui/local/dashboardMain'

import {
  //ThemeSelector,
  SwitchRouteMap,
  RedirectWithStatus,
  useSite
} from '@fwrlines/ds'

/* @fwrlines/generator-react-component 2.2.3 */
import { defineMessages, FormattedMessage } from 'react-intl'

const endpoint = process.env.GRAPHQL_ENDPOINT


import routes from './allRoutes.js'

const App = () => {
  const [active, setActive] = useState(false)

  const {
    userTheme
  } = useSite()

  return (
    <div
      className={
        [
          //        'ui-'+ userTheme,
          'y-background b-y'
        ].filter(e => e).join(' ')
      }
      style={{
        height:'100%'

        /*
        display       :'flex',
        flexDirection :'column',
        justifyContent:'center',
        alignItems    :'center',
        */
      }}
    >
      <SwitchRouteMap
        routes={routes}

        /*
        NotFound={<RedirectWithStatus
          status={404}
          to={'/404'}
                  />}
         */
      />
    </div>
  )
}


export default App
