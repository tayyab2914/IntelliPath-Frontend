import React, { useEffect, useState } from "react";
import { Col, Row, Tag, Pagination } from "antd";
import MyButton from "../../components/Button/Button";
import { COURSE_DATA } from "../../data/CoursesData";
import { useNavigate } from "react-router-dom";
import './styles/RecommendedCourses.css'

const RecommendedCourses = ({ CourseName }) => {
  const [CourseData, setCourseData] = useState(COURSE_DATA);
  const [currentPage, setCurrentPage] = useState(1);
  const navigate = useNavigate();
  const pageSize = 6;

  useEffect(() => {
    // Call API to get data when CourseName changes
  }, [CourseName]);

  const handlePageChange = (page) => {
    setCurrentPage(page);
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  const startIndex = (currentPage - 1) * pageSize;
  const endIndex = startIndex + pageSize;
  const displayedCourses = CourseData?.slice(startIndex, endIndex) || [];

  return  <>
  <Row gutter={[15, 15]} className="recommended-courses-container">
    {displayedCourses.map((course, index) => (
      <Col xs={24} sm={12} md={8} lg={6} key={index}>
        <div className="recommended-course-container"onClick={()=>navigate(`/course/${course.id}`)}>
          <div className="recommended-courses-data">
            <div className="recommended-courses-image-container">
              <img src={course.image_480x270} alt="" className="recommended-courses-image" />
            </div>
            <p className="recommended-courses-title">{course.title}</p>
            <p className="recommended-courses-instructor">{course.visible_instructors[0]?.display_name}</p>
            <Tag color="cyan" className="recommended-courses-tag">
              {course.is_paid ? course.price_detail.price_string : "Free"}
            </Tag>
          </div>
          <MyButton text={"View Course"} variant="outlined-dark" onClick={()=>navigate(`/course/${course.id}`)} className="recommended-courses-button" />
        </div>
      </Col>
    ))}
  </Row>
  
  <Pagination current={currentPage} pageSize={pageSize} total={CourseData?.length} onChange={handlePageChange} showSizeChanger={false} className="recommended-courses-pagination"/>
</>;
};

export default RecommendedCourses;
