import React, { Component } from 'react';
import { Container, Header, Tab, Tabs, TabHeading, Icon, Text, Content} from 'native-base';
import Tab1 from './List/Popular';
import Tab2 from './List/TopRated';
import Tab3 from './List/Upcoming';

export default class TabsAdvancedExample extends Component {
  render() {
    return (
      <Content>
          <Container>
        
        <Tabs>
          <Tab heading={ <TabHeading><Icon name="ios-thumbs-up" /><Text>Popular</Text></TabHeading>}>
            <Tab1 />
          </Tab>
          <Tab heading={ <TabHeading><Icon name="ios-star" /><Text>Top Rated</Text></TabHeading>}>
            <Tab2 />
          </Tab>
          <Tab heading={ <TabHeading><Icon name="ios-timer" /><Text>Upcoming</Text></TabHeading>}>
            <Tab3 />
          </Tab>
        </Tabs>
        </Container>
      </Content>
    );
  }
}