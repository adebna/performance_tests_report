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
$(document).ready(function() {

    $(".click-title").mouseenter( function(    e){
        e.preventDefault();
        this.style.cursor="pointer";
    });
    $(".click-title").mousedown( function(event){
        event.preventDefault();
    });

    // Ugly code while this script is shared among several pages
    try{
        refreshHitsPerSecond(true);
    } catch(e){}
    try{
        refreshResponseTimeOverTime(true);
    } catch(e){}
    try{
        refreshResponseTimePercentiles();
    } catch(e){}
});


var responseTimePercentilesInfos = {
        data: {"result": {"minY": 1902.0, "minX": 0.0, "maxY": 3490.0, "series": [{"data": [[0.0, 1902.0], [0.1, 1902.0], [0.2, 1902.0], [0.3, 1902.0], [0.4, 1902.0], [0.5, 1902.0], [0.6, 1902.0], [0.7, 1902.0], [0.8, 1902.0], [0.9, 1902.0], [1.0, 1934.0], [1.1, 1934.0], [1.2, 1934.0], [1.3, 1934.0], [1.4, 1934.0], [1.5, 1934.0], [1.6, 1934.0], [1.7, 1934.0], [1.8, 1934.0], [1.9, 1934.0], [2.0, 1945.0], [2.1, 1945.0], [2.2, 1945.0], [2.3, 1945.0], [2.4, 1945.0], [2.5, 1945.0], [2.6, 1945.0], [2.7, 1945.0], [2.8, 1945.0], [2.9, 1945.0], [3.0, 2098.0], [3.1, 2098.0], [3.2, 2098.0], [3.3, 2098.0], [3.4, 2098.0], [3.5, 2098.0], [3.6, 2098.0], [3.7, 2098.0], [3.8, 2098.0], [3.9, 2098.0], [4.0, 2132.0], [4.1, 2132.0], [4.2, 2132.0], [4.3, 2132.0], [4.4, 2132.0], [4.5, 2132.0], [4.6, 2132.0], [4.7, 2132.0], [4.8, 2132.0], [4.9, 2132.0], [5.0, 2135.0], [5.1, 2135.0], [5.2, 2135.0], [5.3, 2135.0], [5.4, 2135.0], [5.5, 2135.0], [5.6, 2135.0], [5.7, 2135.0], [5.8, 2135.0], [5.9, 2135.0], [6.0, 2196.0], [6.1, 2196.0], [6.2, 2196.0], [6.3, 2196.0], [6.4, 2196.0], [6.5, 2196.0], [6.6, 2196.0], [6.7, 2196.0], [6.8, 2196.0], [6.9, 2196.0], [7.0, 2231.0], [7.1, 2231.0], [7.2, 2231.0], [7.3, 2231.0], [7.4, 2231.0], [7.5, 2231.0], [7.6, 2231.0], [7.7, 2231.0], [7.8, 2231.0], [7.9, 2231.0], [8.0, 2236.0], [8.1, 2236.0], [8.2, 2236.0], [8.3, 2236.0], [8.4, 2236.0], [8.5, 2236.0], [8.6, 2236.0], [8.7, 2236.0], [8.8, 2236.0], [8.9, 2236.0], [9.0, 2239.0], [9.1, 2239.0], [9.2, 2239.0], [9.3, 2239.0], [9.4, 2239.0], [9.5, 2239.0], [9.6, 2239.0], [9.7, 2239.0], [9.8, 2239.0], [9.9, 2239.0], [10.0, 2257.0], [10.1, 2257.0], [10.2, 2257.0], [10.3, 2257.0], [10.4, 2257.0], [10.5, 2257.0], [10.6, 2257.0], [10.7, 2257.0], [10.8, 2257.0], [10.9, 2257.0], [11.0, 2282.0], [11.1, 2282.0], [11.2, 2282.0], [11.3, 2282.0], [11.4, 2282.0], [11.5, 2282.0], [11.6, 2282.0], [11.7, 2282.0], [11.8, 2282.0], [11.9, 2282.0], [12.0, 2299.0], [12.1, 2299.0], [12.2, 2299.0], [12.3, 2299.0], [12.4, 2299.0], [12.5, 2299.0], [12.6, 2299.0], [12.7, 2299.0], [12.8, 2299.0], [12.9, 2299.0], [13.0, 2314.0], [13.1, 2314.0], [13.2, 2314.0], [13.3, 2314.0], [13.4, 2314.0], [13.5, 2314.0], [13.6, 2314.0], [13.7, 2314.0], [13.8, 2314.0], [13.9, 2314.0], [14.0, 2330.0], [14.1, 2330.0], [14.2, 2330.0], [14.3, 2330.0], [14.4, 2330.0], [14.5, 2330.0], [14.6, 2330.0], [14.7, 2330.0], [14.8, 2330.0], [14.9, 2330.0], [15.0, 2373.0], [15.1, 2373.0], [15.2, 2373.0], [15.3, 2373.0], [15.4, 2373.0], [15.5, 2373.0], [15.6, 2373.0], [15.7, 2373.0], [15.8, 2373.0], [15.9, 2373.0], [16.0, 2377.0], [16.1, 2377.0], [16.2, 2377.0], [16.3, 2377.0], [16.4, 2377.0], [16.5, 2377.0], [16.6, 2377.0], [16.7, 2377.0], [16.8, 2377.0], [16.9, 2377.0], [17.0, 2395.0], [17.1, 2395.0], [17.2, 2395.0], [17.3, 2395.0], [17.4, 2395.0], [17.5, 2395.0], [17.6, 2395.0], [17.7, 2395.0], [17.8, 2395.0], [17.9, 2395.0], [18.0, 2396.0], [18.1, 2396.0], [18.2, 2396.0], [18.3, 2396.0], [18.4, 2396.0], [18.5, 2396.0], [18.6, 2396.0], [18.7, 2396.0], [18.8, 2396.0], [18.9, 2396.0], [19.0, 2438.0], [19.1, 2438.0], [19.2, 2438.0], [19.3, 2438.0], [19.4, 2438.0], [19.5, 2438.0], [19.6, 2438.0], [19.7, 2438.0], [19.8, 2438.0], [19.9, 2438.0], [20.0, 2446.0], [20.1, 2446.0], [20.2, 2446.0], [20.3, 2446.0], [20.4, 2446.0], [20.5, 2446.0], [20.6, 2446.0], [20.7, 2446.0], [20.8, 2446.0], [20.9, 2446.0], [21.0, 2449.0], [21.1, 2449.0], [21.2, 2449.0], [21.3, 2449.0], [21.4, 2449.0], [21.5, 2449.0], [21.6, 2449.0], [21.7, 2449.0], [21.8, 2449.0], [21.9, 2449.0], [22.0, 2462.0], [22.1, 2462.0], [22.2, 2462.0], [22.3, 2462.0], [22.4, 2462.0], [22.5, 2462.0], [22.6, 2462.0], [22.7, 2462.0], [22.8, 2462.0], [22.9, 2462.0], [23.0, 2477.0], [23.1, 2477.0], [23.2, 2477.0], [23.3, 2477.0], [23.4, 2477.0], [23.5, 2477.0], [23.6, 2477.0], [23.7, 2477.0], [23.8, 2477.0], [23.9, 2477.0], [24.0, 2480.0], [24.1, 2480.0], [24.2, 2480.0], [24.3, 2480.0], [24.4, 2480.0], [24.5, 2480.0], [24.6, 2480.0], [24.7, 2480.0], [24.8, 2480.0], [24.9, 2480.0], [25.0, 2483.0], [25.1, 2483.0], [25.2, 2483.0], [25.3, 2483.0], [25.4, 2483.0], [25.5, 2483.0], [25.6, 2483.0], [25.7, 2483.0], [25.8, 2483.0], [25.9, 2483.0], [26.0, 2513.0], [26.1, 2513.0], [26.2, 2513.0], [26.3, 2513.0], [26.4, 2513.0], [26.5, 2513.0], [26.6, 2513.0], [26.7, 2513.0], [26.8, 2513.0], [26.9, 2513.0], [27.0, 2600.0], [27.1, 2600.0], [27.2, 2600.0], [27.3, 2600.0], [27.4, 2600.0], [27.5, 2600.0], [27.6, 2600.0], [27.7, 2600.0], [27.8, 2600.0], [27.9, 2600.0], [28.0, 2602.0], [28.1, 2602.0], [28.2, 2602.0], [28.3, 2602.0], [28.4, 2602.0], [28.5, 2602.0], [28.6, 2602.0], [28.7, 2602.0], [28.8, 2602.0], [28.9, 2602.0], [29.0, 2614.0], [29.1, 2614.0], [29.2, 2614.0], [29.3, 2614.0], [29.4, 2614.0], [29.5, 2614.0], [29.6, 2614.0], [29.7, 2614.0], [29.8, 2614.0], [29.9, 2614.0], [30.0, 2616.0], [30.1, 2616.0], [30.2, 2616.0], [30.3, 2616.0], [30.4, 2616.0], [30.5, 2616.0], [30.6, 2616.0], [30.7, 2616.0], [30.8, 2616.0], [30.9, 2616.0], [31.0, 2616.0], [31.1, 2616.0], [31.2, 2616.0], [31.3, 2616.0], [31.4, 2616.0], [31.5, 2616.0], [31.6, 2616.0], [31.7, 2616.0], [31.8, 2616.0], [31.9, 2616.0], [32.0, 2618.0], [32.1, 2618.0], [32.2, 2618.0], [32.3, 2618.0], [32.4, 2618.0], [32.5, 2618.0], [32.6, 2618.0], [32.7, 2618.0], [32.8, 2618.0], [32.9, 2618.0], [33.0, 2618.0], [33.1, 2618.0], [33.2, 2618.0], [33.3, 2618.0], [33.4, 2618.0], [33.5, 2618.0], [33.6, 2618.0], [33.7, 2618.0], [33.8, 2618.0], [33.9, 2618.0], [34.0, 2625.0], [34.1, 2625.0], [34.2, 2625.0], [34.3, 2625.0], [34.4, 2625.0], [34.5, 2625.0], [34.6, 2625.0], [34.7, 2625.0], [34.8, 2625.0], [34.9, 2625.0], [35.0, 2633.0], [35.1, 2633.0], [35.2, 2633.0], [35.3, 2633.0], [35.4, 2633.0], [35.5, 2633.0], [35.6, 2633.0], [35.7, 2633.0], [35.8, 2633.0], [35.9, 2633.0], [36.0, 2638.0], [36.1, 2638.0], [36.2, 2638.0], [36.3, 2638.0], [36.4, 2638.0], [36.5, 2638.0], [36.6, 2638.0], [36.7, 2638.0], [36.8, 2638.0], [36.9, 2638.0], [37.0, 2638.0], [37.1, 2638.0], [37.2, 2638.0], [37.3, 2638.0], [37.4, 2638.0], [37.5, 2638.0], [37.6, 2638.0], [37.7, 2638.0], [37.8, 2638.0], [37.9, 2638.0], [38.0, 2643.0], [38.1, 2643.0], [38.2, 2643.0], [38.3, 2643.0], [38.4, 2643.0], [38.5, 2643.0], [38.6, 2643.0], [38.7, 2643.0], [38.8, 2643.0], [38.9, 2643.0], [39.0, 2651.0], [39.1, 2651.0], [39.2, 2651.0], [39.3, 2651.0], [39.4, 2651.0], [39.5, 2651.0], [39.6, 2651.0], [39.7, 2651.0], [39.8, 2651.0], [39.9, 2651.0], [40.0, 2660.0], [40.1, 2660.0], [40.2, 2660.0], [40.3, 2660.0], [40.4, 2660.0], [40.5, 2660.0], [40.6, 2660.0], [40.7, 2660.0], [40.8, 2660.0], [40.9, 2660.0], [41.0, 2716.0], [41.1, 2716.0], [41.2, 2716.0], [41.3, 2716.0], [41.4, 2716.0], [41.5, 2716.0], [41.6, 2716.0], [41.7, 2716.0], [41.8, 2716.0], [41.9, 2716.0], [42.0, 2733.0], [42.1, 2733.0], [42.2, 2733.0], [42.3, 2733.0], [42.4, 2733.0], [42.5, 2733.0], [42.6, 2733.0], [42.7, 2733.0], [42.8, 2733.0], [42.9, 2733.0], [43.0, 2738.0], [43.1, 2738.0], [43.2, 2738.0], [43.3, 2738.0], [43.4, 2738.0], [43.5, 2738.0], [43.6, 2738.0], [43.7, 2738.0], [43.8, 2738.0], [43.9, 2738.0], [44.0, 2747.0], [44.1, 2747.0], [44.2, 2747.0], [44.3, 2747.0], [44.4, 2747.0], [44.5, 2747.0], [44.6, 2747.0], [44.7, 2747.0], [44.8, 2747.0], [44.9, 2747.0], [45.0, 2760.0], [45.1, 2760.0], [45.2, 2760.0], [45.3, 2760.0], [45.4, 2760.0], [45.5, 2760.0], [45.6, 2760.0], [45.7, 2760.0], [45.8, 2760.0], [45.9, 2760.0], [46.0, 2764.0], [46.1, 2764.0], [46.2, 2764.0], [46.3, 2764.0], [46.4, 2764.0], [46.5, 2764.0], [46.6, 2764.0], [46.7, 2764.0], [46.8, 2764.0], [46.9, 2764.0], [47.0, 2772.0], [47.1, 2772.0], [47.2, 2772.0], [47.3, 2772.0], [47.4, 2772.0], [47.5, 2772.0], [47.6, 2772.0], [47.7, 2772.0], [47.8, 2772.0], [47.9, 2772.0], [48.0, 2789.0], [48.1, 2789.0], [48.2, 2789.0], [48.3, 2789.0], [48.4, 2789.0], [48.5, 2789.0], [48.6, 2789.0], [48.7, 2789.0], [48.8, 2789.0], [48.9, 2789.0], [49.0, 2824.0], [49.1, 2824.0], [49.2, 2824.0], [49.3, 2824.0], [49.4, 2824.0], [49.5, 2824.0], [49.6, 2824.0], [49.7, 2824.0], [49.8, 2824.0], [49.9, 2824.0], [50.0, 2835.0], [50.1, 2835.0], [50.2, 2835.0], [50.3, 2835.0], [50.4, 2835.0], [50.5, 2835.0], [50.6, 2835.0], [50.7, 2835.0], [50.8, 2835.0], [50.9, 2835.0], [51.0, 2867.0], [51.1, 2867.0], [51.2, 2867.0], [51.3, 2867.0], [51.4, 2867.0], [51.5, 2867.0], [51.6, 2867.0], [51.7, 2867.0], [51.8, 2867.0], [51.9, 2867.0], [52.0, 2886.0], [52.1, 2886.0], [52.2, 2886.0], [52.3, 2886.0], [52.4, 2886.0], [52.5, 2886.0], [52.6, 2886.0], [52.7, 2886.0], [52.8, 2886.0], [52.9, 2886.0], [53.0, 2890.0], [53.1, 2890.0], [53.2, 2890.0], [53.3, 2890.0], [53.4, 2890.0], [53.5, 2890.0], [53.6, 2890.0], [53.7, 2890.0], [53.8, 2890.0], [53.9, 2890.0], [54.0, 2902.0], [54.1, 2902.0], [54.2, 2902.0], [54.3, 2902.0], [54.4, 2902.0], [54.5, 2902.0], [54.6, 2902.0], [54.7, 2902.0], [54.8, 2902.0], [54.9, 2902.0], [55.0, 2909.0], [55.1, 2909.0], [55.2, 2909.0], [55.3, 2909.0], [55.4, 2909.0], [55.5, 2909.0], [55.6, 2909.0], [55.7, 2909.0], [55.8, 2909.0], [55.9, 2909.0], [56.0, 2917.0], [56.1, 2917.0], [56.2, 2917.0], [56.3, 2917.0], [56.4, 2917.0], [56.5, 2917.0], [56.6, 2917.0], [56.7, 2917.0], [56.8, 2917.0], [56.9, 2917.0], [57.0, 2963.0], [57.1, 2963.0], [57.2, 2963.0], [57.3, 2963.0], [57.4, 2963.0], [57.5, 2963.0], [57.6, 2963.0], [57.7, 2963.0], [57.8, 2963.0], [57.9, 2963.0], [58.0, 2966.0], [58.1, 2966.0], [58.2, 2966.0], [58.3, 2966.0], [58.4, 2966.0], [58.5, 2966.0], [58.6, 2966.0], [58.7, 2966.0], [58.8, 2966.0], [58.9, 2966.0], [59.0, 2967.0], [59.1, 2967.0], [59.2, 2967.0], [59.3, 2967.0], [59.4, 2967.0], [59.5, 2967.0], [59.6, 2967.0], [59.7, 2967.0], [59.8, 2967.0], [59.9, 2967.0], [60.0, 2972.0], [60.1, 2972.0], [60.2, 2972.0], [60.3, 2972.0], [60.4, 2972.0], [60.5, 2972.0], [60.6, 2972.0], [60.7, 2972.0], [60.8, 2972.0], [60.9, 2972.0], [61.0, 2974.0], [61.1, 2974.0], [61.2, 2974.0], [61.3, 2974.0], [61.4, 2974.0], [61.5, 2974.0], [61.6, 2974.0], [61.7, 2974.0], [61.8, 2974.0], [61.9, 2974.0], [62.0, 2975.0], [62.1, 2975.0], [62.2, 2975.0], [62.3, 2975.0], [62.4, 2975.0], [62.5, 2975.0], [62.6, 2975.0], [62.7, 2975.0], [62.8, 2975.0], [62.9, 2975.0], [63.0, 2995.0], [63.1, 2995.0], [63.2, 2995.0], [63.3, 2995.0], [63.4, 2995.0], [63.5, 2995.0], [63.6, 2995.0], [63.7, 2995.0], [63.8, 2995.0], [63.9, 2995.0], [64.0, 3001.0], [64.1, 3001.0], [64.2, 3001.0], [64.3, 3001.0], [64.4, 3001.0], [64.5, 3001.0], [64.6, 3001.0], [64.7, 3001.0], [64.8, 3001.0], [64.9, 3001.0], [65.0, 3008.0], [65.1, 3008.0], [65.2, 3008.0], [65.3, 3008.0], [65.4, 3008.0], [65.5, 3008.0], [65.6, 3008.0], [65.7, 3008.0], [65.8, 3008.0], [65.9, 3008.0], [66.0, 3029.0], [66.1, 3029.0], [66.2, 3029.0], [66.3, 3029.0], [66.4, 3029.0], [66.5, 3029.0], [66.6, 3029.0], [66.7, 3029.0], [66.8, 3029.0], [66.9, 3029.0], [67.0, 3079.0], [67.1, 3079.0], [67.2, 3079.0], [67.3, 3079.0], [67.4, 3079.0], [67.5, 3079.0], [67.6, 3079.0], [67.7, 3079.0], [67.8, 3079.0], [67.9, 3079.0], [68.0, 3102.0], [68.1, 3102.0], [68.2, 3102.0], [68.3, 3102.0], [68.4, 3102.0], [68.5, 3102.0], [68.6, 3102.0], [68.7, 3102.0], [68.8, 3102.0], [68.9, 3102.0], [69.0, 3102.0], [69.1, 3102.0], [69.2, 3102.0], [69.3, 3102.0], [69.4, 3102.0], [69.5, 3102.0], [69.6, 3102.0], [69.7, 3102.0], [69.8, 3102.0], [69.9, 3102.0], [70.0, 3115.0], [70.1, 3115.0], [70.2, 3115.0], [70.3, 3115.0], [70.4, 3115.0], [70.5, 3115.0], [70.6, 3115.0], [70.7, 3115.0], [70.8, 3115.0], [70.9, 3115.0], [71.0, 3131.0], [71.1, 3131.0], [71.2, 3131.0], [71.3, 3131.0], [71.4, 3131.0], [71.5, 3131.0], [71.6, 3131.0], [71.7, 3131.0], [71.8, 3131.0], [71.9, 3131.0], [72.0, 3133.0], [72.1, 3133.0], [72.2, 3133.0], [72.3, 3133.0], [72.4, 3133.0], [72.5, 3133.0], [72.6, 3133.0], [72.7, 3133.0], [72.8, 3133.0], [72.9, 3133.0], [73.0, 3138.0], [73.1, 3138.0], [73.2, 3138.0], [73.3, 3138.0], [73.4, 3138.0], [73.5, 3138.0], [73.6, 3138.0], [73.7, 3138.0], [73.8, 3138.0], [73.9, 3138.0], [74.0, 3184.0], [74.1, 3184.0], [74.2, 3184.0], [74.3, 3184.0], [74.4, 3184.0], [74.5, 3184.0], [74.6, 3184.0], [74.7, 3184.0], [74.8, 3184.0], [74.9, 3184.0], [75.0, 3187.0], [75.1, 3187.0], [75.2, 3187.0], [75.3, 3187.0], [75.4, 3187.0], [75.5, 3187.0], [75.6, 3187.0], [75.7, 3187.0], [75.8, 3187.0], [75.9, 3187.0], [76.0, 3196.0], [76.1, 3196.0], [76.2, 3196.0], [76.3, 3196.0], [76.4, 3196.0], [76.5, 3196.0], [76.6, 3196.0], [76.7, 3196.0], [76.8, 3196.0], [76.9, 3196.0], [77.0, 3196.0], [77.1, 3196.0], [77.2, 3196.0], [77.3, 3196.0], [77.4, 3196.0], [77.5, 3196.0], [77.6, 3196.0], [77.7, 3196.0], [77.8, 3196.0], [77.9, 3196.0], [78.0, 3197.0], [78.1, 3197.0], [78.2, 3197.0], [78.3, 3197.0], [78.4, 3197.0], [78.5, 3197.0], [78.6, 3197.0], [78.7, 3197.0], [78.8, 3197.0], [78.9, 3197.0], [79.0, 3207.0], [79.1, 3207.0], [79.2, 3207.0], [79.3, 3207.0], [79.4, 3207.0], [79.5, 3207.0], [79.6, 3207.0], [79.7, 3207.0], [79.8, 3207.0], [79.9, 3207.0], [80.0, 3208.0], [80.1, 3208.0], [80.2, 3208.0], [80.3, 3208.0], [80.4, 3208.0], [80.5, 3208.0], [80.6, 3208.0], [80.7, 3208.0], [80.8, 3208.0], [80.9, 3208.0], [81.0, 3214.0], [81.1, 3214.0], [81.2, 3214.0], [81.3, 3214.0], [81.4, 3214.0], [81.5, 3214.0], [81.6, 3214.0], [81.7, 3214.0], [81.8, 3214.0], [81.9, 3214.0], [82.0, 3231.0], [82.1, 3231.0], [82.2, 3231.0], [82.3, 3231.0], [82.4, 3231.0], [82.5, 3231.0], [82.6, 3231.0], [82.7, 3231.0], [82.8, 3231.0], [82.9, 3231.0], [83.0, 3238.0], [83.1, 3238.0], [83.2, 3238.0], [83.3, 3238.0], [83.4, 3238.0], [83.5, 3238.0], [83.6, 3238.0], [83.7, 3238.0], [83.8, 3238.0], [83.9, 3238.0], [84.0, 3264.0], [84.1, 3264.0], [84.2, 3264.0], [84.3, 3264.0], [84.4, 3264.0], [84.5, 3264.0], [84.6, 3264.0], [84.7, 3264.0], [84.8, 3264.0], [84.9, 3264.0], [85.0, 3265.0], [85.1, 3265.0], [85.2, 3265.0], [85.3, 3265.0], [85.4, 3265.0], [85.5, 3265.0], [85.6, 3265.0], [85.7, 3265.0], [85.8, 3265.0], [85.9, 3265.0], [86.0, 3287.0], [86.1, 3287.0], [86.2, 3287.0], [86.3, 3287.0], [86.4, 3287.0], [86.5, 3287.0], [86.6, 3287.0], [86.7, 3287.0], [86.8, 3287.0], [86.9, 3287.0], [87.0, 3302.0], [87.1, 3302.0], [87.2, 3302.0], [87.3, 3302.0], [87.4, 3302.0], [87.5, 3302.0], [87.6, 3302.0], [87.7, 3302.0], [87.8, 3302.0], [87.9, 3302.0], [88.0, 3308.0], [88.1, 3308.0], [88.2, 3308.0], [88.3, 3308.0], [88.4, 3308.0], [88.5, 3308.0], [88.6, 3308.0], [88.7, 3308.0], [88.8, 3308.0], [88.9, 3308.0], [89.0, 3357.0], [89.1, 3357.0], [89.2, 3357.0], [89.3, 3357.0], [89.4, 3357.0], [89.5, 3357.0], [89.6, 3357.0], [89.7, 3357.0], [89.8, 3357.0], [89.9, 3357.0], [90.0, 3380.0], [90.1, 3380.0], [90.2, 3380.0], [90.3, 3380.0], [90.4, 3380.0], [90.5, 3380.0], [90.6, 3380.0], [90.7, 3380.0], [90.8, 3380.0], [90.9, 3380.0], [91.0, 3409.0], [91.1, 3409.0], [91.2, 3409.0], [91.3, 3409.0], [91.4, 3409.0], [91.5, 3409.0], [91.6, 3409.0], [91.7, 3409.0], [91.8, 3409.0], [91.9, 3409.0], [92.0, 3435.0], [92.1, 3435.0], [92.2, 3435.0], [92.3, 3435.0], [92.4, 3435.0], [92.5, 3435.0], [92.6, 3435.0], [92.7, 3435.0], [92.8, 3435.0], [92.9, 3435.0], [93.0, 3443.0], [93.1, 3443.0], [93.2, 3443.0], [93.3, 3443.0], [93.4, 3443.0], [93.5, 3443.0], [93.6, 3443.0], [93.7, 3443.0], [93.8, 3443.0], [93.9, 3443.0], [94.0, 3476.0], [94.1, 3476.0], [94.2, 3476.0], [94.3, 3476.0], [94.4, 3476.0], [94.5, 3476.0], [94.6, 3476.0], [94.7, 3476.0], [94.8, 3476.0], [94.9, 3476.0], [95.0, 3480.0], [95.1, 3480.0], [95.2, 3480.0], [95.3, 3480.0], [95.4, 3480.0], [95.5, 3480.0], [95.6, 3480.0], [95.7, 3480.0], [95.8, 3480.0], [95.9, 3480.0], [96.0, 3482.0], [96.1, 3482.0], [96.2, 3482.0], [96.3, 3482.0], [96.4, 3482.0], [96.5, 3482.0], [96.6, 3482.0], [96.7, 3482.0], [96.8, 3482.0], [96.9, 3482.0], [97.0, 3484.0], [97.1, 3484.0], [97.2, 3484.0], [97.3, 3484.0], [97.4, 3484.0], [97.5, 3484.0], [97.6, 3484.0], [97.7, 3484.0], [97.8, 3484.0], [97.9, 3484.0], [98.0, 3486.0], [98.1, 3486.0], [98.2, 3486.0], [98.3, 3486.0], [98.4, 3486.0], [98.5, 3486.0], [98.6, 3486.0], [98.7, 3486.0], [98.8, 3486.0], [98.9, 3486.0], [99.0, 3490.0], [99.1, 3490.0], [99.2, 3490.0], [99.3, 3490.0], [99.4, 3490.0], [99.5, 3490.0], [99.6, 3490.0], [99.7, 3490.0], [99.8, 3490.0], [99.9, 3490.0]], "isOverall": false, "label": "HTTP Request", "isController": false}], "supportsControllersDiscrimination": true, "maxX": 100.0, "title": "Response Time Percentiles"}},
        getOptions: function() {
            return {
                series: {
                    points: { show: false }
                },
                legend: {
                    noColumns: 2,
                    show: true,
                    container: '#legendResponseTimePercentiles'
                },
                xaxis: {
                    tickDecimals: 1,
                    axisLabel: "Percentiles",
                    axisLabelUseCanvas: true,
                    axisLabelFontSizePixels: 12,
                    axisLabelFontFamily: 'Verdana, Arial',
                    axisLabelPadding: 20,
                },
                yaxis: {
                    axisLabel: "Percentile value in ms",
                    axisLabelUseCanvas: true,
                    axisLabelFontSizePixels: 12,
                    axisLabelFontFamily: 'Verdana, Arial',
                    axisLabelPadding: 20
                },
                grid: {
                    hoverable: true // IMPORTANT! this is needed for tooltip to
                                    // work
                },
                tooltip: true,
                tooltipOpts: {
                    content: "%s : %x.2 percentile was %y ms"
                },
                selection: { mode: "xy" },
            };
        },
        createGraph: function() {
            var data = this.data;
            var dataset = prepareData(data.result.series, $("#choicesResponseTimePercentiles"));
            var options = this.getOptions();
            prepareOptions(options, data);
            $.plot($("#flotResponseTimesPercentiles"), dataset, options);
            // setup overview
            $.plot($("#overviewResponseTimesPercentiles"), dataset, prepareOverviewOptions(options));
        }
};

