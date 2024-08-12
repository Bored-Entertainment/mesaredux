fetch("/assets/js/json/error.json")
.then(res => res.json())
.then(json => {
  const quotedLine = `"${json[Math.floor(Math.random() * json.length)]}"`;
  document.getElementById("errortext").innerHTML = quotedLine;
})
.catch(error => {
  console.log(error);
});