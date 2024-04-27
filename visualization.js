// Define conversion for country identifier
var countryCodes = {
    4: 'AFG', 8: 'ALB', 12: 'DZA', 16: 'ASM', 20: 'AND', 24: 'AGO', 28: 'ATG', 31: 'AZE', 32: 'ARG', 36: 'AUS',
    40: 'AUT', 44: 'BHS', 48: 'BHR', 50: 'BGD', 51: 'ARM', 52: 'BRB', 56: 'BEL', 60: 'BMU', 64: 'BTN', 68: 'BOL',
    70: 'BIH', 72: 'BWA', 74: 'BVT', 76: 'BRA', 84: 'BLZ', 86: 'IOT', 90: 'SLB', 92: 'VGB', 96: 'BRN', 100: 'BGR',
    104: 'MMR', 108: 'BDI', 112: 'BLR', 116: 'KHM', 120: 'CMR', 124: 'CAN', 132: 'CPV', 136: 'CYM', 140: 'CAF',
    144: 'LKA', 148: 'TCD', 152: 'CHL', 156: 'CHN', 158: 'TWN', 162: 'CXR', 166: 'CCK', 170: 'COL', 174: 'COM',
    175: 'MYT', 178: 'COG', 180: 'COD', 184: 'COK', 188: 'CRI', 191: 'HRV', 192: 'CUB', 196: 'CYP', 203: 'CZE',
    204: 'BEN', 208: 'DNK', 212: 'DMA', 214: 'DOM', 218: 'ECU', 222: 'SLV', 226: 'GNQ', 231: 'ETH', 232: 'ERI',
    233: 'EST', 234: 'FRO', 238: 'FLK', 239: 'SGS', 242: 'FJI', 246: 'FIN', 248: 'ALA', 250: 'FRA', 254: 'GUF',
    258: 'PYF', 260: 'ATF', 262: 'DJI', 266: 'GAB', 268: 'GEO', 270: 'GMB', 275: 'PSE', 276: 'DEU', 288: 'GHA',
    292: 'GIB', 296: 'KIR', 300: 'GRC', 304: 'GRL', 308: 'GRD', 312: 'GLP', 316: 'GUM', 320: 'GTM', 324: 'GIN',
    328: 'GUY', 332: 'HTI', 334: 'HMD', 336: 'VAT', 340: 'HND', 344: 'HKG', 348: 'HUN', 352: 'ISL', 356: 'IND',
    360: 'IDN', 364: 'IRN', 368: 'IRQ', 372: 'IRL', 376: 'ISR', 380: 'ITA', 384: 'CIV', 388: 'JAM', 392: 'JPN',
    398: 'KAZ', 400: 'JOR', 404: 'KEN', 408: 'PRK', 410: 'KOR', 414: 'KWT', 417: 'KGZ', 418: 'LAO', 422: 'LBN',
    426: 'LSO', 428: 'LVA', 430: 'LBR', 434: 'LBY', 438: 'LIE', 440: 'LTU', 442: 'LUX', 446: 'MAC', 450: 'MDG',
    454: 'MWI', 458: 'MYS', 462: 'MDV', 466: 'MLI', 470: 'MLT', 474: 'MTQ', 478: 'MRT', 480: 'MUS', 484: 'MEX',
    492: 'MCO', 496: 'MNG', 498: 'MDA', 499: 'MNE', 500: 'MSR', 504: 'MAR', 508: 'MOZ', 512: 'OMN', 516: 'NAM',
    520: 'NRU', 524: 'NPL', 528: 'NLD', 531: 'CUW', 533: 'ABW', 534: 'SXM', 535: 'BES', 540: 'NCL', 548: 'VUT',
    554: 'NZL', 558: 'NIC', 562: 'NER', 566: 'NGA', 570: 'NIU', 574: 'NFK', 578: 'NOR', 580: 'MNP', 581: 'UMI',
    583: 'FSM', 584: 'MHL', 585: 'PLW', 586: 'PAK', 591: 'PAN', 598: 'PNG', 600: 'PRY', 604: 'PER', 608: 'PHL',
    612: 'PCN', 616: 'POL', 620: 'PRT', 624: 'GNB', 626: 'TLS', 630: 'PRI', 634: 'QAT', 638: 'REU', 642: 'ROU',
    643: 'RUS', 646: 'RWA', 652: 'BLM', 654: 'SHN', 659: 'KNA', 660: 'AIA', 662: 'LCA', 663: 'MAF', 666: 'SPM',
    670: 'VCT', 674: 'SMR', 678: 'STP', 682: 'SAU', 686: 'SEN', 688: 'SRB', 690: 'SYC', 694: 'SLE', 702: 'SGP',
    703: 'SVK', 704: 'VNM', 705: 'SVN', 706: 'SOM', 710: 'ZAF', 716: 'ZWE', 724: 'ESP', 728: 'SSD', 729: 'SDN',
    732: 'ESH', 740: 'SUR', 744: 'SJM', 748: 'SWZ', 752: 'SWE', 756: 'CHE', 760: 'SYR', 762: 'TJK', 764: 'THA',
    768: 'TGO', 772: 'TKL', 776: 'TON', 780: 'TTO', 784: 'ARE', 788: 'TUN', 792: 'TUR', 795: 'TKM', 796: 'TCA',
    798: 'TUV', 800: 'UGA', 804: 'UKR', 807: 'MKD', 818: 'EGY', 826: 'GBR', 831: 'GGY', 832: 'JEY', 833: 'IMN',
    834: 'TZA', 840: 'USA', 850: 'VIR', 854: 'BFA', 858: 'URY', 860: 'UZB', 862: 'VEN', 876: 'WLF', 882: 'WSM',
    887: 'YEM', 894: 'ZMB'
};

