// function for modal
const modalFunc = () => {
    // Select modal, cartBTN elements
    const modal = document.querySelector('.cart-modal__overlay');
    const cartBtn = document.querySelector('#cart-button');

    // Open cart modal
    const openModal = () => {
        modal.classList.add('open');
    }

    // Close cart modal
    const closeModal = () => {
        modal.classList.remove('open');
    }

    // Open modal when clicking on button "Basket"
    cartBtn.addEventListener('click', () => {
        openModal();
    });

    // Close modal when clicking on overlay and sign 'X'
    modal.addEventListener('click', (event) => {
        if (event.target.classList.contains('cart-modal__overlay') ||
            event.target.closest('.cart-modal__header--close')
        ) {
            closeModal();
        }
    });
};

// functiom cart of restaurant
const restsFunc = () => {
    const container = document.querySelector('#rests-container');

    // Array of cards restaurant
    const restArray = [{
            id: 0,
            title: 'Пицца плюс',
            time: 50,
            rating: 4.5,
            price: 900,
            type: 'Пицца',
            image: 'pizza-plus.jpg'
        },
        {
            id: 1,
            title: 'Тануки',
            time: 50,
            rating: 4.5,
            price: 900,
            type: 'Пицца',
            image: 'tanuks.jpg'
        },
        {
            id: 2,
            title: 'FoodBand',
            time: 50,
            rating: 4.5,
            price: 900,
            type: 'Пицца',
            image: 'food-band.jpg'
        },
        {
            id: 3,
            title: 'Жадина-пицца',
            time: 50,
            rating: 4.5,
            price: 900,
            type: 'Пицца',
            image: 'pizza-craving.jpg'
        },
        {
            id: 4,
            title: 'Точка еды',
            time: 50,
            rating: 4.5,
            price: 900,
            type: 'Пицца',
            image: 'food-point.jpg'
        },
        {
            id: 5,
            title: 'PizzaBurger',
            time: 50,
            rating: 4.5,
            price: 900,
            type: 'Пицца',
            image: 'pizza-burger.jpg'
        }
    ]

    const loading = () => {
        container.innerHTML = '<p style="width: 100%; text-align: center">Loading</p>'
    }

    const randerRests = (array) => {
        container.innerHTML = ''

        array.forEach((card) => {
            container.insertAdjacentHTML('beforeend', `

                        <a href="./goods.html?id=${card.id}" class="products-card">
                            <div class="products-card__image">
                                <img src="./images/rests/${card.image}" alt="${card.image}">
                            </div>                            
                            <div class="products-card__description">                                
                                <div class="products-card__description-row">
                                    <h4 class="products-card__description--title">
                                        ${card.title}
                                    </h4>
                                    <div class="products-card__description--badge">
                                        ${card.time} мин
                                    </div>
                                </div>                                
                                <div class="products-card__description-row">
                                    <div class="products-card__description-info">
                                        <div class="products-card__description-info--raiting">
                                            <img src="./images/icons/star.svg" alt="star">
                                            ${card.rating}
                                        </div>
                                        <div class="products-card__description-info--price">
                                            От ${card.price} ₽
                                        </div>
                                        <div class="products-card__description-info--group">
                                            ${card.type}
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </a>    
                `)
        })
    }

    if (container) {
        loading();

        setTimeout(() => {
            randerRests(restArray)
        }, 1000)
    }
}


// functiom cart of goods
const goodsFunc = () => {
    const container = document.querySelector('#goods-container');

    // Array of cards goods
    const goodsArray = [{
            id: 0,
            title: 'Ролл угорь стандарт',
            description: 'Рис, угорь, соус унаги, кунжут, водоросли нори.',
            name: 'В корзину',
            icons: 'basket-white.svg',
            price: 250,
            image: 'roll-standard.jpg'
        },
        {
            id: 1,
            title: 'Калифорния лосось стандарт',
            description: 'ис, лосось, авокадо, огурец, майонез, икра масаго, водоросли нори.',
            name: 'В корзину',
            icons: 'basket-white.svg',
            price: 250,
            image: 'california-standard.jpg'
        },
        {
            id: 2,
            title: 'Окинава стандарт 185 г',
            description: 'Рис, креветка отварная, сыр сливочный, лосось, огурец свежий...',
            name: 'В корзину',
            icons: 'basket-white.svg',
            price: 250,
            image: 'okinawa-standard.jpg'
        },
        {
            id: 3,
            title: 'Цезарь маки хl',
            description: 'Рис, куриная грудка копченая, икра масаго, томат, айсберг, соус цезарь...',
            name: 'В корзину',
            icons: 'basket-white.svg',
            price: 250,
            image: 'caesar-poppies.jpg'
        },
        {
            id: 4,
            title: 'Ясай маки стандарт 185 г',
            description: 'Рис, помидор свежий, перец болгарский, авокадо, огурец, айсберг',
            name: 'В корзину',
            icons: 'basket-white.svg',
            price: 250,
            image: 'poppies-standard.jpg'
        },
        {
            id: 5,
            title: 'Ролл с креветкой стандарт',
            description: 'Рис, водоросли нори, креветки отварные, сыр сливочный, огурцы',
            name: 'В корзину',
            icons: 'basket-white.svg',
            price: 250,
            image: 'shrimp-standard.jpg'
        }
    ]

    const loading = () => {
        container.innerHTML = '<p style="width: 100%; text-align: center">Loading</p>'
    }

    const randerGoods = (array) => {
        container.innerHTML = ''

        array.forEach((card) => {
            container.insertAdjacentHTML('beforeend', `

                        <div class="products-card">
                            <div class="products-card__image">
                                <img src="./images/goods/${card.image}" alt="${card.image}">
                            </div>                            
                            <div class="products-card__description">                                
                                <div class="products-card__description-row">
                                    <h5 class="products-card__description--name">
                                        ${card.title}
                                    </h5>
                                </div>                                
                                <div class="products-card__description-row">
                                    <p class="products-card__description--text">
                                        ${card.description}
                                    </p>
                                </div>                                
                                <div class="products-card__description-row">
                                    <div class="products-card__description-controls">
                                        <button class="btn btn-primary">
                                            ${card.name}
                                            <img src="./images/icons/${card.icons}" alt="${card.icons}">
                                        </button>
                                        <span class="products-card__description-controls--price">
                                            ${card.price} ₽
                                        </span>
                                    </div>
                                </div>
                            </div>
                        </div>  
                `)
        })
    }

    if (container) {
        loading();

        setTimeout(() => {
            randerGoods(goodsArray)
        }, 1000)
    }
}


modalFunc();
restsFunc();
goodsFunc();