import { useParams, useNavigate } from "react-router-dom";
import { useState, useEffect } from "react";
import axios from "axios";
import config from "../config/config";
import MainLayout from "../components/MainLayout";
import { useTheme } from "../contexts/ThemeContext";
import LanguageIconBlack from "../assets/Material_Icon/language_black.svg";
import LanguageIconWhite from "../assets/Material_Icon/language_white.svg";
import ClockIconBlack from "../assets/Material_Icon/clock_black.svg";
import ClockIconWhite from "../assets/Material_Icon/clock_white.svg";
import PlayCircleBlack from "../assets/Material_Icon/play_circle_black.svg";
import PlayCircleWhite from "../assets/Material_Icon/play_circle_white.svg";
import CheckCircleGreen from "../assets/Material_Icon/check_circle_green.svg";
import dayjs from "dayjs";
import duration from "dayjs/plugin/duration";
import ProgressBar from "../components/ProgressBar";
import PlayIconBlack from "../assets/Material_Icon/play_circle_black.svg";
import PlayIconWhite from "../assets/Material_Icon/play_circle_white.svg";

function CourseDetail() {
  const { id } = useParams(); // ดึง id ของคอร์สจาก URL
  const [course, setCourse] = useState({}); // เก็บข้อมูลคอร์ส
  const { theme } = useTheme(); // ดึง theme จาก context
  const navigate = useNavigate(); // hook สำหรับเปลี่ยนเส้นทาง
  const [continueLearningCourses, setContinueLearningCourses] = useState([]); // เก็บรายการคอร์สที่กำลังเรียนต่อ
  const [progress, setProgress] = useState(0); // เก็บความคืบหน้าของคอร์ส

  dayjs.extend(duration); // เพิ่ม plugin duration ให้ dayjs

  useEffect(() => {
    // ดึงข้อมูลคอร์สจาก API
    const fetchCourse = async () => {
      try {
        const res = await axios.get(`${config.API_BASE_URL}/courses/${id}`);
        setCourse(res.data);
      } catch (error) {
        console.error("Error : ", error);
      }
    };

    fetchCourse();
    getContinueLearning(); // ดึงคอร์สที่กำลังเรียนต่อ
    loadProgress(); // โหลดความคืบหน้าของคอร์ส
  }, [id]); // เรียก useEffect เมื่อ id เปลี่ยน


  // โหลดความคืบหน้าของคอร์สจาก localStorage
  const loadProgress = () => {
    try {
      const storedProgress = localStorage.getItem("courseProgress");
      const progressData = storedProgress ? JSON.parse(storedProgress) : {};
      setProgress(progressData[id] || 0);
    } catch (error) {
      console.error("Error loading progress", error);
      setProgress(0);
    }
  };


  // ฟังก์ชันสำหรับเปลี่ยนเส้นทางไปยังหน้า VideoPlayer หรือ Payment
  const navigatePage = (id, price, course) => {
    // ถ้าคอร์สเป็น Open Access
    if (price === "Open Access") {
      let recentLearn = [];
      try {
        const storedRecent = localStorage.getItem("recentLearn");
        recentLearn = storedRecent ? JSON.parse(storedRecent) : [];
        // ตรวจสอบว่า recentLearn เป็น array หรือไม่
        if (!Array.isArray(recentLearn)) {
          recentLearn = []; // กำหนดให้เป็น array ว่างหากเกิด error
        }
      } catch (error) {
        console.error("Error parsing recentLearn from localStorage:", error);
        recentLearn = []; // กำหนดให้เป็น array ว่างหากเกิด error
      }

      // ลบคอร์สที่มีอยู่แล้วออกจาก recentLearn
      const courseIndex = recentLearn.findIndex(
        (item) => item.id === course.id
      );
      if (courseIndex !== -1) {
        recentLearn.splice(courseIndex, 1); // ลบคอร์สเก่า
      }

      // เพิ่มคอร์สใหม่ลงใน recentLearn
      recentLearn.unshift(course);

      localStorage.setItem("recentLearn", JSON.stringify(recentLearn));
      navigate("/VideoPlayer", { state: { id } }); // เปลี่ยนเส้นทางไปยังหน้า VideoPlayer
    } else {
      navigate("/Payment"); // เปลี่ยนเส้นทางไปยังหน้า Payment
    }
  };


  // ดึงคอร์สที่กำลังเรียนต่อจาก localStorage
  const getContinueLearning = () => {
    try {
      const recent = localStorage.getItem("recentLearn");
      const parsedRecent = recent ? JSON.parse(recent) : [];

      setContinueLearningCourses(parsedRecent);
    } catch (error) {
      console.error("Error ", error);
      setContinueLearningCourses([]);
    }
  };

  return (
    <MainLayout>
      <div className="container mb-5">
        <div className="row">
          {/* left */}
          <div className="col-12 col-sm-12 col-md-12 col-lg-8">
            {course.img && (
              <img src={course.img} alt={course.name} className="w-75" />
            )}
            <h1 className="fs-1 fw-semibold mt-3">{course.name}</h1>
            <p className="fs-5 fw-medium mt-3 ">{course.description}</p>
            <div className="lh-1 my-4 ">
              <p className="fs-6">Category : {course.category}</p>
              <p className="fs-6 ">Instructor : {course.instructor}</p>
              <p className="fs-6">
                Last updated : {dayjs(course.lastupdate).format("DD/MMM/YYYY")}
              </p>
            </div>
            {theme === "light" ? (
              <div className="row border rounded-2 mx-1">
                <div className="col-4 border-end d-flex gap-2 align-items-center p-3">
                  <img
                    src={LanguageIconBlack}
                    alt="LanguageIconBlack"
                    style={{ width: "1.5rem" }}
                  />
                  <div>{course.language}</div>
                </div>
                <div className="col-4 border border-end d-flex gap-2 align-items-center p-3">
                  <img
                    src={ClockIconBlack}
                    alt="ClockIconBlack"
                    style={{ width: "1.5rem" }}
                  />
                  <div>{(course.totaltime / 3600).toFixed(1)} hours</div>
                </div>
                <div className="col-4 border d-flex gap-2 align-items-center p-3">
                  <img
                    src={PlayCircleBlack}
                    alt="PlayCircleBlack"
                    style={{ width: "1.5rem" }}
                  />
                  <div>{course.videos?.length || 0} sections</div>
                </div>
              </div>
            ) : (
              <div className="row border rounded-2 mx-1">
                <div className="col-4 border-end d-flex gap-2 align-items-center p-3">
                  <img
                    src={LanguageIconWhite}
                    alt="language icon"
                    style={{ width: "1.5rem" }}
                  />
                  <div>{course.language}</div>
                </div>
                <div className="col-4 border-end d-flex gap-2 align-items-center p-3">
                  <img
                    src={ClockIconWhite}
                    alt="ClockIconWhite"
                    style={{ width: "1.5rem" }}
                  />
                  <div>{(course.totaltime / 3600).toFixed(1)} hours</div>
                </div>
                <div className="col-4 d-flex gap-2 align-items-center p-3">
                  <img
                    src={PlayCircleWhite}
                    alt="PlayCircleWhite"
                    style={{ width: "1.5rem" }}
                  />
                  <div>{course.videos?.length || 0} sections</div>
                </div>
              </div>
            )}

            {/* Course content */}
            <div className="my-5">
              <div className="fs-3 fw-semibold mb-3">Course content</div>
              {/* แสดงเนื้อหาคอร์สแบบ accordion */}
              <div className="accordion" id="courseAccordion">
                {course?.videos && course.videos.length > 0 ? (
                  course.videos.map((item, index) => (
                    <div className="accordion-item" key={item.id}>
                      <h2 className="accordion-header">
                        <button
                          className={
                            index === 0
                              ? "accordion-button fs-6 fw-medium"
                              : "accordion-button fs-6 fw-medium collapsed"
                          }
                          type="button"
                          data-bs-toggle="collapse"
                          data-bs-target={`#video-${index}`}
                          aria-expanded={index === 0 ? "true" : "false"}
                          aria-controls={`video-${index}`}
                        >
                          {item.title}
                        </button>
                      </h2>
                      <div
                        id={`video-${index}`}
                        className={`accordion-collapse collapse ${
                          index === 0 ? "show" : ""
                        }`}
                        data-bs-parent="#courseAccordion"
                      >
                        <div className="accordion-body d-flex justify-content-between align-items-center">
                          <div className="d-flex justify-content-start align-items-center">
                            <div style={{ width: "2rem" }} className="me-3">
                              <img
                                src={
                                  theme === "light"
                                    ? PlayIconBlack
                                    : PlayIconWhite
                                }
                                alt="Play Icon"
                                style={{ height: "2rem" }}
                              />
                            </div>
                            <div>
                              <div className="fw-bold">{item.title}</div>
                              <div>{item.description}</div>
                            </div>
                          </div>
                          <div>
                            {dayjs
                              .duration(item.duration, "seconds")
                              .format("mm:ss")}
                          </div>
                        </div>
                      </div>
                    </div>
                  ))
                ) : (
                  <div className="col-12 text-center">
                    <p>No courses content</p>
                  </div>
                )}
              </div>
            </div>
            {/* end course content */}
          </div>
          {/* end left */}

          {/* right */}
          {/* แสดงปุ่มเรียนต่อหากคอร์สอยู่ในรายการเรียนต่อ */}
          {continueLearningCourses.some((c) => c.id === course.id) ? (
            <div className="col-12 col-sm-12 col-md-12 col-lg-4">
              <div className="border p-3">
                <p className="fs-2">{course.name}</p>
                <div className="fs-4 d-flex align-items-center gap-2">
                  <div className="text-success">Purchased</div>
                  <img src={CheckCircleGreen} alt="check icon" />
                </div>
                <p className="mt-3 mb-5 fs-6">Full Lifetime Access</p>
                {progress == 100 ? (
                  <div
                    className="text-end text-success"
                    style={{ fontSize: "0.75rem" }}
                  >
                    {progress.toFixed(2)} % complete
                  </div>
                ) : (
                  <div
                    className="text-end text-secondary"
                    style={{ fontSize: "0.75rem" }}
                  >
                    {progress.toFixed(2)} % complete
                  </div>
                )}
                <ProgressBar progress={progress} />

                <button
                  className="btn btn-primary btn-lg w-100"
                  onClick={() => {
                    navigatePage(course.id, course.price, course);
                  }}
                >
                  Continue Learning
                </button>
              </div>
            </div>
          ) : (
            <div className="col-4 col-sm-12 col-md-12 col-lg-4">
              {/* แสดงปุ่มซื้อหากคอร์สยังไม่ได้ซื้อ */}
              <div className="border p-3">
                <p className="fs-2">{course.name}</p>
                <p className="fs-4">
                  Price:{" "}
                  {course.price == "Open Access"
                    ? "Open Access"
                    : `฿ ${course.price}`}
                </p>
                <p className="my-3 fs-6">Full Lifetime Access</p>
                <button
                  className="btn btn-primary btn-lg w-100"
                  onClick={() => {
                    navigatePage(course.id, course.price, course);
                  }}
                >
                  <>
                    {course.price == "Open Access"
                      ? "Start Learning"
                      : "Buy Now"}
                  </>
                </button>
                <button className="btn btn-outline-primary btn-lg w-100 mt-3">
                  Add to Wishlist
                </button>
              </div>
            </div>
          )}
        </div>
      </div>
    </MainLayout>
  );
}

export default CourseDetail;
