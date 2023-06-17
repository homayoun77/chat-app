import React, { useContext, useEffect, useState } from 'react'

import { auth } from '../firebase'

import styles from './Chats.module.css'
import Navbar from './Navbar'
import { useNavigate } from 'react-router-dom'

import { ChatEngine } from 'react-chat-engine'

import { AuthContext } from '../context/AuthContextProvider'
import axios from 'axios'

function Chats() {

  const [loading , setLoading] = useState(true)
  const user = useContext(AuthContext)

  const navigate = useNavigate()

  useEffect(() => {
    if(!user){
      navigate('/')
      return
    }

    axios.get("https://api.chatengine.io/users/me" , {
      headers:{
        "project-id" : "ee9332f0-d3c3-407b-8976-21ca2edfed6b",
        "user-name" : user.email,
        "user-secret" : user.uid
      }
    })
    .then(() => {
      setLoading(false)
    })
    .catch(() => {
      let formData = new FormData()
      formData.append("email", user.email)
      formData.append("username", user.email)
      formData.append("secret", user.uid)
      getFile(user.photoURL)
        .then(avatar => {
          formData.append("avatar" , avatar , avatar.name)
          axios.post("https://api.chatengine.io/users" , formData , {
            headers:{
              "private-key" : "e67923ee-f76d-4e14-ae43-d420fb6af801"
            }
          })
          .then(() => { setLoading(false) })
          .catch( error => console.log(error) )
        })
    })

  }, [user , navigate])

  const getFile = async (url) => {
    const response = await fetch(url)
    const data = await response.blob()
    return new File([data] , "userPhoto.jpg" , {type:"image/jpeg"})
  }

  const logoutHandler = async () => {
    await auth.signOut()
    navigate('/')
  }

  if(!user || loading) return 'Loading...'

  return (
    <div className={styles.container}>
        <Navbar logoutHandler={logoutHandler} />

        <ChatEngine 
          projectID='ee9332f0-d3c3-407b-8976-21ca2edfed6b'
          height='calc(100vh - 70px)'
          userName={user.email}
          userSecret={user.uid}
        />
    </div>
  )
}

export default Chats