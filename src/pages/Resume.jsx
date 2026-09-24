import { useColouredBackground } from '../useColouredBackground';
import { useScrollReveal } from '../useScrollReveal';
import React from 'react';

export default function Resume() {
  useScrollReveal('resume');
  useColouredBackground();
  return (
    <>
      <div className="w-layout-blockcontainer container w-container">
        <div className="div-block more-spacing">
          <div className="w-layout-vflex resume more-spacing">
            <div className="w-layout-vflex flex-block-35">
              <h1 className="heading-2">
                {"Here's a summary of my professional experience!"}
              </h1>
              <a href="https://drive.google.com/file/d/1kYTw7nLy9TpvMu9YRIi_Tn6mEPEpcwMq/view?usp=sharing" target="_blank" className="link-block-3 w-inline-block" rel="noreferrer">
                <div className="w-layout-hflex button2-transparent">
                  <div className="body-1 pointer">
                    {"PDF copy"}
                  </div>
                  <div className="text-icon black-icon">
                    {""}
                  </div>
                </div>
              </a>
            </div>
            <div className="w-layout-vflex flex-block-37">
              <h1 className="title-2">
                {"Nancy "}
                <em className="title-2 italic">
                  {"Huynh"}
                </em>
              </h1>
              <div className="w-layout-grid grid-5">
                <h1 id="w-node-ef05e30e-15a5-712b-631f-6acc16c8e4c6-2f66f50a" className="heading-2">
                  {"Experience"}
                </h1>
                <div id="w-node-d4c2ec94-9bbf-386d-70f9-41024b502dac-2f66f50a" className="heading-5">
                  {"Lyft  "}
                  <span className="text-span-7">
                    {"/ Product Design Intern"}
                  </span>
                </div>
                <div id="w-node-adb7a27f-4771-6dcf-df92-62aef65b3dc3-2f66f50a" className="body-1 grey right-aligned light">
                  {"May 2026 - Aug 2026"}
                </div>
                <div id="w-node-_23404ea0-b511-250b-a175-e47ddd89ac64-2f66f50a" className="w-layout-vflex resume-body">
                  <div className="body-1 grey light">
                    {"Redesigned Lyft's Rider Badges experience by introducing milestone differentiation, celebratory moments, and "}
                    <span className="resume-bold">{"2 new entry points"}</span>
                    {", unblocking a tier expansion across all "}
                    <span className="resume-bold">{"7 badges"}</span>
                    {" and introducing scalability for future badge additions"}
                  </div>
                  <div className="body-1 grey light">
                    {"Partnered with product, data science, and engineering to "}
                    <span className="resume-bold">{"scope a 2-wave rollout"}</span>
                    {" and delivered full hand-off docs, covering dark mode, loading, and error states"}
                  </div>
                </div>
                <div id="w-node-_7ee65145-de73-d4c2-136e-1efab65b7b7c-2f66f50a" className="heading-5">
                  {"Solace  "}
                  <span className="text-span-7">
                    {"/ UX/UI Design Intern"}
                  </span>
                </div>
                <div id="w-node-_522ae188-1741-1ba8-e0af-396dacc1fcc1-2f66f50a" className="body-1 grey right-aligned light">
                  {"Sep 2025 - Dec 2025"}
                </div>
                <div id="w-node-_63d7e5a9-ad62-bd3e-3cbb-2e5eb40fc81f-2f66f50a" className="w-layout-vflex resume-body">
                  <div className="body-1 grey light">
                    {"Designed a subscription-based experience by prototyping a user-facing console and internal pricing-tier management tool, "}
                    <span className="resume-bold">{"improving onboarding efficiency by 25%"}</span>
                  </div>
                  <div className="body-1 grey light">
                    {"Developed a dark color palette by researching dark mode practices, consulting WCAG AA standards, and applying color theory to "}
                    <span className="resume-bold">{"standardize color usage across Solace products"}</span>
                  </div>
                </div>
                <div id="w-node-_6f75fcd8-2a73-dcdc-ace3-912505925a81-2f66f50a" className="heading-5">
                  {"Revvity "}
                  <span className="text-span-7">
                    {"/ UX Design Intern"}
                  </span>
                </div>
                <div id="w-node-b2ae305c-5cfc-f66a-d1ad-5dd6b1d64afe-2f66f50a" className="body-1 grey right-aligned light">
                  {"Jan 2025 - Apr 2025"}
                </div>
                <div id="w-node-f76762d1-ad15-08ea-6b2a-530106257fdb-2f66f50a" className="w-layout-vflex resume-body">
                  <div className="body-1 grey light">
                    {"Led the UX design for 2 healthcare devices by mapping workflows, iterating 5x, creating prototypes, and running user testing sessions, resulting in "}
                    <span className="resume-bold">{"23+ usability enhancements"}</span>
                  </div>
                  <div className="body-1 grey light">
                    {"Improved Revvity’s public design system by creating a new progress ring component, enhancing test visibility and reducing user error in monitoring progress"}
                  </div>
                </div>
                <div id="w-node-_6eda5456-9d6b-183b-99c6-34897278d22c-2f66f50a" className="heading-5">
                  {"Plooto "}
                  <span className="text-span-7">
                    {"/ Product Design Intern"}
                  </span>
                </div>
                <div id="w-node-ee1d0bcd-6166-734d-5100-51a3551884e4-2f66f50a" className="body-1 grey right-aligned light">
                  {"May 2024 - Aug 2024"}
                </div>
                <div id="w-node-_2ec89ac6-b873-7265-1815-a1cff5695613-2f66f50a" className="w-layout-vflex resume-body">
                  <div className="body-1 grey light">
                    {"Designed a new onboarding account type, collaborating across "}
                    <span className="resume-bold">{"8+ departments"}</span>
                    {" to launch within a month, "}
                    <span className="resume-bold">{"enhancing experience for 12%"}</span>
                    {" of Plooto’s consumer base"}
                  </div>
                  <div className="body-1 grey light">
                    {"Standardized design ops by implementing a structured design ticketing system and consolidating workflows in ClickUp, "}
                    <span className="resume-bold">{"decreasing design debt by 20%"}</span>
                  </div>
                </div>
                <h1 id="w-node-_29d906a6-382e-91bf-df3a-be152638aa59-2f66f50a" className="heading-2">
                  {"Projects"}
                </h1>
                <div id="w-node-_4c224c11-1690-143a-8dec-f596f5ccc45c-2f66f50a" className="heading-5">
                  {"RadiCalgary Charity "}
                  <span className="text-span-7">
                    {"/ UX/UI Designer"}
                  </span>
                </div>
                <div id="w-node-_1ef02785-07bd-1654-2de4-18fd3801a1bb-2f66f50a" className="w-layout-vflex resume-body">
                  <div className="body-1 grey light">
                    {"Redesigned a legacy one-page website into a scalable, multi-page site, "}
                    <span className="resume-bold">
                      {"increasing traffic by 50%"}
                    </span>
                    {" with a responsive, high-fidelity prototype"}
                  </div>
                </div>
                <h1 id="w-node-_580de322-6091-e2a2-15a5-749f5c15fbeb-2f66f50a" className="heading-2">
                  {"Education"}
                </h1>
                <div id="w-node-_495019bf-6f3c-98ea-d323-5dcc88c80f5e-2f66f50a" className="heading-5 longer">
                  {"University of Waterloo "}
                  <span className="text-span-7">
                    {"/ Systems Design Engineering"}
                  </span>
                </div>
                <div id="w-node-a9b94181-b2c1-cdf4-63fb-f70bbd5d6cb4-2f66f50a" className="body-1 grey right-aligned light">
                  {"2022 - 2027"}
                </div>
                <div id="w-node-_109fede6-7274-d0dd-89dc-bfb9a78885a8-2f66f50a" className="w-layout-vflex resume-body">
                  <div className="body-1 grey light">
                    {"Coursework in user-centered design, usability testing, interaction design, and creating user personas to inform design strategy"}
                  </div>
                </div>
                <h1 id="w-node-_06335396-1995-dfb3-0733-f3405d77c0dc-2f66f50a" className="heading-2">
                  {"Skills"}
                </h1>
                <div id="w-node-_010fdd50-edb0-48f7-8e65-64990ad027b9-2f66f50a" className="heading-5">
                  {"Design"}
                </div>
                <div id="w-node-ddf7faae-3bef-302f-321c-cc76a677825a-2f66f50a" className="w-layout-vflex resume-body-2">
                  <div className="body-1 grey light">
                    {"UX Research, User Testing, Workflows, Prototyping, Design Systems, Accessibility Guidelines, Informational Architecture"}
                  </div>
                </div>
                <div id="w-node-d4df9512-df0c-e0e7-c5af-6f8a1fbe3fa6-2f66f50a" className="heading-5">
                  {"Tools"}
                </div>
                <div id="w-node-_22b948df-e7e8-0207-fdfc-9de2fd88b128-2f66f50a" className="w-layout-vflex resume-body-2">
                  <div className="body-1 grey light">
                    {"Figma, Miro, Webflow, HTML/CSS, Procreate, Jira, Github, Codex, Claude Code"}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
