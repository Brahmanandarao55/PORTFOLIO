var tablinks = document.getElementsByClassName("tab-links");
var tabcontents = document.getElementsByClassName("table-content");

function opentab(tabname){
    
    for(tablink of tablinks){
        tablink.classList.remove("active-link");
    }
   
    for(tabcontent of tabcontents){
        tabcontent.classList.remove("active-tab");

    }

    event.currentTarget.classList.add("active-link");
    document.getElementById(tabname).classList.add("active-tab");




}
  const scriptURL = 'https://script.google.com/macros/s/AKfycbyBPeHWYh-3m4oe3WwM5Hsr22ADlYwOE5KnqM9FTQ8oGmdefp8my0LH5MidfR4kfy8Z/exec'
  const form = document.forms['submit-to-google-sheet']
  const msg=document.getElementById("msg")

  form.addEventListener('submit', e => {
    e.preventDefault()
    fetch(scriptURL, { method: 'POST', body: new FormData(form)})
      .then(response => {
        msg.innerHTML="* Your Message Sent Succesfully *"
        setTimeout(function(){
            msg.innerHTML=""
        },5000)
        form.reset()
      })
      .catch(error => console.error('Error!', error.message))
  })
