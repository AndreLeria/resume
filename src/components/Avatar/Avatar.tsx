import classes from "./Avatar.module.css";
import { AvatarProps } from "./AvatarProps";

export default function Avatar({ src }: AvatarProps) {
    return <img className={classes.avatarContainer} src={src} />;
}
