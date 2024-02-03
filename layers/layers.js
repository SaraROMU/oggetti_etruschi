var wms_layers = [];


        var lyr_EsriShadedRelief_0 = new ol.layer.Tile({
            'title': 'Esri Shaded Relief',
            'type': 'base',
            'opacity': 1.000000,
            
            
            source: new ol.source.XYZ({
    attributions: ' ',
                url: 'https://server.arcgisonline.com/arcgis/rest/services/World_Shaded_Relief/MapServer/tile/{z}/{y}/{x}'
            })
        });
var format_Etruscocorinzia_1 = new ol.format.GeoJSON();
var features_Etruscocorinzia_1 = format_Etruscocorinzia_1.readFeatures(json_Etruscocorinzia_1, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Etruscocorinzia_1 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Etruscocorinzia_1.addFeatures(features_Etruscocorinzia_1);
var lyr_Etruscocorinzia_1 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_Etruscocorinzia_1, 
                style: style_Etruscocorinzia_1,
                interactive: true,
                title: '<img src="styles/legend/Etruscocorinzia_1.png" /> Etrusco-corinzia'
            });
var format_Bucchero_2 = new ol.format.GeoJSON();
var features_Bucchero_2 = format_Bucchero_2.readFeatures(json_Bucchero_2, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Bucchero_2 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Bucchero_2.addFeatures(features_Bucchero_2);
var lyr_Bucchero_2 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_Bucchero_2, 
                style: style_Bucchero_2,
                interactive: true,
                title: '<img src="styles/legend/Bucchero_2.png" /> Bucchero'
            });
var format_AltroND_3 = new ol.format.GeoJSON();
var features_AltroND_3 = format_AltroND_3.readFeatures(json_AltroND_3, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_AltroND_3 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_AltroND_3.addFeatures(features_AltroND_3);
var lyr_AltroND_3 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_AltroND_3, 
                style: style_AltroND_3,
                interactive: true,
                title: '<img src="styles/legend/AltroND_3.png" /> Altro/ND'
            });
var format_Bacinoinbronzo_4 = new ol.format.GeoJSON();
var features_Bacinoinbronzo_4 = format_Bacinoinbronzo_4.readFeatures(json_Bacinoinbronzo_4, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Bacinoinbronzo_4 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Bacinoinbronzo_4.addFeatures(features_Bacinoinbronzo_4);
var lyr_Bacinoinbronzo_4 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_Bacinoinbronzo_4, 
                style: style_Bacinoinbronzo_4,
                interactive: true,
                title: '<img src="styles/legend/Bacinoinbronzo_4.png" /> Bacino in bronzo'
            });
var format_Bacinoinbronzoaorloperlato_5 = new ol.format.GeoJSON();
var features_Bacinoinbronzoaorloperlato_5 = format_Bacinoinbronzoaorloperlato_5.readFeatures(json_Bacinoinbronzoaorloperlato_5, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Bacinoinbronzoaorloperlato_5 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Bacinoinbronzoaorloperlato_5.addFeatures(features_Bacinoinbronzoaorloperlato_5);
var lyr_Bacinoinbronzoaorloperlato_5 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_Bacinoinbronzoaorloperlato_5, 
                style: style_Bacinoinbronzoaorloperlato_5,
                interactive: true,
                title: '<img src="styles/legend/Bacinoinbronzoaorloperlato_5.png" /> Bacino in bronzo a orlo perlato'
            });
var format_OlpeOenochoeinbronzo_6 = new ol.format.GeoJSON();
var features_OlpeOenochoeinbronzo_6 = format_OlpeOenochoeinbronzo_6.readFeatures(json_OlpeOenochoeinbronzo_6, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_OlpeOenochoeinbronzo_6 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_OlpeOenochoeinbronzo_6.addFeatures(features_OlpeOenochoeinbronzo_6);
var lyr_OlpeOenochoeinbronzo_6 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_OlpeOenochoeinbronzo_6, 
                style: style_OlpeOenochoeinbronzo_6,
                interactive: true,
                title: '<img src="styles/legend/OlpeOenochoeinbronzo_6.png" /> Olpe/Oenochoe in bronzo'
            });
var format_Schnabelkanne_7 = new ol.format.GeoJSON();
var features_Schnabelkanne_7 = format_Schnabelkanne_7.readFeatures(json_Schnabelkanne_7, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Schnabelkanne_7 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Schnabelkanne_7.addFeatures(features_Schnabelkanne_7);
var lyr_Schnabelkanne_7 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_Schnabelkanne_7, 
                style: style_Schnabelkanne_7,
                interactive: true,
                title: '<img src="styles/legend/Schnabelkanne_7.png" /> Schnabelkanne'
            });
var format_Avorio_8 = new ol.format.GeoJSON();
var features_Avorio_8 = format_Avorio_8.readFeatures(json_Avorio_8, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Avorio_8 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Avorio_8.addFeatures(features_Avorio_8);
var lyr_Avorio_8 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_Avorio_8, 
                style: style_Avorio_8,
                interactive: true,
                title: '<img src="styles/legend/Avorio_8.png" /> Avorio'
            });
var format_AnforadaTrasporto_9 = new ol.format.GeoJSON();
var features_AnforadaTrasporto_9 = format_AnforadaTrasporto_9.readFeatures(json_AnforadaTrasporto_9, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_AnforadaTrasporto_9 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_AnforadaTrasporto_9.addFeatures(features_AnforadaTrasporto_9);
var lyr_AnforadaTrasporto_9 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_AnforadaTrasporto_9, 
                style: style_AnforadaTrasporto_9,
                interactive: true,
                title: '<img src="styles/legend/AnforadaTrasporto_9.png" /> Anfora da Trasporto'
            });
