import React, { useEffect } from 'react'
import ProjectRoutes from './utils/ProjectRoutes'
import './App.css'
import './animations.css'
import { Flex } from 'antd'

const App = () => {
    useEffect(() => {
      window.scrollTo({ top: 0, behavior: "smooth" });
    });
  return (
    <div className='app'>
      <ProjectRoutes/>
    </div>
  )
}

export default App
