import React, { useState } from 'react';

const FormComponent = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: '',
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await fetch('https://stg-api-pay.bet9ja.com/paymentshubapi/WalletTransferV1/Request', {
        method: 'POST',
        headers: {
          'accountid': 1, //sample accountid,
          'username': 'testUs3rnam3', //sample username
          'password': 'testP4ssw0rd', //sample password,
          'timestamp': '20160529235959',
          'operation': 'CustomerValidation',
          'hash': 'N2Y4NWNiMTU3NDQ5OWEyZDE3MjY1MWRmMWEzYzk4NDZmNDRiZGIyNjNmOGMzNTlhMGYwODZlOWRiYTBjMWYwOQ==',
          'Content-Type': 'application/x-www-form-urlencoded',
        },
        body: JSON.stringify(formData),
      });
      if (response.ok) {
        console.log('Form submitted successfully');
        // Clear the form
        setFormData({
          clientId: '26691',
          customerPhone: '2348102416606',
        });
      } else {
        console.error('Form submission failed');
      }
    } catch (error) {
      console.error('Error:', error);
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <div>
        <label htmlFor="message">clientId:</label>
        <textarea
          id="message"
          name="message"
          value={formData.clientId}
          onChange={handleChange}
        ></textarea>
      </div>
      <div>
        <label htmlFor="message">customerPhone:</label>
        <textarea
          id="message"
          name="message"
          value={formData.customerPhone}
          onChange={handleChange}
        ></textarea>
      </div>
      <button type="submit">Submit</button>
    </form>
  );
};

export default FormComponent;
