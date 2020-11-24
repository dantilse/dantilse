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
      <InfoHeading>About Me</InfoHeading>
      <InfoSummary>
        <p>
          Experienced User Interface Developer utilizing modern frameworks such
          as ReactJS and Redux to help scale websites through data-driven
          single-page-applications built on a foundation of accessible and
          semantic HTML/CSS/JS.
        </p>
        <p>
          Collaborative team member working directly with visual designers and
          content strategists in order to develop a robust UI pattern library
          and web templating system that spans the entire design cycle from
          static mockups to functional components.
        </p>
        <p>
          Contributor to an Agile development process along with Project
          Managers, Product Owners, and Scrum Masters in order to incrementally
          deliver features and enhancements in accordance with a strict schedule
          of releases.
        </p>
        {/* <ul>
          <li><strong>Key Technologies:</strong></li>
          <li>React JS</li>

        </ul> */}
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
            UI developer responsible for advancing NXP's web presence by
            developing and improving UI modules and complete interfaces for web
            templates, single-page applications (SPAs), and other data-driven
            tools according to NXP's global brand guidelines.
          </p>
          <p>
            As a senior member of the User Experience team, I am responsible for
            managing concurrent projects using an Agile process. Working with
            various stakeholders, I coordinate with a visual designer and other
            UX team members in order to deliver high fidelity mockups that
            adhere to a consistent design system. After design approval and
            product owner sign-off, I'm responsible for building, testing,
            optimizing, and documenting UI elements and design patterns with
            HTML, CSS, JS (including ReactJS).
          </p>
          <ul>
            <li>
              Communicate with stakeholders to define project objectives and
              scope
            </li>
            <li>
              Deliver UX proposals based on best practices, industry standards,
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
            <li>Document and manage documentation of pattern library</li>
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
            Contracting through Liaison Creative + Marketing, I was tasked to
            provide UX/UI services to NXP Semiconductors in order to develop an
            internal management tool. Through a rigorous process of user
            research, wireframing, and coordinating with the development team, I
            provided a complete UX solution. Unfortunately, the project was
            unable to proceed due to development costs.
          </p>

          <p>
            At the conclusion of that project, I was asked to stay on board to
            assist in converting their then static website into a new CMS which
            required an almost complete re-design in order to provide a fully
            responsive and updated web experience. My role was to develop a
            pattern library using HTML/CSS/JS in alignment with NXP's global
            brand guidelines. Through this and subsequent successful projects, I
            was asked to join the NXP team as a full-time employee.
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
            Photoshop (PSD) files, and converting them into responsive websites
            for individual schools, multi-campus schools, and school districts
            across the United States. Our workflow involved a rigorous code
            review process by peers, following accessibility guidelines, and
            supporting all major browsers (mobile and desktop) including
            Internet Explorer 10.
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
            non-profits, and e-commerce clients.
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
        <InfoMeta>Web &amp; User Experience Design</InfoMeta>
        <InfoContent>
          <p>
            Earned an Associate's Degree in Web and Interactive Design with a
            focus on digital user experience.
          </p>
        </InfoContent>
      </InfoItem>
      <InfoItem>
        <InfoTitle meta={`2000 - 2002`}>
          Northwest Missouri State University
        </InfoTitle>
        <InfoMeta>Business Management</InfoMeta>
        <InfoContent>
          <p>
            Studied Business Management with an interest in entrepreneurship,
            and member of Alpha Kappa Lambda fraternity.
          </p>
        </InfoContent>
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
