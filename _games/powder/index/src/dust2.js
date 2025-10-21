var aa = 0,
    screenWidth = 512,
    screenHeight = 430,
    da, ea = 0,
    fa = 45,
    ga = false,
    ha = 4,
    ia = 2 * ha,
    ja = 2 * ha,
    ka = ia,
    la = ja,
    na = new Vector,
    oa = 2,
    pa = 0,
    backgroundDrawType = 2,
    ra = 0,
    sa = 0,
    ta = 0,
    ua = 0,
    isStopped = 0,
    wa = 0,
    xa = 0,
    ya = 0,
    isGravityOn = true,
    Aa = 0,
    Ba = 0,
    Da = 0,
    Ea = 0,
    Fa = 0,
    Ga = 0,
    Ha = 8,
    Ia = 8,
    Ja = 8,
    Ka = 8,
    La = new Int8Array(138880),
    Ma = new Int8Array(138880),
    Na = new Int32Array(500),
    Oa = new Int32Array(500),
    Pa = new Int32Array(500),
    Qa = new Int32Array(500),
    Ra = new Int8Array(500),
    Sa = 0,
    Ta = 0,
    Ua = -1,
    Va = 0,
    isMinimapActive = 0,
    Xa = -1,
    Ya = 29,
    arrayOfTypesOfElementInThisPosition = new Uint8Array(Ya + 277760 + 7E3),
    Za = 0,
    $a, ab, bb = [0, 0, 0, 0, 0, 0, 0, 0],
    cb = true,
    db = 0,
    eb = "",
    fb = 0,
    gb = "",
    hb =
    0,
    ib = "",
    jb = 0,
    kb = 0,
    lb = 0,
    mb = 0,
    nb = 0,
    ob = 0,
    pb = 0,
    rb = new ImageHandler,
    sb = "",
    tb = "",
    vb = new ImageHandler,
    wb, xb, yb = 0,
    zb = 0,
    Ab = 0,
    fontsText = ["sans-serif", "serif", "monospace", "setFont ->"],
    fontFormat = ["PLAIN", "BOLD", "ITALIC", "BOLD&ITALIC"],
    fontSizeArray = [12, 14, 16, 18, 20, 24, 30, 36, 48, 60, 72],
    Eb = new Int32Array(289 * screenWidth),
    imageHandlerForScreen = new ImageHandler,
    Gb = 1,
    Hb = 2,
    Ib = 3,
    Jb = 0,
    l = 1,
    Kb = 2,
    Lb = 3,
    p = 4,
    Mb = 0,
    Nb = 1,
    Ob = 2,
    Qb = 3,
    Rb = 4,
    Sb = 5,
    q = 6,
    r = 7,
    Tb = 8,
    Ub = 9,
    Vb = 10,
    Wb = 11,
    Xb = 12,
    Yb = 13,
    Zb = 14,
    ac = 15,
    bc = 16,
    cc = 17,
    dc = 18,
    ec = 19,
    fc = 20,
    gc = 21,
    hc = 22,
    ic = 23,
    jc = 24,
    kc = 25,
    lc = 26,
    mc = 27,
    nc = 28,
    oc = 29,
    pc = 30,
    qc = 31,
    rc = 32,
    sc = 33,
    tc = 34,
    uc =
    35,
    vc = 36,
    wc = 37,
    xc = 38,
    yc = 39,
    zc = 40,
    Ac = 41,
    Bc = 42,
    Cc = 43,
    Dc = 44,
    Ec = 45,
    Fc = 46,
    fighterId = 47,
    Hc = 48,
    cloneId = 49,
    Jc = 50,
    Kc = 51,
    Lc = 52,
    numberOfTypesOfElements = 40,
    Nc = [5, 6, 7, 8, 10, 1, 11, 13, 14, 15, 16, 17, 18, 19, 20, 21, 23, 24, 25, 26, 27, 28, 29, 30, 31, 32, 33, 34, 35, 37, 38, 39, 40, 41, 42, 43, 44, 50, 51, 52, 0, 0, 0, 0, 0, 0, 0, 0, 2, 0, 0, 3, 4, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
    Oc = [5, 6, 7, 8, 10, 0, 12, 13, 0, 0, 16, 0, 18, 19, 20, 21, 23, 24, 25, 7, 27, 28, 0, 0, 31, 32, 33, 0, 35, 0, 38, 39, 40, 41, 0, 43, 0, 0, 51, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
    Pc = [5, 6, 7, 8, 10, 1, 11, 13, 0, 15, 16, 0, 18,
        19, 20, 21, 23, 24, 25, 0, 27, 28, 29, 0, 31, 32, 33, 0, 35, 0, 38, 39, 40, 41, 0, 43, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0
    ],
    Qc = [0, 6, 7, 8, 10, 1, 11, 13, 14, 15, 16, 17, 18, 19, 20, 21, 23, 24, 25, 26, 27, 28, 29, 30, 31, 32, 33, 34, 35, 37, 38, 39, 40, 41, 42, 43, 44, 50, 51, 52, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
    s = [0, 8421631, 6316128, 4210752, 12632256, 15908203, 4210943, 16728128, 9486400, 8409120, 11567184, 13684991, 16777215, 16728224, 9465872, 16750950, 8400928, 16777164, 16764006, 6697728, 8421504, 16737843,
        14737632, 8388736, 4486912, 12615872, 16752672, 13408665, 15790320, 16776992, 4210752, 6710784, 13369344, 13434624, 47872, 16777215, 3381759, 65793, 8417360, 13158, 11184810, 16763955, 4469538, 13421772, 13107, 15908203, 15908203, 15908203, 15908203, 9465872, 3355443, 6706500, 6702131, 0
    ],
    Rc = Array(s.length),
    Sc = [0, 0, 0, 0, 0, 0, 0, 5E3, 500, 500, 0, -1E3, -500, 0, 0, 0, 0, 0, 0, 0, 0, 1E4, 0, 0, 0, 1500, 4E3, 500, 0, 2E3, 0, 0, 5500, 0, 500, 0, 0, 0, 2E3, 2E3, 0, 3E3, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1E3, 0],
    Tc = [
        [],
        [6316128, 6316128, 6316128, 6316128, 6316128, 6316128, 6316128, 6316128, 6316128,
            6316128, 6316128, 6316128, 6316128, 6316128, 6316128, 6316128
        ],
        [0, 0, 0, 0, 0, 4210752, 4210752, 0, 0, 4210752, 4210752, 0, 0, 0, 0, 0],
        [0, 0, 0, 0, 0, 12632256, 12632256, 0, 0, 12632256, 12632256, 0, 0, 0, 0, 0],
        []
    ],
    chars = "0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz.*".split(""),
    arrayComOsOffsetsDosChars = [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 63, 0, 0, 0, 62, 0, 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 0, 0, 0, 0, 0, 0, 0, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23, 24, 25, 26, 27, 28, 29, 30, 31, 32, 33, 34, 35, 0, 0, 0, 0, 0, 0, 36, 37, 38, 39, 40, 41, 42, 43, 44, 45, 46, 47, 48, 49, 50, 51, 52, 53, 54, 55, 56, 57, 58, 59, 60, 61, 0, 0, 0, 0, 0];
window.GameSave = gameSave;

function gameSave(a) {
    if (0 == a.length || 0 != db) return "";
    saveGameFromScreen();
    Yc(1);
    for (var c = a = 0; c < eb.length; c++) a += eb.charCodeAt(c) * ((c & 15) + 1);
    return a = eb + chars[a & 63]
}
var Zc = "";
window.GameLoad = gameLoad;

function gameLoad(a) {
    if (5 < a.length) {
        for (var c = 0, b = 0; b < a.length - 1; b++) {
            c += a.charCodeAt(b) * ((b & 15) + 1);
        }
        if ((c & 63) != arrayComOsOffsetsDosChars[a.charCodeAt(a.length - 1)]) return -1;
        Zc = a.substring(0, a.length - 1);
        return 0
    }
    0 == a.length && 0 != Zc.length && (eb = Zc, Zc = "", ad(1), loadGameToScreen());
    return -1
}
var cd = 0,
    dd = 0;

function ed(a) {
    var c, b;
    0 > oa && 9 < oa && (v = null);
    0 == a ? b = dd : dd = b = customRandom(1024);
    b += (ea | 1) * (b & 15 | 1);
    b += (fa | 1) * (b & 15 | 1);
    b += (oa | 1) * (b & 15 | 1);
    b += (backgroundDrawType | 1) * (b & 15 | 1);
    b += (ra | 1) * (b & 15 | 1);
    b += (isStopped | 1) * (b & 15 | 1);
    b += (wa | 1) * (b & 15 | 1);
    b += (xa | 1) * (b & 15 | 1);
    b += (Aa | 1) * (b & 15 | 1);
    b += (Xa | 1) * (b & 15 | 1);
    b += (Ya | 1) * (b & 15 | 1);
    for (c = 0; c < ab.length; c++) b += (ab.charCodeAt(c) | 1) * (b & 15 | 1);
    for (c = 0; 8 > c; c++) b += (bb[c] | 1) * (b & 15 | 1);
    b += (cb ? 1 : 2) * (b & 15 | 1);
    b += (db | 1) * (b & 15 | 1);
    b += (kb | 1) * (b & 15 | 1);
    b += (lb | 1) * (b & 15 | 1);
    b += (mb | 1) * (b & 15 | 1);
    b += (nb | 1) * (b & 15 | 1);
    0 == a ? cd != (b ^ 16777215) &&
        (v = null) : cd = b ^ 16777215
}

function saveGameFromScreen() {
    var a, c, b, d, e;
    for (a = Ya + 277760 + 7E3 - 1; 0 <= a; a--) arrayOfTypesOfElementInThisPosition[a] = 0;
    for (b = 0; 280 > b; b++)
        for (c = 0; 496 > c; c++) d = ((b >> 2) + 2) * w + (c >> 2) + 2, e = Ya + 496 * b + c, 0 != x[d] && (x[d] == Gb ? arrayOfTypesOfElementInThisPosition[e] = Ob : x[d] == Hb ? arrayOfTypesOfElementInThisPosition[e] = Qb : x[d] == Ib && (arrayOfTypesOfElementInThisPosition[e] = Rb));
    for (a = 0; a < counterStickman; a++) d = a * hd, c = ~~stickManBodyPoints[d + 4].x - 8, b = ~~stickManBodyPoints[d + 4].y - 8, 0 > c || 496 <= c ? id(a--) : 0 > b || 280 <= b ? id(a--) : (c = c >> 2 << 2, b = b >> 2 << 2, e = Ya + 496 * b + c, 0 != arrayOfTypesOfElementInThisPosition[e] ? id(a--) : z[a] == jd ? (arrayOfTypesOfElementInThisPosition[e] = Ec, arrayOfTypesOfElementInThisPosition[e + 138880] = kd[a]) : z[a] == ld ? (arrayOfTypesOfElementInThisPosition[e] = Fc, arrayOfTypesOfElementInThisPosition[e + 138880] = kd[a]) : z[a] == md ? (arrayOfTypesOfElementInThisPosition[e] = fighterId, arrayOfTypesOfElementInThisPosition[e + 138880] = 0) : z[a] == md + 1 ? (arrayOfTypesOfElementInThisPosition[e] = fighterId, arrayOfTypesOfElementInThisPosition[e + 138880] = 0) : z[a] == nd ? (arrayOfTypesOfElementInThisPosition[e] =
        cloneId, arrayOfTypesOfElementInThisPosition[e + 138880] = 0) : id(a--));
    for (a = 0; a < od; a++) 0 != A[a] && (c = ~~B[a].x - 8, b = ~~B[a].y - 8, 0 > c || 496 <= c ? pd(a) : 0 > b || 280 <= b ? pd(a) : (e = Ya + 496 * b + c, 0 != arrayOfTypesOfElementInThisPosition[e] ? pd(a) : (arrayOfTypesOfElementInThisPosition[e] = Hc, arrayOfTypesOfElementInThisPosition[e + 138880] = A[a])));
    for (a = p; a < qd; a++) c = ~~C[a].x - 8, b = ~~C[a].y - 8, 0 > c || 496 <= c ? rd(a--) : 0 > b || 280 <= b ? rd(a--) : D[a] == hc && E[a] != s[hc] ? rd(a--) : (e = Ya + 496 * b + c, 0 != arrayOfTypesOfElementInThisPosition[e] ? rd(a--) : (arrayOfTypesOfElementInThisPosition[e] = D[a], D[a] == Nb ? arrayOfTypesOfElementInThisPosition[e + 138880] = G[a] : D[a] == ac ? arrayOfTypesOfElementInThisPosition[e + 138880] = G[a] & 255 : D[a] == Lc && (arrayOfTypesOfElementInThisPosition[e + 138880] = G[a] & 1)));
    Za = Ya + 138880;
    d = Ya;
    for (e = Ya + 138880; d < e; d++)
        if (arrayOfTypesOfElementInThisPosition[d] == Nb || arrayOfTypesOfElementInThisPosition[d] == ac || arrayOfTypesOfElementInThisPosition[d] == Ec || arrayOfTypesOfElementInThisPosition[d] == Fc ||
            arrayOfTypesOfElementInThisPosition[d] == fighterId || arrayOfTypesOfElementInThisPosition[d] == Hc || arrayOfTypesOfElementInThisPosition[d] == cloneId || arrayOfTypesOfElementInThisPosition[d] == Lc) arrayOfTypesOfElementInThisPosition[Za++] = arrayOfTypesOfElementInThisPosition[d + 138880];
    for (a = 0; a < sd; a++) arrayOfTypesOfElementInThisPosition[Za] = td[a], 0 == ud[a] ? (arrayOfTypesOfElementInThisPosition[Za + 1 * sd] = H[vd[a]] >> 16 & 255, arrayOfTypesOfElementInThisPosition[Za + 2 * sd] = H[vd[a]] >> 8 & 255, arrayOfTypesOfElementInThisPosition[Za + 3 * sd] = H[vd[a]] & 255) : 1 == ud[a] ? (c = ~~stickManBodyPoints[vd[a] * hd + 4].x, b = ~~stickManBodyPoints[vd[a] * hd + 4].y, c = c >> 2 << 2, b = b >> 2 << 2, e = 0 + 512 * b + c, arrayOfTypesOfElementInThisPosition[Za + 1 * sd] = e >> 16 & 255, arrayOfTypesOfElementInThisPosition[Za + 2 * sd] = e >> 8 & 255, arrayOfTypesOfElementInThisPosition[Za + 3 * sd] = e & 255) : 2 == ud[a] && (c = ~~B[vd[a]].x, b = ~~B[vd[a]].y, e = 0 + 512 * b + c, arrayOfTypesOfElementInThisPosition[Za + 1 * sd] = e >> 16 & 255, arrayOfTypesOfElementInThisPosition[Za + 2 * sd] = e >> 8 & 255, arrayOfTypesOfElementInThisPosition[Za + 3 * sd] = e & 255), 0 == wd[a] ? (arrayOfTypesOfElementInThisPosition[Za + 4 * sd] = H[xd[a]] >> 16 & 255, arrayOfTypesOfElementInThisPosition[Za + 5 * sd] = H[xd[a]] >> 8 & 255, arrayOfTypesOfElementInThisPosition[Za +
        6 * sd] = H[xd[a]] & 255) : 1 == wd[a] ? (c = ~~stickManBodyPoints[xd[a] * hd + 4].x, b = ~~stickManBodyPoints[xd[a] * hd + 4].y, c = c >> 2 << 2, b = b >> 2 << 2, e = 0 + 512 * b + c, arrayOfTypesOfElementInThisPosition[Za + 4 * sd] = e >> 16 & 255, arrayOfTypesOfElementInThisPosition[Za + 5 * sd] = e >> 8 & 255, arrayOfTypesOfElementInThisPosition[Za + 6 * sd] = e & 255) : 2 == wd[a] && (c = ~~B[xd[a]].x, b = ~~B[xd[a]].y, e = 0 + 512 * b + c, arrayOfTypesOfElementInThisPosition[Za + 4 * sd] = e >> 16 & 255, arrayOfTypesOfElementInThisPosition[Za + 5 * sd] = e >> 8 & 255, arrayOfTypesOfElementInThisPosition[Za + 6 * sd] = e & 255), Za++;
    Za += 6 * sd;
    ob = nb
}

function Yc(a) {
    var c, b;
    if (0 == a) {
        var d = new Uint8Array(8680),
            e = new Uint8Array(768),
            f, g;
        for (c = 0; c < d.length; c++) d[c] = 0;
        for (c = 0; c < od; c++) 0 != A[c] && (f = ~~B[c].x - 8, g = ~~B[c].y - 8, 0 > f || 496 <= f || 0 > g || 280 <= g || (f >>= 2, g >>= 2, d[124 * g + f] = Hc));
        for (g = c = 0; 280 > g; g += 4)
            for (f = 0; 496 > f; f += 4) 0 == d[c] && (b = Ya + 496 * g + f, 0 == arrayOfTypesOfElementInThisPosition[b] && (b += 497), d[c] = arrayOfTypesOfElementInThisPosition[b]), 12 == backgroundDrawType ? d[c] != r && d[c] != gc && d[c] != lc && d[c] != oc && d[c] != rc && d[c] != Ac && (d[c] = 0) : 14 == backgroundDrawType && (d[c] = 0 == d[c] ? Xb : 0), c++;
        g = s;
        10 == backgroundDrawType && (g = Rc);
        f = new Int32Array(256);
        for (c = 0; 256 > c; c++) f[c] = 0;
        for (c = 0; c < d.length; c++) f[d[c]]++;
        var m = jb = 0;
        for (b = 0; 256 > b; b++)
            if (0 != f[b]) {
                e[jb++] = g[b] >> 16 & 255;
                e[jb++] = g[b] >> 8 & 255;
                e[jb++] = g[b] & 255;
                for (c = 0; c < d.length; c++) d[c] == b && (d[c] = m);
                m++
            } 16 == backgroundDrawType && (e[0] = (s[Nc[ea]] >> 16 & 255) + (s[Nc[fa]] >> 16 & 255) >> 1 & 255, e[1] = (s[Nc[ea]] >> 8 & 255) + (s[Nc[fa]] >> 8 & 255) >> 1 & 255, e[2] = (s[Nc[ea]] & 255) + (s[Nc[fa]] & 255) >> 1 & 255);
        gb = "";
        hb = d.length;
        for (c = 0; c < hb;) {
            b = d[c++];
            for (f = 0; c < hb && 255 != f && b == d[c]; c++) f++;
            gb += String.fromCharCode(b);
            gb += String.fromCharCode(f)
        }
        hb = gb.length;
        gb = window.btoa(gb);
        ib = "";
        for (c = 0; c < jb; c++) ib += String.fromCharCode(e[c]);
        ib = window.btoa(ib)
    }
    b = 0;
    arrayOfTypesOfElementInThisPosition[b++] = 0;
    arrayOfTypesOfElementInThisPosition[b++] = 0;
    for (c = arrayOfTypesOfElementInThisPosition[b++] = 0; 8 > c; c++) arrayOfTypesOfElementInThisPosition[b++] = bb[c];
    arrayOfTypesOfElementInThisPosition[b++] = ob & 255;
    arrayOfTypesOfElementInThisPosition[b++] = ob >> 8;
    arrayOfTypesOfElementInThisPosition[b++] = Nc[ea];
    arrayOfTypesOfElementInThisPosition[b++] = Nc[fa];
    arrayOfTypesOfElementInThisPosition[b++] = oa;
    arrayOfTypesOfElementInThisPosition[b++] = backgroundDrawType;
    arrayOfTypesOfElementInThisPosition[b++] = wa;
    arrayOfTypesOfElementInThisPosition[b++] = xa;
    arrayOfTypesOfElementInThisPosition[b++] = isGravityOn ? 0 : 1;
    arrayOfTypesOfElementInThisPosition[b++] = ya;
    for (c = 0; 8 > c; c++) arrayOfTypesOfElementInThisPosition[b++] = 0;
    if (0 == a)
        for (pb = 0, c = Ya; c < Ya + 138880; c++) 0 < arrayOfTypesOfElementInThisPosition[c] && (pb += c & 255);
    b = 0;
    for (c = 3; c < Za; c++) b = 128 > arrayOfTypesOfElementInThisPosition[c] ? b + arrayOfTypesOfElementInThisPosition[c] * ((c & 15) + 1) : b + (arrayOfTypesOfElementInThisPosition[c] - 256) * ((c & 15) + 1);
    arrayOfTypesOfElementInThisPosition[1] = b & 255;
    arrayOfTypesOfElementInThisPosition[2] = b >> 8 & 255;
    e = [];
    for (c = d = 0; c < Za;) {
        b = arrayOfTypesOfElementInThisPosition[c++];
        for (f = 0; c < Za && 255 != f && b == arrayOfTypesOfElementInThisPosition[c]; c++) f++;
        e[d++] = b;
        e[d++] = f
    }
    if (1 == a) {
        var n = [],
            t = 0;
        f = Array(4096);
        g = 1;
        for (c = 0; c < d;) {
            var m = 0,
                u = 1;
            if (c < d - 1)
                for (var F = 1; F < g; F++)
                    if (f[F].length == u) {
                        for (b = 0; b < u && f[F][b] == e[c + b]; b++);
                        if (b == u && (m = F, u++, c + u >= d)) break
                    } n[t++] = m >> 8;
            n[t++] = m & 255;
            n[t++] = e[c + u - 1];
            if (4096 > g) {
                f[g] = Array(u);
                for (b = 0; b < u; b++) f[g][b] = e[c + b];
                g++
            }
            c += u
        }
    }
    0 == a ? (a = e, fb = d) : (a = n, fb = t);
    eb = "";
    for (c = 0; c < fb; c++) eb += String.fromCharCode(a[c]);
    eb = window.btoa(eb)
}

function ad(a) {
    var c, b = window.atob(eb),
        d = [];
    fb = b.length;
    for (c = 0; c < fb; c++) d[c] = b.charCodeAt(c);
    if (1 == a) {
        var b = [],
            e = 0,
            f = Array(4096),
            g = 1;
        for (c = 0; c < fb;) {
            var m = 0,
                n = 1,
                m = d[c++] << 8,
                m = m + d[c++];
            if (0 < m) {
                for (a = 0; a < f[m].length; a++) b[e++] = f[m][a];
                n = 1 + f[m].length
            }
            b[e++] = d[c++];
            if (4096 > g) {
                f[g] = Array(n);
                for (a = 0; a < n; a++) f[g][a] = b[e - n + a];
                g++
            }
        }
        d = b;
        fb = e
    }
    for (c = Za = 0; c < fb;)
        for (b = d[c++], e = d[c++], arrayOfTypesOfElementInThisPosition[Za++] = b, a = 0; a < e; a++) arrayOfTypesOfElementInThisPosition[Za++] = b;
    if (0 != Za) {
        d = 0;
        for (c = 3; c < Za; c++) d = 128 > arrayOfTypesOfElementInThisPosition[c] ? d + arrayOfTypesOfElementInThisPosition[c] * ((c & 15) + 1) : d + (arrayOfTypesOfElementInThisPosition[c] - 256) * ((c & 15) + 1);
        if (arrayOfTypesOfElementInThisPosition[1] != (d & 255)) Za =
            0;
        else if (arrayOfTypesOfElementInThisPosition[2] != (d >> 8 & 255)) Za = 0;
        else {
            a = 0;
            a++;
            a++;
            a++;
            for (c = 0; 8 > c; c++) arrayOfTypesOfElementInThisPosition[a++] != bb[c] && (kb = 2, mb = 6);
            ob = arrayOfTypesOfElementInThisPosition[a++];
            ob += arrayOfTypesOfElementInThisPosition[a++] << 8;
            if (0 != arrayOfTypesOfElementInThisPosition[a])
                for (c = 0; c < Nc.length; c++) arrayOfTypesOfElementInThisPosition[a] == Nc[c] && (ea = c);
            a++;
            if (0 != arrayOfTypesOfElementInThisPosition[a])
                for (c = 0; c < Nc.length; c++) arrayOfTypesOfElementInThisPosition[a] == Nc[c] && (fa = c);
            a++;
            oa = arrayOfTypesOfElementInThisPosition[a++];
            backgroundDrawType = arrayOfTypesOfElementInThisPosition[a++];
            wa = arrayOfTypesOfElementInThisPosition[a++];
            xa = arrayOfTypesOfElementInThisPosition[a++];
            isGravityOn = 0 == arrayOfTypesOfElementInThisPosition[a++] ? true : false;
            ya = arrayOfTypesOfElementInThisPosition[a++]
        }
    }
}

// Called whenever user click on "LOAD" button
function loadGameToScreen() {
    reset(1);
    if (0 != Za) {
        e = Ya + 138880;
        ycoord = 8;
        for (d = Ya; ycoord < 288; ycoord++) {
            for (xcoord = 8; xcoord < 504; xcoord++, d++) {
                if (0 != arrayOfTypesOfElementInThisPosition[d]) {
                    if( arrayOfTypesOfElementInThisPosition[d] == Ob ) {
                        x[(ycoord >> 2) * w + (xcoord >> 2)] = Gb;
                        I[ycoord * screenWidth + xcoord] = Kb;
                    } else if( arrayOfTypesOfElementInThisPosition[d] == Qb ) {
                        x[(ycoord >> 2) * w + (xcoord >> 2)] = Hb;
                        I[ycoord * screenWidth + xcoord] = Kb;
                    } else if ( arrayOfTypesOfElementInThisPosition[d] == Rb ) {
                        x[(ycoord >> 2) * w + (xcoord >> 2)] = Ib;
                        I[ycoord * screenWidth + xcoord] = Kb;
                    } else if ( arrayOfTypesOfElementInThisPosition[d] == Ec ) {
                        createFighterPlayerClone(xcoord, ycoord, Ec, arrayOfTypesOfElementInThisPosition[e++])
                    } else if( arrayOfTypesOfElementInThisPosition[d] == Fc ) {
                        createFighterPlayerClone(xcoord, ycoord, Fc, arrayOfTypesOfElementInThisPosition[e++])
                    } else if ( arrayOfTypesOfElementInThisPosition[d] == fighterId) {
                        createFighterPlayerClone(xcoord, ycoord, fighterId, 0);
                        e++;
                    } else if( arrayOfTypesOfElementInThisPosition[d] == Hc) {
                        Ad(xcoord, ycoord, arrayOfTypesOfElementInThisPosition[e++])
                    } else if( arrayOfTypesOfElementInThisPosition[d] == cloneId ) {
                        createFighterPlayerClone(xcoord, ycoord, cloneId, 0);
                        e++;
                    } else {
                        a = Bd(xcoord, ycoord, arrayOfTypesOfElementInThisPosition[d], 0)
                        if(arrayOfTypesOfElementInThisPosition[d] == Nb) {
                            J[a].x = 0.01 * Math.cos(arrayOfTypesOfElementInThisPosition[e] * PI / 32);
                            J[a].y = 0.01 * -Math.sin(arrayOfTypesOfElementInThisPosition[e] * PI / 32);
                            G[a] = arrayOfTypesOfElementInThisPosition[e];
                            e++;
                            I[ycoord * screenWidth + xcoord] = l
                        } else if( arrayOfTypesOfElementInThisPosition[d] == ac ) {
                            G[a] = arrayOfTypesOfElementInThisPosition[e++]
                        } else {
                            if( arrayOfTypesOfElementInThisPosition[d] == Lc ) {
                                G[a] = arrayOfTypesOfElementInThisPosition[e++];
                                E[a] = 0 == G[a] ? 6702131 : 3359829;
                            }
                        }
                    }
                }
            }
        }
        Dd();
        c = new Vector;
        var f;
        for (a = p; a < qd; a++) f = p + floor(Math.random() * (qd - p)), c.set(C[a]), C[a].set(C[f]), C[f].set(c), c.set(J[a]), J[a].set(J[f]), J[f].set(c), b = D[a], D[a] = D[f], D[f] = b, b = G[a], G[a] = G[f], G[f] = b, b = E[a], E[a] = E[f], E[f] = b, b = H[a], H[a] = H[f], H[f] = b, I[H[a]] = D[a] == Nb ? l : a, I[H[f]] = D[f] == Nb ? l : f;
        f = floor((Za - e) / 7);
        for (a = e; a < e + f; a++) {
            c = (arrayOfTypesOfElementInThisPosition[a + 1 * f] & 255) << 16 | (arrayOfTypesOfElementInThisPosition[a + 2 * f] & 255) << 8 | arrayOfTypesOfElementInThisPosition[a + 3 * f] & 255;
            b = (arrayOfTypesOfElementInThisPosition[a + 4 * f] & 255) << 16 | (arrayOfTypesOfElementInThisPosition[a + 5 * f] & 255) << 8 | arrayOfTypesOfElementInThisPosition[a + 6 * f] & 255;
            var g = 0,
                m = d = 0,
                n = 0;
            d = Ya + 496 * ((c >> 9) - 8) + ((c & 511) - 8);
            g = arrayOfTypesOfElementInThisPosition[d] == Ec ? 1 : arrayOfTypesOfElementInThisPosition[d] == Fc ? 1 : arrayOfTypesOfElementInThisPosition[d] == fighterId ? 1 : arrayOfTypesOfElementInThisPosition[d] == Hc ? 2 : 0;
            d = Ya + 496 * ((b >> 9) - 8) + ((b & 511) - 8);
            d = arrayOfTypesOfElementInThisPosition[d] == Ec ? 1 : arrayOfTypesOfElementInThisPosition[d] == Fc ? 1 : arrayOfTypesOfElementInThisPosition[d] == fighterId ? 1 : arrayOfTypesOfElementInThisPosition[d] == Hc ? 2 : 0;
            0 == g ? m = I[c] : 1 == g ? m = Ed(c) : 2 == g && (m = Fd(c));
            0 == d ? n = I[b] : 1 == d ? n = Ed(b) : 2 == d && (n = Fd(b));
            Gd(g, d, m, n, arrayOfTypesOfElementInThisPosition[a + 0 * f])
        }
        nb = ob
    }
}


function Hd() {
    var i;
    var a;
    var alpha;
    i = 0;
    for (; 138880 > i; i++) {
        La[i] = 0;
        Ma[i] = 0;
    }
    i = 0;
    for (; i < qd; i++) {
        a = ~~C[i].x - 8;
        alpha = ~~C[i].y - 8;
        if (!(0 > a || 496 <= a || 0 > alpha || 280 <= alpha)) {
            a = 496 * alpha + a;
            La[a] = D[i];
            if (D[i] == Nb) {
                Ma[a] = G[i];
            } else {
                if (D[i] == ac) {
                    Ma[a] = G[i] & 255;
                } else {
                    if (D[i] == Lc) {
                        Ma[a] = G[i] & 1;
                    }
                }
            }
        }
    }
    if (Ha > Ja) {
        a = Ha;
        Ha = Ja;
        Ja = a;
    }
    if (Ia > Ka) {
        alpha = Ia;
        Ia = Ka;
        Ka = alpha;
    }
    i = Sa = 0;
    for (; i < sd && 500 > Sa; i++) {
        if (!(0 != ud[i] || 0 != wd[i] || ~~C[vd[i]].x < Ha || Ja < ~~C[vd[i]].x || ~~C[vd[i]].y < Ia || Ka < ~~C[vd[i]].y || ~~C[xd[i]].x < Ha || Ja < ~~C[xd[i]].x || ~~C[xd[i]].y < Ia || Ka < ~~C[xd[i]].y)) {
            Na[Sa] = ~~C[vd[i]].x - Ha;
            Oa[Sa] = ~~C[vd[i]].y - Ia;
            Pa[Sa] = ~~C[xd[i]].x - Ha;
            Qa[Sa] = ~~C[xd[i]].y - Ia;
            Ra[Sa] = td[i];
            Sa++;
        }
    }
}

function Id() {
    var i;
    var t;
    var k;
    var p;
    var prefix = ia - floor((Ja - Ha) / 2) - Ha;
    var ret = ja - floor((Ka - Ia) / 2) - Ia;
    k = Ia - 8;
    for (; k <= Ka - 8; k++) {
        if (!(0 > ret + k || 280 <= ret + k)) {
            t = Ha - 8;
            for (; t <= Ja - 8; t++) {
                if (!(0 > prefix + t || 496 <= prefix + t)) {
                    p = 496 * k + t;
                    if (0 != La[p] && I[(ret + k + 8) * screenWidth + (prefix + t + 8)] == Jb) {
                        i = Bd(prefix + t + 8, ret + k + 8, La[p], 0);
                        if (0 <= i) {
                            if (La[p] == Nb) {
                                J[i].x = 0.01 * Math.cos(Ma[p] * PI / 32);
                                J[i].y = 0.01 * -Math.sin(Ma[p] * PI / 32);
                                G[i] = Ma[p];
                                I[(ret + k + 8) * screenWidth + (prefix + t + 8)] = l;
                            } else {
                                if (La[p] == ac) {
                                    G[i] = Ma[p];
                                } else {
                                    if (La[p] == Lc) {
                                        G[i] = Ma[p];
                                        E[i] = 0 == G[i] ? 6702131 : 3359829;
                                    }
                                }
                            }
                        }
                    }
                }
            }
        }
    }
    prefix = ia - floor((Ja - Ha) / 2);
    ret = ja - floor((Ka - Ia) / 2);
    i = 0;
    for (; i < Sa; i++) {
        if (!(8 > prefix + Na[i] || 504 <= prefix + Na[i] || 8 > ret + Oa[i] || 288 <= ret + Oa[i] || 8 > prefix + Pa[i] || 504 <= prefix + Pa[i] || 8 > ret + Qa[i] || 288 <= ret + Qa[i])) {
            t = I[(ret + Oa[i]) * screenWidth + prefix + Na[i]];
            k = I[(ret + Qa[i]) * screenWidth + prefix + Pa[i]];
            if (t >= p && k >= p && t != k && 255 != (Jd[t] & 255) && 255 != (Jd[k] & 255)) {
                Gd(0, 0, t, k, Ra[i]);
            }
        }
    }
};

function Kd(a, c, b, d) {
    for (var e = a;;)
        if (D[I[e]] == c) L(I[e], b, d, s[b]), e--;
        else break;
    e++;
    for (var f = a + 1;;)
        if (D[I[f]] == c) L(I[f], b, d, s[b]), f++;
        else break;
    f--;
    for (a = e; a <= f; a++) D[I[a - screenWidth]] == c && Kd(a - screenWidth, c, b, d), D[I[a + screenWidth]] == c && Kd(a + screenWidth, c, b, d)
}
var loadingPhase = 0;

function startScript(a, c, b, d) {
    if (0 == loadingPhase) {
        $a = null != a ? a : "";
        ab = null != c ? c : "";
        for (a = 0; 8 > a && a < ab.length; a++) bb[a] = ab.charCodeAt(a);
        cb = 0 == b ? true : false;
        db = null != d ? d : 0;
        logOnConsole('Created by ha55ii, deobfuscated by Elieder Sousa');
        canvasElement.width = screenWidth;
        canvasElement.height = screenHeight;
        canvasElement.width = 496;
        canvasElement.height = 422;
        for (b = 0; 256 > b; b++) {
            Qd[b] = false;
            Rd[b] = false;
            Sd[b] = false;
            Td[b] = false;
            Ud[b] = false;
            Vd[b] = false;
            Wd[b] = 0;
            Xd[b] = 0;
        }
        for (b = 0; 10 > b; b++) Wd[48 + b] = 48 + b;
        for (b = 0; 9 > b; b++) Xd[49 + b] = 33 + b;
        for (b = 0; 4 > b; b++) Wd[37 + b] = 37 + b;
        for (b = 0; 4 > b; b++) Xd[37 + b] = 37 + b;
        Wd[13] = Xd[13] = 13;
        Wd[16] = Xd[16] = 16;
        Wd[17] = Xd[17] = 17;
        Wd[18] = Xd[18] = 18;
        Wd[32] = Xd[32] = 32;
        Wd[186] = 58;
        Xd[186] = 42;
        Wd[187] = 59;
        Xd[187] = 43;
        Wd[188] = 44;
        Xd[188] = 60;
        Wd[189] = 45;
        Xd[189] = 61;
        Wd[190] = 46;
        Xd[190] = 62;
        Wd[191] = 47;
        Xd[191] = 63;
        Wd[192] = 64;
        Xd[192] = 96;
        Wd[219] = 91;
        Xd[219] = 123;
        Wd[220] = 92;
        Xd[220] = 124;
        Wd[221] = 93;
        Xd[221] = 125;
        Wd[222] = 94;
        Xd[222] = 126;
        Wd[226] = 92;
        Xd[226] = 95;
        Wd[58] = 58;
        Xd[58] = 42;
        Wd[59] = 59;
        Xd[59] = 43;
        Wd[173] = 45;
        Xd[173] = 61;
        Wd[64] = 64;
        Xd[64] = 96;
        Wd[160] = 94;
        Xd[160] = 126;
        for (b = 0; 1024 > b; b++) Yd[b] = b / 1024;
        for (b = 0; 1024 > b; b++) {
            d = floor(1024 * Math.random());
            a = Yd[b];
            Yd[b] = Yd[d];
            Yd[d] = a;
        }
        Zd = floor(1024 * Math.random()) & 1023;
        $d = floor(512 * Math.random()) | 1;
        for (b = 0; b < screenWidth * screenHeight; b++) v[b] = 0;
        for (b = 0; b < screenWidth * screenHeight * 4; b++) ae[b] = 255;
        fontImage.m("font.gif", 8, 12);
        securityCheck() ? loadingPhase-- : loadingPhase++
    }
    if (1 == loadingPhase) {
        b = fontImage.l;
        if (0 == b.j && b.img.complete) {
            ce--;
            d = b.img.width;
            a = b.img.height;
            if (0 == d || 0 == a) throw delete b.img, b.file = "", "ERROR";
            c = document.createElement("canvas");
            c.width = d;
            c.height = a;
            c = c.getContext("2d");
            c.drawImage(b.img, 0, 0);
            c = c.getImageData(0, 0, d, a).data;
            he(b, d, a);
            d = 0;
            for (a = c.length; d < a; d += 4) {
                b.a[d >> 2] = 0 == c[d + 3] ? -1 : c[d + 0] << 16 | c[d + 1] << 8 | c[d + 2];
            }
            delete b.img;
            b.j = 1
        }
        0 != ce ? setTimeout(startScript, je()) : loadingPhase++
    }
    if (2 == loadingPhase) {
        if (0 == ab.length) {
            kb = 2;
            mb = 1;
        } else {
            if(0 != db) {
                kb = 2;
                mb = 3;
            }
        }
        reset(0);
        saveGameFromScreen();
        0 < db && (b = "/score/dust2.php?a=", b += db, AjaxRequest(b, ""), 1 == me && "ok" == ne[0] ? (eb = ne[1], ad(0), 0 < Za ? (loadGameToScreen(), lb = 1) : lb = 2) : lb = 2, isStopped = 1);
        ed(1);
        for (a = 0; a < s.length; a++) b = floor((2989 * (s[a] >> 16 & 255) + 5866 * (s[a] >> 8 & 255) + 1145 * (s[a] & 255)) / 1E4), Rc[a] = b << 16 | b << 8 | b;
        oe(0, 0, screenWidth, screenHeight, 4210752);
        drawTextUsingImage(fontImage, 13, 291, "POWDER", 15908203, 0);
        drawTextUsingImage(fontImage, 13, 305, "WATER", 4210943, 0);
        drawTextUsingImage(fontImage, 13, 319, "FIRE", 16728128, 0);
        drawTextUsingImage(fontImage, 13, 333, "SEED", 9486400, 0);
        drawCompositeTextUsingImage(13, 347, "G-POWDER", -1, 0, -2);
        drawCompositeTextUsingImage(13, 347, "G-POWDER", 11567184, -1, -2);
        drawCompositeTextUsingImage(13, 361, "FAN", 8421631, 0, -1);
        drawTextUsingImage(fontImage, 13, 375, "ICE", 13684991, 0);
        drawTextUsingImage(fontImage, 13, 389, "S-BALL", 16728224, 0);
        drawTextUsingImage(fontImage, 13, 403, "CLONE", 9465872, 0);
        drawCompositeTextUsingImage(68, 291, "F-WORKS", 16750950, 0, -1);
        drawTextUsingImage(fontImage, 68, 305, "OIL", 8400928, 0);
        drawTextUsingImage(fontImage, 68, 319, "C-4", 16777164, 0);
        drawTextUsingImage(fontImage, 68, 333, "SAND", 16764006, 0);
        drawTextUsingImage(fontImage, 68, 347, "MUD", 6697728, 0);
        drawTextUsingImage(fontImage, 68, 361, "STONE", 8421504, 0);
        drawTextUsingImage(fontImage, 68, 375, "LAVA", 16737843, 0);
        drawTextUsingImage(fontImage, 68, 389, "VIRUS", 8388736, 0);
        drawTextUsingImage(fontImage, 68, 403, "NITRO", 4486912, 0);
        drawTextUsingImage(fontImage, 123, 291, "ANT", 12615872, 0);
        drawTextUsingImage(fontImage, 123, 305, "TORCH", 16752672, 0);
        drawTextUsingImage(fontImage, 123, 319, "GAS", 13408665, 0);
        drawTextUsingImage(fontImage, 123, 333, "SOAPY", 15790320, 0);
        drawCompositeTextUsingImage(123, 347, "THUNDER", 16776992, 0, -1);
        drawTextUsingImage(fontImage, 123, 361, "METAL", 4210752, 0);
        drawTextUsingImage(fontImage, 123, 375, "BOMB", 6710784, 0);
        drawTextUsingImage(fontImage, 123, 389, "LASER", 13369344, 0);
        drawTextUsingImage(fontImage, 123, 403, "ACID", 13434624, 0);
        drawTextUsingImage(fontImage, 178, 291, "VINE", 47872, 0);
        drawTextUsingImage(fontImage, 178, 305, "SALT", 16777215, 0);
        drawTextUsingImage(fontImage, 178, 319, "GLASS", 4210752, 0);
        drawTextUsingImage(fontImage, 178, 333, "BIRD", 8417360, 0);
        drawTextUsingImage(fontImage, 178, 347, "FISH", 13158, 0);
        drawCompositeTextUsingImage(178, 361, "MERCURY", 11184810, 0, -1);
        drawTextUsingImage(fontImage, 178, 375, "SPARK", 16763955, 0);
        drawTextUsingImage(fontImage, 178, 389, "FUSE", 4469538, 0);
        drawTextUsingImage(fontImage, 178, 403, "CLOUD", 13421772, 0);
        drawTextUsingImage(fontImage, 233, 291, "PUMP", 13107, 0);
        drawCompositeTextUsingImage(233, 305, "CRYSTAL", 3355443, 0, -1);
        drawTextUsingImage(fontImage, 233, 319, "JBOMB", 6706500, 0);
        drawCompositeTextUsingImage(233, 333, "Conveyer", -1, 0, -2);
        drawCompositeTextUsingImage(233, 333, "Conv    ", 6702131, -1, -2);
        drawCompositeTextUsingImage(233, 333, "    eyer", 3359829, -1, -2);
        drawTextUsingImage(fontImage, 288, 291, "WIND", 8421631, 0);
        drawCompositeTextUsingImage(288, 305, "CYCLONE", 8421631, 0, -1);
        drawTextUsingImage(fontImage, 288, 319, "DRAG", 16777215, 0);
        drawTextUsingImage(fontImage, 288, 347, "PLAYER", 15908203, 0);
        drawCompositeTextUsingImage(288, 361, "FIGHTER", 15908203, 0, -1);
        drawTextUsingImage(fontImage, 288, 375, "BALL", 15908203, 0);
        drawTextUsingImage(fontImage, 288, 389, "CREATE", 9465872, 0);
        drawTextUsingImage(fontImage, 343, 291, "BLOCK", 8421504, 0);
        drawTextUsingImage(fontImage, 343, 305, "ERASE", 8421504, 0);
        drawTextUsingImage(fontImage, 343, 319, "CLEAR", 16777215, 0);
        drawTextUsingImage(fontImage, 343, 333, "BH", 0, 8421504);
        drawTextUsingImage(fontImage, 343, 347, "WH", 4210752, 12632256);
        drawCompositeTextUsingImage(343, 403, "MiniMap", 16752800, 0, -1);
        drawTextUsingImage(fontImage, 398, 305, "TEXT", 16777215, 0);
        drawCompositeTextUsingImage(397, 319, "Copy", -1, 0, -2);
        drawCompositeTextUsingImage(397, 319, "Copy", 16777215, -1, -2);
        drawCompositeTextUsingImage(421, 319, "Paste", -1, 0, -3);
        drawCompositeTextUsingImage(421, 319, "Paste", 16777215, -1, -3);
        drawCompositeTextUsingImage(398, 333, "PEN", 16777215, 0, -1);
        drawCompositeTextUsingImage(398, 347, "PEN-S ", 16777215, 0, -1);
        drawCompositeTextUsingImage(398, 361, "SCALE", 16777215, 0, -1);
        drawCompositeTextUsingImage(398, 375, "|", 16777215, 0, -1);
        drawCompositeTextUsingImage(398, 389, "SPEEDx", 16777215, 0, -1);
        drawCompositeTextUsingImage(397, 403, "Start", -1, 0, -3);
        drawCompositeTextUsingImage(397, 403, "Start", 16777215, -1, -3);
        drawCompositeTextUsingImage(423, 403, "Stop", -1, 0, -2);
        drawCompositeTextUsingImage(423, 403, "Stop", 16777215, -1, -2);
        drawTextUsingImage(fontImage, 453, 291, "UPLOAD", 16752800, 0);
        drawTextUsingImage(fontImage, 453, 305, "SAVE", 16752800, 0);
        drawTextUsingImage(fontImage, 453, 319, "LOAD", 16752800, 0);
        drawTextUsingImage(fontImage, 453, 347, "G-", -1, 0);
        drawCompositeTextUsingImage(453, 361, "SIDE-", -1, 0, -3);
        drawCompositeTextUsingImage(453, 361, "SIDE-", 16777215, -1, -3);
        drawCompositeTextUsingImage(453, 375, "BG-", -1, 0, -2);
        drawCompositeTextUsingImage(453, 375, "BG-", 16777215, -1, -2);
        drawTextUsingImage(fontImage, 453, 389, "GRID", 8388608, 0);
        drawTextUsingImage(fontImage, 453, 403, "RESET", 16777215, 0);
        drawTextUsingImage(fontImage, 69, 417, "x    y", -1, 0);
        drawTextUsingImage(fontImage, 153, 417, "dot", -1, 0);
        drawTextUsingImage(fontImage, 230, 417, "j", -1, 0);
        drawTextUsingImage(fontImage, 285, 417, "Created by ha55ii", -1, 0);
        he(imageHandlerForScreen, screenWidth, screenHeight);
        for (a = 0; a < screenWidth * screenHeight; a++) imageHandlerForScreen.a[a] = v[a] & 16777215;
        for (b = screenWidth * screenHeight - 1; 0 <= b; b--) v[b] = 0;
        loop()
    }
}

function reset(a) {
    var c, b, d;
    for (d = b = 0; b < re; b++)
        for (c = 0; c < w; c++, d++) x[d] = 0, P[d] = 0, Q[d] = 0, se[d] = 0, te[d] = 0, ue[d] = 0;
    Dd();
    qd = p;
    for (c = 0; c < 296 * screenWidth; c++) I[c] = Jb;
    for (b = 0; 296 > b; b++)
        for (c = 0; c < screenWidth; c++) ve[b * screenWidth + c] = 8 > c || screenWidth - 8 <= c || 8 > b || 288 <= b ? false : true, R[b * screenWidth + c] = (b >> 2) * w + (c >> 2);
    D[0] = Mb;
    D[1] = Nb;
    D[2] = Ob;
    D[3] = Hc;
    sd = 0;
    we = 64;
    for (c = counterStickman = 0; c < maxStickmanNumber * hd; c++) ye[c] = 0;
    for (c = 0; c < maxStickmanNumber; c++) z[c] = 0;
    for (c = 0; c < maxStickmanNumber; c++) ze[c] = 0;
    for (c = 0; c < maxStickmanNumber; c++) kd[c] = 0;
    for (c = 0; c < maxStickmanNumber; c++) Ae[c] = 0;
    for (c = 0; c < maxStickmanNumber; c++) Be[c] = 0;
    for (c = 0; c < od; c++) A[c] = 0;
    for (c = 0; c < od; c++) S[c] = 0;
    for (c = 0; c <
        od; c++) Ce[c] = 0;
    for (c = 0; c < od; c++) De[c] = 0;
    if (0 == a) {
        for (a = 2; a < Ee; a++) x[2 * w + a] = Gb;
        for (a = 2; a < Ee; a++) x[(re - 3) * w + a] = Gb;
        for (c = 2; c < Fe; c++) x[c * w + 2] = Gb;
        for (c = 2; c < Fe; c++) x[c * w + w - 3] = Gb
    }
    for (c = 8; 288 > c; c++)
        for (a = 8; 504 > a; a++) x[(c >> 2) * w + (a >> 2)] >= Gb && (I[c * screenWidth + a] = Kb);
    nb = 0
}


function Ge() {
    if (0 < He) He++;
    else {
        d = new Vector;
        ed(0);
        gameSave("");
        gameLoad("");
        280 <= Ie && (Je || Ke) && false == ga ? ga = true : 280 > Ie && (Je || Ke) && true == ga && (ga = false);
        
        Je && 0 == Xa && (Qd[48] ? oa = 0 : Qd[49] ? oa = 1 : Qd[50] ? oa = 2 : Qd[51] ? oa = 3 : Qd[52] ? oa = 4 : Qd[53] ? oa = 5 : Qd[54] ? oa = 6 : Qd[55] ? oa = 7 : Qd[56] ? oa = 8 : Qd[57] ? oa = 9 : Qd[32] ? isStopped = returnBetween0_MAX(isStopped + 1, 1) : Qd[10] || Qd[13] ? isStopped = 1 : Qd[108] ? (loadGameToScreen(), pa = -10) : Qd[106] && (Va = returnBetween0_MAX(Va + 1, 3)));
        f = 13;
        g = 291;
        if (Me(f - 4 - 8, g - 1 - 8, 495, 126) && ga && 0 == Xa)
            if (e = floor((Ne - (f - 4 - 8)) / 55), c = floor((Ie - (g - 1 - 8)) / 14), c = 9 * e + c, 5 == c) {
                if( Ke ) {
                    if( 5 == ea ) {
                        Fa = returnBetween0_MAX(Fa + 8, 56);
                        ea = c; 
                    } else {
                        if ( Oe ) {
                            if( 5 == fa ) {
                                Fa = returnBetween0_MAX(Fa - 8, 56);
                                fa = c;
                            }
                        }
                    }
                }
                
            } else if (40 != c && 41 != c && 42 != c && 43 != c && 44 != c && 48 != c)
            if (53 == c) Ke ? (53 == ea && (Ta = returnBetween0_MAX(Ta + 1, 5)), ea = c) : Oe && (53 == fa && (Ta = returnBetween0_MAX(Ta - 1, 5)), fa = c);
            else if (59 != c && 60 != c && 61 != c)
            if (62 == c) isMinimapActive = returnBetween0_MAX(isMinimapActive + Pe, 1);
            else if (63 != c)
            if (65 == c) Ke && (65 == ea && (Ga = 1 - Ga), ea = c), Oe && (65 == fa && (Ga = 1 - Ga), fa = c);
            else if (66 == c) Aa = returnBetween0_MAX(Aa + Pe, 3);
        else if (67 == c) oa = returnBetween0_MAX(oa + Pe, 9);
        else if (68 == c) {
            if (0 == ra && (Ke || Oe))
                for (b = 288 * screenWidth - 1; 4096 <= b; b--) imageHandlerForScreen.a[b] = v[b];
            Ke ? (68 == ea && 4 > ra ? (ra++, sa += 496 >> ra >> 1, ta += 280 >> ra >> 1) : 68 == ea && (ra = 0),
                ea = c) : Oe && (68 == fa && 0 < ra ? (sa -= 496 >> ra >> 1, ta -= 280 >> ra >> 1, ra--) : 68 == fa && (ra = 4, sa += 248 - (496 >> ra >> 1) - 1, ta += 140 - (280 >> ra >> 1) - 2), fa = c);
            sa = minInsideRange(sa, 0, 496 - (496 >> ra));
            ta = minInsideRange(ta, 0, 280 - [280, 140, 70, 35, 18][ra]);
            if (0 == ra && (Ke || Oe))
                for (b = 288 * screenWidth - 1; 4096 <= b; b--) v[b] = imageHandlerForScreen.a[b]
        } else if (69 == c) ua = returnBetween0_MAX(ua + Pe, 1);
        else if (70 == c) wa = returnBetween0_MAX(wa + Pe, 3);
        else if (71 == c) isStopped = returnBetween0_MAX(isStopped + Pe, 1);
        else if (72 == c) 0 != Pe && (Xa = 1);
        else if (73 == c) {
            if (Ke || Oe) saveGameFromScreen(), pa = 10
        } else if (74 == c) 0 != Pe && (loadGameToScreen(), pa = -10);
        else if (75 != c)
            if (76 == c) {
                // Manipula o click no botão de ligar e desligar a gravidade
                if (0 != Pe) {
                    isGravityOn = isGravityOn ? false : true;
                    for (b = 288 * screenWidth - 1; 4096 <= b; b--) Re[b] += isGravityOn ? 1 : -1;
                    Se = 1;
                    setGravity()
                }
            } else if (77 == c) {
            if (xa = returnBetween0_MAX(xa + Pe, 1), 0 != Pe)
                if (0 == xa) {
                    for (a = 2; a < Ee; a++) P[128 + a] = 0, P[9216 + a] = 0, Q[128 + a] = 0, Q[9216 + a] = 0, se[128 + a] = 0, se[9216 + a] = 0, te[128 + a] = 0, te[9216 + a] = 0, ue[128 + a] = 0, ue[9216 + a] = 0;
                    for (c = 256; c < Fe << 7; c += w) P[c + 1] = 0, P[c + Ee] = 0, Q[c + 1] = 0, Q[c + Ee] = 0, se[c + 1] = 0, se[c + Ee] = 0, te[c + 1] = 0, te[c + Ee] = 0, ue[c + 1] = 0, ue[c + Ee] = 0
                } else if (1 == xa) {
                for (a = 2; a < Ee; a++) P[128 + a] = P[9088 + a], P[9216 + a] = P[256 + a], Q[128 + a] = Q[9088 + a], Q[9216 + a] = Q[256 + a], se[128 + a] = se[9088 + a], se[9216 + a] = se[256 + a], te[128 + a] =
                    te[9088 + a], te[9216 + a] = te[256 + a], ue[128 + a] = ue[9088 + a], ue[9216 + a] = ue[256 + a];
                for (c = 256; c < Fe << 7; c += w) P[c + 1] = P[c + Ee - 1], P[c + Ee] = P[c + 2], Q[c + 1] = Q[c + Ee - 1], Q[c + Ee] = Q[c + 2], se[c + 1] = se[c + Ee - 1], se[c + Ee] = se[c + 2], te[c + 1] = te[c + Ee - 1], te[c + Ee] = te[c + 2], ue[c + 1] = ue[c + Ee - 1], ue[c + Ee] = ue[c + 2]
            }
        } else if (78 == c) {
            if (backgroundDrawType = returnBetween0_MAX(backgroundDrawType + Pe, 16), 0 != Pe)
                for (a = 0; a < Eb.length; a++) Eb[a] = 0
        } else if(79 == c) {
            ya = returnBetween0_MAX(ya + Pe, 9)
        } else if (80 == c) {
            if(0 != Pe) reset(0)
        } else if(Ke) {
            ea = c
        } else { 
            Oe && (fa = c);
        }
        if (!ga && 0 == Xa) {
            ka = ia;
            la = ja;
            ia = minInsideRange(Ne + 2 * ha, 2 * ha, ha * (w - 2) - 1);
            ja = minInsideRange(Ie + 2 * ha, 2 * ha, ha * (re - 2) - 1);
            0 < ra &&
                (ia = 2 * ha + floor(sa) + (Ne >> ra), ja = 2 * ha + floor(ta) + (Ie >> ra), ia = minInsideRange(ia, 2 * ha, ha * (w - 2) - 1), ja = minInsideRange(ja, 2 * ha, ha * (re - 2) - 1));
            Ke && (ka = ia, la = ja);
            if (1 == Aa)
                if (Ke || Oe) Da = ia, Ea = ja;
                else {
                    if (trueAfterMouseUpButOnlyForOneTick || Ve) ka = Da, la = Ea
                }
            else if (2 == Aa && (We || Xe)) {
                if (Ke || Oe) Ba = 0;
                0 == Ba && (abs(ia - ka) > abs(ja - la) ? Ba = 1 : abs(ia - ka) < abs(ja - la) ? Ba = 2 : (ia = ka, ja = la));
                1 == Ba ? ja = la : 2 == Ba && (ia = ka)
            }
            setToVector(d, ia, ja);
            setToVector(na, ka - 5 * na.x, la - 5 * na.y);
            c = na;
            e = 5;
            b = a = 0.5;
            vectorSub($e, d, c);
            e -= normalize($e);
            a *= e;
            b *= e;
            d.x += $e.x * a;
            d.y += $e.y * a;
            c.x -= $e.x * b;
            c.y -= $e.y * b;
            vectorSub(na, d, na);
            normalize(na);
            bf(0);
            bf(1);
            if (Ke || Oe) nb = minInsideRange(nb + 1,
                0, 65535)
        }
        
        ed(1);
        c = [1, 2, 4, 8];
        for (d = 0; d < c[wa] && (1 != isStopped || Je && 0 == Xa && Qd[10] | Qd[13]); d++) cf++, df(), ef(), ff(), processStickman(), hf();
        if (0 != ra && 0 != ua)
            for (b = 288 * screenWidth - 1; 4096 <= b; b--) v[b] = imageHandlerForScreen.a[b];
        handlesDrawingMethods();
        if (0 != ra) {
            for (b = 288 * screenWidth - 1; 4096 <= b; b--) imageHandlerForScreen.a[b] = v[b];
            e = 8 + floor(sa);
            c = 8 + floor(ta);
            3 >= ra ? kf(8, 280, e, c, 280 >> ra) : 4 == ra && (kf(8, 272, e, c, 17), kf(280, 8, e, c + 17, 1))
        }
        d = screenWidth * screenHeight;
        for (b = 288 * screenWidth; b < d; b++) v[b] = imageHandlerForScreen.a[b];
        if (Me(f - 4 - 8, g - 1 - 8, 495, 126) && ga && 0 == Xa)
            for (e = floor((Ne - (f - 4 - 8)) / 55), c = floor((Ie - (g - 1 - 8)) / 14), d = f - 4 + 55 * e, a = g - 1 + 14 * c, c = 55, e = 13, c = d + c > screenWidth ? screenWidth : ~~(d + c), e = a + e > screenHeight ? screenHeight : ~~(a +
                    e), d = 0 > d ? 0 : ~~d, a = (0 > a ? 0 : ~~a) * screenWidth + d, b = screenWidth - (c - d), c = a + c - d, e *= screenWidth; a < e; a += b, c += screenWidth)
                for (; a < c; a++) 4210752 == (v[a] & 16777215) && (v[a] = 4194304);
        ga && lf(8, 288, 504, 288, 6684672);
        drawCompositeTextUsingImage(f + 0 - 2, g + 70, "    " + floor(360 * Fa / 64) + "'", 8421631, 0, -1);
        drawCompositeTextUsingImage(f + 275, g + 112, "JOINT-n J-left J-right J-scale J-none J-blind".split(" ")[Ta], 15908203, 0, -1);
        1 == isMinimapActive && drawCompositeTextUsingImage(f + 330, g + 112, "MiniMap", 16777215, 16711680, -1);
        0 == Ga ? drawCompositeTextUsingImage(f + 385 - 1, g + 28, "Copy", 16728128, -1, -2) : drawCompositeTextUsingImage(f + 385 + 23, g + 28, "Paste", 16728128, -1, -3);
        
        pen_paint_type = ["free", "line", "lock", "paint"];
        3 > Aa ? drawCompositeTextUsingImage(f + 385 + 1, g + 42, "   " + pen_paint_type[Aa],
            16777215, 0, -1) : drawCompositeTextUsingImage(f + 385 + 4, g + 42, "   " + pen_paint_type[Aa], 16777215, 0, -2);
            
        drawCompositeTextUsingImage(f + 385, g + 56, "      " + oa, 16777215, 0, -1);
        
        drawCompositeTextUsingImage(f + 385, g + 70, "      " + ["x1", "x2", "x4", "x8", "16"][ra], 16777215, 0, -2);
        
        drawCompositeTextUsingImage(f + 385, g + 84, " " + ["normal", "exact"][ua], 16777215, 0, -1);
        
        drawCompositeTextUsingImage(f + 385, g + 98, "       " + (1 << wa), 16777215, 0, -2);
        
        if( isStopped == 0 ) {
            drawCompositeTextUsingImage(f + 385 - 1, g + 112, "Start", 16728128, -1, -3);
        } else {
            drawCompositeTextUsingImage(f + 385 + 25, g + 112, "Stop", 16728128, -1, -2);
        }
        
        if (kb == 2) {
            drawTextUsingImage(fontImage, f + 440, g + 0, "UPLOAD", 5259328, 3158064);
        }
        0 < pa && (pa--, 1 < pa && drawTextUsingImage(fontImage, f + 440, g + 14, "SAVE", 16777215, 16711680));
        0 > pa && (pa++, -1 > pa && drawTextUsingImage(fontImage, f + 440, g + 28, "LOAD",
            16777215, 16711680));
        drawTextUsingImage(fontImage, f + 440, g + 56, isGravityOn ? "  on" : "  off", -1, 0);
        
        side_off_loop = ["OFF", "LOOP"];
        drawCompositeTextUsingImage(f + 440 + 25, g + 70, side_off_loop[xa], -1, 0, -2);
        drawCompositeTextUsingImage(f + 440 + 25, g + 70, side_off_loop[xa], 16777215, -1, -2);
        
        backgroundDrawTypesArray = "non air line blur g-map shade aura light toon mesh gray track dark TG silet mosaic color ".split(" ");
        if( backgroundDrawType == 15 ) {
            drawCompositeTextUsingImage(f + 440 + 3, g + 84, "   " + backgroundDrawTypesArray[backgroundDrawType], -1, 0, -3);
            drawCompositeTextUsingImage(f + 440 + 3, g + 84, "   " + backgroundDrawTypesArray[backgroundDrawType], 16777215, -1, -3);
        } else {
            drawCompositeTextUsingImage(f + 440, g + 84, "   " + backgroundDrawTypesArray[backgroundDrawType], -1, 0, -2);
            drawCompositeTextUsingImage(f + 440, g + 84, "   " + backgroundDrawTypesArray[backgroundDrawType], 16777215, -1, -2);
        }
        
        drawTextUsingImage(fontImage, f + 440, g + 98, "     " + ya, 8388608, 0);
        
        oe(f - 4 + 55 * floor(ea / 9), g + 1 + ea % 9 * 14, 3, 4, 16711680);
        
        oe(f - 4 + 55 * floor(fa / 9), g + 6 + fa % 9 * 14, 3, 4, 255);
        
        drawTextUsingImage(fontImage, f + 56, g + 126, " " + (ia - 8), -1, 0);
        
        drawTextUsingImage(fontImage, f + 56, g + 126, "      " + (ja - 8), -1, 0);
        
        drawTextUsingImage(fontImage, f + 140, g + 126, "   " + (mf - qd), -1, 0);
        
        0 == Va ? drawTextUsingImage(fontImage, f + 217, g + 126, " " + sd, -1, 0) : 1 == Va ? drawTextUsingImage(fontImage, f + 217, g + 126, " " + sd, -1, 14540253) : 2 == Va ? drawTextUsingImage(fontImage, f + 217, g + 126, " " + sd, -1, 2236962) : 3 == Va && drawTextUsingImage(fontImage, f + 217, g + 126, " " + sd, 0, -1);
        f += 0;
        g += 126;
        drawTextUsingImage(fontImage, f, g, nf + "fps" , -1, 0);
        1 == aa && (drawTextUsingImage(fontImage, f + 48, g + 0, pf + "sl", 16777215, 0), drawTextUsingImage(fontImage, f + 96, g + 0, qf + "aps", 16777215, 0));
        if (1 == isMinimapActive) {
            f = 13;
            g = 291;
            166 > Ne && ga && (f = 178);
            oe(f, g, 124, 70, 0);
            for (b = a = 0; a < counterStickman; a++, b += hd) e = floor(stickManBodyPoints[b + 4].x) -
                8, c = floor(stickManBodyPoints[b + 4].y) - 8, 0 > e || 496 <= e || 0 > c || 280 <= c || (e >>= 2, c >>= 2, d = 512 * (g + c) + (f + e), z[a] == jd ? v[d] = Ec : z[a] == ld ? v[d] = Fc : z[a] == md ? v[d] = fighterId : z[a] == md + 1 ? v[d] = fighterId : z[a] == nd && (v[d] = cloneId));
            for (a = 0; a < od; a++) 0 != A[a] && (e = floor(B[a].x) - 8, c = floor(B[a].y) - 8, 0 > e || 496 <= e || 0 > c || 280 <= c || (e >>= 2, c >>= 2, d = 512 * (g + c) + (f + e), v[d] = Hc));
            for (c = 0; 70 > c; c++)
                for (e = 0; 124 > e; e++) b = (c + 2) * w + (e + 2), d = 2048 * (c + 2) + 4 * (e + 2), a = v[512 * (g + c) + (f + e)], 0 == a && (x[b] == Gb ? a = Ob : x[b] == Hb ? a = Qb : x[b] == Ib ? a = Rb : (a = D[I[d]], a == Hc && (a = 0), 0 == a && (a = D[I[d + 512 + 1]]), a == Hc && (a = 0))), d = s, 10 ==
                    backgroundDrawType ? d = Rc : 12 == backgroundDrawType ? a != r && a != gc && a != lc && a != oc && a != rc && a != Ac && (a = 0) : 14 == backgroundDrawType && (a = 0 == a ? Xb : 0), v[512 * (g + c) + (f + e)] = d[a], 16 == backgroundDrawType && 0 == a && (d = (s[Nc[ea]] & 255) + (s[Nc[fa]] & 255) >> 1, v[512 * (g + c) + (f + e)] = (s[Nc[ea]] >> 16 & 255) + (s[Nc[fa]] >> 16 & 255) >> 1 << 16 | (s[Nc[ea]] >> 8 & 255) + (s[Nc[fa]] >> 8 & 255) >> 1 << 8 | d)
        }
        ed(0); - 1 == Xa && Xa++;
        1 == lb ? (cb ? rf(rb, "\u30af\u30ea\u30c3\u30af\u3067\u518d\u751f\u3001\uff2c\uff2f\uff21\uff24\u3067\u518d\u30b9\u30bf\u30fc\u30c8") : rf(rb, "Click to play, LOAD to restart."), lb = 0, Xa = 10) : 2 == lb && (cb ? rf(rb, "\u30a8\u30e9\u30fc") :
            rf(rb, "Error"), lb = 0, Xa = 10);
        1 == Xa && (ra = 0, 0 == kb && (g = "/score/dust2.php?a=", g += $a, g += "&b=" + (cb ? "0" : "1"), AjaxRequest(g, ""), 1 == me && "ok" == ne[0] ? kb = 1 : (kb = 2, mb = "err1" == ne[0] ? 1 : "err2" == ne[0] ? 2 : "err3" == ne[0] ? 3 : "err4" == ne[0] ? 4 : "err5" == ne[0] ? 5 : 0)), Xa++);
        if (2 == Xa) 1 == kb ? 10 > nb ? cb ? rf(rb, "\u3082\u3046\u5c11\u3057\u4f5c\u308a\u8fbc\u3093\u3067\u4e0b\u3055\u3044\u3002") : rf(rb, "Please carefully created.") : cb ? rf(rb, "\u30bf\u30a4\u30c8\u30eb\u3092\u8a18\u5165\u3057\u3066\uff2f\uff2b\u3092\u62bc\u3057\u3066\u4e0b\u3055\u3044") :
            rf(rb, "Enter the title and click OK.") : 2 == kb && (cb ? 1 == mb ? rf(rb, "\u30e6\u30fc\u30b6\u30fc\u767b\u9332\u304c\u5fc5\u8981\u3067\u3059") : 2 == mb ? rf(rb, "1\u65e5\u306b1\u56de\u306e\u307f\u3067\u3059") : 3 == mb ? rf(rb, "\u30c0\u30a6\u30f3\u30ed\u30fc\u30c9\u30c7\u30fc\u30bf") : 4 == mb ? rf(rb, "\u904e\u53bb12\u6642\u9593\u306e\u4f5c\u54c1\u6570\u304c50\u4ef6\u306b\u9054\u3057\u305f\u70ba\uff71\uff6f\uff8c\uff9f\u51fa\u6765\u307e\u305b\u3093") : 5 == mb ? rf(rb, "\u8a00\u8a9e\u30a8\u30e9\u30fc") : 6 == mb ? rf(rb, "\u4f5c\u8005\u306e\u307f\u3067\u3059") :
                rf(rb, "\u30a2\u30c3\u30d7\u30ed\u30fc\u30c9\u51fa\u6765\u307e\u305b\u3093") : 1 == mb ? rf(rb, "User registration is required.") : 2 == mb ? rf(rb, "1 time in 1 days only.") : 3 == mb ? rf(rb, "Download data.") : 4 == mb ? rf(rb, "Reached 50 posts in 12 hours. Cannot upload.") : 5 == mb ? rf(rb, "Language error.") : 6 == mb ? rf(rb, "Author only.") : rf(rb, "Cannot upload.")), Xa++;
        else if (3 == Xa) {
            oe(96, 100, 320, 100, 8421504);
            tf(256, 114, "UPLOAD", 16752800);
            uf(135);
            if (1 == kb && 10 <= nb && (oe(140, 150, 232, 16, 16777215), vf(139, 149, 234, 0), Me(132, 142, 232, 16) &&
                    (vf(139, 149, 234, 16711680), trueAfterMouseUpButOnlyForOneTick && (g = callPrompt("Text", sb), null != g && (sb = g))), rf(vb, sb), xf(vb, 141, 150, 230, 16, 230, 16, 0), d = Me(200, 172, 16, 12), tf(216, 186, "OK", d ? 16711680 : 16777215), d && trueAfterMouseUpButOnlyForOneTick))
                if (2 > sb.length) cb ? rf(rb, "\u30bf\u30a4\u30c8\u30eb\u3092\uff12\u6587\u5b57\u4ee5\u4e0a\u8a18\u5165\u3057\u3066\u4e0b\u3055\u3044") : rf(rb, "The title must be longer than 2 characters.");
                else {
                    g = sb;
                    f = 0;
                    c = g.length;
                    for (d = 0; d < c; d++) e = g.charCodeAt(d), f = 0 <= e && 128 >= e || 65377 <= e && 65439 >= e ? f + 1 : f + 2;
                    20 < f ? cb ? rf(rb, "\u30bf\u30a4\u30c8\u30eb\u3092\uff11\uff10\u6587\u5b57\u4ee5\u4e0b\u3067\u8a18\u5165\u3057\u3066\u4e0b\u3055\u3044") :
                        rf(rb, "The title must be shorter than 20 characters.") : Xa++
                } d = Me(264, 172, 48, 12);
            tf(296, 186, "CANCEL", d ? 16711680 : 16777215);
            d && trueAfterMouseUpButOnlyForOneTick && (Xa = 5)
        } else if (4 == Xa) {
            sb = encodeURIComponent(sb);
            if (0 == sb.length) {
                Xa = 3;
                cb ? rf(rb, "\u30a8\u30e9\u30fc") : rf(rb, "Error");
                ed(1);
                return
            }
            saveGameFromScreen();
            Yc(0);
            g = "/score/dust2.php?a=";
            g += $a;
            g += "&b=" + (cb ? "0" : "1");
            g += "&c=" + fb;
            g += "&d=" + hb;
            g += "&e=" + jb;
            g += "&f=" + ob;
            g += "&g=" + pb;
            g += "&screenWidth=" + sb;
            f = "i=" + eb;
            f += "&j=" + gb;
            f += "&k=" + ib;
            AjaxRequest(g, f);
            kb = 2;
            Xa++
        } else if (5 == Xa) Xa = 0;
        else if (10 == Xa)
            if (oe(128,
                    288, 256, 70, 6291456), oe(132, 292, 248, 62, 6316128), tf(256, 302, "DOWNLOAD", 16752800), uf(323), 248 > Ne ? (tf(226, 345, "START", 16711680), tf(286, 345, "STOP", 16777215)) : (tf(226, 345, "START", 16777215), tf(286, 345, "STOP", 16711680)), trueAfterMouseUpButOnlyForOneTick) Xa = 0, isStopped = 248 > Ne ? 0 : 1;
            else {
                if (Sd[37] || Sd[39]) Xa = 0, isStopped = Sd[37] ? 0 : 1
            }
        else if (20 == Xa) sb = "", Xa++;
        else if (21 == Xa) {
            oe(136, 289, 240, 99, 8421504);
            oe(140, 297, 232, 16, 16777215);
            vf(139, 296, 234, 0);
            Me(132, 289, 232, 16) && (vf(139, 296, 234, 16711680), trueAfterMouseUpButOnlyForOneTick && (g = callPrompt("Text", sb), null != g && (sb = g)));
            drawTextUsingImage(fontImage, 141, 300, sb.substr(0, 28),
                16777215, 0);
            3 == yb && (oe(288, 320, 84, 16, 16777215), vf(287, 319, 86, 0), Me(280, 312, 84, 16) && (vf(287, 319, 86, 16711680), trueAfterMouseUpButOnlyForOneTick && (g = callPrompt("setFont", tb), null != g && (tb = g))), drawTextUsingImage(fontImage, 289, 323, tb.substr(0, 10), 16777215, 0));
            a = -1;
            128 <= Ne && 268 > Ne && 314 <= Ie && 362 > Ie && (a = floor((Ie - 314) / 16), 0 == a && 0 != Pe && (yb = returnBetween0_MAX(yb + Pe, 5)), 1 == a && 0 != Pe && (zb = returnBetween0_MAX(zb + Pe, 3)), 2 == a && 0 != Pe && (Ab = returnBetween0_MAX(Ab + Pe, 10)));
            drawTextUsingImage(fontImage, 140, 322, "font :" + fontsText[yb], 0 == a ? 16711680 : 16777215, 0);
            drawTextUsingImage(fontImage, 140, 338, "style:" + fontFormat[zb], 1 == a ? 16711680 : 16777215, 0);
            drawTextUsingImage(fontImage, 140, 354, "size :" + fontSizeArray[Ab], 2 == a ? 16711680 : 16777215, 0);
            a = -1;
            128 <= Ne && 368 > Ne && 362 <= Ie && 380 > Ie && (a = 248 > Ne ? 0 : 1, Ke && (0 == a ? Xa++ : Xa = 23));
            drawTextUsingImage(fontImage, 206, 372, "OK", 0 == a ? 16711680 : 16777215, 0);
            drawTextUsingImage(fontImage, 256, 372, "CANCEL", 1 == a ? 16711680 : 16777215, 0);
            g = fontsText[yb];
            3 == yb && (g = tb);
            If(vb, sb, g, zb, fontSizeArray[Ab]);
            g = Sb;
            0 != Nc[ea] ? g = Nc[ea] : 0 != Nc[fa] && (g = Nc[fa]);
            if (g == wc || g == Ob || g == Qb || g == Rb) g = Sb;
            xf(vb, wb, xb, vb.f, 128, vb.f, 128, s[g])
        } else if (22 == Xa) {
            g = "palavras ofensivas aqui separadas por espaços** \u30bb\u30c3\u30af\u30b9 \u30a8\u30c3\u30c1 \u3061\u3093\u3053 \u30c1\u30f3\u30b3 \u307e\u3093\u3053 \u30de\u30f3\u30b3 \u539f\u7206 \u539f\u5b50\u7206 \u6838 \u88ab\u7206 \u6b7b \u6bba \u7968 \u8a55 \u62cd\u624b \u4eba\u6c17 \u53c2\u52a0 \u30a2\u30f3\u30b1\u30fc\u30c8 \u524a\u9664 \u6d88\u53bb ttp www. .com .jp".split(" ");
            f = "";
            for (a = 0; a < sb.length; a++) c = sb[a], " " != c && "\u3000" != c && (f += c);
            f = f.toLowerCase();
            for (a = 0; a < g.length && !(0 <= f.indexOf(g[a])); a++);
            if (a != g.length) {
                Xa = 23;
                return
            }
            g = fontsText[yb];
            3 == yb && (g = tb);
            If(vb, sb, g, zb, fontSizeArray[Ab]);
            g = Sb;
            0 != Nc[ea] ? g = Nc[ea] : 0 != Nc[fa] && (g = Nc[fa]);
            if (g == wc || g == Ob || g == Qb || g == Rb) g = Sb;
            for (c = 0; 128 > c && !(288 <= xb + c); c++)
                for (e = 0; 496 > e && !(504 <= wb + e); e++) - 1 != vb.a[c * vb.b + e] && I[(xb + c) * screenWidth + (wb + e)] == Jb && (b = Bd(wb + e, xb + c, g, 0), 0 <= b && g == Nb && (J[b].x = 0.01 * Math.cos(Fa * PI / 32), J[b].y = 0.01 * -Math.sin(Fa * PI / 32), G[b] = Fa, I[(xb +
                    c) * screenWidth + (wb + e)] = l));
            Xa++
        } else 23 == Xa && (Xa = 0);
        ed(1)
    }
}

function bf(a) {
    var c, b, d, e, f;
    e = new Vector;
    var elementType = 0 == a ? ea : fa,
    m = 0 == a ? Ke : Oe;
    b = 0 == a ? trueAfterMouseUpButOnlyForOneTick : Ve;
    f = 0 == a ? We : Xe;
    if (elementType < numberOfTypesOfElements) {
        if (1 == Aa && (f = 0 == a ? trueAfterMouseUpButOnlyForOneTick : Ve), f) {
            var m = ia - ka,
                n = ja - la;
            if (!(1 >= oa && 1 == isStopped && 1 >= ra && 0 == m && 0 == n && 3 != Aa)) {
                var t = max(max(abs(m), abs(n)), 1),
                    m = floor((m << 8) / t),
                    n = floor((n << 8) / t),
                    u = (ka << 8) + 127,
                    F = (la << 8) + 127;
                for (c = 0; c <= t; c++, u += m, F += n) {
                    var M = oa + 0,
                        $ = (u >> 8) - M;
                    b = (F >> 8) - M;
                    var Ca = $ + 2 * M,
                        Pb = b + 2 * M;
                    8 > $ && ($ = 8);
                    8 > b && (b = 8);
                    Ca > screenWidth - 8 - 1 && (Ca = screenWidth - 8 - 1);
                    287 < Pb && (Pb = 287);
                    d = b * screenWidth + $;
                    var $b = screenWidth - (Ca - $ + 1);
                    for (f = b; f <= Pb; f++, d += $b)
                        for (e = $; e <= Ca; e++, d++)
                            if (!(M *
                                    M + 1 < (e - (u >> 8)) * (e - (u >> 8)) + (f - (F >> 8)) * (f - (F >> 8))))
                                if (3 == Aa) {
                                    b = 0 != Nc[elementType] ? Nc[elementType] : Sb;
                                    var ub = 0;
                                    b != Nb && (b == ac ? ub = 0 != Oc[ea] ? Oc[ea] : 0 != Oc[fa] ? Oc[fa] : Sb : b == rc ? (ub = floor(8 * getAngle(na) / TWOPI + 0.5) & 7, ub += 1) : b == Lc && (ub = 0 == a ? 0 : 1), I[d] >= p && D[I[d]] != b && Kd(d, D[I[d]], b, ub))
                                } else I[d] == Jb && (ub = Nc[elementType], (0 == a && Xe && fa < numberOfTypesOfElements || 1 == a && We && ea < numberOfTypesOfElements) && customRandomBoolean(0.5) && (ub = Nc[0 == a ? fa : ea]), b = Bd(e, f, ub, 0), 0 > b || (ub == Nb ? (J[b].x = 0.01 * Math.cos(Fa * PI / 32), J[b].y = 0.01 * -Math.sin(Fa * PI / 32), G[b] = Fa, I[d] = l) : ub == ac ? G[b] = 0 != Oc[ea] ? Oc[ea] : 0 != Oc[fa] ? Oc[fa] : Sb : ub == rc ? (ub = floor(8 *
                                    getAngle(na) / TWOPI + 0.5) & 7, G[b] = ub + 1) : ub == Lc && (G[b] = 0 == a ? 0 : 1, E[b] = 0 == a ? 6702131 : 3359829)))
                }
            }
        }
    } else if (45 == elementType) {
        b = (ja >> 2) * w + (ia >> 2);
        if(f && 0 == x[b]) {
            P[b] += na.x * (oa + 1);
            Q[b] += na.y * (oa + 1);
            setToVector(e, P[b], Q[b]);
            if(10 < vectorLength2(e) && 1 == isStopped) {
                normalize(e);
                P[b] = 10 * e.x;
                Q[b] = 10 * e.y;
            } 
        };
    } else if (46 == elementType) f && (b = (ja >> 2) * w + (ia >> 2), d = oa + 1, 0 == a ? (0 == x[b - w] && (P[b - w] += d, Q[b - w] += d), 0 == x[b + 1] && (P[b + 1] -= d, Q[b + 1] += d), 0 == x[b + w] && (P[b + w] -= d, Q[b + w] -= d), 0 == x[b - 1] && (P[b - 1] += d, Q[b - 1] -= d), 0 == x[b - w + 1] && (P[b - w + 1] += d, Q[b - w + 1] += d), 0 == x[b + w + 1] && (P[b + w + 1] -= d, Q[b + w + 1] += d), 0 == x[b + w -
        1] && (P[b + w - 1] -= d, Q[b + w - 1] -= d), 0 == x[b - w - 1] && (P[b - w - 1] += d, Q[b - w - 1] -= d)) : (0 == x[b - w] && (P[b - w] -= d, Q[b - w] += d), 0 == x[b - 1] && (P[b - 1] += d, Q[b - 1] += d), 0 == x[b + w] && (P[b + w] += d, Q[b + w] -= d), 0 == x[b + 1] && (P[b + 1] -= d, Q[b + 1] -= d), 0 == x[b - w - 1] && (P[b - w - 1] -= d, Q[b - w - 1] += d), 0 == x[b + w - 1] && (P[b + w - 1] += d, Q[b + w - 1] += d), 0 == x[b + w + 1] && (P[b + w + 1] += d, Q[b + w + 1] -= d), 0 == x[b - w + 1] && (P[b - w + 1] -= d, Q[b - w + 1] -= d)));
    else if (49 == elementType || 50 == elementType || 52 == elementType) {
        if (e = ia, f = ja >> 2 << 2, b = (ja >> 2 << 7) + (ia >> 2), m && 0 == x[b])
            if (49 == elementType) {
                b = Ec;
                for (a = 0; a < counterStickman; a++) z[a] == jd && (b = Fc);
                d = 0 !=
                    Pc[ea] ? Pc[ea] : 0 != Pc[fa] ? Pc[fa] : 0;
                createFighterPlayerClone(e, f, b, d)
            } else if(50 == elementType) {
                createFighterPlayerClone(e, f, fighterId, 0);
                createFighterPlayerClone(e, f, fighterId, 0);
                createFighterPlayerClone(e, f, fighterId, 0);
                createFighterPlayerClone(e, f, fighterId, 0);
                createFighterPlayerClone(e, f, fighterId, 0);
                createFighterPlayerClone(e, f, fighterId, 0);
                createFighterPlayerClone(e, f, fighterId, 0);
                createFighterPlayerClone(e, f, fighterId, 0);
                createFighterPlayerClone(e, f, fighterId, 0);
                createFighterPlayerClone(e, f, fighterId, 0);
                createFighterPlayerClone(e, f, fighterId, 0);
                createFighterPlayerClone(e, f, fighterId, 0);
            } else if(52 == elementType) {
                createFighterPlayerClone(e, f, cloneId, 0);
            }
    } else if (51 == elementType) b = (ja >> 2 << 7) + (ia >> 2), m && 0 == x[b] && (d = 0 != Qc[ea] ? Qc[ea] : 0 != Qc[fa] ? Qc[fa] : Sb, Ad(ia, ja, d));
    else if (53 == elementType) {
        if (m) {
            g = [0, -1, -512, 1, 512, -513, -511, 513, 511, -2, -1024, 2, 1024, 510, -514, -1025, -1023, -510, 514, 1025, 1023, -3, -1026, -1536, -1022, 3, 1026, 1536, 1022, 509, -515, -1537, -1535, -509, 515, 1537, 1535];
            u = t = n = m = 0;
            b = ja * screenWidth + ia;
            for (a = 0; 37 > a; a++)
                if (e = Ed(b + g[a]), f = Fd(b + g[a]), -1 != e ? (n = 1, u = e, 255 == (Be[e] & 255) && (e = -1)) : -1 != f ? (n = 2, u =
                        f, e = 0, 255 == (De[f] & 255) && (e = -1)) : I[b + g[a]] >= p && (n = 0, u = I[b + g[a]], e = 0, 255 == (Jd[I[b + g[a]]] & 255) && (e = -1)), -1 != e) {
                    -1 == Ua ? Ua = b + g[a] : (e = Ed(Ua), f = Fd(Ua), -1 != e ? (m = 1, t = e, 255 == (Be[e] & 255) && (e = -1)) : -1 != f ? (m = 2, t = f, e = 0, 255 == (De[f] & 255) && (e = -1)) : I[Ua] >= p && (m = 0, t = I[Ua], e = 0, 255 == (Jd[I[Ua]] & 255) && (e = -1)), -1 != e && b + g[a] != Ua && Gd(m, n, t, u, Ta), Ua = -1);
                    break
                } 37 == a && (Ua = -1)
        }
    } else if (54 == elementType || 55 == elementType || 56 == elementType || 57 == elementType || 58 == elementType) {
        if (1 == Aa && (f = 0 == a ? trueAfterMouseUpButOnlyForOneTick : Ve), f) {
            c = oa;
            56 != elementType && 0 == oa && (c = 1);
            m = floor(ia / ha) - floor(ka / ha);
            n = floor(ja / ha) - floor(la / ha);
            t = max(max(abs(m), abs(n)),
                1);
            m = floor((m << 8) / t);
            n = floor((n << 8) / t);
            u = (floor(ka / ha) << 8) - 127;
            F = (floor(la / ha) << 8) - 127;
            for (a = 0; a <= t; a++, u += m, F += n)
                for (d = (u >> 8) - floor(c / 2), M = (F >> 8) - floor(c / 2), $ = d + c / 2 + 0.5, Ca = M + c / 2 + 0.5, f = M; f <= M + c; f++)
                    for (e = d; e <= d + c; e++) 2 > e || Ee <= e || 2 > f || Fe <= f || (e - $) * (e - $) + (f - Ca) * (f - Ca) > floor(c * c / 4) || (b = f * w + e, 54 == elementType ? 0 == x[b] && (x[b] = Gb, P[b] = Q[b] = se[b] = te[b] = ue[b] = 0) : 55 == elementType ? (x[b] == Hb ? Of(e, f, -1) : x[b] == Ib && Of(e, f, 1), x[b] = -2) : 56 == elementType ? 0 == x[b] && (x[b] = -2, P[b] = Q[b] = se[b] = te[b] = ue[b] = 0) : 57 == elementType ? 0 == x[b] && (x[b] = Hb, P[b] = Q[b] = se[b] = te[b] = ue[b] = 0, Of(e, f, 1)) : 58 == elementType && 0 ==
                        x[b] && (x[b] = Ib, P[b] = Q[b] = se[b] = te[b] = ue[b] = 0, Of(e, f, -1)));
            setGravity();
            if (56 == elementType && 0 == oa)
                for (m = ia - ka, n = ja - la, t = max(max(abs(m), abs(n)), 1), m = floor((m << 8) / t), n = floor((n << 8) / t), u = (ka << 8) + 127, F = (la << 8) + 127, a = 0; a <= t; a++, u += m, F += n)
                    for (b = p; b < qd; b++) u >> 8 == floor(C[b].x) && F >> 8 == floor(C[b].y) && rd(b--);
            if (54 == elementType || 56 == elementType || 57 == elementType || 58 == elementType)
                for (a = p; a < qd; a++) 0 != x[(C[a].y >> 2) * w + (C[a].x >> 2)] && rd(a--);
            if (54 == elementType || 55 == elementType || 57 == elementType || 58 == elementType) {
                for (a = 0; a < counterStickman; a++)
                    if (z[a] == jd || z[a] == ld || z[a] == md || z[a] == md + 1 || z[a] == nd)
                        for (c = 4; 6 > c; c++)
                            if (b = (stickManBodyPoints[a * hd + c].y >> 2 << 7) + (stickManBodyPoints[a * hd + c].x >>
                                    2), 0 != x[b]) {
                                id(a--);
                                break
                            } for (a = 0; a < od; a++)
                    if (0 != A[a] && (b = (B[a].y >> 2 << 7) + (B[a].x >> 2), 0 != x[b])) {
                        b = (B[a].y << 9) + floor(B[a].x);
                        for (c = 0; 21 > c; c++) I[b + Pf[c]] == Lb && (I[b + Pf[c]] = Jb);
                        pd(a)
                    }
            }
            if (55 == elementType || 56 == elementType)
                for (f = 2; f <= Fe; f++)
                    for (e = 2; e <= Ee; e++) b = f * w + e, -2 == x[b] && (x[b] = 0);
            b = 8 * screenWidth + 8;
            for (f = 8; 288 > f; f++, b += 16)
                for (e = 8; 504 > e; e++, b++) d = (f >> 2) * w + (e >> 2), 0 == x[d] && I[b] == Kb ? I[b] = Jb : x[d] >= Gb && (I[b] = Kb)
        }
    } else 64 == elementType ? (wb = ia, xb = ja - 14, m && (Xa = 20)) : 65 == elementType ? m ? 0 == Ga ? (Ha = Ja = ia, Ia = Ka = ja) : 1 == isStopped && 1 >= ra && Ha == Ja && Ia == Ka || Id() : b && 0 == Ga ? Hd() : f && 0 ==
        Ga && (Ja = ia, Ka = ja) : 68 == elementType && f && (sa -= (Ne - Qf) / (1 << ra), ta -= (Ie - Rf) / (1 << ra), sa = minInsideRange(sa, 0, 496 - (496 >> ra)), ta = minInsideRange(ta, 0, 280 - [280, 140, 70, 35, 18][ra]))
}


function handlesDrawingMethods() {
    var a, c, b, d, e, f, g, m, n, t = new Vector,
        u = [1, 1, 1, screenWidth - 3, 1, 1, 1, screenWidth - 3, 1, 1, 1, screenWidth - 3, 1, 1, 1, screenWidth - 3];
    if (0 == backgroundDrawType)
        for (a = 288 * screenWidth; 4096 < a; a--) v[a] = 0;
    else if (1 == backgroundDrawType || 2 == backgroundDrawType)
        for (b = 2, d = 258; b < Fe; b++, d += 4)
            for (c = 2; c < Ee; c++, d++) 0 == x[d] && (g = 0 < ue[d] ? floor(min(10 * ue[d], 96)) : 0, m = 0 > ue[d] ? floor(min(-10 * ue[d], 96)) : 0, oe(c << 2, b << 2, ha, ha, 0 | g << 8 | m));
    else if (3 == backgroundDrawType) {
        for (a = 288 * screenWidth; 4096 < a; a--) {
            if (0 == x[R[a]]) {
                f = 230 * (v[a] >> 16 & 255) >> 8;
                g = 230 * (v[a] >> 8 & 255) >> 8;
                m = 230 * (v[a] & 255) >> 8;
                v[a] = f << 16 | g << 8 | m;
            }
        }
    } else if (4 == backgroundDrawType)
        for (d = 4104, b = 8; 288 > b; b++, d += 16)
            for (c = 8; 504 > c; c++, d++) t.x =
                U[d + (503 == c ? 0 : 1)] - U[d - (8 == c ? 0 : 1)], t.y = V[d + (287 == b ? 0 : 512)] - V[d - (8 == b ? 0 : 512)], f = floor(512 * (t.x + t.y)), v[d] = 0 >= f ? min(-f, 255) : min(f, 255) << 8;
    else if (5 == backgroundDrawType) {
        for (b = 8; 288 > b; b++) {
            d = (b << 9) + 8;
            for (c = 8; 503 > c; c++, d++) f = (v[d] >> 16 & 255) + (v[d + 1] >> 16 & 255) >> 1, g = (v[d] >> 8 & 255) + (v[d + 1] >> 8 & 255) >> 1, m = (v[d] & 255) + (v[d + 1] & 255) >> 1, v[d] = f << 16 | g << 8 | m;
            for (c = 503; 8 < c; c--, d--) f = (v[d] >> 16 & 255) + (v[d - 1] >> 16 & 255) >> 1, g = (v[d] >> 8 & 255) + (v[d - 1] >> 8 & 255) >> 1, m = (v[d] & 255) + (v[d - 1] & 255) >> 1, v[d] = f << 16 | g << 8 | m
        }
        for (c = 8; 504 > c; c++) {
            d = 4096 + c;
            for (b = 8; 287 > b; b++,
                d += screenWidth) f = (v[d] >> 16 & 255) + (v[d + screenWidth] >> 16 & 255) >> 1, g = (v[d] >> 8 & 255) + (v[d + screenWidth] >> 8 & 255) >> 1, m = (v[d] & 255) + (v[d + screenWidth] & 255) >> 1, v[d] = f << 16 | g << 8 | m;
            for (b = 287; 8 < b; b--, d -= screenWidth) f = (v[d] >> 16 & 255) + (v[d - screenWidth] >> 16 & 255) >> 1, g = (v[d] >> 8 & 255) + (v[d - screenWidth] >> 8 & 255) >> 1, m = (v[d] & 255) + (v[d - screenWidth] & 255) >> 1, v[d] = f << 16 | g << 8 | m
        }
    } else if (6 == backgroundDrawType) {
        var F, M, $;
        b = 2;
        for (d = 258; b < Fe; b++, d += 4)
            for (c = 2; c < Ee; c++, d++)
                if (m = abs(P[d]), f = abs(Q[d]), 0 != m || 0 != f)
                    for (g = 1 / (m + f), n = floor(m * g * 258), F = floor(f * g * 258), M = 0 > P[d] ? -1 : 1, $ = 0 > Q[d] ? -screenWidth : screenWidth, e = (b << 11) + (c << 2), a = 0; 16 > a; a++) f = (Eb[e + M] >> 16 & 255) + ((v[e] >>
                        16 & 255) * n >> 8), 255 < f && (f = 255), g = (Eb[e + M] >> 8 & 255) + ((v[e] >> 8 & 255) * n >> 8), 255 < g && (g = 255), m = (Eb[e + M] & 255) + ((v[e] & 255) * n >> 8), 255 < m && (m = 255), Eb[e + M] = f << 16 | g << 8 | m, f = (Eb[e + $] >> 16 & 255) + ((v[e] >> 16 & 255) * F >> 8), 255 < f && (f = 255), g = (Eb[e + $] >> 8 & 255) + ((v[e] >> 8 & 255) * F >> 8), 255 < g && (g = 255), m = (Eb[e + $] & 255) + ((v[e] & 255) * F >> 8), 255 < m && (m = 255), Eb[e + $] = f << 16 | g << 8 | m, e += u[a];
        for (a = 288 * screenWidth; 4096 < a; a--) 0 == x[R[a]] && (v[a] = Eb[a], Eb[a] = 0)
    } else if (7 == backgroundDrawType)
        for (a = 288 * screenWidth; 4096 < a; a--) 0 == x[R[a]] && (f = 220 * (v[a] >> 16 & 255) >> 8, g = 220 * (v[a] >> 8 & 255) >> 8, m = 220 *
            (v[a] & 255) >> 8, v[a] = f << 16 | g << 8 | m);
    else if (8 == backgroundDrawType) {
        for (a = 289 * screenWidth; 3584 < a; a--) I[a] == Kb ? v[a] = 6316128 : I[a] == Lb ? v[a] = 0 : I[a] == l ? v[a] = 8421631 : I[a] == Jb ? v[a] = I[a + 1] >= p ? E[I[a + 1]] : I[a - 1] >= p ? E[I[a - 1]] : I[a + screenWidth] >= p ? E[I[a + screenWidth]] : I[a - screenWidth] >= p ? E[I[a - screenWidth]] : I[a + screenWidth + 1] >= p ? E[I[a + screenWidth + 1]] : I[a + screenWidth - 1] >= p ? E[I[a + screenWidth - 1]] : I[a - screenWidth + 1] >= p ? E[I[a - screenWidth + 1]] : I[a - screenWidth - 1] >= p ? E[I[a - screenWidth - 1]] : 0 : I[a] >= p && (v[a] = E[I[a]]);
        for (a = 288 * screenWidth; 4096 < a; a--) 0 == v[a] && (0 != v[a + 1] && 15658734 != v[a + 1] ? v[a] = 15658734 : 0 != v[a - 1] && 15658734 != v[a - 1] ? v[a] = 15658734 : 0 != v[a + screenWidth] && 15658734 != v[a + screenWidth] ? v[a] = 15658734 :
            0 != v[a - screenWidth] && 15658734 != v[a - screenWidth] && (v[a] = 15658734))
    } else if (9 == backgroundDrawType)
        for (a = 288 * screenWidth; 4096 <= a; a--) v[a] = 0;
    else if (10 == backgroundDrawType)
        for (b = 2, d = 258; b < Fe; b++, d += 4)
            for (c = 2; c < Ee; c++, d++) 0 == x[d] && (f = 0, 0 < ue[d] && (f = floor(min(10 * ue[d], 72))), 0 > ue[d] && (f = floor(min(-10 * ue[d], 24))), oe(c << 2, b << 2, ha, ha, f << 16 | f << 8 | f));
    else if (11 == backgroundDrawType)
        for (b = 2, d = 258; b < Fe; b++, d += 4)
            for (c = 2; c < Ee; c++, d++) {
                if (0 == x[d] && (n = 256 - floor(min(abs(ue[d]), 32)), 256 != n))
                    for (e = (b << 11) + (c << 2), a = 0; 16 > a; a++) f = (v[e] >> 16 & 255) * n >> 8, g = (v[e] >> 8 & 255) * n >> 8, m = (v[e] & 255) * n >> 8, v[e] = f << 16 | g << 8 | m, e += u[a]
            } else if (12 ==
                backgroundDrawType)
                for (a = 288 * screenWidth; 4096 < a; a--) v[a] = 0, Eb[a] = I[a] < p ? floor(8 * Eb[a] / 9) : D[I[a]] == r ? 25500 : D[I[a]] == gc ? 25500 : D[I[a]] == lc ? 255E3 : D[I[a]] == oc ? 255E3 : D[I[a]] == rc ? 25500 : D[I[a]] == wc && E[I[a]] == s[oc] ? 255E3 : D[I[a]] == Ac ? 25500 : D[I[a]] == Jc && 0 != G[I[a]] ? 255E3 : floor(8 * Eb[a] / 9);
            else if (13 == backgroundDrawType) {
        for (a = 0; a < qd; a++) Eb[H[a]] = Sc[D[a]];
        for (b = 8; 288 > b; b++) {
            d = (b << 9) + 8;
            for (c = 8; 503 > c; c++, d++) Eb[d] = Eb[d + 1] = Eb[d] + Eb[d + 1] >> 1;
            for (c = 503; 8 < c; c--, d--) Eb[d] = Eb[d - 1] = Eb[d] + Eb[d - 1] >> 1
        }
        for (c = 8; 504 > c; c++) {
            d = 4096 + c;
            for (b = 8; 287 > b; b++, d += screenWidth) Eb[d] = Eb[d + screenWidth] = Eb[d] +
                Eb[d + screenWidth] >> 1;
            for (b = 287; 8 < b; b--, d -= screenWidth) Eb[d] = Eb[d - screenWidth] = Eb[d] + Eb[d - screenWidth] >> 1
        }
        for (a = 288 * screenWidth; 4096 < a; a--) n = Eb[a], 0 > n ? (f = -n >> 3, g = 0, m = -n >> 2) : 1024 > n ? (g = f = 0, m = n >> 2) : 2048 > n ? (f = 0, g = n - 1024 >> 2, m = 255) : 3072 > n ? (f = 0, g = 255, m = 255 - (n - 2048 >> 2)) : 4096 > n ? (f = n - 3072 >> 2, g = 255, m = 0) : 6144 > n ? (f = 255, g = 255 - (n - 4096 >> 3), m = 0) : (f = 255, g = n - 6144 >> 3, 255 < g && (g = 255), m = n - 6144 >> 3, 255 < m && (m = 255)), v[a] = f << 16 | g << 8 | m
    } else if (15 == backgroundDrawType)
        for (a = 288 * screenWidth; 4096 < a; a--) v[a] = 0;
    else if (16 == backgroundDrawType)
        for (f = (s[Nc[ea]] >> 16 & 255) + (s[Nc[fa]] >> 16 & 255) >> 1, g = (s[Nc[ea]] >> 8 & 255) + (s[Nc[fa]] >>
                8 & 255) >> 1, m = (s[Nc[ea]] & 255) + (s[Nc[fa]] & 255) >> 1, d = 0 | f << 16 | g << 8 | m, a = 288 * screenWidth; 4096 < a; a--) v[a] = d;
    b = 2;
    for (d = 258; b < Fe; b++, d += 4)
        for (c = 2; c < Ee; c++, d++)
            if (0 != x[d])
                for (e = (b << 11) + (c << 2), a = 0; 16 > a; a++) v[e] = Tc[x[d]][a], e += u[a];
    if (2 == backgroundDrawType)
        for (b = 2, d = 258; b < Fe; b++, d += 4)
            for (c = 2; c < Ee; c++, d++) 0 == x[d] && (setToVector(t, P[d], Q[d]), f = floor(10 * normalize(t)), 2 > f || (48 < f && (f = 48), a = (c << 2) + 2, n = (b << 2) + 2, lf(a, n, a + t.x * f, n + t.y * f, 0 | f << 17)));
    else if (9 == backgroundDrawType)
        for (b = 2, d = 258; b < Fe; b++, d += 4)
            for (c = 2; c < Ee; c++, d++) 0 == x[d] && (setToVector(t, P[d], Q[d]), a = vectorLength2(t), 0.2 > a || (g = floor(min(16 * a, 80)),
                f = 0, 0 < ue[d] && (f = floor(min(ue[d] * a, 80))), m = 0, 0 > ue[d] && (m = floor(min(-ue[d] * a, 80))), a = (c << 2) + 5 * P[d], n = (b << 2) + 5 * Q[d], e = (c + 1 << 2) + 5 * P[d + 1], F = (b << 2) + 5 * Q[d + 1], lf(a, n, e, F, f << 16 | g << 8 | m), e = (c << 2) + 5 * P[d + w], F = (b + 1 << 2) + 5 * Q[d + w], lf(a, n, e, F, f << 16 | g << 8 | m)));
    else if (14 == backgroundDrawType)
        for (a = 288 * screenWidth; 4096 < a; a--) I[a] == Jb ? (f = 255 - (255 - (v[a] >> 16 & 255) >> 1), g = 255 - (255 - (v[a] >> 8 & 255) >> 1), m = 255 - (255 - (v[a] & 255) >> 1), v[a] = f << 16 | g << 8 | m) : I[a] < Lb && (v[a] = 0);
    if (2 <= ya) {
        c = [0, 0, 124, 62, 32, 20, 16, 12, 8, 4];
        t = [0, 0, 70, 35, 32, 20, 16, 12, 8, 4];
        g = [0, 0, 0, 0, -8, 8, 8, -4, 0, 0];
        f = [0,
            0, 0, 0, 12, 0, -4, -4, 0, 0
        ];
        for (a = 0; 496 > a; a += c[ya])
            for (b = 0, d = 8 * screenWidth + 8 + a + g[ya]; 280 > b; b++, d += screenWidth) 6316128 != v[d] && (v[d] = 3355443);
        for (a = 0; 280 > a; a += t[ya])
            for (c = 0, d = (8 + a + f[ya]) * screenWidth + 8; 496 > c; c++, d++) 6316128 != v[d] && (v[d] = 3355443)
    }
    if (1 <= ya) {
        b = 0;
        for (d = 8 * screenWidth + 256; 280 > b; b++, d += screenWidth) 6316128 != v[d] && (v[d] = 4194304);
        c = 0;
        for (d = 148 * screenWidth + 8; 496 > c; c++, d++) 6316128 != v[d] && (v[d] = 4194304)
    }
    if (7 == backgroundDrawType)
        for (a = p; a < qd; a++) f = ((E[a] & 16711680) >> 18) + (v[H[a]] >> 16 & 255), 255 < f && (f = 255), g = ((E[a] & 65280) >> 10) + (v[H[a]] >> 8 & 255), 255 < g && (g = 255), m = ((E[a] & 255) >> 2) + (v[H[a]] &
            255), 255 < m && (m = 255), v[H[a]] = f << 16 | g << 8 | m;
    else if (8 != backgroundDrawType)
        if (10 == backgroundDrawType)
            for (a = p; a < qd; a++) v[H[a]] = Rc[D[a]];
        else if (14 == backgroundDrawType)
        for (a = p; a < qd; a++) f = (v[H[a]] >> 16 & 255) - (255 - (E[a] >> 16 & 255) + 10), 0 > f && (f = 0), g = (v[H[a]] >> 8 & 255) - (255 - (E[a] >> 8 & 255) + 10), 0 > g && (g = 0), m = (v[H[a]] & 255) - (255 - (E[a] & 255) + 10), 0 > m && (m = 0), v[H[a]] = f << 16 | g << 8 | m;
    else if (16 == backgroundDrawType)
        for (a = p; a < qd; a++) v[H[a]] = v[H[a]] == E[a] ? 0 : E[a];
    else
        for (a = p; a < qd; a++) v[H[a]] = E[a];
    Tf();
    Uf();
    Vf();
    if (12 == backgroundDrawType) {
        for (b = 8; 288 > b; b++) {
            d = (b << 9) + 8;
            for (c = 8; 503 > c; c++, d++) Eb[d] = Eb[d] + Eb[d + 1] >>
                1;
            for (c = 503; 8 < c; c--, d--) Eb[d] = Eb[d] + Eb[d - 1] >> 1
        }
        for (c = 8; 504 > c; c++) {
            d = 4096 + c;
            for (b = 8; 287 > b; b++, d += screenWidth) Eb[d] = Eb[d] + Eb[d + screenWidth] >> 1;
            for (b = 287; 8 < b; b--, d -= screenWidth) Eb[d] = Eb[d] + Eb[d - screenWidth] >> 1
        }
        for (a = 288 * screenWidth; 4096 < a; a--) 1 > Eb[a] ? v[a] = 0 : (n = min(Eb[a], 255), f = (v[a] >> 16 & 255) * n >> 8, g = (v[a] >> 8 & 255) * n >> 8, m = (v[a] & 255) * n >> 8, v[a] = f << 16 | g << 8 | m)
    } else if (15 == backgroundDrawType)
        for (b = 2, d = 258; b < Fe; b++, d += 4)
            for (c = 2; c < Ee; c++, d++) {
                n = m = g = f = 0;
                e = (b << 11) + (c << 2);
                for (a = 0; 16 > a; a++) 0 != v[e] && (f += v[e] >> 16 & 255, g += v[e] >> 8 & 255, m += v[e] & 255, n++), e += u[a];
                if (0 != n)
                    for (f = floor(f / n), g = floor(g /
                            n), m = floor(m / n), e = (b << 11) + (c << 2), a = 0; 16 > a; a++) v[e] = 3 > a || 4 == a || 8 == a ? min(f + 48, 255) << 16 | min(g + 48, 255) << 8 | min(m + 48, 255) : 12 < a || 7 == a || 11 == a ? max(f - 32, 0) << 16 | max(g - 32, 0) << 8 | max(m - 32, 0) : f << 16 | g << 8 | m, e += u[a]
            }
    Wf()
}
var Xf = [0, 0, 0, 0, 1, 1, 1, 2, 2, 2, 3],
    Yf = [
        [],
        [1, 1, 1, 2, 2, 2, 3, 3, 3, 4, 4, 4],
        [1, 1, 1, 1, 1, 1, 1, 2, 2, 2, 2, 2, 2, 2, 3, 3, 3, 3, 3, 3, 3, 4, 4, 4, 4, 4, 4, 4],
        [1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4],
        [1, 1, 1, 1, 1, 1, 1, 2, 2, 2, 2, 1, 1, 1, 1, 2, 2, 2, 2, 2, 2, 2, 3, 3, 3, 3, 2, 2, 2, 2, 3, 3, 3, 3, 3, 3, 3, 4, 4, 4, 4, 3, 3, 3, 3, 4, 4, 4, 4, 4, 4, 4, 1, 1, 1, 1, 4, 4, 4, 4],
        [1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 2, 2, 2, 2, 1, 1, 1, 1, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 3, 3, 3, 3, 2, 2, 2, 2, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 4, 4, 4, 4, 3, 3, 3, 3, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 1, 1, 1, 1, 4, 4, 4, 4],
        [1, 1, 1, 1, 1, 1,
            1, 1, 1, 1, 1, 1, 1, 1, 1, 2, 2, 2, 2, 1, 1, 1, 1, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 3, 3, 3, 3, 2, 2, 2, 2, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 4, 4, 4, 4, 3, 3, 3, 3, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 1, 1, 1, 1, 4, 4, 4, 4
        ],
        [1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 2, 2, 2, 2, 1, 1, 1, 1, 2, 2, 2, 2, 1, 1, 1, 1, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 3, 3, 3, 3, 2, 2, 2, 2, 3, 3, 3, 3, 2, 2, 2, 2, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 4, 4, 4, 4, 3, 3, 3, 3, 4, 4, 4, 4, 3, 3, 3, 3, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 1, 1, 1, 1, 4, 4, 4, 4, 1, 1, 1, 1, 4, 4, 4, 4],
        [1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 2, 2, 2, 2, 1, 1, 1, 1, 2, 2, 2, 2, 1, 1, 1, 1, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 3, 3, 3, 3, 2, 2, 2, 2, 3,
            3, 3, 3, 2, 2, 2, 2, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 4, 4, 4, 4, 3, 3, 3, 3, 4, 4, 4, 4, 3, 3, 3, 3, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 1, 1, 1, 1, 4, 4, 4, 4, 1, 1, 1, 1, 4, 4, 4, 4
        ],
        [1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 2, 2, 2, 2, 1, 1, 1, 1, 2, 2, 2, 2, 1, 1, 1, 1, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 3, 3, 3, 3, 2, 2, 2, 2, 3, 3, 3, 3, 2, 2, 2, 2, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 4, 4, 4, 4, 3, 3, 3, 3, 4, 4, 4, 4, 3, 3, 3, 3, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 1, 1, 1, 1, 4, 4, 4, 4, 1, 1, 1, 1, 4, 4, 4, 4],
        [1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 2, 2, 2, 2, 1, 1, 1, 1, 1, 1, 1, 1, 2, 2, 2, 2, 2, 2, 2, 2, 1, 1, 1, 1, 2,
            2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 3, 3, 3, 3, 2, 2, 2, 2, 2, 2, 2, 2, 3, 3, 3, 3, 3, 3, 3, 3, 2, 2, 2, 2, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 4, 4, 4, 4, 3, 3, 3, 3, 3, 3, 3, 3, 4, 4, 4, 4, 4, 4, 4, 4, 3, 3, 3, 3, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 1, 1, 1, 1, 4, 4, 4, 4, 4, 4, 4, 4, 1, 1, 1, 1, 1, 1, 1, 1, 4, 4, 4, 4
        ]
    ];


function Wf() {
    var a, c, b, d, e, f = false;
    if (54 == ea || 55 == ea || 56 == ea || 57 == ea || 58 == ea) f = true;
    var g = false;
    if (54 == fa || 55 == fa || 56 == fa || 57 == fa || 58 == fa) g = true;
    if (!ga && 0 == Xa) {
        if (f || g) {
            var m = oa;
            f && 56 != ea && 0 == oa && (m = 1);
            g && 56 != fa && 0 == oa && (m = 1);
            e = 4210752;
            f && (e |= 16711680);
            g && (e |= 255);
            b = (ja >> 2) - floor(m / 2);
            c = ((ia >> 2) - floor(m / 2) + Xf[m]) * ha;
            b = (b + 0) * ha;
            for (a = 0; a < Yf[m].length; a++) d = minInsideRange(b, 0, 288) * screenWidth + minInsideRange(c, 0, screenWidth - 1), v[d] = e, 1 == Yf[m][a] && c++, 2 == Yf[m][a] && b++, 3 == Yf[m][a] && c--, 4 == Yf[m][a] && b--
        }
        if (45 == ea || 45 == fa || 25 == ea || 25 == fa) {
            e = 4210752;
            if (45 == ea || 25 ==
                ea) e |= 16711680;
            if (45 == fa || 25 == fa) e |= 255;
            lf(ia + 0.5, ja + 0.5, ia + 0.5 + 30 * na.x, ja + 0.5 + 30 * na.y, e)
        }
        if (5 == ea || 5 == fa) e = 4210752, 5 == ea && (e |= 16711680), 5 == fa && (e |= 255), lf(ia + 0.5, ja + 0.5, ia + 0.5 + 20 * Math.cos(Fa * PI / 32), ja + 0.5 - 20 * Math.sin(Fa * PI / 32), e);
        1 == Aa && (We && (ea < numberOfTypesOfElements || f) || Xe && (fa < numberOfTypesOfElements || g)) && lf(Da, Ea, ia, ja, 16711680);
        if (64 == ea || 64 == fa) e = 4210752, 64 == ea && (e |= 16711680), 64 == fa && (e |= 255), lf(wb, xb, wb, xb + 13, e), lf(wb, xb, wb + 200, xb, e), lf(wb, xb + 13, wb + 200, xb + 13, e);
        if (65 == ea || 65 == fa)
            if (0 == Ga) {
                if (65 == ea && We || 65 == fa && Xe) lf(Ha, Ia, Ja,
                    Ia, 16761024), lf(Ha, Ka, Ja, Ka, 16761024), lf(Ha, Ia, Ha, Ka, 16761024), lf(Ja, Ia, Ja, Ka, 16761024)
            } else c = ia - floor((Ja - Ha) / 2), b = ja - floor((Ka - Ia) / 2), e = Ja - Ha, a = Ka - Ia, lf(c, b, c + e, b, 12632319), lf(c, b + a, c + e, b + a, 12632319), lf(c, b, c, b + a, 12632319), lf(c + e, b, c + e, b + a, 12632319);
        if (53 == ea || 53 == fa) {
            e = 4210752;
            53 == ea && (e |= 16711680);
            53 == fa && (e |= 255);
            f = [0, -1, -512, 1, 512, -513, -511, 513, 511, -2, -1024, 2, 1024, 510, -514, -1025, -1023, -510, 514, 1025, 1023, -3, -1026, -1536, -1022, 3, 1026, 1536, 1022, 509, -515, -1537, -1535, -509, 515, 1537, 1535];
            c = ia;
            b = ja;
            d = ja * screenWidth +
                ia;
            for (a = 0; 37 > a; a++)
                if (-1 != Ed(d + f[a]) || -1 != Fd(d + f[a]) || I[d + f[a]] >= p) {
                    c = d + f[a] & 511;
                    b = floor((d + f[a]) / 512);
                    break
                } - 1 != Ua ? lf(Ua & 511, Ua / 512, c, b, e) : lf(c, b, ia, ja, e)
        }
    }
}
var Zf = 0.01,
    $f = 1 / Zf,
    w = 128,
    re = 74,
    Ee = w - 2,
    Fe = re - 2,
    x = new Int8Array(re * w),
    ag = new Float32Array(re * w),
    bg = new Float32Array(re * w),
    cg = new Float32Array(re * w),
    dg = new Float32Array(re * w),
    P = ag,
    Q = bg,
    se = cg,
    te = dg,
    ue = new Float32Array(re * w);


function df() {
    var a, c, b, d, e, f, g;
    if (1 == xa) {
        for (a = 2; a < Ee; a++) P[128 + a] = P[9088 + a], P[9216 + a] = P[256 + a], Q[128 + a] = Q[9088 + a], Q[9216 + a] = Q[256 + a];
        for (b = 256; b < Fe << 7; b += w) P[b + 1] = P[b + Ee - 1], P[b + Ee] = P[b + 2], Q[b + 1] = Q[b + Ee - 1], Q[b + Ee] = Q[b + 2]
    }
    b = 2;
    f = 258;
    for (g = f + 124; b < Fe; b++, f += 4, g += w)
        for (; f < g; f++) 1 <= x[f] || (ue[f] *= 0.9, ue[f] -= (P[f + 1] - P[f - 1] + Q[f + w] - Q[f - w]) * $f);
    for (a = 0; 2 > a; a++) {
        b = 2;
        for (f = 257; b < Fe; b++, f += 128) {
            1 == xa && (ue[f + 125] = 0.5 * (ue[f] + ue[f + 1]));
            for (c = 1; c < Ee; c++, f++) 1 <= x[f] || 1 <= x[f + 1] || (ue[f] = 0.5 * (ue[f] + ue[f + 1]));
            for (c = Ee; 2 <=
                c; c--, f--) 1 <= x[f] || 1 <= x[f - 1] || (ue[f] = 0.5 * (ue[f] + ue[f - 1]))
        }
        c = 2;
        for (f = 130; c < Ee; c++, f++) {
            for (b = 1; b < Fe; b++, f += 128) 1 <= x[f] || 1 <= x[f + w] || (ue[f] = 0.5 * (ue[f] + ue[f + w]));
            for (b = Fe; 2 <= b; b--, f -= 128) 1 <= x[f] || 1 <= x[f - w] || (ue[f] = 0.5 * (ue[f] + ue[f - w]))
        }
    }
    if (1 == xa) {
        for (a = 2; a < Ee; a++) ue[128 + a] = ue[9088 + a], ue[9216 + a] = ue[256 + a];
        for (b = 256; b < Fe << 7; b += w) ue[b + 1] = ue[b + Ee - 1], ue[b + Ee] = ue[b + 2]
    }
    var m, n, t, u, F, M;
    b = 2;
    f = 258;
    for (g = f + 124; b < Fe; b++, f += 4, g += w)
        for (; f < g; f++) 1 <= x[f] || (a = f + 1, c = f - 1, d = f + w, e = f - w, m = 3 * abs(P[f]), n = 3 * abs(Q[f]), t = 6 * P[f] * (P[a] -
                P[c]) + m * (2 * P[f] - P[a] - P[c]), u = 6 * Q[f] * (P[d] - P[e]) + n * (2 * P[f] - P[d] - P[e]), F = (1 <= x[a] ? ue[f] : ue[a]) - (1 <= x[c] ? ue[f] : ue[c]), M = P[a] + P[c] - 2 * P[f], M += P[d] + P[e] - 2 * P[f], t = minInsideRange(t + u + F, -10, 10), se[f] = P[f] + Zf * (-t + M), t = 6 * P[f] * (Q[a] - Q[c]) + m * (2 * Q[f] - Q[a] - Q[c]), u = 6 * Q[f] * (Q[d] - Q[e]) + n * (2 * Q[f] - Q[d] - Q[e]), F = (1 <= x[d] ? ue[f] : ue[d]) - (1 <= x[e] ? ue[f] : ue[e]), M = Q[a] + Q[c] - 2 * Q[f], M += Q[d] + Q[e] - 2 * Q[f], t = minInsideRange(t + u + F, -10, 10), te[f] = Q[f] + Zf * (-t + M), 1 <= x[c] && 0 > se[f] && (se[f] *= 0.9), 1 <= x[a] && 0 < se[f] && (se[f] *= 0.9), 1 <= x[e] && 0 > te[f] && (te[f] *= 0.9), 1 <= x[d] &&
            0 < te[f] && (te[f] *= 0.9));
    f = P;
    P = se;
    se = f;
    f = Q;
    Q = te;
    te = f
}
var eg = new Float32Array(296 * screenWidth),
    Re = new Float32Array(296 * screenWidth),
    U = new Float32Array(296 * screenWidth),
    V = new Float32Array(296 * screenWidth),
    Se = 0;

function fg() {
    var a, c, b, d = new Vector,
        e;
    for (b = c = 0; 280 > c; c++, b += 16)
        for (a = 0; 496 > a; a++, b++) d.x = -0.5 - a, d.y = -0.5 - c, e = normalize2(d) + 16, e = 100 / (e * e), U[b] = d.x * e, V[b] = d.y * e
}

function hg(a, c) {
    var b, d, e, f;
    e = 4104;
    f = (c - 8 - 1 << 9) + (a - 8 - 1);
    for (d = 8; d < c; d++, e += 16) {
        for (b = 8; b < a; b++, e++, f--) eg[e] -= U[f], Re[e] -= V[f];
        for (f++; 504 > b; b++, e++, f++) eg[e] += U[f], Re[e] -= V[f];
        f += a + a - 1025
    }
    for (f += 512; 288 > d; d++, e += 16) {
        for (b = 8; b < a; b++, e++, f--) eg[e] -= U[f], Re[e] += V[f];
        for (f++; 504 > b; b++, e++, f++) eg[e] += U[f], Re[e] += V[f];
        f += a + a - 1
    }
}

function ig(a, c) {
    var b, d, e, f;
    e = 4104;
    f = (c - 8 - 1 << 9) + (a - 8 - 1);
    for (d = 8; d < c; d++, e += 16) {
        for (b = 8; b < a; b++, e++, f--) eg[e] += U[f], Re[e] += V[f];
        for (f++; 504 > b; b++, e++, f++) eg[e] -= U[f], Re[e] += V[f];
        f += a + a - 1025
    }
    for (f += 512; 288 > d; d++, e += 16) {
        for (b = 8; b < a; b++, e++, f--) eg[e] += U[f], Re[e] -= V[f];
        for (f++; 504 > b; b++, e++, f++) eg[e] -= U[f], Re[e] -= V[f];
        f += a + a - 1
    }
}

function Dd() {
    var a, c, b;
    for (b = 296 * screenWidth - 1; 0 <= b; b--) eg[b] = 0, Re[b] = isGravityOn ? 1 : 0;
    fg();
    c = 10;
    for (b = 258; 288 > c; c += 4, b += 4)
        for (a = 10; 504 > a; a += 4, b++) {
            if (x[b] == Hb) hg(a, c);
            else if (x[b] == Ib) ig(a, c);
            else continue;
            Se++;
            0 == (Se & 63) && (oe(12, 12, 80, 12, 0), drawTextUsingImage(fontImage, 12, 12, "G-MAP " + Se, 0, 6316128))
        }
    Se = 1;
    setGravity()
}

function Of(a, c, b) {
    0 == Se && fg();
    a = (a << 2) + 2;
    c = (c << 2) + 2;
    0 < b ? hg(a, c) : ig(a, c);
    Se++;
    0 == (Se & 127) && (oe(12, 12, 80, 12, 0), drawTextUsingImage(fontImage, 12, 12, "G-MAP " + Se, 0, 6316128))
}

function setGravity() {
    if (0 != Se) {
        Se = 0;
        var a;
        if (isGravityOn == 0) {
            for (a = re * w - 1; 0 <= a && x[a] != Hb && x[a] != Ib; a--);
            if (-1 == a)
                for (a = 296 * screenWidth - 1; 0 <= a; a--) eg[a] = 0, Re[a] = 0
        }
        var c = new Vector;
        for (a = 288 * screenWidth - 1; 4096 <= a; a--) {
            setToVector(c, eg[a], Re[a]);
            normalize2(c);
            U[a] = c.x;
            V[a] = c.y;
        }
    }
}
var sd = 0,
    jg = 999,
    we = 64,
    ud = new Int32Array(jg),
    wd = new Int32Array(jg),
    vd = new Int32Array(jg),
    xd = new Int32Array(jg),
    kg = new Float32Array(jg),
    td = new Int8Array(jg),
    lg = [16773360, 16777200, 15794160, 15794175, 15790335, 16773375];

function Gd(a, c, b, d, e) {
    if (sd >= jg) return -1;
    var f = null,
        g = null,
        m = false,
        n = false;
    0 == a ? (f = C[b], D[b] == nc && (m = true)) : 1 == a ? f = stickManBodyPoints[b * hd + 1] : 2 == a && (f = B[b]);
    0 == c ? (g = C[d], D[d] == nc && (n = true)) : 1 == c ? g = stickManBodyPoints[d * hd + 1] : 2 == c && (g = B[d]);
    m && (G[b] = 1);
    n && (G[d] = 1);
    m ? f = 4 : (m = ~~g.x - ~~f.x, f = ~~g.y - ~~f.y, f = Math.sqrt(m * m + f * f));
    ud[sd] = a;
    wd[sd] = c;
    vd[sd] = b;
    xd[sd] = d;
    kg[sd] = f;
    td[sd] = e;
    0 == a && Jd[b]++;
    0 == c && Jd[d]++;
    1 == a && Be[b]++;
    1 == c && Be[d]++;
    2 == a && De[b]++;
    2 == c && De[d]++;
    sd++;
    return sd - 1
}

function mg(a, c) {
    for (var b = 0; b < sd; b++)
        if (ud[b] == a && vd[b] == c || wd[b] == a && xd[b] == c) 0 == ud[b] && D[vd[b]] == nc && (G[vd[b]] = 2), 0 == wd[b] && D[xd[b]] == nc && (G[xd[b]] = 2), sd--, 0 == ud[b] && Jd[vd[b]]--, 0 == wd[b] && Jd[xd[b]]--, 1 == ud[b] && Be[vd[b]]--, 1 == wd[b] && Be[xd[b]]--, 2 == ud[b] && De[vd[b]]--, 2 == wd[b] && De[xd[b]]--, ud[b] = ud[sd], wd[b] = wd[sd], vd[b] = vd[sd], xd[b] = xd[sd], kg[b] = kg[sd], td[b] = td[sd], b--
}

function ng(a, c, b) {
    for (var d = 0; d < sd; d++) ud[d] == a && vd[d] == c && (vd[d] = b), wd[d] == a && xd[d] == c && (xd[d] = b)
}


function ff() {
    var a = new Vector,
        c, b = null,
        d = null,
        e = null,
        f = null,
        g = 1,
        m = 1;
    c = false;
    we++;
    for (var n = 0; n < sd; n++) {
        c = false;
        0 == ud[n] ? (b = C[vd[n]], e = J[vd[n]], g = Jd[vd[n]] & 255, D[vd[n]] == nc && (c = true)) : 1 == ud[n] ? (b = stickManBodyPoints[vd[n] * hd + 1], e = stickManBodyPoints[vd[n] * hd + 1], g = Be[vd[n]] & 255) : 2 == ud[n] && (b = B[vd[n]], e = W[vd[n]], g = De[vd[n]] & 255);
        0 == wd[n] ? (d = C[xd[n]], f = J[xd[n]], m = Jd[xd[n]] & 255) : 1 == wd[n] ? (d = stickManBodyPoints[xd[n] * hd + 1], f = stickManBodyPoints[xd[n] * hd + 1], m = Be[xd[n]] & 255) : 2 == wd[n] && (d = B[xd[n]], f = W[xd[n]], m = De[xd[n]] & 255);
        c && (vectorSub(a, C[xd[n]], C[vd[n]]), rotatePointAroundCenter90Degrees(a), normalize2(a), vectorScale(a, 0.1), J[vd[n]].add(a),
            J[xd[n]].add(a));
        if (1 == td[n]) vectorSub(a, d, b), rotatePointAroundCenter90Degrees(a), normalize2(a), vectorScale(a, 0.1), e.sub(a), f.add(a);
        else if (2 == td[n]) vectorSub(a, d, b), rotatePointAroundCenter90Degrees(a), normalize2(a), vectorScale(a, 0.1), e.add(a), f.sub(a);
        else if (4 == td[n]) continue;
        vectorSub(a, d, b);
        c || (1 != wd[n] && a.add(f), 1 != ud[n] && a.sub(e));
        c = normalize2(a);
        if (0 != c) {
            if (3 == td[n]) {
                var t = we & 255;
                128 <= t && (t = 256 - t);
                c = 0.5 * (kg[n] * (0.5 + t / 128) - c)
            } else c = 0.5 * (kg[n] - c);
            e.x -= a.x * c / (0.5 * g + 0.5);
            e.y -= a.y * c / (0.5 * g + 0.5);
            f.x += a.x * c / (0.5 * m + 0.5);
            f.y += a.y * c / (0.5 * m + 0.5);
            1 == ud[n] && (e.x = minInsideRange(e.x, 4, 508), e.y = minInsideRange(e.y, 4, 292));
            1 == wd[n] && (f.x = minInsideRange(f.x, 4, 508),
                f.y = minInsideRange(f.y, 4, 292))
        }
    }
}


function Tf() {
    for (var a, c, b, d = null, e = null, f = 0, g = 0, m = 0; m < sd; m++) 0 == ud[m] ? (d = C[vd[m]], f = E[vd[m]]) : 1 == ud[m] ? (d = stickManBodyPoints[vd[m] * hd + 1], f = 16769198) : 2 == ud[m] && (d = B[vd[m]], f = s[A[vd[m]]]), 0 == wd[m] ? (e = C[xd[m]], g = E[xd[m]]) : 1 == wd[m] ? (e = stickManBodyPoints[xd[m] * hd + 1], g = 16769198) : 2 == wd[m] && (e = B[xd[m]], g = s[A[xd[m]]]), a = (f >> 16 & 255) + (g >> 16 & 255) >> 1, c = (f >> 8 & 255) + (g >> 8 & 255) >> 1, b = (f & 255) + (g & 255) >> 1, 0 != Va ? 1 == Va ? lf(d.x, d.y, e.x, e.y, 14540253) : 2 == Va && lf(d.x, d.y, e.x, e.y, 2236962) : 5 != td[m] && (10 == backgroundDrawType ? (a = floor((2989 * a + 5866 * c + 1145 * b) / 1E4), lf(d.x, d.y, e.x, e.y,
        a << 16 | a << 8 | a)) : 14 == backgroundDrawType ? lf(d.x, d.y, e.x, e.y, 0) : lf(d.x, d.y, e.x, e.y, a << 16 | c << 8 | b))
}
var qd = p,
    mf = p + 4E4,
    C = Array(mf);
for (da = 0; da < mf; da++) C[da] = new Vector;
var J = Array(mf);
for (da = 0; da < mf; da++) J[da] = new Vector;
var D = new Int8Array(mf),
    G = new Int32Array(mf),
    E = new Int32Array(mf),
    I = new Int32Array(296 * screenWidth),
    H = new Int32Array(mf),
    ve = Array(296 * screenWidth),
    R = new Int16Array(296 * screenWidth),
    Jd = new Uint8Array(mf),
    X = [0, 0, 0, 0, 0, 1, 2, 3, 1, 4, 1, 4, 1, 1, 4, 1, 2, 4, 1, 2, 1, 3, 0, 1, 2, 1, 3, 5, 2, 3, 4, 1, 3, 2, 4, 1, 2, 4, 5, 5, 1, 3, 4, 5, 4, 0, 0, 0, 0, 0, 4, 1, 4],
    qg = [0, 0, 0, 0, 0, 10, 25, 5, 20, 25, 20, 40, 10, 20, 0, 20, 25, 100, 40, 40, 50, 50, 0, 10, 100, 10, 25, 5, 25, 0, 10, 10, 5, 0, 25, 10, 25, 0, 10, 10, 50, 5, 50, 5, 0, 0, 0, 0, 0, 0, 0, 10, 25],
    rg = [0, 0, 0.9, 0.9, 0.9, 0.2, 0, 0, 0.2, 0.7, 0.2, 0.8, 0.2, 0, 0.2, 0.5, 0, 0.5, 0.3, 0, 0.9,
        0.2, 0, 0, 0, 0.3, 0, 0, 0, 0, 0.9, 0.9, 0, 0, 0.8, 0.2, 0, 0.9, 0.1, 0.1, 0.9, 0.9, 0.5, 0, 0.9, 0, 0, 0, 0, 0, 0.9, 0.9, 0.9
    ],
    sg = [0, 0, 0.9, 0.9, 0.9, 0.2, 0, 0, 0.2, 0.7, 0.2, 1, 0.2, 0, 0.2, 0.5, 0, 0.5, 0.3, 0, 0.9, 0.2, 0, 0, 0, 0.3, 0, 0, 1, 0, 0.9, 0.9, 0, 0, 0.2, 0.2, 0, 0.5, 0.1, 0.1, 0.9, 0.9, 0.5, 0, 0.9, 0, 0, 0, 0, 0, 0.9, 0.9, 0.9],
    tg = [512, -1, -512, 1],
    ug = [0, -1, 0, 1],
    vg = [1, 0, -1, 0],
    wg = [-513, -512, -511, 1, 513, 512, 511, -1],
    xg = [-0.7, 0, 0.7, 1, 0.7, 0, -0.7, -1],
    yg = [-0.7, -1, -0.7, 0, 0.7, 1, 0.7, 0],
    zg = [-1, 0, 1, 1, 1, 0, -1, -1],
    Ag = [-1, -1, -1, 0, 1, 1, 1, 0],
    Bg = [-1025, -1024, -1023, -514, -513, -512, -511,
        -510, -2, -1, 1, 2, 510, 511, 512, 513, 514, 1023, 1024, 1025
    ],
    Cg = [-2049, -2048, -2047, -1539, -1538, -1537, -1536, -1535, -1534, -1533, -1027, -1026, -1025, -1024, -1023, -1022, -1021, -516, -515, -514, -513, -512, -511, -510, -509, -508, -4, -3, -2, -1, 1, 2, 3, 4, 508, 509, 510, 511, 512, 513, 514, 515, 516, 1021, 1022, 1023, 1024, 1025, 1026, 1027, 1533, 1534, 1535, 1536, 1537, 1538, 1539, 2047, 2048, 2049],
    Dg = [1, 1, 0, -1, -1, -1, 0, 1],
    Eg = [0, -1, -1, -1, 0, 1, 1, 1],
    Fg = [1, -511, -512, -513, -1, 511, 512, 513],
    Gg = [-4096, -3587, -3585, -3583, -3581, -3076, -3074, -3072, -3070, -3068, -2565, -2563,
        -2561, -2559, -2557, -2555, -2054, -2052, -2050, -2048, -2046, -2044, -2042, -1543, -1541, -1539, -1537, -1535, -1533, -1531, -1529, -1030, -1028, -1026, -1024, -1022, -1020, -1018, -519, -517, -515, -513, -511, -509, -507, -505, -8, -6, -4, -2, 0, 2, 4, 6, 8, 505, 507, 509, 511, 513, 515, 517, 519, 1018, 1020, 1022, 1024, 1026, 1028, 1030, 1529, 1531, 1533, 1535, 1537, 1539, 1541, 1543, 2042, 2044, 2046, 2048, 2050, 2052, 2054, 2555, 2557, 2559, 2561, 2563, 2565, 3068, 3070, 3072, 3074, 3076, 3581, 3583, 3585, 3587, 4096
    ];

function L(a, c, b, d) {
    D[a] == nc && mg(0, a);
    D[a] = c;
    G[a] = b;
    E[a] = d
}

function Hg(a, c) {
    L(a, c, 0, s[c])
}

function Bd(a, c, b, d) {
    if (qd >= mf || 7 > a || 505 <= a || 7 > c || 289 <= c) return -1;
    setToVector(C[qd], a + 0.5, c + 0.5);
    setToVector(J[qd], 0, 0);
    D[qd] = b;
    G[qd] = d;
    E[qd] = s[b];
    H[qd] = ~~c * screenWidth + ~~a;
    I[H[qd]] = qd;
    Jd[qd] = 0;
    qd++;
    return qd - 1
}

function rd(a) {
    if (qd != p) {
        I[H[a]] = Jb;
        qd--;
        for (var c = 0; c < Ig; c++) Jg[c] == a ? (Ig--, Jg[c] = Jg[Ig]) : Jg[c] == qd && (Jg[c] = a);
        mg(0, a);
        qd != a && (C[a].set(C[qd]), J[a].set(J[qd]), D[a] = D[qd], G[a] = G[qd], E[a] = E[qd], Jd[a] = Jd[qd], H[a] = H[qd], ng(0, qd, a), I[H[a]] = D[a] == Nb ? l : a)
    }
}
var Kg = 1781,
    Ig = 0,
    Jg = new Int32Array(Kg);

function Lg(a, c) {
    var b;
    b = C[a].x;
    C[a].x = C[c].x;
    C[c].x = b;
    b = C[a].y;
    C[a].y = C[c].y;
    C[c].y = b;
    b = I[H[a]];
    I[H[a]] = I[H[c]];
    I[H[c]] = b;
    b = H[a];
    H[a] = H[c];
    H[c] = b
}

function Mg(a, c, b) {
    I[H[a]] = Jb;
    setToVector(C[a], c, b);
    H[a] = (b << 9) + ~~c;
    I[H[a]] = a
}

function Ng(a, c) {
    I[H[a]] = Jb;
    var b = vectorLength2(c);
    3.8 < b && vectorScale(c, 3.8 / b);
    b = (C[a].y << 9) + ~~(C[a].x + c.x);
    I[b] <= l && (C[a].x += c.x);
    b = (C[a].y + c.y << 9) + ~~C[a].x;
    I[b] <= l && (C[a].y += c.y);
    H[a] = (C[a].y << 9) + ~~C[a].x;
    I[H[a]] = a
}
var Og = new Vector,
    Pg = new Vector,
    Qg = new Vector;

function Rg(a, c) {
    var b = vectorLength2(c);
    3.8 < b && vectorScale(c, 3.8 / b);
    setToVector(Qg, U[H[a]], V[H[a]]);
    var b = c.x * Qg.x + c.y * Qg.y,
        d = Pg,
        e = Qg;
    d.x = e.x * b;
    d.y = e.y * b;
    vectorSub(Og, c, Pg);
    b = (C[a].y + Pg.y << 9) + ~~(C[a].x + Pg.x);
    I[b] <= l && C[a].add(Pg);
    b = (C[a].y + Og.y << 9) + ~~(C[a].x + Og.x);
    I[b] <= l && C[a].add(Og);
    H[a] = (C[a].y << 9) + ~~C[a].x;
    I[H[a]] = a
}
var Sg = [0, 0, 0, 0, 0, 0.05, 0.1, -0.1, 0.1, 0.1, 0.1, 0.1, 0.05, 0.1, 0, 0.1, 0.1, 0.2, 0.1, 0.1, 0.2, 0.4, 0, 0.05, 0.2, 0.3, 0.1, -0.1, 0.1, 0, 0.4, 0.4, 0, 0.2, 0.1, 0.1, 0.1, 0.1, 0, 0.1, 0.4, 0.1, 0.05, -0.1, 0.4, 0, 0, 0, 0, 0, 0.2, 0.08, 0.2],
    Tg = [0, 0, 0, 0, 0, 0.1, 0, 0.5, 0.2, 0.2, 0.1, 0.2, 0, 0.9, 0, 0.1, 0, 0.2, 0.2, 0, 0.2, 0, 0, 0.1, 0, 0, 0.2, 0.1, 0, 0, 0.2, 0.2, 0, 0, 0, 0.1, 0, 0.2, 0, 0, 0, 0.9, 0.1, 0.1, 0.2, 0, 0, 0, 0, 0, 0.2, 0.05, 0.2],
    Ug = [0, 0, 0, 0, 0, 0.5, 0.95, 1, 0.5, 0.5, 0.5, 1, 0.95, 0.1, 0, 0.5, 1, 0.8, 0.8, 0.95, 0.8, 0.1, 0, 0.5, 0.95, 0.5, 0.5, 1, 1, 0, 0.8, 0.8, 0, 0.95, 0.5, 0.5, 0.95, 0.8, 1, 0.5,
        0.95, 0.8, 0.5, 1, 0.8, 0, 0, 0, 0, 0, 0.8, 0.95, 0.5
    ];

function Vg(a, c) {
    J[a].x += U[H[a]] * Sg[D[a]];
    J[a].y += V[H[a]] * Sg[D[a]];
    c.set(J[a]);
    c.x += P[R[H[a]]];
    c.y += Q[R[H[a]]];
    I[H[a]] = Jb;
    var b = floor(vectorLength2(c) / 4) + 2;
    vectorScale(c, 1 / b);
    for (var d = 0, e; d < b; d++) e = (C[a].y << 9) + ~~(C[a].x + c.x), 4 > C[a].x + c.x || 508 <= C[a].x + c.x || (I[e] <= l ? C[a].x += c.x : (J[a].y *= Ug[D[a]], J[a].x *= -Tg[D[a]], c.x *= -Tg[D[a]])), e = (C[a].y + c.y << 9) + ~~C[a].x, 4 > C[a].y + c.y || 292 <= C[a].y + c.y || (I[e] <= l ? C[a].y += c.y : (J[a].x *= Ug[D[a]], J[a].y *= -Tg[D[a]], c.y *= -Tg[D[a]]));
    H[a] = (C[a].y << 9) + ~~C[a].x;
    I[H[a]] = a
}


function ef() {
    var a, c = new Vector;
    if (!ga && 0 == Xa) {
        if (47 == ea && Ke || 47 == fa && Oe) {
            a = new Vector;
            Ig = 0;
            for (var b = p; b < qd && !(Kg <= Ig); b++) D[b] != Nb && (a.x = ia - floor(C[b].x), a.y = ja - floor(C[b].y), fastLength(a) < oa * oa * 7 + 1 && (Jg[Ig++] = b))
        }
        if (47 == ea && We || 47 == fa && Xe)
            for (b = 0; b < Ig; b++) J[Jg[b]].x += 0.1 * (ia - C[Jg[b]].x), J[Jg[b]].y += 0.1 * (ja - C[Jg[b]].y);
        else Ig = 0
    }
    for (a = p; a < qd; a++) a = D[a] <= bc ? a - Xg(a, c) : D[a] <= mc ? a - Yg(a, c) : D[a] <= tc ? a - Zg(a, c) : D[a] <= Dc ? a - $g(a, c) : a - ah(a, c);
    if (1 > xa)
        for (a = p; a < qd; a++) ve[H[a]] || rd(a--);
    else if (1 == xa)
        for (a = p; a < qd; a++)
            if (!ve[H[a]]) {
                a: {
                    for (c =
                        0; c < sd; c++)
                        if (0 == ud[c] && vd[c] == a || 0 == wd[c] && xd[c] == a) {
                            c = true;
                            break a
                        } c = false
                }
                c ? rd(a--) : 8 > C[a].x ? (c = H[a] + 496, I[c] <= l && 8 <= C[a].y && 288 > C[a].y ? (C[a].x += 496, I[H[a]] = Jb, H[a] = c, I[c] = a) : rd(a--)) : 504 <= C[a].x ? (c = H[a] - 496, I[c] <= l && 8 <= C[a].y && 288 > C[a].y ? (C[a].x -= 496, I[H[a]] = Jb, H[a] = c, I[c] = a) : rd(a--)) : 8 > C[a].y ? (c = H[a] + 280 * screenWidth, I[c] <= l ? (C[a].y += 280, I[H[a]] = Jb, H[a] = c, I[c] = a) : rd(a--)) : 288 <= C[a].y && (c = H[a] - 280 * screenWidth, I[c] <= l ? (C[a].y -= 280, I[H[a]] = Jb, H[a] = c, I[c] = a) : rd(a--))
            }
}


function Xg(a, c) {
    var b, d, e, f, g, m, n, t;
    if (D[a] == Sb)
        if (0 == Jd[a]) {
            setToVector(c, P[R[H[a]]], Q[R[H[a]]]);
            d = customRandom2(0.4);
            c.x += U[H[a]] * d;
            c.y += V[H[a]] * d;
            if (-0.01 > J[a].x || 0.01 < J[a].x || -0.01 > J[a].y || 0.01 < J[a].y) vectorScale(J[a], 0.7), c.add(J[a]);
            Ng(a, c)
        } else Vg(a, c);
    else if (D[a] == q) {
        if (0 == Jd[a]) {
            I[H[a]] = Jb;
            setToVector(c, P[R[H[a]]], Q[R[H[a]]]);
            b = (C[a].y + V[H[a]] << 9) + floor(C[a].x + U[H[a]]);
            D[I[b]] >= Ob ? (b = (C[a].y + U[H[a]] << 9) + floor(C[a].x - V[H[a]]), I[b] <= l && (d = customRandomBetween(0.1, 0.2), J[a].x -= V[H[a]] * d, J[a].y += U[H[a]] * d), b = (C[a].y - U[H[a]] << 9) + floor(C[a].x + V[H[a]]), I[b] <= l &&
                (d = customRandomBetween(0.1, 0.2), J[a].x += V[H[a]] * d, J[a].y -= U[H[a]] * d), customRandomBoolean(0.01) && (C[a].x = ~~C[a].x + 0.5, C[a].y = ~~C[a].y + 0.5)) : (d = customRandom2(1.5), c.x += U[H[a]] * d, c.y += V[H[a]] * d);
            if (-0.01 > J[a].x || 0.01 < J[a].x || -0.01 > J[a].y || 0.01 < J[a].y) vectorScale(J[a], 0.9), c.add(J[a]);
            0 == V[H[a]] ? Ng(a, c) : Rg(a, c)
        } else Vg(a, c);
        d = customRandom(8);
        b = I[H[a] + wg[d]];
        1 == X[D[b]] && D[b] != fc || D[b] == ec || D[b] == jc || D[b] == nc || D[b] == vc ? customRandomBoolean(0.2) && 0.3 >= U[H[a]] * xg[d] + V[H[a]] * yg[d] && Lg(a, b) : D[b] == Wb && customRandomBoolean(0.5) && L(a, Wb, 0, s[Wb]);
        d = customRandom(20);
        b = I[H[a] + Bg[d]];
        if (D[b] == dc) return L(b, ec, 0, s[ec]), rd(a),
            1
    } else if (D[a] == r) {
        if (0 == Jd[a]) {
            if (1 != G[a] && customRandomBoolean(0.05) || 1 == G[a] && customRandomBoolean(0.2)) return rd(a), 1;
            d = customRandom2(0.03);
            P[R[H[a]]] -= U[H[a]] * d;
            Q[R[H[a]]] -= V[H[a]] * d;
            setToVector(c, P[R[H[a]]], Q[R[H[a]]]);
            d = customRandomBetween(-0.5, 0.5);
            c.x += V[H[a]] * d;
            c.y -= U[H[a]] * d;
            2 == G[a] && (vectorScale(J[a], 0.9), c.add(J[a]));
            Ng(a, c)
        } else Vg(a, c);
        d = customRandom(20);
        b = I[H[a] + Bg[d]];
        if (b >= p)
            if (D[b] == Sb) L(b, r, 0, s[r]);
            else {
                if (D[b] == q || D[b] == vc) return rd(a), 1;
                D[b] == Tb ? customRandomBoolean(0.5) && L(b, r, 0, s[r]) : D[b] == Xb ? L(b, q, 0, s[q]) : D[b] == tc && L(b, r, 0, s[r])
            }
    } else if (D[a] == Tb)
        if (0 == G[a]) {
            if (0 == Jd[a]) {
                setToVector(c, P[R[H[a]]],
                    Q[R[H[a]]]);
                d = customRandom2(0.6);
                c.x += U[H[a]] * d;
                c.y += V[H[a]] * d;
                if (-0.01 > J[a].x || 0.01 < J[a].x || -0.01 > J[a].y || 0.01 < J[a].y) vectorScale(J[a], 0.8), c.add(J[a]);
                Ng(a, c)
            } else Vg(a, c);
            if (1E3 > mf - qd) return 0;
            b = (C[a].y + V[H[a]] << 9) + floor(C[a].x + U[H[a]]);
            D[I[b]] == Sb && (G[a] = 1);
            D[I[b]] == tc && (G[a] = 2);
            D[I[b]] == dc && (G[a] = 3);
            D[I[b]] == Ub && (G[a] = (G[I[b]] & 15) + 1)
        } else if (1 == G[a] || 2 == G[a]) {
        if (setToVector(c, ~~C[a].x + 0.5, ~~C[a].y + 0.5), d = 1 == G[a] ? customRandom2(1) : 1, c.x -= U[H[a]] * d, c.y -= V[H[a]] * d, d = customRandom(3) - 1, c.x += V[H[a]] * d, c.y -= U[H[a]] * d, b = I[(c.y << 9) + floor(c.x)], b <= l && I[(c.y + V[H[a]] <<
                9) + floor(c.x + U[H[a]])] <= l && (e = ~~C[a].x, f = ~~C[a].y, Mg(a, ~~c.x, ~~c.y), Bd(e, f, Ub, G[a] - 1)), customRandomBoolean(0.05)) return rd(a), 1
    } else {
        if (3 <= G[a] && 5 >= G[a]) {
            setToVector(c, ~~C[a].x + 0.5, ~~C[a].y + 0.5);
            if (3 == G[a]) {
                if (customRandomBoolean(0.1) && (e = floor(c.x - V[H[a]]), f = floor(c.y + U[H[a]]), I[(f << 9) + e] <= l && Bd(e, f, Tb, 4)), customRandomBoolean(0.1) && (e = floor(c.x + V[H[a]]), f = floor(c.y - U[H[a]]), I[(f << 9) + e] <= l && Bd(e, f, Tb, 5)), customRandomBoolean(0.05)) return rd(a), 1
            } else if (4 == G[a]) {
                if (c.x -= V[H[a]], c.y += U[H[a]], customRandomBoolean(0.15)) return rd(a), 1
            } else if (5 == G[a] && (c.x += V[H[a]], c.y -= U[H[a]], customRandomBoolean(0.15))) return rd(a), 1;
            c.x -= U[H[a]];
            c.y -= V[H[a]];
            b = I[(c.y << 9) + ~~c.x];
            if (b <= l) {
                if (I[(c.y + U[H[a]] << 9) + floor(c.x - V[H[a]])] > l || I[(c.y - U[H[a]] << 9) + floor(c.x + V[H[a]])] > l) return 0;
                e = ~~C[a].x;
                f = ~~C[a].y;
                Mg(a, ~~c.x, ~~c.y);
                Bd(e, f, Ub, 2)
            }
        }
    } else if (D[a] == Ub) {
        if (0 == Jd[a]) {
            if (-0.01 > J[a].x || 0.01 < J[a].x || -0.01 > J[a].y || 0.01 < J[a].y) vectorScale(J[a], 0.3), c.set(J[a]), Ng(a, c)
        } else Vg(a, c);
        if (16 > G[a])
            if (d = customRandom(20), b = D[I[H[a] + Bg[d]]], b == r) customRandomBoolean(0.5) && (G[a] |= 16);
            else if (b == gc) G[a] |= 16;
        else {
            if (b == q) {
                if (1E3 > mf - qd) return 0;
                d = customRandom(8);
                I[H[a] + wg[d]] <= l && customRandomBoolean(0.05) && Bd(~~C[a].x + zg[d], ~~C[a].y +
                    Ag[d], Tb, 0)
            }
        } else g = Sb, 0 == (G[a] & 15) && (g = Sb), 1 == (G[a] & 15) && (g = tc), 2 == (G[a] & 15) && (g = dc), d = customRandom(8), b = D[I[H[a] + wg[d]]], b <= l ? customRandomBoolean(0.3) && Bd(~~C[a].x + zg[d], ~~C[a].y + Ag[d], r, 1) : b == q && L(a, g, 0, s[g]), customRandomBoolean(0.005) && L(a, g, 0, s[g])
    } else if (D[a] == Vb) {
        if (0 == Jd[a]) {
            setToVector(c, P[R[H[a]]], Q[R[H[a]]]);
            d = customRandom2(0.8);
            c.x += U[H[a]] * d;
            c.y += V[H[a]] * d;
            if (-0.01 > J[a].x || 0.01 < J[a].x || -0.01 > J[a].y || 0.01 < J[a].y) vectorScale(J[a], 0.8), c.add(J[a]);
            Ng(a, c)
        } else Vg(a, c);
        d = customRandom(20);
        b = D[I[H[a] + Bg[d]]];
        if (3 != X[b]) return 0;
        n = ~~C[a].x;
        t = ~~C[a].y;
        d = max(n - 8, 8);
        b = max(t - 8,
            8);
        g = min(n + 8, 503);
        m = min(t + 8, 287);
        for (f = b; f <= m; f++)
            for (e = d; e <= g; e++) 64 < (e - n) * (e - n) + (f - t) * (f - t) || (b = (f + t >> 1 << 9) + (e + n >> 1), 1 <= x[R[b]] || (b = I[(f << 9) + e], b >= p && D[b] != Vb && (D[b] == fc && L(b, dc, 0, s[dc]), J[b].x += e - n, J[b].y += f - t)));
        n = minInsideRange(n, 12, 499);
        t = minInsideRange(t, 12, 283);
        d = (t >> 2 << 7) + (n >> 2);
        0 == x[b = d - w - 1] && (P[b] -= 0.4, Q[b] -= 0.4);
        0 == x[b = d - w] && (Q[b] -= 0.5);
        0 == x[b = d - w + 1] && (P[b] += 0.4, Q[b] -= 0.4);
        0 == x[b = d - 1] && (P[b] -= 0.5);
        0 == x[b = d + 1] && (P[b] += 0.5);
        0 == x[b = d + w - 1] && (P[b] -= 0.4, Q[b] += 0.4);
        0 == x[b = d + w] && (Q[b] += 0.5);
        0 == x[b = d + w + 1] && (P[b] += 0.4, Q[b] +=
            0.4);
        L(a, r, 0, s[r])
    } else if (D[a] == Nb) customRandomBoolean(0.9) && (P[R[H[a]]] += J[a].x, Q[R[H[a]]] += J[a].y), I[H[a]] == Jb && (I[H[a]] = l);
    else if (D[a] == Wb) 0 == Jd[a] ? (setToVector(c, P[R[H[a]]], Q[R[H[a]]]), 1 < fastLength(c) && customRandomBoolean(0.5) && L(a, Xb, 0, s[Xb])) : Vg(a, c), d = customRandom(20), b = D[I[H[a] + Bg[d]]], 3 == X[b] && L(a, q, 0, s[q]);
    else if (D[a] == Xb) {
        if (0 == Jd[a]) {
            setToVector(c, P[R[H[a]]], Q[R[H[a]]]);
            d = customRandom2(0.3);
            c.x += U[H[a]] * d;
            c.y += V[H[a]] * d;
            if (-0.01 > J[a].x || 0.01 < J[a].x || -0.01 > J[a].y || 0.01 < J[a].y) vectorScale(J[a], 0.7), c.add(J[a]);
            Ng(a, c)
        } else Vg(a, c);
        d = customRandom(8);
        b = I[H[a] + wg[d]];
        b >= p && D[b] != Ub && D[b] !=
            Xb && D[b] != Zb && D[b] != tc && D[b] != Cc && (D[b] == Wb ? L(a, Wb, 0, s[Wb]) : customRandomBoolean(0.1) && L(a, q, 0, s[q]))
    } else if (D[a] == Yb) 0 == Jd[a] ? (J[a].x += 0.05 * P[R[H[a]]], J[a].y += 0.05 * Q[R[H[a]]], J[a].x += 0.01 * U[H[a]], J[a].y += 0.01 * V[H[a]], vectorScale(J[a], 0.999), c.set(J[a]), I[H[a]] = Jb, b = vectorLength2(c), 3.8 < b && vectorScale(c, 3.8 / b), b = I[(C[a].y << 9) + floor(C[a].x + c.x)], b <= l ? C[a].x += c.x : 2 == X[D[b]] ? (J[b].x -= J[a].x, J[a].x *= 0.9, C[b].x = C[a].x, C[a].x += c.x, H[b] = H[a], I[H[a]] = b) : D[b] == r ? Lg(a, b) : D[b] == Yb ? (d = 0.9 * J[a].x, J[a].x = 0.9 * J[b].x, J[b].x = d) : (J[a].x *= -rg[D[b]], J[a].y *= sg[D[b]]),
        H[a] = (C[a].y << 9) + floor(C[a].x), I[H[a]] = Jb, b = I[(C[a].y + c.y << 9) + floor(C[a].x)], b <= l ? C[a].y += c.y : 2 == X[D[b]] ? (J[b].y -= J[a].y, J[a].y *= 0.9, C[b].y = C[a].y, C[a].y += c.y, H[b] = H[a], I[H[a]] = b) : D[b] == r ? Lg(a, b) : D[b] == Yb ? 0 < J[a].y ? (d = 0.45 * J[a].y, J[a].y = -d, J[a].y += J[b].y, J[b].y = d) : (d = 0.45 * J[b].y, J[b].y = -d, J[b].y += J[a].y, J[a].y = d) : (J[a].y *= -rg[D[b]], J[a].x *= sg[D[b]]), H[a] = (C[a].y << 9) + floor(C[a].x), I[H[a]] = a) : Vg(a, c);
    else if (D[a] == Zb)
        if (0 != Jd[a] && setToVector(J[a], 0, 0), 0 == G[a]) d = customRandom(20), b = I[H[a] + Bg[d]], b >= p && (G[a] = D[b] == Zb ? G[b] : D[b]);
        else {
            if (1E3 >
                mf - qd) return 0;
            d = customRandom(8);
            I[H[a] + wg[d]] <= l && customRandomBoolean(0.1) && Bd(~~C[a].x + zg[d], ~~C[a].y + Ag[d], G[a], 0)
        } if (D[a] == ac) {
        if (0 == Jd[a]) {
            setToVector(c, P[R[H[a]]], Q[R[H[a]]]);
            d = customRandom2(0.8);
            c.x += U[H[a]] * d;
            c.y += V[H[a]] * d;
            if (-0.01 > J[a].x || 0.01 < J[a].x || -0.01 > J[a].y || 0.01 < J[a].y) vectorScale(J[a], 0.9), c.add(J[a]);
            Ng(a, c)
        } else Vg(a, c);
        0 == (G[a] & 255) && (G[a] = 0 != Oc[ea] ? Oc[ea] : 0 != Oc[fa] ? Oc[fa] : Sb);
        if (256 > G[a]) d = customRandom(8), b = I[H[a] + wg[d]], 3 == X[D[b]] && (G[a] += 256);
        else if (512 > G[a]) J[a].x = 50 * -U[H[a]], J[a].y = 50 * -V[H[a]], G[a] += 256;
        else {
            if (12800 > G[a]) return G[a] +=
                256, 0;
            if (customRandomBoolean(0.95)) return 0;
            if (1E3 > mf - qd) return rd(a), 1;
            for (d = 0; 8 > d; d++) b = I[H[a] + wg[d]], b <= l && (b = Bd(~~C[a].x + zg[d], ~~C[a].y + Ag[d], G[a] & 255, 0), 0 <= b && (J[b].x += 20 * xg[d], J[b].y += 20 * yg[d]));
            rd(a);
            return 1
        }
    } else if (D[a] == bc) {
        if (0 == Jd[a]) {
            I[H[a]] = Jb;
            setToVector(c, P[R[H[a]]], Q[R[H[a]]]);
            b = (C[a].y + V[H[a]] << 9) + floor(C[a].x + U[H[a]]);
            D[I[b]] >= Ob ? (b = (C[a].y + U[H[a]] << 9) + floor(C[a].x - V[H[a]]), I[b] <= l && (d = customRandomBetween(0.1, 0.2), J[a].x -= V[H[a]] * d, J[a].y += U[H[a]] * d), b = (C[a].y - U[H[a]] << 9) + floor(C[a].x + V[H[a]]), I[b] <= l && (d = customRandomBetween(0.1, 0.2), J[a].x += V[H[a]] *
                d, J[a].y -= U[H[a]] * d), customRandomBoolean(0.01) && (C[a].x = ~~C[a].x + 0.5, C[a].y = ~~C[a].y + 0.5)) : (d = customRandom2(1.5), c.x += U[H[a]] * d, c.y += V[H[a]] * d);
            if (-0.01 > J[a].x || 0.01 < J[a].x || -0.01 > J[a].y || 0.01 < J[a].y) vectorScale(J[a], 0.9), c.add(J[a]);
            0 == V[H[a]] ? Ng(a, c) : Rg(a, c)
        } else Vg(a, c);
        d = customRandom(8);
        b = I[H[a] + wg[d]];
        1 == X[D[b]] && D[b] != fc || D[b] == q || D[b] == ec || D[b] == jc || D[b] == vc ? customRandomBoolean(0.2) && 0.3 >= U[H[a]] * xg[d] + V[H[a]] * yg[d] && Lg(a, b) : 3 == X[D[b]] && (G[a] = 1);
        if (1 == G[a] && (d = customRandom(8), I[H[a] + wg[d]] <= l && Bd(~~C[a].x + zg[d], ~~C[a].y + Ag[d], r, 0), customRandomBoolean(0.1))) return rd(a), 1
    }
    return 0
}


function Yg(a, c) {
    var b, d, e, f, g, m, n, t, u;
    if (D[a] == cc)
        if (0 != Jd[a] && Vg(a, c), 0 == G[a]) e = customRandom(8), b = I[H[a] + wg[e]], 3 == X[D[b]] && (G[a] = 1);
        else {
            for (d = 0; 8 > d; d++) b = I[H[a] + wg[d]], D[b] == cc && (G[b] = 1);
            var F = 8;
            t = ~~C[a].x;
            u = ~~C[a].y;
            e = max(t - F, 8);
            d = max(u - F, 8);
            m = min(t + F, 503);
            n = min(u + F, 287);
            for (g = d; g <= n; g++)
                for (f = e; f <= m; f++) F * F < (f - t) * (f - t) + (g - u) * (g - u) || (d = (g + u >> 1 << 9) + (f + t >> 1), 1 <= x[R[d]] || (b = I[(g << 9) + f], b >= p && (D[b] == fc && L(b, dc, 0, s[dc]), J[b].x += f - t, J[b].y += g - u)));
            t = minInsideRange(t, 12, 499);
            u = minInsideRange(u, 12, 283);
            e = (u >> 2 << 7) + (t >> 2);
            0 == x[d = e - w - 1] &&
                (P[d] -= 0.08, Q[d] -= 0.08);
            0 == x[d = e - w] && (Q[d] -= 0.1);
            0 == x[d = e - w + 1] && (P[d] += 0.1, Q[d] -= 0.08);
            0 == x[d = e - 1] && (P[d] -= 0.1);
            0 == x[d = e + 1] && (P[d] += 0.1);
            0 == x[d = e + w - 1] && (P[d] -= 0.08, Q[d] += 0.08);
            0 == x[d = e + w] && (Q[d] += 0.1);
            0 == x[d = e + w + 1] && (P[d] += 0.08, Q[d] += 0.08);
            rd(a);
            return 1
        }
    else if (D[a] == dc)
        if (0 == Jd[a]) {
            I[H[a]] = Jb;
            setToVector(c, P[R[H[a]]], Q[R[H[a]]]);
            d = customRandom2(1);
            c.x += U[H[a]] * d;
            c.y += V[H[a]] * d;
            if (-0.01 > J[a].x || 0.01 < J[a].x || -0.01 > J[a].y || 0.01 < J[a].y) vectorScale(J[a], 0.8), c.add(J[a]);
            b = ~~C[a].x + 0.5;
            e = ~~C[a].y + 0.5;
            d = (e + V[H[a]] << 9) + floor(b + U[H[a]]);
            D[I[d]] >= Ob && (customRandomBoolean(0.5) ? (d = (e + V[H[a]] + U[H[a]] << 9) + floor(b + U[H[a]] - V[H[a]]), I[d] <= l && (c.x -= 0.5 * V[H[a]], c.y += 0.5 * U[H[a]])) : (d = (e + V[H[a]] - U[H[a]] << 9) + floor(b + U[H[a]] + V[H[a]]), I[d] <= l && (c.x += 0.5 * V[H[a]], c.y -= 0.5 * U[H[a]])));
            Ng(a, c)
        } else Vg(a, c);
    else if (D[a] == ec) {
        if (0 == Jd[a]) {
            I[H[a]] = Jb;
            setToVector(c, P[R[H[a]]], Q[R[H[a]]]);
            d = (C[a].y + V[H[a]] << 9) + floor(C[a].x + U[H[a]]);
            D[I[d]] >= Ob ? (d = (C[a].y + U[H[a]] << 9) + floor(C[a].x - V[H[a]]), I[d] <= l && (d = customRandom2(0.05), J[a].x -= V[H[a]] * d, J[a].y += U[H[a]] * d), d = (C[a].y - U[H[a]] << 9) + floor(C[a].x + V[H[a]]), I[d] <= l && (d =
                customRandom2(0.05), J[a].x += V[H[a]] * d, J[a].y -= U[H[a]] * d), customRandomBoolean(0.01) && (C[a].x = ~~C[a].x + 0.5, C[a].y = ~~C[a].y + 0.5)) : (d = customRandom2(1.5), c.x += U[H[a]] * d, c.y += V[H[a]] * d);
            if (-0.01 > J[a].x || 0.01 < J[a].x || -0.01 > J[a].y || 0.01 < J[a].y) vectorScale(J[a], 0.9), c.add(J[a]);
            0 == V[H[a]] ? Ng(a, c) : Rg(a, c)
        } else Vg(a, c);
        e = customRandom(8);
        b = I[H[a] + wg[e]];
        1 == X[D[b]] && D[b] != fc ? customRandomBoolean(0.2) && 0.3 >= U[H[a]] * xg[e] + V[H[a]] * yg[e] && Lg(a, b) : 3 == X[D[b]] && L(a, dc, 0, s[dc])
    } else if (D[a] == fc)
        if (0 == Jd[a]) {
            J[a].x += 0.05 * P[R[H[a]]];
            J[a].y += 0.05 * Q[R[H[a]]];
            d = customRandom2(0.12);
            J[a].x += U[H[a]] * d;
            J[a].y +=
                V[H[a]] * d;
            vectorScale(J[a], 0.95);
            c.set(J[a]);
            d = vectorLength2(c);
            3.8 < d && vectorScale(c, 3.8 / d);
            I[H[a]] = Jb;
            b = I[(C[a].y << 9) + floor(C[a].x + c.x)];
            if (b <= l) C[a].x += c.x;
            else if (2 == X[D[b]] || D[b] == gc) J[b].x -= J[a].x, J[a].x *= 0.5, C[b].x = C[a].x, C[a].x += c.x, H[b] = H[a], I[H[a]] = b;
            else {
                if (D[b] == Sb || D[b] == Tb || D[b] == Vb || D[b] == ac || D[b] == kc) J[b].x += customRandom2(J[a].x);
                J[a].x *= 0.5
            }
            H[a] = (C[a].y << 9) + ~~C[a].x;
            I[H[a]] = Jb;
            b = I[(C[a].y + c.y << 9) + floor(C[a].x)];
            if (b <= l) C[a].y += c.y;
            else if (2 == X[D[b]] || D[b] == gc) J[b].y -= J[a].y, J[a].y *= 0.5, C[b].y = C[a].y, C[a].y += c.y, H[b] = H[a], I[H[a]] =
                b;
            else {
                if (D[b] == Sb || D[b] == Tb || D[b] == Vb || D[b] == ac || D[b] == kc) J[b].y += customRandom2(J[a].y);
                J[a].y *= 0.5
            }
            H[a] = (C[a].y << 9) + ~~C[a].x;
            I[H[a]] = a
        } else Vg(a, c);
    else if (D[a] == gc) {
        if (0 == Jd[a]) {
            I[H[a]] = Jb;
            setToVector(c, 0.1 * P[R[H[a]]], 0.1 * Q[R[H[a]]]);
            d = (C[a].y + V[H[a]] << 9) + floor(C[a].x + U[H[a]]);
            D[I[d]] >= Ob ? (d = (C[a].y + U[H[a]] << 9) + floor(C[a].x - V[H[a]]), I[d] <= l && (d = customRandom2(0.1), J[a].x -= V[H[a]] * d, J[a].y += U[H[a]] * d), d = (C[a].y - U[H[a]] << 9) + floor(C[a].x + V[H[a]]), I[d] <= l && (d = customRandom2(0.1), J[a].x += V[H[a]] * d, J[a].y -= U[H[a]] * d), customRandomBoolean(0.01) && (C[a].x = ~~C[a].x + 0.5, C[a].y = ~~C[a].y + 0.5)) : (d = customRandom2(2), c.x += U[H[a]] * d, c.y += V[H[a]] * d);
            if (-0.01 > J[a].x || 0.01 < J[a].x || -0.01 > J[a].y || 0.01 < J[a].y) vectorScale(J[a], 0.9), c.add(J[a]);
            0 == V[H[a]] ? Ng(a, c) : Rg(a, c)
        } else Vg(a, c);
        e = customRandom(20);
        b = I[H[a] + Bg[e]];
        b >= p && (D[b] == Sb ? L(b, r, 0, s[r]) : D[b] == q || D[b] == nc ? (L(a, fc, 0, s[fc]), L(b, hc, 10, s[hc])) : D[b] == Tb ? L(b, r, 0, s[r]) : D[b] == Yb ? L(b, r, 0, s[r]) : D[b] == dc ? customRandomBoolean(0.05) && L(b, gc, 0, s[gc]) : D[b] == fc ? J[b].x += customRandomBetween(-0.1, 0.1) : D[b] == tc ? L(b, r, 0, s[r]) : D[b] == vc ? (L(a, fc, 0, s[fc]), L(b, uc, 0, s[uc])) : D[b] == wc ? customRandomBoolean(0.5) && L(b, gc, 0, s[gc]) : D[b] ==
            zc && customRandomBoolean(0.01) && L(b, gc, 0, s[gc]))
    } else if (D[a] == hc) {
        if (1 > customRandom2(G[a])) return rd(a), 1;
        c.set(J[a]);
        vectorScale(J[a], 0.7);
        Ng(a, c)
    } else if (D[a] == ic) {
        if (0 == Jd[a]) {
            setToVector(c, P[R[H[a]]], Q[R[H[a]]]);
            d = customRandom2(0.4);
            c.x += U[H[a]] * d;
            c.y += V[H[a]] * d;
            if (-0.01 > J[a].x || 0.01 < J[a].x || -0.01 > J[a].y || 0.01 < J[a].y) vectorScale(J[a], 0.7), c.add(J[a]);
            Ng(a, c)
        } else Vg(a, c);
        e = customRandom(8);
        b = I[H[a] + wg[e]];
        0 == G[a] ? b >= p && D[b] != ic && (G[a] = D[b]) : 4096 >= G[a] ? (b >= p && (D[b] == ic && 0 != G[b] || L(b, ic, G[a] & 255, s[ic])), G[a] += 256) : (G[a] += 256, 24576 <= G[a] && L(a, G[a] & 255, 0, s[G[a] & 255]))
    } else if (D[a] ==
        jc) {
        if (0 == Jd[a]) {
            I[H[a]] = Jb;
            setToVector(c, P[R[H[a]]], Q[R[H[a]]]);
            d = (C[a].y + V[H[a]] << 9) + floor(C[a].x + U[H[a]]);
            D[I[d]] >= Ob ? (d = (C[a].y + U[H[a]] << 9) + floor(C[a].x - V[H[a]]), I[d] <= l && (d = customRandomBetween(0.1, 0.2), J[a].x -= V[H[a]] * d, J[a].y += U[H[a]] * d), d = (C[a].y - U[H[a]] << 9) + floor(C[a].x + V[H[a]]), I[d] <= l && (d = customRandomBetween(0.1, 0.2), J[a].x += V[H[a]] * d, J[a].y -= U[H[a]] * d), customRandomBoolean(0.01) && (C[a].x = ~~C[a].x + 0.5, C[a].y = ~~C[a].y + 0.5)) : (d = customRandom2(1.5), c.x += U[H[a]] * d, c.y += V[H[a]] * d);
            if (-0.01 > J[a].x || 0.01 < J[a].x || -0.01 > J[a].y || 0.01 < J[a].y) vectorScale(J[a], 0.9), c.add(J[a]);
            0 == V[H[a]] ? Ng(a,
                c) : Rg(a, c)
        } else Vg(a, c);
        e = customRandom(8);
        b = I[H[a] + wg[e]];
        1 == X[D[b]] && D[b] != fc || D[b] == ec ? customRandomBoolean(0.2) && 0.3 >= U[H[a]] * xg[e] + V[H[a]] * yg[e] && Lg(a, b) : 3 == X[D[b]] && (G[a] = 1);
        if (0 == G[a] && 10 > vectorLength2(J[a])) return 0;
        F = 8;
        t = ~~C[a].x;
        u = ~~C[a].y;
        e = max(t - F, 8);
        d = max(u - F, 8);
        m = min(t + F, 503);
        n = min(u + F, 287);
        for (g = d; g <= n; g++)
            for (f = e; f <= m; f++) F * F < (f - t) * (f - t) + (g - u) * (g - u) || (d = (g + u >> 1 << 9) + (f + t >> 1), 1 <= x[R[d]] || (b = I[(g << 9) + f], b >= p && (D[b] == fc && L(b, dc, 0, s[dc]), J[b].x += f - t, J[b].y += g - u)));
        t = minInsideRange(t, 12, 499);
        u = minInsideRange(u, 12, 283);
        e = (u >> 2 << 7) + (t >> 2);
        0 == x[d = e - w - 1] && (P[d] -=
            0.4, Q[d] -= 0.4);
        0 == x[d = e - w] && (Q[d] -= 0.5);
        0 == x[d = e - w + 1] && (P[d] += 0.4, Q[d] -= 0.4);
        0 == x[d = e - 1] && (P[d] -= 0.5);
        0 == x[d = e + 1] && (P[d] += 0.5);
        0 == x[d = e + w - 1] && (P[d] -= 0.4, Q[d] += 0.4);
        0 == x[d = e + w] && (Q[d] += 0.5);
        0 == x[d = e + w + 1] && (P[d] += 0.4, Q[d] += 0.4);
        L(a, r, 0, s[r])
    } else if (D[a] == kc) {
        e = customRandom(8);
        b = I[H[a] + wg[e]];
        if (3 == X[D[b]]) return L(a, r, 0, s[r]), 0;
        if (0 == G[a]) {
            if (0 == Jd[a]) {
                setToVector(c, P[R[H[a]]], Q[R[H[a]]]);
                d = customRandom2(0.5);
                c.x += U[H[a]] * d;
                c.y += V[H[a]] * d;
                if (-0.01 > J[a].x || 0.01 < J[a].x || -0.01 > J[a].y || 0.01 < J[a].y) vectorScale(J[a], 0.9), c.add(J[a]);
                Ng(a, c)
            } else Vg(a,
                c);
            e = customRandom(4);
            b = I[H[a] + tg[e]];
            4 == X[D[b]] && D[b] != Zb && D[b] != Lc && (G[a] = D[b] << 2 | e)
        } else {
            if (1E3 > mf - qd) return 0;
            e = G[a] & 3;
            d = H[a] + tg[e];
            b = I[d];
            if (b <= l) G[a] = G[a] & 16777212 | e + 1 & 3, Bd(d & 511, d >> 9, kc, G[a]), L(a, G[a] >> 2, 0, s[G[a] >> 2]);
            else {
                if (b >= p) return D[b] == G[a] >> 2 && (G[a] = G[a] & 16777212 | e - 1 & 3), L(b, kc, G[a], s[kc]), rd(a), 1;
                G[a] = G[a] & 16777212 | e + 1 & 3
            }
        }
    } else if (D[a] == lc) {
        if (0 != Jd[a] && Vg(a, c), e = customRandom(20), b = I[H[a] + Bg[e]], b >= p)
            if (D[b] == Sb) L(b, r, 0, s[r]);
            else {
                if (D[b] == q || D[b] == nc || D[b] == vc) return rd(a), 1;
                D[b] == Tb ? L(b, r, 0, s[r]) : D[b] ==
                    Ub ? L(b, lc, 0, s[lc]) : D[b] == Yb ? L(b, r, 0, s[r]) : D[b] == tc && L(b, r, 0, s[r])
            }
    } else if (D[a] == mc) {
        if (0 == Jd[a]) {
            setToVector(c, P[R[H[a]]], Q[R[H[a]]]);
            d = customRandom2(-0.1);
            c.x += U[H[a]] * d;
            c.y += V[H[a]] * d;
            if (-0.01 > J[a].x || 0.01 < J[a].x || -0.01 > J[a].y || 0.01 < J[a].y) vectorScale(J[a], 0.9), c.add(J[a]);
            Ng(a, c)
        } else Vg(a, c);
        e = customRandom(4);
        b = I[H[a] + tg[e]];
        1 == X[D[b]] || 2 == X[D[b]] ? 0.3 >= U[H[a]] * ug[e] + V[H[a]] * vg[e] && Lg(a, b) : D[b] == mc && (J[a].x += customRandomBetween(-0.6, 0.6), J[a].y += customRandomBetween(-0.6, 0.6));
        if (0 == G[a]) {
            if (e = customRandom(20), b = I[H[a] + Bg[e]], 3 != X[D[b]]) return 0
        } else if (2 > G[a]) return G[a]++, 0;
        F = 8;
        t = ~~C[a].x;
        u = ~~C[a].y;
        e = max(t - F, 8);
        d = max(u - F, 8);
        m = min(t + F, 503);
        n = min(u + F, 287);
        for (g = d; g <= n; g++)
            for (f = e; f <= m; f++) F * F < (f - t) * (f - t) + (g - u) * (g - u) || (d = (g + u >> 1 << 9) + (f + t >> 1), 1 <= x[R[d]] || (b = I[(g << 9) + f], D[b] == mc && (G[b] = 1), b <= l && customRandomBoolean(0.02) && Bd(f, g, r, 0)));
        L(a, r, 0, s[r])
    }
    return 0
}


function Zg(a, c) {
    var b, d, e, f, g, m, n, t, u, F;
    if (D[a] == nc)
        if (0 == G[a]) {
            I[H[a]] = Jb;
            setToVector(c, P[R[H[a]]], Q[R[H[a]]]);
            f = (C[a].y + V[H[a]] << 9) + floor(C[a].x + U[H[a]]);
            D[I[f]] >= Ob ? (f = (C[a].y + U[H[a]] << 9) + floor(C[a].x - V[H[a]]), I[f] <= l && (e = customRandomBetween(0.1, 0.2), J[a].x -= V[H[a]] * e, J[a].y += U[H[a]] * e), f = (C[a].y - U[H[a]] << 9) + floor(C[a].x + V[H[a]]), I[f] <= l && (e = customRandomBetween(0.1, 0.2), J[a].x += V[H[a]] * e, J[a].y -= U[H[a]] * e), customRandomBoolean(0.01) && (C[a].x = ~~C[a].x + 0.5, C[a].y = ~~C[a].y + 0.5)) : (e = customRandom2(1.5), c.x += U[H[a]] * e, c.y += V[H[a]] * e);
            if (-0.01 > J[a].x || 0.01 < J[a].x || -0.01 > J[a].y || 0.01 <
                J[a].y) vectorScale(J[a], 0.9), c.add(J[a]);
            E[a] = s[nc];
            if (10 < fastLength(c) && 3 <= jg - sd) {
                for (d = e = 0; 60 > d; d++) b = I[H[a] + Cg[d]], D[b] == nc && 0 == G[b] && e++;
                if (2 <= e) {
                    e = a;
                    for (d = 0; 60 > d && !(b = I[H[a] + Cg[d]], D[b] == nc && 0 == G[b] && (Gd(0, 0, e, b, 0), e = b, 1 >= jg - sd)); d++);
                    Gd(0, 0, e, a, 0)
                }
            }
            0 == V[H[a]] ? Ng(a, c) : Rg(a, c);
            e = customRandom(8);
            b = I[H[a] + wg[e]];
            if (1 == X[D[b]] && D[b] != fc || D[b] == ec || D[b] == jc || D[b] == vc) customRandomBoolean(0.2) && 0.3 >= U[H[a]] * xg[e] + V[H[a]] * yg[e] && Lg(a, b);
            else if (D[b] == Wb) customRandomBoolean(0.5) && L(a, Wb, 0, s[Wb]);
            else if (D[b] == bc) return L(b, hc, 0, s[D[b]]), rd(a), 1
        } else setToVector(c, P[R[H[a]]],
            Q[R[H[a]]]), vectorScale(J[a], 0.9), c.add(J[a]), Ng(a, c), E[a] == s[nc] && (E[a] = lg[customRandom(6)]), e = customRandom(8), b = I[H[a] + wg[e]], D[b] == nc && 0 == G[b] ? customRandomBoolean(0.2) && 0.3 >= U[H[a]] * xg[e] + V[H[a]] * yg[e] && Lg(a, b) : Kb <= b && D[b] != nc && (mg(0, a), G[a] = 0), 2 == G[a] && (mg(0, a), G[a] = 0);
    else if (D[a] == oc)
        if (e = G[a] >> 12, n = G[a] >> 10 & 3, b = G[a] & 1023, 0 == b && (b = R[H[a]] % 1E3), b = 73 * b % 955 + 44, 0 == n ? (n = b % 3, 0 == n ? (g = -1, n = d = 1) : 1 == n ? (d = g = 1, n = 3) : (g = 0, d = 1, n = 0)) : 1 == n ? 0 == (b & 1) ? (g = -1, n = d = 1) : (g = 0, d = 1, n = 0) : 0 == (b & 1) ? (d = g = 1, n = 3) : (g = 0, d = 1, n = 0), 1 == e ? (m = g, g = -d, d = m) : 2 == e ? (g = -g, d = -d) : 3 == e &&
            (m = g, g = d, d = -m), n = e << 12 | n << 10 | b, f = (C[a].y + d << 9) + floor(C[a].x + g), b = I[f], b <= l) I[H[a]] = Jb, C[a].x += g, C[a].y += d, G[a] = n, H[a] = f, I[H[a]] = a;
        else if (D[b] == oc) {
        if (G[b] != n) return rd(a), 1
    } else {
        if (D[b] == pc) return L(b, pc, e + 1, s[oc]), rd(a), 1;
        if (D[b] == zc) return L(b, zc, e + 1, s[oc]), rd(a), 1;
        if (D[b] == Jc) return 0 == G[b] && (G[b] = 1), rd(a), 1;
        if (D[b] == Cc) Lg(a, b);
        else {
            if (p <= b) {
                var M = 4;
                t = ~~C[a].x;
                u = ~~C[a].y;
                e = max(t - M, 8);
                f = max(u - M, 8);
                m = min(t + M, 503);
                n = min(u + M, 287);
                var $ = t + customRandomBetween(-0.5, 0.5),
                    Ca = u + customRandomBetween(-0.5, 0.5);
                for (d = f; d <= n; d++)
                    for (g = e; g <= m; g++) M *
                        M < (g - t) * (g - t) + (d - u) * (d - u) || (b = I[(d << 9) + g], b >= p && D[b] != oc && (D[b] == Wb ? L(b, Xb, 0, s[Xb]) : D[b] == ac && 256 > G[b] ? G[b] += 512 : D[b] == bc && (G[b] = 1), J[b].x -= 2 * (g - $), J[b].y -= 2 * (d - Ca)))
            }
            rd(a);
            return 1
        }
    } else if (D[a] == pc)
        if (0 != Jd[a] && Vg(a, c), 0 == G[a]) e = customRandom(20), b = I[H[a] + Bg[e]], D[b] == q ? customRandomBoolean(0.02) && L(a, Sb, 0, s[Sb]) : D[b] == gc && customRandomBoolean(0.02) && L(a, gc, 0, s[gc]);
        else {
            e = customRandom(4);
            b = I[H[a] + tg[e]];
            D[b] == Wb ? L(b, q, 0, s[q]) : D[b] == ac && 256 > G[b] && (G[b] += 256);
            e = G[a] - 1;
            for (d = 0; 4 > d; d++)
                if (2 != d)
                    if (b = I[H[a] + tg[e + d & 3]], D[b] == pc) {
                        0 == G[b] ? (Lg(a, b), G[a] = (e + d &
                            3) + 1) : L(a, pc, 0, s[pc]);
                        break
                    } else if (D[b] == zc) {
                L(b, zc, (e + d & 3) + 1, s[oc]);
                L(a, pc, 0, s[pc]);
                break
            } else D[b] == wc && 0 == G[b] ? L(b, wc, 2, s[oc]) : D[b] == Jc && 0 == G[b] && (G[b] = 1);
            4 == d && (I[H[a] + tg[e]] <= l && Bd(~~C[a].x + ug[e], ~~C[a].y + vg[e], oc, e << 12), L(a, pc, 0, s[pc]))
        } if (D[a] == qc) {
        0 == Jd[a] ? (setToVector(c, P[R[H[a]]], Q[R[H[a]]]), J[a].x += 0.05 * U[H[a]], J[a].y += 0.05 * V[H[a]], (-0.01 > J[a].x || 0.01 < J[a].x || -0.01 > J[a].y || 0.01 < J[a].y) && vectorScale(J[a], 0.95), c.add(J[a]), Ng(a, c)) : Vg(a, c);
        if (0 != G[a]) {
            if (customRandomBoolean(0.95)) return 0;
            if (G[a] == Wb) L(a, Xb, 0, s[Xb]);
            else if (G[a] ==
                Ub) L(a, Sb, 0, s[Sb]);
            else if (G[a] == fc) L(a, dc, 0, s[dc]);
            else if (G[a] == tc) L(a, Sb, 0, s[Sb]);
            else if (G[a] == jc) L(a, r, 1, s[r]);
            else if (G[a] == lc) L(a, r, 1, s[r]);
            else if (G[a] == nc) L(a, hc, 10, s[hc]);
            else if (G[a] == pc) L(a, pc, 0, s[pc]);
            else if (G[a] == wc) L(a, fc, 0, s[fc]);
            else if (G[a] == Dc) L(a, Ac, 0, s[Ac]);
            else if (G[a] == Kc) L(a, Ac, 1, s[Ac]);
            else return rd(a), 1;
            return 0
        }
        e = customRandom(8);
        b = I[H[a] + wg[e]];
        if (b < p || D[b] == qc || D[b] == Zb) return 0;
        F = D[b];
        M = 8;
        t = ~~C[a].x;
        u = ~~C[a].y;
        e = max(t - M, 8);
        f = max(u - M, 8);
        m = min(t + M, 503);
        n = min(u + M, 287);
        $ = t + customRandomBetween(-0.5, 0.5);
        Ca = u + customRandomBetween(-0.5, 0.5);
        setToVector(c, 0, 0);
        for (d = f; d <= n; d++)
            for (g = e; g <= m; g++) M * M < (g - t) * (g - t) + (d - u) * (d - u) || (b = I[(d << 9) + g], p <= b && D[b] != qc && (c.x += $ - g, c.y += Ca - d));
        normalize(c);
        for (d = f; d <= n; d++)
            for (g = e; g <= m; g++) M * M < (g - t) * (g - t) + (d - u) * (d - u) || (f = (d + u >> 1 << 9) + (g + t >> 1), 1 <= x[R[f]] || (b = I[(d << 9) + g], p <= b && D[b] != Zb && (J[b].x += c.x + ($ - g), J[b].y += c.y + (Ca - d), D[b] == qc && 0 != G[b] || L(b, qc, F, s[qc]))))
    } else if (D[a] == rc) {
        e = G[a] & 15;
        g = G[a] >> 4 & 15;
        n = G[a] >> 8 & 255;
        g++;
        if (1 == g) return G[a] = n << 8 | g << 4 | e, 0;
        if (12 < g) return n == wc ? L(a, wc, 0, s[wc]) : n == Jc ? L(a, Jc, 0, E[a]) :
            rd(a), 1;
        if (8 < g) return G[a] = n << 8 | g << 4 | e, 0;
        if (0 == e)
            if (M = I[H[a] + Fg[0]], D[M] == rc && (M = 0), b = I[H[a] + Fg[1]], D[b] == rc && (b = 0), d = I[H[a] + Fg[2]], D[d] == rc && (d = 0), f = I[H[a] + Fg[3]], D[f] == rc && (f = 0), m = I[H[a] + Fg[4]], D[m] == rc && (m = 0), t = I[H[a] + Fg[5]], D[t] == rc && (t = 0), u = I[H[a] + Fg[6]], D[u] == rc && (u = 0), F = I[H[a] + Fg[7]], D[F] == rc && (F = 0), 1 <= f && 1 <= m && 1 <= t) e = 1;
            else if (1 <= t && 1 <= u && 1 <= F) e = 3;
        else if (1 <= F && 1 <= M && 1 <= b) e = 5;
        else if (1 <= b && 1 <= d && 1 <= f) e = 7;
        else if (1 <= t) e = 2;
        else if (1 <= F) e = 4;
        else if (1 <= b) e = 6;
        else if (1 <= f) e = 8;
        else return G[a] =
            160 | e, 0;
        e -= 1;
        b = I[H[a] + Fg[e]];
        if (p <= b)
            if (D[b] == rc)
                for (d = 2; 4 >= d; d++) {
                    if (b = I[H[a] + Fg[e] * d], D[b] != rc) {
                        if (b <= l) {
                            if (1E3 > mf - qd) break;
                            f = Bd(~~C[a].x + Dg[e] * d, ~~C[a].y + Eg[e] * d, rc, e + 1);
                            0 <= f && (E[f] = E[a])
                        }
                        break
                    }
                } else if (D[b] == pc || D[b] == zc) {
                    b = I[H[a] + Fg[e + 1 & 7]];
                    D[b] != pc && D[b] != zc && (b = 0);
                    d = I[H[a] + Fg[e + 2 & 7]];
                    D[d] != pc && D[d] != zc && (d = 0);
                    f = I[H[a] + Fg[e + 3 & 7]];
                    D[f] != pc && D[f] != zc && (f = 0);
                    m = I[H[a] + Fg[e + 4 & 7]];
                    D[m] != pc && D[m] != zc && (m = 0);
                    t = I[H[a] + Fg[e + 5 & 7]];
                    D[t] != pc && D[t] != zc && (t = 0);
                    u = I[H[a] + Fg[e + 6 & 7]];
                    D[u] != pc && D[u] != zc && (u = 0);
                    F = I[H[a] + Fg[e + 7 & 7]];
                    D[F] != pc && D[F] != zc && (F = 0);
                    M = I[H[a] + Fg[e] + Fg[e + 1 & 7]];
                    D[M] != pc && D[M] != zc && (M = 0);
                    $ = I[H[a] + Fg[e] + Fg[e + 2 & 7]];
                    D[$] != pc && D[$] != zc && ($ = 0);
                    Ca = I[H[a] + Fg[e] + Fg[e + 3 & 7]];
                    D[Ca] != pc && D[Ca] != zc && (Ca = 0);
                    var Pb = I[H[a] + Fg[e] + Fg[e + 5 & 7]];
                    D[Pb] != pc && D[Pb] != zc && (Pb = 0);
                    var $b = I[H[a] + Fg[e] + Fg[e + 6 & 7]];
                    D[$b] != pc && D[$b] != zc && ($b = 0);
                    var ub = I[H[a] + Fg[e] + Fg[e + 7 & 7]];
                    D[ub] != pc && D[ub] != zc && (ub = 0);
                    if (0 == (e & 1)) 1 <= t && 1 <= u && 1 > b && 1 > d ? e = e + 1 & 7 : 1 <= d && 1 <= f && 1 > F && 1 > u ? e = e - 1 & 7 : 1 <= b && 1 <= u && 1 > d && 1 > f && 1 > t ? e = e + 3 & 7 : 1 <= M && 1 <= $b &&
                        1 > $ && 1 > Ca && 1 > Pb ? e = e + 3 & 7 : 1 <= d && 1 <= F && 1 > f && 1 > t && 1 > u ? e = e - 3 & 7 : 1 <= $ && 1 <= ub && 1 > Ca && 1 > Pb && 1 > $b ? e = e - 3 & 7 : 1 <= u && 1 > b && 1 > d && 1 > t ? e = e + 2 & 7 : 1 <= d && 1 > f && 1 > t && 1 > u && (e = e - 2 & 7);
                    else {
                        var Df = I[H[a] + Fg[e] + Fg[e + 2 & 7] + Fg[e + 3 & 7]];
                        D[Df] != pc && D[Df] != zc && (Df = 0);
                        var Ef = I[H[a] + Fg[e] + Fg[e + 6 & 7] + Fg[e + 5 & 7]];
                        D[Ef] != pc && D[Ef] != zc && (Ef = 0);
                        1 <= F && 1 <= t && 1 > b && 1 > m ? e = e + 1 & 7 : 1 <= b && 1 <= f && 1 > m && 1 > F ? e = e - 1 & 7 : 1 <= b && 1 <= u && 1 <= F && 1 > d && 1 > t ? e = e + 3 & 7 : 1 <= M && 1 <= $b && 1 > $ && 1 > Ca && 1 > Pb ? e = e + 3 & 7 : 1 <= $ && 1 <= Pb && 1 > Ca && 1 > Df ? e = e + 3 & 7 : 1 <= b && 1 <= d && 1 <= F && 1 > f && 1 > u ? e = e - 3 & 7 : 1 <= $ &&
                            1 <= ub && 1 > Ca && 1 > Pb && 1 > $b ? e = e - 3 & 7 : 1 <= Ca && 1 <= $b && 1 > Pb && 1 > Ef ? e = e - 3 & 7 : 1 <= F && 1 > b ? e = e + 2 & 7 : 1 <= b && 1 > F && (e = e - 2 & 7)
                    }
                } else D[b] == Sb || D[b] == Tb || D[b] == Ub || D[b] == Yb || D[b] == kc || D[b] == tc ? L(b, r, 0, s[r]) : D[b] == q || D[b] == bc || D[b] == nc || D[b] == sc || D[b] == vc || D[b] == Cc ? L(b, rc, e + 1, s[rc]) : D[b] == wc ? L(b, rc, wc << 8 | e + 1, s[rc]) : D[b] == Jc && L(b, rc, Jc << 8 | e + 1, E[b]);
        else b <= l && !(1E3 > mf - qd) && (f = Bd(~~C[a].x + Dg[e], ~~C[a].y + Eg[e], rc, e + 1), 0 <= f && (E[f] = E[a]));
        G[a] = n << 8 | g << 4 | e + 1
    } else if (D[a] == sc) {
        if (100 <= G[a]) return rd(a), 1;
        if (0 == Jd[a]) {
            I[H[a]] = Jb;
            setToVector(c, P[R[H[a]]], Q[R[H[a]]]);
            f = (C[a].y + V[H[a]] << 9) + floor(C[a].x + U[H[a]]);
            D[I[f]] >= Ob ? (f = (C[a].y + U[H[a]] << 9) + floor(C[a].x - V[H[a]]), I[f] <= l && (e = customRandom2(0.2), J[a].x -= V[H[a]] * e, J[a].y += U[H[a]] * e), f = (C[a].y - U[H[a]] << 9) + floor(C[a].x + V[H[a]]), I[f] <= l && (e = customRandom2(0.2), J[a].x += V[H[a]] * e, J[a].y -= U[H[a]] * e), customRandomBoolean(0.01) && (C[a].x = ~~C[a].x + 0.5, C[a].y = ~~C[a].y + 0.5)) : (e = customRandom2(1.5), c.x += U[H[a]] * e, c.y += V[H[a]] * e);
            if (-0.01 > J[a].x || 0.01 < J[a].x || -0.01 > J[a].y || 0.01 < J[a].y) vectorScale(J[a], 0.9), c.add(J[a]);
            0 == V[H[a]] ? Ng(a, c) : Rg(a, c)
        } else Vg(a, c);
        e = customRandom(8);
        b = I[H[a] +
            wg[e]];
        0 != qg[D[b]] && customRandomBoolean(0.2) && (G[a] = minInsideRange(G[a] + qg[D[b]], 0, 100), L(b, sc, 100, s[D[b]]))
    } else if (D[a] == tc)
        if (0 == Jd[a]) {
            if (-0.01 > J[a].x || 0.01 < J[a].x || -0.01 > J[a].y || 0.01 < J[a].y) vectorScale(J[a], 0.3), c.set(J[a]), Ng(a, c);
            if (1E3 > mf - qd) return 0;
            if (0 == G[a] && (e = customRandom(8), b = I[H[a] + wg[e]], b <= l))
                for (d = 0; 8 > d; d++)
                    if (b = I[H[a] + wg[e] + wg[d]], p <= b && D[b] != tc && D[b] != kc) {
                        customRandomBoolean(0.5) && Bd(~~C[a].x + zg[e], ~~C[a].y + Ag[e], tc, 0);
                        break
                    } 1 >= G[a] && ($ = ~~C[a].x + 0.5 + U[H[a]], Ca = ~~C[a].y + 0.5 + V[H[a]], I[(Ca << 9) + floor($)] <= l && I[(Ca + V[H[a]] << 9) + floor($ + U[H[a]])] <= l && I[(Ca +
                U[H[a]] << 9) + floor($ - V[H[a]])] <= l && I[(Ca - U[H[a]] << 9) + floor($ + V[H[a]])] <= l && customRandomBoolean(0.2) && Bd(~~$, ~~Ca, tc, 1));
            1 == G[a] && customRandomBoolean(0.04) && (G[a] = 2)
        } else Vg(a, c);
    return 0
}


function $g(a, c) {
    var b, d, e, f;
    if (D[a] == uc) {
        if (0 == Jd[a]) {
            setToVector(c, P[R[H[a]]], Q[R[H[a]]]);
            b = customRandom2(0.5);
            c.x += U[H[a]] * b;
            c.y += V[H[a]] * b;
            if (-0.01 > J[a].x || 0.01 < J[a].x || -0.01 > J[a].y || 0.01 < J[a].y) vectorScale(J[a], 0.7), c.add(J[a]);
            Ng(a, c)
        } else Vg(a, c);
        e = customRandom(8);
        b = I[H[a] + wg[e]];
        if (D[b] == q) return L(b, vc, 0, s[vc]), rd(a), 1;
        if (D[b] == gc && customRandomBoolean(0.2)) return rd(a), 1
    } else if (D[a] == vc) {
        if (0 == Jd[a]) {
            I[H[a]] = Jb;
            setToVector(c, P[R[H[a]]], Q[R[H[a]]]);
            f = (C[a].y + V[H[a]] << 9) + floor(C[a].x + U[H[a]]);
            D[I[f]] >= Ob ? (f = (C[a].y + U[H[a]] << 9) + floor(C[a].x - V[H[a]]), I[f] <= l && (b = customRandomBetween(0.1,
                0.2), J[a].x -= V[H[a]] * b, J[a].y += U[H[a]] * b), f = (C[a].y - U[H[a]] << 9) + floor(C[a].x + V[H[a]]), I[f] <= l && (b = customRandomBetween(0.1, 0.2), J[a].x += V[H[a]] * b, J[a].y -= U[H[a]] * b), customRandomBoolean(0.01) && (C[a].x = ~~C[a].x + 0.5, C[a].y = ~~C[a].y + 0.5)) : (b = customRandom2(1.5), c.x += U[H[a]] * b, c.y += V[H[a]] * b);
            if (-0.01 > J[a].x || 0.01 < J[a].x || -0.01 > J[a].y || 0.01 < J[a].y) vectorScale(J[a], 0.9), c.add(J[a]);
            0 == V[H[a]] ? Ng(a, c) : Rg(a, c)
        } else Vg(a, c);
        e = customRandom(20);
        b = I[H[a] + Bg[e]];
        D[b] != Tb && D[b] != Ub && D[b] != pc || L(b, Sb, 0, s[Sb]);
        e = customRandom(8);
        b = I[H[a] + wg[e]];
        1 == X[D[b]] && D[b] != fc || D[b] == ec || D[b] == jc ? customRandomBoolean(0.2) &&
            0.3 >= U[H[a]] * xg[e] + V[H[a]] * yg[e] && Lg(a, b) : D[b] == tc && L(b, Sb, 0, s[Sb])
    } else if (D[a] == wc)
        if (0 == G[a]) 1 < fastLength(J[a]) ? G[a] = 1 : setToVector(J[a], 0, 0);
        else if (1 == G[a]) {
        c.set(J[a]);
        var g = 0.5 * normalize(c);
        for (d = 1; 6 > d; d++)
            if (b = I[(C[a].y + 0.5 + c.y * d << 9) + floor(C[a].x + 0.5 + c.x * d)], D[b] == wc) G[b] = 1, J[b].x = 0.98 * J[a].x, J[b].y = 0.98 * J[a].y;
            else break;
        for (d = 1; 8 > d; d += 2)
            if (b = I[H[a] + wg[d]], D[b] == wc && 1 != G[b]) {
                G[b] = 1;
                var m = customRandom(8);
                J[b].x = xg[m] * g + 0.1 * J[a].x;
                J[b].y = yg[m] * g + 0.1 * J[a].y
            } 1 > g ? L(a, fc, 0, s[fc]) : L(a, dc, 0, s[dc])
    } else {
        if (2 <= G[a]) {
            if (2 == G[a])
                for (d = 1; 8 >
                    d; d += 2) b = I[H[a] + wg[d]], D[b] == wc && 0 == G[b] && L(b, wc, 2, s[oc]);
            G[a]++;
            22 < G[a] && L(a, wc, 0, s[wc])
        }
    } else if (D[a] == xc) {
        if (1 == G[a]) return customRandomBoolean(0.02) && (G[a] = 0, vectorScale(J[a], -1)), 0;
        0 == Jd[a] ? (setToVector(c, P[R[H[a]]], Q[R[H[a]]]), c.add(J[a]), Ng(a, c)) : Vg(a, c);
        normalize(J[a]);
        b = I[(~~C[a].y + 0.5 + J[a].y << 9) + floor(~~C[a].x + 0.5 + J[a].x)];
        l < b && (customRandomBoolean(0.5) ? setToVector(J[a], J[a].y, -J[a].x) : setToVector(J[a], -J[a].y, J[a].x));
        e = customRandom(8);
        b = I[H[a] + wg[e]];
        if (p <= b)
            if (2 == X[D[b]]) 0.3 >= U[H[a]] * xg[e] + V[H[a]] * yg[e] && Lg(a, b);
            else {
                if (D[b] == Tb || D[b] == kc || D[b] == yc) return L(b, xc, 0, s[xc]), J[b].set(J[a]),
                    rd(a), 1;
                D[b] == Ub ? G[a] = 1 : 3 == X[D[b]] && L(a, r, 0, s[r])
            } setToVector(c, 0, 0);
        var n = m = 0,
            t = 0,
            u = 0;
        b = minInsideRange(floor(C[a].x + 4 * J[a].x), 8, 503);
        d = minInsideRange(floor(C[a].y + 4 * J[a].y), 8, 287);
        f = (d << 9) + b;
        for (d = 0; 101 > d; d++) e = f + Gg[d], b = I[e], b <= l || (D[b] == xc ? (c.x += J[b].x, c.y += J[b].y, m++) : D[b] != Ub && D[b] != Tb && D[b] != kc && D[b] != yc && (n += e & 511, t += e >> 9, u++));
        0 < m && vectorScale(c, 1 / m);
        J[a].x = 0.5 * (J[a].x + c.x);
        J[a].y = 0.5 * (J[a].y + c.y);
        0 < u && (n = n / u - C[a].x, t = t / u - C[a].y, b = J[a].y * n - J[a].x * t, 0 > b ? setToVector(c, J[a].y, -J[a].x) : setToVector(c, -J[a].y, J[a].x), J[a].x = 0.9 * J[a].x + 0.1 * c.x, J[a].y = 0.9 * J[a].y + 0.1 *
            c.y);
        J[a].x += customRandomBetween(-0.1, 0.1);
        J[a].y += customRandomBetween(-0.1, 0.1)
    } else if (D[a] == yc)
        if (m = G[a] >> 8, g = G[a] & 255, 0 == m) {
            if (0 == Jd[a]) {
                setToVector(c, P[R[H[a]]], Q[R[H[a]]]);
                b = customRandom2(0.5);
                c.x += U[H[a]] * b;
                c.y += V[H[a]] * b;
                if (-0.01 > J[a].x || 0.01 < J[a].x || -0.01 > J[a].y || 0.01 < J[a].y) vectorScale(J[a], 0.9), c.add(J[a]);
                Ng(a, c)
            } else Vg(a, c);
            e = customRandom(8);
            b = I[H[a] + wg[e]];
            2 == X[D[b]] ? (0 == g && (g = D[b], E[a] = 0 | ~s[g]), G[a] = 256 | g) : 3 == X[D[b]] && L(a, r, 0, s[r])
        } else {
            normalize(J[a]);
            b = I[(C[a].y + J[a].y << 9) + floor(C[a].x + J[a].x)];
            2 != X[D[b]] && (customRandomBoolean(0.5) ? setToVector(J[a], J[a].y, -J[a].x) : setToVector(J[a], -J[a].y, J[a].x));
            vectorScale(J[a], 0.8);
            I[H[a]] = Jb;
            c.x = C[a].x + J[a].x;
            c.y = C[a].y;
            b = I[(c.y << 9) + ~~c.x];
            b <= l ? C[a].x = c.x : 2 == X[D[b]] && (Lg(a, b), C[a].set(c), D[b] != g && L(b, g, 0, s[g]));
            c.x = C[a].x;
            c.y = C[a].y + J[a].y;
            b = I[(c.y << 9) + ~~c.x];
            b <= l ? C[a].y = c.y : 2 == X[D[b]] && (Lg(a, b), C[a].set(c), D[b] != g && L(b, g, 0, s[g]));
            H[a] = (C[a].y << 9) + ~~C[a].x;
            I[H[a]] = a;
            setToVector(c, 0, 0);
            u = t = n = m = 0;
            b = minInsideRange(floor(C[a].x + 0.5 + 4 * J[a].x), 8, 503);
            d = minInsideRange(floor(C[a].y + 0.5 + 4 * J[a].y), 8, 287);
            f = (d << 9) + b;
            for (d = 0; 101 > d; d++)
                if (e = f + Gg[d], b = I[e], 2 != X[D[b]] || D[b] != g) D[b] == yc && G[a] == G[b] ? (c.x += J[b].x, c.y +=
                    J[b].y, m++) : (n += e & 511, t += e >> 9, u++);
            0 < m && vectorScale(c, 1 / m);
            J[a].x = 0.5 * (J[a].x + c.x);
            J[a].y = 0.5 * (J[a].y + c.y);
            0 < u && (n = n / u - C[a].x, t = t / u - C[a].y, b = J[a].y * n - J[a].x * t, 0 > b ? setToVector(c, J[a].y, -J[a].x) : setToVector(c, -J[a].y, J[a].x), J[a].x = 0.8 * J[a].x + 0.2 * c.x, J[a].y = 0.8 * J[a].y + 0.2 * c.y);
            J[a].x += customRandomBetween(-0.1, 0.1);
            J[a].y += customRandomBetween(-0.1, 0.1);
            e = customRandom(8);
            b = I[H[a] + wg[e]];
            b <= l ? G[a] = 0 | g : 3 == X[D[b]] && L(a, r, 0, s[r])
        }
    else if (D[a] == zc)
        if (0 == G[a]) {
            if (0 == Jd[a]) {
                I[H[a]] = Jb;
                setToVector(c, P[R[H[a]]], Q[R[H[a]]]);
                f = (C[a].y + V[H[a]] << 9) + floor(C[a].x + U[H[a]]);
                D[I[f]] >= Ob ? (f = (C[a].y + U[H[a]] <<
                    9) + floor(C[a].x - V[H[a]]), I[f] <= l && (b = customRandomBetween(0.1, 0.2), J[a].x -= V[H[a]] * b, J[a].y += U[H[a]] * b), f = (C[a].y - U[H[a]] << 9) + floor(C[a].x + V[H[a]]), I[f] <= l && (b = customRandomBetween(0.1, 0.2), J[a].x += V[H[a]] * b, J[a].y -= U[H[a]] * b), customRandomBoolean(0.01) && (C[a].x = ~~C[a].x + 0.5, C[a].y = ~~C[a].y + 0.5)) : (b = customRandom2(1.5), c.x += U[H[a]] * b, c.y += V[H[a]] * b);
                if (-0.01 > J[a].x || 0.01 < J[a].x || -0.01 > J[a].y || 0.01 < J[a].y) vectorScale(J[a], 0.9), c.add(J[a]);
                0 == V[H[a]] ? Ng(a, c) : Rg(a, c)
            } else Vg(a, c);
            e = customRandom(8);
            b = I[H[a] + wg[e]];
            (1 == X[D[b]] && D[b] != zc || 2 == X[D[b]]) && -0.3 <= U[H[a]] * xg[e] + V[H[a]] * yg[e] && Lg(a, b)
        } else {
            e =
                customRandom(4);
            b = I[H[a] + tg[e]];
            D[b] == Wb ? L(b, q, 0, s[q]) : D[b] == ac && 256 > G[b] && (G[b] += 256);
            m = G[a] - 1;
            for (d = 0; 4 > d; d++)
                if (2 != d)
                    if (b = I[H[a] + tg[m + d & 3]], D[b] == zc) {
                        0 == G[b] ? (Lg(a, b), G[a] = (m + d & 3) + 1) : L(a, zc, 0, s[zc]);
                        break
                    } else if (D[b] == pc) {
                L(b, pc, (m + d & 3) + 1, s[oc]);
                L(a, zc, 0, s[zc]);
                break
            } else D[b] == wc && 0 == G[b] ? L(b, wc, 2, s[oc]) : D[b] == Jc && 0 == G[b] && (G[b] = 1);
            4 == d && (I[H[a] + tg[m]] <= l && Bd(~~C[a].x + ug[m], ~~C[a].y + vg[m], oc, m << 12), L(a, zc, 0, s[zc]))
        }
    else if (D[a] == Ac) {
        if (0 == Jd[a]) {
            if (customRandomBoolean(0.15)) return rd(a), 1;
            J[a].x += 0.1 * P[R[H[a]]];
            J[a].y +=
                0.1 * Q[R[H[a]]];
            J[a].x += 0.02 * U[H[a]];
            J[a].y += 0.02 * V[H[a]];
            if (Kb <= I[H[a] + 1] || Kb <= I[H[a] + 2]) J[a].x -= customRandomBetween(0.3, 0.6);
            if (Kb <= I[H[a] - 1] || Kb <= I[H[a] - 2]) J[a].x += customRandomBetween(0.3, 0.6);
            if (Kb <= I[H[a] + screenWidth] || Kb <= I[H[a] + (screenWidth << 2)]) J[a].y -= customRandomBetween(0.3, 0.6);
            if (Kb <= I[H[a] - screenWidth] || Kb <= I[H[a] - (screenWidth << 2)]) J[a].y += customRandomBetween(0.3, 0.6);
            vectorScale(J[a], 0.98);
            c.set(J[a]);
            Ng(a, c)
        } else Vg(a, c);
        e = customRandom(20);
        b = I[H[a] + Bg[e]];
        if (D[b] == Sb) L(b, r, 0, s[r]);
        else if (D[b] == q || D[b] == vc || D[b] == nc) return rd(a), 1
    } else if (D[a] == Bc)
        if (0 != Jd[a] && Vg(a, c), 256 > G[a])
            if (e = customRandom(8), b = I[H[a] + wg[e]], 3 ==
                X[D[b]] && D[b] != Ac) G[a] += 256;
            else if (D[b] == q || D[b] == vc) L(a, Vb, 0, s[Vb]);
    else {
        if (D[b] == bc || D[b] == jc || D[b] == nc) {
            G[a] = D[b];
            D[b] == bc && (E[a] = 6697762);
            D[b] == jc && (E[a] = 4478242);
            D[b] == nc && (E[a] = 6706500);
            for (d = 0; 8 > d; d++) g = I[H[a] + wg[d]], D[g] == Bc && 0 == G[g] && (G[g] = D[b], D[b] == bc && (E[g] = 5583650), D[b] == jc && (E[g] = 4473890), D[b] == nc && (E[g] = 5588019));
            L(b, hc, 0, s[D[b]])
        }
    } else {
        if (G[a] += 256, 768 <= G[a]) {
            b = G[a] & 255;
            g = Ac;
            m = 0;
            b == bc ? (g = r, m = 0) : b == jc ? (g = jc, m = 0) : b == nc && (g = hc, m = 10);
            I[H[a] - 1] <= l && Bd(~~C[a].x - 1, ~~C[a].y, g, m);
            I[H[a] + 1] <=
                l && Bd(~~C[a].x + 1, ~~C[a].y, g, m);
            I[H[a] - screenWidth] <= l && Bd(~~C[a].x, ~~C[a].y - 1, g, m);
            I[H[a] + screenWidth] <= l && Bd(~~C[a].x, ~~C[a].y + 1, g, m);
            for (d = 0; 8 > d; d++) b = I[H[a] + wg[d]], p <= b && (D[b] == Bc && 256 > G[b] ? G[b] += 256 : D[b] == ac && 256 > G[b] ? G[b] += 256 : D[b] == bc ? G[b] = 1 : D[b] == cc ? G[b] = 1 : D[b] == jc ? G[b] = 1 : D[b] == mc && (G[b] = 1));
            L(a, g, m, s[g])
        }
    } else if (D[a] == Cc) {
        if (0 == Jd[a]) {
            setToVector(c, P[R[H[a]]], Q[R[H[a]]]);
            b = customRandom2(-0.15);
            c.x += U[H[a]] * b;
            c.y += V[H[a]] * b;
            if (-0.01 > J[a].x || 0.01 < J[a].x || -0.01 > J[a].y || 0.01 < J[a].y) vectorScale(J[a], 0.9), c.add(J[a]);
            Ng(a, c)
        } else Vg(a, c);
        e = customRandom(4);
        b = I[H[a] + tg[e]];
        1 == X[D[b]] || 2 == X[D[b]] ? 0.3 >= U[H[a]] * ug[e] + V[H[a]] * vg[e] && Lg(a, b) : D[b] == Cc ? (J[a].x += customRandomBetween(-0.3, 0.3), J[a].y += customRandomBetween(-0.3, 0.3)) : D[b] == Ub ? L(a, q, 0, s[q]) : D[b] == Wb ? L(a, Xb, 0, s[Xb]) : D[b] == cc ? L(a, q, 0, s[q]) : D[b] == lc ? L(a, q, 0, s[q]) : D[b] == pc ? L(a, oc, (e + 2 & 3) << 12, s[oc]) : D[b] == tc ? L(a, q, 0, s[q]) : D[b] == Bc ? L(a, q, 0, s[q]) : b == Kb && L(a, q, 0, s[q])
    } else if (D[a] == Dc)
        if (0 != Jd[a] && Vg(a, c), E[a] == s[Dc]) {
            if (e = customRandom(4), b = I[H[a] + tg[e]], 2 == X[D[b]] || D[b] == gc || D[b] == mc || D[b] == zc || D[b] == Cc) L(a, Dc, e + 2 & 3, s[D[b]]), L(b, hc, 0, s[D[b]])
        } else {
            m =
                G[a] & 3;
            for (d = 0; 4 > d; d++)
                if (2 != d && (b = I[H[a] + tg[m + d & 3]], D[b] == Dc)) {
                    E[b] == s[Dc] ? (Lg(a, b), G[a] = m + d & 3) : E[a] = s[Dc];
                    break
                } if (4 == d) {
                if (I[H[a] + (tg[m] << 1)] <= l && !(1E3 > mf - qd))
                    for (d = 0; d < s.length; d++)
                        if (E[a] == s[d]) {
                            Bd(~~C[a].x + (ug[m] << 1), ~~C[a].y + (vg[m] << 1), d, 0);
                            break
                        } E[a] = s[Dc]
            }
        } return 0
}


function ah(a, c) {
    var b, d, e, f, g, m, n, t, u;
    if (D[a] == Jc)
        if (0 != Jd[a] && Vg(a, c), 0 == G[a]) {
            u = E[a] >> 16 & 255;
            n = E[a] >> 8 & 255;
            var F = E[a] & 255;
            e = 1;
            for (d = 0; 8 > d; d++) b = I[H[a] + wg[d]], D[b] != rc && D[b] != oc && p <= b && (u += E[b] >> 16 & 255, n += E[b] >> 8 & 255, F += E[b] & 255, e++);
            1 < e && (E[a] = floor(u / e) << 16 | floor(n / e) << 8 | floor(F / e))
        } else if (20 <= G[a]) u = floor(8 * (E[a] >> 16 & 255) / 9), n = floor(8 * (E[a] >> 8 & 255) / 9), F = floor(8 * (E[a] & 255) / 9), E[a] = u << 16 | n << 8 | F, G[a]++, 30 <= G[a] && (G[a] = 0);
    else {
        if (1 <= G[a]) {
            if (1 == G[a])
                for (d = 0; 8 > d; d++) b = I[H[a] + wg[d]], D[b] == Jc && 0 == G[b] && (G[b] = 1);
            u = E[a] >> 16 &
                255;
            n = E[a] >> 8 & 255;
            F = E[a] & 255;
            255 > u && 255 > n && 255 > F && (u = floor(9 * u / 8) + 1, 255 < u && (u = 255), n = floor(9 * n / 8) + 1, 255 < n && (n = 255), F = floor(9 * F / 8) + 1, 255 < F && (F = 255), E[a] = u << 16 | n << 8 | F);
            G[a]++
        }
    } else if (D[a] == Kc)
        if (0 == Jd[a] ? (setToVector(c, P[R[H[a]]], Q[R[H[a]]]), J[a].x += 0.05 * U[H[a]], J[a].y += 0.05 * V[H[a]], (-0.01 > J[a].x || 0.01 < J[a].x || -0.01 > J[a].y || 0.01 < J[a].y) && vectorScale(J[a], 0.95), c.add(J[a]), Ng(a, c)) : Vg(a, c), 0 == G[a]) e = customRandom(8), b = I[H[a] + wg[e]], 3 == X[D[b]] && (G[a] = 1);
        else {
            if (2 <= G[a]) {
                if (50 > ++G[a] || customRandomBoolean(0.95)) return 0;
                rd(a);
                return 1
            }
            if (1 == G[a]) {
                u = 3;
                e = ~~C[a].x;
                b = ~~C[a].y;
                d = max(e - u, 8);
                n = max(b - u, 8);
                f = min(e + u, 503);
                t = min(b + u, 287);
                u = e + customRandomBetween(-0.5, 0.5);
                F = b + customRandomBetween(-0.5, 0.5);
                setToVector(c, 0, 0);
                e = 0;
                for (m = n; m <= t; m++)
                    for (g = d; g <= f; g++) b = I[(m << 9) + g], Kb <= b && (c.x += u - g, c.y += F - m, p <= b && e++);
                normalize(c);
                vectorScale(c, floor(e / 2) + 4);
                e = -1;
                for (m = n; m <= t; m++)
                    for (g = d; g <= f; g++) b = I[(m << 9) + g], p <= b && D[b] != Zb && !(D[b] == Kc && 1 < G[b]) && (u = customRandomBetween(-1, 1), J[b].x += c.x + c.y * u, J[b].y += c.y - c.x * u, -1 == e ? L(b, Kc, 2, E[b]) : (u = E[e] >> 16 & 255, u += E[b] >> 16 & 255, u >>= 1, n = E[e] >> 8 & 255, n += E[b] >> 8 & 255, n >>= 1, F = E[e] & 255, F += E[b] & 255, F >>= 1, L(b, Kc, 2, u << 16 | n << 8 | F), e =
                        Gd(0, 0, e, b, 0), -1 != e && (kg[e] = 4)), e = b);
                G[a] = 2
            }
        }
    else if (D[a] == Lc) {
        0 != Jd[a] && Vg(a, c);
        2 <= G[a] && G[a] >> 10 != (cf & 1) && (G[a] &= 1);
        t = G[a] >> 2 & 255;
        G[a] &= 1;
        g = 8;
        for (d = 0; d < g; d++) 0 != (t & 1 << d) || (e = 0 == G[a] ? d : 2 - d & 7, b = I[H[a] + wg[e]], b < p || D[b] == Lc || D[b] == Zb || D[b] == rc || (f = 0 == G[a] ? e + 1 & 7 : e - 1 & 7, u = I[H[a] + wg[f]], 0 == (e & 1) && D[u] == Lc)) || (f = 0 == G[a] ? e - 1 & 7 : e + 1 & 7, u = I[H[a] + wg[f]], u <= l && (Mg(b, C[b].x + zg[f] - zg[e], C[b].y + Ag[f] - Ag[e]), u = I[H[a] + wg[f] + wg[f] - wg[e]], D[u] == Lc && (2 <= G[u] && G[u] >> 10 != (cf & 1) && (G[u] &= 1), G[u] = 0 == (e & 1) ? (cf & 1) << 10 | G[u] & 1020 |
            1 << (d + 1 & 7) + 2 | 2 | G[u] : (cf & 1) << 10 | G[u] & 1020 | 1 << (d + 2 & 7) + 2 | 2 | G[u]), 1 == (e & 1) && (f = 0 == G[a] ? e - 2 & 7 : e + 2 & 7, u = I[H[a] + wg[f]], D[u] == Lc && (2 <= G[u] && G[u] >> 10 != (cf & 1) && (G[u] &= 1), G[u] |= (cf & 1) << 10 | G[u] & 1020 | 1 << d + 2 | 2)), 0 == d && (g = 7)));
        E[a] = 0 == G[a] ? 6702131 : 3359829
    }
    return 0
}


// ================================================================
//                     StickMan related stuff
// ================================================================
var jd = 10,
    ld = 20,
    md = 30,
    nd = 40,
    counterStickman = 0,
    maxStickmanNumber = 50,
    hd = 11,
    stickManBodyPoints = Array(maxStickmanNumber * hd); // 550
for (da = 0; da < maxStickmanNumber * hd; da++) stickManBodyPoints[da] = new Vector;
var stickManOldBodyPoints = Array(maxStickmanNumber * hd); // 550
for (da = 0; da < maxStickmanNumber * hd; da++) stickManOldBodyPoints[da] = new Vector;
var ye = new Int32Array(maxStickmanNumber * hd),
    z = new Int32Array(maxStickmanNumber),
    ze = new Int32Array(maxStickmanNumber),
    kd = new Int32Array(maxStickmanNumber),
    dh = Array(maxStickmanNumber);
for (da = 0; da < maxStickmanNumber; da++) dh[da] = new Vector;
var Ae = new Int32Array(maxStickmanNumber),
    Be = new Uint8Array(maxStickmanNumber),
    eh = [0, 0],
    fh = [0, 0],
    gh = [0, 0],
    playerHealth = [0, 0],
    playerDamageState = [0, 0],
    jh = [0, 0, 0.5, 0.5, 0.5, 0.5, 0.8, 1, 0.5, 0.5, 0.5, 1, 0.5, 0.5, 0.5, 0.5, 0.8, 0.5, 0.5, 0.8, 0.5, 0.5, 1, 0.5, 0.8, 0.5, 0, 1, 1, 0, 0.5, 0.5, 0, 0.8, 0.5, 0.5, 0.8, 0.9, 0.1, 0.1, 1, 0.5, 0.5, 1, 0.5, 0, 0, 0, 0, 0, 0.5, 0.5, 0.2],
    kh = [0, 1, 0, 0, 0, 1, 1, 1, 1, 0, 1, 1, 1, 1, 0, 1, 1, 0, 1, 1, 1, 1, 0, 1, 1, 1, 0, 1, 1, 1, 0, 1, 1, 1, 0, 1, 1, 0, 1, 1, 1, 1, 0, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0];

function createFighterPlayerClone(_X, _Y, TYPE, d) {
    if (counterStickman != maxStickmanNumber) {
        var e, f;
        if (TYPE == Ec || TYPE == Fc) {
            for (e = f = 0; e < counterStickman; e++) {
                z[e] != jd && z[e] != ld || f++;
            }
            if (2 <= f || 0 != d && 0 == kh[d]) return;
            e = TYPE == Ec ? 0 : 1;
            playerHealth[e] = 48;
            playerDamageState[e] = 0
        }
        f = counterStickman * hd;
        for (e = 0; e < hd; e++, f++) TYPE == cloneId ? setToVector(stickManBodyPoints[f], _X, _Y) : 1 == e ? setToVector(stickManBodyPoints[f], _X, _Y) : setToVector(stickManBodyPoints[f], _X + customRandom2(4), _Y + customRandom2(4)), stickManOldBodyPoints[f].set(stickManBodyPoints[f]), ye[f] = 0;
        TYPE == Ec ? z[counterStickman] = jd : TYPE == Fc ? z[counterStickman] = ld : TYPE == fighterId ? z[counterStickman] = md : TYPE == cloneId && (z[counterStickman] = nd);
        ze[counterStickman] = 0;
        kd[counterStickman] = d;
        setToVector(dh[counterStickman], 0, 0);
        Ae[counterStickman] = 0;
        Be[counterStickman] = 0;
        counterStickman++
    }
}

function id(a) {
    if (0 != counterStickman) {
        counterStickman--;
        mg(1, a);
        for (var c = a * hd, b = counterStickman * hd, d = 0; d < hd; d++, c++, b++) stickManBodyPoints[c].set(stickManBodyPoints[b]), stickManOldBodyPoints[c].set(stickManOldBodyPoints[b]), ye[c] = ye[b];
        z[a] = z[counterStickman];
        ze[a] = ze[counterStickman];
        kd[a] = kd[counterStickman];
        dh[a].set(dh[counterStickman]);
        Ae[a] = Ae[counterStickman];
        Be[a] = Be[counterStickman];
        ng(1, counterStickman, a)
    }
}

function Ed(a) {
    var c, b;
    for (c = 0; c < counterStickman; c++) {
        b = c * hd;
        if (z[c] == jd || z[c] == ld) b = (stickManOldBodyPoints[b + 1].y << 9) + ~~stickManOldBodyPoints[b + 1].x;
        else if (z[c] == md || z[c] == md + 1) b = (stickManOldBodyPoints[b + 1].y << 9) + ~~stickManOldBodyPoints[b + 1].x;
        else continue;
        if (b == a) return c
    }
    return -1
}

function movePlayerJoints(a, c, b, d) {
    distanceX = stickManBodyPoints[a].x - stickManOldBodyPoints[a].x;
    distanceY = stickManBodyPoints[a].y - stickManOldBodyPoints[a].y;
    stickManOldBodyPoints[a].set(stickManBodyPoints[a]);
    if (null == c) {
        c = (stickManBodyPoints[a].y << 9) + ~~stickManBodyPoints[a].x;
        distanceX += U[c] * b;
        distanceY += V[c] * b;
    } else {
        distanceX += c.x * b;
        distanceY += c.y * b;
    }
    stickManBodyPoints[a].x += distanceX * d;
    stickManBodyPoints[a].y += distanceY * d
}

function constraintJoints(point1, point2, b, d, e) {
    var f = new Vector;
    vectorSub(f, stickManBodyPoints[point2], stickManBodyPoints[point1]);
    var g = normalize(f);
    if(0 != g) {
        b -= g;
        d *= b;
        e *= b;
        stickManBodyPoints[point1].x -= f.x * d;
        stickManBodyPoints[point1].y -= f.y * d;
        stickManBodyPoints[point2].x += f.x * e;
        stickManBodyPoints[point2].y += f.y * e
    } 
}

function nh(a, c, b, d, e) {
    var f = new Vector;
    vectorSub(f, stickManBodyPoints[a], stickManOldBodyPoints[a]);
    stickManBodyPoints[a].set(stickManOldBodyPoints[a]);
    if (0 != b) {
        var g = (stickManBodyPoints[a].y >> 2 << 7) + (stickManBodyPoints[a].x >> 2);
        f.x += P[g] * b;
        f.y += Q[g] * b
    }
    0 == e ? (b = vectorLength2(f) + 1, 8 <= b ? (vectorScale(f, 3.8 / b), b = 2) : 4 <= b ? (vectorScale(f, 0.5), b = 2) : b = 1) : (b = floor(vectorLength2(f) / 3) + 1, vectorScale(f, 1 / b));
    ye[a] = 0;
    if (1 == d) vectorScale(f, b), stickManBodyPoints[a].add(f), stickManBodyPoints[a].x = minInsideRange(stickManBodyPoints[a].x, 4, 507), stickManBodyPoints[a].y = minInsideRange(stickManBodyPoints[a].y, 4, 291);
    else {
        d = new Vector;
        e = new Vector;
        null == c ? (g = (stickManBodyPoints[a].y << 9) + ~~stickManBodyPoints[a].x, setToVector(e, U[g], V[g])) : e.set(c);
        c = e.x * f.x + e.y * f.y;
        vectorScale(e, c);
        d.set(f);
        d.sub(e);
        for (var m, n, g = 0; g < b; g++) {
            m = stickManBodyPoints[a].x + e.x;
            n = stickManBodyPoints[a].y + e.y;
            if (4 > m || 508 <= m || 4 >
                n || 292 <= n) {
                ye[a] = -5;
                return
            }
            f = (n << 9) + ~~m;
            I[f] <= l ? setToVector(stickManBodyPoints[a], m, n) : I[f] <= Kb ? (vectorScale(d, 0.5), ye[a] = I[f]) : (0 > c ? setToVector(stickManBodyPoints[a], m, n) : (vectorScale(d, jh[D[I[f]]]), 2 == X[D[I[f]]] ? setToVector(stickManBodyPoints[a], m, n) : D[I[f]] == Lc && (m = ~~m - ~~stickManBodyPoints[a].x, n = ~~n - ~~stickManBodyPoints[a].y, 0 == G[I[f]] ? (0 == m && 1 == n && (d.x -= 1), -1 == m && 0 == n && (d.y -= 1), 0 == m && -1 == n && (d.x += 1), 1 == m && 0 == n && (d.y += 1)) : (0 == m && 1 == n && (d.x += 1), -1 == m && 0 == n && (d.y += 1), 0 == m && -1 == n && (d.x -= 1), 1 == m && 0 == n && (d.y -= 1)))), ye[a] = D[I[f]])
        }
        for (g = 0; g < b; g++) {
            m = stickManBodyPoints[a].x + d.x;
            n = stickManBodyPoints[a].y;
            if (4 > m || 508 <= m || 4 > n || 292 <= n) {
                ye[a] = -5;
                break
            }
            f = (n << 9) + ~~m;
            I[f] <=
                l ? setToVector(stickManBodyPoints[a], m, n) : (2 == X[D[I[f]]] && setToVector(stickManBodyPoints[a], m, n), ye[a] = D[I[f]]);
            m = stickManBodyPoints[a].x;
            n = stickManBodyPoints[a].y + d.y;
            if (4 > m || 508 <= m || 4 > n || 292 <= n) {
                ye[a] = -5;
                break
            }
            f = (n << 9) + ~~m;
            I[f] <= l ? setToVector(stickManBodyPoints[a], m, n) : (2 == X[D[I[f]]] && setToVector(stickManBodyPoints[a], m, n), ye[a] = D[I[f]])
        }
    }
}

function oh(a, c) {
    for (var b = 0; a < c; a++) {
        if (-5 == ye[a]) return -5;
        ye[a] == r && -1 < b ? b = -1 : ye[a] == gc && -4 < b ? b = -4 : ye[a] == lc && -1 < b ? b = -1 : ye[a] == oc && -3 < b ? b = -3 : ye[a] == rc && -2 < b ? b = -2 : ye[a] == sc && -1 < b ? b = -1 : ye[a] == Ac && -1 < b ? b = -1 : 0 != ye[a] && 0 == b && (b = 1)
    }
    return b
}

function ph(a, c, b) {
    if (!ga && 0 == Xa) {
        var d = new Vector,
            e, f;
        if (0 == Ae[a]) {
            if (47 == ea && Ke || 47 == fa && Oe) {
                e = 400;
                for (var g = c; g < b; g++) d.x = ia - stickManOldBodyPoints[g].x, d.y = ja - stickManOldBodyPoints[g].y, f = fastLength(d), f < e && (e = f, Ae[a] = g - c + 1)
            }
        } else 47 == ea && We || 47 == fa && Xe ? (stickManBodyPoints[c + Ae[a] - 1].x += 0.1 * (ia - stickManBodyPoints[c + Ae[a] - 1].x), stickManBodyPoints[c + Ae[a] - 1].y += 0.1 * (ja - stickManBodyPoints[c + Ae[a] - 1].y)) : Ae[a] = 0
    }
}


function processStickman() {
    var a;
    for (a = 0; a < counterStickman; a++) {
        if( z[a] <= jd + 3 ) {
            // Move player 1
            processPlayerMove(a);
        } else if(z[a] <= ld + 3 ) {
            // Move player 2
            processPlayerMove(a);
        } else {
            // Move fighter (cpu)
            processFighterMove(a);
        } 
    }
}

function processPlayerMove(k) {
    var tintB;
    var b;
    var j;
    var i;
    var s;
    var v = new Vector;
    var w = new Vector;
    var character = new Vector;
    b = k * hd;
    if (z[k] == jd || z[k] == ld) {
        var g = z[k] == jd ? 0 : 1;
        var oldBanIsTemp = z[k] == jd ? Sd[37] : Sd[65] | Sd[97];
        var oldBanIsPerm = z[k] == jd ? Sd[39] : Sd[68] | Sd[100];
        var newBanIsRemoved = z[k] == jd ? Sd[38] : Sd[87] | Sd[119];
        var $ = z[k] == jd ? Sd[40] : Sd[83] | Sd[115];
        ze[k]++;
        j = (stickManOldBodyPoints[b + 4].y << 9) + ~~stickManOldBodyPoints[b + 4].x;
        i = (stickManOldBodyPoints[b + 5].y << 9) + ~~stickManOldBodyPoints[b + 5].x;
        s = I[(~~stickManOldBodyPoints[b + 4].y + 0.5 + V[j] << 9) + floor(~~stickManOldBodyPoints[b + 4].x + 0.5 + U[j])] > l ? 1 : 0;
        var Ca = I[(~~stickManOldBodyPoints[b + 5].y + 0.5 + V[i] << 9) + floor(~~stickManOldBodyPoints[b + 5].x + 0.5 + U[i])] > l ? 1 : 0;
        if (0 == s) {
            s = I[j] > l ? 1 : 0;
        }
        if (0 == Ca) {
            Ca = I[i] > l ? 1 : 0;
        }
        v.x = U[j] + U[i];
        v.y = V[j] + V[i];
        normalize2(v);
        w.set(v);
        character.set(v);
        rotatePointAroundCenter90Degrees(w);
        if ($ && kd[k] == xc) {
            tintB = 0;
            for (; 6 > tintB; tintB++) {
                movePlayerJoints(b + tintB, character, 0.01, 0.997);
            }
        } else {
            if (!($ && kd[k] == Wb)) {
                movePlayerJoints(b + 0, character, -0.2, 0.995);
                movePlayerJoints(b + 1, character, -0.1, 0.995);
                movePlayerJoints(b + 2, character, 0, 0.995);
                movePlayerJoints(b + 3, character, 0, 0.995);
                movePlayerJoints(b + 4, character, 0.3, 0.995);
                movePlayerJoints(b + 5, character, 0.3, 0.995);
            }
        }
        ph(k, b, b + 6);
        stickManBodyPoints[b].add(dh[k]);
        vectorScale(dh[k], 0.5);
        if (1 < eh[g]) {
            eh[g]--;
        } else {
            if (0 < eh[g] && (1 == s || 1 == Ca)) {
                eh[g]--;
            }
        }
        if (0 == eh[g]) {
            if (oldBanIsPerm) {
                eh[g] = 15;
                v.x = stickManBodyPoints[b + 5].x - stickManBodyPoints[b + 4].x;
                v.y = stickManBodyPoints[b + 5].y - stickManBodyPoints[b + 4].y;
                tintB = v.x * w.x + v.y * w.y;
                if (0 < tintB) {
                    stickManBodyPoints[b + 2].x += 3.2 * V[j] + 3 * -U[j] * 0.8;
                    stickManBodyPoints[b + 2].y += 3.2 * -U[j] + 3 * -V[j] * 0.8;
                } else {
                    stickManBodyPoints[b + 3].x += 3.2 * V[i] + 3 * -U[i] * 0.8;
                    stickManBodyPoints[b + 3].y += 3.2 * -U[i] + 3 * -V[i] * 0.8;
                }
                gh[g] = 1;
            } else {
                if (oldBanIsTemp) {
                    eh[g] = 15;
                    v.x = stickManBodyPoints[b + 5].x - stickManBodyPoints[b + 4].x;
                    v.y = stickManBodyPoints[b + 5].y - stickManBodyPoints[b + 4].y;
                    tintB = v.x * w.x + v.y * w.y;
                    if (0 > tintB) {
                        stickManBodyPoints[b + 2].x += 3.2 * -V[j] + 3 * -U[j] * 0.8;
                        stickManBodyPoints[b + 2].y += 3.2 * U[j] + 3 * -V[j] * 0.8;
                    } else {
                        stickManBodyPoints[b + 3].x += 3.2 * -V[i] + 3 * -U[i] * 0.8;
                        stickManBodyPoints[b + 3].y += 3.2 * U[i] + 3 * -V[i] * 0.8;
                    }
                    gh[g] = 0;
                }
            }
        } else {
            if (oldBanIsTemp) {
                v.x = stickManBodyPoints[b + 1].x - stickManOldBodyPoints[b + 1].x;
                v.y = stickManBodyPoints[b + 1].y - stickManOldBodyPoints[b + 1].y;
                tintB = v.x * w.x + v.y * w.y;
                if (0 < tintB) {
                    stickManBodyPoints[b + 1].x -= 0.2 * w.x;
                    stickManBodyPoints[b + 1].y -= 0.2 * w.y;
                }
                gh[g] = 0;
            } else {
                if (oldBanIsPerm) {
                    v.x = stickManBodyPoints[b + 1].x - stickManOldBodyPoints[b + 1].x;
                    v.y = stickManBodyPoints[b + 1].y - stickManOldBodyPoints[b + 1].y;
                    tintB = v.x * w.x + v.y * w.y;
                    if (0 > tintB) {
                        stickManBodyPoints[b + 1].x += 0.2 * w.x;
                        stickManBodyPoints[b + 1].y += 0.2 * w.y;
                    }
                    gh[g] = 1;
                }
            }
        }
        if (1 < fh[g]) {
            fh[g]--;
        }
        if (0 < fh[g] && (1 == s || 1 == Ca)) {
            fh[g]--;
        }
        if (0 == fh[g] && newBanIsRemoved) {
            fh[g] = 50;
            stickManBodyPoints[b + 4].x -= 6 * character.x;
            stickManBodyPoints[b + 4].y -= 6 * character.y;
            stickManBodyPoints[b + 5].x -= 6 * character.x;
            stickManBodyPoints[b + 5].y -= 6 * character.y;
        }
        if (!($ && kd[k] == Wb)) {
            j = 0.5;
            constraintJoints(b + 0, b + 1, 4, j, j);
            constraintJoints(b + 1, b + 2, 4, j, j);
            constraintJoints(b + 1, b + 3, 4, j, j);
            constraintJoints(b + 2, b + 4, 5, j, j);
            constraintJoints(b + 3, b + 5, 5, j, j);
            constraintJoints(b + 2, b + 3, 5, 0.1, 0.1);
        }
        j = 0.1;
        tintB = 0;
        for (; 4 > tintB; tintB++) {
            nh(b + tintB, character, j, 1, 0 < Ae[k] ? 1 : 0);
        }
        tintB = 4;
        for (; 6 > tintB; tintB++) {
            nh(b + tintB, character, j, 0, 0 < Ae[k] ? 1 : 0);
        }
        if (!$) {
            s = -1;
            for (; 2 > s; s++) {
                i = -1;
                for (; 2 > i; i++) {
                    j = I[(stickManOldBodyPoints[b + 0].y + s << 9) + (~~stickManOldBodyPoints[b + 0].x + i)];
                    if (1 == kh[D[j]]) {
                        kd[k] = D[j];
                    }
                }
            }
        }
        if (!(newBanIsRemoved && (oldBanIsTemp || oldBanIsPerm) || !$ || 0 == kd[k])) {
            i = ~~stickManBodyPoints[b + 0].x;
            s = ~~stickManBodyPoints[b + 0].y;
            if (kd[k] == jc) {
                i = i + (w.x * (0 == gh[g] ? 0 : -0) + 8 * character.x);
                s = s + (w.y * (0 == gh[g] ? 0 : -0) + 8 * character.y);
                stickManBodyPoints[b + 0].x += w.x * (0 == gh[g] ? -0.5 : 0.5) + -1 * character.x;
                stickManBodyPoints[b + 0].y += w.y * (0 == gh[g] ? -0.5 : 0.5) + -1 * character.y;
            }
            i = minInsideRange(i, 8, 503);
            s = minInsideRange(s, 8, 287);
            if (kd[k] == Nb) {
                j = (s >> 2 << 7) + (i >> 2);
                if (0 == x[j]) {
                    P[j] += w.x * (0 == gh[g] ? -1 : 1);
                    Q[j] += w.y * (0 == gh[g] ? -1 : 1);
                }
            } else {
                if (kd[k] != Wb && kd[k] != xc && I[s * screenWidth + i] == Jb) {
                    j = Bd(i, s, kd[k], 0);
                    if (0 <= j) {
                        if (kd[k] == r) {
                            J[j].x = w.x * (0 == gh[g] ? -7 : 7) + 2.4 * character.x;
                            J[j].y = w.y * (0 == gh[g] ? -7 : 7) + 2.4 * character.y;
                            G[j] = 2;
                        } else {
                            if (kd[k] == Yb) {
                                J[j].x = w.x * (0 == gh[g] ? -20 : 20) + 20 * character.x;
                                J[j].y = w.y * (0 == gh[g] ? -20 : 20) + 20 * character.y;
                            } else {
                                if (kd[k] == jc) {
                                    J[j].x = w.x * (0 == gh[g] ? 20 : -20);
                                    J[j].y = w.y * (0 == gh[g] ? 20 : -20);
                                } else {
                                    if (kd[k] == oc) {
                                        G[j] = 0 == gh[g] ? (floor(4 * -getAngle(character) / TWOPI - 0.5) & 3) << 12 : (floor(4 * -getAngle(character) / TWOPI - 2.5) & 3) << 12;
                                    } else {
                                        if (kd[k] == rc) {
                                            G[j] = 0 == gh[g] ? (floor(8 * getAngle(character) / TWOPI + 6.5) & 7) + 1 : (floor(8 * getAngle(character) / TWOPI + 2.5) & 7) + 1;
                                        } else {
                                            J[j].x = w.x * (0 == gh[g] ? -20 : 20) + customRandomBetween(-1, 1);
                                            J[j].y = w.y * (0 == gh[g] ? -20 : 20) + customRandomBetween(-1, 1);
                                        }
                                    }
                                }
                            }
                        }
                    }
                }
            }
        }
        if (1 == xa) {
            w = 4;
            for (; 5 >= w; w++) {
                if (s = i = 0, 8 > stickManBodyPoints[b + w].x ? (i = 502, s = ~~stickManOldBodyPoints[b + w].y) : 504 <= stickManBodyPoints[b + w].x ? (i = 10, s = ~~stickManOldBodyPoints[b + w].y) : 8 > stickManBodyPoints[b + w].y ? (i = ~~stickManOldBodyPoints[b + w].x, s = 286) : 288 <= stickManBodyPoints[b + w].y && (i = ~~stickManOldBodyPoints[b + w].x, s = 10), 0 != i + s) {
                    if (j = (s << 9) + i, I[j] <= l || 2 == X[D[I[j]]]) {
                        mg(1, k);
                        vectorSub(v, stickManBodyPoints[b + w], stickManOldBodyPoints[b + w]);
                        normalize(v);
                        tintB = 0;
                        for (; 5 >= tintB; tintB++) {
                            stickManBodyPoints[b + tintB].x = i + v.x + customRandomBetween(-0.1, 0.1);
                            stickManBodyPoints[b + tintB].y = s + v.y + customRandomBetween(-0.1, 0.1);
                            setToVector(stickManOldBodyPoints[b + tintB], i, s);
                            ye[b + tintB] = 0;
                        }
                        break;
                    } else {
                        stickManBodyPoints[b + w].set(stickManOldBodyPoints[b + w]);
                        ye[b + w] = Ob;
                        if (0 < fh[g]) {
                            fh[g]--;
                        }
                        if (0 < eh[g]) {
                            eh[g]--;
                        }
                    }
                }
            }
        } else {
            if (-5 == oh(b, b + 6)) {
                z[k] = 0 == g ? jd + 2 : ld + 2;
            }
        }
        if (0 < playerDamageState[g]) {
            playerDamageState[g]--;
        }
        b = oh(b, b + 6);
        if (0 > b) {
            playerHealth[g] += b;
            playerDamageState[g] = 25;
        }
        if (0 >= playerHealth[g]) {
            z[k] = 0 == g ? jd + 2 : ld + 2;
        }
    } else {
        if (z[k] == jd + 2 || z[k] == ld + 2) {
            stickManBodyPoints[b + 10].set(stickManBodyPoints[b + 5]);
            stickManOldBodyPoints[b + 10].set(stickManOldBodyPoints[b + 5]);
            stickManBodyPoints[b + 9].set(stickManBodyPoints[b + 4]);
            stickManOldBodyPoints[b + 9].set(stickManOldBodyPoints[b + 4]);
            stickManBodyPoints[b + 8].set(stickManBodyPoints[b + 3]);
            stickManOldBodyPoints[b + 8].set(stickManOldBodyPoints[b + 3]);
            stickManBodyPoints[b + 7].set(stickManBodyPoints[b + 3]);
            stickManOldBodyPoints[b + 7].set(stickManOldBodyPoints[b + 3]);
            stickManBodyPoints[b + 6].set(stickManBodyPoints[b + 2]);
            stickManOldBodyPoints[b + 6].set(stickManOldBodyPoints[b + 2]);
            stickManBodyPoints[b + 5].set(stickManBodyPoints[b + 2]);
            stickManOldBodyPoints[b + 5].set(stickManOldBodyPoints[b + 2]);
            stickManBodyPoints[b + 4].set(stickManBodyPoints[b + 1]);
            stickManOldBodyPoints[b + 4].set(stickManOldBodyPoints[b + 1]);
            stickManBodyPoints[b + 3].set(stickManBodyPoints[b + 1]);
            stickManOldBodyPoints[b + 3].set(stickManOldBodyPoints[b + 1]);
            stickManBodyPoints[b + 2].set(stickManBodyPoints[b + 1]);
            stickManOldBodyPoints[b + 2].set(stickManOldBodyPoints[b + 1]);
            stickManBodyPoints[b + 1].set(stickManBodyPoints[b + 0]);
            stickManOldBodyPoints[b + 1].set(stickManOldBodyPoints[b + 0]);
            stickManBodyPoints[b + 0].set(stickManBodyPoints[b + 0]);
            stickManOldBodyPoints[b + 0].set(stickManOldBodyPoints[b + 0]);
            dh[k].y -= 1;
            ze[k] = 0;
            z[k]++;
        } else {
            if (z[k] == jd + 3 || z[k] == ld + 3) {
                ze[k]++;
                tintB = 0;
                for (; 11 > tintB; tintB++) {
                    movePlayerJoints(b + tintB, null, 0.1, 0.999);
                    stickManBodyPoints[b + tintB].add(dh[k]);
                }
                vectorScale(dh[k], 0.5);
                j = 0.5;
                g = (150 - ze[k]) / 150;
                constraintJoints(b + 1, b + 2, 4 * g, j, j);
                constraintJoints(b + 3, b + 5, 4 * g, j, j);
                constraintJoints(b + 4, b + 7, 4 * g, j, j);
                constraintJoints(b + 6, b + 9, 5 * g, j, j);
                constraintJoints(b + 8, b + 10, 5 * g, j, j);
                j = 0.1;
                tintB = 0;
                for (; 11 > tintB; tintB++) {
                    nh(b + tintB, null, j, 0, 0);
                }
                if (150 < ze[k]) {
                    id(k--);
                }
            }
        }
    }
};

function processFighterMove(k) {
    var i;
    var index;
    var j;
    var c;
    var b;
    var a = new Vector;
    b = new Vector;
    c = new Vector;
    index = k * hd;
    if (z[k] == md || z[k] == md + 1) {
        ze[k]++;
        j = (stickManOldBodyPoints[index + 4].y << 9) + ~~stickManOldBodyPoints[index + 4].x;
        i = (stickManOldBodyPoints[index + 5].y << 9) + ~~stickManOldBodyPoints[index + 5].x;
        a.x = U[j] + U[i];
        a.y = V[j] + V[i];
        normalize2(a);
        b.set(a);
        c.set(a);
        rotatePointAroundCenter90Degrees(b);
        if (z[k] == md) {
            movePlayerJoints(index + 0, c, -0.2, 0.995);
            movePlayerJoints(index + 1, c, -0.1, 0.995);
            movePlayerJoints(index + 2, c, 0, 0.995);
            movePlayerJoints(index + 3, c, 0, 0.995);
            movePlayerJoints(index + 4, c, 0.3, 0.995);
            movePlayerJoints(index + 5, c, 0.3, 0.995);
        } else {
            movePlayerJoints(index + 0, c, 0.1, 0.995);
            movePlayerJoints(index + 1, c, 0.1, 0.995);
            movePlayerJoints(index + 2, c, 0.1, 0.995);
            movePlayerJoints(index + 3, c, 0.1, 0.995);
            movePlayerJoints(index + 4, c, 0.1, 0.995);
            movePlayerJoints(index + 5, c, 0.1, 0.995);
        }
        ph(k, index, index + 6);
        stickManBodyPoints[index].add(dh[k]);
        vectorScale(dh[k], 0.5);
        if (z[k] == md) {
            a.x = stickManBodyPoints[index + 5].x - stickManBodyPoints[index + 4].x;
            a.y = stickManBodyPoints[index + 5].y - stickManBodyPoints[index + 4].y;
            b = a.x * b.x + a.y * b.y;
            if (0 != ye[index + 4] && 0 != ye[index + 5]) {
                var r = customRandom(100);
                if (5 > r) {
                    if (0 < b) {
                        stickManBodyPoints[index + 4].x += 4 * V[j] + 4 * -U[j];
                        stickManBodyPoints[index + 4].y += 4 * -U[j] + 4 * -V[j];
                    } else {
                        stickManBodyPoints[index + 5].x += 4 * V[i] + 4 * -U[i];
                        stickManBodyPoints[index + 5].y += 4 * -U[i] + 4 * -V[i];
                    }
                } else {
                    if (10 > r) {
                        if (0 > b) {
                            stickManBodyPoints[index + 4].x += 4 * -V[j] + 4 * -U[j];
                            stickManBodyPoints[index + 4].y += 4 * U[j] + 4 * -V[j];
                        } else {
                            stickManBodyPoints[index + 5].x += 4 * -V[i] + 4 * -U[i];
                            stickManBodyPoints[index + 5].y += 4 * U[i] + 4 * -V[i];
                        }
                    }
                }
            } else {
                if (0 != ye[index + 4]) {
                    if (customRandomBoolean(0.02)) {
                        b = customRandomBetween(-4, 4);
                        stickManBodyPoints[index + 4].x += V[j] * b + 4 * -U[j];
                        stickManBodyPoints[index + 4].y += -U[j] * b + 4 * -V[j];
                    }
                } else {
                    if (0 != ye[index + 5] && customRandomBoolean(0.02)) {
                        b = customRandomBetween(-4, 4);
                        stickManBodyPoints[index + 5].x += V[i] * b + 4 * -U[i];
                        stickManBodyPoints[index + 5].y += -U[i] * b + 4 * -V[i];
                    }
                }
            }
            i = 0;
            for (; i < counterStickman; i++) {
                if (!(k == i || z[i] != md && z[i] != md + 1 && z[i] != jd && z[i] != ld)) {
                    j = i * hd;
                    b = abs(stickManBodyPoints[index + 4].x - stickManBodyPoints[j].x);
                    r = abs(stickManBodyPoints[index + 4].y - stickManBodyPoints[j].y);
                    if (4 >= b && 4 >= r) {
                        dh[i].x += 1 * (stickManBodyPoints[index + 4].x - stickManOldBodyPoints[index + 4].x);
                        dh[i].y += 2 * (stickManBodyPoints[index + 4].y - stickManOldBodyPoints[index + 4].y);
                        if (z[i] == md) {
                            z[i] = md + 1;
                        }
                        ze[i] = 0;
                        if (z[i] == jd) {
                            playerHealth[0] -= 8;
                            playerDamageState[0] = 25;
                        }
                        if (z[i] == ld) {
                            playerHealth[1] -= 8;
                            playerDamageState[1] = 25;
                        }
                    }
                    b = abs(stickManBodyPoints[index + 5].x - stickManBodyPoints[j].x);
                    r = abs(stickManBodyPoints[index + 5].y - stickManBodyPoints[j].y);
                    if (4 >= b && 4 >= r) {
                        dh[i].x += 1 * (stickManBodyPoints[index + 5].x - stickManOldBodyPoints[index + 5].x);
                        dh[i].y += 2 * (stickManBodyPoints[index + 5].y - stickManOldBodyPoints[index + 5].y);
                        if (z[i] == md) {
                            z[i] = md + 1;
                        }
                        ze[i] = 0;
                        if (z[i] == jd) {
                            playerHealth[0] -= 8;
                            playerDamageState[0] = 25;
                        }
                        if (z[i] == ld) {
                            playerHealth[1] -= 8;
                            playerDamageState[1] = 25;
                        }
                    }
                }
            }
        } else {
            if (10 < ze[k] && (0 != ye[index + 4] || 0 != ye[index + 5]) && customRandomBoolean(0.1)) {
                z[k] = md;
                ze[k] = 0;
            }
        }
        b = 0.5;
        constraintJoints(index + 0, index + 1, 4, b, b);
        constraintJoints(index + 1, index + 2, 4, b, b);
        constraintJoints(index + 1, index + 3, 4, b, b);
        constraintJoints(index + 2, index + 4, 5, b, b);
        constraintJoints(index + 3, index + 5, 5, b, b);
        constraintJoints(index + 2, index + 3, 5, 0.1, 0.1);
        j = 0.1;
        i = 0;
        for (; 4 > i; i++) {
            nh(index + i, c, j, 1, 0 < Ae[k] ? 1 : 0);
        }
        i = 4;
        for (; 6 > i; i++) {
            nh(index + i, c, j, 0, 0 < Ae[k] ? 1 : 0);
        }
        if (z[k] == md) {
            if (0 != oh(index, index + 6)) {
                ze[k] = 0;
            } else {
                if (50 < ze[k]) {
                    z[k] = md + 1;
                }
            }
        }
        if (1 == xa) {
            i = 4;
            for (; 5 >= i; i++) {
                if (b = c = 0, 8 > stickManBodyPoints[index + i].x ? (c = 502, b = ~~stickManOldBodyPoints[index + i].y) : 504 <= stickManBodyPoints[index + i].x ? (c = 10, b = ~~stickManOldBodyPoints[index + i].y) : 8 > stickManBodyPoints[index + i].y ? (c = ~~stickManOldBodyPoints[index + i].x, b = 286) : 288 <= stickManBodyPoints[index + i].y && (c = ~~stickManOldBodyPoints[index + i].x, b = 10), 0 != c + b) {
                    if (j = (b << 9) + c, I[j] <= l || 2 == X[D[I[j]]]) {
                        mg(1, k);
                        vectorSub(a, stickManBodyPoints[index + i], stickManOldBodyPoints[index + i]);
                        normalize(a);
                        i = 0;
                        for (; 5 >= i; i++) {
                            stickManBodyPoints[index + i].x = c + a.x + customRandomBetween(-0.1, 0.1);
                            stickManBodyPoints[index + i].y = b + a.y + customRandomBetween(-0.1, 0.1);
                            setToVector(stickManOldBodyPoints[index + i], c, b);
                            ye[index + i] = 0;
                        }
                        break;
                    } else {
                        stickManBodyPoints[index + i].set(stickManOldBodyPoints[index + i]);
                        ye[index + i] = Ob;
                    }
                }
            }
        } else {
            if (-5 == oh(index, index + 6)) {
                z[k] = md + 2;
            }
        }
        if (0 > oh(index, index + 6)) {
            z[k] = md + 2;
        }
    } else {
        if (z[k] == md + 2) {
            stickManBodyPoints[index + 10].set(stickManBodyPoints[index + 5]);
            stickManOldBodyPoints[index + 10].set(stickManOldBodyPoints[index + 5]);
            stickManBodyPoints[index + 9].set(stickManBodyPoints[index + 4]);
            stickManOldBodyPoints[index + 9].set(stickManOldBodyPoints[index + 4]);
            stickManBodyPoints[index + 8].set(stickManBodyPoints[index + 3]);
            stickManOldBodyPoints[index + 8].set(stickManOldBodyPoints[index + 3]);
            stickManBodyPoints[index + 7].set(stickManBodyPoints[index + 3]);
            stickManOldBodyPoints[index + 7].set(stickManOldBodyPoints[index + 3]);
            stickManBodyPoints[index + 6].set(stickManBodyPoints[index + 2]);
            stickManOldBodyPoints[index + 6].set(stickManOldBodyPoints[index + 2]);
            stickManBodyPoints[index + 5].set(stickManBodyPoints[index + 2]);
            stickManOldBodyPoints[index + 5].set(stickManOldBodyPoints[index + 2]);
            stickManBodyPoints[index + 4].set(stickManBodyPoints[index + 1]);
            stickManOldBodyPoints[index + 4].set(stickManOldBodyPoints[index + 1]);
            stickManBodyPoints[index + 3].set(stickManBodyPoints[index + 1]);
            stickManOldBodyPoints[index + 3].set(stickManOldBodyPoints[index + 1]);
            stickManBodyPoints[index + 2].set(stickManBodyPoints[index + 1]);
            stickManOldBodyPoints[index + 2].set(stickManOldBodyPoints[index + 1]);
            stickManBodyPoints[index + 1].set(stickManBodyPoints[index + 0]);
            stickManOldBodyPoints[index + 1].set(stickManOldBodyPoints[index + 0]);
            stickManBodyPoints[index + 0].set(stickManBodyPoints[index + 0]);
            stickManOldBodyPoints[index + 0].set(stickManOldBodyPoints[index + 0]);
            dh[k].y -= 1;
            ze[k] = 0;
            z[k] = md + 3;
        } else {
            if (z[k] == md + 3) {
                ze[k]++;
                i = 0;
                for (; 11 > i; i++) {
                    movePlayerJoints(index + i, null, 0.1, 0.999);
                    stickManBodyPoints[index + i].add(dh[k]);
                }
                vectorScale(dh[k], 0.5);
                b = 0.5;
                a = (150 - ze[k]) / 150;
                constraintJoints(index + 1, index + 2, 4 * a, b, b);
                constraintJoints(index + 3, index + 5, 4 * a, b, b);
                constraintJoints(index + 4, index + 7, 4 * a, b, b);
                constraintJoints(index + 6, index + 9, 5 * a, b, b);
                constraintJoints(index + 8, index + 10, 5 * a, b, b);
                j = 0.1;
                i = 0;
                for (; 11 > i; i++) {
                    nh(index + i, null, j, 0, 0);
                }
                if (150 < ze[k]) {
                    id(k--);
                }
            } else {
                if (z[k] == nd) {
                    if (0 == ye[index]) {
                        i = 0;
                        for (; i < counterStickman; i++) {
                            if (!(stickManBodyPoints[index].x + 8 < stickManBodyPoints[i * hd].x || stickManBodyPoints[i * hd].x < stickManBodyPoints[index].x - 4 || stickManBodyPoints[index].y + 8 < stickManBodyPoints[i * hd].y || stickManBodyPoints[i * hd].y < stickManBodyPoints[index].y - 4)) {
                                if (z[i] == jd || z[i] == ld) {
                                    a = 0;
                                    for (; a < counterStickman; a++) {
                                        if (z[a] == nd && ye[a * hd] == jd) {
                                            ye[a * hd] = 0;
                                        }
                                    }
                                    ye[index] = jd;
                                    kd[k] = kd[i];
                                } else {
                                    if (z[i] == md) {
                                        ye[index] = z[i];
                                        kd[k] = kd[i];
                                    }
                                }
                            }
                        }
                        i = 0;
                        for (; i < od; i++) {
                            if (!(0 == A[i] || stickManBodyPoints[index].x + 8 < B[i].x || B[i].x < stickManBodyPoints[index].x - 4 || stickManBodyPoints[index].y + 8 < B[i].y || B[i].y < stickManBodyPoints[index].y - 4)) {
                                ye[index] = Lb;
                                kd[k] = A[i];
                            }
                        }
                    } else {
                        if (c = ~~stickManBodyPoints[index + 0].x, b = ~~stickManBodyPoints[index + 0].y, ye[index] == jd) {
                            if (customRandomBoolean(0.1)) {
                                j = Ec;
                                i = 0;
                                for (; i < counterStickman; i++) {
                                    if (z[i] == jd) {
                                        j = Fc;
                                    }
                                }
                                createFighterPlayerClone(c, b, j, kd[k]);
                            }
                        } else {
                            if (ye[index] == md) {
                                if (customRandomBoolean(0.01)) {
                                    createFighterPlayerClone(c, b, fighterId, 0);
                                }
                            } else {
                                if (ye[index] == Lb && customRandomBoolean(0.01)) {
                                    Ad(c + 2, b + 2, kd[k]);
                                }
                            }
                        }
                    }
                }
            }
        }
    }
};


function Uf() {
    var a, c, b, d, e, f = [-1023, -1022, -510, 2, 514, 1026, 1025, 1024, 1023, 1022, 510, -2, -514, -1026, -1025, -1024],
        g = [-1023, -510, 2, 514, 1025, 1024, 1023, 510, -2, -514, -1025, -1024],
        m = [-511, 1, 513, 512, 511, -1, -513, -512],
        n = [1, 512, -1, -512];
    e = [];
    var t = 16769198,
        u = 16777215,
        F = 52224,
        M = 10027008;
    14 == backgroundDrawType && (F = u = t = 0, M = 13421772);
    for (b = a = 0; a < counterStickman; a++, b += hd) {
        if (z[a] <= ld + 3) {
            if (z[a] != jd + 3 && z[a] != ld + 3) lf(stickManBodyPoints[b + 1].x, stickManBodyPoints[b + 1].y, stickManBodyPoints[b + 2].x, stickManBodyPoints[b + 2].y, u), lf(stickManBodyPoints[b + 1].x, stickManBodyPoints[b + 1].y, stickManBodyPoints[b + 3].x, stickManBodyPoints[b + 3].y, u), lf(stickManBodyPoints[b + 2].x, stickManBodyPoints[b + 2].y, stickManBodyPoints[b + 4].x, stickManBodyPoints[b + 4].y, u), lf(stickManBodyPoints[b +
                3].x, stickManBodyPoints[b + 3].y, stickManBodyPoints[b + 5].x, stickManBodyPoints[b + 5].y, u), e = z[a] <= jd + 3 ? f : g;
            else {
                lf(stickManBodyPoints[b + 3].x, stickManBodyPoints[b + 3].y, stickManBodyPoints[b + 5].x, stickManBodyPoints[b + 5].y, u);
                if (140 < ze[a]) continue;
                lf(stickManBodyPoints[b + 4].x, stickManBodyPoints[b + 4].y, stickManBodyPoints[b + 7].x, stickManBodyPoints[b + 7].y, u);
                if (135 < ze[a]) continue;
                lf(stickManBodyPoints[b + 6].x, stickManBodyPoints[b + 6].y, stickManBodyPoints[b + 9].x, stickManBodyPoints[b + 9].y, u);
                if (130 < ze[a]) continue;
                lf(stickManBodyPoints[b + 8].x, stickManBodyPoints[b + 8].y, stickManBodyPoints[b + 10].x, stickManBodyPoints[b + 10].y, u);
                if (125 < ze[a]) continue;
                e = z[a] <= jd + 3 ? m : n
            }
            d = 0 == s[kd[a]] ? t : s[kd[a]];
            14 == backgroundDrawType && (d = 0);
            var $ = 0,
                Ca = 0;
            z[a] == jd && ($ = playerHealth[0], Ca = playerDamageState[0]);
            z[a] == ld && ($ = playerHealth[1], Ca = playerDamageState[1]);
            var Pb = e.length;
            for (c = 0; c < Pb; c++) {
                var $b = (stickManBodyPoints[b].y << 9) + ~~stickManBodyPoints[b].x +
                    e[c];
                ve[$b] && (v[$b] = 0 < Ca ? Pb - floor($ * Pb / 48) <= c ? F : M : v[$b] == d ? 0 : d)
            }
            if (12 == backgroundDrawType)
                for (c = floor(minInsideRange(stickManBodyPoints[b + 0].x, 8, 503)), $ = floor(minInsideRange(stickManBodyPoints[b + 0].y, 8, 283)), e = $ - 4; e <= $ + 4; e += 4)
                    for (d = c - 4; d <= c + 4; d += 4) Eb[(e << 9) + d] = 536870911
        } else if (z[a] <= md + 2) lf(stickManBodyPoints[b + 0].x, stickManBodyPoints[b + 0].y, stickManBodyPoints[b + 1].x, stickManBodyPoints[b + 1].y, t), lf(stickManBodyPoints[b + 1].x, stickManBodyPoints[b + 1].y, stickManBodyPoints[b + 2].x, stickManBodyPoints[b + 2].y, u), lf(stickManBodyPoints[b + 1].x, stickManBodyPoints[b + 1].y, stickManBodyPoints[b + 3].x, stickManBodyPoints[b + 3].y, u), lf(stickManBodyPoints[b + 2].x, stickManBodyPoints[b + 2].y, stickManBodyPoints[b + 4].x, stickManBodyPoints[b + 4].y, u), lf(stickManBodyPoints[b + 3].x, stickManBodyPoints[b + 3].y, stickManBodyPoints[b + 5].x, stickManBodyPoints[b + 5].y, u), oe(stickManBodyPoints[b + 0].x - 1, stickManBodyPoints[b + 0].y - 1, 3, 3, t);
        else if (z[a] <= md + 3) {
            lf(stickManBodyPoints[b + 1].x, stickManBodyPoints[b + 1].y, stickManBodyPoints[b + 2].x, stickManBodyPoints[b + 2].y,
                u);
            if (145 < ze[a]) continue;
            lf(stickManBodyPoints[b + 3].x, stickManBodyPoints[b + 3].y, stickManBodyPoints[b + 5].x, stickManBodyPoints[b + 5].y, u);
            if (140 < ze[a]) continue;
            lf(stickManBodyPoints[b + 4].x, stickManBodyPoints[b + 4].y, stickManBodyPoints[b + 7].x, stickManBodyPoints[b + 7].y, u);
            if (135 < ze[a]) continue;
            lf(stickManBodyPoints[b + 6].x, stickManBodyPoints[b + 6].y, stickManBodyPoints[b + 9].x, stickManBodyPoints[b + 9].y, u);
            if (130 < ze[a]) continue;
            lf(stickManBodyPoints[b + 8].x, stickManBodyPoints[b + 8].y, stickManBodyPoints[b + 10].x, stickManBodyPoints[b + 10].y, u);
            if (125 < ze[a]) continue;
            oe(stickManBodyPoints[b + 0].x - 1, stickManBodyPoints[b + 0].y - 1, 2, 2, t)
        } else z[a] <= nd && (d = 9465872, 14 == backgroundDrawType && (d = 0), ye[b] == jd ? (lf(stickManBodyPoints[b].x, stickManBodyPoints[b].y, stickManBodyPoints[b].x, stickManBodyPoints[b].y + 3, d), lf(stickManBodyPoints[b].x, stickManBodyPoints[b].y, stickManBodyPoints[b].x + 2, stickManBodyPoints[b].y, d), lf(stickManBodyPoints[b].x, stickManBodyPoints[b].y + 2, stickManBodyPoints[b].x + 2, stickManBodyPoints[b].y + 2, d), lf(stickManBodyPoints[b].x + 3, stickManBodyPoints[b].y, stickManBodyPoints[b].x +
            3, stickManBodyPoints[b].y + 2, d)) : ye[b] == md ? (lf(stickManBodyPoints[b].x, stickManBodyPoints[b].y, stickManBodyPoints[b].x, stickManBodyPoints[b].y + 3, d), lf(stickManBodyPoints[b].x, stickManBodyPoints[b].y, stickManBodyPoints[b].x + 3, stickManBodyPoints[b].y, d), lf(stickManBodyPoints[b].x, stickManBodyPoints[b].y + 2, stickManBodyPoints[b].x + 2, stickManBodyPoints[b].y + 2, d)) : ye[b] == Lb ? (lf(stickManBodyPoints[b].x + 1, stickManBodyPoints[b].y, stickManBodyPoints[b].x + 2, stickManBodyPoints[b].y, d), lf(stickManBodyPoints[b].x, stickManBodyPoints[b].y + 1, stickManBodyPoints[b].x, stickManBodyPoints[b].y + 2, d), lf(stickManBodyPoints[b].x + 3, stickManBodyPoints[b].y + 1, stickManBodyPoints[b].x + 3, stickManBodyPoints[b].y + 2, d), lf(stickManBodyPoints[b].x + 1, stickManBodyPoints[b].y + 3, stickManBodyPoints[b].x + 2, stickManBodyPoints[b].y + 3, d)) : oe(stickManBodyPoints[b].x, stickManBodyPoints[b].y, 4, 4, d));
        if (z[a] <= md + 3 && 13 == backgroundDrawType)
            for (c = 0; 6 > c; c++) d = floor(minInsideRange(stickManBodyPoints[b + c].x, 8, 503)), e = floor(minInsideRange(stickManBodyPoints[b + c].y, 8, 287)), Eb[(e << 9) + d] = 3E3
    }
}
var od = 50,
    B = Array(od);
for (da = 0; da < od; da++) B[da] = new Vector;
var W = Array(od);
for (da = 0; da < od; da++) W[da] = new Vector;
var A = new Int32Array(od),
    S = new Int32Array(od),
    Ce = new Int32Array(od),
    De = new Uint8Array(od),
    sh;

function Ad(a, c, b) {
    for (var d = 0; d < od; d++)
        if (0 == A[d]) {
            setToVector(B[d], a + 0.5, c + 0.5);
            setToVector(W[d], 0, 0);
            A[d] = b;
            S[d] = 0;
            Ce[d] = 0;
            De[d] = 0;
            break
        }
}

function pd(a) {
    A[a] = 0;
    mg(2, a)
}

function Fd(a) {
    var c, b;
    for (c = 0; c < od; c++)
        if (0 != A[c] && (b = (B[c].y << 9) + ~~B[c].x, b == a)) return c;
    return -1
}
var Pf = [-screenWidth - 1, -screenWidth, -screenWidth + 1, -1, 0, 1, screenWidth - 1, screenWidth, screenWidth + 1, 2 * -screenWidth - 1, 2 * -screenWidth, 2 * -screenWidth + 1, 2 * screenWidth - 1, 2 * screenWidth, 2 * screenWidth + 1, -2 - screenWidth, -2, -2 + screenWidth, 2 - screenWidth, 2, 2 + screenWidth, 3 * -screenWidth - 1, 3 * -screenWidth, 3 * -screenWidth + 1, 3 * screenWidth - 1, 3 * screenWidth, 3 * screenWidth + 1, -3 - screenWidth, -3, -3 + screenWidth, 3 - screenWidth, 3, 3 + screenWidth, -2 - 2 * screenWidth, 2 - 2 * screenWidth, -2 + 2 * screenWidth, 2 + 2 * screenWidth],
    th = [-0.7, 0, 0.7, -1, 0, 1, -0.7, 0, 0.7, -0.44, 0, 0.44, -0.44, 0, 0.44, -0.89, -1, -0.89, 0.89, 1, 0.89, -0.31, 0, 0.31, -0.31, 0, 0.31, -0.94, -1, -0.94, 0.94, 1, 0.94, -0.7, 0.7, -0.7, 0.7],
    uh = [-0.7, -1, -0.7, 0, 0, 0, 0.7, 1, 0.7, -0.89, -1, -0.89, 0.89, 1, 0.89, -0.44, 0, 0.44, -0.44, 0, 0.44, -0.94, -1, -0.94, 0.94, 1, 0.94, -0.31, 0, 0.31, -0.31, 0, 0.31, -0.7, -0.7, 0.7, 0.7],
    vh = [-1,
        0, 1, -1, 0, 1, -1, 0, 1, -1, 0, 1, -1, 0, 1, -2, -2, -2, 2, 2, 2, -1, 0, 1, -1, 0, 1, -3, -3, -3, 3, 3, 3, -2, 2, -2, 2
    ],
    wh = [-1, -1, -1, 0, 0, 0, 1, 1, 1, -2, -2, -2, 2, 2, 2, -1, 0, 1, -1, 0, 1, -3, -3, -3, 3, 3, 3, -1, 0, 1, -1, 0, 1, -2, -2, 2, 2],
    xh = [0, 0.1, 0, 0, 0, 0.1, 0.1, -0.03, 0.1, 0.1, 0.1, 0.1, 0.1, 0.1, 0.1, 0.1, 0.1, 0.1, 0.1, 0.1, 0.1, 0.1, 0, 0.1, 0.1, 0.1, 0.1, -0.01, 0.1, 0.1, 0.2, 0.1, 0.1, 0.1, 0.1, 0.1, 0.1, 0.1, 0.05, 0.1, 0.2, 0.1, 0.1, -0.02, 0.1, 0, 0, 0, 0, 0, 0.1, 0.1, 0.1],
    yh = [0, 0, 0, 0, 0, 0.5, 0.4, 0.5, 0.5, 0.4, 0.4, 0.3, 0.4, 0.3, 0.3, 0.3, 0, 0.2, 0.2, 0.3, 0.1, 0, 0, 0.5, 0.3, 0.5, 0.3, 0.5, 0.4, 0, 0, 0.1, 0, 0.4,
        0.4, 0.5, 0.4, 0.2, 0.5, 0.5, 0, 0.5, 0.2, 0.5, 0, 0, 0, 0, 0, 0, 0.2, 0.1, 0
    ],
    zh = [0, 1, 0, 0, 0, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 0, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 0, 0, 0, 0, 0, 1, 1, 1];


function hf() {
    var a, c, b, d, e = new Vector;
    for (a = 0; a < od; a++)
        if (0 != A[a])
            if (0 == zh[A[a]]) pd(a);
            else {
                b = (B[a].y << 9) + ~~B[a].x;
                for (c = 0; 21 > c; c++) I[b + Pf[c]] == Lb && (I[b + Pf[c]] = Jb);
                var f = U[b] * xh[A[a]],
                    g = V[b] * xh[A[a]];
                W[a].x += f;
                W[a].y += g;
                var m = yh[A[a]];
                if (0 != m) {
                    var n = (B[a].y >> 2 << 7) + (B[a].x >> 2);
                    W[a].x += P[n] * m;
                    W[a].y += Q[n] * m;
                    100 < fastLength(W[a]) && vectorScale(W[a], 0.9 + 0.1 * (1 - m))
                }
                n = a;
                if (0 == Ce[n]) {
                    if (47 == ea && Ke || 47 == fa && Oe) {
                        var m = ia - B[n].x,
                            t = ja - B[n].y;
                        400 > m * m + t * t && (Ce[n] = 1)
                    }
                } else 47 == ea && We || 47 == fa && Xe ? (W[n].x += 0.05 * (ia - B[n].x), W[n].y += 0.05 *
                    (ja - B[n].y), vectorScale(W[n], 0.9)) : Ce[n] = 0;
                for (m = 0; m < counterStickman; m++)
                    if (z[m] == md || z[m] == md + 1 || z[m] == jd || z[m] == ld)
                        for (n = m * hd, t = 4; 5 >= t; t++) {
                            var u = abs(stickManBodyPoints[n + t].y - B[a].y);
                            9 >= abs(stickManBodyPoints[n + t].x - B[a].x) && 9 >= u && (W[a].x += 0.1 * (stickManBodyPoints[n + t].x - stickManOldBodyPoints[n + t].x), W[a].y += 0.2 * (stickManBodyPoints[n + t].y - stickManOldBodyPoints[n + t].y))
                        }
                sh = n = 0;
                for (var m = floor(vectorLength(W[a]) / 2) + 1, t = 1 / m, F, M, u = 0; u < m; u++) {
                    F = B[a].x + W[a].x * t;
                    M = B[a].y + W[a].y * t;
                    if (4 > F || screenWidth - 4 <= F || 4 > M || 292 <= M) {
                        pd(a);
                        break
                    }
                    1 == xa && (8 > F ? (I[(M << 9) + floor(F + 496)] <= l ? (B[a].x += 496, W[a].x *= 0.8, mg(2, a)) : W[a].x *= -0.8, F = B[a].x + W[a].x * t) : 504 <= F && (I[(M << 9) + floor(F - 496)] <=
                        l ? (B[a].x -= 496, W[a].x *= 0.8, mg(2, a)) : W[a].x *= -0.8, F = B[a].x + W[a].x * t), 8 > M ? (I[(M + 280 << 9) + ~~F] <= l ? (B[a].y += 280, W[a].y *= 0.8, mg(2, a)) : W[a].y *= -0.8, M = B[a].y + W[a].y * t) : 288 <= M && (I[(M - 280 << 9) + ~~F] <= l ? (B[a].y -= 280, W[a].y *= 0.5, mg(2, a)) : W[a].y *= -0.8, M = B[a].y + W[a].y * t));
                    if (4 > F || screenWidth - 4 <= F || 4 > M || 292 <= M) {
                        pd(a);
                        break
                    }
                    b = (M << 9) + ~~F;
                    d = 0;
                    setToVector(e, 0, 0);
                    for (c = 0; 37 > c; c++) {
                        var $ = I[b + Pf[c]];
                        $ <= l || (n = D[$], 1 == Bh(a, c, n, $) || 2 == X[n] && 2 == X[A[a]] && A[a] != n || 2 == X[n] && 2 != X[A[a]] || 5 == X[n] && 5 != X[A[a]] || n == r || n == oc || (n == Lc && (0 == G[$] ? (22 == c && (e.x +=
                            1), 25 == c && (e.x -= 1), 28 == c && (e.y -= 1), 31 == c && (e.y += 1)) : (22 == c && (e.x -= 1), 25 == c && (e.x += 1), 28 == c && (e.y += 1), 31 == c && (e.y -= 1))), e.x -= th[c], e.y -= uh[c], d++))
                    }
                    0 == d ? (B[a].x = F, B[a].y = M) : (normalize2(e), W[a].x -= f, W[a].y -= g, c = 0.999 * vectorLength(W[a]), b = e.x * W[a].x + e.y * W[a].y, 0 > b && (vectorScale(e, -b), W[a].add(e), vectorScale(W[a], 0.9), vectorScale(e, 0.1), W[a].add(e), normalize2(W[a]), vectorScale(W[a], c)), B[a].x += W[a].x * t, B[a].y += W[a].y * t, W[a].x += f, W[a].y += g);
                    if (4 > B[a].x || screenWidth - 4 <= B[a].x || 4 > B[a].y || 292 <= B[a].y) {
                        pd(a);
                        break
                    }
                    b = (B[a].y << 9) + ~~B[a].x;
                    d = 0;
                    setToVector(e, 0, 0);
                    for (c = 0; 21 > c; c++) $ = I[b + Pf[c]],
                        $ <= l || 2 == X[D[$]] && 2 == X[A[a]] && A[a] != D[$] || 2 == X[D[$]] && 2 != X[A[a]] || 5 == X[D[$]] && 5 != X[A[a]] || D[$] == rc && 2 == X[A[a]] || D[$] == rc && A[a] == zc || D[$] == r || D[$] == oc || (e.x -= th[c], e.y -= uh[c], d++);
                    0 != d && (normalize2(e), B[a].add(e))
                }
                if (4 > B[a].x || screenWidth - 4 <= B[a].x || 4 > B[a].y || 292 <= B[a].y) pd(a);
                else if (Ch(a, n), 0 != A[a])
                    for (0 != sh && (A[a] = sh, S[a] = 0), b = (B[a].y << 9) + ~~B[a].x, c = 0; 21 > c; c++) I[b + Pf[c]] <= l && (I[b + Pf[c]] = Lb)
            }
}


function Bh(a, c, b, d) {
    if (A[a] != Sb)
        if (A[a] == q)
            if (b == r) rd(d);
            else if (b == Ub) Hg(d, Tb);
    else if (b == Wb) sh = Wb;
    else if (b == Xb) sh = Xb;
    else if (b == dc) Hg(d, ec);
    else {
        if (b == gc) return 1;
        if (b == lc) rd(d);
        else if (b == pc) customRandomBoolean(0.1) && Hg(d, Sb);
        else {
            if (b == rc) return 1;
            b == uc ? (20 <= ++S[a] && (sh = vc), rd(d)) : b == Ac ? rd(d) : b == Bc && Hg(d, Vb)
        }
    } else if (A[a] == Wb) b == q ? Hg(d, Wb) : b == Wb ? S[a] = 0 : b == Xb ? S[a] = 0 : b == r ? 20 <= ++S[a] && (sh = q) : b == gc ? sh = q : b == lc ? 20 <= ++S[a] && (sh = q) : b == rc ? 20 <= ++S[a] && (sh = q) : b == Ac && 20 <= ++S[a] && (sh = q);
    else if (A[a] == Xb) b == q ? Hg(d, Xb) : b ==
        r ? sh = q : b == gc ? sh = q : b == lc ? sh = q : b == rc ? sh = q : b == Ac && (sh = q);
    else if (A[a] == vc)
        if (b == q) S[a] = 0;
        else if (b == Tb) Hg(d, Sb);
    else if (b == Ub) Hg(d, Sb);
    else if (b == pc) Hg(d, Sb);
    else if (b == tc) Hg(d, Sb);
    else if (b == Bc) Hg(d, Vb);
    else if (b == r) 20 <= ++S[a] && (sh = uc), rd(d);
    else if (b == gc) sh = uc;
    else if (b == lc) 20 <= ++S[a] && (sh = uc), rd(d);
    else {
        if (b == rc) return 20 <= ++S[a] && (sh = uc), 1;
        b == Ac && (20 <= ++S[a] && (sh = uc), rd(d))
    } else if (A[a] == uc)
        if (b == q) sh = vc;
        else {
            if (b == gc) return 1
        }
    else if (A[a] == r) b == Sb ? Hg(d, r) : b == Tb ? Hg(d, r) : b == Ub ? Hg(d, r) : b == Vb ? Hg(d,
        r) : b == Wb ? Hg(d, q) : b == Xb ? Hg(d, q) : b == ac ? D[d] == ac && 256 > G[d] && (G[d] += 256) : b == bc ? Hg(d, r) : b == cc ? Hg(d, r) : b == jc ? Hg(d, r) : b == kc ? Hg(d, r) : b == mc ? Hg(d, r) : b == tc ? Hg(d, r) : b == xc ? Hg(d, r) : b == yc ? Hg(d, r) : b == Bc && Hg(d, r);
    else if (A[a] == Tb) b == Sb || b == dc || b == tc ? 1 == S[a] ? sh = Ub : Hg(d, Tb) : b == q && (S[a] = 1);
    else if (A[a] == Ub) b == Tb ? G[d] = 1 : b == bc && (S[a] = 1);
    else if (A[a] == bc) {
        if (b == gc) return 1;
        if (b == nc) rd(d);
        else {
            if (b == rc) return 1;
            b == Bc && L(d, Bc, bc, 5583650)
        }
    } else if (A[a] == nc)
        if (b == Wb) sh = Wb;
        else if (b == bc) rd(d);
    else {
        if (b == gc) return 1;
        if (b == lc) rd(d);
        else {
            if (b == rc) return 1;
            b == Ac ? rd(d) : b == Bc && L(d, Bc, nc, 5588019)
        }
    } else if (A[a] == Zb) {
        if (0 == S[a] && d >= p && (S[a] = b), b == rc) return 1
    } else if (A[a] == ic) 0 == S[a] && d >= p ? S[a] = b : 0 != S[a] && d >= p && L(d, S[a], 0, s[S[a]]);
    else if (A[a] == jc) b == Bc && L(d, Bc, jc, 4473890);
    else if (A[a] == sc) {
        if (0 == qg[b] && b != Zb || rd(d), b == rc) return 1
    } else if (A[a] == xc) b != Tb && b != kc && b != yc || rd(d), b == Ub && vectorScale(W[a], 0.9);
    else if (A[a] == oc) b == vc ? L(d, oc, 0, s[oc]) : b == pc ? (0 == vh[c] && 0 < wh[c] && L(d, pc, 1, s[oc]), 0 > vh[c] && 0 == wh[c] && L(d, pc, 2, s[oc]), 0 == vh[c] && 0 > wh[c] && L(d, pc,
        3, s[oc]), 0 < vh[c] && 0 == wh[c] && L(d, pc, 4, s[oc])) : b == zc ? (0 == vh[c] && 0 < wh[c] && L(d, zc, 1, s[oc]), 0 > vh[c] && 0 == wh[c] && L(d, zc, 2, s[oc]), 0 == vh[c] && 0 > wh[c] && L(d, zc, 3, s[oc]), 0 < vh[c] && 0 == wh[c] && L(d, zc, 4, s[oc])) : b == Jc && 0 == G[d] && (G[d] = 1);
    else if (A[a] == dc) b == q ? sh = ec : b == gc && (sh = gc);
    else if (A[a] == ec)
        if (b == r) 20 <= ++S[a] && (sh = dc), rd(d);
        else if (b == gc) sh = dc;
    else if (b == lc) 20 <= ++S[a] && (sh = dc);
    else {
        if (b == rc) return 20 <= ++S[a] && (sh = dc), 1;
        b == Ac && (20 <= ++S[a] && (sh = dc), rd(d))
    } else if (A[a] == fc)
        if (b == fc) 10 < fastLength(W[a]) && (b = ~~B[a].x + customRandom(5) -
            2, d = ~~B[a].y + customRandom(5) - 2, a = I[(d << 9) + b], a <= l && Bd(b, d, Ac, 0));
        else {
            if (b == Ac) return 1
        }
    else if (A[a] == gc) b == q ? (20 <= ++S[a] && (sh = pc), L(d, hc, 10, s[hc])) : b == nc ? (20 <= ++S[a] && (sh = wc), L(d, hc, 10, s[hc])) : b == vc ? (20 <= ++S[a] && (sh = fc), L(d, uc, 0, s[uc])) : b == ec ? (20 <= ++S[a] && (sh = dc), L(d, dc, 0, s[dc])) : b == gc && (S[a] = 0), b == Sb ? L(d, r, 0, s[r]) : b == Tb ? L(d, r, 0, s[r]) : b == Ub ? L(d, r, 0, s[r]) : b == Vb ? L(d, r, 0, s[r]) : b == Wb ? L(d, q, 0, s[q]) : b == Xb ? L(d, q, 0, s[q]) : b == Yb ? L(d, r, 0, s[r]) : b == ac ? D[d] == ac && 256 > G[d] && (G[d] += 256) : b == bc ? L(d, r, 0, s[r]) : b == cc ? L(d, r, 0, s[r]) :
        b == jc ? L(d, r, 0, s[r]) : b == kc ? L(d, r, 0, s[r]) : b == mc ? L(d, r, 0, s[r]) : b == tc ? L(d, r, 0, s[r]) : b == xc ? L(d, r, 0, s[r]) : b == yc ? L(d, r, 0, s[r]) : b == Bc && L(d, r, 0, s[r]);
    else if (A[a] == pc)
        if (b == q) S[a] = 0;
        else if (b == gc) 20 <= ++S[a] && (sh = gc);
    else if (b == pc) 10 < fastLength(W[a]) && (b = ~~B[a].x + customRandom(5) - 2, d = ~~B[a].y + customRandom(5) - 2, a = I[(d << 9) + b], a <= l && Bd(b, d, Ac, 0));
    else {
        if (b == rc || b == Ac) return 1
    } else if (A[a] == wc)
        if (b == q) S[a] = 0;
        else if (b == gc) 20 <= ++S[a] && (sh = gc);
    else {
        if (b == rc) return 1
    } else if (A[a] == lc) b == Sb ? L(d, r, 0, s[r]) : b == Tb ? L(d, r, 0, s[r]) : b == Ub ? L(d, lc, 0, s[lc]) :
        b == Vb ? L(d, r, 0, s[r]) : b == Wb ? L(d, q, 0, s[q]) : b == Xb ? L(d, q, 0, s[q]) : b == Yb ? L(d, r, 0, s[r]) : b == ac ? D[d] == ac && 256 > G[d] && (G[d] += 256) : b == bc ? L(d, r, 0, s[r]) : b == cc ? L(d, r, 0, s[r]) : b == jc ? L(d, r, 0, s[r]) : b == kc ? L(d, r, 0, s[r]) : b == mc ? L(d, r, 0, s[r]) : b == tc ? L(d, r, 0, s[r]) : b == xc ? L(d, r, 0, s[r]) : b == yc ? L(d, r, 0, s[r]) : b == Bc ? L(d, r, 0, s[r]) : b == Cc && L(d, q, 0, s[q]);
    else if (A[a] == Bc) b == bc ? S[a] = bc : b == jc ? S[a] = jc : b == nc && (S[a] = nc);
    else if (A[a] == Cc)
        if (b == Ub) sh = q;
        else if (b == Wb) sh = Xb;
    else if (b == cc) sh = q;
    else if (b == lc) sh = q;
    else if (b == pc) sh = oc;
    else if (b ==
        tc) sh = q;
    else if (b == Bc) sh = q;
    else {
        if (b == rc) return 1
    } else if (A[a] == Dc) {
        if (0 == S[a]) b == q ? S[a] = q : b == bc ? S[a] = bc : b == ec ? S[a] = ec : b == gc ? S[a] = gc : b == jc ? S[a] = jc : b == mc ? S[a] = mc : b == nc ? S[a] = nc : b == sc ? S[a] = sc : b == vc ? S[a] = vc : b == zc ? S[a] = zc : b == Cc && (S[a] = Cc);
        else {
            c = S[a] & 255;
            var e = S[a] >> 8;
            b == c && (S[a] = e + 1 << 8 | c, rd(d))
        }
        if (b == gc || b == rc) return 1
    } else if (A[a] == Yb) b == Yb && (J[d].x += th[c], J[d].y += uh[c]);
    else if (A[a] == kc) 4 == X[b] && b != Zb && L(d, kc, 0, s[kc]);
    else if (A[a] == rc)
        if (b == pc || b == zc) b = (B[a].y << 9) + ~~B[a].x, 21 <= c && 23 >= c && I[b + Pf[c + 3]] <=
            l && Bd(~~B[a].x + vh[c + 3], ~~B[a].y + wh[c + 3], rc, 7), 24 <= c && 26 >= c && I[b + Pf[c - 3]] <= l && Bd(~~B[a].x + vh[c - 3], ~~B[a].y + wh[c - 3], rc, 3), 27 <= c && 29 >= c && I[b + Pf[c + 3]] <= l && Bd(~~B[a].x + vh[c + 3], ~~B[a].y + wh[c + 3], rc, 1), 30 <= c && 32 >= c && I[b + Pf[c - 3]] <= l && Bd(~~B[a].x + vh[c - 3], ~~B[a].y + wh[c - 3], rc, 5);
        else if (b == Wb) L(d, q, 0, s[q]);
    else {
        if (b == wc) return 1
    } else if (A[a] == tc) b == Tb ? G[d] = 2 : b != dc && b != fc && b != Dc || L(d, tc, 0, s[tc]);
    else if (A[a] == zc)
        if (b == q) S[a] = 0;
        else if (b == gc) 20 <= ++S[a] && (sh = gc);
    else if (b == oc) 21 <= c && 23 >= c && (G[d] = 8192 | G[d] & 4095),
        24 <= c && 26 >= c && (G[d] = 0 | G[d] & 4095), 27 <= c && 29 >= c && (G[d] = 4096 | G[d] & 4095), 30 <= c && 32 >= c && (G[d] = 12288 | G[d] & 4095);
    else {
        if (b == rc) return 21 <= c && 23 >= c && (G[d] = G[d] & 65520 | 3), 24 <= c && 26 >= c && (G[d] = G[d] & 65520 | 7), 27 <= c && 29 >= c && (G[d] = G[d] & 65520 | 5), 30 <= c && 32 >= c && (G[d] = G[d] & 65520 | 1), 33 == c && (G[d] = G[d] & 65520 | 4), 34 == c && (G[d] = G[d] & 65520 | 2), 35 == c && (G[d] = G[d] & 65520 | 6), 36 == c && (G[d] = G[d] & 65520 | 8), 1
    } else if (A[a] == Ac) {
        if (b == Ac) return 1;
        0 != X[b] && 2 < fastLength(W[a]) && (b = ~~B[a].x + customRandom(2), d = ~~B[a].y, 0 > W[a].x && (b += 2), 0 < W[a].x && (b -= 3), a = I[(d <<
            9) + b], a <= l && Bd(b, d, Ac, 0))
    } else if (A[a] == Jc)
        if (b != oc && b != pc && b != zc || 0 == S[a]) {
            if (b == rc) return 0 != S[a] && (E[d] = S[a]), 1;
            b == Jc ? 0 != S[a] && (E[d] = S[a]) : d >= p && (S[a] = s[b])
        } else 0 != G[d] && (b = S[a] >> 16 & 255, d = S[a] >> 8 & 255, c = S[a] & 255, 384 > b + d + c && (b = floor(9 * b / 7 + 1), 255 < b && (b = 255), d = floor(9 * d / 7 + 1), 255 < d && (d = 255), c = floor(9 * c / 7 + 1), 255 < c && (c = 255), S[a] = b << 16 | d << 8 | c));
    else if (A[a] == Lc && 0 != X[b] && b != Lc && b != Zb && b != rc) {
        a = 8;
        b == Yb && (a = 1);
        if (b == qc || b == Kc) a = 4;
        if (b == jc || b == nc) a = 16;
        9 <= c && 11 >= c && (J[d].y = a);
        21 <= c && 23 >= c && (J[d].y = a);
        12 <= c && 14 >= c && (J[d].y = -a);
        24 <= c && 26 >= c && (J[d].y = -a);
        15 <= c && 17 >= c && (J[d].x = a);
        27 <= c && 29 >= c && (J[d].x = a);
        18 <= c && 20 >= c && (J[d].x = -a);
        30 <= c && 32 >= c && (J[d].x = -a)
    }
    return 0
}


function Ch(a, c) {
    var b, d, e = new Vector;
    d = (B[a].y << 9) + ~~B[a].x;
    A[a] == Sb ? 2 == X[c] ? Z(a, d, 0, Sb, 0, 0.5 * W[a].x, 0.5 * W[a].y, 0.5) : 3 == X[c] && Z(a, d, 0, r, 0, 0.5 * W[a].x, 0.5 * W[a].y, 0.5) : A[a] == q ? c != gc && c != oc && c != sc || Z(a, d, 0, q, 0, 0, 0, 0) : A[a] == Wb ? (b = fastLength(W[a]), (c == oc || c == sc || (c == Kb || c == fc || c == pc || c == qc || c == Jc) && 25 < b) && Z(a, d, 0, Xb, 0, W[a].x, W[a].y, 0.1 * -b)) : A[a] == Xb ? (b = fastLength(W[a]), (c == oc || c == sc || (c == Kb || c == fc || c == pc || c == qc || c == Jc) && 25 < b) && Z(a, d, 0, Xb, 0, W[a].x, W[a].y, 0)) : A[a] == vc ? c != oc && c != sc || Z(a, d, 0, vc, 0, 0, 0, 0) : A[a] == uc ? c != gc && c != oc &&
        c != sc || Z(a, d, 0, uc, 0, 0, 0, 0) : A[a] == r && (c != q && c != ec && c != nc && c != vc && c != sc || Z(a, d, 0, r, 0, 0, 0, 0));
    A[a] == Tb && (c == sc ? Z(a, d, 0, Tb, 0, 0.5 * W[a].x, 0.5 * W[a].y, 0.5) : c != Ac && 3 == X[c] && Z(a, d, 0, r, 0, 0.5 * W[a].x, 0.5 * W[a].y, 0.5));
    if (A[a] == Ub) c == lc ? Z(a, d, 0, lc, 0, 0, 0, 0) : c == sc ? Z(a, d, 0, Ub, 0, 0, 0, 0) : c == oc ? Z(a, d, 0, Sb, 0, 0, 0, 1) : c != Ac && (3 == X[c] && 1 == S[a] ? Z(a, d, 0, Ub, 0, 0, 0, 0) : 3 == X[c] && Z(a, d, 0, r, 0, 0, 0, 0));
    else if (A[a] == Vb)
        if (2 == X[c]) Z(a, d, 0, Vb, 0, 0, 0, 0);
        else {
            if (3 == X[c]) {
                for (b = 0; 37 > b; b++)
                    if (I[d + Pf[b]] <= l) {
                        var f = Bd(~~B[a].x + vh[b], ~~B[a].y +
                            wh[b], r, 2);
                        if (0 < f) {
                            var g = customRandom2(4);
                            J[f].x += W[a].x * g + th[b] * g;
                            J[f].y += W[a].y * g + uh[b] * g
                        }
                    } pd(a)
            }
        }
    else if (A[a] == bc)
        if (3 == X[c]) {
            for (b = 9; 21 > b; b++) I[d + Pf[b]] <= l && customRandomBoolean(0.5) && Bd(~~B[a].x + vh[b], ~~B[a].y + wh[b], r, 0);
            customRandomBoolean(0.01) && Z(a, d, 0, bc, 0, 0, 0, 0)
        } else c == sc && Z(a, d, 0, bc, 0, 0, 0, 0);
    else if (A[a] == nc) c != gc && c != oc && c != sc || Z(a, d, 0, nc, 0, 0, 0, 0);
    else if (A[a] == Nb) d = (B[a].y >> 2 << 7) + (B[a].x >> 2), setToVector(e, W[a].x, W[a].y), normalize2(e), P[d] += e.x, Q[d] += e.y;
    else if (A[a] == Zb) {
        if (0 != S[a] && !(1E3 > mf - qd)) {
            b = ~~B[a].x;
            g = ~~B[a].y;
            if (1 == X[S[a]] || S[a] == gc || S[a] ==
                Ub || S[a] == Wb || S[a] == tc || S[a] == Bc || S[a] == Jc) b = floor(B[a].x + 4 * U[d]), g = floor(B[a].y + 4 * V[d]);
            else if (S[a] == r || S[a] == mc) b = floor(B[a].x - 4 * U[d]), g = floor(B[a].y - 4 * V[d]);
            else if (S[a] == Ac || S[a] == lc) e.set(W[a]), normalize(e), b = floor(B[a].x - 4 * e.x), g = floor(B[a].y - 4 * e.y);
            d = 0;
            S[a] == rc && (d = 128);
            I[(g << 9) + b] <= l && Bd(b, g, S[a], d)
        }
    } else if (A[a] == cc || A[a] == jc)
        if (3 == X[c]) {
            d = 8;
            for (var m = ~~B[a].x, n = ~~B[a].y, t = max(m - d, 8), f = max(n - d, 8), u = min(m + d, 503), F = min(n + d, 287), M, g = f; g <= F; g++)
                for (b = t; b <= u; b++) d * d < (b - m) * (b - m) + (g - n) * (g - n) || (f = (g + n >> 1 << 9) + (b + m >> 1), 1 <= x[R[f]] ||
                    (M = I[(g << 9) + b], M >= p && (D[M] == fc && L(M, dc, 0, s[dc]), J[M].x += 2 * (b - m), J[M].y += 2 * (g - n)), M <= l && A[a] == jc && Bd(b, g, r, 0)));
            m = minInsideRange(m, 12, 499);
            n = minInsideRange(n, 12, 283);
            d = (n >> 2 << 7) + (m >> 2);
            m = 5;
            0 == x[f = d - w - 1] && (P[f] -= 0.4 * m, Q[f] -= 0.4 * m);
            0 == x[f = d - w] && (Q[f] -= 0.5 * m);
            0 == x[f = d - w + 1] && (P[f] += 0.4 * m, Q[f] -= 0.4 * m);
            0 == x[f = d - 1] && (P[f] -= 0.5 * m);
            0 == x[f = d + 1] && (P[f] += 0.5 * m);
            0 == x[f = d + w - 1] && (P[f] -= 0.4 * m, Q[f] += 0.4 * m);
            0 == x[f = d + w] && (Q[f] += 0.5 * m);
            0 == x[f = d + w + 1] && (P[f] += 0.4 * m, Q[f] += 0.4 * m);
            pd(a)
        } else c == sc && Z(a, d, 0, A[a], 0, 0, 0, 0);
    else if (A[a] == mc) 3 == X[c] ?
        (Z(a, d, 0, mc, 0, 0, 0, 1), 2 > S[a] && (S[a]++, A[a] = mc)) : c == sc && Z(a, d, 0, mc, 0, 0, 0, 0);
    else if (A[a] == qc) {
        if (0 < X[c] && c != qc) {
            d = 8;
            m = ~~B[a].x;
            n = ~~B[a].y;
            t = max(m - d, 8);
            f = max(n - d, 8);
            u = min(m + d, 503);
            F = min(n + d, 287);
            setToVector(e, 0, 0);
            for (g = f; g <= F; g++)
                for (b = t; b <= u; b++) d * d < (b - m) * (b - m) + (g - n) * (g - n) || (M = I[(g << 9) + b], M >= p && (e.x += m - b, e.y += n - g));
            normalize(e);
            for (g = f; g <= F; g++)
                for (b = t; b <= u; b++) d * d < (b - m) * (b - m) + (g - n) * (g - n) || (f = (g + n >> 1 << 9) + (b + m >> 1), 1 <= x[R[f]] || (M = I[(g << 9) + b], M >= p && (D[M] == qc && 0 != G[M] || L(M, qc, D[M], s[qc]), J[M].x += 0.5 * e.x + 0.5 * (m - b), J[M].y +=
                    0.5 * e.y + 0.5 * (n - g))));
            pd(a)
        }
    } else if (A[a] == xc) 3 == X[c] ? Z(a, d, 0, r, 0, 0.5 * W[a].x, 0.5 * W[a].y, 0.5) : c == sc && Z(a, d, 0, xc, 0, 0, 0, 0);
    else if (A[a] == yc) 3 == X[c] ? Z(a, d, 0, r, 0, 0.5 * W[a].x, 0.5 * W[a].y, 0.5) : 2 != X[c] && c != xc || Z(a, d, 0, yc, 0, 0, 0, 0);
    else if (A[a] == dc) c != oc && c != sc || Z(a, d, 0, dc, 0, 0, 0, 0);
    else if (A[a] == ec) c != oc && c != sc || Z(a, d, 0, ec, 0, 0, 0, 0);
    else if (A[a] == fc) b = fastLength(W[a]), (c == Kb || c == pc || c == qc || c == Jc) && 45 < b ? A[a] = dc : c == sc && Z(a, d, 0, fc, 0, 0, 0, 0);
    else if (A[a] == pc) c == vc ? Z(a, d, 1, Sb, 0, 0, 0, 0) : c == oc ? Z(a, d, 2, pc, 0, 0, 0, 0) : c == rc ? Z(a, d, 1,
        pc, 0, 0, 0, 0) : c == sc && Z(a, d, 0, pc, 0, 0, 0, 0);
    else if (A[a] == wc) b = fastLength(W[a]), (c == Kb || c == fc || c == pc || c == qc) && 25 < b ? Z(a, d, 0, fc, 0, 0, 0, 0.05 * b) : c == oc ? Z(a, d, 1, wc, 0, 0, 0, 0) : c == rc ? Z(a, d, 2, wc, 0, 0, 0, 0) : c == sc && Z(a, d, 0, wc, 0, 0, 0, 0);
    else if (A[a] == lc) c == q && Z(a, d, 0, lc, 0, 0, 0, 0), c == ec ? Z(a, d, 0, lc, 0, 0, 0, 0) : c == nc ? Z(a, d, 0, lc, 0, 0, 0, 0) : c == vc ? Z(a, d, 0, lc, 0, 0, 0, 0) : c == oc ? Z(a, d, 0, r, 0, 0, 0, 0) : c == sc && Z(a, d, 0, lc, 0, 0, 0, 0);
    else if (A[a] == Bc) 3 == X[c] ? S[a] == bc ? Z(a, d, 2, r, 0, 0, 0, 0) : S[a] == jc ? Z(a, d, 0, jc, 0, 0, 0, 1) : S[a] == nc ? Z(a, d, 0, hc, 10, 0, 0, 1) : Z(a, d, 0, Ac,
        0, 0, 0, 0) : c == q ? Z(a, d, 0, Vb, 0, 0, 0, 0) : c == vc ? Z(a, d, 0, Vb, 0, 0, 0, 0) : c == sc && Z(a, d, 0, Bc, 0, 0, 0, 0);
    else if (A[a] == Cc) c == sc && Z(a, d, 0, Cc, 0, 0, 0, 0);
    else if (A[a] == Dc) 0 == S[a] || 1E3 > mf - qd || (e.set(W[a]), normalize(e), vectorScale(e, 4), b = floor(B[a].x - e.x), g = floor(B[a].y - e.y), M = I[(g << 9) + b], M <= l && (m = S[a] & 255, e = S[a] >> 8, 0 < e && (Bd(b, g, m, 0), S[a] = e - 1 << 8 | m)));
    else if (A[a] == Yb) c == oc ? Z(a, d, 0, Yb, 0, 0, 0, 1) : c == rc ? Z(a, d, 0, Yb, 0, 0, 0, 2) : c != Ac && (3 == X[c] ? Z(a, d, 0, r, 0, 0, 0, 0) : c == sc && Z(a, d, 0, Yb, 0, 0, 0, 2));
    else if (A[a] == ac)
        if (0 == S[a]) 3 == X[c] ? (W[a].x -= 5 * U[d], W[a].y -= 5 * V[d],
            S[a] = 1) : c == sc && Z(a, d, 0, ac, 0, 0, 0, 0);
        else {
            if (S[a]++, 50 < S[a]) {
                if (!(1E3 > mf - qd))
                    for (e = customRandom(6), 0 == e ? e = 16711680 | customRandom(256) << 8 : 1 == e ? e = 65280 | customRandom(256) << 16 : 2 == e ? e = 65280 | customRandom(256) : 3 == e ? e = 255 | customRandom(256) << 8 : 4 == e ? e = 255 | customRandom(256) << 16 : 5 == e && (e = 16711680 | customRandom(256)), b = 9; 37 > b; b++) I[d + Pf[b]] <= l && (g = Bd(~~B[a].x + vh[b], ~~B[a].y + wh[b], r, 2), 0 < g && (J[g].x += 5 * th[b], J[g].y += 5 * uh[b], E[g] = e));
                pd(a)
            }
        }
    else A[a] == kc ? 3 == X[c] ? Z(a, d, 0, r, 0, 0, 0, 0) : c == sc && Z(a, d, 0, kc, 0, 0, 0, 0) : A[a] == rc ? c == sc && Z(a, d, 0, rc, 0, 0, 0, 0) : A[a] == tc ? c == vc ? Z(a, d, 0, Sb, 0, 0, 0, 0) : c == oc ? Z(a,
        d, 0, tc, 0, 0, 0, 0) : c != Ac && (3 == X[c] ? Z(a, d, 0, r, 0, 0, 0, 0) : c == sc && Z(a, d, 0, tc, 0, 0, 0, 0)) : A[a] == zc ? c == sc && Z(a, d, 0, zc, 0, 0, 0, 0) : A[a] == Ac ? c == q ? Z(a, d, 2, Ac, 0, 0, 0, 0) : c == nc ? Z(a, d, 2, Ac, 0, 0, 0, 0) : c == vc ? Z(a, d, 2, Ac, 0, 0, 0, 0) : c == oc ? Z(a, d, 2, Ac, 0, 0, 0, 0) : c == sc && Z(a, d, 2, Ac, 0, 0, 0, 0) : A[a] == Kc ? 0 != X[c] && (b = I[d - 2 * screenWidth - 2], g = I[d - 2 * screenWidth + 2], e = I[d + 2 * screenWidth + 2], d = I[d + 2 * screenWidth - 2], b <= l && (b = Bd(~~B[a].x - 2, ~~B[a].y - 2, c, 0)), g <= l && (g = Bd(~~B[a].x + 2, ~~B[a].y - 2, c, 0)), e <= l && (e = Bd(~~B[a].x + 2, ~~B[a].y + 2, c, 0)), d <= l && (d = Bd(~~B[a].x - 2, ~~B[a].y + 2, c, 0)), 0 < b && J[b].set(W[a]),
        0 < g && J[g].set(W[a]), 0 < e && J[e].set(W[a]), 0 < d && J[d].set(W[a]), p <= b && p <= g && Gd(0, 0, b, g, 0), p <= g && p <= e && Gd(0, 0, g, e, 0), p <= e && p <= d && Gd(0, 0, e, d, 0), p <= d && p <= b && Gd(0, 0, d, b, 0), p <= b && p <= e && Gd(0, 0, b, e, 5), p <= g && p <= d && Gd(0, 0, g, d, 5), pd(a)) : A[a] == Lc && c == sc && Z(a, d, 2, Lc, 0, 0, 0, 0)
}

function Z(a, c, b, d, e, f, g, m) {
    if (0 == b) {
        for (b = 9; 21 > b; b++) {
            var n = I[c + Pf[b]];
            n <= l && (n = Bd(~~B[a].x + vh[b], ~~B[a].y + wh[b], d, e), 0 < n && (J[n].x += f + th[b] * m, J[n].y += g + uh[b] * m))
        }
        pd(a)
    } else if (1 == b || 2 == b) {
        for (b = 1 == b ? 9 : 0; 21 > b; b++) n = I[c + Pf[b]], n <= l ? Bd(~~B[a].x + vh[b], ~~B[a].y + wh[b], d, e) : n >= p && L(n, d, e, s[d]);
        pd(a)
    }
}


function Vf() {
    var a, c, b, d;
    for (a = 0; a < od; a++)
        if (0 != A[a]) {
            d = s[A[a]];
            A[a] == Jc && 0 != S[a] && (d = S[a]);
            14 == backgroundDrawType && (d = 0);
            b = (B[a].y << 9) + ~~B[a].x;
            for (c = 9; 21 > c; c++) v[b + Pf[c]] = v[b + Pf[c]] == d ? 0 : d;
            if (288 > B[a].y)
                if (12 == backgroundDrawType) {
                    if (A[a] == r || A[a] == gc || A[a] == lc || A[a] == oc || A[a] == rc || A[a] == Ac) Eb[b] = 255E3
                } else 13 == backgroundDrawType && (Eb[b] = 2 * Sc[A[a]])
        }
}
var    canvasElement = document.getElementById("cv"),
    canvasContext = canvasElement.getContext("2d"),
    canvasImageData = canvasContext.createImageData(screenWidth, screenHeight),
    ae = new Uint8Array(canvasImageData.data.buffer);


function drawCanvas(a, c, b, d, e, f, g) {
    try {
        canvasElement = document.getElementById("cv"), canvasContext = canvasElement.getContext("2d"), canvasContext.putImageData(a, c, b, d, e, f, g)
    } catch (m) {}
}


function logOnConsole(a) {
    try {
        window.console.log(a);
    } catch (c) {}
}
window.Init = startScript;
    Jh = 11; // Changed
    v = new Int32Array(screenWidth * screenHeight);

function loop() {
    if (requestAnimationFrame) {
        requestAnimationFrame(loop);
        Mh++;
        Nh = Date.now();
        var a = floor(60 * (Nh - Oh) / 1E3 + 0.5);
        if (0 > a || 60 <= a) qf = Mh, Mh = 0, nf = Ph, Ph = 0, pf = floor((2 * pf + Qh) / 3), Qh = 0, Oh = Nh, a = 0;
        else if (a == Rh) return;
        Ph++;
        Rh = a
    }
    Ke = false == We && true == Sh;
    trueAfterMouseUpButOnlyForOneTick = true == We && false == Sh;
    Oe = false == Xe && true == moreThanOneTouches;
    Ve = true == Xe && false == moreThanOneTouches;
    We = Sh;
    Xe = moreThanOneTouches;
    Je = !(trueAfterMouseUpButOnlyForOneTick | We | Ve | Xe);
    Pe = trueAfterMouseUpButOnlyForOneTick ? 1 : Ve ? -1 : 0;
    Qf = Ne;
    Rf = Ie;
    Ne = distanceXFromTopScreen;
    Ie = distanceYFromTopScreen;
    Ke && (Qf = Ne, Rf = Ie);
    for (a = 0; 256 > a; a++) Qd[a] = Rd[a], Rd[a] = false, Ud[a] = false == Td[a] && true == Sd[a], Vd[a] = true == Td[a] && false == Sd[a], Td[a] = Sd[a];
    Zd = Zd + floor(1024 * Math.random()) & 1023;
    $d = floor(512 * Math.random()) | 1;
    Ge();
    // Another security check
    var c, b = 11 == Jh ? screenWidth * screenHeight : 0;
    for (c = a = 0; a < b; a++) ae[c++] = v[a] >> 16 & 255, ae[c++] = v[a] >> 8 & 255, ae[c++] = v[a] & 255, c++;
    drawCanvas(canvasImageData, -8, -8, 8, 8, screenWidth - 16, screenHeight - 8);
    requestAnimationFrame ? Qh += Date.now() - Nh : setTimeout(loop, je())
}
var He = 0;

function securityCheck() {
    return false
    /*if (location.hostname.length != "dan-ball.jp".length) return true;
    for (He = 0; Jh < location.hostname.length; Jh++)
        if (location.hostname[Jh] != "dan-ball.jp"[Jh]) return true;
    return false*/
}
var Mh = 0,
    qf = 0,
    Rh = 0,
    Ph = 0,
    nf = 0,
    Qh = 0,
    pf = 0,
    Wh = 20,
    Nh = Date.now(),
    Oh = Nh,
    Xh = Nh + Wh,
    Yh = Nh,
    cf = 0;

function je() {
    Nh = Date.now();
    var a = minInsideRange(Xh - Nh, 5, Wh);
    Ph++;
    Qh += a;
    Xh += Wh;
    if (Nh + a >= Yh || Nh < Oh) pf = pf + Qh >> 1, Qh = 0, nf = Ph, Ph = 0, Xh = Nh + Wh, Yh = Nh + 1E3;
    Oh = Nh;
    return a
}
var ce = 0;

function ImageHandler() {
    this.img = 0;
    this.file = "";
    this.o = this.d = this.k = this.f = this.j = this.a = this.shift = this.screenWidth = this.b = 0
}

function he(a, c, b) {
    a.b = c;
    a.screenWidth = b;
    for (c = a.shift = 0; 16 > c; c++) 1 << c == a.b && (a.shift = c);
    a.a = new Int32Array(a.b * a.screenWidth)
}
ImageHandler.prototype.m = function(url) {
    if(this.file != url) {
        ce++;
        this.file = url;
        this.img = new Image;
        if( url = "font.gif") {
            this.img.src = "data:image/gif;base64,R0lGODlhAAMMAJECAAAAAP///wAAAAAAACH5BAEAAAIALAAAAAAAAwwAAAL/lI9pACoMUVzsVdvoVXO6D4aipm1QhnUnmqbn8a6RXG4j5yWvtNZo7/rtgMGGLAM8knCVWdOj6jmHxKQ1dsxGtxdakTolEVui3O2MTqvX7Lb7DR+BdTllGxkIsBZ6PQygdxIIaESI54eDaMhEtxdn4ceQFwipCDgpiIl0aTSJSZHX6TnomRm6abPzF/rBKVQKAVupKCt5+qDJV4q7a0vJyYpro9sZK/pDa2vsO3h562vaDOuseWrdFJhsKMnNxxzsXOzNi1g5zEEZoipnxuTI47gOFt/+aP/3fs+mPC5xa07oTraAPPo8gWXwl0FiDhZBYrEMWb43i4BF+sRLmStw/59cOXlmLZtIjRzLZSz4S4orYhsFiQLJr6Wwis0iYutzEeeheKwM9Qw2k9vGkUONZfRJSiNShER/dpsZUqhUl96wUTVa1WRDgi5gAK2hA5wqjT6EoTPJiWFYSyqvTJmnBRWUckq4yO3i1s62fvi0/VNDKJRWck6lBcZDcB0oiOmELeRr7ynSlzuLpuWWc8ipY5ajpj3ple5KwptANgV2zKnHmkEvdvgqNXNJnq5NI2t6epnT1kKh1owlDbdul0JJjVyVbFVvvl7U4c01E2Xj6NAQB1Tm2h280mM5Hsa8mRpwjxaxB3+2VyZNyQOHZx2F2N+7xM3XBB78UGHF74snev9NxVV1GAwCQn2tpHQcPy6EtxJqhJ33W3jTRFXCdqA01pxS42G3DVHiKbiYWeFwdtMRx4Hmj3EI0jWKSDol5mFSUBE3YmiVeXaNYIWg196FXYjWI2QUyRjUjYWwh9U246lmwnSfzWijLky96FlLk20Y40uZXaeaYcXZFGEkXBUpn3/76NjQQBeueNCYB/IEkUPU4CclncqxNBtKTW7W3go4WtITasBhdMZo7MyW2pUhafLkSR12BF9G1UQKmp8u/ohhKZde8x5JSVk5YDqfWSbofTCyiBFZzLUoUWTQeCOhFL10SKNSOf3T6FOOobqTQatNtWV7iHrYZolcfqqTmDz/LkeWQ3XGaeeZDhbkLGY70rpXgU4GWGNEBY6RJqYKPtlsJuaF6WllRwVq6A2qBoGcuMTwCV9n6BbXzFHGLpXqsC4qhJaXrCr5r3Hf1WvpTnjKpmWguDbYLrce/eeqmiSB+NCxjA5cJaco9iOgWqglqGZrwmr424dVYbmjr3MeJGrJquoK739mpnEwban6VIyvA0VLc7UJtYrPzWMFSGGl5NnLVLqj+luaaACaMJp4Pgrxo5JzCjci1wzm+ue4UJenIZIWeZ2vvU7nSc5ls+o4aMy0sGZWnUC56YZ6YSf8aBYMYpKlyEnKIrKOJANrnrlJ1+Cdor22fJ3Kr75btxzR/wL22Hz8kWaMz8uUIeqY3kLW6IEs7ll1SVMyamu9rBZOaThRzn41vJQ/jSVuE66u4qSM7S723E0PhZB1fzad4sa69yt8R6l3UxTsuwQV6hRA23GW8toTP6nMd+cuTqXevwj7wa6pvcXi6zb/DcxZHzsuTeGt7BzeAtkfFrcEYgvN5WYzAg9qWQ5Q0CLU0xBGOEd9iBnymoXcUCdAPZluGKNa4PF4RC/TIA85AAte1OilG9cZL0bKK6DPSIgrsRCOXBZL2gGnJzu1tE0dr9sK4AYFMwnBTWUoqo7bFEaahQFxZDHp3XgmmCseogxNPWzhVV64s6+c5RwCuRxY8IFFu5wYDS83oyEVG2EdMFKNi22pg13KUiE0kiGNVdHOVs5xNCzEBQpy1CK48rKFoj1hj3P0QRn5KMa41GyNGaJjHefhx7sUTY/1A9d23oI1LQ6yO+jZYxpnFgYyzPFItpOijRRTH7iQUY+cxMBRErnIb32RDdPRhytd1UUAvnKWtKwHLW+Jy1zqcpe87KUvAaOYQtkyl8Fk4y/dNcxjFgAAOw=="
        } else {
            this.img.src = url;
        }
        //this.img.crossOrigin = "anonymous";
        delete this.a;
        this.j = this.a = 0;
    }
};

function rf(a, c) {
    If(a, c, "sans-serif", 0, 14)
}

function If(a, c, b, d, e) {
    0 == a.j && (a.j = 1, he(a, screenWidth, 128), a.k = document.createElement("canvas"), a.k.width = a.b, a.k.height = a.screenWidth, a.d = a.k.getContext("2d"));
    var f = c + b + d + e;
    if (a.o != f) {
        a.o = f;
        a.d.fillStyle = "#000000";
        a.d.fillRect(0, 0, a.b, a.screenWidth);
        f = "";
        0 != (d & 2) && (f += "italic ");
        0 != (d & 1) && (f += "bold ");
        f = f + (e + "px ") + b;
        a.d.font = f;
        a.d.fillStyle = "#ffffff";
        a.d.fillText(c, 0, e);
        b = a.d.getImageData(0, 0, a.b, a.screenWidth).data;
        c = 0;
        for (d = b.length; c < d; c += 4) a.a[c >> 2] = 1 <= b[c + 0] ? 16777215 : -1;
        for (c = b = a.f = 0; b < a.screenWidth; b++)
            for (d = 0; d < a.b; d++, c++) 16777215 == a.a[c] && a.f <= d &&
                (a.f = d + 1)
    }
}
var Zh = [
        [0, 2, 0, 0, 1, 0, 0, 2, 2, 1, 1, 1, 2, 1, 2, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 2, 2, 0, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 2, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 2, 0, 1, 1, 0, 2, 0, 0, 0, 0, 0, 0, 0, 0, 2, 0, 0, 2, 0, 0, 0, 0, 0, 0, 0, 1, 0, 0, 0, 0, 0, 0, 1, 3, 1, 0],
        [0, 1, 0, 0, 0, 0, 0, 0, 1, 0, 0, 0, 0, 0, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 0, 0, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 0, 0]
    ],
    $screenWidth = [
        [0, 1, 1, 0, 0, 0, 0, 2, 1, 2, 0, 0, 2, 1, 2, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 2, 2, 0, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 2, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0,
            0, 0, 0, 0, 0, 0, 0, 1, 0, 2, 1, 0, 2, 0, 0, 0, 0, 0, 0, 0, 0, 2, 2, 0, 2, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 2, 1, 0
        ],
        [0, 1, 0, 0, 0, 0, 0, 1, 0, 1, 0, 0, 1, 0, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 0, 0, 1, 0, 0, 0, 0, 0, 0, 0, 0, 1, 1, 0, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 0, 0]
    ],
    fontImage = new ImageContainer;

function ImageContainer() {
    this.l = new ImageHandler;
    this.i = this.e = this.n = this.g = 0
}
ImageContainer.prototype.m = function(a, c, b) {
    this.l.m(a);
    this.g = c;
    this.n = b;
    this.i = this.e = 0
};

function drawTextUsingImage(a, c, b, d, e, f) {
    var g, m, n, t, u, F, M, $ = screenWidth - a.g,
        Ca = a.l.b - a.g,
        Pb = -1 < e ? 16777215 : 1,
        $b = -1 < f ? 0 : 1,
        ub = d.length;
    for (g = 0; g < ub; g++, c += a.g + a.e)
        if (u = d.charCodeAt(g) - 32, 0 != u) {
            96 <= u && (u = 31);
            0 != a.i && (c -= Zh[a.i - 1][u]);
            F = u * a.g;
            t = b * screenWidth + c;
            for (n = 0; n < a.n; n++, t += $, F += Ca)
                for (m = 0; m < a.g; m++, t++, F++) M = a.l.a[F], M == Pb ? v[t] = e : M == $b && (v[t] = f);
            0 != a.i && (c -= $screenWidth[a.i - 1][u])
        } a.e = 0;
    a.i = 0
}

function tf(a, c, b, d) {
    var e = fontImage;
    a -= b.length * (e.g + e.e) - e.e >> 1;
    c -= e.n >> 1;
    drawTextUsingImage(e, a, c, b, d, 0)
}

function drawCompositeTextUsingImage(a, c, b, d, e, f) {
    var g = fontImage;
    g.e = f;
    drawTextUsingImage(g, a, c, b, d, e);
    g.e = 0
}
var bi = 0;

function lf(a, c, b, d, e) {
    var f = ~~b - ~~a,
        g = ~~d - ~~c,
        m = max(max(abs(f), abs(g)), 1),
        f = floor((f << 8) / m),
        g = floor((g << 8) / m);
    a = (a << 8) + 127;
    c = (c << 8) + 127;
    for (var n = 0; n <= m; n++, a += f, c += g) b = a >> 8, d = c >> 8, 0 > b || screenWidth <= b || 0 > d || screenHeight <= d || (v[(d << 9) + b] = e)
}

function vf(a, c, b, d) {
    var e = 18;
    b--;
    e--;
    lf(a, c, a + b, c, d);
    lf(a, c + e, a + b, c + e, d);
    lf(a, c, a, c + e, d);
    lf(a + b, c, a + b, c + e, d)
}

function oe(a, c, b, d, e) {
    var f;
    b = a + b > screenWidth ? screenWidth : ~~(a + b);
    d = c + d > screenHeight ? screenHeight : ~~(c + d);
    a = 0 > a ? 0 : ~~a;
    c = (0 > c ? 0 : ~~c) * screenWidth + a;
    f = screenWidth - (b - a);
    b = c + b - a;
    d *= screenWidth;
    if (0 == bi)
        for (; c < d; c += f, b += screenWidth)
            for (; c < b; c++) v[c] = e;
    else
        for (; c < d; c += f, b += screenWidth)
            for (; c < b; c++) {
                a = v[c];
                var g = e >> 24 & 255,
                    m = bi,
                    n = void 0,
                    t = 0,
                    u = 0,
                    n = 0;
                1 == m ? (n = a >> 16 & 255, t = (((e >> 16 & 255) - n) * g >> 8) + n, n = a >> 8 & 255, u = (((e >> 8 & 255) - n) * g >> 8) + n, n = a & 255, n = (((e & 255) - n) * g >> 8) + n) : 2 == m ? (t = ((e >> 16 & 255) * g >> 8) + (a >> 16 & 255), 255 < t && (t = 255), u = ((e >> 8 & 255) * g >> 8) + (a >> 8 & 255), 255 < u && (u = 255), n = ((e & 255) * g >> 8) + (a & 255), 255 < n &&
                    (n = 255)) : 3 == m ? (t = (a >> 16 & 255) - ((e >> 16 & 255) * g >> 8), 0 > t && (t = 0), u = (a >> 8 & 255) - ((e >> 8 & 255) * g >> 8), 0 > u && (u = 0), n = (a & 255) - ((e & 255) * g >> 8), 0 > n && (n = 0)) : 4 == m ? (t = (e >> 16 & 255) * (a >> 16 & 255) >> 8, u = (e >> 8 & 255) * (a >> 8 & 255) >> 8, n = (e & 255) * (a & 255) >> 8) : 5 == m ? (n = a >> 16 & 255, t = n + ((e >> 16 & 255) * n * g >> 16), 255 < t && (t = 255), n = a >> 8 & 255, u = n + ((e >> 8 & 255) * n * g >> 16), 255 < u && (u = 255), n = a & 255, n += (e & 255) * n * g >> 16, 255 < n && (n = 255)) : 6 == m && (n = a >> 16 & 255, t = n + (g - (2 * n * g >> 8)), n = a >> 8 & 255, u = n + (g - (2 * n * g >> 8)), n = a & 255, n += g - (2 * n * g >> 8));
                v[c] = t << 16 | u << 8 | n
            }
}

function kf(a, c, b, d, e) {
    var f = imageHandlerForScreen,
        g = 8,
        m = 496,
        n = 496 >> ra,
        t, u;
    if (0 != m && 0 != c)
        for (n = ~~((n << 8) / m), e = ~~((e << 8) / c), b <<= 8, d <<= 8, 0 > g && (b += n * -g), 0 > a && (d += e * -a), m = g + m > screenWidth ? screenWidth : ~~(g + m), c = a + c > screenHeight ? screenHeight : ~~(a + c), g = 0 > g ? 0 : ~~g, a = (0 > a ? 0 : ~~a) * screenWidth + g, t = screenWidth - (m - g), m = a + m - g, c *= screenWidth; a < c; a += t, m += screenWidth, d += e)
            for (g = ((d >> 8) * f.b << 8) + b; a < m; a++, g += n) u = f.a[g >> 8], v[a] = u
}

function xf(a, c, b, d, e, f, g, m) {
    var n, t, u, F, M;
    f = floor((f << 8) / d);
    g = floor((g << 8) / e);
    t = n = 0;
    0 > c && (n += f * -c);
    0 > b && (t += g * -b);
    d = c + d > screenWidth ? screenWidth : floor(c + d);
    e = b + e > screenHeight ? screenHeight : floor(b + e);
    c = 0 > c ? 0 : floor(c);
    b = 0 > b ? 0 : floor(b);
    for (var $ = m >> 16 & 255, Ca = m >> 8 & 255, Pb = m & 255, $b, ub; b < e; b++, t += g)
        for (u = b * screenWidth + c, F = ((t >> 8) * a.b << 8) + n, m = c; m < d; m++, u++, F += f) M = a.a[F >> 8], -1 != M && ($b = $ * (M >> 16 & 255) >> 8, ub = Ca * (M >> 8 & 255) >> 8, M = Pb * (M & 255) >> 8, v[u] = $b << 16 | ub << 8 | M)
}

function uf(a) {
    var c = rb.f;
    xf(rb, 256 - (c >> 1), a - 8, c, 16, rb.f, 16, 0)
}
var $e = new Vector,
    Ke = false,
    trueAfterMouseUpButOnlyForOneTick = false,
    We = false,
    Sh = false,
    Oe = false,
    Ve = false,
    Xe = false,
    moreThanOneTouches = false,
    Je = false,
    Pe = 0,
    Ne = 0,
    Ie = 0,
    Qf = 0,
    Rf = 0,
    distanceXFromTopScreen = 0,
    distanceYFromTopScreen = 0;

function Me(a, c, b, d) {
    return Ne < a || a + b <= Ne || Ie < c || c + d <= Ie ? false : true
}

function ci(a) {
    var c = canvasElement.getBoundingClientRect();
    distanceXFromTopScreen = floor(a.clientX - c.left);
    distanceYFromTopScreen = floor(a.clientY - c.top)
}
document.onmousemove = ci;
document.onmousedown = function(a) {
    ci(a);
    di = false;
    if (!(0 > distanceXFromTopScreen || screenWidth <= distanceXFromTopScreen || 0 > distanceYFromTopScreen || screenHeight <= distanceYFromTopScreen) && (di = true, 0 == a.button && (Sh = true), 2 == a.button && (moreThanOneTouches = true), di)) return false
};
document.onmouseup = function(a) {
    ci(a);
    0 == a.button && (Sh = false);
    2 == a.button && (moreThanOneTouches = false)
};
document.oncontextmenu = function() {
    if (di) return false
};

function saveTouchPosition(a) {
    for (var c = 0, b = 0, d = canvasElement; null !== d; d = d.offsetParent) c += d.offsetLeft, b += d.offsetTop;
    a = a.touches;
    distanceXFromTopScreen = floor(a[0].pageX - c);
    distanceYFromTopScreen = floor(a[0].pageY - b)
}
canvasElement.ontouchstart = function(a) {
    saveTouchPosition(a);
    Sh = true;
    1 < a.touches.length && (moreThanOneTouches = true);
    return false
};
canvasElement.ontouchmove = function(a) {
    saveTouchPosition(a);
    return false
};
canvasElement.ontouchend = function(a) {
    1 > a.touches.length && (Sh = false);
    return moreThanOneTouches = false
};
canvasElement.ontouchcancel = function() {
    moreThanOneTouches = Sh = false
};
var Qd = Array(256),
    Rd = Array(256),
    Sd = Array(256),
    Td = Array(256),
    Ud = Array(256),
    Vd = Array(256),
    Wd = Array(256),
    Xd = Array(256);
document.onkeydown = function(a) {
    var c = a.keyCode;
    65 <= c & 90 >= c ? a.shiftKey || (c += 32) : c = a.shiftKey ? Xd[c] : Wd[c];
    0 <= c && 256 > c && (Sd[c] = true, Rd[c] = true);
    if (0 != c && di) return false
};
document.onkeyup = function(a) {
    var c = a.keyCode;
    65 <= c & 90 >= c ? a.shiftKey || (c += 32) : c = a.shiftKey ? Xd[c] : Wd[c];
    0 <= c && 256 > c && (Sd[c] = false);
    if (0 != c && di) return false
};
var di = false;

function callPrompt(a, c) {
    var b = null;
    try {
        b = prompt(a, c)
    } catch (d) {}
    return b
}
var ne = Array(100),
    me = 0;

function AjaxRequest(a, c) {
    for (var b = me = 0; 100 > b; b++) ne[b] = "";
    try {
        var d = new XMLHttpRequest;
        d.onreadystatechange = function() {
            if (4 == d.readyState)
                if (200 == d.status) {
                    var a, b, c = 0,
                        e = d.responseText.length;
                    for (a = 0; a < e; a++)
                        if (b = d.responseText[a], b == "=") {
                            for (a += 1; a < e; a++) {
                                b = d.responseText[a];
                                if (b == "\n") break;
                                ne[c] += b
                            }
                            c++
                        } else
                            for (; a < e && d.responseText[a] != "\n"; a++);
                    me = 1
                } else me = -1
        };
        d.open("POST", a, false);
        d.setRequestHeader("Content-Type", "application/x-www-form-urlencoded");
        d.send(c)
    } catch (e) {
        me = -2
    }
}
function Vector() {
    this.y = this.x = 0
}
Vector.prototype.set = function(a) {
    this.x = a.x;
    this.y = a.y;
    return this
};
function setToVector(a, c, b) {
    a.x = c;
    a.y = b
}
Vector.prototype.add = function(a) {
    this.x += a.x;
    this.y += a.y;
    return this
};
Vector.prototype.sub = function(a) {
    this.x -= a.x;
    this.y -= a.y;
    return this
};
function vectorSub(a, c, b) {
    a.x = c.x - b.x;
    a.y = c.y - b.y
}
function vectorScale(a, c) {
    a.x *= c;
    a.y *= c
}
function rotatePointAroundCenter90Degrees(a) {
    var c = a.x;
    a.x = a.y;
    a.y = -c
}
function vectorLength2(a) {
    return Math.sqrt(a.x * a.x + a.y * a.y)
}
function fastLength(a) {
    return a.x * a.x + a.y * a.y
}
function vectorLength(a) {
    return Math.sqrt(a.x * a.x + a.y * a.y)
}
function normalize(a) {
    var c = vectorLength2(a);
    if (0 == c) return 0;
    a.x /= c;
    a.y /= c;
    return c
}
function normalize2(a) {
    var c = vectorLength(a);
    if (0 == c) return 0;
    a.x /= c;
    a.y /= c;
    return c
}
function getAngle(a) {
    var c = Math.acos(a.x / Math.sqrt(a.x * a.x + a.y * a.y));
    0 < a.y && (c = TWOPI - c);
    return c
}
var Yd = new Float32Array(1024),
    Zd = 0,
    $d = 0;

function customRandom2(a) {
    Zd += $d;
    Zd &= 1023;
    return Yd[Zd] * a
}

function customRandomBetween(a, c) {
    Zd += $d;
    Zd &= 1023;
    return Yd[Zd] * (c - a) + a
}

function customRandomBoolean(a) {
    Zd += $d;
    Zd &= 1023;
    return Yd[Zd] < a ? true : false
}

function customRandom(a) {
    Zd += $d;
    Zd &= 1023;
    return ~~(Yd[Zd] * a)
}
var PI = 3.1415927,
    TWOPI = 6.2831855;

function abs(a) {
    return 0 > a ? -a : a
}

function max(a, c) {
    return a > c ? a : c
}

function min(a, c) {
    return a < c ? a : c
}

function minInsideRange(a, c, b) {
    return a < c ? c : a > b ? b : a
}

function returnBetween0_MAX(a, c) {
    return 0 > a ? c : a > c ? 0 : a
}

function floor(a) {
    return Math.floor(a)
};