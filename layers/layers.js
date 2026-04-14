var wms_layers = [];


        var lyr_GoogleHybrid_0 = new ol.layer.Tile({
            'title': 'Google Hybrid',
            'opacity': 1.000000,
            
            
            source: new ol.source.XYZ({
            attributions: ' &nbsp &middot; <a href="https://www.google.at/permissions/geoguidelines/attr-guide.html">Map data ©2015 Google</a>',
                url: 'https://mt1.google.com/vt/lyrs=y&x={x}&y={y}&z={z}'
            })
        });

        var lyr_GoogleSatellite_1 = new ol.layer.Tile({
            'title': 'Google Satellite',
            'opacity': 1.000000,
            
            
            source: new ol.source.XYZ({
            attributions: ' &nbsp &middot; <a href="https://www.google.at/permissions/geoguidelines/attr-guide.html">Map data ©2015 Google</a>',
                url: 'https://mt1.google.com/vt/lyrs=s&x={x}&y={y}&z={z}'
            })
        });

        var lyr_GoogleLabels_2 = new ol.layer.Tile({
            'title': 'Google Labels',
            'opacity': 1.000000,
            
            
            source: new ol.source.XYZ({
            attributions: ' &nbsp &middot; <a href="https://www.google.at/permissions/geoguidelines/attr-guide.html">Map data ©2015 Google</a>',
                url: 'https://mt1.google.com/vt/lyrs=h&x={x}&y={y}&z={z}'
            })
        });

          var lyr_OSMStandard_3 = new ol.layer.Tile({
            'title': 'OSM Standard',
            'opacity': 1.000000


            source: new ol.source.XYZ({
            attributions: ' &nbsp &middot; <a href="https://www.openstreetmap.org/copyright">© OpenStreetMap contributors, CC-BY-SA</a>',
                url: 'http://tile.openstreetmap.org/{z}/{x}/{y}.png'
            }) 
        });
var format_English_Other_30_true_4 = new ol.format.GeoJSON();
var features_English_Other_30_true_4 = format_English_Other_30_true_4.readFeatures(json_English_Other_30_true_4, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_English_Other_30_true_4 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_English_Other_30_true_4.addFeatures(features_English_Other_30_true_4);
var lyr_English_Other_30_true_4 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_English_Other_30_true_4, 
                style: style_English_Other_30_true_4,
                popuplayertitle: 'English_Other_30_true',
                interactive: true,
                title: '<img src="styles/legend/English_Other_30_true_4.png" /> 30%≤ English = Others <40%'
            });
var format_English_Other_40_true_5 = new ol.format.GeoJSON();
var features_English_Other_40_true_5 = format_English_Other_40_true_5.readFeatures(json_English_Other_40_true_5, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_English_Other_40_true_5 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_English_Other_40_true_5.addFeatures(features_English_Other_40_true_5);
var lyr_English_Other_40_true_5 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_English_Other_40_true_5, 
                style: style_English_Other_40_true_5,
                popuplayertitle: 'English_Other_40_true',
                interactive: true,
                title: '<img src="styles/legend/English_Other_40_true_5.png" /> 40%≤ English = Others <50%'
            });
var format_Irish_English_true_6 = new ol.format.GeoJSON();
var features_Irish_English_true_6 = format_Irish_English_true_6.readFeatures(json_Irish_English_true_6, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Irish_English_true_6 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Irish_English_true_6.addFeatures(features_Irish_English_true_6);
var lyr_Irish_English_true_6 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_Irish_English_true_6, 
                style: style_Irish_English_true_6,
                popuplayertitle: 'Irish_English_true',
                interactive: true,
                title: '<img src="styles/legend/Irish_English_true_6.png" /> 40%≤ Irish = English <50%'
            });
var format_Other_30_true_7 = new ol.format.GeoJSON();
var features_Other_30_true_7 = format_Other_30_true_7.readFeatures(json_Other_30_true_7, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Other_30_true_7 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Other_30_true_7.addFeatures(features_Other_30_true_7);
var lyr_Other_30_true_7 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_Other_30_true_7, 
                style: style_Other_30_true_7,
                popuplayertitle: 'Other_30_true',
                interactive: true,
                title: '<img src="styles/legend/Other_30_true_7.png" /> 30%≤ Others <40%'
            });
var format_Other_40_true_8 = new ol.format.GeoJSON();
var features_Other_40_true_8 = format_Other_40_true_8.readFeatures(json_Other_40_true_8, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Other_40_true_8 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Other_40_true_8.addFeatures(features_Other_40_true_8);
var lyr_Other_40_true_8 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_Other_40_true_8, 
                style: style_Other_40_true_8,
                popuplayertitle: 'Other_40_true',
                interactive: true,
                title: '<img src="styles/legend/Other_40_true_8.png" /> 40%≤ Others <50%'
            });
var format_Other_50_true_9 = new ol.format.GeoJSON();
var features_Other_50_true_9 = format_Other_50_true_9.readFeatures(json_Other_50_true_9, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Other_50_true_9 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Other_50_true_9.addFeatures(features_Other_50_true_9);
var lyr_Other_50_true_9 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_Other_50_true_9, 
                style: style_Other_50_true_9,
                popuplayertitle: 'Other_50_true',
                interactive: true,
                title: '<img src="styles/legend/Other_50_true_9.png" /> 50%≤ Others <60%'
            });
var format_Other_60_true_10 = new ol.format.GeoJSON();
var features_Other_60_true_10 = format_Other_60_true_10.readFeatures(json_Other_60_true_10, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Other_60_true_10 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Other_60_true_10.addFeatures(features_Other_60_true_10);
var lyr_Other_60_true_10 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_Other_60_true_10, 
                style: style_Other_60_true_10,
                popuplayertitle: 'Other_60_true',
                interactive: true,
                title: '<img src="styles/legend/Other_60_true_10.png" /> 60%≤ Others <70%'
            });
var format_Other_70_true_11 = new ol.format.GeoJSON();
var features_Other_70_true_11 = format_Other_70_true_11.readFeatures(json_Other_70_true_11, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Other_70_true_11 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Other_70_true_11.addFeatures(features_Other_70_true_11);
var lyr_Other_70_true_11 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_Other_70_true_11, 
                style: style_Other_70_true_11,
                popuplayertitle: 'Other_70_true',
                interactive: true,
                title: '<img src="styles/legend/Other_70_true_11.png" /> 70%≤ Others <80%'
            });
var format_Other_80_true_12 = new ol.format.GeoJSON();
var features_Other_80_true_12 = format_Other_80_true_12.readFeatures(json_Other_80_true_12, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Other_80_true_12 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Other_80_true_12.addFeatures(features_Other_80_true_12);
var lyr_Other_80_true_12 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_Other_80_true_12, 
                style: style_Other_80_true_12,
                popuplayertitle: 'Other_80_true',
                interactive: true,
                title: '<img src="styles/legend/Other_80_true_12.png" /> 80%≤ Others <90%'
            });
