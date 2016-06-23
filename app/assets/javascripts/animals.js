function updatePage(data){
  $("#animal_list").append(
    "<tr>"+
    "<td>"+data.name+"</td>"+
    "<td>"+data.latin_name+"</td>"+
    "<td>"+data.kingdom+"</td>"+
    '<td><a href="/animals/'+data.id+'">Show</a></td>'+
    '<td><a href="/animals/'+data.id+'/edit">Edit</a></td>'+
    '<td><a data-confirm="Are you sure?" rel="nofollow" data-method="delete" href="/animals/'+data.id+'">Destroy</a></td>'+
    "</tr>");
    $("#animal_name").val("");
    $("#animal_latin_name").val("");
    $("#animal_kingdom").val("")
}

function add_animal_to_database(){
  var new_animal = {
    "animal": {
      "name": $("#animal_name").val(),
      "latin_name": $("#animal_latin_name").val(),
      "kingdom": $("#animal_kingdom").val()
    }
  };

  $.ajax({
    dataType: 'json',
    url: '/animals',
    method: 'POST',
    data: new_animal,
    success: function(data){
      updatePage(data);
    },
    error: function(jqXHR, textStatus, errorThrown){
      alert("Add new animal failed: " + errorThrown)
    }
  })
}

function updatePageSighting(x){
  $("#sighting_list").append(
    '<li><a href="/sightings/'+x.id+'">'+x.date+"</a></li>"
  )
}

function add_new_sighting(){
  var new_sighting = {
    "sighting": {
      "date": $("#sighting_date_1i").val() + "-" + $("#sighting_date_2i").val() + "-" + $("#sighting_date_3i").val(),
      "time": $("#sighting_time_4i").val() + ":" + $("#sighting_time_5i").val(),
      "latitude": $("#sighting_latitude").val(),
      "longitude": $("#sighting_longitude").val(),
      "animal_id": $("#animal_id").val()
    }
  }

  $.ajax({
    dataType: 'json',
    url: '/sightings',
    method: 'POST',
    data: new_sighting,
    success: function(w){
      updatePageSighting(w);
    },
    error: function(jqXHR, textStatus, errorThrown){
      alert("Add new sighting failed: " + errorThrown)
    }
  })
}

$(document).ready(function(){

  $("#add_new_sighting").on("click", add_new_sighting);
  $("#new_animal_submit").on("click", add_animal_to_database);

})  //end of doc ready
