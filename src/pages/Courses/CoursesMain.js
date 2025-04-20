import React, { useEffect, useState } from "react";
import NavbarMain from "../../components/Navbar/NavbarMain";
import TitleMain from "../../components/Title/TitleMain";
import Footer from "../../components/Footer/Footer";
import { useLocation } from "react-router-dom";
import { Input } from "antd"; 
import "./styles/Courses.css";
import useWindowWidth from "../../hooks/useWindowWidth";
import RecommendedCourses from "./RecommendedCourses";
import { API_GET_COURSES, API_RECOMMEND_COURSES } from "../../apis/CourseApis";
import { useSelector } from "react-redux";
import { EXTRACT_COURSES_FROM_RESPONSE } from "./CoursesFunctionality";
import { CAPITALIZE_STRING } from "../../utils/ReusableFunctionalities";
const { Search } = Input; 

const CoursesMain = () => {
  const [CourseName, setCourseName] = useState("");
  const windowWidth = useWindowWidth();
  const location = useLocation();
  const { token } = useSelector((state) => state.authToken);
  const [CoursesData, setCoursesData] = useState({});

  const getCourses = async () => {
    const response = await API_GET_COURSES(token);
    const flattenedCourses = EXTRACT_COURSES_FROM_RESPONSE(response)
    setCoursesData(flattenedCourses)
  };

  useEffect(() => {
    window.scrollTo({ top: 0, behavior: "smooth" });

    const searchParams = new URLSearchParams(location.search);
    const roadmap = searchParams.get("roadmap");

    if(roadmap)
    {
        setCourseName("Suggested Courses");
        getCourses()
    }
    else
    {
        onSearch("Django")
    }
  }, [location.search]);

  const onSearch = async (value) => {
    const newName = value.trim() === "" ? "Django" : value;
    const response = await API_RECOMMEND_COURSES(token,newName)
    console.log(response)
    setCoursesData(response?.courses)
    setCourseName(response?.suggested_keyword);
  };

  return (
    <>
      <NavbarMain />
      <TitleMain
        title={"Course Recommendations"}
        description={"Unlock your potential with courses tailored to your learning journey"}
      />
      <div className="generic-container">
        <div className="courses-header">
          {windowWidth > 568 && <p className="courses-current-tech">{CourseName ? `Showing results for : ${CourseName}` : " "}</p>}
          <Search
            placeholder="Search for courses"
            size="medium"
            onSearch={onSearch}
            className="courses-seach-bar"
          />
          {windowWidth <= 568 && <p className="courses-current-tech">Showing results for : {CAPITALIZE_STRING(CourseName)}</p>}
        </div>
        <RecommendedCourses CoursesData={CoursesData} />
      </div>
      <Footer />
    </>
  );
};

export default CoursesMain;