var format_Polish_40_true_13 = new ol.format.GeoJSON();
var features_Polish_40_true_13 = format_Polish_40_true_13.readFeatures(json_Polish_40_true_13, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Polish_40_true_13 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Polish_40_true_13.addFeatures(features_Polish_40_true_13);
var lyr_Polish_40_true_13 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_Polish_40_true_13, 
                style: style_Polish_40_true_13,
                popuplayertitle: 'Polish_40_true',
                interactive: true,
                title: '<img src="styles/legend/Polish_40_true_13.png" /> 40%≤ Polish <50%'
            });
var format_English_30_true_14 = new ol.format.GeoJSON();
var features_English_30_true_14 = format_English_30_true_14.readFeatures(json_English_30_true_14, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_English_30_true_14 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_English_30_true_14.addFeatures(features_English_30_true_14);
var lyr_English_30_true_14 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_English_30_true_14, 
                style: style_English_30_true_14,
                popuplayertitle: 'English_30_true',
                interactive: true,
                title: '<img src="styles/legend/English_30_true_14.png" /> 30%≤ English <40%'
            });
var format_English_40_true_15 = new ol.format.GeoJSON();
var features_English_40_true_15 = format_English_40_true_15.readFeatures(json_English_40_true_15, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_English_40_true_15 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_English_40_true_15.addFeatures(features_English_40_true_15);
var lyr_English_40_true_15 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_English_40_true_15, 
                style: style_English_40_true_15,
                popuplayertitle: 'English_40_true',
                interactive: true,
                title: '<img src="styles/legend/English_40_true_15.png" /> 40%≤ English <50%'
            });
var format_English_50_true_16 = new ol.format.GeoJSON();
var features_English_50_true_16 = format_English_50_true_16.readFeatures(json_English_50_true_16, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_English_50_true_16 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_English_50_true_16.addFeatures(features_English_50_true_16);
var lyr_English_50_true_16 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_English_50_true_16, 
                style: style_English_50_true_16,
                popuplayertitle: 'English_50_true',
                interactive: true,
                title: '<img src="styles/legend/English_50_true_16.png" /> 50%≤ English <60%'
            });
var format_English_60_true_17 = new ol.format.GeoJSON();
var features_English_60_true_17 = format_English_60_true_17.readFeatures(json_English_60_true_17, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_English_60_true_17 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_English_60_true_17.addFeatures(features_English_60_true_17);
var lyr_English_60_true_17 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_English_60_true_17, 
                style: style_English_60_true_17,
                popuplayertitle: 'English_60_true',
                interactive: true,
                title: '<img src="styles/legend/English_60_true_17.png" /> 60%≤ English <70%'
            });
var format_English_70_true_18 = new ol.format.GeoJSON();
var features_English_70_true_18 = format_English_70_true_18.readFeatures(json_English_70_true_18, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_English_70_true_18 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_English_70_true_18.addFeatures(features_English_70_true_18);
var lyr_English_70_true_18 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_English_70_true_18, 
                style: style_English_70_true_18,
                popuplayertitle: 'English_70_true',
                interactive: true,
                title: '<img src="styles/legend/English_70_true_18.png" /> 70%≤ English <80%'
            });
var format_English_80_true_19 = new ol.format.GeoJSON();
var features_English_80_true_19 = format_English_80_true_19.readFeatures(json_English_80_true_19, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_English_80_true_19 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_English_80_true_19.addFeatures(features_English_80_true_19);
var lyr_English_80_true_19 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_English_80_true_19, 
                style: style_English_80_true_19,
                popuplayertitle: 'English_80_true',
                interactive: true,
                title: '<img src="styles/legend/English_80_true_19.png" /> 80%≤ English <90%'
            });
var format_English_90_true_4_20 = new ol.format.GeoJSON();
var features_English_90_true_4_20 = format_English_90_true_4_20.readFeatures(json_English_90_true_4_20, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_English_90_true_4_20 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_English_90_true_4_20.addFeatures(features_English_90_true_4_20);
var lyr_English_90_true_4_20 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_English_90_true_4_20, 
                style: style_English_90_true_4_20,
                popuplayertitle: 'English_90_true',
                interactive: true,
                
            });
var format_English_90_true_3_21 = new ol.format.GeoJSON();
var features_English_90_true_3_21 = format_English_90_true_3_21.readFeatures(json_English_90_true_3_21, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_English_90_true_3_21 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_English_90_true_3_21.addFeatures(features_English_90_true_3_21);
var lyr_English_90_true_3_21 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_English_90_true_3_21, 
                style: style_English_90_true_3_21,
                popuplayertitle: 'English_90_true',
                interactive: true,
                            });
var format_English_90_true_2_22 = new ol.format.GeoJSON();
var features_English_90_true_2_22 = format_English_90_true_2_22.readFeatures(json_English_90_true_2_22, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_English_90_true_2_22 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_English_90_true_2_22.addFeatures(features_English_90_true_2_22);
var lyr_English_90_true_2_22 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_English_90_true_2_22, 
                style: style_English_90_true_2_22,
                popuplayertitle: 'English_90_true',
                interactive: true,
                            });
var format_English_90_true_1_23 = new ol.format.GeoJSON();
var features_English_90_true_1_23 = format_English_90_true_1_23.readFeatures(json_English_90_true_1_23, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_English_90_true_1_23 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_English_90_true_1_23.addFeatures(features_English_90_true_1_23);
var lyr_English_90_true_1_23 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_English_90_true_1_23, 
                style: style_English_90_true_1_23,
                popuplayertitle: 'English_90_true',
                interactive: true,
                            });
var format_English_100_true_24 = new ol.format.GeoJSON();
var features_English_100_true_24 = format_English_100_true_24.readFeatures(json_English_100_true_24, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_English_100_true_24 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_English_100_true_24.addFeatures(features_English_100_true_24);
var lyr_English_100_true_24 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_English_100_true_24, 
                style: style_English_100_true_24,
                popuplayertitle: 'English_100_true',
                interactive: true,
                title: '<img src="styles/legend/English_100_true_24.png" /> English =100%'
            });
var format_Irish_40_true_25 = new ol.format.GeoJSON();
var features_Irish_40_true_25 = format_Irish_40_true_25.readFeatures(json_Irish_40_true_25, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Irish_40_true_25 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Irish_40_true_25.addFeatures(features_Irish_40_true_25);
var lyr_Irish_40_true_25 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_Irish_40_true_25, 
                style: style_Irish_40_true_25,
                popuplayertitle: 'Irish_40_true',
                interactive: true,
                title: '<img src="styles/legend/Irish_40_true_25.png" /> 40%≤ Irish <50%'
            });
var format_Irish_50_true_26 = new ol.format.GeoJSON();
var features_Irish_50_true_26 = format_Irish_50_true_26.readFeatures(json_Irish_50_true_26, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Irish_50_true_26 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Irish_50_true_26.addFeatures(features_Irish_50_true_26);
var lyr_Irish_50_true_26 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_Irish_50_true_26, 
                style: style_Irish_50_true_26,
                popuplayertitle: 'Irish_50_true',
                interactive: true,
                title: '<img src="styles/legend/Irish_50_true_26.png" /> 50%≤ Irish <60%'
            });
