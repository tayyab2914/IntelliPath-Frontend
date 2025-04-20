import { Col, Row, Tag, Rate } from 'antd';
import React from 'react';
import MyButton from '../../components/Button/Button';
import { useNavigate } from 'react-router-dom';
import { IMAGES } from '../../data/ImageData';
import { ICONS } from '../../data/IconData';

// Utility to capitalize each word
const capitalizeWords = (str) =>
  str.replace(/\b\w/g, (char) => char.toUpperCase());

// Utility to format ISO date to readable
const formatDate = (dateStr) =>
  new Date(dateStr).toLocaleDateString('en-US', {
    day: '2-digit',
    month: 'short',
    year: 'numeric',
  });

const CourseInfo = ({ course_data }) => {
  const navigate = useNavigate();
  const {
    title,
    image,
    rating,
    num_reviews,
    duration,
    instructor_details,
    id,
    score,
    url,
    created,
    last_update_date,
    num_published_lectures
  } = course_data;

  const courseClickHandler = () => {
    window.open(`https://www.udemy.com${url}`, "_blank");
  };

  return (
    <div>
      <Row className="single-course-row" gutter={[15, 15]}>
        {/* Course Image */}
        <Col xs={24} md={12} lg={10} className="single-course-image-col">
        <img src={image || IMAGES?.course_placeholder} onError={(e) => { e.target.onerror = null; e.target.src = IMAGES?.course_placeholder }} />

        </Col>

        {/* Course Info */}
        <Col xs={24} md={12} lg={14} className="single-course-info-col">
          <div className="single-course-details">
          <div style={{ margin: '10px 0px' }}>
              <Tag color="purple">Created: {formatDate(created)}</Tag>
              <Tag color="orange">Last Updated: {formatDate(last_update_date)}</Tag>
            </div>
            <p className="single-course-title">{title}</p>

            {/* Rating & Reviews */}
            <div className='single-course-rating'>
              <Rate allowHalf disabled value={rating} />
              <span>{rating?.toFixed(1)} ({num_reviews?.toLocaleString()} reviews)</span>
              {rating >= 4.5 && <Tag color="green">Top Rated</Tag>}
            </div>

            {/* Duration & Lectures */}
            <div style={{ display: 'flex', flexWrap: 'wrap', gap: '10px', marginBottom: '10px' }}>
              <Tag color="cyan">{duration}</Tag>
              <Tag color="blue">{num_published_lectures} Lectures</Tag>
            </div>

            {/* Instructor */}
            <p className="single-course-instructor-label">Instructor:</p>
            <div className="single-course-instructor">
       
               <img  src={instructor_details?.image_50x50|| ICONS?.avatar} onError={(e) => { e.target.onerror = null; e.target.src = ICONS?.avatar }}/>
              <div>
                <p className="single-course-instructor-display_name">
                  {instructor_details?.display_name}
                </p>
                <p className="single-course-instructor-job_title">
                  {capitalizeWords(instructor_details?.job_title || '')}
                </p>
                <a
                  href={`https://www.udemy.com${instructor_details?.url}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="single-course-instructor-navigation_btn"
                >
                  View Profile
                </a>
              </div>
            </div>

            {/* Score */}
            <Tag color="gold" className="single-course-score" style={{ marginTop: '10px' }}>
              Score: {score?.toFixed(1)}
            </Tag>

            {/* Dates */}
            
          </div>

          {/* Button */}
          <div className="single-course-button-container">
            <MyButton
              text="View Course"
              variant="outlined-dark"
              onClick={courseClickHandler}
              className="single-course-view-button"
            />
          </div>
        </Col>
      </Row>
    </div>
  );
};

export default CourseInfo;
