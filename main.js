let randomNumber = Math.floor(Math.random() * 9000) + 1000;
a = 0;
function test() {
  n1 = document.getElementById("n1").value;

  b = 7;
  r = "";
  a++;
  k = 0;
  for (let i = 0; i < 4; i++) {
    if (n1[i] === randomNumber.toString()[i]) {
      r = r + "*";
    } else {
      r = r + "_";
    }
    if (k === 4) {
      document.getElementById("n2").innerText =
        "مبروك! لقد خمنت الرقم الصحيح: " + randomNumber;
      document.getElementById("n3").innerText = "";
    } else {
      document.getElementById("n2").innerText =
        "محاولة فاشلة! حاول مرة أخرى. المحاولة: " + a + " من " + b;
      document.getElementById("n3").innerText = r;

      // إعادة تعيين حقل الإدخال ليكون فارغاً
      document.getElementById("n1").value = "";

      if (a >= b) {
        document.getElementById("n2").innerText =
          "للأسف! لقد استنفذت جميع المحاولات. الرقم الصحيح كان: " +
          randomNumber;
        document.getElementById("n3").innerText = "";
      }
    }
  }
}
