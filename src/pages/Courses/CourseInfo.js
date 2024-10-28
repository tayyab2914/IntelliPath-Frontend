import { Col, Row, Tag } from 'antd'
import React from 'react'
import MyButton from '../../components/Button/Button'
import { useNavigate } from 'react-router-dom'

const CourseInfo = ({course_data}) => {
    const navigate = useNavigate()
  return (
    <div>
      <Row className="single-course-row" gutter={[15,15]}>
            <Col xs={24} md={12} lg={10} className="single-course-image-col">
                <img src={course_data?.image_480x270} className="single-course-image" alt="Course Image" />
            </Col>
            <Col xs={24}  md={12} lg={14} className="single-course-info-col">
                <div className="single-course-details">
                    <p className="single-course-title">{course_data?.title}</p>
                    <Tag color="cyan" className="single-course-price">
                        {course_data?.is_paid ? course_data?.price_detail.price_string : "Free"}
                    </Tag>
                    <p className="single-course-headline">{course_data?.headline}</p>
                    <p className="single-course-instructor-label">Instructors:</p>
                    <div className="single-course-instructors">
                        {course_data?.visible_instructors?.map((instructor, index) => (
                            <div key={index} className="single-course-instructor">
                                <img src={instructor?.image_50x50} />
                               <div>
                               <p className="single-course-instructor-display_name">{instructor?.display_name}</p>
                               <p className="single-course-instructor-job_title">{instructor?.job_title}</p>
                               </div>
                            </div>
                        ))}
                    </div>
                </div>
                <div className="single-course-button-container">
                    <MyButton 
                        text={"View Course"} 
                        variant="outlined-dark" 
                        onClick={() => navigate(`/course/${course_data?.id}`)} 
                        className="single-course-view-button " 
                    />
                </div>
            </Col>
        </Row>
    </div>
  )
}

export default CourseInfo
