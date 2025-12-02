/*
    Mobile Controller Library by NPA
    All rights reserved.
    Version: 1.0.0
    Modified by Snubby for Slime Rancher
*/
const MobileController = function() {
    let e = {
            targetSelector: "canvas",
            debug: false,
            leftJoystick: {
                deadzone: 12,
                maxDistance: 80,
                mapping: {
                    up: "w",
                    down: "s",
                    left: "a",
                    right: "d"
                }
            },
            rightJoystick: {
                sensitivity: 2,
                maxDistance: 100
            },
            leftButtons: [{
                id: "btn-leftclick",
                label: "Shoot",
                type: "mouse",
                button: 0,
                hold: true
            }],
            rightButtons: [{
                    id: "btn-blank-right-1",
                    label: "",
                    type: "key",
                    hold: false
                },
                {
                    id: "btn-blank-right-2",
                    label: "",
                    type: "key",
                    hold: false
                },
                {
                    id: "btn-rightclick",
                    label: "Vac",
                    type: "mouse",
                    button: 2,
                    hold: true
                },
                {
                    id: "btn-jump",
                    label: "Jump",
                    type: "key",
                    key: " ",
                    hold: true
                }
            ],
            centerButtons: [{
                    id: "btn-scroll-up",
                    label: "<",
                    type: "scroll",
                    dir: "up",
                    hold: true
                },
                {
                    id: "btn-e",
                    label: "Interact",
                    type: "key",
                    key: "e",
                    hold: true
                },
                {
                    id: "btn-scroll-down",
                    label: ">",
                    type: "scroll",
                    dir: "down",
                    hold: true
                }
            ],
            styles: {
                containerZIndex: 2147483647
            }
        },
        t = new Set,
        n = new Set,
        o = new Map,
        l = null,
        i = null,
        a = null,
        s = null,
        r = null,
        c = null,
        d = null,
        p = false,
        u = null,
        f = null,
        y = null,
        q = new Map(),
        escBtn = null;

    function m(e, t, n) {
        return Math.max(t, Math.min(n, e))
    }

    function h(evType, keyStr) {
        let code, keyCode;
        const k = keyStr;
        if (k === " ") {
            code = "Space";
            keyCode = 32
        } else if (k === "Control") {
            code = "ControlLeft";
            keyCode = 17
        } else if (k === "Escape") {
            code = "Escape";
            keyCode = 27
        } else if (k === "Shift") {
            code = "ShiftLeft";
            keyCode = 16
        } else if (/^[a-zA-Z]$/.test(k)) {
            code = "Key" + k.toUpperCase();
            keyCode = k.toUpperCase().charCodeAt(0)
        } else if (/^[0-9]$/.test(k)) {
            code = "Digit" + k;
            keyCode = k.charCodeAt(0)
        } else {
            code = k;
            keyCode = 0
        }
        const e2 = new KeyboardEvent(evType, {
            key: keyStr,
            code,
            keyCode,
            which: keyCode,
            bubbles: true,
            cancelable: true
        });
        try {
            document.dispatchEvent(e2)
        } catch (_) {}
    }

    let b = 0;

    function g(dx, dy) {
        const now = Date.now();
        if (now - b < 5) return;
        b = now;
        const pe = new PointerEvent("pointermove", {
            bubbles: true,
            cancelable: true,
            pointerId: 1,
            pointerType: "touch",
            movementX: dx * e.rightJoystick.sensitivity,
            movementY: dy * e.rightJoystick.sensitivity
        });
        const me = new MouseEvent("mousemove", {
            bubbles: true,
            cancelable: true,
            movementX: dx * e.rightJoystick.sensitivity,
            movementY: dy * e.rightJoystick.sensitivity
        });
        if (y) {
            try {
                y.dispatchEvent(pe)
            } catch (_) {}
            try {
                y.dispatchEvent(me)
            } catch (_) {}
        }
    }

    function wheelStep(dir, amount) {
        if (!y) return;
        const deltaY = dir === "up" ? -amount : amount;
        try {
            y.dispatchEvent(new WheelEvent("wheel", {
                deltaY,
                bubbles: true,
                cancelable: true
            }))
        } catch (_) {}
    }

    function v(kind, btn) {
        if (y) try {
            y.dispatchEvent(new MouseEvent(kind === "down" ? "mousedown" : "mouseup", {
                bubbles: true,
                cancelable: true,
                button: btn
            }))
        } catch (_) {}
    }

    function x(nv, ov) {
        const map = e.leftJoystick.mapping,
            dz = e.leftJoystick.deadzone;
        if (Math.hypot(nv, ov) < dz) {
            k();
            i && (i.style.transform = "translate(0px,0px)");
            return
        }
        const sMax = e.leftJoystick.maxDistance,
            rX = m(nv / sMax, -1, 1),
            rY = m(ov / sMax, -1, 1),
            need = new Set;
        (-rY > .35 && need.add(map.up));
        (rY > .35 && need.add(map.down));
        (rX < -.35 && need.add(map.left));
        (rX > .35 && need.add(map.right));
        if (i) i.style.transform = `translate(${m(nv,-sMax,sMax)}px, ${m(ov,-sMax,sMax)}px)`;
        for (const pressed of Array.from(t))
            if (!need.has(pressed) && Object.values(map).includes(pressed)) {
                t.delete(pressed);
                h("keyup", pressed);
            }
        for (const key of need)
            if (!t.has(key)) {
                t.add(key);
                h("keydown", key);
            }
    }

    function k() {
        for (const key of Object.values(e.leftJoystick.mapping))
            if (t.has(key)) {
                t.delete(key);
                h("keyup", key)
            }
    }

    function $(tx, ty) {
        const oMax = e.rightJoystick.maxDistance,
            lx = m(tx, -oMax, oMax),
            ly = m(ty, -oMax, oMax);
        s && (s.style.transform = `translate(${lx}px, ${ly}px)`);
        g(tx, ty)
    }

    function _(cfg) {
        const n = document.createElement("div");
        n.className = "mc-btn";
        n.id = cfg.id;
        n.textContent = cfg.label;
        n.draggable = false;
        n.setAttribute("role", "button");
        n.setAttribute("aria-label", cfg.label || "Blank Button");
        n.style.userSelect = "none";
        n.style.webkitUserSelect = "none";
        n.style.MozUserSelect = "none";
        n.style.msUserSelect = "none";
        n.style.webkitTouchCallout = "none";
        n.style.webkitUserDrag = "none";
        n.ondragstart = () => false;
        for (const evt of ["selectstart", "copy", "cut", "dragstart", "contextmenu"]) n.addEventListener(evt, e => e.preventDefault());
        n.addEventListener("pointermove", e => {
            e.preventDefault();
            e.stopPropagation()
        }, {
            passive: false
        });
        n.addEventListener("touchmove", e => {
            e.preventDefault();
            e.stopPropagation()
        }, {
            passive: false
        });
        return n;
    }

    function w(e2) {
        for (const t2 of Array.from(e2.changedTouches)) {
            const n = t2.clientX,
                i2 = t2.clientY,
                sRect = l.getBoundingClientRect(),
                rRect = a.getBoundingClientRect(),
                inLeft = n >= sRect.left && n <= sRect.right && i2 >= sRect.top && i2 <= sRect.bottom,
                inRight = n >= rRect.left && n <= rRect.right && i2 >= rRect.top && i2 <= rRect.bottom;
            if (inLeft) {
                const p = n - (sRect.left + sRect.width / 2),
                    u = i2 - (sRect.top + sRect.height / 2);
                o.set(t2.identifier, {
                    type: "left",
                    startX: n,
                    startY: i2,
                    lastX: n,
                    lastY: i2
                });
                x(p, u);
            } else if (inRight) {
                const f2 = n - (rRect.left + rRect.width / 2),
                    y2 = t2.clientY - (rRect.top + rRect.height / 2);
                o.set(t2.identifier, {
                    type: "right",
                    startX: n,
                    startY: i2,
                    lastX: n,
                    lastY: i2
                });
                $(f2, y2);
            }
        }
        e2.preventDefault();
        e2.stopPropagation();
    }

    function C(tEv) {
        for (const nTouch of Array.from(tEv.changedTouches))
            if (o.has(nTouch.identifier)) {
                const st = o.get(nTouch.identifier);
                if (st.type === "left") {
                    const r = l.getBoundingClientRect(),
                        cX = nTouch.clientX - (r.left + r.width / 2),
                        dY = nTouch.clientY - (r.top + r.height / 2);
                    x(cX, dY);
                } else {
                    const pX = st.lastX,
                        uY = st.lastY;
                    st.lastX = nTouch.clientX;
                    st.lastY = nTouch.clientY;
                    const fDX = nTouch.clientX - pX,
                        yDY = nTouch.clientY - uY,
                        hRect = a.getBoundingClientRect(),
                        bX = nTouch.clientX - (hRect.left + hRect.width / 2),
                        vY = nTouch.clientY - (hRect.top + hRect.height / 2),
                        kMax = e.rightJoystick.maxDistance,
                        $X = m(bX, -kMax, kMax),
                        _Y = m(vY, -kMax, kMax);
                    s && (s.style.transform = `translate(${$X}px, ${_Y}px)`);
                    g(fDX, yDY);
                }
            }
        tEv.preventDefault();
        tEv.stopPropagation();
    }

    function E(ev) {
        for (const t2 of Array.from(ev.changedTouches))
            if (o.has(t2.identifier)) {
                const st = o.get(t2.identifier);
                if (st.type === "left") {
                    i.style.transition = "transform 0.12s ease-out";
                    i.style.transform = "translate(0px,0px)";
                    k();
                } else {
                    s.style.transition = "transform 0.12s ease-out";
                    s.style.transform = "translate(0px,0px)";
                }
                o.delete(t2.identifier);
            }
        ev.preventDefault();
        ev.stopPropagation();
    }

    function D(cfg) {
        if (cfg.type === "key") {
            if (cfg.hold) {
                if (!t.has(cfg.key)) {
                    t.add(cfg.key);
                    h("keydown", cfg.key);
                }
            } else {
                h("keydown", cfg.key);
                h("keyup", cfg.key);
            }
        } else if (cfg.type === "mouse") {
            if (cfg.hold) {
                if (!n.has(cfg.button)) {
                    n.add(cfg.button);
                    v("down", cfg.button);
                }
            } else {
                v("down", cfg.button);
                v("up", cfg.button);
            }
        } else if (cfg.type === "scroll") {
            const step = () => wheelStep(cfg.dir, cfg.amount || 1);
            step();
            const id = setInterval(step, 60);
            q.set(cfg.id, id);
        }
    }

    function L(cfg) {
        if (cfg.type === "key") {
            if (cfg.hold && t.has(cfg.key)) {
                t.delete(cfg.key);
                h("keyup", cfg.key);
            }
        } else if (cfg.type === "mouse") {
            if (cfg.hold && n.has(cfg.button)) {
                n.delete(cfg.button);
                v("up", cfg.button);
            }
        } else if (cfg.type === "scroll") {
            const id = q.get(cfg.id);
            if (id) {
                clearInterval(id);
                q.delete(cfg.id);
            }
        }
    }

    function J() {
        if (p) return;
        p = true;

        if (!document.getElementById("mobile-controller-styles")) {
            const st = document.createElement("style");
            st.id = "mobile-controller-styles";
            st.textContent = `
      #mobile-controller-root{position:fixed;left:0;top:0;right:0;bottom:0;pointer-events:none;z-index:${e.styles.containerZIndex};-webkit-user-select:none;-webkit-touch-callout:none; touch-action: manipulation; font-family:"Open Sans", sans-serif;}
      .mc-area{pointer-events:auto}
      .mc-joy{position:absolute;border-radius:50%;background:rgba(0,0,0,0.18);display:flex;align-items:center;justify-content:center;pointer-events:auto;touch-action:none;overflow:visible}
      .mc-knob{width:64px;height:64px;border-radius:50%;background:rgba(255,255,255,0.12);box-shadow:0 6px 18px rgba(0,0,0,0.4);transition:transform 0.02s linear;pointer-events:none}
      .mc-buttons{position:fixed;display:flex;flex-direction:column;gap:12px;pointer-events:auto;z-index:${e.styles.containerZIndex}}
      .mc-left-buttons{
        left:12px;
        bottom:calc(12px + ${2*e.leftJoystick.maxDistance}px + 12px);
        display:grid;
        grid-template-columns:repeat(2,70px);
        grid-auto-rows:50px;
        gap:12px;
        transform:translateY(-24px);
      }
      .mc-right-buttons{
        right:12px;
        bottom:calc(12px + ${2*e.rightJoystick.maxDistance}px + 12px);
        display:grid;
        grid-template-columns:repeat(2,70px);
        grid-auto-rows:50px;
        gap:12px;
        transform:translateY(-24px);
      }
      .mc-center-buttons{
        position:fixed; zoom: 65%; left:50%; transform:translateX(-50%);
        bottom:12px; display:flex; flex-direction:row; gap:28px; align-items:center; justify-content:center;
        pointer-events:auto; z-index:${e.styles.containerZIndex}
      }
      .mc-btn {
        width: clamp(48px, 12vw, 70px);
        height: clamp(48px, 12vw, 70px);
        padding: 0;
        font-size: clamp(12px, 3.5vw, 16px);
        border-radius: 50%;
        background: radial-gradient(circle at 60% 40%, #ffb6e6 0%, #ff69b4 100%);
        color: white;
        text-align: center;
        user-select: none;
        -webkit-touch-callout: none;
        -webkit-user-drag: none;
        user-drag: none;
        touch-action: none;
        display: flex;
        align-items: center;
        justify-content: center;
        border: 2px solid #ff69b4;
        box-shadow: 0 4px 12px rgba(255, 105, 180, 0.25);
        opacity: 0.65;
      }
      .mc-btn:active{transform:scale(0.98)}
      #btn-esc{position:fixed;top:12px;left:12px;z-index:${e.styles.containerZIndex};}
      #btn-shift{position:fixed;top:12px;right:12px;z-index:${e.styles.containerZIndex};}

      @media (max-width: 700px){
        #btn-esc,
        #btn-shift{
            width: 44px !important;
            height: 44px !important;
            font-size: 11px !important;
            border-width: 1.5px;
      }
        #btn-esc{ top: 8px; left: 8px; }
        #btn-shift{ top: 8px; right: 8px; }
      }
      `;
            document.head.appendChild(st);
        }

        // root + target
        f = document.createElement("div");
        f.id = "mobile-controller-root";
        f.style.display = "block";
        y = (() => {
            try {
                const n = document.querySelector(e.targetSelector);
                if (n) return n;
            } catch (_) {}
            return document;
        })();

        // joysticks
        l = document.createElement("div");
        l.className = "mc-joy mc-area";
        l.style.left = "12px";
        l.style.bottom = "12px";
        l.style.width = 2 * e.leftJoystick.maxDistance + "px";
        l.style.height = 2 * e.leftJoystick.maxDistance + "px";
        i = document.createElement("div");
        i.className = "mc-knob";
        i.style.touchAction = "none";
        l.appendChild(i);
        f.appendChild(l);

        a = document.createElement("div");
        a.className = "mc-joy mc-area";
        a.style.right = "12px";
        a.style.bottom = "12px";
        a.style.width = 2 * e.rightJoystick.maxDistance + "px";
        a.style.height = 2 * e.rightJoystick.maxDistance + "px";
        s = document.createElement("div");
        s.className = "mc-knob";
        s.style.touchAction = "none";
        a.appendChild(s);
        f.appendChild(a);

        // grids
        r = document.createElement("div");
        r.className = "mc-buttons mc-left-buttons mc-area";
        document.body.appendChild(r);
        c = document.createElement("div");
        c.className = "mc-buttons mc-right-buttons mc-area";
        document.body.appendChild(c);
        d = document.createElement("div");
        d.className = "mc-buttons mc-center-buttons mc-area";
        document.body.appendChild(d);

        // build buttons
        for (const cfg of e.leftButtons.filter(b => b.label)) {
            const btn = _(cfg);
            r.appendChild(btn);
            for (const evt of ["pointerdown", "pointerup", "pointercancel", "pointerleave"]) {
                btn.addEventListener(evt, (ev) => {
                    ev.preventDefault();
                    ev.stopPropagation();
                    if (evt === "pointerdown") {
                        D(cfg);
                        btn.classList.add("mc-pressed");
                    } else {
                        L(cfg);
                        btn.classList.remove("mc-pressed");
                    }
                }, {
                    passive: false
                });
            }
        }
        for (const cfg of e.rightButtons.filter(b => b.label)) {
            const btn = _(cfg);
            c.appendChild(btn);
            for (const evt of ["pointerdown", "pointerup", "pointercancel", "pointerleave"]) {
                btn.addEventListener(evt, (ev) => {
                    ev.preventDefault();
                    ev.stopPropagation();
                    if (evt === "pointerdown") {
                        D(cfg);
                        btn.classList.add("mc-pressed");
                    } else {
                        L(cfg);
                        btn.classList.remove("mc-pressed");
                    }
                }, {
                    passive: false
                });
            }
        }
        for (const cfg of e.centerButtons.filter(b => b.label)) {
            const btn = _(cfg);
            d.appendChild(btn);
            for (const evt of ["pointerdown", "pointerup", "pointercancel", "pointerleave"]) {
                btn.addEventListener(evt, (ev) => {
                    ev.preventDefault();
                    ev.stopPropagation();
                    if (evt === "pointerdown") {
                        D(cfg);
                        btn.classList.add("mc-pressed");
                    } else {
                        L(cfg);
                        btn.classList.remove("mc-pressed");
                    }
                }, {
                    passive: false
                });
            }
        }

        escBtn = _({
            id: "btn-esc",
            label: "Menu",
            type: "key",
            key: "Escape",
            hold: false
        });
        shiftBtn = _({
            id: "btn-shift",
            label: "Sprint",
            type: "key",
            key: "Shift",
            hold: true
        });
        document.body.appendChild(escBtn);
        document.body.appendChild(shiftBtn);
        for (const evt of ["pointerdown", "pointerup", "pointercancel", "pointerleave"]) {
            escBtn.addEventListener(evt, (ev) => {
                ev.preventDefault();
                ev.stopPropagation();
                if (evt === "pointerdown") {
                    D({
                        type: "key",
                        key: "Escape",
                        hold: false,
                        id: "btn-esc"
                    });
                    escBtn.classList.add("mc-pressed");
                } else {
                    escBtn.classList.remove("mc-pressed");
                }
            }, {
                passive: false
            });
            shiftBtn.addEventListener(evt, (ev) => {
                ev.preventDefault();
                ev.stopPropagation();
                if (evt === "pointerdown") {
                    D({
                        type: "key",
                        key: "Shift",
                        hold: true,
                        id: "btn-shift"
                    });
                    shiftBtn.classList.add("mc-pressed");
                } else {
                    L({
                        type: "key",
                        key: "Shift",
                        hold: true,
                        id: "btn-shift"
                    });
                    shiftBtn.classList.remove("mc-pressed");
                }
            }, {
                passive: false
            });
        }

        // attach
        document.body.appendChild(f);
        f.addEventListener("touchstart", w, {
            passive: false
        });
        f.addEventListener("touchmove", C, {
            passive: false
        });
        f.addEventListener("touchend", E, {
            passive: false
        });
        f.addEventListener("touchcancel", E, {
            passive: false
        });

        e.debug && console.log("[MC] MobileController initialized and visible");
    }

    function S() {
        u && (u.disconnect(), u = null)
    }

    return {
        init: J,
        setConfig: (n) => Object.assign(e, n),
        CONFIG: e,
        _internal: {
            startAutoInitWatcher: function t() {
                try {
                    if (document.querySelector(e.targetSelector)) {
                        J();
                        S();
                        return
                    }
                } catch (_) {}
                (u = new MutationObserver(muts => {
                    for (const n of muts)
                        for (const o2 of Array.from(n.addedNodes)) try {
                            if (o2 instanceof Element && ((o2.matches && o2.matches(e.targetSelector)) || (o2.querySelector && o2.querySelector(e.targetSelector)))) {
                                J();
                                S();
                                return
                            }
                        } catch (_) {}
                })).observe(document.documentElement || document.body, {
                    childList: true,
                    subtree: true
                })
            }
        }
    }
}();

function isMobile() {
    return /Mobi|Android|iPhone|iPad|iPod|Opera Mini|IEMobile/i.test(navigator.userAgent)
}

document.addEventListener("DOMContentLoaded", () => {
    if (isMobile()) {
        requestAnimationFrame(() => {
            MobileController._internal.startAutoInitWatcher();

            document.querySelectorAll(".snubs").forEach(el => {
                el.style.setProperty("display", "none", "important");
            });

            Object.assign(document.body.style, {
                userSelect: "none",
                webkitUserSelect: "none",
                msUserSelect: "none",
                mozUserSelect: "none",
                webkitTouchCallout: "none"
            });

            setTimeout(() => {
                if (!localStorage.getItem("bookmarkPromptShown")) {
                    alert("Click 'Ok' to start game! You can save this page as a bookmark to open it easily later.");
                    localStorage.setItem("bookmarkPromptShown", "true");
                }
            }, 300);
        });
    } else {
        console.log("Mobile Controller disabled (not mobile)");
    }
});