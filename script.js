//Authur: Sam Ng

var c = document.getElementById("myCanvas");
var ctx = c.getContext("2d");
var index = 1;

document.getElementById("A3_OC").onclick = function () {
    isFault_A3 = 1
    draw_circuit()
}

document.getElementById("B3_OC").onclick = function () {
    isFault_B3 = 1
    draw_circuit()
}

document.getElementById("D_OC").onclick = function () {
    isFault_D = 1
    isFault_C = 1
    draw_circuit()
}

document.getElementById("A_side_LV_Fault").onclick = function () {
    isFault_A1 = 1
    isFault_A2 = 1
    isFault_C = 1
    draw_circuit()
}

document.getElementById("B_side_LV_Fault").onclick = function () {
    isFault_B1 = 1
    isFault_B2 = 1
    isFault_C = 1
    draw_circuit()
}

document.getElementById("A_side_REF_SBEF").onclick = function () {
    isFault_A1 = 1
    isFault_A2 = 1
    draw_circuit()
}

document.getElementById("B_side_REF_SBEF").onclick = function () {
    isFault_B1 = 1
    isFault_B2 = 1
    draw_circuit()
}

document.getElementById("A_side_Tx_Fault").onclick = function () {
    isOpen_A1 = 1
    draw_circuit()
}

document.getElementById("B_side_Tx_Fault").onclick = function () {
    isOpen_B1 = 1
    draw_circuit()
}

document.getElementById("A_side_HV_EPB").onclick = function () {
    isFault_A1 = 1
    draw_circuit()
}

document.getElementById("B_side_HV_EPB").onclick = function () {
    isFault_B1 = 1
    draw_circuit()
}

document.getElementById("A_side_LV_EPB").onclick = function () {
    isFault_A1 = 1
    isFault_C = 1
    draw_circuit()
}

document.getElementById("B_side_LV_EPB").onclick = function () {
    isFault_B1 = 1
    isFault_D = 1
    draw_circuit()
}

document.getElementById("A3_ON").onclick = function () {
    if (isOpen_C == 1 || isFault_C == 1) {
        isOpen_A3 = 0
    }
    draw_circuit()
}

document.getElementById("B3_ON").onclick = function () {
    if (isOpen_C == 1 || isFault_C == 1) {
        isOpen_B3 = 0
    }
    draw_circuit()
}

document.getElementById("Trip_C").onclick = function () {
    if (isOpen_A3 == 1 && isOpen_B3 == 1) {
        isOpen_C = 1
    }
    draw_circuit()
}

document.getElementById("A1_ON").onclick = function () {
    isOpen_A1 = 0
    draw_circuit()
}

document.getElementById("B1_ON").onclick = function () {
    isOpen_B1 = 0
    draw_circuit()
}

document.getElementById("A1_Fault").onclick = function () {
    isFault_A1 = 0
    draw_circuit()
}

document.getElementById("A2_Fault").onclick = function () {
    isFault_A2 = 0
    draw_circuit()
}

document.getElementById("A3_Fault").onclick = function () {

    isFault_A3 = 0
    draw_circuit()
}

document.getElementById("B1_Fault").onclick = function () {
    isFault_B1 = 0
    draw_circuit()
}

document.getElementById("B2_Fault").onclick = function () {
    isFault_B2 = 0
    draw_circuit()
}

document.getElementById("B3_Fault").onclick = function () {
    isFault_B3 = 0
    draw_circuit()
}

document.getElementById("C_Fault").onclick = function () {
    isFault_C = 0
    draw_circuit()
}

document.getElementById("D_Fault").onclick = function () {
    isFault_D = 0
    draw_circuit()
}

document.getElementById("A_Loss").onclick = function () {
    if (isLost_A == 0) {
        isLost_A = 1
        document.getElementById("A_Loss").style.backgroundColor = "grey"
    }
    else if (isLost_A == 1) {
        isLost_A = 0
        document.getElementById("A_Loss").style.backgroundColor = "white"
    }
    draw_circuit()
}

document.getElementById("B_Loss").onclick = function () {

    if (isLost_B == 0) {
        isLost_B = 1
        document.getElementById("B_Loss").style.backgroundColor = "grey"
    }
    else if (isLost_B == 1) {
        isLost_B = 0
        document.getElementById("B_Loss").style.backgroundColor = "white"
    }
    draw_circuit()
}

