'use strict';

require('../index');


document.body.innerHTML = `
    <div id="div-Up" div-wrapper>
        <a name="div-up"></a>
        <a href="#div-down" div-wrapped>go down</a>
    </div>
    <div id="div-Down" div-wrapper>
        <a name="div-down"></a>
        <a href="#div-up" div-wrapped>go up</a>
    </div>

    <p id="p-Up" p-wrapper>
        <a name="p-up"></a>
        <a href="#p-down" p-wrapped>go down</a>
    </p>
    <p id="p-Down" p-wrapper>
        <a name="p-down"></a>
        <a href="#p-up" p-wrapped>go up</a>
    </p>
`;


$linkWrap.set.attr.wrapped = 'div-wrapped';
$linkWrap.set.attr.wrapper = 'div-wrapper';
$linkWrap.set.tag.wrapper = 'div';

const linkWrap = $linkWrap.clone();

linkWrap.set.attr.wrapped = 'p-wrapped';
linkWrap.set.attr.wrapper = 'p-wrapper';
linkWrap.set.tag.wrapper = 'p';

$linkWrap.init();
linkWrap.init();

test('assert correct settings', () => {
    expect($linkWrap.settings.tag.wrapper).toEqual('div');
    expect(linkWrap.settings.tag.wrapper).toEqual('p');
});

test('navigate down from div wrapper', done => {
    document.getElementById('div-Up').click();

    setTimeout(() => {
        expect(window.location.href).toMatch(/div-down$/);
        done();
    });
});

test('navigate up from div wrapper', done => {
    document.getElementById('div-Down').click();

    setTimeout(() => {
        expect(window.location.href).toMatch(/div-up$/);
        done();
    });
});

test('navigate down from p wrapper', done => {
    document.getElementById('p-Up').click();

    setTimeout(() => {
        expect(window.location.href).toMatch(/p-down$/);
        done();
    });
});

test('navigate up from p wrapper', done => {
    document.getElementById('p-Down').click();

    setTimeout(() => {
        expect(window.location.href).toMatch(/p-up$/);
        done();
    });
});
