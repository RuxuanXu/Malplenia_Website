var canvas = document.getElementById('generator');
var ctx = canvas.getContext('2d');
canvas.width = 750;
canvas.height = 400;

var body = new Image;
body.src = "images/generator/Base/body/base0.png";
var face = new Image;
face.src = "images/generator/Base/face/base0.png";;
var sv = new Image;
sv.src = "images/generator/Base/sv/base0.png";
var dead = new Image;
dead.src = "images/generator/Base/dead1.png";

var fHair0 = new Image;
fHair0.src = "images/generator/fHair/face/fHair1_0.png";
var fHair1 = new Image;
fHair1.src = "images/generator/fHair/body/fHair1.png";
var fHair1b = new Image;
fHair1b.src = "images/generator/fHair/body2/fHair(1).png";
var fHair3 = new Image;
fHair3.src = "images/generator/fHair/sv/fHair1.png";

var bHair0 = new Image;
bHair0.src = "images/generator/bHair/face/bHair0_(1).png";
var bHair1 = new Image;
bHair1.src = "images/generator/bHair/body/bHair(1).png";
var bHair1b = new Image;
bHair1b.src = "images/generator/bHair/body2/bHair(1).png";
var bHair3 = new Image;
bHair3.src = "images/generator/bHair/sv/bHair(1).png";

var ears0 = new Image;
ears0.src = "images/generator/Ears/face/Ears0.png";
var ears1 = new Image;
ears1.src = "images/generator/Ears/body/Ears1.png";
var ears3 = new Image;
ears3.src = "images/generator/Ears/sv/Ears1.png";

var eyes0 = new Image;
eyes0.src = "images/generator/Eyes/face/Eyes(0).png";

var eyebrows0 = new Image;
eyebrows0.src = "images/generator/Eyebrows/face/Eyebrows(0).png";

var nose0 = new Image;
nose0.src = "images/generator/Nose/face/Nose(0).png";

var mouth0 = new Image;
mouth0.src = "images/generator/Mouth/face/Mouth(0).png";

var cloth0 = new Image;
cloth0.src = "images/generator/Clothing/face/Clothing(0).png";
var cloth1 = new Image;
cloth1.src = "images/generator/Clothing/body/Clothing(0).png";
var cloth3 = new Image;
cloth3.src = "images/generator/Clothing/sv/Clothing(0).png";


var ear = 0;
var base = 0;
var hair = 1;
var fHairStyle = 1;

//colors
var baseColor = 0;
var fHairColor = 0;
var bHairColor = 0;
var eyesColor = 0;

function changeBody(id) {
    face.src = "images/generator/Base/face/base" + id + ".png";
    body.src = "images/generator/Base/body/base" + id + ".png";
    sv.src = "images/generator/Base/sv/base" + id + ".png";
    var n = parseInt(id) + 1;
    document.getElementById("base").innerHTML = "體型：樣式" + n;
    base = id;
    bHair0.src = "images/generator/bHair/face/bHair" + base + "_(" + hair + ").png";
}

function changeSkin(id) {
    face.src = "images/generator/Base/face/base" + base + ".png";
    body.src = "images/generator/Base/body/base" + base + ".png";
    sv.src = "images/generator/Base/sv/base" + base + ".png";
    ears0.src = "images/generator/Ears/face/Ears" + ear + ".png";
    baseColor = id;
}

function changefHair(id) {
    fHairStyle = id;
    fHair0.src = "images/generator/fHair/face/fHair" + id + "_0.png";
    fHair1.src = "images/generator/fHair/body/fHair" + id + ".png";
    fHair1b.src = "images/generator/fHair/body2/fHair(" + id + ").png";
    fHair3.src = "images/generator/fHair/sv/fHair" + id + ".png";
    if (id == 0) {
        document.getElementById("fHair").innerHTML = "前髮：無";
    } else {
        document.getElementById("fHair").innerHTML = "前髮：樣式" + id;
    }
}

function changefHairColor(id) {
    fHairColor = id;
}

function changebHair(id) {
    bHair0.src = "images/generator/bHair/face/bHair" + base + "_(" + id + ").png";
    bHair1.src = "images/generator/bHair/body/bHair(" + id + ").png";
    bHair1b.src = "images/generator/bHair/body2/bHair(" + id + ").png";
    bHair3.src = "images/generator/bHair/sv/bHair(" + id + ").png";
    if (id == 0) {
        document.getElementById("bHair").innerHTML = "後髮：無";
    } else {
        document.getElementById("bHair").innerHTML = "後髮：樣式" + id;
    }
    hair = id;
}

