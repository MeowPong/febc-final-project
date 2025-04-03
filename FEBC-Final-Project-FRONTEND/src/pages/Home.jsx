import MainLayout from "../components/MainLayout";
import Carousel from "../components/Carousel";
import { useEffect, useState } from "react";
import axios from "axios";
import config from "../config/config";
import { Link } from "react-router-dom";
import ProgressBar from "../components/ProgressBar";

function Home() {
  const [courses, setCourses] = useState([]);
  const [filteredCourses, setFilteredCourses] = useState([]); // เปลี่ยนจากตัวแปรเป็น state
  const [category, setCategory] = useState("");
  const [searchTerm, setSearchTerm] = useState("");
  const [continueLearningCourses, setContinueLearningCourses] = useState([]);
  const [purchasedCourses, setPurchasedCourses] = useState([]);
  const [courseProgress, setCourseProgress] = useState({});

  useEffect(() => {
    fetchCourses(category);
    loadProgress();
  }, [category]);

  const fetchCourses = async (category) => {
    if (category !== "") {
      try {
        const res = await axios.get(
          `${config.API_BASE_URL}/categories/${category}/courses`
        );
        setCourses(res.data);
        setFilteredCourses(res.data); // ตั้งค่าเริ่มต้นให้แสดงทุกคอร์ส
      } catch (error) {
        console.log("error", error);
      }
    } else {
      try {
        const res = await axios.get(`${config.API_BASE_URL}/courses`);
        setCourses(res.data);
        setFilteredCourses(res.data); // ตั้งค่าเริ่มต้นให้แสดงทุกคอร์ส
        getContinueLearning();
      } catch (error) {
        console.log("error", error);
      }
    }
  };

  // load progress
  const loadProgress = () => {
    try {
      const storedProgress = localStorage.getItem("courseProgress");
      setCourseProgress(storedProgress ? JSON.parse(storedProgress) : {});
    } catch (error) {
      console.log("Error loading progress", error);
    }
  };

  // ฟังก์ชันสำหรับจัดการการค้นหาเมื่อกดปุ่ม
  const handleSearch = () => {
    const result = courses.filter(
      (course) =>
        course.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
        course.description.toLowerCase().includes(searchTerm.toLowerCase())
    );
    setFilteredCourses(result);
  };

  const getContinueLearning = () => {
    try {
      const recent = localStorage.getItem("recentLearn");
      const parsedRecent = recent ? JSON.parse(recent) : [];

      setPurchasedCourses(parsedRecent); 
      setContinueLearningCourses(parsedRecent.slice(0, 4));
    } catch (error) {
      console.log("Error ", error);
      setContinueLearningCourses([]);
      setPurchasedCourses([])
    }
  };

  return (
    <MainLayout>
      <Carousel />

      {/* search bar */}
      <div className="mt-5 d-flex justify-content-center">
        <div className="dropdown">
          <button
            className="btn btn-outline-secondary btn-lg dropdown-toggle overflow-hidden"
            style={{ width: "9rem" }}
            type="button"
            data-bs-toggle="dropdown"
            aria-expanded="false"
          >
            {category == "" ? "All" : category}
          </button>
          <ul className="dropdown-menu">
            <li>
              <div className="dropdown-item" onClick={() => setCategory("")}>
                All
              </div>
            </li>
            <li>
              <div
                className="dropdown-item"
                onClick={() => setCategory("Programming Fundamentals")}
              >
                Programming Fundamentals
              </div>
            </li>
            <li>
              <div
                className="dropdown-item"
                onClick={() => setCategory("Web Development")}
              >
                Web Development
              </div>
            </li>
            <li>
              <div
                className="dropdown-item"
                onClick={() => setCategory("Machine Learning")}
              >
                Machine Learning
              </div>
            </li>
            <li>
              <div
                className="dropdown-item"
                onClick={() => setCategory("Data Science")}
              >
                Data Science
              </div>
            </li>
          </ul>
        </div>

        <div className="input-group-lg mb-3 w-75 d-flex ms-2">
          <input
            type="text"
            className="form-control"
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            placeholder="Search courses..."
          />
          <button className="btn btn-secondary ms-2" onClick={handleSearch}>
            Search
          </button>
        </div>
      </div>
      {/* end search bar */}

      {/* continue learning */}
      {searchTerm.length === 0 ? (
        <div className="container mt-4">
          <div className="row gy-4 justify-content-center">
            <p className="fs-4 fw-semibold">Continue Learning</p>
            {continueLearningCourses.length > 0 ? (
              continueLearningCourses.map((item) => (
                <div
                  className="col-12 col-sm-6 col-md-6 col-lg-3 d-flex justify-content-center"
                  key={item.id}
                >
                  <div className="card h-100" style={{ width: "18rem" }}>
                    <img
                      src={item.img}
                      className="card-img-top"
                      alt={item.name}
                    />
                    <div className="card-body">
                      <h5 className="card-title">{item.name}</h5>
                      <p className="card-description">{item.description}</p>
                      <ProgressBar progress={courseProgress[item.id] || 0}/>
                      <Link to={`/CourseDetail/${item.id}`}>
                        <button className="btn btn-outline-primary w-100">
                          Continue Learning
                        </button>
                      </Link>
                    </div>
                  </div>
                </div>
              ))
            ) : (
              <></>
            )}
          </div>
        </div>
      ) : (
        <></>
      )}
      {/* end continue learning */}

      {/* all courses card stack */}
      <div className="container mt-4">
        <div className="row gy-4 justify-content-center">
          <p className="fs-4 fw-semibold">
            {searchTerm.length !== 0 ? "Search Result" : "All Courses"}
          </p>
          {filteredCourses.length > 0 ? (
            filteredCourses.map((item) => (
              <div
                className="col-12 col-sm-6 col-md-6 col-lg-3 d-flex justify-content-center"
                key={item.id}
              >
                <div className="card h-100" style={{ width: "18rem" }}>
                  <img
                    src={item.img}
                    className="card-img-top"
                    alt={item.name}
                  />
                  <div className="card-body">
                    <h5 className="card-title">{item.name}</h5>
                    <p className="card-description">{item.description}</p>

                    {purchasedCourses.some((c) => c.id === item.id) ? (
                      <>
                        <ProgressBar progress={courseProgress[item.id] || 0}/>
                        <Link to={`/CourseDetail/${item.id}`}>
                          <button className="btn btn-outline-primary w-100">
                            Continue Learning
                          </button>
                        </Link>
                      </>
                    ) : (
                      <>
                      <div className="w-100" style={{height:"1.25rem"}}></div>
                      <Link to={`/CourseDetail/${item.id}`}>
                        <button className="btn btn-primary w-100">
                          {item.price === "Open Access"
                            ? item.price
                            : `${item.price} .-`}
                        </button>
                      </Link>
                      </>
                    )}
                  </div>
                </div>
              </div>
            ))
          ) : (
            <div className="col-12 text-center">
              <p>No courses found</p>
            </div>
          )}
        </div>
      </div>
      {/* end card stack */}
    </MainLayout>
  );
}

export default Home;
