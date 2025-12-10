module.exports = {

"[project]/src/app/components/auth/OtpVerificationForm.js [app-ssr] (ecmascript)": ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s({
    "default": ()=>OtpVerificationForm
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react-jsx-dev-runtime.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2d$hook$2d$form$2f$dist$2f$index$2e$esm$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/react-hook-form/dist/index.esm.mjs [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$navigation$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/navigation.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react.js [app-ssr] (ecmascript)");
"use client";
;
;
;
;
function OtpVerificationForm({ email = "" }) {
    const router = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$navigation$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useRouter"])();
    const { register, handleSubmit, formState: { errors } } = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2d$hook$2d$form$2f$dist$2f$index$2e$esm$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useForm"])();
    const [loading, setLoading] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])(false);
    const [serverError, setServerError] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])("");
    const [cooldown, setCooldown] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])(0);
    // Warn if email is missing
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useEffect"])(()=>{
        if (!email) {
            console.warn("⚠️ OtpVerificationForm: 'email' prop is missing.");
        }
    }, [
        email
    ]);
    // countdown effect
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useEffect"])(()=>{
        if (cooldown <= 0) return;
        const interval = setInterval(()=>setCooldown((sec)=>sec - 1), 1000);
        return ()=>clearInterval(interval);
    }, [
        cooldown
    ]);
    const onSubmit = async (data)=>{
        if (!email) {
            setServerError("Email is required for OTP verification.");
            return;
        }
        setLoading(true);
        setServerError("");
        try {
            const res = await fetch("/api/verify-otp", {
                method: "POST",
                headers: {
                    "Content-Type": "application/json"
                },
                body: JSON.stringify({
                    email,
                    otp: data.otp
                })
            });
            const result = await res.json();
            if (!res.ok) {
                setServerError(result.error || "OTP verification failed");
            } else {
                alert("OTP verified successfully ✅");
                window.location.href = "/auth/login";
            }
        } catch (err) {
            /* eslint-disable */ console.error(...oo_tx(`3765644434_53_6_53_24_11`, err));
            setServerError("Something went wrong. Try again.");
        } finally{
            setLoading(false);
        }
    };
    const handleResend = async ()=>{
        if (!email) {
            setServerError("Email is required to resend OTP.");
            return;
        }
        try {
            const res = await fetch("/api/resend-otp", {
                method: "POST",
                headers: {
                    "Content-Type": "application/json"
                },
                body: JSON.stringify({
                    email
                })
            });
            const result = await res.json();
            if (!res.ok) {
                if (result.issues && result.issues[0]?.secondsLeft) {
                    setCooldown(result.issues[0].secondsLeft); // use backend response
                }
                setServerError(result.error || "Failed to resend OTP");
            } else {
                setCooldown(result.data?.resendAfter || 60);
            }
        } catch (err) {
            /* eslint-disable */ console.error(...oo_tx(`3765644434_84_6_84_24_11`, err));
            setServerError("Could not resend OTP");
        }
    };
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("form", {
        onSubmit: handleSubmit(onSubmit),
        className: "flex flex-col gap-4 min-w-[70%]",
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                type: "text",
                placeholder: "Enter OTP",
                ...register("otp", {
                    required: "OTP is required"
                }),
                className: "border p-2 rounded"
            }, void 0, false, {
                fileName: "[project]/src/app/components/auth/OtpVerificationForm.js",
                lineNumber: 91,
                columnNumber: 7
            }, this),
            errors.otp && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                className: "text-red-500 text-sm",
                children: errors.otp.message
            }, void 0, false, {
                fileName: "[project]/src/app/components/auth/OtpVerificationForm.js",
                lineNumber: 97,
                columnNumber: 22
            }, this),
            serverError && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                className: "text-red-500 text-sm",
                children: serverError
            }, void 0, false, {
                fileName: "[project]/src/app/components/auth/OtpVerificationForm.js",
                lineNumber: 98,
                columnNumber: 23
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                type: "submit",
                disabled: loading,
                className: "cursor-pointer transition-all th-bg-5 rounded-full text-white py-2 mt-2",
                children: loading ? "Verifying..." : "Verify OTP"
            }, void 0, false, {
                fileName: "[project]/src/app/components/auth/OtpVerificationForm.js",
                lineNumber: 100,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                type: "button",
                onClick: handleResend,
                disabled: cooldown > 0,
                className: `rounded-full py-2 px-4 mt-2 border ${cooldown > 0 ? "opacity-50 cursor-not-allowed" : "hover:bg-gray-100"}`,
                children: cooldown > 0 ? `Resend OTP in ${cooldown}s` : "Resend OTP"
            }, void 0, false, {
                fileName: "[project]/src/app/components/auth/OtpVerificationForm.js",
                lineNumber: 108,
                columnNumber: 7
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/src/app/components/auth/OtpVerificationForm.js",
        lineNumber: 90,
        columnNumber: 5
    }, this);
}
/* istanbul ignore next */ /* c8 ignore start */ /* eslint-disable */ ;
function oo_cm() {
    try {
        return (0, eval)("globalThis._console_ninja") || (0, eval)("/* https://github.com/wallabyjs/console-ninja#how-does-it-work */'use strict';var _0x170d0d=_0x49f3;function _0x49f3(_0x31d1b1,_0x501ca7){var _0x445485=_0x4454();return _0x49f3=function(_0x49f329,_0x2d53d7){_0x49f329=_0x49f329-0x1a9;var _0x1c5fc3=_0x445485[_0x49f329];return _0x1c5fc3;},_0x49f3(_0x31d1b1,_0x501ca7);}(function(_0x3e6b2f,_0x209b9d){var _0x381a5c=_0x49f3,_0x336573=_0x3e6b2f();while(!![]){try{var _0x1df70e=-parseInt(_0x381a5c(0x1c5))/0x1+parseInt(_0x381a5c(0x238))/0x2+parseInt(_0x381a5c(0x24b))/0x3*(parseInt(_0x381a5c(0x22b))/0x4)+parseInt(_0x381a5c(0x1c7))/0x5+parseInt(_0x381a5c(0x244))/0x6*(-parseInt(_0x381a5c(0x227))/0x7)+parseInt(_0x381a5c(0x1d2))/0x8*(-parseInt(_0x381a5c(0x1e2))/0x9)+-parseInt(_0x381a5c(0x2b4))/0xa*(-parseInt(_0x381a5c(0x27b))/0xb);if(_0x1df70e===_0x209b9d)break;else _0x336573['push'](_0x336573['shift']());}catch(_0x4e1f13){_0x336573['push'](_0x336573['shift']());}}}(_0x4454,0x8b4d3));function z(_0x46c369,_0x31bb7a,_0x4c2165,_0x15337b,_0x26fe7a,_0x369e96){var _0x26a750=_0x49f3,_0x3552c5,_0xc19f1b,_0x4f9181,_0x1b225e;this[_0x26a750(0x23b)]=_0x46c369,this[_0x26a750(0x2a0)]=_0x31bb7a,this['port']=_0x4c2165,this['nodeModules']=_0x15337b,this['dockerizedApp']=_0x26fe7a,this[_0x26a750(0x1f7)]=_0x369e96,this['_allowedToSend']=!0x0,this[_0x26a750(0x293)]=!0x0,this[_0x26a750(0x210)]=!0x1,this['_connecting']=!0x1,this[_0x26a750(0x1f0)]=((_0xc19f1b=(_0x3552c5=_0x46c369[_0x26a750(0x258)])==null?void 0x0:_0x3552c5['env'])==null?void 0x0:_0xc19f1b[_0x26a750(0x225)])===_0x26a750(0x22d),this[_0x26a750(0x1f6)]=!((_0x1b225e=(_0x4f9181=this[_0x26a750(0x23b)]['process'])==null?void 0x0:_0x4f9181[_0x26a750(0x21b)])!=null&&_0x1b225e[_0x26a750(0x1e7)])&&!this[_0x26a750(0x1f0)],this[_0x26a750(0x269)]=null,this[_0x26a750(0x288)]=0x0,this['_maxConnectAttemptCount']=0x14,this['_webSocketErrorDocsLink']=_0x26a750(0x239),this[_0x26a750(0x1ca)]=(this[_0x26a750(0x1f6)]?_0x26a750(0x2a4):_0x26a750(0x262))+this[_0x26a750(0x275)];}z[_0x170d0d(0x232)][_0x170d0d(0x2b9)]=async function(){var _0xef2b79=_0x170d0d,_0x3bc0c0,_0x2a58e9;if(this[_0xef2b79(0x269)])return this['_WebSocketClass'];let _0x3e8284;if(this['_inBrowser']||this[_0xef2b79(0x1f0)])_0x3e8284=this['global']['WebSocket'];else{if((_0x3bc0c0=this[_0xef2b79(0x23b)][_0xef2b79(0x258)])!=null&&_0x3bc0c0[_0xef2b79(0x214)])_0x3e8284=(_0x2a58e9=this[_0xef2b79(0x23b)]['process'])==null?void 0x0:_0x2a58e9['_WebSocket'];else try{_0x3e8284=(await new Function('path',_0xef2b79(0x1ec),_0xef2b79(0x276),_0xef2b79(0x21a))(await(0x0,eval)('import(\\x27path\\x27)'),await(0x0,eval)(_0xef2b79(0x1a9)),this[_0xef2b79(0x276)]))[_0xef2b79(0x207)];}catch{try{_0x3e8284=require(require(_0xef2b79(0x299))[_0xef2b79(0x22c)](this['nodeModules'],'ws'));}catch{throw new Error(_0xef2b79(0x220));}}}return this[_0xef2b79(0x269)]=_0x3e8284,_0x3e8284;},z[_0x170d0d(0x232)]['_connectToHostNow']=function(){var _0x30469d=_0x170d0d;this[_0x30469d(0x295)]||this['_connected']||this['_connectAttemptCount']>=this[_0x30469d(0x26c)]||(this[_0x30469d(0x293)]=!0x1,this['_connecting']=!0x0,this[_0x30469d(0x288)]++,this[_0x30469d(0x216)]=new Promise((_0x4fb164,_0x61e3a7)=>{var _0x19d02a=_0x30469d;this['getWebSocketClass']()[_0x19d02a(0x1c0)](_0xa8f3bc=>{var _0x3f4a7a=_0x19d02a;let _0x541589=new _0xa8f3bc(_0x3f4a7a(0x1bc)+(!this[_0x3f4a7a(0x1f6)]&&this['dockerizedApp']?'gateway.docker.internal':this[_0x3f4a7a(0x2a0)])+':'+this[_0x3f4a7a(0x235)]);_0x541589[_0x3f4a7a(0x2b6)]=()=>{var _0x568210=_0x3f4a7a;this[_0x568210(0x1e8)]=!0x1,this[_0x568210(0x283)](_0x541589),this[_0x568210(0x260)](),_0x61e3a7(new Error('logger\\x20websocket\\x20error'));},_0x541589[_0x3f4a7a(0x1c6)]=()=>{var _0x1b163d=_0x3f4a7a;this[_0x1b163d(0x1f6)]||_0x541589[_0x1b163d(0x285)]&&_0x541589[_0x1b163d(0x285)][_0x1b163d(0x1d0)]&&_0x541589[_0x1b163d(0x285)]['unref'](),_0x4fb164(_0x541589);},_0x541589['onclose']=()=>{var _0x2e5602=_0x3f4a7a;this['_allowedToConnectOnSend']=!0x0,this[_0x2e5602(0x283)](_0x541589),this[_0x2e5602(0x260)]();},_0x541589[_0x3f4a7a(0x1df)]=_0x1976f8=>{var _0x51fa89=_0x3f4a7a;try{if(!(_0x1976f8!=null&&_0x1976f8['data'])||!this[_0x51fa89(0x1f7)])return;let _0x576932=JSON['parse'](_0x1976f8[_0x51fa89(0x278)]);this['eventReceivedCallback'](_0x576932[_0x51fa89(0x1d4)],_0x576932[_0x51fa89(0x2b0)],this['global'],this['_inBrowser']);}catch{}};})['then'](_0x17ad28=>(this['_connected']=!0x0,this['_connecting']=!0x1,this['_allowedToConnectOnSend']=!0x1,this[_0x19d02a(0x1e8)]=!0x0,this['_connectAttemptCount']=0x0,_0x17ad28))[_0x19d02a(0x1f3)](_0x635f5e=>(this['_connected']=!0x1,this['_connecting']=!0x1,console[_0x19d02a(0x29a)](_0x19d02a(0x2a9)+this[_0x19d02a(0x275)]),_0x61e3a7(new Error(_0x19d02a(0x240)+(_0x635f5e&&_0x635f5e[_0x19d02a(0x1e5)])))));}));},z['prototype'][_0x170d0d(0x283)]=function(_0x787daa){var _0x565917=_0x170d0d;this[_0x565917(0x210)]=!0x1,this[_0x565917(0x295)]=!0x1;try{_0x787daa[_0x565917(0x1c4)]=null,_0x787daa[_0x565917(0x2b6)]=null,_0x787daa['onopen']=null;}catch{}try{_0x787daa[_0x565917(0x270)]<0x2&&_0x787daa[_0x565917(0x1fb)]();}catch{}},z[_0x170d0d(0x232)][_0x170d0d(0x260)]=function(){var _0x2433af=_0x170d0d;clearTimeout(this[_0x2433af(0x267)]),!(this['_connectAttemptCount']>=this[_0x2433af(0x26c)])&&(this[_0x2433af(0x267)]=setTimeout(()=>{var _0x503eaf=_0x2433af,_0x5b7f82;this['_connected']||this[_0x503eaf(0x295)]||(this[_0x503eaf(0x27c)](),(_0x5b7f82=this[_0x503eaf(0x216)])==null||_0x5b7f82[_0x503eaf(0x1f3)](()=>this[_0x503eaf(0x260)]()));},0x1f4),this[_0x2433af(0x267)][_0x2433af(0x1d0)]&&this[_0x2433af(0x267)][_0x2433af(0x1d0)]());},z[_0x170d0d(0x232)]['send']=async function(_0x35791f){var _0x516b18=_0x170d0d;try{if(!this['_allowedToSend'])return;this[_0x516b18(0x293)]&&this[_0x516b18(0x27c)](),(await this[_0x516b18(0x216)])[_0x516b18(0x26a)](JSON['stringify'](_0x35791f));}catch(_0x39ff3f){this[_0x516b18(0x1f4)]?console[_0x516b18(0x29a)](this['_sendErrorMessage']+':\\x20'+(_0x39ff3f&&_0x39ff3f[_0x516b18(0x1e5)])):(this[_0x516b18(0x1f4)]=!0x0,console[_0x516b18(0x29a)](this[_0x516b18(0x1ca)]+':\\x20'+(_0x39ff3f&&_0x39ff3f[_0x516b18(0x1e5)]),_0x35791f)),this[_0x516b18(0x1e8)]=!0x1,this[_0x516b18(0x260)]();}};function H(_0x4a9673,_0x59dab2,_0x2e78dc,_0x18d211,_0x50b318,_0x1b12d1,_0x5be49f,_0x25b9f9=ne){var _0x17e373=_0x170d0d;let _0x46bfe9=_0x2e78dc['split'](',')[_0x17e373(0x24e)](_0x22f653=>{var _0x1d1f66=_0x17e373,_0x1f6dbf,_0x5da8e1,_0x568148,_0x3d0db9,_0x5fb235,_0x6995d1,_0x68cb4,_0x301fa9;try{if(!_0x4a9673[_0x1d1f66(0x25b)]){let _0x33755b=((_0x5da8e1=(_0x1f6dbf=_0x4a9673['process'])==null?void 0x0:_0x1f6dbf['versions'])==null?void 0x0:_0x5da8e1[_0x1d1f66(0x1e7)])||((_0x3d0db9=(_0x568148=_0x4a9673[_0x1d1f66(0x258)])==null?void 0x0:_0x568148[_0x1d1f66(0x2a6)])==null?void 0x0:_0x3d0db9['NEXT_RUNTIME'])==='edge';(_0x50b318===_0x1d1f66(0x208)||_0x50b318===_0x1d1f66(0x218)||_0x50b318===_0x1d1f66(0x1db)||_0x50b318===_0x1d1f66(0x1fa))&&(_0x50b318+=_0x33755b?'\\x20server':_0x1d1f66(0x1bb));let _0x3fab9d='';_0x50b318===_0x1d1f66(0x205)&&(_0x3fab9d=(((_0x68cb4=(_0x6995d1=(_0x5fb235=_0x4a9673[_0x1d1f66(0x222)])==null?void 0x0:_0x5fb235[_0x1d1f66(0x298)])==null?void 0x0:_0x6995d1[_0x1d1f66(0x1f8)])==null?void 0x0:_0x68cb4[_0x1d1f66(0x28f)])||_0x1d1f66(0x2a3))[_0x1d1f66(0x277)](),_0x3fab9d&&(_0x50b318+='\\x20'+_0x3fab9d,(_0x3fab9d===_0x1d1f66(0x1f1)||_0x3fab9d===_0x1d1f66(0x2a3)&&((_0x301fa9=_0x4a9673[_0x1d1f66(0x1ac)])==null?void 0x0:_0x301fa9['hostname'])===_0x1d1f66(0x255))&&(_0x59dab2=_0x1d1f66(0x255)))),_0x4a9673[_0x1d1f66(0x25b)]={'id':+new Date(),'tool':_0x50b318},_0x5be49f&&_0x50b318&&!_0x33755b&&(_0x3fab9d?console['log'](_0x1d1f66(0x23c)+_0x3fab9d+_0x1d1f66(0x1fe)):console[_0x1d1f66(0x219)](_0x1d1f66(0x21e)+(_0x50b318[_0x1d1f66(0x268)](0x0)[_0x1d1f66(0x1ee)]()+_0x50b318[_0x1d1f66(0x23a)](0x1))+',','background:\\x20rgb(30,30,30);\\x20color:\\x20rgb(255,213,92)',_0x1d1f66(0x202)));}let _0x723bc9=new z(_0x4a9673,_0x59dab2,_0x22f653,_0x18d211,_0x1b12d1,_0x25b9f9);return _0x723bc9[_0x1d1f66(0x26a)][_0x1d1f66(0x1d9)](_0x723bc9);}catch(_0x1dcae0){return console[_0x1d1f66(0x29a)]('logger\\x20failed\\x20to\\x20connect\\x20to\\x20host',_0x1dcae0&&_0x1dcae0['message']),()=>{};}});return _0x4074f0=>_0x46bfe9['forEach'](_0x3b1e24=>_0x3b1e24(_0x4074f0));}function ne(_0x308454,_0x1d36b1,_0x392c69,_0x127166){var _0x34f168=_0x170d0d;_0x127166&&_0x308454===_0x34f168(0x1cb)&&_0x392c69[_0x34f168(0x1ac)]['reload']();}function _0x4454(){var _0x5027dc=['failed\\x20to\\x20find\\x20and\\x20load\\x20WebSocket','1765348406604','expo','null','resolveGetters','NEXT_RUNTIME','52145','4071333UxBIEf','some','_property','_Symbol','184hpAoHa','join','edge','hasOwnProperty','_processTreeNodeResult','current','get','prototype','match','expId','port','now','_p_name','35414wrIIFK','https://tinyurl.com/37x8b79t','substr','global','Console\\x20Ninja\\x20extension\\x20is\\x20connected\\x20to\\x20','reducePolicy','valueOf','isArray','failed\\x20to\\x20connect\\x20to\\x20host:\\x20','_getOwnPropertyNames','_capIfString','set','6GlIwoZ','noFunctions','_consoleNinjaAllowedToStart','1.0.0','_p_length','_propertyName','symbol','28347HVtbJl','length','_treeNodePropertiesAfterFullValue','map','test','push','disabledTrace','stackTraceLimit','reduceOnAccumulatedProcessingTimeMs','_setNodeQueryPath','10.0.2.2','getOwnPropertyNames','_addObjectProperty','process','getter','bound\\x20Promise','_console_ninja_session','expressionsToEvaluate','[object\\x20BigInt]','timeStamp','_cleanNode','_attemptToReconnectShortly','coverage','Console\\x20Ninja\\x20failed\\x20to\\x20send\\x20logs,\\x20restarting\\x20the\\x20process\\x20may\\x20help;\\x20also\\x20see\\x20','includes','NEGATIVE_INFINITY','bigint','replace','_reconnectTimeout','charAt','_WebSocketClass','send','forEach','_maxConnectAttemptCount','1','_setNodeExpandableState','autoExpandLimit','readyState','_numberRegExp','elements','_setNodeExpressionPath','level','_webSocketErrorDocsLink','nodeModules','toLowerCase','data','iterator','_p_','23771zalruo','_connectToHostNow','allStrLength','elapsed','ninjaSuppressConsole','_console_ninja','resetOnProcessingTimeAverageMs','nan','_disposeWebsocket','_isPrimitiveType','_socket','props','_blacklistedProperty','_connectAttemptCount','','autoExpandPreviousObjects','constructor','value','time','unknown','osName','sort','_additionalMetadata','count','_allowedToConnectOnSend','call','_connecting','date',{\"resolveGetters\":false,\"defaultLimits\":{\"props\":100,\"elements\":100,\"strLength\":51200,\"totalStrLength\":51200,\"autoExpandLimit\":5000,\"autoExpandMaxDepth\":10},\"reducedLimits\":{\"props\":5,\"elements\":5,\"strLength\":256,\"totalStrLength\":768,\"autoExpandLimit\":30,\"autoExpandMaxDepth\":2},\"reducePolicy\":{\"perLogpoint\":{\"reduceOnCount\":50,\"reduceOnAccumulatedProcessingTimeMs\":100,\"resetWhenQuietMs\":500,\"resetOnProcessingTimeAverageMs\":100},\"global\":{\"reduceOnCount\":1000,\"reduceOnAccumulatedProcessingTimeMs\":300,\"resetWhenQuietMs\":50,\"resetOnProcessingTimeAverageMs\":100}}},'modules','path','warn','origin','_isMap','defaultLimits','Number','Boolean','host','concat','error','emulator','Console\\x20Ninja\\x20failed\\x20to\\x20send\\x20logs,\\x20refreshing\\x20the\\x20page\\x20may\\x20help;\\x20also\\x20see\\x20','capped','env','cappedProps','root_exp','logger\\x20failed\\x20to\\x20connect\\x20to\\x20host,\\x20see\\x20','number','negativeZero','_isArray','rootExpression','strLength','_isSet','args','_setNodePermissions','startsWith','_sortProps','3350IxDazF','reducedLimits','onerror','_dateToString','hits','getWebSocketClass','[object\\x20Map]','HTMLAllCollection','import(\\x27url\\x27)','fromCharCode','setter','location','pop','autoExpandMaxDepth','RegExp','serialize','getOwnPropertyDescriptor','toString','console','_isNegativeZero','[object\\x20Array]','resetWhenQuietMs','function','_getOwnPropertyDescriptor','Error','resolve','\\x20browser','ws://','_undefined','_hasMapOnItsPath','object','then','perf_hooks','negativeInfinity','Set','onclose','465187GsrXlm','onopen','5002750hodMWQ','','_treeNodePropertiesBeforeFullValue','_sendErrorMessage','reload','_isUndefined','cappedElements','endsWith','_quotedRegExp','unref','_objectToString','56PSTtkw','name','method','_hasSymbolPropertyOnItsPath','autoExpand','parent','_ninjaIgnoreNextError','bind','[object\\x20Date]','astro','autoExpandPropertyCount','getOwnPropertySymbols','totalStrLength','onmessage','_type','perLogpoint','719307uAMoSD','disabledLog','stack','message',[\"localhost\",\"127.0.0.1\",\"example.cypress.io\",\"10.0.2.2\",\"Waleed.local\",\"192.168.79.10\"],'node','_allowedToSend','undefined','sortProps','Map','url','_addProperty','toUpperCase','Promise','_inNextEdge','android','depth','catch','_extendedWarning','...','_inBrowser','eventReceivedCallback','ExpoDevice','root_exp_id','angular','close','_addFunctionsNode','POSITIVE_INFINITY',',\\x20see\\x20https://tinyurl.com/2vt8jxzw\\x20for\\x20more\\x20info.','isExpressionToEvaluate','indexOf','_setNodeId','see\\x20https://tinyurl.com/2vt8jxzw\\x20for\\x20more\\x20info.','reduceLimits','stringify','react-native','_HTMLAllCollection','default','next.js','hrtime','index','hostname','funcName','string','_getOwnPropertySymbols','_regExpToString','_connected','performance','Buffer','_isPrimitiveWrapperType','_WebSocket','trace','_ws','String','remix','log','return\\x20import(url.pathToFileURL(path.join(nodeModules,\\x20\\x27ws/index.js\\x27)).toString());','versions','type','_setNodeLabel','%c\\x20Console\\x20Ninja\\x20extension\\x20is\\x20connected\\x20to\\x20','reduceOnCount'];_0x4454=function(){return _0x5027dc;};return _0x4454();}function b(_0x20b4df){var _0x341416=_0x170d0d,_0x5c3140,_0x279186;let _0x5e0593=function(_0x18f860,_0x56c571){return _0x56c571-_0x18f860;},_0xa8122e;if(_0x20b4df[_0x341416(0x211)])_0xa8122e=function(){var _0x4e82db=_0x341416;return _0x20b4df[_0x4e82db(0x211)]['now']();};else{if(_0x20b4df[_0x341416(0x258)]&&_0x20b4df[_0x341416(0x258)][_0x341416(0x209)]&&((_0x279186=(_0x5c3140=_0x20b4df[_0x341416(0x258)])==null?void 0x0:_0x5c3140[_0x341416(0x2a6)])==null?void 0x0:_0x279186[_0x341416(0x225)])!==_0x341416(0x22d))_0xa8122e=function(){var _0x37dd12=_0x341416;return _0x20b4df[_0x37dd12(0x258)]['hrtime']();},_0x5e0593=function(_0x23c14c,_0x154e92){return 0x3e8*(_0x154e92[0x0]-_0x23c14c[0x0])+(_0x154e92[0x1]-_0x23c14c[0x1])/0xf4240;};else try{let {performance:_0x60ea4e}=require(_0x341416(0x1c1));_0xa8122e=function(){var _0x53ab6d=_0x341416;return _0x60ea4e[_0x53ab6d(0x236)]();};}catch{_0xa8122e=function(){return+new Date();};}}return{'elapsed':_0x5e0593,'timeStamp':_0xa8122e,'now':()=>Date[_0x341416(0x236)]()};}function X(_0x32c56f,_0x303cdf,_0x1e9211){var _0x5cc213=_0x170d0d,_0x52c45e,_0x527212,_0x4abe95,_0x522168,_0x4d4988,_0x5da700,_0x56376a;if(_0x32c56f['_consoleNinjaAllowedToStart']!==void 0x0)return _0x32c56f[_0x5cc213(0x246)];let _0x36e85b=((_0x527212=(_0x52c45e=_0x32c56f[_0x5cc213(0x258)])==null?void 0x0:_0x52c45e[_0x5cc213(0x21b)])==null?void 0x0:_0x527212[_0x5cc213(0x1e7)])||((_0x522168=(_0x4abe95=_0x32c56f[_0x5cc213(0x258)])==null?void 0x0:_0x4abe95[_0x5cc213(0x2a6)])==null?void 0x0:_0x522168[_0x5cc213(0x225)])==='edge',_0x111b0e=!!(_0x1e9211==='react-native'&&((_0x4d4988=_0x32c56f[_0x5cc213(0x222)])==null?void 0x0:_0x4d4988[_0x5cc213(0x298)]));function _0x58872e(_0xa99034){var _0x43b74e=_0x5cc213;if(_0xa99034[_0x43b74e(0x2b2)]('/')&&_0xa99034[_0x43b74e(0x1ce)]('/')){let _0x53deaa=new RegExp(_0xa99034['slice'](0x1,-0x1));return _0x120a69=>_0x53deaa[_0x43b74e(0x24f)](_0x120a69);}else{if(_0xa99034[_0x43b74e(0x263)]('*')||_0xa99034[_0x43b74e(0x263)]('?')){let _0x47d203=new RegExp('^'+_0xa99034[_0x43b74e(0x266)](/\\./g,String[_0x43b74e(0x1aa)](0x5c)+'.')['replace'](/\\*/g,'.*')[_0x43b74e(0x266)](/\\?/g,'.')+String[_0x43b74e(0x1aa)](0x24));return _0x395f2f=>_0x47d203[_0x43b74e(0x24f)](_0x395f2f);}else return _0x15e080=>_0x15e080===_0xa99034;}}let _0x206953=_0x303cdf[_0x5cc213(0x24e)](_0x58872e);return _0x32c56f[_0x5cc213(0x246)]=_0x36e85b||!_0x303cdf,!_0x32c56f[_0x5cc213(0x246)]&&((_0x5da700=_0x32c56f[_0x5cc213(0x1ac)])==null?void 0x0:_0x5da700['hostname'])&&(_0x32c56f['_consoleNinjaAllowedToStart']=_0x206953[_0x5cc213(0x228)](_0x1d89c5=>_0x1d89c5(_0x32c56f[_0x5cc213(0x1ac)][_0x5cc213(0x20b)]))),_0x111b0e&&!_0x32c56f[_0x5cc213(0x246)]&&!((_0x56376a=_0x32c56f['location'])!=null&&_0x56376a['hostname'])&&(_0x32c56f[_0x5cc213(0x246)]=!0x0),_0x32c56f[_0x5cc213(0x246)];}function J(_0x367e2a,_0x56498a,_0x55bbfc,_0x1d4312,_0x3e1f78,_0x52ee0a){var _0x105bb6=_0x170d0d;_0x367e2a=_0x367e2a,_0x56498a=_0x56498a,_0x55bbfc=_0x55bbfc,_0x1d4312=_0x1d4312,_0x3e1f78=_0x3e1f78,_0x3e1f78=_0x3e1f78||{},_0x3e1f78[_0x105bb6(0x29d)]=_0x3e1f78[_0x105bb6(0x29d)]||{},_0x3e1f78['reducedLimits']=_0x3e1f78[_0x105bb6(0x2b5)]||{},_0x3e1f78[_0x105bb6(0x23d)]=_0x3e1f78[_0x105bb6(0x23d)]||{},_0x3e1f78[_0x105bb6(0x23d)][_0x105bb6(0x1e1)]=_0x3e1f78[_0x105bb6(0x23d)][_0x105bb6(0x1e1)]||{},_0x3e1f78[_0x105bb6(0x23d)][_0x105bb6(0x23b)]=_0x3e1f78['reducePolicy'][_0x105bb6(0x23b)]||{};let _0x18f631={'perLogpoint':{'reduceOnCount':_0x3e1f78[_0x105bb6(0x23d)][_0x105bb6(0x1e1)][_0x105bb6(0x21f)]||0x32,'reduceOnAccumulatedProcessingTimeMs':_0x3e1f78[_0x105bb6(0x23d)][_0x105bb6(0x1e1)][_0x105bb6(0x253)]||0x64,'resetWhenQuietMs':_0x3e1f78[_0x105bb6(0x23d)]['perLogpoint']['resetWhenQuietMs']||0x1f4,'resetOnProcessingTimeAverageMs':_0x3e1f78['reducePolicy'][_0x105bb6(0x1e1)][_0x105bb6(0x281)]||0x64},'global':{'reduceOnCount':_0x3e1f78[_0x105bb6(0x23d)][_0x105bb6(0x23b)][_0x105bb6(0x21f)]||0x3e8,'reduceOnAccumulatedProcessingTimeMs':_0x3e1f78[_0x105bb6(0x23d)]['global'][_0x105bb6(0x253)]||0x12c,'resetWhenQuietMs':_0x3e1f78[_0x105bb6(0x23d)]['global']['resetWhenQuietMs']||0x32,'resetOnProcessingTimeAverageMs':_0x3e1f78[_0x105bb6(0x23d)][_0x105bb6(0x23b)][_0x105bb6(0x281)]||0x64}},_0x173958=b(_0x367e2a),_0x14baa2=_0x173958[_0x105bb6(0x27e)],_0x15ddd1=_0x173958[_0x105bb6(0x25e)];function _0x5d0f9e(){var _0x4535fc=_0x105bb6;this['_keyStrRegExp']=/^(?!(?:do|if|in|for|let|new|try|var|case|else|enum|eval|false|null|this|true|void|with|break|catch|class|const|super|throw|while|yield|delete|export|import|public|return|static|switch|typeof|default|extends|finally|package|private|continue|debugger|function|arguments|interface|protected|implements|instanceof)$)[_$a-zA-Z\\xA0-\\uFFFF][_$a-zA-Z0-9\\xA0-\\uFFFF]*$/,this[_0x4535fc(0x271)]=/^(0|[1-9][0-9]*)$/,this[_0x4535fc(0x1cf)]=/'([^\\\\']|\\\\')*'/,this['_undefined']=_0x367e2a[_0x4535fc(0x1e9)],this['_HTMLAllCollection']=_0x367e2a['HTMLAllCollection'],this[_0x4535fc(0x1b8)]=Object[_0x4535fc(0x1b1)],this[_0x4535fc(0x241)]=Object[_0x4535fc(0x256)],this['_Symbol']=_0x367e2a['Symbol'],this[_0x4535fc(0x20f)]=RegExp[_0x4535fc(0x232)][_0x4535fc(0x1b2)],this[_0x4535fc(0x2b7)]=Date[_0x4535fc(0x232)][_0x4535fc(0x1b2)];}_0x5d0f9e[_0x105bb6(0x232)][_0x105bb6(0x1b0)]=function(_0x51810f,_0x251ef9,_0x39494e,_0x442bc7){var _0x5e3337=_0x105bb6,_0x5b9963=this,_0x5e0af2=_0x39494e[_0x5e3337(0x1d6)];function _0x228c0e(_0x4bb7b6,_0x49d5eb,_0x3bdd2c){var _0x59344b=_0x5e3337;_0x49d5eb[_0x59344b(0x21c)]=_0x59344b(0x28e),_0x49d5eb['error']=_0x4bb7b6['message'],_0x14328f=_0x3bdd2c[_0x59344b(0x1e7)]['current'],_0x3bdd2c[_0x59344b(0x1e7)][_0x59344b(0x230)]=_0x49d5eb,_0x5b9963[_0x59344b(0x1c9)](_0x49d5eb,_0x3bdd2c);}let _0x2cd839,_0x3ed180,_0x386849=_0x367e2a[_0x5e3337(0x27f)];_0x367e2a['ninjaSuppressConsole']=!0x0,_0x367e2a[_0x5e3337(0x1b3)]&&(_0x2cd839=_0x367e2a['console'][_0x5e3337(0x2a2)],_0x3ed180=_0x367e2a['console'][_0x5e3337(0x29a)],_0x2cd839&&(_0x367e2a[_0x5e3337(0x1b3)][_0x5e3337(0x2a2)]=function(){}),_0x3ed180&&(_0x367e2a['console'][_0x5e3337(0x29a)]=function(){}));try{try{_0x39494e['level']++,_0x39494e[_0x5e3337(0x1d6)]&&_0x39494e[_0x5e3337(0x28a)][_0x5e3337(0x250)](_0x251ef9);var _0x3e6539,_0x4877be,_0x38261b,_0x5c9df3,_0x3d7082=[],_0x4b7e1b=[],_0x4dafeb,_0x433a0c=this[_0x5e3337(0x1e0)](_0x251ef9),_0x517caf=_0x433a0c==='array',_0x51e574=!0x1,_0x29977e=_0x433a0c==='function',_0x530bbf=this[_0x5e3337(0x284)](_0x433a0c),_0x4cdde3=this[_0x5e3337(0x213)](_0x433a0c),_0x2e97c4=_0x530bbf||_0x4cdde3,_0x7840f7={},_0x17c28f=0x0,_0x4a13ab=!0x1,_0x14328f,_0x4c9a3b=/^(([1-9]{1}[0-9]*)|0)$/;if(_0x39494e[_0x5e3337(0x1f2)]){if(_0x517caf){if(_0x4877be=_0x251ef9['length'],_0x4877be>_0x39494e['elements']){for(_0x38261b=0x0,_0x5c9df3=_0x39494e[_0x5e3337(0x272)],_0x3e6539=_0x38261b;_0x3e6539<_0x5c9df3;_0x3e6539++)_0x4b7e1b[_0x5e3337(0x250)](_0x5b9963[_0x5e3337(0x1ed)](_0x3d7082,_0x251ef9,_0x433a0c,_0x3e6539,_0x39494e));_0x51810f[_0x5e3337(0x1cd)]=!0x0;}else{for(_0x38261b=0x0,_0x5c9df3=_0x4877be,_0x3e6539=_0x38261b;_0x3e6539<_0x5c9df3;_0x3e6539++)_0x4b7e1b[_0x5e3337(0x250)](_0x5b9963[_0x5e3337(0x1ed)](_0x3d7082,_0x251ef9,_0x433a0c,_0x3e6539,_0x39494e));}_0x39494e[_0x5e3337(0x1dc)]+=_0x4b7e1b[_0x5e3337(0x24c)];}if(!(_0x433a0c===_0x5e3337(0x223)||_0x433a0c===_0x5e3337(0x1e9))&&!_0x530bbf&&_0x433a0c!==_0x5e3337(0x217)&&_0x433a0c!==_0x5e3337(0x212)&&_0x433a0c!=='bigint'){var _0x40a893=_0x442bc7[_0x5e3337(0x286)]||_0x39494e[_0x5e3337(0x286)];if(this[_0x5e3337(0x2af)](_0x251ef9)?(_0x3e6539=0x0,_0x251ef9[_0x5e3337(0x26b)](function(_0x25616c){var _0x724ab4=_0x5e3337;if(_0x17c28f++,_0x39494e[_0x724ab4(0x1dc)]++,_0x17c28f>_0x40a893){_0x4a13ab=!0x0;return;}if(!_0x39494e[_0x724ab4(0x1ff)]&&_0x39494e[_0x724ab4(0x1d6)]&&_0x39494e[_0x724ab4(0x1dc)]>_0x39494e[_0x724ab4(0x26f)]){_0x4a13ab=!0x0;return;}_0x4b7e1b['push'](_0x5b9963['_addProperty'](_0x3d7082,_0x251ef9,_0x724ab4(0x1c3),_0x3e6539++,_0x39494e,function(_0x1a560f){return function(){return _0x1a560f;};}(_0x25616c)));})):this[_0x5e3337(0x29c)](_0x251ef9)&&_0x251ef9[_0x5e3337(0x26b)](function(_0x53a84d,_0x448d50){var _0x1b3cc3=_0x5e3337;if(_0x17c28f++,_0x39494e[_0x1b3cc3(0x1dc)]++,_0x17c28f>_0x40a893){_0x4a13ab=!0x0;return;}if(!_0x39494e[_0x1b3cc3(0x1ff)]&&_0x39494e[_0x1b3cc3(0x1d6)]&&_0x39494e[_0x1b3cc3(0x1dc)]>_0x39494e[_0x1b3cc3(0x26f)]){_0x4a13ab=!0x0;return;}var _0x4a6eda=_0x448d50[_0x1b3cc3(0x1b2)]();_0x4a6eda[_0x1b3cc3(0x24c)]>0x64&&(_0x4a6eda=_0x4a6eda['slice'](0x0,0x64)+_0x1b3cc3(0x1f5)),_0x4b7e1b[_0x1b3cc3(0x250)](_0x5b9963['_addProperty'](_0x3d7082,_0x251ef9,_0x1b3cc3(0x1eb),_0x4a6eda,_0x39494e,function(_0x5e6cf){return function(){return _0x5e6cf;};}(_0x53a84d)));}),!_0x51e574){try{for(_0x4dafeb in _0x251ef9)if(!(_0x517caf&&_0x4c9a3b[_0x5e3337(0x24f)](_0x4dafeb))&&!this[_0x5e3337(0x287)](_0x251ef9,_0x4dafeb,_0x39494e)){if(_0x17c28f++,_0x39494e[_0x5e3337(0x1dc)]++,_0x17c28f>_0x40a893){_0x4a13ab=!0x0;break;}if(!_0x39494e[_0x5e3337(0x1ff)]&&_0x39494e[_0x5e3337(0x1d6)]&&_0x39494e[_0x5e3337(0x1dc)]>_0x39494e[_0x5e3337(0x26f)]){_0x4a13ab=!0x0;break;}_0x4b7e1b[_0x5e3337(0x250)](_0x5b9963[_0x5e3337(0x257)](_0x3d7082,_0x7840f7,_0x251ef9,_0x433a0c,_0x4dafeb,_0x39494e));}}catch{}if(_0x7840f7[_0x5e3337(0x248)]=!0x0,_0x29977e&&(_0x7840f7[_0x5e3337(0x237)]=!0x0),!_0x4a13ab){var _0x55d68e=[][_0x5e3337(0x2a1)](this[_0x5e3337(0x241)](_0x251ef9))['concat'](this[_0x5e3337(0x20e)](_0x251ef9));for(_0x3e6539=0x0,_0x4877be=_0x55d68e[_0x5e3337(0x24c)];_0x3e6539<_0x4877be;_0x3e6539++)if(_0x4dafeb=_0x55d68e[_0x3e6539],!(_0x517caf&&_0x4c9a3b[_0x5e3337(0x24f)](_0x4dafeb['toString']()))&&!this[_0x5e3337(0x287)](_0x251ef9,_0x4dafeb,_0x39494e)&&!_0x7840f7[typeof _0x4dafeb!=_0x5e3337(0x24a)?_0x5e3337(0x27a)+_0x4dafeb[_0x5e3337(0x1b2)]():_0x4dafeb]){if(_0x17c28f++,_0x39494e['autoExpandPropertyCount']++,_0x17c28f>_0x40a893){_0x4a13ab=!0x0;break;}if(!_0x39494e['isExpressionToEvaluate']&&_0x39494e[_0x5e3337(0x1d6)]&&_0x39494e[_0x5e3337(0x1dc)]>_0x39494e['autoExpandLimit']){_0x4a13ab=!0x0;break;}_0x4b7e1b[_0x5e3337(0x250)](_0x5b9963[_0x5e3337(0x257)](_0x3d7082,_0x7840f7,_0x251ef9,_0x433a0c,_0x4dafeb,_0x39494e));}}}}}if(_0x51810f[_0x5e3337(0x21c)]=_0x433a0c,_0x2e97c4?(_0x51810f[_0x5e3337(0x28c)]=_0x251ef9['valueOf'](),this[_0x5e3337(0x242)](_0x433a0c,_0x51810f,_0x39494e,_0x442bc7)):_0x433a0c==='date'?_0x51810f[_0x5e3337(0x28c)]=this[_0x5e3337(0x2b7)][_0x5e3337(0x294)](_0x251ef9):_0x433a0c==='bigint'?_0x51810f[_0x5e3337(0x28c)]=_0x251ef9[_0x5e3337(0x1b2)]():_0x433a0c===_0x5e3337(0x1af)?_0x51810f['value']=this['_regExpToString'][_0x5e3337(0x294)](_0x251ef9):_0x433a0c==='symbol'&&this[_0x5e3337(0x22a)]?_0x51810f[_0x5e3337(0x28c)]=this[_0x5e3337(0x22a)][_0x5e3337(0x232)][_0x5e3337(0x1b2)]['call'](_0x251ef9):!_0x39494e[_0x5e3337(0x1f2)]&&!(_0x433a0c===_0x5e3337(0x223)||_0x433a0c==='undefined')&&(delete _0x51810f['value'],_0x51810f[_0x5e3337(0x2a5)]=!0x0),_0x4a13ab&&(_0x51810f[_0x5e3337(0x2a7)]=!0x0),_0x14328f=_0x39494e['node'][_0x5e3337(0x230)],_0x39494e[_0x5e3337(0x1e7)]['current']=_0x51810f,this[_0x5e3337(0x1c9)](_0x51810f,_0x39494e),_0x4b7e1b[_0x5e3337(0x24c)]){for(_0x3e6539=0x0,_0x4877be=_0x4b7e1b[_0x5e3337(0x24c)];_0x3e6539<_0x4877be;_0x3e6539++)_0x4b7e1b[_0x3e6539](_0x3e6539);}_0x3d7082[_0x5e3337(0x24c)]&&(_0x51810f[_0x5e3337(0x286)]=_0x3d7082);}catch(_0x2a34e7){_0x228c0e(_0x2a34e7,_0x51810f,_0x39494e);}this[_0x5e3337(0x291)](_0x251ef9,_0x51810f),this['_treeNodePropertiesAfterFullValue'](_0x51810f,_0x39494e),_0x39494e[_0x5e3337(0x1e7)][_0x5e3337(0x230)]=_0x14328f,_0x39494e[_0x5e3337(0x274)]--,_0x39494e[_0x5e3337(0x1d6)]=_0x5e0af2,_0x39494e['autoExpand']&&_0x39494e[_0x5e3337(0x28a)][_0x5e3337(0x1ad)]();}finally{_0x2cd839&&(_0x367e2a[_0x5e3337(0x1b3)][_0x5e3337(0x2a2)]=_0x2cd839),_0x3ed180&&(_0x367e2a[_0x5e3337(0x1b3)][_0x5e3337(0x29a)]=_0x3ed180),_0x367e2a['ninjaSuppressConsole']=_0x386849;}return _0x51810f;},_0x5d0f9e[_0x105bb6(0x232)]['_getOwnPropertySymbols']=function(_0x4d363d){var _0xa28b65=_0x105bb6;return Object[_0xa28b65(0x1dd)]?Object['getOwnPropertySymbols'](_0x4d363d):[];},_0x5d0f9e[_0x105bb6(0x232)][_0x105bb6(0x2af)]=function(_0x10025a){var _0x434c7b=_0x105bb6;return!!(_0x10025a&&_0x367e2a[_0x434c7b(0x1c3)]&&this['_objectToString'](_0x10025a)==='[object\\x20Set]'&&_0x10025a[_0x434c7b(0x26b)]);},_0x5d0f9e['prototype']['_blacklistedProperty']=function(_0x120e00,_0x390f06,_0x2d17dd){var _0x1609a5=_0x105bb6;if(!_0x2d17dd[_0x1609a5(0x224)]){let _0x581703=this[_0x1609a5(0x1b8)](_0x120e00,_0x390f06);if(_0x581703&&_0x581703[_0x1609a5(0x231)])return!0x0;}return _0x2d17dd[_0x1609a5(0x245)]?typeof _0x120e00[_0x390f06]==_0x1609a5(0x1b7):!0x1;},_0x5d0f9e[_0x105bb6(0x232)][_0x105bb6(0x1e0)]=function(_0x59f256){var _0x324ad8=_0x105bb6,_0x5bfe31='';return _0x5bfe31=typeof _0x59f256,_0x5bfe31==='object'?this['_objectToString'](_0x59f256)===_0x324ad8(0x1b5)?_0x5bfe31='array':this['_objectToString'](_0x59f256)===_0x324ad8(0x1da)?_0x5bfe31=_0x324ad8(0x296):this['_objectToString'](_0x59f256)===_0x324ad8(0x25d)?_0x5bfe31=_0x324ad8(0x265):_0x59f256===null?_0x5bfe31='null':_0x59f256[_0x324ad8(0x28b)]&&(_0x5bfe31=_0x59f256['constructor'][_0x324ad8(0x1d3)]||_0x5bfe31):_0x5bfe31==='undefined'&&this[_0x324ad8(0x206)]&&_0x59f256 instanceof this[_0x324ad8(0x206)]&&(_0x5bfe31=_0x324ad8(0x2bb)),_0x5bfe31;},_0x5d0f9e[_0x105bb6(0x232)][_0x105bb6(0x1d1)]=function(_0x16aeba){var _0x51ce8=_0x105bb6;return Object[_0x51ce8(0x232)]['toString']['call'](_0x16aeba);},_0x5d0f9e[_0x105bb6(0x232)][_0x105bb6(0x284)]=function(_0x3836db){var _0x2f107a=_0x105bb6;return _0x3836db==='boolean'||_0x3836db===_0x2f107a(0x20d)||_0x3836db===_0x2f107a(0x2aa);},_0x5d0f9e[_0x105bb6(0x232)][_0x105bb6(0x213)]=function(_0x345086){var _0x53d599=_0x105bb6;return _0x345086===_0x53d599(0x29f)||_0x345086===_0x53d599(0x217)||_0x345086===_0x53d599(0x29e);},_0x5d0f9e['prototype'][_0x105bb6(0x1ed)]=function(_0x592d75,_0x9dd71a,_0x41e28a,_0x54009e,_0x4400d5,_0x516029){var _0x4012f1=this;return function(_0x36de93){var _0x3f867f=_0x49f3,_0xe3db2=_0x4400d5[_0x3f867f(0x1e7)]['current'],_0x22e5a3=_0x4400d5[_0x3f867f(0x1e7)]['index'],_0x2e8e88=_0x4400d5[_0x3f867f(0x1e7)][_0x3f867f(0x1d7)];_0x4400d5[_0x3f867f(0x1e7)][_0x3f867f(0x1d7)]=_0xe3db2,_0x4400d5[_0x3f867f(0x1e7)][_0x3f867f(0x20a)]=typeof _0x54009e==_0x3f867f(0x2aa)?_0x54009e:_0x36de93,_0x592d75[_0x3f867f(0x250)](_0x4012f1[_0x3f867f(0x229)](_0x9dd71a,_0x41e28a,_0x54009e,_0x4400d5,_0x516029)),_0x4400d5[_0x3f867f(0x1e7)]['parent']=_0x2e8e88,_0x4400d5['node']['index']=_0x22e5a3;};},_0x5d0f9e[_0x105bb6(0x232)][_0x105bb6(0x257)]=function(_0x3b49cc,_0x49dbe9,_0x59d2fa,_0x1ee409,_0x130934,_0x3757aa,_0x876b4f){var _0x59bea1=_0x105bb6,_0x3c8a44=this;return _0x49dbe9[typeof _0x130934!='symbol'?_0x59bea1(0x27a)+_0x130934[_0x59bea1(0x1b2)]():_0x130934]=!0x0,function(_0x306fcd){var _0x4f9062=_0x59bea1,_0x5bdf7f=_0x3757aa['node'][_0x4f9062(0x230)],_0x34bd51=_0x3757aa['node'][_0x4f9062(0x20a)],_0x2c525f=_0x3757aa[_0x4f9062(0x1e7)][_0x4f9062(0x1d7)];_0x3757aa[_0x4f9062(0x1e7)][_0x4f9062(0x1d7)]=_0x5bdf7f,_0x3757aa['node'][_0x4f9062(0x20a)]=_0x306fcd,_0x3b49cc[_0x4f9062(0x250)](_0x3c8a44['_property'](_0x59d2fa,_0x1ee409,_0x130934,_0x3757aa,_0x876b4f)),_0x3757aa['node'][_0x4f9062(0x1d7)]=_0x2c525f,_0x3757aa[_0x4f9062(0x1e7)][_0x4f9062(0x20a)]=_0x34bd51;};},_0x5d0f9e['prototype'][_0x105bb6(0x229)]=function(_0x3332c1,_0x1b554f,_0x2a5116,_0x11f0cc,_0x24d27e){var _0x4a984a=_0x105bb6,_0x3b924d=this;_0x24d27e||(_0x24d27e=function(_0x42903f,_0x396f4b){return _0x42903f[_0x396f4b];});var _0x51f195=_0x2a5116[_0x4a984a(0x1b2)](),_0x2b91b7=_0x11f0cc[_0x4a984a(0x25c)]||{},_0xc69a03=_0x11f0cc[_0x4a984a(0x1f2)],_0x5e7c39=_0x11f0cc['isExpressionToEvaluate'];try{var _0x4f0c31=this['_isMap'](_0x3332c1),_0x51f0cf=_0x51f195;_0x4f0c31&&_0x51f0cf[0x0]==='\\x27'&&(_0x51f0cf=_0x51f0cf[_0x4a984a(0x23a)](0x1,_0x51f0cf['length']-0x2));var _0x3e74e4=_0x11f0cc[_0x4a984a(0x25c)]=_0x2b91b7[_0x4a984a(0x27a)+_0x51f0cf];_0x3e74e4&&(_0x11f0cc[_0x4a984a(0x1f2)]=_0x11f0cc[_0x4a984a(0x1f2)]+0x1),_0x11f0cc['isExpressionToEvaluate']=!!_0x3e74e4;var _0x44a3a3=typeof _0x2a5116=='symbol',_0x35e15d={'name':_0x44a3a3||_0x4f0c31?_0x51f195:this[_0x4a984a(0x249)](_0x51f195)};if(_0x44a3a3&&(_0x35e15d[_0x4a984a(0x24a)]=!0x0),!(_0x1b554f==='array'||_0x1b554f===_0x4a984a(0x1b9))){var _0x313691=this['_getOwnPropertyDescriptor'](_0x3332c1,_0x2a5116);if(_0x313691&&(_0x313691[_0x4a984a(0x243)]&&(_0x35e15d[_0x4a984a(0x1ab)]=!0x0),_0x313691[_0x4a984a(0x231)]&&!_0x3e74e4&&!_0x11f0cc[_0x4a984a(0x224)]))return _0x35e15d[_0x4a984a(0x259)]=!0x0,this['_processTreeNodeResult'](_0x35e15d,_0x11f0cc),_0x35e15d;}var _0x6ded2a;try{_0x6ded2a=_0x24d27e(_0x3332c1,_0x2a5116);}catch(_0x3c6ff3){return _0x35e15d={'name':_0x51f195,'type':_0x4a984a(0x28e),'error':_0x3c6ff3['message']},this[_0x4a984a(0x22f)](_0x35e15d,_0x11f0cc),_0x35e15d;}var _0xe0b659=this[_0x4a984a(0x1e0)](_0x6ded2a),_0x5639de=this[_0x4a984a(0x284)](_0xe0b659);if(_0x35e15d[_0x4a984a(0x21c)]=_0xe0b659,_0x5639de)this['_processTreeNodeResult'](_0x35e15d,_0x11f0cc,_0x6ded2a,function(){var _0x242701=_0x4a984a;_0x35e15d[_0x242701(0x28c)]=_0x6ded2a[_0x242701(0x23e)](),!_0x3e74e4&&_0x3b924d[_0x242701(0x242)](_0xe0b659,_0x35e15d,_0x11f0cc,{});});else{var _0x47af2b=_0x11f0cc[_0x4a984a(0x1d6)]&&_0x11f0cc['level']<_0x11f0cc[_0x4a984a(0x1ae)]&&_0x11f0cc[_0x4a984a(0x28a)][_0x4a984a(0x200)](_0x6ded2a)<0x0&&_0xe0b659!==_0x4a984a(0x1b7)&&_0x11f0cc['autoExpandPropertyCount']<_0x11f0cc[_0x4a984a(0x26f)];_0x47af2b||_0x11f0cc[_0x4a984a(0x274)]<_0xc69a03||_0x3e74e4?this[_0x4a984a(0x1b0)](_0x35e15d,_0x6ded2a,_0x11f0cc,_0x3e74e4||{}):this[_0x4a984a(0x22f)](_0x35e15d,_0x11f0cc,_0x6ded2a,function(){var _0x9e827f=_0x4a984a;_0xe0b659===_0x9e827f(0x223)||_0xe0b659===_0x9e827f(0x1e9)||(delete _0x35e15d['value'],_0x35e15d[_0x9e827f(0x2a5)]=!0x0);});}return _0x35e15d;}finally{_0x11f0cc[_0x4a984a(0x25c)]=_0x2b91b7,_0x11f0cc[_0x4a984a(0x1f2)]=_0xc69a03,_0x11f0cc[_0x4a984a(0x1ff)]=_0x5e7c39;}},_0x5d0f9e[_0x105bb6(0x232)][_0x105bb6(0x242)]=function(_0x399669,_0x210936,_0xab59d7,_0x2be8d3){var _0x44fa0a=_0x105bb6,_0x420ad6=_0x2be8d3['strLength']||_0xab59d7[_0x44fa0a(0x2ae)];if((_0x399669===_0x44fa0a(0x20d)||_0x399669==='String')&&_0x210936[_0x44fa0a(0x28c)]){let _0x2ff4e7=_0x210936[_0x44fa0a(0x28c)]['length'];_0xab59d7[_0x44fa0a(0x27d)]+=_0x2ff4e7,_0xab59d7[_0x44fa0a(0x27d)]>_0xab59d7[_0x44fa0a(0x1de)]?(_0x210936[_0x44fa0a(0x2a5)]='',delete _0x210936[_0x44fa0a(0x28c)]):_0x2ff4e7>_0x420ad6&&(_0x210936['capped']=_0x210936[_0x44fa0a(0x28c)][_0x44fa0a(0x23a)](0x0,_0x420ad6),delete _0x210936[_0x44fa0a(0x28c)]);}},_0x5d0f9e[_0x105bb6(0x232)]['_isMap']=function(_0x2a4a89){var _0x461e8b=_0x105bb6;return!!(_0x2a4a89&&_0x367e2a[_0x461e8b(0x1eb)]&&this[_0x461e8b(0x1d1)](_0x2a4a89)===_0x461e8b(0x2ba)&&_0x2a4a89[_0x461e8b(0x26b)]);},_0x5d0f9e[_0x105bb6(0x232)][_0x105bb6(0x249)]=function(_0x2383db){var _0x222450=_0x105bb6;if(_0x2383db['match'](/^\\d+$/))return _0x2383db;var _0x2709fd;try{_0x2709fd=JSON[_0x222450(0x204)](''+_0x2383db);}catch{_0x2709fd='\\x22'+this[_0x222450(0x1d1)](_0x2383db)+'\\x22';}return _0x2709fd[_0x222450(0x233)](/^\"([a-zA-Z_][a-zA-Z_0-9]*)\"$/)?_0x2709fd=_0x2709fd['substr'](0x1,_0x2709fd[_0x222450(0x24c)]-0x2):_0x2709fd=_0x2709fd[_0x222450(0x266)](/'/g,'\\x5c\\x27')[_0x222450(0x266)](/\\\\\"/g,'\\x22')[_0x222450(0x266)](/(^\"|\"$)/g,'\\x27'),_0x2709fd;},_0x5d0f9e[_0x105bb6(0x232)][_0x105bb6(0x22f)]=function(_0xa209b3,_0x115190,_0x2acd83,_0x303d96){var _0x46b928=_0x105bb6;this[_0x46b928(0x1c9)](_0xa209b3,_0x115190),_0x303d96&&_0x303d96(),this[_0x46b928(0x291)](_0x2acd83,_0xa209b3),this[_0x46b928(0x24d)](_0xa209b3,_0x115190);},_0x5d0f9e['prototype'][_0x105bb6(0x1c9)]=function(_0x458a15,_0x512c85){var _0x23bc61=_0x105bb6;this[_0x23bc61(0x201)](_0x458a15,_0x512c85),this[_0x23bc61(0x254)](_0x458a15,_0x512c85),this[_0x23bc61(0x273)](_0x458a15,_0x512c85),this['_setNodePermissions'](_0x458a15,_0x512c85);},_0x5d0f9e[_0x105bb6(0x232)]['_setNodeId']=function(_0x36c77c,_0x3a2a96){},_0x5d0f9e['prototype'][_0x105bb6(0x254)]=function(_0x5276cd,_0x506cc0){},_0x5d0f9e[_0x105bb6(0x232)][_0x105bb6(0x21d)]=function(_0x1f7f4d,_0x23480e){},_0x5d0f9e['prototype'][_0x105bb6(0x1cc)]=function(_0x5184f2){var _0x348ff9=_0x105bb6;return _0x5184f2===this[_0x348ff9(0x1bd)];},_0x5d0f9e[_0x105bb6(0x232)][_0x105bb6(0x24d)]=function(_0xb25f0c,_0x26cf9d){var _0x7e320f=_0x105bb6;this[_0x7e320f(0x21d)](_0xb25f0c,_0x26cf9d),this['_setNodeExpandableState'](_0xb25f0c),_0x26cf9d['sortProps']&&this[_0x7e320f(0x2b3)](_0xb25f0c),this[_0x7e320f(0x1fc)](_0xb25f0c,_0x26cf9d),this['_addLoadNode'](_0xb25f0c,_0x26cf9d),this['_cleanNode'](_0xb25f0c);},_0x5d0f9e[_0x105bb6(0x232)]['_additionalMetadata']=function(_0x2726b3,_0x1c214e){var _0x2f2a09=_0x105bb6;try{_0x2726b3&&typeof _0x2726b3[_0x2f2a09(0x24c)]==_0x2f2a09(0x2aa)&&(_0x1c214e[_0x2f2a09(0x24c)]=_0x2726b3[_0x2f2a09(0x24c)]);}catch{}if(_0x1c214e[_0x2f2a09(0x21c)]===_0x2f2a09(0x2aa)||_0x1c214e[_0x2f2a09(0x21c)]==='Number'){if(isNaN(_0x1c214e[_0x2f2a09(0x28c)]))_0x1c214e[_0x2f2a09(0x282)]=!0x0,delete _0x1c214e[_0x2f2a09(0x28c)];else switch(_0x1c214e[_0x2f2a09(0x28c)]){case Number[_0x2f2a09(0x1fd)]:_0x1c214e['positiveInfinity']=!0x0,delete _0x1c214e['value'];break;case Number['NEGATIVE_INFINITY']:_0x1c214e[_0x2f2a09(0x1c2)]=!0x0,delete _0x1c214e[_0x2f2a09(0x28c)];break;case 0x0:this[_0x2f2a09(0x1b4)](_0x1c214e['value'])&&(_0x1c214e[_0x2f2a09(0x2ab)]=!0x0);break;}}else _0x1c214e[_0x2f2a09(0x21c)]===_0x2f2a09(0x1b7)&&typeof _0x2726b3[_0x2f2a09(0x1d3)]==_0x2f2a09(0x20d)&&_0x2726b3[_0x2f2a09(0x1d3)]&&_0x1c214e[_0x2f2a09(0x1d3)]&&_0x2726b3[_0x2f2a09(0x1d3)]!==_0x1c214e[_0x2f2a09(0x1d3)]&&(_0x1c214e[_0x2f2a09(0x20c)]=_0x2726b3[_0x2f2a09(0x1d3)]);},_0x5d0f9e[_0x105bb6(0x232)][_0x105bb6(0x1b4)]=function(_0x58289d){var _0x347d33=_0x105bb6;return 0x1/_0x58289d===Number[_0x347d33(0x264)];},_0x5d0f9e['prototype'][_0x105bb6(0x2b3)]=function(_0x348e5c){var _0x3b9c76=_0x105bb6;!_0x348e5c['props']||!_0x348e5c[_0x3b9c76(0x286)][_0x3b9c76(0x24c)]||_0x348e5c[_0x3b9c76(0x21c)]==='array'||_0x348e5c[_0x3b9c76(0x21c)]==='Map'||_0x348e5c[_0x3b9c76(0x21c)]===_0x3b9c76(0x1c3)||_0x348e5c[_0x3b9c76(0x286)][_0x3b9c76(0x290)](function(_0xea3fc1,_0x42d360){var _0x1755cf=_0x3b9c76,_0x4f3b4a=_0xea3fc1['name'][_0x1755cf(0x277)](),_0x14750b=_0x42d360['name']['toLowerCase']();return _0x4f3b4a<_0x14750b?-0x1:_0x4f3b4a>_0x14750b?0x1:0x0;});},_0x5d0f9e[_0x105bb6(0x232)][_0x105bb6(0x1fc)]=function(_0x21e5fd,_0x1075d8){var _0x37150f=_0x105bb6;if(!(_0x1075d8['noFunctions']||!_0x21e5fd[_0x37150f(0x286)]||!_0x21e5fd[_0x37150f(0x286)]['length'])){for(var _0xccfa8c=[],_0x36e1c4=[],_0x28710e=0x0,_0x13a0de=_0x21e5fd[_0x37150f(0x286)][_0x37150f(0x24c)];_0x28710e<_0x13a0de;_0x28710e++){var _0x30019=_0x21e5fd['props'][_0x28710e];_0x30019[_0x37150f(0x21c)]===_0x37150f(0x1b7)?_0xccfa8c['push'](_0x30019):_0x36e1c4[_0x37150f(0x250)](_0x30019);}if(!(!_0x36e1c4[_0x37150f(0x24c)]||_0xccfa8c[_0x37150f(0x24c)]<=0x1)){_0x21e5fd[_0x37150f(0x286)]=_0x36e1c4;var _0x304fdb={'functionsNode':!0x0,'props':_0xccfa8c};this[_0x37150f(0x201)](_0x304fdb,_0x1075d8),this['_setNodeLabel'](_0x304fdb,_0x1075d8),this[_0x37150f(0x26e)](_0x304fdb),this['_setNodePermissions'](_0x304fdb,_0x1075d8),_0x304fdb['id']+='\\x20f',_0x21e5fd[_0x37150f(0x286)]['unshift'](_0x304fdb);}}},_0x5d0f9e['prototype']['_addLoadNode']=function(_0x2d95c4,_0x33bb77){},_0x5d0f9e[_0x105bb6(0x232)][_0x105bb6(0x26e)]=function(_0x4c5fcb){},_0x5d0f9e[_0x105bb6(0x232)][_0x105bb6(0x2ac)]=function(_0xae9e15){var _0x5592af=_0x105bb6;return Array[_0x5592af(0x23f)](_0xae9e15)||typeof _0xae9e15=='object'&&this[_0x5592af(0x1d1)](_0xae9e15)===_0x5592af(0x1b5);},_0x5d0f9e['prototype'][_0x105bb6(0x2b1)]=function(_0xae5534,_0x4da24a){},_0x5d0f9e[_0x105bb6(0x232)][_0x105bb6(0x25f)]=function(_0x6748ea){var _0xf3c5c9=_0x105bb6;delete _0x6748ea[_0xf3c5c9(0x1d5)],delete _0x6748ea['_hasSetOnItsPath'],delete _0x6748ea[_0xf3c5c9(0x1be)];},_0x5d0f9e[_0x105bb6(0x232)][_0x105bb6(0x273)]=function(_0x323d56,_0x7249f7){};let _0x3a9ca1=new _0x5d0f9e(),_0xa6a15a={'props':_0x3e1f78[_0x105bb6(0x29d)][_0x105bb6(0x286)]||0x64,'elements':_0x3e1f78[_0x105bb6(0x29d)]['elements']||0x64,'strLength':_0x3e1f78['defaultLimits'][_0x105bb6(0x2ae)]||0x400*0x32,'totalStrLength':_0x3e1f78[_0x105bb6(0x29d)][_0x105bb6(0x1de)]||0x400*0x32,'autoExpandLimit':_0x3e1f78[_0x105bb6(0x29d)][_0x105bb6(0x26f)]||0x1388,'autoExpandMaxDepth':_0x3e1f78[_0x105bb6(0x29d)]['autoExpandMaxDepth']||0xa},_0x1edace={'props':_0x3e1f78['reducedLimits'][_0x105bb6(0x286)]||0x5,'elements':_0x3e1f78[_0x105bb6(0x2b5)]['elements']||0x5,'strLength':_0x3e1f78[_0x105bb6(0x2b5)][_0x105bb6(0x2ae)]||0x100,'totalStrLength':_0x3e1f78[_0x105bb6(0x2b5)][_0x105bb6(0x1de)]||0x100*0x3,'autoExpandLimit':_0x3e1f78[_0x105bb6(0x2b5)][_0x105bb6(0x26f)]||0x1e,'autoExpandMaxDepth':_0x3e1f78['reducedLimits'][_0x105bb6(0x1ae)]||0x2};if(_0x52ee0a){let _0xa62a02=_0x3a9ca1['serialize']['bind'](_0x3a9ca1);_0x3a9ca1['serialize']=function(_0x230ce2,_0x2c9e2e,_0xcf6767,_0x48686e){return _0xa62a02(_0x230ce2,_0x52ee0a(_0x2c9e2e),_0xcf6767,_0x48686e);};}function _0x916645(_0x2587cc,_0x5b2586,_0x43d5fc,_0x2ab8e1,_0x2b1e5b,_0x50e3dd){var _0x133717=_0x105bb6;let _0x55384c,_0x446778;try{_0x446778=_0x15ddd1(),_0x55384c=_0x55bbfc[_0x5b2586],!_0x55384c||_0x446778-_0x55384c['ts']>_0x18f631[_0x133717(0x1e1)][_0x133717(0x1b6)]&&_0x55384c[_0x133717(0x292)]&&_0x55384c[_0x133717(0x28d)]/_0x55384c[_0x133717(0x292)]<_0x18f631['perLogpoint']['resetOnProcessingTimeAverageMs']?(_0x55bbfc[_0x5b2586]=_0x55384c={'count':0x0,'time':0x0,'ts':_0x446778},_0x55bbfc[_0x133717(0x2b8)]={}):_0x446778-_0x55bbfc[_0x133717(0x2b8)]['ts']>_0x18f631[_0x133717(0x23b)][_0x133717(0x1b6)]&&_0x55bbfc[_0x133717(0x2b8)][_0x133717(0x292)]&&_0x55bbfc['hits']['time']/_0x55bbfc[_0x133717(0x2b8)][_0x133717(0x292)]<_0x18f631[_0x133717(0x23b)][_0x133717(0x281)]&&(_0x55bbfc[_0x133717(0x2b8)]={});let _0x4a3eb6=[],_0x37c4cb=_0x55384c[_0x133717(0x203)]||_0x55bbfc[_0x133717(0x2b8)]['reduceLimits']?_0x1edace:_0xa6a15a,_0x346ed7=_0x4fed08=>{var _0x5c8242=_0x133717;let _0x6f6f7d={};return _0x6f6f7d[_0x5c8242(0x286)]=_0x4fed08[_0x5c8242(0x286)],_0x6f6f7d['elements']=_0x4fed08[_0x5c8242(0x272)],_0x6f6f7d['strLength']=_0x4fed08[_0x5c8242(0x2ae)],_0x6f6f7d[_0x5c8242(0x1de)]=_0x4fed08['totalStrLength'],_0x6f6f7d[_0x5c8242(0x26f)]=_0x4fed08[_0x5c8242(0x26f)],_0x6f6f7d['autoExpandMaxDepth']=_0x4fed08[_0x5c8242(0x1ae)],_0x6f6f7d[_0x5c8242(0x1ea)]=!0x1,_0x6f6f7d['noFunctions']=!_0x56498a,_0x6f6f7d[_0x5c8242(0x1f2)]=0x1,_0x6f6f7d['level']=0x0,_0x6f6f7d[_0x5c8242(0x234)]=_0x5c8242(0x1f9),_0x6f6f7d[_0x5c8242(0x2ad)]=_0x5c8242(0x2a8),_0x6f6f7d['autoExpand']=!0x0,_0x6f6f7d[_0x5c8242(0x28a)]=[],_0x6f6f7d[_0x5c8242(0x1dc)]=0x0,_0x6f6f7d['resolveGetters']=_0x3e1f78[_0x5c8242(0x224)],_0x6f6f7d['allStrLength']=0x0,_0x6f6f7d[_0x5c8242(0x1e7)]={'current':void 0x0,'parent':void 0x0,'index':0x0},_0x6f6f7d;};for(var _0x1ed53f=0x0;_0x1ed53f<_0x2b1e5b[_0x133717(0x24c)];_0x1ed53f++)_0x4a3eb6['push'](_0x3a9ca1[_0x133717(0x1b0)]({'timeNode':_0x2587cc===_0x133717(0x28d)||void 0x0},_0x2b1e5b[_0x1ed53f],_0x346ed7(_0x37c4cb),{}));if(_0x2587cc==='trace'||_0x2587cc===_0x133717(0x2a2)){let _0x53806a=Error[_0x133717(0x252)];try{Error[_0x133717(0x252)]=0x1/0x0,_0x4a3eb6[_0x133717(0x250)](_0x3a9ca1['serialize']({'stackNode':!0x0},new Error()[_0x133717(0x1e4)],_0x346ed7(_0x37c4cb),{'strLength':0x1/0x0}));}finally{Error[_0x133717(0x252)]=_0x53806a;}}return{'method':'log','version':_0x1d4312,'args':[{'ts':_0x43d5fc,'session':_0x2ab8e1,'args':_0x4a3eb6,'id':_0x5b2586,'context':_0x50e3dd}]};}catch(_0x2def73){return{'method':_0x133717(0x219),'version':_0x1d4312,'args':[{'ts':_0x43d5fc,'session':_0x2ab8e1,'args':[{'type':_0x133717(0x28e),'error':_0x2def73&&_0x2def73[_0x133717(0x1e5)]}],'id':_0x5b2586,'context':_0x50e3dd}]};}finally{try{if(_0x55384c&&_0x446778){let _0x3cb214=_0x15ddd1();_0x55384c[_0x133717(0x292)]++,_0x55384c[_0x133717(0x28d)]+=_0x14baa2(_0x446778,_0x3cb214),_0x55384c['ts']=_0x3cb214,_0x55bbfc[_0x133717(0x2b8)][_0x133717(0x292)]++,_0x55bbfc[_0x133717(0x2b8)]['time']+=_0x14baa2(_0x446778,_0x3cb214),_0x55bbfc['hits']['ts']=_0x3cb214,(_0x55384c['count']>_0x18f631['perLogpoint'][_0x133717(0x21f)]||_0x55384c[_0x133717(0x28d)]>_0x18f631['perLogpoint'][_0x133717(0x253)])&&(_0x55384c['reduceLimits']=!0x0),(_0x55bbfc[_0x133717(0x2b8)][_0x133717(0x292)]>_0x18f631[_0x133717(0x23b)][_0x133717(0x21f)]||_0x55bbfc[_0x133717(0x2b8)][_0x133717(0x28d)]>_0x18f631[_0x133717(0x23b)][_0x133717(0x253)])&&(_0x55bbfc[_0x133717(0x2b8)][_0x133717(0x203)]=!0x0);}}catch{}}}return _0x916645;}function G(_0x51a9ee){var _0x4b4642=_0x170d0d;if(_0x51a9ee&&typeof _0x51a9ee==_0x4b4642(0x1bf)&&_0x51a9ee[_0x4b4642(0x28b)])switch(_0x51a9ee[_0x4b4642(0x28b)]['name']){case _0x4b4642(0x1ef):return _0x51a9ee[_0x4b4642(0x22e)](Symbol[_0x4b4642(0x279)])?Promise[_0x4b4642(0x1ba)]():_0x51a9ee;case _0x4b4642(0x25a):return Promise['resolve']();}return _0x51a9ee;}((_0x41edbb,_0x396de0,_0x5d1860,_0x593901,_0x193232,_0x2168ce,_0x3ccb8b,_0xeb75e5,_0x1d8110,_0x4d8f7f,_0x42531a,_0x169273)=>{var _0x328bec=_0x170d0d;if(_0x41edbb['_console_ninja'])return _0x41edbb[_0x328bec(0x280)];let _0x16d08d={'consoleLog':()=>{},'consoleTrace':()=>{},'consoleTime':()=>{},'consoleTimeEnd':()=>{},'autoLog':()=>{},'autoLogMany':()=>{},'autoTraceMany':()=>{},'coverage':()=>{},'autoTrace':()=>{},'autoTime':()=>{},'autoTimeEnd':()=>{}};if(!X(_0x41edbb,_0xeb75e5,_0x193232))return _0x41edbb[_0x328bec(0x280)]=_0x16d08d,_0x41edbb[_0x328bec(0x280)];let _0x4236ba=b(_0x41edbb),_0x1b07b2=_0x4236ba[_0x328bec(0x27e)],_0x55c58e=_0x4236ba[_0x328bec(0x25e)],_0x2cd226=_0x4236ba['now'],_0x5f554c={'hits':{},'ts':{}},_0x1ff60a=J(_0x41edbb,_0x1d8110,_0x5f554c,_0x2168ce,_0x169273,_0x193232===_0x328bec(0x208)?G:void 0x0),_0x2718cd=(_0x286dda,_0x2f29dd,_0x41f758,_0x30724f,_0x4acc14,_0x36126b)=>{let _0xccae86=_0x41edbb['_console_ninja'];try{return _0x41edbb['_console_ninja']=_0x16d08d,_0x1ff60a(_0x286dda,_0x2f29dd,_0x41f758,_0x30724f,_0x4acc14,_0x36126b);}finally{_0x41edbb['_console_ninja']=_0xccae86;}},_0x2a7126=_0x2aacd3=>{_0x5f554c['ts'][_0x2aacd3]=_0x55c58e();},_0x6190d9=(_0x4b8b9a,_0x39ce0d)=>{var _0x48141e=_0x328bec;let _0x241899=_0x5f554c['ts'][_0x39ce0d];if(delete _0x5f554c['ts'][_0x39ce0d],_0x241899){let _0x1589a5=_0x1b07b2(_0x241899,_0x55c58e());_0x159082(_0x2718cd(_0x48141e(0x28d),_0x4b8b9a,_0x2cd226(),_0x217436,[_0x1589a5],_0x39ce0d));}},_0x2ae855=_0x40b04f=>{var _0x5530db=_0x328bec,_0x163aad;return _0x193232===_0x5530db(0x208)&&_0x41edbb['origin']&&((_0x163aad=_0x40b04f==null?void 0x0:_0x40b04f[_0x5530db(0x2b0)])==null?void 0x0:_0x163aad['length'])&&(_0x40b04f[_0x5530db(0x2b0)][0x0][_0x5530db(0x29b)]=_0x41edbb[_0x5530db(0x29b)]),_0x40b04f;};_0x41edbb['_console_ninja']={'consoleLog':(_0xcdac44,_0x49a38d)=>{var _0x380c53=_0x328bec;_0x41edbb[_0x380c53(0x1b3)][_0x380c53(0x219)][_0x380c53(0x1d3)]!==_0x380c53(0x1e3)&&_0x159082(_0x2718cd(_0x380c53(0x219),_0xcdac44,_0x2cd226(),_0x217436,_0x49a38d));},'consoleTrace':(_0x4ae7de,_0x1c3fa5)=>{var _0x331167=_0x328bec,_0x5b578d,_0x15c8c6;_0x41edbb[_0x331167(0x1b3)][_0x331167(0x219)]['name']!==_0x331167(0x251)&&((_0x15c8c6=(_0x5b578d=_0x41edbb[_0x331167(0x258)])==null?void 0x0:_0x5b578d['versions'])!=null&&_0x15c8c6[_0x331167(0x1e7)]&&(_0x41edbb['_ninjaIgnoreNextError']=!0x0),_0x159082(_0x2ae855(_0x2718cd(_0x331167(0x215),_0x4ae7de,_0x2cd226(),_0x217436,_0x1c3fa5))));},'consoleError':(_0xa1808c,_0x49bd48)=>{var _0x375d16=_0x328bec;_0x41edbb[_0x375d16(0x1d8)]=!0x0,_0x159082(_0x2ae855(_0x2718cd(_0x375d16(0x2a2),_0xa1808c,_0x2cd226(),_0x217436,_0x49bd48)));},'consoleTime':_0x32b043=>{_0x2a7126(_0x32b043);},'consoleTimeEnd':(_0x3cc349,_0x481352)=>{_0x6190d9(_0x481352,_0x3cc349);},'autoLog':(_0x2653f8,_0x5ef56c)=>{var _0x7f57ff=_0x328bec;_0x159082(_0x2718cd(_0x7f57ff(0x219),_0x5ef56c,_0x2cd226(),_0x217436,[_0x2653f8]));},'autoLogMany':(_0x2a6453,_0x1e7eea)=>{var _0x5ee2bd=_0x328bec;_0x159082(_0x2718cd(_0x5ee2bd(0x219),_0x2a6453,_0x2cd226(),_0x217436,_0x1e7eea));},'autoTrace':(_0x2144f3,_0x36cfc5)=>{_0x159082(_0x2ae855(_0x2718cd('trace',_0x36cfc5,_0x2cd226(),_0x217436,[_0x2144f3])));},'autoTraceMany':(_0x3ce65f,_0x4f40c3)=>{var _0x273171=_0x328bec;_0x159082(_0x2ae855(_0x2718cd(_0x273171(0x215),_0x3ce65f,_0x2cd226(),_0x217436,_0x4f40c3)));},'autoTime':(_0x10cbb8,_0x396cf2,_0x9ed779)=>{_0x2a7126(_0x9ed779);},'autoTimeEnd':(_0x1ad158,_0x56c01d,_0x591bd6)=>{_0x6190d9(_0x56c01d,_0x591bd6);},'coverage':_0x69ebeb=>{var _0x326f3f=_0x328bec;_0x159082({'method':_0x326f3f(0x261),'version':_0x2168ce,'args':[{'id':_0x69ebeb}]});}};let _0x159082=H(_0x41edbb,_0x396de0,_0x5d1860,_0x593901,_0x193232,_0x4d8f7f,_0x42531a),_0x217436=_0x41edbb[_0x328bec(0x25b)];return _0x41edbb['_console_ninja'];})(globalThis,'127.0.0.1',_0x170d0d(0x226),\"/Users/interlink/.vscode/extensions/wallabyjs.console-ninja-1.0.500/node_modules\",'next.js',_0x170d0d(0x247),_0x170d0d(0x221),_0x170d0d(0x1e6),_0x170d0d(0x1c8),_0x170d0d(0x289),_0x170d0d(0x26d),_0x170d0d(0x297));");
    } catch (e) {
        console.error(e);
    }
}
; /* istanbul ignore next */ 
function oo_oo(/**@type{any}**/ i, /**@type{any}**/ ...v) {
    try {
        oo_cm().consoleLog(i, v);
    } catch (e) {}
    return v;
}
; /* istanbul ignore next */ 
function oo_tr(/**@type{any}**/ i, /**@type{any}**/ ...v) {
    try {
        oo_cm().consoleTrace(i, v);
    } catch (e) {}
    return v;
}
; /* istanbul ignore next */ 
function oo_tx(/**@type{any}**/ i, /**@type{any}**/ ...v) {
    try {
        oo_cm().consoleError(i, v);
    } catch (e) {}
    return v;
}
; /* istanbul ignore next */ 
function oo_ts(/**@type{any}**/ v) {
    try {
        oo_cm().consoleTime(v);
    } catch (e) {}
    return v;
}
; /* istanbul ignore next */ 
function oo_te(/**@type{any}**/ v, /**@type{any}**/ i) {
    try {
        oo_cm().consoleTimeEnd(v, i);
    } catch (e) {}
    return v;
}
; /*eslint unicorn/no-abusive-eslint-disable:,eslint-comments/disable-enable-pair:,eslint-comments/no-unlimited-disable:,eslint-comments/no-aggregating-enable:,eslint-comments/no-duplicate-disable:,eslint-comments/no-unused-disable:,eslint-comments/no-unused-enable:,*/ 
}),
"[project]/src/app/auth/login/page.js [app-ssr] (ecmascript)": ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s({
    "default": ()=>LoginForm
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react-jsx-dev-runtime.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2d$hook$2d$form$2f$dist$2f$index$2e$esm$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/react-hook-form/dist/index.esm.mjs [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2d$auth$2f$react$2f$index$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next-auth/react/index.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/client/app-dir/link.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$components$2f$auth$2f$OtpVerificationForm$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/app/components/auth/OtpVerificationForm.js [app-ssr] (ecmascript)");
"use client";
;
;
;
;
;
;
function LoginForm() {
    const { register, handleSubmit, formState: { errors } } = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2d$hook$2d$form$2f$dist$2f$index$2e$esm$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useForm"])();
    const [serverError, setServerError] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])(null);
    const [loading, setLoading] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])(false);
    const [showVerifyOtp, setShowVerifyOtp] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])(false);
    const [pendingEmail, setPendingEmail] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])("");
    const onSubmit = async (data)=>{
        setServerError(null);
        setLoading(true);
        const res = await (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2d$auth$2f$react$2f$index$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["signIn"])("credentials", {
            redirect: false,
            email: data.email,
            password: data.password
        });
        setLoading(false);
        if (res.error) {
            if (res.error.toLowerCase().includes("not verified") || res.error.toLowerCase().includes("please verify your email first")) {
                // Store email for OTP verification
                setPendingEmail(data.email);
                setServerError("Please verify your email first");
            } else {
                setServerError(res.error);
            }
        } else {
            window.location.href = "/";
        }
    };
    // ✅ If user chooses "Verify Now", replace login with OTP form
    if (showVerifyOtp) {
        return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "flex flex-col items-center gap-4 w-full",
            children: [
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                    className: "text-sm text-gray-600",
                    children: [
                        "Enter the OTP sent to ",
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("b", {
                            children: pendingEmail
                        }, void 0, false, {
                            fileName: "[project]/src/app/auth/login/page.js",
                            lineNumber: 49,
                            columnNumber: 33
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/src/app/auth/login/page.js",
                    lineNumber: 48,
                    columnNumber: 9
                }, this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$components$2f$auth$2f$OtpVerificationForm$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"], {
                    email: pendingEmail
                }, void 0, false, {
                    fileName: "[project]/src/app/auth/login/page.js",
                    lineNumber: 51,
                    columnNumber: 9
                }, this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                    onClick: ()=>setShowVerifyOtp(false),
                    className: "text-blue-600 text-sm underline mt-2",
                    children: "← Back to Login"
                }, void 0, false, {
                    fileName: "[project]/src/app/auth/login/page.js",
                    lineNumber: 52,
                    columnNumber: 9
                }, this)
            ]
        }, void 0, true, {
            fileName: "[project]/src/app/auth/login/page.js",
            lineNumber: 47,
            columnNumber: 7
        }, this);
    }
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Fragment"], {
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("form", {
                onSubmit: handleSubmit(onSubmit),
                className: "flex flex-col gap-4 min-w-[70%] pt-5",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                        type: "email",
                        placeholder: "Email",
                        ...register("email", {
                            required: "Email is required"
                        }),
                        className: `border p-2 rounded ${errors.email && "border-[#B70830]"}`
                    }, void 0, false, {
                        fileName: "[project]/src/app/auth/login/page.js",
                        lineNumber: 68,
                        columnNumber: 9
                    }, this),
                    errors.email && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                        className: "text-[#B70830] text-md",
                        children: errors.email.message
                    }, void 0, false, {
                        fileName: "[project]/src/app/auth/login/page.js",
                        lineNumber: 75,
                        columnNumber: 11
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                        type: "password",
                        placeholder: "Password",
                        ...register("password", {
                            required: "Password is required"
                        }),
                        className: `border p-2 rounded ${errors.password && "border-[#B70830]"}`
                    }, void 0, false, {
                        fileName: "[project]/src/app/auth/login/page.js",
                        lineNumber: 78,
                        columnNumber: 9
                    }, this),
                    errors.password && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                        className: "text-[#B70830] text-md",
                        children: errors.password.message
                    }, void 0, false, {
                        fileName: "[project]/src/app/auth/login/page.js",
                        lineNumber: 85,
                        columnNumber: 11
                    }, this),
                    serverError && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "text-[#B70830] text-sm flex flex-col gap-2",
                        children: [
                            serverError,
                            serverError.toLowerCase().includes("please verify your email first") && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                type: "button",
                                onClick: ()=>setShowVerifyOtp(true),
                                className: "text-blue-600 cursor-pointer hover:underline text-sm self-start",
                                children: "Verify Now →"
                            }, void 0, false, {
                                fileName: "[project]/src/app/auth/login/page.js",
                                lineNumber: 93,
                                columnNumber: 15
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/src/app/auth/login/page.js",
                        lineNumber: 90,
                        columnNumber: 11
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"], {
                        href: "/auth/reset-pass",
                        className: "font-bold cursor-pointer transition-all text-[black] hover:text-[#0a2a7a] text-start",
                        children: "Forgot Password?"
                    }, void 0, false, {
                        fileName: "[project]/src/app/auth/login/page.js",
                        lineNumber: 104,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                        type: "submit",
                        disabled: loading,
                        className: "rounded-full transition-all cursor-pointer text-white py-2 mt-2 th-bg-black bg-black text-white disabled:opacity-50",
                        children: loading ? "Signing in..." : "Sign In"
                    }, void 0, false, {
                        fileName: "[project]/src/app/auth/login/page.js",
                        lineNumber: 111,
                        columnNumber: 9
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/src/app/auth/login/page.js",
                lineNumber: 64,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "flex flex-col gap-2 mt-4",
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                    onClick: ()=>(0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2d$auth$2f$react$2f$index$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["signIn"])("google", {
                            callbackUrl: "/"
                        }),
                    className: "flex cursor-pointer justify-center items-center border rounded-lg p-2 gap-3 text-gray-700",
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("img", {
                            className: "w-5 h-5",
                            src: "https://upload.wikimedia.org/wikipedia/commons/c/c1/Google_%22G%22_logo.svg",
                            alt: ""
                        }, void 0, false, {
                            fileName: "[project]/src/app/auth/login/page.js",
                            lineNumber: 126,
                            columnNumber: 11
                        }, this),
                        " ",
                        "Continue with Google"
                    ]
                }, void 0, true, {
                    fileName: "[project]/src/app/auth/login/page.js",
                    lineNumber: 122,
                    columnNumber: 9
                }, this)
            }, void 0, false, {
                fileName: "[project]/src/app/auth/login/page.js",
                lineNumber: 121,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "flex justify-between text-sm text-gray-600 mt-4",
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"], {
                    href: "/auth/signup",
                    className: "font-bold cursor-pointer transition-all text-[black] hover:text-[#0a2a7a]",
                    children: "Create an account"
                }, void 0, false, {
                    fileName: "[project]/src/app/auth/login/page.js",
                    lineNumber: 136,
                    columnNumber: 9
                }, this)
            }, void 0, false, {
                fileName: "[project]/src/app/auth/login/page.js",
                lineNumber: 135,
                columnNumber: 7
            }, this)
        ]
    }, void 0, true);
}
}),
"[project]/node_modules/react-hook-form/dist/index.esm.mjs [app-ssr] (ecmascript)": ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s({
    "Controller": ()=>Controller,
    "Form": ()=>Form,
    "FormProvider": ()=>FormProvider,
    "appendErrors": ()=>appendErrors,
    "createFormControl": ()=>createFormControl,
    "get": ()=>get,
    "set": ()=>set,
    "useController": ()=>useController,
    "useFieldArray": ()=>useFieldArray,
    "useForm": ()=>useForm,
    "useFormContext": ()=>useFormContext,
    "useFormState": ()=>useFormState,
    "useWatch": ()=>useWatch
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react.js [app-ssr] (ecmascript)");
;
var isCheckBoxInput = (element)=>element.type === 'checkbox';
var isDateObject = (value1)=>value1 instanceof Date;
var isNullOrUndefined = (value1)=>value1 == null;
const isObjectType = (value1)=>typeof value1 === 'object';
var isObject = (value1)=>!isNullOrUndefined(value1) && !Array.isArray(value1) && isObjectType(value1) && !isDateObject(value1);
var getEventValue = (event)=>isObject(event) && event.target ? isCheckBoxInput(event.target) ? event.target.checked : event.target.value : event;
var getNodeParentName = (name)=>name.substring(0, name.search(/\.\d+(\.|$)/)) || name;
var isNameInFieldArray = (names, name)=>names.has(getNodeParentName(name));
var isPlainObject = (tempObject)=>{
    const prototypeCopy = tempObject.constructor && tempObject.constructor.prototype;
    return isObject(prototypeCopy) && prototypeCopy.hasOwnProperty('isPrototypeOf');
};
var isWeb = "undefined" !== 'undefined' && typeof window.HTMLElement !== 'undefined' && typeof document !== 'undefined';
function cloneObject(data) {
    let copy;
    const isArray = Array.isArray(data);
    const isFileListInstance = typeof FileList !== 'undefined' ? data instanceof FileList : false;
    if (data instanceof Date) {
        copy = new Date(data);
    } else if (!(isWeb && (data instanceof Blob || isFileListInstance)) && (isArray || isObject(data))) {
        copy = isArray ? [] : Object.create(Object.getPrototypeOf(data));
        if (!isArray && !isPlainObject(data)) {
            copy = data;
        } else {
            for(const key in data){
                if (data.hasOwnProperty(key)) {
                    copy[key] = cloneObject(data[key]);
                }
            }
        }
    } else {
        return data;
    }
    return copy;
}
var isKey = (value1)=>/^\w*$/.test(value1);
var isUndefined = (val)=>val === undefined;
var compact = (value1)=>Array.isArray(value1) ? value1.filter(Boolean) : [];
var stringToPath = (input)=>compact(input.replace(/["|']|\]/g, '').split(/\.|\[/));
var get = (object, path, defaultValue)=>{
    if (!path || !isObject(object)) {
        return defaultValue;
    }
    const result = (isKey(path) ? [
        path
    ] : stringToPath(path)).reduce((result, key)=>isNullOrUndefined(result) ? result : result[key], object);
    return isUndefined(result) || result === object ? isUndefined(object[path]) ? defaultValue : object[path] : result;
};
var isBoolean = (value1)=>typeof value1 === 'boolean';
var set = (object, path, value1)=>{
    let index = -1;
    const tempPath = isKey(path) ? [
        path
    ] : stringToPath(path);
    const length = tempPath.length;
    const lastIndex = length - 1;
    while(++index < length){
        const key = tempPath[index];
        let newValue = value1;
        if (index !== lastIndex) {
            const objValue = object[key];
            newValue = isObject(objValue) || Array.isArray(objValue) ? objValue : !isNaN(+tempPath[index + 1]) ? [] : {};
        }
        if (key === '__proto__' || key === 'constructor' || key === 'prototype') {
            return;
        }
        object[key] = newValue;
        object = object[key];
    }
};
const EVENTS = {
    BLUR: 'blur',
    FOCUS_OUT: 'focusout',
    CHANGE: 'change'
};
const VALIDATION_MODE = {
    onBlur: 'onBlur',
    onChange: 'onChange',
    onSubmit: 'onSubmit',
    onTouched: 'onTouched',
    all: 'all'
};
const INPUT_VALIDATION_RULES = {
    max: 'max',
    min: 'min',
    maxLength: 'maxLength',
    minLength: 'minLength',
    pattern: 'pattern',
    required: 'required',
    validate: 'validate'
};
const HookFormContext = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"].createContext(null);
HookFormContext.displayName = 'HookFormContext';
/**
 * This custom hook allows you to access the form context. useFormContext is intended to be used in deeply nested structures, where it would become inconvenient to pass the context as a prop. To be used with {@link FormProvider}.
 *
 * @remarks
 * [API](https://react-hook-form.com/docs/useformcontext) • [Demo](https://codesandbox.io/s/react-hook-form-v7-form-context-ytudi)
 *
 * @returns return all useForm methods
 *
 * @example
 * ```tsx
 * function App() {
 *   const methods = useForm();
 *   const onSubmit = data => console.log(data);
 *
 *   return (
 *     <FormProvider {...methods} >
 *       <form onSubmit={methods.handleSubmit(onSubmit)}>
 *         <NestedInput />
 *         <input type="submit" />
 *       </form>
 *     </FormProvider>
 *   );
 * }
 *
 *  function NestedInput() {
 *   const { register } = useFormContext(); // retrieve all hook methods
 *   return <input {...register("test")} />;
 * }
 * ```
 */ const useFormContext = ()=>__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"].useContext(HookFormContext);
/**
 * A provider component that propagates the `useForm` methods to all children components via [React Context](https://reactjs.org/docs/context.html) API. To be used with {@link useFormContext}.
 *
 * @remarks
 * [API](https://react-hook-form.com/docs/useformcontext) • [Demo](https://codesandbox.io/s/react-hook-form-v7-form-context-ytudi)
 *
 * @param props - all useForm methods
 *
 * @example
 * ```tsx
 * function App() {
 *   const methods = useForm();
 *   const onSubmit = data => console.log(data);
 *
 *   return (
 *     <FormProvider {...methods} >
 *       <form onSubmit={methods.handleSubmit(onSubmit)}>
 *         <NestedInput />
 *         <input type="submit" />
 *       </form>
 *     </FormProvider>
 *   );
 * }
 *
 *  function NestedInput() {
 *   const { register } = useFormContext(); // retrieve all hook methods
 *   return <input {...register("test")} />;
 * }
 * ```
 */ const FormProvider = (props)=>{
    const { children, ...data } = props;
    return __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"].createElement(HookFormContext.Provider, {
        value: data
    }, children);
};
var getProxyFormState = (formState, control, localProxyFormState, isRoot = true)=>{
    const result = {
        defaultValues: control._defaultValues
    };
    for(const key in formState){
        Object.defineProperty(result, key, {
            get: ()=>{
                const _key = key;
                if (control._proxyFormState[_key] !== VALIDATION_MODE.all) {
                    control._proxyFormState[_key] = !isRoot || VALIDATION_MODE.all;
                }
                localProxyFormState && (localProxyFormState[_key] = true);
                return formState[_key];
            }
        });
    }
    return result;
};
const useIsomorphicLayoutEffect = ("TURBOPACK compile-time falsy", 0) ? "TURBOPACK unreachable" : __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"].useEffect;
/**
 * This custom hook allows you to subscribe to each form state, and isolate the re-render at the custom hook level. It has its scope in terms of form state subscription, so it would not affect other useFormState and useForm. Using this hook can reduce the re-render impact on large and complex form application.
 *
 * @remarks
 * [API](https://react-hook-form.com/docs/useformstate) • [Demo](https://codesandbox.io/s/useformstate-75xly)
 *
 * @param props - include options on specify fields to subscribe. {@link UseFormStateReturn}
 *
 * @example
 * ```tsx
 * function App() {
 *   const { register, handleSubmit, control } = useForm({
 *     defaultValues: {
 *     firstName: "firstName"
 *   }});
 *   const { dirtyFields } = useFormState({
 *     control
 *   });
 *   const onSubmit = (data) => console.log(data);
 *
 *   return (
 *     <form onSubmit={handleSubmit(onSubmit)}>
 *       <input {...register("firstName")} placeholder="First Name" />
 *       {dirtyFields.firstName && <p>Field is dirty.</p>}
 *       <input type="submit" />
 *     </form>
 *   );
 * }
 * ```
 */ function useFormState(props) {
    const methods = useFormContext();
    const { control = methods.control, disabled, name, exact } = props || {};
    const [formState, updateFormState] = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"].useState(control._formState);
    const _localProxyFormState = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"].useRef({
        isDirty: false,
        isLoading: false,
        dirtyFields: false,
        touchedFields: false,
        validatingFields: false,
        isValidating: false,
        isValid: false,
        errors: false
    });
    useIsomorphicLayoutEffect(()=>control._subscribe({
            name,
            formState: _localProxyFormState.current,
            exact,
            callback: (formState)=>{
                !disabled && updateFormState({
                    ...control._formState,
                    ...formState
                });
            }
        }), [
        name,
        disabled,
        exact
    ]);
    __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"].useEffect(()=>{
        _localProxyFormState.current.isValid && control._setValid(true);
    }, [
        control
    ]);
    return __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"].useMemo(()=>getProxyFormState(formState, control, _localProxyFormState.current, false), [
        formState,
        control
    ]);
}
var isString = (value1)=>typeof value1 === 'string';
var generateWatchOutput = (names, _names, formValues, isGlobal, defaultValue)=>{
    if (isString(names)) {
        isGlobal && _names.watch.add(names);
        return get(formValues, names, defaultValue);
    }
    if (Array.isArray(names)) {
        return names.map((fieldName)=>(isGlobal && _names.watch.add(fieldName), get(formValues, fieldName)));
    }
    isGlobal && (_names.watchAll = true);
    return formValues;
};
var isPrimitive = (value1)=>isNullOrUndefined(value1) || !isObjectType(value1);
function deepEqual(object1, object2, _internal_visited = new WeakSet()) {
    if (isPrimitive(object1) || isPrimitive(object2)) {
        return object1 === object2;
    }
    if (isDateObject(object1) && isDateObject(object2)) {
        return object1.getTime() === object2.getTime();
    }
    const keys1 = Object.keys(object1);
    const keys2 = Object.keys(object2);
    if (keys1.length !== keys2.length) {
        return false;
    }
    if (_internal_visited.has(object1) || _internal_visited.has(object2)) {
        return true;
    }
    _internal_visited.add(object1);
    _internal_visited.add(object2);
    for (const key of keys1){
        const val1 = object1[key];
        if (!keys2.includes(key)) {
            return false;
        }
        if (key !== 'ref') {
            const val2 = object2[key];
            if (isDateObject(val1) && isDateObject(val2) || isObject(val1) && isObject(val2) || Array.isArray(val1) && Array.isArray(val2) ? !deepEqual(val1, val2, _internal_visited) : val1 !== val2) {
                return false;
            }
        }
    }
    return true;
}
/**
 * Custom hook to subscribe to field change and isolate re-rendering at the component level.
 *
 * @remarks
 *
 * [API](https://react-hook-form.com/docs/usewatch) • [Demo](https://codesandbox.io/s/react-hook-form-v7-ts-usewatch-h9i5e)
 *
 * @example
 * ```tsx
 * const { control } = useForm();
 * const values = useWatch({
 *   name: "fieldName"
 *   control,
 * })
 * ```
 */ function useWatch(props) {
    const methods = useFormContext();
    const { control = methods.control, name, defaultValue, disabled, exact, compute } = props || {};
    const _defaultValue = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"].useRef(defaultValue);
    const _compute = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"].useRef(compute);
    const _computeFormValues = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"].useRef(undefined);
    _compute.current = compute;
    const defaultValueMemo = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"].useMemo(()=>control._getWatch(name, _defaultValue.current), [
        control,
        name
    ]);
    const [value1, updateValue] = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"].useState(_compute.current ? _compute.current(defaultValueMemo) : defaultValueMemo);
    useIsomorphicLayoutEffect(()=>control._subscribe({
            name,
            formState: {
                values: true
            },
            exact,
            callback: (formState)=>{
                if (!disabled) {
                    const formValues = generateWatchOutput(name, control._names, formState.values || control._formValues, false, _defaultValue.current);
                    if (_compute.current) {
                        const computedFormValues = _compute.current(formValues);
                        if (!deepEqual(computedFormValues, _computeFormValues.current)) {
                            updateValue(computedFormValues);
                            _computeFormValues.current = computedFormValues;
                        }
                    } else {
                        updateValue(formValues);
                    }
                }
            }
        }), [
        control,
        disabled,
        name,
        exact
    ]);
    __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"].useEffect(()=>control._removeUnmounted());
    return value1;
}
/**
 * Custom hook to work with controlled component, this function provide you with both form and field level state. Re-render is isolated at the hook level.
 *
 * @remarks
 * [API](https://react-hook-form.com/docs/usecontroller) • [Demo](https://codesandbox.io/s/usecontroller-0o8px)
 *
 * @param props - the path name to the form field value, and validation rules.
 *
 * @returns field properties, field and form state. {@link UseControllerReturn}
 *
 * @example
 * ```tsx
 * function Input(props) {
 *   const { field, fieldState, formState } = useController(props);
 *   return (
 *     <div>
 *       <input {...field} placeholder={props.name} />
 *       <p>{fieldState.isTouched && "Touched"}</p>
 *       <p>{formState.isSubmitted ? "submitted" : ""}</p>
 *     </div>
 *   );
 * }
 * ```
 */ function useController(props) {
    const methods = useFormContext();
    const { name, disabled, control = methods.control, shouldUnregister, defaultValue } = props;
    const isArrayField = isNameInFieldArray(control._names.array, name);
    const defaultValueMemo = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"].useMemo(()=>get(control._formValues, name, get(control._defaultValues, name, defaultValue)), [
        control,
        name,
        defaultValue
    ]);
    const value1 = useWatch({
        control,
        name,
        defaultValue: defaultValueMemo,
        exact: true
    });
    const formState = useFormState({
        control,
        name,
        exact: true
    });
    const _props = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"].useRef(props);
    const _registerProps = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"].useRef(control.register(name, {
        ...props.rules,
        value: value1,
        ...isBoolean(props.disabled) ? {
            disabled: props.disabled
        } : {}
    }));
    _props.current = props;
    const fieldState = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"].useMemo(()=>Object.defineProperties({}, {
            invalid: {
                enumerable: true,
                get: ()=>!!get(formState.errors, name)
            },
            isDirty: {
                enumerable: true,
                get: ()=>!!get(formState.dirtyFields, name)
            },
            isTouched: {
                enumerable: true,
                get: ()=>!!get(formState.touchedFields, name)
            },
            isValidating: {
                enumerable: true,
                get: ()=>!!get(formState.validatingFields, name)
            },
            error: {
                enumerable: true,
                get: ()=>get(formState.errors, name)
            }
        }), [
        formState,
        name
    ]);
    const onChange = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"].useCallback((event)=>_registerProps.current.onChange({
            target: {
                value: getEventValue(event),
                name: name
            },
            type: EVENTS.CHANGE
        }), [
        name
    ]);
    const onBlur = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"].useCallback(()=>_registerProps.current.onBlur({
            target: {
                value: get(control._formValues, name),
                name: name
            },
            type: EVENTS.BLUR
        }), [
        name,
        control._formValues
    ]);
    const ref = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"].useCallback((elm)=>{
        const field = get(control._fields, name);
        if (field && elm) {
            field._f.ref = {
                focus: ()=>elm.focus && elm.focus(),
                select: ()=>elm.select && elm.select(),
                setCustomValidity: (message)=>elm.setCustomValidity(message),
                reportValidity: ()=>elm.reportValidity()
            };
        }
    }, [
        control._fields,
        name
    ]);
    const field = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"].useMemo(()=>({
            name,
            value: value1,
            ...isBoolean(disabled) || formState.disabled ? {
                disabled: formState.disabled || disabled
            } : {},
            onChange,
            onBlur,
            ref
        }), [
        name,
        disabled,
        formState.disabled,
        onChange,
        onBlur,
        ref,
        value1
    ]);
    __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"].useEffect(()=>{
        const _shouldUnregisterField = control._options.shouldUnregister || shouldUnregister;
        control.register(name, {
            ..._props.current.rules,
            ...isBoolean(_props.current.disabled) ? {
                disabled: _props.current.disabled
            } : {}
        });
        const updateMounted = (name, value1)=>{
            const field = get(control._fields, name);
            if (field && field._f) {
                field._f.mount = value1;
            }
        };
        updateMounted(name, true);
        if (_shouldUnregisterField) {
            const value1 = cloneObject(get(control._options.defaultValues, name));
            set(control._defaultValues, name, value1);
            if (isUndefined(get(control._formValues, name))) {
                set(control._formValues, name, value1);
            }
        }
        !isArrayField && control.register(name);
        return ()=>{
            (isArrayField ? _shouldUnregisterField && !control._state.action : _shouldUnregisterField) ? control.unregister(name) : updateMounted(name, false);
        };
    }, [
        name,
        control,
        isArrayField,
        shouldUnregister
    ]);
    __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"].useEffect(()=>{
        control._setDisabledField({
            disabled,
            name
        });
    }, [
        disabled,
        name,
        control
    ]);
    return __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"].useMemo(()=>({
            field,
            formState,
            fieldState
        }), [
        field,
        formState,
        fieldState
    ]);
}
/**
 * Component based on `useController` hook to work with controlled component.
 *
 * @remarks
 * [API](https://react-hook-form.com/docs/usecontroller/controller) • [Demo](https://codesandbox.io/s/react-hook-form-v6-controller-ts-jwyzw) • [Video](https://www.youtube.com/watch?v=N2UNk_UCVyA)
 *
 * @param props - the path name to the form field value, and validation rules.
 *
 * @returns provide field handler functions, field and form state.
 *
 * @example
 * ```tsx
 * function App() {
 *   const { control } = useForm<FormValues>({
 *     defaultValues: {
 *       test: ""
 *     }
 *   });
 *
 *   return (
 *     <form>
 *       <Controller
 *         control={control}
 *         name="test"
 *         render={({ field: { onChange, onBlur, value, ref }, formState, fieldState }) => (
 *           <>
 *             <input
 *               onChange={onChange} // send value to hook form
 *               onBlur={onBlur} // notify when input is touched
 *               value={value} // return updated value
 *               ref={ref} // set ref for focus management
 *             />
 *             <p>{formState.isSubmitted ? "submitted" : ""}</p>
 *             <p>{fieldState.isTouched ? "touched" : ""}</p>
 *           </>
 *         )}
 *       />
 *     </form>
 *   );
 * }
 * ```
 */ const Controller = (props)=>props.render(useController(props));
