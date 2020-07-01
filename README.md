# linkWrap
Make HTML wrapper tags clickable.

[![Build Status](https://travis-ci.org/vidul-nikolaev-petrov/linkWrap.svg?branch=master)](https://travis-ci.org/vidul-nikolaev-petrov/linkWrap)

## Demo

The [demo](https://vidul-nikolaev-petrov.github.io/linkWrap/) represents `a` and their respective clickable `div`, and `p` wrappers.

## Settings

```javascript
$linkWrap.set.attr.wrapped = 'w-rapped'; // defaults to 'wrapped'
$linkWrap.set.attr.wrapper = 'w-rapper'; // defaults to 'wrapper'
$linkWrap.set.tag.wrapped = 'a';         // defaults to 'a'
$linkWrap.set.tag.wrapper = 'div';       // defaults to '*' (all tags)
```
More explanatory examples [here](https://github.com/vidul-nikolaev-petrov/linkWrap/tree/master/__tests__).

## Usage

```javascript
/**
 Enable window.$linkWrap
*/

$linkWrap.init();
```

```javascript
/**
 Disable window.$linkWrap
*/

$linkWrap.clear();
```

An example [here](https://github.com/vidul-nikolaev-petrov/linkWrap/blob/master/index.html#L86).

## License

- **[MIT](https://github.com/vidul-nikolaev-petrov/linkWrap/blob/master/LICENSE)**
- Copyright 2020 © <a href="http://www.vidul.com" target="_blank">Видул Петров</a>.