function update_button_status() {

    if (isOpen_A1 == 0) {
        document.getElementById("A1_ON").style.backgroundColor = "#ffff0080"
    } else {
        document.getElementById("A1_ON").style.backgroundColor = "transparent"
    }

    if (isOpen_A1 == 1) {
        document.getElementById("A1_OFF").style.backgroundColor = "#ffff0080"
    } else {
        document.getElementById("A1_OFF").style.backgroundColor = "transparent"
    }

    if (isOpen_A3 == 0) {
        document.getElementById("A3_ON").style.backgroundColor = "#ffff0080"
    } else {
        document.getElementById("A3_ON").style.backgroundColor = "transparent"
    }

    if (isOpen_A3 == 1) {
        document.getElementById("A3_OFF").style.backgroundColor = "#ffff0080"
    } else {
        document.getElementById("A3_OFF").style.backgroundColor = "transparent"
    }

    if (isOpen_B1 == 0) {
        document.getElementById("B1_ON").style.backgroundColor = "#ffff0080"
    } else {
        document.getElementById("B1_ON").style.backgroundColor = "transparent"
    }

    if (isOpen_B1 == 1) {
        document.getElementById("B1_OFF").style.backgroundColor = "#ffff0080"
    } else {
        document.getElementById("B1_OFF").style.backgroundColor = "transparent"
    }

    if (isOpen_B3 == 0) {
        document.getElementById("B3_ON").style.backgroundColor = "#ffff0080"
    } else {
        document.getElementById("B3_ON").style.backgroundColor = "transparent"
    }

    if (isOpen_B3 == 1) {
        document.getElementById("B3_OFF").style.backgroundColor = "#ffff0080"
    } else {
        document.getElementById("B3_OFF").style.backgroundColor = "transparent"
    }

    if (isOpen_D == 0) {
        document.getElementById("D_ON").style.backgroundColor = "#ffff0080"
    } else {
        document.getElementById("D_ON").style.backgroundColor = "transparent"
    }

    if (isOpen_D == 1) {
        document.getElementById("D_OFF").style.backgroundColor = "#ffff0080"
    } else {
        document.getElementById("D_OFF").style.backgroundColor = "transparent"
    }

    if (isFault_A1 == 1) {
        document.getElementById("A1_Fault").style.backgroundColor = "pink"
    } else {
        document.getElementById("A1_Fault").style.backgroundColor = "transparent"
    }

    if (isFault_A2 == 1) {
        document.getElementById("A2_Fault").style.backgroundColor = "pink"
    } else {
        document.getElementById("A2_Fault").style.backgroundColor = "transparent"
    }

    if (isFault_A3 == 1) {
        document.getElementById("A3_Fault").style.backgroundColor = "pink"
    } else {
        document.getElementById("A3_Fault").style.backgroundColor = "transparent"
    }

    if (isFault_B1 == 1) {
        document.getElementById("B1_Fault").style.backgroundColor = "pink"
    } else {
        document.getElementById("B1_Fault").style.backgroundColor = "transparent"
    }

    if (isFault_B2 == 1) {
        document.getElementById("B2_Fault").style.backgroundColor = "pink"
    } else {
        document.getElementById("B2_Fault").style.backgroundColor = "transparent"
    }

    if (isFault_B3 == 1) {
        document.getElementById("B3_Fault").style.backgroundColor = "pink"
    } else {
        document.getElementById("B3_Fault").style.backgroundColor = "transparent"
    }

    if (isFault_C == 1) {
        document.getElementById("C_Fault").style.backgroundColor = "pink"
    } else {
        document.getElementById("C_Fault").style.backgroundColor = "transparent"
    }

    if (isFault_D == 1) {
        document.getElementById("D_Fault").style.backgroundColor = "pink"
    } else {
        document.getElementById("D_Fault").style.backgroundColor = "transparent"
    }
}

function draw_cable_to_A1(color = 0) {
    if (color == 1) {
        ctx.strokeStyle = "red";
    } else if (color == 2) {
        ctx.strokeStyle = "green";
    }

    ctx.beginPath();
    ctx.moveTo(200, 5);
    ctx.lineTo(200, 48);
    ctx.stroke();
    ctx.strokeStyle = "black";
}

