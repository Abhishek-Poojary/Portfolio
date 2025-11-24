export const formatYear = (year: string): string => {
  return year
}

export const truncateText = (text: string, maxLength: number): string => {
  return text.length > maxLength ? `${text.slice(0, maxLength)}...` : text
}

export const formatTechStack = (techs: string[]): string => {
  return techs.join(" • ")
}
