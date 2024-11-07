import Avatar from "../Avatar";
import avatar from "@/assets/img/avatar.jpg";
import classes from "./Header.module.css";
import { useTranslation } from "react-i18next";

export default function Header() {
    const { t } = useTranslation();

    return (
        <header className={classes.header}>
            <Avatar src={avatar} />
            <div>
                <h1>André Leria de Oliveira</h1>
                <h2>{t("header.profession")}</h2>
            </div>
        </header>
    );
}
