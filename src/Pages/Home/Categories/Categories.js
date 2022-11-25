import React from 'react';
import yamaha from '../../../assets/yamaha.png'
import suzuki from '../../../assets/suzuki.jpg'
import ktm from '../../../assets/ktm.jpg'

const Categories = () => {
    return (
        <div className="mb-16 max-w-screen-xl mx-auto">
        <div className="mb-8">
          <h2 className="text-center text-4xl font-bold ">Brows Items By Category</h2>
          <p className="text-center  text-gray-500">__________________</p>
        </div>
        <div className="flex justify-around text-center align-middle flex-wrap">
          <div className="card w-96 h-96 py-7 shadow-xl pb-0 mb-4">
          <figure><img src={yamaha} alt="Shoes" /></figure>
            <div className="card-body">
              <h2 className="btn text-center text-2xl font-bold mt-4">
                YAMAHA
              </h2>
            </div>
          </div>
          <div className="card w-96 h-96 py-7 shadow-xl pb-0 mb-4">
          <figure><img src={suzuki} alt="Shoes" /></figure>
            <div className="card-body">
              <h2 className="btn text-center text-2xl font-bold">
                Suzuki
              </h2>
            </div>
          </div>
          <div className="card w-96 h-96 py-7 shadow-xl pb-0 mb-4">
          <figure><img src={ktm} alt="Shoes" /></figure>
            <div className="card-body">
              <h2 className="btn text-center text-2xl font-bold">
                KTM
              </h2>
            </div>
          </div>
  
        </div>
      </div>
    );
};

export default Categories;