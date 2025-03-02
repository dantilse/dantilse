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
import { ABOUT, EDUCATION, WORK_EXPERIENCE } from "../constants";

const Col = () => (
  <React.Fragment>
    <InfoCard>
      <InfoHeading>About Me</InfoHeading>
      <InfoSummary>
        {ABOUT.map((sentence) => (
          <p>{sentence}</p>
        ))}
      </InfoSummary>
    </InfoCard>
    <InfoCard>
      <InfoHeading>Experience</InfoHeading>
      {WORK_EXPERIENCE.map(
        ({ description, highlights = [], subtitle, metadata, title }) => (
          <InfoItem>
            <InfoTitle meta={metadata} title={title} />
            <InfoMeta>{subtitle}</InfoMeta>
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
      {EDUCATION.map(({ description, metadata, subtitle, title }) => (
        <InfoItem>
          <InfoTitle meta={metadata} title={title} />
          <InfoMeta>{subtitle}</InfoMeta>
          <InfoContent>
            {description.map((detail) => (
              <p>{detail}</p>
            ))}
          </InfoContent>
        </InfoItem>
      ))}
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
