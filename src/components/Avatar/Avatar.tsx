import classes from "./Avatar.module.css";

export type Props = {
    src: string;
};

export default function Avatar({ src }: Props) {
    return <img className={classes.avatarContainer} src={src} />;
}
