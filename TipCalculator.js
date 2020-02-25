debugger

$(document).ready(function(){
    var billAmt = parseFloat($(".bill").val());
    var tip = parseFloat($(".percent").val() / 100);
    var numPeople = parseInt($(".peopleNum").val());
    var total = (tip * billAmt) + billAmt;
    var totalPerPerson = total / numPeople;
    var tipPerPerson = (tip * billAmt) / numPeople;
    $(".bill").keyup(function() { 
       calculate();
    });
    $(".percent").keyup(function() { 
        calculate(); 
    });
    $(".peopleNum").keyup(function() { 
        calculate();
    });

    function calculate() {
       billAmt = parseFloat($(".bill").val());
       tip = parseFloat($(".percent").val() / 100);
       numPeople = parseInt($(".peopleNum").val());
       total = (tip * billAmt) + billAmt;
       totalPerPerson = total / numPeople;
       tipPerPerson = (tip * billAmt) / numPeople;
       $("h3").html("$" + Math.round(total * 100) / 100); 
       $("h4").html("$" + Math.round(totalPerPerson * 100) / 100);
       $("#tipPerPerson").html("$" + Math.round(tipPerPerson * 100) / 100);
    }
});