function changebHairColor(id) {
    bHairColor = id;
}

function changeEars(id) {
    ears0.src = "images/generator/Ears/face/Ears" + id + ".png";
    var n = parseInt(id) + 1;
    document.getElementById("ears").innerHTML = "耳朵：樣式" + n;
    if (id == 1) {
        ear = 1;
    } else {
        ear = 0;
    }
}

function changeEyes(id) {
    eyes0.src = "images/generator/Eyes/face/Eyes(" + id + ").png";
    var n = parseInt(id) + 1;
    document.getElementById("eyes").innerHTML = "眼睛：樣式" + n;
}

function changeEyesColor(id) {
    eyesColor = id;
}

function changeEyebrows(id) {
    eyebrows0.src = "images/generator/Eyebrows/face/Eyebrows(" + id + ").png";
    var n = parseInt(id) + 1;
    document.getElementById("eyebrows").innerHTML = "眉毛：樣式" + n;
}

function changeNose(id) {
    nose0.src = "images/generator/Nose/face/Nose(" + id + ").png";
    var n = parseInt(id) + 1;
    document.getElementById("nose").innerHTML = "鼻子：樣式" + n;
}

function changeMouth(id) {
    mouth0.src = "images/generator/Mouth/face/Mouth(" + id + ").png";
    var n = parseInt(id) + 1;
    document.getElementById("mouth").innerHTML = "嘴巴：樣式" + n;
}

function changeClothes(id) {
    cloth0.src = "images/generator/Clothing/face/Clothing(" + id + ").png";
    cloth1.src = "images/generator/Clothing/body/Clothing(" + id + ").png";
    cloth3.src = "images/generator/Clothing/sv/Clothing(" + id + ").png";
    if (id == 0) {
        document.getElementById("cloth").innerHTML = "服裝：無";
    } else {
        document.getElementById("cloth").innerHTML = "服裝：樣式" + id;
    }
}

//position
var bodyX = 5;
var bodyY = 179;
var svX = 164;

function tintColor(imgData, color) {
    color = parseInt(color);
    for (var i = 0; i < imgData.data.length; i += 4) {
        var alpha = imgData.data[i + 3];
        if (alpha > 0) {
            switch (color) {
                case 0:
                    //Original
                    imgData.data[i + 0] = imgData.data[i + 0] - 0;
                    imgData.data[i + 1] = imgData.data[i + 1] - 0;
                    imgData.data[i + 2] = imgData.data[i + 2] - 0;
                    break;
                case 1:
                    //Orange
                    imgData.data[i + 0] = imgData.data[i + 0] - 10;
                    imgData.data[i + 1] = imgData.data[i + 1] - 70;
                    imgData.data[i + 2] = imgData.data[i + 2] - 30;
                    break;
                case 2:
                    //Red
                    imgData.data[i + 0] = imgData.data[i + 0] - 30;
                    imgData.data[i + 1] = imgData.data[i + 1] - 80;
                    imgData.data[i + 2] = imgData.data[i + 2] - 60;
                    break;
                case 3:
                    //Brown
                    imgData.data[i + 0] = imgData.data[i + 0] - 50;
                    imgData.data[i + 1] = imgData.data[i + 1] - 100;
                    imgData.data[i + 2] = imgData.data[i + 2] - 30;
                    break;
                case 4:
                    //墨綠
                    imgData.data[i + 0] = imgData.data[i + 0] - 150;
                    imgData.data[i + 1] = imgData.data[i + 1] - 100;
                    imgData.data[i + 2] = imgData.data[i + 2] - 30;
                    break;
                case 5:
                    //深綠
                    imgData.data[i + 0] = imgData.data[i + 0] - 180;
                    imgData.data[i + 1] = imgData.data[i + 1] - 100;
                    imgData.data[i + 2] = imgData.data[i + 2] - 130;
                    break;
                case 6:
                    //深綠
                    imgData.data[i + 0] = imgData.data[i + 0] - 200;
                    imgData.data[i + 1] = imgData.data[i + 1] - 50;
                    imgData.data[i + 2] = imgData.data[i + 2] - 170;
                    break;
                case 7:
                    //深膚色1
                    imgData.data[i + 0] = imgData.data[i + 0] - 10;
                    imgData.data[i + 1] = imgData.data[i + 1] - 30;
                    imgData.data[i + 2] = imgData.data[i + 2] - 30;
                    break;
                case 8:
                    //深膚色2
                    imgData.data[i + 0] = imgData.data[i + 0] - 40;
                    imgData.data[i + 1] = imgData.data[i + 1] - 70;
                    imgData.data[i + 2] = imgData.data[i + 2] - 80;
                    break;
                case 9:
                    //深膚色3
                    imgData.data[i + 0] = imgData.data[i + 0] - 160;
                    imgData.data[i + 1] = imgData.data[i + 1] - 170;
                    imgData.data[i + 2] = imgData.data[i + 2] - 160;
                    break;
                case 10: //亮膚色1
                    imgData.data[i + 0] = imgData.data[i + 0] + 40;
                    imgData.data[i + 1] = imgData.data[i + 1] + 30;
                    imgData.data[i + 2] = imgData.data[i + 2] + 40;
                    break;
                case 11: //亮膚色2
                    imgData.data[i + 0] = imgData.data[i + 0] + 20;
                    imgData.data[i + 1] = imgData.data[i + 1] + 30;
                    imgData.data[i + 2] = imgData.data[i + 2] + 60;
                    break;
                case 12: //白色
                    imgData.data[i + 0] = imgData.data[i + 0] + 10;
                    imgData.data[i + 1] = imgData.data[i + 1] + 50;
                    imgData.data[i + 2] = imgData.data[i + 2] + 160;
                    break;
                default:
                    break;
            }
        }
    }
}

