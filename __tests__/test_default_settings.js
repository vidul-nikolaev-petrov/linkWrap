'use strict';

require('../index');


document.body.innerHTML = `
    <p id="anyUp" wrapper>
        <a name="up"></a>
        <a href="#down" wrapped>go down</a>
    </p>
    <div id="anyDown" wrapper>
        <a name="down"></a>
        <a href="#up" wrapped>go up</a>
    </div>
`;

$linkWrap.init();

test('navigate down from any wrapper', done => {
    document.getElementById('anyUp').click();

    setTimeout(() => {
        expect(window.location.href).toMatch(/down$/);
        done();
    });
});

test('navigate up from any wrapper', done => {
    document.getElementById('anyDown').click();

    setTimeout(() => {
        expect(window.location.href).toMatch(/up$/)
        done();
    });
});