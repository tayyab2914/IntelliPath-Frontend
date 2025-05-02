import React, { useEffect, useState } from 'react'
import './styles/SimilarCourses.css'
import { Col, Divider, Rate, Row, Tag } from 'antd'
import { COURSE_DATA } from '../../data/CoursesData';
import MyButton from '../../components/Button/Button';
import { useLocation, useNavigate } from 'react-router-dom';
import { API_RECOMMEND_COURSES } from '../../apis/CourseApis';
import { useSelector } from 'react-redux';
import AutoTextCropper from '../../components/AutoTextCropper/AutoTextCropper';
import { IMAGES } from '../../data/ImageData';
import { ICONS } from '../../data/IconData';
const SimilarCourses = ({course_name}) => {
    const [CourseData, setCoursesData] = useState(COURSE_DATA.slice(0,4));
    const navigate = useNavigate()
      const location = useLocation();
    const { token } = useSelector((state) => state.authToken);
    const [CurrentQueryName, setCurrentQueryName] = useState('');

  const onSearch = async (value) => {
    const newName = value?.trim() === "" ? "Django" : value;
    const response = await API_RECOMMEND_COURSES(token,newName)
    setCoursesData(response?.courses)
  };
    useEffect(()=>{

        const searchParams = new URLSearchParams(location.search);
        const currentQueryName = searchParams.get("current-query-name")
        onSearch(currentQueryName)
        setCurrentQueryName(currentQueryName)
    },[])
  return (
    <div>
        <Divider/>
      <p className="similar-courses-heading">Similar Courses</p>
      <Row gutter={[15, 15]} className="similar-courses-container">
    {CourseData?.sort(() => Math.random() - 0.5).slice(0, 4)?.map((course, index) => {
        return <>
         <Col xs={24} sm={12} md={8} lg={6} key={index} onClick={()=>navigate(`/course/${course.id}?current-query-name=${CurrentQueryName}`)}>
        <div className="recommended-course-container">
          <div className="recommended-courses-data">
            <div className="recommended-courses-image-container">
            <img  src={course?.image || IMAGES?.course_placeholder} onError={(e) => { e.target.onerror = null; e.target.src = IMAGES?.course_placeholder }} className="recommended-courses-image" />
            </div>
            <p className="recommended-courses-title"><AutoTextCropper text={course.title} numOfLines={2} textStyles={{fontSize:"16px"}}/></p>
            <div className="recommended-courses-rating">
              <Rate allowHalf disabled value={course.rating / 1} />
              <span>{course.rating?.toFixed(1)} ({course.num_reviews?.toLocaleString()} reviews)</span>
            </div>
            <p className="recommended-courses-instructor">
            <img  src={course.instructor_details?.image_50x50|| ICONS?.avatar} onError={(e) => { e.target.onerror = null; e.target.src = ICONS?.avatar }}/>

                {course.instructor_details?.display_name}
            </p>
            <Tag color="cyan" className="recommended-courses-tag">
              {course?.duration}
            </Tag>
          </div>
          <MyButton text={"View Course"} variant="outlined-dark" onClick={()=>navigate(`/course/${course.id}`)} className="recommended-courses-button" />
        </div>
      </Col></>
    })}
  </Row>
    </div>
  )
}

export default SimilarCourses
