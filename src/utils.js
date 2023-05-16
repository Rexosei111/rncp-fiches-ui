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
  if (typeof text === "undefined") {
    return null;
  }
  const words = text.split(" ");
  if (words.length > size) {
    const clippedText = words.slice(0, 5).join(" ") + "...";
    return clippedText;
  } else {
    return text;
  }
}

export function removeNullValues(obj) {
  for (var key in obj) {
    if (obj[key] === null) {
      delete obj[key];
    } else if (typeof obj[key] === "object") {
      removeNullValues(obj[key]); // recursively check nested objects
    }
  }
  return obj;
}
