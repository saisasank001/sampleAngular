import { Injectable } from '@angular/core';
import * as moment from 'moment';
@Injectable({
  providedIn: 'root'
})
export class ValidationService {

  constructor() { }

  isAlphabet(data) {
    if (data.match(/^[a-zA-Z]+$/)) {
      return true
    } else {
      return false
    }
  }

  isNumeric(data) {
    if (data.match(/^[0-9]+$/)) {
      return true
    } else {
      return false
    }
  }

  isAlfaNumeric(data) {
    if (data.match(/^[0-9a-zA-Z]+$/)) {
      return true
    } else {
      return false
    }
  }

  isEmail(data) {
    if (data.match(/^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/)) {
      return true
    } else {
      return false
    }
  }

  maxLength(data, max) {
    if (data.length <= max) {
      return true
    } else {
      return false
    }
  }

  minLength(data, min) {
    if (data.length >= min) {
      return true
    } else {
      return false
    }
  }

  compare(data, len) {
    if (data.length == len) {
      return true
    } else {
      return false
    }
  }

  checkIsArray(data) {
    if (Array.isArray(data)) {
      return true
    } else {
      return false
    }
  }

  dateValidate(data, format) {
    if (moment(data, format, true).isValid()) {
      return true
    } else {
      return false
    }
  }
  isEmpty(data) {
    if (data == '' || data == undefined) {
      return true
    } else {
      return false
    }
  }
  
  checkValidate(data,validations){
    return true
  }

  
}
