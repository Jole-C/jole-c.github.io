function FetchProjects()
{
	Fetch("scripts/projects.json", GenerateProjects);
}

function GenerateProjects(data)
{
	console.log("Generating projects");

	var contents = document.getElementById("project-contents");

	for (var key in data)
	{
		var obj = data[key];

		var projectRoot = CreateRoot();

		projectRoot.append(CreateImage(obj));
		projectRoot.append(CreateHeader(obj));
		projectRoot.append(CreateText(obj));
		projectRoot.append(CraeteTags(obj));
		
		var toAdd = projectRoot;

		if (obj.ButtonLink != null)
		{
			toAdd = document.createElement("a");
			toAdd.href = obj.ButtonLink;

			toAdd.append(projectRoot);
		}
		else
		{
			toAdd = projectRoot;
		}

		contents.append(toAdd);
	}
}

function CreateRoot()
{
	var projectRoot = document.createElement("div");

	projectRoot.classList.add("project");

	return projectRoot;
}

function CreateImage(obj)
{
	var image = document.createElement("img");
	
	image.src = obj.ImagePath;

	if (!obj.Unimportant)
	{
		if (obj.Special)
		{
			image.classList.add("special-image");
		}
		else
		{
			image.classList.add("normal-image");
		}
	}
	
	return image;
}

function CreateHeader(obj)
{
	var holder = document.createElement("div");

	holder.classList.add("project-header-holder");

	var title = document.createElement("h2");

	title.textContent = obj.Title;

	if (obj.ButtonLink)
	{
		title.classList.add("project-link");
	}

	if (obj.Year)
	{
		title.textContent = title.textContent.concat(` (${obj.Year})`);
	}

	holder.append(title);

	if (obj.Award)
	{
		var award = document.createElement("img");

		award.src = "resources/trophy.svg";

		holder.append(award);
	}

	return holder;
}

function CraeteTags(obj)
{
	var root = document.createElement("div");
	
	root.classList.add("project-tags-container");

	for (var key in obj.Tags)
	{
		var tag = obj.Tags[key];
		var text = document.createElement("p");

		text.classList.add("project-tag");

		text.textContent = tag;

		root.append(text);
	}

	return root;
}

function CreateText(obj)
{
	var root = document.createElement("div");

	root.classList.add("project-text");

	var paragraph = document.createElement("p");
	
	paragraph.textContent = obj.Description;

	root.append(paragraph);

	return root;
}