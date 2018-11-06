import jsonp from 'jsonp';

/**
 *
 * @param params
 * @returns {Promise<any>}
 */
export const getArea = params => {
  return new Promise((resolve, reject) => {
    jsonp(`//d.jd.com/area/get?fid=${params}&t=${Math.floor(Math.random() * 10000)}`, null, (err, ret) => {
      if (err) {
        reject(err);
      } else {
        resolve(ret);
      }
    });
  });
};
