import { Col, Spin, Tag } from 'antd'
import React, { useState } from 'react'
import MyButton from '../../../components/Button/Button'
import { useNavigate } from 'react-router-dom'
import '../styles/TribesCard.css'
import { TRUNCATE_STRING } from '../../../utils/ReusableFunctionalities'
import { API_JOIN_TRIBE } from '../../../apis/TribeApis'
import { useDispatch, useSelector } from 'react-redux'
import { setRerenderTribePage } from '../../../redux/AuthToken/Action'
import AutoTextCropper from '../../../components/AutoTextCropper/AutoTextCropper'

const TribeCard = ({tribeData,btnText,isInTribeExplorePage}) => {
    const { token, rerender_tribe_page} = useSelector((state) => state.authToken);
    const navigate = useNavigate()
    const dispatch=useDispatch()
    const [ShowSpinner, setShowSpinner] = useState(false);
    const clickHandler = async()=>{
        if(isInTribeExplorePage)
        {
            await API_JOIN_TRIBE(token,tribeData?.id,setShowSpinner)
            dispatch(setRerenderTribePage(!rerender_tribe_page))
            navigate(`/tribes/${tribeData?.id}`)

        }
        else
        {
            navigate(`/tribes/${tribeData?.id}`)
        }
    }
  return (
    <Col xs={24} sm={12} md={8} lg={6}>
        {ShowSpinner && <Spin fullscreen/>}
        <div className='tribe-card-container'>
           <div className="tribe-card-inner">
            
                <p className='tribe-cards-id'> #{tribeData?.id} <br/> {tribeData?.category}</p>
                <p className='tribe-cards-title'>
                    <AutoTextCropper text={tribeData?.name} numOfLines={1} TooltipTitle={tribeData?.name}/>
                </p>
                <p className='tribe-cards-description'> 
                    <AutoTextCropper text={tribeData?.description} numOfLines={2} TooltipTitle={tribeData?.description}/>
                </p>
                <span className='tribe-card-num-of-members'><Tag color='cyan'>{tribeData?.member_count} Members</Tag></span>
           </div>
            <MyButton variant='outlined-dark' onClick={clickHandler} text={btnText}/>
        </div>
    </Col>
  )
}

export default TribeCard
