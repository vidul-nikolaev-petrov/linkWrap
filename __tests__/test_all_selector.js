'use strict';

require('../main');

const linkWrap = window.$linkWrap;

document.body.innerHTML = `
    <div id="divUp" wrapper>
        <span>
            <a name="up"></a>
            <a href="#down" wrapped>go down</a>
        </span>
    </div>
    <div id="divDown" wrapper>
        <span>
            <a name="down"></a>
            <a href="#up" wrapped>go up</a>
        </span>
    </div>
`;

linkWrap.init();

test('navigate down from div', done => {
    document.getElementById('divUp').click();

    setTimeout(() => {
        expect(window.location.href).toMatch(/down$/);
        done();
    });
});

test('navigate up from div', done => {
    document.getElementById('divDown').click();

    setTimeout(() => {
        expect(window.location.href).toMatch(/up$/)
        done();
    });
});