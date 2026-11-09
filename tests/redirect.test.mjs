import test from 'node:test';import assert from 'node:assert/strict';import {destinationFor} from '../redirect.mjs';
test('homepage moves to the custom domain',()=>assert.equal(destinationFor('https://yuenhk.github.io/'),'https://wcy.hk/'));
test('projects and deep paths retain their route',()=>assert.equal(destinationFor('https://yuenhk.github.io/ShapeCut/assets/demo.svg'),'https://wcy.hk/ShapeCut/assets/demo.svg'));
test('query and bookmarks survive',()=>assert.equal(destinationFor('https://yuenhk.github.io/Tanaka/?mode=view&id=7#record'),'https://wcy.hk/Tanaka/?mode=view&id=7#record'));
test('old printed lowercase QR codes use the canonical game name',()=>assert.equal(destinationFor('https://yuenhk.github.io/qingming-hand-treasure/?room=2'),'https://wcy.hk/QingMing-Hand-Treasure/?room=2'));
test('no loops or navigation from another host',()=>{assert.equal(destinationFor('https://wcy.hk/'),null);assert.equal(destinationFor('https://elsewhere.example/'),null)});
test('queries and double slashes cannot override the destination origin',()=>{assert.equal(new URL(destinationFor('https://yuenhk.github.io//elsewhere.example/?redirect=https://elsewhere.example')).origin,'https://wcy.hk')});
