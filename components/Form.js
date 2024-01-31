import React, { useState } from "react"; 
import { Formik, Form, Field } from 'formik';
import * as Yup from 'yup';
import axios from "axios";

export default function RegisterForm() {

    const [loading, setLoading] = useState(false);
    const [showConfirmation, setShowConfirmation] = useState(false);

    const registerSchema = Yup.object().shape({
        fullName: Yup.string()
            .min(2, 'This information is Too Short!')
            .max(101, 'This information is Too Long!')
            .required('Required'),
        email: Yup.string().email('Invalid email').required('Required')
    });

    const showConfirmationSection = () => {
        return(
            <div style={{ display: "flex", justifyContent: "center", alignItems: "center"}}>
                <div style={{ display: "flex", flexDirection: "column", justifyContent: "center", alignItems: "center"}}>
                    <h3 className="text-green-base-dark font-medium text-lg">Start your Teachcomp journey now!</h3>
                    <a href="/images/about-us-frame.jpeg" download="Teachcomp-1.0.0-alpha"><button className="bg-yellow-base rounded-3xl bg-yellow-base text-green-base-dark active:bg-yellow-base-600 font-bold uppercase text-sm px-6 py-3 shadow hover:shadow-lg outline-none focus:outline-none mr-1 mb-1 ease-linear transition-all duration-150">Download Teachcomp</button></a>
                    <span className="text-sm text-green-base-dark">The installer is 100% safe.</span>
                </div>
            </div>
        )
    }

    return(
        <>   
            { showConfirmation ? showConfirmationSection() :
                <Formik
                    initialValues={{
                        fullName: '',
                        email: ''
                    }}
                    validationSchema={registerSchema}
                    onSubmit={value => {
                        // console.log(values);
                        setLoading(true);
                        //send user data to backend
                        const {data} = axios.post('http://localhost:5000/user', {
                            firstname: value.fullName,
                            email: value.email
                        },{
                            headers: {
                            'Content-Type': 'application/json',
                            Accept: 'application/json',
                            },
                        })
                        .then(function (response) {
                            setLoading(false);
                            setShowConfirmation(true);
                            console.log(" firstname is " + response.data.firstname + " and email is " + response.data.email);
                        })
                        .catch(function (error) {
                            setLoading(false);
                            console.log("the error is " + error);
                        });

                    }}
                >
                    {({ errors, touched }) => (
                        <Form className="flex flex-col space-y-3.5 ">
                            <Field name="fullName" type="text" className="rounded-3xl" placeholder="Your Name or Name of School"/>
                            {errors.fullName && touched.fullName ? (
                                <div style={{color: "red"}}>{errors.fullName}</div>
                            ) : null}
                            <Field name="email" type="email" className="rounded-3xl" placeholder="Your Email or School Email" />
                            {errors.email && touched.email ? (
                                <div style={{color: "red"}}>{errors.email}</div> ) : null} 
                            <button type="submit" className="bg-yellow rounded-3xl  text-green-base-dark active:bg-yellow-base font-bold uppercase text-sm px-6 py-3 shadow hover:shadow-lg outline-none focus:outline-none mr-1 mb-1 ease-linear transition-all duration-150 bg-yellow-base">{loading ? "Submitting...": "Submit"}</button>
                        </Form> 
                    )}
                </Formik>
            }       
        </>
    )
}

