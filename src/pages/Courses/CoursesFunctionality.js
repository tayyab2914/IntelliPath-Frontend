export const EXTRACT_COURSES_FROM_RESPONSE = (CoursesData)=>{
        if (!CoursesData || !Array.isArray(CoursesData?.courses)) {
          return [];
        }
      
        // Flatten all course arrays from each suggested_keyword group
        const allCourses = CoursesData?.courses?.flatMap(courseGroup => courseGroup?.courses);
      
        return allCourses;
      };
      