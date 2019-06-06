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
        data: {"result": {"minY": 2291.0, "minX": 0.0, "maxY": 4698.0, "series": [{"data": [[0.0, 2291.0], [0.1, 2291.0], [0.2, 2291.0], [0.3, 2291.0], [0.4, 2291.0], [0.5, 2291.0], [0.6, 2291.0], [0.7, 2291.0], [0.8, 2291.0], [0.9, 2291.0], [1.0, 2425.0], [1.1, 2425.0], [1.2, 2425.0], [1.3, 2425.0], [1.4, 2425.0], [1.5, 2425.0], [1.6, 2425.0], [1.7, 2425.0], [1.8, 2425.0], [1.9, 2425.0], [2.0, 2474.0], [2.1, 2474.0], [2.2, 2474.0], [2.3, 2474.0], [2.4, 2474.0], [2.5, 2474.0], [2.6, 2474.0], [2.7, 2474.0], [2.8, 2474.0], [2.9, 2474.0], [3.0, 2483.0], [3.1, 2483.0], [3.2, 2483.0], [3.3, 2483.0], [3.4, 2483.0], [3.5, 2483.0], [3.6, 2483.0], [3.7, 2483.0], [3.8, 2483.0], [3.9, 2483.0], [4.0, 2519.0], [4.1, 2519.0], [4.2, 2519.0], [4.3, 2519.0], [4.4, 2519.0], [4.5, 2519.0], [4.6, 2519.0], [4.7, 2519.0], [4.8, 2519.0], [4.9, 2519.0], [5.0, 2554.0], [5.1, 2554.0], [5.2, 2554.0], [5.3, 2554.0], [5.4, 2554.0], [5.5, 2554.0], [5.6, 2554.0], [5.7, 2554.0], [5.8, 2554.0], [5.9, 2554.0], [6.0, 2577.0], [6.1, 2577.0], [6.2, 2577.0], [6.3, 2577.0], [6.4, 2577.0], [6.5, 2577.0], [6.6, 2577.0], [6.7, 2577.0], [6.8, 2577.0], [6.9, 2577.0], [7.0, 2602.0], [7.1, 2602.0], [7.2, 2602.0], [7.3, 2602.0], [7.4, 2602.0], [7.5, 2602.0], [7.6, 2602.0], [7.7, 2602.0], [7.8, 2602.0], [7.9, 2602.0], [8.0, 2629.0], [8.1, 2629.0], [8.2, 2629.0], [8.3, 2629.0], [8.4, 2629.0], [8.5, 2629.0], [8.6, 2629.0], [8.7, 2629.0], [8.8, 2629.0], [8.9, 2629.0], [9.0, 2701.0], [9.1, 2701.0], [9.2, 2701.0], [9.3, 2701.0], [9.4, 2701.0], [9.5, 2701.0], [9.6, 2701.0], [9.7, 2701.0], [9.8, 2701.0], [9.9, 2701.0], [10.0, 2883.0], [10.1, 2883.0], [10.2, 2883.0], [10.3, 2883.0], [10.4, 2883.0], [10.5, 2883.0], [10.6, 2883.0], [10.7, 2883.0], [10.8, 2883.0], [10.9, 2883.0], [11.0, 2887.0], [11.1, 2887.0], [11.2, 2887.0], [11.3, 2887.0], [11.4, 2887.0], [11.5, 2887.0], [11.6, 2887.0], [11.7, 2887.0], [11.8, 2887.0], [11.9, 2887.0], [12.0, 2984.0], [12.1, 2984.0], [12.2, 2984.0], [12.3, 2984.0], [12.4, 2984.0], [12.5, 2984.0], [12.6, 2984.0], [12.7, 2984.0], [12.8, 2984.0], [12.9, 2984.0], [13.0, 3003.0], [13.1, 3003.0], [13.2, 3003.0], [13.3, 3003.0], [13.4, 3003.0], [13.5, 3003.0], [13.6, 3003.0], [13.7, 3003.0], [13.8, 3003.0], [13.9, 3003.0], [14.0, 3012.0], [14.1, 3012.0], [14.2, 3012.0], [14.3, 3012.0], [14.4, 3012.0], [14.5, 3012.0], [14.6, 3012.0], [14.7, 3012.0], [14.8, 3012.0], [14.9, 3012.0], [15.0, 3099.0], [15.1, 3099.0], [15.2, 3099.0], [15.3, 3099.0], [15.4, 3099.0], [15.5, 3099.0], [15.6, 3099.0], [15.7, 3099.0], [15.8, 3099.0], [15.9, 3099.0], [16.0, 3138.0], [16.1, 3138.0], [16.2, 3138.0], [16.3, 3138.0], [16.4, 3138.0], [16.5, 3138.0], [16.6, 3138.0], [16.7, 3138.0], [16.8, 3138.0], [16.9, 3138.0], [17.0, 3222.0], [17.1, 3222.0], [17.2, 3222.0], [17.3, 3222.0], [17.4, 3222.0], [17.5, 3222.0], [17.6, 3222.0], [17.7, 3222.0], [17.8, 3222.0], [17.9, 3222.0], [18.0, 3227.0], [18.1, 3227.0], [18.2, 3227.0], [18.3, 3227.0], [18.4, 3227.0], [18.5, 3227.0], [18.6, 3227.0], [18.7, 3227.0], [18.8, 3227.0], [18.9, 3227.0], [19.0, 3240.0], [19.1, 3240.0], [19.2, 3240.0], [19.3, 3240.0], [19.4, 3240.0], [19.5, 3240.0], [19.6, 3240.0], [19.7, 3240.0], [19.8, 3240.0], [19.9, 3240.0], [20.0, 3264.0], [20.1, 3264.0], [20.2, 3264.0], [20.3, 3264.0], [20.4, 3264.0], [20.5, 3264.0], [20.6, 3264.0], [20.7, 3264.0], [20.8, 3264.0], [20.9, 3264.0], [21.0, 3284.0], [21.1, 3284.0], [21.2, 3284.0], [21.3, 3284.0], [21.4, 3284.0], [21.5, 3284.0], [21.6, 3284.0], [21.7, 3284.0], [21.8, 3284.0], [21.9, 3284.0], [22.0, 3288.0], [22.1, 3288.0], [22.2, 3288.0], [22.3, 3288.0], [22.4, 3288.0], [22.5, 3288.0], [22.6, 3288.0], [22.7, 3288.0], [22.8, 3288.0], [22.9, 3288.0], [23.0, 3303.0], [23.1, 3303.0], [23.2, 3303.0], [23.3, 3303.0], [23.4, 3303.0], [23.5, 3303.0], [23.6, 3303.0], [23.7, 3303.0], [23.8, 3303.0], [23.9, 3303.0], [24.0, 3303.0], [24.1, 3303.0], [24.2, 3303.0], [24.3, 3303.0], [24.4, 3303.0], [24.5, 3303.0], [24.6, 3303.0], [24.7, 3303.0], [24.8, 3303.0], [24.9, 3303.0], [25.0, 3322.0], [25.1, 3322.0], [25.2, 3322.0], [25.3, 3322.0], [25.4, 3322.0], [25.5, 3322.0], [25.6, 3322.0], [25.7, 3322.0], [25.8, 3322.0], [25.9, 3322.0], [26.0, 3354.0], [26.1, 3354.0], [26.2, 3354.0], [26.3, 3354.0], [26.4, 3354.0], [26.5, 3354.0], [26.6, 3354.0], [26.7, 3354.0], [26.8, 3354.0], [26.9, 3354.0], [27.0, 3414.0], [27.1, 3414.0], [27.2, 3414.0], [27.3, 3414.0], [27.4, 3414.0], [27.5, 3414.0], [27.6, 3414.0], [27.7, 3414.0], [27.8, 3414.0], [27.9, 3414.0], [28.0, 3436.0], [28.1, 3436.0], [28.2, 3436.0], [28.3, 3436.0], [28.4, 3436.0], [28.5, 3436.0], [28.6, 3436.0], [28.7, 3436.0], [28.8, 3436.0], [28.9, 3436.0], [29.0, 3446.0], [29.1, 3446.0], [29.2, 3446.0], [29.3, 3446.0], [29.4, 3446.0], [29.5, 3446.0], [29.6, 3446.0], [29.7, 3446.0], [29.8, 3446.0], [29.9, 3446.0], [30.0, 3446.0], [30.1, 3446.0], [30.2, 3446.0], [30.3, 3446.0], [30.4, 3446.0], [30.5, 3446.0], [30.6, 3446.0], [30.7, 3446.0], [30.8, 3446.0], [30.9, 3446.0], [31.0, 3454.0], [31.1, 3454.0], [31.2, 3454.0], [31.3, 3454.0], [31.4, 3454.0], [31.5, 3454.0], [31.6, 3454.0], [31.7, 3454.0], [31.8, 3454.0], [31.9, 3454.0], [32.0, 3464.0], [32.1, 3464.0], [32.2, 3464.0], [32.3, 3464.0], [32.4, 3464.0], [32.5, 3464.0], [32.6, 3464.0], [32.7, 3464.0], [32.8, 3464.0], [32.9, 3464.0], [33.0, 3476.0], [33.1, 3476.0], [33.2, 3476.0], [33.3, 3476.0], [33.4, 3476.0], [33.5, 3476.0], [33.6, 3476.0], [33.7, 3476.0], [33.8, 3476.0], [33.9, 3476.0], [34.0, 3524.0], [34.1, 3524.0], [34.2, 3524.0], [34.3, 3524.0], [34.4, 3524.0], [34.5, 3524.0], [34.6, 3524.0], [34.7, 3524.0], [34.8, 3524.0], [34.9, 3524.0], [35.0, 3537.0], [35.1, 3537.0], [35.2, 3537.0], [35.3, 3537.0], [35.4, 3537.0], [35.5, 3537.0], [35.6, 3537.0], [35.7, 3537.0], [35.8, 3537.0], [35.9, 3537.0], [36.0, 3558.0], [36.1, 3558.0], [36.2, 3558.0], [36.3, 3558.0], [36.4, 3558.0], [36.5, 3558.0], [36.6, 3558.0], [36.7, 3558.0], [36.8, 3558.0], [36.9, 3558.0], [37.0, 3559.0], [37.1, 3559.0], [37.2, 3559.0], [37.3, 3559.0], [37.4, 3559.0], [37.5, 3559.0], [37.6, 3559.0], [37.7, 3559.0], [37.8, 3559.0], [37.9, 3559.0], [38.0, 3562.0], [38.1, 3562.0], [38.2, 3562.0], [38.3, 3562.0], [38.4, 3562.0], [38.5, 3562.0], [38.6, 3562.0], [38.7, 3562.0], [38.8, 3562.0], [38.9, 3562.0], [39.0, 3574.0], [39.1, 3574.0], [39.2, 3574.0], [39.3, 3574.0], [39.4, 3574.0], [39.5, 3574.0], [39.6, 3574.0], [39.7, 3574.0], [39.8, 3574.0], [39.9, 3574.0], [40.0, 3584.0], [40.1, 3584.0], [40.2, 3584.0], [40.3, 3584.0], [40.4, 3584.0], [40.5, 3584.0], [40.6, 3584.0], [40.7, 3584.0], [40.8, 3584.0], [40.9, 3584.0], [41.0, 3606.0], [41.1, 3606.0], [41.2, 3606.0], [41.3, 3606.0], [41.4, 3606.0], [41.5, 3606.0], [41.6, 3606.0], [41.7, 3606.0], [41.8, 3606.0], [41.9, 3606.0], [42.0, 3635.0], [42.1, 3635.0], [42.2, 3635.0], [42.3, 3635.0], [42.4, 3635.0], [42.5, 3635.0], [42.6, 3635.0], [42.7, 3635.0], [42.8, 3635.0], [42.9, 3635.0], [43.0, 3635.0], [43.1, 3635.0], [43.2, 3635.0], [43.3, 3635.0], [43.4, 3635.0], [43.5, 3635.0], [43.6, 3635.0], [43.7, 3635.0], [43.8, 3635.0], [43.9, 3635.0], [44.0, 3662.0], [44.1, 3662.0], [44.2, 3662.0], [44.3, 3662.0], [44.4, 3662.0], [44.5, 3662.0], [44.6, 3662.0], [44.7, 3662.0], [44.8, 3662.0], [44.9, 3662.0], [45.0, 3678.0], [45.1, 3678.0], [45.2, 3678.0], [45.3, 3678.0], [45.4, 3678.0], [45.5, 3678.0], [45.6, 3678.0], [45.7, 3678.0], [45.8, 3678.0], [45.9, 3678.0], [46.0, 3706.0], [46.1, 3706.0], [46.2, 3706.0], [46.3, 3706.0], [46.4, 3706.0], [46.5, 3706.0], [46.6, 3706.0], [46.7, 3706.0], [46.8, 3706.0], [46.9, 3706.0], [47.0, 3716.0], [47.1, 3716.0], [47.2, 3716.0], [47.3, 3716.0], [47.4, 3716.0], [47.5, 3716.0], [47.6, 3716.0], [47.7, 3716.0], [47.8, 3716.0], [47.9, 3716.0], [48.0, 3735.0], [48.1, 3735.0], [48.2, 3735.0], [48.3, 3735.0], [48.4, 3735.0], [48.5, 3735.0], [48.6, 3735.0], [48.7, 3735.0], [48.8, 3735.0], [48.9, 3735.0], [49.0, 3751.0], [49.1, 3751.0], [49.2, 3751.0], [49.3, 3751.0], [49.4, 3751.0], [49.5, 3751.0], [49.6, 3751.0], [49.7, 3751.0], [49.8, 3751.0], [49.9, 3751.0], [50.0, 3776.0], [50.1, 3776.0], [50.2, 3776.0], [50.3, 3776.0], [50.4, 3776.0], [50.5, 3776.0], [50.6, 3776.0], [50.7, 3776.0], [50.8, 3776.0], [50.9, 3776.0], [51.0, 3801.0], [51.1, 3801.0], [51.2, 3801.0], [51.3, 3801.0], [51.4, 3801.0], [51.5, 3801.0], [51.6, 3801.0], [51.7, 3801.0], [51.8, 3801.0], [51.9, 3801.0], [52.0, 3811.0], [52.1, 3811.0], [52.2, 3811.0], [52.3, 3811.0], [52.4, 3811.0], [52.5, 3811.0], [52.6, 3811.0], [52.7, 3811.0], [52.8, 3811.0], [52.9, 3811.0], [53.0, 3818.0], [53.1, 3818.0], [53.2, 3818.0], [53.3, 3818.0], [53.4, 3818.0], [53.5, 3818.0], [53.6, 3818.0], [53.7, 3818.0], [53.8, 3818.0], [53.9, 3818.0], [54.0, 3828.0], [54.1, 3828.0], [54.2, 3828.0], [54.3, 3828.0], [54.4, 3828.0], [54.5, 3828.0], [54.6, 3828.0], [54.7, 3828.0], [54.8, 3828.0], [54.9, 3828.0], [55.0, 3858.0], [55.1, 3858.0], [55.2, 3858.0], [55.3, 3858.0], [55.4, 3858.0], [55.5, 3858.0], [55.6, 3858.0], [55.7, 3858.0], [55.8, 3858.0], [55.9, 3858.0], [56.0, 3860.0], [56.1, 3860.0], [56.2, 3860.0], [56.3, 3860.0], [56.4, 3860.0], [56.5, 3860.0], [56.6, 3860.0], [56.7, 3860.0], [56.8, 3860.0], [56.9, 3860.0], [57.0, 3863.0], [57.1, 3863.0], [57.2, 3863.0], [57.3, 3863.0], [57.4, 3863.0], [57.5, 3863.0], [57.6, 3863.0], [57.7, 3863.0], [57.8, 3863.0], [57.9, 3863.0], [58.0, 3865.0], [58.1, 3865.0], [58.2, 3865.0], [58.3, 3865.0], [58.4, 3865.0], [58.5, 3865.0], [58.6, 3865.0], [58.7, 3865.0], [58.8, 3865.0], [58.9, 3865.0], [59.0, 3872.0], [59.1, 3872.0], [59.2, 3872.0], [59.3, 3872.0], [59.4, 3872.0], [59.5, 3872.0], [59.6, 3872.0], [59.7, 3872.0], [59.8, 3872.0], [59.9, 3872.0], [60.0, 3920.0], [60.1, 3920.0], [60.2, 3920.0], [60.3, 3920.0], [60.4, 3920.0], [60.5, 3920.0], [60.6, 3920.0], [60.7, 3920.0], [60.8, 3920.0], [60.9, 3920.0], [61.0, 3940.0], [61.1, 3940.0], [61.2, 3940.0], [61.3, 3940.0], [61.4, 3940.0], [61.5, 3940.0], [61.6, 3940.0], [61.7, 3940.0], [61.8, 3940.0], [61.9, 3940.0], [62.0, 3947.0], [62.1, 3947.0], [62.2, 3947.0], [62.3, 3947.0], [62.4, 3947.0], [62.5, 3947.0], [62.6, 3947.0], [62.7, 3947.0], [62.8, 3947.0], [62.9, 3947.0], [63.0, 3949.0], [63.1, 3949.0], [63.2, 3949.0], [63.3, 3949.0], [63.4, 3949.0], [63.5, 3949.0], [63.6, 3949.0], [63.7, 3949.0], [63.8, 3949.0], [63.9, 3949.0], [64.0, 3951.0], [64.1, 3951.0], [64.2, 3951.0], [64.3, 3951.0], [64.4, 3951.0], [64.5, 3951.0], [64.6, 3951.0], [64.7, 3951.0], [64.8, 3951.0], [64.9, 3951.0], [65.0, 4040.0], [65.1, 4040.0], [65.2, 4040.0], [65.3, 4040.0], [65.4, 4040.0], [65.5, 4040.0], [65.6, 4040.0], [65.7, 4040.0], [65.8, 4040.0], [65.9, 4040.0], [66.0, 4057.0], [66.1, 4057.0], [66.2, 4057.0], [66.3, 4057.0], [66.4, 4057.0], [66.5, 4057.0], [66.6, 4057.0], [66.7, 4057.0], [66.8, 4057.0], [66.9, 4057.0], [67.0, 4065.0], [67.1, 4065.0], [67.2, 4065.0], [67.3, 4065.0], [67.4, 4065.0], [67.5, 4065.0], [67.6, 4065.0], [67.7, 4065.0], [67.8, 4065.0], [67.9, 4065.0], [68.0, 4071.0], [68.1, 4071.0], [68.2, 4071.0], [68.3, 4071.0], [68.4, 4071.0], [68.5, 4071.0], [68.6, 4071.0], [68.7, 4071.0], [68.8, 4071.0], [68.9, 4071.0], [69.0, 4103.0], [69.1, 4103.0], [69.2, 4103.0], [69.3, 4103.0], [69.4, 4103.0], [69.5, 4103.0], [69.6, 4103.0], [69.7, 4103.0], [69.8, 4103.0], [69.9, 4103.0], [70.0, 4111.0], [70.1, 4111.0], [70.2, 4111.0], [70.3, 4111.0], [70.4, 4111.0], [70.5, 4111.0], [70.6, 4111.0], [70.7, 4111.0], [70.8, 4111.0], [70.9, 4111.0], [71.0, 4115.0], [71.1, 4115.0], [71.2, 4115.0], [71.3, 4115.0], [71.4, 4115.0], [71.5, 4115.0], [71.6, 4115.0], [71.7, 4115.0], [71.8, 4115.0], [71.9, 4115.0], [72.0, 4115.0], [72.1, 4115.0], [72.2, 4115.0], [72.3, 4115.0], [72.4, 4115.0], [72.5, 4115.0], [72.6, 4115.0], [72.7, 4115.0], [72.8, 4115.0], [72.9, 4115.0], [73.0, 4130.0], [73.1, 4130.0], [73.2, 4130.0], [73.3, 4130.0], [73.4, 4130.0], [73.5, 4130.0], [73.6, 4130.0], [73.7, 4130.0], [73.8, 4130.0], [73.9, 4130.0], [74.0, 4143.0], [74.1, 4143.0], [74.2, 4143.0], [74.3, 4143.0], [74.4, 4143.0], [74.5, 4143.0], [74.6, 4143.0], [74.7, 4143.0], [74.8, 4143.0], [74.9, 4143.0], [75.0, 4148.0], [75.1, 4148.0], [75.2, 4148.0], [75.3, 4148.0], [75.4, 4148.0], [75.5, 4148.0], [75.6, 4148.0], [75.7, 4148.0], [75.8, 4148.0], [75.9, 4148.0], [76.0, 4157.0], [76.1, 4157.0], [76.2, 4157.0], [76.3, 4157.0], [76.4, 4157.0], [76.5, 4157.0], [76.6, 4157.0], [76.7, 4157.0], [76.8, 4157.0], [76.9, 4157.0], [77.0, 4185.0], [77.1, 4185.0], [77.2, 4185.0], [77.3, 4185.0], [77.4, 4185.0], [77.5, 4185.0], [77.6, 4185.0], [77.7, 4185.0], [77.8, 4185.0], [77.9, 4185.0], [78.0, 4190.0], [78.1, 4190.0], [78.2, 4190.0], [78.3, 4190.0], [78.4, 4190.0], [78.5, 4190.0], [78.6, 4190.0], [78.7, 4190.0], [78.8, 4190.0], [78.9, 4190.0], [79.0, 4194.0], [79.1, 4194.0], [79.2, 4194.0], [79.3, 4194.0], [79.4, 4194.0], [79.5, 4194.0], [79.6, 4194.0], [79.7, 4194.0], [79.8, 4194.0], [79.9, 4194.0], [80.0, 4221.0], [80.1, 4221.0], [80.2, 4221.0], [80.3, 4221.0], [80.4, 4221.0], [80.5, 4221.0], [80.6, 4221.0], [80.7, 4221.0], [80.8, 4221.0], [80.9, 4221.0], [81.0, 4295.0], [81.1, 4295.0], [81.2, 4295.0], [81.3, 4295.0], [81.4, 4295.0], [81.5, 4295.0], [81.6, 4295.0], [81.7, 4295.0], [81.8, 4295.0], [81.9, 4295.0], [82.0, 4305.0], [82.1, 4305.0], [82.2, 4305.0], [82.3, 4305.0], [82.4, 4305.0], [82.5, 4305.0], [82.6, 4305.0], [82.7, 4305.0], [82.8, 4305.0], [82.9, 4305.0], [83.0, 4356.0], [83.1, 4356.0], [83.2, 4356.0], [83.3, 4356.0], [83.4, 4356.0], [83.5, 4356.0], [83.6, 4356.0], [83.7, 4356.0], [83.8, 4356.0], [83.9, 4356.0], [84.0, 4375.0], [84.1, 4375.0], [84.2, 4375.0], [84.3, 4375.0], [84.4, 4375.0], [84.5, 4375.0], [84.6, 4375.0], [84.7, 4375.0], [84.8, 4375.0], [84.9, 4375.0], [85.0, 4382.0], [85.1, 4382.0], [85.2, 4382.0], [85.3, 4382.0], [85.4, 4382.0], [85.5, 4382.0], [85.6, 4382.0], [85.7, 4382.0], [85.8, 4382.0], [85.9, 4382.0], [86.0, 4410.0], [86.1, 4410.0], [86.2, 4410.0], [86.3, 4410.0], [86.4, 4410.0], [86.5, 4410.0], [86.6, 4410.0], [86.7, 4410.0], [86.8, 4410.0], [86.9, 4410.0], [87.0, 4435.0], [87.1, 4435.0], [87.2, 4435.0], [87.3, 4435.0], [87.4, 4435.0], [87.5, 4435.0], [87.6, 4435.0], [87.7, 4435.0], [87.8, 4435.0], [87.9, 4435.0], [88.0, 4452.0], [88.1, 4452.0], [88.2, 4452.0], [88.3, 4452.0], [88.4, 4452.0], [88.5, 4452.0], [88.6, 4452.0], [88.7, 4452.0], [88.8, 4452.0], [88.9, 4452.0], [89.0, 4455.0], [89.1, 4455.0], [89.2, 4455.0], [89.3, 4455.0], [89.4, 4455.0], [89.5, 4455.0], [89.6, 4455.0], [89.7, 4455.0], [89.8, 4455.0], [89.9, 4455.0], [90.0, 4465.0], [90.1, 4465.0], [90.2, 4465.0], [90.3, 4465.0], [90.4, 4465.0], [90.5, 4465.0], [90.6, 4465.0], [90.7, 4465.0], [90.8, 4465.0], [90.9, 4465.0], [91.0, 4489.0], [91.1, 4489.0], [91.2, 4489.0], [91.3, 4489.0], [91.4, 4489.0], [91.5, 4489.0], [91.6, 4489.0], [91.7, 4489.0], [91.8, 4489.0], [91.9, 4489.0], [92.0, 4499.0], [92.1, 4499.0], [92.2, 4499.0], [92.3, 4499.0], [92.4, 4499.0], [92.5, 4499.0], [92.6, 4499.0], [92.7, 4499.0], [92.8, 4499.0], [92.9, 4499.0], [93.0, 4532.0], [93.1, 4532.0], [93.2, 4532.0], [93.3, 4532.0], [93.4, 4532.0], [93.5, 4532.0], [93.6, 4532.0], [93.7, 4532.0], [93.8, 4532.0], [93.9, 4532.0], [94.0, 4535.0], [94.1, 4535.0], [94.2, 4535.0], [94.3, 4535.0], [94.4, 4535.0], [94.5, 4535.0], [94.6, 4535.0], [94.7, 4535.0], [94.8, 4535.0], [94.9, 4535.0], [95.0, 4540.0], [95.1, 4540.0], [95.2, 4540.0], [95.3, 4540.0], [95.4, 4540.0], [95.5, 4540.0], [95.6, 4540.0], [95.7, 4540.0], [95.8, 4540.0], [95.9, 4540.0], [96.0, 4601.0], [96.1, 4601.0], [96.2, 4601.0], [96.3, 4601.0], [96.4, 4601.0], [96.5, 4601.0], [96.6, 4601.0], [96.7, 4601.0], [96.8, 4601.0], [96.9, 4601.0], [97.0, 4614.0], [97.1, 4614.0], [97.2, 4614.0], [97.3, 4614.0], [97.4, 4614.0], [97.5, 4614.0], [97.6, 4614.0], [97.7, 4614.0], [97.8, 4614.0], [97.9, 4614.0], [98.0, 4677.0], [98.1, 4677.0], [98.2, 4677.0], [98.3, 4677.0], [98.4, 4677.0], [98.5, 4677.0], [98.6, 4677.0], [98.7, 4677.0], [98.8, 4677.0], [98.9, 4677.0], [99.0, 4698.0], [99.1, 4698.0], [99.2, 4698.0], [99.3, 4698.0], [99.4, 4698.0], [99.5, 4698.0], [99.6, 4698.0], [99.7, 4698.0], [99.8, 4698.0], [99.9, 4698.0]], "isOverall": false, "label": "HTTP Request", "isController": false}], "supportsControllersDiscrimination": true, "maxX": 100.0, "title": "Response Time Percentiles"}},
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
        data: {"result": {"minY": 1.0, "minX": 2200.0, "maxY": 11.0, "series": [{"data": [[2200.0, 1.0], [2400.0, 3.0], [2500.0, 3.0], [2600.0, 2.0], [2800.0, 2.0], [2700.0, 1.0], [2900.0, 1.0], [3000.0, 3.0], [3100.0, 1.0], [3200.0, 6.0], [3300.0, 4.0], [3400.0, 7.0], [3500.0, 7.0], [3600.0, 5.0], [3700.0, 5.0], [3800.0, 9.0], [3900.0, 5.0], [4000.0, 4.0], [4100.0, 11.0], [4200.0, 2.0], [4300.0, 4.0], [4400.0, 7.0], [4500.0, 3.0], [4600.0, 4.0]], "isOverall": false, "label": "HTTP Request", "isController": false}], "supportsControllersDiscrimination": true, "granularity": 100, "maxX": 4600.0, "title": "Response Time Distribution"}},
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
        data: {"result": {"minY": 51.100000000000016, "minX": 1.5597816E12, "maxY": 51.100000000000016, "series": [{"data": [[1.5597816E12, 51.100000000000016]], "isOverall": false, "label": "Job Offers", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 60000, "maxX": 1.5597816E12, "title": "Active Threads Over Time"}},
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
        data: {"result": {"minY": 2550.9, "minX": 1.0, "maxY": 4698.0, "series": [{"data": [[2.0, 4698.0], [6.0, 4465.0], [7.0, 4461.0], [8.0, 4601.0], [9.0, 4375.0], [10.0, 4614.0], [11.0, 4157.0], [12.0, 4499.0], [13.0, 4410.0], [14.0, 4452.0], [15.0, 4540.0], [16.0, 4532.0], [17.0, 4065.0], [18.0, 4190.0], [19.0, 4455.0], [20.0, 3863.0], [21.0, 4435.0], [22.0, 4221.0], [23.0, 3920.0], [24.0, 4382.0], [25.0, 3860.0], [26.0, 4103.0], [27.0, 3858.0], [28.0, 4356.0], [29.0, 4295.0], [30.0, 3776.0], [31.0, 4071.0], [33.0, 3801.0], [32.0, 3751.0], [35.0, 3811.0], [34.0, 4194.0], [37.0, 4148.0], [36.0, 4185.0], [39.0, 4115.0], [38.0, 4130.0], [41.0, 4111.0], [40.0, 4115.0], [43.0, 4057.0], [42.0, 3537.0], [45.0, 3635.0], [44.0, 4040.0], [47.0, 3414.0], [46.0, 3865.0], [49.0, 3947.0], [48.0, 3949.0], [51.0, 3872.0], [50.0, 3940.0], [53.0, 3662.0], [52.0, 3951.0], [55.0, 3558.0], [54.0, 3322.0], [57.0, 3818.0], [56.0, 3436.0], [59.0, 3735.0], [58.0, 3446.0], [61.0, 3678.0], [60.0, 3828.0], [63.0, 3635.0], [62.0, 3524.0], [67.0, 3584.0], [66.0, 3706.0], [65.0, 3559.0], [64.0, 3716.0], [71.0, 3492.25], [75.0, 3476.0], [74.0, 3464.0], [73.0, 3264.0], [72.0, 3012.0], [79.0, 3354.0], [78.0, 3454.0], [77.0, 3446.0], [76.0, 3003.0], [83.0, 3303.0], [82.0, 2629.0], [81.0, 2984.0], [80.0, 3138.0], [87.0, 3222.0], [86.0, 3303.0], [85.0, 3284.0], [84.0, 3288.0], [90.0, 3099.0], [89.0, 2887.0], [88.0, 3240.0], [100.0, 2550.9], [1.0, 4305.0]], "isOverall": false, "label": "HTTP Request", "isController": false}, {"data": [[51.100000000000016, 3704.45]], "isOverall": false, "label": "HTTP Request-Aggregated", "isController": false}], "supportsControllersDiscrimination": true, "maxX": 100.0, "title": "Time VS Threads"}},
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
        data : {"result": {"minY": 220.0, "minX": 1.5597816E12, "maxY": 1466.6666666666667, "series": [{"data": [[1.5597816E12, 1466.6666666666667]], "isOverall": false, "label": "Bytes received per second", "isController": false}, {"data": [[1.5597816E12, 220.0]], "isOverall": false, "label": "Bytes sent per second", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 60000, "maxX": 1.5597816E12, "title": "Bytes Throughput Over Time"}},
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
        data: {"result": {"minY": 3704.45, "minX": 1.5597816E12, "maxY": 3704.45, "series": [{"data": [[1.5597816E12, 3704.45]], "isOverall": false, "label": "HTTP Request", "isController": false}], "supportsControllersDiscrimination": true, "granularity": 60000, "maxX": 1.5597816E12, "title": "Response Time Over Time"}},
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
        data: {"result": {"minY": 3671.399999999999, "minX": 1.5597816E12, "maxY": 3671.399999999999, "series": [{"data": [[1.5597816E12, 3671.399999999999]], "isOverall": false, "label": "HTTP Request", "isController": false}], "supportsControllersDiscrimination": true, "granularity": 60000, "maxX": 1.5597816E12, "title": "Latencies Over Time"}},
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
        data: {"result": {"minY": 44.91999999999999, "minX": 1.5597816E12, "maxY": 44.91999999999999, "series": [{"data": [[1.5597816E12, 44.91999999999999]], "isOverall": false, "label": "HTTP Request", "isController": false}], "supportsControllersDiscrimination": true, "granularity": 60000, "maxX": 1.5597816E12, "title": "Connect Time Over Time"}},
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
        data: {"result": {"minY": 2291.0, "minX": 1.5597816E12, "maxY": 4698.0, "series": [{"data": [[1.5597816E12, 4698.0]], "isOverall": false, "label": "Max", "isController": false}, {"data": [[1.5597816E12, 2291.0]], "isOverall": false, "label": "Min", "isController": false}, {"data": [[1.5597816E12, 4464.0]], "isOverall": false, "label": "90th percentile", "isController": false}, {"data": [[1.5597816E12, 4697.79]], "isOverall": false, "label": "99th percentile", "isController": false}, {"data": [[1.5597816E12, 4539.75]], "isOverall": false, "label": "95th percentile", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 60000, "maxX": 1.5597816E12, "title": "Response Time Percentiles Over Time (successful requests only)"}},
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
    data: {"result": {"minY": 2536.5, "minX": 10.0, "maxY": 4136.5, "series": [{"data": [[38.0, 3446.0], [10.0, 2536.5], [52.0, 4136.5]], "isOverall": false, "label": "Successes", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 1000, "maxX": 52.0, "title": "Response Time Vs Request"}},
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
    data: {"result": {"minY": 2526.0, "minX": 10.0, "maxY": 4083.0, "series": [{"data": [[38.0, 3398.0], [10.0, 2526.0], [52.0, 4083.0]], "isOverall": false, "label": "Successes", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 1000, "maxX": 52.0, "title": "Latencies Vs Request"}},
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
        data: {"result": {"minY": 1.6666666666666667, "minX": 1.5597816E12, "maxY": 1.6666666666666667, "series": [{"data": [[1.5597816E12, 1.6666666666666667]], "isOverall": false, "label": "hitsPerSecond", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 60000, "maxX": 1.5597816E12, "title": "Hits Per Second"}},
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
        data: {"result": {"minY": 1.6666666666666667, "minX": 1.5597816E12, "maxY": 1.6666666666666667, "series": [{"data": [[1.5597816E12, 1.6666666666666667]], "isOverall": false, "label": "200", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 60000, "maxX": 1.5597816E12, "title": "Codes Per Second"}},
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
        data: {"result": {"minY": 1.6666666666666667, "minX": 1.5597816E12, "maxY": 1.6666666666666667, "series": [{"data": [[1.5597816E12, 1.6666666666666667]], "isOverall": false, "label": "HTTP Request-success", "isController": false}], "supportsControllersDiscrimination": true, "granularity": 60000, "maxX": 1.5597816E12, "title": "Transactions Per Second"}},
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
        data: {"result": {"minY": 1.6666666666666667, "minX": 1.5597816E12, "maxY": 1.6666666666666667, "series": [{"data": [[1.5597816E12, 1.6666666666666667]], "isOverall": false, "label": "Transaction-success", "isController": false}, {"data": [], "isOverall": false, "label": "Transaction-failure", "isController": false}], "supportsControllersDiscrimination": true, "granularity": 60000, "maxX": 1.5597816E12, "title": "Total Transactions Per Second"}},
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