/**
 * @param elementId Id of element where we display message
 */
function setEmptyGraph(elementId) {
    $(function() {
        $(elementId).text("No graph series with filter="+seriesFilter);
    });
}

// Response times percentiles
function refreshResponseTimePercentiles() {
    var infos = responseTimePercentilesInfos;
    prepareSeries(infos.data);
    if(infos.data.result.series.length == 0) {
        setEmptyGraph("#bodyResponseTimePercentiles");
        return;
    }
    if (isGraph($("#flotResponseTimesPercentiles"))){
        infos.createGraph();
    } else {
        var choiceContainer = $("#choicesResponseTimePercentiles");
        createLegend(choiceContainer, infos);
        infos.createGraph();
        setGraphZoomable("#flotResponseTimesPercentiles", "#overviewResponseTimesPercentiles");
        $('#bodyResponseTimePercentiles .legendColorBox > div').each(function(i){
            $(this).clone().prependTo(choiceContainer.find("li").eq(i));
        });
    }
}

var responseTimeDistributionInfos = {
        data: {"result": {"minY": 1.0, "minX": 1900.0, "maxY": 14.0, "series": [{"data": [[2100.0, 3.0], [2200.0, 6.0], [2300.0, 6.0], [2400.0, 7.0], [2500.0, 1.0], [2600.0, 14.0], [2700.0, 8.0], [2800.0, 5.0], [2900.0, 10.0], [3000.0, 4.0], [3100.0, 11.0], [3200.0, 8.0], [3300.0, 4.0], [3400.0, 9.0], [1900.0, 3.0], [2000.0, 1.0]], "isOverall": false, "label": "HTTP Request", "isController": false}], "supportsControllersDiscrimination": true, "granularity": 100, "maxX": 3400.0, "title": "Response Time Distribution"}},
        getOptions: function() {
            var granularity = this.data.result.granularity;
            return {
                legend: {
                    noColumns: 2,
                    show: true,
                    container: '#legendResponseTimeDistribution'
                },
                xaxis:{
                    axisLabel: "Response times in ms",
                    axisLabelUseCanvas: true,
                    axisLabelFontSizePixels: 12,
                    axisLabelFontFamily: 'Verdana, Arial',
                    axisLabelPadding: 20,
                },
                yaxis: {
                    axisLabel: "Number of responses",
                    axisLabelUseCanvas: true,
                    axisLabelFontSizePixels: 12,
                    axisLabelFontFamily: 'Verdana, Arial',
                    axisLabelPadding: 20,
                },
                bars : {
                    show: true,
                    barWidth: this.data.result.granularity
                },
                grid: {
                    hoverable: true // IMPORTANT! this is needed for tooltip to
                                    // work
                },
                tooltip: true,
                tooltipOpts: {
                    content: function(label, xval, yval, flotItem){
                        return yval + " responses for " + label + " were between " + xval + " and " + (xval + granularity) + " ms";
                    }
                }
            };
        },
        createGraph: function() {
            var data = this.data;
            var options = this.getOptions();
            prepareOptions(options, data);
            $.plot($("#flotResponseTimeDistribution"), prepareData(data.result.series, $("#choicesResponseTimeDistribution")), options);
        }

};

