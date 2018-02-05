var __extends=this&&this.__extends||function(t,e){function o(){this.constructor=t}for(var s in e)e.hasOwnProperty(s)&&(t[s]=e[s]);t.prototype=null===e?Object.create(e):(o.prototype=e.prototype,new o)},Converter=function(){function t(){}return t.statusToColor=function(t){switch(t){case Status.NEW:return new Color(63,255,251,1);case Status.ACCEPTED:return new Color(40,255,55,1);case Status.DENIED:return new Color(255,40,40,1);case Status.UNTREATED:return new Color(255,208,40,1);case Status.UNDEFINED:default:return new Color(188,184,169,1)}},t}();Converter.__class="Converter",String.prototype.cutByPixelLength=function(t,e,o){var s=this;if(t<=e)return s;var i=t/this.length,n=parseInt(e/i)-o.length;return s=s.substring(0,n)+o},Array.prototype.swap=function(t,e){var o=this[t];return this[t]=this[e],this[e]=o,this},CanvasRenderingContext2D.prototype.textHeight=function(t,e,o){for(var s=t.split("\n"),i=0,n=0;n<s.length;n++){for(var _=s[n].split(" "),r="",u=0;u<_.length;u++){var a=r+_[u]+" ";this.measureText(a).width>e&&u>0?(r=_[u]+" ",i+=o):r=a}i+=o}return i},CanvasRenderingContext2D.prototype.wrapText=function(t,e,o,s,i){for(var n=t.split("\n"),_=0;_<n.length;_++){for(var r=n[_].split(" "),u="",a=0;a<r.length;a++){var h=u+r[a]+" ";this.measureText(h).width>s&&a>0?(this.fillText(u,e,o),u=r[a]+" ",o+=i):u=h}this.fillText(u,e,o),o+=i}};var MouseInput=function(){function t(t){this.__canvasName=0,this.__mousePosition=0,this.__mouseButtonLeftDown=0,this.__mouseButtonRightDown=0,this.__mouseButtonMiddleDown=0,this.__canvasName=t,this.__mousePosition=new Vector2f(0,0),this.init()}return t.prototype.init=function(){var t=this,e=document.getElementById(this.__canvasName);e.addEventListener("mousemove",function(e){t.update_mousePosition(e)}),e.addEventListener("mousedown",function(e){t.update_mouseButtonDown(e)}),e.addEventListener("mouseup",function(e){t.update_mouseButtonUp(e)})},t.prototype.update_mousePosition=function(t){var e=$(this.__canvasName)[0].getBoundingClientRect();this.__mousePosition=new Vector2f(t.clientX-e.left,t.clientY-e.top)},t.prototype.update_mouseButtonDown=function(t){0===t.button&&(this.__mouseButtonLeftDown=!0),1===t.button&&(this.__mouseButtonMiddleDown=!0),2===t.button&&(this.__mouseButtonRightDown=!0)},t.prototype.update_mouseButtonUp=function(t){0===t.button&&(this.__mouseButtonLeftDown=!1),1===t.button&&(this.__mouseButtonMiddleDown=!1),2===t.button&&(this.__mouseButtonRightDown=!1)},t.prototype.position=function(){return this.__mousePosition},t.prototype.isButtonLeftDown=function(){return this.__mouseButtonLeftDown},t.prototype.isButtonMiddleDown=function(){return this.__mouseButtonMiddleDown},t.prototype.isButtonRightDown=function(){return this.__mouseButtonRightDown},t}();MouseInput.__class="MouseInput";var Rectangle=function(){function t(t,e){this.__position=0,this.__size=0,this.__position=t,this.__size=e}return t.prototype.render=function(t){t.fillRect(this.__position.x(),this.__position.y(),this.__size.x(),this.__size.y())},t.prototype.position=function(){return this.__position},t.prototype.size=function(){return this.__size},t.prototype.setPosition=function(t){this.__position=t},t.prototype.setSize=function(t){this.__size=t},t}();Rectangle.__class="Rectangle";var Status;!function(t){t[t.NEW=0]="NEW",t[t.ACCEPTED=1]="ACCEPTED",t[t.DENIED=2]="DENIED",t[t.UNTREATED=3]="UNTREATED",t[t.UNDEFINED=4]="UNDEFINED"}(Status||(Status={}));var Task=function(t){function e(e,o,s,i,n,_,r,u){var a=t.call(this,e,o)||this;return a.__name=null,a.__details=null,a.__room=null,a.__date=null,a.__status=null,a.__agent=null,a.__color=null,a.__grabed=null,a.__moved=null,a.__showContent=null,a.__lastMousePos=null,a.__lastTaskPos=null,a.__name=s,a.__details=i,a.__room=n,a.__date=_,a.__status=r,a.__agent=u,a.__color=Converter.statusToColor(this.__status),a.__grabed=!1,a.__moved=!1,a.__showContent=!1,a.__lastMousePos=new Vector2f(0,0),a.__lastTaskPos=new Vector2f(0,0),a}return __extends(e,t),e.prototype.render=function(t){t.fillStyle="rgba("+this.__color.r()+","+this.__color.g()+","+this.__color.b()+","+this.__color.a()+")",t.fillRect(this.__position.x(),this.__position.y(),this.__size.x(),this.__size.y());e=this.__color.brighter(100);if(t.fillStyle="rgba("+e.r()+","+e.g()+","+e.b()+","+e.a()+")",t.fillRect(this.__position.x()+10,this.__position.y()+3,this.__size.x()-20,this.__size.y()-6),t.fillStyle="rgb(20,20,20)",t.font="20px Didact Gothic",t.fillText(this.__name.cutByPixelLength(t.measureText(this.__name).width,this.__size.x(),"..."),this.__position.x()+10,this.__position.y()+20),this.__showContent){e=this.__color.brighter(100);t.fillStyle="rgba("+e.r()+","+e.g()+","+e.b()+","+e.a()+")",t.fillRect(this.__position.x(),this.__position.y()+this.__size.y(),this.__size.x(),this.__size.y()+t.textHeight(this.__details,this.__size.x()-8,20));var e=this.__color.darker(100);t.strokeStyle="rgba("+e.r()+","+e.g()+","+e.b()+","+e.a()+")",t.strokeRect(this.__position.x()-1,this.__position.y()-1,this.__size.x()+2,2*this.__size.y()+t.textHeight(this.__details,this.__size.x()-8,20)+2),t.fillStyle="rgb(20,20,20)",t.font="20px Didact Gothic",t.wrapText(this.__details,this.__position.x()+4,this.__position.y()+this.__size.y()+20,this.__size.x()-8,20)}},e.prototype.update=function(t){if(this.__grabed&&(this.__position.setValues(t.position().x()-this.__lastMousePos.x(),t.position().y()-this.__lastMousePos.y()),this.__lastTaskPos.equals(this.__position)||(this.__moved=!0,this.__showContent=!1)),t.isButtonLeftDown()){if(!this.__grabed){var e=new Vector2f(this.__position);e.add(this.__size),t.position().isBetween(this.__position,e)&&(this.__grabed=!0,this.__lastTaskPos.set(this.__position),this.__lastMousePos=new Vector2f(t.position().x()-this.__position.x(),t.position().y()-this.__position.y()))}}else!this.__moved&&this.__grabed&&(this.__showContent=!this.__showContent),this.__moved=!1,this.__grabed=!1},e.prototype._intern_update=function(){this.__color=Converter.statusToColor(this.__status)},e.prototype.name=function(){return this.__name},e.prototype.details=function(){return this.__details},e.prototype.room=function(){return this.__room},e.prototype.date=function(){return this.__date},e.prototype.status=function(){return this.__status},e.prototype.agent=function(){return this.__agent},e.prototype.isGrabed=function(){return this.__grabed},e.prototype.setStatus=function(t){this.__status=t,this._intern_update()},e}(Rectangle);Task.__class="Task";var Vector2f=function(){function t(e,o){var s=this;if("number"!=typeof e&&null!==e||"number"!=typeof o&&null!==o)if((null!=e&&e instanceof t||null===e)&&void 0===o){var i=Array.prototype.slice.call(arguments)[0];this.__x=0,this.__y=0,this.__x=0,this.__y=0,s.__x=new Number(i.x()).valueOf(),s.__y=new Number(i.y()).valueOf()}else{if(void 0!==e||void 0!==o)throw new Error("invalid overload");Array.prototype.slice.call(arguments);this.__x=0,this.__y=0,this.__x=0,this.__y=0}else{Array.prototype.slice.call(arguments);this.__x=0,this.__y=0,this.__x=0,this.__y=0,s.__x=e,s.__y=o}}return t.prototype.equals=function(t){return this.__x===t.x()&&this.__y===t.y()},t.prototype.x=function(){return this.__x},t.prototype.y=function(){return this.__y},t.prototype.setX=function(t){this.__x=t},t.prototype.setY=function(t){this.__y=t},t.prototype.addX=function(t){this.__x+=t},t.prototype.addY=function(t){this.__y+=t},t.prototype.subX=function(t){this.__x-=t},t.prototype.subY=function(t){this.__y-=t},t.prototype.mulX=function(t){this.__x*=t},t.prototype.mulY=function(t){this.__y*=t},t.prototype.divX=function(t){this.__x/=t},t.prototype.divY=function(t){this.__y/=t},t.prototype.setValues=function(t,e){this.__x=t,this.__y=e},t.prototype.set=function(t){this.__x=t.x(),this.__y=t.y()},t.prototype.bigger=function(){return this.__x>this.__y?this.__x:this.__y},t.prototype.smaller=function(){return this.__x>this.__y?this.__y:this.__x},t.prototype.sum=function(){return this.__x+this.__y},t.prototype.biggerthan=function(t){return this.__x>t.x()&&this.__y>t.y()},t.prototype.smallerthan=function(t){return this.__x<t.x()&&this.__y<t.y()},t.prototype.morePositiveValueThan=function(t){return this.__x+this.__y>t.x()+t.y()},t.prototype.moreNegativeValueThan=function(t){return this.__x+this.__y<t.x()+t.y()},t.prototype.swap=function(t){var e=this.__x,o=this.__y;this.set(t),t.setValues(e,o)},t.prototype.isBetween=function(t,e){return this.__x>t.x()&&this.__x<e.x()&&this.__y>t.y()&&this.__y<e.y()},t.prototype.awayfrom=function(t,e){return Math.sqrt(Math.pow(this.__x-t.x(),2)+Math.pow(this.__y-t.y(),2))>e},t.prototype.normalize=function(t){return Math.sqrt(Math.pow(t.x(),2)+Math.pow(t.y(),2))},t.prototype.shoot=function(e){var o=new t(e.x()-this.__x,e.y()-this.__y),s=this.normalize(o);return o.divide$float(s),o},t.prototype.randValueBetween=function(e){return e.x()<=this.__x&&e.y()<=this.__y?new t(e.x()+Math.random()*(this.__x-e.x()),e.y()+Math.random()*(this.__y-e.y())):e.x()<=this.__x&&e.y()>=this.__y?new t(e.x()+Math.random()*(this.__x-e.x()),this.__y+Math.random()*(e.x()-this.__y)):e.x()>=this.__x&&e.y()<=this.__y?new t(this.__x+Math.random()*(e.x()-this.__x),e.y()+Math.random()*(this.__y-e.y())):new t(this.__x+Math.random()*(e.x()-this.__x),this.__y+Math.random()*(e.y()-this.__y))},t.prototype.scaledCopy=function(e){return new t(this.__x*e,this.__y*e)},t.prototype.divide$Vector2f=function(t){this.__x/=t.x(),this.__y/=t.y()},t.prototype.divide$float=function(t){this.__x/=t,this.__y/=t},t.prototype.divide$float$float=function(t,e){this.__x/=t,this.__y/=e},t.prototype.divide=function(e,o){if("number"!=typeof e&&null!==e||"number"!=typeof o&&null!==o){if((null!=e&&e instanceof t||null===e)&&void 0===o)return this.divide$Vector2f(e);if("number"!=typeof e&&null!==e||void 0!==o)throw new Error("invalid overload");return this.divide$float(e)}return this.divide$float$float(e,o)},t.prototype.substract$Vector2f=function(t){this.__x-=t.x(),this.__y-=t.y()},t.prototype.substract$float=function(t){this.__x-=t,this.__y-=t},t.prototype.substract$float$float=function(t,e){this.__x-=t,this.__y-=e},t.prototype.substract=function(e,o){if("number"!=typeof e&&null!==e||"number"!=typeof o&&null!==o){if((null!=e&&e instanceof t||null===e)&&void 0===o)return this.substract$Vector2f(e);if("number"!=typeof e&&null!==e||void 0!==o)throw new Error("invalid overload");return this.substract$float(e)}return this.substract$float$float(e,o)},t.prototype.add$Vector2f=function(t){this.__x+=t.x(),this.__y+=t.y()},t.prototype.add$float=function(t){this.__x+=t,this.__y+=t},t.prototype.add$float$float=function(t,e){this.__x+=t,this.__y+=e},t.prototype.add=function(e,o){if("number"!=typeof e&&null!==e||"number"!=typeof o&&null!==o){if((null!=e&&e instanceof t||null===e)&&void 0===o)return this.add$Vector2f(e);if("number"!=typeof e&&null!==e||void 0!==o)throw new Error("invalid overload");return this.add$float(e)}return this.add$float$float(e,o)},t.prototype.multiply$Vector2f=function(t){this.__x*=t.x(),this.__y*=t.y()},t.prototype.multiply$float=function(t){this.__x*=t,this.__y*=t},t.prototype.multiply$float$float=function(t,e){this.__x*=t,this.__y*=e},t.prototype.multiply=function(e,o){if("number"!=typeof e&&null!==e||"number"!=typeof o&&null!==o){if((null!=e&&e instanceof t||null===e)&&void 0===o)return this.multiply$Vector2f(e);if("number"!=typeof e&&null!==e||void 0!==o)throw new Error("invalid overload");return this.multiply$float(e)}return this.multiply$float$float(e,o)},t.prototype.pow$Vector2f$float=function(e,o){return new t(Math.pow(e.x(),o),Math.pow(e.y(),o))},t.prototype.pow$Vector2f$Vector2f=function(e,o){return new t(Math.pow(e.x(),o.x()),Math.pow(e.y(),o.y()))},t.prototype.pow=function(e,o){if((null!=e&&e instanceof t||null===e)&&(null!=o&&o instanceof t||null===o))return this.pow$Vector2f$Vector2f(e,o);if(!(null!=e&&e instanceof t||null===e)||"number"!=typeof o&&null!==o)throw new Error("invalid overload");return this.pow$Vector2f$float(e,o)},t.prototype.toString=function(){return new String(this.__x+":"+this.__y)},t}();Vector2f.__class="Vector2f";var Area=function(t){function e(e,o,s,i,n){var _=t.call(this,e,o)||this;return _.__name=null,_.__color=null,_.__status=null,_.__name=s,_.__color=i,_.__status=n,_}return __extends(e,t),e.prototype.render=function(t){t.fillStyle="rgba("+this.__color.r()+","+this.__color.g()+","+this.__color.b()+","+this.__color.a()+")",t.fillRect(this.__position.x(),this.__position.y(),this.__size.x(),this.__size.y()),t.fillStyle="rgb(20, 20, 20)",t.font="20px Didact Gothic",t.fillText(this.__name,this.__position.x()+this.__size.x()/2-t.measureText(this.__name).width/2,this.__position.y());var e=this.__color;e=e.brighter(100),t.fillStyle="rgba("+e.r()+","+e.g()+","+e.b()+","+e.a()+")",t.fillRect(this.__position.x()+4,this.__position.y()+4,this.__size.x()-8,this.__size.y()-8)},e.prototype.detect=function(t){var e=this;t.forEach(function(t){var o=e.__position.x(),s=e.__position.y(),i=e.__size.x(),n=e.__size.y(),_=t.position().x(),r=t.position().y(),u=t.size().x(),a=t.size().y();_+u/2>=o&&_+u/2<=o+i&&r+a/2>=s&&r+a/2<=s+n&&t.setStatus(e.__status)})},e.prototype.name=function(){return this.__name},e}(Rectangle);Area.__class="Area";var Color=function(){function t(t,e,o,s){this.__r=0,this.__g=0,this.__b=0,this.__a=0,this.__r=t>255?255:t,this.__g=e>255?255:e,this.__b=o>255?255:o,this.__a=s>1?1:s,this.__r=t<0?0:t,this.__g=e<0?0:e,this.__b=o<0?0:o,this.__a=s<0?0:s}return t.prototype.brighter=function(e){return new t(this.__r+e,this.__g+e,this.__b+e,this.__a)},t.prototype.darker=function(e){return new t(this.__r-e,this.__g-e,this.__b-e,this.__a)},t.prototype.r=function(){return this.__r},t.prototype.setR=function(t){this.__r=t},t.prototype.g=function(){return this.__g},t.prototype.setG=function(t){this.__g=t},t.prototype.b=function(){return this.__b},t.prototype.setB=function(t){this.__b=t},t.prototype.a=function(){return this.__a},t.prototype.setA=function(t){this.__a=t},t}();Color.__class="Color";var TaskSystem=function(){function t(t){this.__userHaveTaskSelected=null,this.__tasks=null,this.__tasks=t,this.__userHaveTaskSelected=-1}return t.prototype._debug_=function(){this.__tasks.push(new Task(new Vector2f(50,20),new Vector2f(300,30),"Problème de souris","Le Lorem Ipsum est simplement du faux texte employé dans la composition et la mise en page avant impression. Le Lorem Ipsum est le faux texte standard de l'imprimerie depuis les années 1500, quand un peintre anonyme assembla ensemble des morceaux de texte pour réaliser un livre spécimen de polices de texte. Il n'a pas fait que survivre cinq siècles, mais s'est aussi adapté à la bureautique informatique, sans que son contenu n'en soit modifié. Il a été popularisé dans les années 1960 grâce à la vente de feuilles Letraset contenant des passages du Lorem Ipsum, et, plus récemment, par son inclusion dans des applications de mise en page de texte, comme Aldus PageMaker.","room","date",Status.ACCEPTED,"agent")),this.__tasks.push(new Task(new Vector2f(50,60),new Vector2f(300,30),"L'écran est tout noir","On sait depuis longtemps que travailler avec du texte lisible et contenant du sens est source de distractions, et empêche de se concentrer sur la mise en page elle-même. L'avantage du Lorem Ipsum sur un texte générique comme 'Du texte. Du texte. Du texte.' est qu'il possède une distribution de lettres plus ou moins normale, et en tout cas comparable avec celle du français standard.","room","date",Status.NEW,"agent")),this.__tasks.push(new Task(new Vector2f(50,100),new Vector2f(300,30),"Le vidéoprojecteur ne fonctionne plus quand on branche un câble audio","De nombreuses suites logicielles de mise en page ou éditeurs de sites Web ont fait du Lorem Ipsum leur faux texte par défaut, et une recherche pour 'Lorem Ipsum' vous conduira vers de nombreux sites qui n'en sont encore qu'à leur phase de construction.","room","date",Status.DENIED,"agent")),this.__tasks.push(new Task(new Vector2f(50,140),new Vector2f(300,30),"Je ne trouve plus l'icone Google","Plusieurs versions sont apparues avec le temps, parfois par accident, souvent intentionnellement (histoire d'y rajouter de petits clins d'oeil, voire des phrases embarassantes).","room","date",Status.UNDEFINED,"agent")),this.__tasks.push(new Task(new Vector2f(50,180),new Vector2f(300,30),"Ça va ?","Contrairement à une opinion répandue, le Lorem Ipsum n'est pas simplement du texte aléatoire.","room","date",Status.UNTREATED,"agent"))},t.prototype.add=function(t){this.__tasks.push(t)},t.prototype.update=function(t){for(var e=-1,o=this.__tasks.length-1;o>-1;o--)-1!=this.__userHaveTaskSelected&&this.__userHaveTaskSelected!=o||this.__tasks[o].update(t),this.__tasks[o].isGrabed()&&(this.__userHaveTaskSelected=o),this.__userHaveTaskSelected!=o||this.__tasks[o].isGrabed()||(this.__userHaveTaskSelected=-1,e=o);-1!=e&&(this.__tasks.swap(this.__tasks.length-1,e),e=-1)},t.prototype.render=function(t){for(var e=0;e<this.__tasks.length;e++)e!=this.__userHaveTaskSelected&&this.__tasks[e].render(t);-1!=this.__userHaveTaskSelected&&this.__tasks[this.__userHaveTaskSelected].render(t)},t}();TaskSystem.__class="TaskSystem";