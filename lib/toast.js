import Toastify from 'toastify-js'

const toast = {}

toast.success = (msg) =>
  Toastify({
    text: msg,
    duration: 3000,
    close: true,
    gravity: 'top',
    position: 'right',
    backgroundColor: '#000',
    stopOnFocus: true
  }).showToast()

toast.fail = (msg) =>
  Toastify({
    text: msg,
    duration: 3000,
    close: true,
    gravity: 'top',
    position: 'right',
    backgroundColor: '#e00',
    stopOnFocus: true
  }).showToast()

export default toast
