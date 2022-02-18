import React, { useRef } from "react";
import Input from "../../components/input/Input";
import Count from "../../components/count/Count";
import { Button } from "react-bootstrap";
import emailjs from "@emailjs/browser";
import Textarea from "../../components/textarea/Textarea";
import Constants from "../../components/notification-toast/helper";
import { notificationToast } from "../../components/notification-toast/NotificationToast";

const BookNow = ({ price }) => {
  let [adultCount, setAdultCount] = React.useState(1);
  let [childCount, setChildCount] = React.useState(0);
  let [infantCount, setInfantCount] = React.useState(0);
  const [nameSurname, setNameSurname] = React.useState("");
  const [phone, setPhone] = React.useState("");
  const [email, setEmail] = React.useState("");
  const [hotelName, setHotelName] = React.useState("");
  const [roomNumber, setRoomNumber] = React.useState("");
  const [note, setNote] = React.useState("");

  const form = useRef();


  const handleOnBookNowClick = (e) => {
    e.preventDefault(); // Prevents default refresh by the browser
    debugger
    emailjs.send(`service_a1s6mv4`, "template_r4agj75", {
      nameSurname,
      tourName: "Jeep",
      phone,
      email,
      adultCount,
      childCount,
      infantCount,
      hotelName,
      roomNumber,
      note
    }, "user_W8PNoQrAIlO8W9Q8t9NGH")
      .then((result) => {
          notificationToast(
            Constants.SUCCESS,
            "Bilgileriniz bize ulaşmıştır, en kısa sürede iletişime geçeceğiz."
          );
        },
        (error) => {
          notificationToast(
            Constants.ERROR,
            "Hata oluştu, lütfen tekrar deneyiniz."
          );
        });
  };

  return (
    <form ref={form} onSubmit={handleOnBookNowClick}>
      <div className="book-now">
        <div className="book-now__title">
          <h3>Rezervasyon Yap</h3>
        </div>
        <div className="book-now__price mt-2 mb-2">
          <span>{price}</span>
        </div>
        <div className="book-now__customer-information mt-2">
          <Input name="nameSurname" label="Ad Soyad" value={nameSurname}
                 onChange={(e) => setNameSurname(e.target.value)} />
          <Input name="phone" label="Telefon" value={phone} onChange={e => setPhone(e.target.value)} />
          <Input name="email" label="E-mail" value={email} onChange={e => setEmail(e.target.value)} />
          <Input name="hotelName" label="Otel Adı" value={hotelName} onChange={e => setHotelName(e.target.value)} />
          <Input name="roomNumber" label="Oda Numarası" value={roomNumber}
                 onChange={e => setRoomNumber(e.target.value)} />
        </div>
        <Count value={adultCount} increment={() => setAdultCount(++adultCount)}
               name="adultCount"
               decrement={() => adultCount > 0 && setAdultCount(--adultCount)} />
        <Count value={childCount} title="Çocuk" description="2-12 yaş" increment={() => setChildCount(++childCount)}
               name="childCount"
               decrement={() => childCount > 0 && setChildCount(--childCount)} />
        <Count value={infantCount} title="Bebek" description="0-2 yaş"
               name="infantCount"
               increment={() => setInfantCount(++infantCount)}
               decrement={() => childCount > 0 && setInfantCount(--infantCount)}
        />
        <Textarea label="Not" value={note} onChange={e => setNote(e.target.value)} name="note" />
        <input style={{ display: "none" }} name="tourName" value="jeep safari" className="mt-2" />
        <div className="d-grid mt-2">
          <Button variant="primary" size="lg" type="submit">Book Now</Button>
        </div>
      </div>
    </form>
  );
};

export default BookNow;