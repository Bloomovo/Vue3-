import { computed, onUnmounted, ref } from "vue"
import dayjs from "dayjs"
export const useCountDown = () => {
  // 倒计时
  const time = ref(0)
  // 控制定时器变量
  let timer = null
  const formatTime = computed(() => dayjs.unix(time.value).format('mm分ss秒'))
  // 定时器控制变量
  const start = (currentTime) => {
    time.value = currentTime
    timer = setInterval(() => {
      if ( time.value <= 0) {
        clearInterval(timer)
      }
      time.value--
    }, 1000)
  }

  onUnmounted(() => {
    timer && clearInterval(timer)
  })

  return {
    formatTime,
    start
  }
}