function draw_A1(color = 0, isOpen = 0, isFault_A1 = 0) {
    if (color == 1) {
        ctx.strokeStyle = "red";
    } else if (color == 2) {
        ctx.strokeStyle = "green";
    }

    //A1
    ctx.beginPath();
    ctx.moveTo(180, 55);
    ctx.lineTo(220, 95);
    ctx.stroke();

    //A1
    ctx.beginPath();
    ctx.moveTo(220, 55);
    ctx.lineTo(180, 95);
    ctx.stroke();

    //A1 (tag)
    ctx.font = "20px Arial";
    ctx.fillText("A1", 230, 60);
    ctx.stroke();

    if (isOpen == 1) {
        //A1 (Open)
        ctx.beginPath();
        ctx.arc(200, 75, 28, 0, 2 * Math.PI);
        ctx.stroke();
    }

    if (isFault_A1 == 1) {
        //A1 (tag)
        ctx.font = "20px Arial";
        ctx.fillStyle = "red";
        ctx.fillText("A1 (Fault)", 230, 60);
        ctx.fillStyle = "black";
        ctx.stroke();
    } else {
        //A1 (tag)
        ctx.font = "20px Arial";
        ctx.fillText("A1", 230, 60);
        ctx.stroke();
    }

    ctx.strokeStyle = "black";
}

function draw_Tx_S01(color = 0) {
    if (color == 1) {
        ctx.strokeStyle = "red";
    } else if (color == 2) {
        ctx.strokeStyle = "green";
    }

    //A1 to S01
    ctx.beginPath();
    ctx.moveTo(200, 102);
    ctx.lineTo(200, 135);
    ctx.stroke();

    //S01
    ctx.beginPath();
    ctx.arc(200, 165, 30, 0, 2 * Math.PI);
    ctx.stroke();

    //S01
    ctx.beginPath();
    ctx.arc(200, 200, 30, 0, 2 * Math.PI);
    ctx.stroke();

    //S01 to A2
    ctx.beginPath();
    ctx.moveTo(200, 230);
    ctx.lineTo(200, 268);
    ctx.stroke();

    ctx.strokeStyle = "black";

}

function draw_A2(color = 0, isOpen = 0) {
    if (color == 1) {
        ctx.strokeStyle = "red";
    } else if (color == 2) {
        ctx.strokeStyle = "green";
    }

    //A2
    ctx.beginPath();
    ctx.moveTo(180, 275);
    ctx.lineTo(220, 315);
    ctx.stroke();

    //A2
    ctx.beginPath();
    ctx.moveTo(220, 275);
    ctx.lineTo(180, 315);
    ctx.stroke();

    //A2 (tag)
    ctx.font = "20px Arial";
    ctx.fillText("A2", 230, 285);
    ctx.stroke();

    if (isOpen == 1) {
        //A1 (Open)
        ctx.beginPath();
        ctx.arc(200, 295, 28, 0, 2 * Math.PI);
        ctx.stroke();
    }

    if (isFault_A2 == 1) {
        //A2 (tag)
        ctx.font = "20px Arial";
        ctx.fillStyle = "red";
        ctx.fillText("A2 (Fault)", 230, 285);
        ctx.fillStyle = "black";
        ctx.stroke();
    } else {
        ctx.font = "20px Arial";
        ctx.fillText("A2", 230, 285);
        ctx.stroke();
    }

    ctx.strokeStyle = "black";
}

function draw_busbar_A(color = 0) {
    if (color == 1) {
        ctx.strokeStyle = "red";
    } else if (color == 2) {
        ctx.strokeStyle = "green";
    }

    //A2 to Busbar A
    ctx.beginPath();
    ctx.moveTo(200, 322);
    ctx.lineTo(200, 360);
    ctx.stroke();

    //Busbar A
    ctx.beginPath();
    ctx.moveTo(127, 360);
    ctx.lineTo(300, 360);
    ctx.stroke();

    //Busbar A To D
    ctx.beginPath();
    ctx.moveTo(300, 360);
    ctx.lineTo(300, 327);
    ctx.stroke();

    ctx.strokeStyle = "black";

}

