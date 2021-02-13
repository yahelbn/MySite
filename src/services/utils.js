/**
 * gets json object and returns the following structure: key = value, key2 = value2 etc
 * @param {*} jsonData
 */
exports.jsonToEqualsKeyValue = function (jsonData) {
  try {
    let string = "";
    let i = 0;
    for (let [key, value] of Object.entries(jsonData)) {
      string += `${i === 0 ? " " : ", "}${key} = "${value}" `;
      i++;
    }
    return string;
  } catch (e) {
    throw new Error("error occured when trying to generate string from json");
  }
};
