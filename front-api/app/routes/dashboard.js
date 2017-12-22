import Ember from 'ember';


/*export default Ember.Route.extend({
  setupController: function(controller) {
    controller.setProperties({
      lat: 48.866667,
      lng: 2.333333,
      zoom: 4
    });
  }
});*/

export default Ember.Route.extend({
  setupController: function(controller) {
    controller.setProperties({
      // Must be an Ember Array
      polylines: Ember.A([
        {
          id: 'unique-id', // Recommended
          path: [ // Required
            [48.866667, 2.333333], // Lat, Lng
            [44.833328, -0.56667]  // Lat, Lng
          ],
          click: function(event, polyline) {},
          rightclick: function(event, polyline) {},
          dblclick: function(event, polyline) {},
          mouseover: function(event, polyline) {},
          mouseout: function(event, polyline) {},
          mouseup: function(event, polyline) {},
          mousedown: function(event, polyline) {},
          mousemove: function(event, polyline) {},
          set_at: function(polylinePath) {},
          insert_at: function(polylinePath) {},
          remove_at: function(polylinePath) {},
          clickable: true,
          editable: true,
          geodesic: true,
          icons: [{
            icon: {
              path: google.maps.SymbolPath.FORWARD_CLOSED_ARROW // BACKWARD_CLOSED_ARROW | BACKWARD_OPEN_ARROW | CIRLCE | FORWARD_OPEN_ARROW
            },
            offset: '100%'
          }],
          strokeColor: 'blue',
          strokeOpacity: 0.3,
          strokeWeight: 3,
          visible: true,
          zIndex: 999
        }
      ])
    });
  }
});
