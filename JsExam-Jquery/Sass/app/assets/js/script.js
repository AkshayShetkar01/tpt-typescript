$(document).ready(function () {
    
    const displayBtn = $(".container-displayTime-btn");

    displayBtn.prop("disabled", true);

    let minuteInterval = math.range(0, 60, 15, false);
    let hourInterval24 = math.range(0, 24, 1, false);
    let hourInterval1 = math.range(0, 12, 1, true);
    let hourInterval2 = math.range(1, 12, 1, false);
    let hourInterval12 = [...hourInterval1._data, ...hourInterval2._data];

    let minutuesArr = Array.from(minuteInterval._data, (x) => x == 0 ? '00' : `${x}`);
    let hoursArr = Array.from(hourInterval24._data, (x) => x < 10 ? `0${x}` : `${x}`);
    let hoursArr12 = Array.from(hourInterval12, (x) => x < 10 ? `0${x}` : `${x}`);

    $('.container-themeChange-btn').click(function() {
        $(".container").toggleClass("dark");
    } )

    $('.container-controls-load').click(function() {
        validateLoad();
        if ($('#twentyFourHours').prop("checked") == true) {
            getDataFor24();
        } else if ($('#twelveHours').prop("checked") == true) {
            getDataFor12();
        }

        displayBtn.prop("disabled", false);
        displayBtn.css("border", "#000 1px solid");
    });

    $(".container-controls-clear").click(function() {
        let elements = $("[name='timeFormat']");
        
        for (i = 0; i < elements.length; i++)
            elements[i].checked = false;
    
        $("#start").html(`<option value="">Please Select</option>`);
        $("#end").html(`<option value="">Please Select</option>`);
        $('#msg').html("");
        displayBtn.disabled = true;
    })

    $(".container-displayTime-btn").click(function() {
        let result = validateSelect();
        let startVal = $("#start").val();
        let endVal = $("#end").val();
    
        if (result) {
            if ($("#twelveHours").is(":checked")) {
                $("#msg").html(`You selected start time as ${startVal.substring(0, 2)} hours and ${startVal.substring(5, 7)} minutes ${startVal.substring(8, 10)} and end time as ${endVal.substring(0, 2)} hours and ${endVal.substring(5, 7)} minutes ${endVal.substring(8, 10)}`);
            } else if ($("#twentyFourHours").is(":checked")) {
                $("#msg").html(`You selected start time as ${startVal.substring(0, 2)} hours and ${startVal.substring(5, 7)} minutes and end time as ${endVal.substring(0, 2)} hours and ${endVal.substring(5, 7)} minutes`);
            }
        } else {
            $("#msg").html(`Please select dropdown`);
        }
    });

    function validateSelect() {
        if ($("#startSelector").val() == "" || $("#endSelector").val() == "") {
            return false;
        } else {
            return true;
        }
    };

    function validateLoad() {
        if (($('#twelveHours').prop('checked') == false) && ($('#twentyFourHours').prop('checked') == false)) {
            $('#msg').html(`Please select Time Format`);
            return false;
        } else {
            $('#msg').html(``);
            return true;
        }
    };

    function getDataFor24() {
        hoursArr.forEach((hr) => {
            minutuesArr.forEach((min) => {
                var option1 = $("<option>");
                option1.text(`${hr} : ${min}`) ;
                option1.val(`${hr} : ${min}`)  ;
                $("#start").append(option1);

                option2 = $("<option>");
                option2.text(`${hr} : ${min}`);
                option2.val(`${hr} : ${min}`) ;
                $("#end").append(option2);
            })
        })
    }

    function getDataFor12() {
        for (i = 0; i < hoursArr.length; i++) {
            for (j = 0; j < minutuesArr.length; j++) {
                if (i < 12) {
                    $("#start").append(`<option val = ${hoursArr12[i]} : ${minutuesArr[j]} AM>${hoursArr12[i]} : ${minutuesArr[j]} AM</option>`);
                    $("#end").append(`<option val = ${hoursArr12[i]} : ${minutuesArr[j]} AM>${hoursArr12[i]} : ${minutuesArr[j]} AM</option>`);
                } else if (i >= 12) {
                    $("#start").append(`<option val = ${hoursArr12[i]} : ${minutuesArr[j]} PM>${hoursArr12[i]} : ${minutuesArr[j]} PM</option>`);
                    $("#end").append(`<option val = ${hoursArr12[i]} : ${minutuesArr[j]} PM>${hoursArr12[i]} : ${minutuesArr[j]} PM</option>`);
                }
            }
        }
    }

})