import classes from "./CourseCard.module.scss";

import {ICourse} from "../../interfaces/ICourse";

interface ICourseCard {
    course: ICourse;
    imageCache: Map<string, string>;
}

const CourseCard = ({course, imageCache}: ICourseCard) => {
    const {bgColor, image, name} = course;
    const cachedImage = imageCache.get(image) || image;

    return (
        <div className={classes.card}>
            <div style={{background: bgColor}} className={classes.img_wrapper}>
                <img className={classes.img} src={cachedImage} alt={name}/>
            </div>
            <div className={classes.name_wrapper}>
                {name}
            </div>
        </div>
    )
}

export default CourseCard;
