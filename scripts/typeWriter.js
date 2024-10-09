let TxtType = function (el, toRotate, period, shouldRemove, callBack, speedMultiplyer) {
   this.toRotate = toRotate;
   this.el = el;
   this.loopNum = 0;
   this.period = parseInt(period, 10) || 2000;
   this.txt = '';
   this.shouldRemove = shouldRemove;
   this.tick();
   this.isDeleting = false;
   this.exit = false;
   this.done = callBack;
   this.speedMultiplyer = speedMultiplyer;
};

TxtType.prototype.tick = function () {
   if(this.exit) {return}
   let i = this.loopNum % this.toRotate.length;
   let fullTxt = this.toRotate[i];
   //console.log(this)
   
   if (this.isDeleting && this.shouldRemove) {
      this.txt = fullTxt.substring(0, this.txt.length - 1);
   } else {
      this.txt = fullTxt.substring(0, this.txt.length + 1);
   }

   this.el.innerHTML = '<span class="wrap">' + this.txt + '</span>';

   let that = this;
   let delta = (200 - Math.random() * 100) / this.speedMultiplyer;
   if (this.isDeleting) { delta /= 2; }

   if (!this.isDeleting && this.txt === fullTxt) {
      delta = this.period;
      this.isDeleting = true;
      that.el.innerHTML = '<span class="wrap" style="animation: blink-caret .75s step-end infinite;">' + this.txt + '</span>';
   } else if (this.isDeleting && this.txt === '') {
      this.isDeleting = false;
      this.loopNum++;
      delta = 500;
   }


   
   
   if (this.txt == fullTxt && this.shouldRemove == false) {
      this.done()
      return;
   }

   setTimeout(function () {
      that.tick();
   }, delta);
};

window.onload = function () {
   let elements = document.getElementsByClassName('autoTypeWrite');
   for (let i = 0; i < elements.length; i++) {
      startTypeWriter(elements[i]);
   }
};

function startTypeWriter(x, callBack) {
   
   let toRotate = x.getAttribute('data-type');
   let period = x.getAttribute('data-period');
   let shouldRemove = toRotate.length == 1;
   let txtType;
   let speedMultiplyer = x.getAttribute('data-speed') == null ? 10 : x.getAttribute('data-speed');
   if (toRotate) {
      txtType = new TxtType(x, JSON.parse(toRotate), period, shouldRemove, callBack, speedMultiplyer);
   }
   return txtType
}

