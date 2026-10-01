import React, { useEffect, useRef, useState } from 'react';
import { useScrollReveal } from '../useScrollReveal';
import { withBase } from '../urls';
import './Lyft.css';
import ScaledFigure from './lyft/ScaledFigure';
import BadgeCollection from './lyft/BadgeCollection';
import BadgeExplorations from './lyft/BadgeExplorations';
import NotificationExamples from './lyft/NotificationExamples';
import MilestoneComparison from './lyft/MilestoneComparison';
import EntryPointDiagram from './lyft/EntryPointDiagram';

const media = file => withBase(`/assets/lyft/${file}`);
const heroScreens = [
  ['19d8f.png', 'Lyftiversary celebration on the home screen', -20, 0, 58.37, 308.144, 435.73],
  ['5a261.png', 'Unlocked badge collection', -10, 201.8, 16.68, 249.59, 422.749],
  ['4e1be.png', 'Five-Star Rider milestone', -5, 401.09, 0, 217.348, 411.402],
  ['90e0e.png', 'Helping Hand milestone celebration', 5, 575.09, 0, 217.348, 411.402],
  ['c4073.png', 'Sharing a Top Tipper badge', 10, 741.58, 16.68, 249.59, 422.749],
  ['cf8d9.png', 'New milestone push notification', 20, 881.86, 58.37, 308.144, 435.73],
];
const edgeCases = [
  ['Dark Mode', '03187.png'], ['Small Screen', '674c6.png'], ['Large Text Size', '4389f.png'],
  ['Loading State', '24b4b.png'], ['Error State', '0322a.png'],
];

function Block({ children, small = false, className = '', id }) {
  return <section id={id} className={`cs-container lyft-block${small ? ' lyft-block--small' : ''}${className ? ` ${className}` : ''}`}>{children}</section>;
}
function Heading({ eyebrow, title, children }) {
  return <div className="lyft-copy">{eyebrow && <div className="lyft-eyebrow">{eyebrow}</div>}<h2>{title}</h2>{children && <p>{children}</p>}</div>;
}
function Point({ icon, title, children, good }) {
  return <div className="lyft-point"><span className={`lyft-point-icon${/^[123]$/.test(icon) ? ' is-number' : ''}`} aria-hidden="true">{icon}</span><div><strong>{title}</strong><p>{children}</p></div></div>;
}
function Phone({ src, alt = '', className = '' }) {
  return <div className={`lyft-phone ${['cf8d9.png', '0ff0f.png'].includes(src) ? 'lyft-phone--ios' : ''} ${className}`}><img src={media(src)} alt={alt} loading="lazy" /></div>;
}
function Clip({ src, poster, label = '' }) {
  const ref = useRef(null);
  useEffect(() => {
    const motion = window.matchMedia('(prefers-reduced-motion: reduce)');
    const syncPlayback = () => {
      if (motion.matches) ref.current.pause();
      else ref.current.play().catch(() => {});
    };
    syncPlayback();
    motion.addEventListener('change', syncPlayback);
    return () => motion.removeEventListener('change', syncPlayback);
  }, []);
  return <div className="lyft-phone lyft-demo">
    <video ref={ref} loop muted playsInline preload="metadata" poster={poster ? media(poster) : undefined} aria-label={label}>
      <source src={media(src.replace(/\.mp4$/, '.webm'))} type="video/webm" />
      <source src={media(src)} type="video/mp4" />
    </video>
  </div>;
}
function LabelledPhone({ label, src, chosen = false }) {
  return <div className="lyft-labelled-phone"><span className={chosen ? 'chosen' : ''}>{label}</span><Phone src={src} alt={label} /></div>;
}
function LabelledClip({ label, src, poster, chosen = false }) {
  return <div className="lyft-labelled-phone"><span className={chosen ? 'chosen' : ''}>{label}</span><Clip src={src} poster={poster} label={label} /></div>;
}

