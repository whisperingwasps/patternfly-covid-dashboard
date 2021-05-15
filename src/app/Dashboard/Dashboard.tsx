import * as React from 'react';
import { PageSection, Title,Grid, GridItem } from '@patternfly/react-core';
import { Timeline,Tweet } from 'react-twitter-widgets'

const tweetArray = ["841418541026877441","841418541026877441","841418541026877441"]
const Dashboard: React.FunctionComponent = () => (
  <PageSection>
    <Title headingLevel="h1" size="lg">Information from Twitter</Title>
    <Grid>
      {tweetArray.map(
      eachTweet => {
                      return(
                      <GridItem id={eachTweet} span={4}>
                        <Tweet tweetId={eachTweet} options={{ width: "320",theme: "dark"  }}/>
                      </GridItem>
                      )
                    }
                    )}
    </Grid>

  </PageSection>
)

export { Dashboard };
