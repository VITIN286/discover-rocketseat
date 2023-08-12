function toggleMode(){
    const html = document.documentElement
    html.classList.toggle('light')

    const img = document.querySelector('#profile img')

    if(html.classList.contains('light')){
        img.setAttribute('src', 'image/WIN_20230807_15_35_51_Pro (2).jpg')
    } else {
        img.setAttribute('src', 'image/WIN_20230812_15_48_16_Pro.jpg')
    }
}