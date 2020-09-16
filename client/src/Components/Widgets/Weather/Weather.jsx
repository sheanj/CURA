import React, { Component } from 'react'
import './Weather.css'

export default class Weather extends Component {
    render() {
        return (
          <div className='weatherWidget'>
            <div className='weatherHeader'>
                    <div className='temperature'>
                        <h1>72°</h1>
              </div>
              <div className='weatherSVG'>
                <svg
                  xmlns='http://www.w3.org/2000/svg'
                  width='64'
                  height='64'
                  viewBox='0 0 64 64'
                >
                  <g
                    id='Group_4'
                    data-name='Group 4'
                    transform='translate(-6 -6)'
                  >
                    <path
                      id='Path_8'
                      data-name='Path 8'
                      d='M58.115,45.095a15.525,15.525,0,0,0-28.452-5.288A10.971,10.971,0,0,0,14.229,49.829c0,.314.014.63.042.946a10.127,10.127,0,0,0,1.857,20.083H57.092A12.922,12.922,0,0,0,70,57.95,12.764,12.764,0,0,0,65.981,48.6,12.974,12.974,0,0,0,58.115,45.095ZM57.092,67.2H16.128a6.47,6.47,0,0,1-.875-12.881l3.489-.475-.573-2.026a7.306,7.306,0,0,1,11.183-8.006l1.8,1.241.907-1.985a11.871,11.871,0,0,1,22.638,3.976l.142,1.776,1.779-.1A9.244,9.244,0,1,1,57.092,67.2ZM25.2,36.114A10.057,10.057,0,1,0,15.143,26.057,10.069,10.069,0,0,0,25.2,36.114Zm0-16.457a6.4,6.4,0,1,1-6.4,6.4A6.408,6.408,0,0,1,25.2,19.657Z'
                      transform='translate(0 -0.857)'
                    />
                    <rect
                      id='Rectangle_13'
                      data-name='Rectangle 13'
                      width='4'
                      height='5'
                      transform='translate(23 6)'
                    />
                    <rect
                      id='Rectangle_14'
                      data-name='Rectangle 14'
                      width='3.657'
                      height='5.487'
                      transform='translate(10.331 12.916) rotate(-45)'
                    />
                    <rect
                      id='Rectangle_15'
                      data-name='Rectangle 15'
                      width='5'
                      height='4'
                      transform='translate(6 23)'
                    />
                    <rect
                      id='Rectangle_16'
                      data-name='Rectangle 16'
                      width='5.487'
                      height='3.657'
                      transform='translate(10.331 37.484) rotate(-45)'
                    />
                    <rect
                      id='Rectangle_17'
                      data-name='Rectangle 17'
                      width='5'
                      height='4'
                      transform='translate(39 23)'
                    />
                    <rect
                      id='Rectangle_18'
                      data-name='Rectangle 18'
                      width='5.487'
                      height='3.657'
                      transform='translate(33.605 14.209) rotate(-45)'
                    />
                  </g>
                </svg>
              </div>
            </div>
            <div className='weatherWidgetSubhead'>
              <div className='weatherCondition'><h4>Partly Cloudy</h4></div>
              <div className='weatherLocation'><h4>Brooklyn, New York</h4></div>
            </div>
          </div>
        );
    }
}
