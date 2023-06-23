import React, { useEffect, useState } from 'react';

const SeeCoursesPage = () => {
  const [courses, setCourses] = useState([]);

  useEffect(() => {
    // Implement API integration to fetch courses
    // Update the 'courses' state with the fetched data
  }, []);

  return (
    <div>
      <h1>See Courses Page</h1>
      <h2>Courses:</h2>
      <ul>
        {courses.map((course) => (
          <li key={course.id}>{course.name}</li>
        ))}
      </ul>
    </div>
  );
};

export default SeeCoursesPage;