function combineData(a, b) {
    for (var i = 0; i < a.data.length; i += 4) {
        var ra = a.data[i + 0],
            ga = a.data[i + 1],
            ba = a.data[i + 2],
            aa = a.data[i + 3];
        var rb = b.data[i + 0],
            gb = b.data[i + 1],
            bb = b.data[i + 2],
            ab = b.data[i + 3];
        if (aa == 255) {
            b.data[i + 0] = ra;
            b.data[i + 1] = ga;
            b.data[i + 2] = ba;
            b.data[i + 3] = 255;
        } else if (aa > 0 || ab > 0) {
            b.data[i + 0] = rb * 1 * (ab - aa) / 255 + ra * aa / 255;
            b.data[i + 1] = gb * 1 * (ab - aa) / 255 + ga * aa / 255;
            b.data[i + 2] = bb * 1 * (ab - aa) / 255 + ba * aa / 255;
            b.data[i + 3] = 255;
        }
    }
    return b;
}
var tempCanvas = document.createElement('canvas');
var tempContext = tempCanvas.getContext('2d');
tempCanvas.width = 750;
tempCanvas.height = 400;

function render() {
    ctx.clearRect(0, 0, canvas.width, canvas.height);
    tempContext.clearRect(0, 0, canvas.width, canvas.height);

    //Draw Base
    tempContext.drawImage(face, 0, 0, 144, 144);
    tempContext.drawImage(body, bodyX, bodyY, 144, 192);
    tempContext.drawImage(sv, svX, 0, 576, 384);
    tempContext.drawImage(nose0, 0, 0, 144, 144);
    tempContext.drawImage(mouth0, 0, 0, 144, 144);
    var dataA = tempContext.getImageData(0, 0, canvas.width, canvas.height);
    tintColor(dataA, baseColor);

    //Draw Back Hair
    tempContext.clearRect(0, 0, canvas.width, canvas.height);
    tempContext.drawImage(bHair0, 0, 0, 144, 144);
    tempContext.drawImage(bHair1, bodyX, bodyY, 144, 192);
    tempContext.drawImage(bHair3, svX, 0, 576, 384);
    var dataB = tempContext.getImageData(0, 0, canvas.width, canvas.height);
    tintColor(dataB, bHairColor);
    var dataA = combineData(dataB, dataA);

    //Draw Ears
    tempContext.clearRect(0, 0, canvas.width, canvas.height);
    tempContext.drawImage(ears0, 0, 0, 144, 144);
    if (ear == 1) {
        tempContext.drawImage(ears1, bodyX, bodyY, 144, 192);
        tempContext.drawImage(ears3, svX, 0, 576, 384);
    }
    var dataB = tempContext.getImageData(0, 0, canvas.width, canvas.height);
    tintColor(dataB, baseColor);
    var dataA = combineData(dataB, dataA);

    //Draw Eyebrows
    tempContext.clearRect(0, 0, canvas.width, canvas.height);
    tempContext.drawImage(eyebrows0, 0, 0, 144, 144);
    var dataB = tempContext.getImageData(0, 0, canvas.width, canvas.height);
    tintColor(dataB, fHairColor);
    var dataA = combineData(dataB, dataA);

    //Draw Eyes
    tempContext.clearRect(0, 0, canvas.width, canvas.height);
    tempContext.drawImage(eyes0, 0, 0, 144, 144);
    var dataB = tempContext.getImageData(0, 0, canvas.width, canvas.height);
    tintColor(dataB, eyesColor);
    var dataA = combineData(dataB, dataA);

    //Draw Clothes
    tempContext.clearRect(0, 0, canvas.width, canvas.height);
    tempContext.drawImage(cloth0, 0, 0, 144, 144);
    tempContext.drawImage(cloth1, bodyX, bodyY, 144, 192);
    tempContext.drawImage(cloth3, svX, 0, 576, 384);
    var dataB = tempContext.getImageData(0, 0, canvas.width, canvas.height);
    var dataA = combineData(dataB, dataA);

    //Draw Front Hair
    tempContext.clearRect(0, 0, canvas.width, canvas.height);
    tempContext.drawImage(fHair0, 0, 0, 144, 144);
    tempContext.drawImage(fHair1, bodyX, bodyY, 144, 192);
    tempContext.drawImage(fHair3, svX, 0, 576, 384);
    var dataB = tempContext.getImageData(0, 0, canvas.width, canvas.height);
    tintColor(dataB, fHairColor);
    var dataA = combineData(dataB, dataA);


    //Draw Other hair
    tempContext.clearRect(0, 0, canvas.width, canvas.height);
    tempContext.drawImage(fHair1b, bodyX, bodyY, 144, 192);
    var dataB = tempContext.getImageData(0, 0, canvas.width, canvas.height);
    tintColor(dataB, fHairColor);
    var dataA = combineData(dataB, dataA);

    tempContext.clearRect(0, 0, canvas.width, canvas.height);
    tempContext.drawImage(bHair1b, bodyX, bodyY, 144, 192);
    var dataB = tempContext.getImageData(0, 0, canvas.width, canvas.height);
    tintColor(dataB, bHairColor);
    var dataA = combineData(dataB, dataA);

    ctx.putImageData(dataA, 0, 0);
}

