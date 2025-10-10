var wms_layers = [];


        var lyr_OSMStandard_0 = new ol.layer.Tile({
            'title': 'OSM Standard',
            'opacity': 1.000000,
            
            
            source: new ol.source.XYZ({
            attributions: ' &nbsp &middot; <a href="https://www.openstreetmap.org/copyright">© OpenStreetMap contributors, CC-BY-SA</a>',
                url: 'http://tile.openstreetmap.org/{z}/{x}/{y}.png'
            })
        });
var format_English_Other_30_true_1 = new ol.format.GeoJSON();
var features_English_Other_30_true_1 = format_English_Other_30_true_1.readFeatures(json_English_Other_30_true_1, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_English_Other_30_true_1 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_English_Other_30_true_1.addFeatures(features_English_Other_30_true_1);
var lyr_English_Other_30_true_1 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_English_Other_30_true_1, 
                style: style_English_Other_30_true_1,
                popuplayertitle: 'English_Other_30_true',
                interactive: true,
                title: '<img src="styles/legend/English_Other_30_true_1.png" /> English_Other_30_true'
            });
var format_English_Other_40_true_2 = new ol.format.GeoJSON();
var features_English_Other_40_true_2 = format_English_Other_40_true_2.readFeatures(json_English_Other_40_true_2, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_English_Other_40_true_2 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_English_Other_40_true_2.addFeatures(features_English_Other_40_true_2);
var lyr_English_Other_40_true_2 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_English_Other_40_true_2, 
                style: style_English_Other_40_true_2,
                popuplayertitle: 'English_Other_40_true',
                interactive: true,
                title: '<img src="styles/legend/English_Other_40_true_2.png" /> English_Other_40_true'
            });
var format_Irish_English_true_3 = new ol.format.GeoJSON();
var features_Irish_English_true_3 = format_Irish_English_true_3.readFeatures(json_Irish_English_true_3, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Irish_English_true_3 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Irish_English_true_3.addFeatures(features_Irish_English_true_3);
var lyr_Irish_English_true_3 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_Irish_English_true_3, 
                style: style_Irish_English_true_3,
                popuplayertitle: 'Irish_English_true',
                interactive: true,
                title: '<img src="styles/legend/Irish_English_true_3.png" /> Irish_English_true'
            });
var format_Other_30_true_4 = new ol.format.GeoJSON();
var features_Other_30_true_4 = format_Other_30_true_4.readFeatures(json_Other_30_true_4, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Other_30_true_4 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Other_30_true_4.addFeatures(features_Other_30_true_4);
var lyr_Other_30_true_4 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_Other_30_true_4, 
                style: style_Other_30_true_4,
                popuplayertitle: 'Other_30_true',
                interactive: true,
                title: '<img src="styles/legend/Other_30_true_4.png" /> Other_30_true'
            });
var format_Other_40_true_5 = new ol.format.GeoJSON();
var features_Other_40_true_5 = format_Other_40_true_5.readFeatures(json_Other_40_true_5, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Other_40_true_5 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Other_40_true_5.addFeatures(features_Other_40_true_5);
var lyr_Other_40_true_5 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_Other_40_true_5, 
                style: style_Other_40_true_5,
                popuplayertitle: 'Other_40_true',
                interactive: true,
                title: '<img src="styles/legend/Other_40_true_5.png" /> Other_40_true'
            });
var format_Other_50_true_6 = new ol.format.GeoJSON();
var features_Other_50_true_6 = format_Other_50_true_6.readFeatures(json_Other_50_true_6, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Other_50_true_6 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Other_50_true_6.addFeatures(features_Other_50_true_6);
var lyr_Other_50_true_6 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_Other_50_true_6, 
                style: style_Other_50_true_6,
                popuplayertitle: 'Other_50_true',
                interactive: true,
                title: '<img src="styles/legend/Other_50_true_6.png" /> Other_50_true'
            });
var format_Other_60_true_7 = new ol.format.GeoJSON();
var features_Other_60_true_7 = format_Other_60_true_7.readFeatures(json_Other_60_true_7, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Other_60_true_7 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Other_60_true_7.addFeatures(features_Other_60_true_7);
var lyr_Other_60_true_7 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_Other_60_true_7, 
                style: style_Other_60_true_7,
                popuplayertitle: 'Other_60_true',
                interactive: true,
                title: '<img src="styles/legend/Other_60_true_7.png" /> Other_60_true'
            });
var format_Other_70_true_8 = new ol.format.GeoJSON();
var features_Other_70_true_8 = format_Other_70_true_8.readFeatures(json_Other_70_true_8, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Other_70_true_8 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Other_70_true_8.addFeatures(features_Other_70_true_8);
var lyr_Other_70_true_8 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_Other_70_true_8, 
                style: style_Other_70_true_8,
                popuplayertitle: 'Other_70_true',
                interactive: true,
                title: '<img src="styles/legend/Other_70_true_8.png" /> Other_70_true'
            });
var format_Other_80_true_9 = new ol.format.GeoJSON();
var features_Other_80_true_9 = format_Other_80_true_9.readFeatures(json_Other_80_true_9, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Other_80_true_9 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Other_80_true_9.addFeatures(features_Other_80_true_9);
var lyr_Other_80_true_9 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_Other_80_true_9, 
                style: style_Other_80_true_9,
                popuplayertitle: 'Other_80_true',
                interactive: true,
                title: '<img src="styles/legend/Other_80_true_9.png" /> Other_80_true'
            });
var format_Polish_40_true_10 = new ol.format.GeoJSON();
var features_Polish_40_true_10 = format_Polish_40_true_10.readFeatures(json_Polish_40_true_10, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Polish_40_true_10 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Polish_40_true_10.addFeatures(features_Polish_40_true_10);
var lyr_Polish_40_true_10 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_Polish_40_true_10, 
                style: style_Polish_40_true_10,
                popuplayertitle: 'Polish_40_true',
                interactive: true,
                title: '<img src="styles/legend/Polish_40_true_10.png" /> Polish_40_true'
            });
var format_English_30_true_11 = new ol.format.GeoJSON();
var features_English_30_true_11 = format_English_30_true_11.readFeatures(json_English_30_true_11, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_English_30_true_11 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_English_30_true_11.addFeatures(features_English_30_true_11);
var lyr_English_30_true_11 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_English_30_true_11, 
                style: style_English_30_true_11,
                popuplayertitle: 'English_30_true',
                interactive: true,
                title: '<img src="styles/legend/English_30_true_11.png" /> English_30_true'
            });
var format_English_40_true_12 = new ol.format.GeoJSON();
var features_English_40_true_12 = format_English_40_true_12.readFeatures(json_English_40_true_12, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_English_40_true_12 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_English_40_true_12.addFeatures(features_English_40_true_12);
var lyr_English_40_true_12 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_English_40_true_12, 
                style: style_English_40_true_12,
                popuplayertitle: 'English_40_true',
                interactive: true,
                title: '<img src="styles/legend/English_40_true_12.png" /> English_40_true'
            });
