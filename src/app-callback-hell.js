import loadImageCallbacked from './load-image-callbacked'

let addImg = (src) => {
  let imgElement = document.createElement("img");
  imgElement.src = src;
  document.body.appendChild(imgElement);
}

loadImageCallbacked('images/cat1.jpg', 
	(error, img1) => {
	  addImg(img1.src);
	  loadImageCallbacked('images/cat2.jpg', (error, img2) => {
	  		addImg(img2.src);
	  		loadImageCallbacked('images/cat3.jpg', (error, img3) => {
			  		addImg(img3.src);
			  	}
			  )
	  	}
	  )
	}
)