function draw_A3(color = 0, isOpen = 0) {
    if (color == 1) {
        ctx.strokeStyle = "red";
    } else if (color == 2) {
        ctx.strokeStyle = "green";
    }

    //A3
    ctx.beginPath();
    ctx.moveTo(80, 340);
    ctx.lineTo(120, 380);
    ctx.stroke();

    //A3
    ctx.beginPath();
    ctx.moveTo(120, 340);
    ctx.lineTo(80, 380);
    ctx.stroke();

    //A3 (tag)
    ctx.font = "20px Arial";
    ctx.fillText("A3", 128, 340);
    ctx.stroke();

    if (isOpen == 1) {
        //A1 (Open)
        ctx.beginPath();
        ctx.arc(100, 360, 28, 0, 2 * Math.PI);
        ctx.stroke();
    }

    if (isFault_A3 == 1) {
        ctx.font = "20px Arial";
        ctx.fillStyle = "red";
        ctx.fillText("A3 (Fault)", 128, 340);
        ctx.fillStyle = "black";
        ctx.stroke();
    } else {
        ctx.font = "20px Arial";
        ctx.fillText("A3", 128, 340);
        ctx.stroke();
    }

    ctx.strokeStyle = "black";
}

function draw_busbar_A_NE(color = 0) {
    if (color == 1) {
        ctx.strokeStyle = "red";
    } else if (color == 2) {
        ctx.strokeStyle = "green";
    }

    ctx.beginPath();
    ctx.moveTo(20, 360);
    ctx.lineTo(73, 360);
    ctx.stroke();

    ctx.strokeStyle = "black";

}

function draw_cable_to_B1(color = 0) {
    if (color == 1) {
        ctx.strokeStyle = "red";
    } else if (color == 2) {
        ctx.strokeStyle = "green";
    }

    ctx.beginPath();
    ctx.moveTo(600, 5);
    ctx.lineTo(600, 48);
    ctx.stroke();
    ctx.strokeStyle = "black";
}

function draw_B1(color = 0, isOpen = 0) {
    if (color == 1) {
        ctx.strokeStyle = "red";
    } else if (color == 2) {
        ctx.strokeStyle = "green";
    }

    ctx.beginPath();
    ctx.moveTo(580, 55);
    ctx.lineTo(620, 95);
    ctx.stroke();

    //B1
    ctx.beginPath();
    ctx.moveTo(620, 55);
    ctx.lineTo(580, 95);
    ctx.stroke();

    if (isOpen == 1) {
        //B1 (Open)
        ctx.beginPath();
        ctx.arc(600, 75, 28, 0, 2 * Math.PI);
        ctx.stroke();
    }

    if (isFault_B1 == 1) {
        //B1 (tag)
        ctx.font = "20px Arial";
        ctx.fillStyle = "red"
        ctx.fillText("B1 (Fault)", 630, 60);
        ctx.fillStyle = "black"
        ctx.stroke();
    } else {
        //B1 (tag)
        ctx.font = "20px Arial";
        ctx.fillText("B1", 630, 60);
        ctx.stroke();
    }

    ctx.strokeStyle = "black";
}

function draw_Tx_S02(color = 0) {
    if (color == 1) {
        ctx.strokeStyle = "red";
    } else if (color == 2) {
        ctx.strokeStyle = "green";
    }

    //B1 to S02
    ctx.beginPath();
    ctx.moveTo(600, 102);
    ctx.lineTo(600, 135);
    ctx.stroke();

    //S02
    ctx.beginPath();
    ctx.arc(600, 165, 30, 0, 2 * Math.PI);
    ctx.stroke();

    //S02
    ctx.beginPath();
    ctx.arc(600, 200, 30, 0, 2 * Math.PI);
    ctx.stroke();

    //Cable to B2
    ctx.beginPath();
    ctx.moveTo(600, 230);
    ctx.lineTo(600, 268);
    ctx.stroke();

    ctx.strokeStyle = "black";

}

function draw_B2(color = 0, isOpen = 0) {
    if (color == 1) {
        ctx.strokeStyle = "red";
    } else if (color == 2) {
        ctx.strokeStyle = "green";
    }

    ctx.beginPath();
    ctx.moveTo(580, 275);
    ctx.lineTo(620, 315);
    ctx.stroke();

    //B2
    ctx.beginPath();
    ctx.moveTo(620, 275);
    ctx.lineTo(580, 315);
    ctx.stroke();

    if (isOpen == 1) {
        //B2 (Open)
        ctx.beginPath();
        ctx.arc(600, 295, 28, 0, 2 * Math.PI);
        ctx.stroke();
    }

    if (isFault_B2 == 1) {
        //B2 (tag)
        ctx.font = "20px Arial";
        ctx.fillStyle = "red"
        ctx.fillText("B2 (Fault)", 630, 285);
        ctx.fillStyle = "black"
        ctx.stroke();
    } else {
        //B2 (tag)
        ctx.font = "20px Arial";
        ctx.fillText("B2", 630, 285);
        ctx.stroke();
    }

    ctx.strokeStyle = "black";
}

