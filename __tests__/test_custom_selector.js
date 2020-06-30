'use strict';

require('../index');

const linkWrap = window.$linkWrap;

document.body.innerHTML = `
    <p id="pUp" wrapper>
        <span>
            <a name="up"></a>
            <a href="#down" wrapped>go down</a>
        </span>
    </p>
    <p id="pDown" wrapper>
        <span>
            <a name="down"></a>
            <a href="#up" wrapped>go up</a>
        </span>
    </p>
`;


$linkWrap.set.tag.wrapper = 'p';

linkWrap.init();

test('navigate down from p', done => {
    document.getElementById('pUp').click();

    setTimeout(() => {
        expect(window.location.href).toMatch(/down$/);
        done();
    });
});


test('navigate up from div', () => {
    document.getElementById('pDown').click();

    setTimeout(() => {
        setTimeout(() => expect(window.location.href).toMatch(/up$/));
        done();
    });
});