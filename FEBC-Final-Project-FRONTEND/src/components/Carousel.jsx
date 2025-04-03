import Banner_1 from "../assets/banners/banner-1.webp";
import Banner_2 from "../assets/banners/banner-2.webp";
import Banner_3 from "../assets/banners/banner-3.webp";
import Mobile_Banner_1 from "../assets/banners/MobileBanner_1.webp";
import Mobile_Banner_2 from "../assets/banners/MobileBanner_2.webp";
import Mobile_Banner_3 from "../assets/banners/MobileBanner_3.webp";

function Carousel() {
  return (
    <>
      {/* website size */}
      <div className="w-100 d-none d-sm-block">
        <div id="BannerCarouselDesktop" className="carousel slide" data-bs-ride="true">
          <div className="carousel-indicators">
            <button
              type="button"
              data-bs-target="#BannerCarouselDesktop"
              data-bs-slide-to="0"
              className="active"
              aria-current="true"
              aria-label="Slide 1"
            ></button>
            <button
              type="button"
              data-bs-target="#BannerCarouselDesktop"
              data-bs-slide-to="1"
              aria-label="Slide 2"
            ></button>
            <button
              type="button"
              data-bs-target="#BannerCarouselDesktop"
              data-bs-slide-to="2"
              aria-label="Slide 3"
            ></button>
          </div>
          <div className="carousel-inner">
            <div className="carousel-item active">
              <img
                src={Banner_1}
                className="d-block w-100 img-fluid "
                alt="banner 1"
              />
              <div className="carousel-caption mb-3 ">
                <div className="d-flex flex-nowrap justify-content-center gap-3">
                  <button className="btn btn-outline-primary btn-lg ">
                    Our courses
                  </button>
                  <button className="btn btn-primary btn-lg ">
                    Sign up now
                  </button>
                </div>
              </div>
            </div>
            <div className="carousel-item">
              <img
                src={Banner_2}
                className="d-block w-100 img-fluid"
                alt="banner 2"
              />
            </div>
            <div className="carousel-item">
              <img
                src={Banner_3}
                className="d-block w-100 img-fluid"
                alt="banner 3"
              />
            </div>
          </div>
        </div>
      </div>

      {/* mobile size */}
      <div className="w-100 d-block d-sm-none">
        <div id="BannerCarouselMobile" className="carousel slide">
          <div className="carousel-indicators ">
            <button
              type="button"
              data-bs-target="#BannerCarouselMobile"
              data-bs-slide-to="0"
              className="active"
              aria-current="true"
              aria-label="Slide 1"
            ></button>
            <button
              type="button"
              data-bs-target="#BannerCarouselMobile"
              data-bs-slide-to="1"
              aria-label="Slide 2"
            ></button>
            <button
              type="button"
              data-bs-target="#BannerCarouselMobile"
              data-bs-slide-to="2"
              aria-label="Slide 3"
            ></button>
          </div>
          <div className="carousel-inner">
            <div className="carousel-item active">
              <img
                src={Mobile_Banner_1}
                className="d-block w-100 img-fluid "
                alt="banner 1"
              />
              <div className="carousel-caption mb-3">
                <div className="d-flex flex-nowrap justify-content-center gap-3 ">
                  <button className="btn btn-outline-primary ">
                    Our courses
                  </button>

                  <button className="btn btn-primary ">
                    Sign up now
                  </button>
                </div>
              </div>
              
            </div>
            <div className="carousel-item">
              <img
                src={Mobile_Banner_2}
                className="d-block w-100 img-fluid"
                alt="banner 2"
              />
            </div>
            <div className="carousel-item">
              <img
                src={Mobile_Banner_3}
                className="d-block w-100 img-fluid"
                alt="banner 3"
              />
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Carousel;