// Define conversion for country code to name
var countryCodesToNames = {
    'AFG': 'Afghanistan', 'ALB': 'Albania', 'DZA': 'Algeria', 'ASM': 'American Samoa', 'AND': 'Andorra',
    'AGO': 'Angola', 'ATG': 'Antigua and Barbuda', 'AZE': 'Azerbaijan', 'ARG': 'Argentina', 'AUS': 'Australia',
    'AUT': 'Austria', 'BHS': 'Bahamas', 'BHR': 'Bahrain', 'BGD': 'Bangladesh', 'ARM': 'Armenia', 'BRB': 'Barbados',
    'BEL': 'Belgium', 'BMU': 'Bermuda', 'BTN': 'Bhutan', 'BOL': 'Bolivia', 'BIH': 'Bosnia and Herzegovina',
    'BWA': 'Botswana', 'BVT': 'Bouvet Island', 'BRA': 'Brazil', 'BLZ': 'Belize', 'IOT': 'British Indian Ocean Territory',
    'SLB': 'Solomon Islands', 'VGB': 'British Virgin Islands', 'BRN': 'Brunei', 'BGR': 'Bulgaria', 'MMR': 'Myanmar',
    'BDI': 'Burundi', 'BLR': 'Belarus', 'KHM': 'Cambodia', 'CMR': 'Cameroon', 'CAN': 'Canada', 'CPV': 'Cape Verde',
    'CYM': 'Cayman Islands', 'CAF': 'Central African Republic', 'LKA': 'Sri Lanka', 'TCD': 'Chad', 'CHL': 'Chile',
    'CHN': 'China', 'TWN': 'Taiwan', 'CXR': 'Christmas Island', 'CCK': 'Cocos (Keeling) Islands', 'COL': 'Colombia',
    'COM': 'Comoros', 'MYT': 'Mayotte', 'COG': 'Congo', 'COD': 'Democratic Republic of the Congo', 'COK': 'Cook Islands',
    'CRI': 'Costa Rica', 'HRV': 'Croatia', 'CUB': 'Cuba', 'CYP': 'Cyprus', 'CZE': 'Czech Republic', 'BEN': 'Benin',
    'DNK': 'Denmark', 'DMA': 'Dominica', 'DOM': 'Dominican Republic', 'ECU': 'Ecuador', 'SLV': 'El Salvador',
    'GNQ': 'Equatorial Guinea', 'ETH': 'Ethiopia', 'ERI': 'Eritrea', 'EST': 'Estonia', 'FRO': 'Faroe Islands',
    'FLK': 'Falkland Islands', 'SGS': 'South Georgia and the South Sandwich Islands', 'FJI': 'Fiji', 'FIN': 'Finland',
    'ALA': 'Åland Islands', 'FRA': 'France', 'GUF': 'French Guiana', 'PYF': 'French Polynesia', 'ATF': 'French Southern Territories',
    'DJI': 'Djibouti', 'GAB': 'Gabon', 'GEO': 'Georgia', 'GMB': 'Gambia', 'PSE': 'State of Palestine', 'DEU': 'Germany',
    'GHA': 'Ghana', 'GIB': 'Gibraltar', 'KIR': 'Kiribati', 'GRC': 'Greece', 'GRL': 'Greenland', 'GRD': 'Grenada',
    'GLP': 'Guadeloupe', 'GUM': 'Guam', 'GTM': 'Guatemala', 'GIN': 'Guinea', 'GUY': 'Guyana', 'HTI': 'Haiti',
    'HMD': 'Heard Island and McDonald Islands', 'VAT': 'Vatican City', 'HND': 'Honduras', 'HKG': 'Hong Kong', 'HUN': 'Hungary',
    'ISL': 'Iceland', 'IND': 'India', 'IDN': 'Indonesia', 'IRN': 'Iran', 'IRQ': 'Iraq', 'IRL': 'Ireland', 'ISR': 'Israel',
    'ITA': 'Italy', 'CIV': 'Ivory Coast', 'JAM': 'Jamaica', 'JPN': 'Japan', 'KAZ': 'Kazakhstan', 'JOR': 'Jordan',
    'KEN': 'Kenya', 'PRK': 'North Korea', 'KOR': 'South Korea', 'KWT': 'Kuwait', 'KGZ': 'Kyrgyzstan', 'LAO': 'Laos',
    'LBN': 'Lebanon', 'LSO': 'Lesotho', 'LVA': 'Latvia', 'LBR': 'Liberia', 'LBY': 'Libya', 'LIE': 'Liechtenstein',
    'LTU': 'Lithuania', 'LUX': 'Luxembourg', 'MAC': 'Macau', 'MDG': 'Madagascar', 'MWI': 'Malawi', 'MYS': 'Malaysia',
    'MDV': 'Maldives', 'MLI': 'Mali', 'MLT': 'Malta', 'MTQ': 'Martinique', 'MRT': 'Mauritania', 'MUS': 'Mauritius',
    'MEX': 'Mexico', 'MCO': 'Monaco', 'MNG': 'Mongolia', 'MDA': 'Moldova', 'MNE': 'Montenegro', 'MSR': 'Montserrat',
    'MAR': 'Morocco', 'MOZ': 'Mozambique', 'OMN': 'Oman', 'NAM': 'Namibia', 'NRU': 'Nauru', 'NPL': 'Nepal',
    'NLD': 'Netherlands', 'CUW': 'Curaçao', 'ABW': 'Aruba', 'SXM': 'Sint Maarten', 'BES': 'Caribbean Netherlands',
    'NCL': 'New Caledonia', 'VUT': 'Vanuatu', 'NZL': 'New Zealand', 'NIC': 'Nicaragua', 'NER': 'Niger', 'NGA': 'Nigeria',
    'NIU': 'Niue', 'NFK': 'Norfolk Island', 'NOR': 'Norway', 'MNP': 'Northern Mariana Islands', 'UMI': 'United States Minor Outlying Islands',
    'FSM': 'Micronesia', 'MHL': 'Marshall Islands', 'PLW': 'Palau', 'PAK': 'Pakistan', 'PAN': 'Panama', 'PNG': 'Papua New Guinea',
    'PRY': 'Paraguay', 'PER': 'Peru', 'PHL': 'Philippines', 'PCN': 'Pitcairn Islands', 'POL': 'Poland', 'PRT': 'Portugal',
    'GNB': 'Guinea-Bissau', 'TLS': 'East Timor', 'PRI': 'Puerto Rico', 'QAT': 'Qatar', 'REU': 'Réunion', 'ROU': 'Romania',
    'RUS': 'Russia', 'RWA': 'Rwanda', 'BLM': 'Saint Barthélemy', 'SHN': 'Saint Helena', 'KNA': 'Saint Kitts and Nevis',
    'AIA': 'Anguilla', 'LCA': 'Saint Lucia', 'MAF': 'Saint Martin', 'SPM': 'Saint Pierre and Miquelon', 'VCT': 'Saint Vincent and the Grenadines',
    'SMR': 'San Marino', 'STP': 'São Tomé and Príncipe', 'SAU': 'Saudi Arabia', 'SEN': 'Senegal', 'SRB': 'Serbia',
    'SYC': 'Seychelles', 'SLE': 'Sierra Leone', 'SGP': 'Singapore', 'SVK': 'Slovakia', 'VNM': 'Vietnam', 'SVN': 'Slovenia',
    'SOM': 'Somalia', 'ZAF': 'South Africa', 'ZWE': 'Zimbabwe', 'ESP': 'Spain', 'SSD': 'South Sudan', 'SDN': 'Sudan',
    'ESH': 'Western Sahara', 'SUR': 'Suriname', 'SJM': 'Svalbard and Jan Mayen', 'SWZ': 'Eswatini', 'SWE': 'Sweden',
    'CHE': 'Switzerland', 'SYR': 'Syria', 'TJK': 'Tajikistan', 'THA': 'Thailand', 'TGO': 'Togo', 'TKL': 'Tokelau',
    'TON': 'Tonga', 'TTO': 'Trinidad and Tobago', 'ARE': 'United Arab Emirates', 'TUN': 'Tunisia', 'TUR': 'Turkey',
    'TKM': 'Turkmenistan', 'TCA': 'Turks and Caicos Islands', 'TUV': 'Tuvalu', 'UGA': 'Uganda', 'UKR': 'Ukraine',
    'MKD': 'North Macedonia', 'EGY': 'Egypt', 'GBR': 'United Kingdom', 'GGY': 'Guernsey', 'JEY': 'Jersey', 'IMN': 'Isle of Man',
    'TZA': 'Tanzania', 'USA': 'United States', 'VIR': 'United States Virgin Islands', 'BFA': 'Burkina Faso', 'URY': 'Uruguay',
    'UZB': 'Uzbekistan', 'VEN': 'Venezuela', 'WLF': 'Wallis and Futuna', 'WSM': 'Samoa', 'YEM': 'Yemen', 'ZMB': 'Zambia'
};

