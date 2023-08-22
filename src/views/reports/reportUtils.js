import html2canvas from 'html2canvas'

export const htmlToImage = (selector) => {
  const el = document.querySelector(selector)
  if (!el) {
    let err = new Error(`Element (${selector}) not found`)
    Promise.reject(err)
  }
  // let elRect = el.getBoundingClientRect()
  // const canvas = document.createElement('canvas')
  // canvas.width = elRect.width
  // canvas.height = elRect.height
  const options = {
    // canvas
  }

  return html2canvas(el, options).then(function (canvas) {
    const { height, width } = canvas
    console.log('canvas width and height @@', { height, width })
    var url = canvas.toDataURL('image/jpeg', 1.0)
    return [url, { width, height }]
  })
}