// Response time distribution
function refreshResponseTimeDistribution() {
    var infos = responseTimeDistributionInfos;
    prepareSeries(infos.data);
    if(infos.data.result.series.length == 0) {
        setEmptyGraph("#bodyResponseTimeDistribution");
        return;
    }
    if (isGraph($("#flotResponseTimeDistribution"))){
        infos.createGraph();
    }else{
        var choiceContainer = $("#choicesResponseTimeDistribution");
        createLegend(choiceContainer, infos);
        infos.createGraph();
        $('#footerResponseTimeDistribution .legendColorBox > div').each(function(i){
            $(this).clone().prependTo(choiceContainer.find("li").eq(i));
        });
    }
};


var syntheticResponseTimeDistributionInfos = {
        data: {"result": {"minY": 100.0, "minX": 3.0, "ticks": [[0, "Requests having \nresponse time <= 500ms"], [1, "Requests having \nresponse time > 500ms and <= 1,500ms"], [2, "Requests having \nresponse time > 1,500ms"], [3, "Requests in error"]], "maxY": 100.0, "series": [{"data": [], "color": "#9ACD32", "isOverall": false, "label": "Requests having \nresponse time <= 500ms", "isController": false}, {"data": [], "color": "yellow", "isOverall": false, "label": "Requests having \nresponse time > 500ms and <= 1,500ms", "isController": false}, {"data": [], "color": "orange", "isOverall": false, "label": "Requests having \nresponse time > 1,500ms", "isController": false}, {"data": [[3.0, 100.0]], "color": "#FF6347", "isOverall": false, "label": "Requests in error", "isController": false}], "supportsControllersDiscrimination": false, "maxX": 3.0, "title": "Synthetic Response Times Distribution"}},
        getOptions: function() {
            return {
                legend: {
                    noColumns: 2,
                    show: true,
                    container: '#legendSyntheticResponseTimeDistribution'
                },
                xaxis:{
                    axisLabel: "Response times ranges",
                    axisLabelUseCanvas: true,
                    axisLabelFontSizePixels: 12,
                    axisLabelFontFamily: 'Verdana, Arial',
                    axisLabelPadding: 20,
                    tickLength:0,
                    min:-0.5,
                    max:3.5
                },
                yaxis: {
                    axisLabel: "Number of responses",
                    axisLabelUseCanvas: true,
                    axisLabelFontSizePixels: 12,
                    axisLabelFontFamily: 'Verdana, Arial',
                    axisLabelPadding: 20,
                },
                bars : {
                    show: true,
                    align: "center",
                    barWidth: 0.25,
                    fill:.75
                },
                grid: {
                    hoverable: true // IMPORTANT! this is needed for tooltip to
                                    // work
                },
                tooltip: true,
                tooltipOpts: {
                    content: function(label, xval, yval, flotItem){
                        return yval + " " + label;
                    }
                }
            };
        },
        createGraph: function() {
            var data = this.data;
            var options = this.getOptions();
            prepareOptions(options, data);
            options.xaxis.ticks = data.result.ticks;
            $.plot($("#flotSyntheticResponseTimeDistribution"), prepareData(data.result.series, $("#choicesSyntheticResponseTimeDistribution")), options);
        }

};

