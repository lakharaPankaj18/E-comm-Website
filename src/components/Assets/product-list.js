import men from './productimages/men.png'
import men2 from './productimages/men2.png'
import men3 from './productimages/men3.png'
import men4 from './productimages/men4.png'
import men5 from './productimages/men5.png'
import men6 from './productimages/men6.png'
import men7 from './productimages/men7.png'
import men8 from './productimages/men8.png'
import women from './productimages/women.png'
import women2 from './productimages/women2.png'
import women3 from './productimages/women3.png'
import women4 from './productimages/women4.png'
import women5 from './productimages/women5.png'
import women6 from './productimages/women6.png'
import women7 from './productimages/women7.png'
import women8 from './productimages/women8.png'
import kid from './productimages/kid.png'
import kid2 from './productimages/kid2.png'
import kid3 from './productimages/kid3.png'
import kid4 from './productimages/kid4.png'
import kid5 from './productimages/kid5.png'
import kid6 from './productimages/kid6.png'
import kid7 from './productimages/kid7.png'
import kid8 from './productimages/kid8.png'

import sum1 from './productimages/sum1.png'
import sum2 from './productimages/sum2.png'
import sum3 from './productimages/sum3.png'
import sum4 from './productimages/sum4.png'
import sum5 from './productimages/sum5.png'
import sum6 from './productimages/sum6.png'
import sum7 from './productimages/sum7.png'
import sum8 from './productimages/sum8.png'


import w1_img from './peplum.png'
import w2_img from './formal.png'
import w3_img from './flutter.png'
import w4_img from './collar.png'
import newimg1 from './shirt1.png'
import newimg2 from './shirt2.png'
import newimg3 from './shirt3.png'
import newimg4 from './jeans1.png'
import newimg5 from './jeans2.png'
import newimg6 from './kurti1.png'
import newimg7 from './kurti2.png'
import newimg8 from './kurti3.png'


