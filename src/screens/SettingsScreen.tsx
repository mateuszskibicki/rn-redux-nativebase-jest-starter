import React from "react";
import { connect } from "react-redux";
import {
  Button,
  Body,
  Content,
  Text,
  Card,
  CardItem,
  Grid,
  Col
} from "native-base";
import MainLayout from "../components/layout/main/MainLayout";

import { setLoadingStart, setLoadingStop } from "../store/actions/loading";

export interface IProps {
  navigation: any;
  loading: { loading: boolean };
  setLoadingStart: typeof setLoadingStart;
  setLoadingStop: typeof setLoadingStop;
}

export interface NavFunctionComponent extends React.FunctionComponent<IProps> {
  navigationOptions?: Object;
}

const SettingsScreen: NavFunctionComponent = ({
  navigation,
  loading,
  setLoadingStart,
  setLoadingStop
}: IProps): JSX.Element => {
  return (
    <MainLayout>
      <Content padder centerContent>
        <Card>
          <CardItem>
            <Body>
              <Text>Settings screen!</Text>
            </Body>
          </CardItem>
        </Card>
        <Grid>
          <Col>
            <Button full rounded onPress={() => setLoadingStart()}>
              <Text>Set loading true</Text>
            </Button>
          </Col>
          <Col>
            <Button full rounded onPress={() => setLoadingStop()}>
              <Text>Set loading false</Text>
            </Button>
          </Col>
        </Grid>
        <Grid>
          <Col>
            <Text>{loading.loading ? "True" : "False"}</Text>
          </Col>
        </Grid>
      </Content>
    </MainLayout>
  );
};

/**
|--------------------------------------------------
| Header options
|--------------------------------------------------
*/
SettingsScreen.navigationOptions = {
  title: "Settings !"
};

const mapStateToProps = ({ loading }): Object => ({ loading });
const mapDispatchToProps: Object = { setLoadingStart, setLoadingStop };

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(SettingsScreen);
