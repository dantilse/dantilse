import type { HeadFC } from "gatsby";
import React from "react";
import {
  Card,
  InfoBlock,
  InfoCard,
  InfoHeading,
  InfoSummary,
  Layout,
  ResumeLayout,
} from "../components";
import { ABOUT, EDUCATION, WORK_EXPERIENCE } from "../constants";

const Col = () => (
  <React.Fragment>
    <Card>
      <InfoHeading>About Me</InfoHeading>
      <InfoSummary>
        {ABOUT.map((str) => (
          <p key={str}>{str}</p>
        ))}
      </InfoSummary>
    </Card>
    <InfoCard heading="Experience" items={WORK_EXPERIENCE} />
    <InfoCard heading="Education" items={EDUCATION} />
  </React.Fragment>
);

const IndexPage = () => (
  <Layout>
    <ResumeLayout left={<InfoBlock />} right={<Col />} />
  </Layout>
);

export default IndexPage;

export const Head: HeadFC = () => <title>Home Page</title>;
