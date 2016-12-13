/**
 * Created by Sebastian Oley on 05.11.2016.
 */


function addContent() {
    var pages = document.getElementsByClassName('page');

    for (var i = 0; i < pages.length; i++) {
        var path = 'content/' + pages[i].getAttribute('data-path');
        $(".page").eq(i).load(path);    // ajax
    }
}


function addNav() {
    var categories = document.getElementsByClassName('category');
    var nav = document.createElement('nav');

    // add nav heading and link to top
    var navHead = document.createElement('a');
    navHead.innerHTML = '<h1>' + document.getElementsByTagName('header')[0].getAttribute('data-name') + '</h1>';
    navHead.href = '#top';
    document.getElementsByTagName('header')[0].id  = 'top';
    nav.appendChild(navHead);

    for (var i = 0; i < categories.length; i++) {
        // add category headings and ul
        var categoryHead = document.createElement('h4');
        categoryHead.innerHTML = (i + 1) + '. ' + categories[i].getAttribute('data-name');
        nav.appendChild(categoryHead);
        nav.appendChild(document.createElement('ul'));

        // fill ul and add links
        var pages = categories[i].getElementsByClassName('page');
        for (var k = 0; k < pages.length; k++) {
            var subcategory = document.createElement('a');
            subcategory.href = '#' + (i + 1) + '-' + (k + 1);
            subcategory.innerHTML = '<li>' + (i + 1) + '.' + (k + 1) + ' ' + pages[k].getAttribute('data-name') + '</li>';
                                    // e.g. '<li>1.1 xyz</li>'
            nav.getElementsByTagName('ul')[i].appendChild(subcategory);
        }
    }

    document.body.appendChild(nav);
}


function addAnchors() {
    var categories = document.getElementsByClassName('category');

    for (var i = 0; i < categories.length; i++) {
        var pages = categories[i].getElementsByClassName('page');

        for (var k = 0; k < pages.length; k++) {
            // add anchor to referred page
            pages[k].id = (i + 1) + '-' + (k + 1);
        }
    }
}


function addHeadings() {
    var categories = document.getElementsByClassName('category');

    for (var i = 0; i < categories.length; i++) {
        var pages = categories[i].getElementsByClassName('page');

        for (var k = 0; k < pages.length; k++) {
            var heading = document.createElement('div');
            heading.className = 'page-heading';
            heading.innerHTML = (i + 1) + '.' + (k + 1) + ' ' + pages[k].getAttribute('data-name');
            categories[i].insertBefore(heading, pages[k]);
        }
    }
}


function sizeHandler() {
    var navWidth = document.getElementsByTagName('nav')[0].clientWidth;

    var pages = document.getElementsByClassName('page');
    for (var i = 0; i < pages.length; i++) { pages[i].style.paddingRight = navWidth + 'px'; }

    var header = document.getElementsByTagName('header')[0];
    header.style.paddingRight = navWidth + 'px';
}


function scrollHandler() {
    var nav = document.getElementsByTagName('nav')[0];
    var headings = nav.getElementsByTagName('h4');
    var links = nav.querySelectorAll('a');

    if (scrollY > 0) {
        nav.className = 'light nav-light';
        for (var i = 0; i < headings.length; i++) { headings[i].className = 'light h4-light'; }
        for (var j = 0; j < links.length; j++) { links[j].className = 'light a-light'; }
    } else {
        nav.className = '';
        for (var k = 0; k < headings.length; k++) { headings[k].className = ''; }
        for (var l = 0; l < links.length; l++) { links[l].className = ''; }
    }
}