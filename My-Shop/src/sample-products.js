const products = {
	recommended: {
		product1: {
			id: 1,
			image: 'http://tipsgeeks.com/wp-content/uploads/2017/07/xperia-xa1-ultra-black.png',
			name: 'Sony Xperia XA1',
			price: '₱ 13,000.00',
			rating: '4/5',
		},

		product2: {
			id: 2,
			image: 'https://media.playstation.com/is/image/SCEA/playstation-4-slim-vertical-product-shot-01-us-07sep16?$TwoColumn_Image$',
			name: 'Sony PlayStation 4 Slim',
			price: '₱ 15,495.00',
			rating: '4/5',
		},

		product3: {
			id: 3,
			image: 'https://pisces.bbystatic.com/image2/BestBuy_US/images/products/4746/4746900_sd.jpg;maxHeight=550;maxWidth=642',
			name: 'Nier Automata',
			price: '₱ 1,895.00',
			rating: '5/5',
		},

		product4: {
			id: 4,
			image: 'https://assets.razerzone.com/eeimages/products/26727/rzrblade14-04.png',
			name: 'Razer Blade',
			price: '₱ 149,999.00',
			rating: '4/5',	
		},

		product5: {
			id: 5,
			image: 'https://i.pinimg.com/originals/6e/b3/93/6eb3936aa0294f46841c8c74e59fb6b4.jpg',
			name: 'Seiko SKX007J1 SKX007',
			price: '₱ 11,788.00',
			rating: '4/5',
		},

		product6: {
			id: 6,
			image: 'https://www.bhphotovideo.com/images/images1000x1000/sony_dsc_w800_b_cyber_shot_dsc_w800_digital_camera_1029529.jpg',
			name: 'Sony DSC-W800 Digital Camera',
			price: '₱ 4,299.00',
			rating: '4/5',
		},

		product7: {
			id: 7,
			image: 'https://www.etotalk.com/images/v/201608/14701306670.jpg',
			name: 'Xiaomi Mi Band 2',
			price: '₱ 1,787.00',
			rating: '4/5',
		}
	},

	hot: {
		product1: {
			id: 1,
			image: 'https://images.philips.com/is/image/PhilipsConsumer/HD4932_00-RTP-global-001?$jpglarge$&wid=1250',
			name: 'Philips HD4932 Induction Cooker',
			price: '₱ 5,894.99',
			rating: '4/5',
		},

		product2: {
			id: 2,
			image: 'https://static.acer.com/up/Resource/Acer/Laptops/Aspire_VX_15/Overview/20161117/Aspire-VX-15_gallery-04.png',
			name: 'Acer VX 15',
			price: '₱ 59,999.00',
			rating: '4/5',
		},

		product3: {
			id: 3,
			image: 'http://images.samsung.com/is/image/samsung/ae-fhd-m5000-ua40m5000akxzn-rperspectiveblack-70262445?$PD_GALLERY_JPG$',
			name: 'Samsung 40" Full HD TV UA-40M5000',
			price: '₱ 18,689.00',
			rating: '4/5',
		},

		product4: {
			id: 4,
			image: 'http://cougargaming.com/uploads/pics/4-1_03.png',
			name: 'COUGAR 700K Mechanical Gaming Keyboard',
			price: '₱ 6,639.00',
			rating: '4/5',
		},

		product5: {
			id: 5,
			image: 'https://www.sandisk.com/content/dam/sandisk-main/en_us/portal-assets/product-images/retail-products/cz48_angle_down-retina.png',
			name: 'Sandisk Cruzer Ultra 32GB Flash Drive',
			price: '₱ 499.99',
			rating: '4/5',
		},

		product6: {
			id: 6,
			image: 'https://images-na.ssl-images-amazon.com/images/I/61MF7kZkrIL._SX425_.jpg',
			name: 'Samsung Galaxy S8 Dual Sim 64GB',
			price: '₱ 32,990.00',
			rating: '4/5',
		},

		product7: {
			id: 7,
			image: 'https://ph-live-01.slatic.net/p/2/logitech-g102-prodigy-programmable-rgb-gaming-mouse-1491260587-37642641-2f256846c4ba5e4603f9935893e6f6f4.jpg',
			name: 'Logitech G102 Prodigy',
			price: '₱ 1,150.00',
			rating: '4/5',
		}
	},

	selection: {
		product1: {
			id: 1,
			image: 'http://www.transcycle.com.ph/wp-content/uploads/2017/11/all-new-cbr150r-red-360-700-profile-dp-red.png',
			name: 'Honda CBR-150r',
			price: '₱ 120,000.00',
			rating: '4/5',
		},

		product2: {
			id: 2,
			image: 'http://www.lg.com/ph/images/refrigerators/gn-b201slz/gallery/medium01.jpg',
			name: 'LG GN B201SLZ 6cu ft',
			price: '₱ 16,995.00',
			rating: '4/5',
		},

		product3: {
			id: 3,
			image: 'https://ph-live-02.slatic.net/p/8/sol-dual-sport-motard-ss-1-edge-motorcycle-helmet-blackorange-1515736244-19785453-44fcd6c51ddc65315b52979b409b0e49-product.jpg',
			name: 'SOL Dual Sport Motard SS-1 Edge Motorcycle Helmet',
			price: '₱ 4,834.81',
			rating: '4/5',
		},

		product4: {
			id: 4,
			image: 'https://ph-live-03.slatic.net/p/5/nivea-body-intensive-moisture-body-milk-400ml-1450392501-34259-1.jpg',
			name: 'NIVEA Body Lotion Intensive Moisture Body Milk 400ml',
			price: '₱ 228.80',
			rating: '4/5',
		},

		product5: {
			id: 5,
			image: 'https://upload.wikimedia.org/wikipedia/commons/5/5e/Nintendo_Switch_Console.png',
			name: 'Nintendo Switch',
			price: '₱ 18,895',
			rating: '4/5',
		},

		product6: {
			id: 6,
			image: 'https://ph-live-01.slatic.net/p/6/envelope-folding-outdoor-sleeping-bag-red-1487050475-89986801-7045b2d8e35c04e94b8fed98c9beba21.jpg',
			name: 'Envelope Folding Outdoor Sleeping Bag',
			price: '₱ 355.50',
			rating: '4/5',
		},

		product7: {
			id: 7,
			image: 'https://ph-live-03.slatic.net/p/3/6pcs-stainless-steel-kitchen-knife-set-with-stand-1470795211-8430906-e4849bd73c1486082f1743b902aed423-webp-zoom.jpg',
			name: '6pcs Stainless Steel Kitchen Knife Set With Stand',
			price: '₱ 331.97',
			rating: '4/5',
		},
	}
}

export default products;