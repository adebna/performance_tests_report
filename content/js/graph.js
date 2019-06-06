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
        data: {"result": {"minY": 2158.0, "minX": 0.0, "maxY": 3620.0, "series": [{"data": [[0.0, 2158.0], [0.1, 2158.0], [0.2, 2158.0], [0.3, 2158.0], [0.4, 2158.0], [0.5, 2158.0], [0.6, 2158.0], [0.7, 2158.0], [0.8, 2158.0], [0.9, 2158.0], [1.0, 2176.0], [1.1, 2176.0], [1.2, 2176.0], [1.3, 2176.0], [1.4, 2176.0], [1.5, 2176.0], [1.6, 2176.0], [1.7, 2176.0], [1.8, 2176.0], [1.9, 2176.0], [2.0, 2181.0], [2.1, 2181.0], [2.2, 2181.0], [2.3, 2181.0], [2.4, 2181.0], [2.5, 2181.0], [2.6, 2181.0], [2.7, 2181.0], [2.8, 2181.0], [2.9, 2181.0], [3.0, 2182.0], [3.1, 2182.0], [3.2, 2182.0], [3.3, 2182.0], [3.4, 2182.0], [3.5, 2182.0], [3.6, 2182.0], [3.7, 2182.0], [3.8, 2182.0], [3.9, 2182.0], [4.0, 2286.0], [4.1, 2286.0], [4.2, 2286.0], [4.3, 2286.0], [4.4, 2286.0], [4.5, 2286.0], [4.6, 2286.0], [4.7, 2286.0], [4.8, 2286.0], [4.9, 2286.0], [5.0, 2287.0], [5.1, 2287.0], [5.2, 2287.0], [5.3, 2287.0], [5.4, 2287.0], [5.5, 2287.0], [5.6, 2287.0], [5.7, 2287.0], [5.8, 2287.0], [5.9, 2287.0], [6.0, 2340.0], [6.1, 2340.0], [6.2, 2340.0], [6.3, 2340.0], [6.4, 2340.0], [6.5, 2340.0], [6.6, 2340.0], [6.7, 2340.0], [6.8, 2340.0], [6.9, 2340.0], [7.0, 2361.0], [7.1, 2361.0], [7.2, 2361.0], [7.3, 2361.0], [7.4, 2361.0], [7.5, 2361.0], [7.6, 2361.0], [7.7, 2361.0], [7.8, 2361.0], [7.9, 2361.0], [8.0, 2363.0], [8.1, 2363.0], [8.2, 2363.0], [8.3, 2363.0], [8.4, 2363.0], [8.5, 2363.0], [8.6, 2363.0], [8.7, 2363.0], [8.8, 2363.0], [8.9, 2363.0], [9.0, 2385.0], [9.1, 2385.0], [9.2, 2385.0], [9.3, 2385.0], [9.4, 2385.0], [9.5, 2385.0], [9.6, 2385.0], [9.7, 2385.0], [9.8, 2385.0], [9.9, 2385.0], [10.0, 2460.0], [10.1, 2460.0], [10.2, 2460.0], [10.3, 2460.0], [10.4, 2460.0], [10.5, 2460.0], [10.6, 2460.0], [10.7, 2460.0], [10.8, 2460.0], [10.9, 2460.0], [11.0, 2461.0], [11.1, 2461.0], [11.2, 2461.0], [11.3, 2461.0], [11.4, 2461.0], [11.5, 2461.0], [11.6, 2461.0], [11.7, 2461.0], [11.8, 2461.0], [11.9, 2461.0], [12.0, 2539.0], [12.1, 2539.0], [12.2, 2539.0], [12.3, 2539.0], [12.4, 2539.0], [12.5, 2539.0], [12.6, 2539.0], [12.7, 2539.0], [12.8, 2539.0], [12.9, 2539.0], [13.0, 2561.0], [13.1, 2561.0], [13.2, 2561.0], [13.3, 2561.0], [13.4, 2561.0], [13.5, 2561.0], [13.6, 2561.0], [13.7, 2561.0], [13.8, 2561.0], [13.9, 2561.0], [14.0, 2563.0], [14.1, 2563.0], [14.2, 2563.0], [14.3, 2563.0], [14.4, 2563.0], [14.5, 2563.0], [14.6, 2563.0], [14.7, 2563.0], [14.8, 2563.0], [14.9, 2563.0], [15.0, 2564.0], [15.1, 2564.0], [15.2, 2564.0], [15.3, 2564.0], [15.4, 2564.0], [15.5, 2564.0], [15.6, 2564.0], [15.7, 2564.0], [15.8, 2564.0], [15.9, 2564.0], [16.0, 2596.0], [16.1, 2596.0], [16.2, 2596.0], [16.3, 2596.0], [16.4, 2596.0], [16.5, 2596.0], [16.6, 2596.0], [16.7, 2596.0], [16.8, 2596.0], [16.9, 2596.0], [17.0, 2598.0], [17.1, 2598.0], [17.2, 2598.0], [17.3, 2598.0], [17.4, 2598.0], [17.5, 2598.0], [17.6, 2598.0], [17.7, 2598.0], [17.8, 2598.0], [17.9, 2598.0], [18.0, 2615.0], [18.1, 2615.0], [18.2, 2615.0], [18.3, 2615.0], [18.4, 2615.0], [18.5, 2615.0], [18.6, 2615.0], [18.7, 2615.0], [18.8, 2615.0], [18.9, 2615.0], [19.0, 2615.0], [19.1, 2615.0], [19.2, 2615.0], [19.3, 2615.0], [19.4, 2615.0], [19.5, 2615.0], [19.6, 2615.0], [19.7, 2615.0], [19.8, 2615.0], [19.9, 2615.0], [20.0, 2679.0], [20.1, 2679.0], [20.2, 2679.0], [20.3, 2679.0], [20.4, 2679.0], [20.5, 2679.0], [20.6, 2679.0], [20.7, 2679.0], [20.8, 2679.0], [20.9, 2679.0], [21.0, 2761.0], [21.1, 2761.0], [21.2, 2761.0], [21.3, 2761.0], [21.4, 2761.0], [21.5, 2761.0], [21.6, 2761.0], [21.7, 2761.0], [21.8, 2761.0], [21.9, 2761.0], [22.0, 2778.0], [22.1, 2778.0], [22.2, 2778.0], [22.3, 2778.0], [22.4, 2778.0], [22.5, 2778.0], [22.6, 2778.0], [22.7, 2778.0], [22.8, 2778.0], [22.9, 2778.0], [23.0, 2792.0], [23.1, 2792.0], [23.2, 2792.0], [23.3, 2792.0], [23.4, 2792.0], [23.5, 2792.0], [23.6, 2792.0], [23.7, 2792.0], [23.8, 2792.0], [23.9, 2792.0], [24.0, 2819.0], [24.1, 2819.0], [24.2, 2819.0], [24.3, 2819.0], [24.4, 2819.0], [24.5, 2819.0], [24.6, 2819.0], [24.7, 2819.0], [24.8, 2819.0], [24.9, 2819.0], [25.0, 2844.0], [25.1, 2844.0], [25.2, 2844.0], [25.3, 2844.0], [25.4, 2844.0], [25.5, 2844.0], [25.6, 2844.0], [25.7, 2844.0], [25.8, 2844.0], [25.9, 2844.0], [26.0, 2847.0], [26.1, 2847.0], [26.2, 2847.0], [26.3, 2847.0], [26.4, 2847.0], [26.5, 2847.0], [26.6, 2847.0], [26.7, 2847.0], [26.8, 2847.0], [26.9, 2847.0], [27.0, 2848.0], [27.1, 2848.0], [27.2, 2848.0], [27.3, 2848.0], [27.4, 2848.0], [27.5, 2848.0], [27.6, 2848.0], [27.7, 2848.0], [27.8, 2848.0], [27.9, 2848.0], [28.0, 2850.0], [28.1, 2850.0], [28.2, 2850.0], [28.3, 2850.0], [28.4, 2850.0], [28.5, 2850.0], [28.6, 2850.0], [28.7, 2850.0], [28.8, 2850.0], [28.9, 2850.0], [29.0, 2854.0], [29.1, 2854.0], [29.2, 2854.0], [29.3, 2854.0], [29.4, 2854.0], [29.5, 2854.0], [29.6, 2854.0], [29.7, 2854.0], [29.8, 2854.0], [29.9, 2854.0], [30.0, 2871.0], [30.1, 2871.0], [30.2, 2871.0], [30.3, 2871.0], [30.4, 2871.0], [30.5, 2871.0], [30.6, 2871.0], [30.7, 2871.0], [30.8, 2871.0], [30.9, 2871.0], [31.0, 2872.0], [31.1, 2872.0], [31.2, 2872.0], [31.3, 2872.0], [31.4, 2872.0], [31.5, 2872.0], [31.6, 2872.0], [31.7, 2872.0], [31.8, 2872.0], [31.9, 2872.0], [32.0, 2880.0], [32.1, 2880.0], [32.2, 2880.0], [32.3, 2880.0], [32.4, 2880.0], [32.5, 2880.0], [32.6, 2880.0], [32.7, 2880.0], [32.8, 2880.0], [32.9, 2880.0], [33.0, 2886.0], [33.1, 2886.0], [33.2, 2886.0], [33.3, 2886.0], [33.4, 2886.0], [33.5, 2886.0], [33.6, 2886.0], [33.7, 2886.0], [33.8, 2886.0], [33.9, 2886.0], [34.0, 2927.0], [34.1, 2927.0], [34.2, 2927.0], [34.3, 2927.0], [34.4, 2927.0], [34.5, 2927.0], [34.6, 2927.0], [34.7, 2927.0], [34.8, 2927.0], [34.9, 2927.0], [35.0, 2936.0], [35.1, 2936.0], [35.2, 2936.0], [35.3, 2936.0], [35.4, 2936.0], [35.5, 2936.0], [35.6, 2936.0], [35.7, 2936.0], [35.8, 2936.0], [35.9, 2936.0], [36.0, 2952.0], [36.1, 2952.0], [36.2, 2952.0], [36.3, 2952.0], [36.4, 2952.0], [36.5, 2952.0], [36.6, 2952.0], [36.7, 2952.0], [36.8, 2952.0], [36.9, 2952.0], [37.0, 2961.0], [37.1, 2961.0], [37.2, 2961.0], [37.3, 2961.0], [37.4, 2961.0], [37.5, 2961.0], [37.6, 2961.0], [37.7, 2961.0], [37.8, 2961.0], [37.9, 2961.0], [38.0, 2985.0], [38.1, 2985.0], [38.2, 2985.0], [38.3, 2985.0], [38.4, 2985.0], [38.5, 2985.0], [38.6, 2985.0], [38.7, 2985.0], [38.8, 2985.0], [38.9, 2985.0], [39.0, 2993.0], [39.1, 2993.0], [39.2, 2993.0], [39.3, 2993.0], [39.4, 2993.0], [39.5, 2993.0], [39.6, 2993.0], [39.7, 2993.0], [39.8, 2993.0], [39.9, 2993.0], [40.0, 2999.0], [40.1, 2999.0], [40.2, 2999.0], [40.3, 2999.0], [40.4, 2999.0], [40.5, 2999.0], [40.6, 2999.0], [40.7, 2999.0], [40.8, 2999.0], [40.9, 2999.0], [41.0, 3022.0], [41.1, 3022.0], [41.2, 3022.0], [41.3, 3022.0], [41.4, 3022.0], [41.5, 3022.0], [41.6, 3022.0], [41.7, 3022.0], [41.8, 3022.0], [41.9, 3022.0], [42.0, 3022.0], [42.1, 3022.0], [42.2, 3022.0], [42.3, 3022.0], [42.4, 3022.0], [42.5, 3022.0], [42.6, 3022.0], [42.7, 3022.0], [42.8, 3022.0], [42.9, 3022.0], [43.0, 3023.0], [43.1, 3023.0], [43.2, 3023.0], [43.3, 3023.0], [43.4, 3023.0], [43.5, 3023.0], [43.6, 3023.0], [43.7, 3023.0], [43.8, 3023.0], [43.9, 3023.0], [44.0, 3027.0], [44.1, 3027.0], [44.2, 3027.0], [44.3, 3027.0], [44.4, 3027.0], [44.5, 3027.0], [44.6, 3027.0], [44.7, 3027.0], [44.8, 3027.0], [44.9, 3027.0], [45.0, 3047.0], [45.1, 3047.0], [45.2, 3047.0], [45.3, 3047.0], [45.4, 3047.0], [45.5, 3047.0], [45.6, 3047.0], [45.7, 3047.0], [45.8, 3047.0], [45.9, 3047.0], [46.0, 3065.0], [46.1, 3065.0], [46.2, 3065.0], [46.3, 3065.0], [46.4, 3065.0], [46.5, 3065.0], [46.6, 3065.0], [46.7, 3065.0], [46.8, 3065.0], [46.9, 3065.0], [47.0, 3075.0], [47.1, 3075.0], [47.2, 3075.0], [47.3, 3075.0], [47.4, 3075.0], [47.5, 3075.0], [47.6, 3075.0], [47.7, 3075.0], [47.8, 3075.0], [47.9, 3075.0], [48.0, 3080.0], [48.1, 3080.0], [48.2, 3080.0], [48.3, 3080.0], [48.4, 3080.0], [48.5, 3080.0], [48.6, 3080.0], [48.7, 3080.0], [48.8, 3080.0], [48.9, 3080.0], [49.0, 3087.0], [49.1, 3087.0], [49.2, 3087.0], [49.3, 3087.0], [49.4, 3087.0], [49.5, 3087.0], [49.6, 3087.0], [49.7, 3087.0], [49.8, 3087.0], [49.9, 3087.0], [50.0, 3090.0], [50.1, 3090.0], [50.2, 3090.0], [50.3, 3090.0], [50.4, 3090.0], [50.5, 3090.0], [50.6, 3090.0], [50.7, 3090.0], [50.8, 3090.0], [50.9, 3090.0], [51.0, 3100.0], [51.1, 3100.0], [51.2, 3100.0], [51.3, 3100.0], [51.4, 3100.0], [51.5, 3100.0], [51.6, 3100.0], [51.7, 3100.0], [51.8, 3100.0], [51.9, 3100.0], [52.0, 3135.0], [52.1, 3135.0], [52.2, 3135.0], [52.3, 3135.0], [52.4, 3135.0], [52.5, 3135.0], [52.6, 3135.0], [52.7, 3135.0], [52.8, 3135.0], [52.9, 3135.0], [53.0, 3140.0], [53.1, 3140.0], [53.2, 3140.0], [53.3, 3140.0], [53.4, 3140.0], [53.5, 3140.0], [53.6, 3140.0], [53.7, 3140.0], [53.8, 3140.0], [53.9, 3140.0], [54.0, 3148.0], [54.1, 3148.0], [54.2, 3148.0], [54.3, 3148.0], [54.4, 3148.0], [54.5, 3148.0], [54.6, 3148.0], [54.7, 3148.0], [54.8, 3148.0], [54.9, 3148.0], [55.0, 3151.0], [55.1, 3151.0], [55.2, 3151.0], [55.3, 3151.0], [55.4, 3151.0], [55.5, 3151.0], [55.6, 3151.0], [55.7, 3151.0], [55.8, 3151.0], [55.9, 3151.0], [56.0, 3154.0], [56.1, 3154.0], [56.2, 3154.0], [56.3, 3154.0], [56.4, 3154.0], [56.5, 3154.0], [56.6, 3154.0], [56.7, 3154.0], [56.8, 3154.0], [56.9, 3154.0], [57.0, 3155.0], [57.1, 3155.0], [57.2, 3155.0], [57.3, 3155.0], [57.4, 3155.0], [57.5, 3155.0], [57.6, 3155.0], [57.7, 3155.0], [57.8, 3155.0], [57.9, 3155.0], [58.0, 3159.0], [58.1, 3159.0], [58.2, 3159.0], [58.3, 3159.0], [58.4, 3159.0], [58.5, 3159.0], [58.6, 3159.0], [58.7, 3159.0], [58.8, 3159.0], [58.9, 3159.0], [59.0, 3167.0], [59.1, 3167.0], [59.2, 3167.0], [59.3, 3167.0], [59.4, 3167.0], [59.5, 3167.0], [59.6, 3167.0], [59.7, 3167.0], [59.8, 3167.0], [59.9, 3167.0], [60.0, 3179.0], [60.1, 3179.0], [60.2, 3179.0], [60.3, 3179.0], [60.4, 3179.0], [60.5, 3179.0], [60.6, 3179.0], [60.7, 3179.0], [60.8, 3179.0], [60.9, 3179.0], [61.0, 3204.0], [61.1, 3204.0], [61.2, 3204.0], [61.3, 3204.0], [61.4, 3204.0], [61.5, 3204.0], [61.6, 3204.0], [61.7, 3204.0], [61.8, 3204.0], [61.9, 3204.0], [62.0, 3208.0], [62.1, 3208.0], [62.2, 3208.0], [62.3, 3208.0], [62.4, 3208.0], [62.5, 3208.0], [62.6, 3208.0], [62.7, 3208.0], [62.8, 3208.0], [62.9, 3208.0], [63.0, 3212.0], [63.1, 3212.0], [63.2, 3212.0], [63.3, 3212.0], [63.4, 3212.0], [63.5, 3212.0], [63.6, 3212.0], [63.7, 3212.0], [63.8, 3212.0], [63.9, 3212.0], [64.0, 3220.0], [64.1, 3220.0], [64.2, 3220.0], [64.3, 3220.0], [64.4, 3220.0], [64.5, 3220.0], [64.6, 3220.0], [64.7, 3220.0], [64.8, 3220.0], [64.9, 3220.0], [65.0, 3231.0], [65.1, 3231.0], [65.2, 3231.0], [65.3, 3231.0], [65.4, 3231.0], [65.5, 3231.0], [65.6, 3231.0], [65.7, 3231.0], [65.8, 3231.0], [65.9, 3231.0], [66.0, 3238.0], [66.1, 3238.0], [66.2, 3238.0], [66.3, 3238.0], [66.4, 3238.0], [66.5, 3238.0], [66.6, 3238.0], [66.7, 3238.0], [66.8, 3238.0], [66.9, 3238.0], [67.0, 3249.0], [67.1, 3249.0], [67.2, 3249.0], [67.3, 3249.0], [67.4, 3249.0], [67.5, 3249.0], [67.6, 3249.0], [67.7, 3249.0], [67.8, 3249.0], [67.9, 3249.0], [68.0, 3264.0], [68.1, 3264.0], [68.2, 3264.0], [68.3, 3264.0], [68.4, 3264.0], [68.5, 3264.0], [68.6, 3264.0], [68.7, 3264.0], [68.8, 3264.0], [68.9, 3264.0], [69.0, 3268.0], [69.1, 3268.0], [69.2, 3268.0], [69.3, 3268.0], [69.4, 3268.0], [69.5, 3268.0], [69.6, 3268.0], [69.7, 3268.0], [69.8, 3268.0], [69.9, 3268.0], [70.0, 3287.0], [70.1, 3287.0], [70.2, 3287.0], [70.3, 3287.0], [70.4, 3287.0], [70.5, 3287.0], [70.6, 3287.0], [70.7, 3287.0], [70.8, 3287.0], [70.9, 3287.0], [71.0, 3290.0], [71.1, 3290.0], [71.2, 3290.0], [71.3, 3290.0], [71.4, 3290.0], [71.5, 3290.0], [71.6, 3290.0], [71.7, 3290.0], [71.8, 3290.0], [71.9, 3290.0], [72.0, 3294.0], [72.1, 3294.0], [72.2, 3294.0], [72.3, 3294.0], [72.4, 3294.0], [72.5, 3294.0], [72.6, 3294.0], [72.7, 3294.0], [72.8, 3294.0], [72.9, 3294.0], [73.0, 3298.0], [73.1, 3298.0], [73.2, 3298.0], [73.3, 3298.0], [73.4, 3298.0], [73.5, 3298.0], [73.6, 3298.0], [73.7, 3298.0], [73.8, 3298.0], [73.9, 3298.0], [74.0, 3323.0], [74.1, 3323.0], [74.2, 3323.0], [74.3, 3323.0], [74.4, 3323.0], [74.5, 3323.0], [74.6, 3323.0], [74.7, 3323.0], [74.8, 3323.0], [74.9, 3323.0], [75.0, 3346.0], [75.1, 3346.0], [75.2, 3346.0], [75.3, 3346.0], [75.4, 3346.0], [75.5, 3346.0], [75.6, 3346.0], [75.7, 3346.0], [75.8, 3346.0], [75.9, 3346.0], [76.0, 3359.0], [76.1, 3359.0], [76.2, 3359.0], [76.3, 3359.0], [76.4, 3359.0], [76.5, 3359.0], [76.6, 3359.0], [76.7, 3359.0], [76.8, 3359.0], [76.9, 3359.0], [77.0, 3362.0], [77.1, 3362.0], [77.2, 3362.0], [77.3, 3362.0], [77.4, 3362.0], [77.5, 3362.0], [77.6, 3362.0], [77.7, 3362.0], [77.8, 3362.0], [77.9, 3362.0], [78.0, 3366.0], [78.1, 3366.0], [78.2, 3366.0], [78.3, 3366.0], [78.4, 3366.0], [78.5, 3366.0], [78.6, 3366.0], [78.7, 3366.0], [78.8, 3366.0], [78.9, 3366.0], [79.0, 3367.0], [79.1, 3367.0], [79.2, 3367.0], [79.3, 3367.0], [79.4, 3367.0], [79.5, 3367.0], [79.6, 3367.0], [79.7, 3367.0], [79.8, 3367.0], [79.9, 3367.0], [80.0, 3368.0], [80.1, 3368.0], [80.2, 3368.0], [80.3, 3368.0], [80.4, 3368.0], [80.5, 3368.0], [80.6, 3368.0], [80.7, 3368.0], [80.8, 3368.0], [80.9, 3368.0], [81.0, 3381.0], [81.1, 3381.0], [81.2, 3381.0], [81.3, 3381.0], [81.4, 3381.0], [81.5, 3381.0], [81.6, 3381.0], [81.7, 3381.0], [81.8, 3381.0], [81.9, 3381.0], [82.0, 3382.0], [82.1, 3382.0], [82.2, 3382.0], [82.3, 3382.0], [82.4, 3382.0], [82.5, 3382.0], [82.6, 3382.0], [82.7, 3382.0], [82.8, 3382.0], [82.9, 3382.0], [83.0, 3399.0], [83.1, 3399.0], [83.2, 3399.0], [83.3, 3399.0], [83.4, 3399.0], [83.5, 3399.0], [83.6, 3399.0], [83.7, 3399.0], [83.8, 3399.0], [83.9, 3399.0], [84.0, 3402.0], [84.1, 3402.0], [84.2, 3402.0], [84.3, 3402.0], [84.4, 3402.0], [84.5, 3402.0], [84.6, 3402.0], [84.7, 3402.0], [84.8, 3402.0], [84.9, 3402.0], [85.0, 3406.0], [85.1, 3406.0], [85.2, 3406.0], [85.3, 3406.0], [85.4, 3406.0], [85.5, 3406.0], [85.6, 3406.0], [85.7, 3406.0], [85.8, 3406.0], [85.9, 3406.0], [86.0, 3411.0], [86.1, 3411.0], [86.2, 3411.0], [86.3, 3411.0], [86.4, 3411.0], [86.5, 3411.0], [86.6, 3411.0], [86.7, 3411.0], [86.8, 3411.0], [86.9, 3411.0], [87.0, 3428.0], [87.1, 3428.0], [87.2, 3428.0], [87.3, 3428.0], [87.4, 3428.0], [87.5, 3428.0], [87.6, 3428.0], [87.7, 3428.0], [87.8, 3428.0], [87.9, 3428.0], [88.0, 3438.0], [88.1, 3438.0], [88.2, 3438.0], [88.3, 3438.0], [88.4, 3438.0], [88.5, 3438.0], [88.6, 3438.0], [88.7, 3438.0], [88.8, 3438.0], [88.9, 3438.0], [89.0, 3442.0], [89.1, 3442.0], [89.2, 3442.0], [89.3, 3442.0], [89.4, 3442.0], [89.5, 3442.0], [89.6, 3442.0], [89.7, 3442.0], [89.8, 3442.0], [89.9, 3442.0], [90.0, 3451.0], [90.1, 3451.0], [90.2, 3451.0], [90.3, 3451.0], [90.4, 3451.0], [90.5, 3451.0], [90.6, 3451.0], [90.7, 3451.0], [90.8, 3451.0], [90.9, 3451.0], [91.0, 3460.0], [91.1, 3460.0], [91.2, 3460.0], [91.3, 3460.0], [91.4, 3460.0], [91.5, 3460.0], [91.6, 3460.0], [91.7, 3460.0], [91.8, 3460.0], [91.9, 3460.0], [92.0, 3474.0], [92.1, 3474.0], [92.2, 3474.0], [92.3, 3474.0], [92.4, 3474.0], [92.5, 3474.0], [92.6, 3474.0], [92.7, 3474.0], [92.8, 3474.0], [92.9, 3474.0], [93.0, 3492.0], [93.1, 3492.0], [93.2, 3492.0], [93.3, 3492.0], [93.4, 3492.0], [93.5, 3492.0], [93.6, 3492.0], [93.7, 3492.0], [93.8, 3492.0], [93.9, 3492.0], [94.0, 3546.0], [94.1, 3546.0], [94.2, 3546.0], [94.3, 3546.0], [94.4, 3546.0], [94.5, 3546.0], [94.6, 3546.0], [94.7, 3546.0], [94.8, 3546.0], [94.9, 3546.0], [95.0, 3576.0], [95.1, 3576.0], [95.2, 3576.0], [95.3, 3576.0], [95.4, 3576.0], [95.5, 3576.0], [95.6, 3576.0], [95.7, 3576.0], [95.8, 3576.0], [95.9, 3576.0], [96.0, 3578.0], [96.1, 3578.0], [96.2, 3578.0], [96.3, 3578.0], [96.4, 3578.0], [96.5, 3578.0], [96.6, 3578.0], [96.7, 3578.0], [96.8, 3578.0], [96.9, 3578.0], [97.0, 3590.0], [97.1, 3590.0], [97.2, 3590.0], [97.3, 3590.0], [97.4, 3590.0], [97.5, 3590.0], [97.6, 3590.0], [97.7, 3590.0], [97.8, 3590.0], [97.9, 3590.0], [98.0, 3591.0], [98.1, 3591.0], [98.2, 3591.0], [98.3, 3591.0], [98.4, 3591.0], [98.5, 3591.0], [98.6, 3591.0], [98.7, 3591.0], [98.8, 3591.0], [98.9, 3591.0], [99.0, 3620.0], [99.1, 3620.0], [99.2, 3620.0], [99.3, 3620.0], [99.4, 3620.0], [99.5, 3620.0], [99.6, 3620.0], [99.7, 3620.0], [99.8, 3620.0], [99.9, 3620.0]], "isOverall": false, "label": "HTTP Request", "isController": false}], "supportsControllersDiscrimination": true, "maxX": 100.0, "title": "Response Time Percentiles"}},
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
        data: {"result": {"minY": 1.0, "minX": 2100.0, "maxY": 13.0, "series": [{"data": [[2100.0, 4.0], [2300.0, 4.0], [2200.0, 2.0], [2400.0, 2.0], [2500.0, 6.0], [2600.0, 3.0], [2700.0, 3.0], [2800.0, 10.0], [2900.0, 7.0], [3000.0, 10.0], [3100.0, 10.0], [3200.0, 13.0], [3300.0, 10.0], [3400.0, 10.0], [3500.0, 5.0], [3600.0, 1.0]], "isOverall": false, "label": "HTTP Request", "isController": false}], "supportsControllersDiscrimination": true, "granularity": 100, "maxX": 3600.0, "title": "Response Time Distribution"}},
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
        data: {"result": {"minY": 53.739999999999995, "minX": 1.55978502E12, "maxY": 53.739999999999995, "series": [{"data": [[1.55978502E12, 53.739999999999995]], "isOverall": false, "label": "Job Offers", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 60000, "maxX": 1.55978502E12, "title": "Active Threads Over Time"}},
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
        data: {"result": {"minY": 2385.0, "minX": 1.0, "maxY": 3620.0, "series": [{"data": [[15.0, 3359.5000000000005], [16.0, 3451.0], [17.0, 3268.0], [18.0, 3167.0], [19.0, 3438.0], [20.0, 3362.0], [21.0, 3492.0], [22.0, 3065.0], [23.0, 3474.0], [24.0, 3080.0], [25.0, 3460.0], [26.0, 3442.0], [27.0, 3100.0], [28.0, 3428.0], [29.0, 3399.0], [30.0, 3411.0], [31.0, 3406.0], [33.0, 3368.0], [32.0, 3402.0], [35.0, 3154.0], [34.0, 3382.0], [37.0, 3359.0], [36.0, 3366.0], [39.0, 3108.5], [41.0, 3022.0], [40.0, 3323.0], [43.0, 3290.0], [42.0, 3294.0], [45.0, 3135.0], [44.0, 3249.0], [47.0, 3179.0], [46.0, 3208.0], [49.0, 3220.0], [48.0, 3231.0], [51.0, 3212.0], [50.0, 2993.0], [53.0, 3047.0], [52.0, 3204.0], [57.0, 3153.25], [59.0, 3075.0], [58.0, 2927.0], [61.0, 2880.0], [60.0, 2679.0], [63.0, 2596.0], [62.0, 2819.0], [67.0, 3022.5], [66.0, 3027.0], [64.0, 2886.0], [71.0, 2961.0], [70.0, 2873.0], [68.0, 2999.0], [75.0, 2385.0], [74.0, 2936.0], [73.0, 2615.0], [72.0, 2952.0], [76.0, 2872.0], [86.0, 2823.0], [87.0, 2850.0], [97.0, 2725.0], [100.0, 2418.3529411764707], [1.0, 3620.0]], "isOverall": false, "label": "HTTP Request", "isController": false}, {"data": [[53.739999999999995, 3024.7200000000003]], "isOverall": false, "label": "HTTP Request-Aggregated", "isController": false}], "supportsControllersDiscrimination": true, "maxX": 100.0, "title": "Time VS Threads"}},
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
        data : {"result": {"minY": 220.0, "minX": 1.55978502E12, "maxY": 891.6666666666666, "series": [{"data": [[1.55978502E12, 891.6666666666666]], "isOverall": false, "label": "Bytes received per second", "isController": false}, {"data": [[1.55978502E12, 220.0]], "isOverall": false, "label": "Bytes sent per second", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 60000, "maxX": 1.55978502E12, "title": "Bytes Throughput Over Time"}},
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
        data: {"result": {"minY": 3024.7200000000003, "minX": 1.55978502E12, "maxY": 3024.7200000000003, "series": [{"data": [[1.55978502E12, 3024.7200000000003]], "isOverall": false, "label": "HTTP Request", "isController": false}], "supportsControllersDiscrimination": true, "granularity": 60000, "maxX": 1.55978502E12, "title": "Response Time Over Time"}},
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
        data: {"result": {"minY": 2961.2500000000005, "minX": 1.55978502E12, "maxY": 2961.2500000000005, "series": [{"data": [[1.55978502E12, 2961.2500000000005]], "isOverall": false, "label": "HTTP Request", "isController": false}], "supportsControllersDiscrimination": true, "granularity": 60000, "maxX": 1.55978502E12, "title": "Latencies Over Time"}},
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
        data: {"result": {"minY": 73.65999999999997, "minX": 1.55978502E12, "maxY": 73.65999999999997, "series": [{"data": [[1.55978502E12, 73.65999999999997]], "isOverall": false, "label": "HTTP Request", "isController": false}], "supportsControllersDiscrimination": true, "granularity": 60000, "maxX": 1.55978502E12, "title": "Connect Time Over Time"}},
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
    data: {"result": {"minY": 2340.0, "minX": 1.0, "maxY": 3620.0, "series": [{"data": [[1.0, 3620.0], [9.0, 2340.0], [90.0, 3144.0]], "isOverall": false, "label": "Failures", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 1000, "maxX": 90.0, "title": "Response Time Vs Request"}},
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
    data: {"result": {"minY": 2309.0, "minX": 1.0, "maxY": 3559.0, "series": [{"data": [[1.0, 3559.0], [9.0, 2309.0], [90.0, 3058.0]], "isOverall": false, "label": "Failures", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 1000, "maxX": 90.0, "title": "Latencies Vs Request"}},
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
        data: {"result": {"minY": 1.6666666666666667, "minX": 1.55978502E12, "maxY": 1.6666666666666667, "series": [{"data": [[1.55978502E12, 1.6666666666666667]], "isOverall": false, "label": "hitsPerSecond", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 60000, "maxX": 1.55978502E12, "title": "Hits Per Second"}},
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
        data: {"result": {"minY": 1.6666666666666667, "minX": 1.55978502E12, "maxY": 1.6666666666666667, "series": [{"data": [[1.55978502E12, 1.6666666666666667]], "isOverall": false, "label": "200", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 60000, "maxX": 1.55978502E12, "title": "Codes Per Second"}},
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
        data: {"result": {"minY": 1.6666666666666667, "minX": 1.55978502E12, "maxY": 1.6666666666666667, "series": [{"data": [[1.55978502E12, 1.6666666666666667]], "isOverall": false, "label": "HTTP Request-failure", "isController": false}], "supportsControllersDiscrimination": true, "granularity": 60000, "maxX": 1.55978502E12, "title": "Transactions Per Second"}},
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
        data: {"result": {"minY": 1.6666666666666667, "minX": 1.55978502E12, "maxY": 1.6666666666666667, "series": [{"data": [], "isOverall": false, "label": "Transaction-success", "isController": false}, {"data": [[1.55978502E12, 1.6666666666666667]], "isOverall": false, "label": "Transaction-failure", "isController": false}], "supportsControllersDiscrimination": true, "granularity": 60000, "maxX": 1.55978502E12, "title": "Total Transactions Per Second"}},
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

