fetch("/assets/js/json/lines.json")
  .then(res => res.json())
  .then(json => {
    const quotedLine = `"${json[Math.floor(Math.random() * json.length)]}"`;
    document.getElementById("line").innerHTML = quotedLine;
  })
  .catch(error => {
    console.log(error);
  });