const flatten = (obj)=>{
    const output = {};
    for (const key of Object.keys(obj)){
        if (isObjectType(obj[key]) && obj[key] !== null) {
            const nested = flatten(obj[key]);
            for (const nestedKey of Object.keys(nested)){
                output[`${key}.${nestedKey}`] = nested[nestedKey];
            }
        } else {
            output[key] = obj[key];
        }
    }
    return output;
};
const POST_REQUEST = 'post';
/**
 * Form component to manage submission.
 *
 * @param props - to setup submission detail. {@link FormProps}
 *
 * @returns form component or headless render prop.
 *
 * @example
 * ```tsx
 * function App() {
 *   const { control, formState: { errors } } = useForm();
 *
 *   return (
 *     <Form action="/api" control={control}>
 *       <input {...register("name")} />
 *       <p>{errors?.root?.server && 'Server error'}</p>
 *       <button>Submit</button>
 *     </Form>
 *   );
 * }
 * ```
 */ function Form(props) {
    const methods = useFormContext();
    const [mounted, setMounted] = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"].useState(false);
    const { control = methods.control, onSubmit, children, action, method = POST_REQUEST, headers, encType, onError, render, onSuccess, validateStatus, ...rest } = props;
    const submit = async (event)=>{
        let hasError = false;
        let type = '';
        await control.handleSubmit(async (data)=>{
            const formData = new FormData();
            let formDataJson = '';
            try {
                formDataJson = JSON.stringify(data);
            } catch (_a) {}
            const flattenFormValues = flatten(control._formValues);
            for(const key in flattenFormValues){
                formData.append(key, flattenFormValues[key]);
            }
            if (onSubmit) {
                await onSubmit({
                    data,
                    event,
                    method,
                    formData,
                    formDataJson
                });
            }
            if (action) {
                try {
                    const shouldStringifySubmissionData = [
                        headers && headers['Content-Type'],
                        encType
                    ].some((value1)=>value1 && value1.includes('json'));
                    const response = await fetch(String(action), {
                        method,
                        headers: {
                            ...headers,
                            ...encType && encType !== 'multipart/form-data' ? {
                                'Content-Type': encType
                            } : {}
                        },
                        body: shouldStringifySubmissionData ? formDataJson : formData
                    });
                    if (response && (validateStatus ? !validateStatus(response.status) : response.status < 200 || response.status >= 300)) {
                        hasError = true;
                        onError && onError({
                            response
                        });
                        type = String(response.status);
                    } else {
                        onSuccess && onSuccess({
                            response
                        });
                    }
                } catch (error) {
                    hasError = true;
                    onError && onError({
                        error
                    });
                }
            }
        })(event);
        if (hasError && props.control) {
            props.control._subjects.state.next({
                isSubmitSuccessful: false
            });
            props.control.setError('root.server', {
                type
            });
        }
    };
    __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"].useEffect(()=>{
        setMounted(true);
    }, []);
    return render ? __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"].createElement(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"].Fragment, null, render({
        submit
    })) : __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"].createElement("form", {
        noValidate: mounted,
        action: action,
        method: method,
        encType: encType,
        onSubmit: submit,
        ...rest
    }, children);
}
var appendErrors = (name, validateAllFieldCriteria, errors, type, message)=>validateAllFieldCriteria ? {
        ...errors[name],
        types: {
            ...errors[name] && errors[name].types ? errors[name].types : {},
            [type]: message || true
        }
    } : {};