function draw_busbar_B(color = 0) {
    if (color == 1) {
        ctx.strokeStyle = "red";
    } else if (color == 2) {
        ctx.strokeStyle = "green";
    }

    //B2 to Busbar B
    ctx.beginPath();
    ctx.moveTo(600, 322);
    ctx.lineTo(600, 360);
    ctx.stroke();

    //Busbar B
    ctx.beginPath();
    ctx.moveTo(500, 360);
    ctx.lineTo(673, 360);
    ctx.stroke();

    //Busbar B To C
    ctx.beginPath();
    ctx.moveTo(500, 360);
    ctx.lineTo(500, 327);
    ctx.stroke();

    ctx.strokeStyle = "black";

}

function draw_B3(color = 0, isOpen = 0) {
    if (color == 1) {
        ctx.strokeStyle = "red";
    } else if (color == 2) {
        ctx.strokeStyle = "green";
    }

    ctx.beginPath();
    ctx.moveTo(680, 340);
    ctx.lineTo(720, 380);
    ctx.stroke();

    //B3
    ctx.beginPath();
    ctx.moveTo(720, 340);
    ctx.lineTo(680, 380);
    ctx.stroke();

    if (isOpen == 1) {
        //B3 (Open)
        ctx.beginPath();
        ctx.arc(700, 360, 28, 0, 2 * Math.PI);
        ctx.stroke();
    }

    if (isFault_B3 == 1) {
        //B3 (tag)
        ctx.font = "20px Arial";
        ctx.fillStyle = "red"
        ctx.fillText("B3 (Fault)", 730, 340);
        ctx.fillStyle = "black"
        ctx.stroke();
    } else {
        //B3 (tag)
        ctx.font = "20px Arial";
        ctx.fillText("B3", 730, 340);
        ctx.stroke();
    }

    ctx.strokeStyle = "black";
}

function draw_busbar_B_NE(color = 0) {
    if (color == 1) {
        ctx.strokeStyle = "red";
    } else if (color == 2) {
        ctx.strokeStyle = "green";
    }

    ctx.beginPath();
    ctx.moveTo(727, 360);
    ctx.lineTo(780, 360);
    ctx.stroke();

    ctx.strokeStyle = "black";

}

function draw_C(color = 0, isOpen = 0) {
    if (color == 1) {
        ctx.strokeStyle = "red";
    } else if (color == 2) {
        ctx.strokeStyle = "green";
    }

    ctx.beginPath();
    ctx.moveTo(480, 280);
    ctx.lineTo(520, 320);
    ctx.stroke();

    //C
    ctx.beginPath();
    ctx.moveTo(520, 280);
    ctx.lineTo(480, 320);
    ctx.stroke();



    if (isOpen == 1) {
        //C (Open)
        ctx.beginPath();
        ctx.arc(500, 300, 28, 0, 2 * Math.PI);
        ctx.stroke();
    }

    if (isFault_C == 1) {
        ctx.font = "20px Arial";
        ctx.fillStyle = "red"
        ctx.fillText("C (Fault)", 510, 270);
        ctx.fillStyle = "black"
        ctx.stroke();
    } else {
        //C (tag)
        ctx.font = "20px Arial";
        ctx.fillText("C", 510, 270);
        ctx.stroke();
    }

    ctx.strokeStyle = "black";
}

function draw_D(color = 0, isOpen = 0) {
    if (color == 1) {
        ctx.strokeStyle = "red";
    } else if (color == 2) {
        ctx.strokeStyle = "green";
    }

    //D
    ctx.beginPath();
    ctx.moveTo(280, 280);
    ctx.lineTo(320, 320);
    ctx.stroke();

    //D
    ctx.beginPath();
    ctx.moveTo(320, 280);
    ctx.lineTo(280, 320);
    ctx.stroke();

    if (isOpen == 1) {
        //D (Open)
        ctx.beginPath();
        ctx.arc(300, 300, 28, 0, 2 * Math.PI);
        ctx.stroke();
    }

    if (isFault_D == 1) {
        //C (tag)
        ctx.font = "20px Arial";
        ctx.fillStyle = "red"
        ctx.fillText("D (Fault)", 315, 270);
        ctx.fillStyle = "black"
        ctx.stroke();
    } else {
        //C (tag)
        ctx.font = "20px Arial";
        ctx.fillText("D", 315, 270);
        ctx.stroke();
    }

    ctx.strokeStyle = "black";
}

