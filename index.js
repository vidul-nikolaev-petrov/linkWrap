;
(function(window) {
    'use strict';

    const $linkWrap = linkWrap();

    if (typeof(window.$linkWrap) === 'undefined') {
        window.$linkWrap = $linkWrap;
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
            event: {
                wrapped: 'click',
                wrapper: 'click',
            },
        };

        const main = {
            set() {
                this.settings = settings;
                this.listenWrapped = {};
                this.listenWrapper = {};
            },
            init() {
                const wrappers = this.getWrappers();
                const event_wrapped = this.settings.event.wrapped;
                const event_wrapper = this.settings.event.wrapper;

                wrappers.forEach((e, i) => {
                    const l = e.querySelector(this.getWrapped());

                    this.listenWrapped[i] = e => e.stopPropagation();
                    this.listenWrapper[i] = () => l[event_wrapped]();

                    l.addEventListener(event_wrapped, this.listenWrapped[i]);
                    e.addEventListener(event_wrapper, this.listenWrapper[i]);

                    e.style.__cursor = e.style.cursor;
                    e.style.cursor = l.style.cursor || this.settings.cursor;
                });
            },
            clear() {
                const wrappers = this.getWrappers();
                const event_wrapped = this.settings.event.wrapped;
                const event_wrapper = this.settings.event.wrapper;

                wrappers.forEach((e, i) => {
                    const l = e.querySelector(this.getWrapped());

                    e.removeEventListener(event_wrapper, this.listenWrapper[i]);
                    l.removeEventListener(event_wrapped, this.listenWrapped[i]);

                    e.style.cursor = e.style.__cursor;
                });
            },
            clone() {
                return linkWrap();
            },
            getWrapped() {
                const tag = this.settings.tag.wrapped;
                const attr = this.settings.attr.wrapped;

                return `${tag}[${attr}]`;
            },
            getWrapper() {
                const tag = this.settings.tag.wrapper;
                const attr = this.settings.attr.wrapper;

                return `${tag}[${attr}]`;
            },
            getWrappers() {
                const wrapped = document.querySelectorAll(this.getWrapped());
                const wrappers = Array.from(wrapped)
                    .map(e => e.closest(this.getWrapper()))
                    .filter(e => !!e);

                return wrappers;
            },
        };

        ['attr', 'tag', 'event'].forEach(e => {
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
    }
})(window);