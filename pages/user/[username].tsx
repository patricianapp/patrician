import React from 'react'
import { useRouter } from 'next/router'
import PropTypes from 'prop-types'

const UserPage = props => {
  const router = useRouter()
  const { username } = router.query;
  console.log(username);
  return (
    <div>

    </div>
  )
}

UserPage.propTypes = {

}

export default UserPage
