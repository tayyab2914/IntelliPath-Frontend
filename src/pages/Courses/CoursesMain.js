import React, { useEffect, useState } from "react";
import NavbarMain from "../../components/Navbar/NavbarMain";
import TitleMain from "../../components/Title/TitleMain";
import Footer from "../../components/Footer/Footer";
import { useLocation } from "react-router-dom";
import { Input } from "antd"; 
import "./styles/Courses.css";
import useWindowWidth from "../../hooks/useWindowWidth";
import RecommendedCourses from "./RecommendedCourses";
const { Search } = Input; 

const CoursesMain = () => {
  const [CourseName, setCourseName] = useState("ReactJS");
  const windowWidth = useWindowWidth()
  const location = useLocation();

  useEffect(() => {
    window.scrollTo({ top: 0, behavior: "smooth" });
    const searchParams = new URLSearchParams(location.search);
    const course_name = searchParams.get("course_name");
    console.log(course_name)
    if (course_name) {
      setCourseName(course_name);
    }
  }, [location]); 

  const onSearch = (value) => {
    value=='' ? setCourseName('ReactJS') : setCourseName(value);
  };

  return (
    <>
      <NavbarMain />
      <TitleMain title={"Course Recommendations"} description={ "Unlock your potential with courses tailored to your learning journey" } />
      <div className="generic-container">
            <div className="courses-header">
                {windowWidth > 568 && <p className="courses-current-tech">Showing results for : {CourseName}</p>}
                <Search placeholder="Search for courses" size="medium" onSearch={onSearch} className="courses-seach-bar" />
                {windowWidth <= 568 && <p className="courses-current-tech">Showing results for : {CourseName}</p>}
            </div>
            <RecommendedCourses CourseName={CourseName}/>
      </div>

      <Footer />
    </>
  );
};

export default CoursesMain;