var convertToArrayPayload = (value1)=>Array.isArray(value1) ? value1 : [
        value1
    ];
var createSubject = ()=>{
    let _observers = [];
    const next = (value1)=>{
        for (const observer of _observers){
            observer.next && observer.next(value1);
        }
    };
    const subscribe = (observer)=>{
        _observers.push(observer);
        return {
            unsubscribe: ()=>{
                _observers = _observers.filter((o)=>o !== observer);
            }
        };
    };
    const unsubscribe = ()=>{
        _observers = [];
    };
    return {
        get observers () {
            return _observers;
        },
        next,
        subscribe,
        unsubscribe
    };
};
var isEmptyObject = (value1)=>isObject(value1) && !Object.keys(value1).length;
var isFileInput = (element)=>element.type === 'file';
var isFunction = (value1)=>typeof value1 === 'function';
var isHTMLElement = (value1)=>{
    if ("TURBOPACK compile-time truthy", 1) {
        return false;
    }
    //TURBOPACK unreachable
    ;
    const owner = undefined;
};
var isMultipleSelect = (element)=>element.type === `select-multiple`;
var isRadioInput = (element)=>element.type === 'radio';
var isRadioOrCheckbox = (ref)=>isRadioInput(ref) || isCheckBoxInput(ref);
var live = (ref)=>isHTMLElement(ref) && ref.isConnected;
function baseGet(object, updatePath) {
    const length = updatePath.slice(0, -1).length;
    let index = 0;
    while(index < length){
        object = isUndefined(object) ? index++ : object[updatePath[index++]];
    }
    return object;
}
function isEmptyArray(obj) {
    for(const key in obj){
        if (obj.hasOwnProperty(key) && !isUndefined(obj[key])) {
            return false;
        }
    }
    return true;
}
function unset(object, path) {
    const paths = Array.isArray(path) ? path : isKey(path) ? [
        path
    ] : stringToPath(path);
    const childObject = paths.length === 1 ? object : baseGet(object, paths);
    const index = paths.length - 1;
    const key = paths[index];
    if (childObject) {
        delete childObject[key];
    }
    if (index !== 0 && (isObject(childObject) && isEmptyObject(childObject) || Array.isArray(childObject) && isEmptyArray(childObject))) {
        unset(object, paths.slice(0, -1));
    }
    return object;
}
var objectHasFunction = (data)=>{
    for(const key in data){
        if (isFunction(data[key])) {
            return true;
        }
    }
    return false;
};
function markFieldsDirty(data, fields = {}) {
    const isParentNodeArray = Array.isArray(data);
    if (isObject(data) || isParentNodeArray) {
        for(const key in data){
            if (Array.isArray(data[key]) || isObject(data[key]) && !objectHasFunction(data[key])) {
                fields[key] = Array.isArray(data[key]) ? [] : {};
                markFieldsDirty(data[key], fields[key]);
            } else if (!isNullOrUndefined(data[key])) {
                fields[key] = true;
            }
        }
    }
    return fields;
}
function getDirtyFieldsFromDefaultValues(data, formValues, dirtyFieldsFromValues) {
    const isParentNodeArray = Array.isArray(data);
    if (isObject(data) || isParentNodeArray) {
        for(const key in data){
            if (Array.isArray(data[key]) || isObject(data[key]) && !objectHasFunction(data[key])) {
                if (isUndefined(formValues) || isPrimitive(dirtyFieldsFromValues[key])) {
                    dirtyFieldsFromValues[key] = Array.isArray(data[key]) ? markFieldsDirty(data[key], []) : {
                        ...markFieldsDirty(data[key])
                    };
                } else {
                    getDirtyFieldsFromDefaultValues(data[key], isNullOrUndefined(formValues) ? {} : formValues[key], dirtyFieldsFromValues[key]);
                }
            } else {
                dirtyFieldsFromValues[key] = !deepEqual(data[key], formValues[key]);
            }
        }
    }
    return dirtyFieldsFromValues;
}
var getDirtyFields = (defaultValues, formValues)=>getDirtyFieldsFromDefaultValues(defaultValues, formValues, markFieldsDirty(formValues));
const defaultResult = {
    value: false,
    isValid: false
};
const validResult = {
    value: true,
    isValid: true
};
var getCheckboxValue = (options)=>{
    if (Array.isArray(options)) {
        if (options.length > 1) {
            const values = options.filter((option)=>option && option.checked && !option.disabled).map((option)=>option.value);
            return {
                value: values,
                isValid: !!values.length
            };
        }
        return options[0].checked && !options[0].disabled ? options[0].attributes && !isUndefined(options[0].attributes.value) ? isUndefined(options[0].value) || options[0].value === '' ? validResult : {
            value: options[0].value,
            isValid: true
        } : validResult : defaultResult;
    }
    return defaultResult;
};
var getFieldValueAs = (value1, { valueAsNumber, valueAsDate, setValueAs })=>isUndefined(value1) ? value1 : valueAsNumber ? value1 === '' ? NaN : value1 ? +value1 : value1 : valueAsDate && isString(value1) ? new Date(value1) : setValueAs ? setValueAs(value1) : value1;
const defaultReturn = {
    isValid: false,
    value: null
};
var getRadioValue = (options)=>Array.isArray(options) ? options.reduce((previous, option)=>option && option.checked && !option.disabled ? {
            isValid: true,
            value: option.value
        } : previous, defaultReturn) : defaultReturn;
