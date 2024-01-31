import { useState } from 'react'
import { useFlutterwave, closePaymentModal } from 'flutterwave-react-v3';
import Image from 'next/image';
import { Formik, Form, Field } from 'formik';
import * as Yup from 'yup';



const Pricing = () => {

  const price = 39900;
  const [numberOfKeys, setNumberOfKeys] = useState();
  const [keyPrice, setKeyPrice] = useState();

  const sumAmount = () => {
    return (price * numberOfKeys)
  }

  //Flutterwave configuration
  const config = {
    public_key: 'FLWPUBK_TEST-070c7557f0edc4b5b16f9134057eef25-X',
    tx_ref: Date.now(),
    amount: price,
    currency: 'NGN',
    payment_options: 'card,mobilemoney,ussd',
    customer: {
      email: 'user@gmail.com',
      phone_number: '07015994605',
      name: 'john doe',
    },
    customizations: {
      title: 'Teachcomp',
      description: 'Teachcomp License Key Purchase',
      logo: 'https://st2.depositphotos.com/4403291/7418/v/450/depositphotos_74189661-stock-illustration-online-shop-log.jpg',
    },
  };

  //handle num key update
  const handleSetKey = (keyprice, value) => {
    setKeyPrice(value * keyprice);
    setNumberOfKeys(value);
    console.log(keyPrice);
    console.log(numberOfKeys);
  }

  //Flutterwave hooks
  const handleFlutterPayment = useFlutterwave(config);

  //
  // const noOfLicenseKeySchema = Yup.object().shape({
  //   noOflicenseKey: Yup.string()
  //       .min(1, 'This number is too short!')
  //       .max(1000000, 'This number is too long!')
  //       .required('Required'),
  // });

  // console.log(numberOfKeys)
  return (
    <div className="send-to-back ">
        <section className="min-h-[70vh] p-10 relative overflow-hidden z-0 flex flex-col justify-center">
      
        <Image alt='design rings' className="absolute top-0 left-0 send-to-back" src="/images/subtract.svg"  />
        <Image alt='design rings' className="absolute top-0 right-0 send-to-back" src="/images/subtract-1.svg" />
        <div className="text-center max-w-3xl mx-auto">
            <div className=''>

            <h1 className="text-4xl font-semibold">Enjoy full Access</h1>
            <p className="tracking-wider">Pay for only what you need with our flexible pricing calculator.</p>
            </div>


            {/* <Formik
                    initialValues={{
                        keyPrice: '',
                    }}
                    validationSchema={noOfLicenseKeySchema}
                    
                >
                    {({ errors, touched }) => (
                        <Form className="flex flex-col space-y-3.5 ">
                            <Field name="noOfKey" type="number" className="rounded-3xl" placeholder="Number of License Key"/>
                            {errors.noOflicenseKey && touched.noOflicenseKey ? (
                                <div style={{color: "red"}}>{errors.noOflicenseKey}</div>
                            ) : null}
                             <div className="rounded-full bg-slate-100 border-slate-300 border shadow-inner w-48 py-2 cursor-not-allowed ">{numberOfKeys * keyPrice || "Price"}</div>
                            <button type="submit" className="bg-yellow-base font-bold uppercase ease-linear transition-all duration-150 shadow hover:shadow-lg  text-green-base-darker focus:outline-none w-full rounded-full py-3 hover:bg-green-base"
                            onSubmit={value => {
                              console.log(value);
                              handleFlutterPayment({
                                callback: (response) => {
                                  console.log(response);
                                  closePaymentModal();
                                },
                                onClose: () => {}
                              });
                            }}
                            >Click to Buy</button>
                        </Form> 
                    )}
                </Formik> */}

            <form >
              <div className='flex flex-wrap flex-col md:flex-row mx-auto my-6 justify-center md:space-x-8 space-y-6 md:space-y-0 items-center'>
                <input onChange={(e)=> handleSetKey(price, e.target.value)} value={numberOfKeys} type="number" className="rounded-full border-slate-300 shadow-inner" name="number-of-keys" placeholder="Number of License keys" required/>
                
                <div className="rounded-full bg-slate-100 border-slate-300 border shadow-inner w-48 py-2 cursor-not-allowed ">{numberOfKeys * price || "Price"}</div>
              </div>
              
              <button type='submit' className="bg-yellow-base font-bold uppercase ease-linear transition-all duration-150 shadow hover:shadow-lg  text-green-base-darker focus:outline-none w-full rounded-full py-3 hover:bg-green-base "
              onClick={(e) => {
                e.preventDefault();
                handleFlutterPayment({
                  callback: (response) => {
                    console.log(response);
                    closePaymentModal();
                  },
                  onClose: () => {}
                });
              }}
              >Click to Buy</button>
            </form>
        </div>
        </section>
    </div>
  )
}

export default Pricing
