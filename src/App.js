
import React from 'react';
import {
  BrowserRouter,
  Routes,
  Route,
  Navigate
} from "react-router-dom";
import AboutUsPage from './pages/AboutUsPage';
import LandingPage from './pages/LandingPage';
import MainLayout from './pages/MainLayout';
import CoursesPage from './pages/CoursesPage';
import CourseMainPage from './pages/courses/CourseMainPage';
import OnlineCoursePage from './pages/courses/OnlineCoursePage';
import OnlineCourseGridPage from './pages/courses/OnlineCourseGridPage';
import SignInPage from './pages/SignInPage';
import 'bootstrap/dist/css/bootstrap.min.css';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={ <LandingPage /> }/>

        <Route path='/ty' element={ <MainLayout /> }>
          <Route path="about" element={ <AboutUsPage /> } />
          <Route path="courses" element={ <CoursesPage /> }>
            <Route path="main" element={ <CourseMainPage /> }/>
            <Route path="online" element={ <OnlineCoursePage /> } />
            <Route path="online-grid" element={ <OnlineCourseGridPage /> } />
          </Route>
          <Route path="library" element={ <></> } />
          <Route path="contactus" element={ <></> } />
          <Route path="donations" element={ <></> } />
        </Route>

        <Route path="/signin" element={ <SignInPage /> } />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
