import React from "react";
import { Text, Button, Icon, Footer, FooterTab } from "native-base";

const FooterComponent = (): JSX.Element => {
  return (
    <Footer>
      <FooterTab>
        <Button>
          <Icon name="codesquareo" type="AntDesign" />
        </Button>
        <Button>
          <Icon name="codesquareo" type="AntDesign" />
        </Button>
        <Button active>
          <Icon name="codesquareo" type="AntDesign" />
        </Button>
        <Button>
          <Icon name="codesquareo" type="AntDesign" />
        </Button>
        <Button>
          <Icon name="menu" />
        </Button>
      </FooterTab>
    </Footer>
  );
};

export default FooterComponent;
