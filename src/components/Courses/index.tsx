import classes from "./Courses.module.scss";


import {ICourse} from "../../interfaces/ICourse";
import CourseCard from "../CourseCard";


interface ICoursesProps  {
    courses: ICourse[]
    imageCache:  Map<string, string>;
}

const Courses = ({courses, imageCache}:ICoursesProps) => {
    return (
        <div className={classes.courses}>
            {courses?.map((course => <CourseCard key={course.id} imageCache={imageCache} course={course} />))}
        </div>
    )
}

export default Courses;
