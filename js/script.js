$(function() {

	var html = $('#test').html();
	var articles = [
		{
			title: 'Article 1',
			content: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Amet, aliquid in fuga dolores blanditiis, distinctio quae magni rerum explicabo ipsa itaque, unde dicta ex facere quia natus iste dolore voluptate.'
		},
		{
			title: 'Article 2',
			content: 'Далеко-далеко за словесными горами в стране, гласных и согласных живут рыбные тексты. Великий снова не но алфавит страна все, имеет океана сбить это родного по всей семантика ее, за! Деревни, строчка то они.'
		},
		{
			title: 'Article 3',
			content: 'Далеко-далеко за словесными горами .'
		}
	];

	var content = tmpl(html, {
		data: articles
	});

	$('body').append(content); 

});