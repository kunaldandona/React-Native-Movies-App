import React, { Component } from 'react';
import { Container, Header, Tab, Tabs, TabHeading, Icon, Text, Content} from 'native-base';
import Tab1 from './Search/Movie';
import Tab2 from './Search/People';
import Tab3 from './Search/TvShow';

export default class TabsAdvancedExample extends Component {
  render() {
    return (
      <Content>
          <Container>
        
        <Tabs>
          <Tab heading={ <TabHeading><Icon name="ios-film" /><Text>Movies</Text></TabHeading>}>
            <Tab1 />
          </Tab>
          <Tab heading={ <TabHeading><Icon name="ios-people" /><Text>People</Text></TabHeading>}>
            <Tab2 />
          </Tab>
          <Tab heading={ <TabHeading><Icon name="ios-easel" /><Text>TV Shows</Text></TabHeading>}>
            <Tab3 />
          </Tab>
        </Tabs>
        </Container>
      </Content>
    );
  }
}