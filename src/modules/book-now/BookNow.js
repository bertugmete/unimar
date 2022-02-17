import React from "react";
import Input from "../../components/input/Input";
import Count from "../../components/count/Count";
import { Button } from "react-bootstrap";

const BookNow = () => {
  let [adultCount, setAdultCount] = React.useState(1);
  let [childCount, setChildCount] = React.useState(0);
  let [infantCount, setInfantCount] = React.useState(0);

  return (
    <div className="book-now">
      <div className="book-now__title">
        <h3>Rezervasyon Yap</h3>
      </div>
      <div className="book-now__price mt-2 mb-2">
        <span>Kişi başı: 500₺</span>
      </div>
      <div className="book-now__customer-information mt-2">
        <Input name="nameSurname" label="Ad Soyad" />
        <Input name="phone" label="Telefon" />
        <Input name="email" label="E-mail" />
      </div>
      <Count value={adultCount} increment={() => setAdultCount(++adultCount)}
             decrement={() => adultCount > 0 && setAdultCount(--adultCount)} />
      <Count value={childCount} title="Çocuk" description="2-12 yaş" increment={() => setChildCount(++childCount)}
             decrement={() => childCount > 0 && setChildCount(--childCount)} />
      <Count value={infantCount} title="Bebek" description="0-2 yaş"
             increment={() => setInfantCount(++infantCount)}
             decrement={() => childCount > 0 && setInfantCount(--infantCount)}
      />
      <div className="d-grid mt-2">
        <Button variant="primary" size="lg">Book Now</Button>
      </div>
    </div>
  );
};

export default BookNow;