(function ($) {
    // Initiate the wowjs
    new WOW().init();
})(jQuery);

"use strict";


//Enable tooltips everywhere
var tooltipTriggerList = [].slice.call(document.querySelectorAll('[data-bs-toggle="tooltip"]'))
var tooltipList = tooltipTriggerList.map(function (tooltipTriggerEl) {
    return new bootstrap.Tooltip(tooltipTriggerEl)
})


/* Vanilla RSS - https://github.com/sdepold/vanilla-rss */

const rss = new RSS(
    document.querySelector("#rss-feeds"),
    //Change this to your own rss feeds
    "https://feeds.feedburner.com/TechCrunch/startups",
    {
        // how many entries do you want?
        // default: 4
        // valid values: any integer
        limit: 3,


        // will request the API via https
        // default: false
        // valid values: false, true
        ssl: true,

        // outer template for the html transformation
        // default: "<ul>{entries}</ul>"
        // valid values: any string
        layoutTemplate: "<div class='items'>{entries}</div>",

        // inner template for each entry
        // default: '<li><a href="{url}">[{author}@{date}] {title}</a><br/>{shortBodyPlain}</li>'
        // valid values: any string
        entryTemplate: '<div class="item"><h3 class="title"><a href="{url}" target="_blank">{title}</a></h3><div><p>{shortBodyPlain}</p><a class="more-link" href="{url}" target="_blank"><i class="fas fa-external-link-alt"></i>Read more</a></div></div>',

    }
);
rss.render();


/* Github Calendar - https://github.com/IonicaBizau/github-calendar */
new GitHubCalendar("#github-graph", "IonicaBizau", { responsive: true });


/* Github Activity Feed - https://github.com/caseyscarborough/github-activity */
GitHubActivity.feed({ username: "mdo", selector: "#ghfeed" });


// Typed Initiate
if ($('.typed-text-output').length == 1) {
    var typed_strings = $('.typed-text').text();
    var typed = new Typed('.d-inline-block', {
        strings: typed_strings.split(', '),
        typeSpeed: 100,
        backSpeed: 20,
        smartBackspace: false,
        loop: true
    });
}



var delay = 100;
$(".progress-bar").each(function (i) {
    $(this).delay(delay * i).animate({
        width: $(this).attr('aria-valuenow') + '%'
    }, delay);

    $(this).prop('Counter', 0).animate({
        Counter: $(this).text()
    }, {
        duration: delay,
        // easing: 'swing',
        step: function (now) {
            $(this).text(Math.ceil(now) + '%');
        }
    });
});


/////////////////////////////////////////////////////////////////////

//Sidebar start

/////////////////////////////////////////////////////////////////////

//Get the button
var gotobackButton = document.getElementById("gototopBtn");

// When the user scrolls down 20px from the top of the document, show the button
window.onscroll = function () { scrollFunction() };

function scrollFunction() {
    if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
        gotobackButton.style.display = "block";
    } else {
        gotobackButton.style.display = "none";
    }
}

// When the user clicks on the button, scroll to the top of the document
function topFunction() {
    document.body.scrollTop = 0;
    document.documentElement.scrollTop = 0;
}




const body = document.querySelector('body'),
    sidebar = body.querySelector('nav'),
    toggle = body.querySelector(".toggle"),
    searchBtn = body.querySelector(".search-box"),
    modeSwitch = body.querySelector(".toggle-switch"),
    modeText = body.querySelector(".mode-text");

// /////////////////////////////////////////////////////////////
// /////////////////////////////////////////////////////////////

toggle.addEventListener("click", () => {
    sidebar.classList.toggle("close");
})

searchBtn.addEventListener("click", () => {
    sidebar.classList.remove("close");
})


var darkSwitch = document.getElementById("darkSwitch");
window.addEventListener("load", function () {
    document.getElementById("gotobackButton").style.display = "none";
    if (darkSwitch) {
        initTheme();
        darkSwitch.addEventListener("change", function () {
            resetTheme();
        });
    }
});

function initTheme() {
    var darkThemeSelected =
        localStorage.getItem("darkSwitch") !== null &&
        localStorage.getItem("darkSwitch") === "dark";
    darkSwitch.checked = darkThemeSelected;

    if (darkThemeSelected) {
        document.body.setAttribute("data-theme", "dark");
        body.classList = "dark";
    } else {
        document.body.removeAttribute("data-theme");
        body.classList = "light";
    }
}


function resetTheme() {
    if (darkSwitch.checked) {
        document.body.setAttribute("data-theme", "dark");
        localStorage.setItem("darkSwitch", "dark");
        body.classList = "dark";
        modeText.innerText = "Light mode";
        $(".fas").toggleClass("fa-moon fa-sun");
    } else {
        document.body.removeAttribute("data-theme");
        localStorage.removeItem("darkSwitch");
        body.classList = "light";
        modeText.innerText = "Dark mode";
    }
}


/////////////////////////////////////////////////////////////////////

//Sidebar end

/////////////////////////////////////////////////////////////////////

// Typed Initiate
if ($('.typed-text-output').length == 1) {
    var typed_strings = $('.typed-text').text();
    var typed = new Typed('.typed-text-output', {
        strings: typed_strings.split(', '),
        typeSpeed: 100,
        backSpeed: 20,
        smartBackspace: false,
        loop: true
    });
}


GitHubCalendar(".calendar", "bilalibniqbal");

// or enable responsive functionality:
GitHubCalendar(".calendar", "bilalibniqbal", { responsive: true });

// Use a proxy
// GitHubCalendar(".calendar", "bilalibniqbal", {
//    proxy (username) {
//      return fetch(`https://your-proxy.com/github?user=${username}`)
//    }
// }).then(r => r.text())





GitHubActivity.feed({
    username: "bilalibniqbal",
    repository: "your-repo", // optional
    selector: "#feed",
    limit: 20, // optional
});





// Remove the transition class
const square = document.querySelector('.square');
square.classList.remove('square-transition');

// Create the observer, same as before:
const observer = new IntersectionObserver(entries => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            square.classList.add('square-transition');
            return;
        }

        square.classList.remove('square-transition');
    });
});

observer.observe(document.querySelector('.square-wrapper'));



