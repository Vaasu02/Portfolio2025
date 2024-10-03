import React, { useState, useEffect } from 'react'
import { CircularText } from './Icons'
import Modal from "@/components/Modal";
import { sendContactForm } from "../lib/api";
import { motion, AnimatePresence } from 'framer-motion';

const initValues = { name: "", email: "", subject: "", message: "" };
const initState = { isLoading: false, error: "", values: initValues };

const HireMe = () => {
  const [showModal, setShowModal] = useState(false);
  const [state, setState] = useState(initState);
  const [touched, setTouched] = useState({});
  const [showSuccessMessage, setShowSuccessMessage] = useState(false);

  const { values, isLoading, error } = state;

  const onBlur = ({ target }) =>
    setTouched((prev) => ({ ...prev, [target.name]: true }));

  const handleChange = ({ target }) =>
    setState((prev) => ({
      ...prev,
      values: {
        ...prev.values,
        [target.name]: target.value,
      },
    }));

  const onSubmit = async (e) => {
    e.preventDefault();
    setState((prev) => ({
      ...prev,
      isLoading: true,
    }));
    try {
      await sendContactForm(values);
      setTouched({});
      setState(initState);
      setShowSuccessMessage(true);
      setTimeout(() => {
        setShowSuccessMessage(false);
        setShowModal(false);
      }, 3000);
    } catch (error) {
      setState((prev) => ({
        ...prev,
        isLoading: false,
        error: error.message,
      }));
    }
  };

  const isFormValid = values.name && values.email && values.subject && values.message;

  return (
    <div className='fixed left-4 bottom-4 flex items-center justify-center overflow-hidden md:right-8 md:left-auto md:top-0 md:bottom-auto md:absolute sm:right-0'>
      <div className='w-48 h-auto flex items-center justify-center relative md:w-24'>
        <CircularText className={"p-1 m-1 fill-dark animate-spin-slow dark:fill-light"} />
        <button onClick={() => setShowModal(true)} className='flex z-10 items-center justify-center absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 bg-dark text-light shadow-md border border-solid border-dark w-20 h-20 rounded-full font-semibold hover:bg-light hover:text-dark
            dark:bg-light dark:text-dark dark:hover:bg-dark hover:dark:text-light hover:dark:border-light
            md:w-12 md:h-12 md:text-[10px]'>
          Hire Me
        </button>
      </div>
      <Modal isVisible={showModal} onClose={() => setShowModal(false)}>
        <div className='flex flex-col h-full w-full bg-gradient-to-br from-blue-100 to-purple-100 dark:from-gray-800 dark:to-gray-900 rounded-lg shadow-xl'>
          <div className='flex-grow overflow-y-auto p-4 sm:p-6'>
            <h2 className='text-center text-3xl font-bold text-gray-800 dark:text-white mb-6'>Let&apos;s Connect</h2>
            {error && (
              <p className="text-red-500 font-semibold text-lg mb-4">{error}</p>
            )}
            <form onSubmit={onSubmit} className="space-y-4">
              <div>
                <label htmlFor="name" className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">Name</label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  value={values.name}
                  onChange={handleChange}
                  onBlur={onBlur}
                  required
                  className={`w-full px-3 py-2 border ${touched.name && !values.name ? 'border-red-500' : 'border-gray-300'} rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent text-gray-900 dark:text-white bg-white dark:bg-gray-700`}
                />
                {touched.name && !values.name && <p className="mt-1 text-xs text-red-500">Required</p>}
              </div>
              <div>
                <label htmlFor="email" className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">Email</label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={values.email}
                  onChange={handleChange}
                  onBlur={onBlur}
                  required
                  className={`w-full px-3 py-2 border ${touched.email && !values.email ? 'border-red-500' : 'border-gray-300'} rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent text-gray-900 dark:text-white bg-white dark:bg-gray-700`}
                />
                {touched.email && !values.email && <p className="mt-1 text-xs text-red-500">Required</p>}
              </div>
              <div>
                <label htmlFor="subject" className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">Subject</label>
                <input
                  type="text"
                  id="subject"
                  name="subject"
                  value={values.subject}
                  onChange={handleChange}
                  onBlur={onBlur}
                  required
                  className={`w-full px-3 py-2 border ${touched.subject && !values.subject ? 'border-red-500' : 'border-gray-300'} rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent text-gray-900 dark:text-white bg-white dark:bg-gray-700`}
                />
                {touched.subject && !values.subject && <p className="mt-1 text-xs text-red-500">Required</p>}
              </div>
              <div>
                <label htmlFor="message" className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">Message</label>
                <textarea
                  id="message"
                  name="message"
                  rows="4"
                  value={values.message}
                  onChange={handleChange}
                  onBlur={onBlur}
                  required
                  className={`w-full px-3 py-2 border ${touched.message && !values.message ? 'border-red-500' : 'border-gray-300'} rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent text-gray-900 dark:text-white bg-white dark:bg-gray-700`}
                ></textarea>
                {touched.message && !values.message && <p className="mt-1 text-xs text-red-500">Required</p>}
              </div>
              <button
                type="submit"
                disabled={isLoading || !isFormValid}
                className={`w-full py-2 px-4 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-blue-600 hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500 ${(isLoading || !isFormValid) ? 'opacity-50 cursor-not-allowed' : ''}`}
              >
                {isLoading ? 'Sending...' : 'Send Message'}
              </button>
            </form>
          </div>
        </div>
      </Modal>
      <AnimatePresence>
        {showSuccessMessage && (
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: 50 }}
            className="fixed bottom-4 right-4 bg-green-500 text-white px-6 py-3 rounded-lg shadow-lg"
          >
            Message sent successfully!
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  )
}

export default HireMe