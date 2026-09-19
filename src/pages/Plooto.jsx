import { withBase } from '../urls';
import { useScrollReveal } from '../useScrollReveal';
import React from 'react';

export default function Plooto() {
  useScrollReveal('caseStudy');
  return (
    <>
      <section className="banner-image">
        <div className="cover-image">
          <img src={withBase('/assets/66cfc073db678868a950a24f_Frame-12121--1-.png')} loading="lazy" alt="" />
        </div>
      </section>
      <section className="case-study-body">
        <div className="w-layout-blockcontainer cs-container w-container">
          <div className="w-layout-vflex v-flex _20-spacing">
            <div className="w-layout-hflex logo-chip plooto">
              <img src={withBase('/assets/66cd5b36d563b555c7e1ce37_plooto_logo.jpeg')} loading="lazy" alt="" className="logo-mini" />
              <div className="body-1 medium white">
                {"Plooto"}
              </div>
            </div>
            <h1 className="heading-2">
              {"New Account Type Integration"}
            </h1>
            <div className="w-layout-grid cs-overview">
              <div id="w-node-c58bce0d-41fd-974f-2cfe-250cdd393561-e778a71a" className="w-layout-vflex v-flex _10-spacing">
                <div className="heading-5">
                  {"Overview"}
                </div>
                <div className="body-1">
                  {"Plooto is a cash management software that helps users conduct accounts payables and receivables."}
                  <br />
                  {"‍"}
                  <br />
                  {"It was identified that 12% of the existing firm's on Plooto are not accounting firms, despite the fact that the Plooto app, including the on-boarding flow and in-app experience, is entirely catered towards Accountants."}
                  <br />
                  {"‍"}
                  <br />
                  {"In an effort to optimize in-app positioning and cater towards this previously unknown consumer base, Plooto wanted to know how we could combat this issue."}
                </div>
              </div>
              <div id="w-node-_77de1b24-ad4a-8a70-02a0-2a44c344a94d-e778a71a" className="w-layout-vflex v-flex _20-spacing">
                <div className="w-layout-vflex v-flex _10-spacing">
                  <div className="heading-5">
                    {"Role"}
                  </div>
                  <div className="body-1">
                    {"Lead Product Designer"}
                  </div>
                </div>
                <div className="w-layout-vflex v-flex _10-spacing">
                  <div className="heading-5">
                    {"Responsibilities"}
                  </div>
                  <div className="body-1">
                    {"UX Research"}
                  </div>
                  <div className="body-1">
                    {"UX/UI Design"}
                  </div>
                  <div className="body-1">
                    {"Product Strategy"}
                  </div>
                </div>
              </div>
              <div id="w-node-bd1c42d6-8c5c-40b4-3a9c-c6438466ace8-e778a71a" className="w-layout-vflex v-flex _20-spacing">
                <div className="w-layout-vflex v-flex _10-spacing">
                  <div className="heading-5">
                    {"Team"}
                  </div>
                  <div className="body-1">
                    {"1 UX Design Manager"}
                  </div>
                  <div className="body-1">
                    {"3 Product Managers"}
                  </div>
                  <div className="body-1">
                    {"3 Developers"}
                  </div>
                </div>
                <div className="w-layout-vflex v-flex _10-spacing">
                  <div className="heading-5">
                    {"Timeline"}
                  </div>
                  <div className="body-1">
                    {"1 month"}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="w-layout-blockcontainer cs-container small w-container">
          <div className="w-layout-vflex v-flex _20-spacing">
            <div className="w-layout-vflex v-flex _10-spacing">
              <div className="heading-6">
                {"Background"}
              </div>
              <div className="heading-5">
                {"Understanding Plooto"}
              </div>
            </div>
            <div className="body-1">
              {"Plooto offers it's users three options upon sign up; "}
              <span className="body-1 bold">
                {"'Accounting/Bookkeeping Firm'"}
              </span>
              {" allows users to manage multiple entities, while the "}
              <span className="body-1 bold">
                {"'Small or Mid-Sized Business'"}
              </span>
              {" and"}
              <strong>
                {" "}
              </strong>
              <span className="body-1 bold">
                {"'Not-For-Profit/Charitable Organization'"}
              </span>
              <strong>
                {" "}
              </strong>
              {"options are made for businesses that intend to only manage their own finances. Straight from onboarding, these options cause confusion to its users—it's hard to understand which option is best for them."}
              <br />
              <br />
              {"Moreover, as 'Accounting/Bookkeeping Firm' is the only option for managing multiple entities, all users must onboard with this account type and go through an experience tailored to accounting firms."}
            </div>
          </div>
        </div>
        <div className="w-layout-blockcontainer cs-container w-container">
          <div className="w-layout-vflex v-flex _20-spacing center-aligned">
            <img className="only-media" src={withBase('/assets/66d0a237c9273951e2fe34eb_Sign-Up-Flow-Tile--1-.png')} alt="" loading="lazy" />
            <div className="body-1 grey center-aligned">
              {"Previous three account options upon onboarding"}
            </div>
          </div>
        </div>
        <div className="w-layout-blockcontainer cs-container small w-container">
          <div className="w-layout-vflex v-flex _20-spacing">
            <div className="w-layout-vflex v-flex _10-spacing">
              <div className="heading-6">
                {"Research"}
              </div>
              <div className="heading-5">
                {"Who Are Our Users?"}
              </div>
            </div>
            <div className="body-1">
              {"With a sample of 215 firms on Plooto, I first determined how many were accounting vs. non-accounting. Preliminary research revealed that "}
              <span className="body-1">
                {"28.4% of these firms were non-accounting"}
              </span>
              {", primarily business consulting and property management firms."}
              <br />
              <br />
              {"The sample showed a significant number of non-accounting firms, leading product strategy to investigate further and find that 12% of users were outside the target demographic. User interviews also revealed a strong opportunity to create an experience tailored to this audience."}
            </div>
          </div>
        </div>
        <div className="w-layout-blockcontainer cs-container w-container">
          <div className="w-layout-vflex v-flex _20-spacing center-aligned">
            <div className="cs-media center-aligned plooto-stats">
              <img className="only-media plooto-metric" src={withBase('/assets/66d08edefdb2e7bc39f2d582_Screenshot-2024-08-29-at-11.03.47-AM-1.png')} alt="" loading="lazy" />
              <img src={withBase('/assets/66d09b441ec69f3ab4b9ad96_Frame-2.png')} loading="lazy" alt="" className="only-media plooto-metric" />
            </div>
            <div className="body-1 grey center-aligned">
              {"User segmentation of a sample size of Plooto users"}
            </div>
          </div>
        </div>
        <div className="w-layout-blockcontainer cs-container small w-container">
          <div className="w-layout-vflex v-flex _20-spacing">
            <div className="quote">
              <div className="w-layout-vflex v-flex _10-spacing">
                <div className="heading-6">
                  {"Problem"}
                </div>
                <div className="body-1">
                  {"Since Plooto's app caters its experience and onboarding towards accounting firms, it alienates 12% of its current user base, as well as potential users who assume that the app is only for accountants."}
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="w-layout-blockcontainer cs-container small w-container">
          <div className="w-layout-vflex v-flex _20-spacing">
            <div className="heading-5">
              {"In-App Experience Audit"}
            </div>
            <div className="body-1">
              {"Using a site map, all instances of accounting-related verbiage were captured. This included phrases such as \"accounting firm,\" \"firm member,\" \"accounting member,\" \"accountants & bookkeepers,\" and many more. These instances are outlined in red below."}
            </div>
          </div>
        </div>
      </section>
      <section className="large-image padding">
        <img src={withBase('/assets/66d3d734a457cbb2fdb112ed_Frame-12128--5--min.png')} alt="" loading="lazy" />
      </section>
      <section className="case-study-body last-container">
        <div className="w-layout-blockcontainer cs-container small w-container">
          <div className="w-layout-vflex v-flex _20-spacing">
            <div className="heading-5">
              {"Identifying Areas of Improvement"}
            </div>
            <div className="body-1">
              {"After identifying all instances of accounting verbiage, I noticed inconsistencies in the app, such as using different terms (\"user,\" \"company member,\" and \"team member\") for the same concept. Although not initially in scope, I raised this with the team, and we decided to address these inconsistencies to prevent user confusion."}
              <br />
              <br />
              {"Thus, through auditing the app, we identified three key areas of improvement for this project:"}
            </div>
            <div className="w-layout-hflex h-flex _10-spacing center-aligned">
              <div className="point number">
                <div className="heading-5 bold point icon">
                  {""}
                </div>
              </div>
              <div className="w-layout-vflex v-flex">
                <div className="heading-7">
                  {"Onboarding"}
                </div>
                <div className="body-1">
                  {"There's no option for non-accounting firms, so when these users are onboarding onto Plooto, they're forced to sign up as an \"accounting\" firm."}
                </div>
              </div>
            </div>
            <div className="w-layout-hflex h-flex _10-spacing center-aligned">
              <div className="point number">
                <div className="heading-5 bold point icon">
                  {""}
                </div>
              </div>
              <div className="w-layout-vflex v-flex">
                <div className="heading-7">
                  {"Accounting Language"}
                </div>
                <div className="body-1">
                  {"The app's language is tailored to accounting firms and uses technical jargon, making it difficult to understand without an accounting background."}
                </div>
              </div>
            </div>
            <div className="w-layout-hflex h-flex _10-spacing center-aligned">
              <div className="point number">
                <div className="heading-5 bold point icon">
                  {""}
                </div>
              </div>
              <div className="w-layout-vflex v-flex">
                <div className="heading-7">
                  {"Remove Inconsistencies"}
                </div>
                <div className="body-1">
                  {"The app has various inconsistencies, including visual discrepancies and using multiple terms to describe the same concept, leading to user confusion."}
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="w-layout-blockcontainer cs-container small w-container">
          <div className="w-layout-vflex v-flex _20-spacing">
            <div className="w-layout-vflex v-flex _10-spacing">
              <div className="heading-6">
                {"Design"}
              </div>
              <div className="heading-5">
                {"Making Decisions"}
              </div>
            </div>
            <div className="body-1">
              {"During the first iteration, I began creating all of the required screens on Figma and applying updates, a couple key design decisions are listed below."}
            </div>
          </div>
        </div>
        <div className="w-layout-blockcontainer cs-container w-container">
          <div className="w-layout-grid media-text">
            <div id="w-node-_3b5990ec-955d-8daa-faea-1767454a84ba-e778a71a" className="w-layout-vflex v-flex _20-spacing">
              <div className="heading-5">
                {"What Account Do I Need?"}
              </div>
              <div className="body-1">
                {"After stakeholder consultation, we selected the four-card layout to enhance experience while simplifying onboarding. The layout includes tooltips for users who need additional guidance when selecting between options. Additional key benefits are listed below."}
              </div>
              <div className="w-layout-hflex h-flex _10-spacing">
                <div className="point number">
                  <div className="heading-5 bold point icon">
                    {""}
                  </div>
                </div>
                <div className="w-layout-vflex v-flex _5-spacing">
                  <div className="heading-7">
                    {"Personalized experience"}
                  </div>
                  <div className="body-1">
                    {"Caters towards accounting firms and charities, which make up over 80% of users."}
                  </div>
                </div>
              </div>
              <div className="w-layout-hflex h-flex _10-spacing">
                <div className="point number">
                  <div className="heading-5 bold point icon">
                    {""}
                  </div>
                </div>
                <div className="w-layout-vflex v-flex _5-spacing">
                  <div className="heading-7">
                    {"Better marketing opportunity"}
                  </div>
                  <div className="body-1">
                    {"The four-card layout provides more targeted options that create better marketing opportunities."}
                  </div>
                </div>
              </div>
            </div>
            <div className="cs-media">
              <div className="w-layout-vflex v-flex _40-spacing tablet-horizontal">
                <div className="w-layout-vflex v-flex _20-spacing center-aligned">
                  <img src={withBase('/assets/66d7512420293779ff9d0189_Select-Business-Type--1-.png')} loading="lazy" alt="" className="only-media tablet" />
                  <div className="body-1 grey center-aligned">
                    {"❌ Two-card layout"}
                  </div>
                </div>
                <div className="w-layout-vflex v-flex _20-spacing center-aligned">
                  <img src={withBase('/assets/66d75124b9d963c2a3dd858a_Select-Business-Type-v1.png')} loading="lazy" alt="" className="only-media tablet" />
                  <div className="body-1 grey center-aligned">
                    {"✅ Four-card layout"}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="w-layout-blockcontainer cs-container w-container">
          <div className="w-layout-grid media-text">
            <div className="cs-media">
              <div className="w-layout-vflex v-flex _40-spacing tablet-horizontal">
                <div className="w-layout-vflex v-flex _20-spacing center-aligned">
                  <img src={withBase('/assets/66ecba97e9594ed24783192e_Client-Settings-_-Client-Information-_-Edit-Team-Member--2--1--2-.png')} loading="lazy" alt="" className="only-media tablet" />
                  <div className="body-1 grey center-aligned">
                    {"❌ Using several names: user, company member, and firm member"}
                  </div>
                </div>
                <div className="w-layout-vflex v-flex _20-spacing center-aligned">
                  <img src={withBase('/assets/66ecb9d7bb593141fa38e3b8_Client-Settings-_-Client-Information-_-Edit-Team-Member--1-.png')} loading="lazy" alt="" className="only-media tablet" />
                  <div className="body-1 grey center-aligned">
                    {"✅ Consolidating into one name: user"}
                  </div>
                </div>
              </div>
            </div>
            <div id="w-node-_3b5990ec-955d-8daa-faea-1767454a84e7-e778a71a" className="w-layout-vflex v-flex _20-spacing">
              <div className="heading-5">
                {"Naming Our Users"}
              </div>
              <div className="body-1">
                {"Before consolidating the term, I audited the entire app to find all instances of user-related terms to bring to stakeholders and discuss which to use. User was concluded as the most intuitive option."}
              </div>
              <div className="w-layout-hflex h-flex _10-spacing">
                <div className="point number">
                  <div className="heading-5 bold point icon">
                    {""}
                  </div>
                </div>
                <div className="w-layout-vflex v-flex _5-spacing">
                  <div className="heading-7">
                    {"Reduces confusion"}
                  </div>
                  <div className="body-1">
                    {"Multiple terms in close proximity created unnecessary cognitive friction."}
                  </div>
                </div>
              </div>
              <div className="w-layout-hflex h-flex _10-spacing">
                <div className="point number">
                  <div className="heading-5 bold point icon">
                    {""}
                  </div>
                </div>
                <div className="w-layout-vflex v-flex _5-spacing">
                  <div className="heading-7">
                    {"Improves consistency"}
                  </div>
                  <div className="body-1">
                    {"Unified terminology creates a more coherent experience across all screens."}
                  </div>
                </div>
              </div>
              <div className="w-layout-hflex h-flex _10-spacing">
                <div className="point number">
                  <div className="heading-5 bold point icon">
                    {""}
                  </div>
                </div>
                <div className="w-layout-vflex v-flex _5-spacing">
                  <div className="heading-7">
                    {"Most intuitive option"}
                  </div>
                  <div className="body-1">
                    {"\"User\" tested best during comprehensive application audit."}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="w-layout-blockcontainer cs-container small w-container">
          <div className="w-layout-vflex v-flex _20-spacing">
            <div className="heading-5">
              {"Communicating with Stakeholders"}
            </div>
            <div className="body-1">
              {"As the scope included removing inconsistencies found in our audit, I added them while making updates. However, as more inconsistencies emerged, the scope expanded, and we needed to rethink our approach."}
              <br />
              <br />
              {"To address this, we held meetings with all relevant stakeholders to decide which updates should be included in the current project and which should be deferred to the design backlog."}
            </div>
            <div className="w-layout-grid grid-4 _2-card">
              <div id="w-node-_3b5990ec-955d-8daa-faea-1767454a8511-e778a71a" className="w-layout-vflex cs-media statistic">
                <h1 className="heading-3 statistic">
                  {"300+"}
                </h1>
                <div className="body-1">
                  {"Updates to screens"}
                </div>
              </div>
              <div id="w-node-_3b5990ec-955d-8daa-faea-1767454a8516-e778a71a">
                <img src={withBase('/assets/66ecbef5e6983332b3d8997b_Frame-12121--3-.png')} loading="lazy" alt="" className="image-62" />
              </div>
              <div className="w-layout-vflex cs-media statistic">
                <h1 className="heading-3 statistic">
                  {"182"}
                </h1>
                <div className="body-1">
                  {"Updates to screens"}
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="w-layout-blockcontainer cs-container small w-container">
          <section id="results" className="w-layout-vflex v-flex _20-spacing">
            <div className="w-layout-vflex v-flex _10-spacing">
              <div className="heading-6">
                {"Results"}
              </div>
              <div className="heading-5">
                {"Final Design"}
              </div>
            </div>
            <div className="body-1">
              {"Through tracking and applying all of the suggested changes from key stakeholders, I was able to complete a final design."}
            </div>
            <div className="w-layout-grid grid-18">
              <div className="quote">
                <div className="w-layout-vflex v-flex _10-spacing center-aligned">
                  <div className="large-number">
                    {"14"}
                  </div>
                  <div className="body-1 center">
                    {"Design updates"}
                  </div>
                </div>
              </div>
              <div className="quote">
                <div className="w-layout-vflex v-flex _10-spacing center-aligned">
                  <div className="large-number">
                    {"20"}
                  </div>
                  <div className="body-1 center">
                    {"Updates to modals"}
                  </div>
                </div>
              </div>
              <div className="quote">
                <div className="w-layout-vflex v-flex _10-spacing center-aligned">
                  <div className="large-number">
                    {"148"}
                  </div>
                  <div className="body-1 center">
                    {"Verbiage changes"}
                  </div>
                </div>
              </div>
            </div>
          </section>
        </div>
        <div className="w-layout-blockcontainer video-container w-container">
          <div className="cs-video plooto w-background-video w-background-video-atom">
            <video id="3b5990ec-955d-8daa-faea-1767454a8527-video" loop muted playsInline controls preload="none" poster={withBase('/assets/66ca4e4f43000cf04ad71025-681d66b2d6731330b9fc348b_Generic-Parent-Node-poster-00001.jpg')}>
              <source src={withBase('/assets/66ca4e4f43000cf04ad71025-681d66b2d6731330b9fc348b_Generic-Parent-Node-transcode.webm')} type="video/webm" />
                  <source src={withBase('/assets/66ca4e4f43000cf04ad71025-681d66b2d6731330b9fc348b_Generic-Parent-Node-transcode.mp4')} type="video/mp4" />
            </video>
          </div>
        </div>
        <div className="w-layout-blockcontainer cs-container small w-container">
          <div className="w-layout-vflex v-flex _20-spacing">
            <div className="w-layout-vflex v-flex _10-spacing">
              <div className="heading-6">
                {"Pass-Off"}
              </div>
              <div className="heading-5">
                {"Preparing for Pass-Off"}
              </div>
            </div>
            <div className="body-1">
              {"Before handing off the project to development, we met with the team to understand the necessary materials for a smooth transition. This included creating a 'Verbiage Glossary' document to record all verbiage changes for easy reference."}
            </div>
          </div>
        </div>
        <div className="w-layout-blockcontainer cs-container w-container">
          <div className="w-layout-vflex v-flex _20-spacing center-aligned">
            <div className="w-layout-blockcontainer video-container w-container">
              <div className="cs-video plooto w-background-video w-background-video-atom">
                <video id="96298940-4a26-9709-a501-9872f92e22ec-video" loop muted playsInline controls preload="none" poster={withBase('/assets/66ca4e4f43000cf04ad71025-6820c238e86c2903b290d788_Preparing-for-Pass-Off-poster-00001.jpg')}>
                  <source src={withBase('/assets/66ca4e4f43000cf04ad71025-6820c238e86c2903b290d788_Preparing-for-Pass-Off-transcode.webm')} type="video/webm" />
                  <source src={withBase('/assets/66ca4e4f43000cf04ad71025-6820c238e86c2903b290d788_Preparing-for-Pass-Off-transcode.mp4')} type="video/mp4" />
                </video>
              </div>
            </div>
            <div className="body-1 grey center-aligned">
              {"Verbiage glossary for development pass-off"}
            </div>
          </div>
        </div>
        <div className="w-layout-blockcontainer cs-container small w-container">
          <div className="w-layout-vflex v-flex _20-spacing">
            <div className="w-layout-vflex v-flex _10-spacing">
              <div className="heading-6">
                {"Reflection"}
              </div>
              <div className="heading-5">
                {"Next Steps"}
              </div>
            </div>
            <div className="body-1">
              {"Throughout the project, we found design inconsistencies that couldn't be included in the scope. This prompted us to standardize tracking inconsistencies and improve prioritization of design initiatives. Next steps include:"}
            </div>
            <div className="w-layout-hflex h-flex _10-spacing">
              <div className="point number">
                <div className="heading-5 bold point icon">
                  {""}
                </div>
              </div>
              <div className="w-layout-vflex v-flex _5-spacing">
                <div className="heading-7">
                  {"Standardize verbiage"}
                </div>
                <div className="body-1">
                  {"Users of a firm are referred to by various titles throughout the app (user, company member, and team member), with no standardized term used consistently. This causes conflicts when different titles appear on the same screen, leading to user confusion."}
                </div>
              </div>
            </div>
            <div className="w-layout-hflex h-flex _10-spacing">
              <div className="point number">
                <div className="heading-5 bold point icon">
                  {""}
                </div>
              </div>
              <div className="w-layout-vflex v-flex _5-spacing">
                <div className="heading-7">
                  {"Update modals"}
                </div>
                <div className="body-1">
                  {"Various modal patterns are used throughout the app without a standardized approach. This project has prompted discussions about creating a larger initiative to update all modal styles."}
                </div>
              </div>
            </div>
            <div className="body-1">
              {"I’ve logged all the identified next steps and additional areas for app improvement. Many changes have already been implemented, while others will evolve into larger projects."}
            </div>
          </div>
        </div>
        <div className="w-layout-blockcontainer cs-container w-container">
          <div className="w-layout-vflex v-flex _20-spacing center-aligned">
            <img className="only-media" src={withBase('/assets/66e31d7aea60e260f5e9f16e_Screenshot-2024-09-12-at-12.57.26-PM.png')} alt="" loading="lazy" />
            <div className="body-1 grey center-aligned">
              {"Next steps for usability improvements"}
            </div>
          </div>
        </div>
        <div className="w-layout-blockcontainer cs-container small w-container">
          <div className="w-layout-vflex v-flex _20-spacing">
            <div className="heading-5">
              {"Learnings"}
            </div>
            <div className="body-1">
              <span className="body-1 bold">
                {"Defining the scope."}
              </span>
              {" We often discovered too late that a change couldn't be made due to missing stakeholder input. Next time, I'll define the scope earlier and involve all stakeholders from the start."}
            </div>
            <div className="body-1">
              <span className="body-1 bold">
                {"Persuasive designs."}
              </span>
              {" My designs were sometimes rejected for being out of scope, but I argued they were necessary to improve the user experience. This project helped me better advocate for my designs."}
            </div>
            <div className="body-1">
              <span className="body-1 bold">
                {"Design guidelines."}
              </span>
              {" Plooto has flexible regulations regarding the design system, so this project helped me learn more about design guidelines and industry standards by conducting my own external research."}
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
