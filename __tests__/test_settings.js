'use strict';

require('../index');


document.body.innerHTML = `
    <div id="divUp" container>
        <span>
            <a name="up"></a>
            <a href="#down" wrappee>go down</a>
        </span>
    </div>
    <div id="divDown" container>
        <span>
            <a name="down"></a>
            <a href="#up" wrappee>go up</a>
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
        expect(window.location.href).toMatch(/down$/)
        done();
    });
});


test('navigate up (custom settings)', done => {
    document.getElementById('divDown').click();

    setTimeout(() => {
        expect(window.location.href).toMatch(/up$/)
        done();
    });
});