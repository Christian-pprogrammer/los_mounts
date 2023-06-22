import "./App.css";
import logo from "./assets/pictures/mo.svg";
import s2 from "./assets/pictures/s2 (2).png";
import s4 from "./assets/pictures/s4.png";
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { Carousel } from "react-responsive-carousel";
import { useEffect, useState } from "react";

function App() {
  const [activeSection, setActiveSection] = useState("");

  useEffect(() => {
    const handleScroll = () => {
      const sections = document.querySelectorAll(".section");
      const scrollPosition = window.scrollY;

      sections.forEach((section) => {
        const sectionTop = section.offsetTop;
        const sectionHeight = section.offsetHeight;

        if (
          scrollPosition >= sectionTop &&
          scrollPosition < sectionTop + sectionHeight
        ) {
          setActiveSection(section.id);
        }
      });
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const handleNavLinkClick = (sectionId) => {
    const section = document.getElementById(sectionId);
    if (section) {
      const sectionTop = section.offsetTop;
      window.scrollTo({ top: sectionTop, behavior: "smooth" });
    }
  };
  return (
    <>
      <div className="container">
        {/* <HomeTop /> */}
        <div id="section0" className="top-bg">
          <header className="top-header">
            <img
              onClick={() => handleNavLinkClick("section0")}
              className="img"
              src={logo}
              alt=""
            />
            <div>
              <h4 onClick={() => handleNavLinkClick("section1")}>
                <a className="nav-link" href="#section1">
                  01. HISTORY
                </a>
              </h4>
              <h4 onClick={() => handleNavLinkClick("section2")}>
                <a className="nav-link" href="#section2">
                  02. TEAM
                </a>
              </h4>
            </div>
          </header>
          <footer></footer>
        </div>

        {/* <HomeMiddle /> */}
        <div id="section1" className="middle-bg">
          <header className="middle-header">
            <div className="middle-header-left">
              <img
                onClick={() => handleNavLinkClick("section0")}
                src={logo}
                alt=""
              />
              <h2>
                <span className="span-one">LOSANGELES</span>
                <span className="span-two">MOUNTAINS</span>
              </h2>
            </div>

            <div className="middle-header-right">
              <h4
                className={activeSection === "section1" ? "active" : ""}
                onClick={() => handleNavLinkClick("section1")}
              >
                <a href="#section1">01. HISTORY</a>
              </h4>
              <h4
                className={activeSection === "section2" ? "active" : ""}
                onClick={() => handleNavLinkClick("section2")}
              >
                <a href="#section2">02. TEAM</a>
              </h4>
            </div>
          </header>
          <main className="middle1">
            <div className="middleTitle">
              <div className="divTitle">
                <h1>01</h1>
                <div className="divContent">
                  <h2>HISTORY</h2>
                  <div className="point"></div>
                </div>
              </div>
              <p className="pragraph">
                Lorem ipsum dolor sit amet, consectetur adipisicing elit. Earum
                repellendus vero magnam, consectetur tenetur quia asperiores
                quisquam. Saepe tempora possimus facere. Autem necessitatibus
                libero laborum dignissimos nam optio, nulla voluptas facere
                architecto? Fuga earum quidem ducimus maiores, repellat quasi
                quae alias libero unde quas temporibus delectus doloremque
                exercitationem laboriosam quam?
              </p>
            </div>
          </main>

          <footer className="middle-footer">
            <div className="carousel-one">

            <Carousel showThumbs={false} width={"100%"}>
              <div className="carousel-container">
                <div>
                  <img className="carousel-image" src={s2} />
                </div>
                <div>
                  <img className="carousel-image" src={s4} />
                </div>
                <div>
                  <img className="carousel-image" src={s2} />
                </div>
              </div>
              <div className="carousel-container">
                <div>
                  <img className="carousel-image" src={s4} />
                </div>
                <div>
                  <img className="carousel-image" src={s2} />
                </div>
                <div>
                  <img className="carousel-image" src={s4} />
                </div>
              </div>
            </Carousel>
            </div>
            <div className="carousel-two">
              <Carousel showThumbs={false}>
                <div>
                  <img className="carousel-image" src={s2} alt="Slide 1" />
                </div>
                <div>
                  <img className="carousel-image" src={s4} alt="Slide 2" />
                </div>
                <div>
                  <img className="carousel-image" src={s2} alt="Slide 3" />
                </div>
                <div>
                  <img className="carousel-image" src={s4} alt="Slide 4" />
                </div>
              </Carousel>
            </div>
          </footer>
        </div>

        {/* <HomeBottom /> */}
        <div id="section2" className="top-bg">
          <header className="bottom-main-header">
            <div className="bottom-header">
              <div className="divTitleTwo">
                <h1>02</h1>
                <div className="divContentTwo">
                  <h2>CLIMB</h2>
                  <div className="pointTwo"></div>
                </div>
              </div>
              <div className="paragraphTwo">
                <h4>
                  Lorem, ipsum dolor sit amet consectetur adipisicing elit.
                  Nobis, voluptatum molestiae dolorem dolorum vero voluptatem
                  commodi veniam? Ut quia repellendus voluptatibus quidem
                  maiores amet sapiente delectus nihil, maxime deserunt quod?
                </h4>
              </div>
            </div>
          </header>
          <main>
            <div className="main-header">
              <div className="main-top">
                <div className="main-visible main-padding">
                  <h2>MOUNTAIN 1</h2>
                </div>
                <div className="main-padding">
                  <h2>MOUNTAIN 2</h2>
                </div>
              </div>
              <div></div>
            </div>
            <div className="schedule-container">
              <div className="schedule">
                <h2>SCHEDULE</h2>

                <div className="list">
                  <div className="dates">
                    <p>25 Nov 2016</p>
                    <p>25 Nov 2016</p>
                    <p style={{ paddingBottom: "15px", paddingTop: "15px" }}>
                      25 Nov 2016
                    </p>
                    <p style={{ paddingBottom: "15px", paddingTop: "15px" }}>
                      25 Nov 2016
                    </p>
                  </div>
                  <div className="places">
                    <p>VESTBULUM viverra</p>
                    <p>VESTBULUM viverra</p>
                    <p style={{ paddingBottom: "15px", paddingTop: "15px" }}>
                      VESTBULUM viverra
                    </p>
                    <p style={{ paddingBottom: "15px", paddingTop: "15px" }}>
                      VESTBULUM viverra
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </main>

          <footer className="bottom-footer">
            <div
              className="footer-links"
              style={{ display: "flex", alignItems: "center", gap: "10px" }}
            >
              <img
                onClick={() => handleNavLinkClick("section0")}
                src={logo}
                alt=""
              />
              <div style={{ fontSize: "10px" }}>
                <h2>LOSANGELES</h2>
                <h2>MOUNTAINS</h2>
              </div>
            </div>
            <div>
              <p style={{ fontSize: "10px", letterSpacing: "1px" }}>
                COPYRIGHT 2016. ALL RIGHTS RESERVED
              </p>
            </div>
          </footer>
        </div>
      </div>
    </>
  );
}

export default App;
