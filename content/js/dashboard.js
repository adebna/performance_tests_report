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
    createTable($("#statisticsTable"), {"supportsControllersDiscrimination": true, "overall": {"data": ["Total", 100, 100, 100.0, 3024.7200000000003, 2158, 3620, 3450.1, 3574.4999999999995, 3619.71, 27.59381898454746, 14.416692535871965, 3.557015728476821], "isController": false}, "titles": ["Label", "#Samples", "KO", "Error %", "Average", "Min", "Max", "90th pct", "95th pct", "99th pct", "Transactions\/s", "Received", "Sent"], "items": [{"data": ["HTTP Request", 100, 100, 100.0, 3024.7200000000003, 2158, 3620, 3450.1, 3574.4999999999995, 3619.71, 27.59381898454746, 14.416692535871965, 3.557015728476821], "isController": false}]}, function(index, item){
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
    createTable($("#errorsTable"), {"supportsControllersDiscrimination": false, "titles": ["Type of error", "Number of errors", "% in errors", "% in all samples"], "items": [{"data": ["The operation lasted too long: It took 2,615 milliseconds, but should not have lasted longer than 1,000 milliseconds.", 2, 2.0, 2.0], "isController": false}, {"data": ["The operation lasted too long: It took 2,340 milliseconds, but should not have lasted longer than 1,000 milliseconds.", 1, 1.0, 1.0], "isController": false}, {"data": ["The operation lasted too long: It took 3,167 milliseconds, but should not have lasted longer than 1,000 milliseconds.", 1, 1.0, 1.0], "isController": false}, {"data": ["The operation lasted too long: It took 3,402 milliseconds, but should not have lasted longer than 1,000 milliseconds.", 1, 1.0, 1.0], "isController": false}, {"data": ["The operation lasted too long: It took 2,158 milliseconds, but should not have lasted longer than 1,000 milliseconds.", 1, 1.0, 1.0], "isController": false}, {"data": ["The operation lasted too long: It took 2,182 milliseconds, but should not have lasted longer than 1,000 milliseconds.", 1, 1.0, 1.0], "isController": false}, {"data": ["The operation lasted too long: It took 3,022 milliseconds, but should not have lasted longer than 1,000 milliseconds.", 2, 2.0, 2.0], "isController": false}, {"data": ["The operation lasted too long: It took 2,872 milliseconds, but should not have lasted longer than 1,000 milliseconds.", 1, 1.0, 1.0], "isController": false}, {"data": ["The operation lasted too long: It took 3,460 milliseconds, but should not have lasted longer than 1,000 milliseconds.", 1, 1.0, 1.0], "isController": false}, {"data": ["The operation lasted too long: It took 3,140 milliseconds, but should not have lasted longer than 1,000 milliseconds.", 1, 1.0, 1.0], "isController": false}, {"data": ["The operation lasted too long: It took 2,596 milliseconds, but should not have lasted longer than 1,000 milliseconds.", 1, 1.0, 1.0], "isController": false}, {"data": ["The operation lasted too long: It took 3,080 milliseconds, but should not have lasted longer than 1,000 milliseconds.", 1, 1.0, 1.0], "isController": false}, {"data": ["The operation lasted too long: It took 3,298 milliseconds, but should not have lasted longer than 1,000 milliseconds.", 1, 1.0, 1.0], "isController": false}, {"data": ["The operation lasted too long: It took 3,090 milliseconds, but should not have lasted longer than 1,000 milliseconds.", 1, 1.0, 1.0], "isController": false}, {"data": ["The operation lasted too long: It took 2,847 milliseconds, but should not have lasted longer than 1,000 milliseconds.", 1, 1.0, 1.0], "isController": false}, {"data": ["The operation lasted too long: It took 2,461 milliseconds, but should not have lasted longer than 1,000 milliseconds.", 1, 1.0, 1.0], "isController": false}, {"data": ["The operation lasted too long: It took 3,220 milliseconds, but should not have lasted longer than 1,000 milliseconds.", 1, 1.0, 1.0], "isController": false}, {"data": ["The operation lasted too long: It took 3,231 milliseconds, but should not have lasted longer than 1,000 milliseconds.", 1, 1.0, 1.0], "isController": false}, {"data": ["The operation lasted too long: It took 2,761 milliseconds, but should not have lasted longer than 1,000 milliseconds.", 1, 1.0, 1.0], "isController": false}, {"data": ["The operation lasted too long: It took 3,264 milliseconds, but should not have lasted longer than 1,000 milliseconds.", 1, 1.0, 1.0], "isController": false}, {"data": ["The operation lasted too long: It took 3,578 milliseconds, but should not have lasted longer than 1,000 milliseconds.", 1, 1.0, 1.0], "isController": false}, {"data": ["The operation lasted too long: It took 3,154 milliseconds, but should not have lasted longer than 1,000 milliseconds.", 1, 1.0, 1.0], "isController": false}, {"data": ["The operation lasted too long: It took 2,848 milliseconds, but should not have lasted longer than 1,000 milliseconds.", 1, 1.0, 1.0], "isController": false}, {"data": ["The operation lasted too long: It took 3,366 milliseconds, but should not have lasted longer than 1,000 milliseconds.", 1, 1.0, 1.0], "isController": false}, {"data": ["The operation lasted too long: It took 2,952 milliseconds, but should not have lasted longer than 1,000 milliseconds.", 1, 1.0, 1.0], "isController": false}, {"data": ["The operation lasted too long: It took 3,399 milliseconds, but should not have lasted longer than 1,000 milliseconds.", 1, 1.0, 1.0], "isController": false}, {"data": ["The operation lasted too long: It took 2,287 milliseconds, but should not have lasted longer than 1,000 milliseconds.", 1, 1.0, 1.0], "isController": false}, {"data": ["The operation lasted too long: It took 3,546 milliseconds, but should not have lasted longer than 1,000 milliseconds.", 1, 1.0, 1.0], "isController": false}, {"data": ["The operation lasted too long: It took 2,871 milliseconds, but should not have lasted longer than 1,000 milliseconds.", 1, 1.0, 1.0], "isController": false}, {"data": ["The operation lasted too long: It took 3,620 milliseconds, but should not have lasted longer than 1,000 milliseconds.", 1, 1.0, 1.0], "isController": false}, {"data": ["The operation lasted too long: It took 3,591 milliseconds, but should not have lasted longer than 1,000 milliseconds.", 1, 1.0, 1.0], "isController": false}, {"data": ["The operation lasted too long: It took 3,438 milliseconds, but should not have lasted longer than 1,000 milliseconds.", 1, 1.0, 1.0], "isController": false}, {"data": ["The operation lasted too long: It took 3,238 milliseconds, but should not have lasted longer than 1,000 milliseconds.", 1, 1.0, 1.0], "isController": false}, {"data": ["The operation lasted too long: It took 3,087 milliseconds, but should not have lasted longer than 1,000 milliseconds.", 1, 1.0, 1.0], "isController": false}, {"data": ["The operation lasted too long: It took 3,065 milliseconds, but should not have lasted longer than 1,000 milliseconds.", 1, 1.0, 1.0], "isController": false}, {"data": ["The operation lasted too long: It took 3,346 milliseconds, but should not have lasted longer than 1,000 milliseconds.", 1, 1.0, 1.0], "isController": false}, {"data": ["The operation lasted too long: It took 2,854 milliseconds, but should not have lasted longer than 1,000 milliseconds.", 1, 1.0, 1.0], "isController": false}, {"data": ["The operation lasted too long: It took 3,368 milliseconds, but should not have lasted longer than 1,000 milliseconds.", 1, 1.0, 1.0], "isController": false}, {"data": ["The operation lasted too long: It took 3,159 milliseconds, but should not have lasted longer than 1,000 milliseconds.", 1, 1.0, 1.0], "isController": false}, {"data": ["The operation lasted too long: It took 3,442 milliseconds, but should not have lasted longer than 1,000 milliseconds.", 1, 1.0, 1.0], "isController": false}, {"data": ["The operation lasted too long: It took 3,100 milliseconds, but should not have lasted longer than 1,000 milliseconds.", 1, 1.0, 1.0], "isController": false}, {"data": ["The operation lasted too long: It took 3,179 milliseconds, but should not have lasted longer than 1,000 milliseconds.", 1, 1.0, 1.0], "isController": false}, {"data": ["The operation lasted too long: It took 3,451 milliseconds, but should not have lasted longer than 1,000 milliseconds.", 1, 1.0, 1.0], "isController": false}, {"data": ["The operation lasted too long: It took 2,999 milliseconds, but should not have lasted longer than 1,000 milliseconds.", 1, 1.0, 1.0], "isController": false}, {"data": ["The operation lasted too long: It took 3,023 milliseconds, but should not have lasted longer than 1,000 milliseconds.", 1, 1.0, 1.0], "isController": false}, {"data": ["The operation lasted too long: It took 2,564 milliseconds, but should not have lasted longer than 1,000 milliseconds.", 1, 1.0, 1.0], "isController": false}, {"data": ["The operation lasted too long: It took 2,792 milliseconds, but should not have lasted longer than 1,000 milliseconds.", 1, 1.0, 1.0], "isController": false}, {"data": ["The operation lasted too long: It took 2,880 milliseconds, but should not have lasted longer than 1,000 milliseconds.", 1, 1.0, 1.0], "isController": false}, {"data": ["The operation lasted too long: It took 3,359 milliseconds, but should not have lasted longer than 1,000 milliseconds.", 1, 1.0, 1.0], "isController": false}, {"data": ["The operation lasted too long: It took 2,819 milliseconds, but should not have lasted longer than 1,000 milliseconds.", 1, 1.0, 1.0], "isController": false}, {"data": ["The operation lasted too long: It took 3,135 milliseconds, but should not have lasted longer than 1,000 milliseconds.", 1, 1.0, 1.0], "isController": false}, {"data": ["The operation lasted too long: It took 3,367 milliseconds, but should not have lasted longer than 1,000 milliseconds.", 1, 1.0, 1.0], "isController": false}, {"data": ["The operation lasted too long: It took 3,155 milliseconds, but should not have lasted longer than 1,000 milliseconds.", 1, 1.0, 1.0], "isController": false}, {"data": ["The operation lasted too long: It took 2,961 milliseconds, but should not have lasted longer than 1,000 milliseconds.", 1, 1.0, 1.0], "isController": false}, {"data": ["The operation lasted too long: It took 3,047 milliseconds, but should not have lasted longer than 1,000 milliseconds.", 1, 1.0, 1.0], "isController": false}, {"data": ["The operation lasted too long: It took 3,323 milliseconds, but should not have lasted longer than 1,000 milliseconds.", 1, 1.0, 1.0], "isController": false}, {"data": ["The operation lasted too long: It took 3,249 milliseconds, but should not have lasted longer than 1,000 milliseconds.", 1, 1.0, 1.0], "isController": false}, {"data": ["The operation lasted too long: It took 3,381 milliseconds, but should not have lasted longer than 1,000 milliseconds.", 1, 1.0, 1.0], "isController": false}, {"data": ["The operation lasted too long: It took 2,850 milliseconds, but should not have lasted longer than 1,000 milliseconds.", 1, 1.0, 1.0], "isController": false}, {"data": ["The operation lasted too long: It took 3,212 milliseconds, but should not have lasted longer than 1,000 milliseconds.", 1, 1.0, 1.0], "isController": false}, {"data": ["The operation lasted too long: It took 3,208 milliseconds, but should not have lasted longer than 1,000 milliseconds.", 1, 1.0, 1.0], "isController": false}, {"data": ["The operation lasted too long: It took 3,148 milliseconds, but should not have lasted longer than 1,000 milliseconds.", 1, 1.0, 1.0], "isController": false}, {"data": ["The operation lasted too long: It took 3,576 milliseconds, but should not have lasted longer than 1,000 milliseconds.", 1, 1.0, 1.0], "isController": false}, {"data": ["The operation lasted too long: It took 3,590 milliseconds, but should not have lasted longer than 1,000 milliseconds.", 1, 1.0, 1.0], "isController": false}, {"data": ["The operation lasted too long: It took 2,561 milliseconds, but should not have lasted longer than 1,000 milliseconds.", 1, 1.0, 1.0], "isController": false}, {"data": ["The operation lasted too long: It took 3,075 milliseconds, but should not have lasted longer than 1,000 milliseconds.", 1, 1.0, 1.0], "isController": false}, {"data": ["The operation lasted too long: It took 2,181 milliseconds, but should not have lasted longer than 1,000 milliseconds.", 1, 1.0, 1.0], "isController": false}, {"data": ["The operation lasted too long: It took 2,985 milliseconds, but should not have lasted longer than 1,000 milliseconds.", 1, 1.0, 1.0], "isController": false}, {"data": ["The operation lasted too long: It took 3,027 milliseconds, but should not have lasted longer than 1,000 milliseconds.", 1, 1.0, 1.0], "isController": false}, {"data": ["The operation lasted too long: It took 3,492 milliseconds, but should not have lasted longer than 1,000 milliseconds.", 1, 1.0, 1.0], "isController": false}, {"data": ["The operation lasted too long: It took 3,290 milliseconds, but should not have lasted longer than 1,000 milliseconds.", 1, 1.0, 1.0], "isController": false}, {"data": ["The operation lasted too long: It took 2,460 milliseconds, but should not have lasted longer than 1,000 milliseconds.", 1, 1.0, 1.0], "isController": false}, {"data": ["The operation lasted too long: It took 2,927 milliseconds, but should not have lasted longer than 1,000 milliseconds.", 1, 1.0, 1.0], "isController": false}, {"data": ["The operation lasted too long: It took 3,411 milliseconds, but should not have lasted longer than 1,000 milliseconds.", 1, 1.0, 1.0], "isController": false}, {"data": ["The operation lasted too long: It took 3,287 milliseconds, but should not have lasted longer than 1,000 milliseconds.", 1, 1.0, 1.0], "isController": false}, {"data": ["The operation lasted too long: It took 3,382 milliseconds, but should not have lasted longer than 1,000 milliseconds.", 1, 1.0, 1.0], "isController": false}, {"data": ["The operation lasted too long: It took 2,886 milliseconds, but should not have lasted longer than 1,000 milliseconds.", 1, 1.0, 1.0], "isController": false}, {"data": ["The operation lasted too long: It took 3,204 milliseconds, but should not have lasted longer than 1,000 milliseconds.", 1, 1.0, 1.0], "isController": false}, {"data": ["The operation lasted too long: It took 2,176 milliseconds, but should not have lasted longer than 1,000 milliseconds.", 1, 1.0, 1.0], "isController": false}, {"data": ["The operation lasted too long: It took 2,778 milliseconds, but should not have lasted longer than 1,000 milliseconds.", 1, 1.0, 1.0], "isController": false}, {"data": ["The operation lasted too long: It took 2,361 milliseconds, but should not have lasted longer than 1,000 milliseconds.", 1, 1.0, 1.0], "isController": false}, {"data": ["The operation lasted too long: It took 2,679 milliseconds, but should not have lasted longer than 1,000 milliseconds.", 1, 1.0, 1.0], "isController": false}, {"data": ["The operation lasted too long: It took 3,406 milliseconds, but should not have lasted longer than 1,000 milliseconds.", 1, 1.0, 1.0], "isController": false}, {"data": ["The operation lasted too long: It took 2,563 milliseconds, but should not have lasted longer than 1,000 milliseconds.", 1, 1.0, 1.0], "isController": false}, {"data": ["The operation lasted too long: It took 3,151 milliseconds, but should not have lasted longer than 1,000 milliseconds.", 1, 1.0, 1.0], "isController": false}, {"data": ["The operation lasted too long: It took 2,936 milliseconds, but should not have lasted longer than 1,000 milliseconds.", 1, 1.0, 1.0], "isController": false}, {"data": ["The operation lasted too long: It took 3,428 milliseconds, but should not have lasted longer than 1,000 milliseconds.", 1, 1.0, 1.0], "isController": false}, {"data": ["The operation lasted too long: It took 2,844 milliseconds, but should not have lasted longer than 1,000 milliseconds.", 1, 1.0, 1.0], "isController": false}, {"data": ["The operation lasted too long: It took 3,362 milliseconds, but should not have lasted longer than 1,000 milliseconds.", 1, 1.0, 1.0], "isController": false}, {"data": ["The operation lasted too long: It took 2,539 milliseconds, but should not have lasted longer than 1,000 milliseconds.", 1, 1.0, 1.0], "isController": false}, {"data": ["The operation lasted too long: It took 2,286 milliseconds, but should not have lasted longer than 1,000 milliseconds.", 1, 1.0, 1.0], "isController": false}, {"data": ["The operation lasted too long: It took 3,268 milliseconds, but should not have lasted longer than 1,000 milliseconds.", 1, 1.0, 1.0], "isController": false}, {"data": ["The operation lasted too long: It took 3,474 milliseconds, but should not have lasted longer than 1,000 milliseconds.", 1, 1.0, 1.0], "isController": false}, {"data": ["The operation lasted too long: It took 2,385 milliseconds, but should not have lasted longer than 1,000 milliseconds.", 1, 1.0, 1.0], "isController": false}, {"data": ["The operation lasted too long: It took 2,363 milliseconds, but should not have lasted longer than 1,000 milliseconds.", 1, 1.0, 1.0], "isController": false}, {"data": ["The operation lasted too long: It took 2,993 milliseconds, but should not have lasted longer than 1,000 milliseconds.", 1, 1.0, 1.0], "isController": false}, {"data": ["The operation lasted too long: It took 3,294 milliseconds, but should not have lasted longer than 1,000 milliseconds.", 1, 1.0, 1.0], "isController": false}, {"data": ["The operation lasted too long: It took 2,598 milliseconds, but should not have lasted longer than 1,000 milliseconds.", 1, 1.0, 1.0], "isController": false}]}, function(index, item){
        switch(index){
            case 2:
            case 3:
                item = item.toFixed(2) + '%';
                break;
        }
        return item;
    }, [[1, 1]]);

        // Create top5 errors by sampler
    createTable($("#top5ErrorsBySamplerTable"), {"supportsControllersDiscrimination": false, "overall": {"data": ["Total", 100, 100, "The operation lasted too long: It took 2,615 milliseconds, but should not have lasted longer than 1,000 milliseconds.", 2, "The operation lasted too long: It took 3,022 milliseconds, but should not have lasted longer than 1,000 milliseconds.", 2, "The operation lasted too long: It took 2,340 milliseconds, but should not have lasted longer than 1,000 milliseconds.", 1, "The operation lasted too long: It took 3,167 milliseconds, but should not have lasted longer than 1,000 milliseconds.", 1, "The operation lasted too long: It took 3,402 milliseconds, but should not have lasted longer than 1,000 milliseconds.", 1], "isController": false}, "titles": ["Sample", "#Samples", "#Errors", "Error", "#Errors", "Error", "#Errors", "Error", "#Errors", "Error", "#Errors", "Error", "#Errors"], "items": [{"data": ["HTTP Request", 100, 100, "The operation lasted too long: It took 2,615 milliseconds, but should not have lasted longer than 1,000 milliseconds.", 2, "The operation lasted too long: It took 3,022 milliseconds, but should not have lasted longer than 1,000 milliseconds.", 2, "The operation lasted too long: It took 2,340 milliseconds, but should not have lasted longer than 1,000 milliseconds.", 1, "The operation lasted too long: It took 3,167 milliseconds, but should not have lasted longer than 1,000 milliseconds.", 1, "The operation lasted too long: It took 3,402 milliseconds, but should not have lasted longer than 1,000 milliseconds.", 1], "isController": false}]}, function(index, item){
        return item;
    }, [[0, 0]], 0);

});
