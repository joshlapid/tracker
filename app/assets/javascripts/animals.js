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

$(document).ready(function(){

  $("#new_animal_submit").on("click", add_animal_to_database);

})  //end of doc ready
