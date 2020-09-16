import React, { Component } from "react";
import "./CalendarWidget.css";

export default class CalendarWidget extends Component {
  render() {
    return (
      <div className='calendar'>
        <div className='calHeader'>
          <div className='month'>
            <h3>September</h3>
          </div>
          <div className='year'>
            <h3>2020</h3>
          </div>
        </div>
        <div className='dates'>
          <div className='week1'>
            <button>24</button>
            <button>25</button>
            <button>26</button>
            <button>27</button>
            <button>28</button>
            <button>29</button>
            <button>30</button>
          </div>
          <div className='week2'>
            <button>1</button>
            <button>2</button>
            <button>3</button>
            <button>4</button>
            <button>5</button>
            <button>6</button>
            <button>7</button>
          </div>
          <div className='week3'>
            <button>8</button>
            <button>9</button>
            <button>10</button>
            <button>11</button>
            <button>12</button>
            <button>13</button>
            <button>14</button>
          </div>
          <div className='week4'>
            <button>15</button>
            <button>16</button>
            <button>17</button>
            <button>18</button>
            <button>19</button>
            <button>20</button>
            <button>21</button>
          </div>
          <div className='week5'>
            <button>22</button>
            <button>23</button>
            <button>24</button>
            <button>25</button>
            <button>26</button>
            <button>27</button>
            <button>28</button>
          </div>
          <div className='week6'>
            <button>29</button>
            <button>30</button>
            <button>31</button>
            <button>1</button>
            <button>2</button>
            <button>3</button>
            <button>4</button>
          </div>
        </div>
      </div>
    );
  }
}
