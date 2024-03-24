import { format } from "date-fns";
import { ptBR } from "date-fns/locale";

export const formatDate = (
  date: Date | string | null,
  dateFormat = 'dd/MM/yyyy HH:mm'
): string => {
  return date ? format(new Date(date), dateFormat, { locale: ptBR }) : '';
};