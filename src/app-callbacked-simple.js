import loadImageCallbacked from './load-image-callbacked'

loadImageCallbacked('images/cat3.jpg', 
    (error, img) => {
      let imgElement = document.createElement("img");
      imgElement.src = img.src;
      document.body.appendChild(imgElement);
    }
  )




