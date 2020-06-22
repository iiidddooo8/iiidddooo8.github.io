document.getElementById("sum-button").onclick = function() {
    var num1 = Number(document.getElementById("num1").value);
    var num2 = Number(document.getElementById("num2").value);
    sum = num1 + num2;
    text_target = document.getElementById("output_text");
    num_target = document.getElementById("output_num");
    text_target.innerHTML = "合計値：";
    num_target.innerHTML = sum;
    //document.write("合計：")
    //document.write(sum)
  };