import classes from "./App.module.scss";

import Nav from "../../components/Nav";
import Courses from "../../components/Courses";
import useAppData from "./useAppData";

const App = () => {
  const {courses, currentTag, setCurrentTag, imageCache} = useAppData();

  return (
    <div className={classes.app}>
        <Nav currentTag={currentTag} setCurrentTag={setCurrentTag} />
        <Courses courses={courses} imageCache={imageCache} />
    </div>
  )
}

export default App;
