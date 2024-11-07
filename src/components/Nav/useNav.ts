import { useMatches, useNavigate } from "@tanstack/react-router";
import React from "react";
import { useTranslation } from "react-i18next";

export default function useNav() {
    const { t } = useTranslation();

    const navigate = useNavigate();
    const handleSelectNavigation = React.useCallback(
        (e: React.ChangeEvent<HTMLSelectElement>) => {
            navigate({ to: e.target.value });
        },
        [navigate],
    );

    const matches = useMatches();
    const currentRoute = matches.at(-1)?.pathname;

    return {
        t,
        handleSelectNavigation,
        currentRoute,
    };
}
