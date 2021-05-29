let index = 0
let slides = document.getElementsByClassName("slide") as HTMLCollectionOf<HTMLElement>

const performInitialContainerLoad = () => {
  if (slides.length == 0) {
    throw new RangeError();
  }

  slides[0].style.display = "flex"
}

const setImage = (indexTranformer: (i: number) => number) => {
  let length = slides.length;

  index = indexTranformer(index)

  while (index >= length) {
    index = 0
  }

  if (index < 0) {
    index = length-1
  }

  for (let i = 0; i < slides.length; i++) {
    if (i == index) {
      slides[i].style.display = "flex"
      continue
    }
    slides[i].style.display = "none"
  }
}

const previousImage = () => {
  setImage(i => i-1)
}

const nextImage = () => {
  setImage(i => i+1)
}

const onLazyload = () => {
  if (slides.length != 0) {
    performInitialContainerLoad()
  }
}

onLazyload()