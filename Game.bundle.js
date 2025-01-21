(window.webpackJsonp = window.webpackJsonp || []).push([[4], {
    194: function(e, t, s) {
        "use strict";
        s.r(t);
        var a = s(43)
          , n = s(33)
          , r = s(75)
          , i = s(158)
          , o = s(44)
          , c = s(24)
          , u = s(196)
          , p = s(11)
          , l = s(28)
          , g = s(35)
          , d = s(52)
          , m = s(20)
          , h = s(50)
          , w = s(6)
          , y = s(218)
          , v = s.n(y)
          , f = s(219)
          , _ = s.n(f);
        class x extends l.a {
            constructor(e) {
                super(Object.assign({}, {
                    name: "GameUI",
                    log: 0,
                    template: v.a,
                    styles: _.a
                }, e)),
                this.gameId = e.gameId;
                const t = d.games[this.gameId];
                this.data.resources = {
                    sun: !!t.sun,
                    water: !!t.water
                },
                this.data.color = "spiders" !== this.gameId ? "blue" : "white",
                this.prevResourcesCount = -1,
                this.tweens = {}
            }
            bind() {
                c.a.playerReady.subscribe(this._onPlayerReady, this),
                c.a.scores[this.gameId].subscribe(this._onScore, this)
            }
            unbind() {
                c.a.playerReady.unsubscribe(this._onPlayerReady, this),
                c.a.scores[this.gameId].unsubscribe(this._onScore, this)
            }
            afterMount() {
                super.afterMount(),
                this.title = this.addComponent(g.a, {
                    data: {
                        modifiers: this.data.color,
                        text: Object(w.a)(`interface.game.game_${this.gameId}_instruction`)
                    }
                }).mount(this.nodes.title),
                this._initTweens(),
                this._onScore(c.a.scores[this.gameId].current),
                this.bind()
            }
            beforeDestroy() {
                super.beforeDestroy(),
                this.unbind()
            }
            _initTweens() {
                this.tweens.toggleTitle = a.a.fromTo(this.nodes.title, .5, {
                    y: () => {
                        return `${-1 * (this.nodes.title.clientHeight + this.nodes.title.offsetTop)}px`
                    }
                }, {
                    y: 0,
                    ease: p.a.easeInOut.config(1.5)
                }).pause(),
                this.tweens.toggleResources = a.a.fromTo(this.nodes.resourcesContainer, .5, {
                    x: () => {
                        return `${-1 * (this.nodes.resourcesContainer.clientWidth + this.nodes.resourcesContainer.offsetLeft)}px`
                    }
                }, {
                    x: 0,
                    ease: p.a.easeInOut.config(1.5)
                }).pause(),
                this.tweens.toggleScore = a.a.fromTo(this.nodes.scoreContainer, .5, {
                    x: () => {
                        return `${this.nodes.scoreContainer.clientWidth + (m.a.viewportSize.current[0] - this.nodes.scoreContainer.offsetLeft)}px`
                    }
                }, {
                    x: 0,
                    ease: p.a.easeInOut.config(1.5)
                }).pause()
            }
            _onPlayerReady() {
                this.tweens.toggleTitle.invalidate().reverse(),
                this.tweens.toggleResources.play(),
                this.tweens.toggleScore.play()
            }
            _onScore(e) {
                this.nodes.score.textContent = e;
                const t = h.a.scoreToResources(this.gameId, e);
                t !== this.prevResourcesCount && (this.prevResourcesCount = t,
                this.nodes.resources.textContent = t)
            }
        }
        var k = s(216)
          , b = s.n(k)
          , I = s(217)
          , T = s.n(I);
        s.d(t, "default", function() {
            return C
        });
        class C extends r.a {
            constructor({id: e, routeParams: t}) {
                super({
                    name: "Game",
                    template: b.a,
                    styles: T.a,
                    id: e,
                    routeParams: t
                }),
                this.gameId = t.id,
                this.files = [{
                    path: "packs/games.data.pack"
                }, {
                    path: n.a.replacePath("packs/games.tex.pack")
                }]
            }
            afterMount() {
                u.a.play("music_loop"),
                c.a.scores[this.gameId].set(0),
                this.ui = this.addComponent(x, {
                    gameId: this.gameId
                }).mount(this.nodes.main)
            }
            afterLoad() {
                o.a.loadFromPack({
                    pack: "games.data.pack",
                    name: "chenille"
                }),
                o.a.loadFromPack({
                    pack: "games.data.pack",
                    name: "spider"
                })
            }
            enter() {
                super.enter(),
                a.a.delayedCall(1.5, () => this.ui.tweens.toggleTitle.play());
                let e = "water-game";
                switch (this.gameId) {
                case "caterpillars":
                    e = "parasites-game";
                    break;
                case "spiders":
                    e = "light-game"
                }
                i.a.event({
                    type: "mmPageview",
                    value: `/game/${e}`
                })
            }
            exit() {
                this.ui.tweens.toggleScore.eventCallback("onReverseComplete", () => super.exit()),
                this.ui.tweens.toggleScore.reverse(),
                this.ui.tweens.toggleResources.reverse()
            }
        }
    },
    216: function(e, t, s) {
        var a = (0,
        s(10).twig)({
            allowInlineIncludes: !0,
            data: [{
                type: "raw",
                value: '<section class="game view view--game">\n</section>\n'
            }],
            id: "src/views/game/game.twig",
            rethrow: !0
        });
        e.exports = function(e) {
            return a.render(e)
        }
        ,
        e.exports.id = "src/views/game/game.twig",
        e.exports.default = e.exports
    },
    217: function(e, t, s) {},
    218: function(e, t, s) {
        var a = (0,
        s(10).twig)({
            allowInlineIncludes: !0,
            data: [{
                type: "raw",
                value: '<div class="game-ui  game-ui--'
            }, {
                type: "output_whitespace_both",
                stack: [{
                    type: "Twig.expression.type.variable",
                    value: "color",
                    match: ["color"]
                }]
            }, {
                type: "raw",
                value: '">\n\n\t<div class="game-ui__wrapper  wrapper" ref="wrapper">\n\t\t<div class="game-ui__resources" ref="resourcesContainer">'
            }, {
                type: "logic",
                token: {
                    type: "Twig.logic.type.if",
                    stack: [{
                        type: "Twig.expression.type.variable",
                        value: "resources",
                        match: ["resources"]
                    }, {
                        type: "Twig.expression.type.key.period",
                        key: "water"
                    }],
                    output: [{
                        type: "raw",
                        value: '\t\t\t\t<span\n\t\t\t\t\tclass="game-ui__resource  game-ui__resource--water"\n\t\t\t\t\tref="water"\n\t\t\t\t>\n\t\t\t\t\t<svg>\n\t\t\t\t\t\t<use xlink:href="#element_water_drop" />\n\t\t\t\t\t</svg>\n\t\t\t\t</span>\n\t\t\t'
                    }]
                }
            }, {
                type: "raw",
                value: "\n\t\t\t"
            }, {
                type: "logic",
                token: {
                    type: "Twig.logic.type.if",
                    stack: [{
                        type: "Twig.expression.type.variable",
                        value: "resources",
                        match: ["resources"]
                    }, {
                        type: "Twig.expression.type.key.period",
                        key: "sun"
                    }],
                    output: [{
                        type: "raw",
                        value: '\t\t\t\t<span\n\t\t\t\t\tclass="game-ui__resource game-ui__resource--sun"\n\t\t\t\t\tref="sun"\n\t\t\t\t>\n\t\t\t\t\t<svg>\n\t\t\t\t\t\t<use xlink:href="#element_sun" />\n\t\t\t\t\t</svg>\n\t\t\t\t</span>\n\t\t\t'
                    }]
                }
            }, {
                type: "raw",
                value: '\n\t\t\t<span class="game-ui__resources-multiplier">+</span>\n\t\t\t<span\n\t\t\t\tclass="game-ui__resources-number"\n\t\t\t\tref="resources"\n\t\t\t>\n\t\t\t\t14\n\t\t\t</span>\n\n\t\t</div>\n\n\t\t<div class="game-ui__title" ref="title"></div>\n\n\t\t<div class="game-ui__score" ref="scoreContainer">\n\t\t\t<span\n\t\t\t\tclass="game-ui__score-number"\n\t\t\t\tref="score"\n\t\t\t>\n\t\t\t\t100\n\t\t\t</span>\n\t\t\t<span>&nbsp;'
            }, {
                type: "output",
                stack: [{
                    type: "Twig.expression.type.variable",
                    value: "content",
                    match: ["content"]
                }, {
                    type: "Twig.expression.type.key.period",
                    key: "interface"
                }, {
                    type: "Twig.expression.type.key.period",
                    key: "game"
                }, {
                    type: "Twig.expression.type.key.period",
                    key: "point"
                }]
            }, {
                type: "raw",
                value: "</span>\n\t\t</div>\n\t</div>\n\n</div>\n"
            }],
            id: "src/views/game/components/game-ui/game-ui.twig",
            rethrow: !0
        });
        e.exports = function(e) {
            return a.render(e)
        }
        ,
        e.exports.id = "src/views/game/components/game-ui/game-ui.twig",
        e.exports.default = e.exports
    },
    219: function(e, t, s) {}
}]);
