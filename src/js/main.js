
document.querySelector(".container__carousel__div")
    e => {
        // console.log(e)
        if (e.deltaY > 0) {
            e.target.scrollBy(300, 0)
        } else {
            e.target.scrollBy(-300, 0)
        }

    }

