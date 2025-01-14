import React, { useState } from 'react'
import '../styles/TribePopoverContent.css'
import MyIcon from '../../../components/Icon/MyIcon'
import NewThreadModal from './AdminOptions.js/NewThreadModal';
import { message, Popconfirm } from 'antd';

const TribePopoverContent = () => {
    const [ShowNewThreadModal, setShowNewThreadModal] = useState(false);
    const deleteThreadHandler = ()=>{
        message.success("Delete thread called")
    }
  return ( 
       <>
        <div>
        <Popconfirm title="Are you sure you want to regenerate the roadmap?" onConfirm={deleteThreadHandler} okText="Yes" cancelText="No">
            <p className='tribe-popover-content-btns'> <MyIcon type={"delete"}/><span>Delete Thread</span></p>
        </Popconfirm>
            <p className='tribe-popover-content-btns' onClick={()=>setShowNewThreadModal(true)}> <MyIcon type={"plus"} /><span>New Thread</span></p>
        </div>

        {ShowNewThreadModal && <NewThreadModal visible={ShowNewThreadModal} onClose={()=>setShowNewThreadModal(false)}/>}
       </>
  )
}

export default TribePopoverContent
