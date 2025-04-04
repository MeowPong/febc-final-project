import MainLayout from "../components/MainLayout";
import { useLocation } from "react-router-dom";
import { useEffect, useState } from "react";
import axios from "axios";
import config from "../config/config";
import { useTheme } from "../contexts/ThemeContext";
import PlayIconBlack from "../assets/Material_Icon/play_circle_black.svg";
import PlayIconWhite from "../assets/Material_Icon/play_circle_white.svg";
import CheckIconWhite from "../assets/Material_Icon/check_white.svg";
import CheckIconBlack from "../assets/Material_Icon/check_black.svg";
import ProgressBar from "../components/ProgressBar";

function VideoPlayer() {
  const location = useLocation(); // ดึง location จาก react-router-dom
  const { id } = location.state || {}; // ดึง id ของคอร์สจาก location state
  const [course, setCourse] = useState({}); // เก็บข้อมูลคอร์ส
  const { theme } = useTheme(); // ดึง theme จาก context
  const [currentVideoIndex, setCurrentVideoIndex] = useState(0); // เก็บ index ของวิดีโอที่กำลังเล่น
  const [playedVideos, setPlayedVideos] = useState({}); // เก็บ index ของวิดีโอที่เล่นแล้ว
  const [progress, setProgress] = useState(0); // เก็บความคืบหน้าของคอร์ส

  useEffect(() => {
    const fetchCourse = async () => {
      try {
        const res = await axios.get(`${config.API_BASE_URL}/courses/${id}`); // ดึงข้อมูลคอร์สจาก API
        setCourse(res.data);

        const storedPlayed = localStorage.getItem("playedVideo");
        const parsedPlayed = storedPlayed ? JSON.parse(storedPlayed) : {};
        calculateProgress(parsedPlayed, res.data); // คำนวณความคืบหน้า
      } catch (error) {
        console.error("Error: ", error);
      }
    };

    const loadPlayedVideos = () => {
      const storedPlayed = localStorage.getItem("playedVideo");
      setPlayedVideos(storedPlayed ? JSON.parse(storedPlayed) : {});
    };

    loadPlayedVideos();
    fetchCourse();
  }, [id]);  // เรียก useEffect เมื่อ id เปลี่ยน

  
  // ฟังก์ชันสำหรับเลือกวิดีโอที่จะเล่น
  const handleSelectVideo = (videoIndex) => {
    setCurrentVideoIndex(videoIndex);
  };

  
  // ฟังก์ชันสำหรับบันทึกวิดีโอที่เล่นแล้ว
  const handlePlayedVideo = (courseId, videoIndex) => {
    if (courseId && videoIndex !== undefined) {
      const updatedPlayedVideos = { ...playedVideos };
      if (!updatedPlayedVideos[courseId]) {
        updatedPlayedVideos[courseId] = [];
      }
      if (!updatedPlayedVideos[courseId].includes(videoIndex)) {
        updatedPlayedVideos[courseId].push(videoIndex);
      }
      localStorage.setItem("playedVideo", JSON.stringify(updatedPlayedVideos));
      setPlayedVideos(updatedPlayedVideos);
      calculateProgress(updatedPlayedVideos, course); // เรียกที่นี่เพื่ออัปเดต progress ทันที
    }
  };

  
  // ฟังก์ชันสำหรับคำนวณความคืบหน้าของคอร์ส
  const calculateProgress = (updatedPlayedVideos, courseData) => {
    if (courseData?.videos?.length > 0) {
      const totalVideos = courseData.videos.length;
      const playedCount = updatedPlayedVideos[courseData.id]?.length || 0;
      const progressPercentage = (playedCount / totalVideos) * 100;
      setProgress(progressPercentage);

      const storedProgress = localStorage.getItem("courseProgress");
      const progressData = storedProgress ? JSON.parse(storedProgress) : {};
      progressData[courseData.id] = progressPercentage;
      localStorage.setItem("courseProgress", JSON.stringify(progressData));
    }
  };

  return (
    <MainLayout>
      <div className="container">
        <div className="row">
        {/* ส่วนแสดงวิดีโอ */}
          <div className="col-12 col-sm-12 col-md-12 col-lg-8">
            {course.videos && course.videos.length > 0 ? (
              <div>
                <video
                  src={course.videos[currentVideoIndex].link}
                  controls="controls"
                  className="w-100 object-fit-cover"
                  style={{ aspectRatio: "16/9" }}
                  onEnded={() => handlePlayedVideo(course.id, currentVideoIndex)}
                ></video>
                <h1>{course.videos[currentVideoIndex].title}</h1>
                <p>{course.videos[currentVideoIndex].description}</p>
              </div>
            ) : (
              <p>Loading video...</p>
            )}
          </div>

          {/* ส่วนแสดงรายการวิดีโอ */}
          <div className="col-12 col-sm-12 col-md-12 col-lg-4 border">
            <div className="mt-2 p-2">
              <div className="d-flex justify-content-between">
              <div className="fs-6 fw-medium">{course.name}</div>
              <div className="fs-6 fw-light">{progress.toFixed(2)} % complete</div>
              </div>
              <ProgressBar progress={progress} />
            </div>
            {course?.videos && course.videos.length > 0 ? (
              course.videos.map((item, index) => (
                <div
                  key={item.id}
                  className={
                    currentVideoIndex === index
                      ? "w-100 border rounded my-2 p-2 d-flex bg-secondary-subtle"
                      : "w-100 border rounded my-2 p-2 d-flex"
                  }
                  style={{ height: "6.25rem", cursor: "pointer" }}
                  onClick={() => handleSelectVideo(index)}
                >
                  <div className="d-flex gap-2 me-4 align-items-center">
                    <div style={{ width: "2rem" }}>
                      {playedVideos[course.id]?.includes(index) && (
                        <img
                          src={
                            theme === "light" ? CheckIconBlack : CheckIconWhite
                          }
                          alt="Check Icon"
                          style={{ height: "2.5rem" }}
                        />
                      )}
                    </div>
                    <div style={{ width: "2rem" }}>
                      <img
                        src={theme === "light" ? PlayIconBlack : PlayIconWhite}
                        alt="Play Icon"
                        style={{ height: "2.5rem" }}
                      />
                    </div>
                  </div>
                  <div className="d-flex align-items-center">
                    <div className="d-flex flex-column align-items-start text-start">
                      <span className="fs-5 fw-medium card-title">
                        {item.title}
                      </span>
                      <span className="fs-6 lh-sm card-description">
                        {item.description}
                      </span>
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
      </div>
    </MainLayout>
  );
}

export default VideoPlayer;