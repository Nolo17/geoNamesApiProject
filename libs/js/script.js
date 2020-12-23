	$('#HierSub').click(function() {

		$.ajax({
			url: "libs/php/getHierarchy.php",
			type: 'POST',
			dataType: 'json',
			data: {
				geonameId: $('#selHierarchy').val(),
				//lang: $('#selLanguage').val()
			},
			success: function(result) {

				console.log(result);

				if (result.status.name == "ok") {

					$('#Planet').html(result['data'][0]['name']);
					$('#Continent').html(result['data'][1]['name']);
					$('#Country').html(result['data'][2]['name']);
					$('#Region').html(result['data'][3]['name']);
					$('#District').html(result['data'][4]['name']); 

				}
			
			},
			error: function(jqXHR, textStatus, errorThrown) {
				console.log(jqXHR + textStatus +  errorThrown)
			}
		}); 
	

	});

	$('#ChildSub').click(function() {

		$.ajax({
			url: "libs/php/getChildren.php",
			type: 'POST',
			dataType: 'json',
			data: {
				geonameId: $('#selChildren').val(),
				//lang: $('#selLanguage').val()
			},
			success: function(result) {

				console.log(result);

				if (result.status.name == "ok") {

					$('#childPlace1').html(result['data'][0]['name']);
					$('#childPop1').html(result['data'][0]['population']);
					$('#childPlace2').html(result['data'][1]['name']);
					$('#childPop2').html(result['data'][1]['population']);
					$('#childPlace3').html(result['data'][2]['name']);
					$('#childPop3').html(result['data'][2]['population']);
					$('#childPlace4').html(result['data'][3]['name']);
					$('#childPop4').html(result['data'][3]['population']);
					$('#childPlace5').html(result['data'][4]['name']); 
					$('#childPop5').html(result['data'][4]['population']);

				}
			
			},
			error: function(jqXHR, textStatus, errorThrown) {
				console.log(jqXHR + textStatus +  errorThrown)
			}
		}); 
	

	});

	$('#neighbourSub').click(function() {

		$.ajax({
			url: "libs/php/getNeighbours.php",
			type: 'POST',
			dataType: 'json',
			data: {
				geonameId: $('#selNeighbours').val(),
				//lang: $('#selLanguage').val()
			},
			success: function(result) {

				console.log(result);

				if (result.status.name == "ok") {

					$('#Country1').html(result['data'][0]['name']);
					$('#Country2').html(result['data'][1]['name']);
					$('#Country3').html(result['data'][2]['name']);
					$('#Country4').html(result['data'][3]['name']);
					$('#Country5').html(result['data'][4]['name']); 

				}
			
			},
			error: function(jqXHR, textStatus, errorThrown) {
				console.log(jqXHR + textStatus +  errorThrown)
			}
		}); 
	

	});