import React, { useEffect, useState } from "react";
import { Col, Row, Tag, Pagination, Rate } from "antd";
import MyButton from "../../components/Button/Button";
import { COURSE_DATA } from "../../data/CoursesData";
import { useNavigate } from "react-router-dom";
import './styles/RecommendedCourses.css'
import { GET_PAGINATION_DETAILS } from "../../utils/ReusableFunctionalities";
import { EXTRACT_COURSES_FROM_RESPONSE } from "./CoursesFunctionality";
import { IMAGES } from "../../data/ImageData";
import AutoTextCropper from "../../components/AutoTextCropper/AutoTextCropper";
import { ICONS } from "../../data/IconData";

const RecommendedCourses = ({ CoursesData }) => {
  const [Courses, setCourses] = useState(CoursesData);
  const [currentPage, setCurrentPage] = useState(1);
  const navigate = useNavigate();
  const pageSize = 15;
  const [displayedCourses, setdisplayedCourses] = useState([]);

  useEffect(() => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  }, [CoursesData]);
  
  useEffect(() => {
    if (CoursesData?.length > 0) {
      const pagination_details = GET_PAGINATION_DETAILS(currentPage, pageSize, CoursesData);
      setdisplayedCourses(pagination_details);
    }
  }, [currentPage, CoursesData]);
  

  return  <>
  <Row gutter={[15, 15]} className="recommended-courses-container">
    {displayedCourses?.map((course, index) => (
      <Col xs={24} sm={12} md={8} lg={6} key={index} onClick={()=>navigate(`/course/${course.id}`)}>
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
      </Col>
    ))}
  </Row>
  
  <Pagination current={currentPage} pageSize={pageSize} total={CoursesData?.length} onChange={(page)=>setCurrentPage(page)} showSizeChanger={false} className="recommended-courses-pagination"/>
</>;
};

export default RecommendedCourses;
