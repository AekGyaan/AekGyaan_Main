import React from "react";
import about2 from "../images/about_us_page/2.jpeg";
import about3 from "../images/about_us_page/3.jpeg";
import about4 from "../images/about_us_page/V1.jpeg";
import about5 from "../images/about_us_page/V2.jpeg";

const About = () => {
  return (
    <>
      <div class="abt-sec2">
        <div class="abt-sec2-box">
          <div class="abt-sec2-box-inner">
            <div class="abt-sec2-h1">ABOUT US</div>
          </div>
        </div>
        <div class="abt-sec2-bottom">
          <div class="sec2-abt-left">
            <div class="sec2-abt-left-p">
              'Aek' means One and Gyaan means ‘knowledge’. We are an
              independent, multi-dimensional organization/think tank, with
              capabilities in research, survey, evaluation, policy, consultancy
              and decision making. Our objective is to ensure effective
              formulation and implementation of laws in order to improve
              governance for the public good. Our approach is based on three I’s
              that is Innovation, implementation and influence with the sole aim
              to create large social impact. Every aspect of our work is driven
              by a comprehensive and an impartial agenda and by the need to
              propagate ideas that advance justice. Quality and objectivity are
              our two core values. Apart from implementation, innovation also
              calls for collaboration and therefore our effort constantly calls
              for engaging with various stakeholders such as Government of
              India, various State Governments, public and 4 private
              institutions and other bodies with similar or allied aims at
              multiple levels to ensure that policies are translated into
              practice.
            </div>
          </div>
          <div class="sec2-abt-right">
            <img src={about2} alt="" />
          </div>
        </div>
      </div>

      <div class="abt-sec3">
        <div class="sec3-abt-left">
          <img src={about3} alt="" />
        </div>
        <div class="sec3-abt-right">
          <div class="sec3-abt-right-p">
            In furtherance of sustainable development goals we strive to ensure
            that our knowledge, findings research work and their respective
            methodologies are shared with varied audiences from time to time.
            And the most important aspect is that we do this with a mindset of
            accountability and transparency. The only irreplaceable capital an
            organization possesses is the knowledge and ability of its people.
            The productivity of that capital depends on how effectively people
            share their competence with those who can use it. To achieve this we
            have a well-qualified multi-disciplinary team drawn from academia,
            civil services, armed forces and retired bureaucrats who along with
            their experience also bring diversity in their views. Everyone has
            complete autonomy to express their individual views. Our research
            and policy recommendations do not subscribe to any particular
            political view or interest or any religion. We have been in active
            association with NAULA FOUNDATION for Water Conservation related
            Works and Programmes in India.
          </div>
        </div>
      </div>
      <div id="our-vision"></div>

      <div class="abt">
        <div class="abt-img1">
          <img class="abt-img11" src={about4} alt="" />
        </div>

        <div class="abt-text">
          <div class="abt-text-inner">
            <div class="abt-text-h1">OUR VISION</div>
            <div class="abt-text-h3">
              AekGyaan is an independent, non-profit organization seeking to
              promote interest in and understanding of national and
              international affairs. A think tank organized for
              interdisciplinary research with the objective of providing advice
              on a diverse range of policy issues and products through the use
              of specialized knowledge and the activation of networks. We exist
              to mobilize expertise and ideas to influence the policymaking
              process. We serve as important catalysts for ideas and action. In
              a world facing many pressing problems that include extreme
              poverty, inequality, climate change, rapid urbanization, the
              spread of infectious disease, armed conflict, international
              terrorism, organized crime, and the proliferation of nuclear
              weapons, good ideas that can be acted upon are essential. We
              possess the ability to capture the political imagination by
              brokering ideas, stimulating public debate, and offering creative
              yet practical solutions to tackle the world’s most pressing
              problems.
            </div>
          </div>
        </div>

        <div class="abt-img1">
          <img class="abt-img12" src={about5} alt="" />
        </div>
      </div>

      <div class="abt-sec4">
        <div class="sec4-abt-left">WHY US ??</div>
        <div class="sec4-abt-right">
          <div class="sec4-abt-right-p">
            Crises are always harbingers of change. India is gearing up for a
            world post the COVID-19 pandemic wherein we would require constant
            collaboration with fellow nations to strengthen each other. It is
            well positioned to play an important role in this post covid era
            where it has to effectively navigate its way by shaping both
            domestic and global discourses. For a better tomorrow we have to
            approach this post pandemic era with a renewed vigour and zeal and
            what could be a better opportunity than to play our part in this
            sustainable growth and development. We have to decide if we have to
            be spectators, or emerge as a world leader.
          </div>
        </div>
      </div>
    </>
  );
};

export default About;
