/*
   Licensed to the Apache Software Foundation (ASF) under one or more
   contributor license agreements.  See the NOTICE file distributed with
   this work for additional information regarding copyright ownership.
   The ASF licenses this file to You under the Apache License, Version 2.0
   (the "License"); you may not use this file except in compliance with
   the License.  You may obtain a copy of the License at

       http://www.apache.org/licenses/LICENSE-2.0

   Unless required by applicable law or agreed to in writing, software
   distributed under the License is distributed on an "AS IS" BASIS,
   WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
   See the License for the specific language governing permissions and
   limitations under the License.
*/
var showControllersOnly = false;
var seriesFilter = "";
var filtersOnlySampleSeries = true;

/*
 * Add header in statistics table to group metrics by category
 * format
 *
 */
function summaryTableHeader(header) {
    var newRow = header.insertRow(-1);
    newRow.className = "tablesorter-no-sort";
    var cell = document.createElement('th');
    cell.setAttribute("data-sorter", false);
    cell.colSpan = 1;
    cell.innerHTML = "Requests";
    newRow.appendChild(cell);

    cell = document.createElement('th');
    cell.setAttribute("data-sorter", false);
    cell.colSpan = 3;
    cell.innerHTML = "Executions";
    newRow.appendChild(cell);

    cell = document.createElement('th');
    cell.setAttribute("data-sorter", false);
    cell.colSpan = 6;
    cell.innerHTML = "Response Times (ms)";
    newRow.appendChild(cell);

    cell = document.createElement('th');
    cell.setAttribute("data-sorter", false);
    cell.colSpan = 1;
    cell.innerHTML = "Throughput";
    newRow.appendChild(cell);

    cell = document.createElement('th');
    cell.setAttribute("data-sorter", false);
    cell.colSpan = 2;
    cell.innerHTML = "Network (KB/sec)";
    newRow.appendChild(cell);
}

/*
 * Populates the table identified by id parameter with the specified data and
 * format
 *
 */
function createTable(table, info, formatter, defaultSorts, seriesIndex, headerCreator) {
    var tableRef = table[0];

    // Create header and populate it with data.titles array
    var header = tableRef.createTHead();

    // Call callback is available
    if(headerCreator) {
        headerCreator(header);
    }

    var newRow = header.insertRow(-1);
    for (var index = 0; index < info.titles.length; index++) {
        var cell = document.createElement('th');
        cell.innerHTML = info.titles[index];
        newRow.appendChild(cell);
    }

    var tBody;

    // Create overall body if defined
    if(info.overall){
        tBody = document.createElement('tbody');
        tBody.className = "tablesorter-no-sort";
        tableRef.appendChild(tBody);
        var newRow = tBody.insertRow(-1);
        var data = info.overall.data;
        for(var index=0;index < data.length; index++){
            var cell = newRow.insertCell(-1);
            cell.innerHTML = formatter ? formatter(index, data[index]): data[index];
        }
    }

    // Create regular body
    tBody = document.createElement('tbody');
    tableRef.appendChild(tBody);

    var regexp;
    if(seriesFilter) {
        regexp = new RegExp(seriesFilter, 'i');
    }
    // Populate body with data.items array
    for(var index=0; index < info.items.length; index++){
        var item = info.items[index];
        if((!regexp || filtersOnlySampleSeries && !info.supportsControllersDiscrimination || regexp.test(item.data[seriesIndex]))
                &&
                (!showControllersOnly || !info.supportsControllersDiscrimination || item.isController)){
            if(item.data.length > 0) {
                var newRow = tBody.insertRow(-1);
                for(var col=0; col < item.data.length; col++){
                    var cell = newRow.insertCell(-1);
                    cell.innerHTML = formatter ? formatter(col, item.data[col]) : item.data[col];
                }
            }
        }
    }

    // Add support of columns sort
    table.tablesorter({sortList : defaultSorts});
}

