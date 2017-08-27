var getPaint = function(id, name, author, url, description){
	var paint = {};
	paint.id = id;
	paint.name = name;
	paint.author = author;
	paint.url = url;
	paint.description = description;
	return paint; 
}

var paints = [
		getPaint(1, 'Demo1', 'Description(Author 1486-1530)', 'pic4.jpg', 'pic4.txt')
];