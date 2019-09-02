import React from "react";
import { getCourses } from "../api/courseApi";

class CoursesPage extends React.Component {
  //instead of having a constructor with props for this class
  //we can declare a class field variable and use that instead
  state = {
    courses: []
  };

  componentDidMount() {
    // getCourses().then(function(courses) {
    //   this.setState({ courses: courses });
    // });   OR using an arrow function as follows

    getCourses().then(courses => {
      this.setState({ courses: courses });
    });
  }

  render() {
    return (
      <>
        <h2>Courses</h2>
        <table className="table">
          <thead>
            <tr>
              <td>Title</td>
              <td>Author IF</td>
              <td>Category</td>
            </tr>
          </thead>
          <tbody>
            {this.state.courses.map(course => {
              return (
                <tr>
                  <td>{course.title}</td>
                  <td>{course.authorId}</td>
                  <td>{course.category}</td>
                </tr>
              );
            })}
          </tbody>
        </table>
      </>
    );
  }
}

export default CoursesPage;
