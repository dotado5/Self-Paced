import { BrowserRouter, Route, Routes } from "react-router-dom";
import "./App.css";
import Home from "./Pages/Home/Home";
import Layout from "./Layout/Layout";
import Categories from "./Pages/Categories/Categories";
import CategoryPage from "./Pages/Category/CategoryPage";
import AuthPage from "./Pages/AuthPage/AuthPage";
import CourseDetailsPage from "./Pages/CourseDetails/CourseDetailsPage";
import DashboardLayout from "./Dashboard Layout/DashboardLayout";
import DashboardHome from "./Pages/Dashboard/Home/Home";
import LearningProgressPage from "./Pages/Dashboard/LearningProgress/LearningProgressPage";
import RecommendationsPage from "./Pages/Dashboard/Recommendations/RecommendationsPage";
import DashboardCourseDetailsPage from "./Pages/Dashboard/CourseDetails/CourseDetailsPage";
import LearningPage from "./Pages/Dashboard/LearningPage/LearningPage";
import CompletionPage from "./Pages/Dashboard/Completion/CompletionPage";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/auth/:portal" element={<AuthPage />} />

        <Route path="/" element={<Layout />}>
          <Route path="/" element={<Home />} />
          <Route path="/categories" element={<Categories />} />
          <Route path="/category/:category_name" element={<CategoryPage />} />
          <Route path="/course/:courseId" element={<CourseDetailsPage />} />
        </Route>

        <Route path="/dashboard" element={<DashboardLayout />}>
          <Route path="/dashboard" element={<DashboardHome />} />
          <Route
            path="/dashboard/learning_progress"
            element={<LearningProgressPage />}
          />
          <Route
            path="/dashboard/recommendations"
            element={<RecommendationsPage />}
          />
          {/* /:courseId */}
          <Route
            path="/dashboard/course_details"
            element={<DashboardCourseDetailsPage />}
          />
          <Route path="/dashboard/course" element={<LearningPage />} />
          <Route
            path="/dashboard/course/completed"
            element={<CompletionPage />}
          />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
