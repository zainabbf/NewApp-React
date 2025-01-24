import Header from "../comp/header";
import Content from "../comp/content";
import { Helmet } from "react-helmet-async";

const Linktext = () => {
  return (
    <>
      <Helmet>
        <title>link text page</title>
        <meta
          name="description"
          content="This is a Web site created using create-react-app for link text page for SEO"
        />
      </Helmet>

      <Header></Header>

      <Content pageName="Link Text Page" txt="the linktext is here" />
    </>
  );
};

export default Linktext;
