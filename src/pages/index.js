import React from "react"

import Layout from "../components/layout"
import ResumeLayout from "../components/resume-layout"
import InfoBlock from "../components/info-block"
import { InfoCard, InfoHeading, InfoSummary } from "../components/info-card"
import {
  InfoItem,
  InfoTitle,
  InfoMeta,
  InfoContent,
} from "../components/info-item"
import SEO from "../components/seo"

import styles from "../scss/components/info-block.module.scss"

const Col = () => (
  <React.Fragment>
    <InfoCard>
      <InfoHeading>Summary</InfoHeading>
      <InfoSummary>
        <p>
          I believe that design drives the world around us, and should be
          constantly evolving. This is most apparent when apps function
          intuitively, websites are engaging, and brands speak directly to you.
          I help entrepreneurs and businesses by creating unique and engaging
          designs and experiences, whether through websites, apps or graphic
          design.
        </p>
      </InfoSummary>
    </InfoCard>
    <InfoCard>
      <InfoHeading>Experience</InfoHeading>
      <InfoItem>
        <InfoTitle meta={`Aug 2016 - Present`}>
          UI Developer / UX Designer
        </InfoTitle>
        <InfoMeta>NXP Semiconductors</InfoMeta>
        <InfoContent>
          <p>
            UI developer responsible for enhancing NXP's web presence by
            developing and improving UI modules, rapid prototyping and helping
            to drive the User Experience team. My work includes technologies
            such as HTML5, CSS3, SASS, JavaScript, jQuery, and ReactJS as well
            as managing projects in an Agile environment.
          </p>
          <ul>
            <li>
              Communicate with stakeholders to define project objectives and
              scope
            </li>
            <li>
              Deliver UX proposals based on best practices, industy standards,
              and direct and indirect user feedback
            </li>
            <li>
              Work directly with Visual Designer and Content Strategist to
              provide high-fidelity prototypes
            </li>
            <li>
              Deliver front-end UI elements built with HTML/CSS/JS including
              ReactJS
            </li>
          </ul>
        </InfoContent>
      </InfoItem>
      <InfoItem>
        <InfoTitle meta={`Aug 2016 - Oct 2018`}>
          UI Developer / UX Designer
        </InfoTitle>
        <InfoMeta>Liaison Creative + Marketing</InfoMeta>
        <InfoContent>
          <p>
            Working as a contractor for Liaison, I provided UI & UX services for
            NXP Semiconductors in Austin, TX for two unique projects; an
            internal CMS tool and a responsive re-design of their current
            website. Throughout this contract I conducted user research,
            produced interactive mockups for review, and submitted HTML
            components and templates for back-end developers to integrate into
            their CMS, after working through browser testing and UAT
            environments.
          </p>
        </InfoContent>
      </InfoItem>
      <InfoItem>
        <InfoTitle meta={`Aug 2015 - May 2016`}>Web Developer</InfoTitle>
        <InfoMeta>Edlio, LLC</InfoMeta>
        <InfoContent>
          <p>
            Built rich and engaging websites with the "Slicing" team, and
            specializing in the educational area. Was responsible for taking
            Photoshop (PSD) files, and converting into responsive websites for
            individual schools, multi campus schools, and school districts
            across the United States. Our workflow involved a rigorous code
            review process by peers, following accessibility guidelines, and
            supporting all major browsers (mobile and desktop) including IE10.
          </p>
        </InfoContent>
      </InfoItem>
      <InfoItem>
        <InfoTitle meta={`Oct 2013 - Oct 2018`}>
          Web Designer / Developer
        </InfoTitle>
        <InfoMeta>Freelance</InfoMeta>
        <InfoContent>
          <p>
            Provided Graphic/Web/UX design services for various startups,
            non-profits, and ecommerce clients.
          </p>
          <ul>
            <li>Utilized common CMS systems such as WordPress</li>
            <li>
              Create consistent branding across web and social media platforms
            </li>
            <li>Provide continuing web support and design updates</li>
          </ul>
        </InfoContent>
      </InfoItem>
    </InfoCard>
    <InfoCard>
      <InfoHeading>Education</InfoHeading>
      <InfoItem>
        <InfoTitle meta={`2012 - 2014`}>Austin Community College</InfoTitle>
        <InfoMeta>Web & User Experience Design</InfoMeta>
      </InfoItem>
      <InfoItem>
        <InfoTitle meta={`2000 - 2002`}>
          Northwest Missouri State University
        </InfoTitle>
        <InfoMeta>Business Management</InfoMeta>
      </InfoItem>
    </InfoCard>
  </React.Fragment>
)

const IndexPage = () => (
  <Layout>
    <SEO title="Home" />
    <ResumeLayout left={<InfoBlock />} right={<Col />} />
  </Layout>
)

export default IndexPage
