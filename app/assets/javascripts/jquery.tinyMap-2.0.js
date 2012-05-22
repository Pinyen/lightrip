/*
 * 本著作係依據創用 CC 姓名標示-相同方式分享 2.5 台灣 授權條款進行授權。
 * 如欲瀏覽本授權條款之副本，請造訪 http://creativecommons.org/licenses/by-sa/2.5/tw/
 * 或寄信至 Creative Commons, 171 Second Street, Suite 300, San Francisco, California, 94105, USA。
 *
 * This work is licensed under the Creative Commons Attribution-Share Alike 2.5 Taiwan License.
 * To view a copy of this license, visit http://creativecommons.org/licenses/by-sa/2.5/tw/
 * or send a letter to Creative Commons, 171 Second Street, Suite 300, San Francisco, California, 94105, USA.
 *
 * tinyMap 2.0 - 自訂個人 Google Map 的 jQuery 擴充套件
 * http://app.essoduke.org/tinyMap/
 */
'use strict';
(function (jQuery) {

    jQuery.fn.tinyMap = function (settings) {
    
        var apis;
        
        /*
         * Default Options
         */
        var options = jQuery.extend({
            center: {x: '25.04629767929873', y: '121.51752233505249'},
            control: true,
            draggable: true,
            keyboardShortcuts: true,
            mapTypeControl: true,
            mapTypeControlOptions: {
                position: 'TOP_RIGHT',
                style: 'DEFAULT'
            },
            mapTypeId: 'ROADMAP',
            marker: [],
            navigationControl: true,
            navigationControlOptions: {
                position: 'TOP_LEFT',
                style: 'DEFAULT'
            },
            scaleControl: true,
            scaleControlOptions: {
                position: 'BOTTOM_LEFT',
                style: 'DEFAULT'
            },
            scrollwheel: true,
            zoom: 13
        }, settings);
        
        /*
         * GoogleMap Options
         */
        var GoogleMapOptions = {
            center: new google.maps.LatLng(options.center.x, options.center.y),
            control: options.control,
            draggable: options.draggable,
            keyboardShortcuts: options.keyboardShortcuts,
            mapTypeId: google.maps.MapTypeId[options.mapTypeId.toUpperCase()],
            mapTypeControl: options.mapTypeControl,
            mapTypeControlOptions: {
                position: google.maps.ControlPosition[options.mapTypeControlOptions.position],
                style: google.maps.MapTypeControlStyle[options.mapTypeControlOptions.style.toUpperCase()]
            },
            navigationControl: options.navigationControl,
            navigationControlOptions: {
                position: google.maps.ControlPosition[options.navigationControlOptions.position],
                style: google.maps.NavigationControlStyle[options.navigationControlOptions.style.toUpperCase()]
            },
            scaleControl: options.scaleControl,
            scaleControlOptions: {
                position: google.maps.ControlPosition[options.scaleControlOptions.position],
                style: google.maps.ScaleControlStyle[options.scaleControlOptions.style.toUpperCase()]
            },
            scrollwheel: options.scrollwheel,
            zoom: options.zoom
        };
        
        /*
         * Private functions
         */
        var APIS = function (container) {
        
            /*
             * add travel direction to the map
             * <param name="map" type="object">map element</param>
             * <param name="options" type="json">direction options</param>
             */
            var direction = function (map, options) {

                var directionsService = new google.maps.DirectionsService();
                var directionsDisplay = new google.maps.DirectionsRenderer();
                var request = {
                    travelMode: google.maps.DirectionsTravelMode.DRIVING
                };
                
                if ('string' === typeof(options.from)) {
                    request.origin = options.from;
                }
                
                if ('string' === typeof(options.to)) {
                    request.destination = options.to;
                }
                
                if ('string' === typeof(options.travel)) {
                    if (0 < options.travel.length) {
                        request.travelMode = google.maps.DirectionsTravelMode[options.travel.toUpperCase()];
                    }
                }
                
                if ('undefined' !== typeof(request.origin) && 'undefined' !== typeof(request.destination)) {
                    directionsService.route(request, function (response, status) {
                        if (status === google.maps.DirectionsStatus.OK) {
                            directionsDisplay.setDirections(response);
                        }
                    });
                    directionsDisplay.setMap(map);
                }
                
            };
            
            /*
             * add markers and infoWindow to the map and bind the click event
             * <param name="map" type="object">map element</param>
             * <param name="options" type="json">marker option</param>
             */
            var geocode = function (map, options) {
                var geocoder = new google.maps.Geocoder();
                geocoder.geocode({'address': options.addr}, function (results, status) {

                    if (status === google.maps.GeocoderStatus.OK) {
                    
                        var infoWindow = new google.maps.InfoWindow({content: options.text});

                        var markerOptions = {
                            map: map,
                            position: results[0].geometry.location,
                            title: options.text
                        };
                        
                        if ('string' === typeof(options.icon)) {
                            markerOptions.icon = options.icon;
                        }
                        
                        var marker = new google.maps.Marker(markerOptions);

                        google.maps.event.addListener(marker, 'click', function () {
                            infoWindow.open(map, marker);
                        });
                    }
                });
            };
            
            /*
             * Public function
             */
            return {
            
                /*
                 * Google Map Initialize
                 */
                initialize: function () {

                    var map;

                    if ('string' === typeof(options.center)) {
                        var geocoder = new google.maps.Geocoder();
                        geocoder.geocode({'address': options.center}, function (results, status) {

                            GoogleMapOptions.center = (status === google.maps.GeocoderStatus.OK ? results[0].geometry.location : '');
                            map = new google.maps.Map(jQuery(container).get(0), GoogleMapOptions);

                            if ('undefined' !== typeof(options.direction)) {
                                if (0 < options.direction.length) {
                                    for (var d in options.direction) {
                                        if ('undefined' !== typeof(options.direction[d])) {
                                            direction(map, options.direction[d]);
                                        }
                                    }
                                }
                            }

                            if ('undefined' !== typeof(options.marker)) {
                                if (0 < options.marker.length) {
                                    for (var m in options.marker) {
                                        if ('undefined' !== typeof(options.marker[m])) {
                                            geocode(map, options.marker[m]);
                                        }
                                    }
                                }
                            }
                    
                        });
                    }
                    else {
                        map = new google.maps.Map(jQuery(container).get(0), GoogleMapOptions);
                    }

                    if ('undefined' !== typeof(options.direction)) {
                        if (0 < options.direction.length) {
                            for (var dir in options.direction) {
                                if ('undefined' !== typeof(options.direction[dir])) {
                                    direction(map, options.direction[dir]);
                                }
                            }
                        }
                    }
                    
                    if ('undefined' !== typeof(options.marker)) {
                        if (0 < options.marker.length) {
                            for (var mark in options.marker) {
                                if ('undefined' !== typeof(options.marker[mark])) {
                                    geocode(map, options.marker[mark]);
                                }
                            }
                        }
                    }
                }
            };
        };
        
        /*
         * Plugin Construct
         */
        return this.each(function () {
            apis = new APIS(this);
            apis.initialize();
        });
    };
    
})(jQuery);
