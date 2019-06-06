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
        data: {"result": {"minY": 4068.0, "minX": 0.0, "maxY": 8177.0, "series": [{"data": [[0.0, 4068.0], [0.1, 4068.0], [0.2, 4068.0], [0.3, 4068.0], [0.4, 4069.0], [0.5, 4069.0], [0.6, 4069.0], [0.7, 4073.0], [0.8, 4073.0], [0.9, 4073.0], [1.0, 4074.0], [1.1, 4074.0], [1.2, 4074.0], [1.3, 4074.0], [1.4, 4079.0], [1.5, 4079.0], [1.6, 4079.0], [1.7, 4088.0], [1.8, 4088.0], [1.9, 4088.0], [2.0, 4096.0], [2.1, 4096.0], [2.2, 4096.0], [2.3, 4096.0], [2.4, 4097.0], [2.5, 4097.0], [2.6, 4097.0], [2.7, 4103.0], [2.8, 4103.0], [2.9, 4103.0], [3.0, 4104.0], [3.1, 4104.0], [3.2, 4104.0], [3.3, 4104.0], [3.4, 4409.0], [3.5, 4409.0], [3.6, 4409.0], [3.7, 4450.0], [3.8, 4450.0], [3.9, 4450.0], [4.0, 4459.0], [4.1, 4459.0], [4.2, 4459.0], [4.3, 4459.0], [4.4, 4504.0], [4.5, 4504.0], [4.6, 4504.0], [4.7, 4508.0], [4.8, 4508.0], [4.9, 4508.0], [5.0, 4521.0], [5.1, 4521.0], [5.2, 4521.0], [5.3, 4521.0], [5.4, 4521.0], [5.5, 4521.0], [5.6, 4521.0], [5.7, 4532.0], [5.8, 4532.0], [5.9, 4532.0], [6.0, 4535.0], [6.1, 4535.0], [6.2, 4535.0], [6.3, 4535.0], [6.4, 4539.0], [6.5, 4539.0], [6.6, 4539.0], [6.7, 4547.0], [6.8, 4547.0], [6.9, 4547.0], [7.0, 4548.0], [7.1, 4548.0], [7.2, 4548.0], [7.3, 4548.0], [7.4, 4553.0], [7.5, 4553.0], [7.6, 4553.0], [7.7, 4554.0], [7.8, 4554.0], [7.9, 4554.0], [8.0, 4574.0], [8.1, 4574.0], [8.2, 4574.0], [8.3, 4574.0], [8.4, 4584.0], [8.5, 4584.0], [8.6, 4584.0], [8.7, 4587.0], [8.8, 4587.0], [8.9, 4587.0], [9.0, 4587.0], [9.1, 4587.0], [9.2, 4587.0], [9.3, 4587.0], [9.4, 4594.0], [9.5, 4594.0], [9.6, 4594.0], [9.7, 4600.0], [9.8, 4600.0], [9.9, 4600.0], [10.0, 4604.0], [10.1, 4604.0], [10.2, 4604.0], [10.3, 4604.0], [10.4, 4604.0], [10.5, 4604.0], [10.6, 4604.0], [10.7, 4613.0], [10.8, 4613.0], [10.9, 4613.0], [11.0, 4623.0], [11.1, 4623.0], [11.2, 4623.0], [11.3, 4623.0], [11.4, 4626.0], [11.5, 4626.0], [11.6, 4626.0], [11.7, 4629.0], [11.8, 4629.0], [11.9, 4629.0], [12.0, 4633.0], [12.1, 4633.0], [12.2, 4633.0], [12.3, 4633.0], [12.4, 4634.0], [12.5, 4634.0], [12.6, 4634.0], [12.7, 4637.0], [12.8, 4637.0], [12.9, 4637.0], [13.0, 4637.0], [13.1, 4638.0], [13.2, 4638.0], [13.3, 4638.0], [13.4, 4640.0], [13.5, 4640.0], [13.6, 4640.0], [13.7, 4640.0], [13.8, 4640.0], [13.9, 4640.0], [14.0, 4640.0], [14.1, 4643.0], [14.2, 4643.0], [14.3, 4643.0], [14.4, 4649.0], [14.5, 4649.0], [14.6, 4649.0], [14.7, 4654.0], [14.8, 4654.0], [14.9, 4654.0], [15.0, 4654.0], [15.1, 4659.0], [15.2, 4659.0], [15.3, 4659.0], [15.4, 4680.0], [15.5, 4680.0], [15.6, 4680.0], [15.7, 4684.0], [15.8, 4684.0], [15.9, 4684.0], [16.0, 4684.0], [16.1, 4685.0], [16.2, 4685.0], [16.3, 4685.0], [16.4, 4695.0], [16.5, 4695.0], [16.6, 4695.0], [16.7, 4708.0], [16.8, 4708.0], [16.9, 4708.0], [17.0, 4719.0], [17.1, 4719.0], [17.2, 4719.0], [17.3, 4719.0], [17.4, 4719.0], [17.5, 4719.0], [17.6, 4719.0], [17.7, 4725.0], [17.8, 4725.0], [17.9, 4725.0], [18.0, 4728.0], [18.1, 4728.0], [18.2, 4728.0], [18.3, 4728.0], [18.4, 4728.0], [18.5, 4728.0], [18.6, 4728.0], [18.7, 4731.0], [18.8, 4731.0], [18.9, 4731.0], [19.0, 4732.0], [19.1, 4732.0], [19.2, 4732.0], [19.3, 4732.0], [19.4, 4734.0], [19.5, 4734.0], [19.6, 4734.0], [19.7, 4850.0], [19.8, 4850.0], [19.9, 4850.0], [20.0, 4863.0], [20.1, 4863.0], [20.2, 4863.0], [20.3, 4863.0], [20.4, 4888.0], [20.5, 4888.0], [20.6, 4888.0], [20.7, 5154.0], [20.8, 5154.0], [20.9, 5154.0], [21.0, 5159.0], [21.1, 5159.0], [21.2, 5159.0], [21.3, 5159.0], [21.4, 5171.0], [21.5, 5171.0], [21.6, 5171.0], [21.7, 5194.0], [21.8, 5194.0], [21.9, 5194.0], [22.0, 5219.0], [22.1, 5219.0], [22.2, 5219.0], [22.3, 5219.0], [22.4, 5282.0], [22.5, 5282.0], [22.6, 5282.0], [22.7, 5333.0], [22.8, 5333.0], [22.9, 5333.0], [23.0, 5391.0], [23.1, 5391.0], [23.2, 5391.0], [23.3, 5391.0], [23.4, 5469.0], [23.5, 5469.0], [23.6, 5469.0], [23.7, 5500.0], [23.8, 5500.0], [23.9, 5500.0], [24.0, 5519.0], [24.1, 5519.0], [24.2, 5519.0], [24.3, 5519.0], [24.4, 5525.0], [24.5, 5525.0], [24.6, 5525.0], [24.7, 5531.0], [24.8, 5531.0], [24.9, 5531.0], [25.0, 5537.0], [25.1, 5537.0], [25.2, 5537.0], [25.3, 5537.0], [25.4, 5541.0], [25.5, 5541.0], [25.6, 5541.0], [25.7, 5542.0], [25.8, 5542.0], [25.9, 5542.0], [26.0, 5551.0], [26.1, 5551.0], [26.2, 5551.0], [26.3, 5551.0], [26.4, 5621.0], [26.5, 5621.0], [26.6, 5621.0], [26.7, 5625.0], [26.8, 5625.0], [26.9, 5625.0], [27.0, 5632.0], [27.1, 5632.0], [27.2, 5632.0], [27.3, 5632.0], [27.4, 5651.0], [27.5, 5651.0], [27.6, 5651.0], [27.7, 5657.0], [27.8, 5657.0], [27.9, 5657.0], [28.0, 5661.0], [28.1, 5661.0], [28.2, 5661.0], [28.3, 5661.0], [28.4, 5662.0], [28.5, 5662.0], [28.6, 5662.0], [28.7, 5666.0], [28.8, 5666.0], [28.9, 5666.0], [29.0, 5669.0], [29.1, 5669.0], [29.2, 5669.0], [29.3, 5669.0], [29.4, 5670.0], [29.5, 5670.0], [29.6, 5670.0], [29.7, 5682.0], [29.8, 5682.0], [29.9, 5682.0], [30.0, 5686.0], [30.1, 5686.0], [30.2, 5686.0], [30.3, 5686.0], [30.4, 5709.0], [30.5, 5709.0], [30.6, 5709.0], [30.7, 5727.0], [30.8, 5727.0], [30.9, 5727.0], [31.0, 5740.0], [31.1, 5740.0], [31.2, 5740.0], [31.3, 5740.0], [31.4, 5805.0], [31.5, 5805.0], [31.6, 5805.0], [31.7, 5811.0], [31.8, 5811.0], [31.9, 5811.0], [32.0, 5832.0], [32.1, 5832.0], [32.2, 5832.0], [32.3, 5832.0], [32.4, 5836.0], [32.5, 5836.0], [32.6, 5836.0], [32.7, 5846.0], [32.8, 5846.0], [32.9, 5846.0], [33.0, 5847.0], [33.1, 5847.0], [33.2, 5847.0], [33.3, 5847.0], [33.4, 5871.0], [33.5, 5871.0], [33.6, 5871.0], [33.7, 5880.0], [33.8, 5880.0], [33.9, 5880.0], [34.0, 5885.0], [34.1, 5885.0], [34.2, 5885.0], [34.3, 5885.0], [34.4, 5888.0], [34.5, 5888.0], [34.6, 5888.0], [34.7, 5888.0], [34.8, 5888.0], [34.9, 5888.0], [35.0, 5890.0], [35.1, 5890.0], [35.2, 5890.0], [35.3, 5890.0], [35.4, 5892.0], [35.5, 5892.0], [35.6, 5892.0], [35.7, 5909.0], [35.8, 5909.0], [35.9, 5909.0], [36.0, 5909.0], [36.1, 5909.0], [36.2, 5909.0], [36.3, 5909.0], [36.4, 5965.0], [36.5, 5965.0], [36.6, 5965.0], [36.7, 5966.0], [36.8, 5966.0], [36.9, 5966.0], [37.0, 5969.0], [37.1, 5969.0], [37.2, 5969.0], [37.3, 5969.0], [37.4, 5975.0], [37.5, 5975.0], [37.6, 5975.0], [37.7, 5976.0], [37.8, 5976.0], [37.9, 5976.0], [38.0, 5977.0], [38.1, 5977.0], [38.2, 5977.0], [38.3, 5977.0], [38.4, 5979.0], [38.5, 5979.0], [38.6, 5979.0], [38.7, 5981.0], [38.8, 5981.0], [38.9, 5981.0], [39.0, 5988.0], [39.1, 5988.0], [39.2, 5988.0], [39.3, 5988.0], [39.4, 6003.0], [39.5, 6003.0], [39.6, 6003.0], [39.7, 6009.0], [39.8, 6009.0], [39.9, 6009.0], [40.0, 6023.0], [40.1, 6023.0], [40.2, 6023.0], [40.3, 6023.0], [40.4, 6024.0], [40.5, 6024.0], [40.6, 6024.0], [40.7, 6050.0], [40.8, 6050.0], [40.9, 6050.0], [41.0, 6054.0], [41.1, 6054.0], [41.2, 6054.0], [41.3, 6054.0], [41.4, 6060.0], [41.5, 6060.0], [41.6, 6060.0], [41.7, 6069.0], [41.8, 6069.0], [41.9, 6069.0], [42.0, 6069.0], [42.1, 6101.0], [42.2, 6101.0], [42.3, 6101.0], [42.4, 6104.0], [42.5, 6104.0], [42.6, 6104.0], [42.7, 6119.0], [42.8, 6119.0], [42.9, 6119.0], [43.0, 6119.0], [43.1, 6311.0], [43.2, 6311.0], [43.3, 6311.0], [43.4, 6334.0], [43.5, 6334.0], [43.6, 6334.0], [43.7, 6338.0], [43.8, 6338.0], [43.9, 6338.0], [44.0, 6338.0], [44.1, 6340.0], [44.2, 6340.0], [44.3, 6340.0], [44.4, 6343.0], [44.5, 6343.0], [44.6, 6343.0], [44.7, 6348.0], [44.8, 6348.0], [44.9, 6348.0], [45.0, 6348.0], [45.1, 6354.0], [45.2, 6354.0], [45.3, 6354.0], [45.4, 6401.0], [45.5, 6401.0], [45.6, 6401.0], [45.7, 6427.0], [45.8, 6427.0], [45.9, 6427.0], [46.0, 6427.0], [46.1, 6448.0], [46.2, 6448.0], [46.3, 6448.0], [46.4, 6561.0], [46.5, 6561.0], [46.6, 6561.0], [46.7, 6581.0], [46.8, 6581.0], [46.9, 6581.0], [47.0, 6581.0], [47.1, 6582.0], [47.2, 6582.0], [47.3, 6582.0], [47.4, 6591.0], [47.5, 6591.0], [47.6, 6591.0], [47.7, 6597.0], [47.8, 6597.0], [47.9, 6597.0], [48.0, 6597.0], [48.1, 6612.0], [48.2, 6612.0], [48.3, 6612.0], [48.4, 6621.0], [48.5, 6621.0], [48.6, 6621.0], [48.7, 6665.0], [48.8, 6665.0], [48.9, 6665.0], [49.0, 6665.0], [49.1, 6674.0], [49.2, 6674.0], [49.3, 6674.0], [49.4, 6704.0], [49.5, 6704.0], [49.6, 6704.0], [49.7, 6769.0], [49.8, 6769.0], [49.9, 6769.0], [50.0, 6769.0], [50.1, 6795.0], [50.2, 6795.0], [50.3, 6795.0], [50.4, 6815.0], [50.5, 6815.0], [50.6, 6815.0], [50.7, 6823.0], [50.8, 6823.0], [50.9, 6823.0], [51.0, 6823.0], [51.1, 6835.0], [51.2, 6835.0], [51.3, 6835.0], [51.4, 6861.0], [51.5, 6861.0], [51.6, 6861.0], [51.7, 6863.0], [51.8, 6863.0], [51.9, 6863.0], [52.0, 6863.0], [52.1, 6908.0], [52.2, 6908.0], [52.3, 6908.0], [52.4, 6918.0], [52.5, 6918.0], [52.6, 6918.0], [52.7, 6973.0], [52.8, 6973.0], [52.9, 6973.0], [53.0, 6973.0], [53.1, 7007.0], [53.2, 7007.0], [53.3, 7007.0], [53.4, 7008.0], [53.5, 7008.0], [53.6, 7008.0], [53.7, 7015.0], [53.8, 7015.0], [53.9, 7015.0], [54.0, 7015.0], [54.1, 7022.0], [54.2, 7022.0], [54.3, 7022.0], [54.4, 7045.0], [54.5, 7045.0], [54.6, 7045.0], [54.7, 7047.0], [54.8, 7047.0], [54.9, 7047.0], [55.0, 7047.0], [55.1, 7055.0], [55.2, 7055.0], [55.3, 7055.0], [55.4, 7093.0], [55.5, 7093.0], [55.6, 7093.0], [55.7, 7115.0], [55.8, 7115.0], [55.9, 7115.0], [56.0, 7115.0], [56.1, 7122.0], [56.2, 7122.0], [56.3, 7122.0], [56.4, 7171.0], [56.5, 7171.0], [56.6, 7171.0], [56.7, 7179.0], [56.8, 7179.0], [56.9, 7179.0], [57.0, 7179.0], [57.1, 7188.0], [57.2, 7188.0], [57.3, 7188.0], [57.4, 7195.0], [57.5, 7195.0], [57.6, 7195.0], [57.7, 7217.0], [57.8, 7217.0], [57.9, 7217.0], [58.0, 7217.0], [58.1, 7219.0], [58.2, 7219.0], [58.3, 7219.0], [58.4, 7239.0], [58.5, 7239.0], [58.6, 7239.0], [58.7, 7240.0], [58.8, 7240.0], [58.9, 7240.0], [59.0, 7240.0], [59.1, 7258.0], [59.2, 7258.0], [59.3, 7258.0], [59.4, 7271.0], [59.5, 7271.0], [59.6, 7271.0], [59.7, 7279.0], [59.8, 7279.0], [59.9, 7279.0], [60.0, 7279.0], [60.1, 7285.0], [60.2, 7285.0], [60.3, 7285.0], [60.4, 7317.0], [60.5, 7317.0], [60.6, 7317.0], [60.7, 7321.0], [60.8, 7321.0], [60.9, 7321.0], [61.0, 7321.0], [61.1, 7343.0], [61.2, 7343.0], [61.3, 7343.0], [61.4, 7358.0], [61.5, 7358.0], [61.6, 7358.0], [61.7, 7383.0], [61.8, 7383.0], [61.9, 7383.0], [62.0, 7383.0], [62.1, 7395.0], [62.2, 7395.0], [62.3, 7395.0], [62.4, 7398.0], [62.5, 7398.0], [62.6, 7398.0], [62.7, 7411.0], [62.8, 7411.0], [62.9, 7411.0], [63.0, 7411.0], [63.1, 7420.0], [63.2, 7420.0], [63.3, 7420.0], [63.4, 7421.0], [63.5, 7421.0], [63.6, 7421.0], [63.7, 7422.0], [63.8, 7422.0], [63.9, 7422.0], [64.0, 7422.0], [64.1, 7427.0], [64.2, 7427.0], [64.3, 7427.0], [64.4, 7430.0], [64.5, 7430.0], [64.6, 7430.0], [64.7, 7433.0], [64.8, 7433.0], [64.9, 7433.0], [65.0, 7433.0], [65.1, 7433.0], [65.2, 7433.0], [65.3, 7433.0], [65.4, 7437.0], [65.5, 7437.0], [65.6, 7437.0], [65.7, 7459.0], [65.8, 7459.0], [65.9, 7459.0], [66.0, 7459.0], [66.1, 7484.0], [66.2, 7484.0], [66.3, 7484.0], [66.4, 7486.0], [66.5, 7486.0], [66.6, 7486.0], [66.7, 7489.0], [66.8, 7489.0], [66.9, 7489.0], [67.0, 7489.0], [67.1, 7494.0], [67.2, 7494.0], [67.3, 7494.0], [67.4, 7497.0], [67.5, 7497.0], [67.6, 7497.0], [67.7, 7497.0], [67.8, 7497.0], [67.9, 7497.0], [68.0, 7497.0], [68.1, 7497.0], [68.2, 7497.0], [68.3, 7497.0], [68.4, 7523.0], [68.5, 7523.0], [68.6, 7523.0], [68.7, 7533.0], [68.8, 7533.0], [68.9, 7533.0], [69.0, 7533.0], [69.1, 7535.0], [69.2, 7535.0], [69.3, 7535.0], [69.4, 7548.0], [69.5, 7548.0], [69.6, 7548.0], [69.7, 7564.0], [69.8, 7564.0], [69.9, 7564.0], [70.0, 7564.0], [70.1, 7579.0], [70.2, 7579.0], [70.3, 7579.0], [70.4, 7597.0], [70.5, 7597.0], [70.6, 7597.0], [70.7, 7603.0], [70.8, 7603.0], [70.9, 7603.0], [71.0, 7603.0], [71.1, 7634.0], [71.2, 7634.0], [71.3, 7634.0], [71.4, 7641.0], [71.5, 7641.0], [71.6, 7641.0], [71.7, 7641.0], [71.8, 7641.0], [71.9, 7641.0], [72.0, 7641.0], [72.1, 7642.0], [72.2, 7642.0], [72.3, 7642.0], [72.4, 7649.0], [72.5, 7649.0], [72.6, 7649.0], [72.7, 7651.0], [72.8, 7651.0], [72.9, 7651.0], [73.0, 7651.0], [73.1, 7652.0], [73.2, 7652.0], [73.3, 7652.0], [73.4, 7654.0], [73.5, 7654.0], [73.6, 7654.0], [73.7, 7660.0], [73.8, 7660.0], [73.9, 7660.0], [74.0, 7660.0], [74.1, 7668.0], [74.2, 7668.0], [74.3, 7668.0], [74.4, 7671.0], [74.5, 7671.0], [74.6, 7671.0], [74.7, 7675.0], [74.8, 7675.0], [74.9, 7675.0], [75.0, 7675.0], [75.1, 7678.0], [75.2, 7678.0], [75.3, 7678.0], [75.4, 7682.0], [75.5, 7682.0], [75.6, 7682.0], [75.7, 7686.0], [75.8, 7686.0], [75.9, 7686.0], [76.0, 7686.0], [76.1, 7688.0], [76.2, 7688.0], [76.3, 7688.0], [76.4, 7697.0], [76.5, 7697.0], [76.6, 7697.0], [76.7, 7700.0], [76.8, 7700.0], [76.9, 7700.0], [77.0, 7700.0], [77.1, 7709.0], [77.2, 7709.0], [77.3, 7709.0], [77.4, 7714.0], [77.5, 7714.0], [77.6, 7714.0], [77.7, 7724.0], [77.8, 7724.0], [77.9, 7724.0], [78.0, 7726.0], [78.1, 7726.0], [78.2, 7726.0], [78.3, 7726.0], [78.4, 7731.0], [78.5, 7731.0], [78.6, 7731.0], [78.7, 7732.0], [78.8, 7732.0], [78.9, 7732.0], [79.0, 7740.0], [79.1, 7740.0], [79.2, 7740.0], [79.3, 7740.0], [79.4, 7741.0], [79.5, 7741.0], [79.6, 7741.0], [79.7, 7750.0], [79.8, 7750.0], [79.9, 7750.0], [80.0, 7755.0], [80.1, 7755.0], [80.2, 7755.0], [80.3, 7755.0], [80.4, 7757.0], [80.5, 7757.0], [80.6, 7757.0], [80.7, 7757.0], [80.8, 7757.0], [80.9, 7757.0], [81.0, 7761.0], [81.1, 7761.0], [81.2, 7761.0], [81.3, 7761.0], [81.4, 7762.0], [81.5, 7762.0], [81.6, 7762.0], [81.7, 7769.0], [81.8, 7769.0], [81.9, 7769.0], [82.0, 7776.0], [82.1, 7776.0], [82.2, 7776.0], [82.3, 7776.0], [82.4, 7781.0], [82.5, 7781.0], [82.6, 7781.0], [82.7, 7786.0], [82.8, 7786.0], [82.9, 7786.0], [83.0, 7788.0], [83.1, 7788.0], [83.2, 7788.0], [83.3, 7788.0], [83.4, 7791.0], [83.5, 7791.0], [83.6, 7791.0], [83.7, 7800.0], [83.8, 7800.0], [83.9, 7800.0], [84.0, 7822.0], [84.1, 7822.0], [84.2, 7822.0], [84.3, 7822.0], [84.4, 7823.0], [84.5, 7823.0], [84.6, 7823.0], [84.7, 7824.0], [84.8, 7824.0], [84.9, 7824.0], [85.0, 7827.0], [85.1, 7827.0], [85.2, 7827.0], [85.3, 7827.0], [85.4, 7832.0], [85.5, 7832.0], [85.6, 7832.0], [85.7, 7833.0], [85.8, 7833.0], [85.9, 7833.0], [86.0, 7855.0], [86.1, 7855.0], [86.2, 7855.0], [86.3, 7855.0], [86.4, 7859.0], [86.5, 7859.0], [86.6, 7859.0], [86.7, 7862.0], [86.8, 7862.0], [86.9, 7862.0], [87.0, 7866.0], [87.1, 7866.0], [87.2, 7866.0], [87.3, 7866.0], [87.4, 7869.0], [87.5, 7869.0], [87.6, 7869.0], [87.7, 7877.0], [87.8, 7877.0], [87.9, 7877.0], [88.0, 7891.0], [88.1, 7891.0], [88.2, 7891.0], [88.3, 7891.0], [88.4, 7900.0], [88.5, 7900.0], [88.6, 7900.0], [88.7, 7911.0], [88.8, 7911.0], [88.9, 7911.0], [89.0, 7914.0], [89.1, 7914.0], [89.2, 7914.0], [89.3, 7914.0], [89.4, 7916.0], [89.5, 7916.0], [89.6, 7916.0], [89.7, 7916.0], [89.8, 7916.0], [89.9, 7916.0], [90.0, 7948.0], [90.1, 7948.0], [90.2, 7948.0], [90.3, 7948.0], [90.4, 7963.0], [90.5, 7963.0], [90.6, 7963.0], [90.7, 7971.0], [90.8, 7971.0], [90.9, 7971.0], [91.0, 7975.0], [91.1, 7975.0], [91.2, 7975.0], [91.3, 7975.0], [91.4, 7979.0], [91.5, 7979.0], [91.6, 7979.0], [91.7, 7979.0], [91.8, 7979.0], [91.9, 7979.0], [92.0, 7985.0], [92.1, 7985.0], [92.2, 7985.0], [92.3, 7985.0], [92.4, 7990.0], [92.5, 7990.0], [92.6, 7990.0], [92.7, 8006.0], [92.8, 8006.0], [92.9, 8006.0], [93.0, 8009.0], [93.1, 8009.0], [93.2, 8009.0], [93.3, 8009.0], [93.4, 8010.0], [93.5, 8010.0], [93.6, 8010.0], [93.7, 8018.0], [93.8, 8018.0], [93.9, 8018.0], [94.0, 8025.0], [94.1, 8025.0], [94.2, 8025.0], [94.3, 8025.0], [94.4, 8029.0], [94.5, 8029.0], [94.6, 8029.0], [94.7, 8032.0], [94.8, 8032.0], [94.9, 8032.0], [95.0, 8039.0], [95.1, 8039.0], [95.2, 8039.0], [95.3, 8039.0], [95.4, 8039.0], [95.5, 8039.0], [95.6, 8039.0], [95.7, 8040.0], [95.8, 8040.0], [95.9, 8040.0], [96.0, 8047.0], [96.1, 8047.0], [96.2, 8047.0], [96.3, 8047.0], [96.4, 8115.0], [96.5, 8115.0], [96.6, 8115.0], [96.7, 8122.0], [96.8, 8122.0], [96.9, 8122.0], [97.0, 8135.0], [97.1, 8135.0], [97.2, 8135.0], [97.3, 8135.0], [97.4, 8142.0], [97.5, 8142.0], [97.6, 8142.0], [97.7, 8143.0], [97.8, 8143.0], [97.9, 8143.0], [98.0, 8158.0], [98.1, 8158.0], [98.2, 8158.0], [98.3, 8158.0], [98.4, 8161.0], [98.5, 8161.0], [98.6, 8161.0], [98.7, 8164.0], [98.8, 8164.0], [98.9, 8164.0], [99.0, 8164.0], [99.1, 8164.0], [99.2, 8164.0], [99.3, 8164.0], [99.4, 8171.0], [99.5, 8171.0], [99.6, 8171.0], [99.7, 8177.0], [99.8, 8177.0], [99.9, 8177.0]], "isOverall": false, "label": "HTTP Request", "isController": false}], "supportsControllersDiscrimination": true, "maxX": 100.0, "title": "Response Time Percentiles"}},
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
        data: {"result": {"minY": 1.0, "minX": 4000.0, "maxY": 21.0, "series": [{"data": [[4000.0, 8.0], [4100.0, 2.0], [4500.0, 16.0], [4600.0, 21.0], [4400.0, 3.0], [4700.0, 9.0], [4800.0, 3.0], [5100.0, 4.0], [5200.0, 2.0], [5300.0, 2.0], [5500.0, 8.0], [5400.0, 1.0], [5600.0, 12.0], [5700.0, 3.0], [5800.0, 13.0], [5900.0, 11.0], [6000.0, 8.0], [6100.0, 3.0], [6300.0, 7.0], [6400.0, 3.0], [6500.0, 5.0], [6600.0, 4.0], [6700.0, 3.0], [6800.0, 5.0], [6900.0, 3.0], [7000.0, 8.0], [7100.0, 6.0], [7200.0, 8.0], [7300.0, 7.0], [7400.0, 17.0], [7500.0, 7.0], [7600.0, 18.0], [7700.0, 21.0], [7800.0, 14.0], [7900.0, 13.0], [8000.0, 11.0], [8100.0, 11.0]], "isOverall": false, "label": "HTTP Request", "isController": false}], "supportsControllersDiscrimination": true, "granularity": 100, "maxX": 8100.0, "title": "Response Time Distribution"}},
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
        data: {"result": {"minY": 100.0, "minX": 2.0, "ticks": [[0, "Requests having \nresponse time <= 500ms"], [1, "Requests having \nresponse time > 500ms and <= 1,500ms"], [2, "Requests having \nresponse time > 1,500ms"], [3, "Requests in error"]], "maxY": 200.0, "series": [{"data": [], "color": "#9ACD32", "isOverall": false, "label": "Requests having \nresponse time <= 500ms", "isController": false}, {"data": [], "color": "yellow", "isOverall": false, "label": "Requests having \nresponse time > 500ms and <= 1,500ms", "isController": false}, {"data": [[2.0, 100.0]], "color": "orange", "isOverall": false, "label": "Requests having \nresponse time > 1,500ms", "isController": false}, {"data": [[3.0, 200.0]], "color": "#FF6347", "isOverall": false, "label": "Requests in error", "isController": false}], "supportsControllersDiscrimination": false, "maxX": 3.0, "title": "Synthetic Response Times Distribution"}},
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
        data: {"result": {"minY": 50.74500000000001, "minX": 1.5598224E12, "maxY": 51.43999999999999, "series": [{"data": [[1.5598224E12, 51.43999999999999]], "isOverall": false, "label": "Job Offers", "isController": false}, {"data": [[1.5598224E12, 50.74500000000001]], "isOverall": false, "label": "Thread Group", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 60000, "maxX": 1.5598224E12, "title": "Active Threads Over Time"}},
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
        data: {"result": {"minY": 4085.1, "minX": 1.0, "maxY": 8177.0, "series": [{"data": [[2.0, 8143.0], [3.0, 8177.0], [4.0, 8164.0], [5.0, 8171.0], [6.0, 8161.0], [7.0, 8164.0], [8.0, 8115.0], [9.0, 8142.0], [10.0, 8135.0], [11.0, 8122.0], [12.0, 8029.0], [13.0, 8025.0], [14.0, 8040.0], [15.0, 8039.0], [16.0, 8039.0], [17.0, 8047.0], [18.0, 8032.0], [19.0, 8006.0], [20.0, 8018.0], [21.0, 7975.0], [22.0, 8010.0], [23.0, 7971.0], [24.0, 8009.0], [25.0, 7985.0], [26.0, 7963.0], [27.0, 7824.0], [28.0, 7990.0], [29.0, 7916.0], [30.0, 7979.0], [31.0, 7979.0], [33.0, 7757.0], [32.0, 7668.0], [35.0, 7948.0], [34.0, 7862.0], [36.0, 7914.0], [39.0, 7916.0], [41.0, 7884.5], [40.0, 7901.0], [43.0, 7877.0], [42.0, 7855.0], [45.0, 7833.0], [44.0, 7866.0], [47.0, 7859.0], [46.0, 7832.0], [49.0, 7823.0], [48.0, 7788.0], [51.0, 7809.0], [53.0, 7486.0], [52.0, 7822.0], [55.0, 7786.0], [54.0, 7800.0], [57.0, 7761.0], [56.0, 7603.0], [59.0, 7769.0], [58.0, 7750.0], [61.0, 7762.0], [60.0, 7781.0], [63.0, 7757.0], [62.0, 7776.0], [67.0, 7741.0], [66.0, 7731.0], [65.0, 7755.0], [64.0, 7732.0], [71.0, 7641.0], [70.0, 7724.0], [69.0, 7740.0], [68.0, 7709.0], [75.0, 7697.0], [74.0, 7671.0], [73.0, 7714.0], [72.0, 7726.0], [79.0, 7688.0], [78.0, 7660.0], [77.0, 7686.0], [76.0, 7700.0], [83.0, 7634.0], [82.0, 7682.0], [81.0, 7678.0], [80.0, 7675.0], [87.0, 7654.0], [86.0, 7649.0], [85.0, 7652.0], [84.0, 7651.0], [91.0, 7420.0], [90.0, 7642.0], [89.0, 7579.0], [88.0, 7358.0], [95.0, 7523.0], [94.0, 7564.0], [93.0, 7641.0], [92.0, 7597.0], [99.0, 7497.0], [98.0, 7535.0], [97.0, 7533.0], [96.0, 7548.0], [103.0, 7497.0], [102.0, 7383.0], [101.0, 7122.0], [100.0, 7494.0], [107.0, 7484.0], [106.0, 7459.0], [105.0, 7489.0], [104.0, 7497.0], [111.0, 7433.0], [110.0, 7437.0], [109.0, 7321.0], [108.0, 7433.0], [115.0, 7430.0], [114.0, 7411.0], [113.0, 7422.0], [112.0, 7421.0], [119.0, 7285.0], [118.0, 7398.0], [117.0, 7427.0], [116.0, 7279.0], [123.0, 7258.0], [122.0, 7317.0], [121.0, 7343.0], [120.0, 7395.0], [127.0, 7219.0], [126.0, 7239.0], [125.0, 7240.0], [124.0, 7271.0], [135.0, 7045.0], [134.0, 7115.0], [133.0, 7093.0], [132.0, 7195.0], [131.0, 7171.0], [130.0, 7188.0], [129.0, 7179.0], [128.0, 7217.0], [143.0, 6918.0], [142.0, 6973.0], [141.0, 7007.0], [140.0, 7008.0], [139.0, 7015.0], [138.0, 7022.0], [137.0, 7055.0], [136.0, 7047.0], [151.0, 6795.0], [150.0, 6769.0], [149.0, 6823.0], [148.0, 6815.0], [147.0, 6861.0], [146.0, 6863.0], [145.0, 6835.0], [144.0, 6908.0], [159.0, 6597.0], [158.0, 6601.0], [156.0, 6601.5], [154.0, 6674.0], [153.0, 6665.0], [152.0, 6704.0], [167.0, 6354.0], [166.0, 6338.0], [165.0, 6348.0], [164.0, 6401.0], [163.0, 6427.0], [162.0, 6448.0], [161.0, 6582.0], [160.0, 6561.0], [175.0, 6060.0], [174.0, 6104.0], [173.0, 6101.0], [172.0, 6119.0], [171.0, 6311.0], [170.0, 6340.0], [169.0, 6343.0], [168.0, 6334.0], [182.0, 6024.0], [181.0, 5871.0], [180.0, 6009.0], [179.0, 6023.0], [178.0, 6050.0], [177.0, 6054.0], [176.0, 6069.0], [190.0, 5842.5], [188.0, 5936.0], [199.0, 5909.0], [198.0, 5909.0], [197.0, 5849.5], [195.0, 5924.666666666667], [192.0, 5965.5], [207.0, 5890.0], [206.0, 5880.0], [205.0, 5888.0], [204.0, 5885.0], [203.0, 5847.0], [202.0, 5657.0], [201.0, 5892.0], [200.0, 5542.0], [215.0, 5670.0], [214.0, 5706.5], [212.0, 5709.0], [211.0, 5632.0], [210.0, 5832.0], [209.0, 5836.0], [208.0, 5846.0], [223.0, 5194.0], [222.0, 5621.0], [221.0, 5653.0], [220.0, 5669.0], [231.0, 5348.0], [229.0, 5531.0], [228.0, 5333.0], [227.0, 5391.25], [239.0, 4888.0], [238.0, 5219.0], [237.0, 5282.0], [236.0, 5519.0], [235.0, 5500.0], [234.0, 5412.333333333333], [247.0, 4708.0], [246.0, 4732.0], [245.0, 4731.0], [244.0, 4719.0], [243.0, 4728.0], [242.0, 4459.0], [241.0, 4850.0], [240.0, 4863.0], [255.0, 4684.0], [254.0, 4429.5], [252.0, 4725.0], [251.0, 4723.5], [250.0, 4695.0], [248.0, 4734.0], [271.0, 4604.0], [270.0, 4631.999999999999], [263.0, 4649.5], [257.0, 4669.5], [286.0, 4504.0], [287.0, 4521.0], [285.0, 4539.0], [284.0, 4521.0], [283.0, 4548.0], [282.0, 4554.0], [281.0, 4567.75], [277.0, 4600.333333333333], [274.0, 4587.0], [273.0, 4594.0], [272.0, 4600.0], [300.0, 4085.1], [290.0, 4508.0], [289.0, 4535.0], [288.0, 4532.0], [1.0, 8158.0]], "isOverall": false, "label": "HTTP Request", "isController": false}, {"data": [[150.99666666666667, 6483.856666666668]], "isOverall": false, "label": "HTTP Request-Aggregated", "isController": false}], "supportsControllersDiscrimination": true, "maxX": 300.0, "title": "Time VS Threads"}},
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
        data : {"result": {"minY": 1130.0, "minX": 1.5598224E12, "maxY": 2920.0, "series": [{"data": [[1.5598224E12, 2920.0]], "isOverall": false, "label": "Bytes received per second", "isController": false}, {"data": [[1.5598224E12, 1130.0]], "isOverall": false, "label": "Bytes sent per second", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 60000, "maxX": 1.5598224E12, "title": "Bytes Throughput Over Time"}},
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
        data: {"result": {"minY": 6483.856666666668, "minX": 1.5598224E12, "maxY": 6483.856666666668, "series": [{"data": [[1.5598224E12, 6483.856666666668]], "isOverall": false, "label": "HTTP Request", "isController": false}], "supportsControllersDiscrimination": true, "granularity": 60000, "maxX": 1.5598224E12, "title": "Response Time Over Time"}},
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
        data: {"result": {"minY": 6445.200000000003, "minX": 1.5598224E12, "maxY": 6445.200000000003, "series": [{"data": [[1.5598224E12, 6445.200000000003]], "isOverall": false, "label": "HTTP Request", "isController": false}], "supportsControllersDiscrimination": true, "granularity": 60000, "maxX": 1.5598224E12, "title": "Latencies Over Time"}},
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
        data: {"result": {"minY": 450.9033333333335, "minX": 1.5598224E12, "maxY": 450.9033333333335, "series": [{"data": [[1.5598224E12, 450.9033333333335]], "isOverall": false, "label": "HTTP Request", "isController": false}], "supportsControllersDiscrimination": true, "granularity": 60000, "maxX": 1.5598224E12, "title": "Connect Time Over Time"}},
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
        data: {"result": {"minY": 5621.0, "minX": 1.5598224E12, "maxY": 8177.0, "series": [{"data": [[1.5598224E12, 8177.0]], "isOverall": false, "label": "Max", "isController": false}, {"data": [[1.5598224E12, 5621.0]], "isOverall": false, "label": "Min", "isController": false}, {"data": [[1.5598224E12, 8121.3]], "isOverall": false, "label": "90th percentile", "isController": false}, {"data": [[1.5598224E12, 8176.94]], "isOverall": false, "label": "99th percentile", "isController": false}, {"data": [[1.5598224E12, 8160.85]], "isOverall": false, "label": "95th percentile", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 60000, "maxX": 1.5598224E12, "title": "Response Time Percentiles Over Time (successful requests only)"}},
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
    data: {"result": {"minY": 4602.0, "minX": 30.0, "maxY": 8135.0, "series": [{"data": [[47.0, 8135.0], [100.0, 7217.0], [30.0, 5664.0], [63.0, 6377.5]], "isOverall": false, "label": "Successes", "isController": false}, {"data": [[47.0, 7967.0], [100.0, 7651.0], [60.0, 4602.0], [30.0, 5430.0], [63.0, 5909.0]], "isOverall": false, "label": "Failures", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 1000, "maxX": 100.0, "title": "Response Time Vs Request"}},
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
    data: {"result": {"minY": 4533.0, "minX": 30.0, "maxY": 8120.0, "series": [{"data": [[47.0, 8120.0], [100.0, 7173.0], [30.0, 5463.0], [63.0, 6349.0]], "isOverall": false, "label": "Successes", "isController": false}, {"data": [[47.0, 7964.5], [100.0, 7647.0], [60.0, 4533.0], [30.0, 5373.5], [63.0, 5883.0]], "isOverall": false, "label": "Failures", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 1000, "maxX": 100.0, "title": "Latencies Vs Request"}},
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
        data: {"result": {"minY": 5.0, "minX": 1.5598224E12, "maxY": 5.0, "series": [{"data": [[1.5598224E12, 5.0]], "isOverall": false, "label": "hitsPerSecond", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 60000, "maxX": 1.5598224E12, "title": "Hits Per Second"}},
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
        data: {"result": {"minY": 1.6666666666666667, "minX": 1.5598224E12, "maxY": 1.6666666666666667, "series": [{"data": [[1.5598224E12, 1.6666666666666667]], "isOverall": false, "label": "200", "isController": false}, {"data": [[1.5598224E12, 1.6666666666666667]], "isOverall": false, "label": "202", "isController": false}, {"data": [[1.5598224E12, 1.6666666666666667]], "isOverall": false, "label": "404", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 60000, "maxX": 1.5598224E12, "title": "Codes Per Second"}},
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
        data: {"result": {"minY": 1.6666666666666667, "minX": 1.5598224E12, "maxY": 3.3333333333333335, "series": [{"data": [[1.5598224E12, 3.3333333333333335]], "isOverall": false, "label": "HTTP Request-failure", "isController": false}, {"data": [[1.5598224E12, 1.6666666666666667]], "isOverall": false, "label": "HTTP Request-success", "isController": false}], "supportsControllersDiscrimination": true, "granularity": 60000, "maxX": 1.5598224E12, "title": "Transactions Per Second"}},
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
        data: {"result": {"minY": 1.6666666666666667, "minX": 1.5598224E12, "maxY": 3.3333333333333335, "series": [{"data": [[1.5598224E12, 1.6666666666666667]], "isOverall": false, "label": "Transaction-success", "isController": false}, {"data": [[1.5598224E12, 3.3333333333333335]], "isOverall": false, "label": "Transaction-failure", "isController": false}], "supportsControllersDiscrimination": true, "granularity": 60000, "maxX": 1.5598224E12, "title": "Total Transactions Per Second"}},
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

