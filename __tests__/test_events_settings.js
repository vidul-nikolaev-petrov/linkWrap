'use strict';

require('../index');


document.body.innerHTML = `
    <p id="Up" wrapper>
        <a name="up"></a>
        <a href="#down" id="up" wrapped>go down</a>
    </p>
    <div id="Down" wrapper>
        <a name="down"></a>
        <a href="#up" wrapped>go up</a>
    </div>
`;

afterEach(() => {
    $linkWrap.clear();
});

test('focus on the wrapped by mousemove on wrapper', done => {
    $linkWrap.set.event.wrapped = 'focus';
    $linkWrap.set.event.wrapper = 'mousemove';

    $linkWrap.init();

    const elWrapped = document.getElementById('up');

    document.getElementById('Up').dispatchEvent(new Event('mousemove'));

    setTimeout(() => {
        expect(document.activeElement).toEqual(elWrapped);
        done();
    });
});


test('navigate down by doubleclick on wrapper', done => {
    $linkWrap.set.event.wrapped = 'click';
    $linkWrap.set.event.wrapper = 'dbclick';

    $linkWrap.init();

    document.getElementById('Up').dispatchEvent(new Event('dbclick'));

    setTimeout(() => {
        expect(window.location.href).toMatch(/down$/);
        done();
    });
});

test('navigate up by mouseup on wrapper', done => {
    $linkWrap.set.event.wrapped = 'click';
    $linkWrap.set.event.wrapper = 'mouseup';

    $linkWrap.init();

    document.getElementById('Down').dispatchEvent(new Event('mouseup'));

    setTimeout(() => {
        expect(window.location.href).toMatch(/up$/);
        done();
    });
});