document.addEventListener('DOMContentLoaded', () => {

    // 1. PALETKA BARVIČEK
    const barvy = {
        "zelena":   { base: "#22c55e", hover: "#15803d" },
        "oranzova": { base: "#f97316", hover: "#c2410c" },
        "cervena":  { base: "#ef4444", hover: "#b91c1c" },
        "seda":     { base: "#d1d5db", hover: "#9ca3af" } // fallback pro země bez dat
    };

    // 2. DATA O ZEMÍCH
    const zemeData = {
        // Střední Evropa
        "Czechia": {
            name: "Česká republika",
            color: "zelena",
            text: "Lorem ipsum dolor sit amet consectetur adipiscing elit. Quisque faucibus ex sapien vitae pellentesque sem placerat. In id cursus mi pretium tellus duis convallis. Tempus leo eu aenean sed diam urna tempor. Pulvinar vivamus fringilla lacus nec metus bibendum egestas. Iaculis massa nisl malesuada lacinia integer nunc posuere. Ut hendrerit semper vel class aptent taciti sociosqu. Ad litora torquent per conubia nostra inceptos himenaeos."
        },
        "Slovakia": {
            name: "Slovensko",
            color: "oranzova",
            text: "Lorem ipsum dolor sit amet consectetur adipiscing elit. Quisque faucibus ex sapien vitae pellentesque sem placerat. In id cursus mi pretium tellus duis convallis. Tempus leo eu aenean sed diam urna tempor. Pulvinar vivamus fringilla lacus nec metus bibendum egestas. Iaculis massa nisl malesuada lacinia integer nunc posuere. Ut hendrerit semper vel class aptent taciti sociosqu. Ad litora torquent per conubia nostra inceptos himenaeos."
        },
        "Germany": {
            name: "Německo",
            color: "cervena",
            text: "Lorem ipsum dolor sit amet consectetur adipiscing elit. Quisque faucibus ex sapien vitae pellentesque sem placerat. In id cursus mi pretium tellus duis convallis. Tempus leo eu aenean sed diam urna tempor. Pulvinar vivamus fringilla lacus nec metus bibendum egestas. Iaculis massa nisl malesuada lacinia integer nunc posuere. Ut hendrerit semper vel class aptent taciti sociosqu. Ad litora torquent per conubia nostra inceptos himenaeos."
        },
        "Poland": {
            name: "Polsko",
            color: "zelena",
            text: "Lorem ipsum dolor sit amet consectetur adipiscing elit. Quisque faucibus ex sapien vitae pellentesque sem placerat. In id cursus mi pretium tellus duis convallis. Tempus leo eu aenean sed diam urna tempor. Pulvinar vivamus fringilla lacus nec metus bibendum egestas. Iaculis massa nisl malesuada lacinia integer nunc posuere. Ut hendrerit semper vel class aptent taciti sociosqu. Ad litora torquent per conubia nostra inceptos himenaeos."
        },
        "Austria": {
            name: "Rakousko",
            color: "oranzova",
            text: "Lorem ipsum dolor sit amet consectetur adipiscing elit. Quisque faucibus ex sapien vitae pellentesque sem placerat. In id cursus mi pretium tellus duis convallis. Tempus leo eu aenean sed diam urna tempor. Pulvinar vivamus fringilla lacus nec metus bibendum egestas. Iaculis massa nisl malesuada lacinia integer nunc posuere. Ut hendrerit semper vel class aptent taciti sociosqu. Ad litora torquent per conubia nostra inceptos himenaeos."
        },
        "Hungary": {
            name: "Maďarsko",
            color: "cervena",
            text: "Lorem ipsum dolor sit amet consectetur adipiscing elit. Quisque faucibus ex sapien vitae pellentesque sem placerat. In id cursus mi pretium tellus duis convallis. Tempus leo eu aenean sed diam urna tempor. Pulvinar vivamus fringilla lacus nec metus bibendum egestas. Iaculis massa nisl malesuada lacinia integer nunc posuere. Ut hendrerit semper vel class aptent taciti sociosqu. Ad litora torquent per conubia nostra inceptos himenaeos."
        },
        "Switzerland": {
            name: "Švýcarsko",
            color: "zelena",
            text: "Lorem ipsum dolor sit amet consectetur adipiscing elit. Quisque faucibus ex sapien vitae pellentesque sem placerat. In id cursus mi pretium tellus duis convallis. Tempus leo eu aenean sed diam urna tempor. Pulvinar vivamus fringilla lacus nec metus bibendum egestas. Iaculis massa nisl malesuada lacinia integer nunc posuere. Ut hendrerit semper vel class aptent taciti sociosqu. Ad litora torquent per conubia nostra inceptos himenaeos."
        },
        "Slovenia": {
            name: "Slovinsko",
            color: "oranzova",
            text: "Lorem ipsum dolor sit amet consectetur adipiscing elit. Quisque faucibus ex sapien vitae pellentesque sem placerat. In id cursus mi pretium tellus duis convallis. Tempus leo eu aenean sed diam urna tempor. Pulvinar vivamus fringilla lacus nec metus bibendum egestas. Iaculis massa nisl malesuada lacinia integer nunc posuere. Ut hendrerit semper vel class aptent taciti sociosqu. Ad litora torquent per conubia nostra inceptos himenaeos."
        },

        // Západní Evropa
        "France": {
            name: "Francie",
            color: "zelena",
            text: "Lorem ipsum dolor sit amet consectetur adipiscing elit. Quisque faucibus ex sapien vitae pellentesque sem placerat. In id cursus mi pretium tellus duis convallis. Tempus leo eu aenean sed diam urna tempor. Pulvinar vivamus fringilla lacus nec metus bibendum egestas. Iaculis massa nisl malesuada lacinia integer nunc posuere. Ut hendrerit semper vel class aptent taciti sociosqu. Ad litora torquent per conubia nostra inceptos himenaeos."
        },
        "United Kingdom": {
            name: "Velká Británie",
            color: "zelena",
            text: "Lorem ipsum dolor sit amet consectetur adipiscing elit. Quisque faucibus ex sapien vitae pellentesque sem placerat. In id cursus mi pretium tellus duis convallis. Tempus leo eu aenean sed diam urna tempor. Pulvinar vivamus fringilla lacus nec metus bibendum egestas. Iaculis massa nisl malesuada lacinia integer nunc posuere. Ut hendrerit semper vel class aptent taciti sociosqu. Ad litora torquent per conubia nostra inceptos himenaeos."
        },
        "Ireland": {
            name: "Irsko",
            color: "oranzova",
            text: "Lorem ipsum dolor sit amet consectetur adipiscing elit. Quisque faucibus ex sapien vitae pellentesque sem placerat. In id cursus mi pretium tellus duis convallis. Tempus leo eu aenean sed diam urna tempor. Pulvinar vivamus fringilla lacus nec metus bibendum egestas. Iaculis massa nisl malesuada lacinia integer nunc posuere. Ut hendrerit semper vel class aptent taciti sociosqu. Ad litora torquent per conubia nostra inceptos himenaeos."
        },
        "Belgium": {
            name: "Belgie",
            color: "cervena",
            text: "Lorem ipsum dolor sit amet consectetur adipiscing elit. Quisque faucibus ex sapien vitae pellentesque sem placerat. In id cursus mi pretium tellus duis convallis. Tempus leo eu aenean sed diam urna tempor. Pulvinar vivamus fringilla lacus nec metus bibendum egestas. Iaculis massa nisl malesuada lacinia integer nunc posuere. Ut hendrerit semper vel class aptent taciti sociosqu. Ad litora torquent per conubia nostra inceptos himenaeos."
        },
        "Netherlands": {
            name: "Nizozemsko",
            color: "zelena",
            text: "Lorem ipsum dolor sit amet consectetur adipiscing elit. Quisque faucibus ex sapien vitae pellentesque sem placerat. In id cursus mi pretium tellus duis convallis. Tempus leo eu aenean sed diam urna tempor. Pulvinar vivamus fringilla lacus nec metus bibendum egestas. Iaculis massa nisl malesuada lacinia integer nunc posuere. Ut hendrerit semper vel class aptent taciti sociosqu. Ad litora torquent per conubia nostra inceptos himenaeos."
        },
        "Luxembourg": {
            name: "Lucembursko",
            color: "oranzova",
            text: "Lorem ipsum dolor sit amet consectetur adipiscing elit. Quisque faucibus ex sapien vitae pellentesque sem placerat. In id cursus mi pretium tellus duis convallis. Tempus leo eu aenean sed diam urna tempor. Pulvinar vivamus fringilla lacus nec metus bibendum egestas. Iaculis massa nisl malesuada lacinia integer nunc posuere. Ut hendrerit semper vel class aptent taciti sociosqu. Ad litora torquent per conubia nostra inceptos himenaeos."
        },

        // Jižní Evropa
        "Spain": {
            name: "Španělsko",
            color: "oranzova",
            text: "Lorem ipsum dolor sit amet consectetur adipiscing elit. Quisque faucibus ex sapien vitae pellentesque sem placerat. In id cursus mi pretium tellus duis convallis. Tempus leo eu aenean sed diam urna tempor. Pulvinar vivamus fringilla lacus nec metus bibendum egestas. Iaculis massa nisl malesuada lacinia integer nunc posuere. Ut hendrerit semper vel class aptent taciti sociosqu. Ad litora torquent per conubia nostra inceptos himenaeos."
        },
        "Portugal": {
            name: "Portugalsko",
            color: "zelena",
            text: "Lorem ipsum dolor sit amet consectetur adipiscing elit. Quisque faucibus ex sapien vitae pellentesque sem placerat. In id cursus mi pretium tellus duis convallis. Tempus leo eu aenean sed diam urna tempor. Pulvinar vivamus fringilla lacus nec metus bibendum egestas. Iaculis massa nisl malesuada lacinia integer nunc posuere. Ut hendrerit semper vel class aptent taciti sociosqu. Ad litora torquent per conubia nostra inceptos himenaeos."
        },
        "Italy": {
            name: "Itálie",
            color: "cervena",
            text: "Lorem ipsum dolor sit amet consectetur adipiscing elit. Quisque faucibus ex sapien vitae pellentesque sem placerat. In id cursus mi pretium tellus duis convallis. Tempus leo eu aenean sed diam urna tempor. Pulvinar vivamus fringilla lacus nec metus bibendum egestas. Iaculis massa nisl malesuada lacinia integer nunc posuere. Ut hendrerit semper vel class aptent taciti sociosqu. Ad litora torquent per conubia nostra inceptos himenaeos."
        },
        "Greece": {
            name: "Řecko",
            color: "zelena",
            text: "Lorem ipsum dolor sit amet consectetur adipiscing elit. Quisque faucibus ex sapien vitae pellentesque sem placerat. In id cursus mi pretium tellus duis convallis. Tempus leo eu aenean sed diam urna tempor. Pulvinar vivamus fringilla lacus nec metus bibendum egestas. Iaculis massa nisl malesuada lacinia integer nunc posuere. Ut hendrerit semper vel class aptent taciti sociosqu. Ad litora torquent per conubia nostra inceptos himenaeos."
        },
        "Croatia": {
            name: "Chorvatsko",
            color: "oranzova",
            text: "Lorem ipsum dolor sit amet consectetur adipiscing elit. Quisque faucibus ex sapien vitae pellentesque sem placerat. In id cursus mi pretium tellus duis convallis. Tempus leo eu aenean sed diam urna tempor. Pulvinar vivamus fringilla lacus nec metus bibendum egestas. Iaculis massa nisl malesuada lacinia integer nunc posuere. Ut hendrerit semper vel class aptent taciti sociosqu. Ad litora torquent per conubia nostra inceptos himenaeos."
        },
        "Bosnia and Herz.": {
            name: "Bosna a Hercegovina",
            color: "cervena",
            text: "Lorem ipsum dolor sit amet consectetur adipiscing elit. Quisque faucibus ex sapien vitae pellentesque sem placerat. In id cursus mi pretium tellus duis convallis. Tempus leo eu aenean sed diam urna tempor. Pulvinar vivamus fringilla lacus nec metus bibendum egestas. Iaculis massa nisl malesuada lacinia integer nunc posuere. Ut hendrerit semper vel class aptent taciti sociosqu. Ad litora torquent per conubia nostra inceptos himenaeos."
        },
        "Serbia": {
            name: "Srbsko",
            color: "zelena",
            text: "Lorem ipsum dolor sit amet consectetur adipiscing elit. Quisque faucibus ex sapien vitae pellentesque sem placerat. In id cursus mi pretium tellus duis convallis. Tempus leo eu aenean sed diam urna tempor. Pulvinar vivamus fringilla lacus nec metus bibendum egestas. Iaculis massa nisl malesuada lacinia integer nunc posuere. Ut hendrerit semper vel class aptent taciti sociosqu. Ad litora torquent per conubia nostra inceptos himenaeos."
        },
        "Montenegro": {
            name: "Černá Hora",
            color: "oranzova",
            text: "Lorem ipsum dolor sit amet consectetur adipiscing elit. Quisque faucibus ex sapien vitae pellentesque sem placerat. In id cursus mi pretium tellus duis convallis. Tempus leo eu aenean sed diam urna tempor. Pulvinar vivamus fringilla lacus nec metus bibendum egestas. Iaculis massa nisl malesuada lacinia integer nunc posuere. Ut hendrerit semper vel class aptent taciti sociosqu. Ad litora torquent per conubia nostra inceptos himenaeos."
        },
        "Albania": {
            name: "Albánie",
            color: "cervena",
            text: "Lorem ipsum dolor sit amet consectetur adipiscing elit. Quisque faucibus ex sapien vitae pellentesque sem placerat. In id cursus mi pretium tellus duis convallis. Tempus leo eu aenean sed diam urna tempor. Pulvinar vivamus fringilla lacus nec metus bibendum egestas. Iaculis massa nisl malesuada lacinia integer nunc posuere. Ut hendrerit semper vel class aptent taciti sociosqu. Ad litora torquent per conubia nostra inceptos himenaeos."
        },
        "North Macedonia": {
            name: "Severní Makedonie",
            color: "zelena",
            text: "Lorem ipsum dolor sit amet consectetur adipiscing elit. Quisque faucibus ex sapien vitae pellentesque sem placerat. In id cursus mi pretium tellus duis convallis. Tempus leo eu aenean sed diam urna tempor. Pulvinar vivamus fringilla lacus nec metus bibendum egestas. Iaculis massa nisl malesuada lacinia integer nunc posuere. Ut hendrerit semper vel class aptent taciti sociosqu. Ad litora torquent per conubia nostra inceptos himenaeos."
        },
        "Bulgaria": {
            name: "Bulharsko",
            color: "oranzova",
            text: "Lorem ipsum dolor sit amet consectetur adipiscing elit. Quisque faucibus ex sapien vitae pellentesque sem placerat. In id cursus mi pretium tellus duis convallis. Tempus leo eu aenean sed diam urna tempor. Pulvinar vivamus fringilla lacus nec metus bibendum egestas. Iaculis massa nisl malesuada lacinia integer nunc posuere. Ut hendrerit semper vel class aptent taciti sociosqu. Ad litora torquent per conubia nostra inceptos himenaeos."
        },
        "Romania": {
            name: "Rumunsko",
            color: "cervena",
            text: "Lorem ipsum dolor sit amet consectetur adipiscing elit. Quisque faucibus ex sapien vitae pellentesque sem placerat. In id cursus mi pretium tellus duis convallis. Tempus leo eu aenean sed diam urna tempor. Pulvinar vivamus fringilla lacus nec metus bibendum egestas. Iaculis massa nisl malesuada lacinia integer nunc posuere. Ut hendrerit semper vel class aptent taciti sociosqu. Ad litora torquent per conubia nostra inceptos himenaeos."
        },

        // Severní Evropa
        "Denmark": {
            name: "Dánsko",
            color: "zelena",
            text: "Lorem ipsum dolor sit amet consectetur adipiscing elit. Quisque faucibus ex sapien vitae pellentesque sem placerat. In id cursus mi pretium tellus duis convallis. Tempus leo eu aenean sed diam urna tempor. Pulvinar vivamus fringilla lacus nec metus bibendum egestas. Iaculis massa nisl malesuada lacinia integer nunc posuere. Ut hendrerit semper vel class aptent taciti sociosqu. Ad litora torquent per conubia nostra inceptos himenaeos."
        },
        "Sweden": {
            name: "Švédsko",
            color: "oranzova",
            text: "Lorem ipsum dolor sit amet consectetur adipiscing elit. Quisque faucibus ex sapien vitae pellentesque sem placerat. In id cursus mi pretium tellus duis convallis. Tempus leo eu aenean sed diam urna tempor. Pulvinar vivamus fringilla lacus nec metus bibendum egestas. Iaculis massa nisl malesuada lacinia integer nunc posuere. Ut hendrerit semper vel class aptent taciti sociosqu. Ad litora torquent per conubia nostra inceptos himenaeos."
        },
        "Norway": {
            name: "Norsko",
            color: "cervena",
            text: "Lorem ipsum dolor sit amet consectetur adipiscing elit. Quisque faucibus ex sapien vitae pellentesque sem placerat. In id cursus mi pretium tellus duis convallis. Tempus leo eu aenean sed diam urna tempor. Pulvinar vivamus fringilla lacus nec metus bibendum egestas. Iaculis massa nisl malesuada lacinia integer nunc posuere. Ut hendrerit semper vel class aptent taciti sociosqu. Ad litora torquent per conubia nostra inceptos himenaeos."
        },
        "Finland": {
            name: "Finsko",
            color: "zelena",
            text: "Lorem ipsum dolor sit amet consectetur adipiscing elit. Quisque faucibus ex sapien vitae pellentesque sem placerat. In id cursus mi pretium tellus duis convallis. Tempus leo eu aenean sed diam urna tempor. Pulvinar vivamus fringilla lacus nec metus bibendum egestas. Iaculis massa nisl malesuada lacinia integer nunc posuere. Ut hendrerit semper vel class aptent taciti sociosqu. Ad litora torquent per conubia nostra inceptos himenaeos."
        },
        "Estonia": {
            name: "Estonsko",
            color: "oranzova",
            text: "Lorem ipsum dolor sit amet consectetur adipiscing elit. Quisque faucibus ex sapien vitae pellentesque sem placerat. In id cursus mi pretium tellus duis convallis. Tempus leo eu aenean sed diam urna tempor. Pulvinar vivamus fringilla lacus nec metus bibendum egestas. Iaculis massa nisl malesuada lacinia integer nunc posuere. Ut hendrerit semper vel class aptent taciti sociosqu. Ad litora torquent per conubia nostra inceptos himenaeos."
        },
        "Latvia": {
            name: "Lotyšsko",
            color: "cervena",
            text: "Lorem ipsum dolor sit amet consectetur adipiscing elit. Quisque faucibus ex sapien vitae pellentesque sem placerat. In id cursus mi pretium tellus duis convallis. Tempus leo eu aenean sed diam urna tempor. Pulvinar vivamus fringilla lacus nec metus bibendum egestas. Iaculis massa nisl malesuada lacinia integer nunc posuere. Ut hendrerit semper vel class aptent taciti sociosqu. Ad litora torquent per conubia nostra inceptos himenaeos."
        },
        "Lithuania": {
            name: "Litva",
            color: "zelena",
            text: "Lorem ipsum dolor sit amet consectetur adipiscing elit. Quisque faucibus ex sapien vitae pellentesque sem placerat. In id cursus mi pretium tellus duis convallis. Tempus leo eu aenean sed diam urna tempor. Pulvinar vivamus fringilla lacus nec metus bibendum egestas. Iaculis massa nisl malesuada lacinia integer nunc posuere. Ut hendrerit semper vel class aptent taciti sociosqu. Ad litora torquent per conubia nostra inceptos himenaeos."
        },

        // Východní Evropa a zbytek
        "Ukraine": {
            name: "Ukrajina",
            color: "oranzova",
            text: "Lorem ipsum dolor sit amet consectetur adipiscing elit. Quisque faucibus ex sapien vitae pellentesque sem placerat. In id cursus mi pretium tellus duis convallis. Tempus leo eu aenean sed diam urna tempor. Pulvinar vivamus fringilla lacus nec metus bibendum egestas. Iaculis massa nisl malesuada lacinia integer nunc posuere. Ut hendrerit semper vel class aptent taciti sociosqu. Ad litora torquent per conubia nostra inceptos himenaeos."
        },
        "Belarus": {
            name: "Bělorusko",
            color: "cervena",
            text: "Lorem ipsum dolor sit amet consectetur adipiscing elit. Quisque faucibus ex sapien vitae pellentesque sem placerat. In id cursus mi pretium tellus duis convallis. Tempus leo eu aenean sed diam urna tempor. Pulvinar vivamus fringilla lacus nec metus bibendum egestas. Iaculis massa nisl malesuada lacinia integer nunc posuere. Ut hendrerit semper vel class aptent taciti sociosqu. Ad litora torquent per conubia nostra inceptos himenaeos."
        },
        "Moldova": {
            name: "Moldavsko",
            color: "zelena",
            text: "Lorem ipsum dolor sit amet consectetur adipiscing elit. Quisque faucibus ex sapien vitae pellentesque sem placerat. In id cursus mi pretium tellus duis convallis. Tempus leo eu aenean sed diam urna tempor. Pulvinar vivamus fringilla lacus nec metus bibendum egestas. Iaculis massa nisl malesuada lacinia integer nunc posuere. Ut hendrerit semper vel class aptent taciti sociosqu. Ad litora torquent per conubia nostra inceptos himenaeos."
        },
        "Iceland": {
            name: "Island",
            color: "oranzova",
            text: "Lorem ipsum dolor sit amet consectetur adipiscing elit. Quisque faucibus ex sapien vitae pellentesque sem placerat. In id cursus mi pretium tellus duis convallis. Tempus leo eu aenean sed diam urna tempor. Pulvinar vivamus fringilla lacus nec metus bibendum egestas. Iaculis massa nisl malesuada lacinia integer nunc posuere. Ut hendrerit semper vel class aptent taciti sociosqu. Ad litora torquent per conubia nostra inceptos himenaeos."
        },
        "Russia": {
            name: "Rusko",
            color: "cervena",
            text: "Lorem ipsum dolor sit amet consectetur adipiscing elit. Quisque faucibus ex sapien vitae pellentesque sem placerat. In id cursus mi pretium tellus duis convallis. Tempus leo eu aenean sed diam urna tempor. Pulvinar vivamus fringilla lacus nec metus bibendum egestas. Iaculis massa nisl malesuada lacinia integer nunc posuere. Ut hendrerit semper vel class aptent taciti sociosqu. Ad litora torquent per conubia nostra inceptos himenaeos."
        },
        "Russian Federation": { // 2krát kvůli hlouposti v datech
            name: "Rusko",
            color: "cervena",
            text: "Lorem ipsum dolor sit amet consectetur adipiscing elit. Quisque faucibus ex sapien vitae pellentesque sem placerat. In id cursus mi pretium tellus duis convallis. Tempus leo eu aenean sed diam urna tempor. Pulvinar vivamus fringilla lacus nec metus bibendum egestas. Iaculis massa nisl malesuada lacinia integer nunc posuere. Ut hendrerit semper vel class aptent taciti sociosqu. Ad litora torquent per conubia nostra inceptos himenaeos."
        },
        "Kosovo": {
            name: "Kosovo",
            color: "oranzova",
            text: "Lorem ipsum dolor sit amet consectetur adipiscing elit. Quisque faucibus ex sapien vitae pellentesque sem placerat. In id cursus mi pretium tellus duis convallis. Tempus leo eu aenean sed diam urna tempor. Pulvinar vivamus fringilla lacus nec metus bibendum egestas. Iaculis massa nisl malesuada lacinia integer nunc posuere. Ut hendrerit semper vel class aptent taciti sociosqu. Ad litora torquent per conubia nostra inceptos himenaeos."
        }
    };

    const DEFAULT_COLOR = "seda";
    const DEFAULT_TEXT = "Pro tuto zemi zatím nebyl zadán žádný detailní text."; //tato část již nevyužitá, po odstanění zbytečných zemí se už neukazuje

    // Vytáhne HEX podle názevu barvy z naší paletky
    function dajBarvu(colorKey, isHover = false) {
        const tema = barvy[colorKey] || barvy[DEFAULT_COLOR];
        return isHover ? tema.hover : tema.base;
    }

    // Krym je v atlasu pod Ruskem, tak ho ručně přehodíme k Ukrajině
    function fixniKrym(rawCountries) {
        const rusko = rawCountries.find(c => c.properties.name === "Russia" || c.properties.name === "Russian Federation");
        const ukrajina = rawCountries.find(c => c.properties.name === "Ukraine");

        if (!rusko || !ukrajina) return;

        const jeKrym = (poly) => poly[0].some(([lon, lat]) => lon >= 32.5 && lon <= 36.6 && lat >= 44.3 && lat <= 46.2);

        if (rusko.geometry.type === "MultiPolygon") {
            const krymPolygony = rusko.geometry.coordinates.filter(jeKrym);
            
            // Vyhodíme Krym z Ruska...
            rusko.geometry.coordinates = rusko.geometry.coordinates.filter(p => !jeKrym(p));

            // ...a přicvakneme ho k Ukrajině
            if (krymPolygony.length > 0) {
                if (ukrajina.geometry.type === "MultiPolygon") {
                    ukrajina.geometry.coordinates.push(...krymPolygony);
                } else if (ukrajina.geometry.type === "Polygon") {
                    ukrajina.geometry.type = "MultiPolygon";
                    ukrajina.geometry.coordinates = [ukrajina.geometry.coordinates, ...krymPolygony];
                }
            }
        }
    }

    // Ořeže zámořská území (Francouzská Guayana atd.), chceme jen polygony z Evropy
    function orezatMimoEvropu(feature) {
        if (!feature?.geometry) return null;

        const jeVEvrope = ([lon, lat]) => lon >= -25 && lon <= 65 && lat >= 34 && lat <= 75;

        if (feature.geometry.type === "MultiPolygon") {
            const validni = feature.geometry.coordinates.filter(p => p[0].some(jeVEvrope));
            if (!validni.length) return null;

            return {
                ...feature,
                geometry: { ...feature.geometry, coordinates: validni }
            };
        } else if (feature.geometry.type === "Polygon") {
            if (!feature.geometry.coordinates[0].some(jeVEvrope)) return null;
            return feature;
        }

        return feature;
    }

    // DOM Prvky
    const modalCard = document.getElementById('country-card');
    const overlay = document.getElementById('backdrop');
    const nadpisModal = document.getElementById('country-title');
    const textModal = document.getElementById('country-text'); 
    const closeBtn = document.getElementById('close-btn');

    // D3 init
    const mapSvg = d3.select("#europe-map");
    const width = 800;
    const height = 680;

    mapSvg.attr("viewBox", `0 0 ${width} ${height}`)
          .attr("preserveAspectRatio", "xMidYMid meet");

    const projekce = d3.geoMercator()
        .center([11, 56.5])
        .scale(530)
        .translate([width / 2, height / 2 + 20])
        .clipExtent([[0, 0], [width, height]]);

    const pathGen = d3.geoPath().projection(projekce);
    const mapUrl = "https://cdn.jsdelivr.net/npm/world-atlas@2/countries-50m.json";

    // Načtení a vykreslení
    d3.json(mapUrl).then(data => {
        const rawCountries = topojson.feature(data, data.objects.countries).features;
        
        fixniKrym(rawCountries);

        const zemeKVykresleni = rawCountries
            .filter(c => zemeData[c.properties.name])
            .map(orezatMimoEvropu)
            .filter(Boolean);

        mapSvg.selectAll(".country")
            .data(zemeKVykresleni)
            .enter()
            .append("path")
            .attr("class", "country")
            .attr("d", pathGen)
            .style("cursor", d => {
                const code = d.properties.name || "";
                return zemeData[code] ? "pointer" : "default";
            })
            .style("fill", d => {
                const code = d.properties.name || "";
                const info = zemeData[code];
                return dajBarvu(info?.color, false);
            })
            .on("mouseover", function(e, d) {
                const code = d.properties.name || "";
                const info = zemeData[code];
                d3.select(this).style("fill", dajBarvu(info?.color, true));
            })
            .on("mouseout", function(e, d) {
                const el = d3.select(this);
                if (!el.classed("selected")) {
                    const code = d.properties.name || "";
                    const info = zemeData[code];
                    el.style("fill", dajBarvu(info?.color, false));
                }
            })
            .on("click", function(e, d) {
                const code = d.properties.name || "";
                const info = zemeData[code];

                if (!info) return;

                // Odoznačíme ostatní státy
                d3.selectAll(".country").classed("selected", false).each(function(cd) {
                    const cCode = cd.properties.name || "";
                    const cInfo = zemeData[cCode];
                    d3.select(this).style("fill", dajBarvu(cInfo?.color, false));
                });

                // Zvýrazníme vybraný
                const target = d3.select(this);
                target.classed("selected", true);
                target.style("fill", dajBarvu(info.color, true));

                // Propojení akcentní barvy do CSS
                const akcent = dajBarvu(info.color, false);
                modalCard.style.setProperty('--accent-color', akcent);

                nadpisModal.textContent = info.name || code;
                textModal.textContent = info.text || DEFAULT_TEXT;

                modalCard.classList.remove('hidden');
                overlay.classList.remove('hidden');
            });
    }).catch(err => {
        console.error("Ježinkávej, chyba při načítání mapy:", err);
    });

    // Zavíračka modalu
    function zavriModal() {
        modalCard.classList.add('hidden');
        overlay.classList.add('hidden');
        
        mapSvg.selectAll(".country").classed("selected", false).each(function(d) { 
            const code = d.properties.name || "";
            const info = zemeData[code];
            d3.select(this).style("fill", dajBarvu(info?.color, false));
        });
    }

    closeBtn.addEventListener('click', zavriModal);
    overlay.addEventListener('click', zavriModal);

    document.addEventListener('keydown', (e) => {
        if (e.key === 'Escape') zavriModal();
    });
});
