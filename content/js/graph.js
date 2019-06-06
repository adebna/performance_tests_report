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
        data: {"result": {"minY": 4735.0, "minX": 0.0, "maxY": 9618.0, "series": [{"data": [[0.0, 4735.0], [0.1, 4735.0], [0.2, 4735.0], [0.3, 4735.0], [0.4, 4861.0], [0.5, 4861.0], [0.6, 4861.0], [0.7, 4918.0], [0.8, 4918.0], [0.9, 4918.0], [1.0, 4965.0], [1.1, 4965.0], [1.2, 4965.0], [1.3, 4965.0], [1.4, 5188.0], [1.5, 5188.0], [1.6, 5188.0], [1.7, 5214.0], [1.8, 5214.0], [1.9, 5214.0], [2.0, 5253.0], [2.1, 5253.0], [2.2, 5253.0], [2.3, 5253.0], [2.4, 5305.0], [2.5, 5305.0], [2.6, 5305.0], [2.7, 5307.0], [2.8, 5307.0], [2.9, 5307.0], [3.0, 5311.0], [3.1, 5311.0], [3.2, 5311.0], [3.3, 5311.0], [3.4, 5312.0], [3.5, 5312.0], [3.6, 5312.0], [3.7, 5315.0], [3.8, 5315.0], [3.9, 5315.0], [4.0, 5320.0], [4.1, 5320.0], [4.2, 5320.0], [4.3, 5320.0], [4.4, 5320.0], [4.5, 5320.0], [4.6, 5320.0], [4.7, 5320.0], [4.8, 5320.0], [4.9, 5320.0], [5.0, 5387.0], [5.1, 5387.0], [5.2, 5387.0], [5.3, 5387.0], [5.4, 5448.0], [5.5, 5448.0], [5.6, 5448.0], [5.7, 5457.0], [5.8, 5457.0], [5.9, 5457.0], [6.0, 5523.0], [6.1, 5523.0], [6.2, 5523.0], [6.3, 5523.0], [6.4, 5547.0], [6.5, 5547.0], [6.6, 5547.0], [6.7, 5571.0], [6.8, 5571.0], [6.9, 5571.0], [7.0, 5600.0], [7.1, 5600.0], [7.2, 5600.0], [7.3, 5600.0], [7.4, 5612.0], [7.5, 5612.0], [7.6, 5612.0], [7.7, 5630.0], [7.8, 5630.0], [7.9, 5630.0], [8.0, 5646.0], [8.1, 5646.0], [8.2, 5646.0], [8.3, 5646.0], [8.4, 5694.0], [8.5, 5694.0], [8.6, 5694.0], [8.7, 5714.0], [8.8, 5714.0], [8.9, 5714.0], [9.0, 5724.0], [9.1, 5724.0], [9.2, 5724.0], [9.3, 5724.0], [9.4, 5736.0], [9.5, 5736.0], [9.6, 5736.0], [9.7, 5757.0], [9.8, 5757.0], [9.9, 5757.0], [10.0, 5757.0], [10.1, 5757.0], [10.2, 5757.0], [10.3, 5757.0], [10.4, 5797.0], [10.5, 5797.0], [10.6, 5797.0], [10.7, 5810.0], [10.8, 5810.0], [10.9, 5810.0], [11.0, 5814.0], [11.1, 5814.0], [11.2, 5814.0], [11.3, 5814.0], [11.4, 5816.0], [11.5, 5816.0], [11.6, 5816.0], [11.7, 5836.0], [11.8, 5836.0], [11.9, 5836.0], [12.0, 5836.0], [12.1, 5850.0], [12.2, 5850.0], [12.3, 5850.0], [12.4, 5861.0], [12.5, 5861.0], [12.6, 5861.0], [12.7, 5863.0], [12.8, 5863.0], [12.9, 5863.0], [13.0, 5863.0], [13.1, 5864.0], [13.2, 5864.0], [13.3, 5864.0], [13.4, 5864.0], [13.5, 5864.0], [13.6, 5864.0], [13.7, 5869.0], [13.8, 5869.0], [13.9, 5869.0], [14.0, 5869.0], [14.1, 5871.0], [14.2, 5871.0], [14.3, 5871.0], [14.4, 5873.0], [14.5, 5873.0], [14.6, 5873.0], [14.7, 5876.0], [14.8, 5876.0], [14.9, 5876.0], [15.0, 5876.0], [15.1, 5884.0], [15.2, 5884.0], [15.3, 5884.0], [15.4, 5897.0], [15.5, 5897.0], [15.6, 5897.0], [15.7, 5905.0], [15.8, 5905.0], [15.9, 5905.0], [16.0, 5905.0], [16.1, 5910.0], [16.2, 5910.0], [16.3, 5910.0], [16.4, 5918.0], [16.5, 5918.0], [16.6, 5918.0], [16.7, 5935.0], [16.8, 5935.0], [16.9, 5935.0], [17.0, 5935.0], [17.1, 5956.0], [17.2, 5956.0], [17.3, 5956.0], [17.4, 5981.0], [17.5, 5981.0], [17.6, 5981.0], [17.7, 5989.0], [17.8, 5989.0], [17.9, 5989.0], [18.0, 5992.0], [18.1, 5992.0], [18.2, 5992.0], [18.3, 5992.0], [18.4, 5992.0], [18.5, 5992.0], [18.6, 5992.0], [18.7, 6007.0], [18.8, 6007.0], [18.9, 6007.0], [19.0, 6029.0], [19.1, 6029.0], [19.2, 6029.0], [19.3, 6029.0], [19.4, 6050.0], [19.5, 6050.0], [19.6, 6050.0], [19.7, 6082.0], [19.8, 6082.0], [19.9, 6082.0], [20.0, 6094.0], [20.1, 6094.0], [20.2, 6094.0], [20.3, 6094.0], [20.4, 6097.0], [20.5, 6097.0], [20.6, 6097.0], [20.7, 6163.0], [20.8, 6163.0], [20.9, 6163.0], [21.0, 6187.0], [21.1, 6187.0], [21.2, 6187.0], [21.3, 6187.0], [21.4, 6244.0], [21.5, 6244.0], [21.6, 6244.0], [21.7, 6248.0], [21.8, 6248.0], [21.9, 6248.0], [22.0, 6260.0], [22.1, 6260.0], [22.2, 6260.0], [22.3, 6260.0], [22.4, 6310.0], [22.5, 6310.0], [22.6, 6310.0], [22.7, 6323.0], [22.8, 6323.0], [22.9, 6323.0], [23.0, 6334.0], [23.1, 6334.0], [23.2, 6334.0], [23.3, 6334.0], [23.4, 6338.0], [23.5, 6338.0], [23.6, 6338.0], [23.7, 6340.0], [23.8, 6340.0], [23.9, 6340.0], [24.0, 6359.0], [24.1, 6359.0], [24.2, 6359.0], [24.3, 6359.0], [24.4, 6384.0], [24.5, 6384.0], [24.6, 6384.0], [24.7, 6387.0], [24.8, 6387.0], [24.9, 6387.0], [25.0, 6402.0], [25.1, 6402.0], [25.2, 6402.0], [25.3, 6402.0], [25.4, 6408.0], [25.5, 6408.0], [25.6, 6408.0], [25.7, 6425.0], [25.8, 6425.0], [25.9, 6425.0], [26.0, 6444.0], [26.1, 6444.0], [26.2, 6444.0], [26.3, 6444.0], [26.4, 6462.0], [26.5, 6462.0], [26.6, 6462.0], [26.7, 6476.0], [26.8, 6476.0], [26.9, 6476.0], [27.0, 6505.0], [27.1, 6505.0], [27.2, 6505.0], [27.3, 6505.0], [27.4, 6518.0], [27.5, 6518.0], [27.6, 6518.0], [27.7, 6534.0], [27.8, 6534.0], [27.9, 6534.0], [28.0, 6543.0], [28.1, 6543.0], [28.2, 6543.0], [28.3, 6543.0], [28.4, 6561.0], [28.5, 6561.0], [28.6, 6561.0], [28.7, 6564.0], [28.8, 6564.0], [28.9, 6564.0], [29.0, 6565.0], [29.1, 6565.0], [29.2, 6565.0], [29.3, 6565.0], [29.4, 6570.0], [29.5, 6570.0], [29.6, 6570.0], [29.7, 6603.0], [29.8, 6603.0], [29.9, 6603.0], [30.0, 6613.0], [30.1, 6613.0], [30.2, 6613.0], [30.3, 6613.0], [30.4, 6616.0], [30.5, 6616.0], [30.6, 6616.0], [30.7, 6641.0], [30.8, 6641.0], [30.9, 6641.0], [31.0, 6696.0], [31.1, 6696.0], [31.2, 6696.0], [31.3, 6696.0], [31.4, 6701.0], [31.5, 6701.0], [31.6, 6701.0], [31.7, 6742.0], [31.8, 6742.0], [31.9, 6742.0], [32.0, 6815.0], [32.1, 6815.0], [32.2, 6815.0], [32.3, 6815.0], [32.4, 6869.0], [32.5, 6869.0], [32.6, 6869.0], [32.7, 6882.0], [32.8, 6882.0], [32.9, 6882.0], [33.0, 6887.0], [33.1, 6887.0], [33.2, 6887.0], [33.3, 6887.0], [33.4, 6945.0], [33.5, 6945.0], [33.6, 6945.0], [33.7, 6959.0], [33.8, 6959.0], [33.9, 6959.0], [34.0, 7031.0], [34.1, 7031.0], [34.2, 7031.0], [34.3, 7031.0], [34.4, 7051.0], [34.5, 7051.0], [34.6, 7051.0], [34.7, 7073.0], [34.8, 7073.0], [34.9, 7073.0], [35.0, 7087.0], [35.1, 7087.0], [35.2, 7087.0], [35.3, 7087.0], [35.4, 7096.0], [35.5, 7096.0], [35.6, 7096.0], [35.7, 7097.0], [35.8, 7097.0], [35.9, 7097.0], [36.0, 7099.0], [36.1, 7099.0], [36.2, 7099.0], [36.3, 7099.0], [36.4, 7116.0], [36.5, 7116.0], [36.6, 7116.0], [36.7, 7121.0], [36.8, 7121.0], [36.9, 7121.0], [37.0, 7124.0], [37.1, 7124.0], [37.2, 7124.0], [37.3, 7124.0], [37.4, 7155.0], [37.5, 7155.0], [37.6, 7155.0], [37.7, 7169.0], [37.8, 7169.0], [37.9, 7169.0], [38.0, 7211.0], [38.1, 7211.0], [38.2, 7211.0], [38.3, 7211.0], [38.4, 7281.0], [38.5, 7281.0], [38.6, 7281.0], [38.7, 7281.0], [38.8, 7281.0], [38.9, 7281.0], [39.0, 7289.0], [39.1, 7289.0], [39.2, 7289.0], [39.3, 7289.0], [39.4, 7298.0], [39.5, 7298.0], [39.6, 7298.0], [39.7, 7336.0], [39.8, 7336.0], [39.9, 7336.0], [40.0, 7357.0], [40.1, 7357.0], [40.2, 7357.0], [40.3, 7357.0], [40.4, 7363.0], [40.5, 7363.0], [40.6, 7363.0], [40.7, 7369.0], [40.8, 7369.0], [40.9, 7369.0], [41.0, 7369.0], [41.1, 7380.0], [41.2, 7380.0], [41.3, 7380.0], [41.4, 7387.0], [41.5, 7387.0], [41.6, 7387.0], [41.7, 7402.0], [41.8, 7402.0], [41.9, 7402.0], [42.0, 7402.0], [42.1, 7407.0], [42.2, 7407.0], [42.3, 7407.0], [42.4, 7409.0], [42.5, 7409.0], [42.6, 7409.0], [42.7, 7431.0], [42.8, 7431.0], [42.9, 7431.0], [43.0, 7431.0], [43.1, 7435.0], [43.2, 7435.0], [43.3, 7435.0], [43.4, 7436.0], [43.5, 7436.0], [43.6, 7436.0], [43.7, 7445.0], [43.8, 7445.0], [43.9, 7445.0], [44.0, 7445.0], [44.1, 7476.0], [44.2, 7476.0], [44.3, 7476.0], [44.4, 7477.0], [44.5, 7477.0], [44.6, 7477.0], [44.7, 7486.0], [44.8, 7486.0], [44.9, 7486.0], [45.0, 7486.0], [45.1, 7504.0], [45.2, 7504.0], [45.3, 7504.0], [45.4, 7517.0], [45.5, 7517.0], [45.6, 7517.0], [45.7, 7517.0], [45.8, 7517.0], [45.9, 7517.0], [46.0, 7517.0], [46.1, 7525.0], [46.2, 7525.0], [46.3, 7525.0], [46.4, 7543.0], [46.5, 7543.0], [46.6, 7543.0], [46.7, 7545.0], [46.8, 7545.0], [46.9, 7545.0], [47.0, 7545.0], [47.1, 7553.0], [47.2, 7553.0], [47.3, 7553.0], [47.4, 7568.0], [47.5, 7568.0], [47.6, 7568.0], [47.7, 7568.0], [47.8, 7568.0], [47.9, 7568.0], [48.0, 7568.0], [48.1, 7594.0], [48.2, 7594.0], [48.3, 7594.0], [48.4, 7611.0], [48.5, 7611.0], [48.6, 7611.0], [48.7, 7612.0], [48.8, 7612.0], [48.9, 7612.0], [49.0, 7612.0], [49.1, 7613.0], [49.2, 7613.0], [49.3, 7613.0], [49.4, 7622.0], [49.5, 7622.0], [49.6, 7622.0], [49.7, 7631.0], [49.8, 7631.0], [49.9, 7631.0], [50.0, 7631.0], [50.1, 7643.0], [50.2, 7643.0], [50.3, 7643.0], [50.4, 7673.0], [50.5, 7673.0], [50.6, 7673.0], [50.7, 7680.0], [50.8, 7680.0], [50.9, 7680.0], [51.0, 7680.0], [51.1, 7761.0], [51.2, 7761.0], [51.3, 7761.0], [51.4, 7786.0], [51.5, 7786.0], [51.6, 7786.0], [51.7, 7806.0], [51.8, 7806.0], [51.9, 7806.0], [52.0, 7806.0], [52.1, 7812.0], [52.2, 7812.0], [52.3, 7812.0], [52.4, 7887.0], [52.5, 7887.0], [52.6, 7887.0], [52.7, 7942.0], [52.8, 7942.0], [52.9, 7942.0], [53.0, 7942.0], [53.1, 7945.0], [53.2, 7945.0], [53.3, 7945.0], [53.4, 8004.0], [53.5, 8004.0], [53.6, 8004.0], [53.7, 8030.0], [53.8, 8030.0], [53.9, 8030.0], [54.0, 8030.0], [54.1, 8036.0], [54.2, 8036.0], [54.3, 8036.0], [54.4, 8039.0], [54.5, 8039.0], [54.6, 8039.0], [54.7, 8057.0], [54.8, 8057.0], [54.9, 8057.0], [55.0, 8057.0], [55.1, 8063.0], [55.2, 8063.0], [55.3, 8063.0], [55.4, 8075.0], [55.5, 8075.0], [55.6, 8075.0], [55.7, 8091.0], [55.8, 8091.0], [55.9, 8091.0], [56.0, 8091.0], [56.1, 8119.0], [56.2, 8119.0], [56.3, 8119.0], [56.4, 8122.0], [56.5, 8122.0], [56.6, 8122.0], [56.7, 8125.0], [56.8, 8125.0], [56.9, 8125.0], [57.0, 8125.0], [57.1, 8137.0], [57.2, 8137.0], [57.3, 8137.0], [57.4, 8144.0], [57.5, 8144.0], [57.6, 8144.0], [57.7, 8169.0], [57.8, 8169.0], [57.9, 8169.0], [58.0, 8169.0], [58.1, 8209.0], [58.2, 8209.0], [58.3, 8209.0], [58.4, 8224.0], [58.5, 8224.0], [58.6, 8224.0], [58.7, 8231.0], [58.8, 8231.0], [58.9, 8231.0], [59.0, 8231.0], [59.1, 8236.0], [59.2, 8236.0], [59.3, 8236.0], [59.4, 8243.0], [59.5, 8243.0], [59.6, 8243.0], [59.7, 8250.0], [59.8, 8250.0], [59.9, 8250.0], [60.0, 8250.0], [60.1, 8252.0], [60.2, 8252.0], [60.3, 8252.0], [60.4, 8267.0], [60.5, 8267.0], [60.6, 8267.0], [60.7, 8275.0], [60.8, 8275.0], [60.9, 8275.0], [61.0, 8275.0], [61.1, 8312.0], [61.2, 8312.0], [61.3, 8312.0], [61.4, 8329.0], [61.5, 8329.0], [61.6, 8329.0], [61.7, 8343.0], [61.8, 8343.0], [61.9, 8343.0], [62.0, 8343.0], [62.1, 8355.0], [62.2, 8355.0], [62.3, 8355.0], [62.4, 8367.0], [62.5, 8367.0], [62.6, 8367.0], [62.7, 8369.0], [62.8, 8369.0], [62.9, 8369.0], [63.0, 8369.0], [63.1, 8381.0], [63.2, 8381.0], [63.3, 8381.0], [63.4, 8421.0], [63.5, 8421.0], [63.6, 8421.0], [63.7, 8459.0], [63.8, 8459.0], [63.9, 8459.0], [64.0, 8459.0], [64.1, 8466.0], [64.2, 8466.0], [64.3, 8466.0], [64.4, 8501.0], [64.5, 8501.0], [64.6, 8501.0], [64.7, 8532.0], [64.8, 8532.0], [64.9, 8532.0], [65.0, 8532.0], [65.1, 8540.0], [65.2, 8540.0], [65.3, 8540.0], [65.4, 8592.0], [65.5, 8592.0], [65.6, 8592.0], [65.7, 8634.0], [65.8, 8634.0], [65.9, 8634.0], [66.0, 8634.0], [66.1, 8650.0], [66.2, 8650.0], [66.3, 8650.0], [66.4, 8681.0], [66.5, 8681.0], [66.6, 8681.0], [66.7, 8710.0], [66.8, 8710.0], [66.9, 8710.0], [67.0, 8710.0], [67.1, 8717.0], [67.2, 8717.0], [67.3, 8717.0], [67.4, 8717.0], [67.5, 8717.0], [67.6, 8717.0], [67.7, 8719.0], [67.8, 8719.0], [67.9, 8719.0], [68.0, 8719.0], [68.1, 8729.0], [68.2, 8729.0], [68.3, 8729.0], [68.4, 8732.0], [68.5, 8732.0], [68.6, 8732.0], [68.7, 8739.0], [68.8, 8739.0], [68.9, 8739.0], [69.0, 8739.0], [69.1, 8740.0], [69.2, 8740.0], [69.3, 8740.0], [69.4, 8749.0], [69.5, 8749.0], [69.6, 8749.0], [69.7, 8749.0], [69.8, 8749.0], [69.9, 8749.0], [70.0, 8749.0], [70.1, 8768.0], [70.2, 8768.0], [70.3, 8768.0], [70.4, 8773.0], [70.5, 8773.0], [70.6, 8773.0], [70.7, 8788.0], [70.8, 8788.0], [70.9, 8788.0], [71.0, 8788.0], [71.1, 8788.0], [71.2, 8788.0], [71.3, 8788.0], [71.4, 8820.0], [71.5, 8820.0], [71.6, 8820.0], [71.7, 8821.0], [71.8, 8821.0], [71.9, 8821.0], [72.0, 8821.0], [72.1, 8823.0], [72.2, 8823.0], [72.3, 8823.0], [72.4, 8840.0], [72.5, 8840.0], [72.6, 8840.0], [72.7, 8841.0], [72.8, 8841.0], [72.9, 8841.0], [73.0, 8841.0], [73.1, 8853.0], [73.2, 8853.0], [73.3, 8853.0], [73.4, 8856.0], [73.5, 8856.0], [73.6, 8856.0], [73.7, 8871.0], [73.8, 8871.0], [73.9, 8871.0], [74.0, 8871.0], [74.1, 8871.0], [74.2, 8871.0], [74.3, 8871.0], [74.4, 8875.0], [74.5, 8875.0], [74.6, 8875.0], [74.7, 8881.0], [74.8, 8881.0], [74.9, 8881.0], [75.0, 8881.0], [75.1, 8887.0], [75.2, 8887.0], [75.3, 8887.0], [75.4, 8890.0], [75.5, 8890.0], [75.6, 8890.0], [75.7, 8895.0], [75.8, 8895.0], [75.9, 8895.0], [76.0, 8895.0], [76.1, 8897.0], [76.2, 8897.0], [76.3, 8897.0], [76.4, 8906.0], [76.5, 8906.0], [76.6, 8906.0], [76.7, 8915.0], [76.8, 8915.0], [76.9, 8915.0], [77.0, 8915.0], [77.1, 8927.0], [77.2, 8927.0], [77.3, 8927.0], [77.4, 8977.0], [77.5, 8977.0], [77.6, 8977.0], [77.7, 8977.0], [77.8, 8977.0], [77.9, 8977.0], [78.0, 8977.0], [78.1, 8985.0], [78.2, 8985.0], [78.3, 8985.0], [78.4, 8994.0], [78.5, 8994.0], [78.6, 8994.0], [78.7, 9030.0], [78.8, 9030.0], [78.9, 9030.0], [79.0, 9030.0], [79.1, 9048.0], [79.2, 9048.0], [79.3, 9048.0], [79.4, 9059.0], [79.5, 9059.0], [79.6, 9059.0], [79.7, 9061.0], [79.8, 9061.0], [79.9, 9061.0], [80.0, 9065.0], [80.1, 9065.0], [80.2, 9065.0], [80.3, 9065.0], [80.4, 9073.0], [80.5, 9073.0], [80.6, 9073.0], [80.7, 9079.0], [80.8, 9079.0], [80.9, 9079.0], [81.0, 9084.0], [81.1, 9084.0], [81.2, 9084.0], [81.3, 9084.0], [81.4, 9112.0], [81.5, 9112.0], [81.6, 9112.0], [81.7, 9128.0], [81.8, 9128.0], [81.9, 9128.0], [82.0, 9129.0], [82.1, 9129.0], [82.2, 9129.0], [82.3, 9129.0], [82.4, 9134.0], [82.5, 9134.0], [82.6, 9134.0], [82.7, 9142.0], [82.8, 9142.0], [82.9, 9142.0], [83.0, 9147.0], [83.1, 9147.0], [83.2, 9147.0], [83.3, 9147.0], [83.4, 9147.0], [83.5, 9147.0], [83.6, 9147.0], [83.7, 9149.0], [83.8, 9149.0], [83.9, 9149.0], [84.0, 9150.0], [84.1, 9150.0], [84.2, 9150.0], [84.3, 9150.0], [84.4, 9160.0], [84.5, 9160.0], [84.6, 9160.0], [84.7, 9164.0], [84.8, 9164.0], [84.9, 9164.0], [85.0, 9171.0], [85.1, 9171.0], [85.2, 9171.0], [85.3, 9171.0], [85.4, 9173.0], [85.5, 9173.0], [85.6, 9173.0], [85.7, 9180.0], [85.8, 9180.0], [85.9, 9180.0], [86.0, 9185.0], [86.1, 9185.0], [86.2, 9185.0], [86.3, 9185.0], [86.4, 9190.0], [86.5, 9190.0], [86.6, 9190.0], [86.7, 9191.0], [86.8, 9191.0], [86.9, 9191.0], [87.0, 9202.0], [87.1, 9202.0], [87.2, 9202.0], [87.3, 9202.0], [87.4, 9215.0], [87.5, 9215.0], [87.6, 9215.0], [87.7, 9224.0], [87.8, 9224.0], [87.9, 9224.0], [88.0, 9228.0], [88.1, 9228.0], [88.2, 9228.0], [88.3, 9228.0], [88.4, 9232.0], [88.5, 9232.0], [88.6, 9232.0], [88.7, 9240.0], [88.8, 9240.0], [88.9, 9240.0], [89.0, 9252.0], [89.1, 9252.0], [89.2, 9252.0], [89.3, 9252.0], [89.4, 9256.0], [89.5, 9256.0], [89.6, 9256.0], [89.7, 9273.0], [89.8, 9273.0], [89.9, 9273.0], [90.0, 9276.0], [90.1, 9276.0], [90.2, 9276.0], [90.3, 9276.0], [90.4, 9293.0], [90.5, 9293.0], [90.6, 9293.0], [90.7, 9299.0], [90.8, 9299.0], [90.9, 9299.0], [91.0, 9310.0], [91.1, 9310.0], [91.2, 9310.0], [91.3, 9310.0], [91.4, 9345.0], [91.5, 9345.0], [91.6, 9345.0], [91.7, 9351.0], [91.8, 9351.0], [91.9, 9351.0], [92.0, 9351.0], [92.1, 9351.0], [92.2, 9351.0], [92.3, 9351.0], [92.4, 9362.0], [92.5, 9362.0], [92.6, 9362.0], [92.7, 9364.0], [92.8, 9364.0], [92.9, 9364.0], [93.0, 9366.0], [93.1, 9366.0], [93.2, 9366.0], [93.3, 9366.0], [93.4, 9374.0], [93.5, 9374.0], [93.6, 9374.0], [93.7, 9379.0], [93.8, 9379.0], [93.9, 9379.0], [94.0, 9384.0], [94.1, 9384.0], [94.2, 9384.0], [94.3, 9384.0], [94.4, 9387.0], [94.5, 9387.0], [94.6, 9387.0], [94.7, 9406.0], [94.8, 9406.0], [94.9, 9406.0], [95.0, 9428.0], [95.1, 9428.0], [95.2, 9428.0], [95.3, 9428.0], [95.4, 9485.0], [95.5, 9485.0], [95.6, 9485.0], [95.7, 9517.0], [95.8, 9517.0], [95.9, 9517.0], [96.0, 9553.0], [96.1, 9553.0], [96.2, 9553.0], [96.3, 9553.0], [96.4, 9559.0], [96.5, 9559.0], [96.6, 9559.0], [96.7, 9563.0], [96.8, 9563.0], [96.9, 9563.0], [97.0, 9578.0], [97.1, 9578.0], [97.2, 9578.0], [97.3, 9578.0], [97.4, 9583.0], [97.5, 9583.0], [97.6, 9583.0], [97.7, 9588.0], [97.8, 9588.0], [97.9, 9588.0], [98.0, 9590.0], [98.1, 9590.0], [98.2, 9590.0], [98.3, 9590.0], [98.4, 9590.0], [98.5, 9590.0], [98.6, 9590.0], [98.7, 9593.0], [98.8, 9593.0], [98.9, 9593.0], [99.0, 9609.0], [99.1, 9609.0], [99.2, 9609.0], [99.3, 9609.0], [99.4, 9612.0], [99.5, 9612.0], [99.6, 9612.0], [99.7, 9618.0], [99.8, 9618.0], [99.9, 9618.0]], "isOverall": false, "label": "HTTP Request", "isController": false}], "supportsControllersDiscrimination": true, "maxX": 100.0, "title": "Response Time Percentiles"}},
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
        data: {"result": {"minY": 1.0, "minX": 4700.0, "maxY": 17.0, "series": [{"data": [[4700.0, 1.0], [4800.0, 1.0], [5100.0, 1.0], [4900.0, 2.0], [5300.0, 9.0], [5200.0, 2.0], [5600.0, 5.0], [5500.0, 3.0], [5400.0, 2.0], [5700.0, 6.0], [5800.0, 15.0], [5900.0, 9.0], [6000.0, 6.0], [6100.0, 2.0], [6200.0, 3.0], [6300.0, 8.0], [6500.0, 8.0], [6600.0, 5.0], [6400.0, 6.0], [6700.0, 2.0], [6800.0, 4.0], [6900.0, 2.0], [7100.0, 5.0], [7000.0, 7.0], [7300.0, 6.0], [7400.0, 10.0], [7200.0, 5.0], [7500.0, 10.0], [7600.0, 8.0], [7700.0, 2.0], [7800.0, 3.0], [7900.0, 2.0], [8000.0, 8.0], [8100.0, 6.0], [8200.0, 9.0], [8300.0, 7.0], [8600.0, 3.0], [8400.0, 3.0], [8500.0, 4.0], [8700.0, 14.0], [8800.0, 15.0], [8900.0, 7.0], [9000.0, 8.0], [9100.0, 17.0], [9200.0, 12.0], [9300.0, 11.0], [9400.0, 3.0], [9500.0, 10.0], [9600.0, 3.0]], "isOverall": false, "label": "HTTP Request", "isController": false}], "supportsControllersDiscrimination": true, "granularity": 100, "maxX": 9600.0, "title": "Response Time Distribution"}},
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
        data: {"result": {"minY": 300.0, "minX": 2.0, "ticks": [[0, "Requests having \nresponse time <= 500ms"], [1, "Requests having \nresponse time > 500ms and <= 1,500ms"], [2, "Requests having \nresponse time > 1,500ms"], [3, "Requests in error"]], "maxY": 300.0, "series": [{"data": [], "color": "#9ACD32", "isOverall": false, "label": "Requests having \nresponse time <= 500ms", "isController": false}, {"data": [], "color": "yellow", "isOverall": false, "label": "Requests having \nresponse time > 500ms and <= 1,500ms", "isController": false}, {"data": [[2.0, 300.0]], "color": "orange", "isOverall": false, "label": "Requests having \nresponse time > 1,500ms", "isController": false}, {"data": [], "color": "#FF6347", "isOverall": false, "label": "Requests in error", "isController": false}], "supportsControllersDiscrimination": false, "maxX": 2.0, "title": "Synthetic Response Times Distribution"}},
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
        data: {"result": {"minY": 50.52999999999995, "minX": 1.55982174E12, "maxY": 51.02000000000003, "series": [{"data": [[1.55982174E12, 51.02000000000003]], "isOverall": false, "label": "Job Offers", "isController": false}, {"data": [[1.55982174E12, 50.52999999999995]], "isOverall": false, "label": "Thread Group", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 60000, "maxX": 1.55982174E12, "title": "Active Threads Over Time"}},
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
        data: {"result": {"minY": 4918.0, "minX": 1.0, "maxY": 9618.0, "series": [{"data": [[2.0, 9366.0], [3.0, 9147.0], [4.0, 9273.0], [5.0, 9618.0], [6.0, 9612.0], [7.0, 9362.0], [8.0, 9609.0], [9.0, 9150.0], [10.0, 9593.0], [11.0, 8927.0], [12.0, 9590.0], [13.0, 9588.0], [14.0, 9590.0], [15.0, 9583.0], [16.0, 9578.0], [17.0, 9160.0], [18.0, 9563.0], [19.0, 9559.0], [20.0, 9553.0], [21.0, 9485.0], [22.0, 9517.0], [23.0, 9428.0], [24.0, 9173.0], [25.0, 9191.0], [26.0, 8985.0], [27.0, 9276.0], [28.0, 9406.0], [29.0, 9387.0], [30.0, 9384.0], [31.0, 9379.0], [33.0, 9364.0], [32.0, 9374.0], [35.0, 9351.0], [34.0, 9030.0], [37.0, 9345.0], [36.0, 9351.0], [39.0, 9061.0], [38.0, 9065.0], [41.0, 9310.0], [40.0, 9112.0], [43.0, 8897.0], [42.0, 9299.0], [45.0, 9059.0], [44.0, 9293.0], [47.0, 9252.0], [46.0, 9256.0], [49.0, 9228.0], [48.0, 9240.0], [51.0, 9215.0], [50.0, 9224.0], [53.0, 9147.0], [52.0, 9048.0], [55.0, 8710.0], [54.0, 9202.0], [57.0, 9185.0], [56.0, 9190.0], [59.0, 9171.0], [58.0, 9180.0], [61.0, 8501.0], [60.0, 9164.0], [63.0, 9142.0], [62.0, 9149.0], [67.0, 8977.0], [66.0, 9129.0], [65.0, 9128.0], [64.0, 9134.0], [71.0, 9079.0], [70.0, 9084.0], [69.0, 8977.0], [68.0, 8915.0], [75.0, 8994.0], [74.0, 8634.0], [73.0, 9073.0], [72.0, 8871.0], [79.0, 8906.0], [78.0, 8887.0], [77.0, 8841.0], [76.0, 8881.0], [83.0, 8421.0], [82.0, 8890.0], [81.0, 8895.0], [80.0, 8749.0], [87.0, 8856.0], [86.0, 8717.0], [85.0, 8871.0], [84.0, 8875.0], [91.0, 8821.0], [90.0, 8732.0], [89.0, 8840.0], [88.0, 8853.0], [95.0, 8788.0], [94.0, 8773.0], [93.0, 8820.0], [92.0, 8823.0], [99.0, 8650.0], [98.0, 8768.0], [97.0, 8466.0], [96.0, 8788.0], [103.0, 8739.0], [102.0, 8740.0], [101.0, 8749.0], [100.0, 8592.0], [107.0, 8717.0], [106.0, 8719.0], [105.0, 8729.0], [104.0, 8532.0], [111.0, 8681.0], [110.0, 8367.0], [109.0, 8459.0], [108.0, 8540.0], [115.0, 8091.0], [114.0, 7568.0], [113.0, 8343.0], [112.0, 8122.0], [119.0, 8063.0], [118.0, 8381.0], [117.0, 8169.0], [116.0, 8355.0], [123.0, 7435.0], [122.0, 7594.0], [121.0, 7409.0], [120.0, 8125.0], [127.0, 7380.0], [126.0, 7545.0], [125.0, 8329.0], [124.0, 8312.0], [135.0, 8275.0], [134.0, 7486.0], [133.0, 8036.0], [132.0, 7407.0], [131.0, 7281.0], [130.0, 8236.0], [129.0, 8369.0], [128.0, 7517.0], [143.0, 7942.0], [142.0, 7631.0], [141.0, 8075.0], [140.0, 8267.0], [139.0, 8030.0], [138.0, 7445.0], [137.0, 7476.0], [136.0, 8039.0], [151.0, 8119.0], [150.0, 8243.0], [149.0, 8250.0], [148.0, 8252.0], [147.0, 7281.0], [146.0, 8137.0], [145.0, 7097.0], [144.0, 7169.0], [159.0, 7402.0], [158.0, 7761.0], [157.0, 8004.0], [156.0, 7073.0], [155.0, 8144.0], [154.0, 8209.0], [153.0, 8224.0], [152.0, 8231.0], [167.0, 7622.0], [166.0, 6887.0], [165.0, 7155.0], [164.0, 7887.0], [163.0, 7673.0], [162.0, 8057.0], [161.0, 7568.0], [160.0, 7812.0], [174.0, 7806.0], [173.0, 7517.0], [172.0, 7289.0], [171.0, 6641.0], [170.0, 7680.0], [169.0, 7612.0], [168.0, 7945.0], [183.0, 6616.0], [182.0, 7525.0], [181.0, 7553.0], [180.0, 7431.0], [179.0, 7611.0], [178.0, 7643.0], [177.0, 7786.0], [176.0, 7491.0], [191.0, 7096.0], [190.0, 6869.0], [189.0, 7543.0], [188.0, 6408.0], [187.0, 7211.0], [186.0, 6882.0], [185.0, 6564.0], [184.0, 7031.0], [199.0, 7051.0], [198.0, 7477.0], [197.0, 6387.0], [196.0, 7387.0], [195.0, 7504.0], [194.0, 6959.0], [193.0, 7363.0], [192.0, 7298.0], [207.0, 7116.0], [206.0, 7099.0], [205.0, 6815.0], [204.0, 6462.0], [203.0, 7357.0], [202.0, 6945.0], [201.0, 7336.0], [200.0, 7436.0], [215.0, 6097.0], [214.0, 5884.0], [213.0, 7124.0], [212.0, 7121.0], [211.0, 6094.0], [210.0, 6187.0], [209.0, 6613.0], [208.0, 7087.0], [223.0, 6050.0], [222.0, 6340.0], [221.0, 6476.0], [220.0, 5873.0], [219.0, 5992.0], [218.0, 5905.0], [217.0, 6029.0], [216.0, 5918.0], [231.0, 6359.0], [230.0, 6518.0], [229.0, 6543.0], [228.0, 6570.0], [226.0, 6007.0], [225.0, 5869.0], [224.0, 5910.0], [239.0, 6701.0], [238.0, 6384.0], [237.0, 6163.0], [236.0, 6570.0], [235.0, 6742.0], [234.0, 5935.0], [233.0, 5850.0], [232.0, 5836.0], [247.0, 6244.0], [246.0, 6402.0], [245.0, 5571.0], [244.0, 5448.0], [243.0, 6561.0], [242.0, 5547.0], [241.0, 6425.0], [240.0, 5694.0], [255.0, 6505.0], [254.0, 5989.0], [253.0, 6534.0], [252.0, 5981.0], [251.0, 5387.0], [250.0, 6565.0], [249.0, 5457.0], [248.0, 6603.0], [270.0, 5810.0], [271.0, 5253.0], [269.0, 5229.0], [259.0, 6334.0], [258.0, 6210.0], [256.0, 5992.0], [266.0, 4918.0], [265.0, 5956.0], [264.0, 6248.0], [263.0, 5814.0], [262.0, 6260.0], [261.0, 6310.0], [260.0, 6323.0], [280.0, 5816.0], [284.0, 5736.0], [283.0, 5757.0], [282.0, 5757.0], [281.0, 5797.0], [279.0, 5612.0], [278.0, 5864.0], [277.0, 5863.0], [276.0, 5864.0], [275.0, 5873.5], [273.0, 5897.0], [272.0, 5214.0], [300.0, 5243.3], [290.0, 5600.0], [289.0, 5714.0], [288.0, 5630.75], [1.0, 9232.0]], "isOverall": false, "label": "HTTP Request", "isController": false}, {"data": [[150.69333333333338, 7626.0700000000015]], "isOverall": false, "label": "HTTP Request-Aggregated", "isController": false}], "supportsControllersDiscrimination": true, "maxX": 300.0, "title": "Time VS Threads"}},
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
        data : {"result": {"minY": 1130.0, "minX": 1.55982174E12, "maxY": 3575.0, "series": [{"data": [[1.55982174E12, 3575.0]], "isOverall": false, "label": "Bytes received per second", "isController": false}, {"data": [[1.55982174E12, 1130.0]], "isOverall": false, "label": "Bytes sent per second", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 60000, "maxX": 1.55982174E12, "title": "Bytes Throughput Over Time"}},
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
        data: {"result": {"minY": 7626.0700000000015, "minX": 1.55982174E12, "maxY": 7626.0700000000015, "series": [{"data": [[1.55982174E12, 7626.0700000000015]], "isOverall": false, "label": "HTTP Request", "isController": false}], "supportsControllersDiscrimination": true, "granularity": 60000, "maxX": 1.55982174E12, "title": "Response Time Over Time"}},
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
        data: {"result": {"minY": 7585.226666666671, "minX": 1.55982174E12, "maxY": 7585.226666666671, "series": [{"data": [[1.55982174E12, 7585.226666666671]], "isOverall": false, "label": "HTTP Request", "isController": false}], "supportsControllersDiscrimination": true, "granularity": 60000, "maxX": 1.55982174E12, "title": "Latencies Over Time"}},
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
        data: {"result": {"minY": 397.1933333333333, "minX": 1.55982174E12, "maxY": 397.1933333333333, "series": [{"data": [[1.55982174E12, 397.1933333333333]], "isOverall": false, "label": "HTTP Request", "isController": false}], "supportsControllersDiscrimination": true, "granularity": 60000, "maxX": 1.55982174E12, "title": "Connect Time Over Time"}},
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
        data: {"result": {"minY": 4735.0, "minX": 1.55982174E12, "maxY": 9618.0, "series": [{"data": [[1.55982174E12, 9618.0]], "isOverall": false, "label": "Max", "isController": false}, {"data": [[1.55982174E12, 4735.0]], "isOverall": false, "label": "Min", "isController": false}, {"data": [[1.55982174E12, 9275.7]], "isOverall": false, "label": "90th percentile", "isController": false}, {"data": [[1.55982174E12, 9608.84]], "isOverall": false, "label": "99th percentile", "isController": false}, {"data": [[1.55982174E12, 9426.9]], "isOverall": false, "label": "95th percentile", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 60000, "maxX": 1.55982174E12, "title": "Response Time Percentiles Over Time (successful requests only)"}},
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
    data: {"result": {"minY": 5317.5, "minX": 14.0, "maxY": 9134.0, "series": [{"data": [[75.0, 7887.0], [50.0, 5867.5], [105.0, 9134.0], [14.0, 5317.5], [56.0, 6614.5]], "isOverall": false, "label": "Successes", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 1000, "maxX": 105.0, "title": "Response Time Vs Request"}},
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
    data: {"result": {"minY": 5291.0, "minX": 14.0, "maxY": 9103.0, "series": [{"data": [[75.0, 7814.0], [50.0, 5789.5], [105.0, 9103.0], [14.0, 5291.0], [56.0, 6561.5]], "isOverall": false, "label": "Successes", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 1000, "maxX": 105.0, "title": "Latencies Vs Request"}},
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
        data: {"result": {"minY": 5.0, "minX": 1.55982174E12, "maxY": 5.0, "series": [{"data": [[1.55982174E12, 5.0]], "isOverall": false, "label": "hitsPerSecond", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 60000, "maxX": 1.55982174E12, "title": "Hits Per Second"}},
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
        data: {"result": {"minY": 1.6666666666666667, "minX": 1.55982174E12, "maxY": 3.3333333333333335, "series": [{"data": [[1.55982174E12, 3.3333333333333335]], "isOverall": false, "label": "200", "isController": false}, {"data": [[1.55982174E12, 1.6666666666666667]], "isOverall": false, "label": "202", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 60000, "maxX": 1.55982174E12, "title": "Codes Per Second"}},
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
        data: {"result": {"minY": 5.0, "minX": 1.55982174E12, "maxY": 5.0, "series": [{"data": [[1.55982174E12, 5.0]], "isOverall": false, "label": "HTTP Request-success", "isController": false}], "supportsControllersDiscrimination": true, "granularity": 60000, "maxX": 1.55982174E12, "title": "Transactions Per Second"}},
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
        data: {"result": {"minY": 5.0, "minX": 1.55982174E12, "maxY": 5.0, "series": [{"data": [[1.55982174E12, 5.0]], "isOverall": false, "label": "Transaction-success", "isController": false}, {"data": [], "isOverall": false, "label": "Transaction-failure", "isController": false}], "supportsControllersDiscrimination": true, "granularity": 60000, "maxX": 1.55982174E12, "title": "Total Transactions Per Second"}},
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

