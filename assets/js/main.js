var coll = document.getElementsByClassName("collapsible");
const btn = document.getElementById('button')
var i;

for (i = 0; i < coll.length; i++) {
    coll[i].addEventListener("click", function () {
        this.classList.toggle("active");
        var content = this.nextElementSibling;
        if (content.style.maxHeight) {
            content.style.maxHeight = null;
            btn.innerText = "Show video"
    } else {
        content.style.maxHeight = content.scrollHeight + "px";
        btn.innerText = "Hide video"
    }
  });
}
