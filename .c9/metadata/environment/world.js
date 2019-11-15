{"changed":true,"filter":false,"title":"world.js","tooltip":"/world.js","value":"window.onload = function() {\n  var btn = document.getElementById(\"lookup\");\n  var result = document.getElementById(\"result\");\n\n\n  btn[0].addEventListener(\"click\", function() {\n    let searchValue = document.getElementById(\"country\").value;\n\n    var http = new XMLHttpRequest();\n\n    http.onreadystatechange = function() {\n      if (this.readyState == 4 && this.status == 200) {\n        result.innerHTML = this.responseText;\n      }\n    };\n\n    http.open(\"GET\", \"world.php?query=\" + searchValue, true);\n    http.send();\n  });\n};\n","undoManager":{"mark":16,"position":20,"stack":[[{"start":{"row":0,"column":0},"end":{"row":30,"column":0},"action":"insert","lines":["window.onload = function() {","  var btn = document.getElementsByClassName(\"btn\");","  var result = document.getElementById(\"result\");","","  function ucFirstAllWords(str) {","    var pieces = str.split(\" \");","    for (var i = 0; i < pieces.length; i++) {","      var j = pieces[i].charAt(0).toUpperCase();","      pieces[i] = j + pieces[i].substr(1);","    }","    return pieces.join(\" \");","  }","","  btn[0].addEventListener(\"click\", function() {","    let searchValue = document.getElementById(\"txtBox\").value;","    let s_value = ucFirstAllWords(searchValue);","","    console.log(s_value);","    var http = new XMLHttpRequest();","","    http.onreadystatechange = function() {","      if (this.readyState == 4 && this.status == 200) {","        result.innerHTML = this.responseText;","      }","    };","","    http.open(\"GET\", \"superheroes.php?query=\" + s_value, true);","    http.send();","  });","};",""],"id":1}],[{"start":{"row":4,"column":0},"end":{"row":11,"column":3},"action":"remove","lines":["  function ucFirstAllWords(str) {","    var pieces = str.split(\" \");","    for (var i = 0; i < pieces.length; i++) {","      var j = pieces[i].charAt(0).toUpperCase();","      pieces[i] = j + pieces[i].substr(1);","    }","    return pieces.join(\" \");","  }"],"id":4},{"start":{"row":3,"column":0},"end":{"row":4,"column":0},"action":"remove","lines":["",""]}],[{"start":{"row":6,"column":52},"end":{"row":6,"column":53},"action":"remove","lines":["x"],"id":5},{"start":{"row":6,"column":51},"end":{"row":6,"column":52},"action":"remove","lines":["o"]},{"start":{"row":6,"column":50},"end":{"row":6,"column":51},"action":"remove","lines":["B"]},{"start":{"row":6,"column":49},"end":{"row":6,"column":50},"action":"remove","lines":["t"]},{"start":{"row":6,"column":48},"end":{"row":6,"column":49},"action":"remove","lines":["x"]}],[{"start":{"row":7,"column":4},"end":{"row":7,"column":47},"action":"remove","lines":["let s_value = ucFirstAllWords(searchValue);"],"id":6},{"start":{"row":7,"column":0},"end":{"row":7,"column":4},"action":"remove","lines":["    "]},{"start":{"row":6,"column":57},"end":{"row":7,"column":0},"action":"remove","lines":["",""]}],[{"start":{"row":6,"column":47},"end":{"row":6,"column":48},"action":"remove","lines":["t"],"id":7}],[{"start":{"row":1,"column":42},"end":{"row":1,"column":43},"action":"remove","lines":["e"],"id":8},{"start":{"row":1,"column":41},"end":{"row":1,"column":42},"action":"remove","lines":["m"]},{"start":{"row":1,"column":40},"end":{"row":1,"column":41},"action":"remove","lines":["a"]},{"start":{"row":1,"column":39},"end":{"row":1,"column":40},"action":"remove","lines":["N"]},{"start":{"row":1,"column":38},"end":{"row":1,"column":39},"action":"remove","lines":["s"]},{"start":{"row":1,"column":37},"end":{"row":1,"column":38},"action":"remove","lines":["s"]},{"start":{"row":1,"column":36},"end":{"row":1,"column":37},"action":"remove","lines":["a"]},{"start":{"row":1,"column":35},"end":{"row":1,"column":36},"action":"remove","lines":["l"]}],[{"start":{"row":1,"column":34},"end":{"row":1,"column":35},"action":"remove","lines":["C"],"id":9},{"start":{"row":1,"column":33},"end":{"row":1,"column":34},"action":"remove","lines":["y"]},{"start":{"row":1,"column":32},"end":{"row":1,"column":33},"action":"remove","lines":["B"]},{"start":{"row":1,"column":31},"end":{"row":1,"column":32},"action":"remove","lines":["s"]}],[{"start":{"row":1,"column":31},"end":{"row":1,"column":32},"action":"insert","lines":["B"],"id":10},{"start":{"row":1,"column":32},"end":{"row":1,"column":33},"action":"insert","lines":["Y"]}],[{"start":{"row":1,"column":32},"end":{"row":1,"column":33},"action":"remove","lines":["Y"],"id":11}],[{"start":{"row":1,"column":21},"end":{"row":1,"column":32},"action":"remove","lines":["getElementB"],"id":12},{"start":{"row":1,"column":21},"end":{"row":1,"column":35},"action":"insert","lines":["getElementById"]}],[{"start":{"row":1,"column":38},"end":{"row":1,"column":39},"action":"remove","lines":["t"],"id":13}],[{"start":{"row":1,"column":38},"end":{"row":1,"column":39},"action":"remove","lines":["n"],"id":14},{"start":{"row":1,"column":37},"end":{"row":1,"column":38},"action":"remove","lines":["b"]}],[{"start":{"row":1,"column":37},"end":{"row":1,"column":38},"action":"insert","lines":["l"],"id":15},{"start":{"row":1,"column":38},"end":{"row":1,"column":39},"action":"insert","lines":["o"]},{"start":{"row":1,"column":39},"end":{"row":1,"column":40},"action":"insert","lines":["o"]},{"start":{"row":1,"column":40},"end":{"row":1,"column":41},"action":"insert","lines":["k"]},{"start":{"row":1,"column":41},"end":{"row":1,"column":42},"action":"insert","lines":["u"]},{"start":{"row":1,"column":42},"end":{"row":1,"column":43},"action":"insert","lines":["p"]}],[{"start":{"row":6,"column":47},"end":{"row":6,"column":48},"action":"insert","lines":["c"],"id":16},{"start":{"row":6,"column":48},"end":{"row":6,"column":49},"action":"insert","lines":["o"]},{"start":{"row":6,"column":49},"end":{"row":6,"column":50},"action":"insert","lines":["u"]},{"start":{"row":6,"column":50},"end":{"row":6,"column":51},"action":"insert","lines":["n"]}],[{"start":{"row":6,"column":47},"end":{"row":6,"column":51},"action":"remove","lines":["coun"],"id":17},{"start":{"row":6,"column":47},"end":{"row":6,"column":54},"action":"insert","lines":["country"]}],[{"start":{"row":8,"column":1},"end":{"row":8,"column":25},"action":"remove","lines":["   console.log(s_value);"],"id":18},{"start":{"row":8,"column":0},"end":{"row":8,"column":1},"action":"remove","lines":[" "]},{"start":{"row":7,"column":0},"end":{"row":8,"column":0},"action":"remove","lines":["",""]}],[{"start":{"row":5,"column":7},"end":{"row":5,"column":8},"action":"remove","lines":["]"],"id":21},{"start":{"row":5,"column":6},"end":{"row":5,"column":7},"action":"remove","lines":["0"]},{"start":{"row":5,"column":5},"end":{"row":5,"column":6},"action":"remove","lines":["["]}],[{"start":{"row":5,"column":5},"end":{"row":5,"column":7},"action":"insert","lines":["[]"],"id":22}],[{"start":{"row":5,"column":6},"end":{"row":5,"column":7},"action":"insert","lines":["0"],"id":23}],[{"start":{"row":5,"column":7},"end":{"row":5,"column":9},"action":"insert","lines":["[]"],"id":24}],[{"start":{"row":5,"column":7},"end":{"row":5,"column":9},"action":"remove","lines":["[]"],"id":25}]]},"ace":{"folds":[],"scrolltop":0,"scrollleft":0,"selection":{"start":{"row":5,"column":7},"end":{"row":5,"column":7},"isBackwards":false},"options":{"guessTabSize":true,"useWrapMode":false,"wrapToView":true},"firstLineState":0},"timestamp":1573836171410}