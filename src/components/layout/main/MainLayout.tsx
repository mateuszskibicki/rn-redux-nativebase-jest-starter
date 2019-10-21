import React from "react";
import { Container } from "native-base";

interface IProps {
  children: any;
}

const MainLayout: React.FunctionComponent<IProps> = ({
  // headerTitle,
  children
}: IProps): JSX.Element => {
  return <Container>{children && children}</Container>;
};

export default MainLayout;