var format_Iscrizione_10 = new ol.format.GeoJSON();
var features_Iscrizione_10 = format_Iscrizione_10.readFeatures(json_Iscrizione_10, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Iscrizione_10 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Iscrizione_10.addFeatures(features_Iscrizione_10);
var lyr_Iscrizione_10 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_Iscrizione_10, 
                style: style_Iscrizione_10,
                interactive: true,
                title: '<img src="styles/legend/Iscrizione_10.png" /> Iscrizione'
            });
var format_Colinoinbronzo_11 = new ol.format.GeoJSON();
var features_Colinoinbronzo_11 = format_Colinoinbronzo_11.readFeatures(json_Colinoinbronzo_11, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Colinoinbronzo_11 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Colinoinbronzo_11.addFeatures(features_Colinoinbronzo_11);
var lyr_Colinoinbronzo_11 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_Colinoinbronzo_11, 
                style: style_Colinoinbronzo_11,
                interactive: true,
                title: '<img src="styles/legend/Colinoinbronzo_11.png" /> Colino in bronzo'
            });
var format_Infundibulum_12 = new ol.format.GeoJSON();
var features_Infundibulum_12 = format_Infundibulum_12.readFeatures(json_Infundibulum_12, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Infundibulum_12 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Infundibulum_12.addFeatures(features_Infundibulum_12);
var lyr_Infundibulum_12 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_Infundibulum_12, 
                style: style_Infundibulum_12,
                interactive: true,
                title: '<img src="styles/legend/Infundibulum_12.png" /> Infundibulum'
            });
var format_Siticonoggettietruschicopiar_13 = new ol.format.GeoJSON();
var features_Siticonoggettietruschicopiar_13 = format_Siticonoggettietruschicopiar_13.readFeatures(json_Siticonoggettietruschicopiar_13, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Siticonoggettietruschicopiar_13 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Siticonoggettietruschicopiar_13.addFeatures(features_Siticonoggettietruschicopiar_13);
var lyr_Siticonoggettietruschicopiar_13 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_Siticonoggettietruschicopiar_13, 
                style: style_Siticonoggettietruschicopiar_13,
                interactive: true,
                title: '<img src="styles/legend/Siticonoggettietruschicopiar_13.png" /> Siti con oggetti etruschi copiar'
            });

