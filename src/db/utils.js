/**
 * `UPDATE users SET foo = ?, bar = ?, baz = ? WHERE id = ?`,
    ["a", "b", "c", userId],
 */

exports.parseUpdate = function (jsonData) {
  let fields = "";
  let values = [];
  for (const [key, value] of Object.entries(jsonData)) {
    fields += `${key} = ?,`;
    values.push(value);
  }
  return {
    fields: fields,
    values: values,
  };
};

// tt.add("UserCompany", {
//   UserCompanyID: 12,
//   UserID: 111,
//   CompanyID: 123123,
//   UserStatusInCompany: "done",
// });
