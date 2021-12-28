import React from "react";
import {ReactComponent as ThumbsUp} from './thumbs-up.svg';
import {ReactComponent as ThumbsUpSolid} from './thumbs-up-solid.svg';
import {ReactComponent as ThumbsDown} from './thumbs-down.svg';
import {ReactComponent as ThumbsDownSolid} from './thumbs-down-solid.svg';
import {ReactComponent as Add} from './add.svg';
import {ReactComponent as AddSolid} from './add-solid.svg';
import {ReactComponent as Bookmark} from './bookmark.svg';
import {ReactComponent as BookmarkSolid} from './bookmark-solid.svg';
import {ReactComponent as View} from './view.svg';
import {ReactComponent as ViewSolid} from './view-solid.svg';
import {ReactComponent as Close} from './close.svg';
import {ReactComponent as CloseSolid} from './close-solid.svg';

export type IconType = "thumbs-up" | "thumbs-up-solid" | "thumbs-down" | "thumbs-down-solid" | "add" | "add-solid" | "bookmark" | "bookmark-solid" | "close" | "close-solid" | "view" | "view-solid";

const sizes = {"sm": 3, "md": 4, "lg": 4, "xl": 5}

export interface IconProps {
    icon: IconType,
    size?: "sm" | "md" | "lg" | "xl",
    solid?: boolean
}

const Icon: React.FC<IconProps> = (props: IconProps) => {

    const size = props.size ? props.size : "md";
    const classStyle = `w-${sizes[size]} h-${sizes[size]}`;
    const solidClass = props.icon.split("-")[props.icon.split("-").length-1] === "solid" ? props.icon : props.icon + "-solid" as IconType;
    const iconSelector = (props.solid ? solidClass : props.icon);

    const Icons = {
        "thumbs-up": <ThumbsUp className={classStyle} fill="currentColor"/>,
        "thumbs-up-solid": <ThumbsUpSolid className={classStyle} fill="currentColor"/>,
        "thumbs-down": <ThumbsDown className={classStyle} fill="currentColor"/>,
        "thumbs-down-solid": <ThumbsDownSolid className={classStyle} fill="currentColor"/>,
        "add": <Add className={classStyle} fill="currentColor"/>,
        "add-solid": <AddSolid className={classStyle} fill="currentColor"/>,
        "bookmark": <Bookmark className={classStyle} fill="currentColor"/>,
        "bookmark-solid": <BookmarkSolid className={classStyle} fill="currentColor"/>,
        "view": <View className={classStyle} fill="currentColor"/>,
        "view-solid": <ViewSolid className={classStyle} fill="currentColor"/>,
        "close": <Close className={classStyle} fill="currentColor"/>,
        "close-solid": <CloseSolid className={classStyle} fill="currentColor"/>,
    }

    if (props.icon) { return Icons[iconSelector] }
    else { return <></>};
};

export default Icon;