var format_Irish_60_true_27 = new ol.format.GeoJSON();
var features_Irish_60_true_27 = format_Irish_60_true_27.readFeatures(json_Irish_60_true_27, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Irish_60_true_27 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Irish_60_true_27.addFeatures(features_Irish_60_true_27);
var lyr_Irish_60_true_27 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_Irish_60_true_27, 
                style: style_Irish_60_true_27,
                popuplayertitle: 'Irish_60_true',
                interactive: true,
                title: '<img src="styles/legend/Irish_60_true_27.png" /> 60%≤ Irish <70%'
            });
var format_Irish_70_true_28 = new ol.format.GeoJSON();
var features_Irish_70_true_28 = format_Irish_70_true_28.readFeatures(json_Irish_70_true_28, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Irish_70_true_28 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Irish_70_true_28.addFeatures(features_Irish_70_true_28);
var lyr_Irish_70_true_28 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_Irish_70_true_28, 
                style: style_Irish_70_true_28,
                popuplayertitle: 'Irish_70_true',
                interactive: true,
                title: '<img src="styles/legend/Irish_70_true_28.png" /> 70%≤ Irish <80%'
            });
var group_English_90_true = new ol.layer.Group({
                                layers: [lyr_English_90_true_4_20,lyr_English_90_true_3_21,lyr_English_90_true_2_22,lyr_English_90_true_1_23,],
                                fold: 'open',
                                title: '<img src="styles/legend/English_90_true_2_22.png" /> 90%≤ English <100%'});

