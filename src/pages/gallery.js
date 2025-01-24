import Header from '../comp/header';
import Content from '../comp/content';
import { Helmet } from 'react-helmet-async';

const Gallery = () => {
  return (
<>
<Helmet>
    <title>Gallery page</title>
    <meta
  name="description"
  content="This is a Web site created using create-react-app for gallery page for SEO"
/>
  </Helmet>

    <Header></Header>
    < Content  pageName="Gallery Page" txt="the Gallery is here"/>
      
    
    

</>
  );
}

export default Gallery;