setInterval(render, 50);

var button = document.getElementById('warning');
var button0 = document.getElementById('btn-download0');
var button1 = document.getElementById('btn-download1');
var button2 = document.getElementById('btn-download2');

button.addEventListener('click', function(e) {
    alert("注意：此工具提供參與製作者建立角色，產生器內的素材取自RPG製作大師MV，僅限Rpg Maker遊戲開發內使用。");
});

button0.addEventListener('click', function(e) {
    var temp = document.createElement('canvas');
    var tempCtx = temp.getContext('2d');

    temp.width = 144;
    temp.height = 144;
    tempCtx.clearRect(0, 0, temp.width, temp.height);
    var data = ctx.getImageData(0, 0, 144, 144);
    tempCtx.putImageData(data, 0, 0);
    var dataURL = temp.toDataURL('image/png');
    button0.href = dataURL;
});

button1.addEventListener('click', function(e) {
    var temp = document.createElement('canvas');
    var tempCtx = temp.getContext('2d');
    temp.width = 144;
    temp.height = 192;
    tempCtx.clearRect(0, 0, temp.width, temp.height);
    var data = ctx.getImageData(bodyX, bodyY, temp.width, temp.height);
    tempCtx.putImageData(data, 0, 0);
    var dataURL = temp.toDataURL('image/png');
    button1.href = dataURL;
});

button2.addEventListener('click', function(e) {
    var temp = document.createElement('canvas');
    var tempCtx = temp.getContext('2d');
    temp.width = 576;
    temp.height = 384;
    tempCtx.clearRect(0, 0, temp.width, temp.height);
    var data = ctx.getImageData(svX, 0, temp.width, temp.height);
    tempCtx.putImageData(data, 0, 0);
    var dataURL = temp.toDataURL('image/png');
    button2.href = dataURL;
});