import { svgClasses } from '@/constants';
import { svgTextStyle } from '@/styles/variants';
import React from 'react';

export const SvgGroundFloor = ({ svgRef, selectedStore, svgId }) => {
  const handleTargetId = (e) => {
    const targetId = e.target.id;
    selectedStore(targetId);
  };

  console.log(`Selected Store ID: ${svgId}`);

  return (
    <svg
      id='ground-floor'
      ref={svgRef}
      xmlns='http://www.w3.org/2000/svg'
      viewBox='0 0 900 540'
      idth={900}
      height={540}
      className='w-full h-full cursor-pointer'
    >
      <rect
        width='900'
        height='540'
        style={{ fill: 'none', strokeWidth: '0px' }}
      />
      <g id='land'>
        <path
          d='m516.67,224.92l267-30-31.91,120.49,3.32,47.23s-5.62,14.55-15.57,13.28c-12.17,3.83-65.11,13.36-84.77,81.45-2.98,10.55-12.17,8.51-12.17,8.51l-292.43,26.21h-38.81l-23.49,2.04-97.02-11.23-61.79-12.77,26.04-405.96,320.68-6.13,40.91,166.87Z'
          style={{ fill: '#666', stroke: '#333', strokeMiterlimit: 10 }}
        />
        <g id='patio'>
          <path
            d='m464.52,95.33l32.94,145.02h16.6l149.62-15.49v2.72l97.53-9.7s16.6-1.79,10.98,14.04l-19.91,83.23,8.17,19.4-5.87,29.11-2.72,1.02s-1.87,7.49-12.94,9.62c-11.06,2.13-69.96,13.45-85.7,82.81-1.79,4.68-3.23,6.81-9.45,7.83l-.6,2.04-302.21,25.62h-51.57l-95.49-9.19s-14.81,1.53-14.04-14.55l11.23-194.55-17.87-1.28,9.79-185.36,281.53,7.66Z'
            style={{ fill: '#ccc', strokeWidth: '0px' }}
          />
          <g id='signage'>
            <g id='elevator1'>
              <rect
                x='547.89'
                y='376.69'
                width='41.56'
                height='41.79'
                style={{
                  fill: '#fc0',
                  stroke: '#d1a102',
                  strokeMiterlimit: 10,
                }}
              />
              <path
                d='m574.76,406.49l3.66-9.11s.68-1.62-1.02-3.06h-6.89s-2.04,1.28-1.28,2.89,3.74,9.28,3.74,9.28h1.79Z'
                style={{
                  fill: '#fff',
                  stroke: '#fff',
                  strokeMiterlimit: 10,
                }}
              />
              <circle
                cx='573.82'
                cy='390.57'
                r='1.87'
                style={{
                  fill: '#fff',
                  stroke: '#fff',
                  strokeMiterlimit: 10,
                }}
              />
              <path
                d='m563.21,406.47l3.66-9.11s.68-1.62-1.02-3.06h-6.89s-2.04,1.28-1.28,2.89,3.74,9.28,3.74,9.28h1.79Z'
                style={{
                  fill: '#fff',
                  stroke: '#fff',
                  strokeMiterlimit: 10,
                }}
              />
              <circle
                cx='562.27'
                cy='390.56'
                r='1.87'
                style={{
                  fill: '#fff',
                  stroke: '#fff',
                  strokeMiterlimit: 10,
                }}
              />
              <polyline
                points='554.81 385.57 554.81 412.48 581.11 412.48 581.11 385.57'
                style={{ fill: 'none', stroke: '#fff', strokeMiterlimit: 10 }}
              />
              <polyline
                points='558.16 387.3 562.45 383.3 566.39 387.3'
                style={{ fill: 'none', stroke: '#fff', strokeMiterlimit: 10 }}
              />
              <polyline
                points='577.94 382.75 573.64 386.75 569.7 382.75'
                style={{ fill: 'none', stroke: '#fff', strokeMiterlimit: 10 }}
              />
            </g>
            <g id='elevator2'>
              <rect
                x='276.29'
                y='248.43'
                width='26.79'
                height='26.31'
                style={{
                  fill: '#fc0',
                  stroke: '#d1a102',
                  strokeMiterlimit: 10,
                }}
              />
              <path
                d='m293.83,267.19l2.3-5.73s.43-1.02-.64-1.93h-4.34s-1.29.8-.8,1.82,2.36,5.84,2.36,5.84h1.13Z'
                style={{
                  fill: '#fff',
                  stroke: '#fff',
                  strokeMiterlimit: 10,
                }}
              />
              <circle
                cx='293.24'
                cy='257.17'
                r='1.17'
                style={{
                  fill: '#fff',
                  stroke: '#fff',
                  strokeMiterlimit: 10,
                }}
              />
              <path
                d='m286.56,267.18l2.3-5.73s.43-1.02-.64-1.93h-4.34s-1.29.8-.8,1.82,2.36,5.84,2.36,5.84h1.13Z'
                style={{
                  fill: '#fff',
                  stroke: '#fff',
                  strokeMiterlimit: 10,
                }}
              />
              <circle
                cx='285.97'
                cy='257.16'
                r='1.17'
                style={{
                  fill: '#fff',
                  stroke: '#fff',
                  strokeMiterlimit: 10,
                }}
              />
              <polyline
                points='281.27 253.03 281.27 269.96 297.83 269.96 297.83 253.03'
                style={{ fill: 'none', stroke: '#fff', strokeMiterlimit: 10 }}
              />
              <polyline
                points='283.38 255.11 286.08 252.6 288.57 255.11'
                style={{ fill: 'none', stroke: '#fff', strokeMiterlimit: 10 }}
              />
              <polyline
                points='295.83 252.25 293.13 254.77 290.65 252.25'
                style={{ fill: 'none', stroke: '#fff', strokeMiterlimit: 10 }}
              />
            </g>
            <g id='Capa_39' data-name='Capa 39'>
              <rect
                x='202.41'
                y='288.35'
                width='50.14'
                height='49.24'
                style={{
                  fill: '#ff99ca',
                  stroke: '#ff6db7',
                  strokeMiterlimit: 10,
                }}
              />
              <path
                d='m235.24,330.46l4.31-10.73s.8-1.91-1.2-3.61h-8.12s-2.41,1.5-1.5,3.41,4.41,10.93,4.41,10.93h2.11Z'
                style={{
                  fill: '#fff',
                  stroke: '#fff',
                  strokeMiterlimit: 10,
                }}
              />
              <circle
                cx='234.14'
                cy='311.71'
                r='2.2'
                style={{
                  fill: '#fff',
                  stroke: '#fff',
                  strokeMiterlimit: 10,
                }}
              />
              <path
                d='m221.64,330.44l4.31-10.73s.8-1.91-1.2-3.61h-8.12s-2.41,1.5-1.5,3.41,4.41,10.93,4.41,10.93h2.11Z'
                style={{
                  fill: '#fff',
                  stroke: '#fff',
                  strokeMiterlimit: 10,
                }}
              />
              <circle
                cx='220.54'
                cy='311.69'
                r='2.2'
                style={{
                  fill: '#fff',
                  stroke: '#fff',
                  strokeMiterlimit: 10,
                }}
              />
              <text
                transform='translate(211.78 305.31)'
                style={{
                  fill: '#fff',
                  fontFamily: 'FuturaStd-Heavy, Futura Std',
                  fontSize: '12px',
                  fontWeight: 800,
                }}
              >
                <tspan x='0' y='0'>
                  SS.HH
                </tspan>
              </text>
            </g>
            <g id='escalator1'>
              <rect
                x='318.28'
                y='292.19'
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
                  points='323.05 304.95 328.07 304.95 328.07 309.97 333.01 309.97 333.01 315 337.86 315 337.86 320.27 343.14 320.27 343.14 325.29'
                  style={{
                    fill: 'none',
                    stroke: '#fff',
                    strokeMiterlimit: 10,
                    strokeWidth: '2px',
                  }}
                />
                <path
                  d='m340.5,319.08l3.66-9.11s.68-1.62-1.02-3.06h-6.89s-2.04,1.28-1.28,2.89,3.74,9.28,3.74,9.28h1.79Z'
                  style={{
                    fill: '#fff',
                    stroke: '#fff',
                    strokeMiterlimit: 10,
                  }}
                />
                <circle
                  cx='339.56'
                  cy='303.17'
                  r='1.87'
                  style={{
                    fill: '#fff',
                    stroke: '#fff',
                    strokeMiterlimit: 10,
                  }}
                />
              </g>
            </g>
            <g id='escalator2'>
              <polygon
                points='538.28 345.26 567.56 315.99 596.83 345.26 579.13 363.13 556.32 363.13 538.28 345.26'
                style={{
                  fill: '#999',
                  stroke: '#808080',
                  strokeMiterlimit: 10,
                }}
              />
              <polyline
                points='555.71 335.89 560.73 335.89 560.73 340.91 565.66 340.91 565.66 345.93 570.52 345.93 570.52 351.21 575.79 351.21 575.79 356.23'
                style={{
                  fill: 'none',
                  stroke: '#fff',
                  strokeMiterlimit: 10,
                  strokeWidth: '2px',
                }}
              />
              <path
                d='m573.15,350.02l3.66-9.11s.68-1.62-1.02-3.06h-6.89s-2.04,1.28-1.28,2.89c.77,1.62,3.74,9.28,3.74,9.28h1.79Z'
                style={{
                  fill: '#fff',
                  stroke: '#fff',
                  strokeMiterlimit: 10,
                }}
              />
              <circle
                cx='572.22'
                cy='334.1'
                r='1.87'
                style={{
                  fill: '#fff',
                  stroke: '#fff',
                  strokeMiterlimit: 10,
                }}
              />
            </g>
            <g id='stairs'>
              <polyline
                points='635.28 383.08 640.3 383.08 640.3 388.1 645.24 388.1 645.24 393.12 650.09 393.12 650.09 398.4 655.37 398.4 655.37 403.42'
                style={{
                  fill: 'none',
                  stroke: '#fff',
                  strokeMiterlimit: 10,
                  strokeWidth: '2px',
                }}
              />
              <path
                d='m652.73,397.21l3.66-9.11s.68-1.62-1.02-3.06h-6.89s-2.04,1.28-1.28,2.89,3.74,9.28,3.74,9.28h1.79Z'
                style={{
                  fill: '#fff',
                  stroke: '#fff',
                  strokeMiterlimit: 10,
                }}
              />
              <circle
                cx='651.79'
                cy='381.29'
                r='1.87'
                style={{
                  fill: '#fff',
                  stroke: '#fff',
                  strokeMiterlimit: 10,
                }}
              />
            </g>
            <g id='arrow2'>
              <polyline
                points='662.71 412.67 662.76 404.54 670.94 404.65'
                style={{ fill: 'none', stroke: '#fff', strokeMiterlimit: 10 }}
              />
              <line
                x1='671.52'
                y1='413.48'
                x2='662.79'
                y2='404.51'
                style={{ fill: 'none', stroke: '#fff', strokeMiterlimit: 10 }}
              />
            </g>
            <g id='chairs'>
              <circle
                cx='321.8'
                cy='345.63'
                r='2.47'
                style={{ fill: '#fff', strokeWidth: '0px' }}
              />
              <path
                d='m320.52,350.31v6.04s1.23,4.21,5.49,2.85l3.79-1.62h.85l3.7,3.02s1.87.34,1.87-1.62l-6.13-6.21-3.62-.17-3.57-3.49s-1.74-.43-2.38,1.19Z'
                style={{ fill: '#fff', strokeWidth: '0px' }}
              />
              <path
                d='m318.78,349.06v7.84s2.38,7.19,9.36,3.19c0,0,2.94-.77,4.26,1.21s0,4.15,0,4.15c0,0-.72,1.45-2.3,1.66s-9.74,0-9.74,0v-1.7l9.57-.21c1.66-.55,1.83-2.47.38-3.28-1.45-.6-4.21,1.02-4.21,1.02,0,0-3.11.6-4.3-.3,0,0-3.36-.6-4.85-5.7v-7.88h1.83Z'
                style={{ fill: '#fff', strokeWidth: '0px' }}
              />
            </g>
            <g id='secutiry'>
              <polygon
                points='685.3 323.71 652.18 335.07 659.97 357.41 693.92 344.26 685.3 323.71'
                style={{ fill: '#666', stroke: '#333', strokeMiterlimit: 10 }}
              />
              <path
                d='m674.01,349.27l3.66-9.11s.68-1.62-1.02-3.06h-6.89s-2.04,1.28-1.28,2.89,3.74,9.28,3.74,9.28h1.79Z'
                style={{
                  fill: '#fff',
                  stroke: '#fff',
                  strokeMiterlimit: 10,
                }}
              />
              <circle
                cx='673.07'
                cy='333.36'
                r='1.87'
                style={{
                  fill: '#fff',
                  stroke: '#fff',
                  strokeMiterlimit: 10,
                }}
              />
              <text
                transform='translate(670.57 345.4)'
                style={{
                  fill: '#656565',
                  fontFamily: 'FuturaStd-Heavy, Futura Std',
                  fontSize: '10px',
                  fontWeight: 800,
                }}
              >
                <tspan x='0' y='0'>
                  S
                </tspan>
              </text>
            </g>
            <g id='loading-dock'>
              <path
                d='m249.14,207.5h-2.7c.22-.27.48-1.02.48-1.02,0,0-.05-14.3-.59-15.79,0,0-2.44-3.8-4.74-4.51h-11.81c-2.33.33-4.63,2-5.41,4.52-.55,4.78-1.02,13.14-.73,16.02.09.27.22.54.49.77h-2.65c-.93,0-1.68-.75-1.68-1.68v-25.45c0-.93.75-1.68,1.68-1.68h27.66c.93,0,1.68.75,1.68,1.68v25.45c0,.93-.75,1.68-1.68,1.68Z'
                style={{ fill: '#fff', strokeWidth: '0px' }}
              />
              <path
                d='m224.62,206.3l.51-15c.64-2.08,2.03-3.53,4.4-4.15h11.74c2.26.79,3.66,2.15,4.12,4.15l.61,15c-.33,1.18-1.11,2.06-2.55,2.52h-16.37c-1.36-.44-2.19-1.26-2.46-2.52Z'
                style={{ fill: '#fff', strokeWidth: '0px' }}
              />
              <path
                d='m227.74,196.72l.21-4.63c.19-.66.53-1.16,1.16-1.34h12.21c.63.15,1.02.55,1.18,1.16l.27,4.8h-15.03Z'
                style={{ fill: '#ccc', strokeWidth: '0px' }}
              />
              <circle
                cx='228.35'
                cy='203.54'
                r='1.55'
                style={{ fill: '#ccc', strokeWidth: '0px' }}
              />
              <circle
                cx='242.46'
                cy='203.54'
                r='1.55'
                style={{ fill: '#ccc', strokeWidth: '0px' }}
              />
              <rect
                x='226.8'
                y='209.14'
                width='3.04'
                height='2.87'
                rx='.74'
                ry='.74'
                style={{ fill: '#fff', strokeWidth: '0px' }}
              />
              <rect
                x='240.97'
                y='209.14'
                width='3.04'
                height='2.87'
                rx='.74'
                ry='.74'
                style={{ fill: '#fff', strokeWidth: '0px' }}
              />
              <text
                transform='translate(226.51 159.32)'
                style={{
                  fontFamily: 'FuturaStd-Heavy, Futura Std',
                  fontSize: '6px',
                  fontWeight: 800,
                }}
              >
                <tspan x='0' y='0'>
                  MUELLE
                </tspan>
                <tspan x='-8.1' y='7.2'>
                  MERCANCÍAS
                </tspan>
              </text>
              <g id='Capa_34' data-name='Capa 34'>
                <polygon
                  points='182.99 88.52 181.63 119.67 293.29 119.67 293.29 88.52 182.99 88.52'
                  style={{ fill: 'none', stroke: '#333', strokeMiterlimit: 10 }}
                />
                <line
                  x1='205.46'
                  y1='88.52'
                  x2='205.46'
                  y2='119.67'
                  style={{ fill: 'none', stroke: '#333', strokeMiterlimit: 10 }}
                />
                <line
                  x1='226.73'
                  y1='88.52'
                  x2='226.73'
                  y2='119.67'
                  style={{ fill: 'none', stroke: '#333', strokeMiterlimit: 10 }}
                />
                <line
                  x1='249.71'
                  y1='88.52'
                  x2='249.71'
                  y2='119.67'
                  style={{ fill: 'none', stroke: '#333', strokeMiterlimit: 10 }}
                />
                <line
                  x1='262.14'
                  y1='88.52'
                  x2='262.14'
                  y2='119.67'
                  style={{ fill: 'none', stroke: '#333', strokeMiterlimit: 10 }}
                />
                <line
                  x1='278.65'
                  y1='88.52'
                  x2='278.65'
                  y2='119.67'
                  style={{ fill: 'none', stroke: '#333', strokeMiterlimit: 10 }}
                />
              </g>
            </g>
          </g>
          <g id='stores-gf'>
            <g id='Capa_5' data-name='Capa 5'>
              <rect
                x='293.29'
                y='89.71'
                width='169.16'
                height='73.72'
                style={{ fill: '#fff', stroke: '#808080', strokeMiterlimit: 8 }}
              />
              <text
                transform='translate(354.06 127.57)'
                style={{
                  fontFamily: 'FuturaStd-Heavy, Futura Std',
                  fontSize: '12px',
                  fontWeight: 800,
                }}
              >
                <tspan x='0' y='0'>
                  STORAGE
                </tspan>
              </text>
            </g>
            <g id='Capa_7' data-name='Capa 7'>
              <polygon
                points='293.29 163.43 462.45 163.43 462.48 248.43 392.35 248.43 392.35 203.84 293.29 203.84 293.29 163.43'
                style={{ fill: '#fff', stroke: '#808080', strokeMiterlimit: 8 }}
              />
            </g>
            <g>
              <polygon
                id='LPB01'
                points='293.29 203.84 293.29 218.39 314.73 218.39 314.73 232.69 308.27 232.69 308.27 248.43 336.18 248.43 336.18 203.84 293.29 203.84'
                className={svgClasses(svgId, 'LPB01')}
                onClick={handleTargetId}
              />
              <text transform='translate(316.63 223.86)' style={svgTextStyle}>
                <tspan style={{ fontSize: '6px' }}>
                  <tspan x='0' y='0'>
                    LOCAL
                  </tspan>
                </tspan>
                <tspan style={{ fontSize: '10px' }}>
                  <tspan x='.04' y='12'>
                    B01
                  </tspan>
                </tspan>
              </text>
            </g>
            <g>
              <rect
                id='LPB02'
                x='336.18'
                y='203.84'
                width='56.17'
                height='44.6'
                className={svgClasses(svgId, 'LPB02')}
                onClick={handleTargetId}
              />
              <text transform='translate(355.75 224.28)' style={svgTextStyle}>
                <tspan style={{ fontSize: '6px' }}>
                  <tspan x='0' y='0'>
                    LOCAL
                  </tspan>
                </tspan>
                <tspan style={{ fontSize: '10px' }}>
                  <tspan x='.04' y='12'>
                    B02
                  </tspan>
                </tspan>
              </text>
            </g>
            <g>
              <rect
                id='LPB03'
                x='359.33'
                y='248.43'
                width='59.91'
                height='22.38'
                className={svgClasses(svgId, 'LPB03')}
                onClick={handleTargetId}
              />
              <text transform='translate(383.17 256)' style={svgTextStyle}>
                <tspan style={{ fontSize: '6px' }}>
                  <tspan x='0' y='0'>
                    LOCAL
                  </tspan>
                </tspan>
                <tspan style={{ fontSize: '10px' }}>
                  <tspan x='.04' y='12'>
                    B03
                  </tspan>
                </tspan>
              </text>
            </g>
            <g>
              <rect
                id='LPB04'
                x='359.33'
                y='270.82'
                width='59.91'
                height='20.94'
                className={svgClasses(svgId, 'LPB04')}
                onClick={handleTargetId}
              />
              <text transform='translate(383.17 277.87)' style={svgTextStyle}>
                <tspan style={{ fontSize: '6px' }}>
                  <tspan x='0' y='0'>
                    LOCAL
                  </tspan>
                </tspan>
                <tspan style={{ fontSize: '10px' }}>
                  <tspan x='.04' y='12'>
                    B04
                  </tspan>
                </tspan>
              </text>
            </g>
            <g>
              <rect
                id='LPB05'
                x='359.33'
                y='291.75'
                width='32.43'
                height='22.77'
                className={svgClasses(svgId, 'LPB05')}
                onClick={handleTargetId}
              />
              <text transform='translate(366.95 299.2)' style={svgTextStyle}>
                <tspan style={{ fontSize: '6px' }}>
                  <tspan x='0' y='0'>
                    LOCAL
                  </tspan>
                </tspan>
                <tspan style={{ fontSize: '10px' }}>
                  <tspan x='.04' y='12'>
                    B05
                  </tspan>
                </tspan>
              </text>
            </g>
            <g>
              <rect
                id='LPB06'
                x='359.33'
                y='314.52'
                width='32.43'
                height='21.83'
                className={svgClasses(svgId, 'LPB06')}
                onClick={handleTargetId}
              />
              <text transform='translate(366.95 321.15)' style={svgTextStyle}>
                <tspan style={{ fontSize: '6px' }}>
                  <tspan x='0' y='0'>
                    LOCAL
                  </tspan>
                </tspan>
                <tspan style={{ fontSize: '10px' }}>
                  <tspan x='.04' y='12'>
                    B06
                  </tspan>
                </tspan>
              </text>
            </g>
            <g>
              <rect
                id='LPB07'
                x='391.75'
                y='291.75'
                width='27.49'
                height='44.6'
                className={svgClasses(svgId, 'LPB07')}
                onClick={handleTargetId}
              />
              <text transform='translate(396.91 309.48)' style={svgTextStyle}>
                <tspan style={{ fontSize: '6px' }}>
                  <tspan x='0' y='0'>
                    LOCAL
                  </tspan>
                </tspan>
                <tspan style={{ fontSize: '10px' }}>
                  <tspan x='.04' y='12'>
                    B07
                  </tspan>
                </tspan>
              </text>
            </g>
            <g>
              <rect
                id='LPB08'
                x='419.24'
                y='273.54'
                width='21.91'
                height='62.81'
                className={svgClasses(svgId, 'LPB08')}
              />
              <text transform='translate(421.61 301.3)' style={svgTextStyle}>
                <tspan style={{ fontSize: '6px' }}>
                  <tspan x='0' y='0'>
                    LOCAL
                  </tspan>
                </tspan>
                <tspan style={{ fontSize: '10px' }}>
                  <tspan x='.04' y='12'>
                    B08
                  </tspan>
                </tspan>
              </text>
            </g>
            <g>
              <polygon
                id='LPB09'
                points='441.16 336.35 441.16 273.54 419.24 273.54 419.24 248.43 466.56 248.43 466.56 336.35 441.16 336.35'
                className={svgClasses(svgId, 'LPB09')}
                onClick={handleTargetId}
              />
              <text transform='translate(444.42 285.12)' style={svgTextStyle}>
                <tspan style={{ fontSize: '6px' }}>
                  <tspan x='0' y='0'>
                    LOCAL
                  </tspan>
                </tspan>
                <tspan style={{ fontSize: '10px' }}>
                  <tspan x='.04' y='12'>
                    B09
                  </tspan>
                </tspan>
              </text>
            </g>
            <g>
              <rect
                id='LPB10'
                x='466.56'
                y='254.39'
                width='25.28'
                height='81.96'
                className={svgClasses(svgId, 'LPB10')}
                onClick={handleTargetId}
              />
              <text transform='translate(470.61 289.38)' style={svgTextStyle}>
                <tspan style={{ fontSize: '6px' }}>
                  <tspan x='0' y='0'>
                    LOCAL
                  </tspan>
                </tspan>
                <tspan style={{ fontSize: '10px' }}>
                  <tspan x='.04' y='12'>
                    B10
                  </tspan>
                </tspan>
              </text>
            </g>
            <g>
              <rect
                id='LPB11'
                x='491.84'
                y='254.39'
                width='25.11'
                height='81.96'
                className={svgClasses(svgId, 'LPB11')}
                onClick={handleTargetId}
              />
              <text transform='translate(495.8 289.38)' style={svgTextStyle}>
                <tspan style={{ fontSize: '6px' }}>
                  <tspan x='0' y='0'>
                    LOCAL
                  </tspan>
                </tspan>
                <tspan style={{ fontSize: '10px' }}>
                  <tspan x='.04' y='12'>
                    B11
                  </tspan>
                </tspan>
              </text>
            </g>
            <g>
              <polygon
                id='LPB12'
                points='516.95 254.39 549.63 252.26 549.63 292.39 557.29 299.24 532.27 319.33 516.95 319.33 516.95 254.39'
                className={svgClasses(svgId, 'LPB12')}
                onClick={handleTargetId}
              />
              <text transform='translate(524.7 277.82)' style={svgTextStyle}>
                <tspan style={{ fontSize: '6px' }}>
                  <tspan x='0' y='0'>
                    LOCAL
                  </tspan>
                </tspan>
                <tspan style={{ fontSize: '10px' }}>
                  <tspan x='.04' y='12'>
                    B12
                  </tspan>
                </tspan>
              </text>
            </g>
            <g>
              <polygon
                id='LPB13'
                points='586.95 247.75 586.95 299.2 557.29 299.2 549.63 292.39 549.63 252.26 586.95 247.75'
                className={svgClasses(svgId, 'LPB13')}
                onClick={handleTargetId}
              />
              <text transform='translate(560.46 271.86)' style={svgTextStyle}>
                <tspan style={{ fontSize: '6px' }}>
                  <tspan x='0' y='0'>
                    LOCAL
                  </tspan>
                </tspan>
                <tspan style={{ fontSize: '10px' }}>
                  <tspan x='.04' y='12'>
                    B13
                  </tspan>
                </tspan>
              </text>
            </g>
            <g>
              <polygon
                id='LPB14'
                points='612.86 299.2 621.16 305.07 644.9 283.5 644.9 241.37 586.95 247.75 586.95 299.2 612.86 299.2'
                className={svgClasses(svgId, 'LPB14')}
                onClick={handleTargetId}
              />
              <text transform='translate(605.75 267.21)' style={svgTextStyle}>
                <tspan style={{ fontSize: '6px' }}>
                  <tspan x='0' y='0'>
                    LOCAL
                  </tspan>
                </tspan>
                <tspan style={{ fontSize: '10px' }}>
                  <tspan x='.04' y='12'>
                    B14
                  </tspan>
                </tspan>
              </text>
            </g>
            <g>
              <path
                id='LPB15'
                d='m743.58,231.67v35.49s-23.23,53.36-91.4,67.91l-31.02-30,23.74-21.57v-42.13l98.68-9.7Z'
                className={svgClasses(svgId, 'LPB15')}
                onClick={handleTargetId}
              />
              <text transform='translate(677.07 277.94)' style={svgTextStyle}>
                <tspan style={{ fontSize: '6px' }}>
                  <tspan x='0' y='0'>
                    LOCAL
                  </tspan>
                </tspan>
                <tspan style={{ fontSize: '10px' }}>
                  <tspan x='.04' y='12'>
                    B15
                  </tspan>
                </tspan>
              </text>
            </g>
            <g>
              <polygon
                id='LPB16'
                points='546.9 376.69 546.9 446.48 484.61 446.48 484.61 420.77 509.12 420.77 509.12 376.69 546.9 376.69'
                className={svgClasses(svgId, 'LPB16')}
                onClick={handleTargetId}
              />
              <text transform='translate(517.67 407.28)' style={svgTextStyle}>
                <tspan style={{ fontSize: '6px' }}>
                  <tspan x='0' y='0'>
                    LOCAL
                  </tspan>
                </tspan>
                <tspan style={{ fontSize: '10px' }}>
                  <tspan x='.04' y='12'>
                    B16
                  </tspan>
                </tspan>
              </text>
            </g>
            <g>
              <polygon
                id='LPB17'
                points='484.61 446.48 484.61 420.77 509.12 420.77 509.12 376.69 472.69 376.69 472.69 446.48 484.61 446.48'
                className={svgClasses(svgId, 'LPB17')}
                onClick={handleTargetId}
              />
              <text transform='translate(480.9 397.58)' style={svgTextStyle}>
                <tspan style={{ fontSize: '6px' }}>
                  <tspan x='0' y='0'>
                    LOCAL
                  </tspan>
                </tspan>
                <tspan style={{ fontSize: '10px' }}>
                  <tspan x='.04' y='12'>
                    B17
                  </tspan>
                </tspan>
              </text>
            </g>
            <g>
              <rect
                id='LPB18'
                x='444.35'
                y='376.69'
                width='28.34'
                height='69.79'
                className={svgClasses(svgId, 'LPB18')}
                onClick={handleTargetId}
              />
              <text transform='translate(450.8 407.78)' style={svgTextStyle}>
                <tspan style={{ fontSize: '6px' }}>
                  <tspan x='0' y='0'>
                    LOCAL
                  </tspan>
                </tspan>
                <tspan style={{ fontSize: '10px' }}>
                  <tspan x='.04' y='12'>
                    B18
                  </tspan>
                </tspan>
              </text>
            </g>
            <g>
              <rect
                id='LPB19'
                x='415.63'
                y='376.69'
                width='28.72'
                height='69.79'
                className={svgClasses(svgId, 'LPB19')}
                onClick={handleTargetId}
              />
              <text transform='translate(421.4 407.4)' style={svgTextStyle}>
                <tspan style={{ fontSize: '6px' }}>
                  <tspan x='0' y='0'>
                    LOCAL
                  </tspan>
                </tspan>
                <tspan style={{ fontSize: '10px' }}>
                  <tspan x='.04' y='12'>
                    B19
                  </tspan>
                </tspan>
              </text>
            </g>
            <g>
              <rect
                id='LPB20'
                x='386.39'
                y='376.69'
                width='29.23'
                height='69.79'
                className={svgClasses(svgId, 'LPB20')}
                onClick={handleTargetId}
              />
              <text transform='translate(392.8 407.4)' style={svgTextStyle}>
                <tspan style={{ fontSize: '6px' }}>
                  <tspan x='0' y='0'>
                    LOCAL
                  </tspan>
                </tspan>
                <tspan style={{ fontSize: '10px' }}>
                  <tspan x='.04' y='12'>
                    B20
                  </tspan>
                </tspan>
              </text>
            </g>
            <g>
              <rect
                id='LPB21'
                x='357.54'
                y='376.69'
                width='28.85'
                height='69.79'
                className={svgClasses(svgId, 'LPB21')}
                onClick={handleTargetId}
              />
              <text transform='translate(363.38 407.4)' style={svgTextStyle}>
                <tspan style={{ fontSize: '6px' }}>
                  <tspan x='0' y='0'>
                    LOCAL
                  </tspan>
                </tspan>
                <tspan style={{ fontSize: '10px' }}>
                  <tspan x='.04' y='12'>
                    B21
                  </tspan>
                </tspan>
              </text>
            </g>
            <g>
              <rect
                id='LPB22'
                x='328.75'
                y='376.69'
                width='28.79'
                height='69.79'
                className={svgClasses(svgId, 'LPB22')}
                onClick={handleTargetId}
              />
              <text transform='translate(334.56 407.4)' style={svgTextStyle}>
                <tspan style={{ fontSize: '6px' }}>
                  <tspan x='0' y='0'>
                    LOCAL
                  </tspan>
                </tspan>
                <tspan style={{ fontSize: '10px' }}>
                  <tspan x='.04' y='12'>
                    B22
                  </tspan>
                </tspan>
              </text>
            </g>
            <g>
              <rect
                id='LPB23'
                x='288.01'
                y='376.69'
                width='40.74'
                height='69.79'
                className={svgClasses(svgId, 'LPB23')}
                onClick={handleTargetId}
              />
              <text transform='translate(299.79 407.4)' style={svgTextStyle}>
                <tspan style={{ fontSize: '6px' }}>
                  <tspan x='0' y='0'>
                    LOCAL
                  </tspan>
                </tspan>
                <tspan style={{ fontSize: '10px' }}>
                  <tspan x='.04' y='12'>
                    B23
                  </tspan>
                </tspan>
              </text>
            </g>
            <g>
              <polygon
                id='LPB24'
                points='288.01 394.39 288.01 376.69 302.82 376.69 302.82 344.52 260.61 344.52 260.61 394.39 288.01 394.39'
                className={svgClasses(svgId, 'LPB24')}
                onClick={handleTargetId}
              />
              <text transform='translate(273.12 359.54)' style={svgTextStyle}>
                <tspan style={{ fontSize: '6px' }}>
                  <tspan x='0' y='0'>
                    LOCAL
                  </tspan>
                </tspan>
                <tspan style={{ fontSize: '10px' }}>
                  <tspan x='.04' y='12'>
                    B24
                  </tspan>
                </tspan>
              </text>
            </g>
            <g>
              <rect
                id='LPB25'
                x='260.61'
                y='317.63'
                width='42.21'
                height='26.89'
                className={svgClasses(svgId, 'LPB25')}
                onClick={handleTargetId}
              />
              <text transform='translate(273.12 327.62)' style={svgTextStyle}>
                <tspan style={{ fontSize: '6px' }}>
                  <tspan x='0' y='0'>
                    LOCAL
                  </tspan>
                </tspan>
                <tspan style={{ fontSize: '10px' }}>
                  <tspan x='.04' y='12'>
                    B25
                  </tspan>
                </tspan>
              </text>
            </g>
            <g>
              <polygon
                id='LPB26'
                points='288.01 285.11 302.82 285.11 302.82 317.63 260.61 317.63 260.61 294.22 288.03 294.22 288.01 285.11'
                className={svgClasses(svgId, 'LPB26')}
                onClick={handleTargetId}
              />
              <text transform='translate(273.12 302.09)' style={svgTextStyle}>
                <tspan style={{ fontSize: '6px' }}>
                  <tspan x='0' y='0'>
                    LOCAL
                  </tspan>
                </tspan>
                <tspan style={{ fontSize: '10px' }}>
                  <tspan x='.04' y='12'>
                    B26
                  </tspan>
                </tspan>
              </text>
            </g>
          </g>
        </g>
      </g>
    </svg>
  );
};
