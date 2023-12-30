import React from 'react';
import seedrandom from "seedrandom";

import { Eyes } from "./Eyes";
import { Mouth } from "./Mouth";
import { Texture } from "./Texture";

export const M3terHead = (seed) => {
  const random = seedrandom(seed);
  let eyes = Math.round(random() * 15);
  let mouth = Math.round(random() * 11);
  let texture = Math.round(random() * 5);
  let color = "#" + random().toString(16).slice(2, 8);

  return (
    <svg
      version="1.1"
      id="m3ter-head"
      xmlns="http://www.w3.org/2000/svg"
      width="500"
      height="500"
      viewBox="-20 0 222 222"
    >
      <mask id="facemask" mask-type="alpha" maskUnits="userSpaceOnUse">
        <g transform="matrix(0.12191378,0,0,0.12191378,-56.4,-500)">
          <path
            fillRule="evenodd"
            strokeWidth="0"
            d="m 1946.5045,5336.3452 v -156.3705 l 84.5903,65.6839 84.5904,65.6839 -2.1176,30.4858 c -4.0116,57.7529 -15.2797,70.8748 -100.2205,116.7076 -30.1026,16.2429 -57.4569,30.5783 -60.7873,31.8562 -5.6797,2.1796 -6.0553,-7.3742 -6.0553,-154.0469 z m -0.8057,-682.1318 c -0.5213,-87.0682 -0.5367,-158.3055 -0.034,-158.305 6.271,0.011 130.0719,65.9544 139.7259,74.4307 18.0927,15.8854 25.5769,34.9143 28.1843,71.6586 l 2.2016,31.0272 -78.4983,64.5972 c -43.1741,35.5283 -81.2283,66.9146 -84.5649,69.7471 -5.7351,4.8688 -6.1184,-3.5008 -7.0144,-153.1558 z m -231.4902,362.585 c 0.5146,-330.7854 -0.4303,-610.1371 -2.0995,-620.7816 -1.6692,-10.6444 -2.2273,-19.3535 -1.2402,-19.3535 2.9692,0 145.1771,74.0562 159.3178,82.9664 17.5515,11.0594 29.9187,30.6364 34.2892,54.2788 2.3743,12.844 3.2734,180.8252 2.6459,494.3714 -0.9497,474.5228 -0.9566,474.9306 -8.3376,490.8827 -4.0628,8.7808 -13.5324,20.7802 -21.0434,26.6652 -9.6819,7.586 -160.3098,92.3961 -164.1051,92.3984 -0.1994,1e-4 0.058,-270.6425 0.5729,-601.4278 z m -930.39151,649.3852 c -27.2161,-10.6118 -42.7843,-26.0414 -53.6964,-53.2186 -3.2505,-8.0956 -4.0122,-150.8884 -3.3032,-619.3031 l 0.9215,-608.7815 10.6145,-17.1679 c 6.5783,-10.6401 17.1422,-21.2042 27.7819,-27.7825 l 17.1675,-10.6144 414.00711,-0.9197 414.007,-0.9196 18.5653,9.0831 c 10.2109,4.9957 22.4668,14.1984 27.2355,20.4503 20.5192,26.9022 19.3362,-12.8508 19.2524,647.0135 -0.074,578.1226 -0.3654,606.0675 -6.4663,619.4636 -8.2163,18.0405 -31.3279,38.8337 -48.4475,43.5875 -19.9299,5.5343 -823.35231,4.6799 -837.63931,-0.8907 z M 1013.3244,4570.8421 c 3.998,-5.0826 7.269,-12.7611 7.269,-17.0632 0,-13.2611 -12.9768,-26.3043 -26.17031,-26.3043 -16.9713,0 -27.1397,9.6595 -27.1397,25.7815 0,17.7422 8.6495,26.8271 25.5412,26.8271 10.11601,0 14.94201,-2.1755 20.49981,-9.2411 z m 417.3615,0 c 3.998,-5.0826 7.269,-12.7611 7.269,-17.0632 0,-13.2611 -12.9768,-26.3043 -26.1702,-26.3043 -16.7574,0 -27.8413,10.2226 -27.8413,25.678 0,17.2094 9.4728,26.9306 26.2426,26.9306 10.1162,0 14.9421,-2.1755 20.4999,-9.2411 z m -130.0724,-31.4462 c 22.4575,-15.7297 12.5683,-50.0814 -14.5061,-50.3894 -19.9475,-0.2269 -34.6852,27.5216 -22.6376,42.6226 10.6751,13.3807 24.8864,16.3523 37.1437,7.7668 z m -164.5357,-7.1335 c 14.8585,-18.8893 3.2876,-43.3675 -20.4999,-43.3675 -16.7698,0 -26.2426,9.7212 -26.2426,26.9306 0,24.3783 31.7215,35.5331 46.7425,16.4369 z m -685.94842,267.792 c -6.08269,-6.2098 -41.28637,-36.5427 -78.2304,-67.4064 l -67.17097,-56.1158 1.37592,-35.0724 c 1.65728,-42.2448 8.89802,-59.2634 32.50194,-76.3928 15.43799,-11.2034 124.50794,-70.7255 125.55843,-68.5203 0.29246,0.614 -0.25738,71.6948 -1.22187,157.9573 l -1.75361,156.8409 z m -46.15054,659.2484 c -90.22652,-50.8168 -98.75964,-60.9719 -99.95383,-118.954 l -0.66196,-32.141 74.65718,-60.1913 c 41.06145,-33.1053 76.91663,-63.176 79.67816,-66.8238 4.38308,-5.7899 5.04004,11.8586 5.17111,138.9179 0.0826,80.0527 1.12839,151.4688 2.32405,158.7025 1.19565,7.2338 0.78372,13.053 -0.91541,12.9316 -1.69913,-0.1213 -28.83382,-14.7202 -60.2993,-32.4419 z m 213.54365,117.2517 c -74.5595,-41.6146 -99.72375,-61.0404 -107.30529,-82.8356 -4.07424,-11.7126 -4.90219,-93.6552 -5.0144,-496.2744 -0.0955,-342.4138 0.99232,-486.313 3.75133,-496.2743 5.46061,-19.715 14.69251,-31.3653 35.73136,-45.092 18.1685,-11.854 139.643,-75.9076 143.9548,-75.9076 1.25,0 2.2727,277.7732 2.2727,617.2739 0,339.5009 -1.1837,617.243 -2.6304,617.2049 -1.4468,-0.038 -33.2888,-17.1808 -70.7601,-38.0949 z"
          />
        </g>
      </mask>
      <g mask="url(#facemask)">
        <rect x="-20" y="-20" width="225" height="220" fill={color} />
        <Texture type={texture} />
      </g>
      <Eyes type={eyes} />
      <Mouth type={mouth} />
    </svg>
  );
};
