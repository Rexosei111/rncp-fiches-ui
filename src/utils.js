export const transformDate = (dateString) => {
  const dateObj = new Date(dateString);
  const formattedDate = dateObj.toLocaleDateString("en-GB", {
    day: "2-digit",
    month: "2-digit",
    year: "numeric",
  });
  return formattedDate;
};

export function clipText(text, size = 5) {
  const words = text.split(" ");
  if (words.length > size) {
    const clippedText = words.slice(0, 5).join(" ") + "...";
    return clippedText;
  } else {
    return text;
  }
}
