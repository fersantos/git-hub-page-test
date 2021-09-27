import React from 'react'
import { ChartsTest, Homepage, Login, PageNotFound, Print } from '@/pages'
import { Route, Switch } from 'react-router-dom'

export const Routes = () => {
  return (
    <Switch>
      <Route exact path='/' component={Homepage} />
      <Route path='/charts' component={ChartsTest} />
      <Route path='/login' component={Login} />
      <Route path='/print' component={Print} />
      <Route path='*' component={PageNotFound} />
    </Switch>
  )
}