function getFieldValue(_f) {
    const ref = _f.ref;
    if (isFileInput(ref)) {
        return ref.files;
    }
    if (isRadioInput(ref)) {
        return getRadioValue(_f.refs).value;
    }
    if (isMultipleSelect(ref)) {
        return [
            ...ref.selectedOptions
        ].map(({ value: value1 })=>value1);
    }
    if (isCheckBoxInput(ref)) {
        return getCheckboxValue(_f.refs).value;
    }
    return getFieldValueAs(isUndefined(ref.value) ? _f.ref.value : ref.value, _f);
}
var getResolverOptions = (fieldsNames, _fields, criteriaMode, shouldUseNativeValidation)=>{
    const fields = {};
    for (const name of fieldsNames){
        const field = get(_fields, name);
        field && set(fields, name, field._f);
    }
    return {
        criteriaMode,
        names: [
            ...fieldsNames
        ],
        fields,
        shouldUseNativeValidation
    };
};
var isRegex = (value1)=>value1 instanceof RegExp;
var getRuleValue = (rule)=>isUndefined(rule) ? rule : isRegex(rule) ? rule.source : isObject(rule) ? isRegex(rule.value) ? rule.value.source : rule.value : rule;
var getValidationModes = (mode)=>({
        isOnSubmit: !mode || mode === VALIDATION_MODE.onSubmit,
        isOnBlur: mode === VALIDATION_MODE.onBlur,
        isOnChange: mode === VALIDATION_MODE.onChange,
        isOnAll: mode === VALIDATION_MODE.all,
        isOnTouch: mode === VALIDATION_MODE.onTouched
    });
