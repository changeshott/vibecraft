#!/usr/bin/env node
"use strict";var Ot=Object.create;var be=Object.defineProperty;var Wt=Object.getOwnPropertyDescriptor;var Ht=Object.getOwnPropertyNames,Me=Object.getOwnPropertySymbols,zt=Object.getPrototypeOf,Ue=Object.prototype.hasOwnProperty,qt=Object.prototype.propertyIsEnumerable;var Yt=(e,t,s)=>t in e?be(e,t,{enumerable:!0,configurable:!0,writable:!0,value:s}):e[t]=s;var ne=(e,t)=>{var s={};for(var i in e)Ue.call(e,i)&&t.indexOf(i)<0&&(s[i]=e[i]);if(e!=null&&Me)for(var i of Me(e))t.indexOf(i)<0&&qt.call(e,i)&&(s[i]=e[i]);return s};var De=(e,t)=>()=>(t||e((t={exports:{}}).exports,t),t.exports);var Kt=(e,t,s,i)=>{if(t&&typeof t=="object"||typeof t=="function")for(let r of Ht(t))!Ue.call(e,r)&&r!==s&&be(e,r,{get:()=>t[r],enumerable:!(i=Wt(t,r))||i.enumerable});return e};var O=(e,t,s)=>(s=e!=null?Ot(zt(e)):{},Kt(t||!e||!e.__esModule?be(s,"default",{value:e,enumerable:!0}):s,e));var C=(e,t,s)=>Yt(e,typeof t!="symbol"?t+"":t,s);var $e=De((Gs,tt)=>{"use strict";var we={to(e,t){return t?`\x1B[${t+1};${e+1}H`:`\x1B[${e+1}G`},move(e,t){let s="";return e<0?s+=`\x1B[${-e}D`:e>0&&(s+=`\x1B[${e}C`),t<0?s+=`\x1B[${-t}A`:t>0&&(s+=`\x1B[${t}B`),s},up:(e=1)=>`\x1B[${e}A`,down:(e=1)=>`\x1B[${e}B`,forward:(e=1)=>`\x1B[${e}C`,backward:(e=1)=>`\x1B[${e}D`,nextLine:(e=1)=>"\x1B[E".repeat(e),prevLine:(e=1)=>"\x1B[F".repeat(e),left:"\x1B[G",hide:"\x1B[?25l",show:"\x1B[?25h",save:"\x1B7",restore:"\x1B8"},cs={up:(e=1)=>"\x1B[S".repeat(e),down:(e=1)=>"\x1B[T".repeat(e)},us={screen:"\x1B[2J",up:(e=1)=>"\x1B[1J".repeat(e),down:(e=1)=>"\x1B[J".repeat(e),line:"\x1B[2K",lineEnd:"\x1B[K",lineStart:"\x1B[1K",lines(e){let t="";for(let s=0;s<e;s++)t+=this.line+(s<e-1?we.up():"");return e&&(t+=we.left),t}};tt.exports={cursor:we,scroll:cs,erase:us,beep:"\x07"}});var $t=De((Cr,Re)=>{"use strict";var ge=process||{},yt=ge.argv||[],pe=ge.env||{},_s=!(pe.NO_COLOR||yt.includes("--no-color"))&&(!!pe.FORCE_COLOR||yt.includes("--color")||ge.platform==="win32"||(ge.stdout||{}).isTTY&&pe.TERM!=="dumb"||!!pe.CI),Cs=(e,t,s=e)=>i=>{let r=""+i,a=r.indexOf(t,e.length);return~a?e+As(r,t,s,a)+t:e+r+t},As=(e,t,s,i)=>{let r="",a=0;do r+=e.substring(a,i)+s,a=i+t.length,i=e.indexOf(t,a);while(~i);return r+e.substring(a)},wt=(e=_s)=>{let t=e?Cs:()=>String;return{isColorSupported:e,reset:t("\x1B[0m","\x1B[0m"),bold:t("\x1B[1m","\x1B[22m","\x1B[22m\x1B[1m"),dim:t("\x1B[2m","\x1B[22m","\x1B[22m\x1B[2m"),italic:t("\x1B[3m","\x1B[23m"),underline:t("\x1B[4m","\x1B[24m"),inverse:t("\x1B[7m","\x1B[27m"),hidden:t("\x1B[8m","\x1B[28m"),strikethrough:t("\x1B[9m","\x1B[29m"),black:t("\x1B[30m","\x1B[39m"),red:t("\x1B[31m","\x1B[39m"),green:t("\x1B[32m","\x1B[39m"),yellow:t("\x1B[33m","\x1B[39m"),blue:t("\x1B[34m","\x1B[39m"),magenta:t("\x1B[35m","\x1B[39m"),cyan:t("\x1B[36m","\x1B[39m"),white:t("\x1B[37m","\x1B[39m"),gray:t("\x1B[90m","\x1B[39m"),bgBlack:t("\x1B[40m","\x1B[49m"),bgRed:t("\x1B[41m","\x1B[49m"),bgGreen:t("\x1B[42m","\x1B[49m"),bgYellow:t("\x1B[43m","\x1B[49m"),bgBlue:t("\x1B[44m","\x1B[49m"),bgMagenta:t("\x1B[45m","\x1B[49m"),bgCyan:t("\x1B[46m","\x1B[49m"),bgWhite:t("\x1B[47m","\x1B[49m"),blackBright:t("\x1B[90m","\x1B[39m"),redBright:t("\x1B[91m","\x1B[39m"),greenBright:t("\x1B[92m","\x1B[39m"),yellowBright:t("\x1B[93m","\x1B[39m"),blueBright:t("\x1B[94m","\x1B[39m"),magentaBright:t("\x1B[95m","\x1B[39m"),cyanBright:t("\x1B[96m","\x1B[39m"),whiteBright:t("\x1B[97m","\x1B[39m"),bgBlackBright:t("\x1B[100m","\x1B[49m"),bgRedBright:t("\x1B[101m","\x1B[49m"),bgGreenBright:t("\x1B[102m","\x1B[49m"),bgYellowBright:t("\x1B[103m","\x1B[49m"),bgBlueBright:t("\x1B[104m","\x1B[49m"),bgMagentaBright:t("\x1B[105m","\x1B[49m"),bgCyanBright:t("\x1B[106m","\x1B[49m"),bgWhiteBright:t("\x1B[107m","\x1B[49m")}};Re.exports=wt();Re.exports.createColors=wt});var ms=require("util"),q=require("process"),H=O(require("readline"),1),st=O(require("readline"),1);var je=(()=>{let e=/[\uD800-\uDBFF][\uDC00-\uDFFF]/g;return t=>{let s=0;for(e.lastIndex=0;e.test(t);)s+=1;return t.length-s}})(),Ge=e=>e===12288||e>=65281&&e<=65376||e>=65504&&e<=65510,Oe=e=>e===8987||e===9001||e>=12272&&e<=12287||e>=12289&&e<=12350||e>=12441&&e<=12543||e>=12549&&e<=12591||e>=12593&&e<=12686||e>=12688&&e<=12771||e>=12783&&e<=12830||e>=12832&&e<=12871||e>=12880&&e<=19903||e>=65040&&e<=65049||e>=65072&&e<=65106||e>=65108&&e<=65126||e>=65128&&e<=65131||e>=127488&&e<=127490||e>=127504&&e<=127547||e>=127552&&e<=127560||e>=131072&&e<=196605||e>=196608&&e<=262141;var Jt=/[\u001b\u009b][[()#;?]*(?:[0-9]{1,4}(?:;[0-9]{0,4})*)?[0-9A-ORZcf-nqry=><]|\u001b\]8;[^;]*;.*?(?:\u0007|\u001b\u005c)/y,Zt=/[\x00-\x08\x0A-\x1F\x7F-\x9F]{1,1000}/y,We=/(?:(?![\uFF61-\uFF9F\uFF00-\uFFEF])[\p{Script=Han}\p{Script=Hiragana}\p{Script=Katakana}\p{Script=Hangul}\p{Script=Tangut}]){1,1000}/yu,Qt=/\t{1,1000}/y,He=new RegExp("[\\u{1F1E6}-\\u{1F1FF}]{2}|\\u{1F3F4}[\\u{E0061}-\\u{E007A}]{2}[\\u{E0030}-\\u{E0039}\\u{E0061}-\\u{E007A}]{1,3}\\u{E007F}|(?:\\p{Emoji}\\uFE0F\\u20E3?|\\p{Emoji_Modifier_Base}\\p{Emoji_Modifier}?|\\p{Emoji_Presentation})(?:\\u200D(?:\\p{Emoji_Modifier_Base}\\p{Emoji_Modifier}?|\\p{Emoji_Presentation}|\\p{Emoji}\\uFE0F\\u20E3?))*","yu"),Xt=/(?:[\x20-\x7E\xA0-\xFF](?!\uFE0F)){1,1000}/y,es=new RegExp("\\p{M}+","gu"),ts={limit:1/0,ellipsis:""},ze=(e,t={},s={})=>{var P,U,D,Z,ie,oe,j,Q;let i=(P=t.limit)!=null?P:1/0,r=(U=t.ellipsis)!=null?U:"",a=(D=t==null?void 0:t.ellipsisWidth)!=null?D:r?ze(r,ts,s).width:0,o=0,n=(Z=s.controlWidth)!=null?Z:0,l=(ie=s.tabWidth)!=null?ie:8,u=(oe=s.emojiWidth)!=null?oe:2,p=2,h=(j=s.regularWidth)!=null?j:1,$=(Q=s.wideWidth)!=null?Q:p,g=[[Xt,h],[Jt,o],[Zt,n],[Qt,l],[He,u],[We,$]],b=0,d=0,m=e.length,f=0,v=!1,_=m,R=Math.max(0,i-a),N=0,k=0,w=0,A=0;e:for(;;){if(k>N||d>=m&&d>b){let G=e.slice(N,k)||e.slice(b,d);f=0;for(let x of G.replaceAll(es,"")){let S=x.codePointAt(0)||0;if(Ge(S)?A=p:Oe(S)?A=$:A=h,w+A>R&&(_=Math.min(_,Math.max(N,b)+f)),w+A>i){v=!0;break e}f+=x.length,w+=A}N=k=0}if(d>=m)break e;for(let G=0,x=g.length;G<x;G++){let[S,B]=g[G];if(S.lastIndex=d,S.test(e)){if(f=S===We?je(e.slice(d,S.lastIndex)):S===He?1:S.lastIndex-d,A=f*B,w+A>R&&(_=Math.min(_,d+Math.floor((R-w)/B))),w+A>i){v=!0;break e}w+=A,N=b,k=d,d=b=S.lastIndex;continue e}}d+=1}return{width:v?R:w,index:v?_:m,truncated:v,ellipsed:v&&i>=a}},qe=ze;var ss={limit:1/0,ellipsis:"",ellipsisWidth:0},rs=(e,t={})=>qe(e,ss,t).width,F=rs;var le="\x1B",Qe="\x9B",is=39,ve="\x07",Xe="[",os="]",et="m",ye=`${os}8;;`,Ye=new RegExp(`(?:\\${Xe}(?<code>\\d+)m|\\${ye}(?<uri>.*)${ve})`,"y"),Ke=e=>{if(e>=30&&e<=37||e>=90&&e<=97)return 39;if(e>=40&&e<=47||e>=100&&e<=107)return 49;if(e===1||e===2)return 22;if(e===3)return 23;if(e===4)return 24;if(e===7)return 27;if(e===8)return 28;if(e===9)return 29;if(e===0)return 0},Je=e=>`${le}${Xe}${e}${et}`,Ze=e=>`${le}${ye}${e}${ve}`,xe=(e,t,s)=>{let i=t[Symbol.iterator](),r=!1,a=!1,o=e.at(-1),n=o===void 0?0:F(o),l=i.next(),u=i.next(),p=0;for(;!l.done;){let h=l.value,$=F(h);n+$<=s?e[e.length-1]+=h:(e.push(h),n=0),(h===le||h===Qe)&&(r=!0,a=t.startsWith(ye,p+1)),r?a?h===ve&&(r=!1,a=!1):h===et&&(r=!1):(n+=$,n===s&&!u.done&&(e.push(""),n=0)),l=u,u=i.next(),p+=h.length}o=e.at(-1),!n&&o!==void 0&&o.length&&e.length>1&&(e[e.length-2]+=e.pop())},as=e=>{let t=e.split(" "),s=t.length;for(;s&&!F(t[s-1]);)s--;return s===t.length?e:t.slice(0,s).join(" ")+t.slice(s).join("")},ns=(e,t,s={})=>{var h,$,g,b;if(s.trim!==!1&&e.trim()==="")return"";let i="",r,a,o=e.split(" "),n=[""],l=0;for(let d=0;d<o.length;d++){let m=o[d];if(s.trim!==!1){let v=(h=n.at(-1))!=null?h:"",_=v.trimStart();v.length!==_.length&&(n[n.length-1]=_,l=F(_))}d!==0&&(l>=t&&(s.wordWrap===!1||s.trim===!1)&&(n.push(""),l=0),(l||s.trim===!1)&&(n[n.length-1]+=" ",l++));let f=F(m);if(s.hard&&f>t){let v=t-l,_=1+Math.floor((f-v-1)/t);Math.floor((f-1)/t)<_&&n.push(""),xe(n,m,t),l=F(($=n.at(-1))!=null?$:"");continue}if(l+f>t&&l&&f){if(s.wordWrap===!1&&l<t){xe(n,m,t),l=F((g=n.at(-1))!=null?g:"");continue}n.push(""),l=0}if(l+f>t&&s.wordWrap===!1){xe(n,m,t),l=F((b=n.at(-1))!=null?b:"");continue}n[n.length-1]+=m,l+=f}s.trim!==!1&&(n=n.map(d=>as(d)));let u=n.join(`
`),p=!1;for(let d=0;d<u.length;d++){let m=u[d];if(i+=m,p)p=!1;else if(p=m>="\uD800"&&m<="\uDBFF",p)continue;if(m===le||m===Qe){Ye.lastIndex=d+1;let f=Ye.exec(u),v=f==null?void 0:f.groups;if((v==null?void 0:v.code)!==void 0){let _=Number.parseFloat(v.code);r=_===is?void 0:_}else(v==null?void 0:v.uri)!==void 0&&(a=v.uri.length===0?void 0:v.uri)}if(u[d+1]===`
`){a&&(i+=Ze(""));let f=r?Ke(r):void 0;r&&f&&(i+=Je(f))}else m===`
`&&(r&&Ke(r)&&(i+=Je(r)),a&&(i+=Ze(a)))}return i},ls=/\r?\n/;function W(e,t,s){return String(e).normalize().split(ls).map(i=>ns(i,t,s)).join(`
`)}var E=O($e(),1),Se=require("tty");function z(e,t,s){var o;if(!s.some(n=>!n.disabled))return e;let i=e+t,r=Math.max(s.length-1,0),a=i<0?r:i>r?0:i;return(o=s[a])!=null&&o.disabled?z(a,t<0?-1:1,s):a}var ps=["up","down","left","right","space","enter","cancel"],gs=["January","February","March","April","May","June","July","August","September","October","November","December"],T={actions:new Set(ps),aliases:new Map([["k","up"],["j","down"],["h","left"],["l","right"],["","cancel"],["escape","cancel"]]),messages:{cancel:"Canceled",error:"Something went wrong"},withGuide:!0,date:{monthNames:[...gs],messages:{required:"Please enter a valid date",invalidMonth:"There are only 12 months in a year",invalidDay:(e,t)=>`There are only ${e} days in ${t}`,afterMin:e=>`Date must be on or after ${e.toISOString().slice(0,10)}`,beforeMax:e=>`Date must be on or before ${e.toISOString().slice(0,10)}`}}};function ke(e,t){if(typeof e=="string")return T.aliases.get(e)===t;for(let s of e)if(s!==void 0&&ke(s,t))return!0;return!1}function fs(e,t){if(e===t)return;let s=e.split(`
`),i=t.split(`
`),r=Math.max(s.length,i.length),a=[];for(let o=0;o<r;o++)s[o]!==i[o]&&a.push(o);return{lines:a,numLinesBefore:s.length,numLinesAfter:i.length,numLines:r}}var bs=globalThis.process.platform.startsWith("win"),Ne=Symbol("clack:cancel");function Y(e){return e===Ne}function ce(e,t){let s=e;s.isTTY&&s.setRawMode(t)}function rt({input:e=q.stdin,output:t=q.stdout,overwrite:s=!0,hideCursor:i=!0}={}){let r=H.createInterface({input:e,output:t,prompt:"",tabSize:1});H.emitKeypressEvents(e,r),e instanceof Se.ReadStream&&e.isTTY&&e.setRawMode(!0);let a=(o,{name:n,sequence:l})=>{let u=String(o);if(ke([u,n,l],"cancel")){i&&t.write(E.cursor.show),process.exit(0);return}if(!s)return;H.moveCursor(t,n==="return"?0:-1,n==="return"?-1:0,()=>{H.clearLine(t,1,()=>{e.once("keypress",a)})})};return i&&t.write(E.cursor.hide),e.once("keypress",a),()=>{e.off("keypress",a),i&&t.write(E.cursor.show),e instanceof Se.ReadStream&&e.isTTY&&!bs&&e.setRawMode(!1),r.terminal=!1,r.close()}}var he=e=>"columns"in e&&typeof e.columns=="number"?e.columns:80,Ie=e=>"rows"in e&&typeof e.rows=="number"?e.rows:20;function K(e,t,s,i=s,r=s,a){let o=he(e!=null?e:q.stdout);return W(t,o-s.length,{hard:!0,trim:!1}).split(`
`).map((n,l,u)=>{let p=a?a(n,l):n;return l===0?`${i}${p}`:l===u.length-1?`${r}${p}`:`${s}${p}`}).join(`
`)}function it(e,t){var s,i;if("~standard"in e){let r=e["~standard"].validate(t);if(r instanceof Promise)throw new TypeError("Schema validation must be synchronous. Update `validate()` and remove any asynchronous logic.");return(i=(s=r.issues)==null?void 0:s.at(0))==null?void 0:i.message}return e(t)}var ue=class{constructor(t,s=!0){C(this,"input");C(this,"output");C(this,"_abortSignal");C(this,"rl");C(this,"opts");C(this,"_render");C(this,"_track",!1);C(this,"_prevFrame","");C(this,"_subscribers",new Map);C(this,"_cursor",0);C(this,"state","initial");C(this,"error","");C(this,"value");C(this,"userInput","");let l=t,{input:i=q.stdin,output:r=q.stdout,render:a,signal:o}=l,n=ne(l,["input","output","render","signal"]);this.opts=n,this.onKeypress=this.onKeypress.bind(this),this.close=this.close.bind(this),this.render=this.render.bind(this),this._render=a.bind(this),this._track=s,this._abortSignal=o,this.input=i,this.output=r}unsubscribe(){this._subscribers.clear()}setSubscriber(t,s){var r;let i=(r=this._subscribers.get(t))!=null?r:[];i.push(s),this._subscribers.set(t,i)}on(t,s){this.setSubscriber(t,{cb:s})}once(t,s){this.setSubscriber(t,{cb:s,once:!0})}emit(t,...s){var a;let i=(a=this._subscribers.get(t))!=null?a:[],r=[];for(let o of i)o.cb(...s),o.once&&r.push(()=>i.splice(i.indexOf(o),1));for(let o of r)o()}prompt(){return new Promise(t=>{if(this._abortSignal){if(this._abortSignal.aborted)return this.state="cancel",this.close(),t(Ne);this._abortSignal.addEventListener("abort",()=>{this.state="cancel",this.close()},{once:!0})}this.rl=st.default.createInterface({input:this.input,tabSize:2,prompt:"",escapeCodeTimeout:50,terminal:!0}),this.rl.prompt(),this.opts.initialUserInput!==void 0&&this._setUserInput(this.opts.initialUserInput,!0),this.input.on("keypress",this.onKeypress),ce(this.input,!0),this.output.on("resize",this.render),this.render(),this.once("submit",()=>{this.output.write(E.cursor.show),this.output.off("resize",this.render),ce(this.input,!1),t(this.value)}),this.once("cancel",()=>{this.output.write(E.cursor.show),this.output.off("resize",this.render),ce(this.input,!1),t(Ne)})})}_isActionKey(t,s){return t==="	"}_shouldSubmit(t,s){return!0}_setValue(t){this.value=t,this.emit("value",this.value)}_setUserInput(t,s){this.userInput=t!=null?t:"",this.emit("userInput",this.userInput),s&&this._track&&this.rl&&(this.rl.write(this.userInput),this._cursor=this.rl.cursor)}_clearUserInput(){var t;(t=this.rl)==null||t.write(null,{ctrl:!0,name:"u"}),this._setUserInput("")}onKeypress(t,s){var i,r,a,o,n;if(this._track&&s.name!=="return"&&(s.name&&this._isActionKey(t,s)&&((i=this.rl)==null||i.write(null,{ctrl:!0,name:"h"})),this._cursor=(a=(r=this.rl)==null?void 0:r.cursor)!=null?a:0,this._setUserInput((o=this.rl)==null?void 0:o.line)),this.state==="error"&&(this.state="active"),s!=null&&s.name&&(!this._track&&T.aliases.has(s.name)&&this.emit("cursor",T.aliases.get(s.name)),T.actions.has(s.name)&&this.emit("cursor",s.name)),t&&(t.toLowerCase()==="y"||t.toLowerCase()==="n")&&this.emit("confirm",t.toLowerCase()==="y"),this.emit("key",t,s),(s==null?void 0:s.name)==="return"&&this._shouldSubmit(t,s)){if(this.opts.validate){let l=it(this.opts.validate,this.value);l&&(this.error=l instanceof Error?l.message:l,this.state="error",(n=this.rl)==null||n.write(this.userInput))}this.state!=="error"&&(this.state="submit")}ke([t,s==null?void 0:s.name,s==null?void 0:s.sequence],"cancel")&&(this.state="cancel"),(this.state==="submit"||this.state==="cancel")&&this.emit("finalize"),this.render(),(this.state==="submit"||this.state==="cancel")&&this.close()}close(){var t;this.input.unpipe(),this.input.removeListener("keypress",this.onKeypress),this.output.write(`
`),ce(this.input,!1),(t=this.rl)==null||t.close(),this.rl=void 0,this.emit(`${this.state}`,this.value),this.unsubscribe()}restoreCursor(){let t=W(this._prevFrame,process.stdout.columns,{hard:!0,trim:!1}).split(`
`).length-1;this.output.write(E.cursor.move(-999,t*-1))}render(){var s;let t=W((s=this._render(this))!=null?s:"",process.stdout.columns,{hard:!0,trim:!1});if(t!==this._prevFrame){if(this.state==="initial")this.output.write(E.cursor.hide);else{let i=fs(this._prevFrame,t),r=Ie(this.output);if(this.restoreCursor(),i){let a=Math.max(0,i.numLinesAfter-r),o=Math.max(0,i.numLinesBefore-r),n=i.lines.find(l=>l>=a);if(n===void 0){this._prevFrame=t;return}if(i.lines.length===1){this.output.write(E.cursor.move(0,n-o)),this.output.write(E.erase.lines(1));let l=t.split(`
`);this.output.write(l[n]),this._prevFrame=t,this.output.write(E.cursor.move(0,l.length-n-1));return}else if(i.lines.length>1){if(a<o)n=a;else{let u=n-o;u>0&&this.output.write(E.cursor.move(0,u))}this.output.write(E.erase.down());let l=t.split(`
`).slice(n);this.output.write(l.join(`
`)),this._prevFrame=t;return}}this.output.write(E.erase.down())}this.output.write(t),this.state==="initial"&&(this.state="active"),this._prevFrame=t}}};var de=class extends ue{constructor(s){var r,a;super(s,!1);C(this,"options");C(this,"cursor",0);this.options=s.options,this.value=[...(r=s.initialValues)!=null?r:[]];let i=Math.max(this.options.findIndex(({value:o})=>o===s.cursorAt),0);this.cursor=(a=this.options[i])!=null&&a.disabled?z(i,1,this.options):i,this.on("key",(o,n)=>{n.name==="a"&&this.toggleAll(),n.name==="i"&&this.toggleInvert()}),this.on("cursor",o=>{switch(o){case"left":case"up":this.cursor=z(this.cursor,-1,this.options);break;case"down":case"right":this.cursor=z(this.cursor,1,this.options);break;case"space":this.toggleValue();break}})}get _value(){var s;return(s=this.options[this.cursor])==null?void 0:s.value}get _enabledOptions(){return this.options.filter(s=>s.disabled!==!0)}toggleAll(){let s=this._enabledOptions,i=this.value!==void 0&&this.value.length===s.length;this.value=i?[]:s.map(r=>r.value)}toggleInvert(){let s=this.value;if(!s)return;let i=this._enabledOptions.filter(r=>!s.includes(r.value));this.value=i.map(r=>r.value)}toggleValue(){this.value===void 0&&(this.value=[]);let s=this.value.includes(this._value);this.value=s?this.value.filter(i=>i!==this._value):[...this.value,this._value]}};var ot=class extends ue{constructor(s){var a;super(s,!1);C(this,"options");C(this,"cursor",0);this.options=s.options;let i=this.options.findIndex(({value:o})=>o===s.initialValue),r=i===-1?0:i;this.cursor=(a=this.options[r])!=null&&a.disabled?z(r,1,this.options):r,this.changeValue(),this.on("cursor",o=>{switch(o){case"left":case"up":this.cursor=z(this.cursor,-1,this.options);break;case"down":case"right":this.cursor=z(this.cursor,1,this.options);break}this.changeValue()})}get _selectedValue(){return this.options[this.cursor]}changeValue(){let s=this._selectedValue;this.value=s===void 0?void 0:s.value}};var c=require("util"),L=O(require("process"),1);var Ae=require("fs"),ut=require("path"),ee=O($e(),1);function xs(){return L.default.platform!=="win32"?L.default.env.TERM!=="linux":!!L.default.env.CI||!!L.default.env.WT_SESSION||!!L.default.env.TERMINUS_SUBLIME||L.default.env.ConEmuTask==="{cmd::Cmder}"||L.default.env.TERM_PROGRAM==="Terminus-Sublime"||L.default.env.TERM_PROGRAM==="vscode"||L.default.env.TERM==="xterm-256color"||L.default.env.TERM==="alacritty"||L.default.env.TERMINAL_EMULATOR==="JetBrains-JediTerm"}var _e=xs(),vs=()=>process.env.CI==="true";var y=(e,t)=>_e?e:t,ys=y("\u25C6","*"),dt=y("\u25A0","x"),ht=y("\u25B2","x"),mt=y("\u25C7","o"),ws=y("\u250C","T"),I=y("\u2502","|"),J=y("\u2514","\u2014"),ur=y("\u2510","T"),dr=y("\u2518","\u2014"),$s=y("\u25CF",">"),at=y("\u25CB"," "),Ss=y("\u25FB","[\u2022]"),nt=y("\u25FC","[+]"),lt=y("\u25FB","[ ]"),hr=y("\u25AA","\u2022"),mr=y("\u2500","-"),pr=y("\u256E","+"),gr=y("\u251C","+"),fr=y("\u256F","+"),br=y("\u2570","+"),xr=y("\u256D","+"),vr=y("\u25CF","\u2022"),yr=y("\u25C6","*"),wr=y("\u25B2","!"),$r=y("\u25A0","x"),pt=e=>{switch(e){case"initial":case"active":return(0,c.styleText)("cyan",ys);case"cancel":return(0,c.styleText)("red",dt);case"error":return(0,c.styleText)("yellow",ht);case"submit":return(0,c.styleText)("green",mt)}},gt=e=>{switch(e){case"initial":case"active":return(0,c.styleText)("cyan",I);case"cancel":return(0,c.styleText)("red",I);case"error":return(0,c.styleText)("yellow",I);case"submit":return(0,c.styleText)("green",I)}};function ft(e,t){let s=[`${t?`${(0,c.styleText)("cyan",I)}  `:""}${e.join(" \u2022 ")}`];return t&&s.push((0,c.styleText)("cyan",J)),s}var ct=(e,t,s,i,r,a=!1)=>{let o=t,n=0;if(a)for(let l=i-1;l>=s;l--){let u=e[l];if(u&&(o-=u.length),n++,o<=r)break}else for(let l=s;l<i;l++){let u=e[l];if(u&&(o-=u.length),n++,o<=r)break}return{lineCount:o,removals:n}},Ce=({cursor:e,options:t,style:s,output:i=process.stdout,maxItems:r=Number.POSITIVE_INFINITY,columnPadding:a=0,rowPadding:o=4})=>{let n=he(i)-a,l=Ie(i),u=(0,c.styleText)("dim","..."),p=Math.max(l-o,0),h=Math.max(Math.min(r,p),5),$=0;e>=h-3&&($=Math.max(Math.min(e-h+3,t.length-h),0));let g=h<t.length&&$>0,b=h<t.length&&$+h<t.length,d=Math.min($+h,t.length),m=[],f=0;g&&f++,b&&f++;let v=$+(g?1:0),_=d-(b?1:0);for(let N=v;N<_;N++){let k=t[N],w=k?s(k,N===e):"",A=W(w,n,{hard:!0,trim:!1}).split(`
`);m.push(A),f+=A.length}if(f>p){let N=0,k=0,w=f,A=e-v,P=p,U=()=>ct(m,w,0,A,P),D=()=>ct(m,w,A+1,m.length,P,!0);g?({lineCount:w,removals:N}=U(),w>P&&(b||(P-=1),{lineCount:w,removals:k}=D())):(b||(P-=1),{lineCount:w,removals:k}=D(),w>P&&(P-=1,{lineCount:w,removals:N}=U())),N>0&&(g=!0,m.splice(0,N)),k>0&&(b=!0,m.splice(m.length-k,k))}let R=[];g&&R.push(u);for(let N of m)for(let k of N)R.push(k);return b&&R.push(u),R};var Ns=[`${(0,c.styleText)("dim","\u2191/\u2193")} to navigate`,`${(0,c.styleText)("dim","Space:")} select`,`${(0,c.styleText)("dim","Enter:")} confirm`],X=(e,t)=>e.split(`
`).map(s=>t(s)).join(`
`),Ee=e=>{var r,a;let t=(o,n)=>{var u,p;let l=(u=o.label)!=null?u:String(o.value);return n==="disabled"?`${(0,c.styleText)("gray",lt)} ${X(l,h=>(0,c.styleText)(["strikethrough","gray"],h))}${o.hint?` ${(0,c.styleText)("dim",`(${(p=o.hint)!=null?p:"disabled"})`)}`:""}`:n==="active"?`${(0,c.styleText)("cyan",Ss)} ${l}${o.hint?` ${(0,c.styleText)("dim",`(${o.hint})`)}`:""}`:n==="selected"?`${(0,c.styleText)("green",nt)} ${X(l,h=>(0,c.styleText)("dim",h))}${o.hint?` ${(0,c.styleText)("dim",`(${o.hint})`)}`:""}`:n==="cancelled"?`${X(l,h=>(0,c.styleText)(["strikethrough","dim"],h))}`:n==="active-selected"?`${(0,c.styleText)("green",nt)} ${l}${o.hint?` ${(0,c.styleText)("dim",`(${o.hint})`)}`:""}`:n==="submitted"?`${X(l,h=>(0,c.styleText)("dim",h))}`:`${(0,c.styleText)("dim",lt)} ${X(l,h=>(0,c.styleText)("dim",h))}`},s=(r=e.required)!=null?r:!0,i=(a=e.showInstructions)!=null?a:!0;return new de({options:e.options,signal:e.signal,input:e.input,output:e.output,initialValues:e.initialValues,required:s,cursorAt:e.cursorAt,validate(o){if(s&&(o===void 0||o.length===0))return`Please select at least one option.
${(0,c.styleText)("reset",(0,c.styleText)("dim",`Press ${(0,c.styleText)(["gray","bgWhite","inverse"]," space ")} to select, ${(0,c.styleText)("gray",(0,c.styleText)("bgWhite",(0,c.styleText)("inverse"," enter ")))} to submit`))}`},render(){var h,$;let o=(h=e.withGuide)!=null?h:T.withGuide,n=K(e.output,e.message,o?`${gt(this.state)}  `:"",`${pt(this.state)}  `),l=`${o?`${(0,c.styleText)("gray",I)}
`:""}${n}
`,u=($=this.value)!=null?$:[],p=(g,b)=>{if(g.disabled)return t(g,"disabled");let d=u.includes(g.value);return b&&d?t(g,"active-selected"):d?t(g,"selected"):t(g,b?"active":"inactive")};switch(this.state){case"submit":{let g=this.options.filter(({value:d})=>u.includes(d)).map(d=>t(d,"submitted")).join((0,c.styleText)("dim",", "))||(0,c.styleText)("dim","none"),b=K(e.output,g,o?`${(0,c.styleText)("gray",I)}  `:"");return`${l}${b}`}case"cancel":{let g=this.options.filter(({value:d})=>u.includes(d)).map(d=>t(d,"cancelled")).join((0,c.styleText)("dim",", "));if(g.trim()==="")return`${l}${(0,c.styleText)("gray",I)}`;let b=K(e.output,g,o?`${(0,c.styleText)("gray",I)}  `:"");return`${l}${b}${o?`
${(0,c.styleText)("gray",I)}`:""}`}case"error":{let g=o?`${(0,c.styleText)("yellow",I)}  `:"",b=this.error.split(`
`).map((f,v)=>v===0?`${o?`${(0,c.styleText)("yellow",J)}  `:""}${(0,c.styleText)("yellow",f)}`:`   ${f}`).join(`
`),d=l.split(`
`).length,m=b.split(`
`).length+1;return`${l}${g}${Ce({output:e.output,options:this.options,cursor:this.cursor,maxItems:e.maxItems,columnPadding:g.length,rowPadding:d+m,style:p}).join(`
${g}`)}
${b}
`}default:{let g=o?`${(0,c.styleText)("cyan",I)}  `:"",b=l.split(`
`).length,d=i?ft(Ns,o):o?[(0,c.styleText)("cyan",J)]:[],m=d.join(`
`),f=d.length+1;return`${l}${g}${Ce({output:e.output,options:this.options,cursor:this.cursor,maxItems:e.maxItems,columnPadding:g.length,rowPadding:b+f,style:p}).join(`
${g}`)}
${m}
`}}}}).prompt()};var te=(e="",t)=>{var r,a;let s=(r=t==null?void 0:t.output)!=null?r:process.stdout,i=((a=t==null?void 0:t.withGuide)!=null?a:T.withGuide)?`${(0,c.styleText)("gray",J)}  `:"";s.write(`${i}${(0,c.styleText)("red",e)}

`)},bt=(e="",t)=>{var r,a;let s=(r=t==null?void 0:t.output)!=null?r:process.stdout,i=((a=t==null?void 0:t.withGuide)!=null?a:T.withGuide)?`${(0,c.styleText)("gray",ws)}  `:"";s.write(`${i}${e}
`)},xt=(e="",t)=>{var r,a;let s=(r=t==null?void 0:t.output)!=null?r:process.stdout,i=((a=t==null?void 0:t.withGuide)!=null?a:T.withGuide)?`${(0,c.styleText)("gray",I)}
${(0,c.styleText)("gray",J)}  `:"";s.write(`${i}${e}

`)};var ks=e=>(0,c.styleText)("magenta",e),vt=(u={})=>{var p=u,{indicator:e="dots",onCancel:t,output:s=process.stdout,cancelMessage:i,errorMessage:r,frames:a=_e?["\u25D2","\u25D0","\u25D3","\u25D1"]:["\u2022","o","O","0"],delay:o=_e?80:120,signal:n}=p,l=ne(p,["indicator","onCancel","output","cancelMessage","errorMessage","frames","delay","signal"]);var Q,G;let h=vs(),$,g,b=!1,d=!1,m="",f,v=performance.now(),_=he(s),R=(Q=l==null?void 0:l.styleFrame)!=null?Q:ks,N=x=>{let S=x>1?r!=null?r:T.messages.error:i!=null?i:T.messages.cancel;d=x===1,b&&(j(S,x),d&&typeof t=="function"&&t())},k=()=>N(2),w=()=>N(1),A=()=>{process.on("uncaughtExceptionMonitor",k),process.on("unhandledRejection",k),process.on("SIGINT",w),process.on("SIGTERM",w),process.on("exit",N),n&&n.addEventListener("abort",w)},P=()=>{process.removeListener("uncaughtExceptionMonitor",k),process.removeListener("unhandledRejection",k),process.removeListener("SIGINT",w),process.removeListener("SIGTERM",w),process.removeListener("exit",N),n&&n.removeEventListener("abort",w)},U=()=>{if(f===void 0)return;h&&s.write(`
`);let x=W(f,_,{hard:!0,trim:!1}).split(`
`);x.length>1&&s.write(ee.cursor.up(x.length-1)),s.write(ee.cursor.to(0)),s.write(ee.erase.down())},D=x=>x.replace(/\.+$/,""),Z=x=>{let S=(performance.now()-x)/1e3,B=Math.floor(S/60),M=Math.floor(S%60);return B>0?`[${B}m ${M}s]`:`[${M}s]`},ie=(G=l.withGuide)!=null?G:T.withGuide,oe=(x="")=>{b=!0,$=rt({output:s}),m=D(x),v=performance.now(),ie&&s.write(`${(0,c.styleText)("gray",I)}
`);let S=0,B=0;A(),g=setInterval(()=>{if(h&&m===f)return;U(),f=m;let M=R(a[S]),ae;if(h)ae=`${M}  ${m}...`;else if(e==="timer")ae=`${M}  ${m} ${Z(v)}`;else{let Gt=".".repeat(Math.floor(B)).slice(0,3);ae=`${M}  ${m}${Gt}`}let jt=W(ae,_,{hard:!0,trim:!1});s.write(jt),S=S+1<a.length?S+1:0,B=B<4?B+.125:0},o)},j=(x="",S=0,B=!1)=>{if(!b)return;b=!1,clearInterval(g),U();let M=S===0?(0,c.styleText)("green",mt):S===1?(0,c.styleText)("red",dt):(0,c.styleText)("red",ht);m=x!=null?x:m,B||(e==="timer"?s.write(`${M}  ${m} ${Z(v)}
`):s.write(`${M}  ${m}
`)),P(),$()};return{start:oe,stop:(x="")=>j(x,0),message:(x="")=>{m=D(x!=null?x:m)},cancel:(x="")=>j(x,1),error:(x="")=>j(x,2),clear:()=>j("",0,!0),get isCancelled(){return d}}},Sr={light:y("\u2500","-"),heavy:y("\u2501","="),block:y("\u2588","#")};var Is=[`${(0,c.styleText)("dim","\u2191/\u2193")} to navigate`,`${(0,c.styleText)("dim","Enter:")} confirm`],me=(e,t)=>e.includes(`
`)?e.split(`
`).map(s=>t(s)).join(`
`):t(e),Te=e=>{var i;let t=(r,a)=>{var n,l;if(r===void 0)return"";let o=(n=r.label)!=null?n:String(r.value);switch(a){case"disabled":return`${(0,c.styleText)("gray",at)} ${me(o,u=>(0,c.styleText)("gray",u))}${r.hint?` ${(0,c.styleText)("dim",`(${(l=r.hint)!=null?l:"disabled"})`)}`:""}`;case"selected":return`${me(o,u=>(0,c.styleText)("dim",u))}`;case"active":return`${(0,c.styleText)("green",$s)} ${o}${r.hint?` ${(0,c.styleText)("dim",`(${r.hint})`)}`:""}`;case"cancelled":return`${me(o,u=>(0,c.styleText)(["strikethrough","dim"],u))}`;default:return`${(0,c.styleText)("dim",at)} ${me(o,u=>(0,c.styleText)("dim",u))}`}},s=(i=e.showInstructions)!=null?i:!0;return new ot({options:e.options,signal:e.signal,input:e.input,output:e.output,initialValue:e.initialValue,render(){var u;let r=(u=e.withGuide)!=null?u:T.withGuide,a=`${pt(this.state)}  `,o=`${gt(this.state)}  `,n=K(e.output,e.message,o,a),l=`${r?`${(0,c.styleText)("gray",I)}
`:""}${n}
`;switch(this.state){case"submit":{let p=r?`${(0,c.styleText)("gray",I)}  `:"",h=K(e.output,t(this.options[this.cursor],"selected"),p);return`${l}${h}`}case"cancel":{let p=r?`${(0,c.styleText)("gray",I)}  `:"",h=K(e.output,t(this.options[this.cursor],"cancelled"),p);return`${l}${h}${r?`
${(0,c.styleText)("gray",I)}`:""}`}default:{let p=r?`${(0,c.styleText)("cyan",I)}  `:"",h=l.split(`
`).length,$=s?ft(Is,r):r?[(0,c.styleText)("cyan",J)]:[],g=$.join(`
`),b=$.length+1;return`${l}${p}${Ce({output:e.output,cursor:this.cursor,options:this.options,maxItems:e.maxItems,columnPadding:p.length,rowPadding:h+b,style:(d,m)=>t(d,d.disabled?"disabled":m?"active":"inactive")}).join(`
${p}`)}
${g}
`}}}}).prompt()};var Nr=`${(0,c.styleText)("gray",I)}  `;var V=O($t()),fe=O(require("fs")),Fe=O(require("path"));var St={id:"dark-saas-pro",name:"Dark SaaS Pro (Universal Architecture)",iconName:"Moon",description:"An exhaustive, ultra-detailed modern dark theme inspired by Linear, Vercel, and Raycast. Universal architecture suited for SaaS, Portfolios, E-Commerce, and Blogs. Features deep blue-black backgrounds, vibrant purple accents, and glassmorphism.",shortDescription:"Universal dark mode for SaaS, Portfolios & E-Commerce",tier:"pro",previewImage:"/vibes/dark-saas-pro.png",colors:{background:"hsl(222, 47%, 6%)",surface50:"hsl(222, 30%, 8%)",surface100:"hsl(222, 30%, 10%)",surface200:"hsl(222, 30%, 12%)",surface300:"hsl(222, 30%, 14%)",surface400:"hsl(222, 30%, 16%)",surface500:"hsl(222, 30%, 18%)",surface600:"hsl(222, 30%, 20%)",surface700:"hsl(222, 30%, 24%)",surface800:"hsl(222, 30%, 28%)",surface900:"hsl(222, 30%, 32%)",surface:"hsl(222, 30%, 10%)",surfaceHover:"hsl(222, 30%, 14%)",surfaceActive:"hsl(222, 30%, 16%)",elevated:"hsl(222, 25%, 12%)",elevatedHover:"hsl(222, 25%, 16%)",border:"hsl(222, 20%, 18%)",borderSubtle:"hsl(222, 15%, 14%)",borderHover:"hsl(222, 20%, 25%)",borderActive:"hsl(222, 20%, 30%)",textPrimary:"hsl(210, 40%, 98%)",textSecondary:"hsl(215, 20%, 65%)",textTertiary:"hsl(215, 15%, 45%)",textMuted:"hsl(215, 10%, 35%)",textInverse:"hsl(222, 47%, 6%)",accent50:"hsl(262, 83%, 95%)",accent100:"hsl(262, 83%, 90%)",accent200:"hsl(262, 83%, 80%)",accent300:"hsl(262, 83%, 70%)",accent400:"hsl(262, 83%, 65%)",accent500:"hsl(262, 83%, 58%)",accent600:"hsl(262, 83%, 50%)",accent700:"hsl(262, 83%, 40%)",accent800:"hsl(262, 83%, 30%)",accent900:"hsl(262, 83%, 20%)",accent950:"hsl(262, 83%, 10%)",accent:"hsl(262, 83%, 65%)",accentHover:"hsl(262, 83%, 58%)",accentMuted:"hsl(262, 60%, 30%)",secondary50:"hsl(210, 100%, 95%)",secondary100:"hsl(210, 100%, 90%)",secondary200:"hsl(210, 100%, 80%)",secondary300:"hsl(210, 100%, 70%)",secondary400:"hsl(210, 100%, 60%)",secondary500:"hsl(210, 100%, 50%)",secondary600:"hsl(210, 100%, 40%)",secondary700:"hsl(210, 100%, 30%)",secondary800:"hsl(210, 100%, 20%)",secondary900:"hsl(210, 100%, 10%)",success50:"hsl(142, 71%, 95%)",success100:"hsl(142, 71%, 90%)",success200:"hsl(142, 71%, 80%)",success300:"hsl(142, 71%, 70%)",success400:"hsl(142, 71%, 55%)",success500:"hsl(142, 71%, 45%)",success600:"hsl(142, 71%, 35%)",success700:"hsl(142, 71%, 25%)",success800:"hsl(142, 71%, 15%)",success900:"hsl(142, 71%, 10%)",success:"hsl(142, 71%, 45%)",warning50:"hsl(38, 92%, 95%)",warning100:"hsl(38, 92%, 90%)",warning200:"hsl(38, 92%, 80%)",warning300:"hsl(38, 92%, 70%)",warning400:"hsl(38, 92%, 60%)",warning500:"hsl(38, 92%, 50%)",warning600:"hsl(38, 92%, 40%)",warning700:"hsl(38, 92%, 30%)",warning800:"hsl(38, 92%, 20%)",warning900:"hsl(38, 92%, 10%)",warning:"hsl(38, 92%, 50%)",error50:"hsl(0, 84%, 95%)",error100:"hsl(0, 84%, 90%)",error200:"hsl(0, 84%, 80%)",error300:"hsl(0, 84%, 70%)",error400:"hsl(0, 84%, 60%)",error500:"hsl(0, 84%, 50%)",error600:"hsl(0, 84%, 40%)",error700:"hsl(0, 84%, 30%)",error800:"hsl(0, 84%, 20%)",error900:"hsl(0, 84%, 10%)",error:"hsl(0, 84%, 60%)",info:"hsl(199, 89%, 48%)"},typography:{fontFamily:"Inter, system-ui, sans-serif",fontFamilyMono:"JetBrains Mono, Fira Code, monospace",display1:"text-7xl md:text-9xl font-black tracking-tighter leading-none",display2:"text-6xl md:text-8xl font-black tracking-tighter leading-[1.1]",hero:"text-5xl md:text-7xl font-bold tracking-tight leading-[1.15]",h1:"text-4xl md:text-5xl font-bold tracking-tight leading-tight",h2:"text-3xl md:text-4xl font-semibold tracking-tight leading-snug",h3:"text-2xl md:text-3xl font-semibold tracking-tight leading-snug",h4:"text-xl md:text-2xl font-medium tracking-tight leading-normal",h5:"text-lg md:text-xl font-medium tracking-tight leading-normal",h6:"text-base md:text-lg font-medium leading-normal",bodyLarge:"text-lg md:text-xl leading-relaxed",body:"text-base leading-relaxed",bodySmall:"text-sm leading-relaxed",small:"text-sm font-medium",xs:"text-xs font-medium",micro:"text-[10px] font-bold uppercase tracking-wider",code:"font-mono text-sm tracking-tight",codeSmall:"font-mono text-xs tracking-tight",prose:"prose prose-invert prose-p:leading-relaxed prose-headings:tracking-tight prose-a:text-[hsl(262,83%,65%)] hover:prose-a:text-[hsl(262,83%,58%)] max-w-none"},animationRules:["Use fade-in with translateY(12px) for page content appearing, duration 400ms ease-out, staggered by 50ms for siblings.","Use framer-motion <AnimatePresence mode='wait'> for route transitions, fading out current content before scaling in new content (scale from 0.98 to 1).","Cards should translateY(-4px) and add a prominent border glow ([hsl(262,83%,65%)/0.4]) on hover. Duration 300ms cubic-bezier(0.4, 0, 0.2, 1).","Buttons should scale(0.97) on active press and scale(1.03) on hover.","Links should have an under-animated underline that expands from left to right on hover.","Add a subtle pulse-glow animation to primary CTA buttons (box-shadow pulsing from 20% to 50% opacity every 2s)."],specialInstructions:["UNIVERSAL ADAPTABILITY: This design system is built to be universally adaptable. Whether the user asks for a Developer Portfolio, a SaaS Dashboard, an E-commerce Store, or a Blog, apply these colors, typography, and glassmorphism rules seamlessly. DO NOT ask the user what they want; execute their prompt immediately using this theme.","IMAGE ASSETS: Use relevant high-quality placeholders for images. If building a portfolio, use mock project screenshots or tech-themed abstract images. If e-commerce, use sleek product mockups. Always apply a subtle dark overlay or blend mode (mix-blend-luminosity) to make images blend into the dark theme.","This design favors extreme depth and layering. Use multiple surface levels (background -> surface -> elevated -> overlay) and shadow layers to create visual hierarchy.","Glassmorphism (backdrop-blur) should be used for sticky navigation, floating command palettes, and modal overlays. Avoid using it for dense content cards as it impacts performance.","Always add a subtle grid background pattern (40px or 60px grid with very low opacity lines) to hero sections and empty states for visual texture."],componentPatterns:[{name:"Badge (Solid)",description:"Solid background badge for high emphasis status.",classes:"inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-semibold bg-[hsl(262,83%,65%)] text-white shadow-sm shadow-[hsl(262,83%,65%)/0.3]"},{name:"Badge (Subtle)",description:"Subtle background badge for low emphasis status or categories (good for blog tags or portfolio skills).",classes:"inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-[hsl(262,83%,65%)/0.1] text-[hsl(262,83%,65%)] border border-[hsl(262,83%,65%)/0.2]"},{name:"Button Primary",description:"Primary action button with glow. Use for main CTAs.",classes:"inline-flex items-center justify-center whitespace-nowrap rounded-xl text-sm font-medium ring-offset-[hsl(222,47%,6%)] transition-all focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[hsl(262,83%,65%)] focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 bg-[hsl(262,83%,65%)] text-white hover:bg-[hsl(262,83%,58%)] shadow-lg shadow-[hsl(262,83%,65%)/0.25] hover:-translate-y-0.5 active:translate-y-0 active:scale-[0.98] h-11 px-8"},{name:"Button Outline",description:"Outline button for secondary actions.",classes:"inline-flex items-center justify-center whitespace-nowrap rounded-xl text-sm font-medium ring-offset-[hsl(222,47%,6%)] transition-all focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[hsl(262,83%,65%)] focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 border border-[hsl(222,20%,25%)] bg-transparent hover:bg-[hsl(222,20%,18%)] hover:text-white text-[hsl(210,40%,98%)] h-11 px-8"},{name:"Card Base",description:"Standard elevated surface for projects, products, or dashboard panels.",classes:"rounded-2xl border border-[hsl(222,20%,18%)] bg-[hsl(222,30%,10%)] text-[hsl(210,40%,98%)] shadow-lg shadow-black/20 overflow-hidden"},{name:"Card Interactive",description:"Card with hover effects for clickable items like portfolio projects or blog posts.",classes:"rounded-2xl border border-[hsl(222,20%,18%)] bg-[hsl(222,30%,10%)] text-[hsl(210,40%,98%)] shadow-lg shadow-black/20 overflow-hidden transition-all duration-300 hover:border-[hsl(262,83%,65%)/0.5] hover:shadow-[0_8px_30px_rgb(0,0,0,0.4)] hover:-translate-y-1 group cursor-pointer"},{name:"Glass Header",description:"Sticky navigation bar with glassmorphism.",classes:"sticky top-0 z-50 w-full border-b border-[hsl(222,20%,18%)/0.5] bg-[hsl(222,47%,6%)/0.8] backdrop-blur-xl supports-[backdrop-filter]:bg-[hsl(222,47%,6%)/0.6]"},{name:"Input Base",description:"Standard text input for contact forms, search, or settings.",classes:"flex h-11 w-full rounded-xl border border-[hsl(222,20%,18%)] bg-[hsl(222,30%,10%)] px-4 py-2 text-sm text-[hsl(210,40%,98%)] ring-offset-[hsl(222,47%,6%)] file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-[hsl(215,15%,45%)] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[hsl(262,83%,65%)] focus-visible:border-[hsl(262,83%,65%)] focus-visible:ring-offset-0 disabled:cursor-not-allowed disabled:opacity-50 transition-all"}],enterpriseBlueprints:[{title:"Universal Hero Section (Portfolio/Landing)",description:"A highly impactful hero section suitable for a developer portfolio or product landing page. Features glowing abstract backgrounds and dual CTAs.",language:"tsx",code:`// src/components/hero.tsx
import { ArrowRight, Github } from "lucide-react";

export function Hero() {
  return (
    <section className="relative min-h-[80vh] flex items-center justify-center overflow-hidden pt-20 pb-32">
      {/* Background Effects */}
      <div className="absolute inset-0 bg-[hsl(222,47%,6%)]" />
      <div className="absolute inset-0 bg-[url('/grid.svg')] bg-center [mask-image:linear-gradient(180deg,white,rgba(255,255,255,0))] opacity-20" />
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 w-[800px] h-[400px] bg-[hsl(262,83%,65%)]/20 blur-[120px] rounded-full pointer-events-none" />

      <div className="container relative z-10 mx-auto px-4 text-center max-w-4xl">
        <div className="inline-flex items-center px-3 py-1 rounded-full border border-[hsl(262,83%,65%)/0.3] bg-[hsl(262,83%,65%)/0.1] text-[hsl(262,83%,65%)] text-sm font-medium mb-8">
          <span className="w-2 h-2 rounded-full bg-[hsl(262,83%,65%)] mr-2 animate-pulse" />
          Available for new projects
        </div>
        
        <h1 className="text-5xl md:text-7xl font-black tracking-tighter text-white mb-6 leading-[1.1]">
          Crafting digital experiences with <span className="text-transparent bg-clip-text bg-gradient-to-r from-[hsl(262,83%,65%)] to-[hsl(210,100%,60%)]">extreme precision.</span>
        </h1>
        
        <p className="text-lg md:text-xl text-[hsl(215,20%,65%)] mb-10 max-w-2xl mx-auto leading-relaxed">
          I build high-performance web applications, enterprise SaaS platforms, and stunning e-commerce experiences using modern web technologies.
        </p>

        <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
          <button className="w-full sm:w-auto inline-flex items-center justify-center rounded-xl text-sm font-medium transition-all focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[hsl(262,83%,65%)] focus-visible:ring-offset-2 bg-[hsl(262,83%,65%)] text-white hover:bg-[hsl(262,83%,58%)] shadow-lg shadow-[hsl(262,83%,65%)/0.25] hover:-translate-y-0.5 h-12 px-8 gap-2">
            View My Work <ArrowRight className="w-4 h-4" />
          </button>
          <button className="w-full sm:w-auto inline-flex items-center justify-center rounded-xl text-sm font-medium transition-all focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[hsl(262,83%,65%)] focus-visible:ring-offset-2 border border-[hsl(222,20%,25%)] bg-[hsl(222,30%,10%)] hover:bg-[hsl(222,20%,18%)] hover:text-white text-[hsl(210,40%,98%)] h-12 px-8 gap-2">
            <Github className="w-4 h-4" /> GitHub Profile
          </button>
        </div>
      </div>
    </section>
  );
}`},{title:"Bento Grid (Projects or Features)",description:"A visually stunning asymmetric bento grid layout perfect for showing off portfolio projects or SaaS features.",language:"tsx",code:`// src/components/bento-grid.tsx
import { ExternalLink, Code2, Rocket, Zap } from "lucide-react";

export function BentoGrid() {
  return (
    <section className="py-24 bg-[hsl(222,47%,6%)] relative">
      <div className="container mx-auto px-4 max-w-7xl">
        <div className="mb-16">
          <h2 className="text-3xl md:text-5xl font-bold tracking-tight text-white mb-4">Featured Work</h2>
          <p className="text-[hsl(215,20%,65%)] text-lg">A selection of my recent engineering and design projects.</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 auto-rows-[300px]">
          {/* Main Large Card */}
          <div className="md:col-span-2 md:row-span-2 rounded-3xl border border-[hsl(222,20%,18%)] bg-[hsl(222,30%,10%)] overflow-hidden group cursor-pointer relative">
             <div className="absolute inset-0 bg-gradient-to-br from-[hsl(262,83%,65%)/0.1] to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
             <div className="p-8 h-full flex flex-col justify-end relative z-10">
                <div className="mb-4 inline-flex items-center px-3 py-1 rounded-full bg-[hsl(222,20%,18%)] border border-[hsl(222,20%,25%)] text-xs font-semibold text-white w-fit">2026</div>
                <h3 className="text-3xl font-bold text-white mb-2 group-hover:text-[hsl(262,83%,65%)] transition-colors">Enterprise E-Commerce Platform</h3>
                <p className="text-[hsl(215,20%,65%)] max-w-md">Built a headless Shopify storefront using Next.js 15, handling 10k+ daily transactions with extreme performance.</p>
             </div>
             {/* Abstract Graphic */}
             <div className="absolute top-0 right-0 w-2/3 h-2/3 bg-[url('https://images.unsplash.com/photo-1550751827-4bd374c3f58b?auto=format&fit=crop&q=80')] bg-cover bg-center [mask-image:linear-gradient(to_left,white,transparent),linear-gradient(to_bottom,white,transparent)] transition-transform duration-700 group-hover:scale-105" />
          </div>

          {/* Small Top Card */}
          <div className="rounded-3xl border border-[hsl(222,20%,18%)] bg-[hsl(222,30%,10%)] p-8 flex flex-col justify-between group cursor-pointer hover:border-[hsl(262,83%,65%)/0.5] transition-colors">
            <div className="w-12 h-12 rounded-xl bg-[hsl(222,20%,18%)] flex items-center justify-center text-[hsl(262,83%,65%)] group-hover:bg-[hsl(262,83%,65%)] group-hover:text-white transition-colors">
              <Code2 className="w-6 h-6" />
            </div>
            <div>
              <h3 className="text-xl font-bold text-white mb-2">Open Source Library</h3>
              <p className="text-sm text-[hsl(215,20%,65%)]">A widely adopted React animation primitive library with 5k+ stars.</p>
            </div>
          </div>

          {/* Small Bottom Card */}
          <div className="rounded-3xl border border-[hsl(222,20%,18%)] bg-[hsl(222,30%,10%)] p-8 flex flex-col justify-between group cursor-pointer hover:border-[hsl(262,83%,65%)/0.5] transition-colors relative overflow-hidden">
            <div className="absolute -right-10 -bottom-10 w-40 h-40 bg-[hsl(210,100%,60%)]/20 blur-[50px] rounded-full" />
            <div className="w-12 h-12 rounded-xl bg-[hsl(222,20%,18%)] flex items-center justify-center text-[hsl(210,100%,60%)] group-hover:bg-[hsl(210,100%,60%)] group-hover:text-white transition-colors relative z-10">
              <Zap className="w-6 h-6" />
            </div>
            <div className="relative z-10">
              <h3 className="text-xl font-bold text-white mb-2">AI Trading Bot</h3>
              <p className="text-sm text-[hsl(215,20%,65%)]">Real-time sentiment analysis and high-frequency execution engine.</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}`},{title:"E-Commerce Product Detail Page",description:"A sleek product page layout for a premium tech or apparel store.",language:"tsx",code:`// src/app/product/[id]/page.tsx
"use client";
import { Star, ShieldCheck, Truck, ArrowRight, Minus, Plus } from "lucide-react";
import { useState } from "react";

export default function ProductPage() {
  const [qty, setQty] = useState(1);

  return (
    <div className="min-h-screen bg-[hsl(222,47%,6%)] pt-24 pb-20">
      <div className="container mx-auto px-4 max-w-7xl">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-24">
          {/* Image Gallery */}
          <div className="space-y-4">
            <div className="aspect-square rounded-3xl bg-[hsl(222,30%,10%)] border border-[hsl(222,20%,18%)] overflow-hidden relative group">
              <img src="https://images.unsplash.com/photo-1526406915894-7bcd65f60845?auto=format&fit=crop&q=80" alt="Product" className="w-full h-full object-cover mix-blend-luminosity opacity-80 group-hover:opacity-100 transition-opacity" />
            </div>
          </div>

          {/* Product Details */}
          <div className="flex flex-col justify-center">
            <div className="mb-6">
              <div className="flex items-center gap-2 mb-3">
                <div className="flex text-[hsl(38,92%,50%)]">
                  <Star className="w-4 h-4 fill-current" />
                  <Star className="w-4 h-4 fill-current" />
                  <Star className="w-4 h-4 fill-current" />
                  <Star className="w-4 h-4 fill-current" />
                  <Star className="w-4 h-4 fill-current opacity-30" />
                </div>
                <span className="text-sm text-[hsl(215,20%,65%)]">(128 reviews)</span>
              </div>
              <h1 className="text-4xl md:text-5xl font-bold text-white mb-4">Neural Engine Pro</h1>
              <p className="text-3xl font-light text-[hsl(215,20%,65%)]">$499.00</p>
            </div>

            <p className="text-[hsl(215,20%,65%)] leading-relaxed mb-8">
              The ultimate processing unit for local AI execution. Built with premium materials and engineered for maximum thermal efficiency. Ships directly from our manufacturing hub.
            </p>

            <div className="flex items-center gap-6 mb-8">
              <div className="flex items-center border border-[hsl(222,20%,18%)] rounded-xl bg-[hsl(222,30%,10%)] p-1">
                <button onClick={() => setQty(Math.max(1, qty-1))} className="w-10 h-10 flex items-center justify-center text-[hsl(215,20%,65%)] hover:text-white hover:bg-[hsl(222,20%,18%)] rounded-lg transition-colors"><Minus className="w-4 h-4"/></button>
                <span className="w-12 text-center text-white font-medium">{qty}</span>
                <button onClick={() => setQty(qty+1)} className="w-10 h-10 flex items-center justify-center text-[hsl(215,20%,65%)] hover:text-white hover:bg-[hsl(222,20%,18%)] rounded-lg transition-colors"><Plus className="w-4 h-4"/></button>
              </div>
              
              <button className="flex-1 h-12 bg-[hsl(262,83%,65%)] hover:bg-[hsl(262,83%,58%)] text-white font-bold rounded-xl shadow-[0_0_20px_hsl(262,83%,65%/0.3)] transition-all hover:-translate-y-0.5 active:translate-y-0 flex items-center justify-center gap-2">
                Add to Cart <ArrowRight className="w-5 h-5" />
              </button>
            </div>

            <div className="space-y-4 pt-8 border-t border-[hsl(222,20%,18%)]">
              <div className="flex items-center gap-3 text-sm text-[hsl(215,20%,65%)]">
                <ShieldCheck className="w-5 h-5 text-[hsl(142,71%,45%)]" /> 2-Year International Warranty
              </div>
              <div className="flex items-center gap-3 text-sm text-[hsl(215,20%,65%)]">
                <Truck className="w-5 h-5 text-[hsl(142,71%,45%)]" /> Free Express Shipping Worldwide
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}`},{title:"Blog / Article Layout",description:"A clean, highly readable layout for a technical blog post or documentation.",language:"tsx",code:`// src/app/blog/[slug]/page.tsx
import { Calendar, Clock, ArrowLeft } from "lucide-react";
import Link from "next/link";

export default function BlogPost() {
  return (
    <article className="min-h-screen bg-[hsl(222,47%,6%)] pt-24 pb-32">
      <div className="max-w-3xl mx-auto px-4">
        <Link href="/blog" className="inline-flex items-center gap-2 text-[hsl(215,20%,65%)] hover:text-white mb-12 transition-colors text-sm font-medium">
          <ArrowLeft className="w-4 h-4" /> Back to all articles
        </Link>
        
        <header className="mb-14">
          <div className="flex items-center gap-4 text-sm text-[hsl(215,20%,65%)] font-medium mb-6">
            <span className="px-3 py-1 rounded-full bg-[hsl(262,83%,65%)/0.1] text-[hsl(262,83%,65%)] border border-[hsl(262,83%,65%)/0.2]">Engineering</span>
            <span className="flex items-center gap-1.5"><Calendar className="w-4 h-4" /> Oct 24, 2026</span>
            <span className="flex items-center gap-1.5"><Clock className="w-4 h-4" /> 8 min read</span>
          </div>
          <h1 className="text-4xl md:text-5xl font-bold tracking-tight text-white mb-8 leading-tight">
            Building a Type-Safe Router from Scratch in Next.js 15
          </h1>
        </header>

        <div className="aspect-[21/9] rounded-2xl bg-[hsl(222,30%,10%)] border border-[hsl(222,20%,18%)] mb-14 overflow-hidden">
          <img src="https://images.unsplash.com/photo-1555066931-4365d14bab8c?auto=format&fit=crop&q=80" alt="Cover" className="w-full h-full object-cover mix-blend-luminosity opacity-80" />
        </div>

        <div className="prose prose-invert prose-p:leading-relaxed prose-headings:tracking-tight prose-a:text-[hsl(262,83%,65%)] hover:prose-a:text-[hsl(262,83%,58%)] max-w-none">
          <p className="text-xl text-[hsl(215,20%,65%)] leading-relaxed mb-8">
            Routing in single-page applications has always been a complex beast. With the introduction of React Server Components, the paradigm shifted entirely. Here is how we built a strict type-safe layer on top of it.
          </p>
          
          <h2>The Problem with Magic Strings</h2>
          <p>
            Traditionally, linking in React apps involves passing string literals to a Link component. This is inherently unsafe. If a route changes, your compiler won't warn you, and your users will encounter 404s.
          </p>
          
          <pre><code className="language-typescript">
// The unsafe way
&lt;Link href="/dashboard/settings" /&gt;

// The type-safe way
&lt;Link href={routes.dashboard.settings()} /&gt;
          </code></pre>
          
          <h2>Implementation Details</h2>
          <p>
            By leveraging TypeScript's advanced template literal types and recursive types, we generated a route manifest at build time.
          </p>
        </div>
      </div>
    </article>
  );
}`}]};var Nt={id:"minimalist-clean",name:"Minimalist Clean",iconName:"Square",description:"A refined, typography-driven light theme inspired by Stripe, Linear's marketing site, and Notion. Focuses on whitespace, subtle shadows, and crisp contrast.",shortDescription:"White space, typography-driven, Stripe-inspired",tier:"free",previewImage:"/vibes/minimalist-clean.png",colors:{background:"hsl(0, 0%, 100%)",surface:"hsl(0, 0%, 98%)",surfaceHover:"hsl(0, 0%, 96%)",elevated:"hsl(0, 0%, 100%)",border:"hsl(0, 0%, 90%)",borderSubtle:"hsl(0, 0%, 94%)",textPrimary:"hsl(0, 0%, 9%)",textSecondary:"hsl(0, 0%, 40%)",textTertiary:"hsl(0, 0%, 60%)",accent:"hsl(221, 83%, 53%)",accentHover:"hsl(221, 83%, 46%)",accentMuted:"hsl(221, 60%, 93%)",success:"hsl(142, 71%, 35%)",warning:"hsl(38, 92%, 45%)",error:"hsl(0, 84%, 50%)"},typography:{fontFamily:"Inter, system-ui, sans-serif",fontFamilyMono:"JetBrains Mono, Fira Code, monospace",hero:"text-5xl md:text-7xl font-semibold tracking-[-0.03em] leading-[1.1]",h1:"text-4xl md:text-5xl font-semibold tracking-[-0.02em]",h2:"text-2xl md:text-3xl font-medium tracking-tight",h3:"text-lg font-medium",body:"text-base leading-relaxed text-[hsl(0,0%,40%)]",small:"text-sm text-[hsl(0,0%,60%)]",code:"font-mono text-sm"},componentPatterns:[{name:"Card Base",description:"Clean white card with subtle border",classes:"bg-white rounded-2xl border border-[hsl(0,0%,90%)] shadow-sm overflow-hidden"},{name:"Card Interactive",description:"Clean white card with subtle hover shadow",classes:"bg-white rounded-2xl border border-[hsl(0,0%,90%)] shadow-sm hover:shadow-md hover:border-[hsl(0,0%,85%)] transition-all duration-300 overflow-hidden group cursor-pointer"},{name:"Button Primary",description:"Solid accent button",classes:"inline-flex items-center justify-center whitespace-nowrap rounded-lg px-5 py-2.5 text-sm font-medium transition-all focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[hsl(221,83%,53%)] focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 bg-[hsl(221,83%,53%)] text-white hover:bg-[hsl(221,83%,46%)] shadow-sm hover:shadow-md"},{name:"Button Secondary",description:"Outlined button",classes:"inline-flex items-center justify-center whitespace-nowrap rounded-lg px-5 py-2.5 text-sm font-medium transition-all focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[hsl(221,83%,53%)] focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 bg-white border border-[hsl(0,0%,90%)] hover:bg-[hsl(0,0%,98%)] text-[hsl(0,0%,9%)] shadow-sm"},{name:"Input Base",description:"Clean input with focus border",classes:"flex w-full rounded-lg border border-[hsl(0,0%,90%)] bg-white px-4 py-2.5 text-sm text-[hsl(0,0%,9%)] ring-offset-white file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-[hsl(0,0%,60%)] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[hsl(221,83%,53%)/0.2] focus-visible:border-[hsl(221,83%,53%)] disabled:cursor-not-allowed disabled:opacity-50 transition-all"},{name:"Badge",description:"Light accent badge",classes:"inline-flex items-center px-2.5 py-0.5 rounded-md text-xs font-medium bg-[hsl(221,60%,93%)] text-[hsl(221,83%,53%)]"},{name:"Navigation Header",description:"Clean sticky navbar with border bottom",classes:"sticky top-0 w-full bg-white/80 backdrop-blur-lg border-b border-[hsl(0,0%,94%)] z-50"}],animationRules:["Use subtle fade-in with minimal translateY(4px) for page elements, duration 400ms ease","Hover effects should be understated \u2014 only shadow changes and slight color shifts","AVOID flashy animations \u2014 this vibe is about calm elegance","Stagger child elements by 80ms for a smooth cascading reveal","Use framer-motion with gentle spring settings: stiffness 100, damping 20","NEVER use animation duration longer than 400ms","NEVER use glow effects or neon-style shadows","Prefer opacity transitions over transform animations"],specialInstructions:["UNIVERSAL ADAPTABILITY: This design system is built to be universally adaptable. Whether the user asks for a Developer Portfolio, a SaaS Dashboard, an E-commerce Store, or a Blog, apply these colors, typography, and clean rules seamlessly.","This design is driven by typography and whitespace \u2014 generous padding and margins are essential","Use a maximum content width of 680px for text-heavy pages (blog-style readability)","Accent color (blue) should be used ONLY for interactive elements \u2014 links, buttons, focus rings","Shadows should be extremely subtle \u2014 never heavy or dramatic","Section spacing should be at least 80px (py-20) to let content breathe","Borders should be barely visible \u2014 use 1px with low-opacity colors"],enterpriseBlueprints:[{title:"Clean Hero Section (SaaS/Landing)",description:"A highly readable, Stripe-inspired hero section with generous whitespace and elegant typography.",language:"tsx",code:`// src/components/hero.tsx
import { ArrowRight, PlayCircle } from "lucide-react";

export function Hero() {
  return (
    <section className="relative overflow-hidden bg-white pt-24 pb-32">
      <div className="container mx-auto px-4 text-center max-w-5xl">
        <div className="inline-flex items-center px-3 py-1 rounded-full bg-[hsl(0,0%,98%)] border border-[hsl(0,0%,90%)] text-[hsl(0,0%,40%)] text-sm font-medium mb-8">
          <span className="w-2 h-2 rounded-full bg-[hsl(221,83%,53%)] mr-2" />
          Introducing Minimalist v2.0
        </div>
        
        <h1 className="text-5xl md:text-7xl font-semibold tracking-[-0.03em] leading-[1.1] text-[hsl(0,0%,9%)] mb-6">
          Focus on what matters.<br className="hidden md:block"/> Leave the rest behind.
        </h1>
        
        <p className="text-lg md:text-xl text-[hsl(0,0%,40%)] mb-10 max-w-2xl mx-auto leading-relaxed">
          A design system that gets out of your way. Build elegant, high-performance interfaces with our refined component library.
        </p>

        <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
          <button className="w-full sm:w-auto inline-flex items-center justify-center rounded-lg text-sm font-medium transition-all bg-[hsl(221,83%,53%)] text-white hover:bg-[hsl(221,83%,46%)] shadow-sm hover:shadow-md h-12 px-8 gap-2">
            Get Started <ArrowRight className="w-4 h-4" />
          </button>
          <button className="w-full sm:w-auto inline-flex items-center justify-center rounded-lg text-sm font-medium transition-all bg-white border border-[hsl(0,0%,90%)] hover:bg-[hsl(0,0%,98%)] text-[hsl(0,0%,9%)] shadow-sm h-12 px-8 gap-2">
            <PlayCircle className="w-4 h-4" /> Watch Demo
          </button>
        </div>
      </div>
    </section>
  );
}`},{title:"Clean Feature Grid (Products or Services)",description:"Subtle, bordered cards that look clean and crisp.",language:"tsx",code:`// src/components/features.tsx
import { Shield, Zap, Globe, Cpu } from "lucide-react";

export function FeatureGrid() {
  const features = [
    {
      icon: <Shield className="w-5 h-5" />,
      title: "Enterprise Security",
      description: "Bank-grade encryption and SOC2 compliance built-in from day one."
    },
    {
      icon: <Zap className="w-5 h-5" />,
      title: "Instant Deployments",
      description: "Push to main and see your changes live globally in milliseconds."
    },
    {
      icon: <Globe className="w-5 h-5" />,
      title: "Global Edge Network",
      description: "Serve your content from 200+ edge locations around the world."
    },
    {
      icon: <Cpu className="w-5 h-5" />,
      title: "Serverless Compute",
      description: "Scale from zero to millions of requests without managing servers."
    }
  ];

  return (
    <section className="py-24 bg-[hsl(0,0%,98%)] border-t border-[hsl(0,0%,90%)]">
      <div className="container mx-auto px-4 max-w-6xl">
        <div className="mb-16 max-w-2xl">
          <h2 className="text-3xl md:text-4xl font-semibold tracking-tight text-[hsl(0,0%,9%)] mb-4">Everything you need</h2>
          <p className="text-[hsl(0,0%,40%)] text-lg">Powerful features without the complexity. Designed for teams that want to move fast.</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {features.map((feature, i) => (
            <div key={i} className="bg-white rounded-2xl border border-[hsl(0,0%,90%)] p-6 shadow-sm hover:shadow-md hover:border-[hsl(0,0%,85%)] transition-all duration-300">
              <div className="w-10 h-10 rounded-lg bg-[hsl(221,60%,93%)] text-[hsl(221,83%,53%)] flex items-center justify-center mb-5">
                {feature.icon}
              </div>
              <h3 className="text-lg font-medium text-[hsl(0,0%,9%)] mb-2">{feature.title}</h3>
              <p className="text-[hsl(0,0%,40%)] text-sm leading-relaxed">{feature.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}`},{title:"Clean Article / Detail Page",description:"A narrow, typography-driven layout ideal for reading.",language:"tsx",code:`// src/app/post/page.tsx
import { ArrowLeft } from "lucide-react";

export default function ArticlePage() {
  return (
    <article className="min-h-screen bg-white pt-24 pb-32">
      <div className="max-w-[680px] mx-auto px-4">
        <button className="inline-flex items-center gap-2 text-[hsl(0,0%,40%)] hover:text-[hsl(0,0%,9%)] mb-12 transition-colors text-sm font-medium">
          <ArrowLeft className="w-4 h-4" /> Back to writing
        </button>
        
        <header className="mb-12">
          <div className="text-sm text-[hsl(0,0%,60%)] font-medium mb-4">
            Published on October 24, 2026
          </div>
          <h1 className="text-4xl md:text-5xl font-semibold tracking-[-0.02em] text-[hsl(0,0%,9%)] mb-8 leading-tight">
            The beauty of negative space in interface design
          </h1>
        </header>

        <div className="prose prose-slate prose-p:leading-relaxed prose-headings:tracking-tight prose-a:text-[hsl(221,83%,53%)] max-w-none">
          <p className="text-lg text-[hsl(0,0%,40%)] leading-relaxed mb-8">
            When we design interfaces, our first instinct is often to fill the screen. We see empty space as wasted space, an opportunity to add more features or information. But the truth is quite the opposite.
          </p>
          
          <h2 className="text-2xl font-medium mt-12 mb-4 text-[hsl(0,0%,9%)]">Why space matters</h2>
          <p className="text-[hsl(0,0%,40%)] leading-relaxed mb-6">
            Negative space is not empty space. It is a powerful design element that provides breathing room for the user's eyes. It clarifies structure, emphasizes important elements, and creates a sense of elegance and calm.
          </p>

          <div className="my-10 p-6 bg-[hsl(0,0%,98%)] rounded-2xl border border-[hsl(0,0%,90%)]">
            <p className="text-[hsl(0,0%,9%)] font-medium italic m-0">
              "Whitespace is like air: it is necessary for design to breathe."
            </p>
          </div>
        </div>
      </div>
    </article>
  );
}`}],incompatibleRules:["dark-mode"]};var kt={id:"bento-grid",name:"Bento Grid",iconName:"LayoutGrid",description:"A bold, card-based layout system inspired by Apple's product pages and modern portfolio sites. Features asymmetric grids, large typography, and vibrant accent colors.",shortDescription:"Card-based grids, bold type, Apple-inspired",tier:"free",previewImage:"/vibes/bento-grid.png",colors:{background:"hsl(220, 14%, 96%)",surface:"hsl(0, 0%, 100%)",surfaceHover:"hsl(0, 0%, 98%)",elevated:"hsl(0, 0%, 100%)",border:"hsl(220, 13%, 91%)",borderSubtle:"hsl(220, 13%, 94%)",textPrimary:"hsl(220, 14%, 10%)",textSecondary:"hsl(220, 10%, 40%)",textTertiary:"hsl(220, 8%, 55%)",accent:"hsl(24, 95%, 53%)",accentHover:"hsl(24, 95%, 46%)",accentMuted:"hsl(24, 80%, 92%)",success:"hsl(142, 71%, 35%)",warning:"hsl(38, 92%, 50%)",error:"hsl(0, 84%, 50%)"},typography:{fontFamily:"Space Grotesk, Inter, system-ui, sans-serif",fontFamilyMono:"JetBrains Mono, monospace",hero:"text-6xl md:text-8xl font-bold tracking-[-0.04em] leading-[0.95]",h1:"text-4xl md:text-6xl font-bold tracking-[-0.03em]",h2:"text-2xl md:text-4xl font-bold tracking-tight",h3:"text-xl font-semibold",body:"text-base leading-relaxed",small:"text-sm",code:"font-mono text-sm"},componentPatterns:[{name:"Card Base",description:"Standard bento grid card (1x1)",classes:"bg-white rounded-3xl border border-[hsl(220,13%,91%)] p-6 shadow-sm overflow-hidden"},{name:"Card Interactive",description:"Interactive bento card that lifts on hover",classes:"bg-white rounded-3xl border border-[hsl(220,13%,91%)] p-6 shadow-sm hover:shadow-lg hover:-translate-y-1 transition-all duration-300 overflow-hidden cursor-pointer"},{name:"Card Accent",description:"Highlighted bento card with accent gradient",classes:"bg-gradient-to-br from-[hsl(24,95%,53%)] to-[hsl(38,92%,50%)] rounded-3xl p-8 text-white shadow-md hover:shadow-xl hover:-translate-y-1 transition-all duration-300 overflow-hidden cursor-pointer"},{name:"Button Primary",description:"Bold rounded button with accent color",classes:"inline-flex items-center justify-center whitespace-nowrap bg-[hsl(24,95%,53%)] hover:bg-[hsl(24,95%,46%)] text-white rounded-full px-8 py-3.5 font-semibold text-base transition-all duration-200 hover:shadow-lg hover:-translate-y-0.5 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[hsl(24,95%,53%)] focus-visible:ring-offset-2"},{name:"Button Secondary",description:"Ghost button with border",classes:"inline-flex items-center justify-center whitespace-nowrap bg-transparent hover:bg-[hsl(220,14%,96%)] text-[hsl(220,14%,10%)] rounded-full px-8 py-3.5 font-semibold border-2 border-[hsl(220,13%,91%)] transition-all duration-200 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[hsl(220,13%,91%)] focus-visible:ring-offset-2"},{name:"Input Base",description:"Highly rounded input field",classes:"flex w-full rounded-full border-2 border-[hsl(220,13%,91%)] bg-white px-6 py-3.5 text-base text-[hsl(220,14%,10%)] placeholder:text-[hsl(220,8%,55%)] focus-visible:outline-none focus-visible:border-[hsl(24,95%,53%)] focus-visible:ring-4 focus-visible:ring-[hsl(24,95%,53%)/0.1] transition-all"},{name:"Navigation Header",description:"Floating pill-shaped navbar",classes:"fixed top-4 left-1/2 -translate-x-1/2 w-[calc(100%-2rem)] max-w-5xl bg-white/80 backdrop-blur-xl border border-[hsl(220,13%,91%)] rounded-full px-6 py-4 shadow-lg shadow-black/5 z-50"}],animationRules:["Cards should scale up slightly (scale 1.02) and lift (translateY -4px) on hover with shadow increase","Use staggered reveals with 80ms delay between bento grid items","Page-level transitions should use a cascade from top-left to bottom-right","Icons inside cards should have a subtle rotate or bounce on card hover","Use framer-motion layout animations for grid reordering if filtering is added","NEVER use animation duration longer than 400ms","ALWAYS use ease-out timing for hover transitions"],specialInstructions:["UNIVERSAL ADAPTABILITY: This design system is built to be universally adaptable. Whether the user asks for a Developer Portfolio, a SaaS Dashboard, an E-commerce Store, or a Blog, apply these bento grid, rounded, Apple-inspired rules seamlessly.","Bento grids must use CSS Grid (not flexbox) for proper asymmetric layouts","Mix card sizes: combine 1x1, 2x1, and 1x2 cards for visual variety","At least one card in each grid should use the Accent gradient","Large hero typography is a defining feature \u2014 go BIG on headings (text-8xl on desktop)","Rounded corners should be consistently large (rounded-3xl / 24px) across all cards","Background should be a subtle warm gray, NOT pure white \u2014 this creates contrast with white cards"],enterpriseBlueprints:[{title:"Bento Portfolio Hero",description:"A highly asymmetric, 4-column portfolio hero section identical to modern UI trends. Best for designers and developers.",language:"tsx",code:`// src/components/hero.tsx
import { ArrowUpRight, Mail, Globe } from "lucide-react";

export function Hero() {
  return (
    <section className="relative overflow-hidden bg-[hsl(220,14%,96%)] min-h-screen py-12 md:py-24 flex items-center justify-center">
      <div className="container mx-auto px-4 max-w-7xl">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-4 md:gap-6 auto-rows-auto md:auto-rows-[320px]">
          
          {/* 1. Large Left Card */}
          <div className="md:col-span-2 md:row-span-2 bg-white rounded-[2.5rem] border border-[hsl(220,13%,91%)] p-8 md:p-12 shadow-sm flex flex-col justify-between hover:shadow-lg transition-shadow duration-300">
            <div>
              <div className="text-[hsl(220,10%,40%)] font-medium text-lg mb-8">
                Hi, I am Developer,<br/>
                Currently Fullstack Engineer @ Tech
              </div>
              <h1 className="text-4xl md:text-5xl lg:text-[4.2rem] font-bold tracking-tight text-[hsl(220,14%,10%)] leading-[1.05] mb-10">
                Crafting scalable <span className="text-[hsl(24,95%,53%)]">systems, interfaces</span> and <span className="text-[hsl(24,95%,53%)]">experiences.</span>
              </h1>
              <div className="inline-flex items-center gap-3 text-[hsl(220,14%,10%)] font-semibold bg-[hsl(220,14%,96%)] px-4 py-2 rounded-full border border-[hsl(220,13%,91%)]">
                <span className="w-2.5 h-2.5 rounded-full bg-[hsl(142,71%,35%)] shadow-[0_0_8px_hsl(142,71%,35%)] animate-pulse" /> 
                Available for a job
              </div>
            </div>
            
            <div className="flex flex-wrap items-center justify-between mt-12 pt-8 border-t border-[hsl(220,13%,91%)] gap-4">
              <div className="flex gap-4">
                <button className="bg-[hsl(220,14%,10%)] hover:bg-[hsl(220,14%,20%)] text-white px-8 py-4 rounded-full font-bold transition-all shadow-md hover:shadow-xl hover:-translate-y-0.5">
                  Contact
                </button>
                <button className="bg-white hover:bg-[hsl(220,14%,96%)] text-[hsl(220,14%,10%)] border-2 border-[hsl(220,13%,91%)] px-8 py-4 rounded-full font-bold transition-all flex items-center gap-2 hover:-translate-y-0.5 shadow-sm">
                  Resume <ArrowUpRight className="w-5 h-5" />
                </button>
              </div>
              <div className="flex gap-3">
                <a href="#" className="w-14 h-14 flex items-center justify-center rounded-full bg-[hsl(220,14%,96%)] hover:bg-[hsl(220,13%,91%)] transition-colors">
                  <Mail className="w-6 h-6 text-[hsl(220,14%,10%)]" />
                </a>
                <a href="#" className="w-14 h-14 flex items-center justify-center rounded-full bg-[hsl(220,14%,96%)] hover:bg-[hsl(220,13%,91%)] transition-colors">
                  <Globe className="w-6 h-6 text-[hsl(220,14%,10%)]" />
                </a>
              </div>
            </div>
          </div>

          {/* 2. Middle Top Card (Image) */}
          <div className="md:col-span-1 md:row-span-1 bg-[hsl(220,13%,91%)] rounded-[2.5rem] overflow-hidden relative group shadow-sm">
             <img 
               src="https://images.unsplash.com/photo-1531297172867-4f4013642461?auto=format&fit=crop&q=80" 
               alt="Setup" 
               className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700" 
             />
          </div>

          {/* 3. Middle Bottom Card (Works) */}
          <div className="md:col-span-1 md:row-span-1 bg-white rounded-[2.5rem] border border-[hsl(220,13%,91%)] p-8 shadow-sm flex flex-col justify-between group cursor-pointer hover:shadow-xl hover:-translate-y-1 transition-all duration-300">
            <div>
              <h2 className="text-3xl font-bold text-[hsl(220,14%,10%)] mb-4">Works</h2>
              <p className="text-[hsl(220,10%,40%)] leading-relaxed font-medium">Have a glimpse on selected works of mine.</p>
            </div>
            <div className="w-12 h-12 rounded-full bg-[hsl(220,14%,96%)] flex items-center justify-center group-hover:bg-[hsl(24,95%,53%)] group-hover:text-white text-[hsl(220,14%,10%)] transition-colors mt-8">
               <ArrowUpRight className="w-5 h-5" />
            </div>
          </div>

          {/* 4. Right Tall Card (About Me) */}
          <div className="md:col-span-1 md:row-span-2 bg-[hsl(220,14%,10%)] rounded-[2.5rem] p-8 shadow-sm flex flex-col justify-between relative overflow-hidden group cursor-pointer hover:shadow-xl hover:-translate-y-1 transition-all duration-300 border border-[hsl(220,14%,20%)]">
            <div className="relative z-10">
              <h2 className="text-3xl font-bold text-white mb-4">About me</h2>
              <p className="text-[hsl(220,8%,55%)] font-medium leading-relaxed">Have a glimpse on selected stories of mine.</p>
            </div>

            {/* Overlapping Images representation */}
            <div className="relative flex-1 min-h-[200px] mt-8 z-10 pointer-events-none">
               <div className="absolute top-10 right-0 w-36 h-48 rounded-2xl overflow-hidden shadow-2xl rotate-6 group-hover:rotate-12 transition-transform duration-500 border-4 border-[hsl(220,14%,10%)]">
                 <img 
                   src="https://images.unsplash.com/photo-1544148103-0773bf10d330?auto=format&fit=crop&q=80" 
                   alt="Design" 
                   className="w-full h-full object-cover mix-blend-luminosity hover:mix-blend-normal transition-all" 
                 />
               </div>
               <div className="absolute bottom-10 left-0 w-36 h-48 rounded-2xl overflow-hidden shadow-2xl -rotate-6 group-hover:-rotate-12 transition-transform duration-500 border-4 border-[hsl(220,14%,10%)]">
                 <img 
                   src="https://images.unsplash.com/photo-1581291518633-83b4ebd1d83e?auto=format&fit=crop&q=80" 
                   alt="Process" 
                   className="w-full h-full object-cover mix-blend-luminosity hover:mix-blend-normal transition-all" 
                 />
               </div>
            </div>

            <div className="w-12 h-12 rounded-full bg-white/10 flex items-center justify-center group-hover:bg-white text-white group-hover:text-[hsl(220,14%,10%)] transition-colors relative z-10 mt-8">
               <ArrowUpRight className="w-5 h-5" />
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}`},{title:"Bento Feature Grid",description:"An asymmetric grid layout mixing different card sizes.",language:"tsx",code:`// src/components/bento-features.tsx
import { LineChart, Smartphone, Globe2, ShieldCheck } from "lucide-react";

export function BentoFeatures() {
  return (
    <section className="py-24 bg-[hsl(220,14%,96%)]">
      <div className="container mx-auto px-4 max-w-6xl">
        <div className="mb-16 text-center">
          <h2 className="text-4xl md:text-5xl font-bold tracking-tight text-[hsl(220,14%,10%)] mb-4">Powerful Features</h2>
          <p className="text-[hsl(220,10%,40%)] text-lg">Everything you need in a single, perfectly organized box.</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 auto-rows-[320px]">
          {/* Large Card (2 columns, 1 row) */}
          <div className="md:col-span-2 bg-white rounded-[2rem] border border-[hsl(220,13%,91%)] p-8 shadow-sm hover:shadow-lg hover:-translate-y-1 transition-all duration-300 flex flex-col justify-between overflow-hidden relative group cursor-pointer">
            <div className="relative z-10">
              <h3 className="text-3xl font-bold text-[hsl(220,14%,10%)] mb-3">Real-time Analytics</h3>
              <p className="text-[hsl(220,10%,40%)] text-lg max-w-md">Monitor your traffic, engagement, and conversion rates as they happen.</p>
            </div>
            <div className="w-14 h-14 rounded-2xl bg-[hsl(24,80%,92%)] text-[hsl(24,95%,53%)] flex items-center justify-center group-hover:scale-110 transition-transform origin-bottom-left">
              <LineChart className="w-7 h-7" />
            </div>
            <div className="absolute right-0 bottom-0 w-1/2 h-4/5 bg-gradient-to-t from-[hsl(24,80%,92%)] to-transparent opacity-50 pointer-events-none rounded-br-[2rem]" />
          </div>

          {/* Small Card (1x1) */}
          <div className="bg-gradient-to-br from-[hsl(24,95%,53%)] to-[hsl(38,92%,50%)] rounded-[2rem] p-8 text-white shadow-md hover:shadow-xl hover:-translate-y-1 transition-all duration-300 flex flex-col justify-between cursor-pointer">
            <div>
               <h3 className="text-2xl font-bold mb-2">Mobile First</h3>
               <p className="text-white/80">Looks perfect on every device.</p>
            </div>
            <Smartphone className="w-12 h-12 text-white/90" />
          </div>

          {/* Small Card (1x1) */}
          <div className="bg-white rounded-[2rem] border border-[hsl(220,13%,91%)] p-8 shadow-sm hover:shadow-lg hover:-translate-y-1 transition-all duration-300 flex flex-col justify-between cursor-pointer">
             <div>
               <h3 className="text-2xl font-bold text-[hsl(220,14%,10%)] mb-2">Global Edge</h3>
               <p className="text-[hsl(220,10%,40%)]">Deployed everywhere.</p>
             </div>
             <Globe2 className="w-12 h-12 text-[hsl(220,13%,91%)]" />
          </div>

          {/* Large Card (2 columns) */}
          <div className="md:col-span-2 bg-white rounded-[2rem] border border-[hsl(220,13%,91%)] p-8 shadow-sm hover:shadow-lg hover:-translate-y-1 transition-all duration-300 flex flex-col justify-between cursor-pointer group">
             <div className="flex items-center justify-between w-full">
                <div>
                   <h3 className="text-3xl font-bold text-[hsl(220,14%,10%)] mb-3">Bank-grade Security</h3>
                   <p className="text-[hsl(220,10%,40%)] text-lg">Your data is encrypted at rest and in transit.</p>
                </div>
                <div className="w-16 h-16 rounded-full bg-[hsl(142,71%,35%)]/10 text-[hsl(142,71%,35%)] flex items-center justify-center group-hover:rotate-12 transition-transform">
                   <ShieldCheck className="w-8 h-8" />
                </div>
             </div>
          </div>
        </div>
      </div>
    </section>
  );
}`},{title:"Bento Card Detail / Article",description:"Content contained within a massive rounded card.",language:"tsx",code:`// src/app/post/page.tsx
import { ArrowLeft } from "lucide-react";

export default function DetailPage() {
  return (
    <article className="min-h-screen bg-[hsl(220,14%,96%)] py-24">
      <div className="max-w-4xl mx-auto px-4">
        <button className="inline-flex items-center gap-2 text-[hsl(220,10%,40%)] hover:text-[hsl(220,14%,10%)] mb-8 transition-colors font-semibold">
          <ArrowLeft className="w-5 h-5" /> Back
        </button>

        <div className="bg-white rounded-[2.5rem] border border-[hsl(220,13%,91%)] p-8 md:p-16 shadow-lg">
          <header className="mb-12">
            <span className="inline-block px-4 py-1.5 rounded-full bg-[hsl(24,80%,92%)] text-[hsl(24,95%,53%)] text-sm font-bold mb-6">
              Product Update
            </span>
            <h1 className="text-4xl md:text-6xl font-bold tracking-tight text-[hsl(220,14%,10%)] mb-6 leading-[1.1]">
              Introducing the new Layout Engine
            </h1>
            <p className="text-xl text-[hsl(220,10%,40%)] leading-relaxed">
              We've completely rewritten our core rendering pipeline to bring you 60fps animations across all bento grid items.
            </p>
          </header>

          <div className="aspect-video w-full rounded-[1.5rem] bg-[hsl(220,14%,96%)] mb-12 overflow-hidden border border-[hsl(220,13%,91%)]">
             <img src="https://images.unsplash.com/photo-1618005182384-a83a8bd57fbe?auto=format&fit=crop&q=80" alt="Cover" className="w-full h-full object-cover" />
          </div>

          <div className="prose prose-lg prose-slate max-w-none prose-headings:tracking-tight prose-a:text-[hsl(24,95%,53%)]">
            <h2>The Need for Speed</h2>
            <p>
              When dealing with complex, asymmetric grid layouts, the browser's paint times can skyrocket. By utilizing the new layout engine, we've bypassed the main thread for all transform-based animations.
            </p>
            
            <div className="bg-[hsl(220,14%,96%)] p-6 rounded-2xl border border-[hsl(220,13%,91%)] my-8">
               <h3 className="mt-0">Key Improvements</h3>
               <ul>
                 <li>Zero layout thrashing during drag-and-drop</li>
                 <li>Sub-pixel rendering for borders</li>
                 <li>Automatic GPU acceleration for large cards</li>
               </ul>
            </div>
            
            <p>
              This update is rolling out to all Pro users starting today. Free users will receive the update early next month.
            </p>
          </div>
        </div>
      </div>
    </article>
  );
}`}]};var It={id:"glassmorphism",name:"Glassmorphism",iconName:"Droplets",description:"A futuristic, layered design featuring frosted glass panels, teal accents, and deep backgrounds. Inspired by Apple's visionOS and modern fintech apps.",shortDescription:"Frosted glass, teal accents, futuristic depth",tier:"pro",previewImage:"/vibes/glassmorphism.png",colors:{background:"hsl(230, 35%, 7%)",surface:"hsl(230, 25%, 12% / 0.6)",surfaceHover:"hsl(230, 25%, 16% / 0.7)",elevated:"hsl(230, 25%, 14% / 0.8)",border:"hsl(230, 20%, 30% / 0.3)",borderSubtle:"hsl(230, 20%, 25% / 0.2)",textPrimary:"hsl(0, 0%, 98%)",textSecondary:"hsl(220, 15%, 70%)",textTertiary:"hsl(220, 10%, 50%)",accent:"hsl(174, 80%, 50%)",accentHover:"hsl(174, 80%, 43%)",accentMuted:"hsl(174, 50%, 20%)",success:"hsl(142, 71%, 45%)",warning:"hsl(38, 92%, 50%)",error:"hsl(0, 84%, 60%)"},typography:{fontFamily:"Plus Jakarta Sans, Inter, system-ui, sans-serif",fontFamilyMono:"JetBrains Mono, monospace",hero:"text-5xl md:text-7xl font-bold tracking-tight",h1:"text-4xl md:text-5xl font-bold tracking-tight",h2:"text-2xl md:text-3xl font-semibold",h3:"text-xl font-medium",body:"text-base leading-relaxed",small:"text-sm",code:"font-mono text-sm"},componentPatterns:[{name:"Card Base",description:"Frosted glass card with blur backdrop",classes:"bg-[hsl(230,25%,12%)/0.4] backdrop-blur-xl rounded-2xl border border-[hsl(230,20%,30%)/0.3] p-6 shadow-lg shadow-black/20 transition-all duration-300"},{name:"Card Interactive",description:"Frosted glass card that glows on hover",classes:"bg-[hsl(230,25%,12%)/0.4] backdrop-blur-xl rounded-2xl border border-[hsl(230,20%,30%)/0.3] p-6 shadow-lg shadow-black/20 hover:bg-[hsl(230,25%,16%)/0.5] hover:border-[hsl(174,80%,50%)/0.4] hover:shadow-[0_8px_30px_hsl(174,80%,50%/0.15)] hover:-translate-y-1 transition-all duration-300 cursor-pointer"},{name:"Button Primary",description:"Teal accent button with glow",classes:"inline-flex items-center justify-center whitespace-nowrap bg-[hsl(174,80%,50%)] hover:bg-[hsl(174,80%,43%)] text-[hsl(230,35%,7%)] rounded-xl px-6 py-3 font-semibold transition-all duration-200 shadow-[0_0_20px_hsl(174,80%,50%/0.3)] hover:shadow-[0_0_30px_hsl(174,80%,50%/0.5)] hover:-translate-y-0.5 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[hsl(174,80%,50%)] focus-visible:ring-offset-2 focus-visible:ring-offset-[hsl(230,35%,7%)]"},{name:"Button Secondary",description:"Glass-effect button",classes:"inline-flex items-center justify-center whitespace-nowrap bg-white/10 backdrop-blur-md hover:bg-white/15 text-white rounded-xl px-6 py-3 font-medium border border-white/10 hover:border-white/20 transition-all duration-200 shadow-sm focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white/50"},{name:"Input Base",description:"Glass-effect input field",classes:"flex w-full bg-white/5 backdrop-blur-md border border-white/10 rounded-xl px-4 py-3 text-white placeholder:text-white/40 focus-visible:border-[hsl(174,80%,50%)/0.5] focus-visible:ring-2 focus-visible:ring-[hsl(174,80%,50%)/0.2] outline-none transition-all"},{name:"Badge",description:"Glowing accent badge",classes:"inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-semibold bg-[hsl(174,80%,50%)/0.15] text-[hsl(174,80%,50%)] border border-[hsl(174,80%,50%)/0.3] shadow-[0_0_10px_hsl(174,80%,50%/0.2)]"},{name:"Navigation Header",description:"High-blur floating header",classes:"fixed top-4 left-4 right-4 md:left-auto md:right-auto md:w-[calc(100%-2rem)] max-w-5xl md:translate-x-0 bg-[hsl(230,25%,12%)/0.4] backdrop-blur-2xl border border-white/10 rounded-2xl px-6 py-4 shadow-xl z-50 supports-[backdrop-filter]:bg-[hsl(230,25%,12%)/0.2]"}],animationRules:["Glass panels should appear with a fade + scale(0.95 \u2192 1) animation, 400ms ease-out","Hovering glass cards should brighten the backdrop and shift border to accent color","Use a subtle parallax effect on background elements for depth","CTA buttons should have a breathing glow animation (pulse-glow, 3s infinite)","NEVER use sharp or instant transitions \u2014 everything should feel smooth and fluid","Use framer-motion spring animations with damping: 25, stiffness: 120"],specialInstructions:["UNIVERSAL ADAPTABILITY: This design system is built to be universally adaptable. Whether the user asks for a Developer Portfolio, a SaaS Dashboard, an E-commerce Store, or a Blog, apply these translucent, futuristic glassmorphism rules seamlessly.","Glassmorphism requires a visually rich background \u2014 use gradient orbs, mesh gradients, or blurred shapes BEHIND the glass panels","backdrop-blur values should be between 12px and 24px \u2014 too little loses the glass effect, too much looks flat","Layer depth: background orbs \u2192 glass panels \u2192 content. Minimum 3 visual layers","Accent color (teal) creates striking contrast against the dark purple-blue background \u2014 use it for key CTAs and data highlights","Borders on glass elements must be semi-transparent white or accent \u2014 NEVER solid colors","This style is heavy on GPU \u2014 use will-change: transform on animated glass elements for performance"],enterpriseBlueprints:[{title:"Glassmorphism Hero",description:"A deeply layered hero section featuring glowing orbs behind a frosted glass content panel.",language:"tsx",code:`// src/components/hero.tsx
import { ArrowRight, Cpu } from "lucide-react";

export function Hero() {
  return (
    <section className="relative min-h-[90vh] flex items-center justify-center overflow-hidden bg-[hsl(230,35%,7%)] py-32">
      {/* Background Orbs */}
      <div className="absolute top-1/4 left-1/4 w-[400px] h-[400px] bg-[hsl(174,80%,50%)]/20 rounded-full blur-[100px] mix-blend-screen animate-pulse" />
      <div className="absolute bottom-1/4 right-1/4 w-[500px] h-[500px] bg-[hsl(260,80%,50%)]/20 rounded-full blur-[120px] mix-blend-screen" />
      
      <div className="container relative z-10 mx-auto px-4 text-center max-w-4xl">
        <div className="bg-[hsl(230,25%,12%)/0.4] backdrop-blur-2xl border border-white/10 rounded-3xl p-8 md:p-16 shadow-2xl">
          <div className="inline-flex items-center px-4 py-1.5 rounded-full bg-[hsl(174,80%,50%)/0.15] text-[hsl(174,80%,50%)] border border-[hsl(174,80%,50%)/0.3] shadow-[0_0_10px_hsl(174,80%,50%/0.2)] text-sm font-semibold mb-8">
            <Cpu className="w-4 h-4 mr-2" /> AI Copilot Engine
          </div>
          
          <h1 className="text-5xl md:text-7xl font-bold tracking-tight text-white mb-6">
            The future of interface <br className="hidden md:block" />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-[hsl(174,80%,50%)] to-white">is transparent.</span>
          </h1>
          
          <p className="text-lg md:text-xl text-[hsl(220,15%,70%)] mb-10 max-w-2xl mx-auto leading-relaxed">
            Harness the power of layered spatial design. Build immersive web applications with our advanced glassmorphism rendering engine.
          </p>

          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <button className="w-full sm:w-auto inline-flex items-center justify-center rounded-xl bg-[hsl(174,80%,50%)] text-[hsl(230,35%,7%)] hover:bg-[hsl(174,80%,43%)] px-8 py-4 font-semibold transition-all shadow-[0_0_20px_hsl(174,80%,50%/0.3)] hover:shadow-[0_0_30px_hsl(174,80%,50%/0.5)] hover:-translate-y-0.5 gap-2">
              Start Free Trial <ArrowRight className="w-5 h-5" />
            </button>
            <button className="w-full sm:w-auto inline-flex items-center justify-center rounded-xl bg-white/10 backdrop-blur-md hover:bg-white/15 text-white border border-white/10 px-8 py-4 font-medium transition-all hover:-translate-y-0.5 gap-2">
              View Components
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}`},{title:"Glassmorphism Feature Grid",description:"Grid of frosted glass cards over a dark gradient background.",language:"tsx",code:`// src/components/features.tsx
import { Layers, Activity, Lock, Maximize } from "lucide-react";

export function Features() {
  const features = [
    {
      icon: <Layers className="w-6 h-6" />,
      title: "Spatial Layering",
      desc: "True Z-axis depth using dynamic backdrop filters and multi-layered rendering."
    },
    {
      icon: <Activity className="w-6 h-6" />,
      title: "Hardware Accelerated",
      desc: "Optimized blur calculations pushed directly to the GPU for solid 60fps."
    },
    {
      icon: <Lock className="w-6 h-6" />,
      title: "Secure by Design",
      desc: "Content is isolated. What happens behind the glass stays behind the glass."
    },
    {
      icon: <Maximize className="w-6 h-6" />,
      title: "Fluid Layouts",
      desc: "Responsive geometries that adapt seamlessly from watch screens to 8K displays."
    }
  ];

  return (
    <section className="relative py-24 bg-[hsl(230,35%,7%)] overflow-hidden">
      {/* Background effect */}
      <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-[hsl(174,80%,50%)]/10 rounded-full blur-[150px] pointer-events-none" />
      
      <div className="container mx-auto px-4 max-w-6xl relative z-10">
        <div className="mb-16 text-center">
          <h2 className="text-4xl md:text-5xl font-bold tracking-tight text-white mb-4">Core Architecture</h2>
          <p className="text-[hsl(220,15%,70%)] text-lg max-w-2xl mx-auto">Engineered from the ground up to support massive scale spatial computing interfaces.</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {features.map((feature, i) => (
            <div key={i} className="bg-[hsl(230,25%,12%)/0.4] backdrop-blur-xl rounded-2xl border border-[hsl(230,20%,30%)/0.3] p-8 shadow-lg shadow-black/20 hover:bg-[hsl(230,25%,16%)/0.5] hover:border-[hsl(174,80%,50%)/0.4] hover:shadow-[0_8px_30px_hsl(174,80%,50%/0.15)] hover:-translate-y-1 transition-all duration-300 cursor-pointer group flex flex-col h-full">
              <div className="w-12 h-12 rounded-xl bg-white/5 border border-white/10 text-[hsl(174,80%,50%)] flex items-center justify-center mb-6 group-hover:scale-110 transition-transform shadow-[0_0_15px_hsl(174,80%,50%/0.1)]">
                {feature.icon}
              </div>
              <h3 className="text-xl font-semibold text-white mb-3">{feature.title}</h3>
              <p className="text-[hsl(220,15%,70%)] leading-relaxed flex-grow">{feature.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}`},{title:"Glassmorphism Article / Setup",description:"A reading layout utilizing multiple levels of glass opacity.",language:"tsx",code:`// src/app/post/page.tsx
import { ArrowLeft } from "lucide-react";

export default function DetailPage() {
  return (
    <article className="min-h-screen bg-[hsl(230,35%,7%)] py-24 relative overflow-hidden">
      {/* Background Meshes */}
      <div className="absolute top-0 left-0 w-full h-[500px] bg-gradient-to-b from-[hsl(174,80%,50%)]/10 to-transparent pointer-events-none" />
      <div className="absolute top-40 right-20 w-[300px] h-[300px] bg-[hsl(260,80%,50%)]/20 blur-[100px] rounded-full pointer-events-none" />

      <div className="max-w-4xl mx-auto px-4 relative z-10">
        <button className="inline-flex items-center gap-2 text-[hsl(220,15%,70%)] hover:text-white mb-8 transition-colors font-medium bg-white/5 backdrop-blur-md px-4 py-2 rounded-lg border border-white/10 hover:border-white/20">
          <ArrowLeft className="w-4 h-4" /> Go Back
        </button>

        <div className="bg-[hsl(230,25%,12%)/0.6] backdrop-blur-2xl rounded-[2rem] border border-[hsl(230,20%,30%)/0.3] shadow-2xl overflow-hidden">
          <div className="aspect-[21/9] w-full bg-[hsl(230,25%,12%)] relative">
             <img src="https://images.unsplash.com/photo-1550751827-4bd374c3f58b?auto=format&fit=crop&q=80" alt="Cover" className="w-full h-full object-cover mix-blend-luminosity opacity-40" />
             <div className="absolute inset-0 bg-gradient-to-t from-[hsl(230,25%,12%)/0.8] to-transparent" />
          </div>

          <div className="p-8 md:p-12 lg:p-16">
            <header className="mb-12">
              <span className="inline-block px-3 py-1 rounded-full bg-[hsl(174,80%,50%)/0.1] text-[hsl(174,80%,50%)] text-sm font-medium mb-4 border border-[hsl(174,80%,50%)/0.2]">
                Documentation
              </span>
              <h1 className="text-4xl md:text-5xl font-bold tracking-tight text-white mb-6">
                Initializing the Rendering Engine
              </h1>
              <p className="text-xl text-[hsl(220,15%,70%)] leading-relaxed">
                Learn how to bootstrap the VibeOS spatial renderer within your Next.js application.
              </p>
            </header>

            <div className="prose prose-invert prose-lg max-w-none prose-headings:text-white prose-a:text-[hsl(174,80%,50%)]">
              <h2>Installation</h2>
              <p>
                First, install the core engine packages via npm or pnpm. Ensure you have the peer dependencies satisfied.
              </p>
              
              <div className="bg-black/40 backdrop-blur-md p-6 rounded-xl border border-white/10 my-8 shadow-inner">
                 <code className="text-[hsl(174,80%,50%)] font-mono">npm install @vibecraftz/engine framer-motion</code>
              </div>
              
              <h2>Configuring the Provider</h2>
              <p>
                Wrap your application root with the <code>SpatialProvider</code>. This sets up the WebGL context necessary for advanced backdrop-filter calculations on unsupported devices.
              </p>
              
              <div className="p-6 rounded-xl bg-white/5 border border-white/10 my-8">
                <h3 className="text-white mt-0 mb-2">Performance Tip</h3>
                <p className="text-[hsl(220,15%,70%)] m-0 text-base">
                  For mobile devices, you can set the <code>reduceMotion</code> prop to true, which will fallback to standard opacity layers instead of expensive gaussian blurs.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </article>
  );
}`}]};var _t={id:"neo-brutalism",name:"Neo-Brutalism",iconName:"Paintbrush",description:"A bold, unapologetically raw design featuring thick borders, flat primary colors, visible box shadows, and mono typography. Inspired by Gumroad, Figma community, and indie web.",shortDescription:"Thick borders, bold colors, raw typography",tier:"free",previewImage:"/vibes/neo-brutalism.png",colors:{background:"hsl(60, 30%, 96%)",surface:"hsl(0, 0%, 100%)",surfaceHover:"hsl(60, 20%, 94%)",elevated:"hsl(0, 0%, 100%)",border:"hsl(0, 0%, 0%)",borderSubtle:"hsl(0, 0%, 85%)",textPrimary:"hsl(0, 0%, 0%)",textSecondary:"hsl(0, 0%, 30%)",textTertiary:"hsl(0, 0%, 50%)",accent:"hsl(265, 90%, 60%)",accentHover:"hsl(265, 90%, 50%)",accentMuted:"hsl(265, 60%, 90%)",success:"hsl(130, 70%, 50%)",warning:"hsl(50, 100%, 55%)",error:"hsl(0, 90%, 55%)"},typography:{fontFamily:"Space Mono, monospace",fontFamilyMono:"Space Mono, JetBrains Mono, monospace",hero:"text-5xl md:text-7xl font-bold uppercase tracking-tight",h1:"text-4xl md:text-5xl font-bold uppercase",h2:"text-2xl md:text-3xl font-bold",h3:"text-xl font-bold",body:"text-base leading-relaxed font-mono",small:"text-sm font-mono",code:"font-mono text-sm"},componentPatterns:[{name:"Card Base",description:"Card with thick border and offset shadow",classes:"bg-white rounded-lg border-2 border-black p-6 shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] transition-all duration-200 overflow-hidden"},{name:"Card Interactive",description:"Interactive card that pushes down on active",classes:"bg-white rounded-lg border-2 border-black p-6 shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] hover:shadow-[6px_6px_0px_0px_rgba(0,0,0,1)] hover:-translate-x-0.5 hover:-translate-y-0.5 active:shadow-[0px_0px_0px_0px_rgba(0,0,0,1)] active:translate-x-1 active:translate-y-1 transition-all duration-150 overflow-hidden cursor-pointer"},{name:"Button Primary",description:"Bold button with hard shadow",classes:"inline-flex items-center justify-center whitespace-nowrap bg-[hsl(265,90%,60%)] hover:bg-[hsl(265,90%,50%)] text-white font-bold uppercase text-sm tracking-wider rounded-lg px-6 py-3 border-2 border-black shadow-[3px_3px_0px_0px_rgba(0,0,0,1)] active:shadow-[0px_0px_0px_0px_rgba(0,0,0,1)] active:translate-x-[3px] active:translate-y-[3px] transition-all duration-150 focus-visible:outline-none focus-visible:ring-4 focus-visible:ring-[hsl(265,90%,60%)/0.3]"},{name:"Button Secondary",description:"White button with hard shadow",classes:"inline-flex items-center justify-center whitespace-nowrap bg-white hover:bg-[hsl(60,20%,94%)] text-black font-bold uppercase text-sm tracking-wider rounded-lg px-6 py-3 border-2 border-black shadow-[3px_3px_0px_0px_rgba(0,0,0,1)] active:shadow-[0px_0px_0px_0px_rgba(0,0,0,1)] active:translate-x-[3px] active:translate-y-[3px] transition-all duration-150 focus-visible:outline-none focus-visible:ring-4 focus-visible:ring-[hsl(265,90%,60%)/0.3]"},{name:"Input Base",description:"Bold-bordered input",classes:"flex w-full bg-white border-2 border-black rounded-lg px-4 py-3 text-black placeholder:text-[hsl(0,0%,50%)] focus-visible:ring-4 focus-visible:ring-[hsl(265,90%,60%)/0.3] outline-none font-mono transition-all disabled:opacity-50"},{name:"Badge",description:"Colored tag with border",classes:"inline-flex items-center px-3 py-1 rounded-md text-xs font-bold uppercase tracking-wider bg-[hsl(50,100%,55%)] text-black border-2 border-black"},{name:"Navigation Header",description:"Thick-bordered brutalist navbar",classes:"sticky top-0 w-full bg-[hsl(60,30%,96%)] border-b-4 border-black z-50 py-4"}],animationRules:["Buttons MUST move toward their shadow on press \u2014 translate and shrink shadow simultaneously","Hover on cards should expand the shadow outward while the card shifts up-left","Use bouncy, playful transitions \u2014 spring with stiffness: 300, damping: 15","Page elements should pop in with a quick scale(0.9 \u2192 1) + opacity, 250ms","NEVER use smooth fades alone \u2014 always pair with a transform","Add a slight rotation (-1deg to 1deg) on hover for playful elements like badges or tags","Keep animations SHORT and SNAPPY \u2014 max 250ms"],specialInstructions:["UNIVERSAL ADAPTABILITY: This design system is built to be universally adaptable. Whether the user asks for a Developer Portfolio, a SaaS Dashboard, an E-commerce Store, or a Blog, apply these bold, high-contrast brutalist rules seamlessly.","Borders are the PRIMARY design element \u2014 they must be 2px solid black everywhere, NO exceptions","Box shadows must be HARD (no blur) \u2014 offset shadow creates the brutal depth effect","Typography should be monospace or bold sans-serif \u2014 fonts should feel raw and intentional","Use a warm off-white background (not pure white) \u2014 hsl(60, 30%, 96%) for a paper-like feel","Color splashes: use 2-3 bright accent colors (purple, yellow, green) \u2014 flat, no gradients","This style embraces imperfection \u2014 slight rotations, mixed sizes, and asymmetry are GOOD","NEVER use gradients, glassmorphism, or blur effects \u2014 they contradict the brutal aesthetic"],enterpriseBlueprints:[{title:"Neo-Brutalist Hero Section",description:"A loud, high-impact hero section with massive typography and offset shadows.",language:"tsx",code:`// src/components/hero.tsx
import { ArrowRight, Star } from "lucide-react";

export function Hero() {
  return (
    <section className="relative overflow-hidden bg-[hsl(60,30%,96%)] pt-24 pb-32 border-b-4 border-black">
      <div className="container mx-auto px-4 text-center max-w-5xl relative z-10">
        <div className="inline-flex items-center px-4 py-2 rounded-md bg-[hsl(50,100%,55%)] border-2 border-black text-black font-bold uppercase tracking-wider text-sm mb-12 shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] hover:-rotate-2 transition-transform cursor-pointer">
          <Star className="w-4 h-4 mr-2 fill-black" />
          Radical Design System
        </div>
        
        <h1 className="text-6xl md:text-8xl font-black uppercase tracking-tight text-black mb-8 leading-[0.95]">
          Make it <span className="bg-[hsl(265,90%,60%)] text-white px-4 pb-2 border-4 border-black rounded-lg inline-block -rotate-1 mt-2">Loud</span> & Make it <span className="bg-[hsl(130,70%,50%)] text-black px-4 pb-2 border-4 border-black rounded-lg inline-block rotate-1 mt-2">Bold</span>
        </h1>
        
        <p className="text-xl md:text-2xl font-mono text-black mb-12 max-w-2xl mx-auto leading-relaxed border-l-4 border-black pl-6 text-left">
          Stop building boring websites. Embrace the raw, unapologetic power of Neo-Brutalism. Hard shadows, thick borders, and attitude.
        </p>

        <div className="flex flex-col sm:flex-row items-center justify-center gap-6">
          <button className="w-full sm:w-auto inline-flex items-center justify-center whitespace-nowrap bg-[hsl(265,90%,60%)] text-white font-bold uppercase text-lg tracking-wider rounded-lg px-8 py-4 border-2 border-black shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] active:shadow-[0px_0px_0px_0px_rgba(0,0,0,1)] active:translate-x-[4px] active:translate-y-[4px] transition-all duration-150 gap-3">
            Build Something <ArrowRight className="w-5 h-5" />
          </button>
          <button className="w-full sm:w-auto inline-flex items-center justify-center whitespace-nowrap bg-white text-black font-bold uppercase text-lg tracking-wider rounded-lg px-8 py-4 border-2 border-black shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] active:shadow-[0px_0px_0px_0px_rgba(0,0,0,1)] active:translate-x-[4px] active:translate-y-[4px] transition-all duration-150">
            Read The Docs
          </button>
        </div>
      </div>
      
      {/* Decorative background elements */}
      <div className="absolute top-20 left-10 w-32 h-32 bg-[hsl(0,90%,55%)] border-4 border-black rounded-full shadow-[8px_8px_0px_0px_rgba(0,0,0,1)] -z-10" />
      <div className="absolute bottom-20 right-20 w-40 h-40 bg-[hsl(50,100%,55%)] border-4 border-black rounded-lg shadow-[8px_8px_0px_0px_rgba(0,0,0,1)] rotate-12 -z-10" />
    </section>
  );
}`},{title:"Neo-Brutalist Feature Grid",description:"Thick-bordered cards with flat colors and playful interactions.",language:"tsx",code:`// src/components/features.tsx
import { Terminal, Cpu, Database, CloudLightning } from "lucide-react";

export function BrutalGrid() {
  const features = [
    {
      icon: <Terminal className="w-8 h-8" />,
      title: "CLI Driven",
      desc: "Generate components directly from your terminal. No mouse required.",
      color: "bg-[hsl(50,100%,55%)]"
    },
    {
      icon: <Cpu className="w-8 h-8" />,
      title: "Bare Metal",
      desc: "Zero abstractions. You have full control over every single pixel.",
      color: "bg-[hsl(265,90%,60%)]",
      textColor: "text-white"
    },
    {
      icon: <Database className="w-8 h-8" />,
      title: "Local First",
      desc: "Data lives on the device. Syncs when online. Blazing fast.",
      color: "bg-[hsl(130,70%,50%)]"
    },
    {
      icon: <CloudLightning className="w-8 h-8" />,
      title: "Edge Deploy",
      desc: "Push to worldwide edge nodes in less than 500 milliseconds.",
      color: "bg-[hsl(0,90%,55%)]",
      textColor: "text-white"
    }
  ];

  return (
    <section className="py-24 bg-[hsl(60,30%,96%)]">
      <div className="container mx-auto px-4 max-w-6xl">
        <div className="mb-16 border-4 border-black bg-white p-8 rounded-xl shadow-[8px_8px_0px_0px_rgba(0,0,0,1)] inline-block">
          <h2 className="text-4xl md:text-5xl font-black uppercase text-black mb-2">Core Features</h2>
          <p className="font-mono text-xl text-[hsl(0,0%,30%)]">What makes this stack unstoppable.</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {features.map((feature, i) => (
            <div key={i} className={\`\${feature.color} \${feature.textColor || "text-black"} rounded-xl border-4 border-black p-6 shadow-[6px_6px_0px_0px_rgba(0,0,0,1)] hover:shadow-[10px_10px_0px_0px_rgba(0,0,0,1)] hover:-translate-x-1 hover:-translate-y-1 transition-all duration-200 cursor-pointer flex flex-col h-full\`}>
              <div className="mb-6 p-3 border-2 border-current rounded-lg inline-flex w-fit">
                {feature.icon}
              </div>
              <h3 className="text-2xl font-bold uppercase mb-4">{feature.title}</h3>
              <p className="font-mono leading-relaxed flex-grow font-medium">{feature.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}`},{title:"Neo-Brutalist Blog / Detail Page",description:"High-contrast reading experience with monospace and sans-serif pairing.",language:"tsx",code:`// src/app/post/page.tsx
import { ArrowLeft } from "lucide-react";

export default function ArticlePage() {
  return (
    <article className="min-h-screen bg-[hsl(60,30%,96%)] pt-24 pb-32">
      <div className="max-w-4xl mx-auto px-4">
        <button className="inline-flex items-center gap-2 font-bold uppercase tracking-wider text-black mb-12 hover:bg-[hsl(50,100%,55%)] px-4 py-2 border-2 border-transparent hover:border-black rounded-lg transition-colors">
          <ArrowLeft className="w-5 h-5" /> Return
        </button>
        
        <header className="mb-12 border-b-4 border-black pb-12">
          <div className="flex gap-4 mb-6">
            <span className="bg-black text-white px-3 py-1 font-mono text-sm font-bold border-2 border-black">TUTORIAL</span>
            <span className="font-mono text-black font-bold py-1">2026-10-24</span>
          </div>
          <h1 className="text-5xl md:text-7xl font-black uppercase tracking-tight text-black leading-none">
            Shipping code without breaking production
          </h1>
        </header>

        <div className="aspect-video w-full border-4 border-black rounded-xl mb-12 shadow-[8px_8px_0px_0px_rgba(0,0,0,1)] overflow-hidden bg-white">
           <img src="https://images.unsplash.com/photo-1555066931-4365d14bab8c?auto=format&fit=crop&q=80" alt="Cover" className="w-full h-full object-cover grayscale contrast-125" />
        </div>

        <div className="prose prose-lg prose-black max-w-none font-mono font-medium">
          <p className="text-xl leading-relaxed mb-8 font-sans font-bold">
            Everyone breaks production at least once. It's a rite of passage. But doing it twice for the same reason is just bad engineering. Let's fix that.
          </p>
          
          <h2 className="text-3xl font-black uppercase mt-16 mb-6 font-sans">1. The CI/CD Pipeline</h2>
          <p className="mb-8">
            Your pipeline shouldn't just run tests; it should aggressively try to destroy your application before it reaches the public internet.
          </p>

          <pre className="bg-black text-[hsl(50,100%,55%)] p-6 rounded-xl border-4 border-black shadow-[6px_6px_0px_0px_rgba(255,255,255,1)]">
            <code>npm run test:chaos && npm run deploy</code>
          </pre>
          
          <div className="bg-[hsl(265,90%,60%)] text-white p-8 rounded-xl border-4 border-black shadow-[6px_6px_0px_0px_rgba(0,0,0,1)] my-12 rotate-1">
             <h3 className="font-sans font-black text-2xl uppercase mb-2">Golden Rule</h3>
             <p className="m-0 text-lg">If it's not automated, it's going to fail when you are tired.</p>
          </div>
        </div>
      </div>
    </article>
  );
}`}]};var se=[St,Nt,kt,It,_t],Ur=se.filter(e=>e.tier==="free"),Dr=se.filter(e=>e.tier==="pro"||e.tier==="pro_plus");function Ct(e){return se.find(t=>t.id===e)}var Pe=[{id:"nextjs-15",name:"Next.js 15",category:"framework",version:"15",iconName:"simple-icons:nextdotjs",description:"React framework with App Router, SSR, and API routes",rules:["ALWAYS use Next.js 15 with the App Router (app/ directory)","ALWAYS use Server Components by default \u2014 add 'use client' ONLY when the component needs browser APIs, hooks, or event handlers","ALWAYS use next/image for images \u2014 NEVER use raw <img> tags","ALWAYS use next/link for internal navigation \u2014 NEVER use <a> for internal routes","ALWAYS use next/font for loading fonts \u2014 NEVER use external CSS font imports","Place API endpoints in app/api/ directory using route.ts files","Use loading.tsx for loading states and error.tsx for error boundaries","Use metadata exports for SEO \u2014 NEVER use raw <meta> tags in components"],imports:["next","next/image","next/link","next/font/google"],fileStructure:["app/layout.tsx \u2014 Root layout with providers and global styles","app/page.tsx \u2014 Home page","app/[route]/page.tsx \u2014 Route pages","app/api/[endpoint]/route.ts \u2014 API routes","components/ \u2014 Reusable components","lib/ \u2014 Utility functions and configurations","public/ \u2014 Static assets"]},{id:"vite-react",name:"Vite + React",category:"framework",version:"6",iconName:"simple-icons:vite",description:"Lightning-fast React development with Vite bundler",rules:["Use Vite 6 with React 19 and TypeScript","Use react-router-dom v7 for routing","Use Vite's built-in environment variable handling (import.meta.env)","Place all pages in src/pages/ directory","Place reusable components in src/components/ directory","Use lazy() and Suspense for code-splitting routes"],imports:["react","react-dom","react-router-dom"],fileStructure:["src/main.tsx \u2014 Entry point","src/App.tsx \u2014 Root component with router","src/pages/ \u2014 Page components","src/components/ \u2014 Reusable components","src/lib/ \u2014 Utilities","public/ \u2014 Static assets"]},{id:"nuxt-3",name:"Nuxt 3",category:"framework",version:"3",iconName:"simple-icons:nuxtdotjs",description:"The Intuitive Vue Framework",rules:["Use Nuxt 3 with Vue 3 Composition API and <script setup>","Use auto-imports for components, composables, and Vue APIs","Place pages in pages/ directory to enable file-based routing","Use server/api/ for server routes"],imports:["vue","nuxt"],fileStructure:["app.vue \u2014 Root component","pages/ \u2014 File-based routing","components/ \u2014 Auto-imported components","server/api/ \u2014 API routes"]},{id:"sveltekit",name:"SvelteKit",category:"framework",version:"2",iconName:"simple-icons:svelte",description:"Rapid development with Svelte",rules:["Use SvelteKit with Svelte 5 runes ($state, $derived, etc.)","Use +page.svelte for UI and +page.server.ts for server load functions","Keep logic close to templates where possible"],imports:["svelte","@sveltejs/kit"],fileStructure:["src/routes/ \u2014 File-based routing","src/lib/ \u2014 Shared utilities and components"]},{id:"astro",name:"Astro",category:"framework",version:"4",iconName:"simple-icons:astro",description:"The web framework for content-driven websites",rules:["Use Astro components (.astro) for static content","Use framework integrations (React/Vue/Svelte) only for interactive islands","Use client:load or client:visible for interactive components"],imports:["astro"],fileStructure:["src/pages/ \u2014 File-based routing","src/components/ \u2014 Astro and UI components","src/layouts/ \u2014 Page layouts"]},{id:"remix",name:"Remix",category:"framework",version:"2",iconName:"simple-icons:remix",description:"Full stack web framework focused on web standards",rules:["Use Remix with React and Vite","Use route loaders for data fetching and actions for data mutations","Use nested routing structure in app/routes"],imports:["@remix-run/react","@remix-run/node"],fileStructure:["app/root.tsx \u2014 Root layout","app/routes/ \u2014 File-based routing","app/components/ \u2014 UI components"]},{id:"tailwindcss-4",name:"Tailwind CSS 4",category:"styling",version:"4",iconName:"simple-icons:tailwindcss",description:"Utility-first CSS framework \u2014 latest version with CSS-first config",rules:["ALWAYS use Tailwind CSS utility classes for styling \u2014 NEVER write custom CSS unless absolutely necessary","NEVER use arbitrary values like text-[#ff0000] \u2014 define design tokens in the CSS @theme block instead","NEVER use inline style={{ }} attributes \u2014 Tailwind classes cover all cases","NEVER use !important \u2014 restructure your class order or specificity instead","Use responsive prefixes mobile-first: sm:, md:, lg:, xl:","Use hover:, focus:, active: state prefixes for interactive styles","Group related utilities logically: layout \u2192 spacing \u2192 sizing \u2192 colors \u2192 typography \u2192 effects"],imports:["tailwindcss"],fileStructure:["app/globals.css \u2014 Global styles with @import 'tailwindcss' and @theme block","postcss.config.mjs \u2014 PostCSS configuration with @tailwindcss/postcss"]},{id:"shadcn-ui",name:"shadcn/ui",category:"components",version:"latest",iconName:"simple-icons:shadcnui",description:"Beautifully designed, accessible components built on Radix UI",rules:["ALWAYS use shadcn/ui components as the base for UI elements \u2014 DO NOT build custom implementations of common components (Button, Dialog, Select, etc.)","Import shadcn components from @/components/ui/","Customize shadcn components via Tailwind classes and the cn() utility \u2014 NEVER modify the component source directly","Use the shadcn CLI to add new components: npx shadcn@latest add [component]","All shadcn components support dark mode out of the box \u2014 leverage this"],imports:["@radix-ui/*","class-variance-authority"],fileStructure:["components/ui/ \u2014 shadcn/ui components (auto-generated via CLI)","lib/utils.ts \u2014 cn() utility function for class merging"]},{id:"lucide-react",name:"Lucide React",category:"icons",version:"latest",iconName:"simple-icons:lucide",description:"Beautiful, consistent open-source icon library",rules:["ALWAYS use lucide-react for icons \u2014 NEVER use other icon libraries or raw SVGs","Import icons individually: import { IconName } from 'lucide-react'","Use consistent icon sizing: size={16} for small, size={20} for medium, size={24} for large","Use strokeWidth={2} by default, strokeWidth={2.5} for emphasis","Add meaningful aria-label to decorative icons that convey meaning"],imports:["lucide-react"],fileStructure:[]},{id:"framer-motion",name:"Framer Motion",category:"animation",version:"latest",iconName:"simple-icons:framer",description:"Production-ready motion library for React",rules:["Use framer-motion for all complex animations \u2014 page transitions, layout animations, gestures","Import motion components: import { motion, AnimatePresence } from 'framer-motion'","Use AnimatePresence for exit animations on conditionally rendered elements","Define reusable animation variants as constant objects outside components","Use CSS transitions (via Tailwind) for simple hover/focus effects \u2014 reserve framer-motion for complex sequences","ALWAYS add the 'will-change' property for GPU-accelerated animations to avoid jank"],imports:["framer-motion"],fileStructure:[]},{id:"supabase",name:"Supabase",category:"database",version:"latest",iconName:"simple-icons:supabase",description:"Open-source Firebase alternative with PostgreSQL, Auth, and Storage",rules:["Use @supabase/supabase-js for database operations and @supabase/ssr for auth in Next.js","Create separate Supabase clients for browser (client.ts) and server (server.ts) usage","ALWAYS use Row Level Security (RLS) policies \u2014 NEVER expose tables without RLS","Use Supabase Auth for authentication \u2014 supports Magic Link, OAuth, and password","Store environment variables in .env.local: NEXT_PUBLIC_SUPABASE_URL and NEXT_PUBLIC_SUPABASE_ANON_KEY","Use typed queries with generated types from supabase gen types"],imports:["@supabase/supabase-js","@supabase/ssr"],fileStructure:["lib/supabase/client.ts \u2014 Browser Supabase client","lib/supabase/server.ts \u2014 Server Supabase client","supabase/migrations/ \u2014 SQL migration files"]},{id:"firebase-db",name:"Firebase Firestore",category:"database",version:"latest",iconName:"simple-icons:firebase",description:"NoSQL document database by Google",rules:["Use Firebase Firestore SDK v9+ (modular API)","Set up strict security rules for all collections","Use batch writes for multi-document updates"],imports:["firebase/firestore"],fileStructure:["lib/firebase.ts \u2014 Firebase initialization"]},{id:"supabase-auth",name:"Supabase Auth",category:"auth",version:"latest",iconName:"ShieldCheck",description:"Built-in authentication with Supabase",rules:["Use Supabase Auth for all authentication \u2014 Magic Link (passwordless) as default","Support GitHub OAuth as a secondary login method","Use middleware.ts to protect routes and refresh auth tokens","Store user session in cookies using @supabase/ssr helpers","Create a profiles table linked to auth.users for extended user data"],imports:["@supabase/ssr"],fileStructure:["app/auth/login/page.tsx \u2014 Login page","app/auth/callback/route.ts \u2014 OAuth callback handler","middleware.ts \u2014 Auth middleware for route protection"]},{id:"firebase-auth",name:"Firebase Auth",category:"auth",version:"latest",iconName:"simple-icons:firebase",description:"Authentication by Google",rules:["Use Firebase Auth modular API","Support email/password and Google OAuth"],imports:["firebase/auth"],fileStructure:["lib/firebase.ts \u2014 Firebase initialization"]},{id:"clerk-auth",name:"Clerk",category:"auth",version:"latest",iconName:"simple-icons:clerk",description:"Complete authentication and user management",rules:["Use Clerk Provider at the root of the app","Use Clerk's pre-built UI components (<SignIn />, <UserButton />)","Use auth() middleware for protecting API routes"],imports:["@clerk/nextjs"],fileStructure:["middleware.ts \u2014 Clerk auth middleware"]},{id:"next-auth",name:"NextAuth / Auth.js",category:"auth",version:"5",iconName:"simple-icons:nextauth",description:"Open source authentication for Next.js",rules:["Use Auth.js (NextAuth v5) beta for App Router compatibility","Export auth, signIn, signOut from auth.ts at the project root","Use SessionProvider only when necessary (e.g., inside client components)","Prefer Server-side authentication checks using the auth() function"],imports:["next-auth"],fileStructure:["auth.ts \u2014 NextAuth configuration and providers","app/api/auth/[...nextauth]/route.ts \u2014 NextAuth API route"]},{id:"vercel",name:"Vercel",category:"deploy",version:"latest",iconName:"Triangle",description:"Optimal deployment platform for Next.js applications",rules:["Deploy to Vercel for zero-configuration hosting optimized for Next.js","Use Vercel Environment Variables for secrets \u2014 NEVER commit .env files","Use Vercel Analytics for web vitals tracking","Configure vercel.json only if custom headers, redirects, or rewrites are needed","Use Vercel's Edge Functions for low-latency API routes when appropriate"],imports:[],fileStructure:["vercel.json \u2014 Optional Vercel configuration"]},{id:"netlify",name:"Netlify",category:"deploy",version:"latest",iconName:"simple-icons:netlify",description:"Build, deploy, and scale modern web projects",rules:["Use Netlify for continuous deployment from Git","Configure netlify.toml for build settings and redirects","Use Netlify Edge Functions for middleware"],imports:[],fileStructure:["netlify.toml \u2014 Netlify configuration"]},{id:"railway",name:"Railway",category:"deploy",version:"latest",iconName:"simple-icons:railway",description:"Bring your code, we'll handle the rest",rules:["Use Railway for containerized deployments and managed databases","Provide a custom Start Command if default is not sufficient","Use railway variables for environment configuration"],imports:[],fileStructure:["railway.json \u2014 Optional Railway configuration"]}];function At(e){return Pe.find(t=>t.id===e)}var Et=[{id:"framework",label:"Framework",required:!0},{id:"styling",label:"Styling",required:!0},{id:"components",label:"Components",required:!1},{id:"icons",label:"Icons",required:!1},{id:"animation",label:"Animation",required:!1},{id:"database",label:"Database",required:!1},{id:"auth",label:"Authentication",required:!1},{id:"deploy",label:"Deployment",required:!1}];var re=[{id:"anti-hallucination",name:"Anti-Hallucination",description:"Prevent AI from inventing packages, APIs, or patterns that don't exist",category:"anti-hallucination",tier:"free",rules:["NEVER import packages or modules that were not explicitly listed in the project dependencies","NEVER invent API endpoints, function signatures, or component props that don't exist in the codebase","NEVER use deprecated APIs or features \u2014 always use the latest stable version syntax","If you are unsure about a package API, state your uncertainty and suggest the user verify \u2014 do NOT guess","NEVER create placeholder or mock data in production code without clearly marking it as TODO","ALWAYS verify that imported CSS classes, Tailwind utilities, and component names actually exist","When referencing external services (APIs, databases), use ONLY the configuration patterns documented above"]},{id:"architecture",name:"Component Architecture",description:"Enforce clean separation of concerns and file organization",category:"architecture",tier:"free",rules:["Separate components into Client Components ('use client') and Server Components \u2014 Server Components are the DEFAULT","Add 'use client' ONLY when the component needs: useState, useEffect, event handlers (onClick, onChange), browser APIs, or third-party client libraries","Keep components small and focused \u2014 if a component exceeds 150 lines, split it into sub-components","Use a flat component structure: components/ui/ for primitives, components/[feature]/ for feature-specific","Co-locate related files: component, styles, types, and tests should be near each other","Export components as named exports (NOT default exports) for better refactoring support","Shared types go in lib/types.ts \u2014 component-specific types stay in the component file"]},{id:"responsive",name:"Responsive-First",description:"Enforce mobile-first responsive design patterns",category:"responsive",tier:"free",rules:["ALWAYS design mobile-first \u2014 write base styles for mobile, then add breakpoint modifiers (sm:, md:, lg:, xl:)","Use these breakpoints consistently: sm (640px), md (768px), lg (1024px), xl (1280px)","Navigation: hamburger/drawer on mobile (< md), horizontal nav on desktop (>= md)","Grid layouts: 1 column on mobile \u2192 2 columns on tablet (md:) \u2192 3-4 columns on desktop (lg:)","Touch targets must be minimum 44x44 pixels on mobile \u2014 use min-h-11 min-w-11","Font sizes: NEVER go below text-sm (14px) on mobile screens","Test at these key widths: 375px (phone), 768px (tablet), 1280px (desktop), 1536px (wide)","Use max-w-7xl mx-auto for main content containers to prevent ultra-wide layouts"]},{id:"accessibility",name:"Accessibility (a11y)",description:"Ensure WCAG 2.1 AA compliance for all UI elements",category:"accessibility",tier:"pro",rules:["All interactive elements MUST have visible focus styles \u2014 use focus-visible: outline with accent color","Color contrast ratio must be at least 4.5:1 for normal text and 3:1 for large text","All images must have meaningful alt text \u2014 decorative images use alt=''","Use semantic HTML elements: <nav>, <main>, <section>, <article>, <aside>, <header>, <footer>","Forms must have associated <label> elements \u2014 use htmlFor to link labels to inputs","Keyboard navigation must work for ALL interactive elements \u2014 test Tab, Enter, Escape, Arrow keys","Use aria-label, aria-describedby, and role attributes when semantic HTML alone is insufficient","Modals must trap focus and return focus to the trigger element on close","Page must have exactly ONE <h1> element, with heading levels in logical order (h1 \u2192 h2 \u2192 h3)"]},{id:"animation-guidelines",name:"Animation Guidelines",description:"Standardize animation patterns for consistent UX",category:"animation",tier:"pro",rules:["Use CSS transitions for simple state changes (hover, focus) \u2014 reserve framer-motion for complex sequences","Standard durations: fast (150ms), base (200ms), slow (300ms) \u2014 NEVER exceed 500ms","Standard easing: ease-out for entrances, ease-in for exits, ease-in-out for state changes","Page content should fade in with a subtle upward motion: opacity 0\u21921, translateY 8px\u21920","Stagger children by 50-80ms for list/grid items appearing sequentially","ALWAYS respect prefers-reduced-motion: disable animations for users who prefer reduced motion","Use will-change: transform on GPU-accelerated animations to prevent paint jank","NEVER animate layout properties (width, height, top, left) \u2014 use transform and opacity only"]},{id:"dark-mode",name:"Dark Mode",description:"Enforce consistent dark mode implementation",category:"dark-mode",tier:"pro",rules:["Support both light and dark modes \u2014 use CSS custom properties for theming","Use prefers-color-scheme media query as the default, with a manual toggle option","Dark mode colors must maintain the same contrast ratios as light mode","Dark backgrounds should be warm-tinted (blue-black or neutral), NOT pure black (#000)","Surface hierarchy in dark mode: background (darkest) \u2192 surface \u2192 elevated (lightest)","Images and icons should work in both modes \u2014 use SVGs with currentColor when possible","Test ALL components in both modes \u2014 shadows, borders, and text must be visible in both"]},{id:"performance",name:"Performance",description:"Optimize for fast loading and smooth interactions",category:"performance",tier:"pro",rules:["Use next/image with appropriate width, height, and priority props for above-the-fold images","Lazy load below-the-fold content using dynamic() imports or Suspense boundaries","Minimize client-side JavaScript \u2014 prefer Server Components for non-interactive content","Use React.memo() for expensive components that receive stable props","Debounce search inputs and window resize handlers (300ms default)","Optimize fonts: use next/font with display: 'swap' and preload only required subsets","Bundle analysis: keep First Load JS under 100KB for critical pages"]}],Or=re.filter(e=>e.tier==="free"),Wr=re.filter(e=>e.tier==="pro"||e.tier==="pro_plus");function Tt(e){return re.find(t=>t.id===e)}var Be=[{id:"cursor",name:"Cursor",iconName:"simple-icons:cursor",fileName:".cursor/rules/*.mdc",description:"Cursor IDE \u2014 place in .cursor/rules/"},{id:"windsurf",name:"Universal (AGENTS.md)",iconName:"FileText",fileName:"AGENTS.md",description:"AGENTS.md \u2014 Open standard for Windsurf, Devin Desktop, Cursor, Copilot, etc. Place in project root."},{id:"copilot",name:"GitHub Copilot",iconName:"simple-icons:githubcopilot",fileName:".github/copilot-instructions.md",description:"GitHub Copilot \u2014 place in .github/copilot-instructions.md"},{id:"claude-code",name:"Claude Code",iconName:"simple-icons:anthropic",fileName:"CLAUDE.md",description:"Claude Code \u2014 place in project root as CLAUDE.md"},{id:"gemini",name:"Gemini CLI",iconName:"simple-icons:googlegemini",fileName:"GEMINI.md",description:"Gemini CLI \u2014 place in project root as GEMINI.md"},{id:"skill",name:"Claude Skill",iconName:"FileText",fileName:"SKILL.md",description:"Claude Skill format \u2014 place in .agents/skills/my-skill/SKILL.md"},{id:"generic",name:"Generic (.md)",iconName:"FileText",fileName:"AI_RULES.md",description:"Generic markdown \u2014 works with any AI assistant"}];function Rt(e){return Be.find(t=>t.id===e)}function Pt({config:e,userTier:t}){let s=e.vibe==="custom"&&e.customVibeObj?e.customVibeObj:Ct(e.vibe);if(!s)throw new Error(`Vibe not found: ${e.vibe}`);if(s.tier!=="free"&&t==="free")throw new Error(`Vibe "${s.name}" requires a Pro plan or higher`);let i=[];for(let r of e.targetIdes){let a=Rt(r);if(a)if(r==="cursor"){let o=Ts(s,e,t,a.name);i.push({content:o,fileName:".cursor/rules/vibecraft-core.mdc",ideName:a.name,iconName:a.iconName});let n=Rs(s,e,t,a.name);i.push({content:n,fileName:".cursor/rules/vibecraft-components.mdc",ideName:a.name,iconName:a.iconName})}else{let o=Es(s,e,t,a.name);i.push({content:o,fileName:a.fileName,ideName:a.name,iconName:a.iconName})}}return i}function Es(e,t,s,i){let r=[],a=s==="free";return r.push(Le(e,i,a)),r.push(Bt(t)),r.push(Lt(e)),r.push(Vt(e)),t.stacks.animation&&e.animationRules&&e.animationRules.length>0&&r.push(Ft(e)),r.push(Mt(t,s)),r.push(Ut(e)),r.push(Dt(e)),r.push(Ve(a)),r.filter(Boolean).join(`

`)}function Ts(e,t,s,i){let r=[],a=s==="free";return r.push("---",`description: VibeCraftz Core Design System - ${e.name}`,'globs: ["*"]',"alwaysApply: true","---"),r.push(Le(e,i,a)),r.push(Bt(t)),r.push(Lt(e)),r.push(Mt(t,s)),r.push(Ut(e)),r.push(Ve(a)),r.filter(Boolean).join(`

`)}function Rs(e,t,s,i){let r=[],a=s==="free";return r.push("---",`description: VibeCraftz UI Components - ${e.name}`,'globs: ["**/*.ts", "**/*.tsx", "**/*.js", "**/*.jsx", "**/*.vue", "**/*.svelte"]',"---"),r.push(Le(e,i,a)),r.push(Vt(e)),t.stacks.animation&&e.animationRules&&e.animationRules.length>0&&r.push(Ft(e)),r.push(Dt(e)),r.push(Ve(a)),r.filter(Boolean).join(`

`)}function Le(e,t,s){let i=[];return i.push(`# VibeCraftz Design System: ${e.name}`,"# Generated by VibeCraftz (https://vibecraftz.dev) \u2014 by changeshott",`# Target: ${t}`,`# Generated: ${new Date().toISOString().split("T")[0]}`),s?i.push("#","# ====================================================================","# \u26A0\uFE0F GENERATED BY VIBECRAFTZ (FREE VERSION)","# Upgrade to Pro at https://vibecraftz.dev/pricing to remove this watermark,","# unlock all premium vibes, and export to multiple IDEs simultaneously.","# ====================================================================","#"):i.push("#"),i.push(`# ${e.description}`),i.push(""),i.push("---"),i.join(`
`)}function Bt(e){let t=["## TECHNOLOGY RULES (Strict)",""],s=Object.entries(e.stacks),i=new Set,r=new Set;for(let[,a]of s){if(!a)continue;let o=At(a);if(o){t.push(`### ${o.name} (v${o.version})`);for(let n of o.rules)t.push(`- ${n}`);t.push(""),o.imports&&o.imports.length>0&&o.imports.forEach(n=>i.add(n)),o.fileStructure&&o.fileStructure.length>0&&o.fileStructure.forEach(n=>r.add(n))}}return i.size>0&&(t.push("### Allowed Core Imports"),t.push("```typescript"),Array.from(i).forEach(a=>t.push(`import { ... } from "${a}";`)),t.push("```"),t.push("")),r.size>0&&(t.push("### Required File Structure"),Array.from(r).forEach(a=>t.push(`- \`${a}\``)),t.push("")),t.join(`
`)}function Lt(e){let t=[`## DESIGN VIBE: ${e.name}`,"",`> ${e.description}`,"","### Color Palette","Use ONLY these colors. Do NOT invent new colors or use arbitrary values.",""],s=Object.entries(e.colors);for(let[r,a]of s){let o=r.replace(/([A-Z])/g," $1").trim();t.push(`- **${o}**: \`${a}\``)}t.push(""),t.push("### Typography");let i=Object.entries(e.typography);for(let[r,a]of i){let o=r.replace(/([A-Z])/g," $1").trim();t.push(`- **${o}**: \`${a}\``)}return t.join(`
`)}function Vt(e){let t=["## COMPONENT PATTERNS","","Use these exact class combinations for consistency. Customize content, NOT structure.",""];for(let s of e.componentPatterns)t.push(`### ${s.name}`),t.push(`${s.description}`),t.push("```"),t.push(s.classes),t.push("```"),t.push("");return t.join(`
`)}function Ft(e){let t=["## ANIMATION RULES",""];for(let s of e.animationRules)t.push(`- ${s}`);return t.join(`
`)}function Mt(e,t){let s=e.rules.map(r=>Tt(r)).filter(r=>r!==void 0&&(r.tier==="free"||t!=="free"));if(s.length===0)return"";let i=["## AI BEHAVIOR RULES",""];for(let r of s)if(r){i.push(`### ${r.name}`),i.push(`${r.description}`),i.push("");for(let a of r.rules)i.push(`- ${a}`);i.push("")}return i.join(`
`)}function Ut(e){let t=["## SPECIAL INSTRUCTIONS FOR THIS VIBE",""];for(let s of e.specialInstructions)t.push(`- ${s}`);return t.join(`
`)}function Dt(e){if(!e.architectureNotes&&(!e.enterpriseBlueprints||e.enterpriseBlueprints.length===0))return"";let t=["## ENTERPRISE ARCHITECTURE & BLUEPRINTS","","> *Note: These blueprints provide the structural foundation for this vibe.*",""];if(e.architectureNotes&&(t.push("### Architecture Notes"),t.push(e.architectureNotes),t.push("")),e.enterpriseBlueprints&&e.enterpriseBlueprints.length>0){t.push("### Component & System Blueprints"),t.push("");for(let s of e.enterpriseBlueprints)t.push(`#### ${s.title}`),s.description&&t.push(s.description),t.push(""),t.push(`\`\`\`${s.language}`),t.push(s.code),t.push("```"),t.push("")}return t.join(`
`)}function Ve(e){let t=["---","","## Summary","","Follow ALL rules above strictly. When in doubt, refer back to the design vibe section","for colors, typography, and component patterns. Consistency is more important than creativity","\u2014 every page and component should feel like part of the same application."];return e&&(t.push(""),t.push("---"),t.push("*Generated with VibeCraftz Free \u2014 Upgrade at https://vibecraftz.dev/pricing*")),t.join(`
`)}async function Ps(){console.clear(),console.log(V.default.magenta(`
   __      ___ _          
   \\ \\    / (_) |         
    \\ \\  / / _| |__   ___ 
     \\ \\/ / | | '_ \\ / _ \\
      \\  /  | | |_) |  __/
       \\/   |_|_.__/ \\___| craftz
  `)),bt(V.default.bgMagenta(V.default.black(" VIBECRAFTZ CLI - AI System Instruction Generator ")));let e=await Te({message:"Select a Design Vibe:",options:se.map(o=>({value:o.id,label:o.name,hint:o.tier!=="free"?V.default.yellow("(Pro)"):V.default.green("(Free)")}))});if(Y(e))return te("Operation cancelled."),process.exit(0);let t={framework:"",styling:"",components:"",icons:"",animation:"",database:"",auth:"",deploy:""};for(let o of Et){let n=Pe.filter(l=>l.category===o);if(n.length>0){let l=await Te({message:`Select ${o.charAt(0).toUpperCase()+o.slice(1)}:`,options:n.map(u=>({value:u.id,label:u.name}))});if(Y(l))return te("Operation cancelled."),process.exit(0);t[o]=l}}let s=await Ee({message:"Select AI Rules to enforce:",options:re.map(o=>({value:o.id,label:o.name,hint:o.tier!=="free"?V.default.yellow("(Pro)"):""})),required:!1});if(Y(s))return te("Operation cancelled."),process.exit(0);let i=await Ee({message:"Select Target IDE(s) or Format:",options:Be.map(o=>({value:o.id,label:o.name,hint:o.fileName})),required:!0});if(Y(i))return te("Operation cancelled."),process.exit(0);let r={vibe:e,stacks:t,rules:s,targetIdes:i},a=vt();a.start("Generating system instructions...");try{let o=Pt({config:r,userTier:"pro_plus"});a.stop("Generated successfully!");for(let n of o){let l=Fe.default.join(process.cwd(),n.fileName),u=Fe.default.dirname(l);fe.default.existsSync(u)||fe.default.mkdirSync(u,{recursive:!0}),fe.default.writeFileSync(l,n.content,"utf-8"),console.log(`${V.default.green("\u2714")} Created ${V.default.cyan(n.fileName)}`)}xt(V.default.green("You're all set! Enjoy your tailored AI assistant."))}catch(o){a.stop("Generation failed."),console.error(V.default.red(o instanceof Error?o.message:"Unknown error")),process.exit(1)}}Ps().catch(e=>{console.error(e),process.exit(1)});
