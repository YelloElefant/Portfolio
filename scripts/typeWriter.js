let TxtType = function (el, toRotate, period, shouldRemove) {
   this.toRotate = toRotate;
   this.el = el;
   this.loopNum = 0;
   this.period = parseInt(period, 10) || 2000;
   this.txt = '';
   this.shouldRemove = shouldRemove;
   console.log(shouldRemove == false)
   this.tick();
   this.isDeleting = false;
};

TxtType.prototype.tick = function () {
   let i = this.loopNum % this.toRotate.length;
   let fullTxt = this.toRotate[i];

   
   if (this.isDeleting && this.shouldRemove) {
      this.txt = fullTxt.substring(0, this.txt.length - 1);
   } else {
      this.txt = fullTxt.substring(0, this.txt.length + 1);
   }

   this.el.innerHTML = '<span class="wrap">' + this.txt + '</span>';

   let that = this;
   let delta = 200 - Math.random() * 100;

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


   console.log(this.txt == fullTxt)
   
   
   if (this.txt == fullTxt && this.shouldRemove == false) {return;}

   setTimeout(function () {
      that.tick();
   }, delta);
};

window.onload = function () {
   let elements = document.getElementsByClassName('typewrite');
   for (let i = 0; i < elements.length; i++) {
      let toRotate = elements[i].getAttribute('data-type');
      let period = elements[i].getAttribute('data-period');
      let shouldRemove = toRotate.length == 1;
      if (toRotate) {
         new TxtType(elements[i], JSON.parse(toRotate), period, shouldRemove);
      }
   }
   // INJECT CSS
   let css = document.createElement("style");
   css.type = "text/css";
   css.innerHTML = ".typewrite > .wrap { border-right: 2px solid var(--secondary-font-color); }";
   document.body.appendChild(css);
};