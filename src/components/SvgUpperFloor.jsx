import { svgTextStyle } from '@/styles/variants';
import React from 'react';

export const SvgUpperFloor = ({ svgRef, selectedStore, svgId }) => {
  const handleTargetId = (e) => {
    const targetId = e.target.id;
    selectedStore(targetId);
  };

  console.log();

  return (
    <svg
      id='upper-floor'
      ref={svgRef}
      xmlns='http://www.w3.org/2000/svg'
      viewBox='0 0 900 540'
      width={900}
      height={540}
      className='w-full h-full cursor-pointer'
    >
      <rect
        width='900'
        height='540'
        style={{ fill: '#FFF', strokeWidth: '0px' }}
      />
      <g id='land'>
        <path
          d='m161.39,61.02l320.76-6.17,40.44,167.24,265.25-30.16-30.16,119.94,6.85,19.88s-11.65,11.65-8.91,26.04-23.3,16.45-23.3,16.45c0,0-52.09,8.22-75.39,76.08-2.06,13.02-15.08,11.65-15.08,11.65l-248.8,22.62-93.9,6.17-100.07-10.97-64.43-13.71,26.73-405.07Z'
          style={{
            fill: '#666',
            stroke: '#333',
            strokeMiterlimit: 10,
            strokeWidth: '2px',
          }}
        />
        <g id='patio'>
          <path
            d='m189.51,84.62l-10.55,183.83,17.7,2.04-10.89,196.77s0,9.19,10.89,11.23,99.4,10.89,99.4,10.89h51.74l297.53-28.09s7.15-1.02,10.98-8.94c5.25-16.69,21.19-68,86.13-80.77,8-2.04,11.66-7.23,11.66-7.23l2.04-4.68,8.68-28.43-6.81-19.91,21.79-87.15s.17-11.4-13.28-10.55-96,10.04-96,10.04v-2.72l-145.7,16h-21.62l-34.21-153.36-279.49,1.02Z'
            style={{ fill: '#ccc', strokeWidth: '0px' }}
          />
          <g id='green-spaces'>
            <path
              d='m205.52,443.3l59.11.57v6.38l-14.68,19.53s-3.89,5.62-11.62,4.15-23.62-3.26-23.62-3.26c0,0-9.64-3.38-9.19-11.49l-.02-15.57'
              style={{
                fill: '#7ec114',
                stroke: '#4c750e',
                strokeMiterlimit: 10,
              }}
            />
            <path
              d='m314.47,455.74h34.91l11.74,15.57s2.62,4.66-2.62,6.26l-50.17,1.28s-5.62-.19-4.72-6.26l10.85-16.85Z'
              style={{
                fill: '#7ec114',
                stroke: '#4c750e',
                strokeMiterlimit: 10,
              }}
            />
            <path
              d='m619.64,396.83l26.55,26.3-8.94,27.19-239.28,23.86s-9.96,1.84-13.53-3.27-9.87-15.17-9.87-15.17h35.15l51.57-7.21,127.23-51.7h31.11Z'
              style={{
                fill: '#7ec114',
                stroke: '#4c750e',
                strokeMiterlimit: 10,
              }}
            />
            <polygon
              points='645.69 422.36 642.37 425.42 634.07 447.51 459.81 463.72 460.58 436.66 545.98 412.27 596.03 412.27 603.43 405.64 616.07 405.64 619 408.32 620.54 406.91 636.88 421.85 641.22 417.89 645.69 422.36'
              style={{
                fill: '#cafe69',
                stroke: '#a9f624',
                strokeMiterlimit: 10,
              }}
            />
            <polyline
              points='641.22 417.89 636.88 421.85 620.54 406.91 619 408.32 616.07 405.64 603.43 405.64 596.03 412.27 588.54 412.27'
              style={{
                fill: 'none',
                stroke: '#4d7311',
                strokeMiterlimit: 10,
              }}
            />
            <path
              d='m665.47,344.36v9.45l18.64,21.32s31.53-21.19,65.74-25.15l5.11-18.89-5.36-18.64,8.81-38.68-2.43-2.55s-27.96,59.11-90.51,73.15Z'
              style={{
                fill: '#cafe69',
                stroke: '#a9f624',
                strokeMiterlimit: 10,
              }}
            />
            <path
              d='m588.54,370.49h41.32v8.61l-10.98,6.5s-6.77,11.23-14.43,11.23h-15.91v-26.34'
              style={{
                fill: '#cafe69',
                stroke: '#a9f624',
                strokeMiterlimit: 10,
              }}
            />
            <path
              d='m629.86,379.1v-31.42h27.45l-11.11,9.32s-1.91,12.54-16.34,22.1Z'
              style={{
                fill: '#cafe69',
                stroke: '#a9f624',
                strokeMiterlimit: 10,
              }}
            />
            <polygon
              points='665.47 344.36 657.3 347.68 656.66 357.13 679.13 379.98 684.11 375.13 665.47 353.81 665.47 344.36'
              style={{
                fill: '#7cc01f',
                stroke: '#4c7215',
                strokeMiterlimit: 10,
              }}
            />
          </g>
          <g id='stores-uf'>
            <g>
              <rect
                id='LPA01'
                x='206.3'
                y='357.06'
                width='27.3'
                height='69.77'
                className={`stroke-gray-500
                ${
                  svgId === 'LPA01'
                    ? 'fill-blue-400'
                    : 'fill-white hover:fill-blue-300'
                } transition-all duration-700
              `}
                onClick={handleTargetId}
              />
              <text transform='translate(211.36 386.04)' style={svgTextStyle}>
                <tspan style={{ fontSize: '6px' }}>
                  <tspan x='0' y='0'>
                    LOCAL
                  </tspan>
                </tspan>
                <tspan style={{ fontSize: '10px' }}>
                  <tspan x='-.57' y='12'>
                    A01
                  </tspan>
                </tspan>
              </text>
            </g>
            <g>
              <rect
                id='LPA02'
                x='233.86'
                y='386.04'
                width='56.45'
                height='40.79'
                className={`stroke-gray-500 ${
                  svgId == 'LPA02'
                    ? 'fill-blue-400'
                    : 'fill-white hover:fill-blue-300'
                } transition-all duration-700`}
                onClick={handleTargetId}
              />
              <text transform='translate(251.64 401.04)' style={svgTextStyle}>
                <tspan style={{ fontSize: '6px' }}>
                  <tspan x='0' y='0'>
                    LOCAL
                  </tspan>
                </tspan>
                <tspan style={{ fontSize: '10px' }}>
                  <tspan x='-.57' y='12'>
                    A02
                  </tspan>
                </tspan>
              </text>
            </g>
            <g>
              <rect
                id='LPA03'
                x='233.6'
                y='357.06'
                width='56.7'
                height='28.98'
                className={`stroke-gray-500 ${
                  svgId == 'LPA03'
                    ? 'fill-blue-400'
                    : 'fill-white hover:fill-blue-300'
                } transition-all duration-700`}
                onClick={handleTargetId}
              />
              <text transform='translate(253.49 367.46)' style={svgTextStyle}>
                <tspan style={{ fontSize: '6px' }}>
                  <tspan x='0' y='0'>
                    LOCAL
                  </tspan>
                </tspan>
                <tspan style={{ fontSize: '10px' }}>
                  <tspan x='-.57' y='12'>
                    A03
                  </tspan>
                </tspan>
              </text>
            </g>
            <g>
              <rect
                id='LPA04'
                x='206.3'
                y='326.17'
                width='84'
                height='30.89'
                className={`stroke-gray-500 ${
                  svgId == 'LPA04'
                    ? 'fill-blue-400'
                    : 'fill-white hover:fill-blue-300'
                } transition-all duration-700`}
                onClick={handleTargetId}
              />
              <text transform='translate(236.37 338.52)' style={svgTextStyle}>
                <tspan style={{ fontSize: '6px' }}>
                  <tspan x='0' y='0'>
                    LOCAL
                  </tspan>
                </tspan>
                <tspan style={{ fontSize: '10px' }}>
                  <tspan x='-.57' y='12'>
                    A04
                  </tspan>
                </tspan>
              </text>
            </g>
            <g>
              <rect
                id='LPA05'
                x='206.3'
                y='282.51'
                width='84'
                height='43.66'
                className={`stroke-gray-500 ${
                  svgId == 'LPA05'
                    ? 'fill-blue-400'
                    : 'fill-white hover:fill-blue-300'
                } transition-all duration-700`}
                onClick={handleTargetId}
              />
              <text transform='translate(218.79 303.6)' style={svgTextStyle}>
                <tspan style={{ fontSize: '6px' }}>
                  <tspan x='0' y='0'>
                    LOCAL
                  </tspan>
                </tspan>
                <tspan style={{ fontSize: '10px' }}>
                  <tspan x='-.57' y='12'>
                    A05
                  </tspan>
                </tspan>
              </text>
            </g>
            <g>
              <rect
                id='LPA06'
                x='244.96'
                y='282.51'
                width='45.34'
                height='21.83'
                className={`stroke-gray-500 ${
                  svgId == 'LPA06'
                    ? 'fill-blue-400'
                    : 'fill-white hover:fill-blue-300'
                } transition-all duration-700`}
                onClick={handleTargetId}
              />
              <text transform='translate(259.91 289.54)' style={svgTextStyle}>
                <tspan style={{ fontSize: '6px' }}>
                  <tspan x='0' y='0'>
                    LOCAL
                  </tspan>
                </tspan>
                <tspan style={{ fontSize: '10px' }}>
                  <tspan x='-.57' y='12'>
                    A06
                  </tspan>
                </tspan>
              </text>
            </g>
            <g>
              <rect
                id='LPA07'
                x='206.3'
                y='240.87'
                width='84'
                height='41.64'
                className={`stroke-gray-500 ${
                  svgId == 'LPA07'
                    ? 'fill-blue-400'
                    : 'fill-white hover:fill-blue-300'
                } transition-all duration-700`}
                onClick={handleTargetId}
              />
              <text transform='translate(236.37 256.93)' style={svgTextStyle}>
                <tspan style={{ fontSize: '6px' }}>
                  <tspan x='0' y='0'>
                    LOCAL
                  </tspan>
                </tspan>
                <tspan style={{ fontSize: '10px' }}>
                  <tspan x='-.57' y='12'>
                    A07
                  </tspan>
                </tspan>
              </text>
            </g>
            <g>
              <rect
                id='LPA08'
                x='206.3'
                y='112.02'
                width='253.13'
                height='128.85'
                className={`stroke-gray-500 ${
                  svgId == 'LPA08'
                    ? 'fill-blue-400'
                    : 'fill-white hover:fill-blue-300'
                } transition-all duration-700`}
                onClick={handleTargetId}
              />
              <text transform='translate(316.74 164.89)' style={svgTextStyle}>
                <tspan style={{ fontSize: '8px' }}>
                  <tspan x='0' y='0'>
                    LOCAL
                  </tspan>
                </tspan>
                <tspan style={{ fontSize: '14px' }}>
                  <tspan x='-1.37' y='16.8'>
                    A08
                  </tspan>
                </tspan>
              </text>
            </g>
            <g>
              <polygon
                id='LPA09'
                points='375.52 240.87 440.92 240.87 440.92 274.27 403.39 274.27 403.39 266.49 375.52 266.49 375.52 240.87'
                className={`stroke-gray-500 ${
                  svgId == 'LPA09'
                    ? 'fill-blue-400'
                    : 'fill-white hover:fill-blue-300'
                } transition-all duration-700`}
                onClick={handleTargetId}
              />
              <text transform='translate(407.95 252.29)' style={svgTextStyle}>
                <tspan style={{ fontSize: '6px' }}>
                  <tspan x='0' y='0'>
                    LOCAL
                  </tspan>
                </tspan>
                <tspan style={{ fontSize: '10px' }}>
                  <tspan x='-.57' y='12'>
                    A09
                  </tspan>
                </tspan>
              </text>
            </g>
            <g>
              <rect
                id='LPA09B'
                x='375.52'
                y='266.49'
                width='27.87'
                height='17.52'
                className={`stroke-gray-500 ${
                  svgId == 'LPA09B'
                    ? 'fill-blue-400'
                    : 'fill-white hover:fill-blue-300'
                } transition-all duration-700`}
                onClick={handleTargetId}
              />
              <text transform='translate(382.29 271.95)' style={svgTextStyle}>
                <tspan style={{ fontSize: '5px' }}>
                  <tspan x='0' y='0'>
                    LOCAL
                  </tspan>
                </tspan>
                <tspan style={{ fontSize: '8px' }}>
                  <tspan x='-2.38' y='9.6'>
                    A09B
                  </tspan>
                </tspan>
              </text>
            </g>
            <g>
              <polygon
                id='LPA10'
                points='375.52 284.01 403.39 284.01 403.39 274.27 414.37 274.27 414.37 302.81 375.52 302.81 375.52 284.01'
                className={`stroke-gray-500 ${
                  svgId == 'LPA10'
                    ? 'fill-blue-400'
                    : 'fill-white hover:fill-blue-300'
                } transition-all duration-700`}
                onClick={handleTargetId}
              />
              <text transform='translate(394.44 290.66)' style={svgTextStyle}>
                <tspan style={{ fontSize: '5px' }}>
                  <tspan x='0' y='0'>
                    LOCAL
                  </tspan>
                </tspan>
                <tspan style={{ fontSize: '8px' }}>
                  <tspan x='-.17' y='9.6'>
                    A10
                  </tspan>
                </tspan>
              </text>
            </g>
            <g>
              <rect
                id='LPA11'
                x='375.52'
                y='302.81'
                width='38.85'
                height='28.4'
                className={`stroke-gray-500 ${
                  svgId == 'LPA11'
                    ? 'fill-blue-400'
                    : 'fill-white hover:fill-blue-300'
                } transition-all duration-700`}
                onClick={handleTargetId}
              />
              <text transform='translate(388.05 314.51)' style={svgTextStyle}>
                <tspan style={{ fontSize: '6px' }}>
                  <tspan x='0' y='0'>
                    LOCAL
                  </tspan>
                </tspan>
                <tspan style={{ fontSize: '10px' }}>
                  <tspan x='-.57' y='12'>
                    A11
                  </tspan>
                </tspan>
              </text>
            </g>
            <g>
              <rect
                id='LPA12'
                x='414.37'
                y='274.27'
                width='21.13'
                height='56.94'
                className={`stroke-gray-500 ${
                  svgId == 'LPA12'
                    ? 'fill-blue-400'
                    : 'fill-white hover:fill-blue-300'
                } transition-all duration-700`}
                onClick={handleTargetId}
              />
              <text transform='translate(416.34 299.34)' style={svgTextStyle}>
                <tspan style={{ fontSize: '6px' }}>
                  <tspan x='0' y='0'>
                    LOCAL
                  </tspan>
                </tspan>
                <tspan style={{ fontSize: '10px' }}>
                  <tspan x='-.57' y='12'>
                    A12
                  </tspan>
                </tspan>
              </text>
            </g>
            <g>
              <rect
                id='LPA13'
                x='435.49'
                y='274.27'
                width='22.96'
                height='56.94'
                className={`stroke-gray-500 ${
                  svgId == 'LPA13'
                    ? 'fill-blue-400'
                    : 'fill-white hover:fill-blue-300'
                } transition-all duration-700`}
                onClick={handleTargetId}
              />
              <text transform='translate(438.38 299.46)' style={svgTextStyle}>
                <tspan style={{ fontSize: '6px' }}>
                  <tspan x='0' y='0'>
                    LOCAL
                  </tspan>
                </tspan>
                <tspan style={{ fontSize: '10px' }}>
                  <tspan x='-.57' y='12'>
                    A13
                  </tspan>
                </tspan>
              </text>
            </g>
            <g>
              <rect
                id='LPA14'
                x='458.45'
                y='274.27'
                width='23.83'
                height='56.94'
                className={`stroke-gray-500 ${
                  svgId == 'LPA14'
                    ? 'fill-blue-400'
                    : 'fill-white hover:fill-blue-300'
                } transition-all duration-700`}
                onClick={handleTargetId}
              />
              <text transform='translate(461.76 299.34)' style={svgTextStyle}>
                <tspan style={{ fontSize: '6px' }}>
                  <tspan x='0' y='0'>
                    LOCAL
                  </tspan>
                </tspan>
                <tspan style={{ fontSize: '10px' }}>
                  <tspan x='-.57' y='12'>
                    A14
                  </tspan>
                </tspan>
              </text>
            </g>
            <g>
              <polygon
                id='LPA14B'
                points='440.92 240.87 459.43 240.87 459.43 247.25 482.28 247.25 482.28 274.27 440.92 274.27 440.92 240.87'
                className={`stroke-gray-500 ${
                  svgId == 'LPA14B'
                    ? 'fill-blue-400'
                    : 'fill-white hover:fill-blue-300'
                } transition-all duration-700`}
                onClick={handleTargetId}
              />
              <text transform='translate(452.8 256.57)' style={svgTextStyle}>
                <tspan style={{ fontSize: '6px' }}>
                  <tspan x='0' y='0'>
                    LOCAL
                  </tspan>
                </tspan>
                <tspan style={{ fontSize: '10px' }}>
                  <tspan x='-.57' y='12'>
                    A14B
                  </tspan>
                </tspan>
              </text>
            </g>
            <g>
              <polygon
                id='LPA15'
                points='482.28 283.34 504.11 283.34 532.58 310.85 512.92 331.21 482.28 331.21 482.28 283.34'
                className={`stroke-gray-500 ${
                  svgId == 'LPA15'
                    ? 'fill-blue-400'
                    : 'fill-white hover:fill-blue-300'
                } transition-all duration-700`}
                onClick={handleTargetId}
              />
              <text transform='translate(492.16 307.55)' style={svgTextStyle}>
                <tspan style={{ fontSize: '6px' }}>
                  <tspan x='0' y='0'>
                    LOCAL
                  </tspan>
                </tspan>
                <tspan style={{ fontSize: '10px' }}>
                  <tspan x='-.57' y='12'>
                    A15
                  </tspan>
                </tspan>
              </text>
            </g>
            <g>
              <polygon
                id='LPA16'
                points='482.28 247.25 518.41 247.25 544.64 245.55 544.64 283.34 552.17 290.42 532.58 310.85 504.11 283.34 482.28 283.34 482.28 247.25'
                className={`stroke-gray-500 ${
                  svgId == 'LPA16'
                    ? 'fill-blue-400'
                    : 'fill-white hover:fill-blue-300'
                } transition-all duration-700`}
                onClick={handleTargetId}
              />
              <text transform='translate(505.42 265.85)' style={svgTextStyle}>
                <tspan style={{ fontSize: '6px' }}>
                  <tspan x='0' y='0'>
                    LOCAL
                  </tspan>
                </tspan>
                <tspan style={{ fontSize: '10px' }}>
                  <tspan x='-.57' y='12'>
                    A16
                  </tspan>
                </tspan>
              </text>
            </g>
            <g>
              <polygon
                id='LPA17'
                points='552.17 290.42 586 290.42 586 241.27 544.64 245.55 544.64 283.34 552.17 290.42'
                className={`stroke-gray-500 ${
                  svgId == 'LPA17'
                    ? 'fill-blue-400'
                    : 'fill-white hover:fill-blue-300'
                } transition-all duration-700`}
                onClick={handleTargetId}
              />
              <text transform='translate(556.44 264.29)' style={svgTextStyle}>
                <tspan style={{ fontSize: '6px' }}>
                  <tspan x='0' y='0'>
                    LOCAL
                  </tspan>
                </tspan>
                <tspan style={{ fontSize: '10px' }}>
                  <tspan x='-.57' y='12'>
                    A17
                  </tspan>
                </tspan>
              </text>
            </g>
            <g>
              <polygon
                id='LPA18'
                points='586 290.42 612.11 290.42 619.6 297.72 630.92 285.72 630.92 236.02 586 240.87 586 290.42'
                className={`stroke-gray-500 ${
                  svgId == 'LPA18'
                    ? 'fill-blue-400'
                    : 'fill-white hover:fill-blue-300'
                } transition-all duration-700`}
                onClick={handleTargetId}
              />
              <text transform='translate(599.87 261.21)' style={svgTextStyle}>
                <tspan style={{ fontSize: '6px' }}>
                  <tspan x='0' y='0'>
                    LOCAL
                  </tspan>
                </tspan>
                <tspan style={{ fontSize: '10px' }}>
                  <tspan x='-.57' y='12'>
                    A18
                  </tspan>
                </tspan>
              </text>
            </g>
            <g>
              <path
                id='LPA19'
                d='m630.92,236.02l109.62-11.4-.64,37.91s-28.13,52.38-89.87,65.23l-30.43-30.04,11.32-12v-49.7Z'
                className={`stroke-gray-500 ${
                  svgId == 'LPA19'
                    ? 'fill-blue-400'
                    : 'fill-white hover:fill-blue-300'
                } transition-all duration-700`}
                onClick={handleTargetId}
              />
              <text transform='translate(664.66 271.21)' style={svgTextStyle}>
                <tspan style={{ fontSize: '6px' }}>
                  <tspan x='0' y='0'>
                    LOCAL
                  </tspan>
                </tspan>
                <tspan style={{ fontSize: '10px' }}>
                  <tspan x='-.57' y='12'>
                    A19
                  </tspan>
                </tspan>
              </text>
            </g>
            <g>
              <rect
                id='LPA20'
                x='524.73'
                y='364.02'
                width='21.26'
                height='48.26'
                className={`stroke-gray-500 ${
                  svgId == 'LPA20'
                    ? 'fill-blue-400'
                    : 'fill-white hover:fill-blue-300'
                } transition-all duration-700`}
                onClick={handleTargetId}
              />
              <text transform='translate(526.77 386.04)' style={svgTextStyle}>
                <tspan style={{ fontSize: '6px' }}>
                  <tspan x='0' y='0'>
                    LOCAL
                  </tspan>
                </tspan>
                <tspan style={{ fontSize: '10px' }}>
                  <tspan x='-.57' y='12'>
                    A20
                  </tspan>
                </tspan>
              </text>
            </g>
            <g>
              <rect
                id='LPA21'
                x='503.28'
                y='364.02'
                width='21.45'
                height='48.26'
                className={`stroke-gray-500 ${
                  svgId == 'LPA21'
                    ? 'fill-blue-400'
                    : 'fill-white hover:fill-blue-300'
                } transition-all duration-700`}
                onClick={handleTargetId}
              />
              <text transform='translate(505.42 386.04)' style={svgTextStyle}>
                <tspan style={{ fontSize: '6px' }}>
                  <tspan x='0' y='0'>
                    LOCAL
                  </tspan>
                </tspan>
                <tspan style={{ fontSize: '10px' }}>
                  <tspan x='-.57' y='12'>
                    A21
                  </tspan>
                </tspan>
              </text>
            </g>
            <g>
              <rect
                id='LPA22'
                x='481.64'
                y='364.02'
                width='21.64'
                height='48.26'
                className={`stroke-gray-500 ${
                  svgId == 'LPA22'
                    ? 'fill-blue-400'
                    : 'fill-white hover:fill-blue-300'
                } transition-all duration-700`}
                onClick={handleTargetId}
              />
              <text transform='translate(484.35 382.51)' style={svgTextStyle}>
                <tspan style={{ fontSize: '6px' }}>
                  <tspan x='0' y='0'>
                    LOCAL
                  </tspan>
                </tspan>
                <tspan style={{ fontSize: '10px' }}>
                  <tspan x='-.57' y='12'>
                    A22
                  </tspan>
                </tspan>
              </text>
            </g>
            <g>
              <rect
                id='LPA23A'
                x='459.3'
                y='364.02'
                width='22.34'
                height='30.7'
                className={`stroke-gray-500 ${
                  svgId == 'LPA23A'
                    ? 'fill-blue-400'
                    : 'fill-white hover:fill-blue-300'
                } transition-all duration-700`}
                onClick={handleTargetId}
              />
              <text transform='translate(463.31 375.53)' style={svgTextStyle}>
                <tspan style={{ fontSize: '5px' }}>
                  <tspan x='0' y='0'>
                    LOCAL
                  </tspan>
                </tspan>
                <tspan style={{ fontSize: '7px' }}>
                  <tspan x='-1.62' y='8.4'>
                    A23A
                  </tspan>
                </tspan>
              </text>
            </g>
            <g>
              <rect
                id='LPA23B'
                x='431.47'
                y='364.02'
                width='27.83'
                height='74.04'
                className={`stroke-gray-500 ${
                  svgId == 'LPA23B'
                    ? 'fill-blue-400'
                    : 'fill-white hover:fill-blue-300'
                } transition-all duration-700`}
                onClick={handleTargetId}
              />
              <text transform='translate(436.4 394.72)' style={svgTextStyle}>
                <tspan style={{ fontSize: '6px' }}>
                  <tspan x='0' y='0'>
                    LOCAL
                  </tspan>
                </tspan>
                <tspan style={{ fontSize: '10px' }}>
                  <tspan x='-3.34' y='12'>
                    A23B
                  </tspan>
                </tspan>
              </text>
            </g>
            <g>
              <polygon
                id='LPA23C'
                points='545.98 412.27 545.98 438.06 459.3 438.06 459.3 394.72 481.64 394.72 481.64 412.27 545.98 412.27'
                className={`stroke-gray-500 ${
                  svgId == 'LPA23C'
                    ? 'fill-blue-400'
                    : 'fill-white hover:fill-blue-300'
                } transition-all duration-700`}
                onClick={handleTargetId}
              />
              <text transform='translate(492.62 421.68)' style={svgTextStyle}>
                <tspan style={{ fontSize: '6px' }}>
                  <tspan x='0' y='0'>
                    LOCAL
                  </tspan>
                </tspan>
                <tspan style={{ fontSize: '10px' }}>
                  <tspan x='-3.58' y='12'>
                    A23C
                  </tspan>
                </tspan>
              </text>
            </g>
            <g>
              <rect
                id='LPA24'
                x='401.6'
                y='364.02'
                width='29.87'
                height='29.36'
                className={`stroke-gray-500 ${
                  svgId == 'LPA24'
                    ? 'fill-blue-400'
                    : 'fill-white hover:fill-blue-300'
                } transition-all duration-700`}
                onClick={handleTargetId}
              />
              <text transform='translate(408.08 375.53)' style={svgTextStyle}>
                <tspan style={{ fontSize: '6px' }}>
                  <tspan x='0' y='0'>
                    LOCAL
                  </tspan>
                </tspan>
                <tspan style={{ fontSize: '10px' }}>
                  <tspan x='-.57' y='12'>
                    A24
                  </tspan>
                </tspan>
              </text>
            </g>
            <g>
              <rect
                id='LPA25'
                x='374.03'
                y='364.02'
                width='27.57'
                height='29.36'
                className={`stroke-gray-500 ${
                  svgId == 'LPA25'
                    ? 'fill-blue-400'
                    : 'fill-white hover:fill-blue-300'
                } transition-all duration-700`}
                onClick={handleTargetId}
              />
              <text transform='translate(379.79 375.53)' style={svgTextStyle}>
                <tspan style={{ fontSize: '6px' }}>
                  <tspan x='0' y='0'>
                    LOCAL
                  </tspan>
                </tspan>
                <tspan style={{ fontSize: '10px' }}>
                  <tspan x='-.57' y='12'>
                    A25
                  </tspan>
                </tspan>
              </text>
            </g>
            <g>
              <polygon
                id='LPA26'
                points='374.03 393.38 431.47 393.38 431.47 438.06 397.13 438.06 397.13 425.36 374.03 425.36 374.03 393.38'
                className={`stroke-gray-500 ${
                  svgId == 'LPA26'
                    ? 'fill-blue-400'
                    : 'fill-white hover:fill-blue-300'
                } transition-all duration-700`}
                onClick={handleTargetId}
              />
              <text transform='translate(396.69 406.43)' style={svgTextStyle}>
                <tspan style={{ fontSize: '6px' }}>
                  <tspan x='0' y='0'>
                    LOCAL
                  </tspan>
                </tspan>
                <tspan style={{ fontSize: '10px' }}>
                  <tspan x='-.57' y='12'>
                    A26
                  </tspan>
                </tspan>
              </text>
            </g>
          </g>
          <g id='signage'>
            <g id='elevator1'>
              <rect
                x='546.98'
                y='370.49'
                width='41.56'
                height='41.79'
                style={{
                  fill: '#fc0',
                  stroke: '#d1a102',
                  strokeMiterlimit: 10,
                }}
              />
              <path
                d='m573.84,400.29l3.66-9.11s.68-1.62-1.02-3.06h-6.89s-2.04,1.28-1.28,2.89,3.74,9.28,3.74,9.28h1.79Z'
                style={{
                  fill: '#fff',
                  stroke: '#fff',
                  strokeMiterlimit: 10,
                }}
              />
              <circle
                cx='572.91'
                cy='384.37'
                r='1.87'
                style={{
                  fill: '#fff',
                  stroke: '#fff',
                  strokeMiterlimit: 10,
                }}
              />
              <path
                d='m562.3,400.27l3.66-9.11s.68-1.62-1.02-3.06h-6.89s-2.04,1.28-1.28,2.89,3.74,9.28,3.74,9.28h1.79Z'
                style={{
                  fill: '#fff',
                  stroke: '#fff',
                  strokeMiterlimit: 10,
                }}
              />
              <circle
                cx='561.36'
                cy='384.36'
                r='1.87'
                style={{
                  fill: '#fff',
                  stroke: '#fff',
                  strokeMiterlimit: 10,
                }}
              />
              <polyline
                points='553.9 379.37 553.9 406.27 580.2 406.27 580.2 379.37'
                style={{
                  fill: 'none',
                  stroke: '#fff',
                  strokeMiterlimit: 10,
                }}
              />
              <polyline
                points='557.24 381.1 561.54 377.1 565.48 381.1'
                style={{
                  fill: 'none',
                  stroke: '#fff',
                  strokeMiterlimit: 10,
                }}
              />
              <polyline
                points='577.03 376.55 572.73 380.55 568.79 376.55'
                style={{
                  fill: 'none',
                  stroke: '#fff',
                  strokeMiterlimit: 10,
                }}
              />
            </g>
            <g id='elevator2'>
              <rect
                x='263.52'
                y='241.87'
                width='26.79'
                height='26.31'
                style={{
                  fill: '#fc0',
                  stroke: '#d1a102',
                  strokeMiterlimit: 10,
                }}
              />
              <path
                d='m281.05,260.63l2.3-5.73s.43-1.02-.64-1.93h-4.34s-1.29.8-.8,1.82,2.36,5.84,2.36,5.84h1.13Z'
                style={{
                  fill: '#fff',
                  stroke: '#fff',
                  strokeMiterlimit: 10,
                }}
              />
              <circle
                cx='280.46'
                cy='250.61'
                r='1.17'
                style={{
                  fill: '#fff',
                  stroke: '#fff',
                  strokeMiterlimit: 10,
                }}
              />
              <path
                d='m273.79,260.62l2.3-5.73s.43-1.02-.64-1.93h-4.34s-1.29.8-.8,1.82,2.36,5.84,2.36,5.84h1.13Z'
                style={{
                  fill: '#fff',
                  stroke: '#fff',
                  strokeMiterlimit: 10,
                }}
              />
              <circle
                cx='273.2'
                cy='250.6'
                r='1.17'
                style={{
                  fill: '#fff',
                  stroke: '#fff',
                  strokeMiterlimit: 10,
                }}
              />
              <polyline
                points='268.5 246.46 268.5 263.4 285.05 263.4 285.05 246.46'
                style={{
                  fill: 'none',
                  stroke: '#fff',
                  strokeMiterlimit: 10,
                }}
              />
              <polyline
                points='270.6 248.55 273.31 246.03 275.79 248.55'
                style={{
                  fill: 'none',
                  stroke: '#fff',
                  strokeMiterlimit: 10,
                }}
              />
              <polyline
                points='283.06 245.69 280.35 248.21 277.87 245.69'
                style={{
                  fill: 'none',
                  stroke: '#fff',
                  strokeMiterlimit: 10,
                }}
              />
            </g>
            <g id='escalator2'>
              <polygon
                points='537.56 337.89 566.83 308.62 596.11 337.89 578.41 355.76 555.6 355.76 537.56 337.89'
                style={{
                  fill: '#999',
                  stroke: '#808080',
                  strokeMiterlimit: 10,
                }}
              />
              <polyline
                points='554.98 328.52 560 328.52 560 333.54 564.94 333.54 564.94 338.56 569.79 338.56 569.79 343.84 575.07 343.84 575.07 348.86'
                style={{
                  fill: 'none',
                  stroke: '#fff',
                  strokeMiterlimit: 10,
                  strokeWidth: '2px',
                }}
              />
              <path
                d='m572.43,342.65l3.66-9.11s.68-1.62-1.02-3.06h-6.89s-2.04,1.28-1.28,2.89,3.74,9.28,3.74,9.28h1.79Z'
                style={{
                  fill: '#fff',
                  stroke: '#fff',
                  strokeMiterlimit: 10,
                }}
              />
              <circle
                cx='571.49'
                cy='326.73'
                r='1.87'
                style={{
                  fill: '#fff',
                  stroke: '#fff',
                  strokeMiterlimit: 10,
                }}
              />
            </g>
            <g id='escalator1'>
              <rect
                x='317.39'
                y='284.62'
                width='31.15'
                height='41.55'
                style={{
                  fill: '#999',
                  stroke: '#808080',
                  strokeMiterlimit: 10,
                }}
              />
              <g>
                <polyline
                  points='322.15 297.38 327.17 297.38 327.17 302.4 332.11 302.4 332.11 307.42 336.96 307.42 336.96 312.7 342.24 312.7 342.24 317.72'
                  style={{
                    fill: 'none',
                    stroke: '#fff',
                    strokeMiterlimit: 10,
                    strokeWidth: '2px',
                  }}
                />
                <path
                  d='m339.6,311.51l3.66-9.11s.68-1.62-1.02-3.06h-6.89s-2.04,1.28-1.28,2.89,3.74,9.28,3.74,9.28h1.79Z'
                  style={{
                    fill: '#fff',
                    stroke: '#fff',
                    strokeMiterlimit: 10,
                  }}
                />
                <circle
                  cx='338.66'
                  cy='295.59'
                  r='1.87'
                  style={{
                    fill: '#fff',
                    stroke: '#fff',
                    strokeMiterlimit: 10,
                  }}
                />
              </g>
            </g>
            <g id='stairs'>
              <polyline
                points='636.06 378.78 641.08 378.78 641.08 383.8 646.02 383.8 646.02 388.82 650.87 388.82 650.87 394.1 656.15 394.1 656.15 399.12'
                style={{
                  fill: 'none',
                  stroke: '#fff',
                  strokeMiterlimit: 10,
                  strokeWidth: '2px',
                }}
              />
              <path
                d='m653.51,392.91l3.66-9.11s.68-1.62-1.02-3.06h-6.89s-2.04,1.28-1.28,2.89,3.74,9.28,3.74,9.28h1.79Z'
                style={{
                  fill: '#fff',
                  stroke: '#fff',
                  strokeMiterlimit: 10,
                }}
              />
              <circle
                cx='652.57'
                cy='376.99'
                r='1.87'
                style={{
                  fill: '#fff',
                  stroke: '#fff',
                  strokeMiterlimit: 10,
                }}
              />
            </g>
            <g id='arrow1'>
              <polyline
                points='326.58 430.15 332.28 424.36 338.07 430.15'
                style={{
                  fill: 'none',
                  stroke: '#fff',
                  strokeMiterlimit: 10,
                }}
              />
              <line
                x1='332.32'
                y1='436.87'
                x2='332.32'
                y2='424.36'
                style={{
                  fill: 'none',
                  stroke: '#fff',
                  strokeMiterlimit: 10,
                }}
              />
            </g>
            <g id='arrow2'>
              <polyline
                points='664.44 408.83 664.48 400.71 672.67 400.81'
                style={{
                  fill: 'none',
                  stroke: '#fff',
                  strokeMiterlimit: 10,
                }}
              />
              <line
                x1='673.24'
                y1='409.64'
                x2='664.52'
                y2='400.68'
                style={{
                  fill: 'none',
                  stroke: '#fff',
                  strokeMiterlimit: 10,
                }}
              />
            </g>
          </g>
        </g>
      </g>
    </svg>
  );
};
