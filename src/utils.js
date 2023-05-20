export const transformDate = (dateString) => {
  if (dateString === null) {
    return null;
  }
  const dateObj = new Date(dateString);
  const formattedDate = dateObj.toLocaleDateString("en-GB", {
    day: "2-digit",
    month: "2-digit",
    year: "numeric",
  });
  return formattedDate;
};

export function clipText(text, size) {
  if (typeof text === "undefined") {
    return null;
  }
  const words = text.split(" ");
  if (words.length > size) {
    const clippedText = words.slice(0, size).join(" ") + "...";
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

export function replaceWithNewlines(str) {
  const regex = /(\. |\;|\-)/g;
  return str.replace(regex, "\n");
}

export function splitString(str) {
  const delimiters = [". ", ";", "-"];
  let resultList = [str];

  for (let i = 0; i < delimiters.length; i++) {
    const delimiter = delimiters[i];
    const tempList = [];

    resultList.forEach((item) => {
      tempList.push(...item.split(delimiter));
    });

    resultList = tempList;
  }

  return resultList.map((item) => item.trim()).filter((item) => item !== "");
}
