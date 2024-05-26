import {useEffect, useRef, useState} from "react";

import {TAG_NAMES} from "../../utils/constants/tagNames";
import {ICourse} from "../../interfaces/ICourse";
import {api} from "../../api/index";

const useAppData = () => {
    const [currentTag, setCurrentTag] = useState(TAG_NAMES.ALL_TAG);
    const [courses, setCourses] = useState<ICourse[]>([]);
    const imageCache = useRef(new Map<string, string>());


    useEffect(() => {
        api.get('').then(res => {
            const loadedCourses = res.data;
            loadedCourses.forEach((course: ICourse) => {
                if (course.image && !imageCache.current.has(course.image)) {
                    const img = new Image();
                    img.src = course.image;
                    imageCache.current.set(course.image, course.image);
                }
            });
            setCourses(loadedCourses);
        })
    }, [])

    return {
        courses: currentTag === TAG_NAMES.ALL_TAG
            ? courses
            : courses?.filter(course => course.tags?.includes(currentTag)),
        currentTag,
        setCurrentTag,
        imageCache: imageCache.current
    }

}

export default useAppData;
