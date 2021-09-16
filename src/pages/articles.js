import React, { useState, useEffect } from "react";
import { collection, getDocs } from "@firebase/firestore";
import { db } from "../firebaseConfig";
import { DateTime } from "luxon";
import { Code } from "react-content-loader";

const Articles = () => {
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

  useEffect(() => {
    getData();
  }, []);

  return (
    <div class="sec5" id="articles">
      <div class="sec5-h">OUR ARTICLES</div>

      {!articles.map && (
        <div className="loader-parent">
          <Code />
          Loading
        </div>
      )}

      {articles.map &&
        articles.map((article) => (
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
                    {DateTime.fromSeconds(article?.date.seconds || 0).toFormat(
                      "cccc"
                    )}{" "}
                    <i class="ie fas fa-circle"></i>{" "}
                    {DateTime.fromSeconds(article?.date.seconds || 0).toFormat(
                      "DDD"
                    )}
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
    </div>
  );
};

export default Articles;
