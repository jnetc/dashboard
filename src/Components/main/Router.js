import React from 'react'
import { Route, Switch, withRouter, Redirect} from 'react-router-dom'
import { TransitionGroup, CSSTransition } from 'react-transition-group'

  // ROUTES
import Dashboard from './dashboard/dashboard'
import SensorsRouter from './dashboard/sensors/sensors-router'
import Sites from './sites/sites'
import SiteMap from './sites/sitemap'
import Resources from './resources/resources'
import ResourcesPeople from './resources/resources-people'
import ResourcesMashines from './resources/resources-mashines'
import ResourcesAssets from './resources/resources-assets'
import Projects from './projects/projects'
import ProjectsTasks from './projects/projects-tasks'
import Messages from './messages/messages'
import MessagesInbox from './messages/messages-inbox'
import MessagesAlerts from './messages/messages-alerts'
import MessagesNotification from './messages/messages-notification'
import Reports from './reports/reports'
import ReportsProject from './reports/reports-project'
import ReportsSite from './reports/reports-site'
import ReportsPeople from './reports/reports-people'
import PageNotFound from './404'

  // Created routes with transitions
const Main = (props) =>  {

  return (
  <TransitionGroup component="main">
    <CSSTransition
      key={ props.location.key }
      timeout={ 500 }
      classNames={'fade-route'}
      unmountOnExit={true}>
      <Switch>
        <Route path="/" render={() => <Redirect to="/dashboard/sensors"/>} exact/> 
        <Route path="/dashboard" component={ Dashboard } exact />
        <Route path="/dashboard/sensors" component={ SensorsRouter } />
        <Route path="/sites" component={ Sites } exact />
        <Route path="/sites/:id" component={ SiteMap }  />
        <Route path="/resources" component={ Resources } exact />
        <Route path="/resources/people" component={ ResourcesPeople } />
        <Route path="/resources/mashines" component={ ResourcesMashines } />
        <Route path="/resources/assets" component={ ResourcesAssets } />
        <Route path="/projects" component={ Projects } exact />
        <Route path="/projects/tasks" component={ ProjectsTasks } />
        <Route path="/messages" component={ Messages } exact />
        <Route path="/messages/inbox" component={ MessagesInbox } />
        <Route path="/messages/alerts" component={ MessagesAlerts } />
        <Route path="/messages/notification" component={ MessagesNotification } />
        <Route path="/reports" component={ Reports } exact />
        <Route path="/reports/project" component={ ReportsProject } />
        <Route path="/reports/site" component={ ReportsSite } />
        <Route path="/reports/people" component={ ReportsPeople } />
        <Route component={ PageNotFound } />
      </Switch>
    </CSSTransition>
  </TransitionGroup> 
  )
}

export default withRouter(Main)


