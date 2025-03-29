"use strict";(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[358],{9009:function(e,t,n){n.d(t,{ET:function(){return s0},IO:function(){return sL},JU:function(){return se},PL:function(){return sJ},QT:function(){return sY},Xo:function(){return sU},ad:function(){return si},ar:function(){return sM},b9:function(){return sq},hJ:function(){return i7},oe:function(){return s$},r7:function(){return sZ}});var r,i,s,a,o=n(5723),l=n(6574),u=n(9858),c=n(3639),h=n(8597),d=n(2841);n(9079);var f=n(8620).Buffer;let m="@firebase/firestore",g="4.7.10";/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class p{isAuthenticated(){return null!=this.uid}toKey(){return this.isAuthenticated()?"uid:"+this.uid:"anonymous-user"}isEqual(e){return e.uid===this.uid}constructor(e){this.uid=e}}p.UNAUTHENTICATED=new p(null),p.GOOGLE_CREDENTIALS=new p("google-credentials-uid"),p.FIRST_PARTY=new p("first-party-uid"),p.MOCK_USER=new p("mock-user");/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let y="11.5.0",v=new u.Yd("@firebase/firestore");function w(){return v.logLevel}function _(e){for(var t=arguments.length,n=Array(t>1?t-1:0),r=1;r<t;r++)n[r-1]=arguments[r];if(v.logLevel<=u.in.DEBUG){let t=n.map(I);v.debug("Firestore (".concat(y,"): ").concat(e),...t)}}function E(e){for(var t=arguments.length,n=Array(t>1?t-1:0),r=1;r<t;r++)n[r-1]=arguments[r];if(v.logLevel<=u.in.ERROR){let t=n.map(I);v.error("Firestore (".concat(y,"): ").concat(e),...t)}}function T(e){for(var t=arguments.length,n=Array(t>1?t-1:0),r=1;r<t;r++)n[r-1]=arguments[r];if(v.logLevel<=u.in.WARN){let t=n.map(I);v.warn("Firestore (".concat(y,"): ").concat(e),...t)}}function I(e){if("string"==typeof e)return e;try{/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */return JSON.stringify(e)}catch(t){return e}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function C(){let e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:"Unexpected state",t="FIRESTORE (".concat(y,") INTERNAL ASSERTION FAILED: ")+e;throw E(t),Error(t)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let S={OK:"ok",CANCELLED:"cancelled",UNKNOWN:"unknown",INVALID_ARGUMENT:"invalid-argument",DEADLINE_EXCEEDED:"deadline-exceeded",NOT_FOUND:"not-found",ALREADY_EXISTS:"already-exists",PERMISSION_DENIED:"permission-denied",UNAUTHENTICATED:"unauthenticated",RESOURCE_EXHAUSTED:"resource-exhausted",FAILED_PRECONDITION:"failed-precondition",ABORTED:"aborted",OUT_OF_RANGE:"out-of-range",UNIMPLEMENTED:"unimplemented",INTERNAL:"internal",UNAVAILABLE:"unavailable",DATA_LOSS:"data-loss"};class b extends c.ZR{constructor(e,t){super(e,t),this.code=e,this.message=t,this.toString=()=>"".concat(this.name,": [code=").concat(this.code,"]: ").concat(this.message)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class A{constructor(){this.promise=new Promise((e,t)=>{this.resolve=e,this.reject=t})}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class N{constructor(e,t){this.user=t,this.type="OAuth",this.headers=new Map,this.headers.set("Authorization","Bearer ".concat(e))}}class k{getToken(){return Promise.resolve(null)}invalidateToken(){}start(e,t){e.enqueueRetryable(()=>t(p.UNAUTHENTICATED))}shutdown(){}}class D{getToken(){return Promise.resolve(this.token)}invalidateToken(){}start(e,t){this.changeListener=t,e.enqueueRetryable(()=>t(this.token.user))}shutdown(){this.changeListener=null}constructor(e){this.token=e,this.changeListener=null}}class x{start(e,t){void 0===this.o||C();let n=this.i,r=e=>this.i!==n?(n=this.i,t(e)):Promise.resolve(),i=new A;this.o=()=>{this.i++,this.currentUser=this.u(),i.resolve(),i=new A,e.enqueueRetryable(()=>r(this.currentUser))};let s=()=>{let t=i;e.enqueueRetryable(async()=>{await t.promise,await r(this.currentUser)})},a=e=>{_("FirebaseAuthCredentialsProvider","Auth detected"),this.auth=e,this.o&&(this.auth.addAuthTokenListener(this.o),s())};this.t.onInit(e=>a(e)),setTimeout(()=>{if(!this.auth){let e=this.t.getImmediate({optional:!0});e?a(e):(_("FirebaseAuthCredentialsProvider","Auth not yet detected"),i.resolve(),i=new A)}},0),s()}getToken(){let e=this.i,t=this.forceRefresh;return this.forceRefresh=!1,this.auth?this.auth.getToken(t).then(t=>this.i!==e?(_("FirebaseAuthCredentialsProvider","getToken aborted due to token change."),this.getToken()):t?("string"==typeof t.accessToken||C(),new N(t.accessToken,this.currentUser)):null):Promise.resolve(null)}invalidateToken(){this.forceRefresh=!0}shutdown(){this.auth&&this.o&&this.auth.removeAuthTokenListener(this.o),this.o=void 0}u(){let e=this.auth&&this.auth.getUid();return null===e||"string"==typeof e||C(),new p(e)}constructor(e){this.t=e,this.currentUser=p.UNAUTHENTICATED,this.i=0,this.forceRefresh=!1,this.auth=null}}class R{I(){return this.P?this.P():null}get headers(){this.T.set("X-Goog-AuthUser",this.l);let e=this.I();return e&&this.T.set("Authorization",e),this.h&&this.T.set("X-Goog-Iam-Authorization-Token",this.h),this.T}constructor(e,t,n){this.l=e,this.h=t,this.P=n,this.type="FirstParty",this.user=p.FIRST_PARTY,this.T=new Map}}class L{getToken(){return Promise.resolve(new R(this.l,this.h,this.P))}start(e,t){e.enqueueRetryable(()=>t(p.FIRST_PARTY))}shutdown(){}invalidateToken(){}constructor(e,t,n){this.l=e,this.h=t,this.P=n}}class V{constructor(e){this.value=e,this.type="AppCheck",this.headers=new Map,e&&e.length>0&&this.headers.set("x-firebase-appcheck",this.value)}}class M{start(e,t){void 0===this.o||C();let n=e=>{null!=e.error&&_("FirebaseAppCheckTokenProvider","Error getting App Check token; using placeholder token instead. Error: ".concat(e.error.message));let n=e.token!==this.R;return this.R=e.token,_("FirebaseAppCheckTokenProvider","Received ".concat(n?"new":"existing"," token.")),n?t(e.token):Promise.resolve()};this.o=t=>{e.enqueueRetryable(()=>n(t))};let r=e=>{_("FirebaseAppCheckTokenProvider","AppCheck detected"),this.appCheck=e,this.o&&this.appCheck.addTokenListener(this.o)};this.A.onInit(e=>r(e)),setTimeout(()=>{if(!this.appCheck){let e=this.A.getImmediate({optional:!0});e?r(e):_("FirebaseAppCheckTokenProvider","AppCheck not yet detected")}},0)}getToken(){if(this.V)return Promise.resolve(new V(this.V));let e=this.forceRefresh;return this.forceRefresh=!1,this.appCheck?this.appCheck.getToken(e).then(e=>e?("string"==typeof e.token||C(),this.R=e.token,new V(e.token)):null):Promise.resolve(null)}invalidateToken(){this.forceRefresh=!0}shutdown(){this.appCheck&&this.o&&this.appCheck.removeTokenListener(this.o),this.o=void 0}constructor(e,t){this.A=t,this.forceRefresh=!1,this.appCheck=null,this.R=null,this.V=null,(0,o.rh)(e)&&e.settings.appCheckToken&&(this.V=e.settings.appCheckToken)}}/**
 * @license
 * Copyright 2023 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function O(){return new TextEncoder}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class F{static newId(){let e=62*Math.floor(256/62),t="";for(;t.length<20;){let n=/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function(e){let t="undefined"!=typeof self&&(self.crypto||self.msCrypto),n=new Uint8Array(e);if(t&&"function"==typeof t.getRandomValues)t.getRandomValues(n);else for(let t=0;t<e;t++)n[t]=Math.floor(256*Math.random());return n}(40);for(let r=0;r<n.length;++r)t.length<20&&n[r]<e&&(t+="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789".charAt(n[r]%62))}return t}}function U(e,t){return e<t?-1:e>t?1:0}function P(e,t){let n=0;for(;n<e.length&&n<t.length;){let r=e.codePointAt(n),i=t.codePointAt(n);if(r!==i){if(r<128&&i<128)return U(r,i);{let s=O(),a=function(e,t){for(let n=0;n<e.length&&n<t.length;++n)if(e[n]!==t[n])return U(e[n],t[n]);return U(e.length,t.length)}(s.encode(q(e,n)),s.encode(q(t,n)));return 0!==a?a:U(r,i)}}n+=r>65535?2:1}return U(e.length,t.length)}function q(e,t){return e.codePointAt(t)>65535?e.substring(t,t+2):e.substring(t,t+1)}function B(e,t,n){return e.length===t.length&&e.every((e,r)=>n(e,t[r]))}class z{static now(){return z.fromMillis(Date.now())}static fromDate(e){return z.fromMillis(e.getTime())}static fromMillis(e){let t=Math.floor(e/1e3);return new z(t,Math.floor((e-1e3*t)*1e6))}toDate(){return new Date(this.toMillis())}toMillis(){return 1e3*this.seconds+this.nanoseconds/1e6}_compareTo(e){return this.seconds===e.seconds?U(this.nanoseconds,e.nanoseconds):U(this.seconds,e.seconds)}isEqual(e){return e.seconds===this.seconds&&e.nanoseconds===this.nanoseconds}toString(){return"Timestamp(seconds="+this.seconds+", nanoseconds="+this.nanoseconds+")"}toJSON(){return{seconds:this.seconds,nanoseconds:this.nanoseconds}}valueOf(){return String(this.seconds- -62135596800).padStart(12,"0")+"."+String(this.nanoseconds).padStart(9,"0")}constructor(e,t){if(this.seconds=e,this.nanoseconds=t,t<0||t>=1e9)throw new b(S.INVALID_ARGUMENT,"Timestamp nanoseconds out of range: "+t);if(e<-62135596800||e>=253402300800)throw new b(S.INVALID_ARGUMENT,"Timestamp seconds out of range: "+e)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class K{static fromTimestamp(e){return new K(e)}static min(){return new K(new z(0,0))}static max(){return new K(new z(253402300799,999999999))}compareTo(e){return this.timestamp._compareTo(e.timestamp)}isEqual(e){return this.timestamp.isEqual(e.timestamp)}toMicroseconds(){return 1e6*this.timestamp.seconds+this.timestamp.nanoseconds/1e3}toString(){return"SnapshotVersion("+this.timestamp.toString()+")"}toTimestamp(){return this.timestamp}constructor(e){this.timestamp=e}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let G="__name__";class Q{get length(){return this.len}isEqual(e){return 0===Q.comparator(this,e)}child(e){let t=this.segments.slice(this.offset,this.limit());return e instanceof Q?e.forEach(e=>{t.push(e)}):t.push(e),this.construct(t)}limit(){return this.offset+this.length}popFirst(e){return e=void 0===e?1:e,this.construct(this.segments,this.offset+e,this.length-e)}popLast(){return this.construct(this.segments,this.offset,this.length-1)}firstSegment(){return this.segments[this.offset]}lastSegment(){return this.get(this.length-1)}get(e){return this.segments[this.offset+e]}isEmpty(){return 0===this.length}isPrefixOf(e){if(e.length<this.length)return!1;for(let t=0;t<this.length;t++)if(this.get(t)!==e.get(t))return!1;return!0}isImmediateParentOf(e){if(this.length+1!==e.length)return!1;for(let t=0;t<this.length;t++)if(this.get(t)!==e.get(t))return!1;return!0}forEach(e){for(let t=this.offset,n=this.limit();t<n;t++)e(this.segments[t])}toArray(){return this.segments.slice(this.offset,this.limit())}static comparator(e,t){let n=Math.min(e.length,t.length);for(let r=0;r<n;r++){let n=Q.compareSegments(e.get(r),t.get(r));if(0!==n)return n}return U(e.length,t.length)}static compareSegments(e,t){let n=Q.isNumericId(e),r=Q.isNumericId(t);return n&&!r?-1:!n&&r?1:n&&r?Q.extractNumericId(e).compare(Q.extractNumericId(t)):P(e,t)}static isNumericId(e){return e.startsWith("__id")&&e.endsWith("__")}static extractNumericId(e){return h.z8.fromString(e.substring(4,e.length-2))}constructor(e,t,n){void 0===t?t=0:t>e.length&&C(),void 0===n?n=e.length-t:n>e.length-t&&C(),this.segments=e,this.offset=t,this.len=n}}class j extends Q{construct(e,t,n){return new j(e,t,n)}canonicalString(){return this.toArray().join("/")}toString(){return this.canonicalString()}toUriEncodedString(){return this.toArray().map(encodeURIComponent).join("/")}static fromString(){for(var e=arguments.length,t=Array(e),n=0;n<e;n++)t[n]=arguments[n];let r=[];for(let e of t){if(e.indexOf("//")>=0)throw new b(S.INVALID_ARGUMENT,"Invalid segment (".concat(e,"). Paths must not contain // in them."));r.push(...e.split("/").filter(e=>e.length>0))}return new j(r)}static emptyPath(){return new j([])}}let H=/^[_a-zA-Z][_a-zA-Z0-9]*$/;class W extends Q{construct(e,t,n){return new W(e,t,n)}static isValidIdentifier(e){return H.test(e)}canonicalString(){return this.toArray().map(e=>(e=e.replace(/\\/g,"\\\\").replace(/`/g,"\\`"),W.isValidIdentifier(e)||(e="`"+e+"`"),e)).join(".")}toString(){return this.canonicalString()}isKeyField(){return 1===this.length&&this.get(0)===G}static keyField(){return new W([G])}static fromServerFormat(e){let t=[],n="",r=0,i=()=>{if(0===n.length)throw new b(S.INVALID_ARGUMENT,"Invalid field path (".concat(e,"). Paths must not be empty, begin with '.', end with '.', or contain '..'"));t.push(n),n=""},s=!1;for(;r<e.length;){let t=e[r];if("\\"===t){if(r+1===e.length)throw new b(S.INVALID_ARGUMENT,"Path has trailing escape character: "+e);let t=e[r+1];if("\\"!==t&&"."!==t&&"`"!==t)throw new b(S.INVALID_ARGUMENT,"Path has invalid escape sequence: "+e);n+=t,r+=2}else"`"===t?s=!s:"."!==t||s?n+=t:i(),r++}if(i(),s)throw new b(S.INVALID_ARGUMENT,"Unterminated ` in path: "+e);return new W(t)}static emptyPath(){return new W([])}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Y{static fromPath(e){return new Y(j.fromString(e))}static fromName(e){return new Y(j.fromString(e).popFirst(5))}static empty(){return new Y(j.emptyPath())}get collectionGroup(){return this.path.popLast().lastSegment()}hasCollectionId(e){return this.path.length>=2&&this.path.get(this.path.length-2)===e}getCollectionGroup(){return this.path.get(this.path.length-2)}getCollectionPath(){return this.path.popLast()}isEqual(e){return null!==e&&0===j.comparator(this.path,e.path)}toString(){return this.path.toString()}static comparator(e,t){return j.comparator(e.path,t.path)}static isDocumentKey(e){return e.length%2==0}static fromSegments(e){return new Y(new j(e.slice()))}constructor(e){this.path=e}}class X{constructor(e,t,n,r){this.indexId=e,this.collectionGroup=t,this.fields=n,this.indexState=r}}X.UNKNOWN_ID=-1;class J{static min(){return new J(K.min(),Y.empty(),-1)}static max(){return new J(K.max(),Y.empty(),-1)}constructor(e,t,n){this.readTime=e,this.documentKey=t,this.largestBatchId=n}}class Z{addOnCommittedListener(e){this.onCommittedListeners.push(e)}raiseOnCommittedEvent(){this.onCommittedListeners.forEach(e=>e())}constructor(){this.onCommittedListeners=[]}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function $(e){if(e.code!==S.FAILED_PRECONDITION||"The current tab is not in the required state to perform this operation. It might be necessary to refresh the browser tab."!==e.message)throw e;_("LocalStore","Unexpectedly lost primary lease")}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ee{catch(e){return this.next(void 0,e)}next(e,t){return this.callbackAttached&&C(),this.callbackAttached=!0,this.isDone?this.error?this.wrapFailure(t,this.error):this.wrapSuccess(e,this.result):new ee((n,r)=>{this.nextCallback=t=>{this.wrapSuccess(e,t).next(n,r)},this.catchCallback=e=>{this.wrapFailure(t,e).next(n,r)}})}toPromise(){return new Promise((e,t)=>{this.next(e,t)})}wrapUserFunction(e){try{let t=e();return t instanceof ee?t:ee.resolve(t)}catch(e){return ee.reject(e)}}wrapSuccess(e,t){return e?this.wrapUserFunction(()=>e(t)):ee.resolve(t)}wrapFailure(e,t){return e?this.wrapUserFunction(()=>e(t)):ee.reject(t)}static resolve(e){return new ee((t,n)=>{t(e)})}static reject(e){return new ee((t,n)=>{n(e)})}static waitFor(e){return new ee((t,n)=>{let r=0,i=0,s=!1;e.forEach(e=>{++r,e.next(()=>{++i,s&&i===r&&t()},e=>n(e))}),s=!0,i===r&&t()})}static or(e){let t=ee.resolve(!1);for(let n of e)t=t.next(e=>e?ee.resolve(e):n());return t}static forEach(e,t){let n=[];return e.forEach((e,r)=>{n.push(t.call(this,e,r))}),this.waitFor(n)}static mapArray(e,t){return new ee((n,r)=>{let i=e.length,s=Array(i),a=0;for(let o=0;o<i;o++){let l=o;t(e[l]).next(e=>{s[l]=e,++a===i&&n(s)},e=>r(e))}})}static doWhile(e,t){return new ee((n,r)=>{let i=()=>{!0===e()?t().next(()=>{i()},r):n()};i()})}constructor(e){this.nextCallback=null,this.catchCallback=null,this.result=void 0,this.error=void 0,this.isDone=!1,this.callbackAttached=!1,e(e=>{this.isDone=!0,this.result=e,this.nextCallback&&this.nextCallback(e)},e=>{this.isDone=!0,this.error=e,this.catchCallback&&this.catchCallback(e)})}}function et(e){return"IndexedDbTransactionError"===e.name}/**
 * @license
 * Copyright 2018 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class en{oe(e){return this.previousValue=Math.max(e,this.previousValue),this.previousValue}next(){let e=++this.previousValue;return this._e&&this._e(e),e}constructor(e,t){this.previousValue=e,t&&(t.sequenceNumberHandler=e=>this.oe(e),this._e=e=>t.writeSequenceNumber(e))}}function er(e){return 0===e&&1/e==-1/0}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function ei(e){let t=0;for(let n in e)Object.prototype.hasOwnProperty.call(e,n)&&t++;return t}function es(e,t){for(let n in e)Object.prototype.hasOwnProperty.call(e,n)&&t(n,e[n])}function ea(e){for(let t in e)if(Object.prototype.hasOwnProperty.call(e,t))return!1;return!0}en.ae=-1;/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class eo{insert(e,t){return new eo(this.comparator,this.root.insert(e,t,this.comparator).copy(null,null,eu.BLACK,null,null))}remove(e){return new eo(this.comparator,this.root.remove(e,this.comparator).copy(null,null,eu.BLACK,null,null))}get(e){let t=this.root;for(;!t.isEmpty();){let n=this.comparator(e,t.key);if(0===n)return t.value;n<0?t=t.left:n>0&&(t=t.right)}return null}indexOf(e){let t=0,n=this.root;for(;!n.isEmpty();){let r=this.comparator(e,n.key);if(0===r)return t+n.left.size;r<0?n=n.left:(t+=n.left.size+1,n=n.right)}return -1}isEmpty(){return this.root.isEmpty()}get size(){return this.root.size}minKey(){return this.root.minKey()}maxKey(){return this.root.maxKey()}inorderTraversal(e){return this.root.inorderTraversal(e)}forEach(e){this.inorderTraversal((t,n)=>(e(t,n),!1))}toString(){let e=[];return this.inorderTraversal((t,n)=>(e.push("".concat(t,":").concat(n)),!1)),"{".concat(e.join(", "),"}")}reverseTraversal(e){return this.root.reverseTraversal(e)}getIterator(){return new el(this.root,null,this.comparator,!1)}getIteratorFrom(e){return new el(this.root,e,this.comparator,!1)}getReverseIterator(){return new el(this.root,null,this.comparator,!0)}getReverseIteratorFrom(e){return new el(this.root,e,this.comparator,!0)}constructor(e,t){this.comparator=e,this.root=t||eu.EMPTY}}class el{getNext(){let e=this.nodeStack.pop(),t={key:e.key,value:e.value};if(this.isReverse)for(e=e.left;!e.isEmpty();)this.nodeStack.push(e),e=e.right;else for(e=e.right;!e.isEmpty();)this.nodeStack.push(e),e=e.left;return t}hasNext(){return this.nodeStack.length>0}peek(){if(0===this.nodeStack.length)return null;let e=this.nodeStack[this.nodeStack.length-1];return{key:e.key,value:e.value}}constructor(e,t,n,r){this.isReverse=r,this.nodeStack=[];let i=1;for(;!e.isEmpty();)if(i=t?n(e.key,t):1,t&&r&&(i*=-1),i<0)e=this.isReverse?e.left:e.right;else{if(0===i){this.nodeStack.push(e);break}this.nodeStack.push(e),e=this.isReverse?e.right:e.left}}}class eu{copy(e,t,n,r,i){return new eu(null!=e?e:this.key,null!=t?t:this.value,null!=n?n:this.color,null!=r?r:this.left,null!=i?i:this.right)}isEmpty(){return!1}inorderTraversal(e){return this.left.inorderTraversal(e)||e(this.key,this.value)||this.right.inorderTraversal(e)}reverseTraversal(e){return this.right.reverseTraversal(e)||e(this.key,this.value)||this.left.reverseTraversal(e)}min(){return this.left.isEmpty()?this:this.left.min()}minKey(){return this.min().key}maxKey(){return this.right.isEmpty()?this.key:this.right.maxKey()}insert(e,t,n){let r=this,i=n(e,r.key);return(r=i<0?r.copy(null,null,null,r.left.insert(e,t,n),null):0===i?r.copy(null,t,null,null,null):r.copy(null,null,null,null,r.right.insert(e,t,n))).fixUp()}removeMin(){if(this.left.isEmpty())return eu.EMPTY;let e=this;return e.left.isRed()||e.left.left.isRed()||(e=e.moveRedLeft()),(e=e.copy(null,null,null,e.left.removeMin(),null)).fixUp()}remove(e,t){let n,r=this;if(0>t(e,r.key))r.left.isEmpty()||r.left.isRed()||r.left.left.isRed()||(r=r.moveRedLeft()),r=r.copy(null,null,null,r.left.remove(e,t),null);else{if(r.left.isRed()&&(r=r.rotateRight()),r.right.isEmpty()||r.right.isRed()||r.right.left.isRed()||(r=r.moveRedRight()),0===t(e,r.key)){if(r.right.isEmpty())return eu.EMPTY;n=r.right.min(),r=r.copy(n.key,n.value,null,null,r.right.removeMin())}r=r.copy(null,null,null,null,r.right.remove(e,t))}return r.fixUp()}isRed(){return this.color}fixUp(){let e=this;return e.right.isRed()&&!e.left.isRed()&&(e=e.rotateLeft()),e.left.isRed()&&e.left.left.isRed()&&(e=e.rotateRight()),e.left.isRed()&&e.right.isRed()&&(e=e.colorFlip()),e}moveRedLeft(){let e=this.colorFlip();return e.right.left.isRed()&&(e=(e=(e=e.copy(null,null,null,null,e.right.rotateRight())).rotateLeft()).colorFlip()),e}moveRedRight(){let e=this.colorFlip();return e.left.left.isRed()&&(e=(e=e.rotateRight()).colorFlip()),e}rotateLeft(){let e=this.copy(null,null,eu.RED,null,this.right.left);return this.right.copy(null,null,this.color,e,null)}rotateRight(){let e=this.copy(null,null,eu.RED,this.left.right,null);return this.left.copy(null,null,this.color,null,e)}colorFlip(){let e=this.left.copy(null,null,!this.left.color,null,null),t=this.right.copy(null,null,!this.right.color,null,null);return this.copy(null,null,!this.color,e,t)}checkMaxDepth(){return Math.pow(2,this.check())<=this.size+1}check(){if(this.isRed()&&this.left.isRed()||this.right.isRed())throw C();let e=this.left.check();if(e!==this.right.check())throw C();return e+(this.isRed()?0:1)}constructor(e,t,n,r,i){this.key=e,this.value=t,this.color=null!=n?n:eu.RED,this.left=null!=r?r:eu.EMPTY,this.right=null!=i?i:eu.EMPTY,this.size=this.left.size+1+this.right.size}}eu.EMPTY=null,eu.RED=!0,eu.BLACK=!1,eu.EMPTY=new class{get key(){throw C()}get value(){throw C()}get color(){throw C()}get left(){throw C()}get right(){throw C()}copy(e,t,n,r,i){return this}insert(e,t,n){return new eu(e,t)}remove(e,t){return this}isEmpty(){return!0}inorderTraversal(e){return!1}reverseTraversal(e){return!1}minKey(){return null}maxKey(){return null}isRed(){return!1}checkMaxDepth(){return!0}check(){return 0}constructor(){this.size=0}};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ec{has(e){return null!==this.data.get(e)}first(){return this.data.minKey()}last(){return this.data.maxKey()}get size(){return this.data.size}indexOf(e){return this.data.indexOf(e)}forEach(e){this.data.inorderTraversal((t,n)=>(e(t),!1))}forEachInRange(e,t){let n=this.data.getIteratorFrom(e[0]);for(;n.hasNext();){let r=n.getNext();if(this.comparator(r.key,e[1])>=0)return;t(r.key)}}forEachWhile(e,t){let n;for(n=void 0!==t?this.data.getIteratorFrom(t):this.data.getIterator();n.hasNext();)if(!e(n.getNext().key))return}firstAfterOrEqual(e){let t=this.data.getIteratorFrom(e);return t.hasNext()?t.getNext().key:null}getIterator(){return new eh(this.data.getIterator())}getIteratorFrom(e){return new eh(this.data.getIteratorFrom(e))}add(e){return this.copy(this.data.remove(e).insert(e,!0))}delete(e){return this.has(e)?this.copy(this.data.remove(e)):this}isEmpty(){return this.data.isEmpty()}unionWith(e){let t=this;return t.size<e.size&&(t=e,e=this),e.forEach(e=>{t=t.add(e)}),t}isEqual(e){if(!(e instanceof ec)||this.size!==e.size)return!1;let t=this.data.getIterator(),n=e.data.getIterator();for(;t.hasNext();){let e=t.getNext().key,r=n.getNext().key;if(0!==this.comparator(e,r))return!1}return!0}toArray(){let e=[];return this.forEach(t=>{e.push(t)}),e}toString(){let e=[];return this.forEach(t=>e.push(t)),"SortedSet("+e.toString()+")"}copy(e){let t=new ec(this.comparator);return t.data=e,t}constructor(e){this.comparator=e,this.data=new eo(this.comparator)}}class eh{getNext(){return this.iter.getNext().key}hasNext(){return this.iter.hasNext()}constructor(e){this.iter=e}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ed{static empty(){return new ed([])}unionWith(e){let t=new ec(W.comparator);for(let e of this.fields)t=t.add(e);for(let n of e)t=t.add(n);return new ed(t.toArray())}covers(e){for(let t of this.fields)if(t.isPrefixOf(e))return!0;return!1}isEqual(e){return B(this.fields,e.fields,(e,t)=>e.isEqual(t))}constructor(e){this.fields=e,e.sort(W.comparator)}}/**
 * @license
 * Copyright 2023 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ef extends Error{constructor(){super(...arguments),this.name="Base64DecodeError"}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class em{static fromBase64String(e){return new em(function(e){try{return atob(e)}catch(e){throw"undefined"!=typeof DOMException&&e instanceof DOMException?new ef("Invalid base64 string: "+e):e}}(e))}static fromUint8Array(e){return new em(function(e){let t="";for(let n=0;n<e.length;++n)t+=String.fromCharCode(e[n]);return t}(e))}[Symbol.iterator](){let e=0;return{next:()=>e<this.binaryString.length?{value:this.binaryString.charCodeAt(e++),done:!1}:{value:void 0,done:!0}}}toBase64(){return btoa(this.binaryString)}toUint8Array(){return function(e){let t=new Uint8Array(e.length);for(let n=0;n<e.length;n++)t[n]=e.charCodeAt(n);return t}(this.binaryString)}approximateByteSize(){return 2*this.binaryString.length}compareTo(e){return U(this.binaryString,e.binaryString)}isEqual(e){return this.binaryString===e.binaryString}constructor(e){this.binaryString=e}}em.EMPTY_BYTE_STRING=new em("");let eg=new RegExp(/^\d{4}-\d\d-\d\dT\d\d:\d\d:\d\d(?:\.(\d+))?Z$/);function ep(e){if(e||C(),"string"==typeof e){let t=0,n=eg.exec(e);if(n||C(),n[1]){let e=n[1];t=Number(e=(e+"000000000").substr(0,9))}return{seconds:Math.floor(new Date(e).getTime()/1e3),nanos:t}}return{seconds:ey(e.seconds),nanos:ey(e.nanos)}}function ey(e){return"number"==typeof e?e:"string"==typeof e?Number(e):0}function ev(e){return"string"==typeof e?em.fromBase64String(e):em.fromUint8Array(e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let ew="server_timestamp",e_="__type__",eE="__previous_value__",eT="__local_write_time__";function eI(e){var t,n;return(null===(n=((null===(t=null==e?void 0:e.mapValue)||void 0===t?void 0:t.fields)||{})[e_])||void 0===n?void 0:n.stringValue)===ew}function eC(e){let t=e.mapValue.fields[eE];return eI(t)?eC(t):t}function eS(e){let t=ep(e.mapValue.fields[eT].timestampValue);return new z(t.seconds,t.nanos)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class eb{constructor(e,t,n,r,i,s,a,o,l){this.databaseId=e,this.appId=t,this.persistenceKey=n,this.host=r,this.ssl=i,this.forceLongPolling=s,this.autoDetectLongPolling=a,this.longPollingOptions=o,this.useFetchStreams=l}}let eA="(default)";class eN{static empty(){return new eN("","")}get isDefaultDatabase(){return this.database===eA}isEqual(e){return e instanceof eN&&e.projectId===this.projectId&&e.database===this.database}constructor(e,t){this.projectId=e,this.database=t||eA}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let ek="__type__",eD="__max__",ex={mapValue:{fields:{__type__:{stringValue:eD}}}},eR="__vector__",eL="value";function eV(e){return"nullValue"in e?0:"booleanValue"in e?1:"integerValue"in e||"doubleValue"in e?2:"timestampValue"in e?3:"stringValue"in e?5:"bytesValue"in e?6:"referenceValue"in e?7:"geoPointValue"in e?8:"arrayValue"in e?9:"mapValue"in e?eI(e)?4:eY(e)?9007199254740991:eH(e)?10:11:C()}function eM(e,t){if(e===t)return!0;let n=eV(e);if(n!==eV(t))return!1;switch(n){case 0:case 9007199254740991:return!0;case 1:return e.booleanValue===t.booleanValue;case 4:return eS(e).isEqual(eS(t));case 3:return function(e,t){if("string"==typeof e.timestampValue&&"string"==typeof t.timestampValue&&e.timestampValue.length===t.timestampValue.length)return e.timestampValue===t.timestampValue;let n=ep(e.timestampValue),r=ep(t.timestampValue);return n.seconds===r.seconds&&n.nanos===r.nanos}(e,t);case 5:return e.stringValue===t.stringValue;case 6:return ev(e.bytesValue).isEqual(ev(t.bytesValue));case 7:return e.referenceValue===t.referenceValue;case 8:return ey(e.geoPointValue.latitude)===ey(t.geoPointValue.latitude)&&ey(e.geoPointValue.longitude)===ey(t.geoPointValue.longitude);case 2:return function(e,t){if("integerValue"in e&&"integerValue"in t)return ey(e.integerValue)===ey(t.integerValue);if("doubleValue"in e&&"doubleValue"in t){let n=ey(e.doubleValue),r=ey(t.doubleValue);return n===r?er(n)===er(r):isNaN(n)&&isNaN(r)}return!1}(e,t);case 9:return B(e.arrayValue.values||[],t.arrayValue.values||[],eM);case 10:case 11:return function(e,t){let n=e.mapValue.fields||{},r=t.mapValue.fields||{};if(ei(n)!==ei(r))return!1;for(let e in n)if(n.hasOwnProperty(e)&&(void 0===r[e]||!eM(n[e],r[e])))return!1;return!0}(e,t);default:return C()}}function eO(e,t){return void 0!==(e.values||[]).find(e=>eM(e,t))}function eF(e,t){if(e===t)return 0;let n=eV(e),r=eV(t);if(n!==r)return U(n,r);switch(n){case 0:case 9007199254740991:return 0;case 1:return U(e.booleanValue,t.booleanValue);case 2:return function(e,t){let n=ey(e.integerValue||e.doubleValue),r=ey(t.integerValue||t.doubleValue);return n<r?-1:n>r?1:n===r?0:isNaN(n)?isNaN(r)?0:-1:1}(e,t);case 3:return eU(e.timestampValue,t.timestampValue);case 4:return eU(eS(e),eS(t));case 5:return P(e.stringValue,t.stringValue);case 6:return function(e,t){let n=ev(e),r=ev(t);return n.compareTo(r)}(e.bytesValue,t.bytesValue);case 7:return function(e,t){let n=e.split("/"),r=t.split("/");for(let e=0;e<n.length&&e<r.length;e++){let t=U(n[e],r[e]);if(0!==t)return t}return U(n.length,r.length)}(e.referenceValue,t.referenceValue);case 8:return function(e,t){let n=U(ey(e.latitude),ey(t.latitude));return 0!==n?n:U(ey(e.longitude),ey(t.longitude))}(e.geoPointValue,t.geoPointValue);case 9:return eP(e.arrayValue,t.arrayValue);case 10:return function(e,t){var n,r,i,s;let a=e.fields||{},o=t.fields||{},l=null===(n=a[eL])||void 0===n?void 0:n.arrayValue,u=null===(r=o[eL])||void 0===r?void 0:r.arrayValue,c=U((null===(i=null==l?void 0:l.values)||void 0===i?void 0:i.length)||0,(null===(s=null==u?void 0:u.values)||void 0===s?void 0:s.length)||0);return 0!==c?c:eP(l,u)}(e.mapValue,t.mapValue);case 11:return function(e,t){if(e===ex.mapValue&&t===ex.mapValue)return 0;if(e===ex.mapValue)return 1;if(t===ex.mapValue)return -1;let n=e.fields||{},r=Object.keys(n),i=t.fields||{},s=Object.keys(i);r.sort(),s.sort();for(let e=0;e<r.length&&e<s.length;++e){let t=P(r[e],s[e]);if(0!==t)return t;let a=eF(n[r[e]],i[s[e]]);if(0!==a)return a}return U(r.length,s.length)}(e.mapValue,t.mapValue);default:throw C()}}function eU(e,t){if("string"==typeof e&&"string"==typeof t&&e.length===t.length)return U(e,t);let n=ep(e),r=ep(t),i=U(n.seconds,r.seconds);return 0!==i?i:U(n.nanos,r.nanos)}function eP(e,t){let n=e.values||[],r=t.values||[];for(let e=0;e<n.length&&e<r.length;++e){let t=eF(n[e],r[e]);if(t)return t}return U(n.length,r.length)}function eq(e){var t,n;return"nullValue"in e?"null":"booleanValue"in e?""+e.booleanValue:"integerValue"in e?""+e.integerValue:"doubleValue"in e?""+e.doubleValue:"timestampValue"in e?function(e){let t=ep(e);return"time(".concat(t.seconds,",").concat(t.nanos,")")}(e.timestampValue):"stringValue"in e?e.stringValue:"bytesValue"in e?ev(e.bytesValue).toBase64():"referenceValue"in e?(t=e.referenceValue,Y.fromName(t).toString()):"geoPointValue"in e?(n=e.geoPointValue,"geo(".concat(n.latitude,",").concat(n.longitude,")")):"arrayValue"in e?function(e){let t="[",n=!0;for(let r of e.values||[])n?n=!1:t+=",",t+=eq(r);return t+"]"}(e.arrayValue):"mapValue"in e?function(e){let t=Object.keys(e.fields||{}).sort(),n="{",r=!0;for(let i of t)r?r=!1:n+=",",n+="".concat(i,":").concat(eq(e.fields[i]));return n+"}"}(e.mapValue):C()}function eB(e,t){return{referenceValue:"projects/".concat(e.projectId,"/databases/").concat(e.database,"/documents/").concat(t.path.canonicalString())}}function ez(e){return!!e&&"integerValue"in e}function eK(e){return!!e&&"arrayValue"in e}function eG(e){return!!e&&"nullValue"in e}function eQ(e){return!!e&&"doubleValue"in e&&isNaN(Number(e.doubleValue))}function ej(e){return!!e&&"mapValue"in e}function eH(e){var t,n;return(null===(n=((null===(t=null==e?void 0:e.mapValue)||void 0===t?void 0:t.fields)||{})[ek])||void 0===n?void 0:n.stringValue)===eR}function eW(e){if(e.geoPointValue)return{geoPointValue:Object.assign({},e.geoPointValue)};if(e.timestampValue&&"object"==typeof e.timestampValue)return{timestampValue:Object.assign({},e.timestampValue)};if(e.mapValue){let t={mapValue:{fields:{}}};return es(e.mapValue.fields,(e,n)=>t.mapValue.fields[e]=eW(n)),t}if(e.arrayValue){let t={arrayValue:{values:[]}};for(let n=0;n<(e.arrayValue.values||[]).length;++n)t.arrayValue.values[n]=eW(e.arrayValue.values[n]);return t}return Object.assign({},e)}function eY(e){return(((e.mapValue||{}).fields||{}).__type__||{}).stringValue===eD}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class eX{static empty(){return new eX({mapValue:{}})}field(e){if(e.isEmpty())return this.value;{let t=this.value;for(let n=0;n<e.length-1;++n)if(!ej(t=(t.mapValue.fields||{})[e.get(n)]))return null;return(t=(t.mapValue.fields||{})[e.lastSegment()])||null}}set(e,t){this.getFieldsMap(e.popLast())[e.lastSegment()]=eW(t)}setAll(e){let t=W.emptyPath(),n={},r=[];e.forEach((e,i)=>{if(!t.isImmediateParentOf(i)){let e=this.getFieldsMap(t);this.applyChanges(e,n,r),n={},r=[],t=i.popLast()}e?n[i.lastSegment()]=eW(e):r.push(i.lastSegment())});let i=this.getFieldsMap(t);this.applyChanges(i,n,r)}delete(e){let t=this.field(e.popLast());ej(t)&&t.mapValue.fields&&delete t.mapValue.fields[e.lastSegment()]}isEqual(e){return eM(this.value,e.value)}getFieldsMap(e){let t=this.value;t.mapValue.fields||(t.mapValue={fields:{}});for(let n=0;n<e.length;++n){let r=t.mapValue.fields[e.get(n)];ej(r)&&r.mapValue.fields||(r={mapValue:{fields:{}}},t.mapValue.fields[e.get(n)]=r),t=r}return t.mapValue.fields}applyChanges(e,t,n){for(let r of(es(t,(t,n)=>e[t]=n),n))delete e[r]}clone(){return new eX(eW(this.value))}constructor(e){this.value=e}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class eJ{static newInvalidDocument(e){return new eJ(e,0,K.min(),K.min(),K.min(),eX.empty(),0)}static newFoundDocument(e,t,n,r){return new eJ(e,1,t,K.min(),n,r,0)}static newNoDocument(e,t){return new eJ(e,2,t,K.min(),K.min(),eX.empty(),0)}static newUnknownDocument(e,t){return new eJ(e,3,t,K.min(),K.min(),eX.empty(),2)}convertToFoundDocument(e,t){return this.createTime.isEqual(K.min())&&(2===this.documentType||0===this.documentType)&&(this.createTime=e),this.version=e,this.documentType=1,this.data=t,this.documentState=0,this}convertToNoDocument(e){return this.version=e,this.documentType=2,this.data=eX.empty(),this.documentState=0,this}convertToUnknownDocument(e){return this.version=e,this.documentType=3,this.data=eX.empty(),this.documentState=2,this}setHasCommittedMutations(){return this.documentState=2,this}setHasLocalMutations(){return this.documentState=1,this.version=K.min(),this}setReadTime(e){return this.readTime=e,this}get hasLocalMutations(){return 1===this.documentState}get hasCommittedMutations(){return 2===this.documentState}get hasPendingWrites(){return this.hasLocalMutations||this.hasCommittedMutations}isValidDocument(){return 0!==this.documentType}isFoundDocument(){return 1===this.documentType}isNoDocument(){return 2===this.documentType}isUnknownDocument(){return 3===this.documentType}isEqual(e){return e instanceof eJ&&this.key.isEqual(e.key)&&this.version.isEqual(e.version)&&this.documentType===e.documentType&&this.documentState===e.documentState&&this.data.isEqual(e.data)}mutableCopy(){return new eJ(this.key,this.documentType,this.version,this.readTime,this.createTime,this.data.clone(),this.documentState)}toString(){return"Document(".concat(this.key,", ").concat(this.version,", ").concat(JSON.stringify(this.data.value),", {createTime: ").concat(this.createTime,"}), {documentType: ").concat(this.documentType,"}), {documentState: ").concat(this.documentState,"})")}constructor(e,t,n,r,i,s,a){this.key=e,this.documentType=t,this.version=n,this.readTime=r,this.createTime=i,this.data=s,this.documentState=a}}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class eZ{constructor(e,t){this.position=e,this.inclusive=t}}function e$(e,t,n){let r=0;for(let i=0;i<e.position.length;i++){let s=t[i],a=e.position[i];if(r=s.field.isKeyField()?Y.comparator(Y.fromName(a.referenceValue),n.key):eF(a,n.data.field(s.field)),"desc"===s.dir&&(r*=-1),0!==r)break}return r}function e0(e,t){if(null===e)return null===t;if(null===t||e.inclusive!==t.inclusive||e.position.length!==t.position.length)return!1;for(let n=0;n<e.position.length;n++)if(!eM(e.position[n],t.position[n]))return!1;return!0}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class e1{constructor(e,t="asc"){this.field=e,this.dir=t}}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class e2{}class e3 extends e2{static create(e,t,n){return e.isKeyField()?"in"===t||"not-in"===t?this.createKeyFieldInFilter(e,t,n):new e5(e,t,n):"array-contains"===t?new tt(e,n):"in"===t?new tn(e,n):"not-in"===t?new tr(e,n):"array-contains-any"===t?new ti(e,n):new e3(e,t,n)}static createKeyFieldInFilter(e,t,n){return"in"===t?new e6(e,n):new e7(e,n)}matches(e){let t=e.data.field(this.field);return"!="===this.op?null!==t&&this.matchesComparison(eF(t,this.value)):null!==t&&eV(this.value)===eV(t)&&this.matchesComparison(eF(t,this.value))}matchesComparison(e){switch(this.op){case"<":return e<0;case"<=":return e<=0;case"==":return 0===e;case"!=":return 0!==e;case">":return e>0;case">=":return e>=0;default:return C()}}isInequality(){return["<","<=",">",">=","!=","not-in"].indexOf(this.op)>=0}getFlattenedFilters(){return[this]}getFilters(){return[this]}constructor(e,t,n){super(),this.field=e,this.op=t,this.value=n}}class e4 extends e2{static create(e,t){return new e4(e,t)}matches(e){return e9(this)?void 0===this.filters.find(t=>!t.matches(e)):void 0!==this.filters.find(t=>t.matches(e))}getFlattenedFilters(){return null!==this.ce||(this.ce=this.filters.reduce((e,t)=>e.concat(t.getFlattenedFilters()),[])),this.ce}getFilters(){return Object.assign([],this.filters)}constructor(e,t){super(),this.filters=e,this.op=t,this.ce=null}}function e9(e){return"and"===e.op}function e8(e){for(let t of e.filters)if(t instanceof e4)return!1;return!0}class e5 extends e3{matches(e){let t=Y.comparator(e.key,this.key);return this.matchesComparison(t)}constructor(e,t,n){super(e,t,n),this.key=Y.fromName(n.referenceValue)}}class e6 extends e3{matches(e){return this.keys.some(t=>t.isEqual(e.key))}constructor(e,t){super(e,"in",t),this.keys=te("in",t)}}class e7 extends e3{matches(e){return!this.keys.some(t=>t.isEqual(e.key))}constructor(e,t){super(e,"not-in",t),this.keys=te("not-in",t)}}function te(e,t){var n;return((null===(n=t.arrayValue)||void 0===n?void 0:n.values)||[]).map(e=>Y.fromName(e.referenceValue))}class tt extends e3{matches(e){let t=e.data.field(this.field);return eK(t)&&eO(t.arrayValue,this.value)}constructor(e,t){super(e,"array-contains",t)}}class tn extends e3{matches(e){let t=e.data.field(this.field);return null!==t&&eO(this.value.arrayValue,t)}constructor(e,t){super(e,"in",t)}}class tr extends e3{matches(e){if(eO(this.value.arrayValue,{nullValue:"NULL_VALUE"}))return!1;let t=e.data.field(this.field);return null!==t&&!eO(this.value.arrayValue,t)}constructor(e,t){super(e,"not-in",t)}}class ti extends e3{matches(e){let t=e.data.field(this.field);return!(!eK(t)||!t.arrayValue.values)&&t.arrayValue.values.some(e=>eO(this.value.arrayValue,e))}constructor(e,t){super(e,"array-contains-any",t)}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ts{constructor(e,t=null,n=[],r=[],i=null,s=null,a=null){this.path=e,this.collectionGroup=t,this.orderBy=n,this.filters=r,this.limit=i,this.startAt=s,this.endAt=a,this.le=null}}function ta(e){let t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:null,n=arguments.length>2&&void 0!==arguments[2]?arguments[2]:[],r=arguments.length>3&&void 0!==arguments[3]?arguments[3]:[],i=arguments.length>4&&void 0!==arguments[4]?arguments[4]:null,s=arguments.length>5&&void 0!==arguments[5]?arguments[5]:null,a=arguments.length>6&&void 0!==arguments[6]?arguments[6]:null;return new ts(e,t,n,r,i,s,a)}function to(e){if(null===e.le){let t=e.path.canonicalString();null!==e.collectionGroup&&(t+="|cg:"+e.collectionGroup),t+="|f:"+e.filters.map(e=>(function e(t){if(t instanceof e3)return t.field.canonicalString()+t.op.toString()+eq(t.value);if(e8(t)&&e9(t))return t.filters.map(t=>e(t)).join(",");{let n=t.filters.map(t=>e(t)).join(",");return"".concat(t.op,"(").concat(n,")")}})(e)).join(",")+"|ob:"+e.orderBy.map(e=>e.field.canonicalString()+e.dir).join(","),null==e.limit||(t+="|l:"+e.limit),e.startAt&&(t+="|lb:"+(e.startAt.inclusive?"b:":"a:")+e.startAt.position.map(e=>eq(e)).join(",")),e.endAt&&(t+="|ub:"+(e.endAt.inclusive?"a:":"b:")+e.endAt.position.map(e=>eq(e)).join(",")),e.le=t}return e.le}function tl(e,t){if(e.limit!==t.limit||e.orderBy.length!==t.orderBy.length)return!1;for(let i=0;i<e.orderBy.length;i++){var n,r;if(n=e.orderBy[i],r=t.orderBy[i],!(n.dir===r.dir&&n.field.isEqual(r.field)))return!1}if(e.filters.length!==t.filters.length)return!1;for(let n=0;n<e.filters.length;n++)if(!function e(t,n){return t instanceof e3?n instanceof e3&&t.op===n.op&&t.field.isEqual(n.field)&&eM(t.value,n.value):t instanceof e4?n instanceof e4&&t.op===n.op&&t.filters.length===n.filters.length&&t.filters.reduce((t,r,i)=>t&&e(r,n.filters[i]),!0):void C()}(e.filters[n],t.filters[n]))return!1;return e.collectionGroup===t.collectionGroup&&!!e.path.isEqual(t.path)&&!!e0(e.startAt,t.startAt)&&e0(e.endAt,t.endAt)}function tu(e){return Y.isDocumentKey(e.path)&&null===e.collectionGroup&&0===e.filters.length}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class tc{constructor(e,t=null,n=[],r=[],i=null,s="F",a=null,o=null){this.path=e,this.collectionGroup=t,this.explicitOrderBy=n,this.filters=r,this.limit=i,this.limitType=s,this.startAt=a,this.endAt=o,this.he=null,this.Pe=null,this.Te=null,this.startAt,this.endAt}}function th(e){return 0===e.filters.length&&null===e.limit&&null==e.startAt&&null==e.endAt&&(0===e.explicitOrderBy.length||1===e.explicitOrderBy.length&&e.explicitOrderBy[0].field.isKeyField())}function td(e){return null!==e.collectionGroup}function tf(e){if(null===e.he){let t;e.he=[];let n=new Set;for(let t of e.explicitOrderBy)e.he.push(t),n.add(t.field.canonicalString());let r=e.explicitOrderBy.length>0?e.explicitOrderBy[e.explicitOrderBy.length-1].dir:"asc";(t=new ec(W.comparator),e.filters.forEach(e=>{e.getFlattenedFilters().forEach(e=>{e.isInequality()&&(t=t.add(e.field))})}),t).forEach(t=>{n.has(t.canonicalString())||t.isKeyField()||e.he.push(new e1(t,r))}),n.has(W.keyField().canonicalString())||e.he.push(new e1(W.keyField(),r))}return e.he}function tm(e){return e.Pe||(e.Pe=function(e,t){if("F"===e.limitType)return ta(e.path,e.collectionGroup,t,e.filters,e.limit,e.startAt,e.endAt);{t=t.map(e=>{let t="desc"===e.dir?"asc":"desc";return new e1(e.field,t)});let n=e.endAt?new eZ(e.endAt.position,e.endAt.inclusive):null,r=e.startAt?new eZ(e.startAt.position,e.startAt.inclusive):null;return ta(e.path,e.collectionGroup,t,e.filters,e.limit,n,r)}}(e,tf(e))),e.Pe}function tg(e,t){let n=e.filters.concat([t]);return new tc(e.path,e.collectionGroup,e.explicitOrderBy.slice(),n,e.limit,e.limitType,e.startAt,e.endAt)}function tp(e,t,n){return new tc(e.path,e.collectionGroup,e.explicitOrderBy.slice(),e.filters.slice(),t,n,e.startAt,e.endAt)}function ty(e,t){return tl(tm(e),tm(t))&&e.limitType===t.limitType}function tv(e){return"".concat(to(tm(e)),"|lt:").concat(e.limitType)}function tw(e){var t;let n;return"Query(target=".concat((n=(t=tm(e)).path.canonicalString(),null!==t.collectionGroup&&(n+=" collectionGroup="+t.collectionGroup),t.filters.length>0&&(n+=", filters: [".concat(t.filters.map(e=>(function e(t){return t instanceof e3?"".concat(t.field.canonicalString()," ").concat(t.op," ").concat(eq(t.value)):t instanceof e4?t.op.toString()+" {"+t.getFilters().map(e).join(" ,")+"}":"Filter"})(e)).join(", "),"]")),null==t.limit||(n+=", limit: "+t.limit),t.orderBy.length>0&&(n+=", orderBy: [".concat(t.orderBy.map(e=>"".concat(e.field.canonicalString()," (").concat(e.dir,")")).join(", "),"]")),t.startAt&&(n+=", startAt: "+(t.startAt.inclusive?"b:":"a:")+t.startAt.position.map(e=>eq(e)).join(",")),t.endAt&&(n+=", endAt: "+(t.endAt.inclusive?"a:":"b:")+t.endAt.position.map(e=>eq(e)).join(",")),"Target(".concat(n,")")),"; limitType=").concat(e.limitType,")")}function t_(e,t){return t.isFoundDocument()&&function(e,t){let n=t.key.path;return null!==e.collectionGroup?t.key.hasCollectionId(e.collectionGroup)&&e.path.isPrefixOf(n):Y.isDocumentKey(e.path)?e.path.isEqual(n):e.path.isImmediateParentOf(n)}(e,t)&&function(e,t){for(let n of tf(e))if(!n.field.isKeyField()&&null===t.data.field(n.field))return!1;return!0}(e,t)&&function(e,t){for(let n of e.filters)if(!n.matches(t))return!1;return!0}(e,t)&&(!e.startAt||!!function(e,t,n){let r=e$(e,t,n);return e.inclusive?r<=0:r<0}(e.startAt,tf(e),t))&&(!e.endAt||!!function(e,t,n){let r=e$(e,t,n);return e.inclusive?r>=0:r>0}(e.endAt,tf(e),t))}function tE(e){return(t,n)=>{let r=!1;for(let i of tf(e)){let e=function(e,t,n){let r=e.field.isKeyField()?Y.comparator(t.key,n.key):function(e,t,n){let r=t.data.field(e),i=n.data.field(e);return null!==r&&null!==i?eF(r,i):C()}(e.field,t,n);switch(e.dir){case"asc":return r;case"desc":return -1*r;default:return C()}}(i,t,n);if(0!==e)return e;r=r||i.field.isKeyField()}return 0}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class tT{get(e){let t=this.mapKeyFn(e),n=this.inner[t];if(void 0!==n){for(let[t,r]of n)if(this.equalsFn(t,e))return r}}has(e){return void 0!==this.get(e)}set(e,t){let n=this.mapKeyFn(e),r=this.inner[n];if(void 0===r)return this.inner[n]=[[e,t]],void this.innerSize++;for(let n=0;n<r.length;n++)if(this.equalsFn(r[n][0],e))return void(r[n]=[e,t]);r.push([e,t]),this.innerSize++}delete(e){let t=this.mapKeyFn(e),n=this.inner[t];if(void 0===n)return!1;for(let r=0;r<n.length;r++)if(this.equalsFn(n[r][0],e))return 1===n.length?delete this.inner[t]:n.splice(r,1),this.innerSize--,!0;return!1}forEach(e){es(this.inner,(t,n)=>{for(let[t,r]of n)e(t,r)})}isEmpty(){return ea(this.inner)}size(){return this.innerSize}constructor(e,t){this.mapKeyFn=e,this.equalsFn=t,this.inner={},this.innerSize=0}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let tI=new eo(Y.comparator),tC=new eo(Y.comparator);function tS(){for(var e=arguments.length,t=Array(e),n=0;n<e;n++)t[n]=arguments[n];let r=tC;for(let e of t)r=r.insert(e.key,e);return r}function tb(e){let t=tC;return e.forEach((e,n)=>t=t.insert(e,n.overlayedDocument)),t}function tA(){return new tT(e=>e.toString(),(e,t)=>e.isEqual(t))}let tN=new eo(Y.comparator),tk=new ec(Y.comparator);function tD(){for(var e=arguments.length,t=Array(e),n=0;n<e;n++)t[n]=arguments[n];let r=tk;for(let e of t)r=r.add(e);return r}let tx=new ec(U);/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function tR(e,t){if(e.useProto3Json){if(isNaN(t))return{doubleValue:"NaN"};if(t===1/0)return{doubleValue:"Infinity"};if(t===-1/0)return{doubleValue:"-Infinity"}}return{doubleValue:er(t)?"-0":t}}function tL(e){return{integerValue:""+e}}/**
 * @license
 * Copyright 2018 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class tV{constructor(){this._=void 0}}function tM(e,t){return e instanceof tB?ez(t)||t&&"doubleValue"in t?t:{integerValue:0}:null}class tO extends tV{}class tF extends tV{constructor(e){super(),this.elements=e}}function tU(e,t){let n=tK(t);for(let t of e.elements)n.some(e=>eM(e,t))||n.push(t);return{arrayValue:{values:n}}}class tP extends tV{constructor(e){super(),this.elements=e}}function tq(e,t){let n=tK(t);for(let t of e.elements)n=n.filter(e=>!eM(e,t));return{arrayValue:{values:n}}}class tB extends tV{constructor(e,t){super(),this.serializer=e,this.Ie=t}}function tz(e){return ey(e.integerValue||e.doubleValue)}function tK(e){return eK(e)&&e.arrayValue.values?e.arrayValue.values.slice():[]}class tG{constructor(e,t){this.version=e,this.transformResults=t}}class tQ{static none(){return new tQ}static exists(e){return new tQ(void 0,e)}static updateTime(e){return new tQ(e)}get isNone(){return void 0===this.updateTime&&void 0===this.exists}isEqual(e){return this.exists===e.exists&&(this.updateTime?!!e.updateTime&&this.updateTime.isEqual(e.updateTime):!e.updateTime)}constructor(e,t){this.updateTime=e,this.exists=t}}function tj(e,t){return void 0!==e.updateTime?t.isFoundDocument()&&t.version.isEqual(e.updateTime):void 0===e.exists||e.exists===t.isFoundDocument()}class tH{}function tW(e,t){if(!e.hasLocalMutations||t&&0===t.fields.length)return null;if(null===t)return e.isNoDocument()?new t2(e.key,tQ.none()):new tJ(e.key,e.data,tQ.none());{let n=e.data,r=eX.empty(),i=new ec(W.comparator);for(let e of t.fields)if(!i.has(e)){let t=n.field(e);null===t&&e.length>1&&(e=e.popLast(),t=n.field(e)),null===t?r.delete(e):r.set(e,t),i=i.add(e)}return new tZ(e.key,r,new ed(i.toArray()),tQ.none())}}function tY(e,t,n,r){return e instanceof tJ?function(e,t,n,r){if(!tj(e.precondition,t))return n;let i=e.value.clone(),s=t1(e.fieldTransforms,r,t);return i.setAll(s),t.convertToFoundDocument(t.version,i).setHasLocalMutations(),null}(e,t,n,r):e instanceof tZ?function(e,t,n,r){if(!tj(e.precondition,t))return n;let i=t1(e.fieldTransforms,r,t),s=t.data;return(s.setAll(t$(e)),s.setAll(i),t.convertToFoundDocument(t.version,s).setHasLocalMutations(),null===n)?null:n.unionWith(e.fieldMask.fields).unionWith(e.fieldTransforms.map(e=>e.field))}(e,t,n,r):tj(e.precondition,t)?(t.convertToNoDocument(t.version).setHasLocalMutations(),null):n}function tX(e,t){var n,r;return e.type===t.type&&!!e.key.isEqual(t.key)&&!!e.precondition.isEqual(t.precondition)&&(n=e.fieldTransforms,r=t.fieldTransforms,!!(void 0===n&&void 0===r||!(!n||!r)&&B(n,r,(e,t)=>{var n,r;return e.field.isEqual(t.field)&&(n=e.transform,r=t.transform,n instanceof tF&&r instanceof tF||n instanceof tP&&r instanceof tP?B(n.elements,r.elements,eM):n instanceof tB&&r instanceof tB?eM(n.Ie,r.Ie):n instanceof tO&&r instanceof tO)})))&&(0===e.type?e.value.isEqual(t.value):1!==e.type||e.data.isEqual(t.data)&&e.fieldMask.isEqual(t.fieldMask))}class tJ extends tH{getFieldMask(){return null}constructor(e,t,n,r=[]){super(),this.key=e,this.value=t,this.precondition=n,this.fieldTransforms=r,this.type=0}}class tZ extends tH{getFieldMask(){return this.fieldMask}constructor(e,t,n,r,i=[]){super(),this.key=e,this.data=t,this.fieldMask=n,this.precondition=r,this.fieldTransforms=i,this.type=1}}function t$(e){let t=new Map;return e.fieldMask.fields.forEach(n=>{if(!n.isEmpty()){let r=e.data.field(n);t.set(n,r)}}),t}function t0(e,t,n){var r;let i=new Map;e.length===n.length||C();for(let s=0;s<n.length;s++){let a=e[s],o=a.transform,l=t.data.field(a.field);i.set(a.field,(r=n[s],o instanceof tF?tU(o,l):o instanceof tP?tq(o,l):r))}return i}function t1(e,t,n){let r=new Map;for(let i of e){let e=i.transform,s=n.data.field(i.field);r.set(i.field,e instanceof tO?function(e,t){let n={fields:{[e_]:{stringValue:ew},[eT]:{timestampValue:{seconds:e.seconds,nanos:e.nanoseconds}}}};return t&&eI(t)&&(t=eC(t)),t&&(n.fields[eE]=t),{mapValue:n}}(t,s):e instanceof tF?tU(e,s):e instanceof tP?tq(e,s):function(e,t){let n=tM(e,t),r=tz(n)+tz(e.Ie);return ez(n)&&ez(e.Ie)?tL(r):tR(e.serializer,r)}(e,s))}return r}class t2 extends tH{getFieldMask(){return null}constructor(e,t){super(),this.key=e,this.precondition=t,this.type=2,this.fieldTransforms=[]}}class t3 extends tH{getFieldMask(){return null}constructor(e,t){super(),this.key=e,this.precondition=t,this.type=3,this.fieldTransforms=[]}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class t4{applyToRemoteDocument(e,t){let n=t.mutationResults;for(let t=0;t<this.mutations.length;t++){let i=this.mutations[t];if(i.key.isEqual(e.key)){var r;r=n[t],i instanceof tJ?function(e,t,n){let r=e.value.clone(),i=t0(e.fieldTransforms,t,n.transformResults);r.setAll(i),t.convertToFoundDocument(n.version,r).setHasCommittedMutations()}(i,e,r):i instanceof tZ?function(e,t,n){if(!tj(e.precondition,t))return void t.convertToUnknownDocument(n.version);let r=t0(e.fieldTransforms,t,n.transformResults),i=t.data;i.setAll(t$(e)),i.setAll(r),t.convertToFoundDocument(n.version,i).setHasCommittedMutations()}(i,e,r):function(e,t,n){t.convertToNoDocument(n.version).setHasCommittedMutations()}(0,e,r)}}}applyToLocalView(e,t){for(let n of this.baseMutations)n.key.isEqual(e.key)&&(t=tY(n,e,t,this.localWriteTime));for(let n of this.mutations)n.key.isEqual(e.key)&&(t=tY(n,e,t,this.localWriteTime));return t}applyToLocalDocumentSet(e,t){let n=tA();return this.mutations.forEach(r=>{let i=e.get(r.key),s=i.overlayedDocument,a=this.applyToLocalView(s,i.mutatedFields),o=tW(s,a=t.has(r.key)?null:a);null!==o&&n.set(r.key,o),s.isValidDocument()||s.convertToNoDocument(K.min())}),n}keys(){return this.mutations.reduce((e,t)=>e.add(t.key),tD())}isEqual(e){return this.batchId===e.batchId&&B(this.mutations,e.mutations,(e,t)=>tX(e,t))&&B(this.baseMutations,e.baseMutations,(e,t)=>tX(e,t))}constructor(e,t,n,r){this.batchId=e,this.localWriteTime=t,this.baseMutations=n,this.mutations=r}}class t9{static from(e,t,n){e.mutations.length===n.length||C();let r=tN,i=e.mutations;for(let e=0;e<i.length;e++)r=r.insert(i[e].key,n[e].version);return new t9(e,t,n,r)}constructor(e,t,n,r){this.batch=e,this.commitVersion=t,this.mutationResults=n,this.docVersions=r}}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class t8{getKey(){return this.mutation.key}isEqual(e){return null!==e&&this.mutation===e.mutation}toString(){return"Overlay{\n      largestBatchId: ".concat(this.largestBatchId,",\n      mutation: ").concat(this.mutation.toString(),"\n    }")}constructor(e,t){this.largestBatchId=e,this.mutation=t}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class t5{constructor(e,t){this.count=e,this.unchangedNames=t}}function t6(e){if(void 0===e)return E("GRPC error has no .code"),S.UNKNOWN;switch(e){case r.OK:return S.OK;case r.CANCELLED:return S.CANCELLED;case r.UNKNOWN:return S.UNKNOWN;case r.DEADLINE_EXCEEDED:return S.DEADLINE_EXCEEDED;case r.RESOURCE_EXHAUSTED:return S.RESOURCE_EXHAUSTED;case r.INTERNAL:return S.INTERNAL;case r.UNAVAILABLE:return S.UNAVAILABLE;case r.UNAUTHENTICATED:return S.UNAUTHENTICATED;case r.INVALID_ARGUMENT:return S.INVALID_ARGUMENT;case r.NOT_FOUND:return S.NOT_FOUND;case r.ALREADY_EXISTS:return S.ALREADY_EXISTS;case r.PERMISSION_DENIED:return S.PERMISSION_DENIED;case r.FAILED_PRECONDITION:return S.FAILED_PRECONDITION;case r.ABORTED:return S.ABORTED;case r.OUT_OF_RANGE:return S.OUT_OF_RANGE;case r.UNIMPLEMENTED:return S.UNIMPLEMENTED;case r.DATA_LOSS:return S.DATA_LOSS;default:return C()}}(i=r||(r={}))[i.OK=0]="OK",i[i.CANCELLED=1]="CANCELLED",i[i.UNKNOWN=2]="UNKNOWN",i[i.INVALID_ARGUMENT=3]="INVALID_ARGUMENT",i[i.DEADLINE_EXCEEDED=4]="DEADLINE_EXCEEDED",i[i.NOT_FOUND=5]="NOT_FOUND",i[i.ALREADY_EXISTS=6]="ALREADY_EXISTS",i[i.PERMISSION_DENIED=7]="PERMISSION_DENIED",i[i.UNAUTHENTICATED=16]="UNAUTHENTICATED",i[i.RESOURCE_EXHAUSTED=8]="RESOURCE_EXHAUSTED",i[i.FAILED_PRECONDITION=9]="FAILED_PRECONDITION",i[i.ABORTED=10]="ABORTED",i[i.OUT_OF_RANGE=11]="OUT_OF_RANGE",i[i.UNIMPLEMENTED=12]="UNIMPLEMENTED",i[i.INTERNAL=13]="INTERNAL",i[i.UNAVAILABLE=14]="UNAVAILABLE",i[i.DATA_LOSS=15]="DATA_LOSS";/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let t7=new h.z8([4294967295,4294967295],0);function ne(e){let t=O().encode(e),n=new h.V8;return n.update(t),new Uint8Array(n.digest())}function nt(e){let t=new DataView(e.buffer),n=t.getUint32(0,!0),r=t.getUint32(4,!0),i=t.getUint32(8,!0),s=t.getUint32(12,!0);return[new h.z8([n,r],0),new h.z8([i,s],0)]}class nn{Ae(e,t,n){let r=e.add(t.multiply(h.z8.fromNumber(n)));return 1===r.compare(t7)&&(r=new h.z8([r.getBits(0),r.getBits(1)],0)),r.modulo(this.de).toNumber()}Re(e){return!!(this.bitmap[Math.floor(e/8)]&1<<e%8)}mightContain(e){if(0===this.Ee)return!1;let[t,n]=nt(ne(e));for(let e=0;e<this.hashCount;e++){let r=this.Ae(t,n,e);if(!this.Re(r))return!1}return!0}static create(e,t,n){let r=new nn(new Uint8Array(Math.ceil(e/8)),e%8==0?0:8-e%8,t);return n.forEach(e=>r.insert(e)),r}insert(e){if(0===this.Ee)return;let[t,n]=nt(ne(e));for(let e=0;e<this.hashCount;e++){let r=this.Ae(t,n,e);this.Ve(r)}}Ve(e){this.bitmap[Math.floor(e/8)]|=1<<e%8}constructor(e,t,n){if(this.bitmap=e,this.padding=t,this.hashCount=n,t<0||t>=8)throw new nr("Invalid padding: ".concat(t));if(n<0||e.length>0&&0===this.hashCount)throw new nr("Invalid hash count: ".concat(n));if(0===e.length&&0!==t)throw new nr("Invalid padding when bitmap length is 0: ".concat(t));this.Ee=8*e.length-t,this.de=h.z8.fromNumber(this.Ee)}}class nr extends Error{constructor(){super(...arguments),this.name="BloomFilterError"}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ni{static createSynthesizedRemoteEventForCurrentChange(e,t,n){let r=new Map;return r.set(e,ns.createSynthesizedTargetChangeForCurrentChange(e,t,n)),new ni(K.min(),r,new eo(U),tI,tD())}constructor(e,t,n,r,i){this.snapshotVersion=e,this.targetChanges=t,this.targetMismatches=n,this.documentUpdates=r,this.resolvedLimboDocuments=i}}class ns{static createSynthesizedTargetChangeForCurrentChange(e,t,n){return new ns(n,t,tD(),tD(),tD())}constructor(e,t,n,r,i){this.resumeToken=e,this.current=t,this.addedDocuments=n,this.modifiedDocuments=r,this.removedDocuments=i}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class na{constructor(e,t,n,r){this.me=e,this.removedTargetIds=t,this.key=n,this.fe=r}}class no{constructor(e,t){this.targetId=e,this.ge=t}}class nl{constructor(e,t,n=em.EMPTY_BYTE_STRING,r=null){this.state=e,this.targetIds=t,this.resumeToken=n,this.cause=r}}class nu{get current(){return this.Se}get resumeToken(){return this.we}get De(){return 0!==this.pe}get ve(){return this.be}Ce(e){e.approximateByteSize()>0&&(this.be=!0,this.we=e)}Fe(){let e=tD(),t=tD(),n=tD();return this.ye.forEach((r,i)=>{switch(i){case 0:e=e.add(r);break;case 2:t=t.add(r);break;case 1:n=n.add(r);break;default:C()}}),new ns(this.we,this.Se,e,t,n)}Me(){this.be=!1,this.ye=nd()}xe(e,t){this.be=!0,this.ye=this.ye.insert(e,t)}Oe(e){this.be=!0,this.ye=this.ye.remove(e)}Ne(){this.pe+=1}Be(){this.pe-=1,this.pe>=0||C()}Le(){this.be=!0,this.Se=!0}constructor(){this.pe=0,this.ye=nd(),this.we=em.EMPTY_BYTE_STRING,this.Se=!1,this.be=!0}}class nc{We(e){for(let t of e.me)e.fe&&e.fe.isFoundDocument()?this.Ge(t,e.fe):this.ze(t,e.key,e.fe);for(let t of e.removedTargetIds)this.ze(t,e.key,e.fe)}je(e){this.forEachTarget(e,t=>{let n=this.He(t);switch(e.state){case 0:this.Je(t)&&n.Ce(e.resumeToken);break;case 1:n.Be(),n.De||n.Me(),n.Ce(e.resumeToken);break;case 2:n.Be(),n.De||this.removeTarget(t);break;case 3:this.Je(t)&&(n.Le(),n.Ce(e.resumeToken));break;case 4:this.Je(t)&&(this.Ye(t),n.Ce(e.resumeToken));break;default:C()}})}forEachTarget(e,t){e.targetIds.length>0?e.targetIds.forEach(t):this.qe.forEach((e,n)=>{this.Je(n)&&t(n)})}Ze(e){let t=e.targetId,n=e.ge.count,r=this.Xe(t);if(r){let i=r.target;if(tu(i)){if(0===n){let e=new Y(i.path);this.ze(t,e,eJ.newNoDocument(e,K.min()))}else 1===n||C()}else{let r=this.et(t);if(r!==n){let n=this.tt(e),i=n?this.nt(n,e,r):1;0!==i&&(this.Ye(t),this.Ke=this.Ke.insert(t,2===i?"TargetPurposeExistenceFilterMismatchBloom":"TargetPurposeExistenceFilterMismatch"))}}}}tt(e){let t,n;let r=e.ge.unchangedNames;if(!r||!r.bits)return null;let{bits:{bitmap:i="",padding:s=0},hashCount:a=0}=r;try{t=ev(i).toUint8Array()}catch(e){if(e instanceof ef)return T("Decoding the base64 bloom filter in existence filter failed ("+e.message+"); ignoring the bloom filter and falling back to full re-query."),null;throw e}try{n=new nn(t,s,a)}catch(e){return T(e instanceof nr?"BloomFilter error: ":"Applying bloom filter failed: ",e),null}return 0===n.Ee?null:n}nt(e,t,n){return t.ge.count===n-this.st(e,t.targetId)?0:2}st(e,t){let n=this.ke.getRemoteKeysForTarget(t),r=0;return n.forEach(n=>{let i=this.ke.it(),s="projects/".concat(i.projectId,"/databases/").concat(i.database,"/documents/").concat(n.path.canonicalString());e.mightContain(s)||(this.ze(t,n,null),r++)}),r}ot(e){let t=new Map;this.qe.forEach((n,r)=>{let i=this.Xe(r);if(i){if(n.current&&tu(i.target)){let t=new Y(i.target.path);this._t(t).has(r)||this.ut(r,t)||this.ze(r,t,eJ.newNoDocument(t,e))}n.ve&&(t.set(r,n.Fe()),n.Me())}});let n=tD();this.Ue.forEach((e,t)=>{let r=!0;t.forEachWhile(e=>{let t=this.Xe(e);return!t||"TargetPurposeLimboResolution"===t.purpose||(r=!1,!1)}),r&&(n=n.add(e))}),this.Qe.forEach((t,n)=>n.setReadTime(e));let r=new ni(e,t,this.Ke,this.Qe,n);return this.Qe=tI,this.$e=nh(),this.Ue=nh(),this.Ke=new eo(U),r}Ge(e,t){if(!this.Je(e))return;let n=this.ut(e,t.key)?2:0;this.He(e).xe(t.key,n),this.Qe=this.Qe.insert(t.key,t),this.$e=this.$e.insert(t.key,this._t(t.key).add(e)),this.Ue=this.Ue.insert(t.key,this.ct(t.key).add(e))}ze(e,t,n){if(!this.Je(e))return;let r=this.He(e);this.ut(e,t)?r.xe(t,1):r.Oe(t),this.Ue=this.Ue.insert(t,this.ct(t).delete(e)),this.Ue=this.Ue.insert(t,this.ct(t).add(e)),n&&(this.Qe=this.Qe.insert(t,n))}removeTarget(e){this.qe.delete(e)}et(e){let t=this.He(e).Fe();return this.ke.getRemoteKeysForTarget(e).size+t.addedDocuments.size-t.removedDocuments.size}Ne(e){this.He(e).Ne()}He(e){let t=this.qe.get(e);return t||(t=new nu,this.qe.set(e,t)),t}ct(e){let t=this.Ue.get(e);return t||(t=new ec(U),this.Ue=this.Ue.insert(e,t)),t}_t(e){let t=this.$e.get(e);return t||(t=new ec(U),this.$e=this.$e.insert(e,t)),t}Je(e){let t=null!==this.Xe(e);return t||_("WatchChangeAggregator","Detected inactive target",e),t}Xe(e){let t=this.qe.get(e);return t&&t.De?null:this.ke.lt(e)}Ye(e){this.qe.set(e,new nu),this.ke.getRemoteKeysForTarget(e).forEach(t=>{this.ze(e,t,null)})}ut(e,t){return this.ke.getRemoteKeysForTarget(e).has(t)}constructor(e){this.ke=e,this.qe=new Map,this.Qe=tI,this.$e=nh(),this.Ue=nh(),this.Ke=new eo(U)}}function nh(){return new eo(Y.comparator)}function nd(){return new eo(Y.comparator)}let nf={asc:"ASCENDING",desc:"DESCENDING"},nm={"<":"LESS_THAN","<=":"LESS_THAN_OR_EQUAL",">":"GREATER_THAN",">=":"GREATER_THAN_OR_EQUAL","==":"EQUAL","!=":"NOT_EQUAL","array-contains":"ARRAY_CONTAINS",in:"IN","not-in":"NOT_IN","array-contains-any":"ARRAY_CONTAINS_ANY"},ng={and:"AND",or:"OR"};class np{constructor(e,t){this.databaseId=e,this.useProto3Json=t}}function ny(e,t){return e.useProto3Json||null==t?t:{value:t}}function nv(e,t){return e.useProto3Json?"".concat(new Date(1e3*t.seconds).toISOString().replace(/\.\d*/,"").replace("Z",""),".").concat(("000000000"+t.nanoseconds).slice(-9),"Z"):{seconds:""+t.seconds,nanos:t.nanoseconds}}function nw(e,t){return e.useProto3Json?t.toBase64():t.toUint8Array()}function n_(e){return e||C(),K.fromTimestamp(function(e){let t=ep(e);return new z(t.seconds,t.nanos)}(e))}function nE(e,t){return nT(e,t).canonicalString()}function nT(e,t){let n=new j(["projects",e.projectId,"databases",e.database]).child("documents");return void 0===t?n:n.child(t)}function nI(e){let t=j.fromString(e);return nR(t)||C(),t}function nC(e,t){return nE(e.databaseId,t.path)}function nS(e,t){let n=nI(t);if(n.get(1)!==e.databaseId.projectId)throw new b(S.INVALID_ARGUMENT,"Tried to deserialize key from different project: "+n.get(1)+" vs "+e.databaseId.projectId);if(n.get(3)!==e.databaseId.database)throw new b(S.INVALID_ARGUMENT,"Tried to deserialize key from different database: "+n.get(3)+" vs "+e.databaseId.database);return new Y(nN(n))}function nb(e,t){return nE(e.databaseId,t)}function nA(e){return new j(["projects",e.databaseId.projectId,"databases",e.databaseId.database]).canonicalString()}function nN(e){return e.length>4&&"documents"===e.get(4)||C(),e.popFirst(5)}function nk(e,t,n){return{name:nC(e,t),fields:n.value.mapValue.fields}}function nD(e){return{fieldPath:e.canonicalString()}}function nx(e){return W.fromServerFormat(e.fieldPath)}function nR(e){return e.length>=4&&"projects"===e.get(0)&&"databases"===e.get(2)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class nL{withSequenceNumber(e){return new nL(this.target,this.targetId,this.purpose,e,this.snapshotVersion,this.lastLimboFreeSnapshotVersion,this.resumeToken,this.expectedCount)}withResumeToken(e,t){return new nL(this.target,this.targetId,this.purpose,this.sequenceNumber,t,this.lastLimboFreeSnapshotVersion,e,null)}withExpectedCount(e){return new nL(this.target,this.targetId,this.purpose,this.sequenceNumber,this.snapshotVersion,this.lastLimboFreeSnapshotVersion,this.resumeToken,e)}withLastLimboFreeSnapshotVersion(e){return new nL(this.target,this.targetId,this.purpose,this.sequenceNumber,this.snapshotVersion,e,this.resumeToken,this.expectedCount)}constructor(e,t,n,r,i=K.min(),s=K.min(),a=em.EMPTY_BYTE_STRING,o=null){this.target=e,this.targetId=t,this.purpose=n,this.sequenceNumber=r,this.snapshotVersion=i,this.lastLimboFreeSnapshotVersion=s,this.resumeToken=a,this.expectedCount=o}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class nV{constructor(e){this.Tt=e}}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class nM{At(e,t){this.Rt(e,t),t.Vt()}Rt(e,t){if("nullValue"in e)this.ft(t,5);else if("booleanValue"in e)this.ft(t,10),t.gt(e.booleanValue?1:0);else if("integerValue"in e)this.ft(t,15),t.gt(ey(e.integerValue));else if("doubleValue"in e){let n=ey(e.doubleValue);isNaN(n)?this.ft(t,13):(this.ft(t,15),er(n)?t.gt(0):t.gt(n))}else if("timestampValue"in e){let n=e.timestampValue;this.ft(t,20),"string"==typeof n&&(n=ep(n)),t.yt("".concat(n.seconds||"")),t.gt(n.nanos||0)}else if("stringValue"in e)this.wt(e.stringValue,t),this.St(t);else if("bytesValue"in e)this.ft(t,30),t.bt(ev(e.bytesValue)),this.St(t);else if("referenceValue"in e)this.Dt(e.referenceValue,t);else if("geoPointValue"in e){let n=e.geoPointValue;this.ft(t,45),t.gt(n.latitude||0),t.gt(n.longitude||0)}else"mapValue"in e?eY(e)?this.ft(t,Number.MAX_SAFE_INTEGER):eH(e)?this.vt(e.mapValue,t):(this.Ct(e.mapValue,t),this.St(t)):"arrayValue"in e?(this.Ft(e.arrayValue,t),this.St(t)):C()}wt(e,t){this.ft(t,25),this.Mt(e,t)}Mt(e,t){t.yt(e)}Ct(e,t){let n=e.fields||{};for(let e of(this.ft(t,55),Object.keys(n)))this.wt(e,t),this.Rt(n[e],t)}vt(e,t){var n,r;let i=e.fields||{};this.ft(t,53);let s=(null===(r=null===(n=i[eL].arrayValue)||void 0===n?void 0:n.values)||void 0===r?void 0:r.length)||0;this.ft(t,15),t.gt(ey(s)),this.wt(eL,t),this.Rt(i[eL],t)}Ft(e,t){let n=e.values||[];for(let e of(this.ft(t,50),n))this.Rt(e,t)}Dt(e,t){this.ft(t,37),Y.fromName(e).path.forEach(e=>{this.ft(t,60),this.Mt(e,t)})}ft(e,t){e.gt(t)}St(e){e.gt(2)}constructor(){}}nM.xt=new nM;/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class nO{addToCollectionParentIndex(e,t){return this.Tn.add(t),ee.resolve()}getCollectionParents(e,t){return ee.resolve(this.Tn.getEntries(t))}addFieldIndex(e,t){return ee.resolve()}deleteFieldIndex(e,t){return ee.resolve()}deleteAllFieldIndexes(e){return ee.resolve()}createTargetIndexes(e,t){return ee.resolve()}getDocumentsMatchingTarget(e,t){return ee.resolve(null)}getIndexType(e,t){return ee.resolve(0)}getFieldIndexes(e,t){return ee.resolve([])}getNextCollectionGroupToUpdate(e){return ee.resolve(null)}getMinOffset(e,t){return ee.resolve(J.min())}getMinOffsetFromCollectionGroup(e,t){return ee.resolve(J.min())}updateCollectionGroup(e,t,n){return ee.resolve()}updateIndexEntries(e,t){return ee.resolve()}constructor(){this.Tn=new nF}}class nF{add(e){let t=e.lastSegment(),n=e.popLast(),r=this.index[t]||new ec(j.comparator),i=!r.has(n);return this.index[t]=r.add(n),i}has(e){let t=e.lastSegment(),n=e.popLast(),r=this.index[t];return r&&r.has(n)}getEntries(e){return(this.index[e]||new ec(j.comparator)).toArray()}constructor(){this.index={}}}new Uint8Array(0);/**
 * @license
 * Copyright 2018 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let nU={didRun:!1,sequenceNumbersCollected:0,targetsRemoved:0,documentsRemoved:0};class nP{static withCacheSize(e){return new nP(e,nP.DEFAULT_COLLECTION_PERCENTILE,nP.DEFAULT_MAX_SEQUENCE_NUMBERS_TO_COLLECT)}constructor(e,t,n){this.cacheSizeCollectionThreshold=e,this.percentileToCollect=t,this.maximumSequenceNumbersToCollect=n}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */nP.DEFAULT_COLLECTION_PERCENTILE=10,nP.DEFAULT_MAX_SEQUENCE_NUMBERS_TO_COLLECT=1e3,nP.DEFAULT=new nP(41943040,nP.DEFAULT_COLLECTION_PERCENTILE,nP.DEFAULT_MAX_SEQUENCE_NUMBERS_TO_COLLECT),nP.DISABLED=new nP(-1,0,0);/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class nq{next(){return this.$n+=2,this.$n}static Un(){return new nq(0)}static Kn(){return new nq(-1)}constructor(e){this.$n=e}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let nB="LruGarbageCollector";function nz(e,t){let[n,r]=e,[i,s]=t,a=U(n,i);return 0===a?U(r,s):a}class nK{Yn(){return++this.Jn}Zn(e){let t=[e,this.Yn()];if(this.buffer.size<this.Hn)this.buffer=this.buffer.add(t);else{let e=this.buffer.last();0>nz(t,e)&&(this.buffer=this.buffer.delete(e).add(t))}}get maxValue(){return this.buffer.last()[0]}constructor(e){this.Hn=e,this.buffer=new ec(nz),this.Jn=0}}class nG{start(){-1!==this.garbageCollector.params.cacheSizeCollectionThreshold&&this.er(6e4)}stop(){this.Xn&&(this.Xn.cancel(),this.Xn=null)}get started(){return null!==this.Xn}er(e){_(nB,"Garbage collection scheduled in ".concat(e,"ms")),this.Xn=this.asyncQueue.enqueueAfterDelay("lru_garbage_collection",e,async()=>{this.Xn=null;try{await this.localStore.collectGarbage(this.garbageCollector)}catch(e){et(e)?_(nB,"Ignoring IndexedDB error during garbage collection: ",e):await $(e)}await this.er(3e5)})}constructor(e,t,n){this.garbageCollector=e,this.asyncQueue=t,this.localStore=n,this.Xn=null}}class nQ{calculateTargetCount(e,t){return this.tr.nr(e).next(e=>Math.floor(t/100*e))}nthSequenceNumber(e,t){if(0===t)return ee.resolve(en.ae);let n=new nK(t);return this.tr.forEachTarget(e,e=>n.Zn(e.sequenceNumber)).next(()=>this.tr.rr(e,e=>n.Zn(e))).next(()=>n.maxValue)}removeTargets(e,t,n){return this.tr.removeTargets(e,t,n)}removeOrphanedDocuments(e,t){return this.tr.removeOrphanedDocuments(e,t)}collect(e,t){return -1===this.params.cacheSizeCollectionThreshold?(_("LruGarbageCollector","Garbage collection skipped; disabled"),ee.resolve(nU)):this.getCacheSize(e).next(n=>n<this.params.cacheSizeCollectionThreshold?(_("LruGarbageCollector","Garbage collection skipped; Cache size ".concat(n," is lower than threshold ").concat(this.params.cacheSizeCollectionThreshold)),nU):this.ir(e,t))}getCacheSize(e){return this.tr.getCacheSize(e)}ir(e,t){let n,r,i,s,a,o,l;let c=Date.now();return this.calculateTargetCount(e,this.params.percentileToCollect).next(t=>(t>this.params.maximumSequenceNumbersToCollect?(_("LruGarbageCollector","Capping sequence numbers to collect down to the maximum of ".concat(this.params.maximumSequenceNumbersToCollect," from ").concat(t)),r=this.params.maximumSequenceNumbersToCollect):r=t,s=Date.now(),this.nthSequenceNumber(e,r))).next(r=>(n=r,a=Date.now(),this.removeTargets(e,n,t))).next(t=>(i=t,o=Date.now(),this.removeOrphanedDocuments(e,n))).next(e=>(l=Date.now(),w()<=u.in.DEBUG&&_("LruGarbageCollector","LRU Garbage Collection\n	Counted targets in ".concat(s-c,"ms\n	Determined least recently used ").concat(r," in ")+(a-s)+"ms\n"+"	Removed ".concat(i," targets in ")+(o-a)+"ms\n"+"	Removed ".concat(e," documents in ")+(l-o)+"ms\n"+"Total Duration: ".concat(l-c,"ms")),ee.resolve({didRun:!0,sequenceNumbersCollected:r,targetsRemoved:i,documentsRemoved:e})))}constructor(e,t){this.tr=e,this.params=t}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class nj{addEntry(e){this.assertNotApplied(),this.changes.set(e.key,e)}removeEntry(e,t){this.assertNotApplied(),this.changes.set(e,eJ.newInvalidDocument(e).setReadTime(t))}getEntry(e,t){this.assertNotApplied();let n=this.changes.get(t);return void 0!==n?ee.resolve(n):this.getFromCache(e,t)}getEntries(e,t){return this.getAllFromCache(e,t)}apply(e){return this.assertNotApplied(),this.changesApplied=!0,this.applyChanges(e)}assertNotApplied(){}constructor(){this.changes=new tT(e=>e.toString(),(e,t)=>e.isEqual(t)),this.changesApplied=!1}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 *//**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class nH{constructor(e,t){this.overlayedDocument=e,this.mutatedFields=t}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class nW{getDocument(e,t){let n=null;return this.documentOverlayCache.getOverlay(e,t).next(r=>(n=r,this.remoteDocumentCache.getEntry(e,t))).next(e=>(null!==n&&tY(n.mutation,e,ed.empty(),z.now()),e))}getDocuments(e,t){return this.remoteDocumentCache.getEntries(e,t).next(t=>this.getLocalViewOfDocuments(e,t,tD()).next(()=>t))}getLocalViewOfDocuments(e,t){let n=arguments.length>2&&void 0!==arguments[2]?arguments[2]:tD(),r=tA();return this.populateOverlays(e,r,t).next(()=>this.computeViews(e,t,r,n).next(e=>{let t=tS();return e.forEach((e,n)=>{t=t.insert(e,n.overlayedDocument)}),t}))}getOverlayedDocuments(e,t){let n=tA();return this.populateOverlays(e,n,t).next(()=>this.computeViews(e,t,n,tD()))}populateOverlays(e,t,n){let r=[];return n.forEach(e=>{t.has(e)||r.push(e)}),this.documentOverlayCache.getOverlays(e,r).next(e=>{e.forEach((e,n)=>{t.set(e,n)})})}computeViews(e,t,n,r){let i=tI,s=tA(),a=tA();return t.forEach((e,t)=>{let a=n.get(t.key);r.has(t.key)&&(void 0===a||a.mutation instanceof tZ)?i=i.insert(t.key,t):void 0!==a?(s.set(t.key,a.mutation.getFieldMask()),tY(a.mutation,t,a.mutation.getFieldMask(),z.now())):s.set(t.key,ed.empty())}),this.recalculateAndSaveOverlays(e,i).next(e=>(e.forEach((e,t)=>s.set(e,t)),t.forEach((e,t)=>{var n;return a.set(e,new nH(t,null!==(n=s.get(e))&&void 0!==n?n:null))}),a))}recalculateAndSaveOverlays(e,t){let n=tA(),r=new eo((e,t)=>e-t),i=tD();return this.mutationQueue.getAllMutationBatchesAffectingDocumentKeys(e,t).next(e=>{for(let i of e)i.keys().forEach(e=>{let s=t.get(e);if(null===s)return;let a=n.get(e)||ed.empty();a=i.applyToLocalView(s,a),n.set(e,a);let o=(r.get(i.batchId)||tD()).add(e);r=r.insert(i.batchId,o)})}).next(()=>{let s=[],a=r.getReverseIterator();for(;a.hasNext();){let r=a.getNext(),o=r.key,l=r.value,u=tA();l.forEach(e=>{if(!i.has(e)){let r=tW(t.get(e),n.get(e));null!==r&&u.set(e,r),i=i.add(e)}}),s.push(this.documentOverlayCache.saveOverlays(e,o,u))}return ee.waitFor(s)}).next(()=>n)}recalculateAndSaveOverlaysForDocumentKeys(e,t){return this.remoteDocumentCache.getEntries(e,t).next(t=>this.recalculateAndSaveOverlays(e,t))}getDocumentsMatchingQuery(e,t,n,r){return Y.isDocumentKey(t.path)&&null===t.collectionGroup&&0===t.filters.length?this.getDocumentsMatchingDocumentQuery(e,t.path):td(t)?this.getDocumentsMatchingCollectionGroupQuery(e,t,n,r):this.getDocumentsMatchingCollectionQuery(e,t,n,r)}getNextDocuments(e,t,n,r){return this.remoteDocumentCache.getAllFromCollectionGroup(e,t,n,r).next(i=>{let s=r-i.size>0?this.documentOverlayCache.getOverlaysForCollectionGroup(e,t,n.largestBatchId,r-i.size):ee.resolve(tA()),a=-1,o=i;return s.next(t=>ee.forEach(t,(t,n)=>(a<n.largestBatchId&&(a=n.largestBatchId),i.get(t)?ee.resolve():this.remoteDocumentCache.getEntry(e,t).next(e=>{o=o.insert(t,e)}))).next(()=>this.populateOverlays(e,t,i)).next(()=>this.computeViews(e,o,t,tD())).next(e=>({batchId:a,changes:tb(e)})))})}getDocumentsMatchingDocumentQuery(e,t){return this.getDocument(e,new Y(t)).next(e=>{let t=tS();return e.isFoundDocument()&&(t=t.insert(e.key,e)),t})}getDocumentsMatchingCollectionGroupQuery(e,t,n,r){let i=t.collectionGroup,s=tS();return this.indexManager.getCollectionParents(e,i).next(a=>ee.forEach(a,a=>{let o=new tc(a.child(i),null,t.explicitOrderBy.slice(),t.filters.slice(),t.limit,t.limitType,t.startAt,t.endAt);return this.getDocumentsMatchingCollectionQuery(e,o,n,r).next(e=>{e.forEach((e,t)=>{s=s.insert(e,t)})})}).next(()=>s))}getDocumentsMatchingCollectionQuery(e,t,n,r){let i;return this.documentOverlayCache.getOverlaysForCollection(e,t.path,n.largestBatchId).next(s=>(i=s,this.remoteDocumentCache.getDocumentsMatchingQuery(e,t,n,i,r))).next(e=>{i.forEach((t,n)=>{let r=n.getKey();null===e.get(r)&&(e=e.insert(r,eJ.newInvalidDocument(r)))});let n=tS();return e.forEach((e,r)=>{let s=i.get(e);void 0!==s&&tY(s.mutation,r,ed.empty(),z.now()),t_(t,r)&&(n=n.insert(e,r))}),n})}constructor(e,t,n,r){this.remoteDocumentCache=e,this.mutationQueue=t,this.documentOverlayCache=n,this.indexManager=r}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class nY{getBundleMetadata(e,t){return ee.resolve(this.dr.get(t))}saveBundleMetadata(e,t){return this.dr.set(t.id,{id:t.id,version:t.version,createTime:n_(t.createTime)}),ee.resolve()}getNamedQuery(e,t){return ee.resolve(this.Ar.get(t))}saveNamedQuery(e,t){return this.Ar.set(t.name,{name:t.name,query:function(e){let t=function(e){var t;let n,r=function(e){let t=nI(e);return 4===t.length?j.emptyPath():nN(t)}(e.parent),i=e.structuredQuery,s=i.from?i.from.length:0,a=null;if(s>0){1===s||C();let e=i.from[0];e.allDescendants?a=e.collectionId:r=r.child(e.collectionId)}let o=[];i.where&&(o=function(e){var t;let n=function e(t){return void 0!==t.unaryFilter?function(e){switch(e.unaryFilter.op){case"IS_NAN":let t=nx(e.unaryFilter.field);return e3.create(t,"==",{doubleValue:NaN});case"IS_NULL":let n=nx(e.unaryFilter.field);return e3.create(n,"==",{nullValue:"NULL_VALUE"});case"IS_NOT_NAN":let r=nx(e.unaryFilter.field);return e3.create(r,"!=",{doubleValue:NaN});case"IS_NOT_NULL":let i=nx(e.unaryFilter.field);return e3.create(i,"!=",{nullValue:"NULL_VALUE"});default:return C()}}(t):void 0!==t.fieldFilter?e3.create(nx(t.fieldFilter.field),function(e){switch(e){case"EQUAL":return"==";case"NOT_EQUAL":return"!=";case"GREATER_THAN":return">";case"GREATER_THAN_OR_EQUAL":return">=";case"LESS_THAN":return"<";case"LESS_THAN_OR_EQUAL":return"<=";case"ARRAY_CONTAINS":return"array-contains";case"IN":return"in";case"NOT_IN":return"not-in";case"ARRAY_CONTAINS_ANY":return"array-contains-any";default:return C()}}(t.fieldFilter.op),t.fieldFilter.value):void 0!==t.compositeFilter?e4.create(t.compositeFilter.filters.map(t=>e(t)),function(e){switch(e){case"AND":return"and";case"OR":return"or";default:return C()}}(t.compositeFilter.op)):C()}(e);return n instanceof e4&&e8(t=n)&&e9(t)?n.getFilters():[n]}(i.where));let l=[];i.orderBy&&(l=i.orderBy.map(e=>new e1(nx(e.field),function(e){switch(e){case"ASCENDING":return"asc";case"DESCENDING":return"desc";default:return}}(e.direction))));let u=null;i.limit&&(u=null==(n="object"==typeof(t=i.limit)?t.value:t)?null:n);let c=null;i.startAt&&(c=function(e){let t=!!e.before;return new eZ(e.values||[],t)}(i.startAt));let h=null;return i.endAt&&(h=function(e){let t=!e.before;return new eZ(e.values||[],t)}(i.endAt)),new tc(r,a,l,o,u,"F",c,h)}({parent:e.parent,structuredQuery:e.structuredQuery});return"LAST"===e.limitType?tp(t,t.limit,"L"):t}(t.bundledQuery),readTime:n_(t.readTime)}),ee.resolve()}constructor(e){this.serializer=e,this.dr=new Map,this.Ar=new Map}}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class nX{getOverlay(e,t){return ee.resolve(this.overlays.get(t))}getOverlays(e,t){let n=tA();return ee.forEach(t,t=>this.getOverlay(e,t).next(e=>{null!==e&&n.set(t,e)})).next(()=>n)}saveOverlays(e,t,n){return n.forEach((n,r)=>{this.Et(e,t,r)}),ee.resolve()}removeOverlaysForBatchId(e,t,n){let r=this.Rr.get(n);return void 0!==r&&(r.forEach(e=>this.overlays=this.overlays.remove(e)),this.Rr.delete(n)),ee.resolve()}getOverlaysForCollection(e,t,n){let r=tA(),i=t.length+1,s=new Y(t.child("")),a=this.overlays.getIteratorFrom(s);for(;a.hasNext();){let e=a.getNext().value,s=e.getKey();if(!t.isPrefixOf(s.path))break;s.path.length===i&&e.largestBatchId>n&&r.set(e.getKey(),e)}return ee.resolve(r)}getOverlaysForCollectionGroup(e,t,n,r){let i=new eo((e,t)=>e-t),s=this.overlays.getIterator();for(;s.hasNext();){let e=s.getNext().value;if(e.getKey().getCollectionGroup()===t&&e.largestBatchId>n){let t=i.get(e.largestBatchId);null===t&&(t=tA(),i=i.insert(e.largestBatchId,t)),t.set(e.getKey(),e)}}let a=tA(),o=i.getIterator();for(;o.hasNext()&&(o.getNext().value.forEach((e,t)=>a.set(e,t)),!(a.size()>=r)););return ee.resolve(a)}Et(e,t,n){let r=this.overlays.get(n.key);if(null!==r){let e=this.Rr.get(r.largestBatchId).delete(n.key);this.Rr.set(r.largestBatchId,e)}this.overlays=this.overlays.insert(n.key,new t8(t,n));let i=this.Rr.get(t);void 0===i&&(i=tD(),this.Rr.set(t,i)),this.Rr.set(t,i.add(n.key))}constructor(){this.overlays=new eo(Y.comparator),this.Rr=new Map}}/**
 * @license
 * Copyright 2024 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class nJ{getSessionToken(e){return ee.resolve(this.sessionToken)}setSessionToken(e,t){return this.sessionToken=t,ee.resolve()}constructor(){this.sessionToken=em.EMPTY_BYTE_STRING}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class nZ{isEmpty(){return this.Vr.isEmpty()}addReference(e,t){let n=new n$(e,t);this.Vr=this.Vr.add(n),this.gr=this.gr.add(n)}yr(e,t){e.forEach(e=>this.addReference(e,t))}removeReference(e,t){this.wr(new n$(e,t))}Sr(e,t){e.forEach(e=>this.removeReference(e,t))}br(e){let t=new Y(new j([])),n=new n$(t,e),r=new n$(t,e+1),i=[];return this.gr.forEachInRange([n,r],e=>{this.wr(e),i.push(e.key)}),i}Dr(){this.Vr.forEach(e=>this.wr(e))}wr(e){this.Vr=this.Vr.delete(e),this.gr=this.gr.delete(e)}vr(e){let t=new Y(new j([])),n=new n$(t,e),r=new n$(t,e+1),i=tD();return this.gr.forEachInRange([n,r],e=>{i=i.add(e.key)}),i}containsKey(e){let t=new n$(e,0),n=this.Vr.firstAfterOrEqual(t);return null!==n&&e.isEqual(n.key)}constructor(){this.Vr=new ec(n$.mr),this.gr=new ec(n$.pr)}}class n${static mr(e,t){return Y.comparator(e.key,t.key)||U(e.Cr,t.Cr)}static pr(e,t){return U(e.Cr,t.Cr)||Y.comparator(e.key,t.key)}constructor(e,t){this.key=e,this.Cr=t}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class n0{checkEmpty(e){return ee.resolve(0===this.mutationQueue.length)}addMutationBatch(e,t,n,r){let i=this.Fr;this.Fr++,this.mutationQueue.length>0&&this.mutationQueue[this.mutationQueue.length-1];let s=new t4(i,t,n,r);for(let t of(this.mutationQueue.push(s),r))this.Mr=this.Mr.add(new n$(t.key,i)),this.indexManager.addToCollectionParentIndex(e,t.key.path.popLast());return ee.resolve(s)}lookupMutationBatch(e,t){return ee.resolve(this.Or(t))}getNextMutationBatchAfterBatchId(e,t){let n=this.Nr(t+1),r=n<0?0:n;return ee.resolve(this.mutationQueue.length>r?this.mutationQueue[r]:null)}getHighestUnacknowledgedBatchId(){return ee.resolve(0===this.mutationQueue.length?-1:this.Fr-1)}getAllMutationBatches(e){return ee.resolve(this.mutationQueue.slice())}getAllMutationBatchesAffectingDocumentKey(e,t){let n=new n$(t,0),r=new n$(t,Number.POSITIVE_INFINITY),i=[];return this.Mr.forEachInRange([n,r],e=>{let t=this.Or(e.Cr);i.push(t)}),ee.resolve(i)}getAllMutationBatchesAffectingDocumentKeys(e,t){let n=new ec(U);return t.forEach(e=>{let t=new n$(e,0),r=new n$(e,Number.POSITIVE_INFINITY);this.Mr.forEachInRange([t,r],e=>{n=n.add(e.Cr)})}),ee.resolve(this.Br(n))}getAllMutationBatchesAffectingQuery(e,t){let n=t.path,r=n.length+1,i=n;Y.isDocumentKey(i)||(i=i.child(""));let s=new n$(new Y(i),0),a=new ec(U);return this.Mr.forEachWhile(e=>{let t=e.key.path;return!!n.isPrefixOf(t)&&(t.length===r&&(a=a.add(e.Cr)),!0)},s),ee.resolve(this.Br(a))}Br(e){let t=[];return e.forEach(e=>{let n=this.Or(e);null!==n&&t.push(n)}),t}removeMutationBatch(e,t){0===this.Lr(t.batchId,"removed")||C(),this.mutationQueue.shift();let n=this.Mr;return ee.forEach(t.mutations,r=>{let i=new n$(r.key,t.batchId);return n=n.delete(i),this.referenceDelegate.markPotentiallyOrphaned(e,r.key)}).next(()=>{this.Mr=n})}qn(e){}containsKey(e,t){let n=new n$(t,0),r=this.Mr.firstAfterOrEqual(n);return ee.resolve(t.isEqual(r&&r.key))}performConsistencyCheck(e){return this.mutationQueue.length,ee.resolve()}Lr(e,t){return this.Nr(e)}Nr(e){return 0===this.mutationQueue.length?0:e-this.mutationQueue[0].batchId}Or(e){let t=this.Nr(e);return t<0||t>=this.mutationQueue.length?null:this.mutationQueue[t]}constructor(e,t){this.indexManager=e,this.referenceDelegate=t,this.mutationQueue=[],this.Fr=1,this.Mr=new ec(n$.mr)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class n1{setIndexManager(e){this.indexManager=e}addEntry(e,t){let n=t.key,r=this.docs.get(n),i=r?r.size:0,s=this.kr(t);return this.docs=this.docs.insert(n,{document:t.mutableCopy(),size:s}),this.size+=s-i,this.indexManager.addToCollectionParentIndex(e,n.path.popLast())}removeEntry(e){let t=this.docs.get(e);t&&(this.docs=this.docs.remove(e),this.size-=t.size)}getEntry(e,t){let n=this.docs.get(t);return ee.resolve(n?n.document.mutableCopy():eJ.newInvalidDocument(t))}getEntries(e,t){let n=tI;return t.forEach(e=>{let t=this.docs.get(e);n=n.insert(e,t?t.document.mutableCopy():eJ.newInvalidDocument(e))}),ee.resolve(n)}getDocumentsMatchingQuery(e,t,n,r){let i=tI,s=t.path,a=new Y(s.child("__id-9223372036854775808__")),o=this.docs.getIteratorFrom(a);for(;o.hasNext();){let{key:e,value:{document:a}}=o.getNext();if(!s.isPrefixOf(e.path))break;e.path.length>s.length+1||0>=function(e,t){let n=e.readTime.compareTo(t.readTime);return 0!==n?n:0!==(n=Y.comparator(e.documentKey,t.documentKey))?n:U(e.largestBatchId,t.largestBatchId)}(new J(a.readTime,a.key,-1),n)||(r.has(a.key)||t_(t,a))&&(i=i.insert(a.key,a.mutableCopy()))}return ee.resolve(i)}getAllFromCollectionGroup(e,t,n,r){C()}qr(e,t){return ee.forEach(this.docs,e=>t(e))}newChangeBuffer(e){return new n2(this)}getSize(e){return ee.resolve(this.size)}constructor(e){this.kr=e,this.docs=new eo(Y.comparator),this.size=0}}class n2 extends nj{applyChanges(e){let t=[];return this.changes.forEach((n,r)=>{r.isValidDocument()?t.push(this.Ir.addEntry(e,r)):this.Ir.removeEntry(n)}),ee.waitFor(t)}getFromCache(e,t){return this.Ir.getEntry(e,t)}getAllFromCache(e,t){return this.Ir.getEntries(e,t)}constructor(e){super(),this.Ir=e}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class n3{forEachTarget(e,t){return this.Qr.forEach((e,n)=>t(n)),ee.resolve()}getLastRemoteSnapshotVersion(e){return ee.resolve(this.lastRemoteSnapshotVersion)}getHighestSequenceNumber(e){return ee.resolve(this.$r)}allocateTargetId(e){return this.highestTargetId=this.Kr.next(),ee.resolve(this.highestTargetId)}setTargetsMetadata(e,t,n){return n&&(this.lastRemoteSnapshotVersion=n),t>this.$r&&(this.$r=t),ee.resolve()}zn(e){this.Qr.set(e.target,e);let t=e.targetId;t>this.highestTargetId&&(this.Kr=new nq(t),this.highestTargetId=t),e.sequenceNumber>this.$r&&(this.$r=e.sequenceNumber)}addTargetData(e,t){return this.zn(t),this.targetCount+=1,ee.resolve()}updateTargetData(e,t){return this.zn(t),ee.resolve()}removeTargetData(e,t){return this.Qr.delete(t.target),this.Ur.br(t.targetId),this.targetCount-=1,ee.resolve()}removeTargets(e,t,n){let r=0,i=[];return this.Qr.forEach((s,a)=>{a.sequenceNumber<=t&&null===n.get(a.targetId)&&(this.Qr.delete(s),i.push(this.removeMatchingKeysForTargetId(e,a.targetId)),r++)}),ee.waitFor(i).next(()=>r)}getTargetCount(e){return ee.resolve(this.targetCount)}getTargetData(e,t){let n=this.Qr.get(t)||null;return ee.resolve(n)}addMatchingKeys(e,t,n){return this.Ur.yr(t,n),ee.resolve()}removeMatchingKeys(e,t,n){this.Ur.Sr(t,n);let r=this.persistence.referenceDelegate,i=[];return r&&t.forEach(t=>{i.push(r.markPotentiallyOrphaned(e,t))}),ee.waitFor(i)}removeMatchingKeysForTargetId(e,t){return this.Ur.br(t),ee.resolve()}getMatchingKeysForTargetId(e,t){let n=this.Ur.vr(t);return ee.resolve(n)}containsKey(e,t){return ee.resolve(this.Ur.containsKey(t))}constructor(e){this.persistence=e,this.Qr=new tT(e=>to(e),tl),this.lastRemoteSnapshotVersion=K.min(),this.highestTargetId=0,this.$r=0,this.Ur=new nZ,this.targetCount=0,this.Kr=nq.Un()}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class n4{start(){return Promise.resolve()}shutdown(){return this.zr=!1,Promise.resolve()}get started(){return this.zr}setDatabaseDeletedListener(){}setNetworkEnabled(){}getIndexManager(e){return this.indexManager}getDocumentOverlayCache(e){let t=this.overlays[e.toKey()];return t||(t=new nX,this.overlays[e.toKey()]=t),t}getMutationQueue(e,t){let n=this.Wr[e.toKey()];return n||(n=new n0(t,this.referenceDelegate),this.Wr[e.toKey()]=n),n}getGlobalsCache(){return this.jr}getTargetCache(){return this.Hr}getRemoteDocumentCache(){return this.remoteDocumentCache}getBundleCache(){return this.Yr}runTransaction(e,t,n){_("MemoryPersistence","Starting transaction:",e);let r=new n9(this.Gr.next());return this.referenceDelegate.Zr(),n(r).next(e=>this.referenceDelegate.Xr(r).next(()=>e)).toPromise().then(e=>(r.raiseOnCommittedEvent(),e))}ei(e,t){return ee.or(Object.values(this.Wr).map(n=>()=>n.containsKey(e,t)))}constructor(e,t){this.Wr={},this.overlays={},this.Gr=new en(0),this.zr=!1,this.zr=!0,this.jr=new nJ,this.referenceDelegate=e(this),this.Hr=new n3(this),this.indexManager=new nO,this.remoteDocumentCache=new n1(e=>this.referenceDelegate.Jr(e)),this.serializer=new nV(t),this.Yr=new nY(this.serializer)}}class n9 extends Z{constructor(e){super(),this.currentSequenceNumber=e}}class n8{static ri(e){return new n8(e)}get ii(){if(this.ni)return this.ni;throw C()}addReference(e,t,n){return this.ti.addReference(n,t),this.ii.delete(n.toString()),ee.resolve()}removeReference(e,t,n){return this.ti.removeReference(n,t),this.ii.add(n.toString()),ee.resolve()}markPotentiallyOrphaned(e,t){return this.ii.add(t.toString()),ee.resolve()}removeTarget(e,t){this.ti.br(t.targetId).forEach(e=>this.ii.add(e.toString()));let n=this.persistence.getTargetCache();return n.getMatchingKeysForTargetId(e,t.targetId).next(e=>{e.forEach(e=>this.ii.add(e.toString()))}).next(()=>n.removeTargetData(e,t))}Zr(){this.ni=new Set}Xr(e){let t=this.persistence.getRemoteDocumentCache().newChangeBuffer();return ee.forEach(this.ii,n=>{let r=Y.fromPath(n);return this.si(e,r).next(e=>{e||t.removeEntry(r,K.min())})}).next(()=>(this.ni=null,t.apply(e)))}updateLimboDocument(e,t){return this.si(e,t).next(e=>{e?this.ii.delete(t.toString()):this.ii.add(t.toString())})}Jr(e){return 0}si(e,t){return ee.or([()=>ee.resolve(this.ti.containsKey(t)),()=>this.persistence.getTargetCache().containsKey(e,t),()=>this.persistence.ei(e,t)])}constructor(e){this.persistence=e,this.ti=new nZ,this.ni=null}}class n5{static ri(e,t){return new n5(e,t)}Zr(){}Xr(e){return ee.resolve()}forEachTarget(e,t){return this.persistence.getTargetCache().forEachTarget(e,t)}nr(e){let t=this.sr(e);return this.persistence.getTargetCache().getTargetCount(e).next(e=>t.next(t=>e+t))}sr(e){let t=0;return this.rr(e,e=>{t++}).next(()=>t)}rr(e,t){return ee.forEach(this.oi,(n,r)=>this.ar(e,n,r).next(e=>e?ee.resolve():t(r)))}removeTargets(e,t,n){return this.persistence.getTargetCache().removeTargets(e,t,n)}removeOrphanedDocuments(e,t){let n=0,r=this.persistence.getRemoteDocumentCache(),i=r.newChangeBuffer();return r.qr(e,r=>this.ar(e,r,t).next(e=>{e||(n++,i.removeEntry(r,K.min()))})).next(()=>i.apply(e)).next(()=>n)}markPotentiallyOrphaned(e,t){return this.oi.set(t,e.currentSequenceNumber),ee.resolve()}removeTarget(e,t){let n=t.withSequenceNumber(e.currentSequenceNumber);return this.persistence.getTargetCache().updateTargetData(e,n)}addReference(e,t,n){return this.oi.set(n,e.currentSequenceNumber),ee.resolve()}removeReference(e,t,n){return this.oi.set(n,e.currentSequenceNumber),ee.resolve()}updateLimboDocument(e,t){return this.oi.set(t,e.currentSequenceNumber),ee.resolve()}Jr(e){let t=e.key.toString().length;return e.isFoundDocument()&&(t+=function e(t){switch(eV(t)){case 0:case 1:return 4;case 2:return 8;case 3:case 8:return 16;case 4:let n=eC(t);return n?16+e(n):16;case 5:return 2*t.stringValue.length;case 6:return ev(t.bytesValue).approximateByteSize();case 7:return t.referenceValue.length;case 9:return(t.arrayValue.values||[]).reduce((t,n)=>t+e(n),0);case 10:case 11:var r;let i;return r=t.mapValue,i=0,es(r.fields,(t,n)=>{i+=t.length+e(n)}),i;default:throw C()}}(e.data.value)),t}ar(e,t,n){return ee.or([()=>this.persistence.ei(e,t),()=>this.persistence.getTargetCache().containsKey(e,t),()=>{let e=this.oi.get(t);return ee.resolve(void 0!==e&&e>n)}])}getCacheSize(e){return this.persistence.getRemoteDocumentCache().getSize(e)}constructor(e,t){this.persistence=e,this.oi=new tT(e=>(function(e){let t="";for(let n=0;n<e.length;n++)t.length>0&&(t+="\x01\x01"),t=function(e,t){let n=t,r=e.length;for(let t=0;t<r;t++){let r=e.charAt(t);switch(r){case"\x00":n+="\x01\x10";break;case"\x01":n+="\x01\x11";break;default:n+=r}}return n}(e.get(n),t);return t+"\x01\x01"})(e.path),(e,t)=>e.isEqual(t)),this.garbageCollector=new nQ(this,t)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class n6{static Yi(e,t){let n=tD(),r=tD();for(let e of t.docChanges)switch(e.type){case 0:n=n.add(e.doc.key);break;case 1:r=r.add(e.doc.key)}return new n6(e,t.fromCache,n,r)}constructor(e,t,n,r){this.targetId=e,this.fromCache=t,this.Hi=n,this.Ji=r}}/**
 * @license
 * Copyright 2023 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class n7{get documentReadCount(){return this._documentReadCount}incrementDocumentReadCount(e){this._documentReadCount+=e}constructor(){this._documentReadCount=0}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class re{initialize(e,t){this.ns=e,this.indexManager=t,this.Zi=!0}getDocumentsMatchingQuery(e,t,n,r){let i={result:null};return this.rs(e,t).next(e=>{i.result=e}).next(()=>{if(!i.result)return this.ss(e,t,r,n).next(e=>{i.result=e})}).next(()=>{if(i.result)return;let n=new n7;return this._s(e,t,n).next(r=>{if(i.result=r,this.Xi)return this.us(e,t,n,r.size)})}).next(()=>i.result)}us(e,t,n,r){return n.documentReadCount<this.es?(w()<=u.in.DEBUG&&_("QueryEngine","SDK will not create cache indexes for query:",tw(t),"since it only creates cache indexes for collection contains","more than or equal to",this.es,"documents"),ee.resolve()):(w()<=u.in.DEBUG&&_("QueryEngine","Query:",tw(t),"scans",n.documentReadCount,"local documents and returns",r,"documents as results."),n.documentReadCount>this.ts*r?(w()<=u.in.DEBUG&&_("QueryEngine","The SDK decides to create cache indexes for query:",tw(t),"as using cache indexes may help improve performance."),this.indexManager.createTargetIndexes(e,tm(t))):ee.resolve())}rs(e,t){if(th(t))return ee.resolve(null);let n=tm(t);return this.indexManager.getIndexType(e,n).next(r=>0===r?null:(null!==t.limit&&1===r&&(n=tm(t=tp(t,null,"F"))),this.indexManager.getDocumentsMatchingTarget(e,n).next(r=>{let i=tD(...r);return this.ns.getDocuments(e,i).next(r=>this.indexManager.getMinOffset(e,n).next(n=>{let s=this.cs(t,r);return this.ls(t,s,i,n.readTime)?this.rs(e,tp(t,null,"F")):this.hs(e,s,t,n)}))})))}ss(e,t,n,r){return th(t)||r.isEqual(K.min())?ee.resolve(null):this.ns.getDocuments(e,n).next(i=>{let s=this.cs(t,i);return this.ls(t,s,n,r)?ee.resolve(null):(w()<=u.in.DEBUG&&_("QueryEngine","Re-using previous result from %s to execute query: %s",r.toString(),tw(t)),this.hs(e,s,t,function(e,t){let n=e.toTimestamp().seconds,r=e.toTimestamp().nanoseconds+1;return new J(K.fromTimestamp(1e9===r?new z(n+1,0):new z(n,r)),Y.empty(),-1)}(r,0)).next(e=>e))})}cs(e,t){let n=new ec(tE(e));return t.forEach((t,r)=>{t_(e,r)&&(n=n.add(r))}),n}ls(e,t,n,r){if(null===e.limit)return!1;if(n.size!==t.size)return!0;let i="F"===e.limitType?t.last():t.first();return!!i&&(i.hasPendingWrites||i.version.compareTo(r)>0)}_s(e,t,n){return w()<=u.in.DEBUG&&_("QueryEngine","Using full collection scan to execute query:",tw(t)),this.ns.getDocumentsMatchingQuery(e,t,J.min(),n)}hs(e,t,n,r){return this.ns.getDocumentsMatchingQuery(e,n,r).next(e=>(t.forEach(t=>{e=e.insert(t.key,t)}),e))}constructor(){this.Zi=!1,this.Xi=!1,this.es=100,this.ts=(0,c.G6)()?8:function(e){let t=e.match(/Android ([\d.]+)/i);return Number(t?t[1].split(".").slice(0,2).join("."):"-1")}((0,c.z$)())>0?6:4}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let rt="LocalStore";class rn{As(e){this.documentOverlayCache=this.persistence.getDocumentOverlayCache(e),this.indexManager=this.persistence.getIndexManager(e),this.mutationQueue=this.persistence.getMutationQueue(e,this.indexManager),this.localDocuments=new nW(this.ds,this.mutationQueue,this.documentOverlayCache,this.indexManager),this.ds.setIndexManager(this.indexManager),this.Ps.initialize(this.localDocuments,this.indexManager)}collectGarbage(e){return this.persistence.runTransaction("Collect garbage","readwrite-primary",t=>e.collect(t,this.Ts))}constructor(e,t,n,r){this.persistence=e,this.Ps=t,this.serializer=r,this.Ts=new eo(U),this.Is=new tT(e=>to(e),tl),this.Es=new Map,this.ds=e.getRemoteDocumentCache(),this.Hr=e.getTargetCache(),this.Yr=e.getBundleCache(),this.As(n)}}async function rr(e,t){return await e.persistence.runTransaction("Handle user change","readonly",n=>{let r;return e.mutationQueue.getAllMutationBatches(n).next(i=>(r=i,e.As(t),e.mutationQueue.getAllMutationBatches(n))).next(t=>{let i=[],s=[],a=tD();for(let e of r)for(let t of(i.push(e.batchId),e.mutations))a=a.add(t.key);for(let e of t)for(let t of(s.push(e.batchId),e.mutations))a=a.add(t.key);return e.localDocuments.getDocuments(n,a).next(e=>({Rs:e,removedBatchIds:i,addedBatchIds:s}))})})}function ri(e){return e.persistence.runTransaction("Get last remote snapshot version","readonly",t=>e.Hr.getLastRemoteSnapshotVersion(t))}async function rs(e,t,n){let r=e.Ts.get(t);try{n||await e.persistence.runTransaction("Release target",n?"readwrite":"readwrite-primary",t=>e.persistence.referenceDelegate.removeTarget(t,r))}catch(e){if(!et(e))throw e;_(rt,"Failed to update sequence numbers for target ".concat(t,": ").concat(e))}e.Ts=e.Ts.remove(t),e.Is.delete(r.target)}function ra(e,t,n){let r=K.min(),i=tD();return e.persistence.runTransaction("Execute query","readwrite",s=>(function(e,t,n){let r=e.Is.get(n);return void 0!==r?ee.resolve(e.Ts.get(r)):e.Hr.getTargetData(t,n)})(e,s,tm(t)).next(t=>{if(t)return r=t.lastLimboFreeSnapshotVersion,e.Hr.getMatchingKeysForTargetId(s,t.targetId).next(e=>{i=e})}).next(()=>e.Ps.getDocumentsMatchingQuery(s,t,n?r:K.min(),n?i:tD())).next(n=>{var r;let s;return r=t.collectionGroup||(t.path.length%2==1?t.path.lastSegment():t.path.get(t.path.length-2)),s=e.Es.get(r)||K.min(),n.forEach((e,t)=>{t.readTime.compareTo(s)>0&&(s=t.readTime)}),e.Es.set(r,s),{documents:n,gs:i}}))}class ro{Ds(e){this.activeTargetIds=this.activeTargetIds.add(e)}vs(e){this.activeTargetIds=this.activeTargetIds.delete(e)}bs(){return JSON.stringify({activeTargetIds:this.activeTargetIds.toArray(),updateTimeMs:Date.now()})}constructor(){this.activeTargetIds=tx}}class rl{addPendingMutation(e){}updateMutationState(e,t,n){}addLocalQueryTarget(e){let t=!(arguments.length>1)||void 0===arguments[1]||arguments[1];return t&&this.ho.Ds(e),this.Po[e]||"not-current"}updateQueryState(e,t,n){this.Po[e]=t}removeLocalQueryTarget(e){this.ho.vs(e)}isLocalQueryTarget(e){return this.ho.activeTargetIds.has(e)}clearQueryState(e){delete this.Po[e]}getAllActiveQueryTargets(){return this.ho.activeTargetIds}isActiveQueryTarget(e){return this.ho.activeTargetIds.has(e)}start(){return this.ho=new ro,Promise.resolve()}handleUserChange(e,t,n){}setOnlineState(e){}shutdown(){}writeSequenceNumber(e){}notifyBundleLoaded(e){}constructor(){this.ho=new ro,this.Po={},this.onlineStateHandler=null,this.sequenceNumberHandler=null}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ru{To(e){}shutdown(){}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let rc="ConnectivityMonitor";class rh{To(e){this.Vo.push(e)}shutdown(){window.removeEventListener("online",this.Io),window.removeEventListener("offline",this.Ao)}mo(){window.addEventListener("online",this.Io),window.addEventListener("offline",this.Ao)}Eo(){for(let e of(_(rc,"Network connectivity changed: AVAILABLE"),this.Vo))e(0)}Ro(){for(let e of(_(rc,"Network connectivity changed: UNAVAILABLE"),this.Vo))e(1)}static D(){return void 0!==window.addEventListener&&void 0!==window.removeEventListener}constructor(){this.Io=()=>this.Eo(),this.Ao=()=>this.Ro(),this.Vo=[],this.mo()}}/**
 * @license
 * Copyright 2023 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let rd=null;function rf(){return null===rd?rd=268435456+Math.round(2147483648*Math.random()):rd++,"0x"+rd.toString(16)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let rm="RestConnection",rg={BatchGetDocuments:"batchGet",Commit:"commit",RunQuery:"runQuery",RunAggregationQuery:"runAggregationQuery"};class rp{get fo(){return!1}So(e,t,n,r,i){let s=rf(),a=this.bo(e,t.toUriEncodedString());_(rm,"Sending RPC '".concat(e,"' ").concat(s,":"),a,n);let o={"google-cloud-resource-prefix":this.yo,"x-goog-request-params":this.wo};return this.Do(o,r,i),this.vo(e,a,o,n).then(t=>(_(rm,"Received RPC '".concat(e,"' ").concat(s,": "),t),t),t=>{throw T(rm,"RPC '".concat(e,"' ").concat(s," failed with error: "),t,"url: ",a,"request:",n),t})}Co(e,t,n,r,i,s){return this.So(e,t,n,r,i)}Do(e,t,n){e["X-Goog-Api-Client"]="gl-js/ fire/"+y,e["Content-Type"]="text/plain",this.databaseInfo.appId&&(e["X-Firebase-GMPID"]=this.databaseInfo.appId),t&&t.headers.forEach((t,n)=>e[n]=t),n&&n.headers.forEach((t,n)=>e[n]=t)}bo(e,t){let n=rg[e];return"".concat(this.po,"/v1/").concat(t,":").concat(n)}terminate(){}constructor(e){this.databaseInfo=e,this.databaseId=e.databaseId;let t=e.ssl?"https":"http",n=encodeURIComponent(this.databaseId.projectId),r=encodeURIComponent(this.databaseId.database);this.po=t+"://"+e.host,this.yo="projects/".concat(n,"/databases/").concat(r),this.wo=this.databaseId.database===eA?"project_id=".concat(n):"project_id=".concat(n,"&database_id=").concat(r)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ry{xo(e){this.Oo=e}No(e){this.Bo=e}Lo(e){this.ko=e}onMessage(e){this.qo=e}close(){this.Mo()}send(e){this.Fo(e)}Qo(){this.Oo()}$o(){this.Bo()}Uo(e){this.ko(e)}Ko(e){this.qo(e)}constructor(e){this.Fo=e.Fo,this.Mo=e.Mo}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let rv="WebChannelConnection";class rw extends rp{vo(e,t,n,r){let i=rf();return new Promise((s,a)=>{let o=new d.JJ;o.setWithCredentials(!0),o.listenOnce(d.tw.COMPLETE,()=>{try{switch(o.getLastErrorCode()){case d.jK.NO_ERROR:let t=o.getResponseJson();_(rv,"XHR for RPC '".concat(e,"' ").concat(i," received:"),JSON.stringify(t)),s(t);break;case d.jK.TIMEOUT:_(rv,"RPC '".concat(e,"' ").concat(i," timed out")),a(new b(S.DEADLINE_EXCEEDED,"Request time out"));break;case d.jK.HTTP_ERROR:let n=o.getStatus();if(_(rv,"RPC '".concat(e,"' ").concat(i," failed with status:"),n,"response text:",o.getResponseText()),n>0){let e=o.getResponseJson();Array.isArray(e)&&(e=e[0]);let t=null==e?void 0:e.error;if(t&&t.status&&t.message){let e=function(e){let t=e.toLowerCase().replace(/_/g,"-");return Object.values(S).indexOf(t)>=0?t:S.UNKNOWN}(t.status);a(new b(e,t.message))}else a(new b(S.UNKNOWN,"Server responded with status "+o.getStatus()))}else a(new b(S.UNAVAILABLE,"Connection failed."));break;default:C()}}finally{_(rv,"RPC '".concat(e,"' ").concat(i," completed."))}});let l=JSON.stringify(r);_(rv,"RPC '".concat(e,"' ").concat(i," sending request:"),r),o.send(t,"POST",l,n,15)})}Wo(e,t,n){let i=rf(),s=[this.po,"/","google.firestore.v1.Firestore","/",e,"/channel"],a=(0,d.UE)(),o=(0,d.FJ)(),l={httpSessionIdParam:"gsessionid",initMessageHeaders:{},messageUrlParams:{database:"projects/".concat(this.databaseId.projectId,"/databases/").concat(this.databaseId.database)},sendRawJson:!0,supportsCrossDomainXhr:!0,internalChannelParams:{forwardChannelRequestTimeoutMs:6e5},forceLongPolling:this.forceLongPolling,detectBufferingProxy:this.autoDetectLongPolling},u=this.longPollingOptions.timeoutSeconds;void 0!==u&&(l.longPollingTimeout=Math.round(1e3*u)),this.useFetchStreams&&(l.useFetchStreams=!0),this.Do(l.initMessageHeaders,t,n),l.encodeInitMessageHeaders=!0;let c=s.join("");_(rv,"Creating RPC '".concat(e,"' stream ").concat(i,": ").concat(c),l);let h=a.createWebChannel(c,l),f=!1,m=!1,g=new ry({Fo:t=>{m?_(rv,"Not sending because RPC '".concat(e,"' stream ").concat(i," is closed:"),t):(f||(_(rv,"Opening RPC '".concat(e,"' stream ").concat(i," transport.")),h.open(),f=!0),_(rv,"RPC '".concat(e,"' stream ").concat(i," sending:"),t),h.send(t))},Mo:()=>h.close()}),p=(e,t,n)=>{e.listen(t,e=>{try{n(e)}catch(e){setTimeout(()=>{throw e},0)}})};return p(h,d.ii.EventType.OPEN,()=>{m||(_(rv,"RPC '".concat(e,"' stream ").concat(i," transport opened.")),g.Qo())}),p(h,d.ii.EventType.CLOSE,()=>{m||(m=!0,_(rv,"RPC '".concat(e,"' stream ").concat(i," transport closed")),g.Uo())}),p(h,d.ii.EventType.ERROR,t=>{m||(m=!0,T(rv,"RPC '".concat(e,"' stream ").concat(i," transport errored:"),t),g.Uo(new b(S.UNAVAILABLE,"The operation could not be completed")))}),p(h,d.ii.EventType.MESSAGE,t=>{var n;if(!m){let s=t.data[0];s||C();let a=(null==s?void 0:s.error)||(null===(n=s[0])||void 0===n?void 0:n.error);if(a){_(rv,"RPC '".concat(e,"' stream ").concat(i," received error:"),a);let t=a.status,n=function(e){let t=r[e];if(void 0!==t)return t6(t)}(t),s=a.message;void 0===n&&(n=S.INTERNAL,s="Unknown error status: "+t+" with message "+a.message),m=!0,g.Uo(new b(n,s)),h.close()}else _(rv,"RPC '".concat(e,"' stream ").concat(i," received:"),s),g.Ko(s)}}),p(o,d.ju.STAT_EVENT,t=>{t.stat===d.kN.PROXY?_(rv,"RPC '".concat(e,"' stream ").concat(i," detected buffering proxy")):t.stat===d.kN.NOPROXY&&_(rv,"RPC '".concat(e,"' stream ").concat(i," detected no buffering proxy"))}),setTimeout(()=>{g.$o()},0),g}constructor(e){super(e),this.forceLongPolling=e.forceLongPolling,this.autoDetectLongPolling=e.autoDetectLongPolling,this.useFetchStreams=e.useFetchStreams,this.longPollingOptions=e.longPollingOptions}}function r_(){return"undefined"!=typeof document?document:null}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function rE(e){return new np(e,!0)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class rT{reset(){this.Ho=0}Zo(){this.Ho=this.jo}Xo(e){this.cancel();let t=Math.floor(this.Ho+this.e_()),n=Math.max(0,Date.now()-this.Yo),r=Math.max(0,t-n);r>0&&_("ExponentialBackoff","Backing off for ".concat(r," ms (base delay: ").concat(this.Ho," ms, delay with jitter: ").concat(t," ms, last attempt: ").concat(n," ms ago)")),this.Jo=this.Ti.enqueueAfterDelay(this.timerId,r,()=>(this.Yo=Date.now(),e())),this.Ho*=this.zo,this.Ho<this.Go&&(this.Ho=this.Go),this.Ho>this.jo&&(this.Ho=this.jo)}t_(){null!==this.Jo&&(this.Jo.skipDelay(),this.Jo=null)}cancel(){null!==this.Jo&&(this.Jo.cancel(),this.Jo=null)}e_(){return(Math.random()-.5)*this.Ho}constructor(e,t,n=1e3,r=1.5,i=6e4){this.Ti=e,this.timerId=t,this.Go=n,this.zo=r,this.jo=i,this.Ho=0,this.Jo=null,this.Yo=Date.now(),this.reset()}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let rI="PersistentStream";class rC{u_(){return 1===this.state||5===this.state||this.c_()}c_(){return 2===this.state||3===this.state}start(){this.__=0,4!==this.state?this.auth():this.l_()}async stop(){this.u_()&&await this.close(0)}h_(){this.state=0,this.a_.reset()}P_(){this.c_()&&null===this.s_&&(this.s_=this.Ti.enqueueAfterDelay(this.n_,6e4,()=>this.T_()))}I_(e){this.E_(),this.stream.send(e)}async T_(){if(this.c_())return this.close(0)}E_(){this.s_&&(this.s_.cancel(),this.s_=null)}d_(){this.o_&&(this.o_.cancel(),this.o_=null)}async close(e,t){this.E_(),this.d_(),this.a_.cancel(),this.i_++,4!==e?this.a_.reset():t&&t.code===S.RESOURCE_EXHAUSTED?(E(t.toString()),E("Using maximum backoff delay to prevent overloading the backend."),this.a_.Zo()):t&&t.code===S.UNAUTHENTICATED&&3!==this.state&&(this.authCredentialsProvider.invalidateToken(),this.appCheckCredentialsProvider.invalidateToken()),null!==this.stream&&(this.A_(),this.stream.close(),this.stream=null),this.state=e,await this.listener.Lo(t)}A_(){}auth(){this.state=1;let e=this.R_(this.i_),t=this.i_;Promise.all([this.authCredentialsProvider.getToken(),this.appCheckCredentialsProvider.getToken()]).then(e=>{let[n,r]=e;this.i_===t&&this.V_(n,r)},t=>{e(()=>{let e=new b(S.UNKNOWN,"Fetching auth token failed: "+t.message);return this.m_(e)})})}V_(e,t){let n=this.R_(this.i_);this.stream=this.f_(e,t),this.stream.xo(()=>{n(()=>this.listener.xo())}),this.stream.No(()=>{n(()=>(this.state=2,this.o_=this.Ti.enqueueAfterDelay(this.r_,1e4,()=>(this.c_()&&(this.state=3),Promise.resolve())),this.listener.No()))}),this.stream.Lo(e=>{n(()=>this.m_(e))}),this.stream.onMessage(e=>{n(()=>1==++this.__?this.g_(e):this.onNext(e))})}l_(){this.state=5,this.a_.Xo(async()=>{this.state=0,this.start()})}m_(e){return _(rI,"close with error: ".concat(e)),this.stream=null,this.close(4,e)}R_(e){return t=>{this.Ti.enqueueAndForget(()=>this.i_===e?t():(_(rI,"stream callback skipped by getCloseGuardedDispatcher."),Promise.resolve()))}}constructor(e,t,n,r,i,s,a,o){this.Ti=e,this.n_=n,this.r_=r,this.connection=i,this.authCredentialsProvider=s,this.appCheckCredentialsProvider=a,this.listener=o,this.state=0,this.i_=0,this.s_=null,this.o_=null,this.stream=null,this.__=0,this.a_=new rT(e,t)}}class rS extends rC{f_(e,t){return this.connection.Wo("Listen",e,t)}g_(e){return this.onNext(e)}onNext(e){this.a_.reset();let t=function(e,t){let n;if("targetChange"in t){var r,i;t.targetChange;let s="NO_CHANGE"===(r=t.targetChange.targetChangeType||"NO_CHANGE")?0:"ADD"===r?1:"REMOVE"===r?2:"CURRENT"===r?3:"RESET"===r?4:C(),a=t.targetChange.targetIds||[],o=(i=t.targetChange.resumeToken,e.useProto3Json?(void 0===i||"string"==typeof i||C(),em.fromBase64String(i||"")):(void 0===i||i instanceof f||i instanceof Uint8Array||C(),em.fromUint8Array(i||new Uint8Array))),l=t.targetChange.cause;n=new nl(s,a,o,l&&new b(void 0===l.code?S.UNKNOWN:t6(l.code),l.message||"")||null)}else if("documentChange"in t){t.documentChange;let r=t.documentChange;r.document,r.document.name,r.document.updateTime;let i=nS(e,r.document.name),s=n_(r.document.updateTime),a=r.document.createTime?n_(r.document.createTime):K.min(),o=new eX({mapValue:{fields:r.document.fields}}),l=eJ.newFoundDocument(i,s,a,o);n=new na(r.targetIds||[],r.removedTargetIds||[],l.key,l)}else if("documentDelete"in t){t.documentDelete;let r=t.documentDelete;r.document;let i=nS(e,r.document),s=r.readTime?n_(r.readTime):K.min(),a=eJ.newNoDocument(i,s);n=new na([],r.removedTargetIds||[],a.key,a)}else if("documentRemove"in t){t.documentRemove;let r=t.documentRemove;r.document;let i=nS(e,r.document);n=new na([],r.removedTargetIds||[],i,null)}else{if(!("filter"in t))return C();{t.filter;let e=t.filter;e.targetId;let{count:r=0,unchangedNames:i}=e,s=new t5(r,i);n=new no(e.targetId,s)}}return n}(this.serializer,e),n=function(e){if(!("targetChange"in e))return K.min();let t=e.targetChange;return t.targetIds&&t.targetIds.length?K.min():t.readTime?n_(t.readTime):K.min()}(e);return this.listener.p_(t,n)}y_(e){let t={};t.database=nA(this.serializer),t.addTarget=function(e,t){let n;let r=t.target;if((n=tu(r)?{documents:{documents:[nb(e,r.path)]}}:{query:function(e,t){var n,r;let i;let s={structuredQuery:{}},a=t.path;null!==t.collectionGroup?(i=a,s.structuredQuery.from=[{collectionId:t.collectionGroup,allDescendants:!0}]):(i=a.popLast(),s.structuredQuery.from=[{collectionId:a.lastSegment()}]),s.parent=nb(e,i);let o=function(e){if(0!==e.length)return function e(t){return t instanceof e3?function(e){if("=="===e.op){if(eQ(e.value))return{unaryFilter:{field:nD(e.field),op:"IS_NAN"}};if(eG(e.value))return{unaryFilter:{field:nD(e.field),op:"IS_NULL"}}}else if("!="===e.op){if(eQ(e.value))return{unaryFilter:{field:nD(e.field),op:"IS_NOT_NAN"}};if(eG(e.value))return{unaryFilter:{field:nD(e.field),op:"IS_NOT_NULL"}}}return{fieldFilter:{field:nD(e.field),op:nm[e.op],value:e.value}}}(t):t instanceof e4?function(t){let n=t.getFilters().map(t=>e(t));return 1===n.length?n[0]:{compositeFilter:{op:ng[t.op],filters:n}}}(t):C()}(e4.create(e,"and"))}(t.filters);o&&(s.structuredQuery.where=o);let l=function(e){if(0!==e.length)return e.map(e=>({field:nD(e.field),direction:nf[e.dir]}))}(t.orderBy);l&&(s.structuredQuery.orderBy=l);let u=ny(e,t.limit);return null!==u&&(s.structuredQuery.limit=u),t.startAt&&(s.structuredQuery.startAt={before:(n=t.startAt).inclusive,values:n.position}),t.endAt&&(s.structuredQuery.endAt={before:!(r=t.endAt).inclusive,values:r.position}),{ht:s,parent:i}}(e,r).ht}).targetId=t.targetId,t.resumeToken.approximateByteSize()>0){n.resumeToken=nw(e,t.resumeToken);let r=ny(e,t.expectedCount);null!==r&&(n.expectedCount=r)}else if(t.snapshotVersion.compareTo(K.min())>0){n.readTime=nv(e,t.snapshotVersion.toTimestamp());let r=ny(e,t.expectedCount);null!==r&&(n.expectedCount=r)}return n}(this.serializer,e);let n=function(e,t){let n=function(e){switch(e){case"TargetPurposeListen":return null;case"TargetPurposeExistenceFilterMismatch":return"existence-filter-mismatch";case"TargetPurposeExistenceFilterMismatchBloom":return"existence-filter-mismatch-bloom";case"TargetPurposeLimboResolution":return"limbo-document";default:return C()}}(t.purpose);return null==n?null:{"goog-listen-tags":n}}(this.serializer,e);n&&(t.labels=n),this.I_(t)}w_(e){let t={};t.database=nA(this.serializer),t.removeTarget=e,this.I_(t)}constructor(e,t,n,r,i,s){super(e,"listen_stream_connection_backoff","listen_stream_idle","health_check_timeout",t,n,r,s),this.serializer=i}}class rb extends rC{get S_(){return this.__>0}start(){this.lastStreamToken=void 0,super.start()}A_(){this.S_&&this.b_([])}f_(e,t){return this.connection.Wo("Write",e,t)}g_(e){return e.streamToken||C(),this.lastStreamToken=e.streamToken,e.writeResults&&0!==e.writeResults.length&&C(),this.listener.D_()}onNext(e){var t,n;e.streamToken||C(),this.lastStreamToken=e.streamToken,this.a_.reset();let r=(t=e.writeResults,n=e.commitTime,t&&t.length>0?(void 0!==n||C(),t.map(e=>{let t;return(t=e.updateTime?n_(e.updateTime):n_(n)).isEqual(K.min())&&(t=n_(n)),new tG(t,e.transformResults||[])})):[]),i=n_(e.commitTime);return this.listener.v_(i,r)}C_(){let e={};e.database=nA(this.serializer),this.I_(e)}b_(e){let t={streamToken:this.lastStreamToken,writes:e.map(e=>(function(e,t){var n;let r;if(t instanceof tJ)r={update:nk(e,t.key,t.value)};else if(t instanceof t2)r={delete:nC(e,t.key)};else if(t instanceof tZ)r={update:nk(e,t.key,t.data),updateMask:function(e){let t=[];return e.fields.forEach(e=>t.push(e.canonicalString())),{fieldPaths:t}}(t.fieldMask)};else{if(!(t instanceof t3))return C();r={verify:nC(e,t.key)}}return t.fieldTransforms.length>0&&(r.updateTransforms=t.fieldTransforms.map(e=>(function(e,t){let n=t.transform;if(n instanceof tO)return{fieldPath:t.field.canonicalString(),setToServerValue:"REQUEST_TIME"};if(n instanceof tF)return{fieldPath:t.field.canonicalString(),appendMissingElements:{values:n.elements}};if(n instanceof tP)return{fieldPath:t.field.canonicalString(),removeAllFromArray:{values:n.elements}};if(n instanceof tB)return{fieldPath:t.field.canonicalString(),increment:n.Ie};throw C()})(0,e))),t.precondition.isNone||(r.currentDocument=void 0!==(n=t.precondition).updateTime?{updateTime:nv(e,n.updateTime.toTimestamp())}:void 0!==n.exists?{exists:n.exists}:C()),r})(this.serializer,e))};this.I_(t)}constructor(e,t,n,r,i,s){super(e,"write_stream_connection_backoff","write_stream_idle","health_check_timeout",t,n,r,s),this.serializer=i}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class rA{}class rN extends rA{M_(){if(this.F_)throw new b(S.FAILED_PRECONDITION,"The client has already been terminated.")}So(e,t,n,r){return this.M_(),Promise.all([this.authCredentials.getToken(),this.appCheckCredentials.getToken()]).then(i=>{let[s,a]=i;return this.connection.So(e,nT(t,n),r,s,a)}).catch(e=>{throw"FirebaseError"===e.name?(e.code===S.UNAUTHENTICATED&&(this.authCredentials.invalidateToken(),this.appCheckCredentials.invalidateToken()),e):new b(S.UNKNOWN,e.toString())})}Co(e,t,n,r,i){return this.M_(),Promise.all([this.authCredentials.getToken(),this.appCheckCredentials.getToken()]).then(s=>{let[a,o]=s;return this.connection.Co(e,nT(t,n),r,a,o,i)}).catch(e=>{throw"FirebaseError"===e.name?(e.code===S.UNAUTHENTICATED&&(this.authCredentials.invalidateToken(),this.appCheckCredentials.invalidateToken()),e):new b(S.UNKNOWN,e.toString())})}terminate(){this.F_=!0,this.connection.terminate()}constructor(e,t,n,r){super(),this.authCredentials=e,this.appCheckCredentials=t,this.connection=n,this.serializer=r,this.F_=!1}}class rk{B_(){0===this.x_&&(this.L_("Unknown"),this.O_=this.asyncQueue.enqueueAfterDelay("online_state_timeout",1e4,()=>(this.O_=null,this.k_("Backend didn't respond within 10 seconds."),this.L_("Offline"),Promise.resolve())))}q_(e){"Online"===this.state?this.L_("Unknown"):(this.x_++,this.x_>=1&&(this.Q_(),this.k_("Connection failed 1 times. Most recent error: ".concat(e.toString())),this.L_("Offline")))}set(e){this.Q_(),this.x_=0,"Online"===e&&(this.N_=!1),this.L_(e)}L_(e){e!==this.state&&(this.state=e,this.onlineStateHandler(e))}k_(e){let t="Could not reach Cloud Firestore backend. ".concat(e,"\nThis typically indicates that your device does not have a healthy Internet connection at the moment. The client will operate in offline mode until it is able to successfully connect to the backend.");this.N_?(E(t),this.N_=!1):_("OnlineStateTracker",t)}Q_(){null!==this.O_&&(this.O_.cancel(),this.O_=null)}constructor(e,t){this.asyncQueue=e,this.onlineStateHandler=t,this.state="Unknown",this.x_=0,this.O_=null,this.N_=!0}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let rD="RemoteStore";class rx{constructor(e,t,n,r,i){this.localStore=e,this.datastore=t,this.asyncQueue=n,this.remoteSyncer={},this.U_=[],this.K_=new Map,this.W_=new Set,this.G_=[],this.z_=i,this.z_.To(e=>{n.enqueueAndForget(async()=>{rq(this)&&(_(rD,"Restarting streams for network reachability change."),await async function(e){e.W_.add(4),await rL(e),e.j_.set("Unknown"),e.W_.delete(4),await rR(e)}(this))})}),this.j_=new rk(n,r)}}async function rR(e){if(rq(e))for(let t of e.G_)await t(!0)}async function rL(e){for(let t of e.G_)await t(!1)}function rV(e,t){e.K_.has(t.targetId)||(e.K_.set(t.targetId,t),rP(e)?rU(e):r2(e).c_()&&rO(e,t))}function rM(e,t){let n=r2(e);e.K_.delete(t),n.c_()&&rF(e,t),0===e.K_.size&&(n.c_()?n.P_():rq(e)&&e.j_.set("Unknown"))}function rO(e,t){if(e.H_.Ne(t.targetId),t.resumeToken.approximateByteSize()>0||t.snapshotVersion.compareTo(K.min())>0){let n=e.remoteSyncer.getRemoteKeysForTarget(t.targetId).size;t=t.withExpectedCount(n)}r2(e).y_(t)}function rF(e,t){e.H_.Ne(t),r2(e).w_(t)}function rU(e){e.H_=new nc({getRemoteKeysForTarget:t=>e.remoteSyncer.getRemoteKeysForTarget(t),lt:t=>e.K_.get(t)||null,it:()=>e.datastore.serializer.databaseId}),r2(e).start(),e.j_.B_()}function rP(e){return rq(e)&&!r2(e).u_()&&e.K_.size>0}function rq(e){return 0===e.W_.size}async function rB(e){e.j_.set("Online")}async function rz(e){e.K_.forEach((t,n)=>{rO(e,t)})}async function rK(e,t){e.H_=void 0,rP(e)?(e.j_.q_(t),rU(e)):e.j_.set("Unknown")}async function rG(e,t,n){if(e.j_.set("Online"),t instanceof nl&&2===t.state&&t.cause)try{await async function(e,t){let n=t.cause;for(let r of t.targetIds)e.K_.has(r)&&(await e.remoteSyncer.rejectListen(r,n),e.K_.delete(r),e.H_.removeTarget(r))}(e,t)}catch(n){_(rD,"Failed to remove targets %s: %s ",t.targetIds.join(","),n),await rQ(e,n)}else if(t instanceof na?e.H_.We(t):t instanceof no?e.H_.Ze(t):e.H_.je(t),!n.isEqual(K.min()))try{let t=await ri(e.localStore);n.compareTo(t)>=0&&await function(e,t){let n=e.H_.ot(t);return n.targetChanges.forEach((n,r)=>{if(n.resumeToken.approximateByteSize()>0){let i=e.K_.get(r);i&&e.K_.set(r,i.withResumeToken(n.resumeToken,t))}}),n.targetMismatches.forEach((t,n)=>{let r=e.K_.get(t);if(!r)return;e.K_.set(t,r.withResumeToken(em.EMPTY_BYTE_STRING,r.snapshotVersion)),rF(e,t);let i=new nL(r.target,t,n,r.sequenceNumber);rO(e,i)}),e.remoteSyncer.applyRemoteEvent(n)}(e,n)}catch(t){_(rD,"Failed to raise snapshot:",t),await rQ(e,t)}}async function rQ(e,t,n){if(!et(t))throw t;e.W_.add(1),await rL(e),e.j_.set("Offline"),n||(n=()=>ri(e.localStore)),e.asyncQueue.enqueueRetryable(async()=>{_(rD,"Retrying IndexedDB access"),await n(),e.W_.delete(1),await rR(e)})}function rj(e,t){return t().catch(n=>rQ(e,n,t))}async function rH(e){let t=r3(e),n=e.U_.length>0?e.U_[e.U_.length-1].batchId:-1;for(;rq(e)&&e.U_.length<10;)try{let r=await function(e,t){return e.persistence.runTransaction("Get next mutation batch","readonly",n=>(void 0===t&&(t=-1),e.mutationQueue.getNextMutationBatchAfterBatchId(n,t)))}(e.localStore,n);if(null===r){0===e.U_.length&&t.P_();break}n=r.batchId,function(e,t){e.U_.push(t);let n=r3(e);n.c_()&&n.S_&&n.b_(t.mutations)}(e,r)}catch(t){await rQ(e,t)}rW(e)&&rY(e)}function rW(e){return rq(e)&&!r3(e).u_()&&e.U_.length>0}function rY(e){r3(e).start()}async function rX(e){r3(e).C_()}async function rJ(e){let t=r3(e);for(let n of e.U_)t.b_(n.mutations)}async function rZ(e,t,n){let r=e.U_.shift(),i=t9.from(r,t,n);await rj(e,()=>e.remoteSyncer.applySuccessfulWrite(i)),await rH(e)}async function r$(e,t){t&&r3(e).S_&&await async function(e,t){var n;if(function(e){switch(e){case S.OK:return C();case S.CANCELLED:case S.UNKNOWN:case S.DEADLINE_EXCEEDED:case S.RESOURCE_EXHAUSTED:case S.INTERNAL:case S.UNAVAILABLE:case S.UNAUTHENTICATED:return!1;case S.INVALID_ARGUMENT:case S.NOT_FOUND:case S.ALREADY_EXISTS:case S.PERMISSION_DENIED:case S.FAILED_PRECONDITION:case S.ABORTED:case S.OUT_OF_RANGE:case S.UNIMPLEMENTED:case S.DATA_LOSS:return!0;default:return C()}}(n=t.code)&&n!==S.ABORTED){let n=e.U_.shift();r3(e).h_(),await rj(e,()=>e.remoteSyncer.rejectFailedWrite(n.batchId,t)),await rH(e)}}(e,t),rW(e)&&rY(e)}async function r0(e,t){e.asyncQueue.verifyOperationInProgress(),_(rD,"RemoteStore received new credentials");let n=rq(e);e.W_.add(3),await rL(e),n&&e.j_.set("Unknown"),await e.remoteSyncer.handleCredentialChange(t),e.W_.delete(3),await rR(e)}async function r1(e,t){t?(e.W_.delete(2),await rR(e)):t||(e.W_.add(2),await rL(e),e.j_.set("Unknown"))}function r2(e){var t,n,r;return e.J_||(e.J_=(t=e.datastore,n=e.asyncQueue,r={xo:rB.bind(null,e),No:rz.bind(null,e),Lo:rK.bind(null,e),p_:rG.bind(null,e)},t.M_(),new rS(n,t.connection,t.authCredentials,t.appCheckCredentials,t.serializer,r)),e.G_.push(async t=>{t?(e.J_.h_(),rP(e)?rU(e):e.j_.set("Unknown")):(await e.J_.stop(),e.H_=void 0)})),e.J_}function r3(e){var t,n,r;return e.Y_||(e.Y_=(t=e.datastore,n=e.asyncQueue,r={xo:()=>Promise.resolve(),No:rX.bind(null,e),Lo:r$.bind(null,e),D_:rJ.bind(null,e),v_:rZ.bind(null,e)},t.M_(),new rb(n,t.connection,t.authCredentials,t.appCheckCredentials,t.serializer,r)),e.G_.push(async t=>{t?(e.Y_.h_(),await rH(e)):(await e.Y_.stop(),e.U_.length>0&&(_(rD,"Stopping write stream with ".concat(e.U_.length," pending writes")),e.U_=[]))})),e.Y_}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class r4{get promise(){return this.deferred.promise}static createAndSchedule(e,t,n,r,i){let s=new r4(e,t,Date.now()+n,r,i);return s.start(n),s}start(e){this.timerHandle=setTimeout(()=>this.handleDelayElapsed(),e)}skipDelay(){return this.handleDelayElapsed()}cancel(e){null!==this.timerHandle&&(this.clearTimeout(),this.deferred.reject(new b(S.CANCELLED,"Operation cancelled"+(e?": "+e:""))))}handleDelayElapsed(){this.asyncQueue.enqueueAndForget(()=>null!==this.timerHandle?(this.clearTimeout(),this.op().then(e=>this.deferred.resolve(e))):Promise.resolve())}clearTimeout(){null!==this.timerHandle&&(this.removalCallback(this),clearTimeout(this.timerHandle),this.timerHandle=null)}constructor(e,t,n,r,i){this.asyncQueue=e,this.timerId=t,this.targetTimeMs=n,this.op=r,this.removalCallback=i,this.deferred=new A,this.then=this.deferred.promise.then.bind(this.deferred.promise),this.deferred.promise.catch(e=>{})}}function r9(e,t){if(E("AsyncQueue","".concat(t,": ").concat(e)),et(e))return new b(S.UNAVAILABLE,"".concat(t,": ").concat(e));throw e}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class r8{static emptySet(e){return new r8(e.comparator)}has(e){return null!=this.keyedMap.get(e)}get(e){return this.keyedMap.get(e)}first(){return this.sortedSet.minKey()}last(){return this.sortedSet.maxKey()}isEmpty(){return this.sortedSet.isEmpty()}indexOf(e){let t=this.keyedMap.get(e);return t?this.sortedSet.indexOf(t):-1}get size(){return this.sortedSet.size}forEach(e){this.sortedSet.inorderTraversal((t,n)=>(e(t),!1))}add(e){let t=this.delete(e.key);return t.copy(t.keyedMap.insert(e.key,e),t.sortedSet.insert(e,null))}delete(e){let t=this.get(e);return t?this.copy(this.keyedMap.remove(e),this.sortedSet.remove(t)):this}isEqual(e){if(!(e instanceof r8)||this.size!==e.size)return!1;let t=this.sortedSet.getIterator(),n=e.sortedSet.getIterator();for(;t.hasNext();){let e=t.getNext().key,r=n.getNext().key;if(!e.isEqual(r))return!1}return!0}toString(){let e=[];return this.forEach(t=>{e.push(t.toString())}),0===e.length?"DocumentSet ()":"DocumentSet (\n  "+e.join("  \n")+"\n)"}copy(e,t){let n=new r8;return n.comparator=this.comparator,n.keyedMap=e,n.sortedSet=t,n}constructor(e){this.comparator=e?(t,n)=>e(t,n)||Y.comparator(t.key,n.key):(e,t)=>Y.comparator(e.key,t.key),this.keyedMap=tS(),this.sortedSet=new eo(this.comparator)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class r5{track(e){let t=e.doc.key,n=this.Z_.get(t);n?0!==e.type&&3===n.type?this.Z_=this.Z_.insert(t,e):3===e.type&&1!==n.type?this.Z_=this.Z_.insert(t,{type:n.type,doc:e.doc}):2===e.type&&2===n.type?this.Z_=this.Z_.insert(t,{type:2,doc:e.doc}):2===e.type&&0===n.type?this.Z_=this.Z_.insert(t,{type:0,doc:e.doc}):1===e.type&&0===n.type?this.Z_=this.Z_.remove(t):1===e.type&&2===n.type?this.Z_=this.Z_.insert(t,{type:1,doc:n.doc}):0===e.type&&1===n.type?this.Z_=this.Z_.insert(t,{type:2,doc:e.doc}):C():this.Z_=this.Z_.insert(t,e)}X_(){let e=[];return this.Z_.inorderTraversal((t,n)=>{e.push(n)}),e}constructor(){this.Z_=new eo(Y.comparator)}}class r6{static fromInitialDocuments(e,t,n,r,i){let s=[];return t.forEach(e=>{s.push({type:0,doc:e})}),new r6(e,t,r8.emptySet(t),s,n,r,!0,!1,i)}get hasPendingWrites(){return!this.mutatedKeys.isEmpty()}isEqual(e){if(!(this.fromCache===e.fromCache&&this.hasCachedResults===e.hasCachedResults&&this.syncStateChanged===e.syncStateChanged&&this.mutatedKeys.isEqual(e.mutatedKeys)&&ty(this.query,e.query)&&this.docs.isEqual(e.docs)&&this.oldDocs.isEqual(e.oldDocs)))return!1;let t=this.docChanges,n=e.docChanges;if(t.length!==n.length)return!1;for(let e=0;e<t.length;e++)if(t[e].type!==n[e].type||!t[e].doc.isEqual(n[e].doc))return!1;return!0}constructor(e,t,n,r,i,s,a,o,l){this.query=e,this.docs=t,this.oldDocs=n,this.docChanges=r,this.mutatedKeys=i,this.fromCache=s,this.syncStateChanged=a,this.excludesMetadataChanges=o,this.hasCachedResults=l}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class r7{na(){return this.ta.some(e=>e.ra())}constructor(){this.ea=void 0,this.ta=[]}}class ie{terminate(){!function(e,t){let n=e.queries;e.queries=it(),n.forEach((e,n)=>{for(let e of n.ta)e.onError(t)})}(this,new b(S.ABORTED,"Firestore shutting down"))}constructor(){this.queries=it(),this.onlineState="Unknown",this.ia=new Set}}function it(){return new tT(e=>tv(e),ty)}async function ir(e,t){let n=3,r=t.query,i=e.queries.get(r);i?!i.na()&&t.ra()&&(n=2):(i=new r7,n=t.ra()?0:1);try{switch(n){case 0:i.ea=await e.onListen(r,!0);break;case 1:i.ea=await e.onListen(r,!1);break;case 2:await e.onFirstRemoteStoreListen(r)}}catch(n){let e=r9(n,"Initialization of query '".concat(tw(t.query),"' failed"));return void t.onError(e)}e.queries.set(r,i),i.ta.push(t),t.sa(e.onlineState),i.ea&&t.oa(i.ea)&&io(e)}async function ii(e,t){let n=t.query,r=3,i=e.queries.get(n);if(i){let e=i.ta.indexOf(t);e>=0&&(i.ta.splice(e,1),0===i.ta.length?r=t.ra()?0:1:!i.na()&&t.ra()&&(r=2))}switch(r){case 0:return e.queries.delete(n),e.onUnlisten(n,!0);case 1:return e.queries.delete(n),e.onUnlisten(n,!1);case 2:return e.onLastRemoteStoreUnlisten(n);default:return}}function is(e,t){let n=!1;for(let r of t){let t=r.query,i=e.queries.get(t);if(i){for(let e of i.ta)e.oa(r)&&(n=!0);i.ea=r}}n&&io(e)}function ia(e,t,n){let r=e.queries.get(t);if(r)for(let e of r.ta)e.onError(n);e.queries.delete(t)}function io(e){e.ia.forEach(e=>{e.next()})}(a=s||(s={}))._a="default",a.Cache="cache";class il{oa(e){if(!this.options.includeMetadataChanges){let t=[];for(let n of e.docChanges)3!==n.type&&t.push(n);e=new r6(e.query,e.docs,e.oldDocs,t,e.mutatedKeys,e.fromCache,e.syncStateChanged,!0,e.hasCachedResults)}let t=!1;return this.ua?this.la(e)&&(this.aa.next(e),t=!0):this.ha(e,this.onlineState)&&(this.Pa(e),t=!0),this.ca=e,t}onError(e){this.aa.error(e)}sa(e){this.onlineState=e;let t=!1;return this.ca&&!this.ua&&this.ha(this.ca,e)&&(this.Pa(this.ca),t=!0),t}ha(e,t){return!(e.fromCache&&this.ra())||(!this.options.Ta||!("Offline"!==t))&&(!e.docs.isEmpty()||e.hasCachedResults||"Offline"===t)}la(e){if(e.docChanges.length>0)return!0;let t=this.ca&&this.ca.hasPendingWrites!==e.hasPendingWrites;return!(!e.syncStateChanged&&!t)&&!0===this.options.includeMetadataChanges}Pa(e){e=r6.fromInitialDocuments(e.query,e.docs,e.mutatedKeys,e.fromCache,e.hasCachedResults),this.ua=!0,this.aa.next(e)}ra(){return this.options.source!==s.Cache}constructor(e,t,n){this.query=e,this.aa=t,this.ua=!1,this.ca=null,this.onlineState="Unknown",this.options=n||{}}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class iu{constructor(e){this.key=e}}class ic{constructor(e){this.key=e}}class ih{get Sa(){return this.fa}ba(e,t){let n=t?t.Da:new r5,r=t?t.wa:this.wa,i=t?t.mutatedKeys:this.mutatedKeys,s=r,a=!1,o="F"===this.query.limitType&&r.size===this.query.limit?r.last():null,l="L"===this.query.limitType&&r.size===this.query.limit?r.first():null;if(e.inorderTraversal((e,t)=>{let u=r.get(e),c=t_(this.query,t)?t:null,h=!!u&&this.mutatedKeys.has(u.key),d=!!c&&(c.hasLocalMutations||this.mutatedKeys.has(c.key)&&c.hasCommittedMutations),f=!1;u&&c?u.data.isEqual(c.data)?h!==d&&(n.track({type:3,doc:c}),f=!0):this.va(u,c)||(n.track({type:2,doc:c}),f=!0,(o&&this.ya(c,o)>0||l&&0>this.ya(c,l))&&(a=!0)):!u&&c?(n.track({type:0,doc:c}),f=!0):u&&!c&&(n.track({type:1,doc:u}),f=!0,(o||l)&&(a=!0)),f&&(c?(s=s.add(c),i=d?i.add(e):i.delete(e)):(s=s.delete(e),i=i.delete(e)))}),null!==this.query.limit)for(;s.size>this.query.limit;){let e="F"===this.query.limitType?s.last():s.first();s=s.delete(e.key),i=i.delete(e.key),n.track({type:1,doc:e})}return{wa:s,Da:n,ls:a,mutatedKeys:i}}va(e,t){return e.hasLocalMutations&&t.hasCommittedMutations&&!t.hasLocalMutations}applyChanges(e,t,n,r){let i=this.wa;this.wa=e.wa,this.mutatedKeys=e.mutatedKeys;let s=e.Da.X_();s.sort((e,t)=>(function(e,t){let n=e=>{switch(e){case 0:return 1;case 2:case 3:return 2;case 1:return 0;default:return C()}};return n(e)-n(t)})(e.type,t.type)||this.ya(e.doc,t.doc)),this.Ca(n),r=null!=r&&r;let a=t&&!r?this.Fa():[],o=0===this.pa.size&&this.current&&!r?1:0,l=o!==this.ga;return(this.ga=o,0!==s.length||l)?{snapshot:new r6(this.query,e.wa,i,s,e.mutatedKeys,0===o,l,!1,!!n&&n.resumeToken.approximateByteSize()>0),Ma:a}:{Ma:a}}sa(e){return this.current&&"Offline"===e?(this.current=!1,this.applyChanges({wa:this.wa,Da:new r5,mutatedKeys:this.mutatedKeys,ls:!1},!1)):{Ma:[]}}xa(e){return!this.fa.has(e)&&!!this.wa.has(e)&&!this.wa.get(e).hasLocalMutations}Ca(e){e&&(e.addedDocuments.forEach(e=>this.fa=this.fa.add(e)),e.modifiedDocuments.forEach(e=>{}),e.removedDocuments.forEach(e=>this.fa=this.fa.delete(e)),this.current=e.current)}Fa(){if(!this.current)return[];let e=this.pa;this.pa=tD(),this.wa.forEach(e=>{this.xa(e.key)&&(this.pa=this.pa.add(e.key))});let t=[];return e.forEach(e=>{this.pa.has(e)||t.push(new ic(e))}),this.pa.forEach(n=>{e.has(n)||t.push(new iu(n))}),t}Oa(e){this.fa=e.gs,this.pa=tD();let t=this.ba(e.documents);return this.applyChanges(t,!0)}Na(){return r6.fromInitialDocuments(this.query,this.wa,this.mutatedKeys,0===this.ga,this.hasCachedResults)}constructor(e,t){this.query=e,this.fa=t,this.ga=null,this.hasCachedResults=!1,this.current=!1,this.pa=tD(),this.mutatedKeys=tD(),this.ya=tE(e),this.wa=new r8(this.ya)}}let id="SyncEngine";class im{constructor(e,t,n){this.query=e,this.targetId=t,this.view=n}}class ig{constructor(e){this.key=e,this.Ba=!1}}class ip{get isPrimaryClient(){return!0===this.ja}constructor(e,t,n,r,i,s){this.localStore=e,this.remoteStore=t,this.eventManager=n,this.sharedClientState=r,this.currentUser=i,this.maxConcurrentLimboResolutions=s,this.La={},this.ka=new tT(e=>tv(e),ty),this.qa=new Map,this.Qa=new Set,this.$a=new eo(Y.comparator),this.Ua=new Map,this.Ka=new nZ,this.Wa={},this.Ga=new Map,this.za=nq.Kn(),this.onlineState="Unknown",this.ja=void 0}}async function iy(e,t){let n,r=!(arguments.length>2)||void 0===arguments[2]||arguments[2],i=iU(e),s=i.ka.get(t);return s?(i.sharedClientState.addLocalQueryTarget(s.targetId),n=s.view.Na()):n=await iw(i,t,r,!0),n}async function iv(e,t){let n=iU(e);await iw(n,t,!0,!1)}async function iw(e,t,n,r){var i,s;let a;let o=await (i=e.localStore,s=tm(t),i.persistence.runTransaction("Allocate target","readwrite",e=>{let t;return i.Hr.getTargetData(e,s).next(n=>n?(t=n,ee.resolve(t)):i.Hr.allocateTargetId(e).next(n=>(t=new nL(s,n,"TargetPurposeListen",e.currentSequenceNumber),i.Hr.addTargetData(e,t).next(()=>t))))}).then(e=>{let t=i.Ts.get(e.targetId);return(null===t||e.snapshotVersion.compareTo(t.snapshotVersion)>0)&&(i.Ts=i.Ts.insert(e.targetId,e),i.Is.set(s,e.targetId)),e})),l=o.targetId,u=e.sharedClientState.addLocalQueryTarget(l,n);return r&&(a=await i_(e,t,l,"current"===u,o.resumeToken)),e.isPrimaryClient&&n&&rV(e.remoteStore,o),a}async function i_(e,t,n,r,i){e.Ha=(t,n,r)=>(async function(e,t,n,r){let i=t.view.ba(n);i.ls&&(i=await ra(e.localStore,t.query,!1).then(e=>{let{documents:n}=e;return t.view.ba(n,i)}));let s=r&&r.targetChanges.get(t.targetId),a=r&&null!=r.targetMismatches.get(t.targetId),o=t.view.applyChanges(i,e.isPrimaryClient,s,a);return iL(e,t.targetId,o.Ma),o.snapshot})(e,t,n,r);let s=await ra(e.localStore,t,!0),a=new ih(t,s.gs),o=a.ba(s.documents),l=ns.createSynthesizedTargetChangeForCurrentChange(n,r&&"Offline"!==e.onlineState,i),u=a.applyChanges(o,e.isPrimaryClient,l);iL(e,n,u.Ma);let c=new im(t,n,a);return e.ka.set(t,c),e.qa.has(n)?e.qa.get(n).push(t):e.qa.set(n,[t]),u.snapshot}async function iE(e,t,n){let r=e.ka.get(t),i=e.qa.get(r.targetId);if(i.length>1)return e.qa.set(r.targetId,i.filter(e=>!ty(e,t))),void e.ka.delete(t);e.isPrimaryClient?(e.sharedClientState.removeLocalQueryTarget(r.targetId),e.sharedClientState.isActiveQueryTarget(r.targetId)||await rs(e.localStore,r.targetId,!1).then(()=>{e.sharedClientState.clearQueryState(r.targetId),n&&rM(e.remoteStore,r.targetId),ix(e,r.targetId)}).catch($)):(ix(e,r.targetId),await rs(e.localStore,r.targetId,!0))}async function iT(e,t){let n=e.ka.get(t),r=e.qa.get(n.targetId);e.isPrimaryClient&&1===r.length&&(e.sharedClientState.removeLocalQueryTarget(n.targetId),rM(e.remoteStore,n.targetId))}async function iI(e,t,n){var r;let i=(e.remoteStore.remoteSyncer.applySuccessfulWrite=iA.bind(null,e),e.remoteStore.remoteSyncer.rejectFailedWrite=iN.bind(null,e),e);try{let e;let s=await function(e,t){let n,r;let i=z.now(),s=t.reduce((e,t)=>e.add(t.key),tD());return e.persistence.runTransaction("Locally write mutations","readwrite",a=>{let o=tI,l=tD();return e.ds.getEntries(a,s).next(e=>{(o=e).forEach((e,t)=>{t.isValidDocument()||(l=l.add(e))})}).next(()=>e.localDocuments.getOverlayedDocuments(a,o)).next(r=>{n=r;let s=[];for(let e of t){let t=function(e,t){let n=null;for(let r of e.fieldTransforms){let e=t.data.field(r.field),i=tM(r.transform,e||null);null!=i&&(null===n&&(n=eX.empty()),n.set(r.field,i))}return n||null}(e,n.get(e.key).overlayedDocument);null!=t&&s.push(new tZ(e.key,t,function e(t){let n=[];return es(t.fields,(t,r)=>{let i=new W([t]);if(ej(r)){let t=e(r.mapValue).fields;if(0===t.length)n.push(i);else for(let e of t)n.push(i.child(e))}else n.push(i)}),new ed(n)}(t.value.mapValue),tQ.exists(!0)))}return e.mutationQueue.addMutationBatch(a,i,s,t)}).next(t=>{r=t;let i=t.applyToLocalDocumentSet(n,l);return e.documentOverlayCache.saveOverlays(a,t.batchId,i)})}).then(()=>({batchId:r.batchId,changes:tb(n)}))}(i.localStore,t);i.sharedClientState.addPendingMutation(s.batchId),r=s.batchId,(e=i.Wa[i.currentUser.toKey()])||(e=new eo(U)),e=e.insert(r,n),i.Wa[i.currentUser.toKey()]=e,await iM(i,s.changes),await rH(i.remoteStore)}catch(t){let e=r9(t,"Failed to persist write");n.reject(e)}}async function iC(e,t){try{let n=await function(e,t){let n=t.snapshotVersion,r=e.Ts;return e.persistence.runTransaction("Apply remote event","readwrite-primary",i=>{var s;let a,o;let l=e.ds.newChangeBuffer({trackRemovals:!0});r=e.Ts;let u=[];t.targetChanges.forEach((s,a)=>{var o;let l=r.get(a);if(!l)return;u.push(e.Hr.removeMatchingKeys(i,s.removedDocuments,a).next(()=>e.Hr.addMatchingKeys(i,s.addedDocuments,a)));let c=l.withSequenceNumber(i.currentSequenceNumber);null!==t.targetMismatches.get(a)?c=c.withResumeToken(em.EMPTY_BYTE_STRING,K.min()).withLastLimboFreeSnapshotVersion(K.min()):s.resumeToken.approximateByteSize()>0&&(c=c.withResumeToken(s.resumeToken,n)),r=r.insert(a,c),o=c,(0===l.resumeToken.approximateByteSize()||o.snapshotVersion.toMicroseconds()-l.snapshotVersion.toMicroseconds()>=3e8||s.addedDocuments.size+s.modifiedDocuments.size+s.removedDocuments.size>0)&&u.push(e.Hr.updateTargetData(i,c))});let c=tI,h=tD();if(t.documentUpdates.forEach(n=>{t.resolvedLimboDocuments.has(n)&&u.push(e.persistence.referenceDelegate.updateLimboDocument(i,n))}),u.push((s=t.documentUpdates,a=tD(),o=tD(),s.forEach(e=>a=a.add(e)),l.getEntries(i,a).next(e=>{let t=tI;return s.forEach((n,r)=>{let i=e.get(n);r.isFoundDocument()!==i.isFoundDocument()&&(o=o.add(n)),r.isNoDocument()&&r.version.isEqual(K.min())?(l.removeEntry(n,r.readTime),t=t.insert(n,r)):!i.isValidDocument()||r.version.compareTo(i.version)>0||0===r.version.compareTo(i.version)&&i.hasPendingWrites?(l.addEntry(r),t=t.insert(n,r)):_(rt,"Ignoring outdated watch update for ",n,". Current version:",i.version," Watch version:",r.version)}),{Vs:t,fs:o}})).next(e=>{c=e.Vs,h=e.fs})),!n.isEqual(K.min())){let t=e.Hr.getLastRemoteSnapshotVersion(i).next(t=>e.Hr.setTargetsMetadata(i,i.currentSequenceNumber,n));u.push(t)}return ee.waitFor(u).next(()=>l.apply(i)).next(()=>e.localDocuments.getLocalViewOfDocuments(i,c,h)).next(()=>c)}).then(t=>(e.Ts=r,t))}(e.localStore,t);t.targetChanges.forEach((t,n)=>{let r=e.Ua.get(n);r&&(t.addedDocuments.size+t.modifiedDocuments.size+t.removedDocuments.size<=1||C(),t.addedDocuments.size>0?r.Ba=!0:t.modifiedDocuments.size>0?r.Ba||C():t.removedDocuments.size>0&&(r.Ba||C(),r.Ba=!1))}),await iM(e,n,t)}catch(e){await $(e)}}function iS(e,t,n){var r;if(e.isPrimaryClient&&0===n||!e.isPrimaryClient&&1===n){let n;let i=[];e.ka.forEach((e,n)=>{let r=n.view.sa(t);r.snapshot&&i.push(r.snapshot)}),(r=e.eventManager).onlineState=t,n=!1,r.queries.forEach((e,r)=>{for(let e of r.ta)e.sa(t)&&(n=!0)}),n&&io(r),i.length&&e.La.p_(i),e.onlineState=t,e.isPrimaryClient&&e.sharedClientState.setOnlineState(t)}}async function ib(e,t,n){e.sharedClientState.updateQueryState(t,"rejected",n);let r=e.Ua.get(t),i=r&&r.key;if(i){let n=new eo(Y.comparator);n=n.insert(i,eJ.newNoDocument(i,K.min()));let r=tD().add(i),s=new ni(K.min(),new Map,new eo(U),n,r);await iC(e,s),e.$a=e.$a.remove(i),e.Ua.delete(t),iV(e)}else await rs(e.localStore,t,!1).then(()=>ix(e,t,n)).catch($)}async function iA(e,t){var n;let r=t.batch.batchId;try{let i=await (n=e.localStore).persistence.runTransaction("Acknowledge batch","readwrite-primary",e=>{let r=t.batch.keys(),i=n.ds.newChangeBuffer({trackRemovals:!0});return(function(e,t,n,r){let i=n.batch,s=i.keys(),a=ee.resolve();return s.forEach(e=>{a=a.next(()=>r.getEntry(t,e)).next(t=>{let s=n.docVersions.get(e);null!==s||C(),0>t.version.compareTo(s)&&(i.applyToRemoteDocument(t,n),t.isValidDocument()&&(t.setReadTime(n.commitVersion),r.addEntry(t)))})}),a.next(()=>e.mutationQueue.removeMutationBatch(t,i))})(n,e,t,i).next(()=>i.apply(e)).next(()=>n.mutationQueue.performConsistencyCheck(e)).next(()=>n.documentOverlayCache.removeOverlaysForBatchId(e,r,t.batch.batchId)).next(()=>n.localDocuments.recalculateAndSaveOverlaysForDocumentKeys(e,function(e){let t=tD();for(let n=0;n<e.mutationResults.length;++n)e.mutationResults[n].transformResults.length>0&&(t=t.add(e.batch.mutations[n].key));return t}(t))).next(()=>n.localDocuments.getDocuments(e,r))});iD(e,r,null),ik(e,r),e.sharedClientState.updateMutationState(r,"acknowledged"),await iM(e,i)}catch(e){await $(e)}}async function iN(e,t,n){var r;try{let i=await (r=e.localStore).persistence.runTransaction("Reject batch","readwrite-primary",e=>{let n;return r.mutationQueue.lookupMutationBatch(e,t).next(t=>(null!==t||C(),n=t.keys(),r.mutationQueue.removeMutationBatch(e,t))).next(()=>r.mutationQueue.performConsistencyCheck(e)).next(()=>r.documentOverlayCache.removeOverlaysForBatchId(e,n,t)).next(()=>r.localDocuments.recalculateAndSaveOverlaysForDocumentKeys(e,n)).next(()=>r.localDocuments.getDocuments(e,n))});iD(e,t,n),ik(e,t),e.sharedClientState.updateMutationState(t,"rejected",n),await iM(e,i)}catch(e){await $(e)}}function ik(e,t){(e.Ga.get(t)||[]).forEach(e=>{e.resolve()}),e.Ga.delete(t)}function iD(e,t,n){let r=e.Wa[e.currentUser.toKey()];if(r){let i=r.get(t);i&&(n?i.reject(n):i.resolve(),r=r.remove(t)),e.Wa[e.currentUser.toKey()]=r}}function ix(e,t){let n=arguments.length>2&&void 0!==arguments[2]?arguments[2]:null;for(let r of(e.sharedClientState.removeLocalQueryTarget(t),e.qa.get(t)))e.ka.delete(r),n&&e.La.Ja(r,n);e.qa.delete(t),e.isPrimaryClient&&e.Ka.br(t).forEach(t=>{e.Ka.containsKey(t)||iR(e,t)})}function iR(e,t){e.Qa.delete(t.path.canonicalString());let n=e.$a.get(t);null!==n&&(rM(e.remoteStore,n),e.$a=e.$a.remove(t),e.Ua.delete(n),iV(e))}function iL(e,t,n){for(let r of n)r instanceof iu?(e.Ka.addReference(r.key,t),function(e,t){let n=t.key,r=n.path.canonicalString();e.$a.get(n)||e.Qa.has(r)||(_(id,"New document in limbo: "+n),e.Qa.add(r),iV(e))}(e,r)):r instanceof ic?(_(id,"Document no longer in limbo: "+r.key),e.Ka.removeReference(r.key,t),e.Ka.containsKey(r.key)||iR(e,r.key)):C()}function iV(e){for(;e.Qa.size>0&&e.$a.size<e.maxConcurrentLimboResolutions;){let t=e.Qa.values().next().value;e.Qa.delete(t);let n=new Y(j.fromString(t)),r=e.za.next();e.Ua.set(r,new ig(n)),e.$a=e.$a.insert(n,r),rV(e.remoteStore,new nL(tm(new tc(n.path)),r,"TargetPurposeLimboResolution",en.ae))}}async function iM(e,t,n){let r=[],i=[],s=[];e.ka.isEmpty()||(e.ka.forEach((a,o)=>{s.push(e.Ha(o,t,n).then(t=>{var s;if((t||n)&&e.isPrimaryClient){let r=t?!t.fromCache:null===(s=null==n?void 0:n.targetChanges.get(o.targetId))||void 0===s?void 0:s.current;e.sharedClientState.updateQueryState(o.targetId,r?"current":"not-current")}if(t){r.push(t);let e=n6.Yi(o.targetId,t);i.push(e)}}))}),await Promise.all(s),e.La.p_(r),await async function(e,t){try{await e.persistence.runTransaction("notifyLocalViewChanges","readwrite",n=>ee.forEach(t,t=>ee.forEach(t.Hi,r=>e.persistence.referenceDelegate.addReference(n,t.targetId,r)).next(()=>ee.forEach(t.Ji,r=>e.persistence.referenceDelegate.removeReference(n,t.targetId,r)))))}catch(e){if(!et(e))throw e;_(rt,"Failed to update sequence numbers: "+e)}for(let n of t){let t=n.targetId;if(!n.fromCache){let n=e.Ts.get(t),r=n.snapshotVersion,i=n.withLastLimboFreeSnapshotVersion(r);e.Ts=e.Ts.insert(t,i)}}}(e.localStore,i))}async function iO(e,t){if(!e.currentUser.isEqual(t)){_(id,"User change. New user:",t.toKey());let n=await rr(e.localStore,t);e.currentUser=t,e.Ga.forEach(e=>{e.forEach(e=>{e.reject(new b(S.CANCELLED,"'waitForPendingWrites' promise is rejected due to a user change."))})}),e.Ga.clear(),e.sharedClientState.handleUserChange(t,n.removedBatchIds,n.addedBatchIds),await iM(e,n.Rs)}}function iF(e,t){let n=e.Ua.get(t);if(n&&n.Ba)return tD().add(n.key);{let n=tD(),r=e.qa.get(t);if(!r)return n;for(let t of r){let r=e.ka.get(t);n=n.unionWith(r.view.Sa)}return n}}function iU(e){return e.remoteStore.remoteSyncer.applyRemoteEvent=iC.bind(null,e),e.remoteStore.remoteSyncer.getRemoteKeysForTarget=iF.bind(null,e),e.remoteStore.remoteSyncer.rejectListen=ib.bind(null,e),e.La.p_=is.bind(null,e.eventManager),e.La.Ja=ia.bind(null,e.eventManager),e}class iP{async initialize(e){this.serializer=rE(e.databaseInfo.databaseId),this.sharedClientState=this.Za(e),this.persistence=this.Xa(e),await this.persistence.start(),this.localStore=this.eu(e),this.gcScheduler=this.tu(e,this.localStore),this.indexBackfillerScheduler=this.nu(e,this.localStore)}tu(e,t){return null}nu(e,t){return null}eu(e){var t;return t=this.persistence,new rn(t,new re,e.initialUser,this.serializer)}Xa(e){return new n4(n8.ri,this.serializer)}Za(e){return new rl}async terminate(){var e,t;null===(e=this.gcScheduler)||void 0===e||e.stop(),null===(t=this.indexBackfillerScheduler)||void 0===t||t.stop(),this.sharedClientState.shutdown(),await this.persistence.shutdown()}constructor(){this.kind="memory",this.synchronizeTabs=!1}}iP.provider={build:()=>new iP};class iq extends iP{tu(e,t){return this.persistence.referenceDelegate instanceof n5||C(),new nG(this.persistence.referenceDelegate.garbageCollector,e.asyncQueue,t)}Xa(e){let t=void 0!==this.cacheSizeBytes?nP.withCacheSize(this.cacheSizeBytes):nP.DEFAULT;return new n4(e=>n5.ri(e,t),this.serializer)}constructor(e){super(),this.cacheSizeBytes=e}}class iB{async initialize(e,t){this.localStore||(this.localStore=e.localStore,this.sharedClientState=e.sharedClientState,this.datastore=this.createDatastore(t),this.remoteStore=this.createRemoteStore(t),this.eventManager=this.createEventManager(t),this.syncEngine=this.createSyncEngine(t,!e.synchronizeTabs),this.sharedClientState.onlineStateHandler=e=>iS(this.syncEngine,e,1),this.remoteStore.remoteSyncer.handleCredentialChange=iO.bind(null,this.syncEngine),await r1(this.remoteStore,this.syncEngine.isPrimaryClient))}createEventManager(e){return new ie}createDatastore(e){let t=rE(e.databaseInfo.databaseId),n=new rw(e.databaseInfo);return new rN(e.authCredentials,e.appCheckCredentials,n,t)}createRemoteStore(e){var t;return t=this.localStore,new rx(t,this.datastore,e.asyncQueue,e=>iS(this.syncEngine,e,0),rh.D()?new rh:new ru)}createSyncEngine(e,t){return function(e,t,n,r,i,s,a){let o=new ip(e,t,n,r,i,s);return a&&(o.ja=!0),o}(this.localStore,this.remoteStore,this.eventManager,this.sharedClientState,e.initialUser,e.maxConcurrentLimboResolutions,t)}async terminate(){var e,t;await async function(e){_(rD,"RemoteStore shutting down."),e.W_.add(5),await rL(e),e.z_.shutdown(),e.j_.set("Unknown")}(this.remoteStore),null===(e=this.datastore)||void 0===e||e.terminate(),null===(t=this.eventManager)||void 0===t||t.terminate()}}iB.provider={build:()=>new iB};/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 *//**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class iz{next(e){this.muted||this.observer.next&&this.iu(this.observer.next,e)}error(e){this.muted||(this.observer.error?this.iu(this.observer.error,e):E("Uncaught Error in snapshot listener:",e.toString()))}su(){this.muted=!0}iu(e,t){setTimeout(()=>{this.muted||e(t)},0)}constructor(e){this.observer=e,this.muted=!1}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let iK="FirestoreClient";class iG{get configuration(){return{asyncQueue:this.asyncQueue,databaseInfo:this.databaseInfo,clientId:this.clientId,authCredentials:this.authCredentials,appCheckCredentials:this.appCheckCredentials,initialUser:this.user,maxConcurrentLimboResolutions:100}}setCredentialChangeListener(e){this.authCredentialListener=e}setAppCheckTokenChangeListener(e){this.appCheckCredentialListener=e}terminate(){this.asyncQueue.enterRestrictedMode();let e=new A;return this.asyncQueue.enqueueAndForgetEvenWhileRestricted(async()=>{try{this._onlineComponents&&await this._onlineComponents.terminate(),this._offlineComponents&&await this._offlineComponents.terminate(),this.authCredentials.shutdown(),this.appCheckCredentials.shutdown(),e.resolve()}catch(n){let t=r9(n,"Failed to shutdown persistence");e.reject(t)}}),e.promise}constructor(e,t,n,r,i){this.authCredentials=e,this.appCheckCredentials=t,this.asyncQueue=n,this.databaseInfo=r,this.user=p.UNAUTHENTICATED,this.clientId=F.newId(),this.authCredentialListener=()=>Promise.resolve(),this.appCheckCredentialListener=()=>Promise.resolve(),this._uninitializedComponentsProvider=i,this.authCredentials.start(n,async e=>{_(iK,"Received user=",e.uid),await this.authCredentialListener(e),this.user=e}),this.appCheckCredentials.start(n,e=>(_(iK,"Received new app check token=",e),this.appCheckCredentialListener(e,this.user)))}}async function iQ(e,t){e.asyncQueue.verifyOperationInProgress(),_(iK,"Initializing OfflineComponentProvider");let n=e.configuration;await t.initialize(n);let r=n.initialUser;e.setCredentialChangeListener(async e=>{r.isEqual(e)||(await rr(t.localStore,e),r=e)}),t.persistence.setDatabaseDeletedListener(()=>e.terminate()),e._offlineComponents=t}async function ij(e,t){e.asyncQueue.verifyOperationInProgress();let n=await iH(e);_(iK,"Initializing OnlineComponentProvider"),await t.initialize(n,e.configuration),e.setCredentialChangeListener(e=>r0(t.remoteStore,e)),e.setAppCheckTokenChangeListener((e,n)=>r0(t.remoteStore,n)),e._onlineComponents=t}async function iH(e){if(!e._offlineComponents){if(e._uninitializedComponentsProvider){_(iK,"Using user provided OfflineComponentProvider");try{await iQ(e,e._uninitializedComponentsProvider._offline)}catch(t){if(!("FirebaseError"===t.name?t.code===S.FAILED_PRECONDITION||t.code===S.UNIMPLEMENTED:!("undefined"!=typeof DOMException&&t instanceof DOMException)||22===t.code||20===t.code||11===t.code))throw t;T("Error using user provided cache. Falling back to memory cache: "+t),await iQ(e,new iP)}}else _(iK,"Using default OfflineComponentProvider"),await iQ(e,new iq(void 0))}return e._offlineComponents}async function iW(e){return e._onlineComponents||(e._uninitializedComponentsProvider?(_(iK,"Using user provided OnlineComponentProvider"),await ij(e,e._uninitializedComponentsProvider._online)):(_(iK,"Using default OnlineComponentProvider"),await ij(e,new iB))),e._onlineComponents}async function iY(e){let t=await iW(e),n=t.eventManager;return n.onListen=iy.bind(null,t.syncEngine),n.onUnlisten=iE.bind(null,t.syncEngine),n.onFirstRemoteStoreListen=iv.bind(null,t.syncEngine),n.onLastRemoteStoreUnlisten=iT.bind(null,t.syncEngine),n}/**
 * @license
 * Copyright 2023 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function iX(e){let t={};return void 0!==e.timeoutSeconds&&(t.timeoutSeconds=e.timeoutSeconds),t}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let iJ=new Map;/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function iZ(e,t,n){if(!n)throw new b(S.INVALID_ARGUMENT,"Function ".concat(e,"() cannot be called with an empty ").concat(t,"."))}function i$(e){if(!Y.isDocumentKey(e))throw new b(S.INVALID_ARGUMENT,"Invalid document reference. Document references must have an even number of segments, but ".concat(e," has ").concat(e.length,"."))}function i0(e){if(Y.isDocumentKey(e))throw new b(S.INVALID_ARGUMENT,"Invalid collection reference. Collection references must have an odd number of segments, but ".concat(e," has ").concat(e.length,"."))}function i1(e){if(void 0===e)return"undefined";if(null===e)return"null";if("string"==typeof e)return e.length>20&&(e="".concat(e.substring(0,20),"...")),JSON.stringify(e);if("number"==typeof e||"boolean"==typeof e)return""+e;if("object"==typeof e){if(e instanceof Array)return"an array";{var t;let n=(t=e).constructor?t.constructor.name:null;return n?"a custom ".concat(n," object"):"an object"}}return"function"==typeof e?"a function":C()}function i2(e,t){if("_delegate"in e&&(e=e._delegate),!(e instanceof t)){if(t.name===e.constructor.name)throw new b(S.INVALID_ARGUMENT,"Type does not match the expected instance. Did you pass a reference from a different Firestore SDK?");{let n=i1(e);throw new b(S.INVALID_ARGUMENT,"Expected type '".concat(t.name,"', but it was: ").concat(n))}}return e}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let i3="firestore.googleapis.com";class i4{isEqual(e){var t,n;return this.host===e.host&&this.ssl===e.ssl&&this.credentials===e.credentials&&this.cacheSizeBytes===e.cacheSizeBytes&&this.experimentalForceLongPolling===e.experimentalForceLongPolling&&this.experimentalAutoDetectLongPolling===e.experimentalAutoDetectLongPolling&&(t=this.experimentalLongPollingOptions,n=e.experimentalLongPollingOptions,t.timeoutSeconds===n.timeoutSeconds)&&this.ignoreUndefinedProperties===e.ignoreUndefinedProperties&&this.useFetchStreams===e.useFetchStreams}constructor(e){var t,n;if(void 0===e.host){if(void 0!==e.ssl)throw new b(S.INVALID_ARGUMENT,"Can't provide ssl option if host option is not set");this.host=i3,this.ssl=!0}else this.host=e.host,this.ssl=null===(t=e.ssl)||void 0===t||t;if(this.credentials=e.credentials,this.ignoreUndefinedProperties=!!e.ignoreUndefinedProperties,this.localCache=e.localCache,void 0===e.cacheSizeBytes)this.cacheSizeBytes=41943040;else{if(-1!==e.cacheSizeBytes&&e.cacheSizeBytes<1048576)throw new b(S.INVALID_ARGUMENT,"cacheSizeBytes must be at least 1048576");this.cacheSizeBytes=e.cacheSizeBytes}(function(e,t,n,r){if(!0===t&&!0===r)throw new b(S.INVALID_ARGUMENT,"".concat(e," and ").concat(n," cannot be used together."))})("experimentalForceLongPolling",e.experimentalForceLongPolling,"experimentalAutoDetectLongPolling",e.experimentalAutoDetectLongPolling),this.experimentalForceLongPolling=!!e.experimentalForceLongPolling,this.experimentalForceLongPolling?this.experimentalAutoDetectLongPolling=!1:void 0===e.experimentalAutoDetectLongPolling?this.experimentalAutoDetectLongPolling=!0:this.experimentalAutoDetectLongPolling=!!e.experimentalAutoDetectLongPolling,this.experimentalLongPollingOptions=iX(null!==(n=e.experimentalLongPollingOptions)&&void 0!==n?n:{}),function(e){if(void 0!==e.timeoutSeconds){if(isNaN(e.timeoutSeconds))throw new b(S.INVALID_ARGUMENT,"invalid long polling timeout: ".concat(e.timeoutSeconds," (must not be NaN)"));if(e.timeoutSeconds<5)throw new b(S.INVALID_ARGUMENT,"invalid long polling timeout: ".concat(e.timeoutSeconds," (minimum allowed value is 5)"));if(e.timeoutSeconds>30)throw new b(S.INVALID_ARGUMENT,"invalid long polling timeout: ".concat(e.timeoutSeconds," (maximum allowed value is 30)"))}}(this.experimentalLongPollingOptions),this.useFetchStreams=!!e.useFetchStreams}}class i9{get app(){if(!this._app)throw new b(S.FAILED_PRECONDITION,"Firestore was not initialized using the Firebase SDK. 'app' is not available");return this._app}get _initialized(){return this._settingsFrozen}get _terminated(){return"notTerminated"!==this._terminateTask}_setSettings(e){if(this._settingsFrozen)throw new b(S.FAILED_PRECONDITION,"Firestore has already been started and its settings can no longer be changed. You can only modify settings before calling any other methods on a Firestore object.");this._settings=new i4(e),this._emulatorOptions=e.emulatorOptions||{},void 0!==e.credentials&&(this._authCredentials=function(e){if(!e)return new k;switch(e.type){case"firstParty":return new L(e.sessionIndex||"0",e.iamToken||null,e.authTokenFactory||null);case"provider":return e.client;default:throw new b(S.INVALID_ARGUMENT,"makeAuthCredentialsProvider failed due to invalid credential type")}}(e.credentials))}_getSettings(){return this._settings}_getEmulatorOptions(){return this._emulatorOptions}_freezeSettings(){return this._settingsFrozen=!0,this._settings}_delete(){return"notTerminated"===this._terminateTask&&(this._terminateTask=this._terminate()),this._terminateTask}async _restart(){"notTerminated"===this._terminateTask?await this._terminate():this._terminateTask="notTerminated"}toJSON(){return{app:this._app,databaseId:this._databaseId,settings:this._settings}}_terminate(){return function(e){let t=iJ.get(e);t&&(_("ComponentProvider","Removing Datastore"),iJ.delete(e),t.terminate())}(this),Promise.resolve()}constructor(e,t,n,r){this._authCredentials=e,this._appCheckCredentials=t,this._databaseId=n,this._app=r,this.type="firestore-lite",this._persistenceKey="(lite)",this._settings=new i4({}),this._settingsFrozen=!1,this._emulatorOptions={},this._terminateTask="notTerminated"}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class i8{withConverter(e){return new i8(this.firestore,e,this._query)}constructor(e,t,n){this.converter=t,this._query=n,this.type="query",this.firestore=e}}class i5{get _path(){return this._key.path}get id(){return this._key.path.lastSegment()}get path(){return this._key.path.canonicalString()}get parent(){return new i6(this.firestore,this.converter,this._key.path.popLast())}withConverter(e){return new i5(this.firestore,e,this._key)}constructor(e,t,n){this.converter=t,this._key=n,this.type="document",this.firestore=e}}class i6 extends i8{get id(){return this._query.path.lastSegment()}get path(){return this._query.path.canonicalString()}get parent(){let e=this._path.popLast();return e.isEmpty()?null:new i5(this.firestore,null,new Y(e))}withConverter(e){return new i6(this.firestore,e,this._path)}constructor(e,t,n){super(e,t,new tc(n)),this._path=n,this.type="collection"}}function i7(e,t){for(var n=arguments.length,r=Array(n>2?n-2:0),i=2;i<n;i++)r[i-2]=arguments[i];if(e=(0,c.m9)(e),iZ("collection","path",t),e instanceof i9){let n=j.fromString(t,...r);return i0(n),new i6(e,null,n)}{if(!(e instanceof i5||e instanceof i6))throw new b(S.INVALID_ARGUMENT,"Expected first argument to collection() to be a CollectionReference, a DocumentReference or FirebaseFirestore");let n=e._path.child(j.fromString(t,...r));return i0(n),new i6(e.firestore,null,n)}}function se(e,t){for(var n=arguments.length,r=Array(n>2?n-2:0),i=2;i<n;i++)r[i-2]=arguments[i];if(e=(0,c.m9)(e),1==arguments.length&&(t=F.newId()),iZ("doc","path",t),e instanceof i9){let n=j.fromString(t,...r);return i$(n),new i5(e,null,new Y(n))}{if(!(e instanceof i5||e instanceof i6))throw new b(S.INVALID_ARGUMENT,"Expected first argument to collection() to be a CollectionReference, a DocumentReference or FirebaseFirestore");let n=e._path.child(j.fromString(t,...r));return i$(n),new i5(e.firestore,e instanceof i6?e.converter:null,new Y(n))}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let st="AsyncQueue";class sn{get isShuttingDown(){return this.mu}enqueueAndForget(e){this.enqueue(e)}enqueueAndForgetEvenWhileRestricted(e){this.Du(),this.vu(e)}enterRestrictedMode(e){if(!this.mu){this.mu=!0,this.yu=e||!1;let t=r_();t&&"function"==typeof t.removeEventListener&&t.removeEventListener("visibilitychange",this.Su)}}enqueue(e){if(this.Du(),this.mu)return new Promise(()=>{});let t=new A;return this.vu(()=>this.mu&&this.yu?Promise.resolve():(e().then(t.resolve,t.reject),t.promise)).then(()=>t.promise)}enqueueRetryable(e){this.enqueueAndForget(()=>(this.Vu.push(e),this.Cu()))}async Cu(){if(0!==this.Vu.length){try{await this.Vu[0](),this.Vu.shift(),this.a_.reset()}catch(e){if(!et(e))throw e;_(st,"Operation failed with retryable error: "+e)}this.Vu.length>0&&this.a_.Xo(()=>this.Cu())}}vu(e){let t=this.bu.then(()=>(this.pu=!0,e().catch(e=>{let t;throw this.gu=e,this.pu=!1,E("INTERNAL UNHANDLED ERROR: ",(t=e.message||"",e.stack&&(t=e.stack.includes(e.message)?e.stack:e.message+"\n"+e.stack),t)),e}).then(e=>(this.pu=!1,e))));return this.bu=t,t}enqueueAfterDelay(e,t,n){this.Du(),this.wu.indexOf(e)>-1&&(t=0);let r=r4.createAndSchedule(this,e,t,n,e=>this.Fu(e));return this.fu.push(r),r}Du(){this.gu&&C()}verifyOperationInProgress(){}async Mu(){let e;do e=this.bu,await e;while(e!==this.bu)}xu(e){for(let t of this.fu)if(t.timerId===e)return!0;return!1}Ou(e){return this.Mu().then(()=>{for(let t of(this.fu.sort((e,t)=>e.targetTimeMs-t.targetTimeMs),this.fu))if(t.skipDelay(),"all"!==e&&t.timerId===e)break;return this.Mu()})}Nu(e){this.wu.push(e)}Fu(e){let t=this.fu.indexOf(e);this.fu.splice(t,1)}constructor(e=Promise.resolve()){this.Vu=[],this.mu=!1,this.fu=[],this.gu=null,this.pu=!1,this.yu=!1,this.wu=[],this.a_=new rT(this,"async_queue_retry"),this.Su=()=>{let e=r_();e&&_(st,"Visibility state changed to "+e.visibilityState),this.a_.t_()},this.bu=e;let t=r_();t&&"function"==typeof t.addEventListener&&t.addEventListener("visibilitychange",this.Su)}}class sr extends i9{async _terminate(){if(this._firestoreClient){let e=this._firestoreClient.terminate();this._queue=new sn(e),this._firestoreClient=void 0,await e}}constructor(e,t,n,r){super(e,t,n,r),this.type="firestore",this._queue=new sn,this._persistenceKey=(null==r?void 0:r.name)||"[DEFAULT]"}}function si(e,t){let n="object"==typeof e?e:(0,o.Mq)(),r=(0,o.qX)(n,"firestore").getImmediate({identifier:"string"==typeof e?e:t||eA});if(!r._initialized){let e=(0,c.P0)("firestore");e&&function(e,t,n){var r;let i=arguments.length>3&&void 0!==arguments[3]?arguments[3]:{},s=(e=i2(e,i9))._getSettings(),a=Object.assign(Object.assign({},s),{emulatorOptions:e._getEmulatorOptions()}),o="".concat(t,":").concat(n);s.host!==i3&&s.host!==o&&T("Host has been set in both settings() and connectFirestoreEmulator(), emulator host will be used.");let l=Object.assign(Object.assign({},s),{host:o,ssl:!1,emulatorOptions:i});if(!(0,c.vZ)(l,a)&&(e._setSettings(l),i.mockUserToken)){let t,n;if("string"==typeof i.mockUserToken)t=i.mockUserToken,n=p.MOCK_USER;else{t=(0,c.Sg)(i.mockUserToken,null===(r=e._app)||void 0===r?void 0:r.options.projectId);let s=i.mockUserToken.sub||i.mockUserToken.user_id;if(!s)throw new b(S.INVALID_ARGUMENT,"mockUserToken must contain 'sub' or 'user_id' field!");n=new p(s)}e._authCredentials=new D(new N(t,n))}}(r,...e)}return r}function ss(e){if(e._terminated)throw new b(S.FAILED_PRECONDITION,"The client has already been terminated.");return e._firestoreClient||function(e){var t,n,r,i;let s=e._freezeSettings(),a=(i=e._databaseId,new eb(i,(null===(t=e._app)||void 0===t?void 0:t.options.appId)||"",e._persistenceKey,s.host,s.ssl,s.experimentalForceLongPolling,s.experimentalAutoDetectLongPolling,iX(s.experimentalLongPollingOptions),s.useFetchStreams));e._componentsProvider||(null===(n=s.localCache)||void 0===n?void 0:n._offlineComponentProvider)&&(null===(r=s.localCache)||void 0===r?void 0:r._onlineComponentProvider)&&(e._componentsProvider={_offline:s.localCache._offlineComponentProvider,_online:s.localCache._onlineComponentProvider}),e._firestoreClient=new iG(e._authCredentials,e._appCheckCredentials,e._queue,a,e._componentsProvider&&function(e){let t=null==e?void 0:e._online.build();return{_offline:null==e?void 0:e._offline.build(t),_online:t}}(e._componentsProvider))}(e),e._firestoreClient}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class sa{static fromBase64String(e){try{return new sa(em.fromBase64String(e))}catch(e){throw new b(S.INVALID_ARGUMENT,"Failed to construct data from Base64 string: "+e)}}static fromUint8Array(e){return new sa(em.fromUint8Array(e))}toBase64(){return this._byteString.toBase64()}toUint8Array(){return this._byteString.toUint8Array()}toString(){return"Bytes(base64: "+this.toBase64()+")"}isEqual(e){return this._byteString.isEqual(e._byteString)}constructor(e){this._byteString=e}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class so{isEqual(e){return this._internalPath.isEqual(e._internalPath)}constructor(...e){for(let t=0;t<e.length;++t)if(0===e[t].length)throw new b(S.INVALID_ARGUMENT,"Invalid field name at argument $(i + 1). Field names must not be empty.");this._internalPath=new W(e)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class sl{constructor(e){this._methodName=e}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class su{get latitude(){return this._lat}get longitude(){return this._long}isEqual(e){return this._lat===e._lat&&this._long===e._long}toJSON(){return{latitude:this._lat,longitude:this._long}}_compareTo(e){return U(this._lat,e._lat)||U(this._long,e._long)}constructor(e,t){if(!isFinite(e)||e<-90||e>90)throw new b(S.INVALID_ARGUMENT,"Latitude must be a number between -90 and 90, but was: "+e);if(!isFinite(t)||t<-180||t>180)throw new b(S.INVALID_ARGUMENT,"Longitude must be a number between -180 and 180, but was: "+t);this._lat=e,this._long=t}}/**
 * @license
 * Copyright 2024 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class sc{toArray(){return this._values.map(e=>e)}isEqual(e){return function(e,t){if(e.length!==t.length)return!1;for(let n=0;n<e.length;++n)if(e[n]!==t[n])return!1;return!0}(this._values,e._values)}constructor(e){this._values=(e||[]).map(e=>e)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let sh=/^__.*__$/;class sd{toMutation(e,t){return null!==this.fieldMask?new tZ(e,this.data,this.fieldMask,t,this.fieldTransforms):new tJ(e,this.data,t,this.fieldTransforms)}constructor(e,t,n){this.data=e,this.fieldMask=t,this.fieldTransforms=n}}class sf{toMutation(e,t){return new tZ(e,this.data,this.fieldMask,t,this.fieldTransforms)}constructor(e,t,n){this.data=e,this.fieldMask=t,this.fieldTransforms=n}}function sm(e){switch(e){case 0:case 2:case 1:return!0;case 3:case 4:return!1;default:throw C()}}class sg{get path(){return this.settings.path}get Lu(){return this.settings.Lu}ku(e){return new sg(Object.assign(Object.assign({},this.settings),e),this.databaseId,this.serializer,this.ignoreUndefinedProperties,this.fieldTransforms,this.fieldMask)}qu(e){var t;let n=null===(t=this.path)||void 0===t?void 0:t.child(e),r=this.ku({path:n,Qu:!1});return r.$u(e),r}Uu(e){var t;let n=null===(t=this.path)||void 0===t?void 0:t.child(e),r=this.ku({path:n,Qu:!1});return r.Bu(),r}Ku(e){return this.ku({path:void 0,Qu:!0})}Wu(e){return sb(e,this.settings.methodName,this.settings.Gu||!1,this.path,this.settings.zu)}contains(e){return void 0!==this.fieldMask.find(t=>e.isPrefixOf(t))||void 0!==this.fieldTransforms.find(t=>e.isPrefixOf(t.field))}Bu(){if(this.path)for(let e=0;e<this.path.length;e++)this.$u(this.path.get(e))}$u(e){if(0===e.length)throw this.Wu("Document fields must not be empty");if(sm(this.Lu)&&sh.test(e))throw this.Wu('Document fields cannot begin and end with "__"')}constructor(e,t,n,r,i,s){this.settings=e,this.databaseId=t,this.serializer=n,this.ignoreUndefinedProperties=r,void 0===i&&this.Bu(),this.fieldTransforms=i||[],this.fieldMask=s||[]}}class sp{ju(e,t,n){let r=arguments.length>3&&void 0!==arguments[3]&&arguments[3];return new sg({Lu:e,methodName:t,zu:n,path:W.emptyPath(),Qu:!1,Gu:r},this.databaseId,this.serializer,this.ignoreUndefinedProperties)}constructor(e,t,n){this.databaseId=e,this.ignoreUndefinedProperties=t,this.serializer=n||rE(e)}}function sy(e){let t=e._freezeSettings(),n=rE(e._databaseId);return new sp(e._databaseId,!!t.ignoreUndefinedProperties,n)}class sv extends sl{_toFieldTransform(e){if(2!==e.Lu)throw 1===e.Lu?e.Wu("".concat(this._methodName,"() can only appear at the top level of your update data")):e.Wu("".concat(this._methodName,"() cannot be used with set() unless you pass {merge:true}"));return e.fieldMask.push(e.path),null}isEqual(e){return e instanceof sv}}function sw(e,t){if(sE(e=(0,c.m9)(e)))return sT("Unsupported field value:",t,e),s_(e,t);if(e instanceof sl)return function(e,t){if(!sm(t.Lu))throw t.Wu("".concat(e._methodName,"() can only be used with update() and set()"));if(!t.path)throw t.Wu("".concat(e._methodName,"() is not currently supported inside arrays"));let n=e._toFieldTransform(t);n&&t.fieldTransforms.push(n)}(e,t),null;if(void 0===e&&t.ignoreUndefinedProperties)return null;if(t.path&&t.fieldMask.push(t.path),e instanceof Array){if(t.settings.Qu&&4!==t.Lu)throw t.Wu("Nested arrays are not supported");return function(e,t){let n=[],r=0;for(let i of e){let e=sw(i,t.Ku(r));null==e&&(e={nullValue:"NULL_VALUE"}),n.push(e),r++}return{arrayValue:{values:n}}}(e,t)}return function(e,t){var n,r,i;if(null===(e=(0,c.m9)(e)))return{nullValue:"NULL_VALUE"};if("number"==typeof e)return n=t.serializer,"number"==typeof(i=r=e)&&Number.isInteger(i)&&!er(i)&&i<=Number.MAX_SAFE_INTEGER&&i>=Number.MIN_SAFE_INTEGER?tL(r):tR(n,r);if("boolean"==typeof e)return{booleanValue:e};if("string"==typeof e)return{stringValue:e};if(e instanceof Date){let n=z.fromDate(e);return{timestampValue:nv(t.serializer,n)}}if(e instanceof z){let n=new z(e.seconds,1e3*Math.floor(e.nanoseconds/1e3));return{timestampValue:nv(t.serializer,n)}}if(e instanceof su)return{geoPointValue:{latitude:e.latitude,longitude:e.longitude}};if(e instanceof sa)return{bytesValue:nw(t.serializer,e._byteString)};if(e instanceof i5){let n=t.databaseId,r=e.firestore._databaseId;if(!r.isEqual(n))throw t.Wu("Document reference is for database ".concat(r.projectId,"/").concat(r.database," but should be for database ").concat(n.projectId,"/").concat(n.database));return{referenceValue:nE(e.firestore._databaseId||t.databaseId,e._key.path)}}if(e instanceof sc)return{mapValue:{fields:{[ek]:{stringValue:eR},[eL]:{arrayValue:{values:e.toArray().map(e=>{if("number"!=typeof e)throw t.Wu("VectorValues must only contain numeric values.");return tR(t.serializer,e)})}}}}};throw t.Wu("Unsupported field value: ".concat(i1(e)))}(e,t)}function s_(e,t){let n={};return ea(e)?t.path&&t.path.length>0&&t.fieldMask.push(t.path):es(e,(e,r)=>{let i=sw(r,t.qu(e));null!=i&&(n[e]=i)}),{mapValue:{fields:n}}}function sE(e){return!("object"!=typeof e||null===e||e instanceof Array||e instanceof Date||e instanceof z||e instanceof su||e instanceof sa||e instanceof i5||e instanceof sl||e instanceof sc)}function sT(e,t,n){if(!sE(n)||!("object"==typeof n&&null!==n&&(Object.getPrototypeOf(n)===Object.prototype||null===Object.getPrototypeOf(n)))){let r=i1(n);throw"an object"===r?t.Wu(e+" a custom object"):t.Wu(e+" "+r)}}function sI(e,t,n){if((t=(0,c.m9)(t))instanceof so)return t._internalPath;if("string"==typeof t)return sS(e,t);throw sb("Field path arguments must be of type string or ",e,!1,void 0,n)}let sC=RegExp("[~\\*/\\[\\]]");function sS(e,t,n){if(t.search(sC)>=0)throw sb("Invalid field path (".concat(t,"). Paths must not contain '~', '*', '/', '[', or ']'"),e,!1,void 0,n);try{return new so(...t.split("."))._internalPath}catch(r){throw sb("Invalid field path (".concat(t,"). Paths must not be empty, begin with '.', end with '.', or contain '..'"),e,!1,void 0,n)}}function sb(e,t,n,r,i){let s=r&&!r.isEmpty(),a=void 0!==i,o="Function ".concat(t,"() called with invalid data");n&&(o+=" (via `toFirestore()`)"),o+=". ";let l="";return(s||a)&&(l+=" (found",s&&(l+=" in field ".concat(r)),a&&(l+=" in document ".concat(i)),l+=")"),new b(S.INVALID_ARGUMENT,o+e+l)}function sA(e,t){return e.some(e=>e.isEqual(t))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class sN{get id(){return this._key.path.lastSegment()}get ref(){return new i5(this._firestore,this._converter,this._key)}exists(){return null!==this._document}data(){if(this._document){if(this._converter){let e=new sk(this._firestore,this._userDataWriter,this._key,this._document,null);return this._converter.fromFirestore(e)}return this._userDataWriter.convertValue(this._document.data.value)}}get(e){if(this._document){let t=this._document.data.field(sD("DocumentSnapshot.get",e));if(null!==t)return this._userDataWriter.convertValue(t)}}constructor(e,t,n,r,i){this._firestore=e,this._userDataWriter=t,this._key=n,this._document=r,this._converter=i}}class sk extends sN{data(){return super.data()}}function sD(e,t){return"string"==typeof t?sS(e,t):t instanceof so?t._internalPath:t._delegate._internalPath}class sx{}class sR extends sx{}function sL(e,t){for(var n=arguments.length,r=Array(n>2?n-2:0),i=2;i<n;i++)r[i-2]=arguments[i];let s=[];for(let n of(t instanceof sx&&s.push(t),function(e){let t=e.filter(e=>e instanceof sO).length,n=e.filter(e=>e instanceof sV).length;if(t>1||t>0&&n>0)throw new b(S.INVALID_ARGUMENT,"InvalidQuery. When using composite filters, you cannot use more than one filter at the top level. Consider nesting the multiple filters within an `and(...)` statement. For example: change `query(query, where(...), or(...))` to `query(query, and(where(...), or(...)))`.")}(s=s.concat(r)),s))e=n._apply(e);return e}class sV extends sR{static _create(e,t,n){return new sV(e,t,n)}_apply(e){let t=this._parse(e);return sK(e._query,t),new i8(e.firestore,e.converter,tg(e._query,t))}_parse(e){let t=sy(e.firestore);return function(e,t,n,r,i,s,a){let o;if(i.isKeyField()){if("array-contains"===s||"array-contains-any"===s)throw new b(S.INVALID_ARGUMENT,"Invalid Query. You can't perform '".concat(s,"' queries on documentId()."));if("in"===s||"not-in"===s){sz(a,s);let t=[];for(let n of a)t.push(sB(r,e,n));o={arrayValue:{values:t}}}else o=sB(r,e,a)}else"in"!==s&&"not-in"!==s&&"array-contains-any"!==s||sz(a,s),o=function(e,t,n){let r=arguments.length>3&&void 0!==arguments[3]&&arguments[3];return sw(n,e.ju(r?4:3,t))}(n,t,a,"in"===s||"not-in"===s);return e3.create(i,s,o)}(e._query,"where",t,e.firestore._databaseId,this._field,this._op,this._value)}constructor(e,t,n){super(),this._field=e,this._op=t,this._value=n,this.type="where"}}function sM(e,t,n){let r=sD("where",e);return sV._create(r,t,n)}class sO extends sx{static _create(e,t){return new sO(e,t)}_parse(e){let t=this._queryConstraints.map(t=>t._parse(e)).filter(e=>e.getFilters().length>0);return 1===t.length?t[0]:e4.create(t,this._getOperator())}_apply(e){let t=this._parse(e);return 0===t.getFilters().length?e:(function(e,t){let n=e;for(let e of t.getFlattenedFilters())sK(n,e),n=tg(n,e)}(e._query,t),new i8(e.firestore,e.converter,tg(e._query,t)))}_getQueryConstraints(){return this._queryConstraints}_getOperator(){return"and"===this.type?"and":"or"}constructor(e,t){super(),this.type=e,this._queryConstraints=t}}class sF extends sR{static _create(e,t){return new sF(e,t)}_apply(e){let t=function(e,t,n){if(null!==e.startAt)throw new b(S.INVALID_ARGUMENT,"Invalid query. You must not call startAt() or startAfter() before calling orderBy().");if(null!==e.endAt)throw new b(S.INVALID_ARGUMENT,"Invalid query. You must not call endAt() or endBefore() before calling orderBy().");return new e1(t,n)}(e._query,this._field,this._direction);return new i8(e.firestore,e.converter,function(e,t){let n=e.explicitOrderBy.concat([t]);return new tc(e.path,e.collectionGroup,n,e.filters.slice(),e.limit,e.limitType,e.startAt,e.endAt)}(e._query,t))}constructor(e,t){super(),this._field=e,this._direction=t,this.type="orderBy"}}function sU(e){let t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:"asc",n=sD("orderBy",e);return sF._create(n,t)}class sP extends sR{static _create(e,t,n){return new sP(e,t,n)}_apply(e){return new i8(e.firestore,e.converter,tp(e._query,this._limit,this._limitType))}constructor(e,t,n){super(),this.type=e,this._limit=t,this._limitType=n}}function sq(e){return function(e,t){if(t<=0)throw new b(S.INVALID_ARGUMENT,"Function ".concat(e,"() requires a positive number, but it was: ").concat(t,"."))}("limit",e),sP._create("limit",e,"F")}function sB(e,t,n){if("string"==typeof(n=(0,c.m9)(n))){if(""===n)throw new b(S.INVALID_ARGUMENT,"Invalid query. When querying with documentId(), you must provide a valid document ID, but it was an empty string.");if(!td(t)&&-1!==n.indexOf("/"))throw new b(S.INVALID_ARGUMENT,"Invalid query. When querying a collection by documentId(), you must provide a plain document ID, but '".concat(n,"' contains a '/' character."));let r=t.path.child(j.fromString(n));if(!Y.isDocumentKey(r))throw new b(S.INVALID_ARGUMENT,"Invalid query. When querying a collection group by documentId(), the value provided must result in a valid document path, but '".concat(r,"' is not because it has an odd number of segments (").concat(r.length,")."));return eB(e,new Y(r))}if(n instanceof i5)return eB(e,n._key);throw new b(S.INVALID_ARGUMENT,"Invalid query. When querying with documentId(), you must provide a valid string or a DocumentReference, but it was: ".concat(i1(n),"."))}function sz(e,t){if(!Array.isArray(e)||0===e.length)throw new b(S.INVALID_ARGUMENT,"Invalid Query. A non-empty array is required for '".concat(t.toString(),"' filters."))}function sK(e,t){let n=function(e,t){for(let n of e)for(let e of n.getFlattenedFilters())if(t.indexOf(e.op)>=0)return e.op;return null}(e.filters,function(e){switch(e){case"!=":return["!=","not-in"];case"array-contains-any":case"in":return["not-in"];case"not-in":return["array-contains-any","in","not-in","!="];default:return[]}}(t.op));if(null!==n)throw n===t.op?new b(S.INVALID_ARGUMENT,"Invalid query. You cannot use more than one '".concat(t.op.toString(),"' filter.")):new b(S.INVALID_ARGUMENT,"Invalid query. You cannot use '".concat(t.op.toString(),"' filters with '").concat(n.toString(),"' filters."))}class sG{convertValue(e){let t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:"none";switch(eV(e)){case 0:return null;case 1:return e.booleanValue;case 2:return ey(e.integerValue||e.doubleValue);case 3:return this.convertTimestamp(e.timestampValue);case 4:return this.convertServerTimestamp(e,t);case 5:return e.stringValue;case 6:return this.convertBytes(ev(e.bytesValue));case 7:return this.convertReference(e.referenceValue);case 8:return this.convertGeoPoint(e.geoPointValue);case 9:return this.convertArray(e.arrayValue,t);case 11:return this.convertObject(e.mapValue,t);case 10:return this.convertVectorValue(e.mapValue);default:throw C()}}convertObject(e,t){return this.convertObjectMap(e.fields,t)}convertObjectMap(e){let t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:"none",n={};return es(e,(e,r)=>{n[e]=this.convertValue(r,t)}),n}convertVectorValue(e){var t,n,r;return new sc(null===(r=null===(n=null===(t=e.fields)||void 0===t?void 0:t[eL].arrayValue)||void 0===n?void 0:n.values)||void 0===r?void 0:r.map(e=>ey(e.doubleValue)))}convertGeoPoint(e){return new su(ey(e.latitude),ey(e.longitude))}convertArray(e,t){return(e.values||[]).map(e=>this.convertValue(e,t))}convertServerTimestamp(e,t){switch(t){case"previous":let n=eC(e);return null==n?null:this.convertValue(n,t);case"estimate":return this.convertTimestamp(eS(e));default:return null}}convertTimestamp(e){let t=ep(e);return new z(t.seconds,t.nanos)}convertDocumentKey(e,t){let n=j.fromString(e);nR(n)||C();let r=new eN(n.get(1),n.get(3)),i=new Y(n.popFirst(5));return r.isEqual(t)||E("Document ".concat(i," contains a document reference within a different database (").concat(r.projectId,"/").concat(r.database,") which is not supported. It will be treated as a reference in the current database (").concat(t.projectId,"/").concat(t.database,") instead.")),i}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class sQ{isEqual(e){return this.hasPendingWrites===e.hasPendingWrites&&this.fromCache===e.fromCache}constructor(e,t){this.hasPendingWrites=e,this.fromCache=t}}class sj extends sN{exists(){return super.exists()}data(){let e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{};if(this._document){if(this._converter){let t=new sH(this._firestore,this._userDataWriter,this._key,this._document,this.metadata,null);return this._converter.fromFirestore(t,e)}return this._userDataWriter.convertValue(this._document.data.value,e.serverTimestamps)}}get(e){let t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{};if(this._document){let n=this._document.data.field(sD("DocumentSnapshot.get",e));if(null!==n)return this._userDataWriter.convertValue(n,t.serverTimestamps)}}constructor(e,t,n,r,i,s){super(e,t,n,r,s),this._firestore=e,this._firestoreImpl=e,this.metadata=i}}class sH extends sj{data(){let e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{};return super.data(e)}}class sW{get docs(){let e=[];return this.forEach(t=>e.push(t)),e}get size(){return this._snapshot.docs.size}get empty(){return 0===this.size}forEach(e,t){this._snapshot.docs.forEach(n=>{e.call(t,new sH(this._firestore,this._userDataWriter,n.key,n,new sQ(this._snapshot.mutatedKeys.has(n.key),this._snapshot.fromCache),this.query.converter))})}docChanges(){let e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},t=!!e.includeMetadataChanges;if(t&&this._snapshot.excludesMetadataChanges)throw new b(S.INVALID_ARGUMENT,"To include metadata changes with your document changes, you must also pass { includeMetadataChanges:true } to onSnapshot().");return this._cachedChanges&&this._cachedChangesIncludeMetadataChanges===t||(this._cachedChanges=function(e,t){if(e._snapshot.oldDocs.isEmpty()){let t=0;return e._snapshot.docChanges.map(n=>{let r=new sH(e._firestore,e._userDataWriter,n.doc.key,n.doc,new sQ(e._snapshot.mutatedKeys.has(n.doc.key),e._snapshot.fromCache),e.query.converter);return n.doc,{type:"added",doc:r,oldIndex:-1,newIndex:t++}})}{let n=e._snapshot.oldDocs;return e._snapshot.docChanges.filter(e=>t||3!==e.type).map(t=>{let r=new sH(e._firestore,e._userDataWriter,t.doc.key,t.doc,new sQ(e._snapshot.mutatedKeys.has(t.doc.key),e._snapshot.fromCache),e.query.converter),i=-1,s=-1;return 0!==t.type&&(i=n.indexOf(t.doc.key),n=n.delete(t.doc.key)),1!==t.type&&(s=(n=n.add(t.doc)).indexOf(t.doc.key)),{type:function(e){switch(e){case 0:return"added";case 2:case 3:return"modified";case 1:return"removed";default:return C()}}(t.type),doc:r,oldIndex:i,newIndex:s}})}}(this,t),this._cachedChangesIncludeMetadataChanges=t),this._cachedChanges}constructor(e,t,n,r){this._firestore=e,this._userDataWriter=t,this._snapshot=r,this.metadata=new sQ(r.hasPendingWrites,r.fromCache),this.query=n}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function sY(e){e=i2(e,i5);let t=i2(e.firestore,sr);return(function(e,t){let n=arguments.length>2&&void 0!==arguments[2]?arguments[2]:{},r=new A;return e.asyncQueue.enqueueAndForget(async()=>(function(e,t,n,r,i){let s=new iz({next:o=>{s.su(),t.enqueueAndForget(()=>ii(e,a));let l=o.docs.has(n);!l&&o.fromCache?i.reject(new b(S.UNAVAILABLE,"Failed to get document because the client is offline.")):l&&o.fromCache&&r&&"server"===r.source?i.reject(new b(S.UNAVAILABLE,'Failed to get document from server. (However, this document does exist in the local cache. Run again without setting source to "server" to retrieve the cached document.)')):i.resolve(o)},error:e=>i.reject(e)}),a=new il(new tc(n.path),s,{includeMetadataChanges:!0,Ta:!0});return ir(e,a)})(await iY(e),e.asyncQueue,t,n,r)),r.promise})(ss(t),e._key).then(n=>(function(e,t,n){let r=n.docs.get(t._key),i=new sX(e);return new sj(e,i,t._key,r,new sQ(n.hasPendingWrites,n.fromCache),t.converter)})(t,e,n))}class sX extends sG{convertBytes(e){return new sa(e)}convertReference(e){let t=this.convertDocumentKey(e,this.firestore._databaseId);return new i5(this.firestore,null,t)}constructor(e){super(),this.firestore=e}}function sJ(e){e=i2(e,i8);let t=i2(e.firestore,sr),n=ss(t),r=new sX(t);return(/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function(e){if("L"===e.limitType&&0===e.explicitOrderBy.length)throw new b(S.UNIMPLEMENTED,"limitToLast() queries require specifying at least one orderBy() clause")}(e._query),(function(e,t){let n=arguments.length>2&&void 0!==arguments[2]?arguments[2]:{},r=new A;return e.asyncQueue.enqueueAndForget(async()=>(function(e,t,n,r,i){let s=new iz({next:n=>{s.su(),t.enqueueAndForget(()=>ii(e,a)),n.fromCache&&"server"===r.source?i.reject(new b(S.UNAVAILABLE,'Failed to get documents from server. (However, these documents may exist in the local cache. Run again without setting source to "server" to retrieve the cached documents.)')):i.resolve(n)},error:e=>i.reject(e)}),a=new il(n,s,{includeMetadataChanges:!0,Ta:!0});return ir(e,a)})(await iY(e),e.asyncQueue,t,n,r)),r.promise})(n,e._query).then(n=>new sW(t,r,e,n)))}function sZ(e,t,n){for(var r=arguments.length,i=Array(r>3?r-3:0),s=3;s<r;s++)i[s-3]=arguments[s];e=i2(e,i5);let a=i2(e.firestore,sr),o=sy(a);return s1(a,[("string"==typeof(t=(0,c.m9)(t))||t instanceof so?function(e,t,n,r,i,s){let a=e.ju(1,t,n),o=[sI(t,r,n)],l=[i];if(s.length%2!=0)throw new b(S.INVALID_ARGUMENT,"Function ".concat(t,"() needs to be called with an even number of arguments that alternate between field names and values."));for(let e=0;e<s.length;e+=2)o.push(sI(t,s[e])),l.push(s[e+1]);let u=[],h=eX.empty();for(let e=o.length-1;e>=0;--e)if(!sA(u,o[e])){let t=o[e],n=l[e];n=(0,c.m9)(n);let r=a.Uu(t);if(n instanceof sv)u.push(t);else{let e=sw(n,r);null!=e&&(u.push(t),h.set(t,e))}}return new sf(h,new ed(u),a.fieldTransforms)}(o,"updateDoc",e._key,t,n,i):function(e,t,n,r){let i=e.ju(1,t,n);sT("Data must be an object, but it was:",i,r);let s=[],a=eX.empty();return es(r,(e,r)=>{let o=sS(t,e,n);r=(0,c.m9)(r);let l=i.Uu(o);if(r instanceof sv)s.push(o);else{let e=sw(r,l);null!=e&&(s.push(o),a.set(o,e))}}),new sf(a,new ed(s),i.fieldTransforms)}(o,"updateDoc",e._key,t)).toMutation(e._key,tQ.exists(!0))])}function s$(e){return s1(i2(e.firestore,sr),[new t2(e._key,tQ.none())])}function s0(e,t){var n,r;let i=i2(e.firestore,sr),s=se(e),a=(n=e.converter)?r&&(r.merge||r.mergeFields)?n.toFirestore(t,r):n.toFirestore(t):t;return s1(i,[(function(e,t,n,r,i){let s,a,o=arguments.length>5&&void 0!==arguments[5]?arguments[5]:{},l=e.ju(o.merge||o.mergeFields?2:0,t,n,i);sT("Data must be an object, but it was:",l,r);let u=s_(r,l);if(o.merge)s=new ed(l.fieldMask),a=l.fieldTransforms;else if(o.mergeFields){let e=[];for(let r of o.mergeFields){let i=sI(t,r,n);if(!l.contains(i))throw new b(S.INVALID_ARGUMENT,"Field '".concat(i,"' is specified in your field mask but missing from your input data."));sA(e,i)||e.push(i)}s=new ed(e),a=l.fieldTransforms.filter(e=>s.covers(e.field))}else s=null,a=l.fieldTransforms;return new sd(new eX(u),s,a)})(sy(e.firestore),"addDoc",s._key,a,null!==e.converter,{}).toMutation(s._key,tQ.exists(!1))]).then(()=>s)}function s1(e,t){return function(e,t){let n=new A;return e.asyncQueue.enqueueAndForget(async()=>iI(await iW(e).then(e=>e.syncEngine),t,n)),n.promise}(ss(e),t)}new WeakMap,function(){let e=!(arguments.length>1)||void 0===arguments[1]||arguments[1];y=o.Jn,(0,o.Xd)(new l.wA("firestore",(t,n)=>{let{instanceIdentifier:r,options:i}=n,s=t.getProvider("app").getImmediate(),a=new sr(new x(t.getProvider("auth-internal")),new M(s,t.getProvider("app-check-internal")),function(e,t){if(!Object.prototype.hasOwnProperty.apply(e.options,["projectId"]))throw new b(S.INVALID_ARGUMENT,'"projectId" not provided in firebase.initializeApp.');return new eN(e.options.projectId,t)}(s,r),s);return i=Object.assign({useFetchStreams:e},i),a._setSettings(i),a},"PUBLIC").setMultipleInstances(!0)),(0,o.KN)(m,g,void 0),(0,o.KN)(m,g,"esm2017")}()}}]);