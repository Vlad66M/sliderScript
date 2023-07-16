document.getElementById('slider').addEventListener('change', () => {
    updateValues();
});

function updateValues(){
    let value = document.getElementById('slider').value;
    let colorValue = (255/100)*value;
    document.getElementById('container').style.backgroundColor=
    'rgb('+colorValue+', '+colorValue+', '+colorValue+')';

    let redLeftMargin = document.getElementById('rectRed').style.left=((300/100)*value) - 20;
    redLeftMargin = 260 - redLeftMargin;
    if(redLeftMargin<0){
        redLeftMargin = 0;
    }
    if(redLeftMargin>260){
        redLeftMargin=260;
    }
    document.getElementById('rectRed').style.left = redLeftMargin+'px';

    let blueLeftMargin = document.getElementById('rectRed').style.left=((300/100)*value) - 20;
    if(blueLeftMargin<0){
        blueLeftMargin = 0;
    }
    if(blueLeftMargin>260){
        blueLeftMargin=260;
    }
    document.getElementById('rectBlue').style.left = blueLeftMargin+'px';
}

updateValues();