lyr_EsriShadedRelief_0.setVisible(true);lyr_Etruscocorinzia_1.setVisible(false);lyr_Bucchero_2.setVisible(false);lyr_AltroND_3.setVisible(false);lyr_Bacinoinbronzo_4.setVisible(false);lyr_Bacinoinbronzoaorloperlato_5.setVisible(false);lyr_OlpeOenochoeinbronzo_6.setVisible(false);lyr_Schnabelkanne_7.setVisible(false);lyr_Avorio_8.setVisible(false);lyr_AnforadaTrasporto_9.setVisible(false);lyr_Iscrizione_10.setVisible(false);lyr_Colinoinbronzo_11.setVisible(false);lyr_Infundibulum_12.setVisible(false);lyr_Siticonoggettietruschicopiar_13.setVisible(true);
var layersList = [lyr_EsriShadedRelief_0,lyr_Etruscocorinzia_1,lyr_Bucchero_2,lyr_AltroND_3,lyr_Bacinoinbronzo_4,lyr_Bacinoinbronzoaorloperlato_5,lyr_OlpeOenochoeinbronzo_6,lyr_Schnabelkanne_7,lyr_Avorio_8,lyr_AnforadaTrasporto_9,lyr_Iscrizione_10,lyr_Colinoinbronzo_11,lyr_Infundibulum_12,lyr_Siticonoggettietruschicopiar_13];
lyr_Etruscocorinzia_1.set('fieldAliases', {'COOR.Y': 'COOR.Y', 'COOR. X': 'COOR. X', 'SITO': 'Sito', 'AREALE': 'Areale', 'Oggetti etruschi': 'Oggetti etruschi', 'BUCCHERO': 'BUCCHERO', 'ETRUSCO-CORINZIA (V=Vulci, C=Caere, T=Tarquinia, X=indeterminato)': 'ETRUSCO-CORINZIA (V=Vulci, C=Caere, T=Tarquinia, X=indeterminato)', 'BACINO IN BRONZO(OP= A ORLO PERLATO)': 'BACINO IN BRONZO(OP= A ORLO PERLATO)', 'OLPE/OENOCHOE IN BRONZO (S=Schnabelkannen, B=Beazley IX, R= Rodio, I=Imitazione, X= indeterminato)': 'OLPE/OENOCHOE IN BRONZO (S=Schnabelkannen, B=Beazley IX, R= Rodio, I=Imitazione, X= indeterminato)', 'AVORIO (C=cofanetti; TH=Tessera Hospitalis)': 'AVORIO (C=cofanetti; TH=Tessera Hospitalis)', 'ANFORA': 'ANFORA', 'ISCRIZIONE': 'ISCRIZIONE', 'COLINI': 'COLINI', 'INFUNDIBULA': 'INFUNDIBULA', 'ALTRO': 'ALTRO', 'BIBLIOGRAFIA': 'Bibliografia', });
lyr_Bucchero_2.set('fieldAliases', {'COOR.Y': 'COOR.Y', 'COOR. X': 'COOR. X', 'SITO': 'Sito', 'AREALE': 'Areale', 'Oggetti etruschi': 'Oggetti etruschi', 'BUCCHERO': 'BUCCHERO', 'ETRUSCO-CORINZIA (V=Vulci, C=Caere, T=Tarquinia, X=indeterminato)': 'ETRUSCO-CORINZIA (V=Vulci, C=Caere, T=Tarquinia, X=indeterminato)', 'BACINO IN BRONZO(OP= A ORLO PERLATO)': 'BACINO IN BRONZO(OP= A ORLO PERLATO)', 'OLPE/OENOCHOE IN BRONZO (S=Schnabelkannen, B=Beazley IX, R= Rodio, I=Imitazione, X= indeterminato)': 'OLPE/OENOCHOE IN BRONZO (S=Schnabelkannen, B=Beazley IX, R= Rodio, I=Imitazione, X= indeterminato)', 'AVORIO (C=cofanetti; TH=Tessera Hospitalis)': 'AVORIO (C=cofanetti; TH=Tessera Hospitalis)', 'ANFORA': 'ANFORA', 'ISCRIZIONE': 'ISCRIZIONE', 'COLINI': 'COLINI', 'INFUNDIBULA': 'INFUNDIBULA', 'ALTRO': 'ALTRO', 'BIBLIOGRAFIA': 'Bibliografia', });
lyr_AltroND_3.set('fieldAliases', {'COOR.Y': 'COOR.Y', 'COOR. X': 'COOR. X', 'SITO': 'Sito', 'AREALE': 'Areale', 'Oggetti etruschi': 'Oggetti etruschi', 'BUCCHERO': 'BUCCHERO', 'ETRUSCO-CORINZIA (V=Vulci, C=Caere, T=Tarquinia, X=indeterminato)': 'ETRUSCO-CORINZIA (V=Vulci, C=Caere, T=Tarquinia, X=indeterminato)', 'BACINO IN BRONZO(OP= A ORLO PERLATO)': 'BACINO IN BRONZO(OP= A ORLO PERLATO)', 'OLPE/OENOCHOE IN BRONZO (S=Schnabelkannen, B=Beazley IX, R= Rodio, I=Imitazione, X= indeterminato)': 'OLPE/OENOCHOE IN BRONZO (S=Schnabelkannen, B=Beazley IX, R= Rodio, I=Imitazione, X= indeterminato)', 'AVORIO (C=cofanetti; TH=Tessera Hospitalis)': 'AVORIO (C=cofanetti; TH=Tessera Hospitalis)', 'ANFORA': 'ANFORA', 'ISCRIZIONE': 'ISCRIZIONE', 'COLINI': 'COLINI', 'INFUNDIBULA': 'INFUNDIBULA', 'ALTRO': 'ALTRO', 'BIBLIOGRAFIA': 'Bibliografia', });
lyr_Bacinoinbronzo_4.set('fieldAliases', {'COOR.Y': 'COOR.Y', 'COOR. X': 'COOR. X', 'SITO': 'Sito', 'AREALE': 'Areale', 'Oggetti etruschi': 'Oggetti etruschi', 'BUCCHERO': 'BUCCHERO', 'ETRUSCO-CORINZIA (V=Vulci, C=Caere, T=Tarquinia, X=indeterminato)': 'ETRUSCO-CORINZIA (V=Vulci, C=Caere, T=Tarquinia, X=indeterminato)', 'BACINO IN BRONZO(OP= A ORLO PERLATO)': 'BACINO IN BRONZO(OP= A ORLO PERLATO)', 'OLPE/OENOCHOE IN BRONZO (S=Schnabelkannen, B=Beazley IX, R= Rodio, I=Imitazione, X= indeterminato)': 'OLPE/OENOCHOE IN BRONZO (S=Schnabelkannen, B=Beazley IX, R= Rodio, I=Imitazione, X= indeterminato)', 'AVORIO (C=cofanetti; TH=Tessera Hospitalis)': 'AVORIO (C=cofanetti; TH=Tessera Hospitalis)', 'ANFORA': 'ANFORA', 'ISCRIZIONE': 'ISCRIZIONE', 'COLINI': 'COLINI', 'INFUNDIBULA': 'INFUNDIBULA', 'ALTRO': 'ALTRO', 'BIBLIOGRAFIA': 'Bibliografia', });
lyr_Bacinoinbronzoaorloperlato_5.set('fieldAliases', {'COOR.Y': 'COOR.Y', 'COOR. X': 'COOR. X', 'SITO': 'Sito', 'AREALE': 'Areale', 'Oggetti etruschi': 'Oggetti etruschi', 'BUCCHERO': 'BUCCHERO', 'ETRUSCO-CORINZIA (V=Vulci, C=Caere, T=Tarquinia, X=indeterminato)': 'ETRUSCO-CORINZIA (V=Vulci, C=Caere, T=Tarquinia, X=indeterminato)', 'BACINO IN BRONZO(OP= A ORLO PERLATO)': 'BACINO IN BRONZO(OP= A ORLO PERLATO)', 'OLPE/OENOCHOE IN BRONZO (S=Schnabelkannen, B=Beazley IX, R= Rodio, I=Imitazione, X= indeterminato)': 'OLPE/OENOCHOE IN BRONZO (S=Schnabelkannen, B=Beazley IX, R= Rodio, I=Imitazione, X= indeterminato)', 'AVORIO (C=cofanetti; TH=Tessera Hospitalis)': 'AVORIO (C=cofanetti; TH=Tessera Hospitalis)', 'ANFORA': 'ANFORA', 'ISCRIZIONE': 'ISCRIZIONE', 'COLINI': 'COLINI', 'INFUNDIBULA': 'INFUNDIBULA', 'ALTRO': 'ALTRO', 'BIBLIOGRAFIA': 'Bibliografia', });
lyr_OlpeOenochoeinbronzo_6.set('fieldAliases', {'COOR.Y': 'COOR.Y', 'COOR. X': 'COOR. X', 'SITO': 'Sito', 'AREALE': 'Areale', 'Oggetti etruschi': 'Oggetti etruschi', 'BUCCHERO': 'BUCCHERO', 'ETRUSCO-CORINZIA (V=Vulci, C=Caere, T=Tarquinia, X=indeterminato)': 'ETRUSCO-CORINZIA (V=Vulci, C=Caere, T=Tarquinia, X=indeterminato)', 'BACINO IN BRONZO(OP= A ORLO PERLATO)': 'BACINO IN BRONZO(OP= A ORLO PERLATO)', 'OLPE/OENOCHOE IN BRONZO (S=Schnabelkannen, B=Beazley IX, R= Rodio, I=Imitazione, X= indeterminato)': 'OLPE/OENOCHOE IN BRONZO (S=Schnabelkannen, B=Beazley IX, R= Rodio, I=Imitazione, X= indeterminato)', 'AVORIO (C=cofanetti; TH=Tessera Hospitalis)': 'AVORIO (C=cofanetti; TH=Tessera Hospitalis)', 'ANFORA': 'ANFORA', 'ISCRIZIONE': 'ISCRIZIONE', 'COLINI': 'COLINI', 'INFUNDIBULA': 'INFUNDIBULA', 'ALTRO': 'ALTRO', 'BIBLIOGRAFIA': 'Bibliografia', });
lyr_Schnabelkanne_7.set('fieldAliases', {'COOR.Y': 'COOR.Y', 'COOR. X': 'COOR. X', 'SITO': 'Sito', 'AREALE': 'Areale', 'Oggetti etruschi': 'Oggetti etruschi', 'BUCCHERO': 'BUCCHERO', 'ETRUSCO-CORINZIA (V=Vulci, C=Caere, T=Tarquinia, X=indeterminato)': 'ETRUSCO-CORINZIA (V=Vulci, C=Caere, T=Tarquinia, X=indeterminato)', 'BACINO IN BRONZO(OP= A ORLO PERLATO)': 'BACINO IN BRONZO(OP= A ORLO PERLATO)', 'OLPE/OENOCHOE IN BRONZO (S=Schnabelkannen, B=Beazley IX, R= Rodio, I=Imitazione, X= indeterminato)': 'OLPE/OENOCHOE IN BRONZO (S=Schnabelkannen, B=Beazley IX, R= Rodio, I=Imitazione, X= indeterminato)', 'AVORIO (C=cofanetti; TH=Tessera Hospitalis)': 'AVORIO (C=cofanetti; TH=Tessera Hospitalis)', 'ANFORA': 'ANFORA', 'ISCRIZIONE': 'ISCRIZIONE', 'COLINI': 'COLINI', 'INFUNDIBULA': 'INFUNDIBULA', 'ALTRO': 'ALTRO', 'BIBLIOGRAFIA': 'Bibliografia', });
lyr_Avorio_8.set('fieldAliases', {'COOR.Y': 'COOR.Y', 'COOR. X': 'COOR. X', 'SITO': 'Sito', 'AREALE': 'Areale', 'Oggetti etruschi': 'Oggetti etruschi', 'BUCCHERO': 'BUCCHERO', 'ETRUSCO-CORINZIA (V=Vulci, C=Caere, T=Tarquinia, X=indeterminato)': 'ETRUSCO-CORINZIA (V=Vulci, C=Caere, T=Tarquinia, X=indeterminato)', 'BACINO IN BRONZO(OP= A ORLO PERLATO)': 'BACINO IN BRONZO(OP= A ORLO PERLATO)', 'OLPE/OENOCHOE IN BRONZO (S=Schnabelkannen, B=Beazley IX, R= Rodio, I=Imitazione, X= indeterminato)': 'OLPE/OENOCHOE IN BRONZO (S=Schnabelkannen, B=Beazley IX, R= Rodio, I=Imitazione, X= indeterminato)', 'AVORIO (C=cofanetti; TH=Tessera Hospitalis)': 'AVORIO (C=cofanetti; TH=Tessera Hospitalis)', 'ANFORA': 'ANFORA', 'ISCRIZIONE': 'ISCRIZIONE', 'COLINI': 'COLINI', 'INFUNDIBULA': 'INFUNDIBULA', 'ALTRO': 'ALTRO', 'BIBLIOGRAFIA': 'Bibliografia', });
lyr_AnforadaTrasporto_9.set('fieldAliases', {'COOR.Y': 'COOR.Y', 'COOR. X': 'COOR. X', 'SITO': 'Sito', 'AREALE': 'Areale', 'Oggetti etruschi': 'Oggetti etruschi', 'BUCCHERO': 'BUCCHERO', 'ETRUSCO-CORINZIA (V=Vulci, C=Caere, T=Tarquinia, X=indeterminato)': 'ETRUSCO-CORINZIA (V=Vulci, C=Caere, T=Tarquinia, X=indeterminato)', 'BACINO IN BRONZO(OP= A ORLO PERLATO)': 'BACINO IN BRONZO(OP= A ORLO PERLATO)', 'OLPE/OENOCHOE IN BRONZO (S=Schnabelkannen, B=Beazley IX, R= Rodio, I=Imitazione, X= indeterminato)': 'OLPE/OENOCHOE IN BRONZO (S=Schnabelkannen, B=Beazley IX, R= Rodio, I=Imitazione, X= indeterminato)', 'AVORIO (C=cofanetti; TH=Tessera Hospitalis)': 'AVORIO (C=cofanetti; TH=Tessera Hospitalis)', 'ANFORA': 'ANFORA', 'ISCRIZIONE': 'ISCRIZIONE', 'COLINI': 'COLINI', 'INFUNDIBULA': 'INFUNDIBULA', 'ALTRO': 'ALTRO', 'BIBLIOGRAFIA': 'Bibliografia', });
lyr_Iscrizione_10.set('fieldAliases', {'COOR.Y': 'COOR.Y', 'COOR. X': 'COOR. X', 'SITO': 'Sito', 'AREALE': 'Areale', 'Oggetti etruschi': 'Oggetti etruschi', 'BUCCHERO': 'BUCCHERO', 'ETRUSCO-CORINZIA (V=Vulci, C=Caere, T=Tarquinia, X=indeterminato)': 'ETRUSCO-CORINZIA (V=Vulci, C=Caere, T=Tarquinia, X=indeterminato)', 'BACINO IN BRONZO(OP= A ORLO PERLATO)': 'BACINO IN BRONZO(OP= A ORLO PERLATO)', 'OLPE/OENOCHOE IN BRONZO (S=Schnabelkannen, B=Beazley IX, R= Rodio, I=Imitazione, X= indeterminato)': 'OLPE/OENOCHOE IN BRONZO (S=Schnabelkannen, B=Beazley IX, R= Rodio, I=Imitazione, X= indeterminato)', 'AVORIO (C=cofanetti; TH=Tessera Hospitalis)': 'AVORIO (C=cofanetti; TH=Tessera Hospitalis)', 'ANFORA': 'ANFORA', 'ISCRIZIONE': 'ISCRIZIONE', 'COLINI': 'COLINI', 'INFUNDIBULA': 'INFUNDIBULA', 'ALTRO': 'ALTRO', 'BIBLIOGRAFIA': 'Bibliografia', });
lyr_Colinoinbronzo_11.set('fieldAliases', {'COOR.Y': 'COOR.Y', 'COOR. X': 'COOR. X', 'SITO': 'Sito', 'AREALE': 'Areale', 'Oggetti etruschi': 'Oggetti etruschi', 'BUCCHERO': 'BUCCHERO', 'ETRUSCO-CORINZIA (V=Vulci, C=Caere, T=Tarquinia, X=indeterminato)': 'ETRUSCO-CORINZIA (V=Vulci, C=Caere, T=Tarquinia, X=indeterminato)', 'BACINO IN BRONZO(OP= A ORLO PERLATO)': 'BACINO IN BRONZO(OP= A ORLO PERLATO)', 'OLPE/OENOCHOE IN BRONZO (S=Schnabelkannen, B=Beazley IX, R= Rodio, I=Imitazione, X= indeterminato)': 'OLPE/OENOCHOE IN BRONZO (S=Schnabelkannen, B=Beazley IX, R= Rodio, I=Imitazione, X= indeterminato)', 'AVORIO (C=cofanetti; TH=Tessera Hospitalis)': 'AVORIO (C=cofanetti; TH=Tessera Hospitalis)', 'ANFORA': 'ANFORA', 'ISCRIZIONE': 'ISCRIZIONE', 'COLINI': 'COLINI', 'INFUNDIBULA': 'INFUNDIBULA', 'ALTRO': 'ALTRO', 'BIBLIOGRAFIA': 'Bibliografia', });
lyr_Infundibulum_12.set('fieldAliases', {'COOR.Y': 'COOR.Y', 'COOR. X': 'COOR. X', 'SITO': 'Sito', 'AREALE': 'Areale', 'Oggetti etruschi': 'Oggetti etruschi', 'BUCCHERO': 'BUCCHERO', 'ETRUSCO-CORINZIA (V=Vulci, C=Caere, T=Tarquinia, X=indeterminato)': 'ETRUSCO-CORINZIA (V=Vulci, C=Caere, T=Tarquinia, X=indeterminato)', 'BACINO IN BRONZO(OP= A ORLO PERLATO)': 'BACINO IN BRONZO(OP= A ORLO PERLATO)', 'OLPE/OENOCHOE IN BRONZO (S=Schnabelkannen, B=Beazley IX, R= Rodio, I=Imitazione, X= indeterminato)': 'OLPE/OENOCHOE IN BRONZO (S=Schnabelkannen, B=Beazley IX, R= Rodio, I=Imitazione, X= indeterminato)', 'AVORIO (C=cofanetti; TH=Tessera Hospitalis)': 'AVORIO (C=cofanetti; TH=Tessera Hospitalis)', 'ANFORA': 'ANFORA', 'ISCRIZIONE': 'ISCRIZIONE', 'COLINI': 'COLINI', 'INFUNDIBULA': 'INFUNDIBULA', 'ALTRO': 'ALTRO', 'BIBLIOGRAFIA': 'Bibliografia', });
lyr_Siticonoggettietruschicopiar_13.set('fieldAliases', {'COOR.Y': 'COOR.Y', 'COOR. X': 'COOR. X', 'SITO': 'Sito', 'AREALE': 'Areale', 'Oggetti etruschi': 'Oggetti etruschi', 'BUCCHERO': 'BUCCHERO', 'ETRUSCO-CORINZIA (V=Vulci, C=Caere, T=Tarquinia, X=indeterminato)': 'ETRUSCO-CORINZIA (V=Vulci, C=Caere, T=Tarquinia, X=indeterminato)', 'BACINO IN BRONZO(OP= A ORLO PERLATO)': 'BACINO IN BRONZO(OP= A ORLO PERLATO)', 'OLPE/OENOCHOE IN BRONZO (S=Schnabelkannen, B=Beazley IX, R= Rodio, I=Imitazione, X= indeterminato)': 'OLPE/OENOCHOE IN BRONZO (S=Schnabelkannen, B=Beazley IX, R= Rodio, I=Imitazione, X= indeterminato)', 'AVORIO (C=cofanetti; TH=Tessera Hospitalis)': 'AVORIO (C=cofanetti; TH=Tessera Hospitalis)', 'ANFORA': 'ANFORA', 'ISCRIZIONE': 'ISCRIZIONE', 'COLINI': 'COLINI', 'INFUNDIBULA': 'INFUNDIBULA', 'ALTRO': 'ALTRO', 'BIBLIOGRAFIA': 'Bibliografia', });
lyr_Etruscocorinzia_1.set('fieldImages', {'COOR.Y': 'Hidden', 'COOR. X': 'Hidden', 'SITO': 'TextEdit', 'AREALE': 'TextEdit', 'Oggetti etruschi': 'TextEdit', 'BUCCHERO': 'Hidden', 'ETRUSCO-CORINZIA (V=Vulci, C=Caere, T=Tarquinia, X=indeterminato)': 'Hidden', 'BACINO IN BRONZO(OP= A ORLO PERLATO)': 'Hidden', 'OLPE/OENOCHOE IN BRONZO (S=Schnabelkannen, B=Beazley IX, R= Rodio, I=Imitazione, X= indeterminato)': 'Hidden', 'AVORIO (C=cofanetti; TH=Tessera Hospitalis)': 'Hidden', 'ANFORA': 'Hidden', 'ISCRIZIONE': 'Hidden', 'COLINI': 'Hidden', 'INFUNDIBULA': 'Hidden', 'ALTRO': 'Hidden', 'BIBLIOGRAFIA': 'TextEdit', });
lyr_Bucchero_2.set('fieldImages', {'COOR.Y': 'Hidden', 'COOR. X': 'Hidden', 'SITO': 'TextEdit', 'AREALE': 'TextEdit', 'Oggetti etruschi': 'TextEdit', 'BUCCHERO': 'Hidden', 'ETRUSCO-CORINZIA (V=Vulci, C=Caere, T=Tarquinia, X=indeterminato)': 'Hidden', 'BACINO IN BRONZO(OP= A ORLO PERLATO)': 'Hidden', 'OLPE/OENOCHOE IN BRONZO (S=Schnabelkannen, B=Beazley IX, R= Rodio, I=Imitazione, X= indeterminato)': 'Hidden', 'AVORIO (C=cofanetti; TH=Tessera Hospitalis)': 'Hidden', 'ANFORA': 'Hidden', 'ISCRIZIONE': 'Hidden', 'COLINI': 'Hidden', 'INFUNDIBULA': 'Hidden', 'ALTRO': 'Hidden', 'BIBLIOGRAFIA': 'TextEdit', });
lyr_AltroND_3.set('fieldImages', {'COOR.Y': 'Hidden', 'COOR. X': 'Hidden', 'SITO': 'TextEdit', 'AREALE': 'TextEdit', 'Oggetti etruschi': 'TextEdit', 'BUCCHERO': 'Hidden', 'ETRUSCO-CORINZIA (V=Vulci, C=Caere, T=Tarquinia, X=indeterminato)': 'Hidden', 'BACINO IN BRONZO(OP= A ORLO PERLATO)': 'Hidden', 'OLPE/OENOCHOE IN BRONZO (S=Schnabelkannen, B=Beazley IX, R= Rodio, I=Imitazione, X= indeterminato)': 'Hidden', 'AVORIO (C=cofanetti; TH=Tessera Hospitalis)': 'Hidden', 'ANFORA': 'Hidden', 'ISCRIZIONE': 'Hidden', 'COLINI': 'Hidden', 'INFUNDIBULA': 'Hidden', 'ALTRO': 'Hidden', 'BIBLIOGRAFIA': 'TextEdit', });
lyr_Bacinoinbronzo_4.set('fieldImages', {'COOR.Y': 'Hidden', 'COOR. X': 'Hidden', 'SITO': 'TextEdit', 'AREALE': 'TextEdit', 'Oggetti etruschi': 'TextEdit', 'BUCCHERO': 'Hidden', 'ETRUSCO-CORINZIA (V=Vulci, C=Caere, T=Tarquinia, X=indeterminato)': 'Hidden', 'BACINO IN BRONZO(OP= A ORLO PERLATO)': 'Hidden', 'OLPE/OENOCHOE IN BRONZO (S=Schnabelkannen, B=Beazley IX, R= Rodio, I=Imitazione, X= indeterminato)': 'Hidden', 'AVORIO (C=cofanetti; TH=Tessera Hospitalis)': 'Hidden', 'ANFORA': 'Hidden', 'ISCRIZIONE': 'Hidden', 'COLINI': 'Hidden', 'INFUNDIBULA': 'Hidden', 'ALTRO': 'Hidden', 'BIBLIOGRAFIA': 'TextEdit', });
lyr_Bacinoinbronzoaorloperlato_5.set('fieldImages', {'COOR.Y': 'Hidden', 'COOR. X': 'Hidden', 'SITO': 'TextEdit', 'AREALE': 'TextEdit', 'Oggetti etruschi': 'TextEdit', 'BUCCHERO': 'Hidden', 'ETRUSCO-CORINZIA (V=Vulci, C=Caere, T=Tarquinia, X=indeterminato)': 'Hidden', 'BACINO IN BRONZO(OP= A ORLO PERLATO)': 'Hidden', 'OLPE/OENOCHOE IN BRONZO (S=Schnabelkannen, B=Beazley IX, R= Rodio, I=Imitazione, X= indeterminato)': 'Hidden', 'AVORIO (C=cofanetti; TH=Tessera Hospitalis)': 'Hidden', 'ANFORA': 'Hidden', 'ISCRIZIONE': 'Hidden', 'COLINI': 'Hidden', 'INFUNDIBULA': 'Hidden', 'ALTRO': 'Hidden', 'BIBLIOGRAFIA': 'TextEdit', });
lyr_OlpeOenochoeinbronzo_6.set('fieldImages', {'COOR.Y': 'Hidden', 'COOR. X': 'Hidden', 'SITO': 'TextEdit', 'AREALE': 'TextEdit', 'Oggetti etruschi': 'TextEdit', 'BUCCHERO': 'Hidden', 'ETRUSCO-CORINZIA (V=Vulci, C=Caere, T=Tarquinia, X=indeterminato)': 'Hidden', 'BACINO IN BRONZO(OP= A ORLO PERLATO)': 'Hidden', 'OLPE/OENOCHOE IN BRONZO (S=Schnabelkannen, B=Beazley IX, R= Rodio, I=Imitazione, X= indeterminato)': 'Hidden', 'AVORIO (C=cofanetti; TH=Tessera Hospitalis)': 'Hidden', 'ANFORA': 'Hidden', 'ISCRIZIONE': 'Hidden', 'COLINI': 'Hidden', 'INFUNDIBULA': 'Hidden', 'ALTRO': 'Hidden', 'BIBLIOGRAFIA': 'TextEdit', });
lyr_Schnabelkanne_7.set('fieldImages', {'COOR.Y': 'Hidden', 'COOR. X': 'Hidden', 'SITO': 'TextEdit', 'AREALE': 'TextEdit', 'Oggetti etruschi': 'TextEdit', 'BUCCHERO': 'Hidden', 'ETRUSCO-CORINZIA (V=Vulci, C=Caere, T=Tarquinia, X=indeterminato)': 'Hidden', 'BACINO IN BRONZO(OP= A ORLO PERLATO)': 'Hidden', 'OLPE/OENOCHOE IN BRONZO (S=Schnabelkannen, B=Beazley IX, R= Rodio, I=Imitazione, X= indeterminato)': 'Hidden', 'AVORIO (C=cofanetti; TH=Tessera Hospitalis)': 'Hidden', 'ANFORA': 'Hidden', 'ISCRIZIONE': 'Hidden', 'COLINI': 'Hidden', 'INFUNDIBULA': 'Hidden', 'ALTRO': 'Hidden', 'BIBLIOGRAFIA': 'TextEdit', });
lyr_Avorio_8.set('fieldImages', {'COOR.Y': 'Hidden', 'COOR. X': 'Hidden', 'SITO': 'TextEdit', 'AREALE': 'TextEdit', 'Oggetti etruschi': 'TextEdit', 'BUCCHERO': 'Hidden', 'ETRUSCO-CORINZIA (V=Vulci, C=Caere, T=Tarquinia, X=indeterminato)': 'Hidden', 'BACINO IN BRONZO(OP= A ORLO PERLATO)': 'Hidden', 'OLPE/OENOCHOE IN BRONZO (S=Schnabelkannen, B=Beazley IX, R= Rodio, I=Imitazione, X= indeterminato)': 'Hidden', 'AVORIO (C=cofanetti; TH=Tessera Hospitalis)': 'Hidden', 'ANFORA': 'Hidden', 'ISCRIZIONE': 'Hidden', 'COLINI': 'Hidden', 'INFUNDIBULA': 'Hidden', 'ALTRO': 'Hidden', 'BIBLIOGRAFIA': 'TextEdit', });
lyr_AnforadaTrasporto_9.set('fieldImages', {'COOR.Y': 'Hidden', 'COOR. X': 'Hidden', 'SITO': 'TextEdit', 'AREALE': 'TextEdit', 'Oggetti etruschi': 'TextEdit', 'BUCCHERO': 'Hidden', 'ETRUSCO-CORINZIA (V=Vulci, C=Caere, T=Tarquinia, X=indeterminato)': 'Hidden', 'BACINO IN BRONZO(OP= A ORLO PERLATO)': 'Hidden', 'OLPE/OENOCHOE IN BRONZO (S=Schnabelkannen, B=Beazley IX, R= Rodio, I=Imitazione, X= indeterminato)': 'Hidden', 'AVORIO (C=cofanetti; TH=Tessera Hospitalis)': 'Hidden', 'ANFORA': 'Hidden', 'ISCRIZIONE': 'Hidden', 'COLINI': 'Hidden', 'INFUNDIBULA': 'Hidden', 'ALTRO': 'Hidden', 'BIBLIOGRAFIA': 'TextEdit', });
lyr_Iscrizione_10.set('fieldImages', {'COOR.Y': 'Hidden', 'COOR. X': 'Hidden', 'SITO': 'TextEdit', 'AREALE': 'TextEdit', 'Oggetti etruschi': 'TextEdit', 'BUCCHERO': 'Hidden', 'ETRUSCO-CORINZIA (V=Vulci, C=Caere, T=Tarquinia, X=indeterminato)': 'Hidden', 'BACINO IN BRONZO(OP= A ORLO PERLATO)': 'Hidden', 'OLPE/OENOCHOE IN BRONZO (S=Schnabelkannen, B=Beazley IX, R= Rodio, I=Imitazione, X= indeterminato)': 'Hidden', 'AVORIO (C=cofanetti; TH=Tessera Hospitalis)': 'Hidden', 'ANFORA': 'Hidden', 'ISCRIZIONE': 'Hidden', 'COLINI': 'Hidden', 'INFUNDIBULA': 'Hidden', 'ALTRO': 'Hidden', 'BIBLIOGRAFIA': 'TextEdit', });
lyr_Colinoinbronzo_11.set('fieldImages', {'COOR.Y': 'Hidden', 'COOR. X': 'Hidden', 'SITO': 'TextEdit', 'AREALE': 'TextEdit', 'Oggetti etruschi': 'TextEdit', 'BUCCHERO': 'Hidden', 'ETRUSCO-CORINZIA (V=Vulci, C=Caere, T=Tarquinia, X=indeterminato)': 'Hidden', 'BACINO IN BRONZO(OP= A ORLO PERLATO)': 'Hidden', 'OLPE/OENOCHOE IN BRONZO (S=Schnabelkannen, B=Beazley IX, R= Rodio, I=Imitazione, X= indeterminato)': 'Hidden', 'AVORIO (C=cofanetti; TH=Tessera Hospitalis)': 'Hidden', 'ANFORA': 'Hidden', 'ISCRIZIONE': 'Hidden', 'COLINI': 'Hidden', 'INFUNDIBULA': 'Hidden', 'ALTRO': 'Hidden', 'BIBLIOGRAFIA': 'TextEdit', });
lyr_Infundibulum_12.set('fieldImages', {'COOR.Y': 'Hidden', 'COOR. X': 'Hidden', 'SITO': 'TextEdit', 'AREALE': 'TextEdit', 'Oggetti etruschi': 'TextEdit', 'BUCCHERO': 'Hidden', 'ETRUSCO-CORINZIA (V=Vulci, C=Caere, T=Tarquinia, X=indeterminato)': 'Hidden', 'BACINO IN BRONZO(OP= A ORLO PERLATO)': 'Hidden', 'OLPE/OENOCHOE IN BRONZO (S=Schnabelkannen, B=Beazley IX, R= Rodio, I=Imitazione, X= indeterminato)': 'Hidden', 'AVORIO (C=cofanetti; TH=Tessera Hospitalis)': 'Hidden', 'ANFORA': 'Hidden', 'ISCRIZIONE': 'Hidden', 'COLINI': 'Hidden', 'INFUNDIBULA': 'Hidden', 'ALTRO': 'Hidden', 'BIBLIOGRAFIA': 'TextEdit', });
lyr_Siticonoggettietruschicopiar_13.set('fieldImages', {'COOR.Y': 'Hidden', 'COOR. X': 'Hidden', 'SITO': 'TextEdit', 'AREALE': 'TextEdit', 'Oggetti etruschi': 'TextEdit', 'BUCCHERO': 'Hidden', 'ETRUSCO-CORINZIA (V=Vulci, C=Caere, T=Tarquinia, X=indeterminato)': 'Hidden', 'BACINO IN BRONZO(OP= A ORLO PERLATO)': 'Hidden', 'OLPE/OENOCHOE IN BRONZO (S=Schnabelkannen, B=Beazley IX, R= Rodio, I=Imitazione, X= indeterminato)': 'Hidden', 'AVORIO (C=cofanetti; TH=Tessera Hospitalis)': 'Hidden', 'ANFORA': 'Hidden', 'ISCRIZIONE': 'Hidden', 'COLINI': 'Hidden', 'INFUNDIBULA': 'Hidden', 'ALTRO': 'Hidden', 'BIBLIOGRAFIA': 'TextEdit', });
lyr_Etruscocorinzia_1.set('fieldLabels', {'SITO': 'inline label', 'AREALE': 'inline label', 'Oggetti etruschi': 'inline label', 'BIBLIOGRAFIA': 'inline label', });
lyr_Bucchero_2.set('fieldLabels', {'SITO': 'inline label', 'AREALE': 'inline label', 'Oggetti etruschi': 'inline label', 'BIBLIOGRAFIA': 'inline label', });
lyr_AltroND_3.set('fieldLabels', {'SITO': 'inline label', 'AREALE': 'inline label', 'Oggetti etruschi': 'inline label', 'BIBLIOGRAFIA': 'inline label', });
lyr_Bacinoinbronzo_4.set('fieldLabels', {'SITO': 'inline label', 'AREALE': 'inline label', 'Oggetti etruschi': 'inline label', 'BIBLIOGRAFIA': 'inline label', });
lyr_Bacinoinbronzoaorloperlato_5.set('fieldLabels', {'SITO': 'inline label', 'AREALE': 'inline label', 'Oggetti etruschi': 'inline label', 'BIBLIOGRAFIA': 'inline label', });
lyr_OlpeOenochoeinbronzo_6.set('fieldLabels', {'SITO': 'inline label', 'AREALE': 'inline label', 'Oggetti etruschi': 'inline label', 'BIBLIOGRAFIA': 'inline label', });
lyr_Schnabelkanne_7.set('fieldLabels', {'SITO': 'inline label', 'AREALE': 'inline label', 'Oggetti etruschi': 'inline label', 'BIBLIOGRAFIA': 'inline label', });
lyr_Avorio_8.set('fieldLabels', {'SITO': 'inline label', 'AREALE': 'inline label', 'Oggetti etruschi': 'inline label', 'BIBLIOGRAFIA': 'inline label', });
lyr_AnforadaTrasporto_9.set('fieldLabels', {'SITO': 'inline label', 'AREALE': 'inline label', 'Oggetti etruschi': 'inline label', 'BIBLIOGRAFIA': 'inline label', });
lyr_Iscrizione_10.set('fieldLabels', {'SITO': 'inline label', 'AREALE': 'inline label', 'Oggetti etruschi': 'inline label', 'BIBLIOGRAFIA': 'inline label', });
lyr_Colinoinbronzo_11.set('fieldLabels', {'SITO': 'inline label', 'AREALE': 'inline label', 'Oggetti etruschi': 'inline label', 'BIBLIOGRAFIA': 'inline label', });
lyr_Infundibulum_12.set('fieldLabels', {'SITO': 'inline label', 'AREALE': 'inline label', 'Oggetti etruschi': 'inline label', 'BIBLIOGRAFIA': 'inline label', });
lyr_Siticonoggettietruschicopiar_13.set('fieldLabels', {'SITO': 'inline label', 'AREALE': 'inline label', 'Oggetti etruschi': 'inline label', 'BIBLIOGRAFIA': 'inline label', });
lyr_Siticonoggettietruschicopiar_13.on('precompose', function(evt) {
    evt.context.globalCompositeOperation = 'normal';
});