function draw_Interconnector(color = 0) {
    if (color == 1) {
        ctx.strokeStyle = "red";
    } else if (color == 2) {
        ctx.strokeStyle = "green";
    }

    //C to interconnector
    ctx.beginPath();
    ctx.moveTo(500, 273);
    ctx.lineTo(500, 240);
    ctx.stroke();

    //D To Interconnector
    ctx.beginPath();
    ctx.moveTo(300, 273);
    ctx.lineTo(300, 240);
    ctx.stroke();

    //Interconnector
    ctx.beginPath();
    ctx.moveTo(300, 240);
    ctx.lineTo(500, 240);
    ctx.stroke();

    ctx.strokeStyle = "black";

}

// CB Status
isLost_A = 0
isLost_B = 0
isOpen_A1 = 0
isOpen_A2 = 0
isOpen_A3 = 0
isOpen_B1 = 0
isOpen_B2 = 0
isOpen_B3 = 0
isOpen_C = 1
isOpen_D = 0

// CB Lockout Status
isFault_A1 = 0
isFault_A2 = 0
isFault_A3 = 0
isFault_B1 = 0
isFault_B2 = 0
isFault_B3 = 0
isFault_C = 0
isFault_D = 0

//Network Color
color_cable_to_A1 = 0
color_A1 = 0
color_Tx_S01 = 0
color_A2 = 0
color_busbar_A = 0
color_A3 = 0
color_busbar_A_NE = 0
color_cable_to_B1 = 0
color_B1 = 0
color_Tx_S02 = 0
color_B2 = 0
color_busbar_B = 0
color_B3 = 0
color_busbar_B_NE = 0
color_C = 0
color_D = 0
color_interconnecter = 0

function reset_CB_Status() {
    isLost_A = 0
    isLost_B = 0
    color_cable_to_A1 = 0
    color_A1 = 0
    color_Tx_S01 = 0
    color_A2 = 0
    color_busbar_A = 0
    color_A3 = 0
    color_busbar_A_NE = 0
    color_cable_to_B1 = 0
    color_B1 = 0
    color_Tx_S02 = 0
    color_B2 = 0
    color_busbar_B = 0
    color_B3 = 0
    color_busbar_B_NE = 0
    color_C = 0
    color_D = 0
    color_interconnecter = 0
}

