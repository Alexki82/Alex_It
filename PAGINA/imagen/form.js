var inputs = document.getElementsByClassName('form_input')
for (var i = 0; i < inputs.length; i++) {
    inputs [i].addEventListener('keyup', function(){
        if(this.Value.length>=1){
            this.nextElementSibling.classList.add('fija')
        } else {
            this.nextElementSibling.classList.remove('fija')
        }
    });
}

	

function alerta()
    {
    alert("Mi primer alert");
    var mensaje;
    for
   
	document.getElementById("ejemplo").innerHTML = mensaje;
}