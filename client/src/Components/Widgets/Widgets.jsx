import React, { Component, useEffect, useState } from 'react'
import './Widgets.css'


export default class Widgets extends Component {
    render() {
        return (
          <div className='widgets'>
            <div className='widgetHeader'>
              <h3>TODAYS DATE</h3>
              <div className='settings'>
                <svg
                  id='Group_8'
                  data-name='Group 8'
                  xmlns='http://www.w3.org/2000/svg'
                  width='42.26'
                  height='42.26'
                  viewBox='0 0 42.26 42.26'
                >
                  <path
                    id='Path_2'
                    data-name='Path 2'
                    d='M0,0H42.26V42.26H0Z'
                    fill='none'
                  />
                  <path
                    id='Path_3'
                    data-name='Path 3'
                    d='M32.485,21.334a13.722,13.722,0,0,0,.123-1.726,13.722,13.722,0,0,0-.123-1.726L36.2,14.977a.888.888,0,0,0,.211-1.127L32.89,7.758a.885.885,0,0,0-1.074-.387L27.432,9.131a12.865,12.865,0,0,0-2.976-1.726L23.787,2.74A.859.859,0,0,0,22.924,2H15.881a.859.859,0,0,0-.863.74l-.669,4.666a13.528,13.528,0,0,0-2.976,1.726L6.988,7.37a.859.859,0,0,0-1.074.387L2.393,13.85A.868.868,0,0,0,2.6,14.977l3.715,2.905A13.964,13.964,0,0,0,6.2,19.608a13.964,13.964,0,0,0,.123,1.726L2.6,24.239a.888.888,0,0,0-.211,1.127l3.522,6.092a.885.885,0,0,0,1.074.387l4.384-1.761a12.865,12.865,0,0,0,2.976,1.726l.669,4.666a.859.859,0,0,0,.863.74h7.043a.859.859,0,0,0,.863-.74l.669-4.666a13.528,13.528,0,0,0,2.976-1.726l4.384,1.761a.859.859,0,0,0,1.074-.387l3.522-6.092a.888.888,0,0,0-.211-1.127ZM19.4,25.771a6.163,6.163,0,1,1,6.163-6.163A6.17,6.17,0,0,1,19.4,25.771Z'
                    transform='translate(1.728 1.522)'
                  />
                </svg>
              </div>
            </div>
            <div className='twoSquare'>
              <div className='leftWidget'></div>
              <div className='rightWidget'></div>
            </div>
            <div className='singleSquare'>
              <div className='news'></div>
            </div>
            <div className='singleSquare'>
              <div className='calendar'></div>
            </div>
          </div>
        );
    }
}
