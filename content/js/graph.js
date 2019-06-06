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
        data: {"result": {"minY": 2090.0, "minX": 0.0, "maxY": 4531.0, "series": [{"data": [[0.0, 2090.0], [0.1, 2090.0], [0.2, 2090.0], [0.3, 2090.0], [0.4, 2090.0], [0.5, 2090.0], [0.6, 2090.0], [0.7, 2090.0], [0.8, 2090.0], [0.9, 2090.0], [1.0, 2108.0], [1.1, 2108.0], [1.2, 2108.0], [1.3, 2108.0], [1.4, 2108.0], [1.5, 2108.0], [1.6, 2108.0], [1.7, 2108.0], [1.8, 2108.0], [1.9, 2108.0], [2.0, 2206.0], [2.1, 2206.0], [2.2, 2206.0], [2.3, 2206.0], [2.4, 2206.0], [2.5, 2206.0], [2.6, 2206.0], [2.7, 2206.0], [2.8, 2206.0], [2.9, 2206.0], [3.0, 2263.0], [3.1, 2263.0], [3.2, 2263.0], [3.3, 2263.0], [3.4, 2263.0], [3.5, 2263.0], [3.6, 2263.0], [3.7, 2263.0], [3.8, 2263.0], [3.9, 2263.0], [4.0, 2422.0], [4.1, 2422.0], [4.2, 2422.0], [4.3, 2422.0], [4.4, 2422.0], [4.5, 2422.0], [4.6, 2422.0], [4.7, 2422.0], [4.8, 2422.0], [4.9, 2422.0], [5.0, 2547.0], [5.1, 2547.0], [5.2, 2547.0], [5.3, 2547.0], [5.4, 2547.0], [5.5, 2547.0], [5.6, 2547.0], [5.7, 2547.0], [5.8, 2547.0], [5.9, 2547.0], [6.0, 2640.0], [6.1, 2640.0], [6.2, 2640.0], [6.3, 2640.0], [6.4, 2640.0], [6.5, 2640.0], [6.6, 2640.0], [6.7, 2640.0], [6.8, 2640.0], [6.9, 2640.0], [7.0, 2656.0], [7.1, 2656.0], [7.2, 2656.0], [7.3, 2656.0], [7.4, 2656.0], [7.5, 2656.0], [7.6, 2656.0], [7.7, 2656.0], [7.8, 2656.0], [7.9, 2656.0], [8.0, 2695.0], [8.1, 2695.0], [8.2, 2695.0], [8.3, 2695.0], [8.4, 2695.0], [8.5, 2695.0], [8.6, 2695.0], [8.7, 2695.0], [8.8, 2695.0], [8.9, 2695.0], [9.0, 2696.0], [9.1, 2696.0], [9.2, 2696.0], [9.3, 2696.0], [9.4, 2696.0], [9.5, 2696.0], [9.6, 2696.0], [9.7, 2696.0], [9.8, 2696.0], [9.9, 2696.0], [10.0, 2754.0], [10.1, 2754.0], [10.2, 2754.0], [10.3, 2754.0], [10.4, 2754.0], [10.5, 2754.0], [10.6, 2754.0], [10.7, 2754.0], [10.8, 2754.0], [10.9, 2754.0], [11.0, 2767.0], [11.1, 2767.0], [11.2, 2767.0], [11.3, 2767.0], [11.4, 2767.0], [11.5, 2767.0], [11.6, 2767.0], [11.7, 2767.0], [11.8, 2767.0], [11.9, 2767.0], [12.0, 2773.0], [12.1, 2773.0], [12.2, 2773.0], [12.3, 2773.0], [12.4, 2773.0], [12.5, 2773.0], [12.6, 2773.0], [12.7, 2773.0], [12.8, 2773.0], [12.9, 2773.0], [13.0, 2809.0], [13.1, 2809.0], [13.2, 2809.0], [13.3, 2809.0], [13.4, 2809.0], [13.5, 2809.0], [13.6, 2809.0], [13.7, 2809.0], [13.8, 2809.0], [13.9, 2809.0], [14.0, 2811.0], [14.1, 2811.0], [14.2, 2811.0], [14.3, 2811.0], [14.4, 2811.0], [14.5, 2811.0], [14.6, 2811.0], [14.7, 2811.0], [14.8, 2811.0], [14.9, 2811.0], [15.0, 2836.0], [15.1, 2836.0], [15.2, 2836.0], [15.3, 2836.0], [15.4, 2836.0], [15.5, 2836.0], [15.6, 2836.0], [15.7, 2836.0], [15.8, 2836.0], [15.9, 2836.0], [16.0, 2922.0], [16.1, 2922.0], [16.2, 2922.0], [16.3, 2922.0], [16.4, 2922.0], [16.5, 2922.0], [16.6, 2922.0], [16.7, 2922.0], [16.8, 2922.0], [16.9, 2922.0], [17.0, 3044.0], [17.1, 3044.0], [17.2, 3044.0], [17.3, 3044.0], [17.4, 3044.0], [17.5, 3044.0], [17.6, 3044.0], [17.7, 3044.0], [17.8, 3044.0], [17.9, 3044.0], [18.0, 3057.0], [18.1, 3057.0], [18.2, 3057.0], [18.3, 3057.0], [18.4, 3057.0], [18.5, 3057.0], [18.6, 3057.0], [18.7, 3057.0], [18.8, 3057.0], [18.9, 3057.0], [19.0, 3074.0], [19.1, 3074.0], [19.2, 3074.0], [19.3, 3074.0], [19.4, 3074.0], [19.5, 3074.0], [19.6, 3074.0], [19.7, 3074.0], [19.8, 3074.0], [19.9, 3074.0], [20.0, 3090.0], [20.1, 3090.0], [20.2, 3090.0], [20.3, 3090.0], [20.4, 3090.0], [20.5, 3090.0], [20.6, 3090.0], [20.7, 3090.0], [20.8, 3090.0], [20.9, 3090.0], [21.0, 3091.0], [21.1, 3091.0], [21.2, 3091.0], [21.3, 3091.0], [21.4, 3091.0], [21.5, 3091.0], [21.6, 3091.0], [21.7, 3091.0], [21.8, 3091.0], [21.9, 3091.0], [22.0, 3098.0], [22.1, 3098.0], [22.2, 3098.0], [22.3, 3098.0], [22.4, 3098.0], [22.5, 3098.0], [22.6, 3098.0], [22.7, 3098.0], [22.8, 3098.0], [22.9, 3098.0], [23.0, 3136.0], [23.1, 3136.0], [23.2, 3136.0], [23.3, 3136.0], [23.4, 3136.0], [23.5, 3136.0], [23.6, 3136.0], [23.7, 3136.0], [23.8, 3136.0], [23.9, 3136.0], [24.0, 3140.0], [24.1, 3140.0], [24.2, 3140.0], [24.3, 3140.0], [24.4, 3140.0], [24.5, 3140.0], [24.6, 3140.0], [24.7, 3140.0], [24.8, 3140.0], [24.9, 3140.0], [25.0, 3149.0], [25.1, 3149.0], [25.2, 3149.0], [25.3, 3149.0], [25.4, 3149.0], [25.5, 3149.0], [25.6, 3149.0], [25.7, 3149.0], [25.8, 3149.0], [25.9, 3149.0], [26.0, 3162.0], [26.1, 3162.0], [26.2, 3162.0], [26.3, 3162.0], [26.4, 3162.0], [26.5, 3162.0], [26.6, 3162.0], [26.7, 3162.0], [26.8, 3162.0], [26.9, 3162.0], [27.0, 3163.0], [27.1, 3163.0], [27.2, 3163.0], [27.3, 3163.0], [27.4, 3163.0], [27.5, 3163.0], [27.6, 3163.0], [27.7, 3163.0], [27.8, 3163.0], [27.9, 3163.0], [28.0, 3208.0], [28.1, 3208.0], [28.2, 3208.0], [28.3, 3208.0], [28.4, 3208.0], [28.5, 3208.0], [28.6, 3208.0], [28.7, 3208.0], [28.8, 3208.0], [28.9, 3208.0], [29.0, 3226.0], [29.1, 3226.0], [29.2, 3226.0], [29.3, 3226.0], [29.4, 3226.0], [29.5, 3226.0], [29.6, 3226.0], [29.7, 3226.0], [29.8, 3226.0], [29.9, 3226.0], [30.0, 3269.0], [30.1, 3269.0], [30.2, 3269.0], [30.3, 3269.0], [30.4, 3269.0], [30.5, 3269.0], [30.6, 3269.0], [30.7, 3269.0], [30.8, 3269.0], [30.9, 3269.0], [31.0, 3274.0], [31.1, 3274.0], [31.2, 3274.0], [31.3, 3274.0], [31.4, 3274.0], [31.5, 3274.0], [31.6, 3274.0], [31.7, 3274.0], [31.8, 3274.0], [31.9, 3274.0], [32.0, 3274.0], [32.1, 3274.0], [32.2, 3274.0], [32.3, 3274.0], [32.4, 3274.0], [32.5, 3274.0], [32.6, 3274.0], [32.7, 3274.0], [32.8, 3274.0], [32.9, 3274.0], [33.0, 3313.0], [33.1, 3313.0], [33.2, 3313.0], [33.3, 3313.0], [33.4, 3313.0], [33.5, 3313.0], [33.6, 3313.0], [33.7, 3313.0], [33.8, 3313.0], [33.9, 3313.0], [34.0, 3359.0], [34.1, 3359.0], [34.2, 3359.0], [34.3, 3359.0], [34.4, 3359.0], [34.5, 3359.0], [34.6, 3359.0], [34.7, 3359.0], [34.8, 3359.0], [34.9, 3359.0], [35.0, 3381.0], [35.1, 3381.0], [35.2, 3381.0], [35.3, 3381.0], [35.4, 3381.0], [35.5, 3381.0], [35.6, 3381.0], [35.7, 3381.0], [35.8, 3381.0], [35.9, 3381.0], [36.0, 3405.0], [36.1, 3405.0], [36.2, 3405.0], [36.3, 3405.0], [36.4, 3405.0], [36.5, 3405.0], [36.6, 3405.0], [36.7, 3405.0], [36.8, 3405.0], [36.9, 3405.0], [37.0, 3415.0], [37.1, 3415.0], [37.2, 3415.0], [37.3, 3415.0], [37.4, 3415.0], [37.5, 3415.0], [37.6, 3415.0], [37.7, 3415.0], [37.8, 3415.0], [37.9, 3415.0], [38.0, 3421.0], [38.1, 3421.0], [38.2, 3421.0], [38.3, 3421.0], [38.4, 3421.0], [38.5, 3421.0], [38.6, 3421.0], [38.7, 3421.0], [38.8, 3421.0], [38.9, 3421.0], [39.0, 3424.0], [39.1, 3424.0], [39.2, 3424.0], [39.3, 3424.0], [39.4, 3424.0], [39.5, 3424.0], [39.6, 3424.0], [39.7, 3424.0], [39.8, 3424.0], [39.9, 3424.0], [40.0, 3432.0], [40.1, 3432.0], [40.2, 3432.0], [40.3, 3432.0], [40.4, 3432.0], [40.5, 3432.0], [40.6, 3432.0], [40.7, 3432.0], [40.8, 3432.0], [40.9, 3432.0], [41.0, 3447.0], [41.1, 3447.0], [41.2, 3447.0], [41.3, 3447.0], [41.4, 3447.0], [41.5, 3447.0], [41.6, 3447.0], [41.7, 3447.0], [41.8, 3447.0], [41.9, 3447.0], [42.0, 3522.0], [42.1, 3522.0], [42.2, 3522.0], [42.3, 3522.0], [42.4, 3522.0], [42.5, 3522.0], [42.6, 3522.0], [42.7, 3522.0], [42.8, 3522.0], [42.9, 3522.0], [43.0, 3540.0], [43.1, 3540.0], [43.2, 3540.0], [43.3, 3540.0], [43.4, 3540.0], [43.5, 3540.0], [43.6, 3540.0], [43.7, 3540.0], [43.8, 3540.0], [43.9, 3540.0], [44.0, 3554.0], [44.1, 3554.0], [44.2, 3554.0], [44.3, 3554.0], [44.4, 3554.0], [44.5, 3554.0], [44.6, 3554.0], [44.7, 3554.0], [44.8, 3554.0], [44.9, 3554.0], [45.0, 3610.0], [45.1, 3610.0], [45.2, 3610.0], [45.3, 3610.0], [45.4, 3610.0], [45.5, 3610.0], [45.6, 3610.0], [45.7, 3610.0], [45.8, 3610.0], [45.9, 3610.0], [46.0, 3619.0], [46.1, 3619.0], [46.2, 3619.0], [46.3, 3619.0], [46.4, 3619.0], [46.5, 3619.0], [46.6, 3619.0], [46.7, 3619.0], [46.8, 3619.0], [46.9, 3619.0], [47.0, 3627.0], [47.1, 3627.0], [47.2, 3627.0], [47.3, 3627.0], [47.4, 3627.0], [47.5, 3627.0], [47.6, 3627.0], [47.7, 3627.0], [47.8, 3627.0], [47.9, 3627.0], [48.0, 3633.0], [48.1, 3633.0], [48.2, 3633.0], [48.3, 3633.0], [48.4, 3633.0], [48.5, 3633.0], [48.6, 3633.0], [48.7, 3633.0], [48.8, 3633.0], [48.9, 3633.0], [49.0, 3644.0], [49.1, 3644.0], [49.2, 3644.0], [49.3, 3644.0], [49.4, 3644.0], [49.5, 3644.0], [49.6, 3644.0], [49.7, 3644.0], [49.8, 3644.0], [49.9, 3644.0], [50.0, 3657.0], [50.1, 3657.0], [50.2, 3657.0], [50.3, 3657.0], [50.4, 3657.0], [50.5, 3657.0], [50.6, 3657.0], [50.7, 3657.0], [50.8, 3657.0], [50.9, 3657.0], [51.0, 3696.0], [51.1, 3696.0], [51.2, 3696.0], [51.3, 3696.0], [51.4, 3696.0], [51.5, 3696.0], [51.6, 3696.0], [51.7, 3696.0], [51.8, 3696.0], [51.9, 3696.0], [52.0, 3701.0], [52.1, 3701.0], [52.2, 3701.0], [52.3, 3701.0], [52.4, 3701.0], [52.5, 3701.0], [52.6, 3701.0], [52.7, 3701.0], [52.8, 3701.0], [52.9, 3701.0], [53.0, 3716.0], [53.1, 3716.0], [53.2, 3716.0], [53.3, 3716.0], [53.4, 3716.0], [53.5, 3716.0], [53.6, 3716.0], [53.7, 3716.0], [53.8, 3716.0], [53.9, 3716.0], [54.0, 3716.0], [54.1, 3716.0], [54.2, 3716.0], [54.3, 3716.0], [54.4, 3716.0], [54.5, 3716.0], [54.6, 3716.0], [54.7, 3716.0], [54.8, 3716.0], [54.9, 3716.0], [55.0, 3729.0], [55.1, 3729.0], [55.2, 3729.0], [55.3, 3729.0], [55.4, 3729.0], [55.5, 3729.0], [55.6, 3729.0], [55.7, 3729.0], [55.8, 3729.0], [55.9, 3729.0], [56.0, 3731.0], [56.1, 3731.0], [56.2, 3731.0], [56.3, 3731.0], [56.4, 3731.0], [56.5, 3731.0], [56.6, 3731.0], [56.7, 3731.0], [56.8, 3731.0], [56.9, 3731.0], [57.0, 3741.0], [57.1, 3741.0], [57.2, 3741.0], [57.3, 3741.0], [57.4, 3741.0], [57.5, 3741.0], [57.6, 3741.0], [57.7, 3741.0], [57.8, 3741.0], [57.9, 3741.0], [58.0, 3745.0], [58.1, 3745.0], [58.2, 3745.0], [58.3, 3745.0], [58.4, 3745.0], [58.5, 3745.0], [58.6, 3745.0], [58.7, 3745.0], [58.8, 3745.0], [58.9, 3745.0], [59.0, 3764.0], [59.1, 3764.0], [59.2, 3764.0], [59.3, 3764.0], [59.4, 3764.0], [59.5, 3764.0], [59.6, 3764.0], [59.7, 3764.0], [59.8, 3764.0], [59.9, 3764.0], [60.0, 3773.0], [60.1, 3773.0], [60.2, 3773.0], [60.3, 3773.0], [60.4, 3773.0], [60.5, 3773.0], [60.6, 3773.0], [60.7, 3773.0], [60.8, 3773.0], [60.9, 3773.0], [61.0, 3802.0], [61.1, 3802.0], [61.2, 3802.0], [61.3, 3802.0], [61.4, 3802.0], [61.5, 3802.0], [61.6, 3802.0], [61.7, 3802.0], [61.8, 3802.0], [61.9, 3802.0], [62.0, 3820.0], [62.1, 3820.0], [62.2, 3820.0], [62.3, 3820.0], [62.4, 3820.0], [62.5, 3820.0], [62.6, 3820.0], [62.7, 3820.0], [62.8, 3820.0], [62.9, 3820.0], [63.0, 3840.0], [63.1, 3840.0], [63.2, 3840.0], [63.3, 3840.0], [63.4, 3840.0], [63.5, 3840.0], [63.6, 3840.0], [63.7, 3840.0], [63.8, 3840.0], [63.9, 3840.0], [64.0, 3847.0], [64.1, 3847.0], [64.2, 3847.0], [64.3, 3847.0], [64.4, 3847.0], [64.5, 3847.0], [64.6, 3847.0], [64.7, 3847.0], [64.8, 3847.0], [64.9, 3847.0], [65.0, 3857.0], [65.1, 3857.0], [65.2, 3857.0], [65.3, 3857.0], [65.4, 3857.0], [65.5, 3857.0], [65.6, 3857.0], [65.7, 3857.0], [65.8, 3857.0], [65.9, 3857.0], [66.0, 3857.0], [66.1, 3857.0], [66.2, 3857.0], [66.3, 3857.0], [66.4, 3857.0], [66.5, 3857.0], [66.6, 3857.0], [66.7, 3857.0], [66.8, 3857.0], [66.9, 3857.0], [67.0, 3900.0], [67.1, 3900.0], [67.2, 3900.0], [67.3, 3900.0], [67.4, 3900.0], [67.5, 3900.0], [67.6, 3900.0], [67.7, 3900.0], [67.8, 3900.0], [67.9, 3900.0], [68.0, 3921.0], [68.1, 3921.0], [68.2, 3921.0], [68.3, 3921.0], [68.4, 3921.0], [68.5, 3921.0], [68.6, 3921.0], [68.7, 3921.0], [68.8, 3921.0], [68.9, 3921.0], [69.0, 3926.0], [69.1, 3926.0], [69.2, 3926.0], [69.3, 3926.0], [69.4, 3926.0], [69.5, 3926.0], [69.6, 3926.0], [69.7, 3926.0], [69.8, 3926.0], [69.9, 3926.0], [70.0, 3929.0], [70.1, 3929.0], [70.2, 3929.0], [70.3, 3929.0], [70.4, 3929.0], [70.5, 3929.0], [70.6, 3929.0], [70.7, 3929.0], [70.8, 3929.0], [70.9, 3929.0], [71.0, 3942.0], [71.1, 3942.0], [71.2, 3942.0], [71.3, 3942.0], [71.4, 3942.0], [71.5, 3942.0], [71.6, 3942.0], [71.7, 3942.0], [71.8, 3942.0], [71.9, 3942.0], [72.0, 3952.0], [72.1, 3952.0], [72.2, 3952.0], [72.3, 3952.0], [72.4, 3952.0], [72.5, 3952.0], [72.6, 3952.0], [72.7, 3952.0], [72.8, 3952.0], [72.9, 3952.0], [73.0, 3984.0], [73.1, 3984.0], [73.2, 3984.0], [73.3, 3984.0], [73.4, 3984.0], [73.5, 3984.0], [73.6, 3984.0], [73.7, 3984.0], [73.8, 3984.0], [73.9, 3984.0], [74.0, 4023.0], [74.1, 4023.0], [74.2, 4023.0], [74.3, 4023.0], [74.4, 4023.0], [74.5, 4023.0], [74.6, 4023.0], [74.7, 4023.0], [74.8, 4023.0], [74.9, 4023.0], [75.0, 4037.0], [75.1, 4037.0], [75.2, 4037.0], [75.3, 4037.0], [75.4, 4037.0], [75.5, 4037.0], [75.6, 4037.0], [75.7, 4037.0], [75.8, 4037.0], [75.9, 4037.0], [76.0, 4043.0], [76.1, 4043.0], [76.2, 4043.0], [76.3, 4043.0], [76.4, 4043.0], [76.5, 4043.0], [76.6, 4043.0], [76.7, 4043.0], [76.8, 4043.0], [76.9, 4043.0], [77.0, 4064.0], [77.1, 4064.0], [77.2, 4064.0], [77.3, 4064.0], [77.4, 4064.0], [77.5, 4064.0], [77.6, 4064.0], [77.7, 4064.0], [77.8, 4064.0], [77.9, 4064.0], [78.0, 4070.0], [78.1, 4070.0], [78.2, 4070.0], [78.3, 4070.0], [78.4, 4070.0], [78.5, 4070.0], [78.6, 4070.0], [78.7, 4070.0], [78.8, 4070.0], [78.9, 4070.0], [79.0, 4081.0], [79.1, 4081.0], [79.2, 4081.0], [79.3, 4081.0], [79.4, 4081.0], [79.5, 4081.0], [79.6, 4081.0], [79.7, 4081.0], [79.8, 4081.0], [79.9, 4081.0], [80.0, 4083.0], [80.1, 4083.0], [80.2, 4083.0], [80.3, 4083.0], [80.4, 4083.0], [80.5, 4083.0], [80.6, 4083.0], [80.7, 4083.0], [80.8, 4083.0], [80.9, 4083.0], [81.0, 4084.0], [81.1, 4084.0], [81.2, 4084.0], [81.3, 4084.0], [81.4, 4084.0], [81.5, 4084.0], [81.6, 4084.0], [81.7, 4084.0], [81.8, 4084.0], [81.9, 4084.0], [82.0, 4111.0], [82.1, 4111.0], [82.2, 4111.0], [82.3, 4111.0], [82.4, 4111.0], [82.5, 4111.0], [82.6, 4111.0], [82.7, 4111.0], [82.8, 4111.0], [82.9, 4111.0], [83.0, 4114.0], [83.1, 4114.0], [83.2, 4114.0], [83.3, 4114.0], [83.4, 4114.0], [83.5, 4114.0], [83.6, 4114.0], [83.7, 4114.0], [83.8, 4114.0], [83.9, 4114.0], [84.0, 4157.0], [84.1, 4157.0], [84.2, 4157.0], [84.3, 4157.0], [84.4, 4157.0], [84.5, 4157.0], [84.6, 4157.0], [84.7, 4157.0], [84.8, 4157.0], [84.9, 4157.0], [85.0, 4190.0], [85.1, 4190.0], [85.2, 4190.0], [85.3, 4190.0], [85.4, 4190.0], [85.5, 4190.0], [85.6, 4190.0], [85.7, 4190.0], [85.8, 4190.0], [85.9, 4190.0], [86.0, 4205.0], [86.1, 4205.0], [86.2, 4205.0], [86.3, 4205.0], [86.4, 4205.0], [86.5, 4205.0], [86.6, 4205.0], [86.7, 4205.0], [86.8, 4205.0], [86.9, 4205.0], [87.0, 4299.0], [87.1, 4299.0], [87.2, 4299.0], [87.3, 4299.0], [87.4, 4299.0], [87.5, 4299.0], [87.6, 4299.0], [87.7, 4299.0], [87.8, 4299.0], [87.9, 4299.0], [88.0, 4327.0], [88.1, 4327.0], [88.2, 4327.0], [88.3, 4327.0], [88.4, 4327.0], [88.5, 4327.0], [88.6, 4327.0], [88.7, 4327.0], [88.8, 4327.0], [88.9, 4327.0], [89.0, 4332.0], [89.1, 4332.0], [89.2, 4332.0], [89.3, 4332.0], [89.4, 4332.0], [89.5, 4332.0], [89.6, 4332.0], [89.7, 4332.0], [89.8, 4332.0], [89.9, 4332.0], [90.0, 4342.0], [90.1, 4342.0], [90.2, 4342.0], [90.3, 4342.0], [90.4, 4342.0], [90.5, 4342.0], [90.6, 4342.0], [90.7, 4342.0], [90.8, 4342.0], [90.9, 4342.0], [91.0, 4372.0], [91.1, 4372.0], [91.2, 4372.0], [91.3, 4372.0], [91.4, 4372.0], [91.5, 4372.0], [91.6, 4372.0], [91.7, 4372.0], [91.8, 4372.0], [91.9, 4372.0], [92.0, 4385.0], [92.1, 4385.0], [92.2, 4385.0], [92.3, 4385.0], [92.4, 4385.0], [92.5, 4385.0], [92.6, 4385.0], [92.7, 4385.0], [92.8, 4385.0], [92.9, 4385.0], [93.0, 4463.0], [93.1, 4463.0], [93.2, 4463.0], [93.3, 4463.0], [93.4, 4463.0], [93.5, 4463.0], [93.6, 4463.0], [93.7, 4463.0], [93.8, 4463.0], [93.9, 4463.0], [94.0, 4467.0], [94.1, 4467.0], [94.2, 4467.0], [94.3, 4467.0], [94.4, 4467.0], [94.5, 4467.0], [94.6, 4467.0], [94.7, 4467.0], [94.8, 4467.0], [94.9, 4467.0], [95.0, 4488.0], [95.1, 4488.0], [95.2, 4488.0], [95.3, 4488.0], [95.4, 4488.0], [95.5, 4488.0], [95.6, 4488.0], [95.7, 4488.0], [95.8, 4488.0], [95.9, 4488.0], [96.0, 4499.0], [96.1, 4499.0], [96.2, 4499.0], [96.3, 4499.0], [96.4, 4499.0], [96.5, 4499.0], [96.6, 4499.0], [96.7, 4499.0], [96.8, 4499.0], [96.9, 4499.0], [97.0, 4510.0], [97.1, 4510.0], [97.2, 4510.0], [97.3, 4510.0], [97.4, 4510.0], [97.5, 4510.0], [97.6, 4510.0], [97.7, 4510.0], [97.8, 4510.0], [97.9, 4510.0], [98.0, 4520.0], [98.1, 4520.0], [98.2, 4520.0], [98.3, 4520.0], [98.4, 4520.0], [98.5, 4520.0], [98.6, 4520.0], [98.7, 4520.0], [98.8, 4520.0], [98.9, 4520.0], [99.0, 4531.0], [99.1, 4531.0], [99.2, 4531.0], [99.3, 4531.0], [99.4, 4531.0], [99.5, 4531.0], [99.6, 4531.0], [99.7, 4531.0], [99.8, 4531.0], [99.9, 4531.0]], "isOverall": false, "label": "HTTP Request", "isController": false}], "supportsControllersDiscrimination": true, "maxX": 100.0, "title": "Response Time Percentiles"}},
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
        data: {"result": {"minY": 1.0, "minX": 2000.0, "maxY": 9.0, "series": [{"data": [[2000.0, 1.0], [2100.0, 1.0], [2200.0, 2.0], [2400.0, 1.0], [2500.0, 1.0], [2600.0, 4.0], [2700.0, 3.0], [2800.0, 3.0], [2900.0, 1.0], [3000.0, 6.0], [3100.0, 5.0], [3200.0, 5.0], [3300.0, 3.0], [3400.0, 6.0], [3500.0, 3.0], [3600.0, 7.0], [3700.0, 9.0], [3800.0, 6.0], [3900.0, 7.0], [4000.0, 8.0], [4100.0, 4.0], [4200.0, 2.0], [4300.0, 5.0], [4400.0, 4.0], [4500.0, 3.0]], "isOverall": false, "label": "HTTP Request", "isController": false}], "supportsControllersDiscrimination": true, "granularity": 100, "maxX": 4500.0, "title": "Response Time Distribution"}},
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
        data: {"result": {"minY": 100.0, "minX": 2.0, "ticks": [[0, "Requests having \nresponse time <= 500ms"], [1, "Requests having \nresponse time > 500ms and <= 1,500ms"], [2, "Requests having \nresponse time > 1,500ms"], [3, "Requests in error"]], "maxY": 100.0, "series": [{"data": [], "color": "#9ACD32", "isOverall": false, "label": "Requests having \nresponse time <= 500ms", "isController": false}, {"data": [], "color": "yellow", "isOverall": false, "label": "Requests having \nresponse time > 500ms and <= 1,500ms", "isController": false}, {"data": [[2.0, 100.0]], "color": "orange", "isOverall": false, "label": "Requests having \nresponse time > 1,500ms", "isController": false}, {"data": [], "color": "#FF6347", "isOverall": false, "label": "Requests in error", "isController": false}], "supportsControllersDiscrimination": false, "maxX": 2.0, "title": "Synthetic Response Times Distribution"}},
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
        data: {"result": {"minY": 51.16999999999997, "minX": 1.55978124E12, "maxY": 51.16999999999997, "series": [{"data": [[1.55978124E12, 51.16999999999997]], "isOverall": false, "label": "Job Offers", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 60000, "maxX": 1.55978124E12, "title": "Active Threads Over Time"}},
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
        data: {"result": {"minY": 2450.8, "minX": 1.0, "maxY": 4531.0, "series": [{"data": [[2.0, 4531.0], [3.0, 4372.0], [4.0, 4520.0], [5.0, 4043.0], [6.0, 4510.0], [7.0, 4463.0], [8.0, 4499.0], [9.0, 4157.0], [10.0, 4488.0], [11.0, 4081.0], [12.0, 4467.0], [13.0, 3942.0], [14.0, 3857.0], [15.0, 4385.0], [16.0, 4114.0], [17.0, 4342.0], [18.0, 3929.0], [19.0, 4332.0], [20.0, 4327.0], [21.0, 4084.0], [22.0, 3764.0], [23.0, 3701.0], [24.0, 3847.0], [25.0, 3731.0], [26.0, 3745.0], [27.0, 3840.0], [28.0, 4205.0], [29.0, 3716.0], [30.0, 4190.0], [31.0, 4083.0], [33.0, 4111.0], [32.0, 3696.0], [35.0, 3802.0], [34.0, 3729.0], [37.0, 4064.0], [36.0, 4070.0], [39.0, 4037.0], [38.0, 3984.0], [41.0, 4023.0], [40.0, 3926.0], [43.0, 3644.0], [42.0, 3952.0], [45.0, 3921.0], [44.0, 3820.0], [47.0, 3900.0], [46.0, 3627.0], [49.0, 3226.0], [48.0, 3716.0], [51.0, 3633.0], [50.0, 3857.0], [53.0, 3149.0], [52.0, 3619.0], [55.0, 3090.0], [54.0, 3773.0], [57.0, 3741.0], [56.0, 3091.0], [59.0, 3657.0], [58.0, 3313.0], [61.0, 3447.0], [60.0, 3044.0], [62.0, 3610.0], [67.0, 3274.0], [66.0, 3540.0], [65.0, 3421.0], [64.0, 3489.0], [71.0, 3057.0], [70.0, 3522.0], [69.0, 3208.0], [68.0, 3163.0], [75.0, 3415.0], [74.0, 3269.0], [73.0, 3432.0], [72.0, 2773.0], [79.0, 3359.0], [78.0, 3381.0], [77.0, 3162.0], [76.0, 3405.0], [82.0, 2696.0], [81.0, 2809.0], [80.0, 3274.0], [90.0, 3098.0], [89.0, 2937.0], [100.0, 2450.8], [1.0, 4299.0]], "isOverall": false, "label": "HTTP Request", "isController": false}, {"data": [[51.16999999999997, 3561.3899999999994]], "isOverall": false, "label": "HTTP Request-Aggregated", "isController": false}], "supportsControllersDiscrimination": true, "maxX": 100.0, "title": "Time VS Threads"}},
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
        data : {"result": {"minY": 220.0, "minX": 1.55978124E12, "maxY": 1466.6666666666667, "series": [{"data": [[1.55978124E12, 1466.6666666666667]], "isOverall": false, "label": "Bytes received per second", "isController": false}, {"data": [[1.55978124E12, 220.0]], "isOverall": false, "label": "Bytes sent per second", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 60000, "maxX": 1.55978124E12, "title": "Bytes Throughput Over Time"}},
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
        data: {"result": {"minY": 3561.3899999999994, "minX": 1.55978124E12, "maxY": 3561.3899999999994, "series": [{"data": [[1.55978124E12, 3561.3899999999994]], "isOverall": false, "label": "HTTP Request", "isController": false}], "supportsControllersDiscrimination": true, "granularity": 60000, "maxX": 1.55978124E12, "title": "Response Time Over Time"}},
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
        data: {"result": {"minY": 3520.7599999999993, "minX": 1.55978124E12, "maxY": 3520.7599999999993, "series": [{"data": [[1.55978124E12, 3520.7599999999993]], "isOverall": false, "label": "HTTP Request", "isController": false}], "supportsControllersDiscrimination": true, "granularity": 60000, "maxX": 1.55978124E12, "title": "Latencies Over Time"}},
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
        data: {"result": {"minY": 40.81, "minX": 1.55978124E12, "maxY": 40.81, "series": [{"data": [[1.55978124E12, 40.81]], "isOverall": false, "label": "HTTP Request", "isController": false}], "supportsControllersDiscrimination": true, "granularity": 60000, "maxX": 1.55978124E12, "title": "Connect Time Over Time"}},
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
        data: {"result": {"minY": 2090.0, "minX": 1.55978124E12, "maxY": 4531.0, "series": [{"data": [[1.55978124E12, 4531.0]], "isOverall": false, "label": "Max", "isController": false}, {"data": [[1.55978124E12, 2090.0]], "isOverall": false, "label": "Min", "isController": false}, {"data": [[1.55978124E12, 4341.0]], "isOverall": false, "label": "90th percentile", "isController": false}, {"data": [[1.55978124E12, 4530.89]], "isOverall": false, "label": "99th percentile", "isController": false}, {"data": [[1.55978124E12, 4486.95]], "isOverall": false, "label": "95th percentile", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 60000, "maxX": 1.55978124E12, "title": "Response Time Percentiles Over Time (successful requests only)"}},
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
    data: {"result": {"minY": 2484.5, "minX": 10.0, "maxY": 4075.5, "series": [{"data": [[10.0, 2484.5], [42.0, 4075.5], [48.0, 3336.0]], "isOverall": false, "label": "Successes", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 1000, "maxX": 48.0, "title": "Response Time Vs Request"}},
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
    data: {"result": {"minY": 2451.5, "minX": 10.0, "maxY": 4042.5, "series": [{"data": [[10.0, 2451.5], [42.0, 4042.5], [48.0, 3282.5]], "isOverall": false, "label": "Successes", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 1000, "maxX": 48.0, "title": "Latencies Vs Request"}},
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
        data: {"result": {"minY": 1.6666666666666667, "minX": 1.55978124E12, "maxY": 1.6666666666666667, "series": [{"data": [[1.55978124E12, 1.6666666666666667]], "isOverall": false, "label": "hitsPerSecond", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 60000, "maxX": 1.55978124E12, "title": "Hits Per Second"}},
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
        data: {"result": {"minY": 1.6666666666666667, "minX": 1.55978124E12, "maxY": 1.6666666666666667, "series": [{"data": [[1.55978124E12, 1.6666666666666667]], "isOverall": false, "label": "200", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 60000, "maxX": 1.55978124E12, "title": "Codes Per Second"}},
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
        data: {"result": {"minY": 1.6666666666666667, "minX": 1.55978124E12, "maxY": 1.6666666666666667, "series": [{"data": [[1.55978124E12, 1.6666666666666667]], "isOverall": false, "label": "HTTP Request-success", "isController": false}], "supportsControllersDiscrimination": true, "granularity": 60000, "maxX": 1.55978124E12, "title": "Transactions Per Second"}},
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
        data: {"result": {"minY": 1.6666666666666667, "minX": 1.55978124E12, "maxY": 1.6666666666666667, "series": [{"data": [[1.55978124E12, 1.6666666666666667]], "isOverall": false, "label": "Transaction-success", "isController": false}, {"data": [], "isOverall": false, "label": "Transaction-failure", "isController": false}], "supportsControllersDiscrimination": true, "granularity": 60000, "maxX": 1.55978124E12, "title": "Total Transactions Per Second"}},
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

