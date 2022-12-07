window.onload = function () {
  let nodeAList = document.querySelectorAll("a");
  for (let index = 0; index < nodeAList.length; index++) {
    if (/ssl/.test(nodeAList[index].href)) {
      nodeAList[index].click();
      break;
    }
  }
};

// $(document).ready(function () {});
