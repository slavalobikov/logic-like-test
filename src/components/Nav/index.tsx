import classes from './Nav.module.scss';

import {TAG_NAMES} from "../../utils/constants/tagNames";

interface INav {
    currentTag: string;
    setCurrentTag: (s: string) => void;
}

const Nav = ({currentTag, setCurrentTag}: INav) => {
    const tags = Object.values(TAG_NAMES);
    return (
        <nav className={classes.nav}>
            <div className={classes.wrapper}>
                {tags.map(tag => <div onClick={() => setCurrentTag(tag)} data-active={tag === currentTag} className={classes.tag} key={tag}>{tag}</div>)}
            </div>
        </nav>
    )
}

export default Nav;