buffer_isOpen_A1 = 0
buffer_isOpen_A2 = 0
buffer_isOpen_B1 = 0
buffer_isOpen_B2 = 0
buffer_isA2B2Closed = 0
function CB_logic() {
    //Side A
    function open_A2() {
        isOpen_A2 = 1
        draw_circuit()
    }

    if (isLost_A == 0) {
        color_cable_to_A1 = 1
    } else {
        color_cable_to_A1 = 0
        setTimeout(open_A2, 1000)
    }

    //Side B
    function open_B2() {
        isOpen_B2 = 1
        draw_circuit()
    }

    if (isLost_B == 0) {
        color_cable_to_B1 = 2
    } else {
        color_cable_to_B1 = 0
        setTimeout(open_B2, 1000)
    }

    if (isFault_A1 == 1) isOpen_A1 = 1
    if (isFault_A2 == 1) isOpen_A2 = 1
    if (isFault_A3 == 1) isOpen_A3 = 1
    if (isFault_B1 == 1) isOpen_B1 = 1
    if (isFault_B2 == 1) isOpen_B2 = 1
    if (isFault_B3 == 1) isOpen_B3 = 1
    if (isFault_C == 1) isOpen_C = 1
    if (isFault_D == 1) isOpen_D = 1

    //Intertripping
    if ((isOpen_A1 == 1 && buffer_isOpen_A1 == 0) || (isOpen_A2 == 1 && buffer_isOpen_A2 == 0)) {
        isOpen_A1 = 1
        isOpen_A2 = 1
    }
    if ((isOpen_B1 == 1 && buffer_isOpen_B1 == 0) || (isOpen_B2 == 1 && buffer_isOpen_B2 == 0)) {
        isOpen_B1 = 1
        isOpen_B2 = 1
    }

    buffer_isOpen_A1 = isOpen_A1
    buffer_isOpen_B1 = isOpen_B1
    buffer_isOpen_A2 = isOpen_A2
    buffer_isOpen_B2 = isOpen_B2

    //Close A2/B2
    if (isOpen_C == 1) {
        if (isOpen_A1 == 0 && isLost_A == 0) {
            isOpen_A2 = 0
        }
        if (isOpen_B1 == 0 && isLost_B == 0) {
            isOpen_B2 = 0
        }
    }

    //Open A3/B3
    if ((buffer_isA2B2Closed == 0 && (isOpen_A2 == 1 || isOpen_B2 == 1)) && isFault_C == 0 && isFault_D == 0) {
        isOpen_A3 = 1
        isOpen_B3 = 1
    }
    buffer_isA2B2Closed = Math.max(isOpen_A2, isOpen_B2)

    //Close C
    if ((isOpen_A2 == 1 || isOpen_B2 == 1) && isFault_C == 0 && isOpen_A3 == 1 && isOpen_B3 == 1) {
        isOpen_C = 0
    }

    //Close A1 color change
    if (isOpen_A1 == 0 && isLost_A == 0) {
        color_A1 = color_cable_to_A1
        color_Tx_S01 = color_A1
    } else {
        color_A1 = 0
        color_Tx_S01 = 0
    }

    //Condition to close A2
    if (isOpen_A2 == 0 && isOpen_A1 == 0 && isLost_A == 0) {
        color_A2 = color_Tx_S01
        color_busbar_A = color_A2
    } else {
        color_A2 = 0
        color_busbar_A = 0
    }

    //Condition to close A3
    if (isOpen_A3 == 0 && isOpen_A2 == 0 && isOpen_A1 == 0 && isLost_A == 0) {
        color_A3 = color_busbar_A
        color_busbar_A_NE = color_busbar_A
    } else {
        color_A3 = 0
        color_busbar_A_NE = 0
    }

    //Condition to close B1
    if (isOpen_B1 == 0 && isLost_B == 0) {
        color_B1 = color_cable_to_B1
        color_Tx_S02 = color_B1
    } else {
        color_B1 = 0
        color_Tx_S02 = 0
    }

    //Condition to close B2
    if (isOpen_B2 == 0 && isOpen_B1 == 0 && isLost_B == 0) {
        color_B2 = color_Tx_S02
        color_busbar_B = color_B2
    } else {
        color_B2 = 0
        color_busbar_B = 0
    }

    //Condition to close B3
    if (isOpen_B3 == 0 && isOpen_B2 == 0 && isOpen_B1 == 0 && isLost_B == 0) {
        color_B3 = color_busbar_B
        color_busbar_B_NE = color_busbar_B
    } else {
        color_B3 = 0
        color_busbar_B_NE = 0
    }

    //color of C
    if (isOpen_C == 0) {
        color_C = Math.max(color_A2, color_B2)
        color_busbar_A = color_C
        color_busbar_B = color_C
    } else {
        color_C = 0
        color_busbar_A = color_A2
        color_busbar_B = color_B2
        if (isOpen_D == 0) color_D = color_busbar_A
    }

    if (isOpen_D == 0) {
        color_D = Math.max(color_busbar_A, color_C)
    } else {
        color_D = 0
        color_busbar_A = color_A2
        color_busbar_B = color_B2
        if (isOpen_C == 0) color_C = color_busbar_B
    }

    color_interconnecter = Math.max(color_C, color_D)

}

function draw_circuit() {

    ctx.clearRect(0, 0, 820, 400)

    CB_logic()
    update_button_status()

    //A Side
    draw_cable_to_A1(color_cable_to_A1)
    draw_A1(color_A1, isOpen_A1, isFault_A1)
    draw_Tx_S01(color_Tx_S01)
    draw_A2(color_A2, isOpen_A2)
    draw_busbar_A(color_busbar_A)
    draw_A3(color_A3, isOpen_A3)
    draw_busbar_A_NE(color_busbar_A_NE)

    //B Side
    draw_cable_to_B1(color_cable_to_B1)
    draw_B1(color_B1, isOpen_B1)
    draw_Tx_S02(color_Tx_S02)
    draw_B2(color_B2, isOpen_B2)
    draw_busbar_B(color_busbar_B)
    draw_B3(color_B3, isOpen_B3)
    draw_busbar_B_NE(color_busbar_B_NE)

    //Interconnector
    draw_C(color_C, isOpen_C)
    draw_D(color_D, isOpen_D)
    draw_Interconnector(color_interconnecter)
}

draw_circuit()
