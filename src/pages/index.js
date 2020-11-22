import React from "react"

import Layout from "../components/layout"
import ResumeLayout from "../components/resume-layout"
import InfoBlock from "../components/info-block"
import SEO from "../components/seo"

import styles from "../scss/components/info-block.module.scss"

const Col = () => (
  <React.Fragment>
    <div className={styles.infoCard}>
      <h2>Summary</h2>
      <p>
        I believe that design drives the world around us, and should be
        constantly evolving. This is most apparent when apps function
        intuitively, websites are engaging, and brands speak directly to you. I
        help entrepreneurs and businesses by creating unique and engaging
        designs and experiences, whether through websites, apps or graphic
        design.
      </p>
    </div>
    <div className={styles.infoCard}>
      <h2>Experience</h2>
      <div className={styles.infoItem}>
        <h3>
          UI Developer / UX Designer <span>Aug 2016 - Present</span>
        </h3>
        <p className={styles.infoMeta}>NXP Semiconductors</p>
        <p>
          UI developer responsible for enhancing NXP's web presence by
          developing and improving UI modules, rapid prototyping and helping to
          drive the User Experience team. My work includes technologies such as
          HTML5, CSS3, SASS, JavaScript, jQuery, and ReactJS as well as managing
          projects in an Agile environment.
        </p>
        <ul>
          <li>Some key point here</li>
          <li>Follow up with a few points</li>
          <li>End on a strong point</li>
        </ul>
      </div>
      <div className={styles.infoItem}>
        <h3>
          UI Developer / UX Designer <span>Aug 2016 - Oct 2018</span>
        </h3>
        <p className={styles.infoMeta}>Liaison Creative + Marketing</p>
        <p>
          Working as a contractor for Liaison, I have been providing UI & UX
          services for NXP Semiconductors in Austin, TX for two current
          projects; an internal CMS tool and a Responsive Re-design of their
          current website. Throughout this contract I have conducted user
          research, produced UI & interactive mockups for review, and submitted
          HTML components and templates for back-end developers to integrate
          into their CMS, after working through browser testing and UAT
          environments.
        </p>
        <ul>
          <li>Some key point here</li>
          <li>Follow up with a few points</li>
          <li>End on a strong point</li>
        </ul>
      </div>
      <div className={styles.infoItem}>
        <h3>
          Web Developer <span>Aug 2015 - May 2016</span>
        </h3>
        <p className={styles.infoMeta}>Edlio, LLC</p>
        <p>
          Built rich and engaging websites with the "Slicing" team, and
          specializing in the educational area. Was responsible for taking
          Photoshop (PSD) files, and converting into responsive websites for
          individual schools, multi campus schools, and school districts across
          the United States. Our workflow involved a rigorous code review
          process by peers, following accessibility guidelines, and supporting
          all major browsers (mobile and desktop) including IE10.
        </p>
        <ul>
          <li>Some key point here</li>
          <li>Follow up with a few points</li>
          <li>End on a strong point</li>
        </ul>
      </div>
      <div className={styles.infoItem}>
        <h3>
          Web Designer / Developer <span>Oct 2013 - Oct 2018</span>
        </h3>
        <p className={styles.infoMeta}>Freelance</p>
        <p>
          Providing Graphic/Web/UX design services for various startups,
          non-profits, and ecommerce clients.
        </p>
        <ul>
          <li>Some key point here</li>
          <li>Follow up with a few points</li>
          <li>End on a strong point</li>
        </ul>
      </div>
    </div>
    <div className={styles.infoCard}>
      <h2>Education</h2>
      {/* <p>Short description of education</p> */}
      <div className={styles.infoItem}>
        <h3>
          Austin Community College <span>2012 - 2014</span>
        </h3>
        <p className={styles.infoMeta}>Web & User Experience Design</p>
        {/* <p>Some short text here if I decide</p> */}
      </div>
      <div className={styles.infoItem}>
        <h3>
          Northwest Missouri State University <span>2000 - 2002</span>
        </h3>
        <p className={styles.infoMeta}>Business Management</p>
        {/* <p>Some short text here if I decide</p> */}
      </div>
    </div>
  </React.Fragment>
)

const IndexPage = () => (
  <Layout>
    <SEO title="Home" />
    <ResumeLayout left={<InfoBlock />} right={<Col />} />
  </Layout>
)

export default IndexPage
