import type { HeadFC } from "gatsby";
import React from "react";
import {
  InfoBlock,
  InfoCard,
  InfoContent,
  InfoHeading,
  InfoItem,
  InfoMeta,
  InfoSummary,
  InfoTitle,
  Layout,
  ResumeLayout,
} from "../components";
import { WORK_EXPERIENCE } from "../constants";

const Col = () => (
  <React.Fragment>
    <InfoCard>
      <InfoHeading>About Me</InfoHeading>
      <InfoSummary>
        <p>
          Experienced Software Engineer utilizing modern frameworks such as
          ReactJS and Redux to help scale websites and data-driven
          single-page-applications built on a foundation of accessible and
          semantic HTML/CSS/JavaScript.
        </p>
        <p>
          Collaborative team member working directly with engineers, designers
          and product owners to develop scalable and performant applications
          along with a robust UI pattern library.
        </p>
        <p>
          Experience with an Agile development process and communication with
          product owners, system architects, and other stakeholders in order to
          incrementally deliver features and enhancements in accordance with a
          strict schedule of releases.
        </p>
      </InfoSummary>
    </InfoCard>
    <InfoCard>
      <InfoHeading>Experience</InfoHeading>
      {WORK_EXPERIENCE.map(
        ({ role, company, dates, description, highlights = [] }) => (
          <InfoItem>
            <InfoTitle meta={dates} title={role} />
            <InfoMeta>{company}</InfoMeta>
            <InfoContent>
              {description.map((text) => (
                <p>{text}</p>
              ))}
              {highlights.length > 0 && (
                <ul>
                  {highlights.map((highlight) => (
                    <li>{highlight}</li>
                  ))}
                </ul>
              )}
            </InfoContent>
          </InfoItem>
        )
      )}
    </InfoCard>
    <InfoCard>
      <InfoHeading>Education</InfoHeading>
      <InfoItem>
        <InfoTitle meta={`2012 - 2014`} title="Austin Community College" />
        <InfoMeta>Web &amp; User Experience Design</InfoMeta>
        <InfoContent>
          <p>
            Earned an Associate's Degree in Web and Interactive Design with a
            focus on digital user experience.
          </p>
        </InfoContent>
      </InfoItem>
      <InfoItem>
        <InfoTitle
          meta={`2000 - 2002`}
          title="Northwest Missouri State University"
        />
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
);

const IndexPage = () => (
  <Layout>
    <ResumeLayout left={<InfoBlock />} right={<Col />} />
  </Layout>
);

export default IndexPage;

export const Head: HeadFC = () => <title>Home Page</title>;