const product_list = [
    {
        id: 1,
        name: "Cricket Fan Jersey",
        category: 'mens',
        image: men,
        price: 4.29,
    },
    {
        id: 2,
        name: "Printed T-shirt",
        category: 'mens',
        image: men2,
        price: 4.19,
    },
    {
        id: 3,
        name: "Plain T-shirt",
        category: 'mens',
        image: men3,
        price: 4.65,
    },
    {
        id: 4,
        name: "Regular Fit Polo",
        category: 'mens',
        image: men4 ,
        price: 4.33,
    },
    {
        id: 5,
        name: "Full Sleeve T-shirt",
        category: 'mens',
        image: men5,
        price: 5.99,
    },
    {
        id: 6,
        name: "Allen Solly Regular Fit",
        category: 'mens',
        image: men6,
        price: 8.20,
    },
    {
        id: 7,
        name: "Men's Striped Regular Fit",
        category: 'mens',
        image: men7,
        price: 5.89,
    },
    {
        id: 8,
        name: "Round Neck T-shirt",
        category: 'mens',
        image: men8,
        price: 2.89,
    },
    {
        id: 9,
        name: "Women's Net Embroidered Lehenga Choli",
        category: 'womens',
        image: women,
        price: 6.89,
    },
    {
        id: 10,
        name: "Women's Floral Organza Lehenga Choli",
        category: 'womens',
        image: women2,
        price: 2.89,
    },
    {
        id: 11,
        name: "Women's Jacquard Lehenga Choli",
        category: 'womens',
        image: women3,
        price: 6.29,
    },
    {
        id: 12,
        name: "Women's Flered Lehenga Choli",
        category: 'womens',
        image: women4,
        price: 7.29,
    },
    {
        id: 13,
        name: "Women's Georgette Lehenga Choli",
        category: 'womens',
        image: women5,
        price: 7.39,
    },
    {
        id: 14,
        name: "Women's Wine Net Lehenga Choli",
        category: 'womens',
        image: women6,
        price: 7.89,
    },
    {
        id: 15,
        name: "Women's Lehenga Choli Free ",
        category: 'womens',
        image: women7,
        price: 8.89,
    },
    {
        id: 16,
        name: "Women's Lehenga Choli With Duptta",
        category: 'womens',
        image: women8,
        price: 22.89,
    },
    {
        id: 17,
        name: 'Allen Solly T-shirt',
        category: 'kids',
        image: kid,
        price: 5.49
    },
    {
        id: 18,
        name: 'U.S Polo T-shirt',
        category: 'kids',
        image: kid2,
        price: 5.19
    },
    {
        id: 19,
        name: 'U.S Regular Fit',
        category: 'kids',
        image: kid3,
        price: 7.19
    },
    {
        id: 20,
        name: 'Allen Solly Junior',
        category: 'kids',
        image: kid4,
        price: 6.49
    },
    {
        id: 21,
        name: 'Round Neck',
        category: 'kids',
        image: kid5,
        price: 4.99
    },
    {
        id: 22,
        name: 'Graphic Printed T-shirt',
        category: 'kids',
        image: kid6,
        price: 6.00
    },
    {
        id: 23,
        name: 'Allen Solly Printed',
        category: 'kids',
        image: kid7,
        price: 5.99
    },
    {
        id: 24,
        name: 'Cotton Button T-shirt',
        category: 'kids',
        image: kid8,
        price: 5.49
    },
    {
        id: 25,
        name: "Peplum Top",
        category: 'womens',
        image: w1_img,
        price: 50.30,
    },
    {
        id: 26,
        name: "Collar Sleeve Formal Dress",
        category: 'womens',
        image: w2_img,
        price: 80.30,
    },
    {
        id: 27,
        name: "Striped Colorblock Collar Dress",
        category: 'womens',
 image: w3_img,
        price: 90.30,
    },
    {
        id: 28,
        name: "Flutter Collar Belted Dress",
        category: 'womens',
        image: w4_img,
        price: 45.30,
    },
    {
        id: 29,
        name: "Dennis Lingo Casual Shirt",
        category: 'mens',
        image: newimg1,
        price: 6.99
    },
    {
        id: 30,
        name: "Allen Solly Men's Shirt",
        category: 'mens',
        image: newimg2,
        price: 6.89
    },
    {
        id: 31,
        name: "Dennis Lingo Casual Shirt",
        category: 'mens',
        image: newimg3,
        price: 6.59
    },
    {
        id: 32,
        name: "Levi's Mens's Jeans",
        category: 'mens',
        image: newimg4,
        price: 10.99
    },
    {
        id: 33,
        name: "Ben Martin Men's Jeans",
        category: 'mens',
        image: newimg5,
        price: 11.89
    },
    {
        id: 34,
        name: "Cotton Straight Kurta",
        category: 'womens',
        image: newimg6,
        price: 5.00
    },
    {
        id: 35,
        name: "Cotton Printed Straight Kurti",
        category: 'womens',
        image: newimg7,
        price: 6.79
    },
    {
        id: 36,
        name: "Poly Crepe Kurta",
        category: 'womens',
        image: newimg8,
        price: 7.65
    },
    {
        id: 37,
        name: "Polo shirt with pocket",
        category: 'summer',
        image: sum1,
        price: 7.65
    },
    {
        id: 38,
        name: "Polo shirt with collar",
        category: 'summer',
        image: sum2,
        price: 6.65
    },
    {
        id: 39,
        name: "Polo tshirt with button",
        category: 'summer',
        image: sum3,
        price: 6.25
    },
    {
        id: 40,
        name: "Polo shirt with collar",
        category: 'summer',
        image: sum4,
        price: 5.69
    },
    {
        id: 41,
        name: "Round neck tshirt",
        category: 'summer',
        image: sum5,
        price: 7.65
    },
    {
        id: 42,
        name: "Mens tshirt",
        category: 'summer',
        image: sum6,
        price: 5.39
    },
    {
        id: 43,
        name: "Black trendy printed tshirt",
        category: 'summer',
        image: sum7,
        price: 7.89
    },
    {
        id: 44,
        name: "Regular printed tshirt",
        category: 'summer',
        image: sum8,
        price: 4.44
    },
]

export default product_list;