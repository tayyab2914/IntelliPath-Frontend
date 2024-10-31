import { Col, Tag } from 'antd'
import React from 'react'
import MyButton from '../../../components/Button/Button'
import { useNavigate } from 'react-router-dom'
import '../styles/TribesCard.css'

const TribeCard = ({tribeData,btnText}) => {
    const navigate = useNavigate()
  return (
    <Col xs={24} sm={12} md={8} lg={6}>
     <div className='tribe-card-container'>
     <p className='tribe-cards-id'> #{tribeData.tribe_id}</p>
      <p className='tribe-cards-title'>{tribeData.tribe_name}</p>
      <p className='tribe-cards-description'>{tribeData.tribe_description}</p>
      <span className='tribe-card-num-of-members'><Tag color='cyan'>{tribeData.num_of_members} Members</Tag></span>
      <MyButton variant='outlined-dark' onClick={()=>navigate(`/tribes/${tribeData.tribe_id}`)} text={btnText}/>
  
     </div>
    </Col>
  )
}

export default TribeCard
