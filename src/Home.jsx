import Alert from "./Components/Main/Alert";
import Sectionone from "./Components/Main/Sectionone";
import SectionTwo from "./Components/Main/SectionTwo";
import SectionThree from "./Components/Main/SectionThree";
import SectionFour from "./Components/Main/SectioFour";
import SectionFive from "./Components/Main/SectionFive";
import Youtubevideos from "./Components/YoutubeVideos/YoutubeVideos";

function Home() {
  return (
    <div>
      <Alert />
      <Sectionone />
      <SectionTwo />
      <SectionThree />
      <SectionFour />
      <SectionFive />
      <Youtubevideos />
    </div>
  );
}

export default Home;
