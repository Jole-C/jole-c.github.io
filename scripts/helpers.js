function Fetch(link, OnComplete)
{
	fetch(link).then(response => {
		if (!response.ok)
		{
			JSONResponseFail(response);
		}

		console.log("Found file!");
		
		return response.json();
	})
	.then(data => {
		OnComplete(data);
	})  
	.catch(error => console.error('Failed to fetch data:', error)); 
}

function JSONResponseFail(response)
{
	throw new Error(`HTTP error! Status: ${response.status}`);
}

function CreateLinks(links)
{
	var linkRoot = document.createElement("div");

	linkRoot.classList.add("links");

	for (var key in links)
	{
		var link = links[key];
		var element = document.createElement("a");

		element.href = link.Link;
		element.textContent = link.Text;

		linkRoot.append(element);
	}

	return linkRoot;
}