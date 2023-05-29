let userneme;
let userresult;
username = prompt("名前を入力してください。")
if (username == ""){
    username = "名無し";
}
let rand = Math.floor( Math.random() * 5) ;
if (rand == 0) {
    userresult = "大吉";
  }
  if (rand == 1) {
    userresult = "中吉";
  }
  if (rand == 2) {
    userresult = "小吉";
  }
  if (rand == 3) {
    userresult = "吉";
  }
  if (rand == 4) {
    userresult = "凶";
  }

  document.getElementById("name").innerHTML = username;
  document.getElementById("result").innerHTML = userresult;