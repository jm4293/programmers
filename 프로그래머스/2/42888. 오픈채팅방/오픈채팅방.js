function solution(record) {
  let answer = [];
  let uids = new Map();
  record.map(element => {
    let arr = element.split(" ");
    if (arr[0] === "Enter" || arr[0] === "Change") {
      uids.set(arr[1], arr[2]);
    }
  });


  record.map(element => {
    let arr = element.split(" ");
    
    switch (arr[0]) {
      case "Enter":
        answer.push(`${uids.get(arr[1])}님이 들어왔습니다.`);
        break;
      case "Leave":
        answer.push(`${uids.get(arr[1])}님이 나갔습니다.`);
        break;
    }
  });

  return answer;
}

