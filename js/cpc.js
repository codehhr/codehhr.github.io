window.onload = function () {
  document.querySelectorAll("a").forEach((a) => {
    if (/ssl/.test(a.href)) {
      a.click();
    }
  });
};

// $(document).ready(function () {});
