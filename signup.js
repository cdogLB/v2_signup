var formSubmitted = false;
var currentTab = 0;

document.addEventListener("DOMContentLoaded", function(event) {
	fixStepIndicator(currentTab);
});

function getForm()
{
	return document.main_form;
}

$(document).ready(function(event) {
   $("#company_name").keypress(function() {
	   //Interrupt the execution thread to allow input to update
	   setTimeout(function() {
		   var dInput = $('input:text[name=company_name]').val();
		   $('input:text[name=website_url]').val(""+dInput.replace(/[ '-]/g, ''));
	   }, 0);
   });
});
  
function validateStep1()
{
	$("#main-form").removeClass("was-validated");
	
	//fixStepIndicator(1);
	if ($("#company_name").val() == "" || $("#website_url").val() == "" || $("#customer_name").val() == "" || $("#email").val() == "" ||
		$("#timezone_id").val() == "" || $("#campaign_country").val() == "" || $("#campaign_currency").val() == "")
	{
		$("#main-form").addClass("was-validated");
		return false;
	}
	else
	{
		fixStepIndicator(1);
	}
}

function fixStepIndicator(n)
{
	var i, x = document.getElementsByClassName("form-steps");
	
	for (i = 0; i < x.length; i++)
	{
		x[i].className = x[i].className.replace(" active", "");
	}
	
	x[n].className += " active";
}

function passChanged(e, field)
{
	var code = e.keyCode || e.charCode

	if (code != 9)
	{
		chkPass(field.value);
	}
}

function pwStrengthChanged(percent, complexity)
{
	var complexText, complexTextColor;
	
	if (percent >= 60)
	{
		complexText = 'Strong';
		complexTextColor = '#24DC2C';
	}
	else if (percent >= 40)
	{
		complexText = 'Could be stronger';
		complexTextColor = '#F7BB23';
	}
	else
	{
		complexText = 'Too weak';
		complexTextColor = '#FF5E5E';
	}
	
	var complexTextSect = document.getElementById('complexText');
	var complexTextBox = document.getElementById('complexTextBox');
	
	complexTextSect.innerHTML = complexText;
	complexTextSect.style.color = complexTextColor;
	complexTextBox.style.background = complexTextColor;

}

