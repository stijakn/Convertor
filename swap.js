
    function swapT() {
      var obj1 = document.getElementById('from');
      var obj2 = document.getElementById('to');

      var temp = obj1.innerHTML;
      obj1.innerHTML = obj2.innerHTML;
      obj2.innerHTML = temp;

    }
