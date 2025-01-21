(window.webpackJsonp = window.webpackJsonp || []).push([[5], {
    189: function(e, t, i) {
        "use strict";
        i.r(t),
        i.d(t, "default", function() {
            return d
        });
        var s = i(54)
          , o = i(11)
          , a = i(31)
          , n = i(25)
          , p = i(75)
          , r = i(158)
          , y = i(6)
          , c = i(20)
          , l = i(196)
          , u = i(206)
          , g = i.n(u)
          , w = i(207)
          , v = i.n(w);
        class d extends p.a {
            constructor({id: e, routeParams: t}) {
                super({
                    name: "Intro",
                    log: 0,
                    template: g(),
                    styles: v(),
                    id: e,
                    routeParams: t
                }),
                Object(n.a)(this),
                this.data = Object.assign({}, Object(y.a)("interface.home")),
                this.tweens = {},
                c.a.homeUiVisible.subscribe(this._revealUi, this)
            }
            afterMount() {
                super.afterMount(),
                l.a.stop("music_loop"),
                l.a.stop("bucket_rain_loop"),
                this.startBtn = this.addComponent(a.a, {
                    data: {
                        text: this.data.cta_launch_game,
                        modifiers: "gold",
                        url: "choice"
                    },
                    onClick: () => {
                        r.a.event({
                            type: "mmEvent",
                            category: "home",
                            action: "start_experience"
                        }),
                        r.a.event({
                            type: "mmPageview",
                            value: "/select-first-seed"
                        })
                    }
                }).mount(this.nodes.introButtons),
                c.a.demoMode.current || (this.loginBtn = this.addComponent(a.a, {
                    onClick: this._onLogin,
                    data: {
                        text: this.data.cta_connection,
                        modifiers: "line-arrow"
                    }
                }).mount(this.nodes.introButtons)),
                this._initTweens()
            }
            _initTweens() {
                this.tweens.showUi = new s.a({
                    paused: !0,
                    onReverseComplete: () => super.exit()
                }),
                this.tweens.showUi.fromTo([this.nodes.logo, this.nodes.desc], .5, {
                    opacity: 0,
                    y: "-30%"
                }, {
                    opacity: 1,
                    y: "0%",
                    ease: o.a.easeInOut.config(1.5)
                }, "#in").fromTo(this.nodes.introButtons, .5, {
                    opacity: 0,
                    y: "30%"
                }, {
                    opacity: 1,
                    y: "0%",
                    ease: o.a.easeInOut.config(1.5)
                }, "#in")
            }
            _revealUi() {
                this.tweens.showUi.play()
            }
            _onLogin() {
                c.a.leftPanelView.set({
                    type: "login"
                }),
                c.a.menuOpen.set(!0),
                r.a.event({
                    type: "mmEvent",
                    category: "home",
                    action: "connection"
                })
            }
            enter() {
                super.enter(),
                r.a.event({
                    type: "mmPageview",
                    value: "/"
                })
            }
            exit() {
                this.tweens.showUi.reverse(),
                c.a.homeUiVisible.unsubscribe(this._revealUi, this)
            }
        }
    },
    206: function(e, t, i) {
        var s = (0,
        i(10).twig)({
            allowInlineIncludes: !0,
            data: [{
                type: "raw",
                value: '<section class="intro  view  view--intro">\n\n\t<div class="intro__inner  wrapper" ref="introInner">\n\n\t\t<div\n\t\t\tclass="intro__logo"\n\t\t\tref="logo"\n\t\t\titemscope\n\t\t\titemtype="http://schema.org/Organization"\n\t\t>\n\t\t\t<img\n\t\t\t\tclass="intro__logo-image"\n\t\t\t\t'
            }, {
                type: "logic",
                token: {
                    type: "Twig.logic.type.if",
                    stack: [{
                        type: "Twig.expression.type.variable",
                        value: "market",
                        match: ["market"]
                    }, {
                        type: "Twig.expression.type.string",
                        value: "kr"
                    }, {
                        type: "Twig.expression.type.operator.binary",
                        value: "==",
                        precidence: 9,
                        associativity: "leftToRight",
                        operator: "=="
                    }],
                    output: [{
                        type: "raw",
                        value: '\t\t\t\t\tsrc="'
                    }, {
                        type: "output",
                        stack: [{
                            type: "Twig.expression.type.variable",
                            value: "assets",
                            match: ["assets"]
                        }, {
                            type: "Twig.expression.type.key.brackets",
                            stack: [{
                                type: "Twig.expression.type.string",
                                value: "app.static/images/logo_sod-"
                            }, {
                                type: "Twig.expression.type.variable",
                                value: "market",
                                match: ["market"]
                            }, {
                                type: "Twig.expression.type.operator.binary",
                                value: "~",
                                precidence: 6,
                                associativity: "leftToRight",
                                operator: "~"
                            }, {
                                type: "Twig.expression.type.string",
                                value: ".png"
                            }, {
                                type: "Twig.expression.type.operator.binary",
                                value: "~",
                                precidence: 6,
                                associativity: "leftToRight",
                                operator: "~"
                            }]
                        }]
                    }, {
                        type: "raw",
                        value: '"\n\t\t\t\t'
                    }]
                }
            }, {
                type: "logic",
                token: {
                    type: "Twig.logic.type.elseif",
                    stack: [{
                        type: "Twig.expression.type.variable",
                        value: "language",
                        match: ["language"]
                    }, {
                        type: "Twig.expression.type.string",
                        value: "fr"
                    }, {
                        type: "Twig.expression.type.operator.binary",
                        value: "==",
                        precidence: 9,
                        associativity: "leftToRight",
                        operator: "=="
                    }],
                    output: [{
                        type: "raw",
                        value: '\t\t\t\t\tsrc="'
                    }, {
                        type: "output",
                        stack: [{
                            type: "Twig.expression.type.variable",
                            value: "assets",
                            match: ["assets"]
                        }, {
                            type: "Twig.expression.type.key.brackets",
                            stack: [{
                                type: "Twig.expression.type.string",
                                value: "app.static/images/logo_sod-fr.png"
                            }]
                        }]
                    }, {
                        type: "raw",
                        value: '"\n\t\t\t\t'
                    }]
                }
            }, {
                type: "logic",
                token: {
                    type: "Twig.logic.type.else",
                    match: ["else"],
                    output: [{
                        type: "raw",
                        value: '\t\t\t\t\tsrc="'
                    }, {
                        type: "output",
                        stack: [{
                            type: "Twig.expression.type.variable",
                            value: "assets",
                            match: ["assets"]
                        }, {
                            type: "Twig.expression.type.key.brackets",
                            stack: [{
                                type: "Twig.expression.type.string",
                                value: "app.static/images/logo_sod.png"
                            }]
                        }]
                    }, {
                        type: "raw",
                        value: '"\n\t\t\t\t'
                    }]
                }
            }, {
                type: "raw",
                value: 'alt="'
            }, {
                type: "output_whitespace_both",
                stack: [{
                    type: "Twig.expression.type.variable",
                    value: "content",
                    match: ["content"]
                }, {
                    type: "Twig.expression.type.key.period",
                    key: "interface"
                }, {
                    type: "Twig.expression.type.key.period",
                    key: "meta"
                }, {
                    type: "Twig.expression.type.key.period",
                    key: "title"
                }]
            }, {
                type: "raw",
                value: '"\n\t\t\t\titemprop="logo"\n\t\t\t>'
            }, {
                type: "logic",
                token: {
                    type: "Twig.logic.type.if",
                    stack: [{
                        type: "Twig.expression.type.variable",
                        value: "content",
                        match: ["content"]
                    }, {
                        type: "Twig.expression.type.key.period",
                        key: "interface"
                    }, {
                        type: "Twig.expression.type.key.period",
                        key: "menu"
                    }, {
                        type: "Twig.expression.type.key.period",
                        key: "logo"
                    }],
                    output: [{
                        type: "raw",
                        value: '<sup>*</sup>\n\t\t\t\t<h2 class="intro__logo-translation" ref="translation">\n\t\t\t\t\t<sup>*</sup>'
                    }, {
                        type: "output_whitespace_both",
                        stack: [{
                            type: "Twig.expression.type.variable",
                            value: "content",
                            match: ["content"]
                        }, {
                            type: "Twig.expression.type.key.period",
                            key: "interface"
                        }, {
                            type: "Twig.expression.type.key.period",
                            key: "menu"
                        }, {
                            type: "Twig.expression.type.key.period",
                            key: "logo"
                        }]
                    }, {
                        type: "raw",
                        value: "</h2>"
                    }]
                }
            }, {
                type: "raw",
                value: '</div>\n\n\t\t<p class="intro__desc" ref="desc">'
            }, {
                type: "output_whitespace_both",
                stack: [{
                    type: "Twig.expression.type.variable",
                    value: "content",
                    match: ["content"]
                }, {
                    type: "Twig.expression.type.key.period",
                    key: "interface"
                }, {
                    type: "Twig.expression.type.key.period",
                    key: "home"
                }, {
                    type: "Twig.expression.type.key.period",
                    key: "introduction"
                }]
            }, {
                type: "raw",
                value: '</p>\n\n\t\t<div class="intro__buttons" ref="introButtons"></div>\n\t</div>\n\n</section>'
            }],
            id: "src/views/intro/intro.twig",
            rethrow: !0
        });
        e.exports = function(e) {
            return s.render(e)
        }
        ,
        e.exports.id = "src/views/intro/intro.twig",
        e.exports.default = e.exports
    },
    207: function(e, t, i) {}
}]);
