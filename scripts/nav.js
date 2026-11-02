function GenerateNav()
{
    var main = document.getElementById("main");
    var nav = document.createElement("nav");
    var navHolder = document.createElement("div");
    var hr = document.createElement("hr");

    nav.classList.add("header");
    navHolder.classList.add("nav-holder");

    navHolder.append(CreateTitle());

    var links = document.createElement("div");
    links.classList.add("nav-links");

    links.append(CreateLink("Projects", "index.html"));
    links.append(CreateLink("About", "about.html"));

    navHolder.append(links);
    nav.append(navHolder);
    nav.append(hr);
    main.prepend(nav);
}

function CreateTitle()
{
    var title = document.createElement("a");

    title.href = "index.html";
    title.textContent = "Noba Games";

    return title;
}

function CreateLink(title, link)
{
    var linkText = document.createElement("a");

    linkText.href = link;
    linkText.textContent = title;

    return linkText;
}