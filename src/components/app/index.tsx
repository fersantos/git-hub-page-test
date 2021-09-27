import React from 'react'
import { BrowserRouter, Link } from 'react-router-dom'
import { Page, Header, Body, Footer } from '@/styles'
import { Routes } from '@/router'

export const App = () => {
  return (
    <BrowserRouter>
      <Page>
        <Header>   
          <ul>
            <li><Link to='/'>Homepage</Link></li>
            <li><Link to='/login'>Login</Link></li>
            <li><Link to='/charts'>Gráficos com Nivo</Link></li>
            <li><Link to='/algo'>algo sem rota</Link></li>
            <li><Link to='/print'>usando styled e print</Link></li>
          </ul>
        </Header>
        <Body>
          <Routes />
        </Body>
        <Footer />
      </Page>
    </BrowserRouter>
  )
}