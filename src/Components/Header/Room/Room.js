import React from 'react';
import { useLoaderData } from 'react-router-dom';
import Footer from '../../Footer/Footer';
import Card from '../../Home/Card';

const Room = () => {
   const datas = useLoaderData();

   return (
      <div>
         <div className='d-flex justify-content-between align-items-center'>

            <marquee className='mt-5 text-muted' scrollamout='10' direction='left' > DNestled in the heart of the city, our hotel offers a haven of comfort and luxury. With its elegant interiors, spacious rooms and suites, and impeccable service, we provide guests with an unforgettable experience. Whether you're here for business or leisure, our hotel is designed to offer the perfect escape from the hustle and bustle of daily life.

               Our rooms and suites are designed with your comfort in mind, featuring plush bedding, flat-screen TVs, and luxurious bathrooms. Enjoy breathtaking views of the city skyline or the surrounding mountains, and savor the peace and quiet that only a hotel of this quality can offer. Whether you're traveling solo or with family, our rooms and suites are the perfect place to call home during your stay.

               At our hotel, we take dining to new heights. Our gourmet restaurant serves up a delicious array of international cuisine, with something to suit every palate. Whether you're in the mood for a light bite, a hearty meal, or a sweet treat, our talented chefs are ready to create a memorable dining experience for you.

               If you're looking to unwind, our heated outdoor pool provides the perfect place to soak up the sun and relax. Our state-of-the-art fitness center is also available for those who like to stay active. With a range of equipment and classes, our fitness center provides a complete workout experience. </marquee>
         </div>
         <hr className='  m-0'></hr>
         <h1 className='text-center text-success' id='room-page-title'>FEATURED PACKAGES</h1>
         <div className='card-container mt-5'>

            {
               datas.map((data, index) => <Card data={data} />)
            }
         </div>
         <Footer/>
      </div>
   );
};

export default Room;