$(document).ready(function() {

    // Customize table sorter default options
    $.extend( $.tablesorter.defaults, {
        theme: 'blue',
        cssInfoBlock: "tablesorter-no-sort",
        widthFixed: true,
        widgets: ['zebra']
    });

    var data = {"OkPercent": 0.0, "KoPercent": 100.0};
    var dataset = [
        {
            "label" : "KO",
            "data" : data.KoPercent,
            "color" : "#FF6347"
        },
        {
            "label" : "OK",
            "data" : data.OkPercent,
            "color" : "#9ACD32"
        }];
    $.plot($("#flot-requests-summary"), dataset, {
        series : {
            pie : {
                show : true,
                radius : 1,
                label : {
                    show : true,
                    radius : 3 / 4,
                    formatter : function(label, series) {
                        return '<div style="font-size:8pt;text-align:center;padding:2px;color:white;">'
                            + label
                            + '<br/>'
                            + Math.round10(series.percent, -2)
                            + '%</div>';
                    },
                    background : {
                        opacity : 0.5,
                        color : '#000'
                    }
                }
            }
        },
        legend : {
            show : true
        }
    });

    // Creates APDEX table
    createTable($("#apdexTable"), {"supportsControllersDiscrimination": true, "overall": {"data": [0.0, 500, 1500, "Total"], "isController": false}, "titles": ["Apdex", "T (Toleration threshold)", "F (Frustration threshold)", "Label"], "items": [{"data": [0.0, 500, 1500, "HTTP Request"], "isController": false}]}, function(index, item){
        switch(index){
            case 0:
                item = item.toFixed(3);
                break;
            case 1:
            case 2:
                item = formatDuration(item);
                break;
        }
        return item;
    }, [[0, 0]], 3);

    // Create statistics table
    createTable($("#statisticsTable"), {"supportsControllersDiscrimination": true, "overall": {"data": ["Total", 100, 100, 100.0, 3565.59, 2766, 4043, 3992.1000000000004, 4026.0, 4042.96, 24.715768660405338, 12.913023665348492, 3.1860170538803754], "isController": false}, "titles": ["Label", "#Samples", "KO", "Error %", "Average", "Min", "Max", "90th pct", "95th pct", "99th pct", "Transactions\/s", "Received", "Sent"], "items": [{"data": ["HTTP Request", 100, 100, 100.0, 3565.59, 2766, 4043, 3992.1000000000004, 4026.0, 4042.96, 24.715768660405338, 12.913023665348492, 3.1860170538803754], "isController": false}]}, function(index, item){
        switch(index){
            // Errors pct
            case 3:
                item = item.toFixed(2) + '%';
                break;
            // Mean
            case 4:
            // Mean
            case 7:
            // Percentile 1
            case 8:
            // Percentile 2
            case 9:
            // Percentile 3
            case 10:
            // Throughput
            case 11:
            // Kbytes/s
            case 12:
            // Sent Kbytes/s
                item = item.toFixed(2);
                break;
        }
        return item;
    }, [[0, 0]], 0, summaryTableHeader);

    // Create error table
    createTable($("#errorsTable"), {"supportsControllersDiscrimination": false, "titles": ["Type of error", "Number of errors", "% in errors", "% in all samples"], "items": [{"data": ["The operation lasted too long: It took 3,367 milliseconds, but should not have lasted longer than 1,000 milliseconds.", 1, 1.0, 1.0], "isController": false}, {"data": ["The operation lasted too long: It took 3,497 milliseconds, but should not have lasted longer than 1,000 milliseconds.", 1, 1.0, 1.0], "isController": false}, {"data": ["The operation lasted too long: It took 3,129 milliseconds, but should not have lasted longer than 1,000 milliseconds.", 1, 1.0, 1.0], "isController": false}, {"data": ["The operation lasted too long: It took 3,862 milliseconds, but should not have lasted longer than 1,000 milliseconds.", 1, 1.0, 1.0], "isController": false}, {"data": ["The operation lasted too long: It took 3,691 milliseconds, but should not have lasted longer than 1,000 milliseconds.", 1, 1.0, 1.0], "isController": false}, {"data": ["The operation lasted too long: It took 4,034 milliseconds, but should not have lasted longer than 1,000 milliseconds.", 1, 1.0, 1.0], "isController": false}, {"data": ["The operation lasted too long: It took 4,027 milliseconds, but should not have lasted longer than 1,000 milliseconds.", 1, 1.0, 1.0], "isController": false}, {"data": ["The operation lasted too long: It took 3,631 milliseconds, but should not have lasted longer than 1,000 milliseconds.", 1, 1.0, 1.0], "isController": false}, {"data": ["The operation lasted too long: It took 3,744 milliseconds, but should not have lasted longer than 1,000 milliseconds.", 1, 1.0, 1.0], "isController": false}, {"data": ["The operation lasted too long: It took 3,487 milliseconds, but should not have lasted longer than 1,000 milliseconds.", 1, 1.0, 1.0], "isController": false}, {"data": ["The operation lasted too long: It took 3,636 milliseconds, but should not have lasted longer than 1,000 milliseconds.", 1, 1.0, 1.0], "isController": false}, {"data": ["The operation lasted too long: It took 3,700 milliseconds, but should not have lasted longer than 1,000 milliseconds.", 1, 1.0, 1.0], "isController": false}, {"data": ["The operation lasted too long: It took 3,205 milliseconds, but should not have lasted longer than 1,000 milliseconds.", 1, 1.0, 1.0], "isController": false}, {"data": ["The operation lasted too long: It took 4,039 milliseconds, but should not have lasted longer than 1,000 milliseconds.", 1, 1.0, 1.0], "isController": false}, {"data": ["The operation lasted too long: It took 2,998 milliseconds, but should not have lasted longer than 1,000 milliseconds.", 1, 1.0, 1.0], "isController": false}, {"data": ["The operation lasted too long: It took 3,162 milliseconds, but should not have lasted longer than 1,000 milliseconds.", 1, 1.0, 1.0], "isController": false}, {"data": ["The operation lasted too long: It took 3,547 milliseconds, but should not have lasted longer than 1,000 milliseconds.", 1, 1.0, 1.0], "isController": false}, {"data": ["The operation lasted too long: It took 3,715 milliseconds, but should not have lasted longer than 1,000 milliseconds.", 1, 1.0, 1.0], "isController": false}, {"data": ["The operation lasted too long: It took 3,773 milliseconds, but should not have lasted longer than 1,000 milliseconds.", 1, 1.0, 1.0], "isController": false}, {"data": ["The operation lasted too long: It took 3,104 milliseconds, but should not have lasted longer than 1,000 milliseconds.", 2, 2.0, 2.0], "isController": false}, {"data": ["The operation lasted too long: It took 3,097 milliseconds, but should not have lasted longer than 1,000 milliseconds.", 1, 1.0, 1.0], "isController": false}, {"data": ["The operation lasted too long: It took 3,533 milliseconds, but should not have lasted longer than 1,000 milliseconds.", 1, 1.0, 1.0], "isController": false}, {"data": ["The operation lasted too long: It took 3,782 milliseconds, but should not have lasted longer than 1,000 milliseconds.", 1, 1.0, 1.0], "isController": false}, {"data": ["The operation lasted too long: It took 3,499 milliseconds, but should not have lasted longer than 1,000 milliseconds.", 1, 1.0, 1.0], "isController": false}, {"data": ["The operation lasted too long: It took 3,500 milliseconds, but should not have lasted longer than 1,000 milliseconds.", 1, 1.0, 1.0], "isController": false}, {"data": ["The operation lasted too long: It took 3,689 milliseconds, but should not have lasted longer than 1,000 milliseconds.", 1, 1.0, 1.0], "isController": false}, {"data": ["The operation lasted too long: It took 3,902 milliseconds, but should not have lasted longer than 1,000 milliseconds.", 1, 1.0, 1.0], "isController": false}, {"data": ["The operation lasted too long: It took 3,701 milliseconds, but should not have lasted longer than 1,000 milliseconds.", 1, 1.0, 1.0], "isController": false}, {"data": ["The operation lasted too long: It took 2,959 milliseconds, but should not have lasted longer than 1,000 milliseconds.", 1, 1.0, 1.0], "isController": false}, {"data": ["The operation lasted too long: It took 3,957 milliseconds, but should not have lasted longer than 1,000 milliseconds.", 1, 1.0, 1.0], "isController": false}, {"data": ["The operation lasted too long: It took 3,608 milliseconds, but should not have lasted longer than 1,000 milliseconds.", 1, 1.0, 1.0], "isController": false}, {"data": ["The operation lasted too long: It took 3,946 milliseconds, but should not have lasted longer than 1,000 milliseconds.", 1, 1.0, 1.0], "isController": false}, {"data": ["The operation lasted too long: It took 3,767 milliseconds, but should not have lasted longer than 1,000 milliseconds.", 1, 1.0, 1.0], "isController": false}, {"data": ["The operation lasted too long: It took 4,015 milliseconds, but should not have lasted longer than 1,000 milliseconds.", 1, 1.0, 1.0], "isController": false}, {"data": ["The operation lasted too long: It took 3,824 milliseconds, but should not have lasted longer than 1,000 milliseconds.", 1, 1.0, 1.0], "isController": false}, {"data": ["The operation lasted too long: It took 3,512 milliseconds, but should not have lasted longer than 1,000 milliseconds.", 1, 1.0, 1.0], "isController": false}, {"data": ["The operation lasted too long: It took 3,835 milliseconds, but should not have lasted longer than 1,000 milliseconds.", 1, 1.0, 1.0], "isController": false}, {"data": ["The operation lasted too long: It took 4,026 milliseconds, but should not have lasted longer than 1,000 milliseconds.", 2, 2.0, 2.0], "isController": false}, {"data": ["The operation lasted too long: It took 3,210 milliseconds, but should not have lasted longer than 1,000 milliseconds.", 1, 1.0, 1.0], "isController": false}, {"data": ["The operation lasted too long: It took 3,164 milliseconds, but should not have lasted longer than 1,000 milliseconds.", 1, 1.0, 1.0], "isController": false}, {"data": ["The operation lasted too long: It took 3,480 milliseconds, but should not have lasted longer than 1,000 milliseconds.", 1, 1.0, 1.0], "isController": false}, {"data": ["The operation lasted too long: It took 3,609 milliseconds, but should not have lasted longer than 1,000 milliseconds.", 1, 1.0, 1.0], "isController": false}, {"data": ["The operation lasted too long: It took 3,486 milliseconds, but should not have lasted longer than 1,000 milliseconds.", 1, 1.0, 1.0], "isController": false}, {"data": ["The operation lasted too long: It took 3,955 milliseconds, but should not have lasted longer than 1,000 milliseconds.", 1, 1.0, 1.0], "isController": false}, {"data": ["The operation lasted too long: It took 3,490 milliseconds, but should not have lasted longer than 1,000 milliseconds.", 1, 1.0, 1.0], "isController": false}, {"data": ["The operation lasted too long: It took 3,999 milliseconds, but should not have lasted longer than 1,000 milliseconds.", 1, 1.0, 1.0], "isController": false}, {"data": ["The operation lasted too long: It took 4,016 milliseconds, but should not have lasted longer than 1,000 milliseconds.", 1, 1.0, 1.0], "isController": false}, {"data": ["The operation lasted too long: It took 3,683 milliseconds, but should not have lasted longer than 1,000 milliseconds.", 1, 1.0, 1.0], "isController": false}, {"data": ["The operation lasted too long: It took 3,597 milliseconds, but should not have lasted longer than 1,000 milliseconds.", 1, 1.0, 1.0], "isController": false}, {"data": ["The operation lasted too long: It took 3,103 milliseconds, but should not have lasted longer than 1,000 milliseconds.", 1, 1.0, 1.0], "isController": false}, {"data": ["The operation lasted too long: It took 3,286 milliseconds, but should not have lasted longer than 1,000 milliseconds.", 1, 1.0, 1.0], "isController": false}, {"data": ["The operation lasted too long: It took 3,707 milliseconds, but should not have lasted longer than 1,000 milliseconds.", 1, 1.0, 1.0], "isController": false}, {"data": ["The operation lasted too long: It took 3,711 milliseconds, but should not have lasted longer than 1,000 milliseconds.", 1, 1.0, 1.0], "isController": false}, {"data": ["The operation lasted too long: It took 3,815 milliseconds, but should not have lasted longer than 1,000 milliseconds.", 1, 1.0, 1.0], "isController": false}, {"data": ["The operation lasted too long: It took 3,666 milliseconds, but should not have lasted longer than 1,000 milliseconds.", 1, 1.0, 1.0], "isController": false}, {"data": ["The operation lasted too long: It took 3,021 milliseconds, but should not have lasted longer than 1,000 milliseconds.", 3, 3.0, 3.0], "isController": false}, {"data": ["The operation lasted too long: It took 3,844 milliseconds, but should not have lasted longer than 1,000 milliseconds.", 1, 1.0, 1.0], "isController": false}, {"data": ["The operation lasted too long: It took 3,870 milliseconds, but should not have lasted longer than 1,000 milliseconds.", 1, 1.0, 1.0], "isController": false}, {"data": ["The operation lasted too long: It took 3,996 milliseconds, but should not have lasted longer than 1,000 milliseconds.", 1, 1.0, 1.0], "isController": false}, {"data": ["The operation lasted too long: It took 3,892 milliseconds, but should not have lasted longer than 1,000 milliseconds.", 1, 1.0, 1.0], "isController": false}, {"data": ["The operation lasted too long: It took 3,632 milliseconds, but should not have lasted longer than 1,000 milliseconds.", 1, 1.0, 1.0], "isController": false}, {"data": ["The operation lasted too long: It took 3,099 milliseconds, but should not have lasted longer than 1,000 milliseconds.", 1, 1.0, 1.0], "isController": false}, {"data": ["The operation lasted too long: It took 3,296 milliseconds, but should not have lasted longer than 1,000 milliseconds.", 1, 1.0, 1.0], "isController": false}, {"data": ["The operation lasted too long: It took 3,420 milliseconds, but should not have lasted longer than 1,000 milliseconds.", 1, 1.0, 1.0], "isController": false}, {"data": ["The operation lasted too long: It took 3,777 milliseconds, but should not have lasted longer than 1,000 milliseconds.", 1, 1.0, 1.0], "isController": false}, {"data": ["The operation lasted too long: It took 3,108 milliseconds, but should not have lasted longer than 1,000 milliseconds.", 1, 1.0, 1.0], "isController": false}, {"data": ["The operation lasted too long: It took 3,674 milliseconds, but should not have lasted longer than 1,000 milliseconds.", 1, 1.0, 1.0], "isController": false}, {"data": ["The operation lasted too long: It took 3,451 milliseconds, but should not have lasted longer than 1,000 milliseconds.", 1, 1.0, 1.0], "isController": false}, {"data": ["The operation lasted too long: It took 3,157 milliseconds, but should not have lasted longer than 1,000 milliseconds.", 1, 1.0, 1.0], "isController": false}, {"data": ["The operation lasted too long: It took 3,875 milliseconds, but should not have lasted longer than 1,000 milliseconds.", 1, 1.0, 1.0], "isController": false}, {"data": ["The operation lasted too long: It took 3,637 milliseconds, but should not have lasted longer than 1,000 milliseconds.", 1, 1.0, 1.0], "isController": false}, {"data": ["The operation lasted too long: It took 3,484 milliseconds, but should not have lasted longer than 1,000 milliseconds.", 1, 1.0, 1.0], "isController": false}, {"data": ["The operation lasted too long: It took 3,853 milliseconds, but should not have lasted longer than 1,000 milliseconds.", 2, 2.0, 2.0], "isController": false}, {"data": ["The operation lasted too long: It took 3,503 milliseconds, but should not have lasted longer than 1,000 milliseconds.", 1, 1.0, 1.0], "isController": false}, {"data": ["The operation lasted too long: It took 3,842 milliseconds, but should not have lasted longer than 1,000 milliseconds.", 1, 1.0, 1.0], "isController": false}, {"data": ["The operation lasted too long: It took 4,043 milliseconds, but should not have lasted longer than 1,000 milliseconds.", 1, 1.0, 1.0], "isController": false}, {"data": ["The operation lasted too long: It took 3,908 milliseconds, but should not have lasted longer than 1,000 milliseconds.", 1, 1.0, 1.0], "isController": false}, {"data": ["The operation lasted too long: It took 3,123 milliseconds, but should not have lasted longer than 1,000 milliseconds.", 1, 1.0, 1.0], "isController": false}, {"data": ["The operation lasted too long: It took 3,584 milliseconds, but should not have lasted longer than 1,000 milliseconds.", 1, 1.0, 1.0], "isController": false}, {"data": ["The operation lasted too long: It took 3,919 milliseconds, but should not have lasted longer than 1,000 milliseconds.", 1, 1.0, 1.0], "isController": false}, {"data": ["The operation lasted too long: It took 3,463 milliseconds, but should not have lasted longer than 1,000 milliseconds.", 1, 1.0, 1.0], "isController": false}, {"data": ["The operation lasted too long: It took 3,496 milliseconds, but should not have lasted longer than 1,000 milliseconds.", 2, 2.0, 2.0], "isController": false}, {"data": ["The operation lasted too long: It took 3,887 milliseconds, but should not have lasted longer than 1,000 milliseconds.", 1, 1.0, 1.0], "isController": false}, {"data": ["The operation lasted too long: It took 3,009 milliseconds, but should not have lasted longer than 1,000 milliseconds.", 1, 1.0, 1.0], "isController": false}, {"data": ["The operation lasted too long: It took 3,361 milliseconds, but should not have lasted longer than 1,000 milliseconds.", 1, 1.0, 1.0], "isController": false}, {"data": ["The operation lasted too long: It took 3,372 milliseconds, but should not have lasted longer than 1,000 milliseconds.", 1, 1.0, 1.0], "isController": false}, {"data": ["The operation lasted too long: It took 3,828 milliseconds, but should not have lasted longer than 1,000 milliseconds.", 1, 1.0, 1.0], "isController": false}, {"data": ["The operation lasted too long: It took 3,504 milliseconds, but should not have lasted longer than 1,000 milliseconds.", 1, 1.0, 1.0], "isController": false}, {"data": ["The operation lasted too long: It took 3,325 milliseconds, but should not have lasted longer than 1,000 milliseconds.", 1, 1.0, 1.0], "isController": false}, {"data": ["The operation lasted too long: It took 3,585 milliseconds, but should not have lasted longer than 1,000 milliseconds.", 1, 1.0, 1.0], "isController": false}, {"data": ["The operation lasted too long: It took 2,766 milliseconds, but should not have lasted longer than 1,000 milliseconds.", 1, 1.0, 1.0], "isController": false}, {"data": ["The operation lasted too long: It took 3,742 milliseconds, but should not have lasted longer than 1,000 milliseconds.", 1, 1.0, 1.0], "isController": false}, {"data": ["The operation lasted too long: It took 3,113 milliseconds, but should not have lasted longer than 1,000 milliseconds.", 1, 1.0, 1.0], "isController": false}, {"data": ["The operation lasted too long: It took 3,102 milliseconds, but should not have lasted longer than 1,000 milliseconds.", 1, 1.0, 1.0], "isController": false}]}, function(index, item){
        switch(index){
            case 2:
            case 3:
                item = item.toFixed(2) + '%';
                break;
        }
        return item;
    }, [[1, 1]]);

        // Create top5 errors by sampler
    createTable($("#top5ErrorsBySamplerTable"), {"supportsControllersDiscrimination": false, "overall": {"data": ["Total", 100, 100, "The operation lasted too long: It took 3,021 milliseconds, but should not have lasted longer than 1,000 milliseconds.", 3, "The operation lasted too long: It took 3,104 milliseconds, but should not have lasted longer than 1,000 milliseconds.", 2, "The operation lasted too long: It took 4,026 milliseconds, but should not have lasted longer than 1,000 milliseconds.", 2, "The operation lasted too long: It took 3,853 milliseconds, but should not have lasted longer than 1,000 milliseconds.", 2, "The operation lasted too long: It took 3,496 milliseconds, but should not have lasted longer than 1,000 milliseconds.", 2], "isController": false}, "titles": ["Sample", "#Samples", "#Errors", "Error", "#Errors", "Error", "#Errors", "Error", "#Errors", "Error", "#Errors", "Error", "#Errors"], "items": [{"data": ["HTTP Request", 100, 100, "The operation lasted too long: It took 3,021 milliseconds, but should not have lasted longer than 1,000 milliseconds.", 3, "The operation lasted too long: It took 3,104 milliseconds, but should not have lasted longer than 1,000 milliseconds.", 2, "The operation lasted too long: It took 4,026 milliseconds, but should not have lasted longer than 1,000 milliseconds.", 2, "The operation lasted too long: It took 3,853 milliseconds, but should not have lasted longer than 1,000 milliseconds.", 2, "The operation lasted too long: It took 3,496 milliseconds, but should not have lasted longer than 1,000 milliseconds.", 2], "isController": false}]}, function(index, item){
        return item;
    }, [[0, 0]], 0);

});
