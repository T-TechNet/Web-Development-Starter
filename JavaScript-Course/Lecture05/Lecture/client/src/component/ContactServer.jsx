import React, { useEffect, useState } from 'react'

const ContactServer = () => {
  const [backendData, setBackendData] = useState([{}])
  useEffect(() => {
    fetch('http://172.24.197.221:5001/api')
      .then((response) => response.json())
      .then((data) => {
        setBackendData(data)
      })
  }, [])
  return (
    <div>
      {typeof backendData.users === 'undefined' ? (
        <p>Loading the data ...... </p>
      ) : (
        backendData.users.map((user, i) => <p key={i}>{user}</p>)
      )}
    </div>
  )
}

export default ContactServer
