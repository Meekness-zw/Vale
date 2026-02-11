module.exports = [
"[externals]/next/dist/compiled/next-server/app-page-turbo.runtime.dev.js [external] (next/dist/compiled/next-server/app-page-turbo.runtime.dev.js, cjs)", ((__turbopack_context__, module, exports) => {

const mod = __turbopack_context__.x("next/dist/compiled/next-server/app-page-turbo.runtime.dev.js", () => require("next/dist/compiled/next-server/app-page-turbo.runtime.dev.js"));

module.exports = mod;
}),
"[project]/app/page.tsx [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>HomePage
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react-jsx-dev-runtime.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react.js [app-ssr] (ecmascript)");
'use client';
;
;
function HomePage() {
    const cardRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useRef"])(null);
    const yesBtnRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useRef"])(null);
    const noBtnRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useRef"])(null);
    const buttonsRowRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useRef"])(null);
    const fireworksCanvasRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useRef"])(null);
    const [isCelebrating, setIsCelebrating] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])(false);
    const [isTouchDevice, setIsTouchDevice] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])(false);
    const [noText, setNoText] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])('No way');
    const [mobileNoClicks, setMobileNoClicks] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])(0);
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useEffect"])(()=>{
        // Detect touch vs mouse
        let touch = false;
        try {
            if (window.matchMedia && window.matchMedia('(pointer: coarse)').matches) {
                touch = true;
            } else if ('ontouchstart' in window || navigator.maxTouchPoints > 0) {
                touch = true;
            }
        } catch  {
            touch = 'ontouchstart' in window || navigator.maxTouchPoints > 0;
        }
        setIsTouchDevice(touch);
    }, []);
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useEffect"])(()=>{
        if (!isCelebrating) return;
        const card = cardRef.current;
        const canvas = fireworksCanvasRef.current;
        if (!card || !canvas) return;
        const ctx = canvas.getContext('2d');
        if (!ctx) return;
        const resizeCanvas = ()=>{
            const rect = card.getBoundingClientRect();
            canvas.width = rect.width;
            canvas.height = rect.height;
        };
        resizeCanvas();
        window.addEventListener('resize', resizeCanvas);
        let fireworks = [];
        let fwAnimating = true;
        let fireworkSpawner = null;
        const launchFireworks = ()=>{
            if (!canvas || !ctx) return;
            const bursts = 6;
            const centerX = canvas.width / 2;
            const centerY = canvas.height / 2.4;
            for(let i = 0; i < bursts; i++){
                const angleOffset = Math.random() * Math.PI * 2;
                const hue = 330 + Math.random() * 40;
                const particles = [];
                const count = 40;
                for(let j = 0; j < count; j++){
                    const angle = j / count * Math.PI * 2 + angleOffset;
                    const speed = 2.2 + Math.random() * 3.3;
                    particles.push({
                        x: centerX,
                        y: centerY,
                        vx: Math.cos(angle) * speed,
                        vy: Math.sin(angle) * speed,
                        life: 0,
                        maxLife: 45 + Math.random() * 15,
                        hue
                    });
                }
                fireworks.push({
                    particles
                });
            }
        };
        const updateFireworks = ()=>{
            if (!canvas || !ctx) return;
            ctx.clearRect(0, 0, canvas.width, canvas.height);
            fireworks.forEach((fw)=>{
                fw.particles.forEach((p)=>{
                    p.x += p.vx;
                    p.y += p.vy;
                    p.vy += 0.02;
                    p.life++;
                    const alpha = 1 - p.life / p.maxLife;
                    if (alpha <= 0) return;
                    ctx.beginPath();
                    ctx.arc(p.x, p.y, 2.3, 0, Math.PI * 2);
                    ctx.fillStyle = `hsla(${p.hue}, 85%, 60%, ${alpha})`;
                    ctx.fill();
                });
                fw.particles = fw.particles.filter((p)=>p.life < p.maxLife);
            });
            fireworks = fireworks.filter((fw)=>fw.particles.length > 0);
            if (fwAnimating) {
                requestAnimationFrame(updateFireworks);
            }
        };
        // start
        launchFireworks();
        requestAnimationFrame(updateFireworks);
        fireworkSpawner = window.setInterval(launchFireworks, 900);
        // Floating hearts
        const hearts = [
            '💖',
            '💘',
            '❤️',
            '💕',
            '💝'
        ];
        let heartSpawner = null;
        const spawnHeart = ()=>{
            if (!card) return;
            const span = document.createElement('span');
            span.className = 'floating-heart';
            span.textContent = hearts[Math.floor(Math.random() * hearts.length)];
            const cardWidth = card.clientWidth || 320;
            const offset = cardWidth * 0.2 / 2 + Math.random() * (cardWidth * 0.6);
            span.style.left = `${offset}px`;
            span.style.fontSize = `${18 + Math.random() * 10}px`;
            card.appendChild(span);
            window.setTimeout(()=>{
                if (span.parentNode) span.parentNode.removeChild(span);
            }, 3400);
        };
        spawnHeart();
        heartSpawner = window.setInterval(spawnHeart, 850);
        return ()=>{
            fwAnimating = false;
            if (fireworkSpawner) window.clearInterval(fireworkSpawner);
            if (heartSpawner) window.clearInterval(heartSpawner);
            window.removeEventListener('resize', resizeCanvas);
        };
    }, [
        isCelebrating
    ]);
    const dodgeNoButton = ()=>{
        const noBtn = noBtnRef.current;
        const buttonsRow = buttonsRowRef.current;
        if (!noBtn || !buttonsRow) return;
        const maxOffsetX = Math.max(20, buttonsRow.clientWidth / 2 - 40);
        const maxOffsetY = 55;
        const angle = Math.random() * Math.PI * 2;
        const radius = 20 + Math.random() * Math.min(maxOffsetX, maxOffsetY);
        const x = Math.cos(angle) * radius;
        const y = Math.sin(angle) * radius;
        noBtn.style.position = 'relative';
        noBtn.style.transform = `translate(${x}px, ${y}px)`;
        const yesBtn = yesBtnRef.current;
        if (yesBtn) {
            yesBtn.style.transform = 'translateY(-2px) scale(1.06)';
            yesBtn.style.boxShadow = '0 18px 36px rgba(55, 178, 77, 0.65)';
        }
    };
    const handleMobileNoTap = ()=>{
        const noBtn = noBtnRef.current;
        const yesBtn = yesBtnRef.current;
        if (!noBtn) return;
        const messages = [
            'Are you sure?',
            'Really sure?',
            'Think again...',
            'Last chance 😏'
        ];
        setMobileNoClicks((prev)=>{
            const next = prev + 1;
            const msgIndex = Math.min(next - 1, messages.length - 1);
            setNoText(messages[msgIndex]);
            const shrinkStep = 0.18;
            const growStep = 0.12;
            const scaleNo = Math.max(0, 1 - next * shrinkStep);
            const opacityNo = Math.max(0, 1 - next * shrinkStep);
            noBtn.style.transform = `scale(${scaleNo})`;
            noBtn.style.opacity = String(opacityNo);
            if (yesBtn) {
                const yesScale = 1 + next * growStep;
                yesBtn.style.transform = `scale(${yesScale})`;
            }
            if (scaleNo <= 0.1) {
                noBtn.style.display = 'none';
                noBtn.disabled = true;
            }
            return next;
        });
    };
    const handleNoMouseEnter = ()=>{
        if (isTouchDevice) return;
        dodgeNoButton();
    };
    const handleNoMouseMove = ()=>{
        if (isTouchDevice) return;
        dodgeNoButton();
    };
    const handleNoClick = (e)=>{
        e.preventDefault();
        // Detect touch at click time so the very first tap on mobile already shrinks the button
        const touchLike = ("TURBOPACK compile-time value", "undefined") !== 'undefined' && ('ontouchstart' in window || navigator.maxTouchPoints > 0);
        if (touchLike || isTouchDevice) {
            handleMobileNoTap();
        } else {
            dodgeNoButton();
        }
    };
    const handleYesClick = ()=>{
        setIsCelebrating(true);
        const yesBtn = yesBtnRef.current;
        const noBtn = noBtnRef.current;
        if (yesBtn) {
            yesBtn.disabled = true;
            yesBtn.style.opacity = '0.8';
        }
        if (noBtn) {
            noBtn.disabled = true;
            noBtn.style.opacity = '0.4';
        }
    };
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Fragment"], {
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "sparkles",
                "aria-hidden": "true"
            }, void 0, false, {
                fileName: "[project]/app/page.tsx",
                lineNumber: 255,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("main", {
                className: `card${isCelebrating ? ' celebrating' : ''}`,
                "aria-live": "polite",
                ref: cardRef,
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("canvas", {
                        id: "fireworksCanvas",
                        ref: fireworksCanvasRef
                    }, void 0, false, {
                        fileName: "[project]/app/page.tsx",
                        lineNumber: 261,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "hearts",
                        children: "💕💌💕"
                    }, void 0, false, {
                        fileName: "[project]/app/page.tsx",
                        lineNumber: 262,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("h1", {
                        className: "title",
                        children: "Will you be my Valentine?"
                    }, void 0, false, {
                        fileName: "[project]/app/page.tsx",
                        lineNumber: 263,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                        className: "subtitle",
                        children: "Choose wisely... but just so you know, the correct answer is obvious. 💖"
                    }, void 0, false, {
                        fileName: "[project]/app/page.tsx",
                        lineNumber: 264,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "buttons-row",
                        id: "buttonsRow",
                        ref: buttonsRowRef,
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                className: "btn-yes",
                                id: "yesBtn",
                                ref: yesBtnRef,
                                type: "button",
                                onClick: handleYesClick,
                                children: "Yes, of course!"
                            }, void 0, false, {
                                fileName: "[project]/app/page.tsx",
                                lineNumber: 269,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                className: "btn-no",
                                id: "noBtn",
                                ref: noBtnRef,
                                type: "button",
                                onMouseEnter: handleNoMouseEnter,
                                onMouseMove: handleNoMouseMove,
                                onFocus: handleNoMouseEnter,
                                onClick: handleNoClick,
                                children: noText
                            }, void 0, false, {
                                fileName: "[project]/app/page.tsx",
                                lineNumber: 278,
                                columnNumber: 11
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/app/page.tsx",
                        lineNumber: 268,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                        className: "hint",
                        children: '(Psst... the "No" button is very shy 👀)'
                    }, void 0, false, {
                        fileName: "[project]/app/page.tsx",
                        lineNumber: 291,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "gift-wrapper"
                    }, void 0, false, {
                        fileName: "[project]/app/page.tsx",
                        lineNumber: 293,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                        className: "bottom-note",
                        id: "celebrationText",
                        children: "I knew it chakanyura 😂🤣❤️"
                    }, void 0, false, {
                        fileName: "[project]/app/page.tsx",
                        lineNumber: 295,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "celebration",
                        id: "celebration",
                        children: isCelebrating && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("img", {
                            src: "https://bzangygroink.co.uk/wp-content/uploads/2022/10/quby-dancing.gif",
                            alt: "Cute dancing gif",
                            className: "celebration-gif",
                            loading: "lazy"
                        }, void 0, false, {
                            fileName: "[project]/app/page.tsx",
                            lineNumber: 301,
                            columnNumber: 13
                        }, this)
                    }, void 0, false, {
                        fileName: "[project]/app/page.tsx",
                        lineNumber: 299,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                        className: "bottom-note base-note",
                        children: "Made with way too much sweetness ✨"
                    }, void 0, false, {
                        fileName: "[project]/app/page.tsx",
                        lineNumber: 310,
                        columnNumber: 9
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/app/page.tsx",
                lineNumber: 256,
                columnNumber: 7
            }, this)
        ]
    }, void 0, true);
}
}),
"[project]/node_modules/next/dist/server/route-modules/app-page/module.compiled.js [app-ssr] (ecmascript)", ((__turbopack_context__, module, exports) => {
"use strict";

if ("TURBOPACK compile-time falsy", 0) //TURBOPACK unreachable
;
else {
    if ("TURBOPACK compile-time falsy", 0) //TURBOPACK unreachable
    ;
    else {
        if ("TURBOPACK compile-time truthy", 1) {
            if ("TURBOPACK compile-time truthy", 1) {
                module.exports = __turbopack_context__.r("[externals]/next/dist/compiled/next-server/app-page-turbo.runtime.dev.js [external] (next/dist/compiled/next-server/app-page-turbo.runtime.dev.js, cjs)");
            } else //TURBOPACK unreachable
            ;
        } else //TURBOPACK unreachable
        ;
    }
} //# sourceMappingURL=module.compiled.js.map
}),
"[project]/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react-jsx-dev-runtime.js [app-ssr] (ecmascript)", ((__turbopack_context__, module, exports) => {
"use strict";

module.exports = __turbopack_context__.r("[project]/node_modules/next/dist/server/route-modules/app-page/module.compiled.js [app-ssr] (ecmascript)").vendored['react-ssr'].ReactJsxDevRuntime; //# sourceMappingURL=react-jsx-dev-runtime.js.map
}),
"[project]/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react.js [app-ssr] (ecmascript)", ((__turbopack_context__, module, exports) => {
"use strict";

module.exports = __turbopack_context__.r("[project]/node_modules/next/dist/server/route-modules/app-page/module.compiled.js [app-ssr] (ecmascript)").vendored['react-ssr'].React; //# sourceMappingURL=react.js.map
}),
];

//# sourceMappingURL=%5Broot-of-the-server%5D__73ae023d._.js.map