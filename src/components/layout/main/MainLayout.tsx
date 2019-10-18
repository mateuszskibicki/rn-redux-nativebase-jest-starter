import React from "react";
import { Container } from "native-base";
import Header from "../header/Header";
import Footer from "../footer/Footer";

interface IProps {
  headerTitle: String;
  children: any;
}

const MainLayout: React.FunctionComponent<IProps> = ({
  headerTitle,
  children
}: IProps): JSX.Element => {
  return (
    <Container>
      <Header title={headerTitle} />
      {children && children}
      <Footer />
    </Container>
  );
};

export default MainLayout;
