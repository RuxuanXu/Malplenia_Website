/* Repeated Elements */
function page(n) {
    var label = "style='background-color:rgba(255, 30, 30, 0.7)'";
    var str = "<canvas id='canvas'></canvas>" +
        "<div class='topnav'>" +
        "<a ";
    if (!n) str += label;
    str += "id='logo' href='index.html'><img src='images/logo.png' height='36px'></a>" +
        "<div class = 'dropdown' >" +
        "<button class = 'dropbtn' ";
    if (n == 1) str += label;
    str += "> 進入遊戲 </button>" +
        "<div class = 'dropdown-content'>" +
        "<a href = 'game.html' > 探索指南 </a> " +
        "<a href = 'https://ruxuanxu.github.io/Malplenia_Game/' > 開始遊戲 </a> " +
        "<a href = 'download.html' > 下載專區 </a>" +
        "</div> </div> " +
        "<a href = 'about.html' ";
    if (n == 2) str += label;
    str += "> 企劃說明 </a> " +
        "<div class = 'dropdown' >" +
        "<button class = 'dropbtn' ";
    if (n == 3) str += label;
    str += "> 世界導覽 </button> " +
        "<div class = 'dropdown-content'>" +
        "<a href = 'area.html' > 世界觀 </a>" +
        "<a href = 'race.html' > 種族與職業 </a>" +
        "<a href = 'alien.html' > 異界生物 </a> " +
        "</div> </div> " +
        "<a href = 'characters.html' ";
    if (n == 4) str += label;
    str += " > 居民列表 </a>" +
        "<div class = 'dropdown' >" +
        "<button class = 'dropbtn' ";
    if (n == 5) str += label;
    str += "> 創作申請 </button>" +
        "<div class = 'dropdown-content'>" +
        "<a href = 'rules.html' > 創作規則 </a>" +
        "<a href = 'generator.html' > 人物產生器 </a>" +
        "<a href = 'submit.html' > 填寫申請表 </a>" +
        "</div> </div> <div class = 'dropdown'>" +
        "<button class = 'dropbtn' ";
    if (n == 6) str += label;
    str += "> 聯絡官方 </button>" +
        "<div class = 'dropdown-content' >" +
        "<a href = 'team.html' > 開發團隊 </a>" +
        "<a href = 'credit.html' > 著作權歸屬 </a>" +
        "<a href = 'ask.html' > 問答集 </a>" +
        "</div> </div> </div>" +
        "<div class='footer'><footer>Copyright © 2018 Malplenia</a></footer></div>";
    document.body.innerHTML += str;
    drawSpark();
}

/* 
Pixel Fire Effect 
Credits to Gregory Schier: https://codepen.io/gschier/pen/nLCJp
*/
var canvas;
var ctx;
var config = {
    sparkFreq: 3,
    meanSparkSize: 0.003,
    meanSparkLife: 450,
    meanSparkVelocity: [2, 6],
    sparkSizeVariation: 5,
    sparkBlink: 5, // Lower is more blink
    floorHeight: 0
};

var resize = window.resize = function() {
    canvas.height = document.body.offsetHeight;
    canvas.width = document.body.offsetWidth;
};

function drawSpark() {
    canvas = document.getElementById('canvas');
    ctx = canvas.getContext('2d');
    resize();

    config.meanSparkSize = canvas.width * config.meanSparkSize;

    var fire = new Fire(ctx, canvas, canvas.height - canvas.height * config.floorHeight, config);

    var loop = function() {
        window.requestAnimFrame(loop);
        ctx.clearRect(0, 0, canvas.width, canvas.height);
        fire.update();
        for (var i = 0; i < config.sparkFreq; i++) {
            fire.spark(Math.random() * canvas.width);
        }
    };

    window.requestAnimFrame = function() {
        return window.requestAnimationFrame ||
            window.webkitRequestAnimationFrame ||
            window.mozRequestAnimationFrame ||
            window.oRequestAnimationFrame ||
            window.msRequestAnimationFrame ||
            function(a) { window.setTimeout(a, 1E3 / 60); };
    }();

    loop();
};

var Fire = function Fire(ctx, canvas, y, config) {
    this.ctx = ctx;
    this.canvas = canvas;
    this.y = y;
    this.r = 255;
    this.config = config;
    this.sparks = [];
};
Fire.prototype.spark = function(x) {
    this.sparks.push(new Spark(this.ctx, x, this.y, this.config));
};
Fire.prototype.updateColor = function() {
    this.r += (Math.random() - 0.5) * 10;
    this.r = Math.round(Math.min(80, Math.max(60, this.r)));
};
Fire.prototype.update = function() {
    this.updateColor();
    this.ctx.beginPath();
    this.ctx.rect(0, this.y, this.canvas.width, this.config.meanSparkSize);
    this.ctx.fillStyle = 'rgba(' + this.r + ', 0, 0, 1)';
    this.ctx.fill();

    for (var i = 0; i < this.sparks.length; i++) {
        if (this.sparks[i].update()) { // Spark died
            this.sparks.splice(i, 1);
        }
    }
};

var Spark = function Spark(ctx, x, y, config) {
    this.ctx = ctx;
    this.pos = [x, y];
    this.size = config.meanSparkSize + (Math.random() - 0.5) * config.sparkSizeVariation;
    this.v = [
        config.meanSparkVelocity[0] * (Math.random() - 0.5), -1 * config.meanSparkVelocity[1] * Math.random()
    ];
    this.c = [
        Math.floor(Math.random() * 155) + 100,
        Math.floor(Math.random() * 80),
        0
    ];
    this.life = this.lifeOrig = Math.floor(config.meanSparkLife * Math.random());
    this.config = config;
};
Spark.prototype.move = function() {
    for (var i = 0; i < 2; i++) {
        this.pos[i] += this.v[i] * (1 - this.life / this.lifeOrig);
    }
};
Spark.prototype.getAlpha = function() {
    return Math.sqrt(this.life / this.lifeOrig) + ((Math.random() - 0.5) / this.config.sparkBlink);
};
Spark.prototype.update = function() {
    this.move();
    if (!(this.life--)) { return true; }
    this.ctx.beginPath();
    this.ctx.rect(this.pos[0], this.pos[1], this.size, this.size);
    this.ctx.fillStyle = 'rgba(' + this.c[0] + ', ' + this.c[1] + ', ' + this.c[2] + ', ' + this.getAlpha() + ')';
    this.ctx.fill();
};