const ASYNC_FUNCTION = 'AsyncFunction';
var hasPromiseValidation = (fieldReference)=>!!fieldReference && !!fieldReference.validate && !!(isFunction(fieldReference.validate) && fieldReference.validate.constructor.name === ASYNC_FUNCTION || isObject(fieldReference.validate) && Object.values(fieldReference.validate).find((validateFunction)=>validateFunction.constructor.name === ASYNC_FUNCTION));
var hasValidation = (options)=>options.mount && (options.required || options.min || options.max || options.maxLength || options.minLength || options.pattern || options.validate);
var isWatched = (name, _names, isBlurEvent)=>!isBlurEvent && (_names.watchAll || _names.watch.has(name) || [
        ..._names.watch
    ].some((watchName)=>name.startsWith(watchName) && /^\.\w+/.test(name.slice(watchName.length))));
const iterateFieldsByAction = (fields, action, fieldsNames, abortEarly)=>{
    for (const key of fieldsNames || Object.keys(fields)){
        const field = get(fields, key);
        if (field) {
            const { _f, ...currentField } = field;
            if (_f) {
                if (_f.refs && _f.refs[0] && action(_f.refs[0], key) && !abortEarly) {
                    return true;
                } else if (_f.ref && action(_f.ref, _f.name) && !abortEarly) {
                    return true;
                } else {
                    if (iterateFieldsByAction(currentField, action)) {
                        break;
                    }
                }
            } else if (isObject(currentField)) {
                if (iterateFieldsByAction(currentField, action)) {
                    break;
                }
            }
        }
    }
    return;
};
function schemaErrorLookup(errors, _fields, name) {
    const error = get(errors, name);
    if (error || isKey(name)) {
        return {
            error,
            name
        };
    }
    const names = name.split('.');
    while(names.length){
        const fieldName = names.join('.');
        const field = get(_fields, fieldName);
        const foundError = get(errors, fieldName);
        if (field && !Array.isArray(field) && name !== fieldName) {
            return {
                name
            };
        }
        if (foundError && foundError.type) {
            return {
                name: fieldName,
                error: foundError
            };
        }
        if (foundError && foundError.root && foundError.root.type) {
            return {
                name: `${fieldName}.root`,
                error: foundError.root
            };
        }
        names.pop();
    }
    return {
        name
    };
}
var shouldRenderFormState = (formStateData, _proxyFormState, updateFormState, isRoot)=>{
    updateFormState(formStateData);
    const { name, ...formState } = formStateData;
    return isEmptyObject(formState) || Object.keys(formState).length >= Object.keys(_proxyFormState).length || Object.keys(formState).find((key)=>_proxyFormState[key] === (!isRoot || VALIDATION_MODE.all));
};
var shouldSubscribeByName = (name, signalName, exact)=>!name || !signalName || name === signalName || convertToArrayPayload(name).some((currentName)=>currentName && (exact ? currentName === signalName : currentName.startsWith(signalName) || signalName.startsWith(currentName)));
var skipValidation = (isBlurEvent, isTouched, isSubmitted, reValidateMode, mode)=>{
    if (mode.isOnAll) {
        return false;
    } else if (!isSubmitted && mode.isOnTouch) {
        return !(isTouched || isBlurEvent);
    } else if (isSubmitted ? reValidateMode.isOnBlur : mode.isOnBlur) {
        return !isBlurEvent;
    } else if (isSubmitted ? reValidateMode.isOnChange : mode.isOnChange) {
        return isBlurEvent;
    }
    return true;
};
var unsetEmptyArray = (ref, name)=>!compact(get(ref, name)).length && unset(ref, name);
var updateFieldArrayRootError = (errors, error, name)=>{
    const fieldArrayErrors = convertToArrayPayload(get(errors, name));
    set(fieldArrayErrors, 'root', error[name]);
    set(errors, name, fieldArrayErrors);
    return errors;
};
var isMessage = (value1)=>isString(value1);
function getValidateError(result, ref, type = 'validate') {
    if (isMessage(result) || Array.isArray(result) && result.every(isMessage) || isBoolean(result) && !result) {
        return {
            type,
            message: isMessage(result) ? result : '',
            ref
        };
    }
}
var getValueAndMessage = (validationData)=>isObject(validationData) && !isRegex(validationData) ? validationData : {
        value: validationData,
        message: ''
    };
