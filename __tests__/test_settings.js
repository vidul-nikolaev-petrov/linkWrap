'use strict';

require('../index');


document.body.innerHTML = `
    <div id="divUp" container>
        <span>
            <a name="up"></a>
            <a href="#down" id="aUp" wrappee>go down</a>
        </span>
    </div>
    <div id="divDown" container>
        <span>
            <a name="down"></a>
            <a href="#up" id="aDown" wrappee>go up</a>
        </span>
    </div>
`;

$linkWrap.set.attr.wrapped = 'wrappee';
$linkWrap.set.attr.wrapper = 'container';
$linkWrap.set.tag.wrapped = 'a';
$linkWrap.set.tag.wrapper = 'div';

$linkWrap.init();

test('navigate down (custom settings)', done => {
    document.getElementById('divUp').click();

    setTimeout(() => {
        expect(window.location.href).toMatch(/down$/);
        done();
    });
});


test('navigate up (custom settings)', done => {
    document.getElementById('divDown').click();

    setTimeout(() => {
        expect(window.location.href).toMatch(/up$/);
        done();
    });
});

test('assert default cursor styling', () => {
    const elUp = document.getElementById('divUp');
    const elDown = document.getElementById('divDown');
    const cursor = $linkWrap.settings.cursor;

    expect(elUp.style.cursor).toEqual(cursor);
    expect(elDown.style.cursor).toEqual(cursor);

    $linkWrap.clear();

    expect(elUp.style.cursor).not.toEqual(cursor);
    expect(elDown.style.cursor).not.toEqual(cursor);
});

test('assert custom cursor styling', () => {
    const elWrapped = document.getElementById('aUp');
    const elWrapper = document.getElementById('divUp');
    const cursor = 'crosshair';

    elWrapped.style.cursor = cursor;

    $linkWrap.init();

    expect(elWrapper.style.cursor).toEqual(cursor);

    $linkWrap.clear();

    expect(elWrapper.style.cursor).not.toEqual(cursor);
});