function login() {
	var done= 0
	var user = document.getElementById('user');
	var contra = document.getElementById('contra');

	if (user=='Sara' || contra=='123') {
  window.location="C:\Users\ASUS\Desktop\RUBRICA\LaLindosa/Lindosa.html";
	}
		if (user=='Maria' || contra=='123') {
  window.location="C:\Users\ASUS\Desktop\RUBRICA\LaLindosa/Lindosa.html";
	}
		if (user=='Alexa' || contra=='123') {
  window.location="C:\Users\ASUS\Desktop\RUBRICA\LaLindosa/Lindosa.html";
	}
		if (user=='Lore' || contra=='123') {
  window.location="C:\Users\ASUS\Desktop\RUBRICA\LaLindosa/Lindosa.html";
	}
	/*if (user=="" && contra=="") {
		window.alert("Si no está registrado debe crear una cuenta");
	}*/
		if (user!='Sara' || user!='Maria' || user!='Alexa' || user!='Lore') {
		window.alert("Si no está registrado debe crear una cuenta");
}
}
document.oncontextmenu = function(){return false}