import React, { useRef } from 'react'
import Input from '../../components/input/Input'
import Count from '../../components/count/Count'
import { Button } from 'react-bootstrap'
import emailjs from '@emailjs/browser'
import Textarea from '../../components/textarea/Textarea'
import Constants from '../../components/notification-toast/helper'
import { notificationToast } from '../../components/notification-toast/NotificationToast'
import SelectDate from '../../components/date-picker/DatePicker'

const BookNow = ({ adultPrice, childPrice, infantPrice }) => {
  let [adultCount, setAdultCount] = React.useState(0)
  let [childCount, setChildCount] = React.useState(0)
  let [infantCount, setInfantCount] = React.useState(0)
  const [nameSurname, setNameSurname] = React.useState('')
  const [phone, setPhone] = React.useState('')
  const [email, setEmail] = React.useState('')
  const [hotelName, setHotelName] = React.useState('')
  const [roomNumber, setRoomNumber] = React.useState('')
  const [note, setNote] = React.useState('')
  const [price, setPrice] = React.useState(0)

  const form = useRef()

  const handleOnBookNowClick = (e) => {
    e.preventDefault() // Prevents default refresh by the browser
    debugger
    emailjs
      .send(
        `service_a1s6mv4`,
        'template_r4agj75',
        {
          nameSurname,
          tourName: 'Jeep',
          phone,
          email,
          adultCount,
          childCount,
          infantCount,
          hotelName,
          roomNumber,
          note
        },
        'user_W8PNoQrAIlO8W9Q8t9NGH'
      )
      .then(
        (result) => {
          notificationToast(
            Constants.SUCCESS,
            'Bilgileriniz bize ulaşmıştır, en kısa sürede iletişime geçeceğiz.'
          )
        },
        (error) => {
          notificationToast(Constants.ERROR, 'Hata oluştu, lütfen tekrar deneyiniz.')
        }
      )
  }

  const incrementAdultCount = () => {
    const totalPrice = adultPrice + price
    setPrice(totalPrice)
    setAdultCount(adultCount + 1)
  }

  const decrementAdultCount = () => {
    if (adultCount) {
      const totalPrice = price - adultPrice
      setAdultCount(adultCount - 1)
      setPrice(totalPrice)
    }
  }

  const incrementChildCount = () => {
    const totalPrice = childPrice + price
    setPrice(totalPrice)
    setChildCount(childCount + 1)
  }

  const decrementChildCount = () => {
    if (childCount) {
      const totalPrice = price - childPrice
      setChildCount(childCount - 1)
      setPrice(totalPrice)
    }
  }

  const incrementInfantCount = () => {
    const totalPrice = infantPrice + price
    setPrice(totalPrice)
    setInfantCount(infantCount + 1)
  }

  const decrementInfantCount = () => {
    if (infantCount) {
      const totalPrice = price - infantPrice
      setInfantCount(infantCount - 1)
      setPrice(totalPrice)
    }
  }

  return (
    <form ref={form} onSubmit={handleOnBookNowClick}>
      <div className="book-now">
        <div className="book-now__title">
          <h3>Rezervasyon Yap</h3>
        </div>
        <div className="book-now__price mt-2 mb-2">
          <span>Toplam Tutar: {price}</span>
        </div>
        <div className="book-now__customer-information mt-2">
          <Input
            name="nameSurname"
            label="Ad Soyad"
            value={nameSurname}
            onChange={(e) => setNameSurname(e.target.value)}
          />
          <Input
            name="phone"
            label="Telefon"
            value={phone}
            onChange={(e) => setPhone(e.target.value)}
          />
          <Input
            name="email"
            label="E-mail"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
          <Input
            name="hotelName"
            label="Otel Adı"
            value={hotelName}
            onChange={(e) => setHotelName(e.target.value)}
          />
          <Input
            name="roomNumber"
            label="Oda Numarası"
            value={roomNumber}
            onChange={(e) => setRoomNumber(e.target.value)}
          />
        </div>
        <Count
          value={adultCount}
          increment={() => incrementAdultCount()}
          name="adultCount"
          decrement={() => decrementAdultCount()}
        />
        <Count
          value={childCount}
          title="Çocuk"
          description="2-12 yaş"
          increment={() => incrementChildCount()}
          name="childCount"
          decrement={() => decrementChildCount()}
        />
        <Count
          value={infantCount}
          title="Bebek"
          description="0-2 yaş"
          name="infantCount"
          increment={() => incrementInfantCount()}
          decrement={() => decrementInfantCount()}
        />
        <div className="mt-2 mb-2">
          <SelectDate />
        </div>
        <Textarea label="Not" value={note} onChange={(e) => setNote(e.target.value)} name="note" />
        <input style={{ display: 'none' }} name="tourName" value="jeep safari" className="mt-2" />
        <div className="d-grid mt-2">
          <Button variant="primary" size="lg" type="submit">
            Book Now
          </Button>
        </div>
      </div>
    </form>
  )
}

export default BookNow
