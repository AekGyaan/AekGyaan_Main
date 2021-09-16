import React, { useEffect, useState } from "react";
import { doc, getDoc } from "firebase/firestore";
import { db } from "../firebaseConfig";
import { DateTime } from "luxon";
import { Code } from "react-content-loader";

const DynamicArticle = () => {
  const [article, setArticle] = useState({});
  const readData = async (index) => {
    const docRef = doc(db, "articles", index);
    const docSnap = await getDoc(docRef);
    setArticle(docSnap.data());
    console.log(docSnap.data());
  };

  useEffect(() => {
    const url = window.location.href;
    const index = url.split("/")[url.split("/").length - 1];
    readData(index);
  }, []);

  if (!article.title) {
    return (
      <div className="loader-parent">
        <Code />
      </div>
    );
  }

  return (
    <div class="ai" id="articles">
      <div class="ai-h1">{article.title}</div>
      <div class="ai-date">
        <div class="blog-post-date">
          <span>
            <i class="iq far fa-calendar-alt"></i>{" "}
            {DateTime.fromSeconds(article.date.seconds).toFormat("cccc")}{" "}
            <i class="ie fas fa-circle"></i>{" "}
            {DateTime.fromSeconds(article.date.seconds).toFormat("DDD")}
          </span>
        </div>
      </div>
      {article.image && (
        <div class="ai-img">
          <img src={article.image} alt="" />
        </div>
      )}
      {article?.subtitle && <div class="ai-h2">{article?.subtitle}</div>}

      {article?.section1 && <div class="ai-p">{article?.section1}</div>}

      {article?.section2 && <div class="ai-p">{article?.section2}</div>}

      {article.section3 && <div class="ai-p"> {article?.section3}</div>}

      {article.section4 && <div class="ai-p"> {article?.section4}</div>}

      {article.section5 && <div class="ai-p"> {article?.section5}</div>}

      {article.section6 && <div class="ai-p"> {article?.section6}</div>}

      {article.section7 && <div class="ai-p"> {article?.section7}</div>}

      {article.section8 && <div class="ai-p"> {article?.section8}</div>}

      {article.section9 && <div class="ai-p"> {article?.section9}</div>}

      {article.section10 && <div class="ai-p"> {article?.section10}</div>}

      {article.section11 && <div class="ai-p"> {article?.section11}</div>}

      {article.section12 && <div class="ai-p"> {article?.section12}</div>}

      {article.section13 && <div class="ai-p"> {article?.section13}</div>}

      {article.section14 && <div class="ai-p"> {article?.section14}</div>}

      {article.section15 && <div class="ai-p"> {article?.section15}</div>}

      {article.section16 && <div class="ai-p"> {article?.section16}</div>}

      {article.section17 && <div class="ai-p"> {article?.section17}</div>}

      {article.section18 && <div class="ai-p"> {article?.section18}</div>}

      {article.section19 && <div class="ai-p"> {article?.section19}</div>}

      {article.section20 && <div class="ai-p"> {article?.section20}</div>}

      {article.section21 && <div class="ai-p"> {article?.section21}</div>}

      {article.section22 && <div class="ai-p"> {article?.section22}</div>}

      {article.section23 && <div class="ai-p"> {article?.section23}</div>}

      {article.section24 && <div class="ai-p"> {article?.section24}</div>}

      {article.section25 && <div class="ai-p"> {article?.section25}</div>}
    </div>
  );
};

export default DynamicArticle;
