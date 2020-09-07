import React, { useContext } from 'react'
import styled from 'styled-components'
import Page from '../Page'
import UserCard from 'user/UserCard'
import { UserContext } from '../UserContext'

const User = () => {
  const [user] = useContext(UserContext)

  return (
    <Page title={`Welcome, ${user.name}!`}>
      <Wrapper>
        <UserCard
          name={user.name}
          picture={user.picture}
          address={user.address}
          about={user.about}
        />
      </Wrapper>
    </Page>
  )
}

const Wrapper = styled.section`
  background: linear-gradient(to bottom right, #f26b26 0%, #8f2784 100%);
  position: absolute;
  left: 0;
  width: 100%;
  height: 100%;
  overflow: hidden;
  display: flex;
  align-items: center;
  justify-content: center;
`

export default User