import phone from "../assets/phone24.png";
import shipping from "../assets/shipping.png";
import calender from "../assets/calender.png";
import exchange from "../assets/exchange.png";
function Services() {
  return (
    <div className=" justify-around mb-8 hidden pb-8 lg:flex">
      <div className="flex gap-3 items-center">
        <img src={phone} alt="" />
        <div className="flex flex-col ">
          <h1>Reach Us Out</h1>
          <p className="text-sm text-nowrap">+92 316 3392146</p>
        </div>
      </div>
      <div className="flex gap-3 items-center">
        <img src={shipping} alt="" />
        <div className="flex flex-col ">
          <h1>Free Shipping</h1>
          <p className="text-sm text-nowrap">All Over Pakistan</p>
        </div>
      </div>
      <div className="flex gap-3 items-center">
        <img src={calender} alt="" />
        <div className="flex flex-col ">
          <h1>Fast Delivery</h1>
          <p className="text-sm text-nowrap">Under 3-4 Working Days</p>
        </div>
      </div>
      <div className="flex gap-3 items-center">
        <img src={exchange} alt="" />
        <div className="flex flex-col ">
          <h1 className="text-nowrap">Easy Exchange</h1>
          <p className="text-sm text-nowrap">Within a Week</p>
        </div>
      </div>
    </div>
  );
}

export default Services;
