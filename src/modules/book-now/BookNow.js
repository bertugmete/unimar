import React, { useRef } from 'react'
import Input from '../../components/input/Input'
import Count from '../../components/count/Count'
import { Button } from 'react-bootstrap'
import emailjs from '@emailjs/browser'
import Textarea from '../../components/textarea/Textarea'
import Constants from '../../components/notification-toast/helper'
import { notificationToast } from '../../components/notification-toast/NotificationToast'
import SelectDate from '../../components/date-picker/DatePicker'
import { useTranslation } from 'react-i18next'

const BookNow = ({ adultPrice, childPrice, infantPrice, tourType }) => {
  let [adultCount, setAdultCount] = React.useState(0)
  let [childCount, setChildCount] = React.useState(0)
  let [infantCount, setInfantCount] = React.useState(0)
  const [nameSurname, setNameSurname] = React.useState('')
  const [phone, setPhone] = React.useState('')
  const [email, setEmail] = React.useState('')
  const [hotelName, setHotelName] = React.useState('')
  const [roomNumber, setRoomNumber] = React.useState('')
  const [date, setDate] = React.useState(new Date())
  const [note, setNote] = React.useState('')
  const [price, setPrice] = React.useState(0)
  const { t } = useTranslation()

  const form = useRef()

  const handleOnBookNowClick = (e) => {
    e.preventDefault()
    const formattedDate = date.toLocaleDateString('tr-TR').replace(/ /g, '-')
    debugger
    emailjs
      .send(
        `service_a1s6mv4`,
        'template_r4agj75',
        {
          nameSurname,
          tourName: tourType,
          phone,
          email,
          adultCount,
          childCount,
          infantCount,
          hotelName,
          roomNumber,
          date: formattedDate,
          note
        },
        'user_W8PNoQrAIlO8W9Q8t9NGH'
      )
      .then(
        (result) => {
          notificationToast(Constants.SUCCESS, t('components.bookNow.successMessage'))
        },
        (error) => {
          notificationToast(Constants.ERROR, t('components.bookNow.errorMessage'))
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
          <h3>{t('components.bookNow.makeReservation')}</h3>
        </div>
        <div className="book-now__price mt-2 mb-2">
          <span>
            {t('components.bookNow.totalPrice')}: {price}
          </span>
        </div>
        <div className="book-now__customer-information mt-2">
          <Input
            name="nameSurname"
            label={t('components.bookNow.nameSurname')}
            value={nameSurname}
            onChange={(e) => setNameSurname(e.target.value)}
          />
          <Input
            name="phone"
            label={t('components.bookNow.phone')}
            value={phone}
            onChange={(e) => setPhone(e.target.value)}
          />
          <Input
            name="email"
            label={t('components.bookNow.email')}
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
          <Input
            name="hotelName"
            label={t('components.bookNow.hotelName')}
            value={hotelName}
            onChange={(e) => setHotelName(e.target.value)}
          />
          <Input
            name="roomNumber"
            label={t('components.bookNow.roomNumber')}
            value={roomNumber}
            onChange={(e) => setRoomNumber(e.target.value)}
          />
        </div>
        <Count
          title={t('components.bookNow.adult.title')}
          description={t('components.bookNow.adult.description')}
          value={adultCount}
          increment={() => incrementAdultCount()}
          name="adultCount"
          decrement={() => decrementAdultCount()}
        />
        <Count
          value={childCount}
          title={t('components.bookNow.children.title')}
          description={t('components.bookNow.children.description')}
          increment={() => incrementChildCount()}
          name="childCount"
          decrement={() => decrementChildCount()}
        />
        <Count
          value={infantCount}
          title={t('components.bookNow.infant.title')}
          description={t('components.bookNow.infant.description')}
          name="infantCount"
          increment={() => incrementInfantCount()}
          decrement={() => decrementInfantCount()}
        />
        <div className="mt-2 mb-2">
          <SelectDate
            onChange={(date) => {
              setDate(date)
            }}
            value={date}
          />
        </div>
        <Textarea
          label={t('components.bookNow.note')}
          value={note}
          onChange={(e) => setNote(e.target.value)}
          name="note"
        />
        <input style={{ display: 'none' }} name="tourName" value="jeep safari" className="mt-2" />
        <div className="d-grid mt-2">
          <Button variant="primary" size="lg" type="submit">
            {t('components.bookNow.makeReservation')}
          </Button>
        </div>
      </div>
    </form>
  )
}

export default BookNow
