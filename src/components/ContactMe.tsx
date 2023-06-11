'use client'
import React from 'react'
import { PhoneIcon, MapPinIcon , EnvelopeIcon} from '@heroicons/react/24/solid'
import { useForm, SubmitHandler } from "react-hook-form";

type Props = {}
type FormValues = {
    name: string;
    email: string;
    subject: string;
    message: string;
};

const ContactMe = ({}: Props) => {
  const { register, handleSubmit } = useForm<FormValues>();
  const onSubmit: SubmitHandler<FormValues> = formData => console.log(formData);
  return (
    <div className='h-screen relative flex flex-col justify-evenly items-center text-center md:text-left md:flex-row px-10 max-w-7xl mx-auto'>
      <h3 className='absolute top-24 uppercase tracking-[20px] text-gray-500 text-2xl'>
       Contact
      </h3>
      <div className='flex flex-col space-y-10'>
        <h4 className='text-4xl font-semibold text-center'>
            I have got just what you need,{' '}
            <span className='underline decoration-[#F7AB0A]/50'>Lets Talk</span>
        </h4>

        <div className='space-y-5'>
            <div className='flex items-center space-x-5 justify-center'>
                <PhoneIcon className='text-[#F7AB0A] h-7 w-7 animate-pulse'/>
                <p className='text-2xl'>+123456789</p>
            </div>
            <div className='flex items-center space-x-5 justify-center'>
                <EnvelopeIcon className='text-[#F7AB0A] h-7 w-7 animate-pulse'/>
                <p className='text-2xl'>ranakotisrk@gmail.com</p>
            </div>
            <div className='flex items-center space-x-5 justify-center'>
                <MapPinIcon className='text-[#F7AB0A] h-7 w-7 animate-pulse'/>
                <p className='text-2xl'>lelo address lelo</p>
            </div>
        </div>

        <form onSubmit={handleSubmit(onSubmit)}
        className='flex flex-col space-y-2 w-fit mx-auto'>
            <div className='flex space-x-2'>
                <input {...register('name')}placeholder='Name' type='text' className='contactInput'/>
                <input {...register('email')}placeholder='Email' type='email' className='contactInput'/>
            </div>
            <input {...register('subject')}placeholder='Subject' type='text' className='contactInput'/>
            <textarea{...register('message')} placeholder='Message' className='contactInput'/>
            <button type='submit' className='px-10 py-5 rounded-md bg-[#F7AB0A] text-black text-lg font-bold'>Submit</button>
        </form>
      </div>
    </div>
  )
}

export default ContactMe