var format_English_50_true_13 = new ol.format.GeoJSON();
var features_English_50_true_13 = format_English_50_true_13.readFeatures(json_English_50_true_13, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_English_50_true_13 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_English_50_true_13.addFeatures(features_English_50_true_13);
var lyr_English_50_true_13 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_English_50_true_13, 
                style: style_English_50_true_13,
                popuplayertitle: 'English_50_true',
                interactive: true,
                title: '<img src="styles/legend/English_50_true_13.png" /> English_50_true'
            });
var format_English_60_true_14 = new ol.format.GeoJSON();
var features_English_60_true_14 = format_English_60_true_14.readFeatures(json_English_60_true_14, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_English_60_true_14 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_English_60_true_14.addFeatures(features_English_60_true_14);
var lyr_English_60_true_14 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_English_60_true_14, 
                style: style_English_60_true_14,
                popuplayertitle: 'English_60_true',
                interactive: true,
                title: '<img src="styles/legend/English_60_true_14.png" /> English_60_true'
            });
var format_English_70_true_15 = new ol.format.GeoJSON();
var features_English_70_true_15 = format_English_70_true_15.readFeatures(json_English_70_true_15, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_English_70_true_15 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_English_70_true_15.addFeatures(features_English_70_true_15);
var lyr_English_70_true_15 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_English_70_true_15, 
                style: style_English_70_true_15,
                popuplayertitle: 'English_70_true',
                interactive: true,
                title: '<img src="styles/legend/English_70_true_15.png" /> English_70_true'
            });
var format_English_80_true_16 = new ol.format.GeoJSON();
var features_English_80_true_16 = format_English_80_true_16.readFeatures(json_English_80_true_16, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_English_80_true_16 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_English_80_true_16.addFeatures(features_English_80_true_16);
var lyr_English_80_true_16 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_English_80_true_16, 
                style: style_English_80_true_16,
                popuplayertitle: 'English_80_true',
                interactive: true,
                title: '<img src="styles/legend/English_80_true_16.png" /> English_80_true'
            });
var format_English_90_true_4_17 = new ol.format.GeoJSON();
var features_English_90_true_4_17 = format_English_90_true_4_17.readFeatures(json_English_90_true_4_17, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_English_90_true_4_17 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_English_90_true_4_17.addFeatures(features_English_90_true_4_17);
var lyr_English_90_true_4_17 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_English_90_true_4_17, 
                style: style_English_90_true_4_17,
                popuplayertitle: 'English_90_true',
                interactive: true});
var format_English_90_true_3_18 = new ol.format.GeoJSON();
var features_English_90_true_3_18 = format_English_90_true_3_18.readFeatures(json_English_90_true_3_18, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_English_90_true_3_18 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_English_90_true_3_18.addFeatures(features_English_90_true_3_18);
var lyr_English_90_true_3_18 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_English_90_true_3_18, 
                style: style_English_90_true_3_18,
                popuplayertitle: 'English_90_true',
                interactive: true});
var format_English_90_true_2_19 = new ol.format.GeoJSON();
var features_English_90_true_2_19 = format_English_90_true_2_19.readFeatures(json_English_90_true_2_19, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_English_90_true_2_19 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_English_90_true_2_19.addFeatures(features_English_90_true_2_19);
var lyr_English_90_true_2_19 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_English_90_true_2_19, 
                style: style_English_90_true_2_19,
                popuplayertitle: 'English_90_true',
                interactive: true
                            });
var format_English_90_true_1_20 = new ol.format.GeoJSON();
var features_English_90_true_1_20 = format_English_90_true_1_20.readFeatures(json_English_90_true_1_20, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_English_90_true_1_20 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_English_90_true_1_20.addFeatures(features_English_90_true_1_20);
var lyr_English_90_true_1_20 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_English_90_true_1_20, 
                style: style_English_90_true_1_20,
                popuplayertitle: 'English_90_true',
                interactive: true
            });
var format_English_100_true_21 = new ol.format.GeoJSON();
var features_English_100_true_21 = format_English_100_true_21.readFeatures(json_English_100_true_21, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_English_100_true_21 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_English_100_true_21.addFeatures(features_English_100_true_21);
var lyr_English_100_true_21 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_English_100_true_21, 
                style: style_English_100_true_21,
                popuplayertitle: 'English_100_true',
                interactive: true,
                title: '<img src="styles/legend/English_100_true_21.png" /> English_100_true'
            });
var format_Irish_40_true_22 = new ol.format.GeoJSON();
var features_Irish_40_true_22 = format_Irish_40_true_22.readFeatures(json_Irish_40_true_22, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Irish_40_true_22 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Irish_40_true_22.addFeatures(features_Irish_40_true_22);
var lyr_Irish_40_true_22 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_Irish_40_true_22, 
                style: style_Irish_40_true_22,
                popuplayertitle: 'Irish_40_true',
                interactive: true,
                title: '<img src="styles/legend/Irish_40_true_22.png" /> Irish_40_true'
            });
var format_Irish_50_true_23 = new ol.format.GeoJSON();
var features_Irish_50_true_23 = format_Irish_50_true_23.readFeatures(json_Irish_50_true_23, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Irish_50_true_23 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Irish_50_true_23.addFeatures(features_Irish_50_true_23);
var lyr_Irish_50_true_23 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_Irish_50_true_23, 
                style: style_Irish_50_true_23,
                popuplayertitle: 'Irish_50_true',
                interactive: true,
                title: '<img src="styles/legend/Irish_50_true_23.png" /> Irish_50_true'
            });
var format_Irish_60_true_24 = new ol.format.GeoJSON();
var features_Irish_60_true_24 = format_Irish_60_true_24.readFeatures(json_Irish_60_true_24, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Irish_60_true_24 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Irish_60_true_24.addFeatures(features_Irish_60_true_24);
var lyr_Irish_60_true_24 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_Irish_60_true_24, 
                style: style_Irish_60_true_24,
                popuplayertitle: 'Irish_60_true',
                interactive: true,
                title: '<img src="styles/legend/Irish_60_true_24.png" /> Irish_60_true'
            });
var format_Irish_70_true_25 = new ol.format.GeoJSON();
var features_Irish_70_true_25 = format_Irish_70_true_25.readFeatures(json_Irish_70_true_25, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Irish_70_true_25 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Irish_70_true_25.addFeatures(features_Irish_70_true_25);
var lyr_Irish_70_true_25 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_Irish_70_true_25, 
                style: style_Irish_70_true_25,
                popuplayertitle: 'Irish_70_true',
                interactive: true,
                title: '<img src="styles/legend/Irish_70_true_25.png" /> Irish_70_true'
            });
var group_English_90_true = new ol.layer.Group({
                                layers: [lyr_English_90_true_4_17,lyr_English_90_true_3_18,lyr_English_90_true_2_19,lyr_English_90_true_1_20,],
                                fold: 'open',
                                title: '<img src="styles/legend/English_90_true_3_18.png" /> English_90_true'});

