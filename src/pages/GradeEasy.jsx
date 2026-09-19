import { withBase } from '../urls';
import { useScrollReveal } from '../useScrollReveal';
import React from 'react';

export default function GradeEasy() {
  useScrollReveal('caseStudy');
  return (
    <>
      <section className="banner-image">
        <div className="cover-image">
          <img src={withBase('/assets/66eaefeeca36a36d0b34bab3_Frame-2--1-.png')} alt="" loading="lazy" />
        </div>
      </section>
      <section className="case-study-body">
        <div className="w-layout-blockcontainer cs-container w-container">
          <div className="w-layout-vflex v-flex _20-spacing">
            <div className="w-layout-hflex logo-chip gradeeasy">
              <img src={withBase('/assets/66eb54c1e70365cc307944de_logo-3--1-.png')} loading="lazy" alt="" className="logo-mini" />
              <div className="body-1 white">
                {"GradeEasy"}
              </div>
            </div>
            <h1 className="heading-2">
              {"Grade Tracking Application"}
            </h1>
            <div className="w-layout-grid cs-overview">
              <div id="w-node-c58bce0d-41fd-974f-2cfe-250cdd393561-bd7bb354" className="w-layout-vflex v-flex _20-spacing">
                <div className="w-layout-vflex v-flex _10-spacing">
                  <div className="heading-5">
                    {"Overview"}
                  </div>
                  <div className="body-1">
                    {"GradeEasy is a web app that allows users to track grades and calculate their GPA across multiple institutions."}
                    <br />
                    <br />
                    {"I was in charge of building the end-to-end figma prototype of the product, in collaboration with a developer."}
                  </div>
                </div>
                <a href="https://gradeeasy.net/" target="_blank" className="link-block gradeeasy-button hug-size w-inline-block" rel="noreferrer">
                  <div className="body-1">
                    <span className="body-1 button">
                      {"Try Out GradeEasy!"}
                    </span>
                  </div>
                </a>
              </div>
              <div id="w-node-_77de1b24-ad4a-8a70-02a0-2a44c344a94d-bd7bb354" className="w-layout-vflex v-flex _20-spacing">
                <div className="w-layout-vflex v-flex _10-spacing">
                  <div className="heading-5">
                    {"Role"}
                  </div>
                  <div className="body-1">
                    {"Product Designer"}
                  </div>
                </div>
                <div className="w-layout-vflex v-flex _10-spacing">
                  <div className="heading-5">
                    {"Responsibilities"}
                  </div>
                  <div className="body-1">
                    {"UX/UI Design"}
                  </div>
                  <div className="body-1">
                    {"Prototyping"}
                  </div>
                  <div className="body-1">
                    {"Feature Scoping"}
                  </div>
                </div>
              </div>
              <div id="w-node-bd1c42d6-8c5c-40b4-3a9c-c6438466ace8-bd7bb354" className="w-layout-vflex v-flex _20-spacing">
                <div className="w-layout-vflex v-flex _10-spacing">
                  <div className="heading-5">
                    {"Team"}
                  </div>
                  <div className="body-1">
                    {"Ronald Jin, Full-Stack Developer & UX Designer"}
                  </div>
                </div>
                <div className="w-layout-vflex v-flex _10-spacing">
                  <div className="heading-5">
                    {"Timeline"}
                  </div>
                  <div className="body-1">
                    {"Jul 2024 - Present"}
                  </div>
                </div>
              </div>
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
                  {"Students struggle with the tedious process of manual grade tracking. Most rely on spreadsheets or school portals that lack flexibility, personalization, and insights."}
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="w-layout-blockcontainer cs-container small w-container">
          <div className="w-layout-vflex v-flex _20-spacing">
            <div className="body-1">
              {"In my first year of engineering at UWaterloo, spreadsheets became my go‑to for tracking every assignment and exam. However, building them was tedious, formulas were always one typo away from inaccuracy, and the endless grid of cells made it hard to spot trends at a glance. "}
              <br />
              <br />
              {"Without clear organization or visual hierarchy, it was impossible to quickly scan my progress, and just as easy to miss a forgotten entry. Those frustrations sparked the idea for GradeEasy."}
            </div>
          </div>
        </div>
        <div className="w-layout-blockcontainer cs-container w-container">
          <div className="w-layout-grid media-text _20-spacing gradeeasy-background">
            <div id="w-node-aee4bac6-a205-912c-02cc-f1f3a96ceeed-bd7bb354" className="cs-media">
              <div>
                <img className="only-media" src={withBase('/assets/6829355479fb1a05bf7e60c0_Spreadsheet-tracking.png')} alt="" loading="lazy" />
              </div>
            </div>
            <div id="w-node-aee4bac6-a205-912c-02cc-f1f3a96ceef0-bd7bb354" className="cs-media">
              <div>
                <img className="only-media" src={withBase('/assets/68293554d8c30949b2e4b8ae_Gradeeasy-tracking.png')} alt="" loading="lazy" />
              </div>
            </div>
            <div id="w-node-aee4bac6-a205-912c-02cc-f1f3a96ceef6-bd7bb354" className="body-1 grey center-aligned _20-bottom-padding">
              {"Tracking grades through spreadsheets"}
            </div>
            <div id="w-node-aee4bac6-a205-912c-02cc-f1f3a96ceef8-bd7bb354" className="body-1 grey center-aligned">
              {"Tracking grades through GradeEasy"}
            </div>
          </div>
        </div>
        <div className="w-layout-blockcontainer cs-container small w-container">
          <div className="w-layout-vflex v-flex _20-spacing">
            <div className="heading-5">
              {"How Can We Improve This Experience?"}
            </div>
            <div className="body-1">
              {"We set out to design a student-friendly web app that not only simplifies grade tracking, but also helps students stay organized, informed, and in control of their academic progress. A few of our early needs are listed below."}
            </div>
            <div className="w-layout-hflex h-flex _10-spacing center-aligned">
              <div className="point number">
                <div className="heading-5 bold point">
                  {"1"}
                </div>
              </div>
              <div className="w-layout-vflex v-flex">
                <div className="heading-7">
                  {"Centralized tracking"}
                </div>
                <div className="body-1">
                  {"Keep grades organized across all courses, terms, and institutions in one place."}
                </div>
              </div>
            </div>
            <div className="w-layout-hflex h-flex _10-spacing center-aligned">
              <div className="point number">
                <div className="heading-5 bold point">
                  {"2"}
                </div>
              </div>
              <div className="w-layout-vflex v-flex">
                <div className="heading-7">
                  {"Smart forecasting"}
                </div>
                <div className="body-1">
                  {"Help students predict best and worst-case outcomes to plan ahead."}
                </div>
              </div>
            </div>
            <div className="w-layout-hflex h-flex _10-spacing center-aligned">
              <div className="point number">
                <div className="heading-5 bold point">
                  {"3"}
                </div>
              </div>
              <div className="w-layout-vflex v-flex">
                <div className="heading-7">
                  {"Clear visuals"}
                </div>
                <div className="body-1">
                  {"Make grades and trends easy to understand at a glance with less noise and more clarity."}
                </div>
              </div>
            </div>
            <div className="w-layout-vflex v-flex _20-spacing">

            </div>
          </div>
        </div>
        <div className="w-layout-blockcontainer cs-container small w-container">
          <div className="w-layout-vflex v-flex _20-spacing">
            <div className="w-layout-vflex v-flex _20-spacing">
              <div className="quote">
                <div className="w-layout-vflex v-flex _10-spacing">
                  <div className="heading-6">
                    {"Goal"}
                  </div>
                  <div className="body-1">
                    {"Build a cohesive, purpose-driven tool that fills the gaps left by generic solutions, tailored to the real workflows, habits, and challenges students face throughout their academic journey."}
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
                {"Research"}
              </div>
              <div className="heading-5">
                {"Understanding Student Needs"}
              </div>
            </div>
            <div className="body-1">
              {"I began by identifying gaps in how students currently track their grades through user interviews. This helped me understand the broader perspective instead of only designing an app that matches my own preferences."}
            </div>
          </div>
        </div>
        <div className="w-layout-blockcontainer cs-container w-container">
          <div className="w-layout-vflex v-flex _20-spacing center-aligned">
            <div className="cs-media">
              <img src={withBase('/assets/682935c04650440bc7ee24f9_User-Pain-Points.png')} alt="" loading="lazy" />
            </div>
            <div className="body-1 grey center-aligned">
              {"User pain points on existing grade tracking methods"}
            </div>
          </div>
        </div>
        <div className="w-layout-blockcontainer cs-container small w-container">
          <div id="w-node-_5b7f940b-f301-e77b-8aad-ef7c9a08f903-bd7bb354" className="w-layout-vflex v-flex _20-spacing">
            <div className="heading-5">
              {"Key Insights from Interviews"}
            </div>
            <div className="w-layout-hflex h-flex _10-spacing">
              <div className="point number">
                <div className="heading-5 bold point icon">
                  {""}
                </div>
              </div>
              <div className="w-layout-vflex v-flex _5-spacing">
                <div className="heading-7">
                  {"Lack of clarity"}
                </div>
                <div className="body-1">
                  {"Students feel unsure about their academic standing throughout the term and want tools that clearly show where they stand and what’s at stake."}
                </div>
              </div>
            </div>
            <div className="w-layout-hflex h-flex _10-spacing">
              <div className="point number">
                <div className="heading-5 bold point icon">
                  {""}
                </div>
              </div>
              <div className="w-layout-vflex v-flex _5-spacing">
                <div className="heading-7">
                  {"Manual tracking is fragile"}
                </div>
                <div className="body-1">
                  {"Spreadsheets are the default, but they’re error-prone, hard to maintain, and visually overwhelming, especially under pressure."}
                </div>
              </div>
            </div>
            <div className="w-layout-hflex h-flex _10-spacing">
              <div className="point number">
                <div className="heading-5 bold point icon">
                  {""}
                </div>
              </div>
              <div className="w-layout-vflex v-flex _5-spacing">
                <div className="heading-7">
                  {"Existing tools don’t check all boxes"}
                </div>
                <div className="body-1">
                  {"Most existing solutions are either too generic or built for educators. Students want intuitive, visual tools that reflect their real goals, habits, and struggles."}
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="w-layout-blockcontainer cs-container small w-container">
          <div className="w-layout-vflex v-flex _20-spacing">
            <div className="heading-5">
              {"Market Gap"}
            </div>
            <div className="body-1">
              {"Most grade tracking tools available on the market lacked: transcript import, predictive insights (min/max grades), cross-term or cross-school tracking, and a clean UI."}
            </div>
          </div>
        </div>
        <div className="w-layout-blockcontainer cs-container w-container">
          <div className="w-layout-vflex v-flex _20-spacing center-aligned">
            <div className="cs-media">
              <img className="only-media" src={withBase('/assets/682935c0d8c30949b2e4e086_Competitive-analysis.png')} alt="" loading="lazy" />
            </div>
            <div className="body-1 grey center-aligned">
              {"Competitive analysis of other grade trackers"}
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
                {"Foundations First"}
              </div>
            </div>
            <div className="body-1">
              {"I started by designing the essential screens and flows to support onboarding and daily usage before creating all of the additional features."}
            </div>
          </div>
        </div>
        <div className="w-layout-blockcontainer cs-container small w-container">
          <div className="w-layout-vflex v-flex _20-spacing">
            <div className="heading-5">
              {"Login Screen"}
            </div>
            <div className="body-1">
              {"The first version of the login screen felt very generic with a lack of branding. Thus, I added a hand-drawn background art for warmth and personalization, making the login page feel more aligned with the overall product."}
            </div>
          </div>
        </div>
        <div className="w-layout-blockcontainer cs-container w-container">
          <div className="w-layout-grid media-text _20-spacing">
            <div id="w-node-dd401755-4f6e-ab6e-de89-f56f0655a5ab-bd7bb354" className="cs-media">
              <div>
                <img className="only-media" src={withBase('/assets/6829361049263c690841204a_Old-sign-up.png')} alt="" loading="lazy" />
              </div>
            </div>
            <div id="w-node-dd401755-4f6e-ab6e-de89-f56f0655a5ae-bd7bb354" className="cs-media">
              <div className="w-layout-hflex h-flex _20-spacing">
                <div>
                  <img className="only-media" src={withBase('/assets/68293612d8c30949b2e500c5_New-sign-up.png')} alt="" loading="lazy" />
                </div>
              </div>
            </div>
            <div id="w-node-dd401755-4f6e-ab6e-de89-f56f0655a5b4-bd7bb354" className="body-1 grey center-aligned _20-bottom-padding">
              {"❌ Login screen with lack of branding"}
            </div>
            <div id="w-node-dd401755-4f6e-ab6e-de89-f56f0655a5b6-bd7bb354" className="body-1 grey center-aligned">
              {"✅ Final login screen with customized branding"}
            </div>
          </div>
        </div>
        <div className="w-layout-blockcontainer cs-container small w-container">
          <div className="w-layout-vflex v-flex _20-spacing">
            <div className="heading-5">
              {"Term Cards"}
            </div>
            <div className="body-1">
              {"I designed and tested multiple layouts for clarity, information density, and visual hierarchy. Although I had initially thought providing a lot of information (such as grades for all courses) would be beneficial, user interviews helped uncovered that a simpler card would make the information easier to skim."}
            </div>
          </div>
        </div>
        <div className="w-layout-blockcontainer cs-container w-container">
          <div className="w-layout-grid media-text _20-spacing">
            <div id="w-node-_1c6f2abf-6305-0a89-5951-785cd8d6e0be-bd7bb354" className="cs-media">
              <div className="w-layout-vflex v-flex _20-spacing">
                <img className="only-media" src={withBase('/assets/682936c143639e0ce1bbd57b_Old-term-card-1.png')} alt="" loading="lazy" />
                <img className="only-media" src={withBase('/assets/682936c170093a50cc3c36fd_Old-term-card-2.png')} alt="" loading="lazy" />
              </div>
            </div>
            <div id="w-node-_1c6f2abf-6305-0a89-5951-785cd8d6e0c1-bd7bb354" className="cs-media">
              <div className="w-layout-hflex h-flex _20-spacing center-aligned">
                <div>
                  <img className="only-media" src={withBase('/assets/682936c0b42d35f376d57a8d_New-term-card.png')} alt="" loading="lazy" />
                </div>
              </div>
            </div>
            <div id="w-node-_1c6f2abf-6305-0a89-5951-785cd8d6e0c7-bd7bb354" className="body-1 grey center-aligned _20-bottom-padding">
              {"❌ Previous term card options"}
            </div>
            <div id="w-node-_1c6f2abf-6305-0a89-5951-785cd8d6e0c9-bd7bb354" className="body-1 grey center-aligned">
              {"✅ Final term card design"}
            </div>
          </div>
        </div>
        <div className="w-layout-blockcontainer cs-container small w-container">
          <div className="w-layout-vflex v-flex _20-spacing">
            <div className="heading-5">
              {"Grade Tracking Tables"}
            </div>
            <div className="body-1">
              {"The initial table featured an overwhelming amount of columns while the final design features only the key columns to present a minimal overview of grades."}
            </div>
          </div>
        </div>
        <div className="w-layout-blockcontainer cs-container w-container">
          <div className="w-layout-grid media-text _20-spacing">
            <div id="w-node-ed78c4b3-57aa-e274-d1de-be3ba5498af1-bd7bb354" className="cs-media">
              <div>
                <img className="only-media" src={withBase('/assets/682936e6e5e6bd02aabf9b76_Old-table.png')} alt="" loading="lazy" />
              </div>
            </div>
            <div id="w-node-ed78c4b3-57aa-e274-d1de-be3ba5498af7-bd7bb354" className="cs-media">
              <div className="w-layout-hflex h-flex _20-spacing">
                <div>
                  <img className="only-media" src={withBase('/assets/682936e63a36b46cd28d426c_New-table.png')} alt="" loading="lazy" />
                </div>
              </div>
            </div>
            <div id="w-node-ed78c4b3-57aa-e274-d1de-be3ba5498af4-bd7bb354" className="body-1 grey center-aligned _20-bottom-padding">
              {"❌ Several columns to display information"}
            </div>
            <div id="w-node-ed78c4b3-57aa-e274-d1de-be3ba5498afd-bd7bb354" className="body-1 grey center-aligned">
              {"✅ Consolidated columns"}
            </div>
          </div>
        </div>
        <div className="w-layout-blockcontainer cs-container small w-container">
          <div className="w-layout-vflex v-flex _20-spacing">
            <div className="w-layout-vflex v-flex _10-spacing">
              <div className="heading-6">
                {"Features"}
              </div>
              <div className="heading-5">
                {"Designing for Differentiation"}
              </div>
            </div>
            <div className="body-1">
              {"After designing the base pages and adding basic functionality to the web app in development, it was time to start adding more features to match up with competitors."}
            </div>
          </div>
        </div>
        <div className="w-layout-blockcontainer cs-container w-container">
          <div className="w-layout-grid media-text">
            <div className="cs-media v-flex">
              <div className="w-layout-vflex v-flex _20-spacing tablet-horizontal">
                <div className="w-layout-vflex v-flex _20-spacing center-aligned">
                  <img src={withBase('/assets/6829380139ea6ea598569dd6_Transcript-upload-1.png')} loading="lazy" alt="" className="only-media" />
                </div>
                <div className="w-layout-vflex v-flex _20-spacing center-aligned">
                  <div className="w-layout-hflex h-flex _20-spacing tablet">
                    <div>
                      <img src={withBase('/assets/682936c0001db19910636bd9_Transcript-upload-2.png')} loading="lazy" alt="" className="only-media" />
                    </div>
                    <div>
                      <img src={withBase('/assets/682936c052f601287fe1c26e_Transcript-upload-3.png')} loading="lazy" alt="" className="only-media" />
                    </div>
                  </div>
                </div>
              </div>
              <div className="body-1 grey center-aligned">
                {"Modals for transcript upload"}
              </div>
            </div>
            <div id="w-node-a1d3b142-2f0c-df4f-d808-fa768a3ebc1a-bd7bb354" className="w-layout-vflex v-flex _20-spacing">
              <div className="heading-5">
                {"Transcript Upload"}
              </div>
              <div className="body-1">
                {"No competitors offered this feature, leaving a gap in the market. Transcript upload would allow users to easily migrate their information onto GradeEasy, especially if they’ve already completed several terms and want to track their overall GPA."}
              </div>
              <div className="w-layout-hflex h-flex _10-spacing">
                <div className="point number">
                  <div className="heading-5 bold point icon">
                    {""}
                  </div>
                </div>
                <div className="w-layout-vflex v-flex _5-spacing">
                  <div className="heading-7">
                    {"Upload anytime"}
                  </div>
                  <div className="body-1">
                    {"Users can upload transcripts during onboarding or later via Settings to provide a flexible experience."}
                  </div>
                </div>
              </div>
              <div className="w-layout-hflex h-flex _10-spacing">
                <div className="point number">
                  <div className="heading-5 bold point icon">
                    {""}
                  </div>
                </div>
                <div className="w-layout-vflex v-flex _5-spacing">
                  <div className="heading-7">
                    {"Modals instead of full pages"}
                  </div>
                  <div className="body-1">
                    {"This feature was built in modals instead of a full page view since it’s a temporary action, providing less white space and preventing users from completing any other actions in the background."}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="w-layout-blockcontainer cs-container w-container">
          <div className="w-layout-grid media-text">
            <div id="w-node-d8188beb-0e60-1d25-7497-3ae944d56170-bd7bb354" className="w-layout-vflex v-flex _20-spacing">
              <div className="heading-5">
                {"Grade Forecasting"}
              </div>
              <div className="body-1">
                {"Minimum and maximum grade predictions allow users to project final grades and plan for the future."}
              </div>
              <div className="w-layout-hflex h-flex _10-spacing">
                <div className="point number">
                  <div className="heading-5 bold point icon">
                    {""}
                  </div>
                </div>
                <div className="w-layout-vflex v-flex _5-spacing">
                  <div className="heading-7">
                    {"Straight-forward UI"}
                  </div>
                  <div className="body-1">
                    {"Despite testing out several layout options, the final design was the simplest and most straight-forward to provide an ease in navigation."}
                  </div>
                </div>
              </div>
              <div className="w-layout-hflex h-flex _10-spacing">
                <div className="point number">
                  <div className="heading-5 bold point icon">
                    {""}
                  </div>
                </div>
                <div className="w-layout-vflex v-flex _5-spacing">
                  <div className="heading-7">
                    {"Reduced visual clutter"}
                  </div>
                  <div className="body-1">
                    {"Eliminates excessive detail while maintaining all critical information for academic performance tracking."}
                  </div>
                </div>
              </div>
            </div>
            <div className="cs-media">
              <div className="w-layout-vflex v-flex _40-spacing tablet-horizontal">
                <div className="w-layout-blockcontainer w-container">
                  <div className="w-layout-vflex v-flex _20-spacing center-aligned">
                    <img className="only-media" src={withBase('/assets/682938a8315fe0e5d7654474_max-1.png')} alt="" loading="lazy" />
                    <img className="only-media" src={withBase('/assets/682938b9395d922891379955_max-2.png')} alt="" loading="lazy" />
                    <div className="body-1 grey center-aligned">
                      {"Several design options"}
                    </div>
                  </div>
                </div>
                <div className="w-layout-blockcontainer container-6 w-container">
                  <div className="w-layout-vflex v-flex _20-spacing center-aligned">
                    <div className="w-layout-hflex h-flex _20-spacing tablet">
                      <div>
                        <img className="only-media" src={withBase('/assets/682938a8010ce56887679a1a_max-3.png')} alt="" loading="lazy" />
                      </div>
                    </div>
                    <div className="body-1 grey center-aligned">
                      {"Final min/max grade design"}
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="w-layout-blockcontainer cs-container w-container">
          <div className="w-layout-grid media-text">
            <div className="cs-media v-flex center-aligned">
              <div className="w-layout-vflex v-flex">
                <div className="w-layout-vflex v-flex _20-spacing center-aligned">

                </div>
                <img className="only-media" src={withBase('/assets/68293991e5e6bd02aac08f75_Dashboard.png')} alt="" loading="lazy" />
                <div className="w-layout-vflex v-flex _20-spacing center-aligned">

                </div>
              </div>
              <div className="body-1 grey center-aligned">
                {"Final dashboard design"}
              </div>
            </div>
            <div id="w-node-f72f7c42-a483-2c78-738e-c856e77b6fa5-bd7bb354" className="w-layout-vflex v-flex _20-spacing">
              <div className="heading-5">
                {"Dashboard"}
              </div>
              <div className="body-1">
                {"A visual graph tracks grade trends over time. Users can toggle between overall average, term performance, or custom views."}
              </div>
              <div className="w-layout-hflex h-flex _10-spacing">
                <div className="point number">
                  <div className="heading-5 bold point icon">
                    {""}
                  </div>
                </div>
                <div className="w-layout-vflex v-flex _5-spacing">
                  <div className="heading-7">
                    {"Visual performance tracking"}
                  </div>
                  <div className="body-1">
                    {"Allows students to immediately see trends in their academic performance over time."}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="w-layout-blockcontainer cs-container small w-container">
          <div className="w-layout-vflex v-flex _20-spacing">
            <div className="heading-5">
              {"Empty States"}
            </div>
            <div className="body-1">
              {"To make the onboarding experience feel more welcoming, I added hand-drawn graphics to empty states. These illustrations align with GradeEasy’s student-friendly branding and help fill the visual gaps when no data is present."}
            </div>
          </div>
        </div>
        <div className="w-layout-blockcontainer cs-container w-container">
          <div className="w-layout-vflex v-flex _20-spacing center-aligned">
            <div className="cs-media">
              <div className="w-layout-grid grid _4x1 _40-spacing _20-tablet-spacing _2x2-mobile">
                <div>
                  <img src={withBase('/assets/6829399149263c690842790e_empty-state-1.png')} loading="lazy" alt="" />
                </div>
                <div>
                  <img src={withBase('/assets/68293991d64340a80e6ef3fa_empty-state-2.png')} loading="lazy" alt="" />
                </div>
                <div>
                  <img src={withBase('/assets/68293991e5e6bd02aac08f2f_empty-state-3.png')} loading="lazy" alt="" />
                </div>
                <div>
                  <img src={withBase('/assets/6829399186372c6792c0070d_empty-state-4.png')} loading="lazy" alt="" />
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="w-layout-blockcontainer cs-container small w-container">
          <div className="w-layout-vflex v-flex _20-spacing">
            <div className="w-layout-vflex v-flex _10-spacing">
              <div className="heading-6">
                {"Marketing"}
              </div>
              <div className="heading-5">
                {"Building the Landing Page"}
              </div>
            </div>
            <div className="body-1">
              {"To support onboarding and awareness, we created a marketing site focused on:"}
            </div>
            <div className="w-layout-hflex h-flex _20-spacing number-points">
              <div className="w-layout-hflex h-flex _10-spacing top-aligned number-points">
                <div className="point number">
                  <div className="heading-5 bold point">
                    {"1"}
                  </div>
                </div>
                <div className="w-layout-vflex v-flex">
                  <div className="heading-7">
                    {"Clear feature communication"}
                  </div>
                </div>
              </div>
              <div className="w-layout-hflex h-flex _10-spacing top-aligned number-points">
                <div className="point number">
                  <div className="heading-5 bold point">
                    {"2"}
                  </div>
                </div>
                <div className="w-layout-vflex v-flex">
                  <div className="heading-7">
                    {"Visual walkthroughs of key flows"}
                  </div>
                </div>
              </div>
              <div className="w-layout-hflex h-flex _10-spacing top-aligned number-points">
                <div className="point number">
                  <div className="heading-5 bold point">
                    {"3"}
                  </div>
                </div>
                <div className="w-layout-vflex v-flex">
                  <div className="heading-7">
                    {"Language that connects with students"}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="w-layout-blockcontainer cs-container w-container">
          <div className="w-layout-vflex v-flex _20-spacing center-aligned">
            <div className="w-layout-blockcontainer video-container w-container">
              <div className="cs-video gradeeasy-landing-page w-background-video w-background-video-atom">
                <video id="32756354-e4b8-cfad-41e0-5669e05a0eea-video" loop muted playsInline controls preload="none" poster={withBase('/assets/66ca4e4f43000cf04ad71025-68293a80d8c30949b2e67f9e_GradeEasy-Landing-Page--1--poster-00001.jpg')}>
                  <source src={withBase('/assets/66ca4e4f43000cf04ad71025-68293a80d8c30949b2e67f9e_GradeEasy-Landing-Page--1--transcode.webm')} type="video/webm" />
                  <source src={withBase('/assets/66ca4e4f43000cf04ad71025-68293a80d8c30949b2e67f9e_GradeEasy-Landing-Page--1--transcode.mp4')} type="video/mp4" />
                </video>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section className="large-image">

      </section>
      <section id="results" className="case-study-body extra-top-padding last-container">
        <div className="w-layout-blockcontainer cs-container small w-container">
          <div className="w-layout-vflex v-flex _20-spacing">
            <div className="w-layout-vflex v-flex _10-spacing">
              <div className="heading-6">
                {"Results"}
              </div>
              <div className="heading-5">
                {"Final Designs"}
              </div>
            </div>
            <div className="body-1">
              {"The final designs deliver a streamlined, student-focused experience that brings clarity to academic progress. GradeEasy supports grade tracking across courses and terms, transcript import, and institution management. Forecasting tools help visualize best and worst-case outcomes, while advanced settings like bonus marks and drop rules give students more control over how their grades are calculated."}
            </div>
          </div>
        </div>
        <div className="w-layout-blockcontainer cs-container w-container">
          <div className="w-layout-vflex v-flex _20-spacing center-aligned">
            <div className="w-layout-blockcontainer video-container w-container">
              <div className="cs-video gradeeasy-demo w-background-video w-background-video-atom">
                <video id="225964e0-be4d-4ae2-6cee-243d20b5501a-video" loop muted playsInline controls preload="none" poster={withBase('/assets/66ca4e4f43000cf04ad71025-68293a70379497ff579e65ae_GradeEasy-Demo-poster-00001.jpg')}>
                  <source src={withBase('/assets/66ca4e4f43000cf04ad71025-68293a70379497ff579e65ae_GradeEasy-Demo-transcode.webm')} type="video/webm" />
                  <source src={withBase('/assets/66ca4e4f43000cf04ad71025-68293a70379497ff579e65ae_GradeEasy-Demo-transcode.mp4')} type="video/mp4" />
                </video>
              </div>
            </div>
            <a href="https://gradeeasy.net/" target="_blank" className="link-block gradeeasy-button w-inline-block" rel="noreferrer">
              <div className="body2 center button">
                <span className="body-1 button">
                  {"View Web App"}
                </span>
              </div>
            </a>
          </div>
        </div>
        <div className="w-layout-blockcontainer cs-container small w-container">
          <div className="w-layout-vflex v-flex _20-spacing">
            <div className="w-layout-vflex v-flex _10-spacing">
              <div className="heading-6">
                {"Reflection"}
              </div>
              <div className="heading-5">
                {"Results"}
              </div>
            </div>
            <div className="w-layout-grid grid-18">
              <div className="quote">
                <div className="w-layout-vflex v-flex _10-spacing center-aligned">
                  <div className="large-number">
                    {"6x"}
                  </div>
                  <div className="body-1 center">
                    {"Faster tracker setup time"}
                  </div>
                </div>
              </div>
              <div className="quote">
                <div className="w-layout-vflex v-flex _10-spacing center-aligned">
                  <div className="large-number">
                    {"50+"}
                  </div>
                  <div className="body-1 center">
                    {"Users pre-launch"}
                  </div>
                </div>
              </div>
              <div className="quote">
                <div className="w-layout-vflex v-flex _10-spacing center-aligned">
                  <div className="large-number">
                    {"100%"}
                  </div>
                  <div className="body-1 center">
                    {"Accuracy in grade tracking"}
                  </div>
                </div>
              </div>
            </div>
            <div className="body-1">
              {"In the current beta stage, GradeEasy has already gained traction with over 50 users joining before its official launch. Feedback has shown strong usability improvements, including a 6× faster setup time compared to traditional spreadsheet methods. Users also reported a smoother experience with 100% accuracy in grade tracking, reinforcing confidence in the platform’s core functionality. "}
              <br />
              <br />
              {"These early results highlight both the demand for a student-focused tool and the effectiveness of GradeEasy’s design decisions."}
            </div>
          </div>
        </div>
        <div className="w-layout-blockcontainer cs-container small w-container">
          <div className="w-layout-vflex v-flex _20-spacing">
            <div className="heading-5">
              {"Next Steps"}
            </div>
            <div className="body-1">
              {"GradeEasy is an ongoing project where we’re always looking for new features to add to improve the product. A couple features we’re looking to add in the future include:"}
            </div>
            <div className="body-1">
              <span className="body-1 bold">
                {"Course outline parsing."}
              </span>
              {" Users will be able to upload course outlines to automatically populate the grade table with assignments and weights, removing the need for manual setup."}
            </div>
            <div className="body-1">
              <span className="body-1 bold">
                {"Grade goal setting."}
              </span>
              {" Students can set a target grade, and GradeEasy will calculate the scores needed on upcoming assignments to reach that goal."}
            </div>
            <div className="body-1">
              <span className="body-1 bold">
                {"Temporary access pages."}
              </span>
              {" Users will be able to try GradeEasy without creating an account, using temporary sessions to explore features and see value before signing up."}
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
