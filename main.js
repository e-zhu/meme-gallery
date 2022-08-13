var $gallery = document.querySelector('main');

var imageUrls = ['https://i.kym-cdn.com/entries/icons/original/000/013/564/doge.jpg',
  'https://etcanada.com/wp-content/uploads/2016/06/58c0500b2ac4c342c6fc4ab096ada150.jpg?quality=80&strip=all&crop=0px%2C21px%2C500px%2C333px&resize=720%2C480',
  'https://wiki.godvillegame.com/images/thumb/7/76/Prap.jpg/298px-Prap.jpg',
  'https://assets-prd.ignimgs.com/2022/07/07/minecraft-memes-1657229425733.jpg',
  'https://pbs.twimg.com/media/FZyCRxiVEAEkES6.jpg',
  'https://cdn.discordapp.com/attachments/600468105713549329/1007897162018979850/IMG_7835.jpg'];
var $imageUrlInput = document.querySelector('input');
var $addImageButton = document.querySelector('button');

$addImageButton.addEventListener('click', buttonClick);
function buttonClick() {
  if ($imageUrlInput.value !== '') {
    imageUrls.push($imageUrlInput.value);
    $imageUrlInput.value = '';
    updateGallery();
  }
}

function updateGallery() {
  $gallery.innerHTML = '';
  for (let i = 0; i < imageUrls.length; i++) {
    var $imageElement = document.createElement('img');
    $imageElement.className = 'gallery-image';
    $imageElement.src = imageUrls[i];
    $gallery.appendChild($imageElement);
  }
}

updateGallery();
