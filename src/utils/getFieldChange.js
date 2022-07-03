import moment from "moment";

export const getFieldChange = (init, value) => {
  let obj = {};

  for (const x in value) {
    if (value[x] instanceof moment) {
      if (init[x].toLocaleString() !== value[x].toLocaleString())
        obj[x] = value[x].toLocaleString();
    } else {
      if (value[x] && init[x] !== value[x]) {
        obj[x] = value[x];
      }
    }
  }
  return obj;
};
