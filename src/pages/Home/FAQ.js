import React from 'react';
import { Collapse, Divider } from 'antd';
import './styles/FAQ.css';
import { useState } from 'react';
import MyIcon from '../../components/Icon/MyIcon';
import { FAQ_DATA } from '../../data/HomeData';
import useSpeech from '../../utils/WebSpeech.js/functionalities/useSpeech';
const { Panel } = Collapse;


const FAQ = () => {
  const [activeKey, setActiveKey] = useState([]);
  const {speakWord} = useSpeech()

  const handlePanelChange = (key) => {
    setActiveKey(key);
  };

  const isActive = (key) => activeKey.includes(key);

  const HEADING = "Frequently asked questions"
  const DESCRIPTION = 'Quick answers to questions you may have.'
  return (
   <div className="generic-container">
    <div className="faq-main">
            <p className='faq-heading'  onMouseEnter={()=>speakWord(HEADING)}>{HEADING}</p>
            <p className='faq-description' onMouseEnter={()=>speakWord(DESCRIPTION)}>{DESCRIPTION}</p>
            
        <Collapse 
            activeKey={activeKey} 
            onChange={handlePanelChange} 
            defaultActiveKey={['1']} 
            accordion 
            ghost 
            bordered={false}
            expandIconPosition="right"
            expandIcon={({ isActive }) => (<MyIcon type={"arrow"} className={`faq-arrow ${isActive ? 'rotate' : ''}`}/>)}
            >
                {FAQ_DATA.map((item, index) => (
                    <Panel  header={item.question} key={index.toString()} className={`faq-panel ${isActive(index) ? 'active' : ''}`} onMouseEnter={()=>speakWord(item.question)}> 
                        <p onMouseEnter={()=>speakWord(item.answer)}>{item.answer}</p> 
                    </Panel> ))
                }
                <Panel style={{display:"none"}} />
        </Collapse>
      </div>
   </div>
  );
};

export default FAQ;
