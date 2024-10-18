import React from 'react';
import { Collapse, Divider } from 'antd';
import './styles/FAQ.css';
import { useState } from 'react';
import MyIcon from '../../components/Icon/MyIcon';
import { FAQ_DATA } from '../../data/HomeData';
const { Panel } = Collapse;


const FAQ = () => {
  const [activeKey, setActiveKey] = useState([]);

  const handlePanelChange = (key) => {
    setActiveKey(key);
  };

  const isActive = (key) => activeKey.includes(key);

  return (
   <div className="generic-container">
    <div className="faq-main">
            <p className='faq-heading'>Frequently asked questions</p>
            <p className='faq-description'>Quick answers to questions you may have.</p>
            
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
                    <Panel  header={item.question} key={index.toString()} className={`faq-panel ${isActive(index) ? 'active' : ''}`} > <p>{item.answer}</p> </Panel> ))
                }
                <Panel style={{display:"none"}} />
        </Collapse>
      </div>
   </div>
  );
};

export default FAQ;
