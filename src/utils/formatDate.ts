export const formatDate = (dateString: string): string => {
  const date = new Date(dateString);

  const options: Intl.DateTimeFormatOptions = {
    day: "2-digit",
    month: "2-digit",
    year: "numeric",
    hour: "2-digit",
    minute: "2-digit",
    timeZone: "America/Sao_Paulo",
  };

  const formattedDate = date.toLocaleString("pt-BR", options);

  const [day, month, year, hour, minute] = formattedDate.split(/[/ :,]+/);

  return `${day}/${month}/${year} às ${hour}:${minute}`;
};
