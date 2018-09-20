function sumIntervals(intervals) {
  records = [];

  intervals.forEach(examinee => {
    if (records.length == 0) {
      records.push(examinee);
    } else {
      for (var item2 of records) {
        frontNum = item2[0];
        endNum = item2[1];
        if (
          frontNum < examinee[0] &&
          examinee[0] < endNum &&
          examinee[1] >= endNum
        ) {
          item2[1] = examinee[1];
          break;
        } else if (frontNum > examinee[0]) {
          records.push(examinee);
          break;
        } else if (examinee[1] < endNum) {
          break;
        } else if (frontNum == examinee[0] && examinee[1] == endNum) {
          break;
        } else {
          records.push(examinee);
          break;
        }
      }
    }
  });

  result = 0;
  records.forEach(item => {
    result = item[1] - item[0] + result;
  });
  return result;
}

//console.log(sumIntervals([[1, 4], [3, 5], [7, 10]]));
// console.log(sumIntervals([[1, 4], [7, 10], [3, 5]]));
// console.log(sumIntervals([[1, 20]]));
// console.log(sumIntervals([[1, 5], [1, 5]]));
//console.log(sumIntervals([[1, 5], [7, 10], [3, 5]]));
//console.log(sumIntervals([[1, 20], [10, 20], [1, 6], [16, 19], [5, 11]]));
console.log(sumIntervals([[11, 15], [6, 10], [1, 2]]));
