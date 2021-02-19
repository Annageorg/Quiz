// show and hides elements
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
            console.log(q1Value);
            break;
        }
    }
    
    const radios2 = document.querySelectorAll('input[name="quest2"]');
    let q2Value;
    for (const rb of radios2) {
        if (rb.checked) {
            q2Value = rb.value;
            console.log(q2Value);
            break;
        }
    }

    const radios3 = document.querySelectorAll('input[name="quest3"]');
    let q3Value;
    for (const rb of radios3) {
        if (rb.checked) {
            q3Value = rb.value;
            console.log(q3Value);
            break;
        }
    }
    const radios4 = document.querySelectorAll('input[name="quest4"]');
    let q4Value;
    for (const rb of radios4) {
        if (rb.checked) {
            q4Value = rb.value;
            console.log(q4Value);
            break;
        }
    }
    const radios5 = document.querySelectorAll('input[name="quest5"]');
    let q5Value;
    for (const rb of radios5) {
        if (rb.checked) {
            q5Value = rb.value;
            console.log(q5Value);
            break;
        }
    }

    let answers = [Number(q1Value), Number(q2Value), Number(q3Value), Number(q4Value), Number(q5Value)];
    console.log(answers);
    answers.sort();
    console.log(answers);

    let a=0;
    let b=0;
    let c=0;
    let d=0;
    for (let i=0; i<answers.length; i++){
      if(answers[i] == 1){
        a++;        
      }else if(answers[i]==2){
        b++;       
      }else if(answers[i]==3){
        c++;
      }else if(answers[i]==4){
        d++;
      }
    }
    console.log(a)
    console.log(b)
    console.log(c)
    console.log(d)
    
    if (d>a && d>b && d>c) {
      msg = "KIRBY";
      show(kirby);
      console.log(msg)
    } else if (c>a && c>b && c>d) {
      msg = "SONIC";
      show(sonic);
      console.log(msg)
    } else if (b>a && b>c && b>d) {
      msg = "LINK";
      show(link) 
      console.log(msg)
    }else if (a>=b && a>=c && a>=d) {
      msg = "MARIO";
      show(mario)
      console.log(msg)
    }
  
    document.getElementById('final').innerHTML = msg
  }

  
  

