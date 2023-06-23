import React, { useEffect, useState } from 'react';

const ViewAndRegisterCoursesPage = () => {
  const [courses, setCourses] = useState([]);
  const [selectedCourses, setSelectedCourses] = useState([]);

  useEffect(() => {
    // Implement API integration to fetch available courses
    // Update the 'courses' state with the fetched data
  }, []);

  const handleCourseSelection = (courseId) => {
    // Add or remove the selected course based on the user's action
    if (selectedCourses.includes(courseId)) {
      setSelectedCourses(selectedCourses.filter((id) => id !== courseId));
    } else {
      setSelectedCourses([...selectedCourses, courseId]);
    }
  };

  const handleSubmitRegistration = () => {
    // Implement API integration to submit the course registration
    // Use the 'selectedCourses' state as the registered courses
  };

  return (
    <div>
      <h1>View and Register Courses Page</h1>
      <h2>Available Courses:</h2>
      <ul>
        {courses.map((course) => (
          <li key={course.id}>
            <input
              type="checkbox"
              checked={selectedCourses.includes(course.id)}
              onChange={() => handleCourseSelection(course.id)}
            />
            {course.name}
          </li>
        ))}
      </ul>
      <button onClick={handleSubmitRegistration}>Register Courses</button>
    </div>
  );
};

export default ViewAndRegisterCoursesPage;
