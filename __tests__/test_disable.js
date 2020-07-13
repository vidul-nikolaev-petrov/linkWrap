'use strict';

require('../index');


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

test('enable link wrappers', done => {
    $linkWrap.init();

    document.getElementById('divUp').click();

    setTimeout(() => {
        expect(window.location.href).toMatch(/down$/);
        done();
    });
});

test('disable link wrappers', done => {
    expect(window.location.href).toMatch(/down$/);
    
    $linkWrap.clear();

    document.getElementById('divDown').click();

    setTimeout(() => {
        expect(window.location.href).toMatch(/down$/);
        done();
    });
});