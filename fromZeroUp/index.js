
  function hideShow(id1, id2){
    hide(id1);
    show(id2);
  }
  function hide(elementId){
    let id = elementId.id;
    document.getElementById(id).style.display = "none";
  
  }
  function show(elementId){
    let id = elementId.id;
    document.getElementById(id).style.display = "inline-block";
  }
  
  
  /**
   * calculates and displays the results
   */
  function calculateResults() {
    const radios1 = document.querySelectorAll('input[name="quest1"]');
    let q1Value;
    for (const rb of radios1) {
        if (rb.checked) {
            q1Value = rb.value;
            break;
        }
    }
    
    const radios2 = document.querySelectorAll('input[name="quest2"]');
    let q2Value;
    for (const rb of radios2) {
        if (rb.checked) {
            q2Value = rb.value;
            break;
        }
    }
  
    let total = Number(q1Value) + Number(q2Value);
    let result = total / 2;
    
    if (result > 2) {
      msg = "You answered mostly c you are";
    } else if (result >= 1.5) {
      msg = "You answered mostly b, you may have an auditory learning style";
    } else {
      msg = "You answered mostly a, you may have a visual learning style";
    }
  
    document.getElementById("result").innerHTML = msg
  
  }
