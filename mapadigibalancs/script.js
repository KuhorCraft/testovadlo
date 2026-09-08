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
            text: "<p>Lorem ipsum dolor sit amet consectetur adipiscing elit. Quisque faucibus ex sapien vitae pellentesque sem placerat. In id cursus mi pretium tellus duis convallis. Tempus leo eu aenean sed diam urna tempor. Pulvinar vivamus fringilla lacus nec metus bibendum egestas. Iaculis massa nisl malesuada lacinia integer nunc posuere. Ut hendrerit semper vel class aptent taciti sociosqu. Ad litora torquent per conubia nostra inceptos himenaeos.</p><ul><li>toto je 1. bod</li><li>toto je 2. bod</li><li>Jedná se o Českou republiku</li></ul><p>Tento text je <em>kurzívou</em>. Tento text je <u>podtržený</u>. Tento text je <b>tučný</b>.</p>"
        },
        "Slovakia": {
            name: "Slovensko",
            color: "oranzova",
            text: "<p>Lorem ipsum dolor sit amet consectetur adipiscing elit. Quisque faucibus ex sapien vitae pellentesque sem placerat. In id cursus mi pretium tellus duis convallis. Tempus leo eu aenean sed diam urna tempor. Pulvinar vivamus fringilla lacus nec metus bibendum egestas. Iaculis massa nisl malesuada lacinia integer nunc posuere. Ut hendrerit semper vel class aptent taciti sociosqu. Ad litora torquent per conubia nostra inceptos himenaeos.</p><ul><li>toto je 1. bod</li><li>toto je 2. bod</li><li>Jedná se o Slovensko</li></ul><p>Tento text je <em>kurzívou</em>. Tento text je <u>podtržený</u>. Tento text je <b>tučný</b>.</p>"
        },
        "Germany": {
            name: "Německo",
            color: "cervena",
            text: "<p>Lorem ipsum dolor sit amet consectetur adipiscing elit. Quisque faucibus ex sapien vitae pellentesque sem placerat. In id cursus mi pretium tellus duis convallis. Tempus leo eu aenean sed diam urna tempor. Pulvinar vivamus fringilla lacus nec metus bibendum egestas. Iaculis massa nisl malesuada lacinia integer nunc posuere. Ut hendrerit semper vel class aptent taciti sociosqu. Ad litora torquent per conubia nostra inceptos himenaeos.</p><ul><li>toto je 1. bod</li><li>toto je 2. bod</li><li>Jedná se o Německo</li></ul><p>Tento text je <em>kurzívou</em>. Tento text je <u>podtržený</u>. Tento text je <b>tučný</b>.</p>"
        },
        "Poland": {
            name: "Polsko",
            color: "zelena",
            text: "<p>Lorem ipsum dolor sit amet consectetur adipiscing elit. Quisque faucibus ex sapien vitae pellentesque sem placerat. In id cursus mi pretium tellus duis convallis. Tempus leo eu aenean sed diam urna tempor. Pulvinar vivamus fringilla lacus nec metus bibendum egestas. Iaculis massa nisl malesuada lacinia integer nunc posuere. Ut hendrerit semper vel class aptent taciti sociosqu. Ad litora torquent per conubia nostra inceptos himenaeos.</p><ul><li>toto je 1. bod</li><li>toto je 2. bod</li><li>Jedná se o Polsko</li></ul><p>Tento text je <em>kurzívou</em>. Tento text je <u>podtržený</u>. Tento text je <b>tučný</b>.</p>"
        },
        "Austria": {
            name: "Rakousko",
            color: "oranzova",
            text: "<p>Lorem ipsum dolor sit amet consectetur adipiscing elit. Quisque faucibus ex sapien vitae pellentesque sem placerat. In id cursus mi pretium tellus duis convallis. Tempus leo eu aenean sed diam urna tempor. Pulvinar vivamus fringilla lacus nec metus bibendum egestas. Iaculis massa nisl malesuada lacinia integer nunc posuere. Ut hendrerit semper vel class aptent taciti sociosqu. Ad litora torquent per conubia nostra inceptos himenaeos.</p><ul><li>toto je 1. bod</li><li>toto je 2. bod</li><li>Jedná se o Rakousko</li></ul><p>Tento text je <em>kurzívou</em>. Tento text je <u>podtržený</u>. Tento text je <b>tučný</b>.</p>"
        },
        "Hungary": {
            name: "Maďarsko",
            color: "cervena",
            text: "<p>Lorem ipsum dolor sit amet consectetur adipiscing elit. Quisque faucibus ex sapien vitae pellentesque sem placerat. In id cursus mi pretium tellus duis convallis. Tempus leo eu aenean sed diam urna tempor. Pulvinar vivamus fringilla lacus nec metus bibendum egestas. Iaculis massa nisl malesuada lacinia integer nunc posuere. Ut hendrerit semper vel class aptent taciti sociosqu. Ad litora torquent per conubia nostra inceptos himenaeos.</p><ul><li>toto je 1. bod</li><li>toto je 2. bod</li><li>Jedná se o Maďarsko</li></ul><p>Tento text je <em>kurzívou</em>. Tento text je <u>podtržený</u>. Tento text je <b>tučný</b>.</p>"
        },
        "Switzerland": {
            name: "Švýcarsko",
            color: "zelena",
            text: "<p>Lorem ipsum dolor sit amet consectetur adipiscing elit. Quisque faucibus ex sapien vitae pellentesque sem placerat. In id cursus mi pretium tellus duis convallis. Tempus leo eu aenean sed diam urna tempor. Pulvinar vivamus fringilla lacus nec metus bibendum egestas. Iaculis massa nisl malesuada lacinia integer nunc posuere. Ut hendrerit semper vel class aptent taciti sociosqu. Ad litora torquent per conubia nostra inceptos himenaeos.</p><ul><li>toto je 1. bod</li><li>toto je 2. bod</li><li>Jedná se o Švýcarsko</li></ul><p>Tento text je <em>kurzívou</em>. Tento text je <u>podtržený</u>. Tento text je <b>tučný</b>.</p>"
        },
        "Slovenia": {
            name: "Slovinsko",
            color: "oranzova",
            text: "<p>Lorem ipsum dolor sit amet consectetur adipiscing elit. Quisque faucibus ex sapien vitae pellentesque sem placerat. In id cursus mi pretium tellus duis convallis. Tempus leo eu aenean sed diam urna tempor. Pulvinar vivamus fringilla lacus nec metus bibendum egestas. Iaculis massa nisl malesuada lacinia integer nunc posuere. Ut hendrerit semper vel class aptent taciti sociosqu. Ad litora torquent per conubia nostra inceptos himenaeos.</p><ul><li>toto je 1. bod</li><li>toto je 2. bod</li><li>Jedná se o Slovinsko</li></ul><p>Tento text je <em>kurzívou</em>. Tento text je <u>podtržený</u>. Tento text je <b>tučný</b>.</p>"
        },

        // Západní Evropa
        "France": {
            name: "Francie",
            color: "zelena",
            text: "<p>Lorem ipsum dolor sit amet consectetur adipiscing elit. Quisque faucibus ex sapien vitae pellentesque sem placerat. In id cursus mi pretium tellus duis convallis. Tempus leo eu aenean sed diam urna tempor. Pulvinar vivamus fringilla lacus nec metus bibendum egestas. Iaculis massa nisl malesuada lacinia integer nunc posuere. Ut hendrerit semper vel class aptent taciti sociosqu. Ad litora torquent per conubia nostra inceptos himenaeos.</p><ul><li>toto je 1. bod</li><li>toto je 2. bod</li><li>Jedná se o Francii</li></ul><p>Tento text je <em>kurzívou</em>. Tento text je <u>podtržený</u>. Tento text je <b>tučný</b>.</p>"
        },
        "United Kingdom": {
            name: "Velká Británie",
            color: "zelena",
            text: "<p>Lorem ipsum dolor sit amet consectetur adipiscing elit. Quisque faucibus ex sapien vitae pellentesque sem placerat. In id cursus mi pretium tellus duis convallis. Tempus leo eu aenean sed diam urna tempor. Pulvinar vivamus fringilla lacus nec metus bibendum egestas. Iaculis massa nisl malesuada lacinia integer nunc posuere. Ut hendrerit semper vel class aptent taciti sociosqu. Ad litora torquent per conubia nostra inceptos himenaeos.</p><ul><li>toto je 1. bod</li><li>toto je 2. bod</li><li>Jedná se o Velkou Británii</li></ul><p>Tento text je <em>kurzívou</em>. Tento text je <u>podtržený</u>. Tento text je <b>tučný</b>.</p>"
        },
        "Ireland": {
            name: "Irsko",
            color: "oranzova",
            text: "<p>Lorem ipsum dolor sit amet consectetur adipiscing elit. Quisque faucibus ex sapien vitae pellentesque sem placerat. In id cursus mi pretium tellus duis convallis. Tempus leo eu aenean sed diam urna tempor. Pulvinar vivamus fringilla lacus nec metus bibendum egestas. Iaculis massa nisl malesuada lacinia integer nunc posuere. Ut hendrerit semper vel class aptent taciti sociosqu. Ad litora torquent per conubia nostra inceptos himenaeos.</p><ul><li>toto je 1. bod</li><li>toto je 2. bod</li><li>Jedná se o Irsko</li></ul><p>Tento text je <em>kurzívou</em>. Tento text je <u>podtržený</u>. Tento text je <b>tučný</b>.</p>"
        },
        "Belgium": {
            name: "Belgie",
            color: "cervena",
            text: "<p>Lorem ipsum dolor sit amet consectetur adipiscing elit. Quisque faucibus ex sapien vitae pellentesque sem placerat. In id cursus mi pretium tellus duis convallis. Tempus leo eu aenean sed diam urna tempor. Pulvinar vivamus fringilla lacus nec metus bibendum egestas. Iaculis massa nisl malesuada lacinia integer nunc posuere. Ut hendrerit semper vel class aptent taciti sociosqu. Ad litora torquent per conubia nostra inceptos himenaeos.</p><ul><li>toto je 1. bod</li><li>toto je 2. bod</li><li>Jedná se o Belgii</li></ul><p>Tento text je <em>kurzívou</em>. Tento text je <u>podtržený</u>. Tento text je <b>tučný</b>.</p>"
        },
        "Netherlands": {
            name: "Nizozemsko",
            color: "zelena",
            text: "<p>Lorem ipsum dolor sit amet consectetur adipiscing elit. Quisque faucibus ex sapien vitae pellentesque sem placerat. In id cursus mi pretium tellus duis convallis. Tempus leo eu aenean sed diam urna tempor. Pulvinar vivamus fringilla lacus nec metus bibendum egestas. Iaculis massa nisl malesuada lacinia integer nunc posuere. Ut hendrerit semper vel class aptent taciti sociosqu. Ad litora torquent per conubia nostra inceptos himenaeos.</p><ul><li>toto je 1. bod</li><li>toto je 2. bod</li><li>Jedná se o Nizozemsko</li></ul><p>Tento text je <em>kurzívou</em>. Tento text je <u>podtržený</u>. Tento text je <b>tučný</b>.</p>"
        },
        "Luxembourg": {
            name: "Lucembursko",
            color: "oranzova",
            text: "<p>Lorem ipsum dolor sit amet consectetur adipiscing elit. Quisque faucibus ex sapien vitae pellentesque sem placerat. In id cursus mi pretium tellus duis convallis. Tempus leo eu aenean sed diam urna tempor. Pulvinar vivamus fringilla lacus nec metus bibendum egestas. Iaculis massa nisl malesuada lacinia integer nunc posuere. Ut hendrerit semper vel class aptent taciti sociosqu. Ad litora torquent per conubia nostra inceptos himenaeos.</p><ul><li>toto je 1. bod</li><li>toto je 2. bod</li><li>Jedná se o Lucembursko</li></ul><p>Tento text je <em>kurzívou</em>. Tento text je <u>podtržený</u>. Tento text je <b>tučný</b>.</p>"
        },

        // Jižní Evropa
        "Spain": {
            name: "Španělsko",
            color: "oranzova",
            text: "<p>Lorem ipsum dolor sit amet consectetur adipiscing elit. Quisque faucibus ex sapien vitae pellentesque sem placerat. In id cursus mi pretium tellus duis convallis. Tempus leo eu aenean sed diam urna tempor. Pulvinar vivamus fringilla lacus nec metus bibendum egestas. Iaculis massa nisl malesuada lacinia integer nunc posuere. Ut hendrerit semper vel class aptent taciti sociosqu. Ad litora torquent per conubia nostra inceptos himenaeos.</p><ul><li>toto je 1. bod</li><li>toto je 2. bod</li><li>Jedná se o Španělsko</li></ul><p>Tento text je <em>kurzívou</em>. Tento text je <u>podtržený</u>. Tento text je <b>tučný</b>.</p>"
        },
        "Portugal": {
            name: "Portugalsko",
            color: "zelena",
            text: "<p>Lorem ipsum dolor sit amet consectetur adipiscing elit. Quisque faucibus ex sapien vitae pellentesque sem placerat. In id cursus mi pretium tellus duis convallis. Tempus leo eu aenean sed diam urna tempor. Pulvinar vivamus fringilla lacus nec metus bibendum egestas. Iaculis massa nisl malesuada lacinia integer nunc posuere. Ut hendrerit semper vel class aptent taciti sociosqu. Ad litora torquent per conubia nostra inceptos himenaeos.</p><ul><li>toto je 1. bod</li><li>toto je 2. bod</li><li>Jedná se o Portugalsko</li></ul><p>Tento text je <em>kurzívou</em>. Tento text je <u>podtržený</u>. Tento text je <b>tučný</b>.</p>"
        },
        "Italy": {
            name: "Itálie",
            color: "cervena",
            text: "<p>Lorem ipsum dolor sit amet consectetur adipiscing elit. Quisque faucibus ex sapien vitae pellentesque sem placerat. In id cursus mi pretium tellus duis convallis. Tempus leo eu aenean sed diam urna tempor. Pulvinar vivamus fringilla lacus nec metus bibendum egestas. Iaculis massa nisl malesuada lacinia integer nunc posuere. Ut hendrerit semper vel class aptent taciti sociosqu. Ad litora torquent per conubia nostra inceptos himenaeos.</p><ul><li>toto je 1. bod</li><li>toto je 2. bod</li><li>Jedná se o Itálii</li></ul><p>Tento text je <em>kurzívou</em>. Tento text je <u>podtržený</u>. Tento text je <b>tučný</b>.</p>"
        },
        "Greece": {
            name: "Řecko",
            color: "zelena",
            text: "<p>Lorem ipsum dolor sit amet consectetur adipiscing elit. Quisque faucibus ex sapien vitae pellentesque sem placerat. In id cursus mi pretium tellus duis convallis. Tempus leo eu aenean sed diam urna tempor. Pulvinar vivamus fringilla lacus nec metus bibendum egestas. Iaculis massa nisl malesuada lacinia integer nunc posuere. Ut hendrerit semper vel class aptent taciti sociosqu. Ad litora torquent per conubia nostra inceptos himenaeos.</p><ul><li>toto je 1. bod</li><li>toto je 2. bod</li><li>Jedná se o Řecko</li></ul><p>Tento text je <em>kurzívou</em>. Tento text je <u>podtržený</u>. Tento text je <b>tučný</b>.</p>"
        },
        "Croatia": {
            name: "Chorvatsko",
            color: "oranzova",
            text: "<p>Lorem ipsum dolor sit amet consectetur adipiscing elit. Quisque faucibus ex sapien vitae pellentesque sem placerat. In id cursus mi pretium tellus duis convallis. Tempus leo eu aenean sed diam urna tempor. Pulvinar vivamus fringilla lacus nec metus bibendum egestas. Iaculis massa nisl malesuada lacinia integer nunc posuere. Ut hendrerit semper vel class aptent taciti sociosqu. Ad litora torquent per conubia nostra inceptos himenaeos.</p><ul><li>toto je 1. bod</li><li>toto je 2. bod</li><li>Jedná se o Chorvatsko</li></ul><p>Tento text je <em>kurzívou</em>. Tento text je <u>podtržený</u>. Tento text je <b>tučný</b>.</p>"
        },
        "Bosnia and Herz.": {
            name: "Bosna a Hercegovina",
            color: "cervena",
            text: "<p>Lorem ipsum dolor sit amet consectetur adipiscing elit. Quisque faucibus ex sapien vitae pellentesque sem placerat. In id cursus mi pretium tellus duis convallis. Tempus leo eu aenean sed diam urna tempor. Pulvinar vivamus fringilla lacus nec metus bibendum egestas. Iaculis massa nisl malesuada lacinia integer nunc posuere. Ut hendrerit semper vel class aptent taciti sociosqu. Ad litora torquent per conubia nostra inceptos himenaeos.</p><ul><li>toto je 1. bod</li><li>toto je 2. bod</li><li>Jedná se o Bosnu a Hercegovinu</li></ul><p>Tento text je <em>kurzívou</em>. Tento text je <u>podtržený</u>. Tento text je <b>tučný</b>.</p>"
        },
        "Serbia": {
            name: "Srbsko",
            color: "zelena",
            text: "<p>Lorem ipsum dolor sit amet consectetur adipiscing elit. Quisque faucibus ex sapien vitae pellentesque sem placerat. In id cursus mi pretium tellus duis convallis. Tempus leo eu aenean sed diam urna tempor. Pulvinar vivamus fringilla lacus nec metus bibendum egestas. Iaculis massa nisl malesuada lacinia integer nunc posuere. Ut hendrerit semper vel class aptent taciti sociosqu. Ad litora torquent per conubia nostra inceptos himenaeos.</p><ul><li>toto je 1. bod</li><li>toto je 2. bod</li><li>Jedná se o Srbsko</li></ul><p>Tento text je <em>kurzívou</em>. Tento text je <u>podtržený</u>. Tento text je <b>tučný</b>.</p>"
        },
        "Montenegro": {
            name: "Černá Hora",
            color: "oranzova",
            text: "<p>Lorem ipsum dolor sit amet consectetur adipiscing elit. Quisque faucibus ex sapien vitae pellentesque sem placerat. In id cursus mi pretium tellus duis convallis. Tempus leo eu aenean sed diam urna tempor. Pulvinar vivamus fringilla lacus nec metus bibendum egestas. Iaculis massa nisl malesuada lacinia integer nunc posuere. Ut hendrerit semper vel class aptent taciti sociosqu. Ad litora torquent per conubia nostra inceptos himenaeos.</p><ul><li>toto je 1. bod</li><li>toto je 2. bod</li><li>Jedná se o Černou Horu</li></ul><p>Tento text je <em>kurzívou</em>. Tento text je <u>podtržený</u>. Tento text je <b>tučný</b>.</p>"
        },
        "Albania": {
            name: "Albánie",
            color: "cervena",
            text: "<p>Lorem ipsum dolor sit amet consectetur adipiscing elit. Quisque faucibus ex sapien vitae pellentesque sem placerat. In id cursus mi pretium tellus duis convallis. Tempus leo eu aenean sed diam urna tempor. Pulvinar vivamus fringilla lacus nec metus bibendum egestas. Iaculis massa nisl malesuada lacinia integer nunc posuere. Ut hendrerit semper vel class aptent taciti sociosqu. Ad litora torquent per conubia nostra inceptos himenaeos.</p><ul><li>toto je 1. bod</li><li>toto je 2. bod</li><li>Jedná se o Albánii</li></ul><p>Tento text je <em>kurzívou</em>. Tento text je <u>podtržený</u>. Tento text je <b>tučný</b>.</p>"
        },
        "North Macedonia": {
            name: "Severní Makedonie",
            color: "zelena",
            text: "<p>Lorem ipsum dolor sit amet consectetur adipiscing elit. Quisque faucibus ex sapien vitae pellentesque sem placerat. In id cursus mi pretium tellus duis convallis. Tempus leo eu aenean sed diam urna tempor. Pulvinar vivamus fringilla lacus nec metus bibendum egestas. Iaculis massa nisl malesuada lacinia integer nunc posuere. Ut hendrerit semper vel class aptent taciti sociosqu. Ad litora torquent per conubia nostra inceptos himenaeos.</p><ul><li>toto je 1. bod</li><li>toto je 2. bod</li><li>Jedná se o Severní Makedonii</li></ul><p>Tento text je <em>kurzívou</em>. Tento text je <u>podtržený</u>. Tento text je <b>tučný</b>.</p>"
        },
        "Bulgaria": {
            name: "Bulharsko",
            color: "oranzova",
            text: "<p>Lorem ipsum dolor sit amet consectetur adipiscing elit. Quisque faucibus ex sapien vitae pellentesque sem placerat. In id cursus mi pretium tellus duis convallis. Tempus leo eu aenean sed diam urna tempor. Pulvinar vivamus fringilla lacus nec metus bibendum egestas. Iaculis massa nisl malesuada lacinia integer nunc posuere. Ut hendrerit semper vel class aptent taciti sociosqu. Ad litora torquent per conubia nostra inceptos himenaeos.</p><ul><li>toto je 1. bod</li><li>toto je 2. bod</li><li>Jedná se o Bulharsko</li></ul><p>Tento text je <em>kurzívou</em>. Tento text je <u>podtržený</u>. Tento text je <b>tučný</b>.</p>"
        },
        "Romania": {
            name: "Rumunsko",
            color: "cervena",
            text: "<p>Lorem ipsum dolor sit amet consectetur adipiscing elit. Quisque faucibus ex sapien vitae pellentesque sem placerat. In id cursus mi pretium tellus duis convallis. Tempus leo eu aenean sed diam urna tempor. Pulvinar vivamus fringilla lacus nec metus bibendum egestas. Iaculis massa nisl malesuada lacinia integer nunc posuere. Ut hendrerit semper vel class aptent taciti sociosqu. Ad litora torquent per conubia nostra inceptos himenaeos.</p><ul><li>toto je 1. bod</li><li>toto je 2. bod</li><li>Jedná se o Rumunsko</li></ul><p>Tento text je <em>kurzívou</em>. Tento text je <u>podtržený</u>. Tento text je <b>tučný</b>.</p>"
        },

        // Severní Evropa
        "Denmark": {
            name: "Dánsko",
            color: "zelena",
            text: "<p>Lorem ipsum dolor sit amet consectetur adipiscing elit. Quisque faucibus ex sapien vitae pellentesque sem placerat. In id cursus mi pretium tellus duis convallis. Tempus leo eu aenean sed diam urna tempor. Pulvinar vivamus fringilla lacus nec metus bibendum egestas. Iaculis massa nisl malesuada lacinia integer nunc posuere. Ut hendrerit semper vel class aptent taciti sociosqu. Ad litora torquent per conubia nostra inceptos himenaeos.</p><ul><li>toto je 1. bod</li><li>toto je 2. bod</li><li>Jedná se o Dánsko</li></ul><p>Tento text je <em>kurzívou</em>. Tento text je <u>podtržený</u>. Tento text je <b>tučný</b>.</p>"
        },
        "Sweden": {
            name: "Švédsko",
            color: "oranzova",
            text: "<p>Lorem ipsum dolor sit amet consectetur adipiscing elit. Quisque faucibus ex sapien vitae pellentesque sem placerat. In id cursus mi pretium tellus duis convallis. Tempus leo eu aenean sed diam urna tempor. Pulvinar vivamus fringilla lacus nec metus bibendum egestas. Iaculis massa nisl malesuada lacinia integer nunc posuere. Ut hendrerit semper vel class aptent taciti sociosqu. Ad litora torquent per conubia nostra inceptos himenaeos.</p><ul><li>toto je 1. bod</li><li>toto je 2. bod</li><li>Jedná se o Švédsko</li></ul><p>Tento text je <em>kurzívou</em>. Tento text je <u>podtržený</u>. Tento text je <b>tučný</b>.</p>"
        },
        "Norway": {
            name: "Norsko",
            color: "cervena",
            text: "<p>Lorem ipsum dolor sit amet consectetur adipiscing elit. Quisque faucibus ex sapien vitae pellentesque sem placerat. In id cursus mi pretium tellus duis convallis. Tempus leo eu aenean sed diam urna tempor. Pulvinar vivamus fringilla lacus nec metus bibendum egestas. Iaculis massa nisl malesuada lacinia integer nunc posuere. Ut hendrerit semper vel class aptent taciti sociosqu. Ad litora torquent per conubia nostra inceptos himenaeos.</p><ul><li>toto je 1. bod</li><li>toto je 2. bod</li><li>Jedná se o Norsko</li></ul><p>Tento text je <em>kurzívou</em>. Tento text je <u>podtržený</u>. Tento text je <b>tučný</b>.</p>"
        },
        "Finland": {
            name: "Finsko",
            color: "zelena",
            text: "<p>Lorem ipsum dolor sit amet consectetur adipiscing elit. Quisque faucibus ex sapien vitae pellentesque sem placerat. In id cursus mi pretium tellus duis convallis. Tempus leo eu aenean sed diam urna tempor. Pulvinar vivamus fringilla lacus nec metus bibendum egestas. Iaculis massa nisl malesuada lacinia integer nunc posuere. Ut hendrerit semper vel class aptent taciti sociosqu. Ad litora torquent per conubia nostra inceptos himenaeos.</p><ul><li>toto je 1. bod</li><li>toto je 2. bod</li><li>Jedná se o Finsko</li></ul><p>Tento text je <em>kurzívou</em>. Tento text je <u>podtržený</u>. Tento text je <b>tučný</b>.</p>"
        },
        "Estonia": {
            name: "Estonsko",
            color: "oranzova",
            text: "<p>Lorem ipsum dolor sit amet consectetur adipiscing elit. Quisque faucibus ex sapien vitae pellentesque sem placerat. In id cursus mi pretium tellus duis convallis. Tempus leo eu aenean sed diam urna tempor. Pulvinar vivamus fringilla lacus nec metus bibendum egestas. Iaculis massa nisl malesuada lacinia integer nunc posuere. Ut hendrerit semper vel class aptent taciti sociosqu. Ad litora torquent per conubia nostra inceptos himenaeos.</p><ul><li>toto je 1. bod</li><li>toto je 2. bod</li><li>Jedná se o Estonsko</li></ul><p>Tento text je <em>kurzívou</em>. Tento text je <u>podtržený</u>. Tento text je <b>tučný</b>.</p>"
        },
        "Latvia": {
            name: "Lotyšsko",
            color: "cervena",
            text: "<p>Lorem ipsum dolor sit amet consectetur adipiscing elit. Quisque faucibus ex sapien vitae pellentesque sem placerat. In id cursus mi pretium tellus duis convallis. Tempus leo eu aenean sed diam urna tempor. Pulvinar vivamus fringilla lacus nec metus bibendum egestas. Iaculis massa nisl malesuada lacinia integer nunc posuere. Ut hendrerit semper vel class aptent taciti sociosqu. Ad litora torquent per conubia nostra inceptos himenaeos.</p><ul><li>toto je 1. bod</li><li>toto je 2. bod</li><li>Jedná se o Lotyšsko</li></ul><p>Tento text je <em>kurzívou</em>. Tento text je <u>podtržený</u>. Tento text je <b>tučný</b>.</p>"
        },
        "Lithuania": {
            name: "Litva",
            color: "zelena",
            text: "<p>Lorem ipsum dolor sit amet consectetur adipiscing elit. Quisque faucibus ex sapien vitae pellentesque sem placerat. In id cursus mi pretium tellus duis convallis. Tempus leo eu aenean sed diam urna tempor. Pulvinar vivamus fringilla lacus nec metus bibendum egestas. Iaculis massa nisl malesuada lacinia integer nunc posuere. Ut hendrerit semper vel class aptent taciti sociosqu. Ad litora torquent per conubia nostra inceptos himenaeos.</p><ul><li>toto je 1. bod</li><li>toto je 2. bod</li><li>Jedná se o Litvu</li></ul><p>Tento text je <em>kurzívou</em>. Tento text je <u>podtržený</u>. Tento text je <b>tučný</b>.</p>"
        },

        // Východní Evropa a zbytek
        "Ukraine": {
            name: "Ukrajina",
            color: "oranzova",
            text: "<p>Lorem ipsum dolor sit amet consectetur adipiscing elit. Quisque faucibus ex sapien vitae pellentesque sem placerat. In id cursus mi pretium tellus duis convallis. Tempus leo eu aenean sed diam urna tempor. Pulvinar vivamus fringilla lacus nec metus bibendum egestas. Iaculis massa nisl malesuada lacinia integer nunc posuere. Ut hendrerit semper vel class aptent taciti sociosqu. Ad litora torquent per conubia nostra inceptos himenaeos.</p><ul><li>toto je 1. bod</li><li>toto je 2. bod</li><li>Jedná se o Ukrajinu</li></ul><p>Tento text je <em>kurzívou</em>. Tento text je <u>podtržený</u>. Tento text je <b>tučný</b>.</p>"
        },
        "Belarus": {
            name: "Bělorusko",
            color: "cervena",
            text: "<p>Lorem ipsum dolor sit amet consectetur adipiscing elit. Quisque faucibus ex sapien vitae pellentesque sem placerat. In id cursus mi pretium tellus duis convallis. Tempus leo eu aenean sed diam urna tempor. Pulvinar vivamus fringilla lacus nec metus bibendum egestas. Iaculis massa nisl malesuada lacinia integer nunc posuere. Ut hendrerit semper vel class aptent taciti sociosqu. Ad litora torquent per conubia nostra inceptos himenaeos.</p><ul><li>toto je 1. bod</li><li>toto je 2. bod</li><li>Jedná se o Bělorusko</li></ul><p>Tento text je <em>kurzívou</em>. Tento text je <u>podtržený</u>. Tento text je <b>tučný</b>.</p>"
        },
        "Moldova": {
            name: "Moldavsko",
            color: "zelena",
            text: "<p>Lorem ipsum dolor sit amet consectetur adipiscing elit. Quisque faucibus ex sapien vitae pellentesque sem placerat. In id cursus mi pretium tellus duis convallis. Tempus leo eu aenean sed diam urna tempor. Pulvinar vivamus fringilla lacus nec metus bibendum egestas. Iaculis massa nisl malesuada lacinia integer nunc posuere. Ut hendrerit semper vel class aptent taciti sociosqu. Ad litora torquent per conubia nostra inceptos himenaeos.</p><ul><li>toto je 1. bod</li><li>toto je 2. bod</li><li>Jedná se o Moldavsko</li></ul><p>Tento text je <em>kurzívou</em>. Tento text je <u>podtržený</u>. Tento text je <b>tučný</b>.</p>"
        },
        "Iceland": {
            name: "Island",
            color: "oranzova",
            text: "<p>Lorem ipsum dolor sit amet consectetur adipiscing elit. Quisque faucibus ex sapien vitae pellentesque sem placerat. In id cursus mi pretium tellus duis convallis. Tempus leo eu aenean sed diam urna tempor. Pulvinar vivamus fringilla lacus nec metus bibendum egestas. Iaculis massa nisl malesuada lacinia integer nunc posuere. Ut hendrerit semper vel class aptent taciti sociosqu. Ad litora torquent per conubia nostra inceptos himenaeos.</p><ul><li>toto je 1. bod</li><li>toto je 2. bod</li><li>Jedná se o Island</li></ul><p>Tento text je <em>kurzívou</em>. Tento text je <u>podtržený</u>. Tento text je <b>tučný</b>.</p>"
        },
        "Russia": {
            name: "Rusko",
            color: "cervena",
            text: "<p>Lorem ipsum dolor sit amet consectetur adipiscing elit. Quisque faucibus ex sapien vitae pellentesque sem placerat. In id cursus mi pretium tellus duis convallis. Tempus leo eu aenean sed diam urna tempor. Pulvinar vivamus fringilla lacus nec metus bibendum egestas. Iaculis massa nisl malesuada lacinia integer nunc posuere. Ut hendrerit semper vel class aptent taciti sociosqu. Ad litora torquent per conubia nostra inceptos himenaeos.</p><ul><li>toto je 1. bod</li><li>toto je 2. bod</li><li>Jedná se o Rusko</li></ul><p>Tento text je <em>kurzívou</em>. Tento text je <u>podtržený</u>. Tento text je <b>tučný</b>.</p>"
        },
        "Russian Federation": {
            name: "Rusko",
            color: "cervena",
            text: "<p>Lorem ipsum dolor sit amet consectetur adipiscing elit. Quisque faucibus ex sapien vitae pellentesque sem placerat. In id cursus mi pretium tellus duis convallis. Tempus leo eu aenean sed diam urna tempor. Pulvinar vivamus fringilla lacus nec metus bibendum egestas. Iaculis massa nisl malesuada lacinia integer nunc posuere. Ut hendrerit semper vel class aptent taciti sociosqu. Ad litora torquent per conubia nostra inceptos himenaeos.</p><ul><li>toto je 1. bod</li><li>toto je 2. bod</li><li>Jedná se o Rusko</li></ul><p>Tento text je <em>kurzívou</em>. Tento text je <u>podtržený</u>. Tento text je <b>tučný</b>.</p>"
        },
        "Kosovo": {
            name: "Kosovo",
            color: "oranzova",
            text: "<p>Lorem ipsum dolor sit amet consectetur adipiscing elit. Quisque faucibus ex sapien vitae pellentesque sem placerat. In id cursus mi pretium tellus duis convallis. Tempus leo eu aenean sed diam urna tempor. Pulvinar vivamus fringilla lacus nec metus bibendum egestas. Iaculis massa nisl malesuada lacinia integer nunc posuere. Ut hendrerit semper vel class aptent taciti sociosqu. Ad litora torquent per conubia nostra inceptos himenaeos.</p><ul><li>toto je 1. bod</li><li>toto je 2. bod</li><li>Jedná se o Kosovo</li></ul><p>Tento text je <em>kurzívou</em>. Tento text je <u>podtržený</u>. Tento text je <b>tučný</b>.</p>"
        }
    };

    const DEFAULT_COLOR = "seda";
    const DEFAULT_TEXT = "<p>Pro tuto zemi zatím nebyl zadán žádný detailní text.</p>";

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
                textModal.innerHTML = info.text || DEFAULT_TEXT;

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