import * as React from 'react';
import { PageSection, Title } from '@patternfly/react-core';
import { Timeline,Tweet } from 'react-twitter-widgets'

const Dashboard: React.FunctionComponent = () => (
  <PageSection>
    <Title headingLevel="h1" size="lg">Dashboard Page Title!</Title>
    <Tweet tweetId="841418541026877441" options={{ width: "320" }} />
  </PageSection>
)

export { Dashboard };
