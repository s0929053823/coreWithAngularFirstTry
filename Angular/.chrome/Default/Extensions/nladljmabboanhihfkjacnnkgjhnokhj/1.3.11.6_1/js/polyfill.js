"use strict";String.prototype.startsWith instanceof Function==!1&&(String.prototype.startsWith=function(t,e){return"number"!=typeof e&&(e=0),this.lastIndexOf(t,e)===e}),String.prototype.endsWith instanceof Function==!1&&(String.prototype.endsWith=function(t,e){return"number"!=typeof e&&(e=this.length),e-=t.length,this.indexOf(t,e)===e});var objectAssign=Object.assign||function(t,e){for(var i,s=Object.keys(e),o=0,n=s.length;o<n;o++)t[i=s[o]]=e[i];return t};self.Set instanceof Function==!1&&(self.Set=function(t){if(this.clear(),Array.isArray(t))for(var e=0,i=t.length;e<i;e++)this.add(t[e]);else;},self.Set.polyfill=!0,self.Set.prototype.clear=function(){this._set=Object.create(null),this.size=0,this._values=void 0,this._i=void 0,this.value=void 0,this.done=!0},self.Set.prototype.add=function(t){return void 0===this._set[t]&&(this._set[t]=!0,this.size+=1),this},self.Set.prototype.delete=function(t){return void 0!==this._set[t]&&(delete this._set[t],this.size-=1,!0)},self.Set.prototype.has=function(t){return void 0!==this._set[t]},self.Set.prototype.next=function(){return this._i<this.size?this.value=this._values[this._i++]:(this._values=void 0,this.value=void 0,this.done=!0),this},self.Set.prototype.values=function(){return this._values=Object.keys(this._set),this._i=0,this.value=void 0,this.done=!1,this}),self.Map instanceof Function==!1&&(self.Map=function(t){if(this.clear(),Array.isArray(t))for(var e,i=0,s=t.length;i<s;i++)e=t[i],this.set(e[0],e[1]);else;},self.Map.polyfill=!0,self.Map.prototype.clear=function(){this._map=Object.create(null),this.size=0,this._keys=void 0,this._i=void 0,this.value=void 0,this.done=!0},self.Map.prototype.delete=function(t){return void 0!==this._map[t]&&(delete this._map[t],this.size-=1,!0)},self.Map.prototype.entries=function(){return this._keys=Object.keys(this._map),this._i=0,this.value=[void 0,void 0],this.done=!1,this},self.Map.prototype.get=function(t){return this._map[t]},self.Map.prototype.has=function(t){return void 0!==this._map[t]},self.Map.prototype.next=function(){if(this._i<this.size){var t=this._keys[this._i++];this.value[0]=t,this.value[1]=this._map[t]}else this._keys=void 0,this.value=void 0,this.done=!0;return this},self.Map.prototype.set=function(t,e){return void 0!==e?(void 0===this._map[t]&&(this.size+=1),this._map[t]=e):(void 0!==this._map[t]&&(this.size-=1),delete this._map[t]),this});