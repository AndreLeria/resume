import { ptBR, enUS } from "date-fns/locale";
import i18n from "@/i18n";
import { format, formatDuration, intervalToDuration, parse } from "date-fns";

export default function useDateFns() {
    const experienceFormat = "yyyy-MM-dd";
    const parseExperienceDate = (date: string) =>
        parse(date, experienceFormat, new Date());

    const getLocale = () =>
        ({
            "pt-br": ptBR,
            "en-us": enUS,
        })[i18n.language];

    return {
        formatExperienceDate(date: string, formatString: string = "P") {
            const parsed = parseExperienceDate(date);
            return format(parsed, formatString, {
                locale: getLocale(),
            });
        },

        formatSkillExperience(since: string, until?: string) {
            const parsedSince = parseExperienceDate(since);
            const parsedUntil = until ? parseExperienceDate(until) : new Date();
            const duration = intervalToDuration({
                start: parsedSince,
                end: parsedUntil,
            });
            const years = Math.ceil((duration.months ?? 0) / 12);
            return formatDuration({ years }, { locale: getLocale() });
        },
    };
}
