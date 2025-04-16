import React, { useState } from 'react'
import './styles/SimilarCourses.css'
import { Col, Divider, Row, Tag } from 'antd'
import { COURSE_DATA } from '../../data/CoursesData';
import MyButton from '../../components/Button/Button';
import { useNavigate } from 'react-router-dom';
const SimilarCourses = ({course_name}) => {
    const [CourseData, setCourseData] = useState(COURSE_DATA.slice(0,4));
    const navigate = useNavigate()

  return (
    <div>
        <Divider/>
      <p className="similar-courses-heading">Similar Courses</p>
      <Row gutter={[15, 15]} className="similar-courses-container">
    {CourseData.map((course, index) => (
      <Col xs={24} sm={12} md={8} lg={6} key={index}>
        <div className="similar-course-container"onClick={()=>navigate(`/course/${course.id}`)}>
          <div className="similar-courses-data">
            <div className="similar-courses-image-container">
              <img src={course.image_480x270} alt="" className="similar-courses-image" />
            </div>
            <p className="similar-courses-title">{course.title}</p>
            <p className="similar-courses-instructor">{course.visible_instructors[0]?.display_name}</p>
            <Tag color="cyan" className="similar-courses-tag">
              {course.is_paid ? course.price_detail.price_string : "Free"}
            </Tag>
          </div>
          <MyButton text={"View Course"} variant="outlined-dark" onClick={()=>navigate(`/course/${course.id}`)} className="similar-courses-button" />
        </div>
      </Col>
    ))}
  </Row>
    </div>
  )
}

export default SimilarCourses
