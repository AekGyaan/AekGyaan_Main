import React, { useEffect, useState } from "react";
import { collection, getDocs } from "@firebase/firestore";
import { db } from "../firebaseConfig";
import header1 from "../images/1.header/1.jpeg";
import header2 from "../images/1.header/2.jpeg";
import header3 from "../images/1.header/3.jpeg";
import about1 from "../images/2.about_us/a.jpeg";
import about2 from "../images/2.about_us/b.jpeg";
import about3 from "../images/2.about_us/c.jpeg";
import about4 from "../images/2.about_us/d.jpg";
import vision1 from "../images/3.vision/1.jpeg";
import vision2 from "../images/3.vision/2.jpeg";
import ceo from "../images/ceo_message/AekanshYadav.jpg";
import { DateTime } from "luxon";

const Index = () => {
  const [articles, setArticles] = useState([]);
  const getData = async () => {
    const querySnapshot = await getDocs(collection(db, "articles"));
    let res = [];
    querySnapshot.forEach((doc) => {
      const x = { id: doc.id, ...doc.data() };
      res = [...res, x];
    });
    setArticles(res);
  };

  articles.sort(function (a, b) {
    return b.date.seconds - a.date.seconds;
  });

  var slideIndex = 0;

  const showSlides = () => {
    var i;
    var slides = document.getElementsByClassName("mySlides");
    var dots = document.getElementsByClassName("dot");
    for (i = 0; i < slides.length; i++) {
      slides[i].style.display = "none";
    }
    slideIndex++;
    if (slideIndex > slides.length) {
      slideIndex = 1;
    }
    for (i = 0; i < dots.length; i++) {
      dots[i].className = dots[i].className.replace(" active", "");
    }
    slides[slideIndex - 1].style.display = "block";
    dots[slideIndex - 1].className += " active";
    setTimeout(showSlides, 5000); // Change image every 2 seconds
  };

  useEffect(() => {
    getData();
    showSlides();
  }, []);

  return (
    <>
      <div class="sec1">
        <div class="sec1-h1">AekGyaan</div>
        <div class="sec1-h3">House of Research</div>
        <div class="sec1-h2">
          "Every Addition to True Knowledge is an Addition to True Power"{" "}
        </div>

        <div class="slideshow-container">
          <div class="mySlides fade">
            <img src={header1} alt="" style={{ width: "100%" }} />
          </div>

          <div class="mySlides fade">
            <img src={header2} alt="" style={{ width: "100%" }} />
          </div>

          <div class="mySlides fade">
            <img src={header3} alt="" style={{ width: "100%" }} />
          </div>
        </div>

        <div style={{ textAlign: "center" }}>
          <span class="dot"></span>
          <span class="dot"></span>
          <span class="dot"></span>
        </div>

        {/* <div
          id="carouselExampleCaptions"
          class="carousel slide"
          data-bs-ride="carousel"
        >
          <div class="carousel-indicators">
            <button
              type="button"
              data-bs-target="#carouselExampleCaptions"
              data-bs-slide-to="0"
              class="active"
              aria-current="true"
              aria-label="Slide 1"
            ></button>
            <button
              type="button"
              data-bs-target="#carouselExampleCaptions"
              data-bs-slide-to="1"
              aria-label="Slide 2"
            ></button>
            <button
              type="button"
              data-bs-target="#carouselExampleCaptions"
              data-bs-slide-to="2"
              aria-label="Slide 3"
            ></button>
          </div>
          <div class="carousel-inner">
            <div class="carousel-item active">
              <img src={header1} class="d-block w-100" alt="..." />
              <div class="carousel-caption d-none d-md-block"></div>
            </div>
            <div class="carousel-item">
              <img src={header2} class="d-block w-100" alt="..." />
              <div class="carousel-caption d-none d-md-block"></div>
            </div>
            <div class="carousel-item">
              <img src={header3} class="d-block w-100" alt="..." />
              <div class="carousel-caption d-none d-md-block"></div>
            </div>
          </div>
          <button
            class="carousel-control-prev"
            type="button"
            data-bs-target="#carouselExampleCaptions"
            data-bs-slide="prev"
          >
            <span class="carousel-control-prev-icon" aria-hidden="true"></span>
            <span class="visually-hidden">Previous</span>
          </button>
          <button
            class="carousel-control-next"
            type="button"
            data-bs-target="#carouselExampleCaptions"
            data-bs-slide="next"
          >
            <span class="carousel-control-next-icon" aria-hidden="true"></span>
            <span class="visually-hidden">Next</span>
          </button>
        </div> */}
      </div>
      <div class="sec2" id="about">
        <div class="sec2-left">
          <div class="sec2-left-inner">
            <div class="sec2-h1">ABOUT US</div>
            <div class="sec2-h2">
              "The World of Great Opportunity is Available Now, as it has Always
              been, Only for Those With Great Vision"{" "}
            </div>
            <div class="sec2-h3">
              Talking about ourselves, 'Aek' means One and Gyaan means
              ‘knowledge’. We are an independent, multi-dimensional
              organization/think tank, with capabilities in research, survey,
              evaluation, policy, consultancy and decision making...
            </div>
            <div class="sec2-button">
              <a href="/about" target="_blank">
                Read More{" "}
              </a>
            </div>
          </div>
        </div>
        <div class="sec2-right">
          <img src={about3} alt="" class="sec2-img1" />
          <img src={about2} alt="" class="sec2-img2" />
          <img src={about1} alt="" class="sec2-img3" />
          <img src={about4} alt="" class="sec2-img4" />
        </div>
      </div>
      <div class="sec3" id="vision">
        <div class="sec3-left">
          <div class="sec3-left-img">
            <img class="sec3-left-img1" src={vision1} alt="" />
          </div>
          <div class="sec3-left-img">
            <img class="sec3-left-img2" src={vision2} alt="" />
          </div>
        </div>

        <div id="vision" class="sec3-right">
          <div class="sec3-right-inner">
            <div class="sec3-h1">OUR VISION</div>
            <div class="sec3-h2">
              "Alone, We Can Do So Little, Together We Can Do So Much"
            </div>
            <div class="sec3-h3">
              We are independent, non-profit organization seeking to promote
              interest in and understanding of national and international
              affairs....
            </div>
            <div class="sec3-button">
              <a target="_blank" href="about#our-vision">
                Read More
              </a>
            </div>
          </div>
        </div>
      </div>
      <div class="sec4" id="services">
        <div class="sec4-h">OUR SERVICES</div>
        <div class="sec4-p">
          "A Place for Everything, and Everything in its Place"
        </div>
        <div class="sec4-bottom">
          <div class="sec4-box">
            <div class="sec3-icon">
              <i class="fas fa-calendar-check"></i>
            </div>
            <div class="sec4-box-p">Market Research </div>
          </div>
          <div class="sec4-box">
            <div class="sec3-icon">
              <i class="fas fa-chart-pie"></i>
            </div>
            <div class="sec4-box-p">Baseline & Endline Surveys</div>
          </div>
          <div class="sec4-box">
            <div class="sec3-icon">
              <i class="fas fa-chart-line"></i>
            </div>
            <div class="sec4-box-p">Conduct Evaluations</div>
          </div>
          <div class="sec4-box">
            <div class="sec3-icon">
              <i class="fas fa-chart-bar"></i>
            </div>
            <div class="sec4-box-p">Data Analysis</div>
          </div>
          <div class="sec4-box">
            <div class="sec3-icon">
              <i class="fab fa-uncharted"></i>
            </div>
            <div class="sec4-box-p">Legal Research/Legal Consultancy</div>
          </div>
          <div class="sec4-box">
            <div class="sec3-icon">
              <i class="far fa-clipboard"></i>
            </div>
            <div class="sec4-box-p">Policy Making/Policy Research</div>
          </div>
        </div>
        <div class="sec4-button">
          <a href="/services" target="_blank">
            Read More{" "}
          </a>
        </div>
      </div>

      <div class="sec5" id="articles">
        <div class="sec5-h">OUR ARTICLES</div>

        {articles.map &&
          articles.slice(0, 3).map((article) => (
            <div id="blo">
              <div id="post1" class="blog-post">
                {article?.image && (
                  <div class="blog-post-img">
                    <img src={article?.image} alt="" />
                  </div>
                )}
                <div class="blog-post-info">
                  <div class="blog-post-date">
                    <span>
                      <i class="iq far fa-calendar-alt"></i>{" "}
                      {DateTime.fromSeconds(
                        article?.date.seconds || 0
                      ).toFormat("cccc")}{" "}
                      <i class="ie fas fa-circle"></i>{" "}
                      {DateTime.fromSeconds(
                        article?.date.seconds || 0
                      ).toFormat("DDD")}
                    </span>
                  </div>
                  <h1 class="blog-post-title">{article?.title} </h1>
                  <p class="blog-post-text">{article?.subtitle}</p>
                  <div class="sec5-button">
                    <a
                      href={`/article/${article?.id}`}
                      rel="noreferrer"
                      target="_blank"
                    >
                      Read More{" "}
                    </a>
                  </div>
                </div>
              </div>
            </div>
          ))}
        <div class="sec5-button1">
          <a href="./articles" target="_blank">
            Read All{" "}
          </a>
        </div>
      </div>

      <div class="sec6">
        <div class="sec6-h1">MESSAGE FROM OUR CEO</div>
        <div class="sec6-h2">
          I would ask you to question who’s at the table and who’s not at the
          table and to think about those voices that aren’t represented when
          you’re making decisions.
        </div>

        <div class="sec6-bottom">
          <div class="sec6-left">
            <div class="sec6-img">
              <img src={ceo} alt="" />
            </div>
          </div>
          <div class="sec6-right">
            <div class="sec6-h3">AEKANSH YADAV</div>
            <div class="sec6-h4">Founder & CEO</div>
            <div class="sec6-p">
              At AekGyaan we aim at providing the best of reasearch, review,
              policy making , evaluation, consultancy and decision making
              services. We are organised for interdisciplinary research with the
              objective of providing advice on diverse range of national and
              international affairs.We aim to continuously improve our
              capabilities and expand our service offering. To achieve this we
              have well qualified team along with their experience which brings
              diversity to our work.
              <br />
              <br />
              We are constantly moulding and shaping our organisational culture
              with improved operation efficiencies to meet the ever new
              challenges that comes our way. We are dedicated to built long term
              relationships and stand true to every client being unique, and
              therefore customizing resource and skill set for greater business
              affluence . To that end we would like to ask for your continued
              support and patronage to help us serve better.
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Index;
