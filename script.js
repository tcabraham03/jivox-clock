var offset, tzoffset = 0.0;
var clock_name="";
var parentElem = document.body;

function clock(){
    //calculate angle
    var d, h, m, s;
    d = new Date;

    fingtz=parseFloat(tzoffset);
    console.log(fingtz);
    if(fingtz!=5.5) {
        h = (30 * ((d.getUTCHours() + fingtz % 12) + d.getUTCMinutes() / 60));
        m = (6 * d.getUTCMinutes());
        s = 6 * d.getUTCSeconds();
    }
    else {
        h = (30 * ((d.getUTCHours() + fingtz % 12) + d.getUTCMinutes() / 60));
        m = (6 * d.getUTCMinutes()+30);
        s = 6 * d.getUTCSeconds();
    }




    //move hands
    setAttr('h-hand', h);
    setAttr('m-hand', m);
    setAttr('s-hand', s);
    setAttr('s-tail', s+180);


    console.log(fingtz);
    //display time
    h = d.getUTCHours()+(Math.floor(tzoffset));

    m = d.getUTCMinutes();

    s = d.getUTCSeconds();

    if(h >= 12){
        setText('suffix', 'PM');
    }else{
        setText('suffix', 'AM');
    }

    if(h != 12){
        h %= 12;
    }

    setText('sec', s);
    setText('min', m);
    setText('hr', h);

    //call every second
    setTimeout(clock, 1000);

};

function newClock() {
    document.getElementsByClassName('analog-clock');
    var div = document.createElement('div');
    div.className = clock_name;
    div.innerHTML = function(){
        this.innerHTML = document.getElementsByClassName('analog-clock').innerHTML;
        return false;
    };
    parentElem.appendChild(div);
}

function setAttr(id,val){
    var v = 'rotate(' + val + ', 70, 70)';
    document.getElementById(id).setAttribute('transform', v);
};

function setText(id,val){
    if(val < 10){
        val = '0' + val;
    }
    document.getElementById(id).innerHTML = val;
};

window.onload=clock;

$(document).ready(function() {
    $('select').material_select();
});