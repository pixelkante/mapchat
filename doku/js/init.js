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

    var navHead = document.createElement('a');
    navHead.innerHTML = '<h1>' + document.getElementsByTagName('header')[0].getAttribute('data-name') + '</h1>';
    navHead.href = '#top';
    document.getElementsByTagName('header')[0].id  = 'top';
    nav.appendChild(navHead);

    for (var i = 0; i < categories.length; i++) {
        // add category headings and list
        var categoryHead = document.createElement('h4');
        categoryHead.innerHTML = (i + 1) + '. ' + categories[i].getAttribute('data-name');
        nav.appendChild(categoryHead);
        nav.appendChild(document.createElement('ul'));

        // fill list and add links
        var pages = categories[i].getElementsByClassName('page');
        for (var k = 0; k < pages.length; k++) {
            var subcategory = document.createElement('a');
            subcategory.href = '#' + (i + 1) + '-' + (k + 1);
            subcategory.innerHTML = '<li>' + (i + 1) + '.' + (k + 1) + ' ' + pages[k].getAttribute('data-name') + '</li>';
                                    // e.g. '<li>1.1 xyz</li>'
            nav.getElementsByTagName('ul')[i].appendChild(subcategory);

            // add anchor to referred page
            pages[k].id = (i + 1) + '-' + (k + 1);

            // add heading to referred page
            var heading = document.createElement('div');
            heading.className = 'page-heading';
            heading.innerHTML = (i + 1) + '.' + (k + 1) + ' ' + pages[k].getAttribute('data-name');
            categories[i].insertBefore(heading, pages[k]);
        }
    }

    document.body.appendChild(nav);
}