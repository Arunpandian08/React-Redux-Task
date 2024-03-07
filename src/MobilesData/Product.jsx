import React, { useState } from 'react';

export const ProductContext = React.createContext(null)
const Product = ({children}) => {
    const [data,setData]=useState({
        products:[
            {
                "id": 1,
                "title": "iPhone X",
                "description": "SIM-Free, Model A19211 6.5-inch Super Retina HD display with OLED technology A12 Bionic chip with ...",
                "price": 899,
                "discountPercentage": 17.94,
                "rating": 4.44,
                "stock": 34,
                "brand": "Apple",
                "category": "smartphones",
                "thumbnail": "https://th.bing.com/th/id/OIP.IfjoULu8pvSPa5HoortWjQHaE8?rs=1&pid=ImgDetMain",
                "images": [
                    "https://th.bing.com/th/id/OIP.IfjoULu8pvSPa5HoortWjQHaE8?rs=1&pid=ImgDetMain",
                    "https://www.virginmegastore.ae/medias/sys_master/root/h6f/h69/9104079323166/328393-detail1.jpg",
                    "https://th.bing.com/th/id/R.a362ee8981f86d4815d448f859d502cd?rik=2Sw3pINdI18QLA&riu=http%3a%2f%2fstatic1.businessinsider.com%2fimage%2f5a00bd8058a0c1da4a8b57c6-1800%2fiphone-x-15.jpg&ehk=gw3lWbvfVMlFKTFrw3dBLg5xH7KOrbLQ8L8HL7leRUY%3d&risl=&pid=ImgRaw&r=0",
                    "https://i5.walmartimages.com/asr/3bc3aef9-c1a4-4c0c-a38d-abfc67c9f5c0_1.d4d6c54ce5681ee5e760cbcce7ae63ab.jpeg",
                ]
            },
            {
                "id": 2,
                "title": "iPhone 9",
                "description": "An apple mobile which is nothing like apple",
                "price": 549,
                "discountPercentage": 12.96,
                "rating": 4.69,
                "stock": 94,
                "brand": "Apple",
                "category": "smartphones",
                "thumbnail": "https://cdn.wccftech.com/wp-content/uploads/2018/04/hF6z3mMEtNqD27seXVmeBF.jpg",
                "images": [
                    'https://i.ytimg.com/vi/Z4faIxHsBgc/maxresdefault.jpg',
                    "https://static.pembeteknoloji.com.tr/wp-content/uploads/2020/01/apple-iphone-9-uretmeye-hazirlaniyor-2.jpg",
                    "https://i.pinimg.com/736x/a0/45/4a/a0454a4d2e67970bc9e5a502351d1685.jpg",
                    "https://i.pinimg.com/originals/84/ee/48/84ee48dbb18b783a991c2a22103b5649.jpg",
                    "https://cdn.wccftech.com/wp-content/uploads/2018/04/hF6z3mMEtNqD27seXVmeBF.jpg"
                ]
            },
            {
                "id": 3,
                "title": "Samsung Universe 9",
                "description": "Samsung's new variant which goes beyond Galaxy to the Universe",
                "price": 1249,
                "discountPercentage": 15.46,
                "rating": 4.09,
                "stock": 36,
                "brand": "Samsung",
                "category": "smartphones",
                "thumbnail": "https://gagadget.com/media/cache/10/2d/102dd36b046ee3e5690c558ab166570d.png",
                "images": [
                    "https://hoy.com.do/wp-content/uploads/2017/03/AP_008879880.jpg",
                    "https://gagadget.com/media/cache/10/2d/102dd36b046ee3e5690c558ab166570d.png",
                ]
            },
            {
                "id": 4,
                "title": "OPPOF19",
                "description": "OPPO F19 is officially announced on April 2021.",
                "price": 280,
                "discountPercentage": 17.91,
                "rating": 4.3,
                "stock": 123,
                "brand": "OPPO",
                "category": "smartphones",
                "thumbnail": "https://english.onlinekhabar.com/wp-content/uploads/2021/03/oppo-f.jpg",
                "images": [
                    "https://english.onlinekhabar.com/wp-content/uploads/2021/03/oppo-f.jpg",
                    "https://specifications-pro.com/wp-content/uploads/2021/01/Oppo-F19-Pro.jpg",
                    "https://th.bing.com/th/id/OIP.gcc2NNYZ8x9kq8nyUFkIPQHaGY?rs=1&pid=ImgDetMain",
                    "https://images.fonearena.com/blog/wp-content/uploads/2021/04/OPPO-F19-1-1024x1015.jpg",
                    "https://th.bing.com/th/id/OIP.joc-Plznd2uYi5ZZIsiFKAHaIM?rs=1&pid=ImgDetMain",
                ]
            },
            {
                "id": 5,
                "title": "Huawei P30",
                "description": "Huawei’s re-badged P30 Pro New Edition was officially unveiled yesterday in Germany and now the device has made its way to the UK.",
                "price": 499,
                "discountPercentage": 10.58,
                "rating": 4.09,
                "stock": 32,
                "brand": "Huawei",
                "category": "smartphones",
                "thumbnail": "https://i.dummyjson.com/data/products/5/thumbnail.jpg",
                "images": [
                    "https://www.notebookcheck.net/fileadmin/Notebooks/Huawei/P30_Pro/4_zu_3_teaser_Huawei_P30_Pro.jpg",
                    "https://images-na.ssl-images-amazon.com/images/I/61XM1qbUPUL._SL1000_.jpg",
                    "https://th.bing.com/th/id/OIP.pjp5WxM0ssF5edb8VJ3RgwHaF-?rs=1&pid=ImgDetMain",
                ]
            }
        ]
    })
    // console.log("data",data);
    return (
        <> 
        <ProductContext.Provider value={{data,setData}}>
            {children}
        </ProductContext.Provider>
        </>
    );
};
export default Product;