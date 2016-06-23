// function updatePage(x){
//   $("#sighting_list").append(
//     "<li>"x.date"</li>"
//   )
// }
//
// function add_new_sighting(){
//   alert('hi');
//   var new_sighting = {
//     "sighting": {
//       "date": $("#sighting_date_1i").val() + "-" + $("#sighting_date_2i").val() + "-" + $("#sighting_date_3i").val(),
//       "time": $("#sighting_time_4i").val() + ":" + $("#sighting_time_5i").val(),
//       "latitude": $("#sighting_latitude").val(),
//       "longitude": $("#sighting_longitude").val(),
//       "animal_id": $("#animal_id").val()
//     }
//   }
//
//   $.ajax({
//     dataType: 'json',
//     url: '/sightings',
//     method: 'POST',
//     data: new_sighting,
//     success: function(w){
//       updatePage(w);
//     },
//     error: function(jqXHR, textStatus, errorThrown){
//       alert("Add new sighting failed: " + errorThrown)
//     }
//   })
// }
//
// $(document).ready(function(){
//
//   $("#add_new_sighting").on("click", add_new_sighting);
//
// })
