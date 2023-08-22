export const linearGradientBackground = (colors) => {
  return (ctx) => {
    const canvas = ctx.chart.ctx
    const gradient = canvas.createLinearGradient(0, 0, 0, 160)
    colors.forEach((color) => {
      let [rgb, stop] = color
      gradient.addColorStop(stop, rgb)
    })
    return gradient
  }
}
