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
                },
                init() {
                    const wrapped = document.querySelectorAll(getWrapped());
                    const containers = Array.from(wrapped)
                        .map(e => e.closest(getWrapper()))
                        .filter(e => !!e);

                    containers.forEach(e => {
                        const l = e.querySelector(getWrapped());

                        l.addEventListener('click', event => {
                            event.stopPropagation();
                        });

                        e.addEventListener('click', event => {
                            l.click();
                        });

                        e.style.cursor = l.style.cursor || this.settings.cursor;
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