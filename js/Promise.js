Promise.myAll = promises => {
  return new Promise((resolve, reject) => {
    let doneNum = 0;
    let result = [];
    promises.forEach(item => {
      Promise.resolve(item)
        .then(val => {
          doneNum++;
          result.push(val);
          if (doneNum === promises.length) {
            resolve(result);
          }
        })
        .catch(err => {
          reject;
        });
    });
  });
};

Promise.myRace = promises => {
  return new Promise((resolve, reject) => {
    promises.forEach(item => {
      Promise.resolve(item)
        .then(val => {
          resolve(val);
        })
        .catch(err => {
          reject(err);
        });
    });
  });
};
Promise.myAllSettled = promises => {
  return new Promise(resolve => {
    let result = [];
    let doneNum = 0;
    promises.forEach(item => {
      Promise.resolve(item)
        .then(val => {
          doneNum++;
          result.push({ status: "fulfilled", val });
          if (doneNum === promises.length) {
            resolve(result);
          }
        })
        .catch(err => {
          doneNum++;
          result.push({ status: "rejected", err });
          if (doneNum === promises.length) {
            resolve(result);
          }
        });
    });
  });
};