// Define color scale
//var colorScale1 = d3.scaleSequential(d3.interpolate("#00FFFF", "#FFA500")); // Blue to orange
//var colorScale2 = d3.scaleSequential(d3.interpolate("#FFFF00", "#FF0000")); // Yellow to red
// Define a new color scale with adjusted interpolation
var colorScale1 = d3.scaleSequential(d3.interpolate("#FFFFFF", "#0055cc")); //#99c2ff
// Adjust the color scale domain based on your data
colorScale1.domain([0, 1]);

// Define a new color scale for oranges with adjusted interpolation
var colorScale2 = d3.scaleSequential(d3.interpolate("#FFFFFF", "#ff6600")); //#ffe0b3
// Adjust the orange color scale domain based on your data
colorScale2.domain([0, 1]);



// For the date to displya in animation
var currentYear = 2020;
var currentWeek = 2;

// Final date displayable
var finalWeek = 4;
var finalYear = 2024;

// Is the animatino playing or not
var isPlaying = true;
// Are we showing new cases or mortality
var isShowingNewCases = true;
var intervalId; // Variable to hold the interval ID


// Define the projection for the globe
var projection = d3.geoOrthographic()
    .translate([200, 200]) // Center the map
    .scale(200) // Zoom level
    .rotate([0, 0]) // Initialize rotation

