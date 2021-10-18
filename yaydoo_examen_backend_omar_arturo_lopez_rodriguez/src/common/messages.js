'use strict'
const WAIT_TIME = 600

const tokenExpired = {
  code: 'EA0040',
  userMessage: 'E0033',
  message: 'Token signature expired.'
}

const notFound = {
  code: 'EA0042',
  userMessage: 'E0035',
  message: 'Not found'
}

const maxAttemptsExceeded = {
  code: 'EA0107',
  userMessage: 'I0098',
  message: 'Max attempts exceeded, please try again in ' + WAIT_TIME / 60 + ' minutes.'
}

const wrongAnswer = {
  code: 'EA0132',
  userMessage: 'E0049',
  message: 'Wrong answer for one or many of your questions.'
}

const serverError = {
  code: 'EA0001',
  userMessage: 'F0001',
  message: 'Fatal Error'
}

const phoneIsRequired = {
  code: 'EA0005',
  userMessage: 'E0013',
  message: 'Phone number is required'
}

const phoneNumberMustBeNumeric = {
  code: 'EA0006',
  userMessage: 'I0025',
  message: 'Phone number must be numeric'
}

const phoneNumberMustHaveTenDigits = {
  code: 'EA0008',
  userMessage: 'I0025',
  message: 'Phone number must have 10 digits'
}

const phoneNumberLonger = {
  code: 'EA0007',
  userMessage: 'I0025',
  message: 'Phone number must have less of 14 digits'
}

const countryRequired = {
  code: 'EA0016',
  userMessage: 'E0016',
  message: 'Country is required'
}

const invalidCountry = {
  code: 'EA0015',
  userMessage: 'E0015',
  message: 'Country is invalid'
}

const phoneNumberWasNotFound = {
  code: 'EA0003',
  userMessage: 'E0011',
  message: 'Phone number was not founded'
}

const phoneNumberAlreadyExists = {
  code: 'EA0019',
  userMessage: 'E0018',
  message: 'Phone number already exist'
}

const userTypeRequired = {
  code: 'EA0017',
  userMessage: 'E0017',
  message: 'User type is required'
}

const badUserType = {
  code: 'EA0018',
  userMessage: 'E0017',
  message: 'User type must be a benefactor, beneficiary or pending'
}

const userTypeMustBeBenefactor = {
  code: 'EA0108',
  userMessage: 'I0100',
  message: 'User type must be a benefactor.'
}

const userTypeMustBeBeneficiary = {
  code: 'EA0156',
  userMessage: 'I0118',
  message: 'User type must be a beneficiary.'
}

const deviceIdRequired = {
  code: 'EA0151',
  userMessage: 'E0108',
  message: 'Device identifier is required'
}

const userWasNotFound = {
  code: 'EA0152',
  userMessage: 'E0109',
  message: 'User was not found.'
}

const deviceIdSize = {
  code: 'EA0155',
  userMessage: 'E0111',
  message: 'Device id has invalid length.'
}

const beneficiaryNotVigent = {
  code: 'EA0176',
  userMessage: 'E0129',
  message: 'Is not a vigent beneficiary'
}

const benefactorNotVigent = {
  code: 'EA0177',
  userMessage: 'E0130',
  message: 'Is not a vigent benefactor'
}

const verificationsNotFound = {
  code: 'EA0229',
  userMessage: 'E0164',
  message: 'Verifications result was not found.'
}

const invitationWasNotFound = {
  code: 'EA0231',
  userMessage: 'E0166',
  message: 'Invitation was not found.'
}
module.exports = {
  tokenExpired,
  notFound,
  maxAttemptsExceeded,
  wrongAnswer,
  serverError,
  phoneIsRequired,
  phoneNumberMustBeNumeric,
  phoneNumberMustHaveTenDigits,
  phoneNumberLonger,
  countryRequired,
  invalidCountry,
  phoneNumberWasNotFound,
  phoneNumberAlreadyExists,
  userTypeRequired,
  badUserType,
  userTypeMustBeBenefactor,
  userTypeMustBeBeneficiary,
  deviceIdRequired,
  userWasNotFound,
  deviceIdSize,
  beneficiaryNotVigent,
  benefactorNotVigent,
  verificationsNotFound,
  invitationWasNotFound
}
