(window.webpackJsonp = window.webpackJsonp || []).push([[6], {
    193: function(e, t, s) {
        "use strict";
        s.r(t);
        var a = s(63)
          , i = s(5)
          , r = s(24)
          , n = s(20)
          , o = s(34)
          , p = s(196)
          , l = s(53)
          , u = s(43)
          , c = s(11)
          , d = s(54)
          , y = s(9)
          , h = s(158)
          , v = s(214)
          , g = s.n(v)
          , w = s(215)
          , m = s.n(w);
        class b extends y.a {
            constructor(e) {
                super(Object.assign({
                    name: "Message",
                    log: 0,
                    template: g.a,
                    styles: m.a
                }, e)),
                this.tweens = {},
                this.preventShaking = [l.a],
                this.props.showDelay = this.props.showDelay || 10,
                this.props.autoShow = !1 !== this.props.autoShow
            }
            afterMount() {
                super.afterMount(),
                this.data.palette && this.nodes.main.classList.toggle(this.data.palette + "-palette", !0),
                this.props.autoShow && u.a.delayedCall(this.props.showDelay, () => this.show()),
                this._initTweens()
            }
            onSeedChange() {
                this.currentPalette !== r.a.currentSeed.current.sceneData.current.palette && (this.body.classList.toggle(this.currentPalette + "-palette", !1),
                this.currentPalette = r.a.currentSeed.current.sceneData.current.palette,
                this.body.classList.toggle(this.currentPalette + "-palette", !0))
            }
            hide() {
                return this._hiding = !0,
                new Promise(e => {
                    this.tweens.hide.call( () => e()).play()
                }
                )
            }
            show() {
                if (!this._hiding && this.nodes)
                    return new Promise(e => {
                        u.a.to(this.nodes.main, .6, {
                            y: "0%",
                            ease: c.e.easeInOut,
                            onComplete: () => e()
                        })
                    }
                    )
            }
            onClick() {
                h.a.event({
                    type: "mmEvent",
                    category: "plant",
                    action: "click_social_seed_8"
                })
            }
            _initTweens() {
                this.tweens.hide = new d.a({
                    paused: !0
                }),
                this.tweens.hide.to(this.nodes.main, .6, {
                    y: "110%",
                    ease: c.e.easeInOut
                })
            }
        }
        var x = s(75)
          , T = s(35)
          , f = s(30)
          , k = s(6)
          , _ = s(210)
          , S = s.n(_)
          , I = s(211)
          , C = s.n(I)
          , O = (s(58),
        s(13))
          , D = s(195)
          , j = s(157)
          , L = s(62)
          , P = s(3)
          , R = s(19)
          , U = s(212)
          , z = s.n(U)
          , N = s(213)
          , M = s.n(N);
        const B = Object(P.a)(!1)
          , W = e => e.toString().padStart(2, "0");
        class H extends y.a {
            constructor({seedStore: e}) {
                super({
                    template: z.a,
                    styles: M.a
                }),
                this.waitSave = !1,
                this.storeListeners = [],
                this.store = {
                    opened: B,
                    seed: e,
                    computed: {
                        time: Object(P.a)(0),
                        plantable: Object(P.a)(0),
                        unlockCond: Object(P.a)(0),
                        startable: Object(P.a)(0),
                        customRules: Object(P.a)(0)
                    }
                }
            }
            afterRender() {
                this.store.computed.customRules.set(!!o.a.rules.current.isCustom),
                this.addStoreListener(null, this.store.seed.level, "updatePlantable"),
                this.addStoreListener(null, this.store.seed.unlocked, "updatePlantable"),
                this.addStoreListener(null, r.a.starterChosen, "onStarter");
                const e = this.store.seed.settings.current.unlock_conditions[0]
                  , t = Object.keys(e)[0]
                  , s = Object.values(e)[0];
                this.store.computed.unlockCond.set(t + ": " + s),
                super.afterRender(),
                B.current ? this.open() : this.close(),
                o.a.saving.subscribe(this.onSavingUpdate, this)
            }
            destroy() {
                o.a.saving.unsubscribe(this.onSavingUpdate, this),
                super.destroy()
            }
            onSavingUpdate() {
                o.a.saving.current || (this.waitSave = !1)
            }
            updateTime(e, t) {
                e.textContent = this.formatDate(t);
                const s = Object(R.a)();
                ["sun", "water", "love"].forEach(e => {
                    const t = this.store.seed.resources[e].nextQueryDate.current;
                    this.nodes[e + "NextQuery"].textContent = s >= t ? "None" : this.formatDate(t - s)
                }
                )
            }
            formatDate(e) {
                return W(Math.floor(e / 3600)) + ":" + W(Math.floor(e % 3600 / 60)) + ":" + W(e % 3600 % 60)
            }
            updateQuery(e, t) {
                e.textContent = t ? t.received + " / " + t.asked : "None"
            }
            nextQueryDate(e, t) {
                r.a.playTime.current > t && (e.textContent = "none"),
                e.textContent = new Date(1e3 * t)
            }
            updatePlantable(e) {
                const t = this.store.seed.level.current;
                this.store.computed.plantable.set(!!(t < 1 && this.store.seed.unlocked.current))
            }
            wait(e) {
                L.a.timeOffset.update(t => t + parseInt(60 * e)),
                O.a.requestSave(),
                D.a.update()
            }
            wait10min() {
                this.wait(10)
            }
            wait1hour() {
                this.wait(60)
            }
            wait1day() {
                this.wait(1440)
            }
            onStarter(e, t) {
                this.store.computed.startable.set(this.store.seed.settings.current.starter && this.store.seed.level.current < 1 && !t)
            }
            unlock(e) {
                e.preventDefault(),
                j.a.unlock(this.store.seed.id.current)
            }
            plant(e) {
                e.preventDefault(),
                j.a.plant(this.store.seed.id.current)
            }
            chooseStarter(e) {
                e.preventDefault(),
                j.a.chooseStarter(this.store.seed.id.current)
            }
            evolve(e) {
                if (!this.store.seed.unlocked.current)
                    return this.unlock(e);
                if (r.a.id.current) {
                    if (this.waitSave)
                        return;
                    this.waitSave = !0,
                    j.a.evolveSeed(this.store.seed.id.current),
                    O.a.save()
                } else
                    j.a.evolveSeed(this.store.seed.id.current)
            }
            regress(e) {
                if (r.a.id.current) {
                    if (this.waitSave)
                        return;
                    this.waitSave = !0,
                    j.a.regressSeed(this.store.seed.id.current),
                    O.a.save()
                } else
                    j.a.regressSeed(this.store.seed.id.current)
            }
            reset() {
                O.a.resetSave()
            }
            resetRules() {
                D.a.removeCustomRules()
            }
            lockLevelUp(e, t) {
                t >= 4 ? e.setAttribute("disabled", "") : e.removeAttribute("disabled")
            }
            lockLevelDown(e, t) {
                t >= 1 ? e.setAttribute("disabled", "") : e.removeAttribute("disabled")
            }
            close() {
                this.store.opened.set(!1),
                this.nodes.main.classList.add("closed")
            }
            open() {
                this.store.opened.set(!0),
                this.nodes.main.classList.remove("closed")
            }
        }
        var Q = s(51);
        s.d(t, "default", function() {
            return V
        });
        class V extends x.a {
            constructor({id: e, routeParams: t}) {
                super({
                    title: "seeds",
                    template: S.a,
                    styles: C.a,
                    id: e,
                    routeParams: t,
                    log: 0
                }),
                this.tweens = {},
                this.preventShaking = [a.b],
                this.currentSeed = r.a.getSeedById(t.id),
                this.contents = Object(k.a)(`seeds.${this.currentSeed.id.current}`),
                this.title = this.currentSeed.level.current > 0 ? this.contents.name : this.contents.seed_name,
                this.data.level = this.currentSeed.level.current,
                this.data.description = this.contents.description,
                this.visibility = {
                    x: 0,
                    opacity: 0,
                    mix: 0
                }
            }
            afterRender() {
                super.afterRender(),
                r.a.currentSeed.current || r.a.currentSeed.set(this.currentSeed)
            }
            afterMount() {
                super.afterMount(),
                this._mountSubComponents(),
                this._initTweens(),
                p.a.play("music_loop"),
                p.a.stop("bucket_rain_loop"),
                "seed" === n.a.routeStatus.current.from.id && this.tweens.headerToggle.progress(1),
                n.a.seedUiVisible.subscribe(this._toggleHeader, this),
                o.a.blobOffset.subscribe(this._updateHeaderVisibility, this),
                this.currentSeed.level.subscribe(this._onCurrentSeedLevel, this)
            }
            beforeDestroy() {
                super.beforeDestroy(),
                n.a.seedUiVisible.unsubscribe(this._toggleHeader, this),
                o.a.blobOffset.unsubscribe(this._updateHeaderVisibility, this),
                this.currentSeed.level.unsubscribe(this._onCurrentSeedLevel, this),
                this.currentSeed.unlocked.unsubscribe(this._onSeedUnlocked, this)
            }
            enter() {
                super.enter(),
                this.tweens.headerIn.play(),
                h.a.event({
                    type: "mmPageview",
                    value: `/${Object(f.a)(this.currentSeed.id.current)}`
                })
            }
            exit() {
                this.frozenBlob = this._getBlobOffset(),
                Promise.resolve().then( () => this.currentInstruction && this.currentInstruction.hide()).then( () => this._hideHeader()).then( () => super.exit())
            }
            _onCurrentSeedLevel(e) {
                e > 0 && (this.currentInstruction === this.plantInstruction && this.plantInstruction && (this.plantInstruction.hide(),
                this.currentInstruction = null),
                a.d.delayedCall(.4, () => {
                    this._mountSeedTitle(this.contents.name),
                    this.nodes.seedDesc && this.nodes.seedDesc.classList.add("is-hidden")
                }
                ))
            }
            _mountSubComponents() {
                this._mountSeedTitle(this.title),
                this.seedDebug = this.addComponent(H, {
                    seedStore: this.currentSeed
                }).mount(document.body),
                this._prepareInstructions()
            }
            _prepareInstructions() {
                const e = this.currentSeed.id.current
                  , t = Q.a[e].palette;
                0 === this.currentSeed.level.current && (this.plantInstruction = this.addComponent(b, {
                    autoShow: this.currentSeed.unlocked.current,
                    showDelay: .75,
                    data: {
                        modifiers: "verveine" === e ? "wide" : "",
                        palette: t,
                        text: Object(k.a)("interface.how_to_unlock.plant")
                    }
                }).mount(this.nodes.main),
                this.currentInstruction = this.plantInstruction),
                this.currentSeed.unlocked.current || (this.unlockInstruction = this.addComponent(b, {
                    showDelay: n.a.routeStatus.current.from.id ? .75 : 2,
                    data: {
                        modifiers: "verveine" === e ? "wide" : "",
                        palette: t,
                        text: Object(k.a)(`interface.how_to_unlock.seed_${e}`),
                        link: Object(k.a)(`interface.how_to_unlock.seed_${e}_link`, !1),
                        cta: Object(k.a)(`interface.how_to_unlock.seed_${e}_cta`, !1)
                    }
                }).mount(this.nodes.main),
                this.currentInstruction = this.unlockInstruction,
                this.currentSeed.unlocked.subscribe(this._onSeedUnlocked, this))
            }
            _onSeedUnlocked() {
                this.currentSeed.unlocked.current && this.unlockInstruction.hide().then( () => {
                    this.plantInstruction.show(),
                    this.currentInstruction = this.plantInstruction
                }
                )
            }
            _mountSeedTitle(e) {
                e && (this.seedTitle && this.seedTitle.destroy(),
                this.seedTitle = this.addComponent(T.a, {
                    data: {
                        text: e,
                        modifiers: "white"
                    }
                }).mount(e => this.nodes.headerWrapper.prepend(e)))
            }
            _initTweens() {
                this.tweens.headerToggle = new a.c({
                    paused: !0
                }),
                this.tweens.headerToggle.fromTo(this.nodes.headerWrapper, .5, {
                    y: "-100%"
                }, {
                    y: "0%",
                    ease: a.a.easeInOut.config(1.5)
                }),
                this.hideResolve = null,
                this.hideFinished = new Promise(e => this.hideResolve = e),
                this.tweens.headerIn = a.d.to(this.visibility, .9, {
                    mix: 1,
                    onUpdate: this._updateHeaderVisibility
                }).pause()
            }
            _updateHeaderVisibility() {
                if (this.destroyed || !this.nodes.headerWrapper)
                    return;
                const e = this._getBlobOffset()
                  , t = this.visibility.opacity;
                let s = Object(i.lerp)(0, e, this.visibility.mix);
                s < .001 ? s = 0 : s > .999 && (s = 1),
                s !== t && (this.visibility.opacity = s,
                this.guideText || (this.guideText = document.querySelector(".guide .title__text")),
                a.d.set([this.nodes.headerWrapper, this.guideText], {
                    opacity: s
                }),
                this.currentInstruction)
            }
            _toggleHeader(e) {
                if ("seed" === n.a.routeStatus.current.from.id && "game" === n.a.routeStatus.current.to.id)
                    return;
                const t = e || n.a.seedUiVisible.current;
                this.tweens.headerToggle && this.tweens.headerToggle[t ? "play" : "reverse"]()
            }
            _hideHeader() {
                return new Promise(e => {
                    "game" === n.a.routeStatus.current.to.id ? this.tweens.headerToggle.eventCallback("onReverseComplete", () => e()).reverse() : e()
                }
                )
            }
            _getBlobOffset() {
                const e = 1 - Object(i.clamp)(Math.abs(3.5 * o.a.blobOffset.current), 0, 1);
                return void 0 !== this.frozenBlob ? this.frozenBlob = Math.min(this.frozenBlob, e) : e
            }
        }
    },
    210: function(e, t, s) {
        var a = (0,
        s(10).twig)({
            allowInlineIncludes: !0,
            data: [{
                type: "raw",
                value: '<section class="seed  view  view--Seed">\n\t<header class="seed__header">\n\t\t<div class="seed__header-inner  wrapper" ref="headerWrapper">'
            }, {
                type: "logic",
                token: {
                    type: "Twig.logic.type.if",
                    stack: [{
                        type: "Twig.expression.type.variable",
                        value: "level",
                        match: ["level"]
                    }, {
                        type: "Twig.expression.type.number",
                        value: 1,
                        match: ["1", null]
                    }, {
                        type: "Twig.expression.type.operator.binary",
                        value: "<",
                        precidence: 8,
                        associativity: "leftToRight",
                        operator: "<"
                    }],
                    output: [{
                        type: "raw",
                        value: '<div class="seed__desc" ref="seedDesc">\n\t\t\t\t\t<p>'
                    }, {
                        type: "output_whitespace_both",
                        stack: [{
                            type: "Twig.expression.type.variable",
                            value: "description",
                            match: ["description"]
                        }]
                    }, {
                        type: "raw",
                        value: "</p>\n\t\t\t\t</div>"
                    }]
                }
            }, {
                type: "raw",
                value: "\n\t\t</div>\n\t</header>\n</section>\n"
            }],
            id: "src/views/seed/seed.twig",
            rethrow: !0
        });
        e.exports = function(e) {
            return a.render(e)
        }
        ,
        e.exports.id = "src/views/seed/seed.twig",
        e.exports.default = e.exports
    },
    211: function(e, t, s) {},
    212: function(e, t, s) {
        var a = (0,
        s(10).twig)({
            allowInlineIncludes: !0,
            data: [{
                type: "raw",
                value: '<aside class="seed-debug">\n\n\t<div data-store="opened->toggle:1">\n\t\t'
            }, {
                type: "logic",
                token: {
                    type: "Twig.logic.type.if",
                    stack: [{
                        type: "Twig.expression.type.variable",
                        value: "env",
                        match: ["env"]
                    }, {
                        type: "Twig.expression.type.string",
                        value: "dev"
                    }, {
                        type: "Twig.expression.type.operator.binary",
                        value: "==",
                        precidence: 9,
                        associativity: "leftToRight",
                        operator: "=="
                    }],
                    output: [{
                        type: "raw",
                        value: '\n\t\t<ul>\n\t\t\t<li>Days played: <span data-store="PlayerStore.daysCount"></span></li>\n\t\t\t<li>Time: <span data-store="PlayerStore.playTime->updateTime"></span></li>\n\t\t\t<li>Water: <span data-store="PlayerStore.resources.water.amount"></span></li>\n\t\t\t<li>Sun: <span data-store="PlayerStore.resources.sun.amount"></span></li>\n\t\t</ul>\n\n\n\t\t<ul>\n\t\t\t<li>Name: <span data-store="seed.id"></span></li>\n\t\t\t<li>Level: <span data-store="seed.level"></span></li>\n\t\t</ul>\n\n\t\t<ul>\n\t\t\t'
                    }, {
                        type: "logic",
                        token: {
                            type: "Twig.logic.type.for",
                            key_var: null,
                            value_var: "resource",
                            expression: [{
                                type: "Twig.expression.type.array.start",
                                value: "[",
                                match: ["["]
                            }, {
                                type: "Twig.expression.type.string",
                                value: "sun"
                            }, {
                                type: "Twig.expression.type.comma"
                            }, {
                                type: "Twig.expression.type.string",
                                value: "water"
                            }, {
                                type: "Twig.expression.type.comma"
                            }, {
                                type: "Twig.expression.type.string",
                                value: "love"
                            }, {
                                type: "Twig.expression.type.array.end",
                                value: "]",
                                match: ["]"]
                            }],
                            output: [{
                                type: "raw",
                                value: "\t\t\t<li>\n\t\t\t\t"
                            }, {
                                type: "output",
                                stack: [{
                                    type: "Twig.expression.type.variable",
                                    value: "resource",
                                    match: ["resource"]
                                }, {
                                    type: "Twig.expression.type.filter",
                                    value: "capitalize",
                                    match: ["|capitalize", "capitalize"]
                                }]
                            }, {
                                type: "raw",
                                value: ' Amount:\n\t\t\t\t<span data-store="seed.resources.'
                            }, {
                                type: "output",
                                stack: [{
                                    type: "Twig.expression.type.variable",
                                    value: "resource",
                                    match: ["resource"]
                                }]
                            }, {
                                type: "raw",
                                value: '.amount"></span>\n\t\t\t\t/\n\t\t\t\t<span data-store="seed.resources.'
                            }, {
                                type: "output",
                                stack: [{
                                    type: "Twig.expression.type.variable",
                                    value: "resource",
                                    match: ["resource"]
                                }]
                            }, {
                                type: "raw",
                                value: '.goal"></span>\n\t\t\t</li>\n\t\t\t'
                            }]
                        }
                    }, {
                        type: "raw",
                        value: "\t\t</ul>\n\n\t\t<ul>\n\t\t\t"
                    }, {
                        type: "logic",
                        token: {
                            type: "Twig.logic.type.for",
                            key_var: null,
                            value_var: "resource",
                            expression: [{
                                type: "Twig.expression.type.array.start",
                                value: "[",
                                match: ["["]
                            }, {
                                type: "Twig.expression.type.string",
                                value: "sun"
                            }, {
                                type: "Twig.expression.type.comma"
                            }, {
                                type: "Twig.expression.type.string",
                                value: "water"
                            }, {
                                type: "Twig.expression.type.comma"
                            }, {
                                type: "Twig.expression.type.string",
                                value: "love"
                            }, {
                                type: "Twig.expression.type.array.end",
                                value: "]",
                                match: ["]"]
                            }],
                            output: [{
                                type: "raw",
                                value: "\t\t\t<li>\n\t\t\t\t"
                            }, {
                                type: "output",
                                stack: [{
                                    type: "Twig.expression.type.variable",
                                    value: "resource",
                                    match: ["resource"]
                                }, {
                                    type: "Twig.expression.type.filter",
                                    value: "capitalize",
                                    match: ["|capitalize", "capitalize"]
                                }]
                            }, {
                                type: "raw",
                                value: ' Query:\n\t\t\t\t<span data-store="seed.resources.'
                            }, {
                                type: "output",
                                stack: [{
                                    type: "Twig.expression.type.variable",
                                    value: "resource",
                                    match: ["resource"]
                                }]
                            }, {
                                type: "raw",
                                value: '.query->updateQuery"></span>\n\t\t\t</li>\n\t\t\t'
                            }]
                        }
                    }, {
                        type: "raw",
                        value: "\t\t</ul>\n\n\t\t<ul>\n\t\t\t"
                    }, {
                        type: "logic",
                        token: {
                            type: "Twig.logic.type.for",
                            key_var: null,
                            value_var: "resource",
                            expression: [{
                                type: "Twig.expression.type.array.start",
                                value: "[",
                                match: ["["]
                            }, {
                                type: "Twig.expression.type.string",
                                value: "sun"
                            }, {
                                type: "Twig.expression.type.comma"
                            }, {
                                type: "Twig.expression.type.string",
                                value: "water"
                            }, {
                                type: "Twig.expression.type.comma"
                            }, {
                                type: "Twig.expression.type.string",
                                value: "love"
                            }, {
                                type: "Twig.expression.type.array.end",
                                value: "]",
                                match: ["]"]
                            }],
                            output: [{
                                type: "raw",
                                value: "\t\t\t<li>\n\t\t\t\t"
                            }, {
                                type: "output",
                                stack: [{
                                    type: "Twig.expression.type.variable",
                                    value: "resource",
                                    match: ["resource"]
                                }, {
                                    type: "Twig.expression.type.filter",
                                    value: "capitalize",
                                    match: ["|capitalize", "capitalize"]
                                }]
                            }, {
                                type: "raw",
                                value: ' next Query:\n\t\t\t\t<span ref="'
                            }, {
                                type: "output",
                                stack: [{
                                    type: "Twig.expression.type.variable",
                                    value: "resource",
                                    match: ["resource"]
                                }]
                            }, {
                                type: "raw",
                                value: 'NextQuery"></span>\n\t\t\t</li>\n\t\t\t'
                            }]
                        }
                    }, {
                        type: "raw",
                        value: '\t\t</ul>\n\n\t\t<ul data-store="seed.unlocked->toggle:0">\n\t\t\t<li>\n\t\t\t\tLocked – <span data-store="computed.unlockCond"></span>\n\t\t\t</li>\n\t\t</ul>\n\n\t\t'
                    }]
                }
            }, {
                type: "raw",
                value: '\n\t\t<ul class="seed-debug__buttons">\n\t\t\t<li data-store="computed.customRules->toggle:1">\n\t\t\t\t<button data-bypass-touch data-event="click->resetRules">Reset Rules</button>\n\t\t\t</li>\n\t\t\t<li>\n\t\t\t\t<button data-bypass-touch data-event="click->reset">Reset Save</button>\n\t\t\t</li>\n\t\t\t<li>\n\t\t\t\t<button data-bypass-touch data-event="click->wait10min">Wait 10 min</button>\n\t\t\t</li>\n\t\t\t<li>\n\t\t\t\t<button data-bypass-touch data-event="click->wait1hour">Wait 1 hour</button>\n\t\t\t</li>\n\t\t\t<li>\n\t\t\t\t<button data-bypass-touch data-event="click->wait1day">Wait 1 day</button>\n\t\t\t</li>\n\t\t\t<li data-store="seed.unlocked->toggle:0">\n\t\t\t\t<button data-bypass-touch data-event="click->unlock">Unlock</button>\n\t\t\t</li>\n\t\t\t<li data-store="computed.plantable->toggle:1">\n\t\t\t\t<button data-bypass-touch data-event="click->plant">Plant</button>\n\t\t\t</li>\n\t\t\t<li data-store="seed.level->lockLevelUp">\n\t\t\t\t\t<button data-bypass-touch data-event="click->evolve">Level UP</button>\n\t\t\t</li>\n\t\t\t<li data-store="seed.level->lockLevelDown">\n\t\t\t\t<button data-bypass-touch data-event="click->regress">Level DOWN</button>\n\t\t\t</li>\n\t\t\t<li data-store="computed.startable->toggle:1">\n\t\t\t\t<button data-bypass-touch data-event="click->chooseStarter">Choose Starter</button>\n\t\t\t</li>\n\n\t\t</ul>\n\t</div>\n\n\t<ul class="seed-debug__controls">\n\t\t<li data-store="opened->toggle:1">\n\t\t\t<button data-bypass-touch data-event="click->close">Close</button>\n\t\t</li>\n\t\t<li data-store="opened->toggle:0">\n\t\t\t<button data-bypass-touch data-event="click->open">Controls</button>\n\t\t</li>\n\t</ul>\n\n</aside>\n'
            }],
            id: "src/views/seed/components/SeedDebug/seed-debug.twig",
            rethrow: !0
        });
        e.exports = function(e) {
            return a.render(e)
        }
        ,
        e.exports.id = "src/views/seed/components/SeedDebug/seed-debug.twig",
        e.exports.default = e.exports
    },
    213: function(e, t, s) {},
    214: function(e, t, s) {
        s(76),
        s(159);
        var a = (0,
        s(10).twig)({
            allowInlineIncludes: !0,
            data: [{
                type: "logic",
                token: {
                    type: "Twig.logic.type.set",
                    key: "modifiers",
                    expression: [{
                        type: "Twig.expression.type.variable",
                        value: "modifiers",
                        match: ["modifiers"]
                    }, {
                        type: "Twig.expression.type.filter",
                        value: "default",
                        match: ["|default", "default"],
                        params: [{
                            type: "Twig.expression.type.parameter.start",
                            value: "(",
                            match: ["("]
                        }, {
                            type: "Twig.expression.type.string",
                            value: "blue"
                        }, {
                            type: "Twig.expression.type.parameter.end",
                            value: ")",
                            match: [")"],
                            expression: !1
                        }]
                    }, {
                        type: "Twig.expression.type.filter",
                        value: "split",
                        match: ["|split", "split"],
                        params: [{
                            type: "Twig.expression.type.parameter.start",
                            value: "(",
                            match: ["("]
                        }, {
                            type: "Twig.expression.type.string",
                            value: ", "
                        }, {
                            type: "Twig.expression.type.parameter.end",
                            value: ")",
                            match: [")"],
                            expression: !1
                        }]
                    }]
                }
            }, {
                type: "logic",
                token: {
                    type: "Twig.logic.type.set",
                    key: "classNames",
                    expression: [{
                        type: "Twig.expression.type.array.start",
                        value: "[",
                        match: ["["]
                    }, {
                        type: "Twig.expression.type.array.end",
                        value: "]",
                        match: ["]"]
                    }]
                }
            }, {
                type: "raw",
                value: "\n"
            }, {
                type: "logic",
                token: {
                    type: "Twig.logic.type.for",
                    key_var: null,
                    value_var: "item",
                    expression: [{
                        type: "Twig.expression.type.variable",
                        value: "modifiers",
                        match: ["modifiers"]
                    }],
                    output: [{
                        type: "raw",
                        value: "\t"
                    }, {
                        type: "logic",
                        token: {
                            type: "Twig.logic.type.set",
                            key: "classNames",
                            expression: [{
                                type: "Twig.expression.type.variable",
                                value: "classNames",
                                match: ["classNames"]
                            }, {
                                type: "Twig.expression.type.filter",
                                value: "merge",
                                match: ["|merge", "merge"],
                                params: [{
                                    type: "Twig.expression.type.parameter.start",
                                    value: "(",
                                    match: ["("]
                                }, {
                                    type: "Twig.expression.type.array.start",
                                    value: "[",
                                    match: ["["]
                                }, {
                                    type: "Twig.expression.type.string",
                                    value: "  message--"
                                }, {
                                    type: "Twig.expression.type.variable",
                                    value: "item",
                                    match: ["item"]
                                }, {
                                    type: "Twig.expression.type.operator.binary",
                                    value: "~",
                                    precidence: 6,
                                    associativity: "leftToRight",
                                    operator: "~"
                                }, {
                                    type: "Twig.expression.type.array.end",
                                    value: "]",
                                    match: ["]"]
                                }, {
                                    type: "Twig.expression.type.parameter.end",
                                    value: ")",
                                    match: [")"],
                                    expression: !1
                                }]
                            }]
                        }
                    }]
                }
            }, {
                type: "raw",
                value: '\n\n<div\n\tclass="message  message--'
            }, {
                type: "output",
                stack: [{
                    type: "Twig.expression.type.variable",
                    value: "side",
                    match: ["side"]
                }, {
                    type: "Twig.expression.type.filter",
                    value: "default",
                    match: ["|default", "default"],
                    params: [{
                        type: "Twig.expression.type.parameter.start",
                        value: "(",
                        match: ["("]
                    }, {
                        type: "Twig.expression.type.string",
                        value: "bottom"
                    }, {
                        type: "Twig.expression.type.parameter.end",
                        value: ")",
                        match: [")"],
                        expression: !1
                    }]
                }]
            }, {
                type: "output",
                stack: [{
                    type: "Twig.expression.type.variable",
                    value: "classNames",
                    match: ["classNames"]
                }, {
                    type: "Twig.expression.type.filter",
                    value: "join",
                    match: ["|join", "join"],
                    params: [{
                        type: "Twig.expression.type.parameter.start",
                        value: "(",
                        match: ["("]
                    }, {
                        type: "Twig.expression.type.string",
                        value: ""
                    }, {
                        type: "Twig.expression.type.parameter.end",
                        value: ")",
                        match: [")"],
                        expression: !1
                    }]
                }]
            }, {
                type: "raw",
                value: '"\n\tref="message"\n\tdata-event="click->open"\n>\n\t<div\n\t\tclass="message__bg  message__bg--mobile"\n\t\tref="messageBg"\n\t>\n\t\t'
            }, {
                type: "logic",
                token: {
                    type: "Twig.logic.type.include",
                    only: !1,
                    ignoreMissing: !1,
                    stack: [{
                        type: "Twig.expression.type.string",
                        value: "src/app/components/svg/notification.twig"
                    }]
                }
            }, {
                type: "raw",
                value: '\t</div>\n\n\t<div\n\t\tclass="message__bg  message__bg--desktop"\n\t\tref="messageBg"\n\t>\n\t\t'
            }, {
                type: "logic",
                token: {
                    type: "Twig.logic.type.include",
                    only: !1,
                    ignoreMissing: !1,
                    stack: [{
                        type: "Twig.expression.type.string",
                        value: "src/app/components/svg/notification_desktop.twig"
                    }]
                }
            }, {
                type: "raw",
                value: '</div>\n\n\t<div class="message__content">\n\t\t<p>'
            }, {
                type: "output_whitespace_both",
                stack: [{
                    type: "Twig.expression.type.variable",
                    value: "text",
                    match: ["text"]
                }]
            }, {
                type: "logic",
                token: {
                    type: "Twig.logic.type.if",
                    stack: [{
                        type: "Twig.expression.type.variable",
                        value: "cta",
                        match: ["cta"]
                    }, {
                        type: "Twig.expression.type.variable",
                        value: "link",
                        match: ["link"]
                    }, {
                        type: "Twig.expression.type.operator.binary",
                        value: "and",
                        precidence: 13,
                        associativity: "leftToRight",
                        operator: "and"
                    }],
                    output: [{
                        type: "raw",
                        value: "\t\t\t\t"
                    }, {
                        type: "output",
                        stack: [{
                            type: "Twig.expression.type.string",
                            value: " "
                        }]
                    }, {
                        type: "raw",
                        value: '\n\t\t\t\t<a href="'
                    }, {
                        type: "output",
                        stack: [{
                            type: "Twig.expression.type.variable",
                            value: "link",
                            match: ["link"]
                        }]
                    }, {
                        type: "raw",
                        value: '" target="_blank" data-event="click->onClick" aria-label="'
                    }, {
                        type: "output_whitespace_both",
                        stack: [{
                            type: "Twig.expression.type.variable",
                            value: "cta",
                            match: ["cta"]
                        }]
                    }, {
                        type: "raw",
                        value: '">'
                    }, {
                        type: "output_whitespace_both",
                        stack: [{
                            type: "Twig.expression.type.string",
                            value: " "
                        }, {
                            type: "Twig.expression.type.variable",
                            value: "cta",
                            match: ["cta"]
                        }, {
                            type: "Twig.expression.type.operator.binary",
                            value: "~",
                            precidence: 6,
                            associativity: "leftToRight",
                            operator: "~"
                        }]
                    }, {
                        type: "raw",
                        value: "</a>"
                    }]
                }
            }, {
                type: "raw",
                value: "\t\t</p>\n\t</div>\n\n</div>\n"
            }],
            id: "src/app/components/message/message.twig",
            rethrow: !0
        });
        e.exports = function(e) {
            return a.render(e)
        }
        ,
        e.exports.id = "src/app/components/message/message.twig",
        e.exports.default = e.exports
    },
    215: function(e, t, s) {}
}]);
