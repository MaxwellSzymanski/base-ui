import React from "react";
import {ReactComponent as ThumbsUp} from './thumbs-up.svg';
import {ReactComponent as ThumbsDown} from './thumbs-down.svg';
import {ReactComponent as Add} from './add.svg';
import {ReactComponent as Bookmark} from './bookmark.svg';

export type IconType = "thumbs-up" | "thumbs-down" | "add" | "bookmark";

export interface IconProps {
    icon?: IconType
}

const Icons = {
    "thumbs-up": <ThumbsUp className="w-4 h-4" fill="currentColor"/>,
    "thumbs-down": <ThumbsDown className="w-4 h-4" fill="currentColor"/>,
    "add": <Add className="w-4 h-4" fill="currentColor"/>,
    "bookmark": <Bookmark className="w-4 h-4" fill="currentColor"/>,
}

const Icon: React.FC<IconProps> = (props: IconProps) => {
    if (props.icon) { return Icons[props.icon] }
    else { return <></>};
};

export default Icon;