var validateField = async (field, disabledFieldNames, formValues, validateAllFieldCriteria, shouldUseNativeValidation, isFieldArray)=>{
    const { ref, refs, required, maxLength, minLength, min, max, pattern, validate, name, valueAsNumber, mount } = field._f;
    const inputValue = get(formValues, name);
    if (!mount || disabledFieldNames.has(name)) {
        return {};
    }
    const inputRef = refs ? refs[0] : ref;
    const setCustomValidity = (message)=>{
        if (shouldUseNativeValidation && inputRef.reportValidity) {
            inputRef.setCustomValidity(isBoolean(message) ? '' : message || '');
            inputRef.reportValidity();
        }
    };
    const error = {};
    const isRadio = isRadioInput(ref);
    const isCheckBox = isCheckBoxInput(ref);
    const isRadioOrCheckbox = isRadio || isCheckBox;
    const isEmpty = (valueAsNumber || isFileInput(ref)) && isUndefined(ref.value) && isUndefined(inputValue) || isHTMLElement(ref) && ref.value === '' || inputValue === '' || Array.isArray(inputValue) && !inputValue.length;
    const appendErrorsCurry = appendErrors.bind(null, name, validateAllFieldCriteria, error);
    const getMinMaxMessage = (exceedMax, maxLengthMessage, minLengthMessage, maxType = INPUT_VALIDATION_RULES.maxLength, minType = INPUT_VALIDATION_RULES.minLength)=>{
        const message = exceedMax ? maxLengthMessage : minLengthMessage;
        error[name] = {
            type: exceedMax ? maxType : minType,
            message,
            ref,
            ...appendErrorsCurry(exceedMax ? maxType : minType, message)
        };
    };
    if (isFieldArray ? !Array.isArray(inputValue) || !inputValue.length : required && (!isRadioOrCheckbox && (isEmpty || isNullOrUndefined(inputValue)) || isBoolean(inputValue) && !inputValue || isCheckBox && !getCheckboxValue(refs).isValid || isRadio && !getRadioValue(refs).isValid)) {
        const { value: value1, message } = isMessage(required) ? {
            value: !!required,
            message: required
        } : getValueAndMessage(required);
        if (value1) {
            error[name] = {
                type: INPUT_VALIDATION_RULES.required,
                message,
                ref: inputRef,
                ...appendErrorsCurry(INPUT_VALIDATION_RULES.required, message)
            };
            if (!validateAllFieldCriteria) {
                setCustomValidity(message);
                return error;
            }
        }
    }
    if (!isEmpty && (!isNullOrUndefined(min) || !isNullOrUndefined(max))) {
        let exceedMax;
        let exceedMin;
        const maxOutput = getValueAndMessage(max);
        const minOutput = getValueAndMessage(min);
        if (!isNullOrUndefined(inputValue) && !isNaN(inputValue)) {
            const valueNumber = ref.valueAsNumber || (inputValue ? +inputValue : inputValue);
            if (!isNullOrUndefined(maxOutput.value)) {
                exceedMax = valueNumber > maxOutput.value;
            }
            if (!isNullOrUndefined(minOutput.value)) {
                exceedMin = valueNumber < minOutput.value;
            }
        } else {
            const valueDate = ref.valueAsDate || new Date(inputValue);
            const convertTimeToDate = (time)=>new Date(new Date().toDateString() + ' ' + time);
            const isTime = ref.type == 'time';
            const isWeek = ref.type == 'week';
            if (isString(maxOutput.value) && inputValue) {
                exceedMax = isTime ? convertTimeToDate(inputValue) > convertTimeToDate(maxOutput.value) : isWeek ? inputValue > maxOutput.value : valueDate > new Date(maxOutput.value);
            }
            if (isString(minOutput.value) && inputValue) {
                exceedMin = isTime ? convertTimeToDate(inputValue) < convertTimeToDate(minOutput.value) : isWeek ? inputValue < minOutput.value : valueDate < new Date(minOutput.value);
            }
        }
        if (exceedMax || exceedMin) {
            getMinMaxMessage(!!exceedMax, maxOutput.message, minOutput.message, INPUT_VALIDATION_RULES.max, INPUT_VALIDATION_RULES.min);
            if (!validateAllFieldCriteria) {
                setCustomValidity(error[name].message);
                return error;
            }
        }
    }
    if ((maxLength || minLength) && !isEmpty && (isString(inputValue) || isFieldArray && Array.isArray(inputValue))) {
        const maxLengthOutput = getValueAndMessage(maxLength);
        const minLengthOutput = getValueAndMessage(minLength);
        const exceedMax = !isNullOrUndefined(maxLengthOutput.value) && inputValue.length > +maxLengthOutput.value;
        const exceedMin = !isNullOrUndefined(minLengthOutput.value) && inputValue.length < +minLengthOutput.value;
        if (exceedMax || exceedMin) {
            getMinMaxMessage(exceedMax, maxLengthOutput.message, minLengthOutput.message);
            if (!validateAllFieldCriteria) {
                setCustomValidity(error[name].message);
                return error;
            }
        }
    }
    if (pattern && !isEmpty && isString(inputValue)) {
        const { value: patternValue, message } = getValueAndMessage(pattern);
        if (isRegex(patternValue) && !inputValue.match(patternValue)) {
            error[name] = {
                type: INPUT_VALIDATION_RULES.pattern,
                message,
                ref,
                ...appendErrorsCurry(INPUT_VALIDATION_RULES.pattern, message)
            };
            if (!validateAllFieldCriteria) {
                setCustomValidity(message);
                return error;
            }
        }
    }
    if (validate) {
        if (isFunction(validate)) {
            const result = await validate(inputValue, formValues);
            const validateError = getValidateError(result, inputRef);
            if (validateError) {
                error[name] = {
                    ...validateError,
                    ...appendErrorsCurry(INPUT_VALIDATION_RULES.validate, validateError.message)
                };
                if (!validateAllFieldCriteria) {
                    setCustomValidity(validateError.message);
                    return error;
                }
            }
        } else if (isObject(validate)) {
            let validationResult = {};
            for(const key in validate){
                if (!isEmptyObject(validationResult) && !validateAllFieldCriteria) {
                    break;
                }
                const validateError = getValidateError(await validate[key](inputValue, formValues), inputRef, key);
                if (validateError) {
                    validationResult = {
                        ...validateError,
                        ...appendErrorsCurry(key, validateError.message)
                    };
                    setCustomValidity(validateError.message);
                    if (validateAllFieldCriteria) {
                        error[name] = validationResult;
                    }
                }
            }
            if (!isEmptyObject(validationResult)) {
                error[name] = {
                    ref: inputRef,
                    ...validationResult
                };
                if (!validateAllFieldCriteria) {
                    return error;
                }
            }
        }
    }
    setCustomValidity(true);
    return error;
};
const defaultOptions = {
    mode: VALIDATION_MODE.onSubmit,
    reValidateMode: VALIDATION_MODE.onChange,
    shouldFocusError: true
};
function createFormControl(props = {}) {
    let _options = {
        ...defaultOptions,
        ...props
    };
    let _formState = {
        submitCount: 0,
        isDirty: false,
        isReady: false,
        isLoading: isFunction(_options.defaultValues),
        isValidating: false,
        isSubmitted: false,
        isSubmitting: false,
        isSubmitSuccessful: false,
        isValid: false,
        touchedFields: {},
        dirtyFields: {},
        validatingFields: {},
        errors: _options.errors || {},
        disabled: _options.disabled || false
    };
    let _fields = {};
    let _defaultValues = isObject(_options.defaultValues) || isObject(_options.values) ? cloneObject(_options.defaultValues || _options.values) || {} : {};
    let _formValues = _options.shouldUnregister ? {} : cloneObject(_defaultValues);
    let _state = {
        action: false,
        mount: false,
        watch: false
    };
    let _names = {
        mount: new Set(),
        disabled: new Set(),
        unMount: new Set(),
        array: new Set(),
        watch: new Set()
    };
    let delayErrorCallback;
    let timer = 0;
    const _proxyFormState = {
        isDirty: false,
        dirtyFields: false,
        validatingFields: false,
        touchedFields: false,
        isValidating: false,
        isValid: false,
        errors: false
    };
    let _proxySubscribeFormState = {
        ..._proxyFormState
    };
    const _subjects = {
        array: createSubject(),
        state: createSubject()
    };
    const shouldDisplayAllAssociatedErrors = _options.criteriaMode === VALIDATION_MODE.all;
    const debounce = (callback)=>(wait)=>{
            clearTimeout(timer);
            timer = setTimeout(callback, wait);
        };
    const _setValid = async (shouldUpdateValid)=>{
        if (!_options.disabled && (_proxyFormState.isValid || _proxySubscribeFormState.isValid || shouldUpdateValid)) {
            const isValid = _options.resolver ? isEmptyObject((await _runSchema()).errors) : await executeBuiltInValidation(_fields, true);
            if (isValid !== _formState.isValid) {
                _subjects.state.next({
                    isValid
                });
            }
        }
    };
    const _updateIsValidating = (names, isValidating)=>{
        if (!_options.disabled && (_proxyFormState.isValidating || _proxyFormState.validatingFields || _proxySubscribeFormState.isValidating || _proxySubscribeFormState.validatingFields)) {
            (names || Array.from(_names.mount)).forEach((name)=>{
                if (name) {
                    isValidating ? set(_formState.validatingFields, name, isValidating) : unset(_formState.validatingFields, name);
                }
            });
            _subjects.state.next({
                validatingFields: _formState.validatingFields,
                isValidating: !isEmptyObject(_formState.validatingFields)
            });
        }
    };
    const _setFieldArray = (name, values = [], method, args, shouldSetValues = true, shouldUpdateFieldsAndState = true)=>{
        if (args && method && !_options.disabled) {
            _state.action = true;
            if (shouldUpdateFieldsAndState && Array.isArray(get(_fields, name))) {
                const fieldValues = method(get(_fields, name), args.argA, args.argB);
                shouldSetValues && set(_fields, name, fieldValues);
            }
            if (shouldUpdateFieldsAndState && Array.isArray(get(_formState.errors, name))) {
                const errors = method(get(_formState.errors, name), args.argA, args.argB);
                shouldSetValues && set(_formState.errors, name, errors);
                unsetEmptyArray(_formState.errors, name);
            }
            if ((_proxyFormState.touchedFields || _proxySubscribeFormState.touchedFields) && shouldUpdateFieldsAndState && Array.isArray(get(_formState.touchedFields, name))) {
                const touchedFields = method(get(_formState.touchedFields, name), args.argA, args.argB);
                shouldSetValues && set(_formState.touchedFields, name, touchedFields);
            }
            if (_proxyFormState.dirtyFields || _proxySubscribeFormState.dirtyFields) {
                _formState.dirtyFields = getDirtyFields(_defaultValues, _formValues);
            }
            _subjects.state.next({
                name,
                isDirty: _getDirty(name, values),
                dirtyFields: _formState.dirtyFields,
                errors: _formState.errors,
                isValid: _formState.isValid
            });
        } else {
            set(_formValues, name, values);
        }
    };
    const updateErrors = (name, error)=>{
        set(_formState.errors, name, error);
        _subjects.state.next({
            errors: _formState.errors
        });
    };
    const _setErrors = (errors)=>{
        _formState.errors = errors;
        _subjects.state.next({
            errors: _formState.errors,
            isValid: false
        });
    };
    const updateValidAndValue = (name, shouldSkipSetValueAs, value1, ref)=>{
        const field = get(_fields, name);
        if (field) {
            const defaultValue = get(_formValues, name, isUndefined(value1) ? get(_defaultValues, name) : value1);
            isUndefined(defaultValue) || ref && ref.defaultChecked || shouldSkipSetValueAs ? set(_formValues, name, shouldSkipSetValueAs ? defaultValue : getFieldValue(field._f)) : setFieldValue(name, defaultValue);
            _state.mount && _setValid();
        }
    };
    const updateTouchAndDirty = (name, fieldValue, isBlurEvent, shouldDirty, shouldRender)=>{
        let shouldUpdateField = false;
        let isPreviousDirty = false;
        const output = {
            name
        };
        if (!_options.disabled) {
            if (!isBlurEvent || shouldDirty) {
                if (_proxyFormState.isDirty || _proxySubscribeFormState.isDirty) {
                    isPreviousDirty = _formState.isDirty;
                    _formState.isDirty = output.isDirty = _getDirty();
                    shouldUpdateField = isPreviousDirty !== output.isDirty;
                }
                const isCurrentFieldPristine = deepEqual(get(_defaultValues, name), fieldValue);
                isPreviousDirty = !!get(_formState.dirtyFields, name);
                isCurrentFieldPristine ? unset(_formState.dirtyFields, name) : set(_formState.dirtyFields, name, true);
                output.dirtyFields = _formState.dirtyFields;
                shouldUpdateField = shouldUpdateField || (_proxyFormState.dirtyFields || _proxySubscribeFormState.dirtyFields) && isPreviousDirty !== !isCurrentFieldPristine;
            }
            if (isBlurEvent) {
                const isPreviousFieldTouched = get(_formState.touchedFields, name);
                if (!isPreviousFieldTouched) {
                    set(_formState.touchedFields, name, isBlurEvent);
                    output.touchedFields = _formState.touchedFields;
                    shouldUpdateField = shouldUpdateField || (_proxyFormState.touchedFields || _proxySubscribeFormState.touchedFields) && isPreviousFieldTouched !== isBlurEvent;
                }
            }
            shouldUpdateField && shouldRender && _subjects.state.next(output);
        }
        return shouldUpdateField ? output : {};
    };
    const shouldRenderByError = (name, isValid, error, fieldState)=>{
        const previousFieldError = get(_formState.errors, name);
        const shouldUpdateValid = (_proxyFormState.isValid || _proxySubscribeFormState.isValid) && isBoolean(isValid) && _formState.isValid !== isValid;
        if (_options.delayError && error) {
            delayErrorCallback = debounce(()=>updateErrors(name, error));
            delayErrorCallback(_options.delayError);
        } else {
            clearTimeout(timer);
            delayErrorCallback = null;
            error ? set(_formState.errors, name, error) : unset(_formState.errors, name);
        }
        if ((error ? !deepEqual(previousFieldError, error) : previousFieldError) || !isEmptyObject(fieldState) || shouldUpdateValid) {
            const updatedFormState = {
                ...fieldState,
                ...shouldUpdateValid && isBoolean(isValid) ? {
                    isValid
                } : {},
                errors: _formState.errors,
                name
            };
            _formState = {
                ..._formState,
                ...updatedFormState
            };
            _subjects.state.next(updatedFormState);
        }
    };
    const _runSchema = async (name)=>{
        _updateIsValidating(name, true);
        const result = await _options.resolver(_formValues, _options.context, getResolverOptions(name || _names.mount, _fields, _options.criteriaMode, _options.shouldUseNativeValidation));
        _updateIsValidating(name);
        return result;
    };
    const executeSchemaAndUpdateState = async (names)=>{
        const { errors } = await _runSchema(names);
        if (names) {
            for (const name of names){
                const error = get(errors, name);
                error ? set(_formState.errors, name, error) : unset(_formState.errors, name);
            }
        } else {
            _formState.errors = errors;
        }
        return errors;
    };
    const executeBuiltInValidation = async (fields, shouldOnlyCheckValid, context = {
        valid: true
    })=>{
        for(const name in fields){
            const field = fields[name];
            if (field) {
                const { _f, ...fieldValue } = field;
                if (_f) {
                    const isFieldArrayRoot = _names.array.has(_f.name);
                    const isPromiseFunction = field._f && hasPromiseValidation(field._f);
                    if (isPromiseFunction && _proxyFormState.validatingFields) {
                        _updateIsValidating([
                            name
                        ], true);
                    }
                    const fieldError = await validateField(field, _names.disabled, _formValues, shouldDisplayAllAssociatedErrors, _options.shouldUseNativeValidation && !shouldOnlyCheckValid, isFieldArrayRoot);
                    if (isPromiseFunction && _proxyFormState.validatingFields) {
                        _updateIsValidating([
                            name
                        ]);
                    }
                    if (fieldError[_f.name]) {
                        context.valid = false;
                        if (shouldOnlyCheckValid) {
                            break;
                        }
                    }
                    !shouldOnlyCheckValid && (get(fieldError, _f.name) ? isFieldArrayRoot ? updateFieldArrayRootError(_formState.errors, fieldError, _f.name) : set(_formState.errors, _f.name, fieldError[_f.name]) : unset(_formState.errors, _f.name));
                }
                !isEmptyObject(fieldValue) && await executeBuiltInValidation(fieldValue, shouldOnlyCheckValid, context);
            }
        }
        return context.valid;
    };
    const _removeUnmounted = ()=>{
        for (const name of _names.unMount){
            const field = get(_fields, name);
            field && (field._f.refs ? field._f.refs.every((ref)=>!live(ref)) : !live(field._f.ref)) && unregister(name);
        }
        _names.unMount = new Set();
    };
    const _getDirty = (name, data)=>!_options.disabled && (name && data && set(_formValues, name, data), !deepEqual(getValues(), _defaultValues));
    const _getWatch = (names, defaultValue, isGlobal)=>generateWatchOutput(names, _names, {
            ..._state.mount ? _formValues : isUndefined(defaultValue) ? _defaultValues : isString(names) ? {
                [names]: defaultValue
            } : defaultValue
        }, isGlobal, defaultValue);
    const _getFieldArray = (name)=>compact(get(_state.mount ? _formValues : _defaultValues, name, _options.shouldUnregister ? get(_defaultValues, name, []) : []));
    const setFieldValue = (name, value1, options = {})=>{
        const field = get(_fields, name);
        let fieldValue = value1;
        if (field) {
            const fieldReference = field._f;
            if (fieldReference) {
                !fieldReference.disabled && set(_formValues, name, getFieldValueAs(value1, fieldReference));
                fieldValue = isHTMLElement(fieldReference.ref) && isNullOrUndefined(value1) ? '' : value1;
                if (isMultipleSelect(fieldReference.ref)) {
                    [
                        ...fieldReference.ref.options
                    ].forEach((optionRef)=>optionRef.selected = fieldValue.includes(optionRef.value));
                } else if (fieldReference.refs) {
                    if (isCheckBoxInput(fieldReference.ref)) {
                        fieldReference.refs.forEach((checkboxRef)=>{
                            if (!checkboxRef.defaultChecked || !checkboxRef.disabled) {
                                if (Array.isArray(fieldValue)) {
                                    checkboxRef.checked = !!fieldValue.find((data)=>data === checkboxRef.value);
                                } else {
                                    checkboxRef.checked = fieldValue === checkboxRef.value || !!fieldValue;
                                }
                            }
                        });
                    } else {
                        fieldReference.refs.forEach((radioRef)=>radioRef.checked = radioRef.value === fieldValue);
                    }
                } else if (isFileInput(fieldReference.ref)) {
                    fieldReference.ref.value = '';
                } else {
                    fieldReference.ref.value = fieldValue;
                    if (!fieldReference.ref.type) {
                        _subjects.state.next({
                            name,
                            values: cloneObject(_formValues)
                        });
                    }
                }
            }
        }
        (options.shouldDirty || options.shouldTouch) && updateTouchAndDirty(name, fieldValue, options.shouldTouch, options.shouldDirty, true);
        options.shouldValidate && trigger(name);
    };
    const setValues = (name, value1, options)=>{
        for(const fieldKey in value1){
            if (!value1.hasOwnProperty(fieldKey)) {
                return;
            }
            const fieldValue = value1[fieldKey];
            const fieldName = name + '.' + fieldKey;
            const field = get(_fields, fieldName);
            (_names.array.has(name) || isObject(fieldValue) || field && !field._f) && !isDateObject(fieldValue) ? setValues(fieldName, fieldValue, options) : setFieldValue(fieldName, fieldValue, options);
        }
    };
    const setValue = (name, value1, options = {})=>{
        const field = get(_fields, name);
        const isFieldArray = _names.array.has(name);
        const cloneValue = cloneObject(value1);
        set(_formValues, name, cloneValue);
        if (isFieldArray) {
            _subjects.array.next({
                name,
                values: cloneObject(_formValues)
            });
            if ((_proxyFormState.isDirty || _proxyFormState.dirtyFields || _proxySubscribeFormState.isDirty || _proxySubscribeFormState.dirtyFields) && options.shouldDirty) {
                _subjects.state.next({
                    name,
                    dirtyFields: getDirtyFields(_defaultValues, _formValues),
                    isDirty: _getDirty(name, cloneValue)
                });
            }
        } else {
            field && !field._f && !isNullOrUndefined(cloneValue) ? setValues(name, cloneValue, options) : setFieldValue(name, cloneValue, options);
        }
        isWatched(name, _names) && _subjects.state.next({
            ..._formState,
            name
        });
        _subjects.state.next({
            name: _state.mount ? name : undefined,
            values: cloneObject(_formValues)
        });
    };
    const onChange = async (event)=>{
        _state.mount = true;
        const target = event.target;
        let name = target.name;
        let isFieldValueUpdated = true;
        const field = get(_fields, name);
        const _updateIsFieldValueUpdated = (fieldValue)=>{
            isFieldValueUpdated = Number.isNaN(fieldValue) || isDateObject(fieldValue) && isNaN(fieldValue.getTime()) || deepEqual(fieldValue, get(_formValues, name, fieldValue));
        };
        const validationModeBeforeSubmit = getValidationModes(_options.mode);
        const validationModeAfterSubmit = getValidationModes(_options.reValidateMode);
        if (field) {
            let error;
            let isValid;
            const fieldValue = target.type ? getFieldValue(field._f) : getEventValue(event);
            const isBlurEvent = event.type === EVENTS.BLUR || event.type === EVENTS.FOCUS_OUT;
            const shouldSkipValidation = !hasValidation(field._f) && !_options.resolver && !get(_formState.errors, name) && !field._f.deps || skipValidation(isBlurEvent, get(_formState.touchedFields, name), _formState.isSubmitted, validationModeAfterSubmit, validationModeBeforeSubmit);
            const watched = isWatched(name, _names, isBlurEvent);
            set(_formValues, name, fieldValue);
            if (isBlurEvent) {
                if (!target || !target.readOnly) {
                    field._f.onBlur && field._f.onBlur(event);
                    delayErrorCallback && delayErrorCallback(0);
                }
            } else if (field._f.onChange) {
                field._f.onChange(event);
            }
            const fieldState = updateTouchAndDirty(name, fieldValue, isBlurEvent);
            const shouldRender = !isEmptyObject(fieldState) || watched;
            !isBlurEvent && _subjects.state.next({
                name,
                type: event.type,
                values: cloneObject(_formValues)
            });
            if (shouldSkipValidation) {
                if (_proxyFormState.isValid || _proxySubscribeFormState.isValid) {
                    if (_options.mode === 'onBlur') {
                        if (isBlurEvent) {
                            _setValid();
                        }
                    } else if (!isBlurEvent) {
                        _setValid();
                    }
                }
                return shouldRender && _subjects.state.next({
                    name,
                    ...watched ? {} : fieldState
                });
            }
            !isBlurEvent && watched && _subjects.state.next({
                ..._formState
            });
            if (_options.resolver) {
                const { errors } = await _runSchema([
                    name
                ]);
                _updateIsFieldValueUpdated(fieldValue);
                if (isFieldValueUpdated) {
                    const previousErrorLookupResult = schemaErrorLookup(_formState.errors, _fields, name);
                    const errorLookupResult = schemaErrorLookup(errors, _fields, previousErrorLookupResult.name || name);
                    error = errorLookupResult.error;
                    name = errorLookupResult.name;
                    isValid = isEmptyObject(errors);
                }
            } else {
                _updateIsValidating([
                    name
                ], true);
                error = (await validateField(field, _names.disabled, _formValues, shouldDisplayAllAssociatedErrors, _options.shouldUseNativeValidation))[name];
                _updateIsValidating([
                    name
                ]);
                _updateIsFieldValueUpdated(fieldValue);
                if (isFieldValueUpdated) {
                    if (error) {
                        isValid = false;
                    } else if (_proxyFormState.isValid || _proxySubscribeFormState.isValid) {
                        isValid = await executeBuiltInValidation(_fields, true);
                    }
                }
            }
            if (isFieldValueUpdated) {
                field._f.deps && trigger(field._f.deps);
                shouldRenderByError(name, isValid, error, fieldState);
            }
        }
    };
    const _focusInput = (ref, key)=>{
        if (get(_formState.errors, key) && ref.focus) {
            ref.focus();
            return 1;
        }
        return;
    };
    const trigger = async (name, options = {})=>{
        let isValid;
        let validationResult;
        const fieldNames = convertToArrayPayload(name);
        if (_options.resolver) {
            const errors = await executeSchemaAndUpdateState(isUndefined(name) ? name : fieldNames);
            isValid = isEmptyObject(errors);
            validationResult = name ? !fieldNames.some((name)=>get(errors, name)) : isValid;
        } else if (name) {
            validationResult = (await Promise.all(fieldNames.map(async (fieldName)=>{
                const field = get(_fields, fieldName);
                return await executeBuiltInValidation(field && field._f ? {
                    [fieldName]: field
                } : field);
            }))).every(Boolean);
            !(!validationResult && !_formState.isValid) && _setValid();
        } else {
            validationResult = isValid = await executeBuiltInValidation(_fields);
        }
        _subjects.state.next({
            ...!isString(name) || (_proxyFormState.isValid || _proxySubscribeFormState.isValid) && isValid !== _formState.isValid ? {} : {
                name
            },
            ..._options.resolver || !name ? {
                isValid
            } : {},
            errors: _formState.errors
        });
        options.shouldFocus && !validationResult && iterateFieldsByAction(_fields, _focusInput, name ? fieldNames : _names.mount);
        return validationResult;
    };
    const getValues = (fieldNames)=>{
        const values = {
            ..._state.mount ? _formValues : _defaultValues
        };
        return isUndefined(fieldNames) ? values : isString(fieldNames) ? get(values, fieldNames) : fieldNames.map((name)=>get(values, name));
    };
    const getFieldState = (name, formState)=>({
            invalid: !!get((formState || _formState).errors, name),
            isDirty: !!get((formState || _formState).dirtyFields, name),
            error: get((formState || _formState).errors, name),
            isValidating: !!get(_formState.validatingFields, name),
            isTouched: !!get((formState || _formState).touchedFields, name)
        });
    const clearErrors = (name)=>{
        name && convertToArrayPayload(name).forEach((inputName)=>unset(_formState.errors, inputName));
        _subjects.state.next({
            errors: name ? _formState.errors : {}
        });
    };
    const setError = (name, error, options)=>{
        const ref = (get(_fields, name, {
            _f: {}
        })._f || {}).ref;
        const currentError = get(_formState.errors, name) || {};
        // Don't override existing error messages elsewhere in the object tree.
        const { ref: currentRef, message, type, ...restOfErrorTree } = currentError;
        set(_formState.errors, name, {
            ...restOfErrorTree,
            ...error,
            ref
        });
        _subjects.state.next({
            name,
            errors: _formState.errors,
            isValid: false
        });
        options && options.shouldFocus && ref && ref.focus && ref.focus();
    };
    const watch = (name, defaultValue)=>isFunction(name) ? _subjects.state.subscribe({
            next: (payload)=>'values' in payload && name(_getWatch(undefined, defaultValue), payload)
        }) : _getWatch(name, defaultValue, true);
    const _subscribe = (props)=>_subjects.state.subscribe({
            next: (formState)=>{
                if (shouldSubscribeByName(props.name, formState.name, props.exact) && shouldRenderFormState(formState, props.formState || _proxyFormState, _setFormState, props.reRenderRoot)) {
                    props.callback({
                        values: {
                            ..._formValues
                        },
                        ..._formState,
                        ...formState,
                        defaultValues: _defaultValues
                    });
                }
            }
        }).unsubscribe;
    const subscribe = (props)=>{
        _state.mount = true;
        _proxySubscribeFormState = {
            ..._proxySubscribeFormState,
            ...props.formState
        };
        return _subscribe({
            ...props,
            formState: _proxySubscribeFormState
        });
    };
    const unregister = (name, options = {})=>{
        for (const fieldName of name ? convertToArrayPayload(name) : _names.mount){
            _names.mount.delete(fieldName);
            _names.array.delete(fieldName);
            if (!options.keepValue) {
                unset(_fields, fieldName);
                unset(_formValues, fieldName);
            }
            !options.keepError && unset(_formState.errors, fieldName);
            !options.keepDirty && unset(_formState.dirtyFields, fieldName);
            !options.keepTouched && unset(_formState.touchedFields, fieldName);
            !options.keepIsValidating && unset(_formState.validatingFields, fieldName);
            !_options.shouldUnregister && !options.keepDefaultValue && unset(_defaultValues, fieldName);
        }
        _subjects.state.next({
            values: cloneObject(_formValues)
        });
        _subjects.state.next({
            ..._formState,
            ...!options.keepDirty ? {} : {
                isDirty: _getDirty()
            }
        });
        !options.keepIsValid && _setValid();
    };
    const _setDisabledField = ({ disabled, name })=>{
        if (isBoolean(disabled) && _state.mount || !!disabled || _names.disabled.has(name)) {
            disabled ? _names.disabled.add(name) : _names.disabled.delete(name);
        }
    };
    const register = (name, options = {})=>{
        let field = get(_fields, name);
        const disabledIsDefined = isBoolean(options.disabled) || isBoolean(_options.disabled);
        set(_fields, name, {
            ...field || {},
            _f: {
                ...field && field._f ? field._f : {
                    ref: {
                        name
                    }
                },
                name,
                mount: true,
                ...options
            }
        });
        _names.mount.add(name);
        if (field) {
            _setDisabledField({
                disabled: isBoolean(options.disabled) ? options.disabled : _options.disabled,
                name
            });
        } else {
            updateValidAndValue(name, true, options.value);
        }
        return {
            ...disabledIsDefined ? {
                disabled: options.disabled || _options.disabled
            } : {},
            ..._options.progressive ? {
                required: !!options.required,
                min: getRuleValue(options.min),
                max: getRuleValue(options.max),
                minLength: getRuleValue(options.minLength),
                maxLength: getRuleValue(options.maxLength),
                pattern: getRuleValue(options.pattern)
            } : {},
            name,
            onChange,
            onBlur: onChange,
            ref: (ref)=>{
                if (ref) {
                    register(name, options);
                    field = get(_fields, name);
                    const fieldRef = isUndefined(ref.value) ? ref.querySelectorAll ? ref.querySelectorAll('input,select,textarea')[0] || ref : ref : ref;
                    const radioOrCheckbox = isRadioOrCheckbox(fieldRef);
                    const refs = field._f.refs || [];
                    if (radioOrCheckbox ? refs.find((option)=>option === fieldRef) : fieldRef === field._f.ref) {
                        return;
                    }
                    set(_fields, name, {
                        _f: {
                            ...field._f,
                            ...radioOrCheckbox ? {
                                refs: [
                                    ...refs.filter(live),
                                    fieldRef,
                                    ...Array.isArray(get(_defaultValues, name)) ? [
                                        {}
                                    ] : []
                                ],
                                ref: {
                                    type: fieldRef.type,
                                    name
                                }
                            } : {
                                ref: fieldRef
                            }
                        }
                    });
                    updateValidAndValue(name, false, undefined, fieldRef);
                } else {
                    field = get(_fields, name, {});
                    if (field._f) {
                        field._f.mount = false;
                    }
                    (_options.shouldUnregister || options.shouldUnregister) && !(isNameInFieldArray(_names.array, name) && _state.action) && _names.unMount.add(name);
                }
            }
        };
    };
    const _focusError = ()=>_options.shouldFocusError && iterateFieldsByAction(_fields, _focusInput, _names.mount);
    const _disableForm = (disabled)=>{
        if (isBoolean(disabled)) {
            _subjects.state.next({
                disabled
            });
            iterateFieldsByAction(_fields, (ref, name)=>{
                const currentField = get(_fields, name);
                if (currentField) {
                    ref.disabled = currentField._f.disabled || disabled;
                    if (Array.isArray(currentField._f.refs)) {
                        currentField._f.refs.forEach((inputRef)=>{
                            inputRef.disabled = currentField._f.disabled || disabled;
                        });
                    }
                }
            }, 0, false);
        }
    };
    const handleSubmit = (onValid, onInvalid)=>async (e)=>{
            let onValidError = undefined;
            if (e) {
                e.preventDefault && e.preventDefault();
                e.persist && e.persist();
            }
            let fieldValues = cloneObject(_formValues);
            _subjects.state.next({
                isSubmitting: true
            });
            if (_options.resolver) {
                const { errors, values } = await _runSchema();
                _formState.errors = errors;
                fieldValues = cloneObject(values);
            } else {
                await executeBuiltInValidation(_fields);
            }
            if (_names.disabled.size) {
                for (const name of _names.disabled){
                    unset(fieldValues, name);
                }
            }
            unset(_formState.errors, 'root');
            if (isEmptyObject(_formState.errors)) {
                _subjects.state.next({
                    errors: {}
                });
                try {
                    await onValid(fieldValues, e);
                } catch (error) {
                    onValidError = error;
                }
            } else {
                if (onInvalid) {
                    await onInvalid({
                        ..._formState.errors
                    }, e);
                }
                _focusError();
                setTimeout(_focusError);
            }
            _subjects.state.next({
                isSubmitted: true,
                isSubmitting: false,
                isSubmitSuccessful: isEmptyObject(_formState.errors) && !onValidError,
                submitCount: _formState.submitCount + 1,
                errors: _formState.errors
            });
            if (onValidError) {
                throw onValidError;
            }
        };
    const resetField = (name, options = {})=>{
        if (get(_fields, name)) {
            if (isUndefined(options.defaultValue)) {
                setValue(name, cloneObject(get(_defaultValues, name)));
            } else {
                setValue(name, options.defaultValue);
                set(_defaultValues, name, cloneObject(options.defaultValue));
            }
            if (!options.keepTouched) {
                unset(_formState.touchedFields, name);
            }
            if (!options.keepDirty) {
                unset(_formState.dirtyFields, name);
                _formState.isDirty = options.defaultValue ? _getDirty(name, cloneObject(get(_defaultValues, name))) : _getDirty();
            }
            if (!options.keepError) {
                unset(_formState.errors, name);
                _proxyFormState.isValid && _setValid();
            }
            _subjects.state.next({
                ..._formState
            });
        }
    };
    const _reset = (formValues, keepStateOptions = {})=>{
        const updatedValues = formValues ? cloneObject(formValues) : _defaultValues;
        const cloneUpdatedValues = cloneObject(updatedValues);
        const isEmptyResetValues = isEmptyObject(formValues);
        const values = isEmptyResetValues ? _defaultValues : cloneUpdatedValues;
        if (!keepStateOptions.keepDefaultValues) {
            _defaultValues = updatedValues;
        }
        if (!keepStateOptions.keepValues) {
            if (keepStateOptions.keepDirtyValues) {
                const fieldsToCheck = new Set([
                    ..._names.mount,
                    ...Object.keys(getDirtyFields(_defaultValues, _formValues))
                ]);
                for (const fieldName of Array.from(fieldsToCheck)){
                    get(_formState.dirtyFields, fieldName) ? set(values, fieldName, get(_formValues, fieldName)) : setValue(fieldName, get(values, fieldName));
                }
            } else {
                if (isWeb && isUndefined(formValues)) //TURBOPACK unreachable
                ;
                if (keepStateOptions.keepFieldsRef) {
                    for (const fieldName of _names.mount){
                        setValue(fieldName, get(values, fieldName));
                    }
                } else {
                    _fields = {};
                }
            }
            _formValues = _options.shouldUnregister ? keepStateOptions.keepDefaultValues ? cloneObject(_defaultValues) : {} : cloneObject(values);
            _subjects.array.next({
                values: {
                    ...values
                }
            });
            _subjects.state.next({
                values: {
                    ...values
                }
            });
        }
        _names = {
            mount: keepStateOptions.keepDirtyValues ? _names.mount : new Set(),
            unMount: new Set(),
            array: new Set(),
            disabled: new Set(),
            watch: new Set(),
            watchAll: false,
            focus: ''
        };
        _state.mount = !_proxyFormState.isValid || !!keepStateOptions.keepIsValid || !!keepStateOptions.keepDirtyValues;
        _state.watch = !!_options.shouldUnregister;
        _subjects.state.next({
            submitCount: keepStateOptions.keepSubmitCount ? _formState.submitCount : 0,
            isDirty: isEmptyResetValues ? false : keepStateOptions.keepDirty ? _formState.isDirty : !!(keepStateOptions.keepDefaultValues && !deepEqual(formValues, _defaultValues)),
            isSubmitted: keepStateOptions.keepIsSubmitted ? _formState.isSubmitted : false,
            dirtyFields: isEmptyResetValues ? {} : keepStateOptions.keepDirtyValues ? keepStateOptions.keepDefaultValues && _formValues ? getDirtyFields(_defaultValues, _formValues) : _formState.dirtyFields : keepStateOptions.keepDefaultValues && formValues ? getDirtyFields(_defaultValues, formValues) : keepStateOptions.keepDirty ? _formState.dirtyFields : {},
            touchedFields: keepStateOptions.keepTouched ? _formState.touchedFields : {},
            errors: keepStateOptions.keepErrors ? _formState.errors : {},
            isSubmitSuccessful: keepStateOptions.keepIsSubmitSuccessful ? _formState.isSubmitSuccessful : false,
            isSubmitting: false,
            defaultValues: _defaultValues
        });
    };
    const reset = (formValues, keepStateOptions)=>_reset(isFunction(formValues) ? formValues(_formValues) : formValues, keepStateOptions);
    const setFocus = (name, options = {})=>{
        const field = get(_fields, name);
        const fieldReference = field && field._f;
        if (fieldReference) {
            const fieldRef = fieldReference.refs ? fieldReference.refs[0] : fieldReference.ref;
            if (fieldRef.focus) {
                fieldRef.focus();
                options.shouldSelect && isFunction(fieldRef.select) && fieldRef.select();
            }
        }
    };
    const _setFormState = (updatedFormState)=>{
        _formState = {
            ..._formState,
            ...updatedFormState
        };
    };
    const _resetDefaultValues = ()=>isFunction(_options.defaultValues) && _options.defaultValues().then((values)=>{
            reset(values, _options.resetOptions);
            _subjects.state.next({
                isLoading: false
            });
        });
    const methods = {
        control: {
            register,
            unregister,
            getFieldState,
            handleSubmit,
            setError,
            _subscribe,
            _runSchema,
            _focusError,
            _getWatch,
            _getDirty,
            _setValid,
            _setFieldArray,
            _setDisabledField,
            _setErrors,
            _getFieldArray,
            _reset,
            _resetDefaultValues,
            _removeUnmounted,
            _disableForm,
            _subjects,
            _proxyFormState,
            get _fields () {
                return _fields;
            },
            get _formValues () {
                return _formValues;
            },
            get _state () {
                return _state;
            },
            set _state (value){
                _state = value;
            },
            get _defaultValues () {
                return _defaultValues;
            },
            get _names () {
                return _names;
            },
            set _names (value){
                _names = value;
            },
            get _formState () {
                return _formState;
            },
            get _options () {
                return _options;
            },
            set _options (value){
                _options = {
                    ..._options,
                    ...value
                };
            }
        },
        subscribe,
        trigger,
        register,
        handleSubmit,
        watch,
        setValue,
        getValues,
        reset,
        resetField,
        clearErrors,
        unregister,
        setError,
        setFocus,
        getFieldState
    };
    return {
        ...methods,
        formControl: methods
    };
}
var generateId = ()=>{
    if (typeof crypto !== 'undefined' && crypto.randomUUID) {
        return crypto.randomUUID();
    }
    const d = typeof performance === 'undefined' ? Date.now() : performance.now() * 1000;
    return 'xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx'.replace(/[xy]/g, (c)=>{
        const r = (Math.random() * 16 + d) % 16 | 0;
        return (c == 'x' ? r : r & 0x3 | 0x8).toString(16);
    });
};
var getFocusFieldName = (name, index, options = {})=>options.shouldFocus || isUndefined(options.shouldFocus) ? options.focusName || `${name}.${isUndefined(options.focusIndex) ? index : options.focusIndex}.` : '';
var appendAt = (data, value1)=>[
        ...data,
        ...convertToArrayPayload(value1)
    ];
