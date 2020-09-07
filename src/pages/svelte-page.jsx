import React, { useContext, useEffect, useRef } from 'react'
import { useHistory } from "react-router-dom"
import Page from '../Page'
import loadApp from 'login/loadApp'
import { UserContext } from '../UserContext'


const SveltePage = () => {
  const [user, setUser] = useContext(UserContext)
  const history = useHistory()
  const el = useRef()

  useEffect(() => {
    if (el.current.innerHTML.length === 0) {
      loadApp('login')
    }

    window.addEventListener('login', ({ detail: response }) => {
      setUser(response.user.json())
      history.push("/user")
    })
  })

  return (
    <Page title='Svelte Demo'>
      <div id='login' ref={el}></div>
    </Page>
  )
}


export default SveltePage