lyr_GoogleHybrid_0.setVisible(false);lyr_GoogleSatellite_1.setVisible(false);lyr_GoogleLabels_2.setVisible(false);lyr_OSMStandard_3.setVisible(true);lyr_English_Other_30_true_4.setVisible(true);lyr_English_Other_40_true_5.setVisible(true);lyr_Irish_English_true_6.setVisible(true);lyr_Other_30_true_7.setVisible(true);lyr_Other_40_true_8.setVisible(true);lyr_Other_50_true_9.setVisible(true);lyr_Other_60_true_10.setVisible(true);lyr_Other_70_true_11.setVisible(true);lyr_Other_80_true_12.setVisible(true);lyr_Polish_40_true_13.setVisible(true);lyr_English_30_true_14.setVisible(true);lyr_English_40_true_15.setVisible(true);lyr_English_50_true_16.setVisible(true);lyr_English_60_true_17.setVisible(true);lyr_English_70_true_18.setVisible(true);lyr_English_80_true_19.setVisible(true);lyr_English_90_true_4_20.setVisible(true);lyr_English_90_true_3_21.setVisible(true);lyr_English_90_true_2_22.setVisible(true);lyr_English_90_true_1_23.setVisible(true);lyr_English_100_true_24.setVisible(true);lyr_Irish_40_true_25.setVisible(true);lyr_Irish_50_true_26.setVisible(true);lyr_Irish_60_true_27.setVisible(true);lyr_Irish_70_true_28.setVisible(true);
var layersList = [lyr_GoogleHybrid_0,lyr_GoogleSatellite_1,lyr_GoogleLabels_2,lyr_OSMStandard_3,lyr_English_Other_30_true_4,lyr_English_Other_40_true_5,lyr_Irish_English_true_6,lyr_Other_30_true_7,lyr_Other_40_true_8,lyr_Other_50_true_9,lyr_Other_60_true_10,lyr_Other_70_true_11,lyr_Other_80_true_12,lyr_Polish_40_true_13,lyr_English_30_true_14,lyr_English_40_true_15,lyr_English_50_true_16,lyr_English_60_true_17,lyr_English_70_true_18,lyr_English_80_true_19,group_English_90_true,lyr_English_100_true_24,lyr_Irish_40_true_25,lyr_Irish_50_true_26,lyr_Irish_60_true_27,lyr_Irish_70_true_28];
lyr_English_Other_30_true_4.set('fieldAliases', {'SA_PUB2022': 'SA_PUB2022', 'ED_ENGLISH': 'ED_ENGLISH', 'ED_GAEILGE': 'ED_GAEILGE', 'COUNTY_ENGLISH': 'COUNTY_ENGLISH', 'COUNTY_GAEILGE': 'COUNTY_GAEILGE', 'Irish': 'Irish', 'English': 'English', 'Polish': 'Polish', 'French': 'French', 'Spanish': 'Spanish', 'Other': 'Other', 'Total': 'Total', });
lyr_English_Other_40_true_5.set('fieldAliases', {'SA_PUB2022': 'SA_PUB2022', 'ED_ENGLISH': 'ED_ENGLISH', 'ED_GAEILGE': 'ED_GAEILGE', 'COUNTY_ENGLISH': 'COUNTY_ENGLISH', 'COUNTY_GAEILGE': 'COUNTY_GAEILGE', 'Irish': 'Irish', 'English': 'English', 'Polish': 'Polish', 'French': 'French', 'Spanish': 'Spanish', 'Other': 'Other', 'Total': 'Total', });
lyr_Irish_English_true_6.set('fieldAliases', {'SA_PUB2022': 'SA_PUB2022', 'ED_ENGLISH': 'ED_ENGLISH', 'ED_GAEILGE': 'ED_GAEILGE', 'COUNTY_ENGLISH': 'COUNTY_ENGLISH', 'COUNTY_GAEILGE': 'COUNTY_GAEILGE', 'Irish': 'Irish', 'English': 'English', 'Polish': 'Polish', 'French': 'French', 'Spanish': 'Spanish', 'Other': 'Other', 'Total': 'Total', });
lyr_Other_30_true_7.set('fieldAliases', {'SA_PUB2022': 'SA_PUB2022', 'ED_ENGLISH': 'ED_ENGLISH', 'ED_GAEILGE': 'ED_GAEILGE', 'COUNTY_ENGLISH': 'COUNTY_ENGLISH', 'COUNTY_GAEILGE': 'COUNTY_GAEILGE', 'Irish': 'Irish', 'English': 'English', 'Polish': 'Polish', 'French': 'French', 'Spanish': 'Spanish', 'Other': 'Other', 'Total': 'Total', });
lyr_Other_40_true_8.set('fieldAliases', {'SA_PUB2022': 'SA_PUB2022', 'ED_ENGLISH': 'ED_ENGLISH', 'ED_GAEILGE': 'ED_GAEILGE', 'COUNTY_ENGLISH': 'COUNTY_ENGLISH', 'COUNTY_GAEILGE': 'COUNTY_GAEILGE', 'Irish': 'Irish', 'English': 'English', 'Polish': 'Polish', 'French': 'French', 'Spanish': 'Spanish', 'Other': 'Other', 'Total': 'Total', });
lyr_Other_50_true_9.set('fieldAliases', {'SA_PUB2022': 'SA_PUB2022', 'ED_ENGLISH': 'ED_ENGLISH', 'ED_GAEILGE': 'ED_GAEILGE', 'COUNTY_ENGLISH': 'COUNTY_ENGLISH', 'COUNTY_GAEILGE': 'COUNTY_GAEILGE', 'Irish': 'Irish', 'English': 'English', 'Polish': 'Polish', 'French': 'French', 'Spanish': 'Spanish', 'Other': 'Other', 'Total': 'Total', });
lyr_Other_60_true_10.set('fieldAliases', {'SA_PUB2022': 'SA_PUB2022', 'ED_ENGLISH': 'ED_ENGLISH', 'ED_GAEILGE': 'ED_GAEILGE', 'COUNTY_ENGLISH': 'COUNTY_ENGLISH', 'COUNTY_GAEILGE': 'COUNTY_GAEILGE', 'Irish': 'Irish', 'English': 'English', 'Polish': 'Polish', 'French': 'French', 'Spanish': 'Spanish', 'Other': 'Other', 'Total': 'Total', });
lyr_Other_70_true_11.set('fieldAliases', {'SA_PUB2022': 'SA_PUB2022', 'ED_ENGLISH': 'ED_ENGLISH', 'ED_GAEILGE': 'ED_GAEILGE', 'COUNTY_ENGLISH': 'COUNTY_ENGLISH', 'COUNTY_GAEILGE': 'COUNTY_GAEILGE', 'Irish': 'Irish', 'English': 'English', 'Polish': 'Polish', 'French': 'French', 'Spanish': 'Spanish', 'Other': 'Other', 'Total': 'Total', });
lyr_Other_80_true_12.set('fieldAliases', {'SA_PUB2022': 'SA_PUB2022', 'ED_ENGLISH': 'ED_ENGLISH', 'ED_GAEILGE': 'ED_GAEILGE', 'COUNTY_ENGLISH': 'COUNTY_ENGLISH', 'COUNTY_GAEILGE': 'COUNTY_GAEILGE', 'Irish': 'Irish', 'English': 'English', 'Polish': 'Polish', 'French': 'French', 'Spanish': 'Spanish', 'Other': 'Other', 'Total': 'Total', });
lyr_Polish_40_true_13.set('fieldAliases', {'SA_PUB2022': 'SA_PUB2022', 'ED_ENGLISH': 'ED_ENGLISH', 'ED_GAEILGE': 'ED_GAEILGE', 'COUNTY_ENGLISH': 'COUNTY_ENGLISH', 'COUNTY_GAEILGE': 'COUNTY_GAEILGE', 'Irish': 'Irish', 'English': 'English', 'Polish': 'Polish', 'French': 'French', 'Spanish': 'Spanish', 'Other': 'Other', 'Total': 'Total', });
lyr_English_30_true_14.set('fieldAliases', {'SA_PUB2022': 'SA_PUB2022', 'ED_ENGLISH': 'ED_ENGLISH', 'ED_GAEILGE': 'ED_GAEILGE', 'COUNTY_ENGLISH': 'COUNTY_ENGLISH', 'COUNTY_GAEILGE': 'COUNTY_GAEILGE', 'Irish': 'Irish', 'English': 'English', 'Polish': 'Polish', 'French': 'French', 'Spanish': 'Spanish', 'Other': 'Other', 'Total': 'Total', });
lyr_English_40_true_15.set('fieldAliases', {'SA_PUB2022': 'SA_PUB2022', 'ED_ENGLISH': 'ED_ENGLISH', 'ED_GAEILGE': 'ED_GAEILGE', 'COUNTY_ENGLISH': 'COUNTY_ENGLISH', 'COUNTY_GAEILGE': 'COUNTY_GAEILGE', 'Irish': 'Irish', 'English': 'English', 'Polish': 'Polish', 'French': 'French', 'Spanish': 'Spanish', 'Other': 'Other', 'Total': 'Total', });
lyr_English_50_true_16.set('fieldAliases', {'SA_PUB2022': 'SA_PUB2022', 'ED_ENGLISH': 'ED_ENGLISH', 'ED_GAEILGE': 'ED_GAEILGE', 'COUNTY_ENGLISH': 'COUNTY_ENGLISH', 'COUNTY_GAEILGE': 'COUNTY_GAEILGE', 'Irish': 'Irish', 'English': 'English', 'Polish': 'Polish', 'French': 'French', 'Spanish': 'Spanish', 'Other': 'Other', 'Total': 'Total', });
lyr_English_60_true_17.set('fieldAliases', {'SA_PUB2022': 'SA_PUB2022', 'ED_ENGLISH': 'ED_ENGLISH', 'ED_GAEILGE': 'ED_GAEILGE', 'COUNTY_ENGLISH': 'COUNTY_ENGLISH', 'COUNTY_GAEILGE': 'COUNTY_GAEILGE', 'Irish': 'Irish', 'English': 'English', 'Polish': 'Polish', 'French': 'French', 'Spanish': 'Spanish', 'Other': 'Other', 'Total': 'Total', });
lyr_English_70_true_18.set('fieldAliases', {'SA_PUB2022': 'SA_PUB2022', 'ED_ENGLISH': 'ED_ENGLISH', 'ED_GAEILGE': 'ED_GAEILGE', 'COUNTY_ENGLISH': 'COUNTY_ENGLISH', 'COUNTY_GAEILGE': 'COUNTY_GAEILGE', 'Irish': 'Irish', 'English': 'English', 'Polish': 'Polish', 'French': 'French', 'Spanish': 'Spanish', 'Other': 'Other', 'Total': 'Total', });
lyr_English_80_true_19.set('fieldAliases', {'SA_PUB2022': 'SA_PUB2022', 'ED_ENGLISH': 'ED_ENGLISH', 'ED_GAEILGE': 'ED_GAEILGE', 'COUNTY_ENGLISH': 'COUNTY_ENGLISH', 'COUNTY_GAEILGE': 'COUNTY_GAEILGE', 'Irish': 'Irish', 'English': 'English', 'Polish': 'Polish', 'French': 'French', 'Spanish': 'Spanish', 'Other': 'Other', 'Total': 'Total', });
lyr_English_90_true_4_20.set('fieldAliases', {'SA_PUB2022': 'SA_PUB2022', 'ED_ENGLISH': 'ED_ENGLISH', 'ED_GAEILGE': 'ED_GAEILGE', 'COUNTY_ENGLISH': 'COUNTY_ENGLISH', 'COUNTY_GAEILGE': 'COUNTY_GAEILGE', 'Irish': 'Irish', 'English': 'English', 'Polish': 'Polish', 'French': 'French', 'Spanish': 'Spanish', 'Other': 'Other', 'Total': 'Total', });
lyr_English_90_true_3_21.set('fieldAliases', {'SA_PUB2022': 'SA_PUB2022', 'ED_ENGLISH': 'ED_ENGLISH', 'ED_GAEILGE': 'ED_GAEILGE', 'COUNTY_ENGLISH': 'COUNTY_ENGLISH', 'COUNTY_GAEILGE': 'COUNTY_GAEILGE', 'Irish': 'Irish', 'English': 'English', 'Polish': 'Polish', 'French': 'French', 'Spanish': 'Spanish', 'Other': 'Other', 'Total': 'Total', });
lyr_English_90_true_2_22.set('fieldAliases', {'SA_PUB2022': 'SA_PUB2022', 'ED_ENGLISH': 'ED_ENGLISH', 'ED_GAEILGE': 'ED_GAEILGE', 'COUNTY_ENGLISH': 'COUNTY_ENGLISH', 'COUNTY_GAEILGE': 'COUNTY_GAEILGE', 'Irish': 'Irish', 'English': 'English', 'Polish': 'Polish', 'French': 'French', 'Spanish': 'Spanish', 'Other': 'Other', 'Total': 'Total', });
lyr_English_90_true_1_23.set('fieldAliases', {'SA_PUB2022': 'SA_PUB2022', 'ED_ENGLISH': 'ED_ENGLISH', 'ED_GAEILGE': 'ED_GAEILGE', 'COUNTY_ENGLISH': 'COUNTY_ENGLISH', 'COUNTY_GAEILGE': 'COUNTY_GAEILGE', 'Irish': 'Irish', 'English': 'English', 'Polish': 'Polish', 'French': 'French', 'Spanish': 'Spanish', 'Other': 'Other', 'Total': 'Total', });
lyr_English_100_true_24.set('fieldAliases', {'SA_PUB2022': 'SA_PUB2022', 'ED_ENGLISH': 'ED_ENGLISH', 'ED_GAEILGE': 'ED_GAEILGE', 'COUNTY_ENGLISH': 'COUNTY_ENGLISH', 'COUNTY_GAEILGE': 'COUNTY_GAEILGE', 'Irish': 'Irish', 'English': 'English', 'Polish': 'Polish', 'French': 'French', 'Spanish': 'Spanish', 'Other': 'Other', 'Total': 'Total', });
lyr_Irish_40_true_25.set('fieldAliases', {'SA_PUB2022': 'SA_PUB2022', 'ED_ENGLISH': 'ED_ENGLISH', 'ED_GAEILGE': 'ED_GAEILGE', 'COUNTY_ENGLISH': 'COUNTY_ENGLISH', 'COUNTY_GAEILGE': 'COUNTY_GAEILGE', 'Irish': 'Irish', 'English': 'English', 'Polish': 'Polish', 'French': 'French', 'Spanish': 'Spanish', 'Other': 'Other', 'Total': 'Total', });
lyr_Irish_50_true_26.set('fieldAliases', {'SA_PUB2022': 'SA_PUB2022', 'ED_ENGLISH': 'ED_ENGLISH', 'ED_GAEILGE': 'ED_GAEILGE', 'COUNTY_ENGLISH': 'COUNTY_ENGLISH', 'COUNTY_GAEILGE': 'COUNTY_GAEILGE', 'Irish': 'Irish', 'English': 'English', 'Polish': 'Polish', 'French': 'French', 'Spanish': 'Spanish', 'Other': 'Other', 'Total': 'Total', });
lyr_Irish_60_true_27.set('fieldAliases', {'SA_PUB2022': 'SA_PUB2022', 'ED_ENGLISH': 'ED_ENGLISH', 'ED_GAEILGE': 'ED_GAEILGE', 'COUNTY_ENGLISH': 'COUNTY_ENGLISH', 'COUNTY_GAEILGE': 'COUNTY_GAEILGE', 'Irish': 'Irish', 'English': 'English', 'Polish': 'Polish', 'French': 'French', 'Spanish': 'Spanish', 'Other': 'Other', 'Total': 'Total', });
lyr_Irish_70_true_28.set('fieldAliases', {'SA_PUB2022': 'SA_PUB2022', 'ED_ENGLISH': 'ED_ENGLISH', 'ED_GAEILGE': 'ED_GAEILGE', 'COUNTY_ENGLISH': 'COUNTY_ENGLISH', 'COUNTY_GAEILGE': 'COUNTY_GAEILGE', 'Irish': 'Irish', 'English': 'English', 'Polish': 'Polish', 'French': 'French', 'Spanish': 'Spanish', 'Other': 'Other', 'Total': 'Total', });
lyr_English_Other_30_true_4.set('fieldImages', {'SA_PUB2022': '', 'ED_ENGLISH': '', 'ED_GAEILGE': '', 'COUNTY_ENGLISH': '', 'COUNTY_GAEILGE': '', 'Irish': '', 'English': '', 'Polish': '', 'French': '', 'Spanish': '', 'Other': '', 'Total': '', });
lyr_English_Other_40_true_5.set('fieldImages', {'SA_PUB2022': '', 'ED_ENGLISH': '', 'ED_GAEILGE': '', 'COUNTY_ENGLISH': '', 'COUNTY_GAEILGE': '', 'Irish': '', 'English': '', 'Polish': '', 'French': '', 'Spanish': '', 'Other': '', 'Total': '', });
lyr_Irish_English_true_6.set('fieldImages', {'SA_PUB2022': '', 'ED_ENGLISH': '', 'ED_GAEILGE': '', 'COUNTY_ENGLISH': '', 'COUNTY_GAEILGE': '', 'Irish': '', 'English': '', 'Polish': '', 'French': '', 'Spanish': '', 'Other': '', 'Total': '', });
lyr_Other_30_true_7.set('fieldImages', {'SA_PUB2022': '', 'ED_ENGLISH': '', 'ED_GAEILGE': '', 'COUNTY_ENGLISH': '', 'COUNTY_GAEILGE': '', 'Irish': '', 'English': '', 'Polish': '', 'French': '', 'Spanish': '', 'Other': '', 'Total': '', });
lyr_Other_40_true_8.set('fieldImages', {'SA_PUB2022': '', 'ED_ENGLISH': '', 'ED_GAEILGE': '', 'COUNTY_ENGLISH': '', 'COUNTY_GAEILGE': '', 'Irish': '', 'English': '', 'Polish': '', 'French': '', 'Spanish': '', 'Other': '', 'Total': '', });
lyr_Other_50_true_9.set('fieldImages', {'SA_PUB2022': '', 'ED_ENGLISH': '', 'ED_GAEILGE': '', 'COUNTY_ENGLISH': '', 'COUNTY_GAEILGE': '', 'Irish': '', 'English': '', 'Polish': '', 'French': '', 'Spanish': '', 'Other': '', 'Total': '', });
lyr_Other_60_true_10.set('fieldImages', {'SA_PUB2022': '', 'ED_ENGLISH': '', 'ED_GAEILGE': '', 'COUNTY_ENGLISH': '', 'COUNTY_GAEILGE': '', 'Irish': '', 'English': '', 'Polish': '', 'French': '', 'Spanish': '', 'Other': '', 'Total': '', });
lyr_Other_70_true_11.set('fieldImages', {'SA_PUB2022': '', 'ED_ENGLISH': '', 'ED_GAEILGE': '', 'COUNTY_ENGLISH': '', 'COUNTY_GAEILGE': '', 'Irish': '', 'English': '', 'Polish': '', 'French': '', 'Spanish': '', 'Other': '', 'Total': '', });
lyr_Other_80_true_12.set('fieldImages', {'SA_PUB2022': '', 'ED_ENGLISH': '', 'ED_GAEILGE': '', 'COUNTY_ENGLISH': '', 'COUNTY_GAEILGE': '', 'Irish': '', 'English': '', 'Polish': '', 'French': '', 'Spanish': '', 'Other': '', 'Total': '', });
lyr_Polish_40_true_13.set('fieldImages', {'SA_PUB2022': '', 'ED_ENGLISH': '', 'ED_GAEILGE': '', 'COUNTY_ENGLISH': '', 'COUNTY_GAEILGE': '', 'Irish': '', 'English': '', 'Polish': '', 'French': '', 'Spanish': '', 'Other': '', 'Total': '', });
lyr_English_30_true_14.set('fieldImages', {'SA_PUB2022': '', 'ED_ENGLISH': '', 'ED_GAEILGE': '', 'COUNTY_ENGLISH': '', 'COUNTY_GAEILGE': '', 'Irish': '', 'English': '', 'Polish': '', 'French': '', 'Spanish': '', 'Other': '', 'Total': '', });
lyr_English_40_true_15.set('fieldImages', {'SA_PUB2022': '', 'ED_ENGLISH': '', 'ED_GAEILGE': '', 'COUNTY_ENGLISH': '', 'COUNTY_GAEILGE': '', 'Irish': '', 'English': '', 'Polish': '', 'French': '', 'Spanish': '', 'Other': '', 'Total': '', });
lyr_English_50_true_16.set('fieldImages', {'SA_PUB2022': '', 'ED_ENGLISH': '', 'ED_GAEILGE': '', 'COUNTY_ENGLISH': '', 'COUNTY_GAEILGE': '', 'Irish': '', 'English': '', 'Polish': '', 'French': '', 'Spanish': '', 'Other': '', 'Total': '', });
lyr_English_60_true_17.set('fieldImages', {'SA_PUB2022': '', 'ED_ENGLISH': '', 'ED_GAEILGE': '', 'COUNTY_ENGLISH': '', 'COUNTY_GAEILGE': '', 'Irish': '', 'English': '', 'Polish': '', 'French': '', 'Spanish': '', 'Other': '', 'Total': '', });
lyr_English_70_true_18.set('fieldImages', {'SA_PUB2022': '', 'ED_ENGLISH': '', 'ED_GAEILGE': '', 'COUNTY_ENGLISH': '', 'COUNTY_GAEILGE': '', 'Irish': '', 'English': '', 'Polish': '', 'French': '', 'Spanish': '', 'Other': '', 'Total': '', });
lyr_English_80_true_19.set('fieldImages', {'SA_PUB2022': '', 'ED_ENGLISH': '', 'ED_GAEILGE': '', 'COUNTY_ENGLISH': '', 'COUNTY_GAEILGE': '', 'Irish': '', 'English': '', 'Polish': '', 'French': '', 'Spanish': '', 'Other': '', 'Total': '', });
lyr_English_90_true_4_20.set('fieldImages', {'SA_PUB2022': '', 'ED_ENGLISH': '', 'ED_GAEILGE': '', 'COUNTY_ENGLISH': '', 'COUNTY_GAEILGE': '', 'Irish': '', 'English': '', 'Polish': '', 'French': '', 'Spanish': '', 'Other': '', 'Total': '', });
lyr_English_90_true_3_21.set('fieldImages', {'SA_PUB2022': '', 'ED_ENGLISH': '', 'ED_GAEILGE': '', 'COUNTY_ENGLISH': '', 'COUNTY_GAEILGE': '', 'Irish': '', 'English': '', 'Polish': '', 'French': '', 'Spanish': '', 'Other': '', 'Total': '', });
lyr_English_90_true_2_22.set('fieldImages', {'SA_PUB2022': '', 'ED_ENGLISH': '', 'ED_GAEILGE': '', 'COUNTY_ENGLISH': '', 'COUNTY_GAEILGE': '', 'Irish': '', 'English': '', 'Polish': '', 'French': '', 'Spanish': '', 'Other': '', 'Total': '', });
lyr_English_90_true_1_23.set('fieldImages', {'SA_PUB2022': '', 'ED_ENGLISH': '', 'ED_GAEILGE': '', 'COUNTY_ENGLISH': '', 'COUNTY_GAEILGE': '', 'Irish': '', 'English': '', 'Polish': '', 'French': '', 'Spanish': '', 'Other': '', 'Total': '', });
lyr_English_100_true_24.set('fieldImages', {'SA_PUB2022': '', 'ED_ENGLISH': '', 'ED_GAEILGE': '', 'COUNTY_ENGLISH': '', 'COUNTY_GAEILGE': '', 'Irish': '', 'English': '', 'Polish': '', 'French': '', 'Spanish': '', 'Other': '', 'Total': '', });
lyr_Irish_40_true_25.set('fieldImages', {'SA_PUB2022': '', 'ED_ENGLISH': '', 'ED_GAEILGE': '', 'COUNTY_ENGLISH': '', 'COUNTY_GAEILGE': '', 'Irish': '', 'English': '', 'Polish': '', 'French': '', 'Spanish': '', 'Other': '', 'Total': '', });
lyr_Irish_50_true_26.set('fieldImages', {'SA_PUB2022': '', 'ED_ENGLISH': '', 'ED_GAEILGE': '', 'COUNTY_ENGLISH': '', 'COUNTY_GAEILGE': '', 'Irish': '', 'English': '', 'Polish': '', 'French': '', 'Spanish': '', 'Other': '', 'Total': '', });
lyr_Irish_60_true_27.set('fieldImages', {'SA_PUB2022': '', 'ED_ENGLISH': '', 'ED_GAEILGE': '', 'COUNTY_ENGLISH': '', 'COUNTY_GAEILGE': '', 'Irish': '', 'English': '', 'Polish': '', 'French': '', 'Spanish': '', 'Other': '', 'Total': '', });
lyr_Irish_70_true_28.set('fieldImages', {'SA_PUB2022': '', 'ED_ENGLISH': '', 'ED_GAEILGE': '', 'COUNTY_ENGLISH': '', 'COUNTY_GAEILGE': '', 'Irish': '', 'English': '', 'Polish': '', 'French': '', 'Spanish': '', 'Other': '', 'Total': '', });
lyr_English_Other_30_true_4.set('fieldLabels', {'SA_PUB2022': 'inline label - visible with data', 'ED_ENGLISH': 'inline label - visible with data', 'ED_GAEILGE': 'inline label - visible with data', 'COUNTY_ENGLISH': 'inline label - visible with data', 'COUNTY_GAEILGE': 'inline label - visible with data', 'Irish': 'inline label - visible with data', 'English': 'inline label - visible with data', 'Polish': 'inline label - visible with data', 'French': 'inline label - visible with data', 'Spanish': 'inline label - visible with data', 'Other': 'inline label - visible with data', 'Total': 'inline label - visible with data', });
lyr_English_Other_40_true_5.set('fieldLabels', {'SA_PUB2022': 'inline label - visible with data', 'ED_ENGLISH': 'inline label - visible with data', 'ED_GAEILGE': 'inline label - visible with data', 'COUNTY_ENGLISH': 'inline label - visible with data', 'COUNTY_GAEILGE': 'inline label - visible with data', 'Irish': 'inline label - visible with data', 'English': 'inline label - visible with data', 'Polish': 'inline label - visible with data', 'French': 'inline label - visible with data', 'Spanish': 'inline label - visible with data', 'Other': 'inline label - visible with data', 'Total': 'inline label - visible with data', });
lyr_Irish_English_true_6.set('fieldLabels', {'SA_PUB2022': 'inline label - visible with data', 'ED_ENGLISH': 'inline label - visible with data', 'ED_GAEILGE': 'inline label - visible with data', 'COUNTY_ENGLISH': 'inline label - visible with data', 'COUNTY_GAEILGE': 'inline label - visible with data', 'Irish': 'inline label - visible with data', 'English': 'inline label - visible with data', 'Polish': 'inline label - visible with data', 'French': 'inline label - visible with data', 'Spanish': 'inline label - visible with data', 'Other': 'inline label - visible with data', 'Total': 'inline label - visible with data', });
lyr_Other_30_true_7.set('fieldLabels', {'SA_PUB2022': 'inline label - visible with data', 'ED_ENGLISH': 'inline label - visible with data', 'ED_GAEILGE': 'inline label - visible with data', 'COUNTY_ENGLISH': 'inline label - visible with data', 'COUNTY_GAEILGE': 'inline label - visible with data', 'Irish': 'inline label - visible with data', 'English': 'inline label - visible with data', 'Polish': 'inline label - visible with data', 'French': 'inline label - visible with data', 'Spanish': 'inline label - visible with data', 'Other': 'inline label - visible with data', 'Total': 'inline label - visible with data', });
lyr_Other_40_true_8.set('fieldLabels', {'SA_PUB2022': 'inline label - visible with data', 'ED_ENGLISH': 'inline label - visible with data', 'ED_GAEILGE': 'inline label - visible with data', 'COUNTY_ENGLISH': 'inline label - visible with data', 'COUNTY_GAEILGE': 'inline label - visible with data', 'Irish': 'inline label - visible with data', 'English': 'inline label - visible with data', 'Polish': 'inline label - visible with data', 'French': 'inline label - visible with data', 'Spanish': 'inline label - visible with data', 'Other': 'inline label - visible with data', 'Total': 'inline label - visible with data', });
lyr_Other_50_true_9.set('fieldLabels', {'SA_PUB2022': 'inline label - visible with data', 'ED_ENGLISH': 'inline label - visible with data', 'ED_GAEILGE': 'inline label - visible with data', 'COUNTY_ENGLISH': 'inline label - visible with data', 'COUNTY_GAEILGE': 'inline label - visible with data', 'Irish': 'inline label - visible with data', 'English': 'inline label - visible with data', 'Polish': 'inline label - visible with data', 'French': 'inline label - visible with data', 'Spanish': 'inline label - visible with data', 'Other': 'inline label - visible with data', 'Total': 'inline label - visible with data', });
lyr_Other_60_true_10.set('fieldLabels', {'SA_PUB2022': 'inline label - visible with data', 'ED_ENGLISH': 'inline label - visible with data', 'ED_GAEILGE': 'inline label - visible with data', 'COUNTY_ENGLISH': 'inline label - visible with data', 'COUNTY_GAEILGE': 'inline label - visible with data', 'Irish': 'inline label - visible with data', 'English': 'inline label - visible with data', 'Polish': 'inline label - visible with data', 'French': 'inline label - visible with data', 'Spanish': 'inline label - visible with data', 'Other': 'inline label - visible with data', 'Total': 'inline label - visible with data', });
lyr_Other_70_true_11.set('fieldLabels', {'SA_PUB2022': 'inline label - visible with data', 'ED_ENGLISH': 'inline label - visible with data', 'ED_GAEILGE': 'inline label - visible with data', 'COUNTY_ENGLISH': 'inline label - visible with data', 'COUNTY_GAEILGE': 'inline label - visible with data', 'Irish': 'inline label - visible with data', 'English': 'inline label - visible with data', 'Polish': 'inline label - visible with data', 'French': 'inline label - visible with data', 'Spanish': 'inline label - visible with data', 'Other': 'inline label - visible with data', 'Total': 'inline label - visible with data', });
lyr_Other_80_true_12.set('fieldLabels', {'SA_PUB2022': 'inline label - visible with data', 'ED_ENGLISH': 'inline label - visible with data', 'ED_GAEILGE': 'inline label - visible with data', 'COUNTY_ENGLISH': 'inline label - visible with data', 'COUNTY_GAEILGE': 'inline label - visible with data', 'Irish': 'inline label - visible with data', 'English': 'inline label - visible with data', 'Polish': 'inline label - visible with data', 'French': 'inline label - visible with data', 'Spanish': 'inline label - visible with data', 'Other': 'inline label - visible with data', 'Total': 'inline label - visible with data', });
lyr_Polish_40_true_13.set('fieldLabels', {'SA_PUB2022': 'inline label - visible with data', 'ED_ENGLISH': 'inline label - visible with data', 'ED_GAEILGE': 'inline label - visible with data', 'COUNTY_ENGLISH': 'inline label - visible with data', 'COUNTY_GAEILGE': 'inline label - visible with data', 'Irish': 'inline label - visible with data', 'English': 'inline label - visible with data', 'Polish': 'inline label - visible with data', 'French': 'inline label - visible with data', 'Spanish': 'inline label - visible with data', 'Other': 'inline label - visible with data', 'Total': 'inline label - visible with data', });
lyr_English_30_true_14.set('fieldLabels', {'SA_PUB2022': 'inline label - visible with data', 'ED_ENGLISH': 'inline label - visible with data', 'ED_GAEILGE': 'inline label - visible with data', 'COUNTY_ENGLISH': 'inline label - visible with data', 'COUNTY_GAEILGE': 'inline label - visible with data', 'Irish': 'inline label - visible with data', 'English': 'inline label - visible with data', 'Polish': 'inline label - visible with data', 'French': 'inline label - visible with data', 'Spanish': 'inline label - visible with data', 'Other': 'inline label - visible with data', 'Total': 'inline label - visible with data', });
lyr_English_40_true_15.set('fieldLabels', {'SA_PUB2022': 'inline label - visible with data', 'ED_ENGLISH': 'inline label - visible with data', 'ED_GAEILGE': 'inline label - visible with data', 'COUNTY_ENGLISH': 'inline label - visible with data', 'COUNTY_GAEILGE': 'inline label - visible with data', 'Irish': 'inline label - visible with data', 'English': 'inline label - visible with data', 'Polish': 'inline label - visible with data', 'French': 'inline label - visible with data', 'Spanish': 'inline label - visible with data', 'Other': 'inline label - visible with data', 'Total': 'inline label - visible with data', });
lyr_English_50_true_16.set('fieldLabels', {'SA_PUB2022': 'inline label - visible with data', 'ED_ENGLISH': 'inline label - visible with data', 'ED_GAEILGE': 'inline label - visible with data', 'COUNTY_ENGLISH': 'inline label - visible with data', 'COUNTY_GAEILGE': 'inline label - visible with data', 'Irish': 'inline label - visible with data', 'English': 'inline label - visible with data', 'Polish': 'inline label - visible with data', 'French': 'inline label - visible with data', 'Spanish': 'inline label - visible with data', 'Other': 'inline label - visible with data', 'Total': 'inline label - visible with data', });
lyr_English_60_true_17.set('fieldLabels', {'SA_PUB2022': 'inline label - visible with data', 'ED_ENGLISH': 'inline label - visible with data', 'ED_GAEILGE': 'inline label - visible with data', 'COUNTY_ENGLISH': 'inline label - visible with data', 'COUNTY_GAEILGE': 'inline label - visible with data', 'Irish': 'inline label - visible with data', 'English': 'inline label - visible with data', 'Polish': 'inline label - visible with data', 'French': 'inline label - visible with data', 'Spanish': 'inline label - visible with data', 'Other': 'inline label - visible with data', 'Total': 'inline label - visible with data', });
lyr_English_70_true_18.set('fieldLabels', {'SA_PUB2022': 'inline label - visible with data', 'ED_ENGLISH': 'inline label - visible with data', 'ED_GAEILGE': 'inline label - visible with data', 'COUNTY_ENGLISH': 'inline label - visible with data', 'COUNTY_GAEILGE': 'inline label - visible with data', 'Irish': 'inline label - visible with data', 'English': 'inline label - visible with data', 'Polish': 'inline label - visible with data', 'French': 'inline label - visible with data', 'Spanish': 'inline label - visible with data', 'Other': 'inline label - visible with data', 'Total': 'inline label - visible with data', });
lyr_English_80_true_19.set('fieldLabels', {'SA_PUB2022': 'inline label - visible with data', 'ED_ENGLISH': 'inline label - visible with data', 'ED_GAEILGE': 'inline label - visible with data', 'COUNTY_ENGLISH': 'inline label - visible with data', 'COUNTY_GAEILGE': 'inline label - visible with data', 'Irish': 'inline label - visible with data', 'English': 'inline label - visible with data', 'Polish': 'inline label - visible with data', 'French': 'inline label - visible with data', 'Spanish': 'inline label - visible with data', 'Other': 'inline label - visible with data', 'Total': 'inline label - visible with data', });
lyr_English_90_true_4_20.set('fieldLabels', {'SA_PUB2022': 'inline label - visible with data', 'ED_ENGLISH': 'inline label - visible with data', 'ED_GAEILGE': 'inline label - visible with data', 'COUNTY_ENGLISH': 'inline label - visible with data', 'COUNTY_GAEILGE': 'inline label - visible with data', 'Irish': 'inline label - visible with data', 'English': 'inline label - visible with data', 'Polish': 'inline label - visible with data', 'French': 'inline label - visible with data', 'Spanish': 'inline label - visible with data', 'Other': 'inline label - visible with data', 'Total': 'inline label - visible with data', });
lyr_English_90_true_3_21.set('fieldLabels', {'SA_PUB2022': 'inline label - visible with data', 'ED_ENGLISH': 'inline label - visible with data', 'ED_GAEILGE': 'inline label - visible with data', 'COUNTY_ENGLISH': 'inline label - visible with data', 'COUNTY_GAEILGE': 'inline label - visible with data', 'Irish': 'inline label - visible with data', 'English': 'inline label - visible with data', 'Polish': 'inline label - visible with data', 'French': 'inline label - visible with data', 'Spanish': 'inline label - visible with data', 'Other': 'inline label - visible with data', 'Total': 'inline label - visible with data', });
lyr_English_90_true_2_22.set('fieldLabels', {'SA_PUB2022': 'inline label - visible with data', 'ED_ENGLISH': 'inline label - visible with data', 'ED_GAEILGE': 'inline label - visible with data', 'COUNTY_ENGLISH': 'inline label - visible with data', 'COUNTY_GAEILGE': 'inline label - visible with data', 'Irish': 'inline label - visible with data', 'English': 'inline label - visible with data', 'Polish': 'inline label - visible with data', 'French': 'inline label - visible with data', 'Spanish': 'inline label - visible with data', 'Other': 'inline label - visible with data', 'Total': 'inline label - visible with data', });
lyr_English_90_true_1_23.set('fieldLabels', {'SA_PUB2022': 'inline label - visible with data', 'ED_ENGLISH': 'inline label - visible with data', 'ED_GAEILGE': 'inline label - visible with data', 'COUNTY_ENGLISH': 'inline label - visible with data', 'COUNTY_GAEILGE': 'inline label - visible with data', 'Irish': 'inline label - visible with data', 'English': 'inline label - visible with data', 'Polish': 'inline label - visible with data', 'French': 'inline label - visible with data', 'Spanish': 'inline label - visible with data', 'Other': 'inline label - visible with data', 'Total': 'inline label - visible with data', });
lyr_English_100_true_24.set('fieldLabels', {'SA_PUB2022': 'inline label - visible with data', 'ED_ENGLISH': 'inline label - visible with data', 'ED_GAEILGE': 'inline label - visible with data', 'COUNTY_ENGLISH': 'inline label - visible with data', 'COUNTY_GAEILGE': 'inline label - visible with data', 'Irish': 'inline label - visible with data', 'English': 'inline label - visible with data', 'Polish': 'inline label - visible with data', 'French': 'inline label - visible with data', 'Spanish': 'inline label - visible with data', 'Other': 'inline label - visible with data', 'Total': 'inline label - visible with data', });
lyr_Irish_40_true_25.set('fieldLabels', {'SA_PUB2022': 'inline label - visible with data', 'ED_ENGLISH': 'inline label - visible with data', 'ED_GAEILGE': 'inline label - visible with data', 'COUNTY_ENGLISH': 'inline label - visible with data', 'COUNTY_GAEILGE': 'inline label - visible with data', 'Irish': 'inline label - visible with data', 'English': 'inline label - visible with data', 'Polish': 'inline label - visible with data', 'French': 'inline label - visible with data', 'Spanish': 'inline label - visible with data', 'Other': 'inline label - visible with data', 'Total': 'inline label - visible with data', });
lyr_Irish_50_true_26.set('fieldLabels', {'SA_PUB2022': 'inline label - visible with data', 'ED_ENGLISH': 'inline label - visible with data', 'ED_GAEILGE': 'inline label - visible with data', 'COUNTY_ENGLISH': 'inline label - visible with data', 'COUNTY_GAEILGE': 'inline label - visible with data', 'Irish': 'inline label - visible with data', 'English': 'inline label - visible with data', 'Polish': 'inline label - visible with data', 'French': 'inline label - visible with data', 'Spanish': 'inline label - visible with data', 'Other': 'inline label - visible with data', 'Total': 'inline label - visible with data', });
lyr_Irish_60_true_27.set('fieldLabels', {'SA_PUB2022': 'inline label - visible with data', 'ED_ENGLISH': 'inline label - visible with data', 'ED_GAEILGE': 'inline label - visible with data', 'COUNTY_ENGLISH': 'inline label - visible with data', 'COUNTY_GAEILGE': 'inline label - visible with data', 'Irish': 'inline label - visible with data', 'English': 'inline label - visible with data', 'Polish': 'inline label - visible with data', 'French': 'inline label - visible with data', 'Spanish': 'inline label - visible with data', 'Other': 'inline label - visible with data', 'Total': 'inline label - visible with data', });
lyr_Irish_70_true_28.set('fieldLabels', {'SA_PUB2022': 'inline label - visible with data', 'ED_ENGLISH': 'inline label - visible with data', 'ED_GAEILGE': 'inline label - visible with data', 'COUNTY_ENGLISH': 'inline label - visible with data', 'COUNTY_GAEILGE': 'inline label - visible with data', 'Irish': 'inline label - visible with data', 'English': 'inline label - visible with data', 'Polish': 'inline label - visible with data', 'French': 'inline label - visible with data', 'Spanish': 'inline label - visible with data', 'Other': 'inline label - visible with data', 'Total': 'inline label - visible with data', });
lyr_Irish_70_true_28.on('precompose', function(evt) {
    evt.context.globalCompositeOperation = 'normal';
});
