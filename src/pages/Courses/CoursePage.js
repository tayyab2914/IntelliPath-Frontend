import React, { useEffect, useState } from "react";
import "./styles/CoursePage.css";
import NavbarMain from "../../components/Navbar/NavbarMain";
import Footer from "../../components/Footer/Footer";
import { useNavigate, useParams } from "react-router-dom";
import { SINGLE_COURSE_DATA } from "../../data/CoursesData";
import { Col, Row, Tag } from "antd";
import MyButton from "../../components/Button/Button";
import MyIcon from "../../components/Icon/MyIcon";
import CourseInfo from "./CourseInfo";
import SimilarCourses from "./SimilarCourses";
import { API_GET_COURSE_INFO } from "../../apis/CourseApis";
import { useSelector } from "react-redux";

const CoursePage = () => {
  const { course_id } = useParams();
  const navigate = useNavigate();
  const [course_data, setCourse_data] = useState({});
  const { token } =useSelector((state) => state.authToken);

const getCourseInfo = async()=>{
    const response = await API_GET_COURSE_INFO(token,course_id)
    setCourse_data(response)
    console.log(response)
}

  useEffect(() => {
    getCourseInfo()
  },[course_id]);
  return (
    <>
      <NavbarMain />
      <div className="generic-container">
        <div className="course-page-main">
          {course_data && <CourseInfo course_data={course_data} />}
          {/* GET SIMILAR COURSES THROUGH COURSE ID */}
          <SimilarCourses course_id={course_id}/> 
        </div>
      </div>
      <Footer />
    </>
  );
};

export default CoursePage;
