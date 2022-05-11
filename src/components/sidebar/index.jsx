import React, { useState } from 'react';

function Sidebar(props) {
    const [clicked, setClicked] = useState(false)
    return (
        <div className="sidebar" style={{
            'width': '300px',
            'display': 'flex',
            'flexDirection': 'column',
            'gap': '30px',
            'fontWeight': '700',
            'marginTop': '30px'
        }}>
            <div className='overview' onClick={(e) => {
                window.location.href = 'http://localhost:3000/overview'
            }} style={{ 'color': (props.element === 'overview') ? '#fff' : '#000', 'cursor': 'pointer', 'padding-top': '20px', 'padding-bottom': '20px', 'paddingLeft': '30px', 'backgroundColor': (props.element === 'overview') ? '#008000' : 'none' }}>

                <svg version="1.1" id="Layer_1" xmlns="http://www.w3.org/2000/svg"
                    x="0px" y="0px"
                    viewBox="0 0 122.88 112.07" style={{
                        "enable-background": "new 0 0 122.88 112.07",
                        'height': '30px', 'marginRight': '10px'
                    }}><style type="text/css">
                    </style><g><path style={{ 'fillRule': 'evenodd', 'clipRule': 'evenodd' }} class="st0" d="M61.44,0L0,60.18l14.99,7.87L61.04,19.7l46.85,48.36l14.99-7.87L61.44,
                0L61.44,0z M18.26,69.63L18.26,69.63 L61.5,26.38l43.11,
                43.25h0v0v42.43H73.12V82.09H49.49v29.97H18.26V69.63L18.26,69.63L18.26,69.63z" fill={(props.element === 'overview') ? '#fff' : '#000'} />
                    </g></svg>Latest Overview Report</div>
            <div className='special-report' style={{ 'paddingLeft': '30px' }}>
                <div onClick={(e)=>{
                    setClicked(!clicked)
                }} style={{'cursor':'pointer'}}>
                    <svg style={{ 'height': '30px', 'marginRight': '10px', 'cursor': 'pointer' }} xmlns="http://www.w3.org/2000/svg" shape-rendering="geometricPrecision"
                        text-rendering="geometricPrecision" image-rendering="optimizeQuality"
                        fill-rule="evenodd" clip-rule="evenodd" viewBox="0 0 512 293.53">
                        <path d="M12.36 268.8h49.69a8.948 8.948 0 0 1-3.17-6.83V8.98c0-4.94 
                4.05-8.98 8.99-8.98h376.25c4.95 0 8.99 4.04 8.99 8.98v252.99c0 
                2.73-1.23 5.18-3.17 6.83h49.7c3.4 0 6.49 1.4 8.73 3.63 2.24 
                2.25 3.63 5.34 3.63 8.74 0 3.39-1.39 6.48-3.63 8.72-2.25 2.25-5.34 
                3.64-8.73 3.64H12.36c-3.39 0-6.48-1.39-8.72-3.63-2.25-2.25-3.64-5.34-3.64-8.73 
                0-3.4 1.39-6.49 3.63-8.73s5.33-3.64 8.73-3.64zM384.79 60.6v173.47h-7.6V60.6h7.6zm-249.98 
                0v173.47h-7.6V60.6h7.6zm21.32 21.28H275.8v8.8H156.13v-8.8zm0 
                24.92h84.66v8.8h-84.66v-8.8zm173.21-31.73h9c1.68 0 3.06 1.38 
                3.06 3.06v11.42h11.42c1.68 0 3.05 1.38 3.05 3.06v8.99c0 
                1.68-1.38 3.06-3.05 3.06H341.4v11.16c0 1.68-1.38 3.05-3.06 
                3.05h-9c-1.68 0-3.06-1.37-3.06-3.05v-11.16h-11.42c-1.68 0-3.05-1.38-3.05-3.06v-9c0-1.68 
                1.38-3.06 3.05-3.06h11.42V78.13c0-1.68 1.38-3.06 3.06-3.06zM157.97 
                215.18h168.56v8.81H157.97v-8.81zm-1.84-27.91H355.4v8.81H156.13v-8.81zm1.84-31.94h66.97l8.65-12.02 
                10.77 15.51 11.75-22.91 12.61 24.7 5.97-4.4 2.61-.88h78.1v8.8h-76.68l-13.13 9.69-9.51-18.64-10.59 
                20.65-12.03-17.32-4.04 5.62h-71.45v-8.8zM438.39 37.37H73.6V257.3h364.79V37.37zM118.86 14.48c2.98 
                0 5.41 2.42 5.41 5.41s-2.43 5.41-5.41 5.41c-2.99 0-5.41-2.42-5.41-5.41s2.42-5.41 5.41-5.41zm-18.92 
                0c2.99 0 5.4 2.42 5.4 5.41s-2.41 5.41-5.4 5.41a5.41 5.41 0 1 1 0-10.82zm-18.93 0c2.99 0 5.42 2.42 
                5.42 5.41S84 25.3 81.01 25.3c-2.99 0-5.41-2.42-5.41-5.41s2.42-5.41 5.41-5.41zm159.8 260.06h30.9c2.88 
                0 5.23 2.36 5.23 5.24 0 2.88-2.35 5.24-5.23 5.24h-30.9c-2.89 0-5.24-2.36-5.24-5.24 0-2.88 2.35-5.24 
                5.24-5.24z"/></svg>
                    Latest Special Report
                </div>

                <div className='overview' onClick={(e) => {
                    setClicked(true)
                    window.location.href = 'http://localhost:3000/gender'
                }} style={{ 'display':clicked?'flex':'none', 'color': (props.element === 'gender') ? '#fff' : '#000', 
                'cursor': 'pointer', 
                'padding-top': '20px', 
                'padding-bottom': '20px', 'paddingLeft': '30px', 'marginTop':'20px',
                'marginLeft':'20px', 
                'backgroundColor': (props.element === 'gender') ? '#008000' : 'none' }}>
                    <svg style={{ 'height': '30px', 'marginRight': '10px' }} xmlns="http://www.w3.org/2000/svg" shape-rendering="geometricPrecision"
                        text-rendering="geometricPrecision" image-rendering="optimizeQuality" fill-rule="evenodd"
                        clip-rule="evenodd" viewBox="0 0 512 328.1">
                        <path d="M324.82 243.21c5.01-1.4 9.77-2.89 14.09-4.57v-21.83c-19.89-.95-44.65-2.5-58.47-18.96 
                    15.15-5.71 22.14-23.63 23.1-50.42.72-19.91-3.39-26.15 3.39-45.81 13.45-38.92 63.19-52.22 90.89-29.45 
                    21.72-2.31 43.62 8.89 48.34 42.39 3.52 25.01-3.94 40.71 3.94 63.74 3.38 9.91 9.28 17.5 18.51 21.94-14.13 
                    13.52-43.81 15.25-62.33 16.23v22.17c33.61 11.93 82.37 10.12 95.22 39.23 3.74 8.47 6.68 21.42 8.85 34.54.34 
                    2.13 1.65 8.95 1.65 11.57 0 2.28-1.84 4.12-4.12 4.12H358.66c.3-1.61.46-3.28.46-4.98 0-1.63-.12-3.22-.31-4.79h-.07l-.62-3.68c-5.27-39.95-17.1-59.93-33.3-71.44zM4.97 
                    328.09c-2.75 0-4.97-2.22-4.97-4.97 0-1.41.19-2.81.54-4.19 7.96-63.09 35.91-64.43 70.93-73.46 
                    16.84-4.35 55.25-21.19 51.18-42.94-8.47-7.86-16.89-18.71-18.36-34.91l-1.02.01c-2.34-.03-4.62-.56-6.74-1.76-4.67-2.66-7.24-7.76-8.47-13.58-1.57-7.36-1.05-16.09-.29-21.6l.29-1.08c1.63-4.55 
                    3.64-7.02 6.21-8.09l.08-.03c-1.17-21.9 2.53-54.14-19.96-60.94 44.4-54.87 95.59-84.72 134.02-35.9 42.83 2.24 61.93 62.91 35.34 96.87h-1.13c2.56 1.07 4.58 3.54 6.22 8.09l.28 
                    1.08c.76 5.51 1.28 14.24-.28 21.6-1.24 5.82-3.8 10.92-8.48 13.58-2.11 1.2-4.39 1.73-6.74 1.76l-1.02-.01c-1.47 
                    16.2-9.9 27.05-18.38 34.91-4.07 21.76 34.38 38.6 51.23 42.94 35.01 9.02 62.98 10.37 70.94 73.46.34 1.38.54 2.78.54 
                    4.19a4.97 4.97 0 0 1-4.97 4.97H4.97z" fill={(props.element === 'gender') ? '#fff' : '#000'} /></svg>Gender</div>

                <div onClick={(e) => {
                    window.location.href = 'http://localhost:3000/teacher'
                }} className='teachers' style={{ 'marginLeft':'20px','display':clicked?'flex':'none', 'color': (props.element === 'teacher') ? '#fff' : '#000', 'cursor': 'pointer', 'padding-top': '20px', 'padding-bottom': '20px', 'paddingLeft': '30px', 'backgroundColor': (props.element === 'teacher') ? '#008000' : 'none' }}>
                    <svg version="1.1" id="Layer_1" xmlns="http://www.w3.org/2000/svg" x="0px" y="0px" viewBox="0 0 116.05 122.88" style={{ 'enable-background': 'new 0 0 116.05 122.88', 'height': '30px', 'marginRight': '10px' }} >
                        <g><path style={{ 'fillRule': 'evenodd', 'clipRule': 'evenodd' }} class="st0" d="M80.36,42.39v-7.81c0.36-1.51,0.86-1.66,1.61-1.8C83.99,32.47,83.76,41.88,80.36,42.39L80.36,42.39 L80.36,42.39z M82.79,
                    93.5c-0.01-0.08-0.02-0.16-0.02-0.26c0-0.08,0.01-0.17,0.02-0.25v-5.52c-4.56-0.37-9.28,0.05-13.39,1.38 c-3.85,1.24-7.16,3.26-9.31,6.17v22.99c3.35-1.89,6.77-2.73,10.29-3.8c4.01-1.21,8.14-1.79,12.41-1.49V93.5L82.79,
                    93.5L82.79,93.5z M56.14,118.42V94.98c-2.07-3.09-5.41-5.16-9.19-6.39c-4.28-1.39-9.09-1.7-13.29-1.2l-0.22,25.44c4.57-0.14,9.05,0.35,13.25,1.52 C50.05,115.27,53.23,116.63,56.14,118.42L56.14,118.42L56.14,118.42z M87.33,
                    119.07c-4.12-0.81-8.21-1.32-12.27-1.34 c-5.28-0.03-10.56,2.89-15.86,4.87c-0.33,0.18-0.72,0.28-1.12,0.28c-0.4,0-0.79-0.09-1.13-0.28c-12.76-4.79-14.4-6.26-28.23-3.51 c0-7.94,0.28-13.12,0.54-18.32H6.01C2.24,100.5,0.32,
                    98.54,0,95.17c1.3-5.79,1.61-9.68,5.19-14.4c1.44-1.9,3.22-3.31,5.2-4.4 c6.26-3.49,26.25-4.51,31.93-9.63l0,0l0,0l6.41,18.85c1.31,0.44,2.57,0.97,3.76,1.6l2.9-10.05l-2.14-2.34 c-0.96-1.41-1.18-2.65-0.64-3.7c1.16-2.3,
                    3.56-1.87,5.81-1.87c2.35,0,5.25-0.44,5.99,2.49c0.25,0.98-0.07,2.01-0.75,3.08 l-2.14,2.34l2.89,10.03c1.11-0.53,2.28-1,3.5-1.39l5.86-19.03c5.68,5.11,25.67,
                    6.14,31.92,9.63c1.97,1.11,3.77,2.51,5.21,4.4 c3.58,4.72,3.88,8.61,5.19,14.4c-0.32,3.38-2.24,5.33-6.01,5.61H86.99C87.15,106.01,87.33,111.06,87.33,119.07L87.33,119.07z M44.85,33.94c-0.43,0.17-0.89-0.1-1.05-0.57c-0.15-0.49,
                    0.08-1.02,0.51-1.18c3.3-1.28,5.65-1.2,8.96,0 c0.43,0.16,0.67,0.68,0.54,1.17c-0.13,0.49-0.6,0.76-1.02,0.61c-0.55-0.19-1.1-0.37-1.65-0.49c0.06,0.19,0.09,0.4,0.09,0.62 c0,1.27-1.02,2.31-2.31,2.31c-1.27,0-2.31-1.04-2.31-2.31c0-0.32,
                    0.06-0.61,0.17-0.88C45.81,33.32,45.83,33.56,44.85,33.94 L44.85,33.94L44.85,33.94L44.85,33.94z M63.75,33.94c-0.43,0.17-0.89-0.1-1.05-0.57c-0.15-0.49,0.08-1.02,0.51-1.18 c3.29-1.28,5.65-1.2,8.96,0c0.43,0.16,0.67,0.68,0.54,1.17c-0.13,
                    0.49-0.6,0.76-1.02,0.61c-0.55-0.19-1.1-0.37-1.65-0.49 c0.06,0.19,0.09,0.4,0.09,0.62c0,1.27-1.03,2.31-2.31,2.31c-1.27,0-2.3-1.04-2.3-2.31c0-0.32,0.06-0.61,0.17-0.88 C64.7,33.32,64.73,33.56,63.75,33.94L63.75,33.94L63.75,33.94L63.75,33.94z M55.46,
                    44.29c-0.39-0.33-0.45-0.92-0.12-1.31 c0.33-0.39,0.92-0.45,1.31-0.12c0.47,0.4,0.92,0.6,1.34,0.6c0.43,0.01,0.9-0.19,1.4-0.61c0.39-0.33,0.98-0.26,1.31,0.13 s0.27,0.98-0.13,1.31c-0.85,0.7-1.73,1.04-2.6,1.02C57.09,45.3,56.26,44.95,55.46,44.29L55.46,
                    44.29L55.46,44.29L55.46,44.29z M65.09,51.34c-0.76,0.26-1.55,0.48-2.36,0.66l0,0c-0.84,0.23-1.6,0.37-2.28,0.39c-0.78,0.01-1.45-0.13-1.98-0.48 c-0.16-0.11-0.31-0.22-0.44-0.35c-0.13,0.12-0.27,0.24-0.44,0.35c-0.53,0.36-1.2,0.5-1.98,0.48c-0.68-0.02-1.45-0.15-2.28-0.39l0,
                    0 c-0.81-0.18-1.6-0.4-2.37-0.66c-0.76-0.26-1.51-0.56-2.23-0.9c-0.35-0.16-0.49-0.55-0.31-0.88c0.11-0.19,0.3-0.32,0.51-0.35l0,0 c0.39-0.06,0.7-0.1,0.99-0.14l0.02-0.01c0.94-0.13,1.65-0.23,2.53-0.58c0.25-0.1,0.49-0.21,0.73-0.32c1.4-0.65,2.93-1.35,
                    4.46-0.14 c0.13,0.11,0.25,0.21,0.36,0.33c0.11-0.12,0.23-0.22,0.36-0.33c1.52-1.22,3.06-0.51,4.46,0.14c0.24,0.11,0.48,0.22,0.73,0.32 c0.88,0.35,1.6,0.45,2.53,0.58l0.03,0.01c0.29,0.04,0.6,0.08,0.99,0.14l0,0c0.21,0.04,0.41,0.16,0.51,0.35 c0.18,0.32,0.04,
                    0.72-0.31,0.88C66.6,50.78,65.85,51.08,65.09,51.34L65.09,51.34L65.09,51.34z M31.07,18.17v-3.45 c0.72-5.98,3.5-8.38,8.08-7.69c4.34-4.54,10.48-7.08,18.94-7.02c9.41-0.19,17.44,2.01,23.26,7.98c3.06,3.05,4.37,6.23,3.58,12.95 c0.16,6.59,0.89,7.13-1.25,8.29c-0.01,
                    0.18-0.02,0.36-0.03,0.55l-1.47,0.93c1.19-0.09,2.02,0.65,2.52,1.91 c0.24,0.63,0.4,1.4,0.47,2.24c0.06,0.78,0.05,1.65-0.06,2.53c-0.35,3.2-1.82,6.54-4.54,6.93c-0.12,0.02-0.24,0.02-0.35,0.01v0.41 c0,0.02,0,0.04,0,0.06c0.18,4.47-2.18,9.43-5.99,13.4c-6.93,7.23-18.31,
                    10.83-28.2,2.64c-1.72-1.43-3.72-2.83-5.29-5.04 c0.02-0.02,0.04-0.04,0.05-0.05l-0.04-0.03c-2.55-2.37-3.75-3.49-4.77-8.36c-0.02-0.09-0.03-0.2-0.03-0.29l0,0v-2.74 c-0.14,0.03-0.29,0.03-0.44,0c-2.73-0.4-4.19-3.74-4.54-6.93c-0.09-0.88-0.11-1.75-0.06-2.53c0.07-0.84,0.23-1.61,
                    0.47-2.24 c0.54-1.37,1.48-2.13,2.83-1.87c0.65,0.12,1.25,0.45,1.74,1.02v-1.11l-1.1-0.62c-0.13-0.9-0.15-1.81-0.09-2.74 C32.77,23.98,31.22,20.74,31.07,18.17L31.07,18.17L31.07,18.17z M77.28,29.3c-1.3-3.65-3.02-4.06-6.16-5.98 c-2.63-1.14-4.94-2.11-7.13-2.8c-5.31-1.18-11.14-0.84-15.97,
                    0.77c-1.28,0.5-2.65,1.11-4.11,1.84c-3.08,1.8-4.51,1.98-5.16,5.05 v18.87c1.1,5.26,1.02,4.28,4.39,7.58l5.85,5.72c1.06,0.87,2.25,1.38,3.51,1.68c4.33,1.02,13.42,0.61,16.83-2.98 c5.08-4.94,8.28-6.43,7.92-14.33V29.3H77.28L77.28,29.3z M53.23,55.78c-0.42-0.23-0.58-0.76-0.36-1.17 c0.23-0.42,
                    0.76-0.59,1.17-0.36c1.34,0.71,2.65,1.07,3.95,1.08c1.29,0,2.59-0.35,3.89-1.07c0.42-0.23,0.95-0.08,1.18,0.34 c0.23,0.42,0.08,0.94-0.34,1.18c-1.56,0.86-3.13,1.29-4.72,1.27C56.4,57.04,54.81,56.62,53.23,55.78L53.23,55.78L53.23,55.78 L53.23,55.78z M35.7,42.39v-7.81c-0.36-1.51-0.79-1.58-1.53-1.72C32.16,
                    32.55,32.2,41.64,35.7,42.39L35.7,42.39L35.7,42.39z" fill={(props.element === 'teacher') ? '#fff' : '#000'} />
                        </g></svg>
                    Teachers Analysis</div>
                <div style={{ 'marginLeft':'20px','display':clicked?'flex':'none',
                    'color': (props.element === 'health') ? '#fff' : '#000', 'cursor': 'pointer',
                    'padding-top': '20px', 'padding-bottom': '20px', 'paddingLeft': '30px',
                    'backgroundColor': (props.element === 'health') ? '#008000' : 'none',
                    'white-space': 'nowrap'
                }}
                    onClick={(e) => {
                        window.location.href = 'http://localhost:3000/health'
                    }} className='health'>
                    <svg id="Layer_1" data-name="Layer 1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 122.88 104.28" style={{ 'height': '30px', 'marginRight': '10px' }}>
                        <defs>
                        </defs><title>public-health</title>
                        <path style={{ 'fillRule': 'evenodd' }} class="cls-1" d="M61.11,9.2C65.4,4.73,68.4.87,75,.11,87.4-1.32,98.8,11.38,92.54,23.87c-1.78,
                            3.57-5.41,7.8-9.42,12-4.41,4.56-9.28,9-12.7,12.41l-9.31,9.24-7.69-7.41c-9.25-8.91-24.35-20.14-24.85-34C28.23,
                            6.29,35.91.05,44.75.16c7.9.11,11.22,4,16.36,9ZM90.55,93.69l.77,0a1.08,1.08,0,0,1,1.08,1.08v8.47a1.08,
                            1.08,0,0,1-1.08,1.08H66.61a1.08,1.08,0,0,1-1.08-1.08V94.73a1.08,1.08,0,0,1,1.08-1.08c7.24,0,17-.57,
                            23.94,0Zm-.83-2.18H66.62a1.07,1.07,0,0,1-1-1.12c.09-2,.27-3.93.47-5.93.2-1.67.37-3.13.59-4.4a17.2,
                            17.2,0,0,1,.93-3.52v0a11.77,11.77,0,0,1,1.81-3.07,22.2,22.2,0,0,1,3.11-3.12c.83-.69,1.57-1.28,2.45-1.9l.88-.53L79.31,
                            66a58.72,58.72,0,0,0,6.14-3.53,58.73,58.73,0,0,0,7.11-5.94C94.33,55,96.83,53,98.4,51.37a15.15,15.15,0,0,
                            1,3.16-2.9,5.2,5.2,0,0,1,3.2-1h0a2.5,2.5,0,0,1,.75.19,2.57,2.57,0,0,1,.57.35l.09.09a2.27,2.27,0,0,1,
                            .49.65,3.33,3.33,0,0,1,.26.67v0a4.53,4.53,0,0,1-.3,2.71A7.27,7.27,0,0,1,105,54.58L90.29,71a1.06,1.06,
                            0,0,0,.86,1.77,1.08,1.08,0,0,0,.69-.3q7.26-8.18,14.62-16.3a10.44,10.44,0,0,0,1-1.11,9.12,9.12,0,0,0,
                            .75-1.12c2.56-4.07,6.34-14.9,8.45-19.93l.2-.31a6.54,6.54,0,0,1,1.31-1.09l.06,0a3.84,3.84,0,0,1,
                            1.55-.54h0a2.4,2.4,0,0,1,.76,0,2.48,2.48,0,0,1,.64.24l.11.06A2.66,2.66,0,0,1,122,33a4.23,4.23,0,0,
                            1,.44.85A9.23,9.23,0,0,1,122.8,38a26.24,26.24,0,0,1-1.29,5.37c-1.33,4.55-2.62,9.14-3.86,13.73a37.71,
                            37.71,0,0,1-2.43,7.26A34.86,34.86,0,0,1,110,71.72c-2.35,2.7-4.66,5.13-6.91,7.38s-4.48,4.36-6.64,
                            6.4l-5.85,5.62a1.08,1.08,0,0,1-.83.39Zm-33.51,0H33.16a1.08,1.08,0,0,1-.83-.39l-2.8-2.73-3.09-2.93c-2.2-2.08-4.44-4.2-6.6-6.36l0,
                            0c-2.25-2.24-4.54-4.66-6.87-7.34a35,35,0,0,1-5.28-7.37,37.74,37.74,0,0,1-2.42-7.26C4,52.52,2.74,47.89,
                            1.37,43.37A26,26,0,0,1,.08,38a9.11,9.11,0,0,1,.34-4.14A3.85,3.85,0,0,1,.86,33a2.63,2.63,0,0,1,
                            .68-.69l.12-.06A2.23,2.23,0,0,1,2.3,32a2.38,2.38,0,0,1,.76,0h0a3.74,3.74,0,0,1,1.55.54l.07,0A6.43,
                            6.43,0,0,1,6,33.66l.2.32c2.1,5,5.93,15.94,8.46,19.93A7.63,7.63,0,0,0,15.42,55l0,0a9.57,9.57,0,0,0,
                            1,1.06c5,5,9.72,11.1,14.63,16.3a1.08,1.08,0,0,0,1.45,0,1,1,0,0,0,.36-.74,1.05,1.05,0,0,0-.26-.77L17.88,
                            54.58a7.12,7.12,0,0,1-1.68-2.37,4.38,4.38,0,0,1-.3-2.71v0a2.83,2.83,0,0,1,.26-.67,2.19,2.19,0,0,1,.49-.66,
                            2.58,2.58,0,0,1,.66-.43,2.77,2.77,0,0,1,.74-.19h.06a5.2,5.2,0,0,1,3.2,1,14.89,14.89,0,0,1,3.15,2.9c1.69,1.77,
                            4,3.47,5.84,5.19a60.32,60.32,0,0,0,7.11,5.94A59.77,59.77,0,0,0,43.56,66L47,67.86l.87.54c.88.62,1.63,1.22,2.45,
                            1.9a21.79,21.79,0,0,1,3.12,3.12,11.73,11.73,0,0,1,1.8,3.07l0,0a17.87,17.87,0,0,1,.93,3.52c.21,1.27.39,2.73.58,
                            4.4.21,2,.37,3.92.48,5.92a1.07,1.07,0,0,1-1,1.13ZM32.12,93.67c6.87.61,16.92,0,24.14,0a1.08,1.08,0,0,1,1.08,
                            1.08v8.47a1.08,1.08,0,0,1-1.08,1.08H31.55a1.07,1.07,0,0,1-1.07-1.08V94.73a1.07,1.07,0,0,1,1.07-1.08l.57,
                            0ZM59,17.52h4.79a1.63,1.63,0,0,1,1.63,1.62v5.21h5.21A1.63,1.63,0,0,1,72.29,26v4.78a1.63,1.63,0,0,1-1.62,
                            1.63H65.46v5.07a1.64,1.64,0,0,1-1.63,1.63H59a1.63,1.63,0,0,1-1.62-1.63V32.39H52.21a1.64,1.64,0,0,1-1.63-1.63V26a1.63,
                            1.63,0,0,1,1.63-1.62h5.21V19.14A1.63,1.63,0,0,1,59,17.52Z" fill={(props.element === 'health') ? '#fff' : '#000'} />
                    </svg>Health Analysis</div>
            </div>

            <div onClick={(e) => {
                window.location.href = 'http://localhost:3000/files'
            }} className='files' style={{ 'cursor': 'pointer', 'padding-top': '20px', 'padding-bottom': '20px', 'paddingLeft': '30px', 'backgroundColor': (props.element === 'files') ? '#008000' : 'none', 'color': (props.element === 'files') ? '#fff' : '#000', 'width': '300px' }}>
                <svg style={{ 'height': '30px', 'marginRight': '10px' }} id="Layer_1" data-name="Layer 1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 105.68 122.88">
                    <defs></defs><title>save-all-files</title>
                    <path style={{ 'fillRule': 'evenodd' }} class="cls-1" d="M82.05,27.39a3,3,0,0,1,2.23,2.94v5.14H91.9a6.76,6.76,0,0,1,6.72,6.71V58.49H92.83V42.18a.94.94,
                    0,0,0-1-1H84.28V58.48H78.14V34H52.66a3.09,3.09,0,0,1-3.08-3.09V6.11H6.14V98.87H42.51V105H15.9v7.66a1,1,0,0,0,
                    .27.69,1,1,0,0,0,.69.27H42.5v5.76H16.89a6.76,6.76,0,0,1-6.72-6.72V105H5.49A5.48,5.48,0,0,1,0,99.51v-94A5.5,5.5,
                    0,0,1,5.49,0H52.66A3,3,0,0,1,55,1.12l27,26.27Zm17.42,91H96.89a.3.3,0,0,1-.3-.31V97.8a2,2,0,0,0-.21-.94l-.09-.13a1.06,
                    1.06,0,0,0-.09-.11h0a1.17,1.17,0,0,0-.48-.29l-.1,0h0a2.73,2.73,0,0,0-.59-.07H67.47a1.82,1.82,0,0,
                    0-.92.21h0l-.11.07,0,0-.11.1h0a1.65,1.65,0,0,0-.38,1.19v20.27h0a.31.31,0,0,1-.31.31h-3a.31.31,0,0,
                    1-.21-.09l-5.1-5.11a.32.32,0,0,1-.12-.25V73.88a1.34,1.34,0,0,1,1.49-1.53H69.21a.31.31,0,0,1,.31.31V84.1a3.07,
                    3.07,0,0,0,3.08,3.14H92.83A3.12,3.12,0,0,0,96,84.09V72.65a.31.31,0,0,1,.31-.31h3.15A1.35,1.35,0,0,1,101,
                    73.82v43a1.33,1.33,0,0,1-1.47,1.53h0ZM75.66,104.2H87.84a1.86,1.86,0,0,1,1.85,1.85h0a1.87,1.87,0,0,1-1.85,
                    1.85H75.66a1.86,1.86,0,0,1-1.84-1.85h0a1.85,1.85,0,0,1,1.84-1.85Zm0,7.44H87.84a1.87,1.87,0,0,1,1.85,1.85h0a1.86,
                    1.86,0,0,1-1.85,1.85H75.66a1.85,1.85,0,0,1-1.84-1.85h0a1.86,1.86,0,0,1,1.84-1.85ZM73.33,73.09H92V82a1.69,1.69,0,
                    0,1-1.69,1.69H75A1.69,1.69,0,0,1,73.33,82V73.09Zm-3.06,27H92.72a.28.28,0,0,1,.27.27v17.8a.28.28,0,0,1-.27.27H70.27a.28.28,
                    0,0,1-.28-.27V100.32a.28.28,0,0,1,.28-.28ZM56.64,67.84H102a3.68,3.68,0,0,1,3.72,3.72v47.56a3.72,3.72,0,0,1-3.72,
                    3.76H59.87l-.1-.11L53,116l-.44-.29V71.55a3.86,3.86,0,0,1,4.1-3.71ZM19.39,50.15a2,2,0,0,0-1.87,2.07,2,2,0,0,0,1.87,
                    2.07h36a2,2,0,0,0,1.86-2.07,2,2,0,0,0-1.86-2.07Zm0,14.83a2,2,0,0,0-1.86,2.07,2,2,0,0,0,1.86,2.07h23V65Zm0,14.83a2,
                    2,0,0,0-1.86,2.07A2,2,0,0,0,19.41,84h23V79.81Zm0-44.49a2,2,0,0,0-1.87,2.07,2,2,0,0,0,1.87,2.07H40.7a2,2,0,0,0,
                    1.85-2.07,2,2,0,0,0-1.85-2.07Zm0-14.82a2,2,0,0,0-1.86,2.07,2,2,0,0,0,1.86,2.06H31.12A2,2,0,0,0,33,22.57a2,2,0,0,
                    0-1.86-2.07Zm36.31-9.76L74.07,27.87H55.72V10.74Z" fill={(props.element === 'files') ? '#fff' : '#000'} /></svg>
                Files</div>
        </div>
    );
}
export default Sidebar;