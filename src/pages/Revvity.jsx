import { withBase } from '../urls';
import { useScrollReveal } from '../useScrollReveal';
import React from 'react';
import { CaseStudyNav } from '../components';

const sections = [
  { id: 'overview', label: 'Overview', heading: 'Overview' },
  { id: 'problem', label: 'Problem', heading: 'Problem' },
  { id: 'research', label: 'Research', heading: 'Research' },
  { id: 'design', label: 'Design', heading: 'Design' },
  { id: 'results', label: 'Results', heading: 'Results' },
  { id: 'reflection', label: 'Reflection', heading: 'Reflection' },
];

export default function Revvity() {
  useScrollReveal('caseStudy');
  return (
    <>
      <CaseStudyNav title="Revvity" sections={sections} />
      <section className="banner-image">
        <div className="cover-image">
          <img src={withBase('/assets/681161c0113bd8e49fa46edd_Banner--1-.png')} loading="lazy" alt="" />
        </div>
      </section>
      <section className="case-study-body">
        <div className="w-layout-blockcontainer cs-container w-container">
          <div className="w-layout-vflex v-flex _20-spacing">
            <div className="w-layout-hflex logo-chip revvity">
              <img src={withBase('/assets/6811631d9ad8ff3b9c7105e3_Vector.png')} loading="lazy" width="20" alt="" />
              <div className="body-1 medium">
                {"Revvity Health Science"}
              </div>
            </div>
            <h1 className="heading-2">
              {"Healthcare Product Design"}
            </h1>
            <div className="w-layout-grid cs-overview">
              <div id="w-node-c58bce0d-41fd-974f-2cfe-250cdd393561-288108e5" className="w-layout-vflex v-flex _10-spacing">
                <div className="heading-5">
                  {"Overview"}
                </div>
                <div className="body-1">
                  {"This project focused on redesigning a healthcare device interface for a new screen format, while enhancing usability, aligning with Revvity’s product ecosystem, and implementing industry best practices."}
                  <br />
                  <br />
                  {"I led the full design process—from market research and workflows to prototyping and user testing. Due to privacy constraints, specific product details have been redacted and some designs have been modified for confidentiality."}
                </div>
              </div>
              <div id="w-node-_77de1b24-ad4a-8a70-02a0-2a44c344a94d-288108e5" className="w-layout-vflex v-flex _20-spacing">
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
                    {"UX Research"}
                  </div>
                  <div className="body-1">
                    {"User Testing"}
                  </div>
                </div>
              </div>
              <div id="w-node-bd1c42d6-8c5c-40b4-3a9c-c6438466ace8-288108e5" className="w-layout-vflex v-flex _20-spacing">
                <div className="w-layout-vflex v-flex _10-spacing">
                  <div className="heading-5">
                    {"Team"}
                  </div>
                  <div className="body-1">
                    {"1 UX Researcher"}
                  </div>
                  <div className="body-1">
                    {"2 UX Managers"}
                  </div>
                  <div className="body-1">
                    {"2 Product Managers"}
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
                    {"1.5 months"}
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
                  {"The existing interface was misaligned with Revvity’s branding, overused modals, and overwhelmed users with unnecessary information, requiring a streamlined redesign for a smaller, portrait-oriented display."}
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="w-layout-blockcontainer cs-container small w-container">
          <div className="w-layout-vflex v-flex _20-spacing">
            <div className="body-1">
              {"The original UI was built for a laptop-based, web-style experience, making it poorly suited for the updated built-in display. To address this, I collaborated closely with the hardware team to understand physical constraints and with the software team to create a unified, device-specific experience."}
              <br />
              <br />
              {"The redesign focused on simplifying workflows, reducing reliance on modals, and aligning with Revvity’s brand standards. Updated touchscreen guidelines and components were developed and published to support this and future projects."}
            </div>
          </div>
        </div>
        <div className="w-layout-blockcontainer cs-container w-container">
          <div className="w-layout-grid media-text _20-spacing">
            <div id="w-node-ed78c4b3-57aa-e274-d1de-be3ba5498af1-288108e5" className="cs-media">
              <div>
                <img src={withBase('/assets/68116969b643a1b64fcbb561_Previous-screen.png')} alt="" loading="lazy" />
              </div>
            </div>
            <div id="w-node-ed78c4b3-57aa-e274-d1de-be3ba5498af7-288108e5" className="cs-media">
              <div className="w-layout-hflex h-flex _20-spacing" data-stagger-reveal>
                <div>
                  <img src={withBase('/assets/681169f4a92ca3e0d45f49b6_Launch-Screen.png')} loading="lazy" alt="" className="only-media tablet" />
                </div>
                <div>
                  <img src={withBase('/assets/681169f57e89789b883e5612_Home.png')} loading="lazy" alt="" className="only-media tablet" />
                </div>
              </div>
            </div>
            <div id="w-node-ed78c4b3-57aa-e274-d1de-be3ba5498af4-288108e5" className="body-1 grey center-aligned _20-bottom-padding">
              {"Previous screen"}
            </div>
            <div id="w-node-ed78c4b3-57aa-e274-d1de-be3ba5498afd-288108e5" className="body-1 grey center-aligned">
              {"New screen"}
            </div>
          </div>
        </div>
        <div className="w-layout-blockcontainer cs-container small w-container">
          <div className="w-layout-vflex v-flex _20-spacing">
            <div className="heading-5">
              {"Constraints"}
            </div>
            <div className="w-layout-hflex h-flex _10-spacing center-aligned">
              <div className="point number">
                <div className="heading-5 bold point">
                  {"1"}
                </div>
              </div>
              <div className="w-layout-vflex v-flex">
                <div className="heading-7">
                  {"Few touchscreen guidelines"}
                </div>
                <div className="body-1">
                  {"The existing touchscreen guidelines were very limited as they were very few touchscreen products prior to this project."}
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
                  {"Lack of prior user research"}
                </div>
                <div className="body-1">
                  {"During the first launch of this product no user research was conducted, leading to a lack of knowledge on the consumers."}
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
                  {"No previous Figma files"}
                </div>
                <div className="body-1">
                  {"The previous UI of this device was made completely by developers, with no previous figma file to reference, forcing us to start from scratch."}
                </div>
              </div>
            </div>
            <div className="body-1">
              {"To work around these constraints, we leaned on Revvity’s public design system documentation, studied other Revvity products, and consulted external best practices for touchscreen interface design."}
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
                    {"Redesign the interface to fit a smaller, portrait-oriented touchscreen while aligning more closely with Revvity’s branding and design language."}
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
                {"Starting with Workflows"}
              </div>
            </div>
            <div className="body-1">
              {"The research process for this project started with mapping out the workflow to get a better understanding of the product and core jobs to be done. This was one of the most important parts of the design process as it allowed the team to focus on the design and research process later on, instead of going back and forth on user flows."}
            </div>
          </div>
        </div>
        <div className="w-layout-blockcontainer cs-container w-container">
          <div className="w-layout-vflex v-flex _20-spacing center-aligned">
            <div className="cs-media">
              <img src={withBase('/assets/68116e2f045234e62e9c0bf1_image-1.png')} alt="" loading="lazy" />
            </div>
            <div className="body-1 grey center-aligned">
              {"Two of the main workflows"}
            </div>
          </div>
        </div>
        <div className="w-layout-blockcontainer cs-container small w-container">
          <div className="w-layout-vflex v-flex _20-spacing">
            <div className="heading-5">
              {"Implementing Touchscreen Best Practices"}
            </div>
            <div className="body-1">
              {"The UX Researcher, Wendy, documented best practices for touchscreen interfaces, including minimum font sizes, recommended touch target dimensions, and appropriate spacing to prevent accidental taps."}
              <br />
              <br />
              {"These guidelines were added to Revvity’s public design system and served as a foundation for this project, helping ensure consistency across future touchscreen-based products."}
            </div>
          </div>
        </div>
        <div className="w-layout-blockcontainer cs-container w-container">
          <div className="w-layout-vflex v-flex _20-spacing center-aligned">
            <img className="only-media tablet" src={withBase('/assets/68116edb70b8674c957e4322_Screenshot-2025-04-26-at-8.29.51-PM-1.png')} alt="" loading="lazy" />
            <div className="body-1 grey center-aligned">
              <a href="https://revvity.design/22ce34993/p/383d44-touch-screen-guidelines-v1" target="_blank" className="link" rel="noreferrer">
                {"Revvity.design"}
              </a>
              {" documentation on touchscreen guidelines"}
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
                {"Creating a Constant Feedback Loop"}
              </div>
            </div>
            <div className="body-1">
              {"During the design phase, I co-hosted meetings with all relevant stakeholders (PM, HW, design, development) twice a week to go over design updates and gather feedback. This constant feedback loop allowed me to improve my designs and iterate 5 times over the course of a month."}
              <br />
              <br />
              {"In the example below, you can see how this page featuring a progress indicator drastically changed based on feedback."}
            </div>
          </div>
        </div>
        <div className="w-layout-blockcontainer cs-container w-container">
          <div className="w-layout-vflex v-flex _20-spacing center-aligned">
            <div className="cs-media">
              <div className="swapping-media">
                <img src={withBase('/assets/68117009662105c68a11f367_1---2nd-Iteration.png')} loading="lazy" alt="" className="media-1" style={{"display": "none"}} />
                <img src={withBase('/assets/68117009d391b4759a7c9d81_2---2nd-Iteration.png')} loading="lazy" alt="" className="media-2" style={{"display": "none"}} />
                <img src={withBase('/assets/6811700a2a30ea72717c0a71_3---2nd-Iteration.png')} loading="lazy" alt="" className="media-3" style={{"display": "none"}} />
                <img src={withBase('/assets/68117009e0df97ec671bf2f1_4---2nd-Iteration.png')} loading="lazy" alt="" className="media-4" style={{"display": "none"}} />
                <img src={withBase('/assets/6811704229aacfbe04ce4a2c_Empty-Screen.png')} loading="lazy" alt="" className="empty-revvity-screen" />
              </div>
              <div className="swapping-media">
                <img src={withBase('/assets/6811733b2e50324c71b65acf_2---4th-Iteration.png')} loading="lazy" alt="" className="media-2" style={{"display": "none"}} />
                <img src={withBase('/assets/6811733b70b8674c95819773_1---4th-Iteration.png')} loading="lazy" alt="" className="media-1" style={{"display": "none"}} />
                <img src={withBase('/assets/6811733bd391b4759a7ed184_3---4th-Iteration.png')} loading="lazy" alt="" className="media-3" style={{"display": "none"}} />
                <img src={withBase('/assets/6811733bd391b4759a7ed188_4---4th-Iteration.png')} loading="lazy" alt="" className="media-4" style={{"display": "none"}} />
                <img src={withBase('/assets/6811704229aacfbe04ce4a2c_Empty-Screen.png')} loading="lazy" alt="" className="empty-revvity-screen" />
              </div>
              <div className="swapping-media">
                <img src={withBase('/assets/6811738bd6827507b5cba2c4_1---5th-Iteration.png')} loading="lazy" alt="" className="media-1" style={{"display": "none"}} />
                <img src={withBase('/assets/6811738b534e1210b4fe6340_2---5th-Iteration.png')} loading="lazy" alt="" className="media-2" style={{"display": "none"}} />
                <img src={withBase('/assets/6811738b29aacfbe04d0b9eb_3---5th-Iteration.png')} loading="lazy" alt="" className="media-3" style={{"display": "none"}} />
                <img src={withBase('/assets/6811738b90c00e097808f377_4---5th-Iteration.png')} loading="lazy" alt="" className="media-4" style={{"display": "none"}} />
                <img src={withBase('/assets/6811704229aacfbe04ce4a2c_Empty-Screen.png')} loading="lazy" alt="" className="empty-revvity-screen" />
              </div>
            </div>
            <div className="body-1 grey center-aligned">
              {"Design changes through several iterations"}
            </div>
          </div>
        </div>
        <div className="w-layout-blockcontainer cs-container small w-container">
          <div className="w-layout-vflex v-flex _20-spacing">
            <div className="heading-5">
              {"No More Modals"}
            </div>
            <div className="body-1">
              {"The previous UI overused modals for actions that could have been integrated into the main flow or displayed as inline warnings. In the redesign, we focused on minimizing modal usage, reserving them only for critical errors or important alerts and finding alternatives ways to present previous modal messages."}
            </div>
          </div>
        </div>
        <div className="w-layout-blockcontainer cs-container w-container">
          <div className="w-layout-grid media-text _20-spacing">
            <div id="w-node-_715bf8a3-1cdc-8799-66f7-baeb47b22fdf-288108e5" className="cs-media center-aligned">
              <div className="swapping-media-8">
                <img className="media-1-8" src={withBase('/assets/68119d0369999437b26a9b13_Error-1--1-.png')} alt="" loading="lazy" style={{"display": "none"}} />
                <img className="media-2-8" src={withBase('/assets/68119d0387addee6fcacfbd4_Error-2.png')} alt="" loading="lazy" style={{"display": "none"}} />
                <img className="media-3-8" src={withBase('/assets/68119d01f34229a23972cf58_Error-3.png')} alt="" loading="lazy" style={{"display": "none"}} />
                <img className="media-4-8" src={withBase('/assets/68119d02345ae0d91cd4638d_Error-4.png')} alt="" loading="lazy" style={{"display": "none"}} />
                <img className="media-5-8" src={withBase('/assets/68119d02339e2d7d1178bedd_Error-5.png')} alt="" loading="lazy" style={{"display": "none"}} />
                <img className="media-6-8" src={withBase('/assets/68119d01808822593c69c258_Error-6.png')} alt="" loading="lazy" style={{"display": "none"}} />
                <img className="media-7-8" src={withBase('/assets/68119d020e2928c2a1af0fb6_Error-7.png')} alt="" loading="lazy" style={{"display": "none"}} />
                <img className="media-8-8" src={withBase('/assets/68119d010bfd241182d063ba_Error-8--3-.png')} alt="" loading="lazy" style={{"display": "none"}} />
                <img src={withBase('/assets/68119d24cb262dfd6f8947e0_Empty-Error.png')} loading="lazy" alt="" />
              </div>
            </div>
            <div id="w-node-_715bf8a3-1cdc-8799-66f7-baeb47b22fed-288108e5" className="cs-media">
              <div className="w-layout-hflex h-flex _20-spacing center-aligned" data-stagger-reveal>
                <div>
                  <img src={withBase('/assets/68119bd0d372e6b9ce8bc845_Export-Results.png')} loading="lazy" alt="" className="only-media tablet" />
                </div>
                <div className="w-layout-vflex v-flex _10-spacing center-aligned">
                  <img src={withBase('/assets/68119bf8bee042582a8ce3b2_Option-List.png')} loading="lazy" alt="" className="shadow" />
                  <img src={withBase('/assets/68119bffd84a14f94cf4bacb__Toast-Structure.png')} loading="lazy" alt="" className="revvity-toast" />
                  <img src={withBase('/assets/68119bfe861fe7c407fec746__Toast-Structure-2.png')} loading="lazy" alt="" className="revvity-toast" />
                  <img src={withBase('/assets/68119bfef47a8ce143899670__Toast-Structure-1.png')} loading="lazy" alt="" className="revvity-toast" />
                </div>
              </div>
            </div>
            <div id="w-node-_715bf8a3-1cdc-8799-66f7-baeb47b22fea-288108e5" className="body-1 grey center-aligned _20-bottom-padding">
              {"Modals on the old interface"}
            </div>
            <div id="w-node-_715bf8a3-1cdc-8799-66f7-baeb47b22ff6-288108e5" className="body-1 grey center-aligned">
              {"Alternatives to modals"}
            </div>
          </div>
        </div>
        <div className="w-layout-blockcontainer cs-container _50-padding w-container">
          <div className="w-layout-grid media-text larger-c1 tablet-vertical">
            <img className="image-71" src={withBase('/assets/681174aa1c4ad2eee713a5be_Previous-screen--1-.png')} alt="" id="w-node-_9748845f-2d35-17eb-e52f-4868b626b520-288108e5" loading="lazy" />
            <div id="w-node-_9748845f-2d35-17eb-e52f-4868b626b521-288108e5" className="w-layout-vflex v-flex _20-spacing">
              <div className="heading-5">
                {"User Testing"}
              </div>
              <div className="body-1">
                {"After wrapping up designs, we ran an hour long user testing session with 5 internal proxy users. The goals of this session were:"}
              </div>
              <div className="w-layout-hflex h-flex _10-spacing center-aligned">
                <div className="point number">
                  <div className="heading-5 bold point">
                    {"1"}
                  </div>
                </div>
                <div className="w-layout-vflex v-flex">
                  <div className="heading-7">
                    {"Validate designs"}
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
                    {"Compare design options"}
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
                    {"Identify usability issues"}
                  </div>
                </div>
              </div>
              <div className="body-1">
                {"With over 23 usability improvements, an overview of the key ones are below."}
              </div>
            </div>
          </div>
        </div>
        <div className="w-layout-blockcontainer cs-container w-container">
          <div className="w-layout-grid media-text">
            <div id="w-node-d8188beb-0e60-1d25-7497-3ae944d56170-288108e5" className="w-layout-vflex v-flex _20-spacing">
              <div className="w-layout-vflex v-flex _10-spacing">
                <div className="heading-6">
                  {"Key Improvements"}
                </div>
                <div className="heading-5">
                  {"Breaking Apart Screens"}
                </div>
              </div>
              <div className="body-1">
                {"Due to the smaller screen size in the new design of the device, the content in select pages needed to be separated into their own dedicated pages."}
              </div>
              <div className="w-layout-hflex h-flex _10-spacing">
                <div className="point number">
                  <div className="heading-5 bold point icon">
                    {""}
                  </div>
                </div>
                <div className="w-layout-vflex v-flex _5-spacing">
                  <div className="heading-7">
                    {"Improved organization"}
                  </div>
                  <div className="body-1">
                    {"Both actions shown in the previous screen were completely different, thus separating them improved usability."}
                  </div>
                </div>
              </div>
              <div className="w-layout-hflex h-flex _10-spacing">
                <div className="point number">
                  <div className="heading-5 bold point icon">
                    {""}
                  </div>
                </div>
                <div className="w-layout-vflex v-flex _5-spacing">
                  <div className="heading-7">
                    {"Better space utilization"}
                  </div>
                  <div className="body-1">
                    {"The new design uses the vertical space efficiently with a scrollable list instead of cramming everything onto the screen."}
                  </div>
                </div>
              </div>
            </div>
            <div className="cs-media">
              <div className="w-layout-vflex v-flex _40-spacing tablet-horizontal">
                <div className="w-layout-vflex v-flex _20-spacing center-aligned">
                  <img src={withBase('/assets/681177f85fc3cea2e17fb45c_Previous-step-one.png')} loading="lazy" alt="" className="only-media tablet" />
                  <div className="body-1 grey center-aligned">
                    {"Previous step one"}
                  </div>
                </div>
                <div className="w-layout-vflex v-flex _20-spacing center-aligned">
                  <div className="w-layout-hflex h-flex _20-spacing tablet" data-stagger-reveal>
                    <div>
                      <img src={withBase('/assets/68117849662105c68a17ff10_Select-Option.png')} loading="lazy" alt="" className="only-media tablet" />
                    </div>
                    <div>
                      <img src={withBase('/assets/6811784913fdff50b2b31bda_Load-Device.png')} loading="lazy" alt="" className="only-media tablet" />
                    </div>
                  </div>
                  <div className="body-1 grey center-aligned">
                    {"Separating step one into two steps"}
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
                  <img src={withBase('/assets/681179b6605463ab07166a19_Previous-table.png')} loading="lazy" alt="" className="only-media tablet" />
                  <div className="body-1 grey center-aligned">
                    {"Previous table"}
                  </div>
                </div>
                <div className="w-layout-vflex v-flex _20-spacing center-aligned">
                  <div className="w-layout-hflex h-flex _20-spacing tablet" data-stagger-reveal>
                    <div>
                      <img src={withBase('/assets/681179c4d3f7c9b34f7aa7a1_Enter-Information.png')} loading="lazy" alt="" className="only-media tablet" />
                    </div>
                    <div>
                      <img src={withBase('/assets/681179ccbe17d86ed4e38bcb_Results.png')} loading="lazy" alt="" className="only-media tablet" />
                    </div>
                  </div>
                  <div className="body-1 grey center-aligned">
                    {"Different tables based on use case"}
                  </div>
                </div>
              </div>
            </div>
            <div id="w-node-_5b7f940b-f301-e77b-8aad-ef7c9a08f903-288108e5" className="w-layout-vflex v-flex _20-spacing">
              <div className="heading-5">
                {"Consolidating the Table"}
              </div>
              <div className="body-1">
                {"The table was consolidated into a more compact design by interviewing proxy users to identify and remove less-used columns."}
              </div>
              <div className="w-layout-hflex h-flex _10-spacing">
                <div className="point number">
                  <div className="heading-5 bold point icon">
                    {""}
                  </div>
                </div>
                <div className="w-layout-vflex v-flex _5-spacing">
                  <div className="heading-7">
                    {"Less is more"}
                  </div>
                  <div className="body-1">
                    {"Reduced column count to prioritize frequently used information, optimizing for smaller screen sizes."}
                  </div>
                </div>
              </div>
              <div className="w-layout-hflex h-flex _10-spacing">
                <div className="point number">
                  <div className="heading-5 bold point icon">
                    {""}
                  </div>
                </div>
                <div className="w-layout-vflex v-flex _5-spacing">
                  <div className="heading-7">
                    {"Differentiating the screens"}
                  </div>
                  <div className="body-1">
                    {"Transformed a repeated table into two specialized interfaces—an input form for data entry and a read-only results table—creating clearer user expectations at each step."}
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
                    {"Alignment best practices"}
                  </div>
                  <div className="body-1">
                    {"Applied proper alignment standards with left-aligned qualitative data and right-aligned quantitative values to improve readability and scanning efficiency."}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="w-layout-blockcontainer cs-container small w-container">
          <div className="w-layout-vflex v-flex _20-spacing">
            <div className="heading-5">
              {"Progress Ring Component"}
            </div>
            <div className="body-1">
              {"This project introduced a new "}
              <a href="https://revvity.design/22ce34993/p/033f2b--progress-indicator" target="_blank" className="link-2" rel="noreferrer">
                <span className="text-span-8">
                  {"progress ring component"}
                </span>
              </a>
              {" that allows users to easily track progress of ongoing runs. I researched, designed, and wrote out documentation for this component in the public "}
              <a href="https://revvity.design/22ce34993/p/033f2b--progress-indicator" target="_blank" className="link-3" rel="noreferrer">
                {"revvity.design"}
              </a>
              {" design system."}
            </div>
            <div className="w-layout-grid _20-grid-2r2c">
              <div className="w-layout-hflex h-flex _10-spacing">
                <div className="point number">
                  <div className="heading-5 bold point icon">
                    {""}
                  </div>
                </div>
                <div className="w-layout-vflex v-flex _5-spacing">
                  <div className="heading-7">
                    {"Enhanced visibility of progress"}
                  </div>
                  <div className="body-1">
                    {"Progress ring makes the current state more visible, especially from a distance in lab environments."}
                  </div>
                </div>
              </div>
              <div id="w-node-c311508e-7be0-0e07-228e-8604cfc57e5a-288108e5" className="w-layout-hflex h-flex _10-spacing">
                <div className="point number">
                  <div className="heading-5 bold point icon">
                    {""}
                  </div>
                </div>
                <div className="w-layout-vflex v-flex _5-spacing">
                  <div className="heading-7">
                    {"Clear visual hierarchy"}
                  </div>
                  <div className="body-1">
                    {"Logs were removed to focus attention on progress and key status updates."}
                  </div>
                </div>
              </div>
              <div className="w-layout-hflex h-flex _10-spacing">
                <div className="point number">
                  <div className="heading-5 bold point icon">
                    {""}
                  </div>
                </div>
                <div className="w-layout-vflex v-flex _5-spacing">
                  <div className="heading-7">
                    {"Time tracking"}
                  </div>
                  <div className="body-1">
                    {"Time is now shown using standard abbreviations (hrs, mins) and AM/PM formatting based on best practices."}
                  </div>
                </div>
              </div>
              <div className="w-layout-hflex h-flex _10-spacing">
                <div className="point number">
                  <div className="heading-5 bold point icon">
                    {""}
                  </div>
                </div>
                <div className="w-layout-vflex v-flex _5-spacing">
                  <div className="heading-7">
                    {"Improved status indicator"}
                  </div>
                  <div className="body-1">
                    {"Pause, complete, and stopped states are displayed with large icons and color cues at the center of the ring."}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="w-layout-blockcontainer cs-container w-container">
          <div className="w-layout-vflex v-flex _20-spacing center-aligned">
            <div className="cs-media">
              <div className="w-layout-vflex v-flex _40-spacing">
                <div className="w-layout-vflex v-flex _20-spacing center-aligned">
                  <div className="w-layout-hflex h-flex _20-spacing" data-stagger-reveal>
                    <div>
                      <img className="only-media tablet" src={withBase('/assets/68117b31834f0ac3afdd731b_2---Prev-Running-test.png')} alt="" loading="lazy" />
                    </div>
                    <div>
                      <img className="only-media tablet" src={withBase('/assets/68117b31345ae0d91cbb75ad_1---Prev-Running-test.png')} alt="" loading="lazy" />
                    </div>
                    <div>
                      <img className="only-media tablet" src={withBase('/assets/6811733bd391b4759a7ed184_3---4th-Iteration.png')} alt="" loading="lazy" />
                    </div>
                    <div>
                      <img className="only-media tablet" src={withBase('/assets/68117b3106bba981f3afc1b3_4---Prev-Running-test.png')} alt="" loading="lazy" />
                    </div>
                  </div>
                  <div className="body-1 grey center-aligned">
                    {"Early version of the running test workflow"}
                  </div>
                </div>
                <div className="w-layout-vflex v-flex _20-spacing center-aligned">
                  <div className="w-layout-hflex h-flex _20-spacing" data-stagger-reveal>
                    <div>
                      <img className="only-media tablet" src={withBase('/assets/68117c39ba6f15373a6ad4d3_1---Final-running-test.png')} alt="" loading="lazy" />
                    </div>
                    <div>
                      <img className="only-media tablet" src={withBase('/assets/6811738b534e1210b4fe6340_2---5th-Iteration.png')} alt="" loading="lazy" />
                    </div>
                    <div>
                      <img className="only-media tablet" src={withBase('/assets/6811738b29aacfbe04d0b9eb_3---5th-Iteration.png')} alt="" loading="lazy" />
                    </div>
                    <div>
                      <img className="only-media tablet" src={withBase('/assets/6811738b90c00e097808f377_4---5th-Iteration.png')} alt="" loading="lazy" />
                    </div>
                  </div>
                  <div className="body-1 grey center-aligned">
                    {"Final version of the running test workflow"}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section className="large-image">
        <section id="result-image" className="w-layout-hflex h-flex center-aligned _150-padding" data-stagger-reveal>
          <div className="w-layout-vflex v-flex _20-spacing">
            <img className="only-media tablet" src={withBase('/assets/6811a83ac8c4c74ad0faf83a_Col-1.png')} alt="" loading="lazy" />
          </div>
          <div className="w-layout-vflex v-flex _10-spacing">
            <img className="only-media tablet" src={withBase('/assets/6811a8872d3396c1ad201f49_Step-3_-Cartridge.png')} alt="" loading="lazy" />
            <img className="only-media tablet" src={withBase('/assets/6811a88a808822593c71466e_Step-4_-Scan-Barcodes.png')} alt="" loading="lazy" />
          </div>
          <div className="w-layout-vflex v-flex _10-spacing">
            <img className="only-media tablet" src={withBase('/assets/6811a8abe791f04fedc07e4c_Launch-Screen.png')} alt="" loading="lazy" />
            <img className="only-media tablet" src={withBase('/assets/6811a8b4cb262dfd6f9105b3_Running-Assay---pre-break.png')} alt="" loading="lazy" />
            <img className="only-media tablet" src={withBase('/assets/6811a8ba53388f6595f5872e_Running-Assay---post-break.png')} alt="" loading="lazy" />
          </div>
          <div className="w-layout-vflex v-flex _10-spacing">
            <img className="only-media tablet" src={withBase('/assets/6811a8f5be1183b1cc751b1a_Home.png')} alt="" loading="lazy" />
            <img className="only-media tablet" src={withBase('/assets/6811a8feada7c59f9f2a0529_Running-Assay---pre-break---pause.png')} alt="" loading="lazy" />
            <img className="only-media tablet" src={withBase('/assets/6811a903f34229a2397a4c83_Running-Assay---run-complete.png')} alt="" loading="lazy" />
          </div>
          <div className="w-layout-vflex v-flex _10-spacing">
            <img className="only-media tablet" src={withBase('/assets/6811a92abee042582a95758c_Warning-Before-Run.png')} alt="" loading="lazy" />
            <img className="only-media tablet" src={withBase('/assets/6811a930260890a73a62a3ff_Running-Assay---assay-paused---part-2---unfilled.png')} alt="" loading="lazy" />
            <img className="only-media tablet" src={withBase('/assets/6811a934cafe33d9eab5d0be_Running-Assay---run-stopped.png')} alt="" loading="lazy" />
          </div>
          <div className="w-layout-vflex v-flex _10-spacing">
            <img className="only-media tablet" src={withBase('/assets/6811a97e81638c25f4427915_Step-5_-Assay-Parameters.png')} alt="" loading="lazy" />
            <img className="only-media tablet" src={withBase('/assets/6811a989343df1c6a4a8c4f2_Running-Assay---results.png')} alt="" loading="lazy" />
          </div>
          <div className="w-layout-vflex v-flex _20-spacing">
            <img className="only-media tablet" src={withBase('/assets/6811a95c9567417382ed2bf0_Col-7.png')} alt="" loading="lazy" />
          </div>
        </section>
      </section>
      <section id="results" className="case-study-body last-container">
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
              {"The final designs deliver a simplified, brand-aligned interface optimized for a smaller, portrait-oriented touchscreen. By consolidating information, improving navigation, and introducing new components like the progress ring, the updated interfaces provide a clearer, more efficient user experience tailored for real lab environments."}
            </div>
          </div>
        </div>
        <div className="w-layout-blockcontainer cs-container w-container">
          <div className="w-layout-grid media-text larger-c2 mobile-vertical">
            <div>
              <div className="only-media video w-background-video w-background-video-atom">
                <video id="0dbbb5ec-05b2-de9b-a9ff-4c991dbf1cbd-video" autoPlay loop muted playsInline preload="auto" poster={withBase('/assets/66ca4e4f43000cf04ad71025-682b75f426f8e7fcc9f3892c_Revvity---Preparing-a-Test2x-poster-00001.jpg')}>
                  <source src={withBase('/assets/66ca4e4f43000cf04ad71025-682b75f426f8e7fcc9f3892c_Revvity---Preparing-a-Test2x-transcode.webm')} type="video/webm" />
                  <source src={withBase('/assets/66ca4e4f43000cf04ad71025-682b75f426f8e7fcc9f3892c_Revvity---Preparing-a-Test2x-transcode.mp4')} type="video/mp4" />
                </video>
              </div>
            </div>
            <div id="w-node-_0dbbb5ec-05b2-de9b-a9ff-4c991dbf1cbe-288108e5" className="w-layout-vflex v-flex _20-spacing">
              <div className="heading-5">
                {"Preparing a Test"}
              </div>
              <div className="body-1">
                {"Improved the ease of use in the step wizard by breaking apart multi-step pages and combining similar actions. The overall design was refined to align with Revvity’s branding, adhere to industry best practices, and enhance user experience."}
              </div>
            </div>
          </div>
        </div>
        <div className="w-layout-blockcontainer cs-container w-container">
          <div className="w-layout-grid media-text larger-c1 mobile-vertical">
            <div id="w-node-_0dbbb5ec-05b2-de9b-a9ff-4c991dbf1cc5-288108e5" className="w-layout-vflex v-flex _20-spacing">
              <div className="heading-5">
                {"Running a Test"}
              </div>
              <div className="body-1">
                {"Redesigned the entire screen to remove the status logs, which users found unnecessary, and replace them with a new progress ring component. This allows users to easily monitor progress from a distance in the lab environment."}
              </div>
            </div>
            <div>
              <div className="only-media video w-background-video w-background-video-atom">
                <video id="0dbbb5ec-05b2-de9b-a9ff-4c991dbf1ccb-video" autoPlay loop muted playsInline preload="auto" poster={withBase('/assets/66ca4e4f43000cf04ad71025-682b75fb3b1fffd1b9872842_Revvity---Running-a-Test2x-poster-00001.jpg')}>
                  <source src={withBase('/assets/66ca4e4f43000cf04ad71025-682b75fb3b1fffd1b9872842_Revvity---Running-a-Test2x-transcode.webm')} type="video/webm" />
                  <source src={withBase('/assets/66ca4e4f43000cf04ad71025-682b75fb3b1fffd1b9872842_Revvity---Running-a-Test2x-transcode.mp4')} type="video/mp4" />
                </video>
              </div>
            </div>
          </div>
        </div>
        <div className="w-layout-blockcontainer cs-container w-container">
          <div className="w-layout-grid media-text larger-c2 mobile-vertical">
            <div>
              <div className="only-media video w-background-video w-background-video-atom">
                <video id="0dbbb5ec-05b2-de9b-a9ff-4c991dbf1ccf-video" autoPlay loop muted playsInline preload="auto" poster={withBase('/assets/66ca4e4f43000cf04ad71025-682b75ffc36575e00e7c51b3_Revvity---View-Results2x-poster-00001.jpg')}>
                  <source src={withBase('/assets/66ca4e4f43000cf04ad71025-682b75ffc36575e00e7c51b3_Revvity---View-Results2x-transcode.webm')} type="video/webm" />
                  <source src={withBase('/assets/66ca4e4f43000cf04ad71025-682b75ffc36575e00e7c51b3_Revvity---View-Results2x-transcode.mp4')} type="video/mp4" />
                </video>
              </div>
            </div>
            <div id="w-node-_0dbbb5ec-05b2-de9b-a9ff-4c991dbf1cd0-288108e5" className="w-layout-vflex v-flex _20-spacing">
              <div className="heading-5">
                {"View and Export Results"}
              </div>
              <div className="body-1">
                {"Export results onto a memory card or USB to easily view results on a different device. This removes the need to open results at the healthcare device itself."}
              </div>
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
                {"Results"}
              </div>
            </div>
            <div className="w-layout-grid grid-18">
              <div className="quote">
                <div className="w-layout-vflex v-flex _10-spacing center-aligned">
                  <div className="large-number">
                    {"23+"}
                  </div>
                  <div className="body-1 center">
                    {"Usability improvements"}
                  </div>
                </div>
              </div>
              <div className="quote">
                <div className="w-layout-vflex v-flex _10-spacing center-aligned">
                  <div className="large-number">
                    {"2"}
                  </div>
                  <div className="body-1 center">
                    {"New design guidelines"}
                  </div>
                </div>
              </div>
              <div className="quote">
                <div className="w-layout-vflex v-flex _10-spacing center-aligned">
                  <div className="large-number">
                    {"1.4x"}
                  </div>
                  <div className="body-1 center">
                    {"Faster workflow completion"}
                  </div>
                </div>
              </div>
            </div>
            <div className="body-1">
              {"This project resulted in 23+ usability improvements, two new design guidelines, and 1.4x faster workflow completion times by streamlining screens to focus on key information, setting a strong foundation for future design practices at Revvity."}
            </div>
          </div>
        </div>
        <div className="w-layout-blockcontainer cs-container small w-container">
          <div className="w-layout-vflex v-flex _20-spacing">
            <div className="heading-5">
              {"Learnings"}
            </div>
            <div className="body-1">
              {"This project was a huge growth opportunity for me as a designer. From collaborating closely with cross-functional teams to building new design system components, I gained valuable experience at every stage of the product design process."}
            </div>
            <div className="w-layout-hflex h-flex _10-spacing">
              <div className="point number">
                <div className="heading-5 bold point icon">
                  {""}
                </div>
              </div>
              <div className="w-layout-vflex v-flex _5-spacing">
                <div className="heading-7">
                  {"Starting with workflows"}
                </div>
                <div className="body-1">
                  {"Building a strong foundation with user workflows early on prevents major design pivots later and keeps the team aligned."}
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
                  {"Power of user testing"}
                </div>
                <div className="body-1">
                  {"Even internal proxy testing surfaced over 23 actionable improvements, proving the value of early and frequent validation."}
                </div>
              </div>
            </div>
            <div className="w-layout-hflex h-flex _10-spacing">
              <div className="point number">
                <div className="heading-5 bold point icon">
                  {""}
                </div>
              </div>
              <div className="w-layout-vflex v-flex _5-spacing">
                <div className="heading-7">
                  {"Design systems are living documents"}
                </div>
                <div className="body-1">
                  {"Expanding Revvity’s design system with touchscreen guidelines and new components showed how design systems must evolve with product needs."}
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="w-layout-blockcontainer cs-container small w-container">
          <div className="w-layout-vflex v-flex _20-spacing">
            <div className="heading-5">
              {"Shout-Outs"}
            </div>
            <div className="body-1">
              {"It was an invaluable experience to work on the end-to-end design of this project, especially having the chance to lead meetings and perform user testing. With this, I’d like to give a shoutout to the team that made everything possible. Thanks to Wendy for co-leading this project with me, Vanessa for constant design reviews, Sharath and Maria for trusting me with this project, and finally everyone on the product team for their constant support and collaboration."}
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
