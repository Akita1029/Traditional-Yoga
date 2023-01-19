import React from "react";
import "../../assets/css/currentcourse.css";
import Accordion from "react-bootstrap/Accordion";
import CourseLessonItem from "../../components/CourseLessonItem";

const CurrentCourse = (props) => {
  return (
    <div
      className={
        !props.expandflag
          ? "dashboard-container expandable"
          : "dashboard-container"
      }
    >
      <h5 className="text-primary">Model View</h5>
      <div className="row">
        <div className="col-md-3">
          <div className="col-sm-12 col-xs-12 d-flex flex-column justify-content-center mb-4">
            <CourseLessonItem
              state={2}
              title="Module 1"
              description="Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknow printer took a galley of type and"
            />
          </div>
          <div className="col-sm-12 col-xs-12 d-flex flex-column justify-content-center mb-4">
            <CourseLessonItem
              state={2}
              title="Module 2"
              description="Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknow printer took a galley of type and"
            />
          </div>
          <div className="col-sm-12 col-xs-12 d-flex flex-column justify-content-center mb-4">
            <CourseLessonItem
              state={1}
              title="Module 3"
              description="Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknow printer took a galley of type and"
            />
          </div>
          <div className="col-sm-12 col-xs-12 d-flex flex-column justify-content-center mb-4">
            <CourseLessonItem
              title="Module 4"
              description="Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknow printer took a galley of type and"
            />
          </div>
          <div className="col-sm-12 col-xs-12 d-flex flex-column justify-content-center mb-4">
            <CourseLessonItem
              title="Module 5"
              description="Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknow printer took a galley of type and"
            />
          </div>
        </div>
        <div className="col-md-9">
          <Accordion className="currentcourseviewsec">
            <Accordion.Item eventKey="0">
              <Accordion.Header className="currentcoursebutton">
                <div
                  style={{
                    width: "100%",
                    display: "flex",
                    flexDirection: "row",
                    justifyContent: "space-between",
                    paddingLeft: "20px",
                    paddingRight: "20px",
                  }}
                >
                  <p style={{ margin: "0px" }}>Module 1</p>
                  <p
                    style={{
                      margin: "0px",
                      fontSize: "13px",
                      color: "#6da544",
                    }}
                  >
                    Classes Completed
                  </p>
                </div>
              </Accordion.Header>
              <Accordion.Body className="accordioncontent">
                <div className="largesec">
                  <div className="largesec">
                    <p style={{ fontWeight: "bold", fontSize: "12px" }}>
                      Unit 1
                    </p>
                    <button className="plusbutton">+</button>
                  </div>
                  <div className="largesec">
                    <p style={{ color: "#777", fontSize: "12px" }}>
                      Oct 31, Monday
                    </p>
                    <button className="viewclassroombutton">
                      View Classroom
                    </button>
                  </div>
                </div>
                <div className="largesec">
                  <div className="largesec">
                    <p style={{ fontWeight: "bold", fontSize: "12px" }}>
                      Unit 2
                    </p>
                    <button className="plusbutton">+</button>
                  </div>
                  <div className="largesec">
                    <p style={{ color: "#777", fontSize: "12px" }}>
                      Nov 2, Wednesday
                    </p>
                    <button className="viewclassroombutton">
                      View Classroom
                    </button>
                  </div>
                </div>
                <div className="largesec">
                  <div className="largesec">
                    <p style={{ fontWeight: "bold", fontSize: "12px" }}>
                      Unit 3
                    </p>
                    <button className="plusbutton">+</button>
                  </div>
                  <div className="largesec">
                    <p style={{ color: "#777", fontSize: "12px" }}>
                      Nov 4, Friday
                    </p>
                    <button className="viewclassroombutton">
                      View Classroom
                    </button>
                  </div>
                </div>
                <div className="largesec">
                  <div className="largesec">
                    <p style={{ fontWeight: "bold", fontSize: "12px" }}>
                      Unit 4
                    </p>
                    <button className="plusbutton">+</button>
                  </div>
                  <div className="largesec">
                    <p style={{ color: "#777", fontSize: "12px" }}>
                      Nov 7, Monday
                    </p>
                    <button className="viewclassroombutton">
                      View Classroom
                    </button>
                  </div>
                </div>
                <div className="largesec">
                  <div className="largesec">
                    <p style={{ fontWeight: "bold", fontSize: "12px" }}>
                      Unit 5
                    </p>
                    <button className="plusbutton">+</button>
                  </div>
                  <div className="largesec">
                    <p style={{ color: "#777", fontSize: "12px" }}>
                      Nov 9, Wendnesday
                    </p>
                    <button className="viewclassroombutton">
                      View Classroom
                    </button>
                  </div>
                </div>
                <div className="largesec">
                  <div className="largesec">
                    <p style={{ fontWeight: "bold", fontSize: "12px" }}>
                      Unit 6
                    </p>
                    <button className="plusbutton">+</button>
                  </div>
                  <div className="largesec">
                    <p style={{ color: "#777", fontSize: "12px" }}>
                      Nov 11, Friday
                    </p>
                    <button className="viewclassroombutton">
                      View Classroom
                    </button>
                  </div>
                </div>
                <div className="largesec">
                  <div className="largesec">
                    <p style={{ fontWeight: "bold", fontSize: "12px" }}>
                      Unit 7
                    </p>
                    <button className="plusbutton">+</button>
                  </div>
                  <div className="largesec">
                    <p style={{ color: "#777", fontSize: "12px" }}>
                      Oct 31, Monday
                    </p>
                    <button className="viewclassroombutton">
                      View Classroom
                    </button>
                  </div>
                </div>
                <div className="largesec">
                  <div className="largesec">
                    <p style={{ fontWeight: "bold", fontSize: "12px" }}>
                      Unit 8
                    </p>
                    <button className="plusbutton">+</button>
                  </div>
                  <div className="largesec">
                    <p style={{ color: "#777", fontSize: "12px" }}>
                      Oct 31, Monday
                    </p>
                    <button className="viewclassroombutton">
                      View Classroom
                    </button>
                  </div>
                </div>
              </Accordion.Body>
            </Accordion.Item>
          </Accordion>
          <Accordion className="currentcourseviewsec">
            <Accordion.Item eventKey="0">
              <Accordion.Header className="currentcoursebutton">
                <div
                  style={{
                    width: "100%",
                    display: "flex",
                    flexDirection: "row",
                    justifyContent: "space-between",
                    paddingLeft: "20px",
                    paddingRight: "20px",
                  }}
                >
                  <p style={{ margin: "0px" }}>Module 2</p>
                  <p
                    style={{
                      margin: "0px",
                      fontSize: "13px",
                      color: "#6da544",
                    }}
                  >
                    Classes Completed
                  </p>
                </div>
              </Accordion.Header>
              <Accordion.Body className="accordioncontent">
                <div className="largesec">
                  <div className="largesec">
                    <p style={{ fontWeight: "bold", fontSize: "12px" }}>
                      Unit 1
                    </p>
                    <button className="plusbutton">+</button>
                  </div>
                  <div className="largesec">
                    <p style={{ color: "#777", fontSize: "12px" }}>
                      Oct 31, Monday
                    </p>
                    <button className="viewclassroombutton">
                      View Classroom
                    </button>
                  </div>
                </div>
                <div className="largesec">
                  <div className="largesec">
                    <p style={{ fontWeight: "bold", fontSize: "12px" }}>
                      Unit 2
                    </p>
                    <button className="plusbutton">+</button>
                  </div>
                  <div className="largesec">
                    <p style={{ color: "#777", fontSize: "12px" }}>
                      Nov 2, Wednesday
                    </p>
                    <button className="viewclassroombutton">
                      View Classroom
                    </button>
                  </div>
                </div>
                <div className="largesec">
                  <div className="largesec">
                    <p style={{ fontWeight: "bold", fontSize: "12px" }}>
                      Unit 3
                    </p>
                    <button className="plusbutton">+</button>
                  </div>
                  <div className="largesec">
                    <p style={{ color: "#777", fontSize: "12px" }}>
                      Nov 4, Friday
                    </p>
                    <button className="viewclassroombutton">
                      View Classroom
                    </button>
                  </div>
                </div>
                <div className="largesec">
                  <div className="largesec">
                    <p style={{ fontWeight: "bold", fontSize: "12px" }}>
                      Unit 4
                    </p>
                    <button className="plusbutton">+</button>
                  </div>
                  <div className="largesec">
                    <p style={{ color: "#777", fontSize: "12px" }}>
                      Nov 7, Monday
                    </p>
                    <button className="viewclassroombutton">
                      View Classroom
                    </button>
                  </div>
                </div>
                <div className="largesec">
                  <div className="largesec">
                    <p style={{ fontWeight: "bold", fontSize: "12px" }}>
                      Unit 5
                    </p>
                    <button className="plusbutton">+</button>
                  </div>
                  <div className="largesec">
                    <p style={{ color: "#777", fontSize: "12px" }}>
                      Nov 9, Wendnesday
                    </p>
                    <button className="viewclassroombutton">
                      View Classroom
                    </button>
                  </div>
                </div>
                <div className="largesec">
                  <div className="largesec">
                    <p style={{ fontWeight: "bold", fontSize: "12px" }}>
                      Unit 6
                    </p>
                    <button className="plusbutton">+</button>
                  </div>
                  <div className="largesec">
                    <p style={{ color: "#777", fontSize: "12px" }}>
                      Nov 11, Friday
                    </p>
                    <button className="viewclassroombutton">
                      View Classroom
                    </button>
                  </div>
                </div>
                <div className="largesec">
                  <div className="largesec">
                    <p style={{ fontWeight: "bold", fontSize: "12px" }}>
                      Unit 7
                    </p>
                    <button className="plusbutton">+</button>
                  </div>
                  <div className="largesec">
                    <p style={{ color: "#777", fontSize: "12px" }}>
                      Oct 31, Monday
                    </p>
                    <button className="viewclassroombutton">
                      View Classroom
                    </button>
                  </div>
                </div>
                <div className="largesec">
                  <div className="largesec">
                    <p style={{ fontWeight: "bold", fontSize: "12px" }}>
                      Unit 8
                    </p>
                    <button className="plusbutton">+</button>
                  </div>
                  <div className="largesec">
                    <p style={{ color: "#777", fontSize: "12px" }}>
                      Oct 31, Monday
                    </p>
                    <button className="viewclassroombutton">
                      View Classroom
                    </button>
                  </div>
                </div>
              </Accordion.Body>
            </Accordion.Item>
          </Accordion>
          <Accordion className="currentcourseviewsec">
            <Accordion.Item eventKey="0">
              <Accordion.Header className="currentcoursebutton">
                <div
                  style={{
                    width: "100%",
                    display: "flex",
                    flexDirection: "row",
                    justifyContent: "space-between",
                    paddingLeft: "20px",
                    paddingRight: "20px",
                  }}
                >
                  <p style={{ margin: "0px" }}>Module 3</p>
                  <p
                    style={{
                      margin: "0px",
                      fontSize: "13px",
                      color: "#6da544",
                    }}
                  >
                    Classes Completed
                  </p>
                </div>
              </Accordion.Header>
              <Accordion.Body className="accordioncontent">
                <div className="largesec">
                  <div className="largesec">
                    <p style={{ fontWeight: "bold", fontSize: "12px" }}>
                      Unit 1
                    </p>
                    <button className="plusbutton">+</button>
                  </div>
                  <div className="largesec">
                    <p style={{ color: "#777", fontSize: "12px" }}>
                      Oct 31, Monday
                    </p>
                    <button className="viewclassroombutton">
                      View Classroom
                    </button>
                  </div>
                </div>
                <div className="largesec">
                  <div className="largesec">
                    <p style={{ fontWeight: "bold", fontSize: "12px" }}>
                      Unit 2
                    </p>
                    <button className="plusbutton">+</button>
                  </div>
                  <div className="largesec">
                    <p style={{ color: "#777", fontSize: "12px" }}>
                      Nov 2, Wednesday
                    </p>
                    <button className="viewclassroombutton">
                      View Classroom
                    </button>
                  </div>
                </div>
                <div className="largesec">
                  <div className="largesec">
                    <p style={{ fontWeight: "bold", fontSize: "12px" }}>
                      Unit 3
                    </p>
                    <button className="plusbutton">+</button>
                  </div>
                  <div className="largesec">
                    <p style={{ color: "#777", fontSize: "12px" }}>
                      Nov 4, Friday
                    </p>
                    <button className="viewclassroombutton">
                      View Classroom
                    </button>
                  </div>
                </div>
                <div className="largesec">
                  <div className="largesec">
                    <p style={{ fontWeight: "bold", fontSize: "12px" }}>
                      Unit 4
                    </p>
                    <button className="plusbutton">+</button>
                  </div>
                  <div className="largesec">
                    <p style={{ color: "#777", fontSize: "12px" }}>
                      Nov 7, Monday
                    </p>
                    <button className="viewclassroombutton">
                      View Classroom
                    </button>
                  </div>
                </div>
                <div className="largesec">
                  <div className="largesec">
                    <p style={{ fontWeight: "bold", fontSize: "12px" }}>
                      Unit 5
                    </p>
                    <button className="plusbutton">+</button>
                  </div>
                  <div className="largesec">
                    <p style={{ color: "#777", fontSize: "12px" }}>
                      Nov 9, Wendnesday
                    </p>
                    <button className="viewclassroombutton">
                      View Classroom
                    </button>
                  </div>
                </div>
                <div className="largesec">
                  <div className="largesec">
                    <p style={{ fontWeight: "bold", fontSize: "12px" }}>
                      Unit 6
                    </p>
                    <button className="plusbutton">+</button>
                  </div>
                  <div className="largesec">
                    <p style={{ color: "#777", fontSize: "12px" }}>
                      Nov 11, Friday
                    </p>
                    <button className="viewclassroombutton">
                      View Classroom
                    </button>
                  </div>
                </div>
                <div className="largesec">
                  <div className="largesec">
                    <p style={{ fontWeight: "bold", fontSize: "12px" }}>
                      Unit 7
                    </p>
                    <button className="plusbutton">+</button>
                  </div>
                  <div className="largesec">
                    <p style={{ color: "#777", fontSize: "12px" }}>
                      Oct 31, Monday
                    </p>
                    <button className="viewclassroombutton">
                      View Classroom
                    </button>
                  </div>
                </div>
                <div className="largesec">
                  <div className="largesec">
                    <p style={{ fontWeight: "bold", fontSize: "12px" }}>
                      Unit 8
                    </p>
                    <button className="plusbutton">+</button>
                  </div>
                  <div className="largesec">
                    <p style={{ color: "#777", fontSize: "12px" }}>
                      Oct 31, Monday
                    </p>
                    <button className="viewclassroombutton">
                      View Classroom
                    </button>
                  </div>
                </div>
              </Accordion.Body>
            </Accordion.Item>
          </Accordion>
        </div>
      </div>
    </div>
  );
};

export default CurrentCourse;
