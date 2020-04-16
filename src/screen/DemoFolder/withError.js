import serverCall from "./serverCall";

const handleSignup = (userName, mobileNo) => {
  if (userName == "") {
    alert("Please enter Username");
  } else if (mobileNo == "") {
    alert("Please enter Mobile No");
  } else {
    serverCall.serverApi(userName, mobileNo)
  }
};

export default {
  handleSignup
};
