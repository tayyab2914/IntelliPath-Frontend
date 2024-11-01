import React, { useState } from 'react'
import NavbarMain from '../../../components/Navbar/NavbarMain'
import Footer from '../../../components/Footer/Footer'
import '../styles/TribeChat.css'
import TribeChatHeader from './TribeChatHeader'
import { SINGLE_TRIBE_DATA } from '../../../data/TribesData'
import TribeThread from './TribeThread'
const TribeChatMain = () => {
    const [TribeData, setTribeData] = useState(SINGLE_TRIBE_DATA);
    const [selectedThreadId, setSelectedThreadId] = useState(null);
    

  return (
    <div>
        <NavbarMain/>
        <div className="generic-container">
            <div className="tribe-chat-main">
                <TribeChatHeader data={TribeData} setSelectedThreadId={setSelectedThreadId}/>
                <TribeThread selectedThreadId={selectedThreadId}/>
            </div>
        </div>
        {/* <Footer/> */}
    </div>
  )
}

export default TribeChatMain
