const Checkout = () => {
  return <div>
    <ul>

    <li>
      <input
    fluid
    name="firstname" 
    label='First Name'
    placeholder='John'
/>
</li>
<li>
<input 
    fluid 
    name='lastname' 
    label='Last name' 
    placeholder='Smith'
/>
</li>
<li>
<input 
    fluid 
    name='email'
    label='Email' 
    placeholder='xyz@example.com'
    type='email'  
/>
</li>
</ul>
<ul>
<group>
    <input 
        width={10} 
        name='street' 
        label='Address' 
        placeholder='122 Example St'   
    />
    <select
        width={6} 
        name='country' 
        label='Select Country' 
        // options={countries}
    />
</group>
<group>
    <input 
        width={6} 
        name='town_city' 
        label='Town/City' 
        placeholder='Las Vegas' 
    />
    <select
        width={6} 
        label='County/State/Province/Territory' 
        placeholder='Search ...'
        name='county_state' 
        search 
        fluid
        // options={getCountryInfoShipping()}
    />
    <input
        width={4} 
        type='number'
        name='postal_zip_code' 
        label='Zip/Postal' 
        placeholder='00000'
    />
</group>
<input
    width={6} 
    label='County/State/Province/Territory' 
    placeholder='Search ...'
    name='county_state' 
    search 
    fluid
    // options={getCountryInfoShipping()}
/>
</ul>
  </div>;
};

export default Checkout;