var fillEmptyArray = (value1)=>Array.isArray(value1) ? value1.map(()=>undefined) : undefined;
function insert(data, index, value1) {
    return [
        ...data.slice(0, index),
        ...convertToArrayPayload(value1),
        ...data.slice(index)
    ];
}
var moveArrayAt = (data, from, to)=>{
    if (!Array.isArray(data)) {
        return [];
    }
    if (isUndefined(data[to])) {
        data[to] = undefined;
    }
    data.splice(to, 0, data.splice(from, 1)[0]);
    return data;
};
var prependAt = (data, value1)=>[
        ...convertToArrayPayload(value1),
        ...convertToArrayPayload(data)
    ];
function removeAtIndexes(data, indexes) {
    let i = 0;
    const temp = [
        ...data
    ];
    for (const index of indexes){
        temp.splice(index - i, 1);
        i++;
    }
    return compact(temp).length ? temp : [];
}
var removeArrayAt = (data, index)=>isUndefined(index) ? [] : removeAtIndexes(data, convertToArrayPayload(index).sort((a, b)=>a - b));
var swapArrayAt = (data, indexA, indexB)=>{
    [data[indexA], data[indexB]] = [
        data[indexB],
        data[indexA]
    ];
};
var updateAt = (fieldValues, index, value1)=>{
    fieldValues[index] = value1;
    return fieldValues;
};
/**
 * A custom hook that exposes convenient methods to perform operations with a list of dynamic inputs that need to be appended, updated, removed etc. • [Demo](https://codesandbox.io/s/react-hook-form-usefieldarray-ssugn) • [Video](https://youtu.be/4MrbfGSFY2A)
 *
 * @remarks
 * [API](https://react-hook-form.com/docs/usefieldarray) • [Demo](https://codesandbox.io/s/react-hook-form-usefieldarray-ssugn)
 *
 * @param props - useFieldArray props
 *
 * @returns methods - functions to manipulate with the Field Arrays (dynamic inputs) {@link UseFieldArrayReturn}
 *
 * @example
 * ```tsx
 * function App() {
 *   const { register, control, handleSubmit, reset, trigger, setError } = useForm({
 *     defaultValues: {
 *       test: []
 *     }
 *   });
 *   const { fields, append } = useFieldArray({
 *     control,
 *     name: "test"
 *   });
 *
 *   return (
 *     <form onSubmit={handleSubmit(data => console.log(data))}>
 *       {fields.map((item, index) => (
 *          <input key={item.id} {...register(`test.${index}.firstName`)}  />
 *       ))}
 *       <button type="button" onClick={() => append({ firstName: "bill" })}>
 *         append
 *       </button>
 *       <input type="submit" />
 *     </form>
 *   );
 * }
 * ```
 */ function useFieldArray(props) {
    const methods = useFormContext();
    const { control = methods.control, name, keyName = 'id', shouldUnregister, rules } = props;
    const [fields, setFields] = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"].useState(control._getFieldArray(name));
    const ids = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"].useRef(control._getFieldArray(name).map(generateId));
    const _fieldIds = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"].useRef(fields);
    const _actioned = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"].useRef(false);
    _fieldIds.current = fields;
    control._names.array.add(name);
    __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"].useMemo(()=>rules && control.register(name, rules), [
        control,
        rules,
        name
    ]);
    useIsomorphicLayoutEffect(()=>control._subjects.array.subscribe({
            next: ({ values, name: fieldArrayName })=>{
                if (fieldArrayName === name || !fieldArrayName) {
                    const fieldValues = get(values, name);
                    if (Array.isArray(fieldValues)) {
                        setFields(fieldValues);
                        ids.current = fieldValues.map(generateId);
                    }
                }
            }
        }).unsubscribe, [
        control,
        name
    ]);
    const updateValues = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"].useCallback((updatedFieldArrayValues)=>{
        _actioned.current = true;
        control._setFieldArray(name, updatedFieldArrayValues);
    }, [
        control,
        name
    ]);
    const append = (value1, options)=>{
        const appendValue = convertToArrayPayload(cloneObject(value1));
        const updatedFieldArrayValues = appendAt(control._getFieldArray(name), appendValue);
        control._names.focus = getFocusFieldName(name, updatedFieldArrayValues.length - 1, options);
        ids.current = appendAt(ids.current, appendValue.map(generateId));
        updateValues(updatedFieldArrayValues);
        setFields(updatedFieldArrayValues);
        control._setFieldArray(name, updatedFieldArrayValues, appendAt, {
            argA: fillEmptyArray(value1)
        });
    };
    const prepend = (value1, options)=>{
        const prependValue = convertToArrayPayload(cloneObject(value1));
        const updatedFieldArrayValues = prependAt(control._getFieldArray(name), prependValue);
        control._names.focus = getFocusFieldName(name, 0, options);
        ids.current = prependAt(ids.current, prependValue.map(generateId));
        updateValues(updatedFieldArrayValues);
        setFields(updatedFieldArrayValues);
        control._setFieldArray(name, updatedFieldArrayValues, prependAt, {
            argA: fillEmptyArray(value1)
        });
    };
    const remove = (index)=>{
        const updatedFieldArrayValues = removeArrayAt(control._getFieldArray(name), index);
        ids.current = removeArrayAt(ids.current, index);
        updateValues(updatedFieldArrayValues);
        setFields(updatedFieldArrayValues);
        !Array.isArray(get(control._fields, name)) && set(control._fields, name, undefined);
        control._setFieldArray(name, updatedFieldArrayValues, removeArrayAt, {
            argA: index
        });
    };
    const insert$1 = (index, value1, options)=>{
        const insertValue = convertToArrayPayload(cloneObject(value1));
        const updatedFieldArrayValues = insert(control._getFieldArray(name), index, insertValue);
        control._names.focus = getFocusFieldName(name, index, options);
        ids.current = insert(ids.current, index, insertValue.map(generateId));
        updateValues(updatedFieldArrayValues);
        setFields(updatedFieldArrayValues);
        control._setFieldArray(name, updatedFieldArrayValues, insert, {
            argA: index,
            argB: fillEmptyArray(value1)
        });
    };
    const swap = (indexA, indexB)=>{
        const updatedFieldArrayValues = control._getFieldArray(name);
        swapArrayAt(updatedFieldArrayValues, indexA, indexB);
        swapArrayAt(ids.current, indexA, indexB);
        updateValues(updatedFieldArrayValues);
        setFields(updatedFieldArrayValues);
        control._setFieldArray(name, updatedFieldArrayValues, swapArrayAt, {
            argA: indexA,
            argB: indexB
        }, false);
    };
    const move = (from, to)=>{
        const updatedFieldArrayValues = control._getFieldArray(name);
        moveArrayAt(updatedFieldArrayValues, from, to);
        moveArrayAt(ids.current, from, to);
        updateValues(updatedFieldArrayValues);
        setFields(updatedFieldArrayValues);
        control._setFieldArray(name, updatedFieldArrayValues, moveArrayAt, {
            argA: from,
            argB: to
        }, false);
    };
    const update = (index, value1)=>{
        const updateValue = cloneObject(value1);
        const updatedFieldArrayValues = updateAt(control._getFieldArray(name), index, updateValue);
        ids.current = [
            ...updatedFieldArrayValues
        ].map((item, i)=>!item || i === index ? generateId() : ids.current[i]);
        updateValues(updatedFieldArrayValues);
        setFields([
            ...updatedFieldArrayValues
        ]);
        control._setFieldArray(name, updatedFieldArrayValues, updateAt, {
            argA: index,
            argB: updateValue
        }, true, false);
    };
    const replace = (value1)=>{
        const updatedFieldArrayValues = convertToArrayPayload(cloneObject(value1));
        ids.current = updatedFieldArrayValues.map(generateId);
        updateValues([
            ...updatedFieldArrayValues
        ]);
        setFields([
            ...updatedFieldArrayValues
        ]);
        control._setFieldArray(name, [
            ...updatedFieldArrayValues
        ], (data)=>data, {}, true, false);
    };
    __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"].useEffect(()=>{
        control._state.action = false;
        isWatched(name, control._names) && control._subjects.state.next({
            ...control._formState
        });
        if (_actioned.current && (!getValidationModes(control._options.mode).isOnSubmit || control._formState.isSubmitted) && !getValidationModes(control._options.reValidateMode).isOnSubmit) {
            if (control._options.resolver) {
                control._runSchema([
                    name
                ]).then((result)=>{
                    const error = get(result.errors, name);
                    const existingError = get(control._formState.errors, name);
                    if (existingError ? !error && existingError.type || error && (existingError.type !== error.type || existingError.message !== error.message) : error && error.type) {
                        error ? set(control._formState.errors, name, error) : unset(control._formState.errors, name);
                        control._subjects.state.next({
                            errors: control._formState.errors
                        });
                    }
                });
            } else {
                const field = get(control._fields, name);
                if (field && field._f && !(getValidationModes(control._options.reValidateMode).isOnSubmit && getValidationModes(control._options.mode).isOnSubmit)) {
                    validateField(field, control._names.disabled, control._formValues, control._options.criteriaMode === VALIDATION_MODE.all, control._options.shouldUseNativeValidation, true).then((error)=>!isEmptyObject(error) && control._subjects.state.next({
                            errors: updateFieldArrayRootError(control._formState.errors, error, name)
                        }));
                }
            }
        }
        control._subjects.state.next({
            name,
            values: cloneObject(control._formValues)
        });
        control._names.focus && iterateFieldsByAction(control._fields, (ref, key)=>{
            if (control._names.focus && key.startsWith(control._names.focus) && ref.focus) {
                ref.focus();
                return 1;
            }
            return;
        });
        control._names.focus = '';
        control._setValid();
        _actioned.current = false;
    }, [
        fields,
        name,
        control
    ]);
    __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"].useEffect(()=>{
        !get(control._formValues, name) && control._setFieldArray(name);
        return ()=>{
            const updateMounted = (name, value1)=>{
                const field = get(control._fields, name);
                if (field && field._f) {
                    field._f.mount = value1;
                }
            };
            control._options.shouldUnregister || shouldUnregister ? control.unregister(name) : updateMounted(name, false);
        };
    }, [
        name,
        control,
        keyName,
        shouldUnregister
    ]);
    return {
        swap: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"].useCallback(swap, [
            updateValues,
            name,
            control
        ]),
        move: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"].useCallback(move, [
            updateValues,
            name,
            control
        ]),
        prepend: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"].useCallback(prepend, [
            updateValues,
            name,
            control
        ]),
        append: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"].useCallback(append, [
            updateValues,
            name,
            control
        ]),
        remove: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"].useCallback(remove, [
            updateValues,
            name,
            control
        ]),
        insert: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"].useCallback(insert$1, [
            updateValues,
            name,
            control
        ]),
        update: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"].useCallback(update, [
            updateValues,
            name,
            control
        ]),
        replace: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"].useCallback(replace, [
            updateValues,
            name,
            control
        ]),
        fields: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"].useMemo(()=>fields.map((field, index)=>({
                    ...field,
                    [keyName]: ids.current[index] || generateId()
                })), [
            fields,
            keyName
        ])
    };
}
/**
 * Custom hook to manage the entire form.
 *
 * @remarks
 * [API](https://react-hook-form.com/docs/useform) • [Demo](https://codesandbox.io/s/react-hook-form-get-started-ts-5ksmm) • [Video](https://www.youtube.com/watch?v=RkXv4AXXC_4)
 *
 * @param props - form configuration and validation parameters.
 *
 * @returns methods - individual functions to manage the form state. {@link UseFormReturn}
 *
 * @example
 * ```tsx
 * function App() {
 *   const { register, handleSubmit, watch, formState: { errors } } = useForm();
 *   const onSubmit = data => console.log(data);
 *
 *   console.log(watch("example"));
 *
 *   return (
 *     <form onSubmit={handleSubmit(onSubmit)}>
 *       <input defaultValue="test" {...register("example")} />
 *       <input {...register("exampleRequired", { required: true })} />
 *       {errors.exampleRequired && <span>This field is required</span>}
 *       <button>Submit</button>
 *     </form>
 *   );
 * }
 * ```
 */ function useForm(props = {}) {
    const _formControl = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"].useRef(undefined);
    const _values = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"].useRef(undefined);
    const [formState, updateFormState] = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"].useState({
        isDirty: false,
        isValidating: false,
        isLoading: isFunction(props.defaultValues),
        isSubmitted: false,
        isSubmitting: false,
        isSubmitSuccessful: false,
        isValid: false,
        submitCount: 0,
        dirtyFields: {},
        touchedFields: {},
        validatingFields: {},
        errors: props.errors || {},
        disabled: props.disabled || false,
        isReady: false,
        defaultValues: isFunction(props.defaultValues) ? undefined : props.defaultValues
    });
    if (!_formControl.current) {
        if (props.formControl) {
            _formControl.current = {
                ...props.formControl,
                formState
            };
            if (props.defaultValues && !isFunction(props.defaultValues)) {
                props.formControl.reset(props.defaultValues, props.resetOptions);
            }
        } else {
            const { formControl, ...rest } = createFormControl(props);
            _formControl.current = {
                ...rest,
                formState
            };
        }
    }
    const control = _formControl.current.control;
    control._options = props;
    useIsomorphicLayoutEffect(()=>{
        const sub = control._subscribe({
            formState: control._proxyFormState,
            callback: ()=>updateFormState({
                    ...control._formState
                }),
            reRenderRoot: true
        });
        updateFormState((data)=>({
                ...data,
                isReady: true
            }));
        control._formState.isReady = true;
        return sub;
    }, [
        control
    ]);
    __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"].useEffect(()=>control._disableForm(props.disabled), [
        control,
        props.disabled
    ]);
    __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"].useEffect(()=>{
        if (props.mode) {
            control._options.mode = props.mode;
        }
        if (props.reValidateMode) {
            control._options.reValidateMode = props.reValidateMode;
        }
    }, [
        control,
        props.mode,
        props.reValidateMode
    ]);
    __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"].useEffect(()=>{
        if (props.errors) {
            control._setErrors(props.errors);
            control._focusError();
        }
    }, [
        control,
        props.errors
    ]);
    __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"].useEffect(()=>{
        props.shouldUnregister && control._subjects.state.next({
            values: control._getWatch()
        });
    }, [
        control,
        props.shouldUnregister
    ]);
    __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"].useEffect(()=>{
        if (control._proxyFormState.isDirty) {
            const isDirty = control._getDirty();
            if (isDirty !== formState.isDirty) {
                control._subjects.state.next({
                    isDirty
                });
            }
        }
    }, [
        control,
        formState.isDirty
    ]);
    __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"].useEffect(()=>{
        if (props.values && !deepEqual(props.values, _values.current)) {
            control._reset(props.values, {
                keepFieldsRef: true,
                ...control._options.resetOptions
            });
            _values.current = props.values;
            updateFormState((state)=>({
                    ...state
                }));
        } else {
            control._resetDefaultValues();
        }
    }, [
        control,
        props.values
    ]);
    __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"].useEffect(()=>{
        if (!control._state.mount) {
            control._setValid();
            control._state.mount = true;
        }
        if (control._state.watch) {
            control._state.watch = false;
            control._subjects.state.next({
                ...control._formState
            });
        }
        control._removeUnmounted();
    });
    _formControl.current.formState = getProxyFormState(formState, control);
    return _formControl.current;
}
;
 //# sourceMappingURL=index.esm.mjs.map
}),

};

//# sourceMappingURL=_646dd918._.js.map