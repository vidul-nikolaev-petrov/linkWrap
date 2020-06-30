;
(function(window) {
    'use strict';

    const $linkWrap = linkWrap();

    if (typeof(window.$linkWrap) === 'undefined') {
        window.$linkWrap = $linkWrap;
    }

    function getWrapped() {
        const tag = $linkWrap.settings.tag.wrapped;
        const attr = $linkWrap.settings.attr.wrapped;

        return `${tag}[${attr}]`;
    }

    function getWrapper() {
        const tag = $linkWrap.settings.tag.wrapper;
        const attr = $linkWrap.settings.attr.wrapper;

        return `${tag}[${attr}]`;
    }

    function getWrappers() {
        const wrapped = document.querySelectorAll(getWrapped());
        const wrappers = Array.from(wrapped)
            .map(e => e.closest(getWrapper()))
            .filter(e => !!e);

        return wrappers;
    }

    function linkWrap() {
        const settings = {
            attr: {
                wrapped: 'wrapped',
                wrapper: 'wrapper',
            },
            tag: {
                wrapped: 'a',
                wrapper: '*',
            },
            cursor: 'pointer',
        };

        return _linkWrap();

        function _linkWrap() {
            const main = {
                set(vals = settings) {
                    this.settings = vals;
                    this.listenWrapped = {};
                    this.listenWrapper = {};
                },
                init() {
                    const wrappers = getWrappers();

                    wrappers.forEach((e, i) => {
                        const l = e.querySelector(getWrapped());

                        this.listenWrapped[i] = e => e.stopPropagation();
                        this.listenWrapper[i] = () => l.click();

                        l.addEventListener('click', this.listenWrapped[i]);
                        e.addEventListener('click', this.listenWrapper[i]);

                        e.style.__cursor = e.style.cursor;
                        e.style.cursor = l.style.cursor || this.settings.cursor;
                    });
                },
                clear() {
                    const wrappers = getWrappers();

                    wrappers.forEach((e, i) => {
                        const l = e.querySelector(getWrapped());

                        e.removeEventListener('click', this.listenWrapper[i]);
                        l.removeEventListener('click', this.listenWrapped[i]);

                        e.style.cursor = e.style.__cursor;
                    });
                },
            };

            ['attr', 'tag'].forEach(e => {
                main.set[e] = {
                    set wrapped(val) {
                        main.settings[e].wrapped = val;
                    },
                    set wrapper(val) {
                        main.settings[e].wrapper = val;
                    },
                };
            });

            main.set();

            return main;
        };
    }
})(window);