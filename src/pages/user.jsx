import React, { useContext } from 'react'
import Page from '../Page'
import UserCard from 'user/UserCard'
import { UserContext } from '../UserContext'

const User = () => {
  const [user] = useContext(UserContext)

  return (
    <Page title={`Welcome, ${user.name}!`}>
      <section className="wrapper">
        <UserCard
          name={user.name}
          picture={user.picture}
          address={user.address}
          about={user.about}
        />
      </section>
    </Page>
  )
}

export default User