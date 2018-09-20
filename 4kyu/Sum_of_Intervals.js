function sumIntervals(intervals) {
  records = [];

  intervals.forEach(examinee => {
    if (records.length == 0) {
      records.push(examinee);
    } else {
      for (var examiner of records) {
        examinerFrontNum = examiner[0];
        examinerEndNum = examiner[1];

        examineeFrontNum = examinee[0];
        examineeEndNum = examinee[1];

        let isExamineeGreaterThanExaminer =
          examinerFrontNum < examineeFrontNum &&
          examinerEndNum < examineeEndNum;

        if (isExamineeEndNumGreaterThanExaminer(examiner, examinee)) {
          examiner[1] = examineeEndNum;
        } else if (
          examinerFrontNum > examineeFrontNum ||
          isExamineeGreaterThanExaminer
        ) {
          records.push(examinee);
        } else {
          break;
        }
        break;
      }
    }
  });

  result = 0;
  records.forEach(item => {
    result = item[1] - item[0] + result;
  });
  return result;

  function isExamineeEndNumGreaterThanExaminer(examiner, examinee) {
    return (
      examiner[0] < examinee[0] &&
      examiner[1] > examinee[0] &&
      examiner[1] <= examinee[1]
    );
  }
}

console.log(sumIntervals([[1, 4], [3, 5], [7, 10]]));
console.log(sumIntervals([[1, 4], [7, 10], [3, 5]]));
console.log(sumIntervals([[1, 20]]));
console.log(sumIntervals([[1, 5], [1, 5]]));
console.log(sumIntervals([[1, 5], [7, 10], [3, 5]]));
console.log(sumIntervals([[1, 20], [10, 20], [1, 6], [16, 19], [5, 11]]));
console.log(sumIntervals([[11, 15], [6, 10], [1, 2]]));