lyr_OSMStandard_0.setVisible(true);lyr_English_Other_30_true_1.setVisible(true);lyr_English_Other_40_true_2.setVisible(true);lyr_Irish_English_true_3.setVisible(true);lyr_Other_30_true_4.setVisible(true);lyr_Other_40_true_5.setVisible(true);lyr_Other_50_true_6.setVisible(true);lyr_Other_60_true_7.setVisible(true);lyr_Other_70_true_8.setVisible(true);lyr_Other_80_true_9.setVisible(true);lyr_Polish_40_true_10.setVisible(true);lyr_English_30_true_11.setVisible(true);lyr_English_40_true_12.setVisible(true);lyr_English_50_true_13.setVisible(true);lyr_English_60_true_14.setVisible(true);lyr_English_70_true_15.setVisible(true);lyr_English_80_true_16.setVisible(true);lyr_English_90_true_4_17.setVisible(true);lyr_English_90_true_3_18.setVisible(true);lyr_English_90_true_2_19.setVisible(true);lyr_English_90_true_1_20.setVisible(true);lyr_English_100_true_21.setVisible(true);lyr_Irish_40_true_22.setVisible(true);lyr_Irish_50_true_23.setVisible(true);lyr_Irish_60_true_24.setVisible(true);lyr_Irish_70_true_25.setVisible(true);
var layersList = [lyr_OSMStandard_0,lyr_English_Other_30_true_1,lyr_English_Other_40_true_2,lyr_Irish_English_true_3,lyr_Other_30_true_4,lyr_Other_40_true_5,lyr_Other_50_true_6,lyr_Other_60_true_7,lyr_Other_70_true_8,lyr_Other_80_true_9,lyr_Polish_40_true_10,lyr_English_30_true_11,lyr_English_40_true_12,lyr_English_50_true_13,lyr_English_60_true_14,lyr_English_70_true_15,lyr_English_80_true_16,group_English_90_true,lyr_English_100_true_21,lyr_Irish_40_true_22,lyr_Irish_50_true_23,lyr_Irish_60_true_24,lyr_Irish_70_true_25];
lyr_English_Other_30_true_1.set('fieldAliases', {'SA_PUB2022': 'SA_PUB2022', 'ED_ENGLISH': 'ED_ENGLISH', 'ED_GAEILGE': 'ED_GAEILGE', 'COUNTY_ENGLISH': 'COUNTY_ENGLISH', 'COUNTY_GAEILGE': 'COUNTY_GAEILGE', 'Irish': 'Irish', 'English': 'English', 'Polish': 'Polish', 'French': 'French', 'Spanish': 'Spanish', 'Other': 'Other', 'Total': 'Total', });
lyr_English_Other_40_true_2.set('fieldAliases', {'SA_PUB2022': 'SA_PUB2022', 'ED_ENGLISH': 'ED_ENGLISH', 'ED_GAEILGE': 'ED_GAEILGE', 'COUNTY_ENGLISH': 'COUNTY_ENGLISH', 'COUNTY_GAEILGE': 'COUNTY_GAEILGE', 'Irish': 'Irish', 'English': 'English', 'Polish': 'Polish', 'French': 'French', 'Spanish': 'Spanish', 'Other': 'Other', 'Total': 'Total', });
lyr_Irish_English_true_3.set('fieldAliases', {'SA_PUB2022': 'SA_PUB2022', 'ED_ENGLISH': 'ED_ENGLISH', 'ED_GAEILGE': 'ED_GAEILGE', 'COUNTY_ENGLISH': 'COUNTY_ENGLISH', 'COUNTY_GAEILGE': 'COUNTY_GAEILGE', 'Irish': 'Irish', 'English': 'English', 'Polish': 'Polish', 'French': 'French', 'Spanish': 'Spanish', 'Other': 'Other', 'Total': 'Total', });
lyr_Other_30_true_4.set('fieldAliases', {'SA_PUB2022': 'SA_PUB2022', 'ED_ENGLISH': 'ED_ENGLISH', 'ED_GAEILGE': 'ED_GAEILGE', 'COUNTY_ENGLISH': 'COUNTY_ENGLISH', 'COUNTY_GAEILGE': 'COUNTY_GAEILGE', 'Irish': 'Irish', 'English': 'English', 'Polish': 'Polish', 'French': 'French', 'Spanish': 'Spanish', 'Other': 'Other', 'Total': 'Total', });
lyr_Other_40_true_5.set('fieldAliases', {'SA_PUB2022': 'SA_PUB2022', 'ED_ENGLISH': 'ED_ENGLISH', 'ED_GAEILGE': 'ED_GAEILGE', 'COUNTY_ENGLISH': 'COUNTY_ENGLISH', 'COUNTY_GAEILGE': 'COUNTY_GAEILGE', 'Irish': 'Irish', 'English': 'English', 'Polish': 'Polish', 'French': 'French', 'Spanish': 'Spanish', 'Other': 'Other', 'Total': 'Total', });
lyr_Other_50_true_6.set('fieldAliases', {'SA_PUB2022': 'SA_PUB2022', 'ED_ENGLISH': 'ED_ENGLISH', 'ED_GAEILGE': 'ED_GAEILGE', 'COUNTY_ENGLISH': 'COUNTY_ENGLISH', 'COUNTY_GAEILGE': 'COUNTY_GAEILGE', 'Irish': 'Irish', 'English': 'English', 'Polish': 'Polish', 'French': 'French', 'Spanish': 'Spanish', 'Other': 'Other', 'Total': 'Total', });
lyr_Other_60_true_7.set('fieldAliases', {'SA_PUB2022': 'SA_PUB2022', 'ED_ENGLISH': 'ED_ENGLISH', 'ED_GAEILGE': 'ED_GAEILGE', 'COUNTY_ENGLISH': 'COUNTY_ENGLISH', 'COUNTY_GAEILGE': 'COUNTY_GAEILGE', 'Irish': 'Irish', 'English': 'English', 'Polish': 'Polish', 'French': 'French', 'Spanish': 'Spanish', 'Other': 'Other', 'Total': 'Total', });
lyr_Other_70_true_8.set('fieldAliases', {'SA_PUB2022': 'SA_PUB2022', 'ED_ENGLISH': 'ED_ENGLISH', 'ED_GAEILGE': 'ED_GAEILGE', 'COUNTY_ENGLISH': 'COUNTY_ENGLISH', 'COUNTY_GAEILGE': 'COUNTY_GAEILGE', 'Irish': 'Irish', 'English': 'English', 'Polish': 'Polish', 'French': 'French', 'Spanish': 'Spanish', 'Other': 'Other', 'Total': 'Total', });
lyr_Other_80_true_9.set('fieldAliases', {'SA_PUB2022': 'SA_PUB2022', 'ED_ENGLISH': 'ED_ENGLISH', 'ED_GAEILGE': 'ED_GAEILGE', 'COUNTY_ENGLISH': 'COUNTY_ENGLISH', 'COUNTY_GAEILGE': 'COUNTY_GAEILGE', 'Irish': 'Irish', 'English': 'English', 'Polish': 'Polish', 'French': 'French', 'Spanish': 'Spanish', 'Other': 'Other', 'Total': 'Total', });
lyr_Polish_40_true_10.set('fieldAliases', {'SA_PUB2022': 'SA_PUB2022', 'ED_ENGLISH': 'ED_ENGLISH', 'ED_GAEILGE': 'ED_GAEILGE', 'COUNTY_ENGLISH': 'COUNTY_ENGLISH', 'COUNTY_GAEILGE': 'COUNTY_GAEILGE', 'Irish': 'Irish', 'English': 'English', 'Polish': 'Polish', 'French': 'French', 'Spanish': 'Spanish', 'Other': 'Other', 'Total': 'Total', });
lyr_English_30_true_11.set('fieldAliases', {'SA_PUB2022': 'SA_PUB2022', 'ED_ENGLISH': 'ED_ENGLISH', 'ED_GAEILGE': 'ED_GAEILGE', 'COUNTY_ENGLISH': 'COUNTY_ENGLISH', 'COUNTY_GAEILGE': 'COUNTY_GAEILGE', 'Irish': 'Irish', 'English': 'English', 'Polish': 'Polish', 'French': 'French', 'Spanish': 'Spanish', 'Other': 'Other', 'Total': 'Total', });
lyr_English_40_true_12.set('fieldAliases', {'SA_PUB2022': 'SA_PUB2022', 'ED_ENGLISH': 'ED_ENGLISH', 'ED_GAEILGE': 'ED_GAEILGE', 'COUNTY_ENGLISH': 'COUNTY_ENGLISH', 'COUNTY_GAEILGE': 'COUNTY_GAEILGE', 'Irish': 'Irish', 'English': 'English', 'Polish': 'Polish', 'French': 'French', 'Spanish': 'Spanish', 'Other': 'Other', 'Total': 'Total', });
lyr_English_50_true_13.set('fieldAliases', {'SA_PUB2022': 'SA_PUB2022', 'ED_ENGLISH': 'ED_ENGLISH', 'ED_GAEILGE': 'ED_GAEILGE', 'COUNTY_ENGLISH': 'COUNTY_ENGLISH', 'COUNTY_GAEILGE': 'COUNTY_GAEILGE', 'Irish': 'Irish', 'English': 'English', 'Polish': 'Polish', 'French': 'French', 'Spanish': 'Spanish', 'Other': 'Other', 'Total': 'Total', });
lyr_English_60_true_14.set('fieldAliases', {'SA_PUB2022': 'SA_PUB2022', 'ED_ENGLISH': 'ED_ENGLISH', 'ED_GAEILGE': 'ED_GAEILGE', 'COUNTY_ENGLISH': 'COUNTY_ENGLISH', 'COUNTY_GAEILGE': 'COUNTY_GAEILGE', 'Irish': 'Irish', 'English': 'English', 'Polish': 'Polish', 'French': 'French', 'Spanish': 'Spanish', 'Other': 'Other', 'Total': 'Total', });
lyr_English_70_true_15.set('fieldAliases', {'SA_PUB2022': 'SA_PUB2022', 'ED_ENGLISH': 'ED_ENGLISH', 'ED_GAEILGE': 'ED_GAEILGE', 'COUNTY_ENGLISH': 'COUNTY_ENGLISH', 'COUNTY_GAEILGE': 'COUNTY_GAEILGE', 'Irish': 'Irish', 'English': 'English', 'Polish': 'Polish', 'French': 'French', 'Spanish': 'Spanish', 'Other': 'Other', 'Total': 'Total', });
lyr_English_80_true_16.set('fieldAliases', {'SA_PUB2022': 'SA_PUB2022', 'ED_ENGLISH': 'ED_ENGLISH', 'ED_GAEILGE': 'ED_GAEILGE', 'COUNTY_ENGLISH': 'COUNTY_ENGLISH', 'COUNTY_GAEILGE': 'COUNTY_GAEILGE', 'Irish': 'Irish', 'English': 'English', 'Polish': 'Polish', 'French': 'French', 'Spanish': 'Spanish', 'Other': 'Other', 'Total': 'Total', });
lyr_English_90_true_4_17.set('fieldAliases', {'SA_PUB2022': 'SA_PUB2022', 'ED_ENGLISH': 'ED_ENGLISH', 'ED_GAEILGE': 'ED_GAEILGE', 'COUNTY_ENGLISH': 'COUNTY_ENGLISH', 'COUNTY_GAEILGE': 'COUNTY_GAEILGE', 'Irish': 'Irish', 'English': 'English', 'Polish': 'Polish', 'French': 'French', 'Spanish': 'Spanish', 'Other': 'Other', 'Total': 'Total', });
lyr_English_90_true_3_18.set('fieldAliases', {'SA_PUB2022': 'SA_PUB2022', 'ED_ENGLISH': 'ED_ENGLISH', 'ED_GAEILGE': 'ED_GAEILGE', 'COUNTY_ENGLISH': 'COUNTY_ENGLISH', 'COUNTY_GAEILGE': 'COUNTY_GAEILGE', 'Irish': 'Irish', 'English': 'English', 'Polish': 'Polish', 'French': 'French', 'Spanish': 'Spanish', 'Other': 'Other', 'Total': 'Total', });
lyr_English_90_true_2_19.set('fieldAliases', {'SA_PUB2022': 'SA_PUB2022', 'ED_ENGLISH': 'ED_ENGLISH', 'ED_GAEILGE': 'ED_GAEILGE', 'COUNTY_ENGLISH': 'COUNTY_ENGLISH', 'COUNTY_GAEILGE': 'COUNTY_GAEILGE', 'Irish': 'Irish', 'English': 'English', 'Polish': 'Polish', 'French': 'French', 'Spanish': 'Spanish', 'Other': 'Other', 'Total': 'Total', });
lyr_English_90_true_1_20.set('fieldAliases', {'SA_PUB2022': 'SA_PUB2022', 'ED_ENGLISH': 'ED_ENGLISH', 'ED_GAEILGE': 'ED_GAEILGE', 'COUNTY_ENGLISH': 'COUNTY_ENGLISH', 'COUNTY_GAEILGE': 'COUNTY_GAEILGE', 'Irish': 'Irish', 'English': 'English', 'Polish': 'Polish', 'French': 'French', 'Spanish': 'Spanish', 'Other': 'Other', 'Total': 'Total', });
lyr_English_100_true_21.set('fieldAliases', {'SA_PUB2022': 'SA_PUB2022', 'ED_ENGLISH': 'ED_ENGLISH', 'ED_GAEILGE': 'ED_GAEILGE', 'COUNTY_ENGLISH': 'COUNTY_ENGLISH', 'COUNTY_GAEILGE': 'COUNTY_GAEILGE', 'Irish': 'Irish', 'English': 'English', 'Polish': 'Polish', 'French': 'French', 'Spanish': 'Spanish', 'Other': 'Other', 'Total': 'Total', });
lyr_Irish_40_true_22.set('fieldAliases', {'SA_PUB2022': 'SA_PUB2022', 'ED_ENGLISH': 'ED_ENGLISH', 'ED_GAEILGE': 'ED_GAEILGE', 'COUNTY_ENGLISH': 'COUNTY_ENGLISH', 'COUNTY_GAEILGE': 'COUNTY_GAEILGE', 'Irish': 'Irish', 'English': 'English', 'Polish': 'Polish', 'French': 'French', 'Spanish': 'Spanish', 'Other': 'Other', 'Total': 'Total', });
lyr_Irish_50_true_23.set('fieldAliases', {'SA_PUB2022': 'SA_PUB2022', 'ED_ENGLISH': 'ED_ENGLISH', 'ED_GAEILGE': 'ED_GAEILGE', 'COUNTY_ENGLISH': 'COUNTY_ENGLISH', 'COUNTY_GAEILGE': 'COUNTY_GAEILGE', 'Irish': 'Irish', 'English': 'English', 'Polish': 'Polish', 'French': 'French', 'Spanish': 'Spanish', 'Other': 'Other', 'Total': 'Total', });
lyr_Irish_60_true_24.set('fieldAliases', {'SA_PUB2022': 'SA_PUB2022', 'ED_ENGLISH': 'ED_ENGLISH', 'ED_GAEILGE': 'ED_GAEILGE', 'COUNTY_ENGLISH': 'COUNTY_ENGLISH', 'COUNTY_GAEILGE': 'COUNTY_GAEILGE', 'Irish': 'Irish', 'English': 'English', 'Polish': 'Polish', 'French': 'French', 'Spanish': 'Spanish', 'Other': 'Other', 'Total': 'Total', });
lyr_Irish_70_true_25.set('fieldAliases', {'SA_PUB2022': 'SA_PUB2022', 'ED_ENGLISH': 'ED_ENGLISH', 'ED_GAEILGE': 'ED_GAEILGE', 'COUNTY_ENGLISH': 'COUNTY_ENGLISH', 'COUNTY_GAEILGE': 'COUNTY_GAEILGE', 'Irish': 'Irish', 'English': 'English', 'Polish': 'Polish', 'French': 'French', 'Spanish': 'Spanish', 'Other': 'Other', 'Total': 'Total', });
lyr_English_Other_30_true_1.set('fieldImages', {'SA_PUB2022': '', 'ED_ENGLISH': '', 'ED_GAEILGE': '', 'COUNTY_ENGLISH': '', 'COUNTY_GAEILGE': '', 'Irish': '', 'English': '', 'Polish': '', 'French': '', 'Spanish': '', 'Other': '', 'Total': '', });
lyr_English_Other_40_true_2.set('fieldImages', {'SA_PUB2022': '', 'ED_ENGLISH': '', 'ED_GAEILGE': '', 'COUNTY_ENGLISH': '', 'COUNTY_GAEILGE': '', 'Irish': '', 'English': '', 'Polish': '', 'French': '', 'Spanish': '', 'Other': '', 'Total': '', });
lyr_Irish_English_true_3.set('fieldImages', {'SA_PUB2022': '', 'ED_ENGLISH': '', 'ED_GAEILGE': '', 'COUNTY_ENGLISH': '', 'COUNTY_GAEILGE': '', 'Irish': '', 'English': '', 'Polish': '', 'French': '', 'Spanish': '', 'Other': '', 'Total': '', });
lyr_Other_30_true_4.set('fieldImages', {'SA_PUB2022': '', 'ED_ENGLISH': '', 'ED_GAEILGE': '', 'COUNTY_ENGLISH': '', 'COUNTY_GAEILGE': '', 'Irish': '', 'English': '', 'Polish': '', 'French': '', 'Spanish': '', 'Other': '', 'Total': '', });
lyr_Other_40_true_5.set('fieldImages', {'SA_PUB2022': '', 'ED_ENGLISH': '', 'ED_GAEILGE': '', 'COUNTY_ENGLISH': '', 'COUNTY_GAEILGE': '', 'Irish': '', 'English': '', 'Polish': '', 'French': '', 'Spanish': '', 'Other': '', 'Total': '', });
lyr_Other_50_true_6.set('fieldImages', {'SA_PUB2022': '', 'ED_ENGLISH': '', 'ED_GAEILGE': '', 'COUNTY_ENGLISH': '', 'COUNTY_GAEILGE': '', 'Irish': '', 'English': '', 'Polish': '', 'French': '', 'Spanish': '', 'Other': '', 'Total': '', });
lyr_Other_60_true_7.set('fieldImages', {'SA_PUB2022': '', 'ED_ENGLISH': '', 'ED_GAEILGE': '', 'COUNTY_ENGLISH': '', 'COUNTY_GAEILGE': '', 'Irish': '', 'English': '', 'Polish': '', 'French': '', 'Spanish': '', 'Other': '', 'Total': '', });
lyr_Other_70_true_8.set('fieldImages', {'SA_PUB2022': '', 'ED_ENGLISH': '', 'ED_GAEILGE': '', 'COUNTY_ENGLISH': '', 'COUNTY_GAEILGE': '', 'Irish': '', 'English': '', 'Polish': '', 'French': '', 'Spanish': '', 'Other': '', 'Total': '', });
lyr_Other_80_true_9.set('fieldImages', {'SA_PUB2022': '', 'ED_ENGLISH': '', 'ED_GAEILGE': '', 'COUNTY_ENGLISH': '', 'COUNTY_GAEILGE': '', 'Irish': '', 'English': '', 'Polish': '', 'French': '', 'Spanish': '', 'Other': '', 'Total': '', });
lyr_Polish_40_true_10.set('fieldImages', {'SA_PUB2022': '', 'ED_ENGLISH': '', 'ED_GAEILGE': '', 'COUNTY_ENGLISH': '', 'COUNTY_GAEILGE': '', 'Irish': '', 'English': '', 'Polish': '', 'French': '', 'Spanish': '', 'Other': '', 'Total': '', });
lyr_English_30_true_11.set('fieldImages', {'SA_PUB2022': '', 'ED_ENGLISH': '', 'ED_GAEILGE': '', 'COUNTY_ENGLISH': '', 'COUNTY_GAEILGE': '', 'Irish': '', 'English': '', 'Polish': '', 'French': '', 'Spanish': '', 'Other': '', 'Total': '', });
lyr_English_40_true_12.set('fieldImages', {'SA_PUB2022': '', 'ED_ENGLISH': '', 'ED_GAEILGE': '', 'COUNTY_ENGLISH': '', 'COUNTY_GAEILGE': '', 'Irish': '', 'English': '', 'Polish': '', 'French': '', 'Spanish': '', 'Other': '', 'Total': '', });
lyr_English_50_true_13.set('fieldImages', {'SA_PUB2022': '', 'ED_ENGLISH': '', 'ED_GAEILGE': '', 'COUNTY_ENGLISH': '', 'COUNTY_GAEILGE': '', 'Irish': '', 'English': '', 'Polish': '', 'French': '', 'Spanish': '', 'Other': '', 'Total': '', });
lyr_English_60_true_14.set('fieldImages', {'SA_PUB2022': '', 'ED_ENGLISH': '', 'ED_GAEILGE': '', 'COUNTY_ENGLISH': '', 'COUNTY_GAEILGE': '', 'Irish': '', 'English': '', 'Polish': '', 'French': '', 'Spanish': '', 'Other': '', 'Total': '', });
lyr_English_70_true_15.set('fieldImages', {'SA_PUB2022': '', 'ED_ENGLISH': '', 'ED_GAEILGE': '', 'COUNTY_ENGLISH': '', 'COUNTY_GAEILGE': '', 'Irish': '', 'English': '', 'Polish': '', 'French': '', 'Spanish': '', 'Other': '', 'Total': '', });
lyr_English_80_true_16.set('fieldImages', {'SA_PUB2022': '', 'ED_ENGLISH': '', 'ED_GAEILGE': '', 'COUNTY_ENGLISH': '', 'COUNTY_GAEILGE': '', 'Irish': '', 'English': '', 'Polish': '', 'French': '', 'Spanish': '', 'Other': '', 'Total': '', });
lyr_English_90_true_4_17.set('fieldImages', {'SA_PUB2022': '', 'ED_ENGLISH': '', 'ED_GAEILGE': '', 'COUNTY_ENGLISH': '', 'COUNTY_GAEILGE': '', 'Irish': '', 'English': '', 'Polish': '', 'French': '', 'Spanish': '', 'Other': '', 'Total': '', });
lyr_English_90_true_3_18.set('fieldImages', {'SA_PUB2022': '', 'ED_ENGLISH': '', 'ED_GAEILGE': '', 'COUNTY_ENGLISH': '', 'COUNTY_GAEILGE': '', 'Irish': '', 'English': '', 'Polish': '', 'French': '', 'Spanish': '', 'Other': '', 'Total': '', });
lyr_English_90_true_2_19.set('fieldImages', {'SA_PUB2022': '', 'ED_ENGLISH': '', 'ED_GAEILGE': '', 'COUNTY_ENGLISH': '', 'COUNTY_GAEILGE': '', 'Irish': '', 'English': '', 'Polish': '', 'French': '', 'Spanish': '', 'Other': '', 'Total': '', });
lyr_English_90_true_1_20.set('fieldImages', {'SA_PUB2022': '', 'ED_ENGLISH': '', 'ED_GAEILGE': '', 'COUNTY_ENGLISH': '', 'COUNTY_GAEILGE': '', 'Irish': '', 'English': '', 'Polish': '', 'French': '', 'Spanish': '', 'Other': '', 'Total': '', });
lyr_English_100_true_21.set('fieldImages', {'SA_PUB2022': '', 'ED_ENGLISH': '', 'ED_GAEILGE': '', 'COUNTY_ENGLISH': '', 'COUNTY_GAEILGE': '', 'Irish': '', 'English': '', 'Polish': '', 'French': '', 'Spanish': '', 'Other': '', 'Total': '', });
lyr_Irish_40_true_22.set('fieldImages', {'SA_PUB2022': '', 'ED_ENGLISH': '', 'ED_GAEILGE': '', 'COUNTY_ENGLISH': '', 'COUNTY_GAEILGE': '', 'Irish': '', 'English': '', 'Polish': '', 'French': '', 'Spanish': '', 'Other': '', 'Total': '', });
lyr_Irish_50_true_23.set('fieldImages', {'SA_PUB2022': '', 'ED_ENGLISH': '', 'ED_GAEILGE': '', 'COUNTY_ENGLISH': '', 'COUNTY_GAEILGE': '', 'Irish': '', 'English': '', 'Polish': '', 'French': '', 'Spanish': '', 'Other': '', 'Total': '', });
lyr_Irish_60_true_24.set('fieldImages', {'SA_PUB2022': '', 'ED_ENGLISH': '', 'ED_GAEILGE': '', 'COUNTY_ENGLISH': '', 'COUNTY_GAEILGE': '', 'Irish': '', 'English': '', 'Polish': '', 'French': '', 'Spanish': '', 'Other': '', 'Total': '', });
lyr_Irish_70_true_25.set('fieldImages', {'SA_PUB2022': '', 'ED_ENGLISH': '', 'ED_GAEILGE': '', 'COUNTY_ENGLISH': '', 'COUNTY_GAEILGE': '', 'Irish': '', 'English': '', 'Polish': '', 'French': '', 'Spanish': '', 'Other': '', 'Total': '', });
lyr_English_Other_30_true_1.set('fieldLabels', {'SA_PUB2022': 'inline label - visible with data', 'ED_ENGLISH': 'inline label - visible with data', 'ED_GAEILGE': 'inline label - visible with data', 'COUNTY_ENGLISH': 'inline label - visible with data', 'COUNTY_GAEILGE': 'inline label - visible with data', 'Irish': 'inline label - visible with data', 'English': 'inline label - visible with data', 'Polish': 'inline label - visible with data', 'French': 'inline label - visible with data', 'Spanish': 'inline label - visible with data', 'Other': 'inline label - visible with data', 'Total': 'inline label - visible with data', });
lyr_English_Other_40_true_2.set('fieldLabels', {'SA_PUB2022': 'inline label - visible with data', 'ED_ENGLISH': 'inline label - visible with data', 'ED_GAEILGE': 'inline label - visible with data', 'COUNTY_ENGLISH': 'inline label - visible with data', 'COUNTY_GAEILGE': 'inline label - visible with data', 'Irish': 'inline label - visible with data', 'English': 'inline label - visible with data', 'Polish': 'inline label - visible with data', 'French': 'inline label - visible with data', 'Spanish': 'inline label - visible with data', 'Other': 'inline label - visible with data', 'Total': 'inline label - visible with data', });
lyr_Irish_English_true_3.set('fieldLabels', {'SA_PUB2022': 'inline label - visible with data', 'ED_ENGLISH': 'inline label - visible with data', 'ED_GAEILGE': 'inline label - visible with data', 'COUNTY_ENGLISH': 'inline label - visible with data', 'COUNTY_GAEILGE': 'inline label - visible with data', 'Irish': 'inline label - visible with data', 'English': 'inline label - visible with data', 'Polish': 'inline label - visible with data', 'French': 'inline label - visible with data', 'Spanish': 'inline label - visible with data', 'Other': 'inline label - visible with data', 'Total': 'inline label - visible with data', });
lyr_Other_30_true_4.set('fieldLabels', {'SA_PUB2022': 'inline label - visible with data', 'ED_ENGLISH': 'inline label - visible with data', 'ED_GAEILGE': 'inline label - visible with data', 'COUNTY_ENGLISH': 'inline label - visible with data', 'COUNTY_GAEILGE': 'inline label - visible with data', 'Irish': 'inline label - visible with data', 'English': 'inline label - visible with data', 'Polish': 'inline label - visible with data', 'French': 'inline label - visible with data', 'Spanish': 'inline label - visible with data', 'Other': 'inline label - visible with data', 'Total': 'inline label - visible with data', });
lyr_Other_40_true_5.set('fieldLabels', {'SA_PUB2022': 'inline label - visible with data', 'ED_ENGLISH': 'inline label - visible with data', 'ED_GAEILGE': 'inline label - visible with data', 'COUNTY_ENGLISH': 'inline label - visible with data', 'COUNTY_GAEILGE': 'inline label - visible with data', 'Irish': 'inline label - visible with data', 'English': 'inline label - visible with data', 'Polish': 'inline label - visible with data', 'French': 'inline label - visible with data', 'Spanish': 'inline label - visible with data', 'Other': 'inline label - visible with data', 'Total': 'inline label - visible with data', });
lyr_Other_50_true_6.set('fieldLabels', {'SA_PUB2022': 'inline label - visible with data', 'ED_ENGLISH': 'inline label - visible with data', 'ED_GAEILGE': 'inline label - visible with data', 'COUNTY_ENGLISH': 'inline label - visible with data', 'COUNTY_GAEILGE': 'inline label - visible with data', 'Irish': 'inline label - visible with data', 'English': 'inline label - visible with data', 'Polish': 'inline label - visible with data', 'French': 'inline label - visible with data', 'Spanish': 'inline label - visible with data', 'Other': 'inline label - visible with data', 'Total': 'inline label - visible with data', });
lyr_Other_60_true_7.set('fieldLabels', {'SA_PUB2022': 'inline label - visible with data', 'ED_ENGLISH': 'inline label - visible with data', 'ED_GAEILGE': 'inline label - visible with data', 'COUNTY_ENGLISH': 'inline label - visible with data', 'COUNTY_GAEILGE': 'inline label - visible with data', 'Irish': 'inline label - visible with data', 'English': 'inline label - visible with data', 'Polish': 'inline label - visible with data', 'French': 'inline label - visible with data', 'Spanish': 'inline label - visible with data', 'Other': 'inline label - visible with data', 'Total': 'inline label - visible with data', });
lyr_Other_70_true_8.set('fieldLabels', {'SA_PUB2022': 'inline label - visible with data', 'ED_ENGLISH': 'inline label - visible with data', 'ED_GAEILGE': 'inline label - visible with data', 'COUNTY_ENGLISH': 'inline label - visible with data', 'COUNTY_GAEILGE': 'inline label - visible with data', 'Irish': 'inline label - visible with data', 'English': 'inline label - visible with data', 'Polish': 'inline label - visible with data', 'French': 'inline label - visible with data', 'Spanish': 'inline label - visible with data', 'Other': 'inline label - visible with data', 'Total': 'inline label - visible with data', });
lyr_Other_80_true_9.set('fieldLabels', {'SA_PUB2022': 'inline label - visible with data', 'ED_ENGLISH': 'inline label - visible with data', 'ED_GAEILGE': 'inline label - visible with data', 'COUNTY_ENGLISH': 'inline label - visible with data', 'COUNTY_GAEILGE': 'inline label - visible with data', 'Irish': 'inline label - visible with data', 'English': 'inline label - visible with data', 'Polish': 'inline label - visible with data', 'French': 'inline label - visible with data', 'Spanish': 'inline label - visible with data', 'Other': 'inline label - visible with data', 'Total': 'inline label - visible with data', });
lyr_Polish_40_true_10.set('fieldLabels', {'SA_PUB2022': 'inline label - visible with data', 'ED_ENGLISH': 'inline label - visible with data', 'ED_GAEILGE': 'inline label - visible with data', 'COUNTY_ENGLISH': 'inline label - visible with data', 'COUNTY_GAEILGE': 'inline label - visible with data', 'Irish': 'inline label - visible with data', 'English': 'inline label - visible with data', 'Polish': 'inline label - visible with data', 'French': 'inline label - visible with data', 'Spanish': 'inline label - visible with data', 'Other': 'inline label - visible with data', 'Total': 'inline label - visible with data', });
lyr_English_30_true_11.set('fieldLabels', {'SA_PUB2022': 'inline label - visible with data', 'ED_ENGLISH': 'inline label - visible with data', 'ED_GAEILGE': 'inline label - visible with data', 'COUNTY_ENGLISH': 'inline label - visible with data', 'COUNTY_GAEILGE': 'inline label - visible with data', 'Irish': 'inline label - visible with data', 'English': 'inline label - visible with data', 'Polish': 'inline label - visible with data', 'French': 'inline label - visible with data', 'Spanish': 'inline label - visible with data', 'Other': 'inline label - visible with data', 'Total': 'inline label - visible with data', });
lyr_English_40_true_12.set('fieldLabels', {'SA_PUB2022': 'inline label - visible with data', 'ED_ENGLISH': 'inline label - visible with data', 'ED_GAEILGE': 'inline label - visible with data', 'COUNTY_ENGLISH': 'inline label - visible with data', 'COUNTY_GAEILGE': 'inline label - visible with data', 'Irish': 'inline label - visible with data', 'English': 'inline label - visible with data', 'Polish': 'inline label - visible with data', 'French': 'inline label - visible with data', 'Spanish': 'inline label - visible with data', 'Other': 'inline label - visible with data', 'Total': 'inline label - visible with data', });
lyr_English_50_true_13.set('fieldLabels', {'SA_PUB2022': 'inline label - visible with data', 'ED_ENGLISH': 'inline label - visible with data', 'ED_GAEILGE': 'inline label - visible with data', 'COUNTY_ENGLISH': 'inline label - visible with data', 'COUNTY_GAEILGE': 'inline label - visible with data', 'Irish': 'inline label - visible with data', 'English': 'inline label - visible with data', 'Polish': 'inline label - visible with data', 'French': 'inline label - visible with data', 'Spanish': 'inline label - visible with data', 'Other': 'inline label - visible with data', 'Total': 'inline label - visible with data', });
lyr_English_60_true_14.set('fieldLabels', {'SA_PUB2022': 'inline label - visible with data', 'ED_ENGLISH': 'inline label - visible with data', 'ED_GAEILGE': 'inline label - visible with data', 'COUNTY_ENGLISH': 'inline label - visible with data', 'COUNTY_GAEILGE': 'inline label - visible with data', 'Irish': 'inline label - visible with data', 'English': 'inline label - visible with data', 'Polish': 'inline label - visible with data', 'French': 'inline label - visible with data', 'Spanish': 'inline label - visible with data', 'Other': 'inline label - visible with data', 'Total': 'inline label - visible with data', });
lyr_English_70_true_15.set('fieldLabels', {'SA_PUB2022': 'inline label - visible with data', 'ED_ENGLISH': 'inline label - visible with data', 'ED_GAEILGE': 'inline label - visible with data', 'COUNTY_ENGLISH': 'inline label - visible with data', 'COUNTY_GAEILGE': 'inline label - visible with data', 'Irish': 'inline label - visible with data', 'English': 'inline label - visible with data', 'Polish': 'inline label - visible with data', 'French': 'inline label - visible with data', 'Spanish': 'inline label - visible with data', 'Other': 'inline label - visible with data', 'Total': 'inline label - visible with data', });
lyr_English_80_true_16.set('fieldLabels', {'SA_PUB2022': 'inline label - visible with data', 'ED_ENGLISH': 'inline label - visible with data', 'ED_GAEILGE': 'inline label - visible with data', 'COUNTY_ENGLISH': 'inline label - visible with data', 'COUNTY_GAEILGE': 'inline label - visible with data', 'Irish': 'inline label - visible with data', 'English': 'inline label - visible with data', 'Polish': 'inline label - visible with data', 'French': 'inline label - visible with data', 'Spanish': 'inline label - visible with data', 'Other': 'inline label - visible with data', 'Total': 'inline label - visible with data', });
lyr_English_90_true_4_17.set('fieldLabels', {'SA_PUB2022': 'inline label - visible with data', 'ED_ENGLISH': 'inline label - visible with data', 'ED_GAEILGE': 'inline label - visible with data', 'COUNTY_ENGLISH': 'inline label - visible with data', 'COUNTY_GAEILGE': 'inline label - visible with data', 'Irish': 'inline label - visible with data', 'English': 'inline label - visible with data', 'Polish': 'inline label - visible with data', 'French': 'inline label - visible with data', 'Spanish': 'inline label - visible with data', 'Other': 'inline label - visible with data', 'Total': 'inline label - visible with data', });
lyr_English_90_true_3_18.set('fieldLabels', {'SA_PUB2022': 'inline label - visible with data', 'ED_ENGLISH': 'inline label - visible with data', 'ED_GAEILGE': 'inline label - visible with data', 'COUNTY_ENGLISH': 'inline label - visible with data', 'COUNTY_GAEILGE': 'inline label - visible with data', 'Irish': 'inline label - visible with data', 'English': 'inline label - visible with data', 'Polish': 'inline label - visible with data', 'French': 'inline label - visible with data', 'Spanish': 'inline label - visible with data', 'Other': 'inline label - visible with data', 'Total': 'inline label - visible with data', });
lyr_English_90_true_2_19.set('fieldLabels', {'SA_PUB2022': 'inline label - visible with data', 'ED_ENGLISH': 'inline label - visible with data', 'ED_GAEILGE': 'inline label - visible with data', 'COUNTY_ENGLISH': 'inline label - visible with data', 'COUNTY_GAEILGE': 'inline label - visible with data', 'Irish': 'inline label - visible with data', 'English': 'inline label - visible with data', 'Polish': 'inline label - visible with data', 'French': 'inline label - visible with data', 'Spanish': 'inline label - visible with data', 'Other': 'inline label - visible with data', 'Total': 'inline label - visible with data', });
lyr_English_90_true_1_20.set('fieldLabels', {'SA_PUB2022': 'inline label - visible with data', 'ED_ENGLISH': 'inline label - visible with data', 'ED_GAEILGE': 'inline label - visible with data', 'COUNTY_ENGLISH': 'inline label - visible with data', 'COUNTY_GAEILGE': 'inline label - visible with data', 'Irish': 'inline label - visible with data', 'English': 'inline label - visible with data', 'Polish': 'inline label - visible with data', 'French': 'inline label - visible with data', 'Spanish': 'inline label - visible with data', 'Other': 'inline label - visible with data', 'Total': 'inline label - visible with data', });
lyr_English_100_true_21.set('fieldLabels', {'SA_PUB2022': 'inline label - visible with data', 'ED_ENGLISH': 'inline label - visible with data', 'ED_GAEILGE': 'inline label - visible with data', 'COUNTY_ENGLISH': 'inline label - visible with data', 'COUNTY_GAEILGE': 'inline label - visible with data', 'Irish': 'inline label - visible with data', 'English': 'inline label - visible with data', 'Polish': 'inline label - visible with data', 'French': 'inline label - visible with data', 'Spanish': 'inline label - visible with data', 'Other': 'inline label - visible with data', 'Total': 'inline label - visible with data', });
lyr_Irish_40_true_22.set('fieldLabels', {'SA_PUB2022': 'inline label - visible with data', 'ED_ENGLISH': 'inline label - visible with data', 'ED_GAEILGE': 'inline label - visible with data', 'COUNTY_ENGLISH': 'inline label - visible with data', 'COUNTY_GAEILGE': 'inline label - visible with data', 'Irish': 'inline label - visible with data', 'English': 'inline label - visible with data', 'Polish': 'inline label - visible with data', 'French': 'inline label - visible with data', 'Spanish': 'inline label - visible with data', 'Other': 'inline label - visible with data', 'Total': 'inline label - visible with data', });
lyr_Irish_50_true_23.set('fieldLabels', {'SA_PUB2022': 'inline label - visible with data', 'ED_ENGLISH': 'inline label - visible with data', 'ED_GAEILGE': 'inline label - visible with data', 'COUNTY_ENGLISH': 'inline label - visible with data', 'COUNTY_GAEILGE': 'inline label - visible with data', 'Irish': 'inline label - visible with data', 'English': 'inline label - visible with data', 'Polish': 'inline label - visible with data', 'French': 'inline label - visible with data', 'Spanish': 'inline label - visible with data', 'Other': 'inline label - visible with data', 'Total': 'inline label - visible with data', });
lyr_Irish_60_true_24.set('fieldLabels', {'SA_PUB2022': 'inline label - visible with data', 'ED_ENGLISH': 'inline label - visible with data', 'ED_GAEILGE': 'inline label - visible with data', 'COUNTY_ENGLISH': 'inline label - visible with data', 'COUNTY_GAEILGE': 'inline label - visible with data', 'Irish': 'inline label - visible with data', 'English': 'inline label - visible with data', 'Polish': 'inline label - visible with data', 'French': 'inline label - visible with data', 'Spanish': 'inline label - visible with data', 'Other': 'inline label - visible with data', 'Total': 'inline label - visible with data', });
lyr_Irish_70_true_25.set('fieldLabels', {'SA_PUB2022': 'inline label - visible with data', 'ED_ENGLISH': 'inline label - visible with data', 'ED_GAEILGE': 'inline label - visible with data', 'COUNTY_ENGLISH': 'inline label - visible with data', 'COUNTY_GAEILGE': 'inline label - visible with data', 'Irish': 'inline label - visible with data', 'English': 'inline label - visible with data', 'Polish': 'inline label - visible with data', 'French': 'inline label - visible with data', 'Spanish': 'inline label - visible with data', 'Other': 'inline label - visible with data', 'Total': 'inline label - visible with data', });
lyr_Irish_70_true_25.on('precompose', function(evt) {
    evt.context.globalCompositeOperation = 'normal';
});