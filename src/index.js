import * as $ from 'jquery'

import Post from '@models/Post';
import json from './assets/json'
import image from './assets/image.jpg'

import '@fortawesome/fontawesome-free/js/fontawesome'
import '@fortawesome/fontawesome-free/js/solid'
import '@fortawesome/fontawesome-free/js/regular'
import '@fortawesome/fontawesome-free/js/brands'

// import xml from './assets/data.xml'
// import csv from './assets/data.csv'
// import './styles/styles.css'
// import './styles/sass.sass'
import './styles/floors.scss'
import './styles/example.scss'
// import './styles/badscript.css'
 import './styles/caviardreams.css'

// тоже самое с less, только надо скачать less-loader
// scss можно использовать как sass

import './babel'

const post = new Post('This is first post title', image);

console.log('Post to String', post.toString());
console.log('JSON', json);
// console.log('XML', xml);
// console.log('CSV', csv);

$('pre').addClass('code').html(post.toString());