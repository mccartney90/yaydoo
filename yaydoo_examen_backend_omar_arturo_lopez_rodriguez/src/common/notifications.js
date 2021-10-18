'use strict'

const beneficiaryVinculatedNotification = {
  type: 'push-notification',
  title: '¡Vinculación exitosa!',
  message: 'Tu familiar ya puede empezar a compartir dinero a tu tarjeta Chib!',
  deviceId: '',
  data: ''
}

const removeBeneficiaryNotification = {
  type: 'push-notification',
  title: 'Desvinculado',
  message: 'Esta tarjeta Chib ya no esta vinculada con tu familiar en los EE.UU.',
  deviceId: '',
  data: ''
}

const removeBenefactorNotification = {
  type: 'push-notification',
  title: 'Desvinculado',
  message: 'Ya no estas vinculado a la tarjeta Chib de tu familiar en Mexico.',
  deviceId: '',
  data: ''
}

const jumioData = {
  isVerificationMessage: 'true',
  verificationStatus: '',
  registrationCompleted: '',
  blackListed: ''
}

const jumioSuccessNotification = {
  type: 'push-notification',
  title: '¡Tu identidad ha sido verificada!',
  message: '¡Felicidades! Tu identidad ha sido verificada con éxito. ¡Ya puedes comenzar a disfrutar de Chib!',
  deviceId: '',
  data: jumioData
}

const jumioFirstErrorNotification = {
  type: 'push-notification',
  title: 'Hubo un problema al validar tu identidad',
  message: 'Hubo un problema al verificar tu identidad. Lo puedes volver a intentar o ayudamos a resolverlo desde la app de Chib.',
  deviceId: '',
  data: jumioData
}

const jumioSecondErrorNotification = {
  type: 'push-notification',
  title: 'Aún no se ha logrado verificar tu identidad.',
  message: 'Lo sentimos, aún no se ha logrado verificar tu identidad. Te ayudamos a resolverlo desde la app de Chib.',
  deviceId: '',
  data: jumioData
}

const blackListedNotification = {
  type: 'push-notification',
  title: 'Tu cuenta ha sido bloqueada',
  message: 'Se ha bloqueado tu acceso a Chib. Te ayudamos a resolverlo desde nuestra sección de ayuda en la app de Chib.',
  deviceId: '',
  data: jumioData
}

const usaUserSuccessNotification = {
  type: 'push-notification',
  title: '  Registro exitoso!',
  message: '  Felicidades!   Ya puedes comenzar a disfrutar de Chib!',
  deviceId: '',
  data: ''
}

const testNotification = {
  type: 'push-notification',
  title: '',
  message: '',
  deviceId: '',
  data: ''
}

module.exports = {
  beneficiaryVinculatedNotification,
  removeBeneficiaryNotification,
  removeBenefactorNotification,
  jumioSuccessNotification,
  jumioFirstErrorNotification,
  jumioSecondErrorNotification,
  usaUserSuccessNotification,
  blackListedNotification,
  testNotification
}