// Response time distribution
function refreshSyntheticResponseTimeDistribution() {
    var infos = syntheticResponseTimeDistributionInfos;
    prepareSeries(infos.data, true);
    if (isGraph($("#flotSyntheticResponseTimeDistribution"))){
        infos.createGraph();
    }else{
        var choiceContainer = $("#choicesSyntheticResponseTimeDistribution");
        createLegend(choiceContainer, infos);
        infos.createGraph();
        $('#footerSyntheticResponseTimeDistribution .legendColorBox > div').each(function(i){
            $(this).clone().prependTo(choiceContainer.find("li").eq(i));
        });
    }
};

var activeThreadsOverTimeInfos = {
        data: {"result": {"minY": 53.51999999999998, "minX": 1.55978676E12, "maxY": 53.51999999999998, "series": [{"data": [[1.55978676E12, 53.51999999999998]], "isOverall": false, "label": "Job Offers", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 60000, "maxX": 1.55978676E12, "title": "Active Threads Over Time"}},
        getOptions: function() {
            return {
                series: {
                    stack: true,
                    lines: {
                        show: true,
                        fill: true
                    },
                    points: {
                        show: true
                    }
                },
                xaxis: {
                    mode: "time",
                    timeformat: getTimeFormat(this.data.result.granularity),
                    axisLabel: getElapsedTimeLabel(this.data.result.granularity),
                    axisLabelUseCanvas: true,
                    axisLabelFontSizePixels: 12,
                    axisLabelFontFamily: 'Verdana, Arial',
                    axisLabelPadding: 20,
                },
                yaxis: {
                    axisLabel: "Number of active threads",
                    axisLabelUseCanvas: true,
                    axisLabelFontSizePixels: 12,
                    axisLabelFontFamily: 'Verdana, Arial',
                    axisLabelPadding: 20
                },
                legend: {
                    noColumns: 6,
                    show: true,
                    container: '#legendActiveThreadsOverTime'
                },
                grid: {
                    hoverable: true // IMPORTANT! this is needed for tooltip to
                                    // work
                },
                selection: {
                    mode: 'xy'
                },
                tooltip: true,
                tooltipOpts: {
                    content: "%s : At %x there were %y active threads"
                }
            };
        },
        createGraph: function() {
            var data = this.data;
            var dataset = prepareData(data.result.series, $("#choicesActiveThreadsOverTime"));
            var options = this.getOptions();
            prepareOptions(options, data);
            $.plot($("#flotActiveThreadsOverTime"), dataset, options);
            // setup overview
            $.plot($("#overviewActiveThreadsOverTime"), dataset, prepareOverviewOptions(options));
        }
};

// Active Threads Over Time
function refreshActiveThreadsOverTime(fixTimestamps) {
    var infos = activeThreadsOverTimeInfos;
    prepareSeries(infos.data);
    if(fixTimestamps) {
        fixTimeStamps(infos.data.result.series, 0);
    }
    if(isGraph($("#flotActiveThreadsOverTime"))) {
        infos.createGraph();
    }else{
        var choiceContainer = $("#choicesActiveThreadsOverTime");
        createLegend(choiceContainer, infos);
        infos.createGraph();
        setGraphZoomable("#flotActiveThreadsOverTime", "#overviewActiveThreadsOverTime");
        $('#footerActiveThreadsOverTime .legendColorBox > div').each(function(i){
            $(this).clone().prependTo(choiceContainer.find("li").eq(i));
        });
    }
};

var timeVsThreadsInfos = {
        data: {"result": {"minY": 2132.0, "minX": 13.0, "maxY": 3443.0, "series": [{"data": [[13.0, 3282.7692307692305], [14.0, 3380.0], [15.0, 3079.0], [16.0, 3443.0], [17.0, 3435.0], [18.0, 3287.0], [19.0, 3357.0], [20.0, 2974.0], [21.0, 3264.0], [22.0, 2890.0], [23.0, 2835.0], [24.0, 2975.0], [25.0, 2618.0], [26.0, 2600.0], [27.0, 2902.0], [28.0, 2824.0], [29.0, 3308.0], [31.0, 3190.0], [32.0, 3008.0], [35.0, 3190.3333333333335], [37.0, 3214.0], [36.0, 3197.0], [39.0, 3196.0], [38.0, 3207.0], [45.0, 2995.0], [44.0, 2933.8], [47.0, 3138.0], [46.0, 3029.0], [49.0, 2395.0], [48.0, 3133.0], [51.0, 3001.0], [50.0, 3102.0], [53.0, 2633.0], [52.0, 2446.0], [59.0, 2794.833333333333], [61.0, 2618.0], [60.0, 2477.0], [63.0, 2638.0], [62.0, 2196.0], [67.0, 2886.0], [66.0, 2625.0], [65.0, 2909.0], [64.0, 2513.0], [71.0, 2132.0], [70.0, 2867.0], [69.0, 2438.0], [68.0, 2135.0], [74.0, 2789.0], [73.0, 2462.0], [72.0, 2660.0], [80.0, 2429.8], [86.0, 2314.0], [88.0, 2747.0], [96.0, 2738.0], [100.0, 2359.611111111111]], "isOverall": false, "label": "HTTP Request", "isController": false}, {"data": [[53.51999999999998, 2816.9599999999996]], "isOverall": false, "label": "HTTP Request-Aggregated", "isController": false}], "supportsControllersDiscrimination": true, "maxX": 100.0, "title": "Time VS Threads"}},
        getOptions: function() {
            return {
                series: {
                    lines: {
                        show: true
                    },
                    points: {
                        show: true
                    }
                },
                xaxis: {
                    axisLabel: "Number of active threads",
                    axisLabelUseCanvas: true,
                    axisLabelFontSizePixels: 12,
                    axisLabelFontFamily: 'Verdana, Arial',
                    axisLabelPadding: 20,
                },
                yaxis: {
                    axisLabel: "Average response times in ms",
                    axisLabelUseCanvas: true,
                    axisLabelFontSizePixels: 12,
                    axisLabelFontFamily: 'Verdana, Arial',
                    axisLabelPadding: 20
                },
                legend: { noColumns: 2,show: true, container: '#legendTimeVsThreads' },
                selection: {
                    mode: 'xy'
                },
                grid: {
                    hoverable: true // IMPORTANT! this is needed for tooltip to work
                },
                tooltip: true,
                tooltipOpts: {
                    content: "%s: At %x.2 active threads, Average response time was %y.2 ms"
                }
            };
        },
        createGraph: function() {
            var data = this.data;
            var dataset = prepareData(data.result.series, $("#choicesTimeVsThreads"));
            var options = this.getOptions();
            prepareOptions(options, data);
            $.plot($("#flotTimesVsThreads"), dataset, options);
            // setup overview
            $.plot($("#overviewTimesVsThreads"), dataset, prepareOverviewOptions(options));
        }
};

// Time vs threads
function refreshTimeVsThreads(){
    var infos = timeVsThreadsInfos;
    prepareSeries(infos.data);
    if(infos.data.result.series.length == 0) {
        setEmptyGraph("#bodyTimeVsThreads");
        return;
    }
    if(isGraph($("#flotTimesVsThreads"))){
        infos.createGraph();
    }else{
        var choiceContainer = $("#choicesTimeVsThreads");
        createLegend(choiceContainer, infos);
        infos.createGraph();
        setGraphZoomable("#flotTimesVsThreads", "#overviewTimesVsThreads");
        $('#footerTimeVsThreads .legendColorBox > div').each(function(i){
            $(this).clone().prependTo(choiceContainer.find("li").eq(i));
        });
    }
};

var bytesThroughputOverTimeInfos = {
        data : {"result": {"minY": 220.0, "minX": 1.55978676E12, "maxY": 891.6666666666666, "series": [{"data": [[1.55978676E12, 891.6666666666666]], "isOverall": false, "label": "Bytes received per second", "isController": false}, {"data": [[1.55978676E12, 220.0]], "isOverall": false, "label": "Bytes sent per second", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 60000, "maxX": 1.55978676E12, "title": "Bytes Throughput Over Time"}},
        getOptions : function(){
            return {
                series: {
                    lines: {
                        show: true
                    },
                    points: {
                        show: true
                    }
                },
                xaxis: {
                    mode: "time",
                    timeformat: getTimeFormat(this.data.result.granularity),
                    axisLabel: getElapsedTimeLabel(this.data.result.granularity) ,
                    axisLabelUseCanvas: true,
                    axisLabelFontSizePixels: 12,
                    axisLabelFontFamily: 'Verdana, Arial',
                    axisLabelPadding: 20,
                },
                yaxis: {
                    axisLabel: "Bytes / sec",
                    axisLabelUseCanvas: true,
                    axisLabelFontSizePixels: 12,
                    axisLabelFontFamily: 'Verdana, Arial',
                    axisLabelPadding: 20,
                },
                legend: {
                    noColumns: 2,
                    show: true,
                    container: '#legendBytesThroughputOverTime'
                },
                selection: {
                    mode: "xy"
                },
                grid: {
                    hoverable: true // IMPORTANT! this is needed for tooltip to
                                    // work
                },
                tooltip: true,
                tooltipOpts: {
                    content: "%s at %x was %y"
                }
            };
        },
        createGraph : function() {
            var data = this.data;
            var dataset = prepareData(data.result.series, $("#choicesBytesThroughputOverTime"));
            var options = this.getOptions();
            prepareOptions(options, data);
            $.plot($("#flotBytesThroughputOverTime"), dataset, options);
            // setup overview
            $.plot($("#overviewBytesThroughputOverTime"), dataset, prepareOverviewOptions(options));
        }
};

// Bytes throughput Over Time
function refreshBytesThroughputOverTime(fixTimestamps) {
    var infos = bytesThroughputOverTimeInfos;
    prepareSeries(infos.data);
    if(fixTimestamps) {
        fixTimeStamps(infos.data.result.series, 0);
    }
    if(isGraph($("#flotBytesThroughputOverTime"))){
        infos.createGraph();
    }else{
        var choiceContainer = $("#choicesBytesThroughputOverTime");
        createLegend(choiceContainer, infos);
        infos.createGraph();
        setGraphZoomable("#flotBytesThroughputOverTime", "#overviewBytesThroughputOverTime");
        $('#footerBytesThroughputOverTime .legendColorBox > div').each(function(i){
            $(this).clone().prependTo(choiceContainer.find("li").eq(i));
        });
    }
}

var responseTimesOverTimeInfos = {
        data: {"result": {"minY": 2816.9599999999996, "minX": 1.55978676E12, "maxY": 2816.9599999999996, "series": [{"data": [[1.55978676E12, 2816.9599999999996]], "isOverall": false, "label": "HTTP Request", "isController": false}], "supportsControllersDiscrimination": true, "granularity": 60000, "maxX": 1.55978676E12, "title": "Response Time Over Time"}},
        getOptions: function(){
            return {
                series: {
                    lines: {
                        show: true
                    },
                    points: {
                        show: true
                    }
                },
                xaxis: {
                    mode: "time",
                    timeformat: getTimeFormat(this.data.result.granularity),
                    axisLabel: getElapsedTimeLabel(this.data.result.granularity),
                    axisLabelUseCanvas: true,
                    axisLabelFontSizePixels: 12,
                    axisLabelFontFamily: 'Verdana, Arial',
                    axisLabelPadding: 20,
                },
                yaxis: {
                    axisLabel: "Average response time in ms",
                    axisLabelUseCanvas: true,
                    axisLabelFontSizePixels: 12,
                    axisLabelFontFamily: 'Verdana, Arial',
                    axisLabelPadding: 20,
                },
                legend: {
                    noColumns: 2,
                    show: true,
                    container: '#legendResponseTimesOverTime'
                },
                selection: {
                    mode: 'xy'
                },
                grid: {
                    hoverable: true // IMPORTANT! this is needed for tooltip to
                                    // work
                },
                tooltip: true,
                tooltipOpts: {
                    content: "%s : at %x Average response time was %y ms"
                }
            };
        },
        createGraph: function() {
            var data = this.data;
            var dataset = prepareData(data.result.series, $("#choicesResponseTimesOverTime"));
            var options = this.getOptions();
            prepareOptions(options, data);
            $.plot($("#flotResponseTimesOverTime"), dataset, options);
            // setup overview
            $.plot($("#overviewResponseTimesOverTime"), dataset, prepareOverviewOptions(options));
        }
};

// Response Times Over Time
function refreshResponseTimeOverTime(fixTimestamps) {
    var infos = responseTimesOverTimeInfos;
    prepareSeries(infos.data);
    if(infos.data.result.series.length == 0) {
        setEmptyGraph("#bodyResponseTimeOverTime");
        return;
    }
    if(fixTimestamps) {
        fixTimeStamps(infos.data.result.series, 0);
    }
    if(isGraph($("#flotResponseTimesOverTime"))){
        infos.createGraph();
    }else{
        var choiceContainer = $("#choicesResponseTimesOverTime");
        createLegend(choiceContainer, infos);
        infos.createGraph();
        setGraphZoomable("#flotResponseTimesOverTime", "#overviewResponseTimesOverTime");
        $('#footerResponseTimesOverTime .legendColorBox > div').each(function(i){
            $(this).clone().prependTo(choiceContainer.find("li").eq(i));
        });
    }
};

var latenciesOverTimeInfos = {
        data: {"result": {"minY": 2763.7999999999984, "minX": 1.55978676E12, "maxY": 2763.7999999999984, "series": [{"data": [[1.55978676E12, 2763.7999999999984]], "isOverall": false, "label": "HTTP Request", "isController": false}], "supportsControllersDiscrimination": true, "granularity": 60000, "maxX": 1.55978676E12, "title": "Latencies Over Time"}},
        getOptions: function() {
            return {
                series: {
                    lines: {
                        show: true
                    },
                    points: {
                        show: true
                    }
                },
                xaxis: {
                    mode: "time",
                    timeformat: getTimeFormat(this.data.result.granularity),
                    axisLabel: getElapsedTimeLabel(this.data.result.granularity),
                    axisLabelUseCanvas: true,
                    axisLabelFontSizePixels: 12,
                    axisLabelFontFamily: 'Verdana, Arial',
                    axisLabelPadding: 20,
                },
                yaxis: {
                    axisLabel: "Average response latencies in ms",
                    axisLabelUseCanvas: true,
                    axisLabelFontSizePixels: 12,
                    axisLabelFontFamily: 'Verdana, Arial',
                    axisLabelPadding: 20,
                },
                legend: {
                    noColumns: 2,
                    show: true,
                    container: '#legendLatenciesOverTime'
                },
                selection: {
                    mode: 'xy'
                },
                grid: {
                    hoverable: true // IMPORTANT! this is needed for tooltip to
                                    // work
                },
                tooltip: true,
                tooltipOpts: {
                    content: "%s : at %x Average latency was %y ms"
                }
            };
        },
        createGraph: function () {
            var data = this.data;
            var dataset = prepareData(data.result.series, $("#choicesLatenciesOverTime"));
            var options = this.getOptions();
            prepareOptions(options, data);
            $.plot($("#flotLatenciesOverTime"), dataset, options);
            // setup overview
            $.plot($("#overviewLatenciesOverTime"), dataset, prepareOverviewOptions(options));
        }
};

// Latencies Over Time
function refreshLatenciesOverTime(fixTimestamps) {
    var infos = latenciesOverTimeInfos;
    prepareSeries(infos.data);
    if(infos.data.result.series.length == 0) {
        setEmptyGraph("#bodyLatenciesOverTime");
        return;
    }
    if(fixTimestamps) {
        fixTimeStamps(infos.data.result.series, 0);
    }
    if(isGraph($("#flotLatenciesOverTime"))) {
        infos.createGraph();
    }else {
        var choiceContainer = $("#choicesLatenciesOverTime");
        createLegend(choiceContainer, infos);
        infos.createGraph();
        setGraphZoomable("#flotLatenciesOverTime", "#overviewLatenciesOverTime");
        $('#footerLatenciesOverTime .legendColorBox > div').each(function(i){
            $(this).clone().prependTo(choiceContainer.find("li").eq(i));
        });
    }
};

var connectTimeOverTimeInfos = {
        data: {"result": {"minY": 59.54999999999998, "minX": 1.55978676E12, "maxY": 59.54999999999998, "series": [{"data": [[1.55978676E12, 59.54999999999998]], "isOverall": false, "label": "HTTP Request", "isController": false}], "supportsControllersDiscrimination": true, "granularity": 60000, "maxX": 1.55978676E12, "title": "Connect Time Over Time"}},
        getOptions: function() {
            return {
                series: {
                    lines: {
                        show: true
                    },
                    points: {
                        show: true
                    }
                },
                xaxis: {
                    mode: "time",
                    timeformat: getTimeFormat(this.data.result.granularity),
                    axisLabel: getConnectTimeLabel(this.data.result.granularity),
                    axisLabelUseCanvas: true,
                    axisLabelFontSizePixels: 12,
                    axisLabelFontFamily: 'Verdana, Arial',
                    axisLabelPadding: 20,
                },
                yaxis: {
                    axisLabel: "Average Connect Time in ms",
                    axisLabelUseCanvas: true,
                    axisLabelFontSizePixels: 12,
                    axisLabelFontFamily: 'Verdana, Arial',
                    axisLabelPadding: 20,
                },
                legend: {
                    noColumns: 2,
                    show: true,
                    container: '#legendConnectTimeOverTime'
                },
                selection: {
                    mode: 'xy'
                },
                grid: {
                    hoverable: true // IMPORTANT! this is needed for tooltip to
                                    // work
                },
                tooltip: true,
                tooltipOpts: {
                    content: "%s : at %x Average connect time was %y ms"
                }
            };
        },
        createGraph: function () {
            var data = this.data;
            var dataset = prepareData(data.result.series, $("#choicesConnectTimeOverTime"));
            var options = this.getOptions();
            prepareOptions(options, data);
            $.plot($("#flotConnectTimeOverTime"), dataset, options);
            // setup overview
            $.plot($("#overviewConnectTimeOverTime"), dataset, prepareOverviewOptions(options));
        }
};

// Connect Time Over Time
function refreshConnectTimeOverTime(fixTimestamps) {
    var infos = connectTimeOverTimeInfos;
    prepareSeries(infos.data);
    if(infos.data.result.series.length == 0) {
        setEmptyGraph("#bodyConnectTimeOverTime");
        return;
    }
    if(fixTimestamps) {
        fixTimeStamps(infos.data.result.series, 0);
    }
    if(isGraph($("#flotConnectTimeOverTime"))) {
        infos.createGraph();
    }else {
        var choiceContainer = $("#choicesConnectTimeOverTime");
        createLegend(choiceContainer, infos);
        infos.createGraph();
        setGraphZoomable("#flotConnectTimeOverTime", "#overviewConnectTimeOverTime");
        $('#footerConnectTimeOverTime .legendColorBox > div').each(function(i){
            $(this).clone().prependTo(choiceContainer.find("li").eq(i));
        });
    }
};

var responseTimePercentilesOverTimeInfos = {
        data: {"result": {"minY": 1.7976931348623157E308, "minX": 1.7976931348623157E308, "maxY": 4.9E-324, "series": [{"data": [], "isOverall": false, "label": "Max", "isController": false}, {"data": [], "isOverall": false, "label": "Min", "isController": false}, {"data": [], "isOverall": false, "label": "90th percentile", "isController": false}, {"data": [], "isOverall": false, "label": "99th percentile", "isController": false}, {"data": [], "isOverall": false, "label": "95th percentile", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 60000, "maxX": 4.9E-324, "title": "Response Time Percentiles Over Time (successful requests only)"}},
        getOptions: function() {
            return {
                series: {
                    lines: {
                        show: true,
                        fill: true
                    },
                    points: {
                        show: true
                    }
                },
                xaxis: {
                    mode: "time",
                    timeformat: getTimeFormat(this.data.result.granularity),
                    axisLabel: getElapsedTimeLabel(this.data.result.granularity),
                    axisLabelUseCanvas: true,
                    axisLabelFontSizePixels: 12,
                    axisLabelFontFamily: 'Verdana, Arial',
                    axisLabelPadding: 20,
                },
                yaxis: {
                    axisLabel: "Response Time in ms",
                    axisLabelUseCanvas: true,
                    axisLabelFontSizePixels: 12,
                    axisLabelFontFamily: 'Verdana, Arial',
                    axisLabelPadding: 20,
                },
                legend: {
                    noColumns: 2,
                    show: true,
                    container: '#legendResponseTimePercentilesOverTime'
                },
                selection: {
                    mode: 'xy'
                },
                grid: {
                    hoverable: true // IMPORTANT! this is needed for tooltip to
                                    // work
                },
                tooltip: true,
                tooltipOpts: {
                    content: "%s : at %x Response time was %y ms"
                }
            };
        },
        createGraph: function () {
            var data = this.data;
            var dataset = prepareData(data.result.series, $("#choicesResponseTimePercentilesOverTime"));
            var options = this.getOptions();
            prepareOptions(options, data);
            $.plot($("#flotResponseTimePercentilesOverTime"), dataset, options);
            // setup overview
            $.plot($("#overviewResponseTimePercentilesOverTime"), dataset, prepareOverviewOptions(options));
        }
};

// Response Time Percentiles Over Time
function refreshResponseTimePercentilesOverTime(fixTimestamps) {
    var infos = responseTimePercentilesOverTimeInfos;
    prepareSeries(infos.data);
    if(fixTimestamps) {
        fixTimeStamps(infos.data.result.series, 0);
    }
    if(isGraph($("#flotResponseTimePercentilesOverTime"))) {
        infos.createGraph();
    }else {
        var choiceContainer = $("#choicesResponseTimePercentilesOverTime");
        createLegend(choiceContainer, infos);
        infos.createGraph();
        setGraphZoomable("#flotResponseTimePercentilesOverTime", "#overviewResponseTimePercentilesOverTime");
        $('#footerResponseTimePercentilesOverTime .legendColorBox > div').each(function(i){
            $(this).clone().prependTo(choiceContainer.find("li").eq(i));
        });
    }
};


var responseTimeVsRequestInfos = {
    data: {"result": {"minY": 2498.0, "minX": 48.0, "maxY": 3161.0, "series": [{"data": [[48.0, 2498.0], [52.0, 3161.0]], "isOverall": false, "label": "Failures", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 1000, "maxX": 52.0, "title": "Response Time Vs Request"}},
    getOptions: function() {
        return {
            series: {
                lines: {
                    show: false
                },
                points: {
                    show: true
                }
            },
            xaxis: {
                axisLabel: "Global number of requests per second",
                axisLabelUseCanvas: true,
                axisLabelFontSizePixels: 12,
                axisLabelFontFamily: 'Verdana, Arial',
                axisLabelPadding: 20,
            },
            yaxis: {
                axisLabel: "Median Response Time in ms",
                axisLabelUseCanvas: true,
                axisLabelFontSizePixels: 12,
                axisLabelFontFamily: 'Verdana, Arial',
                axisLabelPadding: 20,
            },
            legend: {
                noColumns: 2,
                show: true,
                container: '#legendResponseTimeVsRequest'
            },
            selection: {
                mode: 'xy'
            },
            grid: {
                hoverable: true // IMPORTANT! this is needed for tooltip to work
            },
            tooltip: true,
            tooltipOpts: {
                content: "%s : Median response time at %x req/s was %y ms"
            },
            colors: ["#9ACD32", "#FF6347"]
        };
    },
    createGraph: function () {
        var data = this.data;
        var dataset = prepareData(data.result.series, $("#choicesResponseTimeVsRequest"));
        var options = this.getOptions();
        prepareOptions(options, data);
        $.plot($("#flotResponseTimeVsRequest"), dataset, options);
        // setup overview
        $.plot($("#overviewResponseTimeVsRequest"), dataset, prepareOverviewOptions(options));

    }
};

// Response Time vs Request
function refreshResponseTimeVsRequest() {
    var infos = responseTimeVsRequestInfos;
    prepareSeries(infos.data);
    if (isGraph($("#flotResponseTimeVsRequest"))){
        infos.createGraph();
    }else{
        var choiceContainer = $("#choicesResponseTimeVsRequest");
        createLegend(choiceContainer, infos);
        infos.createGraph();
        setGraphZoomable("#flotResponseTimeVsRequest", "#overviewResponseTimeVsRequest");
        $('#footerResponseRimeVsRequest .legendColorBox > div').each(function(i){
            $(this).clone().prependTo(choiceContainer.find("li").eq(i));
        });
    }
};


var latenciesVsRequestInfos = {
    data: {"result": {"minY": 2464.5, "minX": 48.0, "maxY": 3087.0, "series": [{"data": [[48.0, 2464.5], [52.0, 3087.0]], "isOverall": false, "label": "Failures", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 1000, "maxX": 52.0, "title": "Latencies Vs Request"}},
    getOptions: function() {
        return{
            series: {
                lines: {
                    show: false
                },
                points: {
                    show: true
                }
            },
            xaxis: {
                axisLabel: "Global number of requests per second",
                axisLabelUseCanvas: true,
                axisLabelFontSizePixels: 12,
                axisLabelFontFamily: 'Verdana, Arial',
                axisLabelPadding: 20,
            },
            yaxis: {
                axisLabel: "Median Latency in ms",
                axisLabelUseCanvas: true,
                axisLabelFontSizePixels: 12,
                axisLabelFontFamily: 'Verdana, Arial',
                axisLabelPadding: 20,
            },
            legend: { noColumns: 2,show: true, container: '#legendLatencyVsRequest' },
            selection: {
                mode: 'xy'
            },
            grid: {
                hoverable: true // IMPORTANT! this is needed for tooltip to work
            },
            tooltip: true,
            tooltipOpts: {
                content: "%s : Median Latency time at %x req/s was %y ms"
            },
            colors: ["#9ACD32", "#FF6347"]
        };
    },
    createGraph: function () {
        var data = this.data;
        var dataset = prepareData(data.result.series, $("#choicesLatencyVsRequest"));
        var options = this.getOptions();
        prepareOptions(options, data);
        $.plot($("#flotLatenciesVsRequest"), dataset, options);
        // setup overview
        $.plot($("#overviewLatenciesVsRequest"), dataset, prepareOverviewOptions(options));
    }
};

// Latencies vs Request
function refreshLatenciesVsRequest() {
        var infos = latenciesVsRequestInfos;
        prepareSeries(infos.data);
        if(isGraph($("#flotLatenciesVsRequest"))){
            infos.createGraph();
        }else{
            var choiceContainer = $("#choicesLatencyVsRequest");
            createLegend(choiceContainer, infos);
            infos.createGraph();
            setGraphZoomable("#flotLatenciesVsRequest", "#overviewLatenciesVsRequest");
            $('#footerLatenciesVsRequest .legendColorBox > div').each(function(i){
                $(this).clone().prependTo(choiceContainer.find("li").eq(i));
            });
        }
};

var hitsPerSecondInfos = {
        data: {"result": {"minY": 1.6666666666666667, "minX": 1.55978676E12, "maxY": 1.6666666666666667, "series": [{"data": [[1.55978676E12, 1.6666666666666667]], "isOverall": false, "label": "hitsPerSecond", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 60000, "maxX": 1.55978676E12, "title": "Hits Per Second"}},
        getOptions: function() {
            return {
                series: {
                    lines: {
                        show: true
                    },
                    points: {
                        show: true
                    }
                },
                xaxis: {
                    mode: "time",
                    timeformat: getTimeFormat(this.data.result.granularity),
                    axisLabel: getElapsedTimeLabel(this.data.result.granularity),
                    axisLabelUseCanvas: true,
                    axisLabelFontSizePixels: 12,
                    axisLabelFontFamily: 'Verdana, Arial',
                    axisLabelPadding: 20,
                },
                yaxis: {
                    axisLabel: "Number of hits / sec",
                    axisLabelUseCanvas: true,
                    axisLabelFontSizePixels: 12,
                    axisLabelFontFamily: 'Verdana, Arial',
                    axisLabelPadding: 20
                },
                legend: {
                    noColumns: 2,
                    show: true,
                    container: "#legendHitsPerSecond"
                },
                selection: {
                    mode : 'xy'
                },
                grid: {
                    hoverable: true // IMPORTANT! this is needed for tooltip to
                                    // work
                },
                tooltip: true,
                tooltipOpts: {
                    content: "%s at %x was %y.2 hits/sec"
                }
            };
        },
        createGraph: function createGraph() {
            var data = this.data;
            var dataset = prepareData(data.result.series, $("#choicesHitsPerSecond"));
            var options = this.getOptions();
            prepareOptions(options, data);
            $.plot($("#flotHitsPerSecond"), dataset, options);
            // setup overview
            $.plot($("#overviewHitsPerSecond"), dataset, prepareOverviewOptions(options));
        }
};

// Hits per second
function refreshHitsPerSecond(fixTimestamps) {
    var infos = hitsPerSecondInfos;
    prepareSeries(infos.data);
    if(fixTimestamps) {
        fixTimeStamps(infos.data.result.series, 0);
    }
    if (isGraph($("#flotHitsPerSecond"))){
        infos.createGraph();
    }else{
        var choiceContainer = $("#choicesHitsPerSecond");
        createLegend(choiceContainer, infos);
        infos.createGraph();
        setGraphZoomable("#flotHitsPerSecond", "#overviewHitsPerSecond");
        $('#footerHitsPerSecond .legendColorBox > div').each(function(i){
            $(this).clone().prependTo(choiceContainer.find("li").eq(i));
        });
    }
}

var codesPerSecondInfos = {
        data: {"result": {"minY": 1.6666666666666667, "minX": 1.55978676E12, "maxY": 1.6666666666666667, "series": [{"data": [[1.55978676E12, 1.6666666666666667]], "isOverall": false, "label": "200", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 60000, "maxX": 1.55978676E12, "title": "Codes Per Second"}},
        getOptions: function(){
            return {
                series: {
                    lines: {
                        show: true
                    },
                    points: {
                        show: true
                    }
                },
                xaxis: {
                    mode: "time",
                    timeformat: getTimeFormat(this.data.result.granularity),
                    axisLabel: getElapsedTimeLabel(this.data.result.granularity),
                    axisLabelUseCanvas: true,
                    axisLabelFontSizePixels: 12,
                    axisLabelFontFamily: 'Verdana, Arial',
                    axisLabelPadding: 20,
                },
                yaxis: {
                    axisLabel: "Number of responses / sec",
                    axisLabelUseCanvas: true,
                    axisLabelFontSizePixels: 12,
                    axisLabelFontFamily: 'Verdana, Arial',
                    axisLabelPadding: 20,
                },
                legend: {
                    noColumns: 2,
                    show: true,
                    container: "#legendCodesPerSecond"
                },
                selection: {
                    mode: 'xy'
                },
                grid: {
                    hoverable: true // IMPORTANT! this is needed for tooltip to
                                    // work
                },
                tooltip: true,
                tooltipOpts: {
                    content: "Number of Response Codes %s at %x was %y.2 responses / sec"
                }
            };
        },
    createGraph: function() {
        var data = this.data;
        var dataset = prepareData(data.result.series, $("#choicesCodesPerSecond"));
        var options = this.getOptions();
        prepareOptions(options, data);
        $.plot($("#flotCodesPerSecond"), dataset, options);
        // setup overview
        $.plot($("#overviewCodesPerSecond"), dataset, prepareOverviewOptions(options));
    }
};

// Codes per second
function refreshCodesPerSecond(fixTimestamps) {
    var infos = codesPerSecondInfos;
    prepareSeries(infos.data);
    if(fixTimestamps) {
        fixTimeStamps(infos.data.result.series, 0);
    }
    if(isGraph($("#flotCodesPerSecond"))){
        infos.createGraph();
    }else{
        var choiceContainer = $("#choicesCodesPerSecond");
        createLegend(choiceContainer, infos);
        infos.createGraph();
        setGraphZoomable("#flotCodesPerSecond", "#overviewCodesPerSecond");
        $('#footerCodesPerSecond .legendColorBox > div').each(function(i){
            $(this).clone().prependTo(choiceContainer.find("li").eq(i));
        });
    }
};

var transactionsPerSecondInfos = {
        data: {"result": {"minY": 1.6666666666666667, "minX": 1.55978676E12, "maxY": 1.6666666666666667, "series": [{"data": [[1.55978676E12, 1.6666666666666667]], "isOverall": false, "label": "HTTP Request-failure", "isController": false}], "supportsControllersDiscrimination": true, "granularity": 60000, "maxX": 1.55978676E12, "title": "Transactions Per Second"}},
        getOptions: function(){
            return {
                series: {
                    lines: {
                        show: true
                    },
                    points: {
                        show: true
                    }
                },
                xaxis: {
                    mode: "time",
                    timeformat: getTimeFormat(this.data.result.granularity),
                    axisLabel: getElapsedTimeLabel(this.data.result.granularity),
                    axisLabelUseCanvas: true,
                    axisLabelFontSizePixels: 12,
                    axisLabelFontFamily: 'Verdana, Arial',
                    axisLabelPadding: 20,
                },
                yaxis: {
                    axisLabel: "Number of transactions / sec",
                    axisLabelUseCanvas: true,
                    axisLabelFontSizePixels: 12,
                    axisLabelFontFamily: 'Verdana, Arial',
                    axisLabelPadding: 20
                },
                legend: {
                    noColumns: 2,
                    show: true,
                    container: "#legendTransactionsPerSecond"
                },
                selection: {
                    mode: 'xy'
                },
                grid: {
                    hoverable: true // IMPORTANT! this is needed for tooltip to
                                    // work
                },
                tooltip: true,
                tooltipOpts: {
                    content: "%s at %x was %y transactions / sec"
                }
            };
        },
    createGraph: function () {
        var data = this.data;
        var dataset = prepareData(data.result.series, $("#choicesTransactionsPerSecond"));
        var options = this.getOptions();
        prepareOptions(options, data);
        $.plot($("#flotTransactionsPerSecond"), dataset, options);
        // setup overview
        $.plot($("#overviewTransactionsPerSecond"), dataset, prepareOverviewOptions(options));
    }
};

// Transactions per second
function refreshTransactionsPerSecond(fixTimestamps) {
    var infos = transactionsPerSecondInfos;
    prepareSeries(infos.data);
    if(infos.data.result.series.length == 0) {
        setEmptyGraph("#bodyTransactionsPerSecond");
        return;
    }
    if(fixTimestamps) {
        fixTimeStamps(infos.data.result.series, 0);
    }
    if(isGraph($("#flotTransactionsPerSecond"))){
        infos.createGraph();
    }else{
        var choiceContainer = $("#choicesTransactionsPerSecond");
        createLegend(choiceContainer, infos);
        infos.createGraph();
        setGraphZoomable("#flotTransactionsPerSecond", "#overviewTransactionsPerSecond");
        $('#footerTransactionsPerSecond .legendColorBox > div').each(function(i){
            $(this).clone().prependTo(choiceContainer.find("li").eq(i));
        });
    }
};

var totalTPSInfos = {
        data: {"result": {"minY": 1.6666666666666667, "minX": 1.55978676E12, "maxY": 1.6666666666666667, "series": [{"data": [], "isOverall": false, "label": "Transaction-success", "isController": false}, {"data": [[1.55978676E12, 1.6666666666666667]], "isOverall": false, "label": "Transaction-failure", "isController": false}], "supportsControllersDiscrimination": true, "granularity": 60000, "maxX": 1.55978676E12, "title": "Total Transactions Per Second"}},
        getOptions: function(){
            return {
                series: {
                    lines: {
                        show: true
                    },
                    points: {
                        show: true
                    }
                },
                xaxis: {
                    mode: "time",
                    timeformat: getTimeFormat(this.data.result.granularity),
                    axisLabel: getElapsedTimeLabel(this.data.result.granularity),
                    axisLabelUseCanvas: true,
                    axisLabelFontSizePixels: 12,
                    axisLabelFontFamily: 'Verdana, Arial',
                    axisLabelPadding: 20,
                },
                yaxis: {
                    axisLabel: "Number of transactions / sec",
                    axisLabelUseCanvas: true,
                    axisLabelFontSizePixels: 12,
                    axisLabelFontFamily: 'Verdana, Arial',
                    axisLabelPadding: 20
                },
                legend: {
                    noColumns: 2,
                    show: true,
                    container: "#legendTotalTPS"
                },
                selection: {
                    mode: 'xy'
                },
                grid: {
                    hoverable: true // IMPORTANT! this is needed for tooltip to
                                    // work
                },
                tooltip: true,
                tooltipOpts: {
                    content: "%s at %x was %y transactions / sec"
                },
                colors: ["#9ACD32", "#FF6347"]
            };
        },
    createGraph: function () {
        var data = this.data;
        var dataset = prepareData(data.result.series, $("#choicesTotalTPS"));
        var options = this.getOptions();
        prepareOptions(options, data);
        $.plot($("#flotTotalTPS"), dataset, options);
        // setup overview
        $.plot($("#overviewTotalTPS"), dataset, prepareOverviewOptions(options));
    }
};

// Total Transactions per second
function refreshTotalTPS(fixTimestamps) {
    var infos = totalTPSInfos;
    // We want to ignore seriesFilter
    prepareSeries(infos.data, false, true);
    if(fixTimestamps) {
        fixTimeStamps(infos.data.result.series, 0);
    }
    if(isGraph($("#flotTotalTPS"))){
        infos.createGraph();
    }else{
        var choiceContainer = $("#choicesTotalTPS");
        createLegend(choiceContainer, infos);
        infos.createGraph();
        setGraphZoomable("#flotTotalTPS", "#overviewTotalTPS");
        $('#footerTotalTPS .legendColorBox > div').each(function(i){
            $(this).clone().prependTo(choiceContainer.find("li").eq(i));
        });
    }
};

// Collapse the graph matching the specified DOM element depending the collapsed
// status
function collapse(elem, collapsed){
    if(collapsed){
        $(elem).parent().find(".fa-chevron-up").removeClass("fa-chevron-up").addClass("fa-chevron-down");
    } else {
        $(elem).parent().find(".fa-chevron-down").removeClass("fa-chevron-down").addClass("fa-chevron-up");
        if (elem.id == "bodyBytesThroughputOverTime") {
            if (isGraph($(elem).find('.flot-chart-content')) == false) {
                refreshBytesThroughputOverTime(true);
            }
            document.location.href="#bytesThroughputOverTime";
        } else if (elem.id == "bodyLatenciesOverTime") {
            if (isGraph($(elem).find('.flot-chart-content')) == false) {
                refreshLatenciesOverTime(true);
            }
            document.location.href="#latenciesOverTime";
        } else if (elem.id == "bodyCustomGraph") {
            if (isGraph($(elem).find('.flot-chart-content')) == false) {
                refreshCustomGraph(true);
            }
            document.location.href="#responseCustomGraph";
        } else if (elem.id == "bodyConnectTimeOverTime") {
            if (isGraph($(elem).find('.flot-chart-content')) == false) {
                refreshConnectTimeOverTime(true);
            }
            document.location.href="#connectTimeOverTime";
        } else if (elem.id == "bodyResponseTimePercentilesOverTime") {
            if (isGraph($(elem).find('.flot-chart-content')) == false) {
                refreshResponseTimePercentilesOverTime(true);
            }
            document.location.href="#responseTimePercentilesOverTime";
        } else if (elem.id == "bodyResponseTimeDistribution") {
            if (isGraph($(elem).find('.flot-chart-content')) == false) {
                refreshResponseTimeDistribution();
            }
            document.location.href="#responseTimeDistribution" ;
        } else if (elem.id == "bodySyntheticResponseTimeDistribution") {
            if (isGraph($(elem).find('.flot-chart-content')) == false) {
                refreshSyntheticResponseTimeDistribution();
            }
            document.location.href="#syntheticResponseTimeDistribution" ;
        } else if (elem.id == "bodyActiveThreadsOverTime") {
            if (isGraph($(elem).find('.flot-chart-content')) == false) {
                refreshActiveThreadsOverTime(true);
            }
            document.location.href="#activeThreadsOverTime";
        } else if (elem.id == "bodyTimeVsThreads") {
            if (isGraph($(elem).find('.flot-chart-content')) == false) {
                refreshTimeVsThreads();
            }
            document.location.href="#timeVsThreads" ;
        } else if (elem.id == "bodyCodesPerSecond") {
            if (isGraph($(elem).find('.flot-chart-content')) == false) {
                refreshCodesPerSecond(true);
            }
            document.location.href="#codesPerSecond";
        } else if (elem.id == "bodyTransactionsPerSecond") {
            if (isGraph($(elem).find('.flot-chart-content')) == false) {
                refreshTransactionsPerSecond(true);
            }
            document.location.href="#transactionsPerSecond";
        } else if (elem.id == "bodyTotalTPS") {
            if (isGraph($(elem).find('.flot-chart-content')) == false) {
                refreshTotalTPS(true);
            }
            document.location.href="#totalTPS";
        } else if (elem.id == "bodyResponseTimeVsRequest") {
            if (isGraph($(elem).find('.flot-chart-content')) == false) {
                refreshResponseTimeVsRequest();
            }
            document.location.href="#responseTimeVsRequest";
        } else if (elem.id == "bodyLatenciesVsRequest") {
            if (isGraph($(elem).find('.flot-chart-content')) == false) {
                refreshLatenciesVsRequest();
            }
            document.location.href="#latencyVsRequest";
        }
    }
}

/*
 * Activates or deactivates all series of the specified graph (represented by id parameter)
 * depending on checked argument.
 */
function toggleAll(id, checked){
    var placeholder = document.getElementById(id);

    var cases = $(placeholder).find(':checkbox');
    cases.prop('checked', checked);
    $(cases).parent().children().children().toggleClass("legend-disabled", !checked);

    var choiceContainer;
    if ( id == "choicesBytesThroughputOverTime"){
        choiceContainer = $("#choicesBytesThroughputOverTime");
        refreshBytesThroughputOverTime(false);
    } else if(id == "choicesResponseTimesOverTime"){
        choiceContainer = $("#choicesResponseTimesOverTime");
        refreshResponseTimeOverTime(false);
    }else if(id == "choicesResponseCustomGraph"){
        choiceContainer = $("#choicesResponseCustomGraph");
        refreshCustomGraph(false);
    } else if ( id == "choicesLatenciesOverTime"){
        choiceContainer = $("#choicesLatenciesOverTime");
        refreshLatenciesOverTime(false);
    } else if ( id == "choicesConnectTimeOverTime"){
        choiceContainer = $("#choicesConnectTimeOverTime");
        refreshConnectTimeOverTime(false);
    } else if ( id == "choicesResponseTimePercentilesOverTime"){
        choiceContainer = $("#choicesResponseTimePercentilesOverTime");
        refreshResponseTimePercentilesOverTime(false);
    } else if ( id == "choicesResponseTimePercentiles"){
        choiceContainer = $("#choicesResponseTimePercentiles");
        refreshResponseTimePercentiles();
    } else if(id == "choicesActiveThreadsOverTime"){
        choiceContainer = $("#choicesActiveThreadsOverTime");
        refreshActiveThreadsOverTime(false);
    } else if ( id == "choicesTimeVsThreads"){
        choiceContainer = $("#choicesTimeVsThreads");
        refreshTimeVsThreads();
    } else if ( id == "choicesSyntheticResponseTimeDistribution"){
        choiceContainer = $("#choicesSyntheticResponseTimeDistribution");
        refreshSyntheticResponseTimeDistribution();
    } else if ( id == "choicesResponseTimeDistribution"){
        choiceContainer = $("#choicesResponseTimeDistribution");
        refreshResponseTimeDistribution();
    } else if ( id == "choicesHitsPerSecond"){
        choiceContainer = $("#choicesHitsPerSecond");
        refreshHitsPerSecond(false);
    } else if(id == "choicesCodesPerSecond"){
        choiceContainer = $("#choicesCodesPerSecond");
        refreshCodesPerSecond(false);
    } else if ( id == "choicesTransactionsPerSecond"){
        choiceContainer = $("#choicesTransactionsPerSecond");
        refreshTransactionsPerSecond(false);
    } else if ( id == "choicesTotalTPS"){
        choiceContainer = $("#choicesTotalTPS");
        refreshTotalTPS(false);
    } else if ( id == "choicesResponseTimeVsRequest"){
        choiceContainer = $("#choicesResponseTimeVsRequest");
        refreshResponseTimeVsRequest();
    } else if ( id == "choicesLatencyVsRequest"){
        choiceContainer = $("#choicesLatencyVsRequest");
        refreshLatenciesVsRequest();
    }
    var color = checked ? "black" : "#818181";
    if(choiceContainer != null) {
        choiceContainer.find("label").each(function(){
            this.style.color = color;
        });
    }
}

