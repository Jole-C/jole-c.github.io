function GenerateFooter(data)
{
    var root = document.getElementById("main");
    var footer = document.createElement("footer");
    var hr = document.createElement("hr");

    footer.append(hr);
    footer.append(CreateLinks(data));

    var credit = document.createElement("a");

    credit.textContent = "Creatures by Minako The Only"
    credit.href = "https://ko-fi.com/minakotheonly/shop";

    footer.append(credit);

    root.append(footer);
}

function FetchFooter()
{
    Fetch("scripts/iconlinks.json", GenerateFooter)
}