export default function Lyft() {
  useScrollReveal('caseStudy');
  return <div className="lyft-design">
    <section className="banner-image lyft-figma-banner" aria-label="Rider badge designs"><div className="lyft-hero-stage"><div className="lyft-hero-fan">
      {heroScreens.map(([file, alt, angle, x, y, w, h]) => <div className="lyft-hero-slot" key={file} style={{ left: `${x / 11.9}%`, top: `${y / 4.941}%`, width: `${w / 11.9}%`, height: `${h / 4.941}%` }}><div className={`lyft-hero-screen ${file === 'cf8d9.png' ? 'notification' : ''}`} style={{ transform: `rotate(${angle}deg)` }}><img src={media(file)} alt={alt} fetchPriority="high" /></div></div>)}
    </div></div></section>

    <div className="case-study-body lyft-case-study">
      <Block id="overview" className="lyft-overview"><div className="lyft-brand"><img src={media('dbd25.svg')} alt="" /><span>Lyft</span></div><h1>Rider Badges Refresh</h1>
        <div className="lyft-overview-grid"><div><h2>Overview</h2><p>Redesigning Lyft's rider achievement system so that earning a badge feels like a real celebration, not just a number.</p><p>I led the design process end to end: exploration, several rounds of ideation and cross-functional review, then a final prototype and formal hand-off to engineering.</p></div><div><h2>Role</h2><p>Product Designer</p><h2>Responsibilities</h2><p>UX/UI Design</p><p>UX Research</p><p>User Testing</p></div><div><h2>Team</h2><p>1 Product Design Mentor</p><p>1 Product Manager</p><p>1 Data Scientist</p><p>1 Software Engineer</p><h2>Timeline</h2><p>May 2026 - Aug 2026</p></div></div>
      </Block>
      <Block small id="background"><Heading eyebrow="Background" title="What Are Rider Badges?">Rider Badges are Lyft’s in-app achievement system. They reward riders for behaviours such as tipping their drivers, riding frequently, and trying a new ride type. Riders can view their badges by opening their profile, navigating to the Badge Hub, and selecting a badge to see its details.</Heading></Block>
      <Block className="lyft-figure"><ScaledFigure width={1000} height={492}><div className="lyft-panel lyft-current-flow"><Phone src="997b8.png" alt="Rider profile" /><Phone src="3f61b.png" alt="Badge hub" /><Phone src="6230f.png" alt="Badge details" /><img className="flow-arrow flow-arrow-one" src={media('9510a.svg')} alt="" /><img className="flow-arrow flow-arrow-two" src={media('9d641.svg')} alt="" /></div></ScaledFigure><p className="lyft-caption">Current experience: rider profile, badge hub, and badge details.</p></Block>
      <Block small><Heading title="Existing Rider Badges">Lyft currently has seven rider badges. These include Top Tipper, which rewards riders for tipping their drivers; Marathoner, which tracks the total distance they have ridden; and Helping Hand, which recognizes riders who donate through Round Up &amp; Donate.</Heading></Block>
      <Block><ScaledFigure width={1000} height={238.551} label="Seven Lyft rider badges"><BadgeCollection /></ScaledFigure></Block>
      <Block small><Heading title="Results of Previous Experiments">When Rider Badges launched in 2020, they drove measurable changes in rider behaviour:</Heading><div className="lyft-metrics">{[['+20%', 'in Round Up & Donate'], ['+1.6%', 'Tips & Tipped Rides'], ['~0.5%', 'Increase in Rides']].map(([value, label]) => <div key={label}><strong>{value}</strong><span>{label}</span></div>)}</div><p>In 2025, the M1 update focused on increasing badge visibility by introducing placements in areas of the app with more traffic, including the homepage. Badge Hub impressions increased by 240%, suggesting that greater visibility could encourage more riders to engage with badges.</p></Block>
      <Block small id="problem" className="lyft-callout"><div className="lyft-eyebrow">Problem</div><p>Lyft wanted to expand Rider Badges with new milestones, but the existing experience needed to evolve to support that growth. Every milestone looked and felt the same, earning a badge offered little sense of celebration, and riders had only two entry points for discovering badges.</p></Block>

      <Block className="lyft-split lyft-milestones"><div><Heading title="Adding New Milestones">New milestones were coming, but the current experience did little to make each achievement feel distinct.</Heading><Point icon={'\uf201'} title="Rapid tier expansion">The Five-Star Rider badge would expand from a maximum of 150 five-star ratings to 1,000. However, every milestone used the same badge illustration and copy.</Point><Point icon={'\uf119'} title="Low sense of reward">The experience offered few celebratory moments. Badges also appeared in just two placements, where they competed with other content for riders’ attention.</Point></div><div className="lyft-figure"><div className="lyft-panel lyft-single-phone"><Clip src="existing-milestone.mp4" poster="milestone-existing.png" label="Existing milestone experience" /></div><p className="lyft-caption">The existing milestone experience.</p></div></Block>
      <Block small><Heading title="Defining Success">I focused on three areas for improvement:</Heading><Point icon="1" title="Differentiate between milestones">Make each milestone feel distinct and show riders what they have achieved.</Point><Point icon="2" title="Add more delight">Give riders a moment of celebration when they earn a badge or reach a new milestone.</Point><Point icon="3" title="Introduce additional entry points">Help riders discover and revisit the badges they have earned.</Point></Block>
      <Block small className="lyft-callout"><div className="lyft-eyebrow">Goal</div><p>Create an achievement system that riders notice, enjoy, and feel motivated to keep using.</p></Block>
      <Block small id="design"><Heading eyebrow="Design improvement #1" title="Differentiate Between Milestones">Adding more milestones would have limited value if each one felt like a repeat of the last. The existing layout also needed to accommodate a growing list of milestones without becoming repetitive or difficult to navigate.</Heading></Block>
      <Block className="lyft-figure"><ScaledFigure width={1000} height={439}><MilestoneComparison /></ScaledFigure><p className="lyft-caption">Existing and proposed Five-Star Rider milestones.</p></Block>
      <Block className="lyft-split lyft-explorations"><div><Heading title="Building a More Unique Experience">I explored three ways to differentiate milestones:</Heading><Point icon={'\uf00d'} title="New illustrations per milestone">A unique illustration would give each milestone its own identity, but the team did not have the illustration capacity to support this approach.</Point><Point icon={'\uf00d'} title="Vary badge colour by milestone">Changing the colour required less design effort, but it would be difficult to create a cohesive progression across eight or more colours.</Point><Point good icon={'\uf00c'} title="Number indicator on the badge">Displaying the achievement count directly on the badge clearly distinguished each milestone while working with the existing illustrations. I chose this approach because it was straightforward and could accommodate future milestones.</Point></div><ScaledFigure width={480} height={726.364}><BadgeExplorations /></ScaledFigure></Block>
      <Block small><Heading title="Removing the Horizontal Scroll">I explored three alternatives to the horizontally scrolling milestone pages: a separate page, a drawer, and an expandable list.<br /><br />After several rounds of feedback, I chose the expandable list. Its compact layout let riders view milestone information as needed while removing repeated content. It also provided a clearer structure for adding future milestones.</Heading></Block>
      <Block className="lyft-figure"><div className="lyft-panel lyft-three-phones lyft-scroll-options"><LabelledClip label="Separate Page View" src="separate-page.mp4" poster="scroll-1.png" /><LabelledClip label="Drawer View" src="drawer.mp4" poster="scroll-2.png" /><LabelledClip label="Expandable List" src="expandable-list.mp4" poster="scroll-6.png" chosen /></div><p className="lyft-caption">Explorations for replacing horizontal scrolling: separate page, drawer, and expandable list.</p></Block>

      <Block className="lyft-split lyft-delight"><Heading eyebrow="Design improvement #2" title="Add More Delight">The existing experience offered few moments of celebration. After earning a badge, riders could see a display card on the homepage, but opening the badge details page did little to acknowledge their achievement. Reaching the final milestone felt much like reaching any other milestone.</Heading><div className="lyft-figure"><div className="lyft-panel lyft-two-phones"><LabelledPhone label="All Milestones" src="035a2.png" /><LabelledPhone label="Final Milestone" src="6a536.png" /></div><p className="lyft-caption">Existing experiences for intermediate and final milestones.</p></div></Block>
      <Block className="lyft-split lyft-pink"><div className="lyft-figure"><div className="lyft-panel lyft-two-phones"><LabelledPhone label="Early Version" src="ccee3.png" /><LabelledPhone label="Final Version" src="490df.png" chosen /></div><p className="lyft-caption">Early and final explorations of Lyft pink for the final milestone.</p></div><Heading title="Introducing Lyft Pink to Badges">I explored using Lyft pink to make the final milestone feel special. Early versions applied pink more broadly, but the colour competed with other information on the page. Restricting pink to the badge created a clearer visual hierarchy and kept the design consistent with Lyft’s product language.</Heading></Block>
      <Block small><Heading title="Adding More Celebration">I added animations to acknowledge riders’ achievements, with different treatments for intermediate and final milestones.</Heading><Point icon={<svg width="26" height="26" viewBox="0 0 26 26" fill="currentColor" aria-hidden="true"><path d="M13 1.5 15.7 10.3 24.5 13l-8.8 2.7L13 24.5l-2.7-8.8L1.5 13l8.8-2.7L13 1.5Z" /><path d="m21 1 .8 2.2L24 4l-2.2.8L21 7l-.8-2.2L18 4l2.2-.8L21 1Z" /></svg>} title="Earning a new milestone">A subtle sparkle animation adds a moment of delight without overwhelming the page.</Point><Point icon={'\uf1fd'} title="Earning the final milestone">A larger confetti animation marks the completion of a badge’s milestone progression and makes the achievement feel more celebratory.</Point></Block>
      <Block className="lyft-animation-grid"><div className="lyft-figure"><div className="lyft-panel lyft-two-phones compact"><Phone src="7f696.png" /><Phone src="11562.png" /></div><p className="lyft-caption">Sparkle animation for intermediate milestones.</p></div><div className="lyft-figure"><div className="lyft-panel lyft-two-phones compact"><Clip src="sparkle.mp4" poster="final-celebrate-1.png" label="Final milestone sparkle animation" /><Clip src="confetti.mp4" poster="final-celebrate-3.png" label="Final milestone confetti animation" /></div><p className="lyft-caption">Confetti animation for the final milestone.</p></div></Block>

      <Block small><Heading eyebrow="Design improvement #3" title="Introduce Additional Entry Points">Riders could access badges through a display card on the homepage or a carousel on the You tab. Both placements competed with other content, limiting opportunities for riders to discover their badges.</Heading></Block>
      <Block className="lyft-figure lyft-entry-points"><ScaledFigure width={1000} height={620}><EntryPointDiagram /></ScaledFigure><p className="lyft-caption">Existing badge entry points: homepage display card and You tab carousel.</p></Block>
      <Block small><Heading title="Exploring New Entry Points">I explored several placements, including an in-ride panel banner, a prompt after Rate &amp; Pay, a profile chip, badge sharing, and push notifications.<br /><br />After reviewing these options with other product designers and the project team, I focused on two additions: a share badge feature and push notifications.</Heading></Block>
      <Block className="lyft-figure"><div className="lyft-panel lyft-five-phones">{[['797ec.png', 'Panel Banner'], ['dd166.png', 'After Rate & Pay'], ['09017.png', 'Profile Chip'], ['c4073.png', 'Share Badge'], ['cf8d9.png', 'Notifications']].map(([src, label], i) => <LabelledPhone key={label} label={label} src={src} chosen={i > 2} />)}</div><p className="lyft-caption">Explorations for additional badge entry points.</p></Block>
      <Block small><Heading title="Introducing Badge Sharing">The Share Badge feature lets riders share earned badges with friends through their device’s native share sheet.<br /><br />I considered how badges would appear across different destinations: as standalone images, as images paired with messages, and within fixed formats such as Instagram Stories. These explorations helped shape a sharing experience that could work across platforms.</Heading></Block>
      <Block className="lyft-figure"><div className="lyft-panel lyft-three-phones share lyft-sharing-options"><LabelledPhone label="Image only" src="4edf1.png" chosen /><LabelledPhone label="Image + message" src="34ad9.png" chosen /><LabelledPhone label="Image (fixed frame)" src="3792f.png" chosen /></div><p className="lyft-caption">Sharing formats: image only, image with a message, and image within a fixed frame.</p></Block>
      <Block className="lyft-split lyft-notifications"><Heading title="Push Notifications for New Badges">I designed push notification treatments for iOS and Android and worked with Content Design on messages for different achievements, including earning a new badge, reaching a new milestone, and completing the final milestone.<br /><br />These notifications give riders a timely way to discover their achievements and return to the badge experience.</Heading><div className="lyft-figure"><div className="lyft-panel lyft-two-phones"><LabelledPhone label="iOS Notification" src="0ff0f.png" chosen /><LabelledPhone label="Android Notification" src="73170.png" chosen /></div><p className="lyft-caption">Badge notifications on iOS and Android.</p></div></Block>
      <Block small><Heading eyebrow="Hand-off" title="Considering Edge Cases">Before handing off my designs, I worked with my design mentor and the badges team to identify additional scenarios the designs needed to support. I created variants for dark mode, small screens, large text sizes, loading states, and error states to make the handoff clearer for engineering.</Heading></Block>
      <Block className="lyft-figure"><div className="lyft-panel lyft-edge-cases">{edgeCases.map(([label, src]) => <LabelledPhone key={label} label={label} src={src} chosen />)}</div><p className="lyft-caption">Design variants for dark mode, small screens, large text sizes, loading states, and error states.</p></Block>
    </div>

    <section className="large-image lyft-mosaic" aria-label="Final Lyft badge designs" data-stagger-reveal>
      {[
        ['cffac.png'], ['7d688.png', 'bd33d.png'], ['23240.png', 'ca2d2.png', 'ff1d7.png'],
        ['fad23.png', 'fdc55.png', '9fced.png'], ['1a765.png', '9528d.png', 'f17dc.png'],
        ['91811.png', '0ff0f.png'], ['73170.png'],
      ].map((column, index) => <div className="lyft-mosaic-column" key={index}>{column.map(src => <Phone key={src} src={src} />)}</div>)}
    </section>

    <div className="case-study-body lyft-results" id="results">
      <Block small><Heading eyebrow="Results" title="Final Designs">The final designs made milestones easier to distinguish, introduced more celebratory moments, and gave riders additional ways to discover and share their achievements.</Heading></Block>
      <Block className="lyft-final-row"><Heading title="Updated Badge Hub and Badge Details">I removed repeated information and made each badge’s milestone progression clearer. The Badge Hub organizes badges into categories to accommodate future additions, while the badge details pages highlight each rider’s achievements.</Heading><Clip src="final-hub.mp4" poster="final-hub-1.png" label="Updated badge hub and details" /></Block>
      <Block className="lyft-final-row reverse"><div className="lyft-final-pair"><Clip src="sparkle.mp4" poster="final-celebrate-1.png" label="Milestone sparkle animation" /><Clip src="confetti.mp4" poster="final-celebrate-3.png" label="Final milestone confetti animation" /></div><Heading title="Celebrating Achievements">Sparkle and confetti animations celebrate milestone achievements. A distinct pink badge treatment gives the final milestone an additional sense of completion.</Heading></Block>
      <Block className="lyft-final-row"><Heading title="Sharing Badges with Friends">Riders can share earned badges through their device’s native share sheet, turning personal achievements into moments they can celebrate with friends.</Heading><Clip src="share-badge.mp4" poster="final-share-1.png" label="Sharing an earned badge" /></Block>
      <Block small><Heading title="Increasing Visibility with Push Notifications">Push notifications alert riders when they earn a badge or reach a milestone, helping them discover achievements as they happen and return to the badge experience.</Heading></Block>
      <section className="lyft-notification-stage" aria-label="Examples of badge push notifications"><ScaledFigure width={1785} height={609}><NotificationExamples><Clip src="push-notification.mp4" poster="cf8d9.png" label="Milestone notification on a lock screen" /></NotificationExamples></ScaledFigure></section>
      <Block small><Heading eyebrow="Reflection" title="Learnings">Leading this project helped me become more confident in taking initiative and communicating across teams. I led design reviews, actively sought feedback, and reached out to partners in Design Systems and Content Design to move the work forward.</Heading><Point icon={'\uf0eb'} title="Keep the solution simple">The number indicator showed me that a straightforward design change can make achievements feel distinct without requiring a new illustration for every milestone.</Point><Point icon={'\uf086'} title="Seek feedback early">Sharing explorations early helped me understand constraints and refine the designs before investing too much time in one direction.</Point><Point icon={'\uf0a1'} title="Communicate proactively">I learned to initiate conversations, explain my design decisions, and keep cross-functional partners informed. This helped me resolve questions and prepare a clearer handoff.</Point></Block>
      <Block small><Heading title="Thank You">I’m grateful to my team and manager for trusting me to lead this project. Thank you to Brandon Ramos, my manager; Gerrold Walker, my mentor; and my teammates Michelle Yick, Thais Lewko, and Hao Wu. I also appreciate the many designers and cross-functional partners who shared their feedback and supported me throughout my internship.</Heading></Block>
    </div>
  </div>;
}
