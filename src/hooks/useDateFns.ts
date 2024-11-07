import { ptBR, enUS } from "date-fns/locale";
import i18n from "@/i18n";
import { format, parse } from "date-fns";

export default function useDateFns() {
    return {
        formatExperienceDate(date: string, formatString: string = "P") {
            const parsed = parse(date, "yyyy-MM-dd", new Date());
            return format(parsed, formatString, {
                locale: {
                    "pt-br": ptBR,
                    "en-us": enUS,
                }[i18n.language],
            });
        },
    };
}
