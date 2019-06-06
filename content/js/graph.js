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
        data: {"result": {"minY": 4717.0, "minX": 0.0, "maxY": 9532.0, "series": [{"data": [[0.0, 4717.0], [0.1, 4717.0], [0.2, 4717.0], [0.3, 4717.0], [0.4, 4761.0], [0.5, 4761.0], [0.6, 4761.0], [0.7, 4801.0], [0.8, 4801.0], [0.9, 4801.0], [1.0, 4812.0], [1.1, 4812.0], [1.2, 4812.0], [1.3, 4812.0], [1.4, 4822.0], [1.5, 4822.0], [1.6, 4822.0], [1.7, 4940.0], [1.8, 4940.0], [1.9, 4940.0], [2.0, 4946.0], [2.1, 4946.0], [2.2, 4946.0], [2.3, 4946.0], [2.4, 4950.0], [2.5, 4950.0], [2.6, 4950.0], [2.7, 4962.0], [2.8, 4962.0], [2.9, 4962.0], [3.0, 4968.0], [3.1, 4968.0], [3.2, 4968.0], [3.3, 4968.0], [3.4, 5016.0], [3.5, 5016.0], [3.6, 5016.0], [3.7, 5072.0], [3.8, 5072.0], [3.9, 5072.0], [4.0, 5243.0], [4.1, 5243.0], [4.2, 5243.0], [4.3, 5243.0], [4.4, 5247.0], [4.5, 5247.0], [4.6, 5247.0], [4.7, 5276.0], [4.8, 5276.0], [4.9, 5276.0], [5.0, 5280.0], [5.1, 5280.0], [5.2, 5280.0], [5.3, 5280.0], [5.4, 5294.0], [5.5, 5294.0], [5.6, 5294.0], [5.7, 5299.0], [5.8, 5299.0], [5.9, 5299.0], [6.0, 5322.0], [6.1, 5322.0], [6.2, 5322.0], [6.3, 5322.0], [6.4, 5322.0], [6.5, 5322.0], [6.6, 5322.0], [6.7, 5348.0], [6.8, 5348.0], [6.9, 5348.0], [7.0, 5349.0], [7.1, 5349.0], [7.2, 5349.0], [7.3, 5349.0], [7.4, 5363.0], [7.5, 5363.0], [7.6, 5363.0], [7.7, 5452.0], [7.8, 5452.0], [7.9, 5452.0], [8.0, 5457.0], [8.1, 5457.0], [8.2, 5457.0], [8.3, 5457.0], [8.4, 5482.0], [8.5, 5482.0], [8.6, 5482.0], [8.7, 5484.0], [8.8, 5484.0], [8.9, 5484.0], [9.0, 5484.0], [9.1, 5484.0], [9.2, 5484.0], [9.3, 5484.0], [9.4, 5495.0], [9.5, 5495.0], [9.6, 5495.0], [9.7, 5499.0], [9.8, 5499.0], [9.9, 5499.0], [10.0, 5506.0], [10.1, 5506.0], [10.2, 5506.0], [10.3, 5506.0], [10.4, 5515.0], [10.5, 5515.0], [10.6, 5515.0], [10.7, 5548.0], [10.8, 5548.0], [10.9, 5548.0], [11.0, 5550.0], [11.1, 5550.0], [11.2, 5550.0], [11.3, 5550.0], [11.4, 5564.0], [11.5, 5564.0], [11.6, 5564.0], [11.7, 5566.0], [11.8, 5566.0], [11.9, 5566.0], [12.0, 5566.0], [12.1, 5568.0], [12.2, 5568.0], [12.3, 5568.0], [12.4, 5573.0], [12.5, 5573.0], [12.6, 5573.0], [12.7, 5592.0], [12.8, 5592.0], [12.9, 5592.0], [13.0, 5592.0], [13.1, 5592.0], [13.2, 5592.0], [13.3, 5592.0], [13.4, 5610.0], [13.5, 5610.0], [13.6, 5610.0], [13.7, 5622.0], [13.8, 5622.0], [13.9, 5622.0], [14.0, 5622.0], [14.1, 5624.0], [14.2, 5624.0], [14.3, 5624.0], [14.4, 5635.0], [14.5, 5635.0], [14.6, 5635.0], [14.7, 5654.0], [14.8, 5654.0], [14.9, 5654.0], [15.0, 5654.0], [15.1, 5668.0], [15.2, 5668.0], [15.3, 5668.0], [15.4, 5771.0], [15.5, 5771.0], [15.6, 5771.0], [15.7, 5787.0], [15.8, 5787.0], [15.9, 5787.0], [16.0, 5787.0], [16.1, 5810.0], [16.2, 5810.0], [16.3, 5810.0], [16.4, 5816.0], [16.5, 5816.0], [16.6, 5816.0], [16.7, 5825.0], [16.8, 5825.0], [16.9, 5825.0], [17.0, 5825.0], [17.1, 5826.0], [17.2, 5826.0], [17.3, 5826.0], [17.4, 5836.0], [17.5, 5836.0], [17.6, 5836.0], [17.7, 5846.0], [17.8, 5846.0], [17.9, 5846.0], [18.0, 5847.0], [18.1, 5847.0], [18.2, 5847.0], [18.3, 5847.0], [18.4, 5853.0], [18.5, 5853.0], [18.6, 5853.0], [18.7, 5865.0], [18.8, 5865.0], [18.9, 5865.0], [19.0, 5873.0], [19.1, 5873.0], [19.2, 5873.0], [19.3, 5873.0], [19.4, 5900.0], [19.5, 5900.0], [19.6, 5900.0], [19.7, 5909.0], [19.8, 5909.0], [19.9, 5909.0], [20.0, 5916.0], [20.1, 5916.0], [20.2, 5916.0], [20.3, 5916.0], [20.4, 5933.0], [20.5, 5933.0], [20.6, 5933.0], [20.7, 5946.0], [20.8, 5946.0], [20.9, 5946.0], [21.0, 5955.0], [21.1, 5955.0], [21.2, 5955.0], [21.3, 5955.0], [21.4, 5994.0], [21.5, 5994.0], [21.6, 5994.0], [21.7, 6008.0], [21.8, 6008.0], [21.9, 6008.0], [22.0, 6014.0], [22.1, 6014.0], [22.2, 6014.0], [22.3, 6014.0], [22.4, 6032.0], [22.5, 6032.0], [22.6, 6032.0], [22.7, 6087.0], [22.8, 6087.0], [22.9, 6087.0], [23.0, 6102.0], [23.1, 6102.0], [23.2, 6102.0], [23.3, 6102.0], [23.4, 6110.0], [23.5, 6110.0], [23.6, 6110.0], [23.7, 6120.0], [23.8, 6120.0], [23.9, 6120.0], [24.0, 6156.0], [24.1, 6156.0], [24.2, 6156.0], [24.3, 6156.0], [24.4, 6172.0], [24.5, 6172.0], [24.6, 6172.0], [24.7, 6198.0], [24.8, 6198.0], [24.9, 6198.0], [25.0, 6216.0], [25.1, 6216.0], [25.2, 6216.0], [25.3, 6216.0], [25.4, 6220.0], [25.5, 6220.0], [25.6, 6220.0], [25.7, 6256.0], [25.8, 6256.0], [25.9, 6256.0], [26.0, 6262.0], [26.1, 6262.0], [26.2, 6262.0], [26.3, 6262.0], [26.4, 6276.0], [26.5, 6276.0], [26.6, 6276.0], [26.7, 6290.0], [26.8, 6290.0], [26.9, 6290.0], [27.0, 6304.0], [27.1, 6304.0], [27.2, 6304.0], [27.3, 6304.0], [27.4, 6305.0], [27.5, 6305.0], [27.6, 6305.0], [27.7, 6330.0], [27.8, 6330.0], [27.9, 6330.0], [28.0, 6342.0], [28.1, 6342.0], [28.2, 6342.0], [28.3, 6342.0], [28.4, 6348.0], [28.5, 6348.0], [28.6, 6348.0], [28.7, 6350.0], [28.8, 6350.0], [28.9, 6350.0], [29.0, 6358.0], [29.1, 6358.0], [29.2, 6358.0], [29.3, 6358.0], [29.4, 6427.0], [29.5, 6427.0], [29.6, 6427.0], [29.7, 6466.0], [29.8, 6466.0], [29.9, 6466.0], [30.0, 6480.0], [30.1, 6480.0], [30.2, 6480.0], [30.3, 6480.0], [30.4, 6489.0], [30.5, 6489.0], [30.6, 6489.0], [30.7, 6512.0], [30.8, 6512.0], [30.9, 6512.0], [31.0, 6515.0], [31.1, 6515.0], [31.2, 6515.0], [31.3, 6515.0], [31.4, 6576.0], [31.5, 6576.0], [31.6, 6576.0], [31.7, 6581.0], [31.8, 6581.0], [31.9, 6581.0], [32.0, 6590.0], [32.1, 6590.0], [32.2, 6590.0], [32.3, 6590.0], [32.4, 6597.0], [32.5, 6597.0], [32.6, 6597.0], [32.7, 6623.0], [32.8, 6623.0], [32.9, 6623.0], [33.0, 6629.0], [33.1, 6629.0], [33.2, 6629.0], [33.3, 6629.0], [33.4, 6660.0], [33.5, 6660.0], [33.6, 6660.0], [33.7, 6717.0], [33.8, 6717.0], [33.9, 6717.0], [34.0, 6747.0], [34.1, 6747.0], [34.2, 6747.0], [34.3, 6747.0], [34.4, 6762.0], [34.5, 6762.0], [34.6, 6762.0], [34.7, 6786.0], [34.8, 6786.0], [34.9, 6786.0], [35.0, 6792.0], [35.1, 6792.0], [35.2, 6792.0], [35.3, 6792.0], [35.4, 6802.0], [35.5, 6802.0], [35.6, 6802.0], [35.7, 6811.0], [35.8, 6811.0], [35.9, 6811.0], [36.0, 6845.0], [36.1, 6845.0], [36.2, 6845.0], [36.3, 6845.0], [36.4, 6857.0], [36.5, 6857.0], [36.6, 6857.0], [36.7, 6860.0], [36.8, 6860.0], [36.9, 6860.0], [37.0, 6860.0], [37.1, 6860.0], [37.2, 6860.0], [37.3, 6860.0], [37.4, 6894.0], [37.5, 6894.0], [37.6, 6894.0], [37.7, 6901.0], [37.8, 6901.0], [37.9, 6901.0], [38.0, 6930.0], [38.1, 6930.0], [38.2, 6930.0], [38.3, 6930.0], [38.4, 6953.0], [38.5, 6953.0], [38.6, 6953.0], [38.7, 6967.0], [38.8, 6967.0], [38.9, 6967.0], [39.0, 6970.0], [39.1, 6970.0], [39.2, 6970.0], [39.3, 6970.0], [39.4, 6977.0], [39.5, 6977.0], [39.6, 6977.0], [39.7, 7013.0], [39.8, 7013.0], [39.9, 7013.0], [40.0, 7021.0], [40.1, 7021.0], [40.2, 7021.0], [40.3, 7021.0], [40.4, 7034.0], [40.5, 7034.0], [40.6, 7034.0], [40.7, 7064.0], [40.8, 7064.0], [40.9, 7064.0], [41.0, 7064.0], [41.1, 7076.0], [41.2, 7076.0], [41.3, 7076.0], [41.4, 7097.0], [41.5, 7097.0], [41.6, 7097.0], [41.7, 7125.0], [41.8, 7125.0], [41.9, 7125.0], [42.0, 7125.0], [42.1, 7141.0], [42.2, 7141.0], [42.3, 7141.0], [42.4, 7142.0], [42.5, 7142.0], [42.6, 7142.0], [42.7, 7160.0], [42.8, 7160.0], [42.9, 7160.0], [43.0, 7160.0], [43.1, 7162.0], [43.2, 7162.0], [43.3, 7162.0], [43.4, 7168.0], [43.5, 7168.0], [43.6, 7168.0], [43.7, 7175.0], [43.8, 7175.0], [43.9, 7175.0], [44.0, 7175.0], [44.1, 7180.0], [44.2, 7180.0], [44.3, 7180.0], [44.4, 7184.0], [44.5, 7184.0], [44.6, 7184.0], [44.7, 7185.0], [44.8, 7185.0], [44.9, 7185.0], [45.0, 7185.0], [45.1, 7192.0], [45.2, 7192.0], [45.3, 7192.0], [45.4, 7240.0], [45.5, 7240.0], [45.6, 7240.0], [45.7, 7248.0], [45.8, 7248.0], [45.9, 7248.0], [46.0, 7248.0], [46.1, 7262.0], [46.2, 7262.0], [46.3, 7262.0], [46.4, 7271.0], [46.5, 7271.0], [46.6, 7271.0], [46.7, 7284.0], [46.8, 7284.0], [46.9, 7284.0], [47.0, 7284.0], [47.1, 7300.0], [47.2, 7300.0], [47.3, 7300.0], [47.4, 7322.0], [47.5, 7322.0], [47.6, 7322.0], [47.7, 7342.0], [47.8, 7342.0], [47.9, 7342.0], [48.0, 7342.0], [48.1, 7346.0], [48.2, 7346.0], [48.3, 7346.0], [48.4, 7357.0], [48.5, 7357.0], [48.6, 7357.0], [48.7, 7358.0], [48.8, 7358.0], [48.9, 7358.0], [49.0, 7358.0], [49.1, 7361.0], [49.2, 7361.0], [49.3, 7361.0], [49.4, 7363.0], [49.5, 7363.0], [49.6, 7363.0], [49.7, 7373.0], [49.8, 7373.0], [49.9, 7373.0], [50.0, 7373.0], [50.1, 7396.0], [50.2, 7396.0], [50.3, 7396.0], [50.4, 7401.0], [50.5, 7401.0], [50.6, 7401.0], [50.7, 7414.0], [50.8, 7414.0], [50.9, 7414.0], [51.0, 7414.0], [51.1, 7424.0], [51.2, 7424.0], [51.3, 7424.0], [51.4, 7427.0], [51.5, 7427.0], [51.6, 7427.0], [51.7, 7439.0], [51.8, 7439.0], [51.9, 7439.0], [52.0, 7439.0], [52.1, 7441.0], [52.2, 7441.0], [52.3, 7441.0], [52.4, 7456.0], [52.5, 7456.0], [52.6, 7456.0], [52.7, 7524.0], [52.8, 7524.0], [52.9, 7524.0], [53.0, 7524.0], [53.1, 7537.0], [53.2, 7537.0], [53.3, 7537.0], [53.4, 7543.0], [53.5, 7543.0], [53.6, 7543.0], [53.7, 7578.0], [53.8, 7578.0], [53.9, 7578.0], [54.0, 7578.0], [54.1, 7580.0], [54.2, 7580.0], [54.3, 7580.0], [54.4, 7599.0], [54.5, 7599.0], [54.6, 7599.0], [54.7, 7600.0], [54.8, 7600.0], [54.9, 7600.0], [55.0, 7600.0], [55.1, 7604.0], [55.2, 7604.0], [55.3, 7604.0], [55.4, 7609.0], [55.5, 7609.0], [55.6, 7609.0], [55.7, 7616.0], [55.8, 7616.0], [55.9, 7616.0], [56.0, 7616.0], [56.1, 7620.0], [56.2, 7620.0], [56.3, 7620.0], [56.4, 7636.0], [56.5, 7636.0], [56.6, 7636.0], [56.7, 7644.0], [56.8, 7644.0], [56.9, 7644.0], [57.0, 7644.0], [57.1, 7650.0], [57.2, 7650.0], [57.3, 7650.0], [57.4, 7655.0], [57.5, 7655.0], [57.6, 7655.0], [57.7, 7655.0], [57.8, 7655.0], [57.9, 7655.0], [58.0, 7655.0], [58.1, 7674.0], [58.2, 7674.0], [58.3, 7674.0], [58.4, 7686.0], [58.5, 7686.0], [58.6, 7686.0], [58.7, 7744.0], [58.8, 7744.0], [58.9, 7744.0], [59.0, 7744.0], [59.1, 7773.0], [59.2, 7773.0], [59.3, 7773.0], [59.4, 7791.0], [59.5, 7791.0], [59.6, 7791.0], [59.7, 7793.0], [59.8, 7793.0], [59.9, 7793.0], [60.0, 7793.0], [60.1, 7810.0], [60.2, 7810.0], [60.3, 7810.0], [60.4, 7812.0], [60.5, 7812.0], [60.6, 7812.0], [60.7, 7827.0], [60.8, 7827.0], [60.9, 7827.0], [61.0, 7827.0], [61.1, 7832.0], [61.2, 7832.0], [61.3, 7832.0], [61.4, 7837.0], [61.5, 7837.0], [61.6, 7837.0], [61.7, 7839.0], [61.8, 7839.0], [61.9, 7839.0], [62.0, 7839.0], [62.1, 7850.0], [62.2, 7850.0], [62.3, 7850.0], [62.4, 7854.0], [62.5, 7854.0], [62.6, 7854.0], [62.7, 7857.0], [62.8, 7857.0], [62.9, 7857.0], [63.0, 7857.0], [63.1, 7868.0], [63.2, 7868.0], [63.3, 7868.0], [63.4, 7871.0], [63.5, 7871.0], [63.6, 7871.0], [63.7, 7880.0], [63.8, 7880.0], [63.9, 7880.0], [64.0, 7880.0], [64.1, 7881.0], [64.2, 7881.0], [64.3, 7881.0], [64.4, 7883.0], [64.5, 7883.0], [64.6, 7883.0], [64.7, 7924.0], [64.8, 7924.0], [64.9, 7924.0], [65.0, 7924.0], [65.1, 7933.0], [65.2, 7933.0], [65.3, 7933.0], [65.4, 7948.0], [65.5, 7948.0], [65.6, 7948.0], [65.7, 7957.0], [65.8, 7957.0], [65.9, 7957.0], [66.0, 7957.0], [66.1, 7967.0], [66.2, 7967.0], [66.3, 7967.0], [66.4, 7976.0], [66.5, 7976.0], [66.6, 7976.0], [66.7, 7982.0], [66.8, 7982.0], [66.9, 7982.0], [67.0, 7982.0], [67.1, 7984.0], [67.2, 7984.0], [67.3, 7984.0], [67.4, 7995.0], [67.5, 7995.0], [67.6, 7995.0], [67.7, 7996.0], [67.8, 7996.0], [67.9, 7996.0], [68.0, 7996.0], [68.1, 8008.0], [68.2, 8008.0], [68.3, 8008.0], [68.4, 8008.0], [68.5, 8008.0], [68.6, 8008.0], [68.7, 8020.0], [68.8, 8020.0], [68.9, 8020.0], [69.0, 8020.0], [69.1, 8022.0], [69.2, 8022.0], [69.3, 8022.0], [69.4, 8032.0], [69.5, 8032.0], [69.6, 8032.0], [69.7, 8037.0], [69.8, 8037.0], [69.9, 8037.0], [70.0, 8037.0], [70.1, 8038.0], [70.2, 8038.0], [70.3, 8038.0], [70.4, 8038.0], [70.5, 8038.0], [70.6, 8038.0], [70.7, 8038.0], [70.8, 8038.0], [70.9, 8038.0], [71.0, 8038.0], [71.1, 8040.0], [71.2, 8040.0], [71.3, 8040.0], [71.4, 8049.0], [71.5, 8049.0], [71.6, 8049.0], [71.7, 8057.0], [71.8, 8057.0], [71.9, 8057.0], [72.0, 8057.0], [72.1, 8061.0], [72.2, 8061.0], [72.3, 8061.0], [72.4, 8067.0], [72.5, 8067.0], [72.6, 8067.0], [72.7, 8075.0], [72.8, 8075.0], [72.9, 8075.0], [73.0, 8075.0], [73.1, 8079.0], [73.2, 8079.0], [73.3, 8079.0], [73.4, 8081.0], [73.5, 8081.0], [73.6, 8081.0], [73.7, 8085.0], [73.8, 8085.0], [73.9, 8085.0], [74.0, 8085.0], [74.1, 8090.0], [74.2, 8090.0], [74.3, 8090.0], [74.4, 8108.0], [74.5, 8108.0], [74.6, 8108.0], [74.7, 8113.0], [74.8, 8113.0], [74.9, 8113.0], [75.0, 8113.0], [75.1, 8123.0], [75.2, 8123.0], [75.3, 8123.0], [75.4, 8128.0], [75.5, 8128.0], [75.6, 8128.0], [75.7, 8130.0], [75.8, 8130.0], [75.9, 8130.0], [76.0, 8130.0], [76.1, 8137.0], [76.2, 8137.0], [76.3, 8137.0], [76.4, 8152.0], [76.5, 8152.0], [76.6, 8152.0], [76.7, 8154.0], [76.8, 8154.0], [76.9, 8154.0], [77.0, 8169.0], [77.1, 8169.0], [77.2, 8169.0], [77.3, 8169.0], [77.4, 8171.0], [77.5, 8171.0], [77.6, 8171.0], [77.7, 8190.0], [77.8, 8190.0], [77.9, 8190.0], [78.0, 8205.0], [78.1, 8205.0], [78.2, 8205.0], [78.3, 8205.0], [78.4, 8222.0], [78.5, 8222.0], [78.6, 8222.0], [78.7, 8225.0], [78.8, 8225.0], [78.9, 8225.0], [79.0, 8226.0], [79.1, 8226.0], [79.2, 8226.0], [79.3, 8226.0], [79.4, 8228.0], [79.5, 8228.0], [79.6, 8228.0], [79.7, 8245.0], [79.8, 8245.0], [79.9, 8245.0], [80.0, 8249.0], [80.1, 8249.0], [80.2, 8249.0], [80.3, 8249.0], [80.4, 8255.0], [80.5, 8255.0], [80.6, 8255.0], [80.7, 8270.0], [80.8, 8270.0], [80.9, 8270.0], [81.0, 8277.0], [81.1, 8277.0], [81.2, 8277.0], [81.3, 8277.0], [81.4, 8288.0], [81.5, 8288.0], [81.6, 8288.0], [81.7, 8290.0], [81.8, 8290.0], [81.9, 8290.0], [82.0, 8291.0], [82.1, 8291.0], [82.2, 8291.0], [82.3, 8291.0], [82.4, 8306.0], [82.5, 8306.0], [82.6, 8306.0], [82.7, 8308.0], [82.8, 8308.0], [82.9, 8308.0], [83.0, 8321.0], [83.1, 8321.0], [83.2, 8321.0], [83.3, 8321.0], [83.4, 8326.0], [83.5, 8326.0], [83.6, 8326.0], [83.7, 8341.0], [83.8, 8341.0], [83.9, 8341.0], [84.0, 8366.0], [84.1, 8366.0], [84.2, 8366.0], [84.3, 8366.0], [84.4, 8368.0], [84.5, 8368.0], [84.6, 8368.0], [84.7, 8375.0], [84.8, 8375.0], [84.9, 8375.0], [85.0, 8429.0], [85.1, 8429.0], [85.2, 8429.0], [85.3, 8429.0], [85.4, 8440.0], [85.5, 8440.0], [85.6, 8440.0], [85.7, 8475.0], [85.8, 8475.0], [85.9, 8475.0], [86.0, 8479.0], [86.1, 8479.0], [86.2, 8479.0], [86.3, 8479.0], [86.4, 8489.0], [86.5, 8489.0], [86.6, 8489.0], [86.7, 8504.0], [86.8, 8504.0], [86.9, 8504.0], [87.0, 8513.0], [87.1, 8513.0], [87.2, 8513.0], [87.3, 8513.0], [87.4, 8552.0], [87.5, 8552.0], [87.6, 8552.0], [87.7, 8561.0], [87.8, 8561.0], [87.9, 8561.0], [88.0, 8588.0], [88.1, 8588.0], [88.2, 8588.0], [88.3, 8588.0], [88.4, 8599.0], [88.5, 8599.0], [88.6, 8599.0], [88.7, 8618.0], [88.8, 8618.0], [88.9, 8618.0], [89.0, 8626.0], [89.1, 8626.0], [89.2, 8626.0], [89.3, 8626.0], [89.4, 8641.0], [89.5, 8641.0], [89.6, 8641.0], [89.7, 8648.0], [89.8, 8648.0], [89.9, 8648.0], [90.0, 8652.0], [90.1, 8652.0], [90.2, 8652.0], [90.3, 8652.0], [90.4, 8667.0], [90.5, 8667.0], [90.6, 8667.0], [90.7, 8688.0], [90.8, 8688.0], [90.9, 8688.0], [91.0, 8702.0], [91.1, 8702.0], [91.2, 8702.0], [91.3, 8702.0], [91.4, 8706.0], [91.5, 8706.0], [91.6, 8706.0], [91.7, 8723.0], [91.8, 8723.0], [91.9, 8723.0], [92.0, 8750.0], [92.1, 8750.0], [92.2, 8750.0], [92.3, 8750.0], [92.4, 8778.0], [92.5, 8778.0], [92.6, 8778.0], [92.7, 8789.0], [92.8, 8789.0], [92.9, 8789.0], [93.0, 8805.0], [93.1, 8805.0], [93.2, 8805.0], [93.3, 8805.0], [93.4, 8853.0], [93.5, 8853.0], [93.6, 8853.0], [93.7, 8858.0], [93.8, 8858.0], [93.9, 8858.0], [94.0, 8861.0], [94.1, 8861.0], [94.2, 8861.0], [94.3, 8861.0], [94.4, 8897.0], [94.5, 8897.0], [94.6, 8897.0], [94.7, 8933.0], [94.8, 8933.0], [94.9, 8933.0], [95.0, 9072.0], [95.1, 9072.0], [95.2, 9072.0], [95.3, 9072.0], [95.4, 9096.0], [95.5, 9096.0], [95.6, 9096.0], [95.7, 9105.0], [95.8, 9105.0], [95.9, 9105.0], [96.0, 9124.0], [96.1, 9124.0], [96.2, 9124.0], [96.3, 9124.0], [96.4, 9133.0], [96.5, 9133.0], [96.6, 9133.0], [96.7, 9166.0], [96.8, 9166.0], [96.9, 9166.0], [97.0, 9169.0], [97.1, 9169.0], [97.2, 9169.0], [97.3, 9169.0], [97.4, 9193.0], [97.5, 9193.0], [97.6, 9193.0], [97.7, 9207.0], [97.8, 9207.0], [97.9, 9207.0], [98.0, 9353.0], [98.1, 9353.0], [98.2, 9353.0], [98.3, 9353.0], [98.4, 9378.0], [98.5, 9378.0], [98.6, 9378.0], [98.7, 9385.0], [98.8, 9385.0], [98.9, 9385.0], [99.0, 9397.0], [99.1, 9397.0], [99.2, 9397.0], [99.3, 9397.0], [99.4, 9407.0], [99.5, 9407.0], [99.6, 9407.0], [99.7, 9532.0], [99.8, 9532.0], [99.9, 9532.0]], "isOverall": false, "label": "HTTP Request", "isController": false}], "supportsControllersDiscrimination": true, "maxX": 100.0, "title": "Response Time Percentiles"}},
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
        data: {"result": {"minY": 1.0, "minX": 4700.0, "maxY": 19.0, "series": [{"data": [[8200.0, 13.0], [8300.0, 8.0], [8400.0, 5.0], [8500.0, 6.0], [8600.0, 7.0], [8700.0, 6.0], [8800.0, 5.0], [8900.0, 1.0], [9100.0, 6.0], [9000.0, 2.0], [9200.0, 1.0], [9300.0, 4.0], [9400.0, 1.0], [9500.0, 1.0], [4800.0, 3.0], [4700.0, 2.0], [4900.0, 5.0], [5000.0, 2.0], [5300.0, 5.0], [5200.0, 6.0], [5400.0, 7.0], [5500.0, 10.0], [5600.0, 6.0], [5800.0, 10.0], [5700.0, 2.0], [5900.0, 7.0], [6100.0, 6.0], [6000.0, 4.0], [6200.0, 6.0], [6300.0, 7.0], [6500.0, 6.0], [6400.0, 4.0], [6600.0, 3.0], [6700.0, 5.0], [6900.0, 6.0], [6800.0, 7.0], [7000.0, 6.0], [7100.0, 11.0], [7300.0, 10.0], [7400.0, 7.0], [7200.0, 5.0], [7500.0, 6.0], [7600.0, 12.0], [7700.0, 4.0], [7800.0, 14.0], [7900.0, 10.0], [8000.0, 19.0], [8100.0, 11.0]], "isOverall": false, "label": "HTTP Request", "isController": false}], "supportsControllersDiscrimination": true, "granularity": 100, "maxX": 9500.0, "title": "Response Time Distribution"}},
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
        data: {"result": {"minY": 300.0, "minX": 3.0, "ticks": [[0, "Requests having \nresponse time <= 500ms"], [1, "Requests having \nresponse time > 500ms and <= 1,500ms"], [2, "Requests having \nresponse time > 1,500ms"], [3, "Requests in error"]], "maxY": 300.0, "series": [{"data": [], "color": "#9ACD32", "isOverall": false, "label": "Requests having \nresponse time <= 500ms", "isController": false}, {"data": [], "color": "yellow", "isOverall": false, "label": "Requests having \nresponse time > 500ms and <= 1,500ms", "isController": false}, {"data": [], "color": "orange", "isOverall": false, "label": "Requests having \nresponse time > 1,500ms", "isController": false}, {"data": [[3.0, 300.0]], "color": "#FF6347", "isOverall": false, "label": "Requests in error", "isController": false}], "supportsControllersDiscrimination": false, "maxX": 3.0, "title": "Synthetic Response Times Distribution"}},
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
        data: {"result": {"minY": 14.423076923076922, "minX": 1.55979384E12, "maxY": 65.0945945945946, "series": [{"data": [[1.55979384E12, 65.0945945945946], [1.5597939E12, 14.423076923076922]], "isOverall": false, "label": "Job Offers", "isController": false}, {"data": [[1.5597939E12, 50.55999999999999]], "isOverall": false, "label": "Thread Group", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 60000, "maxX": 1.5597939E12, "title": "Active Threads Over Time"}},
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
        data: {"result": {"minY": 4899.0, "minX": 3.0, "maxY": 9532.0, "series": [{"data": [[3.0, 9188.666666666666], [4.0, 9072.0], [5.0, 9124.0], [6.0, 8008.0], [7.0, 8075.0], [8.0, 8123.0], [9.0, 8049.0], [10.0, 8225.0], [11.0, 8479.0], [12.0, 7984.0], [13.0, 8152.0], [14.0, 8090.0], [15.0, 8113.0], [16.0, 8171.0], [17.0, 8037.0], [18.0, 7957.0], [19.0, 8067.0], [20.0, 7933.0], [21.0, 8022.0], [22.0, 7883.0], [23.0, 8128.0], [24.0, 8154.0], [25.0, 8366.0], [26.0, 8245.0], [27.0, 8778.0], [28.0, 8085.0], [29.0, 7857.0], [30.0, 8079.0], [31.0, 8040.0], [33.0, 8291.0], [32.0, 8130.0], [35.0, 7924.0], [34.0, 9532.0], [37.0, 7881.0], [36.0, 8032.0], [39.0, 8108.0], [38.0, 7871.0], [41.0, 7791.0], [40.0, 7967.0], [43.0, 7839.0], [42.0, 7948.0], [45.0, 8057.0], [44.0, 8667.0], [47.0, 8321.0], [46.0, 8723.0], [49.0, 8853.0], [48.0, 9378.0], [51.0, 9407.0], [50.0, 9397.0], [53.0, 8702.0], [52.0, 8861.0], [55.0, 8706.0], [54.0, 9385.0], [57.0, 8137.0], [56.0, 9353.0], [59.0, 8326.0], [58.0, 8270.0], [61.0, 8626.0], [60.0, 8688.0], [63.0, 8641.0], [62.0, 8652.0], [67.0, 9169.0], [66.0, 8277.0], [65.0, 8205.0], [64.0, 8290.0], [71.0, 7982.0], [70.0, 8588.0], [69.0, 9096.0], [68.0, 8038.0], [75.0, 8038.0], [74.0, 9105.0], [73.0, 9133.0], [72.0, 8375.0], [79.0, 8552.0], [78.0, 8440.0], [77.0, 8429.0], [76.0, 8504.0], [83.0, 7644.0], [82.0, 8933.0], [81.0, 8288.0], [80.0, 8020.0], [87.0, 7616.0], [86.0, 7655.0], [85.0, 8897.0], [84.0, 8222.0], [91.0, 8805.0], [90.0, 8190.0], [89.0, 8858.0], [88.0, 7744.0], [95.0, 7976.0], [94.0, 8789.0], [93.0, 8169.0], [92.0, 8061.0], [99.0, 8561.0], [98.0, 7441.0], [97.0, 7636.0], [96.0, 8750.0], [103.0, 8648.0], [102.0, 7650.0], [101.0, 7832.0], [100.0, 8341.0], [107.0, 7880.0], [106.0, 7537.0], [105.0, 8618.0], [104.0, 7439.0], [110.0, 8409.5], [108.0, 8599.0], [115.0, 7827.0], [114.0, 8475.0], [113.0, 8489.0], [112.0, 8268.0], [119.0, 8368.0], [118.0, 7686.0], [117.0, 8081.0], [116.0, 8249.0], [123.0, 7240.0], [122.0, 7361.0], [121.0, 7604.0], [120.0, 7185.0], [127.0, 6977.0], [126.0, 7401.0], [125.0, 8024.0], [135.0, 7322.0], [134.0, 7168.0], [133.0, 6894.0], [132.0, 8226.0], [131.0, 7160.0], [130.0, 8038.0], [129.0, 7034.0], [128.0, 7013.0], [143.0, 7021.0], [142.0, 7414.0], [141.0, 7358.0], [140.0, 7262.0], [139.0, 7141.0], [138.0, 7300.0], [137.0, 7427.0], [136.0, 6970.0], [151.0, 7076.0], [150.0, 6802.0], [149.0, 7097.0], [148.0, 6811.0], [147.0, 7424.0], [146.0, 7396.0], [145.0, 7271.0], [144.0, 6860.0], [159.0, 6967.0], [158.0, 7284.0], [157.0, 7995.0], [156.0, 8008.0], [155.0, 6717.0], [154.0, 7854.0], [153.0, 6845.0], [152.0, 7248.0], [167.0, 7543.0], [166.0, 7996.0], [165.0, 7837.0], [164.0, 7850.0], [163.0, 7868.0], [162.0, 7674.0], [161.0, 7600.0], [160.0, 6930.0], [175.0, 7609.0], [174.0, 7773.0], [173.0, 7620.0], [172.0, 7655.0], [171.0, 7346.0], [170.0, 7524.0], [169.0, 7812.0], [168.0, 7810.0], [183.0, 7192.0], [182.0, 7456.0], [181.0, 7184.0], [180.0, 7162.0], [179.0, 7578.0], [178.0, 7373.0], [177.0, 7599.0], [176.0, 7580.0], [191.0, 6901.0], [190.0, 7175.0], [189.0, 7342.0], [188.0, 6786.0], [187.0, 7085.5], [199.0, 6581.0], [198.0, 6515.0], [197.0, 7125.0], [196.0, 6427.0], [195.0, 6857.0], [194.0, 6576.0], [193.0, 7180.0], [192.0, 7142.0], [207.0, 6623.0], [206.0, 6629.0], [205.0, 6008.0], [204.0, 6953.0], [203.0, 7064.0], [202.0, 6597.0], [201.0, 6660.0], [200.0, 6747.0], [213.0, 6262.0], [212.0, 6489.0], [211.0, 5853.0], [210.0, 6466.0], [209.0, 6792.0], [208.0, 6590.0], [223.0, 6278.666666666667], [222.0, 6408.5], [218.0, 6480.0], [217.0, 6350.0], [216.0, 6317.0], [231.0, 6172.0], [230.0, 6186.0], [228.0, 6220.0], [227.0, 6087.0], [226.0, 6308.0], [239.0, 6032.0], [238.0, 5836.0], [237.0, 6102.0], [236.0, 5825.0], [235.0, 5948.5], [233.0, 5946.0], [232.0, 5826.0], [245.0, 5916.0], [244.0, 6120.0], [243.0, 6014.0], [242.0, 5933.5], [240.0, 5955.0], [255.0, 5768.333333333333], [252.0, 5900.0], [251.0, 5622.0], [250.0, 5822.8], [270.0, 5668.0], [269.0, 5457.0], [268.0, 5563.333333333333], [265.0, 5595.5], [261.0, 5567.0], [259.0, 5592.0], [258.0, 5720.666666666667], [286.0, 5294.0], [282.0, 5280.0], [281.0, 5348.0], [280.0, 5349.0], [279.0, 5363.0], [278.0, 5445.5], [276.0, 5482.0], [300.0, 4899.0], [290.0, 5169.571428571429]], "isOverall": false, "label": "HTTP Request", "isController": false}, {"data": [[151.0133333333334, 7211.4366666666665]], "isOverall": false, "label": "HTTP Request-Aggregated", "isController": false}], "supportsControllersDiscrimination": true, "maxX": 300.0, "title": "Time VS Threads"}},
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
        data : {"result": {"minY": 162.8, "minX": 1.55979384E12, "maxY": 2915.1666666666665, "series": [{"data": [[1.55979384E12, 659.8333333333334], [1.5597939E12, 2915.1666666666665]], "isOverall": false, "label": "Bytes received per second", "isController": false}, {"data": [[1.55979384E12, 162.8], [1.5597939E12, 967.2]], "isOverall": false, "label": "Bytes sent per second", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 60000, "maxX": 1.5597939E12, "title": "Bytes Throughput Over Time"}},
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
        data: {"result": {"minY": 5563.9729729729725, "minX": 1.55979384E12, "maxY": 7750.871681415927, "series": [{"data": [[1.55979384E12, 5563.9729729729725], [1.5597939E12, 7750.871681415927]], "isOverall": false, "label": "HTTP Request", "isController": false}], "supportsControllersDiscrimination": true, "granularity": 60000, "maxX": 1.5597939E12, "title": "Response Time Over Time"}},
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
        data: {"result": {"minY": 5482.405405405404, "minX": 1.55979384E12, "maxY": 7697.539823008851, "series": [{"data": [[1.55979384E12, 5482.405405405404], [1.5597939E12, 7697.539823008851]], "isOverall": false, "label": "HTTP Request", "isController": false}], "supportsControllersDiscrimination": true, "granularity": 60000, "maxX": 1.5597939E12, "title": "Latencies Over Time"}},
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
        data: {"result": {"minY": 122.68141592920351, "minX": 1.55979384E12, "maxY": 300.2162162162163, "series": [{"data": [[1.55979384E12, 300.2162162162163], [1.5597939E12, 122.68141592920351]], "isOverall": false, "label": "HTTP Request", "isController": false}], "supportsControllersDiscrimination": true, "granularity": 60000, "maxX": 1.5597939E12, "title": "Connect Time Over Time"}},
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
    data: {"result": {"minY": 4943.0, "minX": 10.0, "maxY": 8224.0, "series": [{"data": [[64.0, 5623.0], [37.0, 6512.0], [76.0, 8224.0], [10.0, 4943.0], [54.0, 7360.5], [59.0, 8137.0]], "isOverall": false, "label": "Failures", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 1000, "maxX": 76.0, "title": "Response Time Vs Request"}},
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
    data: {"result": {"minY": 4921.5, "minX": 10.0, "maxY": 8123.0, "series": [{"data": [[64.0, 5530.5], [37.0, 6459.0], [76.0, 8102.0], [10.0, 4921.5], [54.0, 7322.5], [59.0, 8123.0]], "isOverall": false, "label": "Failures", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 1000, "maxX": 76.0, "title": "Latencies Vs Request"}},
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
        data: {"result": {"minY": 5.0, "minX": 1.55979384E12, "maxY": 5.0, "series": [{"data": [[1.55979384E12, 5.0]], "isOverall": false, "label": "hitsPerSecond", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 60000, "maxX": 1.55979384E12, "title": "Hits Per Second"}},
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
        data: {"result": {"minY": 1.2333333333333334, "minX": 1.55979384E12, "maxY": 2.1, "series": [{"data": [[1.55979384E12, 1.2333333333333334], [1.5597939E12, 2.1]], "isOverall": false, "label": "200", "isController": false}, {"data": [[1.5597939E12, 1.6666666666666667]], "isOverall": false, "label": "202", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 60000, "maxX": 1.5597939E12, "title": "Codes Per Second"}},
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
        data: {"result": {"minY": 1.2333333333333334, "minX": 1.55979384E12, "maxY": 3.7666666666666666, "series": [{"data": [[1.55979384E12, 1.2333333333333334], [1.5597939E12, 3.7666666666666666]], "isOverall": false, "label": "HTTP Request-failure", "isController": false}], "supportsControllersDiscrimination": true, "granularity": 60000, "maxX": 1.5597939E12, "title": "Transactions Per Second"}},
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
        data: {"result": {"minY": 1.2333333333333334, "minX": 1.55979384E12, "maxY": 3.7666666666666666, "series": [{"data": [], "isOverall": false, "label": "Transaction-success", "isController": false}, {"data": [[1.55979384E12, 1.2333333333333334], [1.5597939E12, 3.7666666666666666]], "isOverall": false, "label": "Transaction-failure", "isController": false}], "supportsControllersDiscrimination": true, "granularity": 60000, "maxX": 1.5597939E12, "title": "Total Transactions Per Second"}},
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

