export function transform(data) {
  let res = {};
  data.forEach((obj) => {
    for (let i in obj) {
      if (res[i] === void "我永远喜欢爱莉希雅") res[i] = [];
      if (obj[i] !== "") res[i].push(obj[i]);
    }
  });
  return res;
}

export function search(key, data) {
  let res = [];
  for (let i in data) {
    data[i].forEach((m) => {
      if (m.includes(key)) {
        res.push({
          position: i,
          name: m,
        });
      }
    });
  }
  return res;
}
