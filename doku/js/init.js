/**
 * Created by Sebastian Oley on 05.11.2016.
 */

var categories = document.getElementsByClassName('category');
var nav = document.createElement('nav');

function addNav() {
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

            // add anker to referred page
            var anker = document.createElement('a');
            anker.name = (i + 1) + '-' + (k + 1);
            categories[i].insertBefore(anker, pages[k]);
        }
    }

    document.body.appendChild(nav);
}

function addContent() {

}

/*
var xhr = new XMLHttpRequest();
xhr.open('GET', '1-1.html', true);
xhr.onreadystatechange = function() {
    if (this.readyState!==4) return;
    if (this.status!==200) return; // or whatever error handling you want
    document.getElementsByTagName('main').childNodes[0].innerHTML = this.responseText;
};
xhr.send();
*/