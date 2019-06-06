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
        data: {"result": {"minY": 4549.0, "minX": 0.0, "maxY": 8875.0, "series": [{"data": [[0.0, 4549.0], [0.1, 4549.0], [0.2, 4549.0], [0.3, 4549.0], [0.4, 4558.0], [0.5, 4558.0], [0.6, 4558.0], [0.7, 4560.0], [0.8, 4560.0], [0.9, 4560.0], [1.0, 4561.0], [1.1, 4561.0], [1.2, 4561.0], [1.3, 4561.0], [1.4, 4570.0], [1.5, 4570.0], [1.6, 4570.0], [1.7, 4575.0], [1.8, 4575.0], [1.9, 4575.0], [2.0, 4615.0], [2.1, 4615.0], [2.2, 4615.0], [2.3, 4615.0], [2.4, 4615.0], [2.5, 4615.0], [2.6, 4615.0], [2.7, 4622.0], [2.8, 4622.0], [2.9, 4622.0], [3.0, 4622.0], [3.1, 4622.0], [3.2, 4622.0], [3.3, 4622.0], [3.4, 4856.0], [3.5, 4856.0], [3.6, 4856.0], [3.7, 4877.0], [3.8, 4877.0], [3.9, 4877.0], [4.0, 4879.0], [4.1, 4879.0], [4.2, 4879.0], [4.3, 4879.0], [4.4, 4888.0], [4.5, 4888.0], [4.6, 4888.0], [4.7, 4897.0], [4.8, 4897.0], [4.9, 4897.0], [5.0, 4909.0], [5.1, 4909.0], [5.2, 4909.0], [5.3, 4909.0], [5.4, 4920.0], [5.5, 4920.0], [5.6, 4920.0], [5.7, 4924.0], [5.8, 4924.0], [5.9, 4924.0], [6.0, 4971.0], [6.1, 4971.0], [6.2, 4971.0], [6.3, 4971.0], [6.4, 4974.0], [6.5, 4974.0], [6.6, 4974.0], [6.7, 4981.0], [6.8, 4981.0], [6.9, 4981.0], [7.0, 4985.0], [7.1, 4985.0], [7.2, 4985.0], [7.3, 4985.0], [7.4, 4987.0], [7.5, 4987.0], [7.6, 4987.0], [7.7, 4994.0], [7.8, 4994.0], [7.9, 4994.0], [8.0, 4997.0], [8.1, 4997.0], [8.2, 4997.0], [8.3, 4997.0], [8.4, 4999.0], [8.5, 4999.0], [8.6, 4999.0], [8.7, 5007.0], [8.8, 5007.0], [8.9, 5007.0], [9.0, 5060.0], [9.1, 5060.0], [9.2, 5060.0], [9.3, 5060.0], [9.4, 5086.0], [9.5, 5086.0], [9.6, 5086.0], [9.7, 5141.0], [9.8, 5141.0], [9.9, 5141.0], [10.0, 5166.0], [10.1, 5166.0], [10.2, 5166.0], [10.3, 5166.0], [10.4, 5170.0], [10.5, 5170.0], [10.6, 5170.0], [10.7, 5172.0], [10.8, 5172.0], [10.9, 5172.0], [11.0, 5172.0], [11.1, 5175.0], [11.2, 5175.0], [11.3, 5175.0], [11.4, 5186.0], [11.5, 5186.0], [11.6, 5186.0], [11.7, 5218.0], [11.8, 5218.0], [11.9, 5218.0], [12.0, 5218.0], [12.1, 5224.0], [12.2, 5224.0], [12.3, 5224.0], [12.4, 5234.0], [12.5, 5234.0], [12.6, 5234.0], [12.7, 5301.0], [12.8, 5301.0], [12.9, 5301.0], [13.0, 5301.0], [13.1, 5421.0], [13.2, 5421.0], [13.3, 5421.0], [13.4, 5439.0], [13.5, 5439.0], [13.6, 5439.0], [13.7, 5452.0], [13.8, 5452.0], [13.9, 5452.0], [14.0, 5452.0], [14.1, 5455.0], [14.2, 5455.0], [14.3, 5455.0], [14.4, 5472.0], [14.5, 5472.0], [14.6, 5472.0], [14.7, 5490.0], [14.8, 5490.0], [14.9, 5490.0], [15.0, 5490.0], [15.1, 5490.0], [15.2, 5490.0], [15.3, 5490.0], [15.4, 5497.0], [15.5, 5497.0], [15.6, 5497.0], [15.7, 5504.0], [15.8, 5504.0], [15.9, 5504.0], [16.0, 5504.0], [16.1, 5516.0], [16.2, 5516.0], [16.3, 5516.0], [16.4, 5522.0], [16.5, 5522.0], [16.6, 5522.0], [16.7, 5524.0], [16.8, 5524.0], [16.9, 5524.0], [17.0, 5524.0], [17.1, 5562.0], [17.2, 5562.0], [17.3, 5562.0], [17.4, 5571.0], [17.5, 5571.0], [17.6, 5571.0], [17.7, 5571.0], [17.8, 5571.0], [17.9, 5571.0], [18.0, 5571.0], [18.1, 5576.0], [18.2, 5576.0], [18.3, 5576.0], [18.4, 5583.0], [18.5, 5583.0], [18.6, 5583.0], [18.7, 5586.0], [18.8, 5586.0], [18.9, 5586.0], [19.0, 5591.0], [19.1, 5591.0], [19.2, 5591.0], [19.3, 5591.0], [19.4, 5600.0], [19.5, 5600.0], [19.6, 5600.0], [19.7, 5619.0], [19.8, 5619.0], [19.9, 5619.0], [20.0, 5620.0], [20.1, 5620.0], [20.2, 5620.0], [20.3, 5620.0], [20.4, 5627.0], [20.5, 5627.0], [20.6, 5627.0], [20.7, 5651.0], [20.8, 5651.0], [20.9, 5651.0], [21.0, 5657.0], [21.1, 5657.0], [21.2, 5657.0], [21.3, 5657.0], [21.4, 5658.0], [21.5, 5658.0], [21.6, 5658.0], [21.7, 5666.0], [21.8, 5666.0], [21.9, 5666.0], [22.0, 5672.0], [22.1, 5672.0], [22.2, 5672.0], [22.3, 5672.0], [22.4, 5676.0], [22.5, 5676.0], [22.6, 5676.0], [22.7, 5685.0], [22.8, 5685.0], [22.9, 5685.0], [23.0, 5692.0], [23.1, 5692.0], [23.2, 5692.0], [23.3, 5692.0], [23.4, 5693.0], [23.5, 5693.0], [23.6, 5693.0], [23.7, 5710.0], [23.8, 5710.0], [23.9, 5710.0], [24.0, 5712.0], [24.1, 5712.0], [24.2, 5712.0], [24.3, 5712.0], [24.4, 5727.0], [24.5, 5727.0], [24.6, 5727.0], [24.7, 5732.0], [24.8, 5732.0], [24.9, 5732.0], [25.0, 5747.0], [25.1, 5747.0], [25.2, 5747.0], [25.3, 5747.0], [25.4, 5747.0], [25.5, 5747.0], [25.6, 5747.0], [25.7, 5771.0], [25.8, 5771.0], [25.9, 5771.0], [26.0, 5774.0], [26.1, 5774.0], [26.2, 5774.0], [26.3, 5774.0], [26.4, 5793.0], [26.5, 5793.0], [26.6, 5793.0], [26.7, 5815.0], [26.8, 5815.0], [26.9, 5815.0], [27.0, 5816.0], [27.1, 5816.0], [27.2, 5816.0], [27.3, 5816.0], [27.4, 5821.0], [27.5, 5821.0], [27.6, 5821.0], [27.7, 5846.0], [27.8, 5846.0], [27.9, 5846.0], [28.0, 5847.0], [28.1, 5847.0], [28.2, 5847.0], [28.3, 5847.0], [28.4, 5850.0], [28.5, 5850.0], [28.6, 5850.0], [28.7, 5898.0], [28.8, 5898.0], [28.9, 5898.0], [29.0, 5898.0], [29.1, 5898.0], [29.2, 5898.0], [29.3, 5898.0], [29.4, 5898.0], [29.5, 5898.0], [29.6, 5898.0], [29.7, 5932.0], [29.8, 5932.0], [29.9, 5932.0], [30.0, 5934.0], [30.1, 5934.0], [30.2, 5934.0], [30.3, 5934.0], [30.4, 5962.0], [30.5, 5962.0], [30.6, 5962.0], [30.7, 5969.0], [30.8, 5969.0], [30.9, 5969.0], [31.0, 5986.0], [31.1, 5986.0], [31.2, 5986.0], [31.3, 5986.0], [31.4, 5997.0], [31.5, 5997.0], [31.6, 5997.0], [31.7, 6007.0], [31.8, 6007.0], [31.9, 6007.0], [32.0, 6034.0], [32.1, 6034.0], [32.2, 6034.0], [32.3, 6034.0], [32.4, 6053.0], [32.5, 6053.0], [32.6, 6053.0], [32.7, 6136.0], [32.8, 6136.0], [32.9, 6136.0], [33.0, 6226.0], [33.1, 6226.0], [33.2, 6226.0], [33.3, 6226.0], [33.4, 6237.0], [33.5, 6237.0], [33.6, 6237.0], [33.7, 6243.0], [33.8, 6243.0], [33.9, 6243.0], [34.0, 6254.0], [34.1, 6254.0], [34.2, 6254.0], [34.3, 6254.0], [34.4, 6260.0], [34.5, 6260.0], [34.6, 6260.0], [34.7, 6260.0], [34.8, 6260.0], [34.9, 6260.0], [35.0, 6270.0], [35.1, 6270.0], [35.2, 6270.0], [35.3, 6270.0], [35.4, 6307.0], [35.5, 6307.0], [35.6, 6307.0], [35.7, 6342.0], [35.8, 6342.0], [35.9, 6342.0], [36.0, 6386.0], [36.1, 6386.0], [36.2, 6386.0], [36.3, 6386.0], [36.4, 6513.0], [36.5, 6513.0], [36.6, 6513.0], [36.7, 6517.0], [36.8, 6517.0], [36.9, 6517.0], [37.0, 6517.0], [37.1, 6517.0], [37.2, 6517.0], [37.3, 6517.0], [37.4, 6517.0], [37.5, 6517.0], [37.6, 6517.0], [37.7, 6533.0], [37.8, 6533.0], [37.9, 6533.0], [38.0, 6534.0], [38.1, 6534.0], [38.2, 6534.0], [38.3, 6534.0], [38.4, 6546.0], [38.5, 6546.0], [38.6, 6546.0], [38.7, 6556.0], [38.8, 6556.0], [38.9, 6556.0], [39.0, 6598.0], [39.1, 6598.0], [39.2, 6598.0], [39.3, 6598.0], [39.4, 6659.0], [39.5, 6659.0], [39.6, 6659.0], [39.7, 6704.0], [39.8, 6704.0], [39.9, 6704.0], [40.0, 6705.0], [40.1, 6705.0], [40.2, 6705.0], [40.3, 6705.0], [40.4, 6732.0], [40.5, 6732.0], [40.6, 6732.0], [40.7, 6746.0], [40.8, 6746.0], [40.9, 6746.0], [41.0, 6746.0], [41.1, 6768.0], [41.2, 6768.0], [41.3, 6768.0], [41.4, 6775.0], [41.5, 6775.0], [41.6, 6775.0], [41.7, 6788.0], [41.8, 6788.0], [41.9, 6788.0], [42.0, 6788.0], [42.1, 6789.0], [42.2, 6789.0], [42.3, 6789.0], [42.4, 6845.0], [42.5, 6845.0], [42.6, 6845.0], [42.7, 6885.0], [42.8, 6885.0], [42.9, 6885.0], [43.0, 6885.0], [43.1, 6955.0], [43.2, 6955.0], [43.3, 6955.0], [43.4, 6976.0], [43.5, 6976.0], [43.6, 6976.0], [43.7, 6993.0], [43.8, 6993.0], [43.9, 6993.0], [44.0, 6993.0], [44.1, 6998.0], [44.2, 6998.0], [44.3, 6998.0], [44.4, 6999.0], [44.5, 6999.0], [44.6, 6999.0], [44.7, 7004.0], [44.8, 7004.0], [44.9, 7004.0], [45.0, 7004.0], [45.1, 7014.0], [45.2, 7014.0], [45.3, 7014.0], [45.4, 7016.0], [45.5, 7016.0], [45.6, 7016.0], [45.7, 7070.0], [45.8, 7070.0], [45.9, 7070.0], [46.0, 7070.0], [46.1, 7096.0], [46.2, 7096.0], [46.3, 7096.0], [46.4, 7171.0], [46.5, 7171.0], [46.6, 7171.0], [46.7, 7174.0], [46.8, 7174.0], [46.9, 7174.0], [47.0, 7174.0], [47.1, 7180.0], [47.2, 7180.0], [47.3, 7180.0], [47.4, 7198.0], [47.5, 7198.0], [47.6, 7198.0], [47.7, 7206.0], [47.8, 7206.0], [47.9, 7206.0], [48.0, 7206.0], [48.1, 7227.0], [48.2, 7227.0], [48.3, 7227.0], [48.4, 7239.0], [48.5, 7239.0], [48.6, 7239.0], [48.7, 7239.0], [48.8, 7239.0], [48.9, 7239.0], [49.0, 7239.0], [49.1, 7240.0], [49.2, 7240.0], [49.3, 7240.0], [49.4, 7245.0], [49.5, 7245.0], [49.6, 7245.0], [49.7, 7254.0], [49.8, 7254.0], [49.9, 7254.0], [50.0, 7254.0], [50.1, 7258.0], [50.2, 7258.0], [50.3, 7258.0], [50.4, 7294.0], [50.5, 7294.0], [50.6, 7294.0], [50.7, 7296.0], [50.8, 7296.0], [50.9, 7296.0], [51.0, 7296.0], [51.1, 7303.0], [51.2, 7303.0], [51.3, 7303.0], [51.4, 7307.0], [51.5, 7307.0], [51.6, 7307.0], [51.7, 7324.0], [51.8, 7324.0], [51.9, 7324.0], [52.0, 7324.0], [52.1, 7326.0], [52.2, 7326.0], [52.3, 7326.0], [52.4, 7371.0], [52.5, 7371.0], [52.6, 7371.0], [52.7, 7393.0], [52.8, 7393.0], [52.9, 7393.0], [53.0, 7393.0], [53.1, 7412.0], [53.2, 7412.0], [53.3, 7412.0], [53.4, 7432.0], [53.5, 7432.0], [53.6, 7432.0], [53.7, 7471.0], [53.8, 7471.0], [53.9, 7471.0], [54.0, 7471.0], [54.1, 7477.0], [54.2, 7477.0], [54.3, 7477.0], [54.4, 7482.0], [54.5, 7482.0], [54.6, 7482.0], [54.7, 7496.0], [54.8, 7496.0], [54.9, 7496.0], [55.0, 7496.0], [55.1, 7502.0], [55.2, 7502.0], [55.3, 7502.0], [55.4, 7502.0], [55.5, 7502.0], [55.6, 7502.0], [55.7, 7504.0], [55.8, 7504.0], [55.9, 7504.0], [56.0, 7504.0], [56.1, 7505.0], [56.2, 7505.0], [56.3, 7505.0], [56.4, 7518.0], [56.5, 7518.0], [56.6, 7518.0], [56.7, 7532.0], [56.8, 7532.0], [56.9, 7532.0], [57.0, 7532.0], [57.1, 7539.0], [57.2, 7539.0], [57.3, 7539.0], [57.4, 7591.0], [57.5, 7591.0], [57.6, 7591.0], [57.7, 7596.0], [57.8, 7596.0], [57.9, 7596.0], [58.0, 7596.0], [58.1, 7610.0], [58.2, 7610.0], [58.3, 7610.0], [58.4, 7632.0], [58.5, 7632.0], [58.6, 7632.0], [58.7, 7635.0], [58.8, 7635.0], [58.9, 7635.0], [59.0, 7635.0], [59.1, 7658.0], [59.2, 7658.0], [59.3, 7658.0], [59.4, 7688.0], [59.5, 7688.0], [59.6, 7688.0], [59.7, 7723.0], [59.8, 7723.0], [59.9, 7723.0], [60.0, 7723.0], [60.1, 7737.0], [60.2, 7737.0], [60.3, 7737.0], [60.4, 7742.0], [60.5, 7742.0], [60.6, 7742.0], [60.7, 7746.0], [60.8, 7746.0], [60.9, 7746.0], [61.0, 7746.0], [61.1, 7756.0], [61.2, 7756.0], [61.3, 7756.0], [61.4, 7769.0], [61.5, 7769.0], [61.6, 7769.0], [61.7, 7773.0], [61.8, 7773.0], [61.9, 7773.0], [62.0, 7773.0], [62.1, 7779.0], [62.2, 7779.0], [62.3, 7779.0], [62.4, 7801.0], [62.5, 7801.0], [62.6, 7801.0], [62.7, 7811.0], [62.8, 7811.0], [62.9, 7811.0], [63.0, 7811.0], [63.1, 7835.0], [63.2, 7835.0], [63.3, 7835.0], [63.4, 7896.0], [63.5, 7896.0], [63.6, 7896.0], [63.7, 7903.0], [63.8, 7903.0], [63.9, 7903.0], [64.0, 7903.0], [64.1, 7928.0], [64.2, 7928.0], [64.3, 7928.0], [64.4, 7934.0], [64.5, 7934.0], [64.6, 7934.0], [64.7, 7935.0], [64.8, 7935.0], [64.9, 7935.0], [65.0, 7935.0], [65.1, 7951.0], [65.2, 7951.0], [65.3, 7951.0], [65.4, 7961.0], [65.5, 7961.0], [65.6, 7961.0], [65.7, 7964.0], [65.8, 7964.0], [65.9, 7964.0], [66.0, 7964.0], [66.1, 7965.0], [66.2, 7965.0], [66.3, 7965.0], [66.4, 7978.0], [66.5, 7978.0], [66.6, 7978.0], [66.7, 7983.0], [66.8, 7983.0], [66.9, 7983.0], [67.0, 7983.0], [67.1, 8000.0], [67.2, 8000.0], [67.3, 8000.0], [67.4, 8000.0], [67.5, 8000.0], [67.6, 8000.0], [67.7, 8003.0], [67.8, 8003.0], [67.9, 8003.0], [68.0, 8003.0], [68.1, 8014.0], [68.2, 8014.0], [68.3, 8014.0], [68.4, 8022.0], [68.5, 8022.0], [68.6, 8022.0], [68.7, 8026.0], [68.8, 8026.0], [68.9, 8026.0], [69.0, 8026.0], [69.1, 8034.0], [69.2, 8034.0], [69.3, 8034.0], [69.4, 8037.0], [69.5, 8037.0], [69.6, 8037.0], [69.7, 8042.0], [69.8, 8042.0], [69.9, 8042.0], [70.0, 8042.0], [70.1, 8057.0], [70.2, 8057.0], [70.3, 8057.0], [70.4, 8060.0], [70.5, 8060.0], [70.6, 8060.0], [70.7, 8071.0], [70.8, 8071.0], [70.9, 8071.0], [71.0, 8071.0], [71.1, 8078.0], [71.2, 8078.0], [71.3, 8078.0], [71.4, 8081.0], [71.5, 8081.0], [71.6, 8081.0], [71.7, 8092.0], [71.8, 8092.0], [71.9, 8092.0], [72.0, 8092.0], [72.1, 8094.0], [72.2, 8094.0], [72.3, 8094.0], [72.4, 8096.0], [72.5, 8096.0], [72.6, 8096.0], [72.7, 8109.0], [72.8, 8109.0], [72.9, 8109.0], [73.0, 8109.0], [73.1, 8110.0], [73.2, 8110.0], [73.3, 8110.0], [73.4, 8120.0], [73.5, 8120.0], [73.6, 8120.0], [73.7, 8125.0], [73.8, 8125.0], [73.9, 8125.0], [74.0, 8125.0], [74.1, 8133.0], [74.2, 8133.0], [74.3, 8133.0], [74.4, 8137.0], [74.5, 8137.0], [74.6, 8137.0], [74.7, 8140.0], [74.8, 8140.0], [74.9, 8140.0], [75.0, 8140.0], [75.1, 8144.0], [75.2, 8144.0], [75.3, 8144.0], [75.4, 8145.0], [75.5, 8145.0], [75.6, 8145.0], [75.7, 8152.0], [75.8, 8152.0], [75.9, 8152.0], [76.0, 8164.0], [76.1, 8164.0], [76.2, 8164.0], [76.3, 8164.0], [76.4, 8167.0], [76.5, 8167.0], [76.6, 8167.0], [76.7, 8188.0], [76.8, 8188.0], [76.9, 8188.0], [77.0, 8193.0], [77.1, 8193.0], [77.2, 8193.0], [77.3, 8193.0], [77.4, 8207.0], [77.5, 8207.0], [77.6, 8207.0], [77.7, 8211.0], [77.8, 8211.0], [77.9, 8211.0], [78.0, 8228.0], [78.1, 8228.0], [78.2, 8228.0], [78.3, 8228.0], [78.4, 8232.0], [78.5, 8232.0], [78.6, 8232.0], [78.7, 8233.0], [78.8, 8233.0], [78.9, 8233.0], [79.0, 8241.0], [79.1, 8241.0], [79.2, 8241.0], [79.3, 8241.0], [79.4, 8248.0], [79.5, 8248.0], [79.6, 8248.0], [79.7, 8251.0], [79.8, 8251.0], [79.9, 8251.0], [80.0, 8262.0], [80.1, 8262.0], [80.2, 8262.0], [80.3, 8262.0], [80.4, 8267.0], [80.5, 8267.0], [80.6, 8267.0], [80.7, 8272.0], [80.8, 8272.0], [80.9, 8272.0], [81.0, 8284.0], [81.1, 8284.0], [81.2, 8284.0], [81.3, 8284.0], [81.4, 8289.0], [81.5, 8289.0], [81.6, 8289.0], [81.7, 8306.0], [81.8, 8306.0], [81.9, 8306.0], [82.0, 8307.0], [82.1, 8307.0], [82.2, 8307.0], [82.3, 8307.0], [82.4, 8335.0], [82.5, 8335.0], [82.6, 8335.0], [82.7, 8338.0], [82.8, 8338.0], [82.9, 8338.0], [83.0, 8383.0], [83.1, 8383.0], [83.2, 8383.0], [83.3, 8383.0], [83.4, 8396.0], [83.5, 8396.0], [83.6, 8396.0], [83.7, 8430.0], [83.8, 8430.0], [83.9, 8430.0], [84.0, 8485.0], [84.1, 8485.0], [84.2, 8485.0], [84.3, 8485.0], [84.4, 8500.0], [84.5, 8500.0], [84.6, 8500.0], [84.7, 8507.0], [84.8, 8507.0], [84.9, 8507.0], [85.0, 8533.0], [85.1, 8533.0], [85.2, 8533.0], [85.3, 8533.0], [85.4, 8539.0], [85.5, 8539.0], [85.6, 8539.0], [85.7, 8552.0], [85.8, 8552.0], [85.9, 8552.0], [86.0, 8555.0], [86.1, 8555.0], [86.2, 8555.0], [86.3, 8555.0], [86.4, 8565.0], [86.5, 8565.0], [86.6, 8565.0], [86.7, 8567.0], [86.8, 8567.0], [86.9, 8567.0], [87.0, 8579.0], [87.1, 8579.0], [87.2, 8579.0], [87.3, 8579.0], [87.4, 8582.0], [87.5, 8582.0], [87.6, 8582.0], [87.7, 8585.0], [87.8, 8585.0], [87.9, 8585.0], [88.0, 8601.0], [88.1, 8601.0], [88.2, 8601.0], [88.3, 8601.0], [88.4, 8605.0], [88.5, 8605.0], [88.6, 8605.0], [88.7, 8607.0], [88.8, 8607.0], [88.9, 8607.0], [89.0, 8625.0], [89.1, 8625.0], [89.2, 8625.0], [89.3, 8625.0], [89.4, 8627.0], [89.5, 8627.0], [89.6, 8627.0], [89.7, 8629.0], [89.8, 8629.0], [89.9, 8629.0], [90.0, 8633.0], [90.1, 8633.0], [90.2, 8633.0], [90.3, 8633.0], [90.4, 8641.0], [90.5, 8641.0], [90.6, 8641.0], [90.7, 8643.0], [90.8, 8643.0], [90.9, 8643.0], [91.0, 8654.0], [91.1, 8654.0], [91.2, 8654.0], [91.3, 8654.0], [91.4, 8665.0], [91.5, 8665.0], [91.6, 8665.0], [91.7, 8676.0], [91.8, 8676.0], [91.9, 8676.0], [92.0, 8683.0], [92.1, 8683.0], [92.2, 8683.0], [92.3, 8683.0], [92.4, 8686.0], [92.5, 8686.0], [92.6, 8686.0], [92.7, 8688.0], [92.8, 8688.0], [92.9, 8688.0], [93.0, 8694.0], [93.1, 8694.0], [93.2, 8694.0], [93.3, 8694.0], [93.4, 8704.0], [93.5, 8704.0], [93.6, 8704.0], [93.7, 8721.0], [93.8, 8721.0], [93.9, 8721.0], [94.0, 8728.0], [94.1, 8728.0], [94.2, 8728.0], [94.3, 8728.0], [94.4, 8733.0], [94.5, 8733.0], [94.6, 8733.0], [94.7, 8734.0], [94.8, 8734.0], [94.9, 8734.0], [95.0, 8744.0], [95.1, 8744.0], [95.2, 8744.0], [95.3, 8744.0], [95.4, 8745.0], [95.5, 8745.0], [95.6, 8745.0], [95.7, 8748.0], [95.8, 8748.0], [95.9, 8748.0], [96.0, 8756.0], [96.1, 8756.0], [96.2, 8756.0], [96.3, 8756.0], [96.4, 8766.0], [96.5, 8766.0], [96.6, 8766.0], [96.7, 8775.0], [96.8, 8775.0], [96.9, 8775.0], [97.0, 8813.0], [97.1, 8813.0], [97.2, 8813.0], [97.3, 8813.0], [97.4, 8833.0], [97.5, 8833.0], [97.6, 8833.0], [97.7, 8840.0], [97.8, 8840.0], [97.9, 8840.0], [98.0, 8860.0], [98.1, 8860.0], [98.2, 8860.0], [98.3, 8860.0], [98.4, 8871.0], [98.5, 8871.0], [98.6, 8871.0], [98.7, 8872.0], [98.8, 8872.0], [98.9, 8872.0], [99.0, 8873.0], [99.1, 8873.0], [99.2, 8873.0], [99.3, 8873.0], [99.4, 8873.0], [99.5, 8873.0], [99.6, 8873.0], [99.7, 8875.0], [99.8, 8875.0], [99.9, 8875.0]], "isOverall": false, "label": "HTTP Request", "isController": false}], "supportsControllersDiscrimination": true, "maxX": 100.0, "title": "Response Time Percentiles"}},
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
        data: {"result": {"minY": 1.0, "minX": 4500.0, "maxY": 17.0, "series": [{"data": [[8200.0, 13.0], [8300.0, 6.0], [8400.0, 2.0], [8500.0, 11.0], [8600.0, 16.0], [8700.0, 11.0], [8800.0, 9.0], [4600.0, 4.0], [4500.0, 6.0], [4800.0, 5.0], [4900.0, 11.0], [5000.0, 3.0], [5100.0, 6.0], [5200.0, 3.0], [5300.0, 1.0], [5400.0, 8.0], [5500.0, 11.0], [5600.0, 13.0], [5700.0, 9.0], [5800.0, 9.0], [5900.0, 6.0], [6000.0, 3.0], [6100.0, 1.0], [6200.0, 7.0], [6300.0, 3.0], [6500.0, 9.0], [6600.0, 1.0], [6700.0, 8.0], [6800.0, 2.0], [6900.0, 5.0], [7000.0, 5.0], [7100.0, 4.0], [7200.0, 10.0], [7300.0, 6.0], [7400.0, 6.0], [7500.0, 9.0], [7600.0, 5.0], [7700.0, 8.0], [7800.0, 4.0], [7900.0, 10.0], [8000.0, 17.0], [8100.0, 14.0]], "isOverall": false, "label": "HTTP Request", "isController": false}], "supportsControllersDiscrimination": true, "granularity": 100, "maxX": 8800.0, "title": "Response Time Distribution"}},
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
        data: {"result": {"minY": 50.535000000000046, "minX": 1.55982648E12, "maxY": 51.05000000000002, "series": [{"data": [[1.55982648E12, 51.05000000000002]], "isOverall": false, "label": "Job Offers", "isController": false}, {"data": [[1.55982648E12, 50.535000000000046]], "isOverall": false, "label": "Thread Group", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 60000, "maxX": 1.55982648E12, "title": "Active Threads Over Time"}},
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
        data: {"result": {"minY": 4584.7, "minX": 1.0, "maxY": 8875.0, "series": [{"data": [[2.0, 8871.0], [3.0, 8873.0], [4.0, 8875.0], [5.0, 8860.0], [6.0, 8872.0], [7.0, 8833.0], [8.0, 8840.0], [9.0, 8813.0], [10.0, 8775.0], [11.0, 8766.0], [12.0, 8756.0], [13.0, 8745.0], [14.0, 8748.0], [15.0, 8733.0], [16.0, 8744.0], [17.0, 8734.0], [18.0, 8728.0], [19.0, 8721.0], [20.0, 8704.0], [21.0, 8694.0], [22.0, 8688.0], [23.0, 8686.0], [24.0, 8683.0], [25.0, 8676.0], [26.0, 8665.0], [27.0, 8654.0], [28.0, 8643.0], [29.0, 8641.0], [30.0, 8633.0], [31.0, 8625.0], [33.0, 8627.0], [32.0, 8629.0], [35.0, 8605.0], [34.0, 8607.0], [37.0, 8582.0], [36.0, 8601.0], [39.0, 8579.0], [38.0, 8585.0], [41.0, 8567.0], [40.0, 8565.0], [43.0, 8552.0], [42.0, 8555.0], [45.0, 8533.0], [44.0, 8539.0], [47.0, 8507.0], [46.0, 8500.0], [49.0, 8430.0], [48.0, 8485.0], [51.0, 8383.0], [50.0, 8396.0], [53.0, 8338.0], [52.0, 8335.0], [55.0, 8306.5], [57.0, 8284.0], [56.0, 8289.0], [59.0, 8267.0], [58.0, 8272.0], [61.0, 8251.0], [60.0, 8262.0], [63.0, 8241.0], [62.0, 8248.0], [67.0, 8211.0], [66.0, 8228.0], [65.0, 8232.0], [64.0, 8233.0], [71.0, 8167.0], [70.0, 8188.0], [69.0, 8193.0], [68.0, 8207.0], [75.0, 8140.0], [74.0, 8144.0], [73.0, 8152.0], [72.0, 8164.0], [79.0, 8125.0], [78.0, 8133.0], [77.0, 8137.0], [76.0, 8145.0], [83.0, 8094.0], [82.0, 8110.0], [81.0, 8109.0], [80.0, 8120.0], [87.0, 8078.0], [86.0, 8081.0], [85.0, 8092.0], [84.0, 8096.0], [91.0, 8042.0], [90.0, 8057.0], [89.0, 8060.0], [88.0, 8071.0], [95.0, 8022.0], [94.0, 8037.0], [93.0, 8026.0], [92.0, 8034.0], [99.0, 8000.0], [98.0, 8000.0], [97.0, 8003.0], [96.0, 8014.0], [103.0, 7961.0], [102.0, 7965.0], [101.0, 7978.0], [100.0, 7983.0], [107.0, 7934.0], [106.0, 7935.0], [105.0, 7951.0], [104.0, 7964.0], [111.0, 7835.0], [110.0, 7896.0], [109.0, 7903.0], [108.0, 7928.0], [115.0, 7769.0], [114.0, 7773.0], [113.0, 7801.0], [112.0, 7811.0], [119.0, 7742.0], [118.0, 7746.0], [117.0, 7756.0], [116.0, 7779.0], [123.0, 7658.0], [122.0, 7688.0], [121.0, 7723.0], [120.0, 7737.0], [127.0, 7596.0], [126.0, 7610.0], [125.0, 7632.0], [124.0, 7635.0], [135.0, 7496.0], [134.0, 7505.0], [133.0, 7502.0], [132.0, 7504.0], [131.0, 7518.0], [130.0, 7539.0], [129.0, 7532.0], [128.0, 7591.0], [143.0, 7371.0], [142.0, 7412.0], [141.0, 7393.0], [140.0, 7432.0], [139.0, 7477.0], [138.0, 7471.0], [137.0, 7482.0], [136.0, 7502.0], [151.0, 7254.0], [150.0, 7258.0], [149.0, 7296.0], [148.0, 7294.0], [147.0, 7307.0], [146.0, 7303.0], [145.0, 7326.0], [144.0, 7324.0], [159.0, 7174.0], [158.0, 7198.0], [157.0, 7206.0], [156.0, 7239.0], [155.0, 7227.0], [154.0, 7240.0], [153.0, 7245.0], [152.0, 7239.0], [167.0, 6999.0], [166.0, 6993.0], [165.0, 7016.0], [164.0, 7014.0], [163.0, 7070.0], [162.0, 7096.0], [161.0, 7171.0], [160.0, 7180.0], [175.0, 6788.0], [174.0, 6789.0], [173.0, 6845.0], [172.0, 6885.0], [171.0, 6955.0], [170.0, 6976.0], [169.0, 6998.0], [168.0, 7004.0], [183.0, 6598.0], [182.0, 6659.0], [181.0, 6705.0], [180.0, 6704.0], [179.0, 6732.0], [178.0, 6746.0], [177.0, 6768.0], [176.0, 6775.0], [191.0, 6517.0], [188.0, 6513.0], [187.0, 6534.0], [186.0, 6546.0], [185.0, 6533.0], [184.0, 6556.0], [199.0, 6243.0], [198.0, 6260.0], [197.0, 6260.0], [196.0, 6254.0], [195.0, 6270.0], [194.0, 6307.0], [193.0, 6342.0], [192.0, 6386.0], [207.0, 5997.0], [206.0, 5996.5], [204.0, 6053.0], [203.0, 6034.0], [202.0, 6136.0], [201.0, 6226.0], [200.0, 6237.0], [215.0, 5850.0], [214.0, 5898.0], [213.0, 5898.0], [212.0, 5898.0], [211.0, 5932.0], [210.0, 5934.0], [209.0, 5962.0], [208.0, 5969.0], [223.0, 5774.0], [222.0, 5771.0], [221.0, 5793.0], [220.0, 5815.0], [219.0, 5816.0], [218.0, 5821.0], [217.0, 5846.0], [216.0, 5847.0], [231.0, 5685.0], [230.0, 5693.0], [229.0, 5710.0], [228.0, 5712.0], [227.0, 5727.0], [226.0, 5732.0], [225.0, 5747.0], [224.0, 5747.0], [239.0, 5645.0], [236.0, 5666.0], [235.0, 5658.0], [234.0, 5676.0], [233.0, 5672.0], [232.0, 5692.0], [247.0, 5571.0], [246.0, 5591.0], [245.0, 5583.0], [244.0, 5576.0], [243.0, 5600.0], [242.0, 5586.0], [241.0, 5619.0], [240.0, 5620.0], [255.0, 5490.0], [254.0, 5497.0], [253.0, 5522.0], [252.0, 5504.0], [251.0, 5516.0], [250.0, 5524.0], [249.0, 5562.0], [248.0, 5571.0], [270.0, 5170.0], [271.0, 5141.0], [269.0, 5166.0], [268.0, 5175.0], [267.0, 5172.0], [266.0, 5186.0], [265.0, 5218.0], [264.0, 5224.0], [263.0, 5234.0], [257.0, 5472.0], [256.0, 5490.0], [259.0, 5452.0], [258.0, 5455.0], [262.0, 5301.0], [261.0, 5421.0], [260.0, 5439.0], [286.0, 4897.0], [287.0, 4888.0], [285.0, 4909.0], [284.0, 4924.0], [283.0, 4920.0], [282.0, 4971.0], [281.0, 4974.0], [280.0, 4981.0], [279.0, 4992.4], [272.0, 5086.0], [274.0, 5007.0], [273.0, 5060.0], [300.0, 4584.7], [290.0, 4856.0], [289.0, 4877.0], [288.0, 4879.0], [1.0, 8873.0]], "isOverall": false, "label": "HTTP Request", "isController": false}, {"data": [[150.7099999999999, 7010.4299999999985]], "isOverall": false, "label": "HTTP Request-Aggregated", "isController": false}], "supportsControllersDiscrimination": true, "maxX": 300.0, "title": "Time VS Threads"}},
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
        data : {"result": {"minY": 1130.0, "minX": 1.55982648E12, "maxY": 3660.0, "series": [{"data": [[1.55982648E12, 3660.0]], "isOverall": false, "label": "Bytes received per second", "isController": false}, {"data": [[1.55982648E12, 1130.0]], "isOverall": false, "label": "Bytes sent per second", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 60000, "maxX": 1.55982648E12, "title": "Bytes Throughput Over Time"}},
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
        data: {"result": {"minY": 7010.4299999999985, "minX": 1.55982648E12, "maxY": 7010.4299999999985, "series": [{"data": [[1.55982648E12, 7010.4299999999985]], "isOverall": false, "label": "HTTP Request", "isController": false}], "supportsControllersDiscrimination": true, "granularity": 60000, "maxX": 1.55982648E12, "title": "Response Time Over Time"}},
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
        data: {"result": {"minY": 6965.979999999999, "minX": 1.55982648E12, "maxY": 6965.979999999999, "series": [{"data": [[1.55982648E12, 6965.979999999999]], "isOverall": false, "label": "HTTP Request", "isController": false}], "supportsControllersDiscrimination": true, "granularity": 60000, "maxX": 1.55982648E12, "title": "Latencies Over Time"}},
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
        data: {"result": {"minY": 364.57333333333315, "minX": 1.55982648E12, "maxY": 364.57333333333315, "series": [{"data": [[1.55982648E12, 364.57333333333315]], "isOverall": false, "label": "HTTP Request", "isController": false}], "supportsControllersDiscrimination": true, "granularity": 60000, "maxX": 1.55982648E12, "title": "Connect Time Over Time"}},
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
        data: {"result": {"minY": 4549.0, "minX": 1.55982648E12, "maxY": 8875.0, "series": [{"data": [[1.55982648E12, 8875.0]], "isOverall": false, "label": "Max", "isController": false}, {"data": [[1.55982648E12, 4549.0]], "isOverall": false, "label": "Min", "isController": false}, {"data": [[1.55982648E12, 8632.6]], "isOverall": false, "label": "90th percentile", "isController": false}, {"data": [[1.55982648E12, 8872.99]], "isOverall": false, "label": "99th percentile", "isController": false}, {"data": [[1.55982648E12, 8743.5]], "isOverall": false, "label": "95th percentile", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 60000, "maxX": 1.55982648E12, "title": "Response Time Percentiles Over Time (successful requests only)"}},
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
    data: {"result": {"minY": 4892.5, "minX": 28.0, "maxY": 8536.0, "series": [{"data": [[70.0, 5654.0], [75.0, 7610.0], [39.0, 6598.0], [88.0, 8536.0], [28.0, 4892.5]], "isOverall": false, "label": "Successes", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 1000, "maxX": 88.0, "title": "Response Time Vs Request"}},
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
    data: {"result": {"minY": 4844.0, "minX": 28.0, "maxY": 8470.0, "series": [{"data": [[70.0, 5555.0], [75.0, 7573.0], [39.0, 6577.0], [88.0, 8470.0], [28.0, 4844.0]], "isOverall": false, "label": "Successes", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 1000, "maxX": 88.0, "title": "Latencies Vs Request"}},
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
        data: {"result": {"minY": 5.0, "minX": 1.55982648E12, "maxY": 5.0, "series": [{"data": [[1.55982648E12, 5.0]], "isOverall": false, "label": "hitsPerSecond", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 60000, "maxX": 1.55982648E12, "title": "Hits Per Second"}},
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
        data: {"result": {"minY": 1.6666666666666667, "minX": 1.55982648E12, "maxY": 3.3333333333333335, "series": [{"data": [[1.55982648E12, 3.3333333333333335]], "isOverall": false, "label": "200", "isController": false}, {"data": [[1.55982648E12, 1.6666666666666667]], "isOverall": false, "label": "202", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 60000, "maxX": 1.55982648E12, "title": "Codes Per Second"}},
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
        data: {"result": {"minY": 5.0, "minX": 1.55982648E12, "maxY": 5.0, "series": [{"data": [[1.55982648E12, 5.0]], "isOverall": false, "label": "HTTP Request-success", "isController": false}], "supportsControllersDiscrimination": true, "granularity": 60000, "maxX": 1.55982648E12, "title": "Transactions Per Second"}},
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
        data: {"result": {"minY": 5.0, "minX": 1.55982648E12, "maxY": 5.0, "series": [{"data": [[1.55982648E12, 5.0]], "isOverall": false, "label": "Transaction-success", "isController": false}, {"data": [], "isOverall": false, "label": "Transaction-failure", "isController": false}], "supportsControllersDiscrimination": true, "granularity": 60000, "maxX": 1.55982648E12, "title": "Total Transactions Per Second"}},
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

