const button = document.querySelector('#input')
const img = document.querySelector('#img')
button.addEventListener('change', function(){
   uploadFile(button.files[0])
})
function uploadFile(file) {
    if(!['image/jpeg', 'image/jpg', 'image/png'].includes(file.type)){
        alert('Разрешены только файлы изображения')
        button.value = ''
        return
    }

    var reader = new FileReader()
    reader.onload = function (e){
        img.style.background = `url(${e.target.result}) 50% / cover`
        img.innerHTML = ''
        }
    reader.onerror = function (e) {
     alert('Ошибка')
    }
    reader.readAsDataURL(file)
}
