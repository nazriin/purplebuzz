import React from 'react'
import '../pages/contact.scss'
import { BiNews } from 'react-icons/bi'
import { useFormik } from 'formik'
import axios from 'axios'
import * as Yup from 'yup'
const Contact = () => {
  const validationSchema=Yup.object({
    name:Yup.string().min(3,"qisadir").required('ad yazin'),
    email:Yup.string().email().required('email yazin'),
    phone: Yup.string()
    .matches(/^(\+994|0)(50|51|55|70|77|99)\d{7}$/, "duzgun nomre yazin")
    .required("telefon nomresi yazin"),
    company:Yup.string().min(2,'qisadir').required('company name yazin'),
    subject:Yup.string().min(2,'qisadir').required('subject yazin'),
    message:Yup.string().min(2,'qisadir').required('message yazin'),
  })

  const formik=useFormik({
    initialValues:{
      name:'',
      email:'',
      phone:'',
      company:'',
      subject:'',
      message:'',
    },
    validationSchema,
    onSubmit:(values)=>{
      axios.post('https://northwind.vercel.app/api/categories',values)
      formik.resetForm();
    },
  })

  return (
    <>
    <div className="contact">
     <div className="contacttxt">
      <h2>Contact</h2>
      <span>Elit, sed do eiusmod tempor</span>
      <p>Vector illustration is from StorySet. Incididunt ut labore et dolore magna aliqua. Quis ipsum suspendisse ultrices gravida.</p>
     </div>
     <div className="contactimg"><img src="https://themewagon.github.io/purple-buzz/assets/img/banner-img-01.svg" alt="" /></div>
    </div>

    <div className="formik">
      <div className="formikicons">
        <div className="iconcard">
          <div className="icon"><BiNews /></div>
          <div className="icontxt"> <h3>Media Contact</h3>
           <span>Mr.John Doe</span>
           <p>010-020-0340</p></div>
          
        </div>
        <div className="iconcard">
          <div className="icon"><BiNews /></div>
          <div className="icontxt"> <h3>Media Contact</h3>
           <span>Mr.John Doe</span>
           <p>010-020-0340</p></div>
          
        </div>
        <div className="iconcard">
          <div className="icon"><BiNews /></div>
          <div className="icontxt"> <h3>Media Contact</h3>
           <span>Mr.John Doe</span>
           <p>010-020-0340</p></div>
          
        </div>
      </div>
      <div className="formikform">
         <form onSubmit={formik.handleSubmit}>
          <div className="nameemail">
          <input id='name' name='name' type="text" placeholder='name' {...formik.getFieldProps('name')} />
          {formik.touched.name && formik.errors.name && (
            <div>{formik.errors.name}</div>
          )}
          <input id='name' name='name' type="email" placeholder='email' {...formik.getFieldProps('email')} />
          {formik.touched.email && formik.errors.email && (
            <div>{formik.errors.email}</div>
          )}
          </div>
          <div className="phonecompany">
          <input id='phone' name='name' type="text" placeholder='phone' {...formik.getFieldProps('phone')} />
          {formik.touched.phone && formik.errors.phone && (
            <div>{formik.errors.phone}</div>
          )}
           <input id='phone' name='name' type="text" placeholder='company' {...formik.getFieldProps('company')} />
          {formik.touched.company && formik.errors.company && (
            <div>{formik.errors.company}</div>
          )}
          </div>
          <input id='subject' name='name' type="text" placeholder='subject' {...formik.getFieldProps('subject')} />
          {formik.touched.subject && formik.errors.subject && (
            <div>{formik.errors.subject}</div>
          )}
           <textarea id='message' name='name' type="text" placeholder='message' {...formik.getFieldProps('message')} />
          {formik.touched.message && formik.errors.message && (
            <div>{formik.errors.message}</div>
          )}
          <button type='submit'>submit</button>
         </form>
      </div>
    </div>
    </>
  )
}

export default Contact