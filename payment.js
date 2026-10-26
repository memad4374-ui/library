const paybtn=
document.getElementById(paybtn);
paybtn.addEventListener("click" ,
    function () {
      const holder=
      document.getElementById("Holder")
      const Number=
      document.getElementById("Number")
      const date=
      document.getElementById("date")
      const cvv=
      document.getElementById("cvv")
      if (
        holder.value === "" ||
        Number.value ==="" ||
        date.value ==="" ||
        cvv.value === ""
      ){
        alert("Please fill all  fields")
      }
      else {
        Window.location.href="success.html";
      }
    });
