import { InputText } from '@/components'
import { Texto } from '@/styles'
import { translate /*, TutorialDataService */ } from '@/utils'
import React from 'react'

export const Login:React.FC = () => {
  // const api = new TutorialDataService()

  // api.create({
  //   "title": "ehauehuaehuaehueh",
  //   "description": "euaheuaheuaheuaheuehuaehuaeh uaheuaheuaheuaheuahe v2"
  // })
  //   .then(data => { console.log('SUCESSO', data)})
  //   .catch(error => { console.log('ERRO', error)})
  return (
    <div>
      <InputText
        label='teste'
        name='algo'
        textAlign='right'
      />
      <Texto>
        {translate('hello-world')}
        <br />
        {translate('test')}
      </Texto>
    </div>
  )
}