// Define the path generator for the globe
var path = d3.geoPath()
    .projection(projection);

// Get the SVG element for the globe
var svg = d3.select("#svg1");

// Load the world map and dataset 
Promise.all([
    d3.json("https://raw.githubusercontent.com/d3/d3.github.com/master/world-110m.v1.json"),
    d3.csv("combined_data.csv")
]).then(function(data) {
    var world = data[0];
    var dataset = data[1];

    // Get max cases
    var maxCovidCases = d3.max(dataset, function(d) { return parseInt(d.new_covid_cases) / 1000.0; });
    var maxInfluenzaCases = d3.max(dataset, function(d) { return parseInt(d.new_influenza_cases) / 100.0; });
    var maxCovidMortality = d3.max(dataset, function(d) { return parseInt(d.new_covid_mortality) / 100.0; });
    var maxInfluenzaMortality = d3.max(dataset, function(d) { return parseInt(d.new_influenza_mortality) / 100.0; });

    // Draw a circular border around the globe
    svg.append("circle")
        .attr("cx", 200) // X coordinate of the center
        .attr("cy", 200) // Y coordinate of the center
        .attr("r", 200) // Radius of the circle
        .attr("fill", "white") // No fill
        .attr("stroke", "black") // Border color
        .attr("stroke-width", 0.5); // Border width

    // Select the tooltip element
    var tooltip = d3.select("#tooltip");

    var paths = svg.selectAll("path")
            .data(topojson.feature(world, world.objects.countries).features)
            .enter().append("path")
            .attr("d", path)
            .attr("fill", function(d) {
                return d3.interpolate(colorScale1(0), colorScale2(0))(0.5);
            });

    // Checks if data for this date is valid
    function checkWeekYearExists(week, year) {
        // Filter the dataset for the current year and week
        var filteredData = dataset.filter(function(d) {
            return parseInt(d.ISO_YEAR) === year && parseInt(d.ISO_WEEK) === week;
        });
    
        // Check if filteredData contains any elements
        return filteredData.length > 0;
    }

    // Function to start or pause the animation
    function toggleAnimation() {
        if (isPlaying) {
            clearInterval(intervalId);
            intervalId = null;
            isPlaying = false;
        } else {
            isPlaying = true;
            intervalId = setInterval(updateMap, 1000);
        }
    }

    // Function to go to the previous data point in the animation
    function goToPreviousFrame() {
        if (!(currentYear <= 2020 && currentWeek <= 2)) {
            if (currentWeek > 0) { currentWeek--; }
            else { currentWeek = 52; }
            updateMap();
        }
    }

    // Function to go to the next data point in the animation
    function goToNextFrame() {
        if (!(currentYear >= 2024 && currentWeek >= 4)) {
            if (currentWeek < 52) { currentWeek++; } 
            else { currentWeek = 0; }
            updateMap();
        }
    }

    // Change the text that shows the date
    function updateDate(isoYear, isoWeek) {
        var currentDateElement = document.getElementById("current-date");
        var date = getMondayOfISOWeek(isoWeek, isoYear);
        currentDateElement.textContent = "Current Date: \n" + date.toDateString();
    }
      
    function getMondayOfISOWeek(w, y) {
        var date = new Date(y, 0, (w - 1) * 7 + 1);
        var dayOfWeek = date.getDay();
        return new Date(date.getFullYear(), date.getMonth(), date.getDate() - dayOfWeek + 1);
    }

    // Event listeners for buttons
    document.getElementById('playPauseButton').addEventListener('click', toggleAnimation);
    document.getElementById('backButton').addEventListener('click', goToPreviousFrame);
    document.getElementById('forwardButton').addEventListener('click', goToNextFrame);

    // Function to update the map with data for the current time interval
    function updateMap() {
        // Update the element conataingin the date readout
        updateDate(currentYear, currentWeek);

        // Filter the dataset for the current year and week
        var filteredData = dataset.filter(function(d) {
            return parseInt(d.ISO_YEAR) === currentYear && parseInt(d.ISO_WEEK) === currentWeek;
        });

        // Bind data to the SVG paths and update fill color based on data
        svg.selectAll("path")
            .attr("fill", function(d) {
                // Find the corresponding country code in the data
                var countryCode = countryCodes[parseInt(d.id)];

                // Find data for the current country !(d.COUNTRY_CODE === countryCode) 
                var countryData = filteredData.find(function(d) {
                    return d.COUNTRY_CODE === countryCode;
                });

                // If data is available, blend colors based on both data values
                if (countryData) {

                    var colorValue1, colorValue2;
                    if (isShowingNewCases) {
                        colorValue2 = Math.pow(parseFloat(countryData.new_influenza_cases / 100.0) / maxCovidCases, 0.35);
                        colorValue1 = Math.pow(parseFloat(countryData.new_covid_cases / 1000.0) / maxInfluenzaCases, 0.35);
                    } else {
                        colorValue2 = Math.pow(parseFloat(countryData.new_covid_mortality / 100.0) / maxCovidMortality, 0.35);
                        colorValue1 = Math.pow(parseFloat(countryData.new_influenza_mortality / 100.0) / maxCovidMortality, 0.35);
                    } 

                    // Ensure the color values stay within the range of 0 to 1
                    colorValue1 = Math.min(Math.max(colorValue1, 0), 1);
                    colorValue2 = Math.min(Math.max(colorValue2, 0), 1);

                    // Blend the two colors based on the two data values
                    var color1 = colorScale1(colorValue1);
                    var color2 = colorScale2(colorValue2);
                    var blendedColor = d3.interpolate(color1, color2)(0.5); // Blend with equal weight

                    //console.log(colorValue1);
                    //console.log(colorValue2);

                    return blendedColor;
                } else {
                    // If data is not available, return a very light yellow color
                    return "#FFFFCC";
                }
            });

        // Increment week
        currentWeek++;
        if (currentWeek > 52) {
            currentWeek = 1;
            currentYear++;
        }
        // Increment week until a valid week of data is found ( not every week has data)
        while (!checkWeekYearExists(currentWeek, currentYear)) {
            // Increment week
            currentWeek++;
            if (currentWeek > 52) {
                currentWeek = 1;
                currentYear++;
            }
        }

        // If we've reached the end of the desired time range, stop the interval
        if (currentYear >= finalYear && currentWeek >= finalWeek) {
            clearInterval(intervalId);
        }
    }

    // Initial update
    updateMap();

    // Set interval to update map every 1 seconds
    intervalId = setInterval(updateMap, 1000);

    // Enable globe rotation
    var m0, o0;
    svg.call(d3.drag()
        .on("start", function(event) {
            m0 = [event.x, event.y];
            o0 = projection.rotate();
        })
        .on("drag", function(event) {
            if (m0) {
                var m1 = [event.x, event.y],
                    o1 = [o0[0] + (m1[0] - m0[0]) / 6, o0[1] - (m1[1] - m0[1]) / 6];
                o1[1] = o1[1] > 90 ? 90 : o1[1] < -90 ? -90 : o1[1];
                projection.rotate(o1);
                svg.selectAll("path").attr("d", path);
            }
        })
        .on("end", function() {
            m0 = null;
        }));

    // Create the legend SVG element
    var legendWidth = 200;
    var legendHeight = 200;
    var legendMargin = { top: 20, right: 30, bottom: 30, left: 40 };

    var legendSvg = d3.select("#legend")
        .attr("width", legendWidth + legendMargin.left + legendMargin.right)
        .attr("height", legendHeight + legendMargin.top + legendMargin.bottom)
        .append("g")
        .attr("transform", "translate(" + legendMargin.left + "," + legendMargin.top + ")");

    // Define the legend scales
    var xScale = d3.scaleLinear()
        .domain([0, maxCovidCases/10000])
        .range([0, legendWidth]);

    var yScale = d3.scaleLinear()
        .domain([0, maxCovidCases/10000])
        .range([legendHeight, 0]);

    // Add axis for the legend
    var xAxis = d3.axisBottom(xScale).ticks(5);
    var yAxis = d3.axisLeft(yScale).ticks(5);

    legendSvg.append("g")
        .attr("class", "x-axis")
        .attr("transform", "translate(0," + legendHeight + ")")
        .call(xAxis);

    legendSvg.append("g")
        .attr("class", "y-axis")
        .call(yAxis);


    updateLegendAxes(maxCovidCases, maxInfluenzaCases); 
    setAxisLabels("New Covid Cases (thousands)", "New Influenza Cases (hundreds)");

    function updateLegendAxes(maxCovid, maxInfluenza) {
        var legendWidth = 200;
        var legendHeight = 200;
        var legendMargin = { top: 20, right: 30, bottom: 30, left: 40 };
    
        var xMax, yMax;
        if (isShowingNewCases) {
            xMax = maxCovidCases;
            yMax = maxInfluenzaCases;
        } else {
            xMax = maxCovidMortality;
            yMax = maxInfluenzaMortality;
        }
        // Define the legend scales
        var xScale = d3.scaleLinear()
            .domain([0, xMax])
            .range([0, legendWidth]);
    
        var yScale = d3.scaleLinear()
            .domain([0, yMax])
            .range([legendHeight, 0]);
    
        // Update axis for the legend
        var legendSvg = d3.select("#legend");
    
        legendSvg.select(".x-axis")
            .call(d3.axisBottom(xScale).ticks(5))
            .selectAll("text")
            .attr("transform", "translate(0,5)");
    
        legendSvg.select(".y-axis")
            .call(d3.axisLeft(yScale).ticks(5))
            .selectAll("text")
            .attr("transform", "translate(-5,0)");
    }

    function setAxisLabels(xLabel, yLabel) {
        // Set text content of X-axis label
        var xAxisLabel = document.querySelector("#legend-x-label");
        if (xAxisLabel) {
            xAxisLabel.textContent = xLabel;
        }
    
        // Set text content of Y-axis label
        var yAxisLabel = document.querySelector("#legend-y-label");
        if (yAxisLabel) {
            yAxisLabel.textContent = yLabel;
        }
    }

    // Add mouseover event handler for the countries
    paths.on("mouseover", function(event, d) {
        // Get country name and values
        var countryCode = countryCodes[parseInt(d.id)];
        var countryName = countryCodesToNames[countryCode];
        //var countryValues = /* Get country values from your data */;
        var countryValue = countryCodes[parseInt(d.id)];


        // Filter the dataset for the current year and week
        var filteredData = dataset.filter(function(d) {
            //console.log(parseInt(d.ISO_YEAR), currentYear);
            return parseInt(d.ISO_YEAR) === currentYear && parseInt(d.ISO_WEEK) === currentWeek;
        });
        // Find data for the current country !(d.COUNTRY_CODE === countryCode) 
        var countryData = filteredData.find(function(d) {
            return d.COUNTRY_CODE === countryCode;
        });


        var covidValue, influenzaValue;
        if(countryData) {
            if (isShowingNewCases) {
                influenzaValue = countryData.new_influenza_cases / 100.0;
                covidValue = countryData.new_covid_cases / 1000.0;
            } else {
                influenzaValue = countryData.new_influenza_mortality / 100.0;
                covidValue = countryData.new_covid_mortality / 100.0;
            }
        } else {
            influenzaValue = 'unknown';
            covidValue = 'unknown';
        }

        // Update tooltip content
        tooltip.select("#countryName").text("Country: " + (countryName ? countryName : "unknown"));
        if (isShowingNewCases) {
            tooltip.select("#covidValue").text("New COVID cases: " + covidValue);
            tooltip.select("#influenzaValue").text("New Influenza cases: " + influenzaValue);
        } else {
            tooltip.select("#covidValue").text("COVID deaths: " + covidValue);
            tooltip.select("#influenzaValue").text("Influenza deaths: " + influenzaValue);
        }
        

        // Show tooltip
        tooltip.style("display", "block");
    });

    // Add mouseout event handler to hide the tooltip
    paths.on("mouseout", function() {
        // Hide tooltip
        tooltip.style("display", "none");
    });

    // Add mousemove event handler to update tooltip position
    paths.on("mousemove", function(event) {
        // Get mouse coordinates
        var mouseX = event.pageX;
        var mouseY = event.pageY;

        // Update tooltip position
        tooltip.style("left", mouseX + 10 + "px")
            .style("top", mouseY - 20 + "px");
    });


    // Function to toggle between new positive test cases and mortality rates
    function toggleData() {
        isShowingNewCases = !isShowingNewCases;
        var toggleButton = document.getElementById("toggleButton");
        toggleButton.textContent = isShowingNewCases ? "Visualize Positive Test Cases" : "Visualize Mortality Rates";

        // Reset timeframe
        currentWeek = 2;
        currentYear = 2020;
        // Update axis labels
        if (isShowingNewCases) { 
            updateLegendAxes(maxCovidCases, maxInfluenzaCases); 
            setAxisLabels("New Covid Cases (thousands)", "New Influenza Cases (hundreds)");
        } else { 
            updateLegendAxes(maxCovidMortality, maxInfluenzaMortality); 
            setAxisLabels("New Covid Deaths (hundreds)", "New Influenza Deaths (hundreds)");
        }
    }


    // Add event listener to the toggle button
    var toggleButton = document.getElementById("toggleButton");
    toggleButton.addEventListener("click", toggleData);
});
