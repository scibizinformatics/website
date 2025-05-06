import AOS from 'aos'
import 'aos/dist/aos.css'

export default function () {
  AOS.init({
    duration: 800,
    easing: 'ease-in-out',
    once: true,
    offset: 50
  })
} 