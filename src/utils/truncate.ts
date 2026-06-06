/**
 * Trunca texto em número de linhas visuais
 * @param text - Texto a truncar
 * @param lines - Número máximo de linhas
 * @param suffix - Sufixo adicionado (padrão: "...")
 */
export const truncateLines = (text: string, lines: number = 2, suffix: string = '...'): string => {
  const textLines = text.split('\n');

  if (textLines.length > lines) {
    return textLines.slice(0, lines).join('\n') + suffix;
  }

  // Se não exceder número de linhas por quebra, truncar por caracteres
  // Assumir ~60 caracteres por linha visível (depende da fonte/container)
  const charLimit = lines * 60;
  if (text.length > charLimit) {
    const truncated = text.substring(0, charLimit).trim();
    const lastSpace = truncated.lastIndexOf(' ');
    return lastSpace > 0 ? truncated.substring(0, lastSpace) + suffix : truncated + suffix;
  }

  return text;
};

/**
 * Trunca texto em número de caracteres
 * @param text - Texto a truncar
 * @param maxChars - Número máximo de caracteres
 * @param suffix - Sufixo adicionado (padrão: "...")
 */
export const truncateChars = (text: string, maxChars: number = 150, suffix: string = '...'): string => {
  if (text.length <= maxChars) return text;

  const truncated = text.substring(0, maxChars).trim();
  const lastSpace = truncated.lastIndexOf(' ');
  return lastSpace > 0 ? truncated.substring(0, lastSpace) + suffix : truncated + suffix;
};
